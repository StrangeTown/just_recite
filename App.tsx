import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';

import useCachedResources from './hooks/useCachedResources';
import useColorScheme from './hooks/useColorScheme';
import Navigation from './navigation';
import store from './redux/store';
import services from './services';
import { contentFontNames } from './constants/Fonts';
import { useFonts } from 'expo-font';

export default function App() {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  useEffect(() => {
    services.initStateFromLocalStorage();
  }, []);

  const [fontsLoaded] = useFonts({
    "Ubuntu Medium": require("./assets/fonts/Ubuntu/Ubuntu-Medium.ttf"),
    "Ubuntu Regular": require("./assets/fonts/Ubuntu/Ubuntu-Regular.ttf"),
    "Ubuntu Light Italic": require("./assets/fonts/Ubuntu/Ubuntu-LightItalic.ttf"),
    "Ubuntu Light": require("./assets/fonts/Ubuntu/Ubuntu-Light.ttf"),
    [contentFontNames.Caveat]: require("./assets/fonts/Caveat/static/Caveat-Regular.ttf"),
    [contentFontNames.DancingScript]: require("./assets/fonts/Dancing_Script/static/DancingScript-Regular.ttf"),
    [contentFontNames.PlayfairDisplay]: require("./assets/fonts/Playfair_Display/static/PlayfairDisplay-Regular.ttf"),
    [contentFontNames.Roboto]: require("./assets/fonts/Roboto/Roboto-Regular.ttf"),
    [contentFontNames.Satisfy]: require("./assets/fonts/Satisfy/Satisfy-Regular.ttf"),
    [contentFontNames.Ysabeau]: require("./assets/fonts/Ysabeau/static/Ysabeau-Regular.ttf"),
    // assets/fonts/jp/M_PLUS_Rounded_1c/MPLUSRounded1c-Regular.ttf
    [contentFontNames.jpMPLUSRounded1c]: require("./assets/fonts/jp/M_PLUS_Rounded_1c/MPLUSRounded1c-Regular.ttf"),
    // assets/fonts/jp/Noto_Sans_JP/static/NotoSansJP-Regular.ttf
    [contentFontNames.jpNotoSansJP]: require("./assets/fonts/jp/Noto_Sans_JP/static/NotoSansJP-Regular.ttf"),
    // assets/fonts/jp/Noto_Serif_JP/NotoSerifJP-Regular.otf
    [contentFontNames.jpNotoSerifJP]: require("./assets/fonts/jp/Noto_Serif_JP/NotoSerifJP-Regular.otf"),
    // assets/fonts/jp/Yuji_Syuku/YujiSyuku-Regular.ttf
    [contentFontNames.jpYujiSyuku]: require("./assets/fonts/jp/Yuji_Syuku/YujiSyuku-Regular.ttf"),
  })

  if (!fontsLoaded) {
    return null
  }

  if (!isLoadingComplete) {
    return null;
  } else {
    return (
      <Provider store={store}>
        <SafeAreaProvider>
          <Navigation colorScheme={colorScheme} />
          <StatusBar />
        </SafeAreaProvider>
      </Provider>
    );
  }
}
