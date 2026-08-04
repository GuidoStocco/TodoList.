import {z} from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod'
import {useRouter} from 'expo-router'
import { authServices } from '@/services/auth-services';


const SigninSchema = z.object({
    email: z.email("Email precisa ser válido"),
    password: z.string().min(1, "A senha está errada")
})

export type SigninFormData = z.infer<typeof SigninSchema>


const useSignIn = () => {

    const router = useRouter();

    const {control, handleSubmit, formState:{isSubmitting, errors}} = useForm<SigninFormData>({
        resolver: zodResolver(SigninSchema)
    })

    const onSubmit = async (data: SigninFormData) => {
        try {

            await authServices.signIn(data.email, data.password)
            router.replace('/(painel)/home/page')
            
        } catch (error) {
            console.log(error)
        }
    }

    const handleScreenCadastrar = () => {
        router.replace('/(auth)/signup/page')
    }

    return{
        control,
        handleSubmit,
        isSubmitting,
        errors,
        handleScreenCadastrar,
        onSubmit
    }

}

export default useSignIn;