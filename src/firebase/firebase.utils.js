import firebase from 'firebase/app'
import 'firebase/firestore' // For Database
import 'firebase/auth' // For Authentication


const config = {
    apiKey: "AIzaSyCJ5Rkqrllsqyk3gWQuB3WToyPrQhnZv_Q",
    authDomain: "crwn-db-8c70c.firebaseapp.com",
    projectId: "crwn-db-8c70c",
    storageBucket: "crwn-db-8c70c.appspot.com",
    messagingSenderId: "654232346041",
    appId: "1:654232346041:web:2dfa56f4cd7d2e57ffea68",
    measurementId: "G-T371SNVRJ4"
}

// Initializes the App
firebase.initializeApp(config)

// Assigning your firebase authentication library
export const auth = firebase.auth()
// Assigning your firebase firestore library
export const firestore = firebase.firestore()

const createUserProfileDocument = (userAuth, additionalData)=>{
    const userRef = firestore.collection('users')
    console.log(userRef)
}
createUserProfileDocument()
// Creating a new object from your authentication library for GoogleAuth Provider
const provider = new firebase.auth.GoogleAuthProvider()

// Setting the parameters to select an account prompt
provider.setCustomParameters({prompt:'select_account'})

// Executing this function SignInWithGoogle by calling signInWithPopup
// and providing the provider as the parameter for it using your auth library
export const signInwithGoogle = () => auth.signInWithPopup(provider)

export default firebase