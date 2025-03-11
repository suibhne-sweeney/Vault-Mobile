import { useTheme } from '@react-navigation/native';
import * as React from 'react';
import { Slider as RNASlider } from 'react-native-awesome-slider';
import { useSharedValue } from 'react-native-reanimated';

function Slider() {
  const { colors } = useTheme();
  const min = useSharedValue(0);
  const max = useSharedValue(100);
  const progress = useSharedValue(0)
  return (
    <RNASlider 
      progress={progress}
      minimumValue={min}
      maximumValue={max}
    />
  );
}

export { Slider };