import Blog from '../../pages/Home/Blog';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Discover from '../../pages/Home/Discover';
import Comments from '../../pages/Home/Comments';
import Collections from '../../pages/Home/Collections';

export default function HomeNavigation() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName="discover" screenOptions={{headerShown: false}}>
      <Stack.Screen name="discover" component={Discover} />
      <Stack.Screen name="blog" component={Blog} />
      <Stack.Screen name="comments" component={Comments} />
      <Stack.Screen name="collection" component={Collections} />
    </Stack.Navigator>
  );
}
