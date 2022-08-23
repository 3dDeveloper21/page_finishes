import React from 'react'
import './Options.scss';
import Button from '../Global/Button';
// import Cards from '../Card/Card'; 

const Options = ({title = null, datasrc, buttonText }) => {
  return (
    <section className='options'>
      { title && <h1 className='options__title'>{title}</h1> }
      {/* <div className='cards'>
        {
          datasrc.map(({img, title})=> (
            <figure className="card">
              <img src={img} alt="" />
              <figcaption>{title}</figcaption>
            </figure>
          ))
        }
      </div> */}
      {
        buttonText && 
        <div className="button-wrapper mt-3em">
          <Button title={buttonText} btnClass='btn btn--dark'/>
        </div>
      }
      
    </section>
  )
}

export default Options