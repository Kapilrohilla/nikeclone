import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Comment from './Comment';
import {FlatList} from '@gluestack-ui/themed';
import type {Comment as CommentType} from '../types';
export default function CommentContainer({comments}: {comments: CommentType[]}) {
  const commentCount = comments.length;
  return (
    <View style={{paddingHorizontal: 10, marginTop: 5}}>
      <View style={{gap: 10, paddingVertical: 20}}>
        <Text style={styles.commentCount}>Comments ({commentCount})</Text>
        <View style={[styles.addCommentBtn]}>
          <Text style={styles.commentBtnText}>Add a comment...</Text>
        </View>
      </View>
      <View style={{marginBottom: 270}}>
        <FlatList
          data={comments}
          renderItem={({item}: {item: any}) => {
            return (
              <Comment
                name={item.name}
                comment={item.comment}
                imageUrl={item.imageUrl}
                time={item.time}
              />
            );
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
