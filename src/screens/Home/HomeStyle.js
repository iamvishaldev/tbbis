import {StyleSheet} from 'react-native';
import {Colors} from '../../global';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE,
  },
  studentDataStyle: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    position: 'absolute',
    backgroundColor: Colors.BLACK + '66',
    paddingVertical: 10,
    bottom: 0,
    left: 0,
    right: 0,
  },
  sectionView: {
    padding: 20,
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
});
