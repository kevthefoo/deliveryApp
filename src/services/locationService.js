import * as Location from "expo-location";

let foregroundSubscription = null;

export async function startForegroundTracking(onLocation) {
    const { status } = await Location.requestForegroundPermissionsAsync();
    if (status !== "granted")
        throw new Error("Location permission not granted");

    foregroundSubscription = await Location.watchPositionAsync(
        {
            accuracy: Location.Accuracy.High,
            timeInterval: 15000,
            distanceInterval: 10,
        },
        (loc) => {
            onLocation && onLocation(loc);
        }
    );
}

export function stopForegroundTracking() {
    foregroundSubscription && foregroundSubscription.remove();
    foregroundSubscription = null;
}

export default { startForegroundTracking, stopForegroundTracking };
