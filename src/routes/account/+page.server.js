import { redirect } from "@sveltejs/kit";
import { auth } from "$lib/db/firebase";

export async function load({ cookies }){
    const accessToken = cookies.get('accessToken');

    if(accessToken){
        throw redirect(307, "/account/details");
    }
    
    throw redirect(307, "/account/login");
}