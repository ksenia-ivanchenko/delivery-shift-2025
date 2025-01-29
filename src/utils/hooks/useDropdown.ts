import { useEffect, useRef, useState } from 'react';

import { Option } from 'ui-kit/dropdown-list/dropdown-list';

export const useDropdown = (onSelect: (option: Option) => void) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<Option>();
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option);
    setIsOpen(false);
  };

  return {
    isOpen,
    selectedOption,
    setSelectedOption,
    dropdownRef,
    toggleDropdown,
    handleOptionClick
  };
};
