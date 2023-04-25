import { redirect } from "@sveltejs/kit";
import { auth } from "../../firebase";

export async function load(){
    throw redirect(307, "/account/login");

    try {
        await auth.currentUser.getIdToken(false);
        throw redirect(307, "/account/details");
    }catch(e){
        throw redirect(307, "/account/login");
    }
}