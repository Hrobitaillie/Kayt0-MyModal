import { motion } from "framer-motion";
import "../../styles/MyModal.css";
import React from "react";
import { CloseIcon } from "../CloseIcon";
import { PropTypes } from "prop-types";

export const MyModal = ({ children, trigger, onClose }) => {
  const displayAnimations = {
    open: {
      opacity: 1,
      x: "-50%",
    },
    close: {
      opacity: 0,
      x: "-100%",
    },
  };
  return (
    <section
      className={
        "w-full h-full absolute top-1--2 left-1--2 -translate-x-1--2 -translate-y-1--2 " +
        (trigger ? "pointer-events-all" : "pointer-events-none")
      }
    >
      <div
        className={
          " w-screen h-screen absolute top-1--2 left-1--2 -translate-x-1--2 -translate-y-1--2 bg-white opacity-70 .pointer-events-all " +
          (trigger ? "block" : "hidden")
        }
      ></div>
      {/* 
        Usage of motion to animate de div, and pass props to configure the animation 
        Animate is the condition to start the animation, use variants name to devine wich animation you want
        Variant is an object of differents animations
        initial is the initial animation.
      */}
      <motion.div
        className={
          "p-1r absolute top-1--2 left-1--2 -translate-x-1--2 -translate-y-1--2 min-w-400 shadow-popup rounded overflow-hidden bg-white .pointer-events-all"
        }
        animate={trigger ? "open" : "closed"}
        variants={displayAnimations}
        initial="close"
      >
        <span
          className=" cursor-pointer ml-2 hover-scale-150 transition-all absolute top-1r right-1r"
          onClick={onClose}
        >
          <CloseIcon />
        </span>

        {/* pass the children props to display user elements */}

        {children}
      </motion.div>
    </section>
  );
};


MyModal.protoTypes = {
  children: PropTypes.object.isRequired,
  trigger: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired
}