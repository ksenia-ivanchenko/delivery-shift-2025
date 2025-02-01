export const getWorkdayLabel = (days: number) => {
  if (days === 1) {
    return `${days} рабочий день`;
  } else if (days === 2 || days === 3 || days === 4) {
    return `${days} рабочих дня`;
  } else {
    return `${days} рабочих дней`;
  }
};
