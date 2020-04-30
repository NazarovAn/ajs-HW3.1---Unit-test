import getStatus from './getStatus';
import getCharacterData from './getCharacterData';
import tooltip from './tooltip';

export default function writeCharacterStatus() {
  const inputButton = document.querySelector('.input-button');
  const characterNameOutput = document.querySelector('.name');
  const characterStatusOutput = document.querySelector('.status');

  inputButton.addEventListener('click', (e) => {
    e.preventDefault();
    characterNameOutput.textContent = '';
    characterStatusOutput.textContent = '';
    const characterStatus = getStatus(getCharacterData());
    if (characterStatus === null) {
      tooltip.style.display = 'block';
      throw new Error('Здоровье персонажа должно быть числом от 1 до 100');
    } else {
      tooltip.style.display = 'none';
    }

    characterNameOutput.textContent = characterStatus.name;
    characterStatusOutput.textContent = characterStatus.status;
    characterStatusOutput.style.color = characterStatus.color;
  });
}
