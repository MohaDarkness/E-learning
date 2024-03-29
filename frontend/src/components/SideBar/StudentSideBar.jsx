import React, { useEffect, useState } from "react";
import { Link, withRouter } from "react-router-dom";

import FeatherIcon from "feather-icons-react";
import Scrollbars from "react-custom-scrollbars-2";
// import { LogoImg, LogoSmallImg } from "../_components/imagepath";

const Sidebar = (props) => {
  const [isSideMenu, setSideMenu] = useState("");
  const [isSideMenuLevel, setSideMenuLevel] = useState("");
  const [isSideMenuLevel2, setSideMenuLevel2] = useState("");

  const toggleSidebar = (value) => {
    console.log(value);
    setSideMenu(value);
  };
  const toggleSidebar1 = (value) => {
    console.log(value);
    setSideMenuLevel(value);
  };
  const toggleSidebar2 = (value) => {
    console.log(value);
    setSideMenuLevel2(value);
  };

  useEffect(() => {
    function handleMouseOver(e) {
      e.stopPropagation();
      if (
        document.body.classList.contains("mini-sidebar") &&
        document.querySelector("#toggle_btn").offsetParent !== null
      ) {
        var targ = e.target.closest(".sidebar");
        if (targ) {
          document.body.classList.add("expand-menu");
          document
            .querySelectorAll(".subdrop + ul")
            .forEach((ul) => (ul.style.display = "block"));
        } else {
          document.body.classList.remove("expand-menu");
          document
            .querySelectorAll(".subdrop + ul")
            .forEach((ul) => (ul.style.display = "none"));
        }
        return false;
      }
    }

    document.addEventListener("mouseover", handleMouseOver);

    return () => {
      document.removeEventListener("mouseover", handleMouseOver);
    };
  }, []);

  useEffect(() => {
    $(document).on("change", ".sidebar-type-four input", function () {
      if ($(this).is(":checked")) {
        $(".sidebar").addClass("sidebar-eight");
        $(".sidebar-menu").addClass("sidebar-menu-eight");
        $(".menu-title").addClass("menu-title-eight");
        $(".header").addClass("header-eight");
        $(".header-left-two").addClass("header-left-eight");
        $(".user-menu").addClass("user-menu-eight");
        $(".dropdown-toggle").addClass("dropdown-toggle-eight");
        $(".white-logo").addClass("show-logo");
        $(
          ".header-one .header-left-one .logo:not(.logo-small), .header-five .header-left-five .logo:not(.logo-small)"
        ).addClass("hide-logo");
        $(".header-two .header-left-two .logo:not(.logo-small)").removeClass(
          "hide-logo"
        );
        $(".header-two .header-left-two .dark-logo").removeClass("show-logo");
      } else {
        $(".sidebar").removeClass("sidebar-eight");
        $(".sidebar-menu").removeClass("sidebar-menu-eight");
        $(".menu-title").removeClass("menu-title-eight");
        $(".header").removeClass("header-eight");
        $(".header-left-two").removeClass("header-left-eight");
        $(".user-menu").removeClass("user-menu-eight");
        $(".dropdown-toggle").removeClass("dropdown-toggle-eight");
        $(".white-logo").removeClass("show-logo");
        $(
          ".header-one .header-left-one .logo:not(.logo-small), .header-five .header-left-five .logo:not(.logo-small)"
        ).removeClass("hide-logo");
      }
    });
  }, []);

  let pathName = props.location.pathname;
  return (
    <>
      <div className="sidebar" id="sidebar">
        <Scrollbars
          autoHide
          autoHideTimeout={1000}
          autoHideDuration={200}
          autoHeight
          autoHeightMin={0}
          autoHeightMax="95vh"
          thumbMinSize={30}
          universal={false}
          hideTracksWhenNotNeeded={true}
        >
          <div className="sidebar-inner slimscroll">
            <div id="sidebar-menu" className="sidebar-menu">
              {/* Main Menu */}
              <ul>
                <li>
                  <Link
                    to="/studentdashboard"
                    className={`${
                      "/studentdashboard" === pathName ? "active" : ""
                    }`}
                  >
                    <FeatherIcon icon="grid" /> Student Dashboard
                  </Link>
                </li>

                <li
                  className={`${
                    "/courses" === pathName ? "active submenu" : "submenu"
                  }`}
                >
                  <Link
                    to="/courses"
                    className={isSideMenu == "Subjects" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(isSideMenu == "Subjects" ? "" : "Subjects")
                    }
                  >
                    <i className="fas fa-book-reader" /> <span> Courses</span>{" "}
                  </Link>
                </li>

                <li>
                  <Link
                    to="/students"
                    className={`${"/students" === pathName ? "active" : ""}`}
                  >
                    <i className="fas fa-graduation-cap" />
                    <span>Student List</span>
                  </Link>
                </li>

                <li
                  className={`${
                    "/teacherslist" === pathName ? "active submenu" : "submenu"
                  }`}
                >
                  <Link
                    to="/teacherslist"
                    className={isSideMenu == "Teachers" ? "subdrop" : ""}
                    onClick={() =>
                      toggleSidebar(isSideMenu == "Teachers" ? "" : "Teachers")
                    }
                  >
                    <i className="fas fa-chalkboard-teacher" />{" "}
                    <span> Teachers List</span>
                  </Link>
                </li>
              </ul>
              {/* /Main Menu*/}
              {/* Management */}
              <ul>
                <li
                  className={`${
                    "/holiday" === pathName || "/addholiday" === pathName
                      ? "active"
                      : ""
                  }`}
                >
                  <Link to="/holiday">
                    <i className="fas fa-holly-berry" /> <span>Holiday</span>
                  </Link>
                </li>

                <li
                  className={`${
                    "/exam" === pathName ||
                    "/addexam" === pathName ||
                    "/editexam" === pathName
                      ? "active"
                      : ""
                  }`}
                >
                  <Link to="/exam">
                    <i className="fas fa-clipboard-list" />{" "}
                    <span>Exam list</span>
                  </Link>
                </li>

                <li
                  className={`${
                    "/timetable" === pathName ||
                    "/addtimetable" === pathName ||
                    "/edittimetable" === pathName
                      ? "active"
                      : ""
                  }`}
                >
                  <Link to="/timetable">
                    <i className="fas fa-table" /> <span>Time Table</span>
                  </Link>
                </li>
              </ul>
              {/* /Management */}
            </div>
          </div>
        </Scrollbars>
      </div>
    </>
  );
};
export default withRouter(Sidebar);
