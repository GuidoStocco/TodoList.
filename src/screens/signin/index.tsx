import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { styles } from '@/styles/signinStyles';
import {Ionicons} from '@react-native-vector-icons/ionicons';
import { COLORS } from '@/constants/COLORS';
import { SigninFormData } from '@/hooks/useSignIn';
import {Control, Controller, FieldErrors, UseFormHandleSubmit} from 'react-hook-form';


interface SigninProps {
    control: Control<SigninFormData>
    errors: FieldErrors<SigninFormData>
    isSubmitting: boolean
    handleSubmit: UseFormHandleSubmit<SigninFormData>
    handleScreenCadastrar: () => void
    onSubmit: (data: SigninFormData) => Promise<void>
}

export default function SignInScreen({control, errors, handleScreenCadastrar, handleSubmit,isSubmitting, onSubmit}: SigninProps) {
    return(
        <View style={styles.container}>

            <View style={styles.box1}>
                <View style={styles.containerIcon}>
                    <Ionicons name='checkmark-done-outline' size={30} color={COLORS.primary}/>
                </View>
                <View style={styles.containerTitle}>
                    <Text style={styles.title}>Bem-vindo</Text>
                    <Text style={styles.subTitle}>Continue sua jornada ruma à produtividade</Text>
                </View>
            </View>

            <View style={styles.box2}>
                <View>
                    <Text style={styles.emailTitle}>Email</Text>
                    <View style={styles.containerInput}>
                        <Ionicons name='mail-outline' size={28} color={COLORS.subTitle}/>
                        <Controller
                            control={control}
                            name='email'
                            defaultValue=''
                            render={({field: {onBlur,onChange,value}}) => (
                                 <TextInput 
                                    placeholder='ravena@gmail.com'
                                    placeholderTextColor={COLORS.subTitle}
                                    style={styles.input}
                                    value={value}
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    autoCapitalize='none'
                                  />
                            )}
                        />
                    </View>
                </View>
                    {errors.email && <Text style={styles.errorMessage}>{errors.email.message}</Text>}

                <View style={styles.containerInputBox2}>
                    <Text style={styles.emailTitle}>Senha</Text>
                    <View style={styles.containerInput}>
                        <Ionicons name='lock-closed-outline' size={28} color={COLORS.subTitle}/>
                        <Controller
                            control={control}
                            name='password'
                            defaultValue=''
                            render={(({field: {onBlur,onChange,value}}) => (
                                <TextInput 
                                    placeholder='********'
                                    placeholderTextColor={COLORS.subTitle}
                                    style={styles.input}
                                    onChangeText={onChange}
                                    value={value}
                                    onBlur={onBlur}
                                />
                            ))}
                        />
                    </View>
                </View>

                {errors.password && <Text style={styles.errorMessage}>{errors.password.message}</Text>}      

                <View>
                    <TouchableOpacity style={styles.btnForgot} onPress={() => {}}>
                        <Text style={styles.textBtn}>Esqueceu a senha?</Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.containerBtnEntrar}>
                    <TouchableOpacity style={styles.btnEntrar} onPress={handleSubmit(onSubmit)}>
                        <Text style={styles.textBtnEntrar}>{isSubmitting ? 'Entrando...' : 'Entrar agora'}</Text>
                    </TouchableOpacity>
                    <Ionicons name='arrow-forward-outline' size={20} color={COLORS.white}/>
                </View>
                
            </View>

            <View style={styles.box3}>
                <View style={styles.containerBox3}>
                    <View style={styles.containerCriarConta}>
                        <Text style={styles.textCriarConta}>Não tem uma conta?</Text>
                        <TouchableOpacity onPress={handleScreenCadastrar}>
                            <Text style={styles.textBtnCriarConta}>Criar uma conta</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}