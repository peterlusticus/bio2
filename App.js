import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Home } from './screens/Home';
import { Wo } from './screens/wo/Wo';
import { Zelle } from './screens/wo/Zelle/Zelle';
import { Pflanze } from './screens/wo/Pflanze/Pflanze';
import { Tier } from './screens/wo/Tier/Tier';
import { Mensch } from './screens/wo/Mensch/Mensch';
import { Neurobiologie } from './screens/wo/Mensch/Neurobiologie/Neurobiologie';
import { Organe } from './screens/wo/Mensch/Organe/Organe';
import { Krankheiten } from './screens/wo/Mensch/Krankheiten/Krankheiten';
import { Genetikk } from './screens/wo/Mensch/Genetik/Bakterien';
import { Sinne } from './screens/wo/Mensch/Organe/Sinne/Sinne';
import { Energie } from './screens/wo/Mensch/Organe/Energie/Energie';
import { Schutz } from './screens/wo/Mensch/Organe/Schutz/Schutz';
import { Fortpflanzung } from './screens/wo/Mensch/Organe/Fortpflanzung/Fortpflanzung';
import { Sehen } from './screens/wo/Mensch/Organe/Sinne/Sehen';
import { Riechen } from './screens/wo/Mensch/Organe/Sinne/Riechen';
import { Tasten } from './screens/wo/Mensch/Organe/Sinne/Tasten';
import { Hören } from './screens/wo/Mensch/Organe/Sinne/Hören';
import { Schmecken } from './screens/wo/Mensch/Organe/Sinne/Schmecken';
import { Auslöser } from './screens/wo/Mensch/Krankheiten/Auslöser/Auslöser';
import { Covid } from './screens/wo/Mensch/Krankheiten/Covid/Covid';
import { Behandlung } from './screens/wo/Mensch/Krankheiten/Behandlung/Behandlung';
import { Bakterien } from './screens/wo/Mensch/Krankheiten/Auslöser/Bakterien/Bakterien';
import { Viren } from './screens/wo/Mensch/Krankheiten/Auslöser/Viren/Viren';
import { Gene } from './screens/wo/Mensch/Krankheiten/Auslöser/Gene/Gene';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: 'Home' }}
        />
        <Stack.Screen
          name="Wo"
          component={Wo}
          options={{ title: 'Wo' }}
        />
        <Stack.Screen
          name="Mensch"
          component={Mensch}
          options={{ title: 'Mensch' }}
        />
        <Stack.Screen
          name="Tier"
          component={Tier}
          options={{ title: 'Tier' }}
        />
        <Stack.Screen
          name="Pflanze"
          component={Pflanze}
          options={{ title: 'Pflanze' }}
        />
        <Stack.Screen
          name="Zelle"
          component={Zelle}
          options={{ title: 'Zelle' }}
        />
        <Stack.Screen
          name="Neurobiologie"
          component={Neurobiologie}
          options={{ title: 'Neurobiologie' }}
        />
        <Stack.Screen
          name="Organe"
          component={Organe}
          options={{ title: 'Organe' }}
        />
        <Stack.Screen
          name="Krankheiten"
          component={Krankheiten}
          options={{ title: 'Krankheiten' }}
        />
        <Stack.Screen
          name="Genetikk"
          component={Genetikk}
          options={{ title: 'Genetikk' }}
        />
        <Stack.Screen
          name="Sinne"
          component={Sinne}
          options={{ title: 'Sinne' }}
        />
        <Stack.Screen
          name="Energie"
          component={Energie}
          options={{ title: 'Energie' }}
        />
        <Stack.Screen
          name="Schutz"
          component={Schutz}
          options={{ title: 'Schutz' }}
        />
        <Stack.Screen
          name="Fortpflanzung"
          component={Fortpflanzung}
          options={{ title: 'Fortpflanzung' }}
        />
        <Stack.Screen
          name="Sehen"
          component={Sehen}
          options={{ title: 'Sehen' }}
        />
        <Stack.Screen
          name="Riechen"
          component={Riechen}
          options={{ title: 'Riechen' }}
        />
        <Stack.Screen
          name="Tasten"
          component={Tasten}
          options={{ title: 'Tasten' }}
        />
        <Stack.Screen
          name="Hören"
          component={Hören}
          options={{ title: 'Hören' }}
        />
        <Stack.Screen
          name="Schmecken"
          component={Schmecken}
          options={{ title: 'Schmecken' }}
        />
        <Stack.Screen
          name="Auslöser"
          component={Auslöser}
          options={{ title: 'Auslöser' }}
        />
        <Stack.Screen
          name="Covid"
          component={Covid}
          options={{ title: 'Covid' }}
        />
        <Stack.Screen
          name="Behandlung"
          component={Behandlung}
          options={{ title: 'Behandlung' }}
        />
        <Stack.Screen
          name="Bakterien"
          component={Bakterien}
          options={{ title: 'Bakterien' }}
        />
        <Stack.Screen
          name="Viren"
          component={Viren}
          options={{ title: 'Viren' }}
        />
        <Stack.Screen
          name="Gene"
          component={Gene}
          options={{ title: 'Gene' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};