import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, Button } from 'react-native';
import Counter from './components/Counter';

export default function App() {
  const [count, setCount] = useState(0);
  const [bgColor, setBgColor] = useState('blue');

  useEffect(() => {
    if (count !== 0) {
      if (count % 3 === 0) {
        setBgColor('green');
      } else {
        setBgColor('blue');
      }
    }
  });

  return (
    <View style={{ backgroundColor: bgColor }}>
      <Image
        source={{
          uri:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/1200px-React-icon.svg.png',
        }}
        style={mainStyle.logo}
      />

      <Counter count={count} />

      <View style={{ marginVertical: 8 }}>
        <Button
          title="Add Count"
          onPress={() => {
            setCount(count + 1);
          }}
        />
      </View>
      <Button
        color="red"
        title="Subtract Count"
        onPress={() => {
          setCount(count - 1);
        }}
      />
    </View>
  );
}

const mainStyle = StyleSheet.create({
  logo: {
    width: 300,
    height: 300,
  },
});
