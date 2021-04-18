import { fontFace, fontSize, screenHeight, screenWidth } from "./settings";

const canvas = document.getElementById("main") as HTMLCanvasElement;
const ctx = canvas.getContext("2d") as CanvasRenderingContext2D;

canvas.width = screenWidth;
canvas.height = screenHeight;

ctx.font = `${fontSize} ${fontFace}`;

export { canvas, ctx };
