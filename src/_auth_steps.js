/* 
1. create a new projects in console.firebase.google.com.
2. npm install firebase
3. create firebase.init.js there remins the sdk setup configuration code. Then import the getAuth from the " import { getAuth } from 'firebase/auth'; " add pass the app is an argument. 
code become as like [
	Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
export default auth; 
]
4. firebase settings > Authentication > enable Email and Password. 

*/

/* 
** Hosting steps 
1. npm install firebase tools
2. firebase login
3. firebase init 
4. firebase deploy 
*/