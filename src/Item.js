import React from "react"

const Item = (props) => {
  const { price, title, img, desc } = props
  return (
    <div className="menu-item">
      <img src={img} alt="menu item" />
      <div className="menu-item-info">
        <div className="title-price">
          <h4>{title}</h4>
          <span>${price}</span>
        </div>
        <p>{desc}</p>
      </div>
    </div>
  )
}

export default Item
