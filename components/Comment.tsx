import {View, Text, StyleSheet, Image} from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/MaterialIcons';
type CommentProps = {
  name: string;
  imageUrl: string;
  comment: string;
  time: string;
};
export default function Comment(props: CommentProps) {
  return (
    <View style={styles.container}>
      {/* <Text>Comment</Text> */}
      <View style={styles.top}>
        {props.imageUrl === '' ? (
          <View style={{backgroundColor: '#ddd', borderRadius: 999, padding: 2}}>
            <Icon name="person" color={'#767676'} size={26} />
          </View>
        ) : (
          <Image
            source={{uri: props.imageUrl}}
            alt={'profilePic'}
            style={styles.dp}
            resizeMode="contain"
          />
        )}
        <Text
          style={{
            color: '#000',
            fontWeight: '600',
            fontSize: 16,
            textTransform: 'capitalize',
          }}>
          {props.name}
        </Text>
      </View>
      <View style={styles.commentTimeContainer}>
        <Text style={{color: '#000', fontSize: 16}}>{props.comment}</Text>
        <Text style={{fontWeight: '400', color: '#767676', fontSize: 12}}>{props.time}</Text>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  dp: {
    height: 28,
    width: 28,
  },
  container: {
    borderBottomColor: '#E4E4E4',
    borderBottomWidth: 1,
    paddingVertical: 10,
  },
  top: {flexDirection: 'row', alignItems: 'center', gap: 10},
  commentTimeContainer: {
    paddingLeft: 40,
    gap: 8,
  },
});
