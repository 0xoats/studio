import { last } from 'lodash';

function removeCurveSuffix(label: string) {
  const words = label.split(' ');
  const lastWord = last(words);

  if (lastWord?.toLowerCase() === 'curve') {
    return words.slice(0, -1).join(' ');
  }

  return label;
}

export function remapLabel<T>(position: T & { displayProps: { label: string } }): T {
  position.displayProps.label = removeCurveSuffix(position.displayProps.label);
  return position;
}
