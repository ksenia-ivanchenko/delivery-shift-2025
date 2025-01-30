export const getWorkdayLabel = (days: number) => {
  if (days === 1) {
    return 'рабочий день';
  } else if (days === 2 || days === 3 || days === 4) {
    return 'рабочих дня';
  } else {
    return 'рабочих дней';
  }
};
