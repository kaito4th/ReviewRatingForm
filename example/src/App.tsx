import * as React from 'react';

import { StyleSheet, View, SafeAreaView } from 'react-native';
import { RatingMAPP } from 'serino-mobile-mapp-review-rating';

export default function App() {
  const response = {
    id: 1,
    productName: 'Kis Transparent Storage Box XS',
  };
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <RatingMAPP
          dataIn={{ descriptionField: { showDescription: false } }}
          dataLoad={response}
          dataOut={value => console.log('app: ', value)}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
