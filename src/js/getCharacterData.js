export default function getCharacterData() {
  const nameInput = document.querySelector('.name_input');
  const hpInput = document.querySelector('.hp_input');

  return { name: nameInput.value, health: hpInput.value };
}
