import { Option } from 'ui-kit/dropdown-list/dropdown-list';

export const selectText = (selectedOption: Option, placeholder: string) =>
  selectedOption &&
  selectedOption.value.length &&
  selectedOption.value.width &&
  selectedOption.value.height &&
  selectedOption.value.weight
    ? `${selectedOption.value.length}x${selectedOption.value.width}x${selectedOption.value.height}, ${selectedOption.value.weight} кг`
    : placeholder;
