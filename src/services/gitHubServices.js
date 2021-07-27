import api from "./api";

export async function getDepositListRequest(name) {
  return api
    .get(`/users/${name}`)
    .then((response) => {
      if (response) {
        return response.data.name;
      }
      return false;
    })
    .catch((error) => {
      return error;
    });
}
