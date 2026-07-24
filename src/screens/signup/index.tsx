import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { Control, FieldErrors, UseFormHandleSubmit, Controller } from 'react-hook-form';
import { SignupFormData } from '@/hooks/useSignUp';
import { styles } from '@/styles/signupStyle'; 
import { Ionicons } from '@react-native-vector-icons/ionicons';
import { COLORS } from '@/constants/COLORS';


interface SignupProps {
    control: Control<SignupFormData>
    handleSubmit: UseFormHandleSubmit<SignupFormData>,
    errors: FieldErrors<SignupFormData>,
    isSubmitting: boolean,
    onSubmit: (data: SignupFormData) => Promise<void>
}



export default function SignupScreen({control, handleSubmit, errors, isSubmitting, onSubmit}: SignupProps) {
    return(
        <View style={styles.container}>
            <View style={styles.box1}>
                <View style={styles.containerIcon}>
                    <Ionicons name='cube-outline' size={30} color={COLORS.primary}/>
                </View>
                <View style={styles.containerTitlebox1}>
                    <Text style={styles.titlebox1}>Bem-vindo</Text>
                    <Text style={styles.textbox1}>Comece sua jornada rumo à produtividade consciente.</Text>
                </View>
            </View>

            <View style={styles.box2}>
                <Text style={styles.nameBox2}>Nome</Text>   
                <View style={styles.containerInput}>
                    <Ionicons name='person-outline' size={28} color={COLORS.text}/>
                    <Controller
                        control={control}
                        name='username'
                        defaultValue=''
                        render={({field: {onBlur, onChange,value}}) => (
                            <View style={{flex: 1}}>
                                <TextInput
                                    placeholder='Ravena Stocco'
                                    placeholderTextColor={COLORS.text}
                                    autoCapitalize='words'
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    style={styles.textInput}

                                />
                            </View>
                        )}
                    />
                </View>

                <Text style={styles.nameBox2}>Email</Text>   
                <View style={styles.containerInput}>
                    <Ionicons name='mail-outline' size={28} color={COLORS.text}/>
                    <Controller
                        control={control}
                        name='email'
                        defaultValue=''
                        render={({field: {onBlur, onChange,value}}) => (
                            <View style={{flex: 1}}>
                                <TextInput
                                    placeholder='hello@example.com'
                                    placeholderTextColor={COLORS.text}
                                    autoCapitalize='words'
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    style={styles.textInput}
                                />
                            </View>
                        )}
                    />
                </View>

                <Text style={styles.nameBox2}>Senha</Text>   
                <View style={styles.containerInput}>
                    <Ionicons name='lock-closed-outline' size={30} color={COLORS.text}/>
                    <Controller
                        control={control}
                        name='password'
                        defaultValue=''
                        render={({field: {onBlur, onChange,value}}) => (
                            <View style={{flex: 1}}>
                                <TextInput
                                    placeholder='********'
                                    placeholderTextColor={COLORS.text}
                                    autoCapitalize='words'
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    style={styles.textInput}
                                />
                            </View>
                        )}
                    />
                </View>

                <Text style={styles.nameBox2}>Confirmar senha</Text>   
                <View style={styles.containerInput}>
                    <Ionicons name='lock-closed-outline' size={30} color={COLORS.text}/>
                    <Controller
                        control={control}
                        name='confirmPassword'
                        defaultValue=''
                        render={({field: {onBlur, onChange,value}}) => (
                            <View style={{flex: 1}}>
                                <TextInput
                                    placeholder='********'
                                    placeholderTextColor={COLORS.text}
                                    autoCapitalize='words'
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    style={styles.textInput}
                                />
                            </View>
                        )}
                    />
                </View>
            </View>
            
            <View style={styles.box3}>
                <View style={styles.containerBox3}>
                        <TouchableOpacity style={styles.btnBox3}>
                            <Text style={styles.textBtn}>Cadastrar...</Text>
                        </TouchableOpacity>

                        <View style={styles.viewConta}>
                            <Text>Já tem uma conta?</Text>
                            <TouchableOpacity>
                                <Text>Entre agora</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </View>
        </View>
    )
}