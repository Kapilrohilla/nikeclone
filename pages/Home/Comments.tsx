import React from 'react';
import HomeTopBar from '../../components/HomeTopBar';
import type {Comment as CommentType} from '../../types';
import CommentContainer from '../../components/CommentContainer';

export default function Comments() {
  return (
    <>
      <HomeTopBar search={false} title={'COMMENTS'} />
      <CommentContainer comments={comments} />
    </>
  );
}

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
