import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    loadedMeetups: [
      {
        imageUrl: "https://www.toronto.ca/wp-content/uploads/2017/07/9163-invest-in-toronto-995x330.png",
        id: 'abc',
        title: 'Meetup in Toronto',
        date: '2018-04-09'
      },
      {
        imageUrl: 'https://www.travelgayasia.com/wp-content/uploads/2012/06/Soeul-City-Guide.jpg',
        id: 'def',
        title: 'Meetup in Seoul',
        date: '2018-04-19'
      }
    ],
    user: {
      id: 'aaa',
      registeredMeetups: ['def']
    }
  },
  mutations: {
    createMeetup(state, payload) {
      state.loadedMeetups.push(payload)
    }
  },
  actions: {
    createMeetup({ commit }, payload) {
      const meetup = {
        title: payload.title,
        location: payload.location,
        imageUrl: payload.imageUrl,
        description: payload.description,
        date: payload.date,
        id: 'kfdlsfjslakl12'
      }
      // Reach out to firebase and store it
      commit('createMeetup', meetup)
    }
  },
  getters: {
    loadedMeetups(state) {
      return state.loadedMeetups.sort((meetupA, meetupB) => {
        return meetupA.date > meetupB.date
      })
    },
    featuredMeetups(state, getters) {
      return getters.loadedMeetups.slice(0, 5)
    },
    loadedMeetup(state) {
      return (meetupId) => {
        return state.loadedMeetups.find((meetup) => {
          return meetup.id === meetupId
        })
      }
    }
  }
})
