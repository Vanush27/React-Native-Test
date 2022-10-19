import {containsKey, getData, removeItem, storeData} from "../storage";
import data from "../data.json";
import {Workout} from "../types/data";

export const getWorkouts = async (): Promise<Workout[]> => {
    const workouts = getData("workout-data");
    return workouts;
};

export const getWorkoutBySlug = async (slug: string): Promise<Workout> => {
    const workouts = getWorkouts();
    const workout = (await workouts).filter((w) => w.slug === slug)[0];
    return workout;
};

export const initWorkouts = async (): Promise<boolean> => {
    const hasWorkouts = await containsKey("workout-data");
    if (!hasWorkouts) {
        await storeData("workout-data", data);
        return true;
    }
    return false;
};

export const storeWorkout = async (newWorkout: Workout): Promise<boolean> => {
    const workouts = await getWorkouts();
    await storeData("workout-data", [newWorkout, ...workouts]);
    return true;
}
export const clearWorkouts = async () => {
    await removeItem("workout-data");
};
