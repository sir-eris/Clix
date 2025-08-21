// import {} from '../types'

const initialState = {
  commandPalette: {
    // TODO for false
    closeOnNav: true,
  },
  badgeBanner: {
    // TODO create minifying for false
    keepOpen: true,
  },
  dummyProof: {
    // TODO implement
    showMarker: true,
    showDefaultPlaceholder: false,
  },
  endpoints: {},
  models: {},
  settings: {},
  projects: {},
  notifications: {},
  account: {
    // TODO implement
    askOnDelete: false,
  },
  cli: {},
};

export default function (state = initialState, action) {
  switch (action.type) {
    default:
        return state
    }
}
