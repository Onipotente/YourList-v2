import { StyleSheet, StatusBar } from "react-native";

export const AndroidSafeArea = StyleSheet.create({
    flex: 1,
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0
})

export const Container = StyleSheet.create({
    flex:1,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    padding: 10,
})