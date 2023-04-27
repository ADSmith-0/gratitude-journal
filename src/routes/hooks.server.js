export const handle = async ({ event, resolve }) => {
    event.locals.something = "hello";

    const response = await resolve(event);

    return response;
}