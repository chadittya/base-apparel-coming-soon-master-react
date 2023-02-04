import React, { useState } from "react";
import iconLogo from "../assets/images/logo.svg";
import imgHeroMobile from "../assets/images/hero-mobile.jpg";
import imgHeroDesktop from "../assets/images/hero-desktop.jpg";
import iconArrow from "../assets/images/icon-arrow.svg";
import iconError from "../assets/images/icon-error.svg";

export default function BaseApparel() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  const validateEmail = () => {
    if (!emailRegex.test(email)) {
      setEmailError("Please provide a valid email");
      return false;
    }
    setEmailError("");
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateEmail()) {
      alert("OK");
    }
  };

  const handleInvalid = (e) => {
    e.preventDefault();
    validateEmail();
  };

  return (
    // container
    <div className="flex h-screen w-[375px] justify-center items-center lg:w-full lg:h-[800px]">
      {/* items  */}
      <div className="flex flex-col lg:flex-row">
        <div className="mx-[32px] mt-[31px] lg:left-[165px] lg:mx-0 lg:mt-0 lg:flex lg:absolute lg:top-[64.91px] w-[100px] lg:w-[158px]">
          <img src={iconLogo} alt="Base Apparel" />
        </div>
        <div className="mt-[32.11px] lg:flex lg:absolute lg:left-[830px] lg:top-0 lg:mt-0">
          <picture>
            <source srcSet={imgHeroDesktop} media="(min-width: 1024px)" />
            <img src={imgHeroMobile} alt="Woman Hero" />
          </picture>
        </div>
        <div className="mx-[32px] my-[64px] text-center lg:flex lg:absolute lg:mx-0 lg:my-0 lg:top-[234px] lg:left-[165px] lg:w-[445px] lg:text-left lg:flex-col lg:h-[404px]">
          <article>
            <h1>
              <span className="uppercase font-cfw-300 text-[2.5rem] leading-[2.625rem] tracking-[0.677rem] text-[#CE9898] lg:text-[4rem] lg:leading-[4rem] lg:tracking-[1.083rem]">
                we're
                <br />
              </span>
              <span className="uppercase font-cfw-600 text-[2.5rem] leading-[2.625rem] tracking-[0.677rem] text-[#423A3A] lg:text-[4rem] lg:leading-[4.438rem] lg:tracking-[1.083rem]">
                coming soon
              </span>
            </h1>
            <p className="my-[16px] text-[0.875rem] leading-[1.375rem] text-[#CE9898] lg:text-[1rem] lg:leading-[1.75rem]">
              Hello fellow shoppers! We're currently building our new fashion
              store. Add your email below to stay up-to-date with announcements
              and our launch deals.
            </p>
          </article>
          <div className="my-[32px] flex relative">
            <form onSubmit={handleSubmit}>
              <input
                type="email"
                className="rounded-3xl w-[19.438rem] h-[3rem] px-[1.5rem] border border-[#CE9898] placeholder-[#CE9898] focus:outline-none focus:border-2 focus:border-[#F96464] lg:w-[27.813rem] lg:h-[3.5rem] lg:px-[2rem]"
                placeholder="Email Address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onInvalid={handleInvalid}
              />
              {emailError && (
                <div>
                  <p className="font-cfw-400 text-[#F96464] text-[0.813rem] leading-[0.813rem] mt-[0.5rem] left-[1.5rem] text-left flex absolute lg:left-[2rem]">
                    {emailError}
                  </p>
                  <img
                    src={iconError}
                    alt="error"
                    className="flex absolute left-[215px] top-[13px] lg:top-[17px] lg:left-[305px]"
                  />
                </div>
              )}
              <button
                type="submit"
                className="w-[4rem] h-[3rem] bg-gradient-custom rounded-3xl flex justify-center items-center absolute top-0 left-[79.42%] shadow-[0px_15px_20px_0px_#c66e6e3f] lg:w-[6.25rem] lg:h-[3.5rem] lg:left-[21.6rem] lg:hover:scale-110 lg:transition hover:bg-gradient-custom-hover"
              >
                <img src={iconArrow} alt="submit" className="text-white" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
