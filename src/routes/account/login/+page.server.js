import fb from '$lib/db/db-firebase';

export const actions = {
    login: async ({ request }) => {
        const data = await request.formData();
        const { email, password } = data;

        const user = await fb.login(email, password);
        console.log(user);

        return { success: true };
    },
    signup: async ({ request }) => {
        const data = await request.formData();
        const { email, password } = data;

        await fb.signup(email, password);

        return { success: true }
    },
    reauth: async ({ request }) => {
        return { success: true };
    }
}