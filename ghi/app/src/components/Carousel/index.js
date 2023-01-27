import "./carousel.css";

export default function Carousel() {
  return (
    <div className="container-fluid carousel-bg">
      <div className="overlay">
        <h1 id="car-title">CARCAR</h1>
        <p id="car-slogan">DEALERSHIP MANAGEMENT DONE RIGHT</p>
      </div>
      <div
        id="carouselExampleControls"
        class="carousel carousel-light slide"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img
              src={require("../../images/pic1.png")}
              class="d-block main-page-image"
              alt="..."
              height="100%"
              width="100%"
            />
          </div>
          <div class="carousel-item">
            <img
              src={require("../../images/pic2.png")}
              class="d-block main-page-image"
              alt="..."
              height="100%"
              width="100%"
            />
          </div>
          <div class="carousel-item">
            <img
              src={require("../../images/pic3.png")}
              class="d-block main-page-image"
              alt="..."
              height="85%"
              width="100%"
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}
