import { Tabs } from "expo-router";

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="screen1"
        options={{ title: "screen1" , headerShown: false}}
      />
      <Tabs.Screen
        name="screen2"
        options={{ title: "screen2" , headerShown: false}}
      />
      <Tabs.Screen
        name="screen3"
        options={{ title: "screen4" , headerShown: false}}
      />
    </Tabs>
  );
}
