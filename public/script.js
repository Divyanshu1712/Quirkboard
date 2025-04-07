const socket = io();

const roomId = localStorage.getItem('roomId');
const roomPass = localStorage.getItem('roomPass');

socket.emit('join-room', { roomId, roomPass }, (res) => {
  if (!res.success) {
    alert(res.message || 'Failed to join room');
    window.location.href = '/';
  }
});

const canvas = document.getElementById('board');
const ctx = canvas.getContext('2d');
const colorPicker = document.getElementById('colorPicker');
const penSize = document.getElementById('penSize');

let isDrawing = false;
let tool = 'pen';
let currentColor = colorPicker.value;
let currentSize = penSize.value;

colorPicker.addEventListener('input', () => {
  currentColor = colorPicker.value;
});

penSize.addEventListener('input', () => {
  currentSize = penSize.value;
});

function setTool(t) {
  tool = t;
}

function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  socket.emit('clear-canvas');
}

canvas.addEventListener('mousedown', () => isDrawing = true);
canvas.addEventListener('mouseup', () => isDrawing = false);
canvas.addEventListener('mouseout', () => isDrawing = false);

canvas.addEventListener('mousemove', e => {
  const x = e.offsetX, y = e.offsetY;
  if (isDrawing) {
    socket.emit('drawing', { x, y, color: currentColor, size: currentSize, tool });
    draw(x, y, currentColor, currentSize, tool);
  }
});

socket.on('drawing', ({ x, y, color, size, tool }) => {
  draw(x, y, color, size, tool);
});

socket.on('clear-canvas', () => {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
});

function draw(x, y, color, size, tool) {
  ctx.beginPath();
  ctx.fillStyle = tool === 'eraser' ? '#ffffff' : color;
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fill();
}
