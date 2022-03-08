import Url from "../models/Url";
import { HTTP_URL_MODIFIED, SSH_URL_MODIFIED } from "./actions";
import { HTTP_FIELD, SSH_FIELD } from "../models/Constants";

export const initialState = {
  HTTP: "",
  SSH: "",
  errors: {
    HTTP: false,
    SSH: false
  }
}

export function formReducer(state = initialState, action) {
  switch (action.type) {
    case SSH_URL_MODIFIED: {
      console.log(action);
      return {
        ...state
      };
    }
    case HTTP_URL_MODIFIED: return {
      ...state
    };
    default: return state;
  }
}

function validateAndUpdateFields(state, fieldName) {
  const value = state[fieldName];

  if (!value) {
    this.resetState();
    return;
  }

  const url = new Url(value);

  switch(fieldName) {
    case SSH_FIELD:
      if(url.isSSHUrl() && url.isValid()) {
        state.errors.sshUrl = false;
        state.httpUrl = url.toHttpsUrl();
      } else {
        state.errors.sshUrl = true;
      }
      break;
    case HTTP_FIELD:
      if(url.isHttpsUrl() && url.isValid()) {
        state.errors.httpUrl = false;
        state.sshUrl = url.toSSHUrl();
      } else {
        state.errors.httpUrl = true;
      }
      break;
  }
  return state;
}
