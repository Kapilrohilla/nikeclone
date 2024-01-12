import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeNavigation from './HomeNavigation';
import ShopNavigation from './ShopNavigation';
import BagNavigation from './BagNavigation';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Favourite from '../../pages/Favourite/Favourite';
import ProfileNavigation from './ProfileNavigation';

export default function BottomNavigator() {
  const BottomTab = createBottomTabNavigator();
  return (
    <BottomTab.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: 'black',
        tabBarLabelStyle: {
          fontWeight: '600',
        },
      }}>
      <BottomTab.Screen
        name={'Home'}
        options={{tabBarIcon: () => <Icon name="home" color="#767676" size={25} />}}
        component={HomeNavigation}
      />
      <BottomTab.Screen
        name={'Shop'}
        options={{tabBarIcon: () => <Icon name="search" color="#767676" size={25} />}}
        component={ShopNavigation}
      />
      <BottomTab.Screen
        name={'Favourites'}
        options={{tabBarIcon: () => <Icon name="favorite-outline" color="#767676" size={25} />}}
        component={Favourite}
      />
      <BottomTab.Screen
        name={'Bag'}
        options={{tabBarIcon: () => <Icon name="work-outline" color="#767676" size={25} />}}
        component={BagNavigation}
      />
      <BottomTab.Screen
        name={'Profile'}
        options={{tabBarIcon: () => <Icon name="person" color="#767676" size={25} />}}
        component={ProfileNavigation}
      />
    </BottomTab.Navigator>
  );
}
