type CalcParams = {
  [key: string]: number | CalcParams;
};

export const hasZeroValue = (obj: CalcParams): boolean => {
  for (const key in obj) {
    const value = obj[key];

    if (typeof value === 'number') {
      if (value === 0) return true;
    } else if (typeof value === 'object' && value !== null) {
      if (hasZeroValue(value)) return true;
    }
  }
  return false;
};
