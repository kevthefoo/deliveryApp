import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Button,
    StyleSheet,
    FlatList,
    TouchableOpacity,
    Alert,
} from "react-native";

const sampleDropList = [
    { id: "u1", type: "Uprights", qty: 4, delivered: false },
    { id: "b1", type: "Bins", qty: 6, delivered: false },
    { id: "p1", type: "Panels", qty: 2, delivered: false },
];

export default function StopScreen({ route, navigation }) {
    const { stop, onUpdate } = route.params;
    const [dropList, setDropList] = useState(sampleDropList);
    const [status, setStatus] = useState(stop.status || "Pending");

    useEffect(() => {
        // when screen mounted mark En Route
        if (status === "Pending") setStatus("En Route");
    }, []);

    function toggleDelivered(itemId) {
        setDropList((list) =>
            list.map((i) =>
                i.id === itemId ? { ...i, delivered: !i.delivered } : i
            )
        );
    }

    function finishDelivery() {
        // require photo in real app
        setStatus("Delivered");
        const updated = { ...stop, status: "Delivered" };
        onUpdate && onUpdate(updated);
        navigation.navigate("POD", { stop: updated });
    }

    function promptSms() {
        Alert.alert("Send SMS", "Send message to customer?", [
            { text: "Cancel", style: "cancel" },
            { text: "Send", onPress: () => sendSms() },
        ]);
    }

    function sendSms() {
        // Placeholder: call Twilio via backend
        Alert.alert("SMS sent", `Notified ${stop.phone}`);
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>{stop.name}</Text>
            <Text>{stop.address}</Text>
            <Text style={{ marginTop: 8 }}>Status: {status}</Text>

            <Button title="Notify Customer (SMS)" onPress={promptSms} />

            <Text style={{ marginTop: 12, fontWeight: "600" }}>Drop List</Text>
            <FlatList
                data={dropList}
                keyExtractor={(i) => i.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.item}
                        onPress={() => toggleDelivered(item.id)}
                    >
                        <Text>
                            {item.type}: {item.qty}{" "}
                            {item.delivered ? "(Delivered)" : ""}
                        </Text>
                    </TouchableOpacity>
                )}
            />

            <Button title="Complete & Capture POD" onPress={finishDelivery} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    title: { fontSize: 20, fontWeight: "600" },
    item: { padding: 8, borderBottomWidth: 1, borderColor: "#eee" },
});
