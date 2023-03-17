/** @type {import('./$types').Actions} */
export const actions = {
    changeEmail: async ({ request }) => {
        const data = await request.formData();
        const newEmail = data.get('newEmail');
        const newEmailRepeat = data.get('newEmailConfirm');

        console.log(newEmail, newEmailRepeat);
    }
}