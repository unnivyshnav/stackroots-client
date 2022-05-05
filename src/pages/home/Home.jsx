import Footer from "../../components/footer/Footer";
import "./home.css";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

export default function Home() {
  useEffect(() => {
    Aos.init({ duration: 500 });
  }, []);
  return (
    <div className="home">
      {" "}
      <div data-aos="zoom-in" className="headerTitles">
        <span className="headerTitleSm">React & Node</span>
        <span className="headerTitleLg">Project</span>
      </div>
      <img
        className="headerImage"
        src="https://i.ibb.co/f4VfLKJ/mern1.jpg"
        alt=""
      />
      <div className="cards">
        <div data-aos="zoom-in-up" className="course">
          <div className="courseInfo">
            <img
              className="courseImg"
              src="https://g.foolcdn.com/art/companylogos/square/mdb.png"
              alt=""
            />
            <span className="courseTitle">MongoDb</span>
          </div>

          {/* <p className="courseDesc">{course.description}</p> */}
        </div>

        <div data-aos="zoom-in-up" className="course">
          <div className="courseInfo">
            <img
              className="courseImg"
              src="https://assets.website-files.com/61ca3f775a79ec5f87fcf937/6202fcdee5ee8636a145a41b_1234.png"
              alt=""
            />
            <span className="courseTitle">ExpressJs</span>
          </div>

          {/* <p className="courseDesc">{course.description}</p> */}
        </div>

        <div data-aos="zoom-in-up" className="course">
          <div className="courseInfo">
            <img
              className="courseImg"
              src="https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_1e0d62f445e6448af1e125f5702c8227/reactjs-development-services.png"
              alt=""
            />
            <span className="courseTitle">ReactJs</span>
          </div>

          {/* <p className="courseDesc">{course.description}</p> */}
        </div>

        <div data-aos="zoom-in-up" className="course">
          <div className="courseInfo">
            <img
              className="courseImg"
              src="https://www.the-guild.dev/blog-assets/nodejs-esm/nodejs_logo.png"
              alt=""
            />
            <span className="courseTitle">NodeJs</span>
          </div>

          {/* <p className="courseDesc">{course.description}</p> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}
