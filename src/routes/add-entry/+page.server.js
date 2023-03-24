// import {  } //firebase functions
export const actions = {
    addEntry: async ({ request }) => {
        const data = await request.formData();
        const { date, content } = data;
        // firebase function
    },
    updateEntryContent: async ({ request }) => {
        const data = await request.formData();
        const { date, content } = data;
        // firebase function
    },
    deleteEntry: async ({ request }) => {
        const data = await request.formData();
        const { date } = data;
        // firebase function
    }
}