import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Modal, Dropdown, Button, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { storage } from "./firebase";
import { ref, uploadBytes, listAll, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";

import FeatherIcon from "feather-icons-react";
import Header from "../../Header/Header";
import SideBar from "../../SideBar/SideBar";
import Footer from "../../Footer/Footer";

const SectionMaterial = () => {
  const { sectionId } = useParams();
  const [syllabusFilesList, setSyllabusFilesList] = useState([]);
  const [slidesFilesList, setSlidesFilesList] = useState([]);
  const [othersFilesList, setOthersFilesList] = useState([]);
  const syllabusListRef = ref(storage, `${sectionId}/Syllabus/`);
  const slidesListRef = ref(storage, `${sectionId}/Slides/`);
  const othersListRef = ref(storage, `${sectionId}/Others/`);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    if (formData.file == null) {
      setFormData({ section: "", data: "" });
      toggleModal();
      return;
    }

    const fileRef = ref(
      storage,
      `${sectionId}/${formData.section}/${formData.data}.${formData.file.name
        .split(".")
        .at(-1)}--BigFiller123456${v4()}`
    );
    uploadBytes(fileRef, formData.file)
      .then(() => {
        alert("file uploaded");
      })
      .catch(() => {
        alert("something went wrong");
      });
  };

  useEffect(() => {
    listAll(syllabusListRef)
      .then((res) => {
        console.log(res);
        res.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            setSyllabusFilesList((prev) => {
              return [
                ...prev,
                {
                  name: item.name.split("--BigFiller123456")[0],
                  type: item.name
                    .split("--BigFiller123456")[0]
                    .split(".")
                    .at(-1),
                  section: "Syllabus",
                  url: url,
                },
              ];
            });
          });
        });
      })
      .then(() => {
        console.log(syllabusFilesList);
      });
    listAll(slidesListRef)
      .then((res) => {
        // console.log(res);
        res.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            // console.log("this is url: ");
            // console.log(url);
            setSlidesFilesList((prev) => {
              return [
                ...prev,
                {
                  name: item.name.split("--BigFiller123456")[0],
                  type: item.name
                    .split("--BigFiller123456")[0]
                    .split(".")
                    .at(-1),
                  section: "Slides",
                  url: url,
                },
              ];
            });
          });
        });
      })
      .then(() => {
        // console.log(slidesFilesList);
      });

    listAll(othersListRef)
      .then((res) => {
        // console.log(res);
        res.items.forEach((item) => {
          getDownloadURL(item).then((url) => {
            // console.log("this is url: ");
            // console.log(url);
            setOthersFilesList((prev) => {
              return [
                ...prev,
                {
                  name: item.name.split("--BigFiller123456")[0],
                  type: item.name
                    .split("--BigFiller123456")[0]
                    .split(".")
                    .at(-1),
                  section: "Others",
                  url: url,
                },
              ];
            });
          });
        });
      })
      .then(() => {
        // console.log(othersFilesList);
      });
  }, []);

  //Dummy Data
  const syllabusFiles = [
    { name: "dummy.pdf", type: "pdf", section: "syllabus" },
    { name: "Syllabus.xlsx", type: "excel", section: "syllabus" },
  ];

  const slideFiles = [
    { name: "Slide1.pdf", type: "pdf", section: "slides" },
    { name: "Slide2.pdf", type: "pdf", section: "slides" },
  ];

  const otherFiles = [
    { name: "File1.jpg", type: "image", section: "otherFiles" },
    { name: "File2.jpg", type: "image", section: "otherFiles" },
    { name: "File3.docx", type: "document", section: "otherFiles" },
  ];

  // Use States
  const [showModal, setShowModal] = useState(false);
  const [formData, setFormData] = useState({
    section: "",
    data: "",
    file: null,
  });

  const toggleModal = () => setShowModal(!showModal);

  // Action Hanlers

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setFormData({ ...formData, file: e.target.files[0] });
  };

  return (
    <div className="main-wrapper">
      <Header />
      <SideBar />

      <div className="container mt-5 page-wrapper">
        <div className="row">
          <div className="col-lg-12">
            <div className="page-header">
              <div className="row align-items-center">
                <div className="col text-end float-start ms-auto">
                  <button className="btn btn-primary" onClick={toggleModal}>
                    <i className="fas fa-plus" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Syllabus</h5>
                <ul className="list-group">
                  {syllabusFilesList.map((file, index) => (
                    <li
                      key={index}
                      className="list-group-item d-flex align-items-center  border-0"
                    >
                      {file.type === "pdf" && (
                        <i className="fas fa-file-pdf"></i>
                      )}
                      <a className="ms-2" href={file.url} download>
                        {file.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Slides</h5>
                <ul className="list-group">
                  {slidesFilesList.map((file, index) => (
                    <li
                      key={index}
                      className="list-group-item d-flex align-items-center  border-0"
                    >
                      {file.type === "pdf" && (
                        <i className="fas fa-file-pdf"></i>
                      )}
                      <a
                        className="ms-2"
                        href={`https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf`}
                        download
                      >
                        {file.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-12">
            <div className="card mb-4">
              <div className="card-body">
                <h5 className="card-title">Others</h5>
                <ul className="list-group">
                  {othersFilesList.map((file, index) => (
                    <li
                      key={index}
                      className="list-group-item d-flex align-items-center  border-0"
                    >
                      {file.type === "pdf" && (
                        <i className="fas fa-file-pdf mr-2"></i>
                      )}
                      <a
                        className="ms-2"
                        href={`https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf`}
                        download
                      >
                        {file.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Modal show={showModal} onHide={toggleModal}>
        <Modal.Header closeButton>
          <Modal.Title>Add Data</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="section">
              <Form.Label>Select Section</Form.Label>
              <Form.Control
                required
                as="select"
                name="section"
                value={formData.section}
                onChange={handleChange}
              >
                <option value="">Select Section</option>
                <option value="Syllabus">Syllabus</option>
                <option value="Slides">Slides</option>
                <option value="Others">Others</option>
              </Form.Control>
            </Form.Group>
            <Form.Group className="mb-3" controlId="data">
              <Form.Label>Enter Text</Form.Label>
              <Form.Control
                required
                type="text"
                placeholder="Enter Text"
                name="data"
                value={formData.data}
                onChange={handleChange}
              />
            </Form.Group>
            <Form.Group controlId="fileUpload">
              <Form.Label>Upload File</Form.Label>
              <Form.Control
                type="file"
                name="file"
                onChange={handleFileChange}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      <Footer />
    </div>
  );
};

export default SectionMaterial;
