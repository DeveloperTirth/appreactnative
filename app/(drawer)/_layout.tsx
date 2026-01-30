import { Drawer } from "expo-router/drawer";

export default function DrawerLayout() {
  return (
    <Drawer      screenOptions={{
        swipeEdgeWidth: 200,   // 👈 bigger swipe zone
        headerShown: true,     // 👈 shows header
      }}
>
      <Drawer.Screen
        name="(tabs)"
        options={{ drawerLabel: "Screens" }}
      />
      <Drawer.Screen
        name="mainscreen"
        options={{ drawerLabel: "Main Screen" }}
      />
    </Drawer>
  );
}
