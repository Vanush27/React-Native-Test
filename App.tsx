import {StatusBar} from "expo-status-bar";
import useCachedResources from "./hooks/useCachedResources";
import Navigation from "./navigation";
import {useColorScheme} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";

export default function App() {
    const isLoaded = useCachedResources();
    const colorScheme = useColorScheme();

    if (isLoaded) {
        return (
            <SafeAreaProvider>
                <StatusBar style='auto'/>
                <Navigation colorScheme={colorScheme}/>
            </SafeAreaProvider>
        );
    } else {
        return null;
    }
}
