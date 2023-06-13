import React from "react";
import Link from "next/link";
import Image from 'next/image'

const Services5 = () => {
  return (
    <section className="services-col section-padding">
      <div className="container">
        <div className="main-header text-center">
          <h3>การบริการ</h3>
          <div className="tex-bg">Services</div>
        </div>
        <div className="row bord-box wow fadeInUp">
          <div className="col-lg-4 col-md-5 item-bx">
            <span className="icon flaticon-home"></span>
            <h5 className="mb-10">Site Survey</h5>
            <h6 className="mb-5">สำรวจพื้นที่หน้างาน</h6>
            <Link href="/service/sitesurvey" passHref>
              <h5>
                <a className="more mt-30 do-detail">
                  <button className="btn btn-outline-light">
                    <span>ดูรายละเอียด &nbsp;<i className="fas fa-chevron-right"></i></span>
                  </button>
                </a>
              </h5>
            </Link>
          </div>
          <div className="col-lg-4 col-md-5 item-bx">
            <span className="icon flaticon-interior-design"></span>
            <h5 className="mb-10">Furniture Layout Plan</h5>
            <h6 className="mb-5">จัดวางฟังก์ชันเฟอร์นิเจอร์</h6>
            <Link href="/service/furniturelayoutplan" passHref>
              <h5>
                <a className="more mt-30 do-detail">
                  <button className="btn btn-outline-light">
                    <span>ดูรายละเอียด &nbsp;<i className="fas fa-chevron-right"></i></span>
                  </button>
                </a>
              </h5>
            </Link>
          </div>
          <div className="col-lg-4 col-md-5 item-bx">
            <span className="icon">
              <Image 
                src="/assets/img/icons/color-scheme.png"
                className="icon-color"
              />
            </span>
            <h5 className="mb-5">Mood&Tone</h5>
            <h6 className="mb-5">ภาพบรรยกาศตัวอย่าง</h6>
            <Link href="/service/moodandtone" passHref>
              <h5>
                <a className="more mt-30 do-detail">
                  <button className="btn btn-outline-light">
                    <span>ดูรายละเอียด &nbsp;<i className="fas fa-chevron-right"></i></span>
                  </button>
                </a>
              </h5>
            </Link>
          </div>
        </div>
        <div className="row bord-box wow fadeInUp">
          <div className="col-lg-4 col-md-5 item-bx">
            <span className="icon flaticon-computer"></span>
            <h5 className="mb-5">3D Render</h5>
            <h6 className="mb-5">อกกแบบภาพ 3 มิติ</h6>
            <Link href="/service/treedrender" passHref>
              <h5>
                <a className="more mt-30 do-detail">
                  <button className="btn btn-outline-light">
                    <span>ดูรายละเอียด &nbsp;<i className="fas fa-chevron-right"></i></span>
                  </button>
                </a>
              </h5>
            </Link>
          </div>
          <div className="col-lg-4 col-md-5 item-bx">
            <span className="icon flaticon-sketch"></span>
            <h5 className="mb-5">Shop Drawing</h5>
            <h6 className="mb-5">เขียนแบบก่อสร้าง</h6>
            <Link href="/service/shopdrawing" passHref>
              <h5>
                <a className="more mt-30 do-detail">
                  <button className="btn btn-outline-light">
                    <span>ดูรายละเอียด &nbsp;<i className="fas fa-chevron-right"></i></span>
                  </button>
                </a>
              </h5>
            </Link>
          </div>
          <div className="col-lg-4 col-md-5 item-bx">
            <span className="icon flaticon-renovation"></span>
            <h5 className="mb-5">BOQ Furniture</h5>
            <h6 className="mb-5">ประเมินราคา</h6>
            <Link href="/service/boqfurniture" passHref>
              <h5>
                <a className="more mt-30 do-detail">
                  <button className="btn btn-outline-light">
                    <span>ดูรายละเอียด &nbsp;<i className="fas fa-chevron-right"></i></span>
                  </button>
                </a>
              </h5>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services5;
