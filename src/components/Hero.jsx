/* eslint-disable no-unused-vars */
import React from "react";

import { logo } from "../assets";

const Hero = () => {
  return (
    <header className='w-full flex justify-center items-center flex-col'>
      <nav className='flex justify-between items-center w-full mb-10 pt-3'>
        <img src={logo} alt='sumz_logo' className='w-28 object-contain' />

        <button
          type='button'
          onClick={() =>
            window.open("https://github.com/pulkit-999", "_blank")
          }
          className='black_btn'
        >
          GitHub
        </button>
      </nav>

      <h1 className='head_text'>
        Summarize Articles in one click with <br className='max-md:hidden' />
        <span className='green_gradient '>OpenAI </span>
      </h1>
      <h2 className='desc'>
        Tired of summarizing the topic manually.<br/>This <b>AI</b> summarizer has got you covered.
      </h2>
    </header>
  );
};

export default Hero;
