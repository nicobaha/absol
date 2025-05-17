import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function App() {
  return (
    <View className="flex-1 bg-white justify-center items-center px-4">
      <StatusBar style="dark" />

      <Text className="text-2xl font-bold text-gray-800 mb-6">
        Control de Inventario
      </Text>

      <Text className="text-base text-center text-gray-600 mb-10">
        Escanea un QR para agregar o quitar productos del inventario
      </Text>

      <TouchableOpacity
        className="bg-blue-600 px-6 py-3 rounded-2xl"
        onPress={() => {
          console.log("Escanear QR");
        }}
      >
        <Text className="text-white font-semibold text-lg">Escanear QR</Text>
      </TouchableOpacity>
    </View>
  );
}