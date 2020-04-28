export default function getStatus(character) {
  const modifiedCharacter = character;
  const characterHP = parseInt(character.health, 0);
  if (characterHP > 100 || characterHP < 1 || Number.isNaN(characterHP)) {
    return undefined;
  }

  if (characterHP > 50) {
    Object.assign(modifiedCharacter, { status: 'healthy', color: 'green' });
  } else if (characterHP >= 15) {
    Object.assign(modifiedCharacter, { status: 'wounded', color: 'yellow' });
  } else {
    Object.assign(modifiedCharacter, { status: 'critical', color: 'red' });
  }

  return modifiedCharacter;
}
