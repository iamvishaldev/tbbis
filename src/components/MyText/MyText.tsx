//react components
import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {Colors, Fonts} from '../../global';

interface Props {
  text: string;
  style: any;
  fontSize: number;
  fontFamily:
    | 'BLACK'
    | 'BLACK_ITALIC'
    | 'BOLD'
    | 'BOLD_ITALIC'
    | 'EXTRA_BOLD'
    | 'EXTRA_BOLD_ITALIC'
    | 'EXTRA_LIGHT'
    | 'EXTRA_LIGHT_ITALIC'
    | 'LIGHT'
    | 'LIGHT_ITALIC'
    | 'MEDIUM'
    | 'MEDIUM_ITALIC'
    | 'SEMI_BOLD'
    | 'SEMI_BOLD_ITALIC'
    | 'THIN'
    | 'THIN_ITALIC'
    | 'REGULAR'
    | 'ITALIC'
    | 'VARIABLE_FONT'
    | 'VARIABLE_FONT_ITALIC'; // size name
  textColor:
    | 'theme_color'
    | 'white'
    | 'black'
    | 'yellow'
    | 'orange'
    | 'lite_orange'
    | 'text_gray'
    | 'online'
    | 'offline'
    | 'violet';
  textAlign: 'auto' | 'center' | 'justify' | 'left' | 'right';
  onPress: () => {};
}

const MyText: React.FC<Props> = ({
  text,
  style,
  fontSize = 14,
  fontFamily = 'REGULAR',
  textColor = 'black',
  textAlign = 'auto',
  onPress = () => {},
}) => {
  const getFontFamily = (): string => {
    const propsFontFamilies: string[] = [
      'BLACK',
      'BLACK_ITALIC',
      'BOLD',
      'BOLD_ITALIC',
      'EXTRA_BOLD',
      'EXTRA_BOLD_ITALIC',
      'EXTRA_LIGHT',
      'EXTRA_LIGHT_ITALIC',
      'LIGHT',
      'LIGHT_ITALIC',
      'MEDIUM',
      'MEDIUM_ITALIC',
      'SEMI_BOLD',
      'SEMI_BOLD_ITALIC',
      'THIN',
      'THIN_ITALIC',
      'REGULAR',
      'ITALIC',
      'VARIABLE_FONT',
      'VARIABLE_FONT_ITALIC',
    ];
    const fontFamilies: string[] = Object.values(Fonts);
    const index: number = propsFontFamilies.findIndex(
      item => item === fontFamily,
    );
    if (index > -1) return fontFamilies[index];
    return fontFamily;
  };
  const getFontColor = () => {
    const keys: string[] = Object.keys(Colors).map(item => item?.toLowerCase());
    const values: string[] = Object.values(Colors).map((item: any) =>
      item?.toLowerCase(),
    );
    const idx: number = keys.findIndex(item => item === textColor);
    if (idx > 1) return values[idx];
    return textColor;
  };
  const styles = StyleSheet.create({
    MyTextStyle: {
      fontSize: fontSize,
      fontFamily: getFontFamily(),
      color: getFontColor(),
      textAlign: textAlign,
      ...style,
    },
  });
  return (
    <Text onPress={onPress} style={styles.MyTextStyle}>
      {text}
    </Text>
  );
};

export default MyText;
