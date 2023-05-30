import { redirect } from '@sveltejs/kit';

export async function load({ cookies }){
    const accessToken = cookies.get('accessToken') || undefined;

    if(!accessToken){
        throw redirect(303, '/account/login');
    }
}