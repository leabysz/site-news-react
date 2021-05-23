import React from "react"
import { Link } from "gatsby"

import {List, ListItem} from 'reusecore/List'

const ScrollspyMenu = ({ menuItems, ...props }) => {
  const addAllClasses = [""]
  if (props.className) {
    addAllClasses.push(props.className)
  }
  return (
    <List className={addAllClasses.join(" ")}>
      {menuItems.map((menu, index) => (
        <ListItem
          key={index}
          className={
            menu.subItems !== undefined ? "nav-item has-dropdown" : "nav-item"
          }
        >
          <Link to={menu.path}>{menu.name}</Link>
          {menu.subItems !== undefined && (
            <List key={index} className="dropdown">
              {menu.subItems.map((subItem, i) => (
                <ListItem key={i}>
                  <Link to={subItem.path}>{subItem.name}</Link>
                </ListItem>
              ))}
            </List>
          )}
        </ListItem>
      ))}
      <ListItem>
        <button className="nav__button">Contact us</button>
      </ListItem>
    </List>
  )
}

export default ScrollspyMenu
