import { useApi } from "../composables/api"
import { globalState } from "../store"

export const authService = {
    async useLogin(payload) {

        const { data, error } = await useApi("/login").post(payload).json()

        if (!error.value && data.value) {
            globalState.accessToken = data.value.access_token
        }
    },
    useLogout() {
        useApi("/logout").post().onFetchFinally(() => {
            globalState.accessToken = null
        })
    }
}