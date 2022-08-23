import React, { useState } from 'react';
import './Cards.scss';

const Cards = (props) => {
  const [clicked, setClicked] = useState(false);
  
  const click = () => {
    props.clickAction(props.categoryKey);
    setClicked(!clicked);
  }

  return (
    <div className="cards" onClick={ click }>
      <figure className={ `card ${ clicked ? "clicked" : "" }` }>
        <img src={ props.icon } alt="" />
        <figcaption>{ props.title }</figcaption>
      </figure>
      { clicked && <span className="material-icons check_circle">
        check_circle
      </span> }
    </div>
  )
}

export default Cards