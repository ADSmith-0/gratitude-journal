import { redirect } from "@sveltejs/kit";
import { getAppAuth } from "../../firebase";

export async function load(){
    const auth = getAppAuth();
    try {
        await auth.currentUser.getIdToken(false);
        throw redirect(307, "/account/details");
    }catch(e){
        throw redirect(307, "/account/login");
    }
}