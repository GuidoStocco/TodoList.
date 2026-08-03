import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import { styles } from '@/styles/signinStyles';
import {Ionicons} from '@react-native-vector-icons/ionicons';
import { COLORS } from '@/constants/COLORS';


export default function SignInScreen() {
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
                        <TextInput 
                            placeholder='ravena@gmail.com'
                            placeholderTextColor={COLORS.subTitle}
                            style={styles.input}
                            onPress={() => {}}
                        />
                    </View>
                </View>

                 <View style={styles.containerInputBox2}>
                    <Text style={styles.emailTitle}>Senha</Text>
                    <View style={styles.containerInput}>
                        <Ionicons name='lock-closed-outline' size={28} color={COLORS.subTitle}/>
                        <TextInput 
                            placeholder='ravena@gmail.com'
                            placeholderTextColor={COLORS.subTitle}
                            style={styles.input}
                            onPress={() => {}}
                        />
                    </View>
                </View>

                <View>
                    <TouchableOpacity style={styles.btnForgot} onPress={() => {}}>
                        <Text style={styles.textBtn}>Esqueceu a senha?</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <View style={styles.box3}>
                <View style={styles.containerBox3}>
                    <TouchableOpacity style={styles.btnEntrar}>
                        <Text style={styles.textBtnEntrar}>Entrar</Text>
                    </TouchableOpacity>

                    <View style={styles.containerCriarConta}>
                        <Text style={styles.textCriarConta}>Não tem uma conta?</Text>
                        <TouchableOpacity>
                            <Text style={styles.textBtnCriarConta}>Criar uma conta</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </View>
    )
}