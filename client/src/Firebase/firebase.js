import firebase from 'firebase/compat/app';
import 'firebase/compat/auth'

const firebaseConfig = {
  apiKey: 'AIzaSyBP7LIwhCMwO3mQsgVKGplhX_7etZzjgiw',
  authDomain: 'bookmyticket-c9405.firebaseapp.com',
  projectId: 'bookmyticket-c9405',
  storageBucket: 'bookmyticket-c9405.appspot.com',
  messagingSenderId: '555679436964',
  appId: '1:555679436964:web:f6084251eba7783737d631',
  measurementId: 'G-RFQM4SHT0V',
}

firebase.initializeApp(firebaseConfig)

export default firebase
