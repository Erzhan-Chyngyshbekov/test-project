import React, {useState} from 'react';
import {View} from 'react-native';

import PostIcon from '../../assets/icons/PostIcon';
import RubbleIcon from '../../assets/icons/RubbleIcon';
import ListIcon from '../../assets/icons/ListIcon';
import LocationIcon from '../../assets/icons/LocationIcon';
import TimeIcon from '../../assets/icons/TimeIcon';
import HelpIcon from '../../assets/icons/HelpIcon';

import DisabledInput from '../FormInputs/DisabledInput';
import FormSumInput from '../FormInputs/FormSumInput';
import FormDetailsInput from '../FormInputs/FormDetailsInput';
import Footer from '../Footer/Footer';

function Form() {
  const [value, setValue] = useState('');
  const [sumValue, setSumValue] = useState('');
  const [detailsValue, setDetailsValue] = useState('');

  const handleTextChange = newText => setValue(newText);
  const handleSumTextChange = newText => setSumValue(newText);
  const handleDetailsTextChange = newText => setDetailsValue(newText);

  const handleClearForm = () => {
    setSumValue('');
    setDetailsValue('');
  };

  return (
    <View>
      <View style={{margin: 15}}>
        <DisabledInput
          label="Где забрать?"
          value={value}
          handleTextChange={handleTextChange}
          icon={<PostIcon />}
        />
        <FormSumInput
          label="Точная сумма оплаты"
          value={sumValue}
          handleTextChange={handleSumTextChange}
          icon={<RubbleIcon />}
        />
        <FormDetailsInput
          label="Детали получения"
          value={detailsValue}
          handleTextChange={handleDetailsTextChange}
          icon={<ListIcon />}
        />
        <DisabledInput
          label="Адрес доставки"
          value={value}
          handleTextChange={handleTextChange}
          icon={<LocationIcon />}
        />
        <DisabledInput
          label="Время доставки"
          value="Как можно скорее"
          handleTextChange={handleTextChange}
          icon={<TimeIcon />}
        />
        <DisabledInput
          label="Помочь с заказом"
          value={value}
          handleTextChange={handleTextChange}
          icon={<HelpIcon />}
        />
      </View>

      <Footer onPress={handleClearForm} />
    </View>
  );
}

export default Form;
