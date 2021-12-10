const allowDrag = (e) => {
  e.preventDefault();
};
const dragStart = () => {
  console.log('start');
};
const dragEnd = () => {
  console.log('end');
};
const dragEnter = () => {
  console.log('enter');
};
const dragOver = (e) => {
  allowDrag(e);
  console.log('over');
};
const dragLeave = () => {
  console.log('leave');
};
const dragDrop = () => {
  console.log('drop');
};

export {
  allowDrag,
  dragStart,
  dragEnd,
  dragEnter,
  dragOver,
  dragLeave,
  dragDrop,
};
