import React, { useState } from 'react'
import "./Accordion.scss";
import Cards from "../Card/Cards";
import newMainTypes from '../../data/options';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Accordion = (props) => {
  const [enableSubCategory, setEnableSubCategory] = useState(false);
  const [subCategories, setSubCategories] = useState(null);
  const [category, setCategory] = useState('');
  const [isActive, setIsActive] = useState(false);

  const clickCard = (categoryKey) => {
    categoryKey === category ? setEnableSubCategory(!enableSubCategory) : setEnableSubCategory(true);
    setCategory(categoryKey);
    const categoryData = newMainTypes.find((item) => item.key === categoryKey);
    setSubCategories(categoryData.subCategories ?? null);
  }

  const clickSubCard = (subCategoryKey) => {
    
  }

  return (
    <div className="accordion">
      <div className="container">
        <div className="accordion__header"
          onClick={ () => setIsActive(!isActive) }>
          <h1 className="accordion__title">{ props.title }</h1>
          <span className={ `accordion__icon ${ isActive ? "rotate-180" : "" }` }>
            <KeyboardArrowDownIcon />
          </span>
        </div>
        <div className={ `accordion__content ${ isActive ? "is-active" : "" }` }>
          {
            newMainTypes.map((item) => {
              return <Cards
                key={ item.key }
                categoryKey={ item.key } 
                title={ item.options.title }
                icon={ item.options.icon }
                clickAction={ clickCard }
              />
            })
          }
        </div>
        {
          enableSubCategory && <div className="accordion__sub-content">
            <h2 className="sub__categories__title">{ subCategories?.title ?? '' }</h2>
            <div className="content">
              { subCategories?.categories?.length > 0 && 
                subCategories?.categories?.map((item) => {
                  return <Cards key={ item.key } icon={ item.icon } title={ item.title } clickAction={ clickSubCard } />
                })
              }
              {
                subCategories == null && <h3>This category doesn't have sub categories</h3>
              }
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Accordion;
