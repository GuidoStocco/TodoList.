import {View, Text} from 'react-native';
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
                    <Ionicons name='lock-closed-outline' size={30} color={COLORS.primary}/>
                </View>
                <View style={styles.containerTitlebox1}>
                    <Text style={styles.titlebox1}>Bem-vindo</Text>
                    <Text style={styles.textbox1}>Comece sua jornada rumo à produtividade consciente.</Text>
                </View>
            </View>

            <View style={styles.box2}>
                
            </View>
            
            <View style={styles.box3}>
                
            </View>
        </View>
    )
}