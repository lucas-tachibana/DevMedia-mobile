import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import TelaInicial from "./telas/TelaInicial";
import TelaFinais from "./telas/TelaFinais";
import TelaArtilheiros from "./telas/TelaArtilheiros";
import TelaTitulos from "./telas/TelaTitulos";

const Navegacao = createStackNavigator();


export default function App() {
  return (
    <NavigationContainer>
      <Navegacao.Navigator>
        
        <Navegacao.Screen
          name="TelaInicial"
          component={TelaInicial}
          options={{headerTitle: "Início"}}
        />
        <Navegacao.Screen 
          name="TelaFinais"
          component={TelaFinais}
          options={{headerTitle: "Finais"}}
        />
        <Navegacao.Screen
          name="TelaArtilheiros"
          component={TelaArtilheiros}
          options={{headerTitle: "Artilheiros"}}
        />
        <Navegacao.Screen
          name="TelaTitulos"
          component={TelaTitulos}
          options={{headerTitle: "Títulos"}}
        />

      </Navegacao.Navigator>
    </NavigationContainer>
  )
}
