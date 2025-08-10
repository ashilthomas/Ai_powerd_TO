import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

function Modal({ isOpen, onClose, children }) {
  const modalRef = useRef(null);
  const backdropRef = useRef(null);
  const [visible, setVisible] = useState(isOpen);

  useEffect(() => {
    if (isOpen) {
      setVisible(true); // Mount first
      document.body.style.overflow = "hidden"; // Prevent background scroll
    } else {
      document.body.style.overflow = "";
      if (modalRef.current && backdropRef.current) {
        // Animate out
        gsap.to([modalRef.current, backdropRef.current], {
          opacity: 0,
          scale: 0.97,
          y: -10,
          duration: 0.35,
          ease: "power2.inOut",
          onComplete: () => setVisible(false),
        });
      }
    }
  }, [isOpen]);

  // Entry animation
useEffect(() => {
  if (visible && isOpen && modalRef.current && backdropRef.current) {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Backdrop fade-in
      tl.fromTo(
        backdropRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 0.4, ease: "power2.out" }
      );

      // Modal container animation
      tl.fromTo(
        modalRef.current,
        { opacity: 0, scale: 0.9, y: -20 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.45,
          ease: "power4.out"
        },
        "-=0.2" // overlap slightly with backdrop
      );

      // Stagger children inside modal
      // tl.fromTo(
      //   modalRef.current.querySelectorAll(".modal-child"),
      //   { opacity: 0, y: 10 },
      //   {
      //     opacity: 1,
      //     y: 0,
      //     duration: 0.35,
      //     stagger: 0.05,
      //     ease: "power2.out"
      //   },
      //   "-=0.25" // start before modal fully settles
      // );
    }, modalRef);

    return () => ctx.revert();
  }
}, [visible, isOpen]);

  if (!visible) return null;

  return (
    <div className="relative z-10 ">
      {/* Backdrop */}
      <div
        ref={backdropRef}
        className="fixed inset-0 bg-gray-500/75 backdrop-blur-sm"
      />

      {/* Modal container */}
      <div className="fixed inset-0 z-20 w-screen shadow-blue-500/50  shadow-lg overflow-y-auto flex items-center justify-center p-4">
        <div
          ref={modalRef}
          className=" p-10 relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl  sm:w-[450px] sm:max-w-lg"
        >
          <div className="modal-child">{children}</div>
          <div className="modal-child bg-gray-50 px-4 py-3 flex justify-end">
            <button
              type="button"
              onClick={onClose}
             className="bg-[var(--primary-colour)] shadow-blue-500/50  px-5 cursor-pointer  shadow-xl py-3 text-sm  rounded-full text-white  hover:bg-red-500 transition"
            >
             Add Todo
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
