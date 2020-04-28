const tooltip = document.querySelector('.tooltip');
const hpInput = document.querySelector('.hp_input');
const coords = hpInput.getBoundingClientRect();

tooltip.style.top = `${coords.top}px`;
tooltip.style.left = `${coords.left + hpInput.offsetWidth + 10}px`;

export default tooltip;
