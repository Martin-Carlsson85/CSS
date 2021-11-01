const mouseCirlce = document.querySelector(".mouse-circle");
const mouseDot = document.querySelector(".mouse-dot");

//Mouse Circle
const mouseCirlceFn = (x, y) => {
  mouseCirlce.style.cssText = `top: ${y}px; left: ${x}px; opacity: 1`;
  mouseDot.style.cssText = `top: ${y}px; left: ${x}px; opacity: 1`;
};

document.body.addEventListener("mousemove", (e) => {
  let x = e.clientX;
  let y = e.clientY;

  mouseCirlceFn(x, y);
});

document.body.addEventListener("mouseleave", () => {
  mouseCirlce.style.opacity = "0";
  mouseDot.style.opacity = "0";
});
//End of Mouse Circle
