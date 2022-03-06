import { KeyboardAvoidingView, Platform } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Provider } from "react-redux";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";

import store from "redux-store/store";
import RootStackNavigator from "navigators";

const App = () => {
  return (
    <Provider store={store}>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? -64 : 0}
      >
        <SafeAreaProvider>
          <NavigationContainer>
            <RootStackNavigator />
            <StatusBar style="auto" />
          </NavigationContainer>
        </SafeAreaProvider>
      </KeyboardAvoidingView>
    </Provider>
  );
};

export default App;
