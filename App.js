import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  StatusBar,
  Dimensions,
} from 'react-native';

const { width } = Dimensions.get('window');
const BUTTON_SIZE = (width - 60) / 4;

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
        <View style={styles.displayRow}>
          <View style={styles.display}>
            <Text style={styles.displayText} numberOfLines={1} adjustsFontSizeToFit>
              {display || '0'}
            </Text>
          </View>
          <TouchableOpacity
            style={styles.clearButton}
            onPress={() => handlePress('c')}
            activeOpacity={0.7}
          >
            <Text style={styles.buttonText}>c</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.row}>
          <Button value="1" />
          <Button value="2" />
          <Button value="3" />
          <Button value="/" />
        </View>

        <View style={styles.row}>
          <Button value="4" />
          <Button value="5" />
          <Button value="6" />
          <Button value="*" />
        </View>

        <View style={styles.row}>
          <Button value="7" />
          <Button value="8" />
          <Button value="9" />
          <Button value="-" />
        </View>

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
    width: width - 20,
    padding: 10,
  },
  displayRow: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  display: {
    flex: 1,
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
  clearButton: {
    width: BUTTON_SIZE,
    height: 80,
    backgroundColor: '#1aa000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  button: {
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    backgroundColor: '#1aa000',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 32,
    color: '#fff',
    fontWeight: '600',
  },
});
