import {
  DOHVATI_USERA,
  PROMIJENI_INPUT_LOGINA,
  DOHVATI_REPO,
  RESET,
} from "./actions";

const initialState = {
  inputLogina: "",
  user: "",
  repos: undefined,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case PROMIJENI_INPUT_LOGINA: {
      return { ...state, inputLogina: action.payload };
    }
    case RESET: {
      return { ...state, repos: undefined };
    }
    case DOHVATI_USERA:
      return { ...state, user: action.payload };
    case DOHVATI_REPO:
      return { ...state, repos: action.payload };
    default:
      return state;
  }
}
