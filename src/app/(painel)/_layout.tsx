import { Tabs } from "expo-router";



export default function LayoutPainel() {
    <Tabs>
        <Tabs.Screen name="home/page" options={{headerShown: false}}/>
        <Tabs.Screen name="profile/page" options={{headerShown: false}}/>
    </Tabs>
}