import React, { useState } from "react";
import {
    View,
    Text,
    FlatList,
    TouchableOpacity,
    StyleSheet,
} from "react-native";

const sampleStops = [
    {
        id: "1",
        name: "Customer A",
        address: "123 Main St",
        phone: "555-0101",
        status: "Pending",
    },
    {
        id: "2",
        name: "Customer B",
        address: "456 Oak Ave",
        phone: "555-0202",
        status: "Pending",
    },
];

export default function RouteScreen({ navigation }) {
    const [stops, setStops] = useState(sampleStops);

    const goToStop = (stop) =>
        navigation.navigate("Stop", { stop, onUpdate: handleUpdate });

    function handleUpdate(updatedStop) {
        setStops((s) =>
            s.map((st) => (st.id === updatedStop.id ? updatedStop : st))
        );
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Route Stops</Text>
            <FlatList
                data={stops}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.row}
                        onPress={() => goToStop(item)}
                    >
                        <View>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text>{item.address}</Text>
                            <Text>Status: {item.status}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    title: { fontSize: 20, fontWeight: "600", marginBottom: 12 },
    row: { padding: 12, borderBottomWidth: 1, borderColor: "#eee" },
    name: { fontWeight: "600" },
});
