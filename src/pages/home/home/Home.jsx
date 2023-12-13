import React from 'react'
const Home = () => {
  return (
    <>
    <div>Construimos Softeard Moderno</div>
    <div>
    <div id="carouselExampleFade" class="carousel slide carousel-fade">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="..." class="d-block w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button classNam="carousel-control-next" type="button" data-bs-target="#carouselExampleFade" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
       </div>
    </>
  )
}
export default Home