import { ActionTree, GetterTree, MutationTree } from 'vuex'

import { RootState } from '~/store'

export const state = () => ({
	data: {
		firstName: '',
		lastName: '',
	} as User,
})

export type UserModuleState = ReturnType<typeof state>

export const getters: GetterTree<RootState, RootState> = {}

export const mutations: MutationTree<UserModuleState> = {
	SET_USER(state: any, user: User) {
		state.data = user
	},
}

export const actions: ActionTree<UserModuleState, RootState> = {
	async fetchUser({ commit }) {
		const u = await new Promise<User>(resolve =>
			resolve({
				firstName: '',
				lastName: '',
			}),
		)
		commit('SET_USER', u)
	},
}
