import {View, Text, ScrollView, Image, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import HomeTopBar from '../../components/HomeTopBar';
import Icon from 'react-native-vector-icons/MaterialIcons';
import type {Comment as CommentType} from '../../types';
import Comment from '../../components/Comment';

const comments: CommentType[] = [
  {
    id: '1',
    name: 'kapil rohilla',
    imageUrl: '',
    time: '53 min ago',
    comment: 'Wow',
  },
  {
    id: '2',
    name: 'kapil rohilla',
    imageUrl: '',
    time: '53 min ago',
    comment: 'Wow',
  },
  {
    id: '3',
    name: 'kapil rohilla',
    imageUrl: '',
    time: '53 min ago',
    comment: 'Wow',
  },
  {
    id: '4',
    name: 'kapil rohilla',
    imageUrl: '',
    time: '53 min ago',
    comment: 'Wow',
  },
  {
    id: '5',
    name: 'kapil rohilla',
    imageUrl: '',
    time: '53 min ago',
    comment: 'Wow',
  },
  {
    id: '6',
    name: 'kapil rohilla',
    imageUrl: '',
    time: '53 min ago',
    comment: 'Wow',
  },
  {
    id: '7',
    name: 'kapil rohilla',
    imageUrl: '',
    time: '53 min ago',
    comment: 'Wow',
  },
  {
    id: '8',
    name: 'kapil rohilla',
    imageUrl: '',
    time: '53 min ago',
    comment: 'Wow',
  },
  {
    id: '9',
    name: 'kapil rohilla',
    imageUrl: '',
    time: '53 min ago',
    comment: 'Wow',
  },
  {
    id: '10',
    name: 'kapil rohilla',
    imageUrl: '',
    time: '53 min ago',
    comment: 'Wow',
  },
  {
    id: '11',
    name: 'kapil rohilla',
    imageUrl: '',
    time: '53 min ago',
    comment: 'Wow',
  },
  {
    id: '12',
    name: 'kapil rohilla',
    imageUrl: '',
    time: '53 min ago',
    comment: 'Wow',
  },
];

export default function Blog() {
  const width = Dimensions.get('screen').width;
  const commentCount = comments.length;
  return (
    <ScrollView>
      <HomeTopBar search={false} title={null} />
      <Image
        source={{
          uri: 'https://th.bing.com/th/id/R.5bd0391972869105cdcf6f520827c215?rik=S5nJHKDTmtetQA&riu=http%3a%2f%2fcdn.ttgtmedia.com%2frms%2feditorial%2fsports-290px.jpg&ehk=JqI92co6MzMyS%2fnQks92KfSXTxyYnA0li2rVL3498fw%3d&risl=&pid=ImgRaw&r=0',
        }}
        width={width}
        height={300}
        resizeMode="cover"
      />
      <View style={styles.bodyContainer}>
        <Text style={styles.bodyHeading}>Soyeon's Sport Challenge 😎</Text>
        <Text style={styles.bodyDetail}>
          Hip hop dancer Soyeon Jang shows us an epic dance challenge in the latest Playlist
          episode. Soyeon dances three parts of the routine - first fast, then slow. Then she
          combines all the moves for an awesome dance party with her buddy, Disco Dancer. Kids will
          get inspired to dance along and make up a dance routine of their own.
        </Text>
        <View style={{flexDirection: 'row', gap: 20, alignItems: 'center'}}>
          <Icon name="ios-share" size={25} color={'#767676'} />
          <Icon name="chat-bubble-outline" size={25} color={'#767676'} />
        </View>
        <View>
          <View style={{gap: 10, paddingVertical: 20}}>
            <Text style={styles.commentCount}>Comments ({commentCount})</Text>
            <View style={[styles.addCommentBtn]}>
              <Text style={styles.commentBtnText}>Add a comment...</Text>
            </View>
          </View>
          {comments.slice(0, 5).map(comment => (
            <Comment
              name={comment.name}
              imageUrl={comment.imageUrl}
              comment={comment.comment}
              time={comment.time}
              key={comment.id}
            />
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainImage: {
    height: 500,
  },
  bodyContainer: {
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  bodyDetail: {
    color: '#000',
    textAlign: 'justify',
    lineHeight: 20,
    paddingVertical: 20,
  },
  bodyHeading: {
    fontSize: 25,
    color: '#000',
    fontWeight: '600',
  },
  commentCount: {
    color: 'black',
    fontWeight: '600',
    fontSize: 18,
    // marginVertical: 10,
  },
  addCommentBtn: {
    paddingHorizontal: 20,
    borderRadius: 30,
    borderWidth: 0.4,
    borderColor: '#767676',
    justifyContent: 'center',
    height: 40,
  },
  commentBtnText: {
    color: '#767676',
    alignItems: 'center',
    fontWeight: '500',
  },
});
