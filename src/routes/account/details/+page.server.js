import { redirect } from '@sveltejs/kit';

export async function load({ cookies }){
    const accessToken = cookies.get('accessToken') || undefined;

    if(!accessToken){
        throw redirect(303, '/account/login');
    }
}

export const actions = {
    changeEmail: async ({ request }) => {
        const data = await request.formData();
        const newEmail = data.get('newEmail');
        const newEmailRepeat = data.get('newEmailConfirm');

        console.log(newEmail, newEmailRepeat);
    }
}