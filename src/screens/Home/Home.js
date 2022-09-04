// react components
import React, { useState, useEffect } from 'react';
import { Image, ScrollView, TouchableOpacity, View } from 'react-native';
import IconNameCard from '../../components/IconNameCard/IconNameCard';
// components
import MyHeader from '../../components/MyHeader/MyHeader';
import MyText from '../../components/MyText/MyText';
import { Colors, MyIcons, Service } from '../../global';
// styles
import { styles } from './HomeStyle';
const Home = () => {
  // useState
  const [studentInfo, setStudentInfo] = useState()
  //data
  // const studentData = {
  //   student_name: 'Rupak Kumar Jha',
  //   student_age: '15',
  //   student_class: 'Third',
  //   student_image:
  //     'https://cdn.pixabay.com/photo/2020/06/01/22/23/eye-5248678__340.jpg',
  //   student_id: '2234567345',
  //   student_section: 'B',
  //   student_roll: '15',
  //   student_fees: '4000.00',
  //   student_fees_pending_amt: '2000.00',
  //   student_fees_paid_status: 'Pending',
  //   student_fees_paid_amt: '2000.00',
  //   student_fees_due_date: '2022-04-13',
  //   student_fees_paid_date: '2022-04-12',
  //   student_fees_paid_method: 'Online',
  // };
  const sectionData = [
    {
      id: 1,
      name: 'k12-Diary',
    },
    {
      id: 2,
      name: 'Homework',
    },
    {
      id: 3,
      name: 'School Fee',
    },
    {
      id: 4,
      name: 'Live Class Attendance',
    },
    {
      id: 5,
      name: 'Online Exam',
    },
    {
      id: 6,
      name: 'Report Card',
    },
    {
      id: 7,
      name: 'Admit Card',
    },
    {
      id: 8,
      name: 'Shared Lessons',
    },
    {
      id: 9,
      name: 'Assignment',
    },
  ];
  const imageurl = `https://www.clipartmax.com/png/middle/171-1717870_stockvader-predicted-cron-for-may-user-profile-icon-png.png`;
  //function : imp function
  const getIcon = item => {
    if (item.name == 'k12-Diary') {
      return (
        <MyIcons.MaterialCommunityIcons
          name="message-reply-text"
          color={Colors.VIOLET}
          size={30}
        />
      );
    } else if (item.name == 'Homework') {
      return (
        <MyIcons.MaterialCommunityIcons
          name="home-city"
          color={Colors.VIOLET}
          size={30}
        />
      );
    } else if (item.name == 'School Fee') {
      return (
        <MyIcons.MaterialCommunityIcons
          name="credit-card-outline"
          color={Colors.VIOLET}
          size={30}
        />
      );
    } else if (item.name == 'Live Class Attendance') {
      return (
        <MyIcons.MaterialCommunityIcons
          name="calendar-range-outline"
          color={Colors.VIOLET}
          size={30}
        />
      );
    } else if (item.name == 'Online Exam') {
      return <MyIcons.Entypo name="chat" color={Colors.VIOLET} size={30} />;
    } else if (item.name == 'Report Card') {
      return (
        <MyIcons.MaterialCommunityIcons
          name="book-open-outline"
          color={Colors.VIOLET}
          size={30}
        />
      );
    } else if (item.name == 'Admit Card') {
      return (
        <MyIcons.FontAwesome5
          name="id-card-alt"
          color={Colors.VIOLET}
          size={30}
        />
      );
    } else if (item.name == 'Shared Lessons') {
      return (
        <MyIcons.MaterialIcons
          name="screen-share"
          color={Colors.VIOLET}
          size={30}
        />
      );
    } else {
      return (
        <MyIcons.FontAwesome name="file-text" color={Colors.VIOLET} size={30} />
      );
    }
  };
  // Function: Service Function
  const getStudentInfo = async () => {
    const data = {
      session_id: "90a306ab-a2bc-4134-a01e-4277419c7cc9",
      student_id: "1048"
    }
    try {
      const response = await Service.postRequestWithOutToken(
        Service.Dashboard,
        data
      )
      if (response.response.status == "SUCCESSS") {
        setStudentInfo(response.response.data)
      }
    } catch (error) {
      console.log('SignInUser Error', error)
    }
  }
  // useEffect
  useEffect(() => {
    getStudentInfo()
  }, [])
  //UI
  return (
    <View style={styles.container}>
      <MyHeader Title="Student info" />
      <ScrollView>
        <View>
          <Image
            source={{ uri: studentInfo?.student_image ? studentInfo.student_image : imageurl }}
            style={{ height: 300 }}
          />
          <View style={styles.studentDataStyle}>
            <View style={{ width: '5%' }} />
            <View>
              <MyText
                text={studentInfo?.student_name}
                fontSize={18}
                textColor="white"
                textAlign="center"
              />
              <MyText
                text={`ID: ${studentInfo?.student_id}`}
                textAlign="center"
                textColor="white"
                style={{ marginVertical: 5 }}
              />
              <MyText
                textColor="white"
                text={`Class: ${studentInfo?.student_class} - ${studentInfo?.student_section}, Roll No.: ${studentInfo?.student_roll}`}
              />
            </View>

            <TouchableOpacity>
              <MyIcons.MaterialIcons
                name="edit"
                size={30}
                color={Colors.WHITE}
              />
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.sectionView}>
          {sectionData.map((item, index) => {
            return (
              <IconNameCard
                key={index.toString()}
                Name={item.name}
                item={item}
                index={index}
                Icon={getIcon(item)}
              />
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
