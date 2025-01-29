import { ChangeEvent, useEffect, useState } from 'react';

export const useInputPackageSize = (handleOptionClick, onSelect) => {
  const [packageSize, setPackageSize] = useState({ length: 0, width: 0, height: 0, weight: 0 });

  const handleLengthInput = (event: ChangeEvent<HTMLInputElement>) =>
    setPackageSize({ ...packageSize, length: Number(event.target.value) });
  const handleWidthInput = (event: ChangeEvent<HTMLInputElement>) =>
    setPackageSize({ ...packageSize, width: Number(event.target.value) });
  const handleHeightInput = (event: ChangeEvent<HTMLInputElement>) =>
    setPackageSize({ ...packageSize, height: Number(event.target.value) });
  const handleWeightInput = (event: ChangeEvent<HTMLInputElement>) =>
    setPackageSize({ ...packageSize, weight: Number(event.target.value) });

  useEffect(() => {
    handleOptionClick({ label: 'точные размеры', value: packageSize });
    onSelect({ label: 'точные размеры', value: packageSize });
  }, [packageSize]);

  return { handleLengthInput, handleWidthInput, handleHeightInput, handleWeightInput };
};
