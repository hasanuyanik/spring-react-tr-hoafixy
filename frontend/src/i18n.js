import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
    resources: {
        en:{
            translations: {
                'Sign Up': 'Sign Up',
                'Login': 'Login',
                'Password mismatch': 'Password mismatch',
                Username: 'Username',
                'Display Name': 'Display Name',
                Password: 'Password',
                'Password Repeat': 'Password Repeat',
                Logout: 'Logout'
            }
        },
        tr: {
            translations: {
                'Sign Up': 'Kayıt Ol',
                'Login': 'Giriş Yap',
                'Password mismatch': 'Aynı şifreyi giriniz',
                Username: 'Kullanıcı Adı',
                'Display Name': 'Tercih Edilen İsim',
                Password: 'Şifre',
                'Password Repeat': 'Şifreyi Tekrarla',
                Logout: 'Çıkış'
            }
        }
    },
    fallbackLng: 'en',
    ns: ['translations'],
    defaultNS: 'translations',
    keySeparator: false,
    interpolation: {
        escapeValue: false,
        formatSeparator: ','
    },
    react: {
        wait:true
    }
})

export default i18n;