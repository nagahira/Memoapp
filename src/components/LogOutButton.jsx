import { useNavigation } from '@react-navigation/native';
import firebase from 'firebase';
import {
  Text, StyleSheet, TouchableOpacity, Alert,
} from 'react-native';

export default function LogOutButton() {
  const navigation = useNavigation();

  function handlePress() {
    firebase.auth().signOut()
      .then(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: 'LogIn' }],
        });
      })
      .catch(() => {
        Alert.alert('ログアウトに失敗しました');
      });
  }
  return (
    // eslint-disable-next-line react/jsx-no-bind
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Text style={styles.label}>ログアウト</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 12,
    paddingVertical: 4,
  },
  label: {
    fontsize: 14,
    color: 'rgba(255, 255, 255, 0.7)',
  },
});
