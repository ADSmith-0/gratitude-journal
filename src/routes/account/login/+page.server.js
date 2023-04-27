import { login, signup } from '$lib/db/db-firebase';
import { fail } from '@sveltejs/kit';

export const actions = {
    login: async ({ request }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');

        if (!email || !password) return fail(400, "Email or Password undefined");

        await login(email, password);

        return { success: true }
    },
    signup: async ({ request }) => {
        const data = await request.formData();
        const email = data.get('email');
        const password = data.get('password');

        if(!email || !password) return fail(400, "Email or Password undefined");

        await signup(email, password);

        return { success: true }
    },
    reauth: async ({ request }) => {
        return { success: true };
    }
}