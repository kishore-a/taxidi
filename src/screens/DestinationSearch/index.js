import React from 'react';
import { View, TextInput } from 'react-native';

const DestinationSearch=()=> {
  const [value,setinputtext]=React.useState('')
  return (
    <View style={{marginTop:90}}>
      <TextInput
      value={value}
      placeholder={'Where are you going ?'}
      onChangetext={setinputtext}
      />
     </View>
  );
}
export default DestinationSearch;