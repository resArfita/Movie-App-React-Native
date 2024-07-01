import React from 'react'
import { View, Text, Button, StyleSheet } from 'react-native'

const Home = ({ navigation }: any): JSX.Element => {
  return (
    <View style={styles.container}>
      <Text style={styles.marginBottom20}>Movie Page</Text>
      <Button
        title="Pergi Ke MovieDetail"
        onPress={() => navigation.navigate("MovieDetail")}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  marginBottom20: {
    marginBottom: 20,
  },
});