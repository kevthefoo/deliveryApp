import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function HomeScreen({ navigation }) {
    // TODO: fetch today's route from backend
    const dummyData = { uprights: 10, bins: 24, panels: 6 };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Today's Manifest</Text>
            <View style={styles.manifestRow}>
                <Text>Uprights: {dummyData.uprights}</Text>
                <Text>Bins: {dummyData.bins}</Text>
                <Text>Panels: {dummyData.panels}</Text>
            </View>
            <Button
                title="Open Route"
                onPress={() => navigation.navigate("Route")}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    title: { fontSize: 20, fontWeight: "600", marginBottom: 12 },
    manifestRow: { marginBottom: 20 },
});
