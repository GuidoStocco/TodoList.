import {z} from 'zod';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod'
import {useRouter} from 'expo-router'



const SigninSchema = z.object({
    email: z.email("Email precisa ser válido"),
    password: z.string().min(1, "A senha está errada")
})

export type SignFormData = z.infer<typeof SigninSchema>


const useSignIn = () => {

    const router = useRouter();

    const {control, handleSubmit, formState:{isSubmitting, errors}} = useForm<SignFormData>({
        resolver: zodResolver(SigninSchema)
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
        isSubmitting,
        errors
    }

}

export default useSignIn;