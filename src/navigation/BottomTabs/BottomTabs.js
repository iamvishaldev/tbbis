//react components
import React from 'react';
import {View, Text} from 'react-native';
//bottom tabs
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
//styles
import {styles} from './BottomTabsStyle';
//global
import {MyIcons, ScreensName} from '../../global';
// components
import MyText from '../../components/MyText/MyText';
//screens
import Payment from '../../screens/Payment/Payment';
import Profile from '../../screens/Profile/Profile';
import Home from '../../screens/Home/Home';

const BottomTabs = () => {
  //variables
  const Tab = createBottomTabNavigator();
  const screenOptions = {
    showLabel: false,
    headerShown: false,
    tabBarShowLabel: false,
    tabBarStyle: styles.TabStyleView,
  };
  //UI
  return (
    <Tab.Navigator backBehavior="none" screenOptions={screenOptions}>
      <Tab.Screen
        name={ScreensName.HOME}
        component={Home}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View>
                <View style={styles.myIconView}>
                  <MyIcons.Ionicons name="home" size={24} />
                </View>
                <MyText
                  text="Home"
                  textAlign="center"
                  fontFamily="SEMI_BOLD"
                  style={styles.MyFocusedLabelStyle}
                />
              </View>
            ) : (
              <View>
                <MyIcons.Ionicons name="home" size={24} />
              </View>
            ),
        }}
      />
      <Tab.Screen
        name={ScreensName.PAYMENT}
        component={Payment}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View>
                <View style={styles.myIconView}>
                  <MyIcons.MaterialIcons name="payments" size={24} />
                </View>
                <MyText
                  text="Payments"
                  textAlign="center"
                  fontFamily="SEMI_BOLD"
                  style={styles.MyFocusedLabelStyle}
                />
              </View>
            ) : (
              <View>
                <MyIcons.MaterialIcons name="payments" size={24} />
              </View>
            ),
        }}
      />
      <Tab.Screen
        name={ScreensName.PROFILE}
        component={Profile}
        options={{
          tabBarIcon: ({focused}) =>
            focused ? (
              <View>
                <View style={styles.myIconView}>
                  <MyIcons.Entypo name="news" size={24} />
                </View>
                <MyText
                  text="News"
                  textAlign="center"
                  fontFamily="SEMI_BOLD"
                  style={styles.MyFocusedLabelStyle}
                />
              </View>
            ) : (
              <View>
                <MyIcons.Entypo name="news" size={24} />
              </View>
            ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;
