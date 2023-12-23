import {
  Pressable,
  Image,
  ImageBackground,
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
} from 'react-native';

export default function LoginSignupHome({navigation}: any) {
  const navigateToSigninPage = () => {
    navigation.navigate('email');
  };
  return (
    <View style={styles.container}>
      <ImageBackground
        source={require('../../assets/signup-start-image.png')}
        style={{flex: 1}}>
        <ImageBackground
          source={require('../../assets/overlay.png')}
          style={{flex: 1}}>
          <View style={styles.contentContainer}>
            <Image
              source={require('../../assets/logo.png')}
              width={70}
              height={25}
              resizeMode="center"
            />
            <Text style={styles.font}>Nike App</Text>
            <Text style={styles.font}>Bringing Nike Members</Text>
            <Text style={styles.font}>the Best product,</Text>
            <Text style={styles.font}>inspiration and stories</Text>
            <Text style={styles.font}>and Success.</Text>
            <View style={{gap: 20, flexDirection: 'row', marginTop: 20}}>
              <TouchableOpacity style={[styles.join, styles.btnsSize]}>
                <Text
                  style={[
                    styles.btnText,
                    {
                      color: 'black',
                    },
                  ]}>
                  Join Us
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[styles.sign, styles.btnsSize]}
                onPress={navigateToSigninPage}>
                <Text style={styles.btnText}>Sign In</Text>
              </TouchableOpacity>
            </View>
          </View>
          {/* Join Us
          </Button> */}
          {/* <Pressable style={[styles.sign, styles.btnsSize]}>Sign In</Pressable> */}
        </ImageBackground>
      </ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    overlayColor: '#000',
    flex: 1,
  },
  contentContainer: {
    position: 'absolute',
    top: '50%',
    paddingHorizontal: 20,
    fontWeight: '500',
    lineHeight: 120,
  },
  font: {
    fontSize: 28,
    color: 'white',
  },
  btnsSize: {
    paddingVertical: 16,
    paddingHorizontal: 51,
    fontSize: 30,
  },
  join: {backgroundColor: 'white', borderRadius: 30},
  sign: {
    backgroundColor: 'black',
    borderWidth: 2,
    borderColor: 'white',
    borderRadius: 30,
    color: 'white',
  },
  btnText: {fontWeight: '600'},
});
