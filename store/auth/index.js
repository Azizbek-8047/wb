export const state = () => ({
    isNavber: false,
})

export const mutations = {
    setNavbar(state, payload) {
        state.isNavber = payload
    }
}

export const getters = ({
    getNavbar: state => state.isNavber
})