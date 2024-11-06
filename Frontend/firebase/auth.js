import { auth } from "./firebase";
export const doCreateUserWithEmailAndPassword = async (email, password) =>{

    return createUserWithEmailAndPassword(auth, email, password);
};
// 10:38