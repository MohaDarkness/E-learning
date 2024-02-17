import React from 'react'
import Link from 'antd/es/typography/Link'
import ReactLoading from "react-loading";

const LoadingPage = () => {
  return (
    <div className="main-wrapper">
        <div className='col-lg-12 col-md-12 d-flex align-items-center' style={{justifyContent: 'center', marginTop:'10rem'}}>
        <ReactLoading type="bubbles" color="#2e74b4"
                height={'13rem'} width={'13rem'} />
        </div>
    </div>

  )
}
export default LoadingPage