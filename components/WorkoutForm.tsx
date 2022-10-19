import {StyleSheet, View, Text, TextInput} from "react-native";
import {PressableText} from "./styled/PressableText";
import {useForm, Controller} from "react-hook-form";
import {useState} from "react";

export type ExerciseForm = {
    name: string,
    duration: string,
    type: string,
    reps?: string
}

type WorkoutProps = {
    onSubmit: (form: ExerciseForm) => void
}

export default function WorkoutForm({onSubmit}: WorkoutProps) {

    const {control, handleSubmit} = useForm();
    const [isSelectionOn, setSelectionOn] = useState(false);

    return (
        <View style={styles.container}>
            <Text>
                WorkoutForm
            </Text>
            <View>
                <View style={styles.rowContainer}>
                    <Controller
                        name="name"
                        control={control}
                        rules={{required: true}}
                        render={({field: {onChange, value}}) =>
                            <TextInput
                                onChangeText={onChange}
                                value={value}
                                style={styles.input}
                                placeholder='Name'
                            />
                        }
                    />
                    <Controller
                        name="duration"
                        control={control}
                        rules={{required: true}}
                        render={({field: {onChange, value}}) =>
                            <TextInput
                                onChangeText={onChange}
                                value={value}
                                style={styles.input}
                                placeholder='Duration'
                            />
                        }
                    />
                </View>
                <View style={styles.rowContainer}>
                    <Controller
                        name="reps"
                        control={control}
                        render={({field: {onChange, value}}) =>
                            <TextInput
                                onChangeText={onChange}
                                value={value}
                                style={styles.input}
                                placeholder='Repetitions'
                            />
                        }
                    />
                    <Controller
                        name="type"
                        control={control}
                        rules={{required: true}}
                        render={({field: {onChange, value}}) =>
                            <View>
                                {isSelectionOn ?
                                    <View>
                                        <PressableText text="exercise"/>
                                        <PressableText text="break"/>
                                        <PressableText text="stretch"/>
                                    </View>
                                    : <TextInput
                                        onPressIn={() => setSelectionOn(true)}
                                        value={value}
                                        style={styles.input}
                                        placeholder='Type'
                                    />
                                }
                            </View>

                        }
                    />

                </View>
                <PressableText
                    text="Submit"
                    onPress={handleSubmit((data) => {
                        onSubmit(data as ExerciseForm);
                    })}/>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        borderRadius: 10,
        padding: 10
    },
    input: {
        flex: 1,
        margin: 2,
        borderWidth: 1,
        height: 30,
        padding: 5,
        borderRadius: 5,
        borderColor: "rgba(0,0,0,0.4)"
    },
    rowContainer: {
        flexDirection: 'row'
    }
});
