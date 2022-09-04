//react components
import React from 'react';
import {TouchableOpacity} from 'react-native';
//custom components
import MyText from '../MyText/MyText';
//global
import {Colors, MyIcons} from '../../global';

const IconNameCard = ({item, Name, Icon, index}) => {
  //Ui
  return (
    <TouchableOpacity
      style={{
        height: 100,
        width: 100,
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.WHITE,
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 2},
        shadowOpacity: 0.5,
        shadowRadius: 2,
        elevation: 2,
      }}>
      {Icon}
      {/* <MyIcons.AntDesign name="book" color={Colors.VIOLET} size={30} /> */}
      <MyText text={Name} textAlign="center" />
    </TouchableOpacity>
  );
};

export default IconNameCard;
