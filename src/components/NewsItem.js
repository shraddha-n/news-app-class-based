import React, { Component } from 'react'

export default class NewsItem extends Component {

  render() {
    let { title, description, newsId, imgUrl, date, author, source } = this.props;

    return (
      <div>
        <div className="card" style={{ width: "100%" ,display:"flex",flexDirection:"flex-column"}}>

          <img src={!imgUrl ? "https://cdn.abcotvs.com/dip/images/12090293_080122-wls-hampshire-crash-wade-stnrgr430a-vid.jpg?w=1600" : imgUrl} className="card-img-top" alt="..." />
          <div className="card-body" style={{ zIndex: "1" }}>
           
            <span className="position-absolute top-0  translate-middle badge rounded-pill bg-danger" style={{ left: "90%" }}>
              {source}
            </span>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-muted">By {author} {new Date(date).toGMTString()}</small></p>

            <a href={newsId} className="btn btn-primary">Read More</a>
          </div>
        </div>

      </div>

    )
  }
}
