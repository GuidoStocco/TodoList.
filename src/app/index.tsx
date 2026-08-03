import { useEffect } from 'react';
import { Redirect, useRouter } from 'expo-router';
import {View,ActivityIndicator} from 'react-native';
import SignIn from './(auth)/signin/page';
import SignUp from './(auth)/signup/page';

export default function App() {

  const router = useRouter();

 return(
    <SignIn/>
 )
}

