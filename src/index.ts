import { canvas, ctx } from "./canvas";
import "./styles.css";

let score = 0;
let frames = 0;

const animate = () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  frames += 1;

  requestAnimationFrame(animate);
};

animate();
