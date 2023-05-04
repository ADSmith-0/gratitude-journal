import { redirect } from '@sveltejs/kit';

export const handle = async ({ event, resolve }) => {
    const accessToken = event.cookies.get('accessToken');
    const pathname = event.url.pathname;

    if(pathname.startsWith('/account/details') && !accessToken){
        throw redirect(303, '/account/login');
    }

    const response = await resolve(event);
    return response;
}