import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '../../containers/Home';
import TransferItem from '../../containers/TransferItem';
import {HOME_SCREEN, TRANSFER_ITEM_SCREEN} from './screenNames';

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={HOME_SCREEN}>
        <Stack.Screen name={HOME_SCREEN} component={Home} />
        <Stack.Screen name={TRANSFER_ITEM_SCREEN} component={TransferItem} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
