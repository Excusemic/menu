import React, { useState } from "react"
import menuItems from "./data"
import Item from "./Item"

const Menu = () => {
  const [state, setState] = useState("all")
  const handleClick = (par) => {
    const value = par.getAttribute("value")
    setState(value)
  }
  const filteredItems = menuItems.filter((item) => item.category === state)
  return (
    <>
      <h1>Our Menu</h1>
      <div className="underline"></div>
      <ul className="filter">
        <li value="all" onClick={(event) => handleClick(event.target)}>
          All
        </li>
        <li value="breakfast" onClick={(event) => handleClick(event.target)}>
          Breakfast
        </li>
        <li value="lunch" onClick={(event) => handleClick(event.target)}>
          Lunch
        </li>
        <li value="shakes" onClick={(event) => handleClick(event.target)}>
          Shakes
        </li>
      </ul>
      {state === "all" ? (
        <div className="menu">
          {menuItems.map((elem) => {
            return <Item {...elem} key={elem.id} filter={state} />
          })}
        </div>
      ) : (
        <div className="menu">
          {filteredItems.map((elem) => {
            return <Item {...elem} key={elem.id} filter={state} />
          })}
        </div>
      )}
    </>
  )
}

export default Menu
