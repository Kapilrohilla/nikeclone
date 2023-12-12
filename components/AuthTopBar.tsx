import {View, Text, StyleSheet} from 'react-native';
import Icons from 'react-native-vector-icons/AntDesign';

export default function AuthTopBar() {
  return (
    <View style={styles.container}>
      <Text
        style={[
          styles.text,
          {
            color: '#007AFF',
          },
        ]}>
        Cancel
      </Text>
      <Text style={[styles.text]}>nike.com</Text>
      <Icons name={'back'} color={'#007AFF'} size={23} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F5F5F5',
    height: 60,
    paddingTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    alignItems: 'center',
    borderBottomWidth: 2,
    borderBottomColor: '#00000059',
  },
  text: {
    color: '#000',
    fontSize: 17,
    fontWeight: '600',
  },
});
