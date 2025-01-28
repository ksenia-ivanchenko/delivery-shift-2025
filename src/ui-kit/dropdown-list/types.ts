
export type Option = {
  label: string;
  value: any;
};

export type DropdownListProps = {
  options: Option[];
  handleOptionClick: (option: Option) => void;
};
