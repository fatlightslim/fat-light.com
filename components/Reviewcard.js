import React, { Component } from "react"
import { data } from "./data"
import "./index.scss"
import "./index.css"
import dq from "./img/dq.png"
import free from "./img/free.png"









export default function Minji() {
  return (


    <div className="Rating d-flex flex-wrap justify-content-center my-md-4 pl-md-3">
      {data.map((v, index) => {
        return (

          <div className="bg-white col-md-4 card flex-md-equal" key={index}>
            <img
              src={v.img}
              alt={v.alt}
              className="card-img-top p-3 rounded-circle img-fluid"
            />
            <div className="card-body">
              <img
                src={dq}
                className="dq float-left" />
              <h5 className="mb-0 mt-3"><a href={v.url} class="btn btn-defalt font-weight-bold font-color-danger btn-lg">{v.title}</a></h5>


              <p className="p-4">{v.q}</p>
            </div>
            <div className="footer">
              <div className="blockquote-footer d-flex justify-content-center">
                {v.name} |

                    <a href={v.page}>&nbsp;{v.product}の詳細を見る</a>



              </div>
            </div>

          </div>




        )
      })}
    </div>


  )
}
