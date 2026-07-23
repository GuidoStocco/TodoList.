import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'
import {useRouter} from 'expo-router'
import { authServices } from '@/services/auth-services';

const SignupSchema = z.object({
    username: z.string().min(1,"Nome é obrigatório"),
    email: z.email("Email é obrigatório"),
    password: z.string().min(6, "A senha é obrigatório"),
    confirmPassword: z.string().min(6, "A confirmação de senha é obrigatório")
}).refine((data) => data.password === data.confirmPassword,{
    message: 'As senhas não coincidem',
    path: ['confirmPassword']
})

export type SignupFormData = z.infer<typeof SignupSchema>


const useSignup = () => {

    const router = useRouter();

    const {control, handleSubmit, formState:{errors, isSubmitting}} = useForm<SignupFormData>({
        resolver: zodResolver(SignupSchema)
    })


    const onSubmit = async(data: SignupFormData) => {
        try {

            await authServices.signUp(data.email, data.password, data.username);
            router.replace('/(painel)/home/page')
            
        } catch (error) {
            console.log(error)
        }
    }


    return{
        control,
        handleSubmit,
        errors,
        isSubmitting,
        onSubmit
    }
}


export default useSignup;