import { fail } from '@sveltejs/kit';
import { changePassword } from '$lib/db/db-firebase.js';
import { getError } from '$lib/server/firebase-error-parser.js';

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

        try {
            await changePassword(password);
            return { success: true };
        }catch(error){
            const errorMsg = getError(error.code);
            return fail(400, { error: errorMsg });
        }
    }
}