let rectcanvas = document.getElementById('rectcanvas');
let ctx = rectcanvas.getContext('2d');
let xstart = 20, ystart = 40, xsize = 50, ysize = 100;
ctx.rect(xstart, ystart, xsize, ysize);
ctx.stroke();