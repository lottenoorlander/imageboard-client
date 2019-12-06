import request from "superagent";

export const JWT = "JWT";

const baseUrl = "http://localhost:4000";

function login(payload) {
  return {
    type: JWT,
    payload
  };
}

export const createLogin = data => dispatch => {
  request
    .post(`${baseUrl}/login`)
    .send(data)
    .then(response => {
      const action = login(response.body);

      dispatch(action);
    })
    .catch(console.error);
};
