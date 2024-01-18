import React from "react";
import "./Project.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";

function ProjectOne({ item, index }) {
  const carouselId = `carousel-${index}+${item.name}`;
  return (
    <>
      <div className="projectone m-3">
        <div className="projectimage m-3">
          <div id={carouselId} className="carousel slide">
            <div className="carousel-inner">
              {item.images.map((singleimg, index) => (
                <div
                  key={index}
                  className={` carousel-item ${index === 1 ? 'active' : ""}`}
                >
                  <img src={singleimg} className="w-full z-50" alt="..." />
                </div>
              ))}
            </div>
            <button
              className="carousel-control-prev z-0"
              type="button"
              data-bs-target={`#${carouselId}`}
              data-bs-slide="prev"
            >
              <span
                className="carousel-control-prev-icon"
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next z-0"
              type="button"
              data-bs-target={`#${carouselId}`}
              data-bs-slide="next"
            >
              <span
                className="carousel-control-next-icon "
                aria-hidden="true"
              ></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
        <div className="projectcontent p-2">
          <div className="projecttitle text-center text-white py-2">
            <h3>{item.name}</h3>
          </div>
          <div className="projectoveriew m-auto">
            {item.overview}
            <div className="mt-4">
              <span
                className="cursor-pointer border border-gray-50 p-2 mx-2 hover:bg-[#272727]"
                onClick={() => {
                  window.open(item.live, "_blank");
                }}
              >
                Demo
              </span>
              <span
                className="cursor-pointer border-1 p-2 hover:bg-[#201f1f]"
                onClick={() => {
                  window.open(item.github, "_blank");
                }}
              >
                GitHub
              </span>
            </div>
            <div>{item.createdAt}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ProjectOne;
