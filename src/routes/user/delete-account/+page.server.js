import { redirect } from '@sveltejs/kit';
import { deleteSelf } from '$lib/db/db-firebase.js';
import { deleteCookie } from '$lib/server/cookie';

export async function load({ cookies }){
    deleteCookie(cookies, 'accessToken');
    await deleteSelf();
    throw redirect(307, '/account/login');
}