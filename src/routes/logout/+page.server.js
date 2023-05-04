import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
    const accessToken = cookies.get('accessToken');

    if(accessToken){
        cookies.delete('accessToken');
    }
    
    throw redirect(303, '/account/login');
}