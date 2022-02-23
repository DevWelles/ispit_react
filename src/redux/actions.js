export const DOHVATI_USERA = "DOHVATI_USERA";
export const PROMIJENI_INPUT_LOGINA = "PROMIJENI_INPUT_LOGINA";
export const LOGIRAJ_SE = "LOGIRAJ_SE";
export const DOHVATI_REPO = "DOHVATI_REPO";
export const RESET = "RESET";

export function promijeniInputLogina(objekt) {
  return { type: PROMIJENI_INPUT_LOGINA, payload: objekt.payload };
}

export function reset() {
  return { type: RESET };
}

export const dohvatiUsera = (input) => async (dispatch) => {
  let user = await fetch(`https://api.github.com/users/${input}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      return data;
    });
  dispatch({ type: DOHVATI_USERA, payload: user });
};

export const dohvatiRepo = (input) => async (dispatch) => {
  let repos = await fetch(`https://api.github.com/users/${input}/repos`)
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
  dispatch({ type: DOHVATI_REPO, payload: repos });
};
