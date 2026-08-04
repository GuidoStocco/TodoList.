import useSignIn from "@/hooks/useSignIn"
import SignInScreen from "@/screens/signin/index"



export default function SignIn () {

    const {control, errors, handleScreenCadastrar,handleSubmit,isSubmitting, onSubmit} = useSignIn()

    return(
        <SignInScreen control={control} errors={errors}
            handleScreenCadastrar={handleScreenCadastrar} handleSubmit={handleSubmit}
            isSubmitting={isSubmitting} onSubmit={onSubmit}
        />
    )
};



