import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

export default function App() {
  const [display, setDisplay] = useState('');

  const handlePress = (value) => {
    if (value === 'c') {
      setDisplay('');
    } else if (value === '=') {
      try {
        const evalResult = eval(display);
        setDisplay(evalResult.toString());
      } catch (error) {
        setDisplay('Xato');
      }
    } else {
      setDisplay(display + value);
    }
  };

  const Button = ({ value }) => (
    <TouchableOpacity
      style={styles.button}
      onPress={() => handlePress(value)}
      activeOpacity={0.7}
    >
      <Text style={styles.buttonText}>{value}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      
      <View style={styles.calculatorContainer}>
        {/* Display Row */}
        <View style={styles.displayRow}>
          <View style={styles.display}>
            <Text style={styles.displayText} numberOfLines={1} adjustsFontSizeToFit>
              {display || '0'}
            </Text>
          </View>
          <Button value="c" />
        </View>

        {/* Row 1: 1, 2, 3, / */}
        <View style={styles.row}>
          <Button value="1" />
          <Button value="2" />
          <Button value="3" />
          <Button value="/" />
        </View>

        {/* Row 2: 4, 5, 6, * */}
        <View style={styles.row}>
          <Button value="4" />
          <Button value="5" />
          <Button value="6" />
          <Button value="*" />
        </View>

        {/* Row 3: 7, 8, 9, - */}
        <View style={styles.row}>
          <Button value="7" />
          <Button value="8" />
          <Button value="9" />
          <Button value="-" />
        </View>

        {/* Row 4: 0, ., =, + */}
        <View style={styles.row}>
          <Button value="0" />
          <Button value="." />
          <Button value="=" />
          <Button value="+" />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  calculatorContainer: {
    padding: 10,
    backgroundColor: '#fff',
  },
  displayRow: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  display: {
    flex: 3,
    height: 80,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 15,
    marginRight: 10,
  },
  displayText: {
    fontSize: 36,
    color: '#000',
    fontWeight: '500',
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  button: {
    flex: 1,
    height: 80,
    backgroundColor: '#1aa000',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 32,
    color: '#fff',
    fontWeight: '600',
  },
});
