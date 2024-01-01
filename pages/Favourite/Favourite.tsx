import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  ScrollViewBase,
  Pressable,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {ScrollView} from 'react-native';

export default function Favourite() {
  const [openDrawer, setOpenDrawer] = useState(false);
  return (
    <>
      <View style={styles.topBarContainer}>
        <Text style={styles.bgColor}>Edit</Text>
      </View>
      <Text style={{fontSize: 30, color: '#000', marginLeft: 15, marginBottom: 15}}>
        Favourites
      </Text>
      <FlatList
        data={newArrivalDetails}
        numColumns={2}
        onRefresh={() => {}}
        refreshing={false}
        renderItem={({item}) => {
          return (
            <FavCard
              imageUrl={item.imageUrl}
              price={item.price}
              title={item.name}
              key={item.id}
              openDrawer={() => setOpenDrawer(true)}
            />
          );
        }}
        columnWrapperStyle={{gap: 10}}
      />
      {openDrawer && (
        <SelectedOption
          category={newArrivalDetails[0].cateogry}
          imageUrl={newArrivalDetails[0].imageUrl}
          title={newArrivalDetails[0].name}
          price={newArrivalDetails[0].price}
          closeDrawer={() => setOpenDrawer(false)}
        />
      )}
    </>
  );
}

type FavCardProps = {
  imageUrl: string;
  title: string;
  price: number;
  openDrawer: any;
};
const FavCard = ({imageUrl, title, price, openDrawer}: FavCardProps) => {
  const cardWidth = Dimensions.get('screen').width / 2 - 5;
  return (
    <TouchableOpacity onPress={openDrawer}>
      <View style={{width: cardWidth, flex: 1}}>
        <Image
          source={{uri: imageUrl}}
          style={{width: cardWidth - 2, height: 150}}
          resizeMode="cover"
        />
        <View style={{paddingHorizontal: 10, paddingVertical: 10}}>
          <Text style={{color: '#000', fontWeight: '700'}}>{title}</Text>
          <Text style={{color: '#000'}}>INR {price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
type SelectedOptionProps = {
  imageUrl: string;
  title: string;
  category: string;
  price: number;
  closeDrawer: any;
};
const SelectedOption = (props: SelectedOptionProps) => {
  const [isSubmit, setIsSubmit] = useState(false);
  const sizes = [
    'L(W 10-13 / M 8-12)',
    'L(W 10-13 / M 8-12)',
    'L(W 10-13 / M 8-12)',
    'L(W 10-13 / M 8-12)',
    'L(W 10-13 / M 8-12)',
    'L(W 10-13 / M 8-12)',
  ];
  return (
    <View
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
      }}>
      <Pressable
        onPress={props.closeDrawer}
        style={{backgroundColor: '#000000aa', flex: 1}}></Pressable>
      <View
        style={{
          backgroundColor: 'white',
          paddingHorizontal: 15,
          paddingTop: 20,
          paddingBottom: 5,
          borderTopStartRadius: 15,
          borderTopEndRadius: 15,
          position: 'absolute',
          bottom: 110,
          width: Dimensions.get('screen').width,
        }}>
        {!isSubmit ? (
          <>
            <View
              style={{
                flexDirection: 'row',
                columnGap: 15,
              }}>
              <Image
                source={{uri: props.imageUrl}}
                style={{flex: 1, width: Dimensions.get('screen').width / 2 - 15, aspectRatio: 1}}
              />
              <View style={{flex: 1, justifyContent: 'space-between'}}>
                <View>
                  <Text style={{color: '#000', fontWeight: '700'}}>{props.title}</Text>
                  <Text style={{textTransform: 'capitalize', color: '#767676'}}>
                    {props.category}
                  </Text>
                </View>
                <View>
                  <Text style={{color: '#000'}}>INR {props.price}</Text>
                </View>
              </View>
            </View>
            <Text style={{color: '#000', fontSize: 20, marginVertical: 20, fontWeight: '600'}}>
              Size
            </Text>
            <ScrollView horizontal>
              {sizes.map((size, index) => (
                <Pressable
                  key={index}
                  style={{
                    borderWidth: 1,
                    borderColor: '#000',
                    paddingHorizontal: 16,
                    paddingVertical: 10,
                    borderRadius: 3,
                    marginHorizontal: 4,
                  }}>
                  <Text style={{color: '#000'}}>{size}</Text>
                </Pressable>
              ))}
            </ScrollView>
          </>
        ) : (
          <View style={{alignItems: 'center'}}>
            <Text style={{color: '#000', fontSize: 20, fontWeight: '600'}}>Added to Bag</Text>
          </View>
        )}
        <TouchableOpacity
          style={{
            backgroundColor: '#000',
            marginVertical: 30,
            paddingVertical: 15,
            borderRadius: 9999,
            alignItems: 'center',
          }}
          onPress={() => {
            setIsSubmit(!isSubmit);
          }}>
          <Text style={{color: '#fff', fontWeight: '600', fontSize: 15}}>
            {isSubmit ? 'View Bag' : 'Add to Bag'}
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  bgColor: {
    color: '#000',
    fontSize: 16,
    textAlign: 'right',
  },
  topBarContainer: {
    paddingVertical: 15,
    paddingHorizontal: 17,
  },
});

const newArrivalDetails = [
  {
    id: '1',
    imageUrl: 'https://th.bing.com/th/id/OIP.TIWckpoCSJiDO_8U3qewegHaEh?rs=1&pid=ImgDetMain',
    price: 199,
    cateogry: 'shoe',
    name: 'Air Jordan XXJ',
  },
  {
    id: '2',
    imageUrl: 'https://th.bing.com/th/id/OIP.TIWckpoCSJiDO_8U3qewegHaEh?rs=1&pid=ImgDetMain',
    price: 199,
    name: 'Air Jordan XXJ',
    cateogry: 'shoe',
  },
  {
    id: '3',
    imageUrl: 'https://th.bing.com/th/id/OIP.TIWckpoCSJiDO_8U3qewegHaEh?rs=1&pid=ImgDetMain',
    price: 199,
    name: 'Air Jordan XXJ',
    cateogry: 'shoe',
  },
  {
    id: '4',
    imageUrl: 'https://th.bing.com/th/id/OIP.TIWckpoCSJiDO_8U3qewegHaEh?rs=1&pid=ImgDetMain',
    price: 199,
    name: 'Air Jordan XXJ',
    cateogry: 'shoe',
  },
  {
    id: '1',
    imageUrl: 'https://th.bing.com/th/id/OIP.TIWckpoCSJiDO_8U3qewegHaEh?rs=1&pid=ImgDetMain',
    price: 199,
    name: 'Air Jordan XXJ',
    cateogry: 'shoe',
  },
  {
    id: '2',
    imageUrl: 'https://th.bing.com/th/id/OIP.TIWckpoCSJiDO_8U3qewegHaEh?rs=1&pid=ImgDetMain',
    price: 199,
    name: 'Air Jordan XXJ',
    cateogry: 'shoe',
  },
  {
    id: '3',
    imageUrl: 'https://th.bing.com/th/id/OIP.TIWckpoCSJiDO_8U3qewegHaEh?rs=1&pid=ImgDetMain',
    price: 199,
    name: 'Air Jordan XXJ',
    cateogry: 'shoe',
  },
  {
    id: '4',
    imageUrl: 'https://th.bing.com/th/id/OIP.TIWckpoCSJiDO_8U3qewegHaEh?rs=1&pid=ImgDetMain',
    price: 199,
    name: 'Air Jordan XXJ',
    cateogry: 'shoe',
  },
  {
    id: '1',
    imageUrl: 'https://th.bing.com/th/id/OIP.TIWckpoCSJiDO_8U3qewegHaEh?rs=1&pid=ImgDetMain',
    price: 199,
    name: 'Air Jordan XXJ',
    cateogry: 'shoe',
  },
  {
    id: '2',
    imageUrl: 'https://th.bing.com/th/id/OIP.TIWckpoCSJiDO_8U3qewegHaEh?rs=1&pid=ImgDetMain',
    price: 199,
    name: 'Air Jordan XXJ',
    cateogry: 'shoe',
  },
  {
    id: '3',
    imageUrl: 'https://th.bing.com/th/id/OIP.TIWckpoCSJiDO_8U3qewegHaEh?rs=1&pid=ImgDetMain',
    price: 199,
    name: 'Air Jordan XXJ',
    cateogry: 'shoe',
  },
  {
    id: '4',
    imageUrl: 'https://th.bing.com/th/id/OIP.TIWckpoCSJiDO_8U3qewegHaEh?rs=1&pid=ImgDetMain',
    price: 199,
    name: 'Air Jordan XXJ',
    cateogry: 'shoe',
  },
];
