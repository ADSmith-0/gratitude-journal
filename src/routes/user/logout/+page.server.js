import { redirect } from '@sveltejs/kit';
import { deleteCookie } from '$lib/server/cookie.js';

export async function load({ cookies }) {
    const isCookieDeleted = deleteCookie(cookies, 'accessToken');

    if(isCookieDeleted){
        throw redirect(307, '/account/login');
    }
}