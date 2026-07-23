import {View, Text} from 'react-native';
import { Control, FieldErrors, UseFormHandleSubmit, Controller } from 'react-hook-form';
import { SignupFormData } from '@/hooks/useSignUp';

interface SignupProps {
    control: Control<SignupFormData>
    handleSubmit: UseFormHandleSubmit<SignupFormData>,
    errors: FieldErrors<SignupFormData>,
    isSubmitting: boolean,
    onSubmit: (data: SignupFormData) => Promise<void>
}



export default function SignupScreen({control, handleSubmit, errors, isSubmitting, onSubmit}: SignupProps) {
    return(
        <View>
            <Text>SignUpSCREEN</Text>
        </View>
    )
}