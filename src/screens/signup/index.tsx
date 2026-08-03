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
    onSubmit: (data: SignupFormData) => Promise<void>,
    handleLogin: () => void
}



export default function SignupScreen({control, handleSubmit, errors, isSubmitting, onSubmit,handleLogin}: SignupProps) {
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
                    {errors.username && <Text style={styles.errorMessage}>{errors.username.message}</Text>} 

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
                                    keyboardType='email-address'
                                    autoCapitalize='none'
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    style={styles.textInput}
                                />
                            </View>
                        )}
                    />
                </View>
                {errors.email && <Text style={styles.errorMessage}>{errors.email.message}</Text>}

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
                                    secureTextEntry={true}
                                    autoCapitalize='none'
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    style={styles.textInput}
                                />
                            </View>
                        )}
                    />
                </View>
                {errors.password && <Text style={styles.errorMessage}>{errors.password.message}</Text>}

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
                                    secureTextEntry={true}
                                    autoCapitalize='none'
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    style={styles.textInput}
                                />
                            </View>
                        )}
                    />
                </View>
                {errors.confirmPassword && <Text style={styles.errorMessage}>{errors.confirmPassword.message}</Text>}
            </View>
            
            <View style={styles.box3}>
                <View style={styles.containerBox3}>
                        <TouchableOpacity style={styles.btnBox3} onPress={handleSubmit(onSubmit)}>
                            <Text style={styles.textBtn}>{isSubmitting ? 'Cadastrando...' : 'Cadastrar'}</Text>
                            <Ionicons name='arrow-forward-outline' size={20} color={COLORS.white}/>
                        </TouchableOpacity>

                        <View style={styles.viewConta}>
                            <Text style={styles.textFoot}>Já tem uma conta?</Text>
                            <TouchableOpacity onPress={handleLogin}>
                                <Text style={styles.textFoot2}>Entre agora</Text>
                            </TouchableOpacity>
                        </View>
                </View>
            </View>
        </View>
    )
}