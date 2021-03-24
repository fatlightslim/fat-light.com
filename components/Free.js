import React from "react"
import "./index.scss"
import free from "./img/free.png"

export default function Minji() {
  return (
    <section className="Minji">
      
          <div className="wrap">
        <div className="row">
      <div class="card border-white text-white col-md-15">
        <img src={free} class="card-img img-fluid" alt="free delivery event" />
        <div class="midori card-img-overlay d-flex align-items-center justify-content-center">
          <div className="box border border-5 border-white text-center heading p-2">
        
        
            <h5 class="card-title1 display-5 font-weight-bold">今から年末までは</h5>
            <h5 class="card-title1 display-5 font-weight-bold">何を買っても</h5>
            <h5 class="card-title1 display-5 font-weight-bold">送・料・無・料</h5>
            <p class="card-text">America-Amazon's Ranking No.1 MARS HYDRO LIGHT</p>
            <p class="card-text">Now on Sale!</p>
          </div>
        </div>
      </div>
      </div>
      </div>
       
    </section>
  )
}
