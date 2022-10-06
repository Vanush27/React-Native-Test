import { useEffect } from "react";
import { View, Text, Button } from "react-native";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";

export default function PlanerScreen({ navigation }: NativeStackHeaderProps) {
  useEffect(() => {
    console.log("Rendering Planner screen");
    return () => console.log("unmounting Planner  ");
  }, []);

  return (
    <View>
      <Text> I am planer screen </Text>
      <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
    </View>
  );
}
