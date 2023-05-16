import { fail } from '@sveltejs/kit';

export const actions = {
    default: async ({ request }) => {
        const data = await request.formData();
        const password = await data.get('password');
        const confirmPassword = await data.get('confirmPassword');

        if(!password || !confirmPassword){
            return fail(400, { error: "Password or password confirmation missing" });
        }

        if(password !== confirmPassword){
            return fail(400, { error: "Passwords do not match" });
        }
    }
}