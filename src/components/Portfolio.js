import React from "react";
import netflix from "../images/1.png";
import cityGuide from "../images/2.png";
import portfolio from "../images/4.png";
import taskManager from "../images/5.png";
// FONTAWESOME IMPORTS
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearchPlus } from "@fortawesome/free-solid-svg-icons";
// REACT POPUPBOX
import { PopupboxManager, PopupboxContainer } from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";



const Pofrfolio = () => {

  // Netflix
  const openPopupboxNetflix = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={netflix} alt="Netflix Clone Project..." />
        
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/nadjaantonjak/bootcamp-hub")}>https://github.com/nadjaantonjak/bootcamp-hub</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigNetflix = {
    titleBar: {
      enable: true,
      text: "Netflix clone project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // City Guide App
  const openPopupboxCityGuide = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={cityGuide} alt="City Guide App Project..." />
       
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/nadjaantonjak/notetaker", "_blank")}>https://github.com/nadjaantonjak/notetaker</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigCityGuide = {
    titleBar: {
      enable: true,
      text: "City Guide App project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Portfolio Project
  const openPopupboxPortfolio = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={portfolio} alt="Portfolio Project..." />
       
        
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/nadjaantonjak/password-genie", "_blank")}>https://github.com/nadjaantonjak/password-genie</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigPortfolio = {
    titleBar: {
      enable: true,
      text: "Password Genie."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }

  // Task Manager React and Redux Project
  const openPopupboxTaskManager = () => {
    const content = (
      <>
        <img className="portfolio-image-popupbox" src={taskManager} alt="Task Manager React and Redux Project..." />
        
        <b>GitHub:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/nadjaantonjak/weather", "_blank")}>https://github.com/nadjaantonjak/weather</a>
      </>
    )
    PopupboxManager.open({ content })
  }

  const popupboxConfigTaskManager = {
    titleBar: {
      enable: true,
      text: "Project."
    },
    fadeIn: true,
    fadeInSpeed: 500
  }


  return (
    <div id="portfolio" className="portfolio-wrapper">
      <div className="container">
        <h1 className="text-uppercase text-center py-5">portfolio</h1>
        <div className="image-box-wrapper row justify-content-center">
          <div className="portfolio-image-box" onClick={openPopupboxNetflix}>
            <img className="portfolio-image" src={netflix} alt="Netflix Clone Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxCityGuide}>
            <img className="portfolio-image" src={cityGuide} alt="City Guide Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxPortfolio}>
            <img className="portfolio-image" src={portfolio} alt="Portfolio React and Material UI Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
          {/* - */}
          <div className="portfolio-image-box" onClick={openPopupboxTaskManager}>
            <img className="portfolio-image" src={taskManager} alt="Task Manager React and Redux Project..." />
            <div className="overflow"></div>
            <FontAwesomeIcon className="portfolio-icon" icon={faSearchPlus} />
          </div>
        </div>
      </div>
      <PopupboxContainer {...popupboxConfigNetflix} />
      <PopupboxContainer {...popupboxConfigCityGuide} />
      <PopupboxContainer {...popupboxConfigPortfolio} />
      <PopupboxContainer {...popupboxConfigTaskManager} />
    </div>
  )
}

export default Pofrfolio;
