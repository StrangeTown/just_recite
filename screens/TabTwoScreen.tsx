import { StyleSheet } from 'react-native';

import ReviewList from '../components/ReviewList';
import { View } from '../components/Themed';

export default function TabTwoScreen() {
  return (
    <View style={styles.container}>
      <ReviewList />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
