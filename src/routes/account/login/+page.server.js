import { login, signup } from '$lib/db/db-firebase';
import { fail, redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
    const accessToken = cookies.get('accessToken');

    if (accessToken) {
        throw redirect(303, "/account/details");
    }
}

export const actions = {
    login: async ({ cookies, request }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');

        if (!email || !password) return fail(400, "Email or Password undefined");

        const userCredential = await login(email, password);
        const user = await userCredential.user;

        // TODO: need to handle errors here

        // Set access token as cookie
        cookies.set('accessToken', user.accessToken, {
            path: '/',
            httpOnly: true,
            sameSite: 'strict',
            // TODO set up env variables for secure!
            secure: false,
            maxAge: 60 * 60 * 24 * 30
        });

        throw redirect(303, '/account/login');
    },
    signup: async ({ request }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');

        if(!email || !password) return fail(400, "Email or Password undefined");

        const response = await signup(email, password);
        console.log(response, !response);
        // TODO: need to handle errors here

        return { success: true }
    },
    reauth: async ({ request }) => {
        return { success: true };
    }
}