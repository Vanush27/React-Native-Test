import {StyleSheet, View, Text, TextInput} from "react-native";
import {Controller, useForm} from "react-hook-form";
import {PressableText} from "./styled/PressableText";

export type WorkoutFormData = {
    name: string,
}

type WorkoutProps = {
    onSubmit: (form: WorkoutFormData) => void
}


export default function WorkoutForm({onSubmit}: WorkoutProps) {

    const {control, handleSubmit} = useForm();

    return (
        <View style={styles.container}>
            <Controller
                name="name"
                control={control}
                rules={{required: true}}
                render={({field: {onChange, value}}) =>
                    <TextInput
                        onChangeText={onChange}
                        value={value}
                        style={styles.input}
                        placeholderTextColor={"rgba(0,0,0,0.4)"}
                        placeholder='Workout Name'
                    />
                }
            />
            <PressableText
                text="Confirm"
                style={{marginTop: 10}}
                onPress={handleSubmit((data) => {
                    onSubmit(data as WorkoutFormData);
                })}/>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        borderRadius: 10,
        backgroundColor: '#fff',
        padding: 10,
    },
    input: {
        width: 200,
        margin: 2,
        borderWidth: 1,
        height: 30,
        padding: 5,
        borderRadius: 5,
        borderColor: "rgba(0,0,0,0.4)",
    },
});
