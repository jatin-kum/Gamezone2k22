import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import { globalStyles, images } from "../styles/global";
import Card from '../shared/Card';

export default function ReviewDetails({ route }) {

  return (
    <View style={globalStyles.container}>
      <Card>
        <View style={styles.rating}>
          <Text>Set up Harvest Account</Text>
          {console.log("sign up")}
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  rating: {
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: 16,
    marginTop: 16,
    borderTopWidth: 1,
    borderTopColor: '#eee',
  }
});