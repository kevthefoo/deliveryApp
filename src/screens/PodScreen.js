import React, { useState, useEffect } from "react";
import {
    View,
    Text,
    Button,
    TextInput,
    Image,
    StyleSheet,
    Alert,
} from "react-native";
import * as ImagePicker from "expo-image-picker";

export default function PodScreen({ route, navigation }) {
    const { stop } = route.params;
    const [note, setNote] = useState("");
    const [photoUri, setPhotoUri] = useState(null);

    useEffect(() => {
        (async () => {
            const { status } =
                await ImagePicker.requestCameraPermissionsAsync();
            // ignore for now
        })();
    }, []);

    async function takePhoto() {
        let result = await ImagePicker.launchCameraAsync({ quality: 0.6 });
        if (!result.cancelled) setPhotoUri(result.uri);
    }

    function submitPod() {
        // TODO: upload to backend (Supabase storage)
        Alert.alert("POD submitted", "Photo and note uploaded");
        navigation.popToTop();
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Proof of Delivery</Text>
            <Text>{stop.name}</Text>

            <Button title="Take Photo" onPress={takePhoto} />
            {photoUri ? (
                <Image source={{ uri: photoUri }} style={styles.preview} />
            ) : null}

            <TextInput
                placeholder="Optional note"
                value={note}
                onChangeText={setNote}
                style={styles.input}
            />

            <Button title="Submit POD" onPress={submitPod} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 16 },
    title: { fontSize: 20, fontWeight: "600", marginBottom: 12 },
    input: { borderWidth: 1, borderColor: "#ddd", padding: 8, marginTop: 12 },
    preview: { width: "100%", height: 200, marginTop: 12 },
});
