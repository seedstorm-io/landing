export const endpoint = "http://localhost:7000/api"
// export const endpoint = "http://api.seedstorm.io/api"

export let isLogged = function()
{
    if (localStorage.getItem("Token")) {
        return true;
    }
    return false;
}