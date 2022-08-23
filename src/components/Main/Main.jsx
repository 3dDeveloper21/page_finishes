import React from "react";
import overviewData from "../../data/overview";
import Options from "../Options/Options";
import data from '../../data/options';
import './Main.scss';
import Accordion from "../Accordion/Accordion";

// Main Wrapper to hold all content
const MainWrapper = () => {
  return (
    <main className="main-content flex-wrapper">
      <SelectedFinishes />
      <WebGLConfig />
    </main>
  );
};



// Select finishes - article for left side of main content
const SelectedFinishes = () => {
  return (
    <article className="selected-finishes">
      <div className="container">
        {/* <Overview /> 
        { data && data.map((option) => {
          return <Options datasrc={option.publishes} buttonText={option.buttonText} title={option.title} />
        })} */}
        <Accordion title={'lower section'}/>
        <Accordion title={'upper section'}/>
      </div>
    </article>
  );
};

// Overview - section which displays cost of users finished Kitchen
const Overview = () => {
  return (
    <section className="overview">
      <h1 className="overview__main-title">Selected Finishes</h1>
      <ul className="overview__list">
        {overviewData.map((data, index) => (
          <li key={index} class="overview__item">
            <h2 className="overview__title">{data.title}</h2>
            <h3 className="overview__price">{data.price}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
};

// WebGL configurator
const WebGLConfig = () => {
  return (
    <div className="webgl-config">
      WEBGL Container bored
    </div>
  )
};

// Main Component to export
const Main = () => {
  return (
    <>
      <MainWrapper />
    </>
  );
};

export default Main;
