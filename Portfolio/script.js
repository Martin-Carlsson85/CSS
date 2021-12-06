//Mouse circle
const mouseCirlce = document.querySelector(".mouse-circle");
const mouseDot = document.querySelector(".mouse-dot");

const mouseCirlceFn = (x, y) => {
  mouseCirlce.style.cssText = `top: ${y}px; left: ${x}px; opacity: 1`;
  mouseDot.style.cssText = `top: ${y}px; left: ${x}px; opacity: 1`;
};
//End of mouse circle

//Animated circles

//End of animated circles

document.body.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  mouseCirlceFn(x, y);
  animateCircles(e, x, y);
});

document.body.addEventListener("mouseleave", () => {
  mouseCirlce.style.opacity = "0";
  mouseDot.style.opacity = "0";
});
