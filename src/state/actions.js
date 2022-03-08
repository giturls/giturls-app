export const HTTP_URL_MODIFIED = "HTTP_URL_MODIFIED";
export const SSH_URL_MODIFIED = "SSH_URL_MODIFIED";
export const FORM_RESET = "FORM_RESET";

export function httpUrlModified() {
  return {
    type: HTTP_URL_MODIFIED,
    description: 'Modified the http url'
  }
}

export function sshUrlModified() {
  return {
    type: SSH_URL_MODIFIED,
    description: 'Modified the ssh url'
  }
}

export function formReset() {
  return {
    type: FORM_RESET,
    description: 'Git urls form is reset'
  }
}
