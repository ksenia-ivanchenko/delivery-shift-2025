import { useEffect, useState } from 'react';

export const useInputPackageSize = (handleOptionClick, onSelect) => {
  const [packageSize, setPackageSize] = useState({ length: 0, width: 0, height: 0, weight: 0 });

  const handleLengthInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPackageSize({ ...packageSize, length: Number(e.target.value) });
  const handleWidthInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPackageSize({ ...packageSize, width: Number(e.target.value) });
  const handleHeightInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPackageSize({ ...packageSize, height: Number(e.target.value) });
  const handleWeightInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setPackageSize({ ...packageSize, weight: Number(e.target.value) });

  useEffect(() => {
    handleOptionClick({ label: 'точные размеры', value: packageSize });
    onSelect({ label: 'точные размеры', value: packageSize });
  }, [packageSize]);

  return { handleLengthInput, handleWidthInput, handleHeightInput, handleWeightInput };
};
