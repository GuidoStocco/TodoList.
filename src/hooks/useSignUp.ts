import {useForm} from 'react-hook-form';
import {z} from 'zod';
import {zodResolver} from '@hookform/resolvers/zod'
import {useRouter} from 'expo-router'

const SignupSchema = z.object({
    name: z.string().min(1,"Nome é obrigatório"),
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


    const onSubmit = () => {
        try {


            
        } catch (error) {
            console.log(error)
        }
    }


    return{
        control,
        handleSubmit,
        errors,
        isSubmitting
    }
}


export default useSignup;