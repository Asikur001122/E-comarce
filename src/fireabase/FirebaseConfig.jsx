// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import {getFirestore} from 'firebase/firestore';
// import {getAuth} from 'firebase/auth';


// // Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: "AIzaSyDoJvalILWn6esetahpL9BGRT__B5azWvI",
//   authDomain: "myfirstapp-38751.firebaseapp.com",
//   projectId: "myfirstapp-38751",
//   storageBucket: "myfirstapp-38751.appspot.com",
//   messagingSenderId: "273202707457",
//   appId: "1:273202707457:web:5724f212508b5b82f31400"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);

// const fireDB = getFirestore(app);
// const auth = getAuth(app);

// export {fireDB, auth}

////////////////////////////////////







// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from 'firebase/firestore'
import {getAuth} from 'firebase/auth' 


const firebaseConfig = {
  apiKey: "AIzaSyASQos1xwpy7Mz9m67d2NzEonpQv0Eh5cw",
  authDomain: "myprojact-6f674.firebaseapp.com",
  projectId: "myprojact-6f674",
  storageBucket: "myprojact-6f674.appspot.com",
  messagingSenderId: "620012891439",
  appId: "1:620012891439:web:c2b001cbce020c9d4105da"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app)
const auth = getAuth(app)

export {fireDB, auth}