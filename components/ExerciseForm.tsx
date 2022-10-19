import {StyleSheet, View, Text, TextInput} from "react-native";
import {PressableText} from "./styled/PressableText";
import {useForm, Controller} from "react-hook-form";
import {useState} from "react";

export type ExerciseFormData = {
    name: string,
    duration: string,
    type: string,
    reps?: string
}

type WorkoutProps = {
    onSubmit: (form: ExerciseFormData) => void
}

const selectionItems = ['exercise', 'break', "stretch"];

export default function ExerciseForm({onSubmit}: WorkoutProps) {

    const {control, handleSubmit} = useForm();
    const [isSelectionOn, setSelectionOn] = useState(false);

    return (
        <View style={styles.container}>
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
                                placeholderTextColor={"rgba(0,0,0,0.4)"}
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
                                placeholderTextColor={"rgba(0,0,0,0.4)"}
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
                                placeholderTextColor={"rgba(0,0,0,0.4)"}
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
                            <View style={{flex: 1}}>
                                {isSelectionOn ?
                                    <View>
                                        {selectionItems.map((selection) =>
                                            <PressableText
                                                style={styles.selection}
                                                key={selection}
                                                text={selection}
                                                onPressIn={() => {
                                                    onChange(selection);
                                                    setSelectionOn(false)
                                                }}/>
                                        )}
                                    </View>
                                    : <TextInput
                                        onPressIn={() => setSelectionOn(true)}
                                        style={styles.input}
                                        value={value}
                                        placeholderTextColor={"rgba(0,0,0,0.4)"}
                                        placeholder='Type'
                                    />
                                }
                            </View>
                        }
                    />
                </View>
                <PressableText
                    text="Add Exercise"
                    style={{marginTop:10}}
                    onPress={handleSubmit((data) => {
                        onSubmit(data as ExerciseFormData);
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
    } ,
    selection: {
        margin:2,
        padding:3,
        alignSelf:'center'
    }
});
