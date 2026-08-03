import SignupScreen from "@/screens/signup"
import useSignup from "@/hooks/useSignUp"


export default function SignUp() {

    const {control, handleSubmit, onSubmit, errors, isSubmitting, handleLogin } = useSignup()

    return(
        <SignupScreen control={control} handleSubmit={handleSubmit}
            onSubmit={onSubmit} errors={errors} isSubmitting={isSubmitting}
            handleLogin={handleLogin}
        />
    )
};