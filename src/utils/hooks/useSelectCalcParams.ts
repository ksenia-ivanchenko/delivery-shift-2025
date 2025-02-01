import { useState } from 'react';

import { CalculateDeliveryRequest } from 'api';
import { Option } from 'ui-kit/dropdown-list/dropdown-list';

const initialCalcParams = {
  package: { length: 0, width: 0, height: 0, weight: 0 },
  senderPoint: { latitude: 0, longitude: 0, id: '', name: '' },
  receiverPoint: { latitude: 0, longitude: 0, id: '', name: '' }
};
export const useSelectCalcParams = () => {
  const [calcParams, setCalcParams] = useState(initialCalcParams);

  const handleSelectSender = (option: Option) => {
    setCalcParams((prevState) => ({
      ...prevState,
      senderPoint: option.value
    }));
  };
  const handleSelectReceiver = (option: Option) => {
    setCalcParams((prevState) => ({
      ...prevState,
      receiverPoint: option.value
    }));
  };
  const handleSelectPackage = (option: Option) => {
    setCalcParams((prevState) => ({
      ...prevState,
      package: {
        length: option.value.length,
        width: option.value.width,
        height: option.value.height,
        weight: option.value.weight
      }
    }));
  };

  return {
    handleSelectSender,
    handleSelectReceiver,
    handleSelectPackage,
    calcParams
  };
};
