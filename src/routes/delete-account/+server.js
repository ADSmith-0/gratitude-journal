import { redirect } from '@sveltejs/kit';

export async function GET({ cookies }) {
    const accessToken = cookies.get('accessToken');

    if (accessToken) {
        cookies.delete('accessToken');
    }

    // delete account

    throw redirect(303, '/account/login');
}