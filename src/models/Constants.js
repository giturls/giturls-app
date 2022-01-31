export var GIT_SSH_PATTERN = 'git@([a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\\.[a-zA-Z]{2,})+)\\:([a-zA-Z0-9-]+)\\/([a-zA-Z0-9-]+)\\.git';

export var GIT_HTTPS_PATTERN = '[https:|http:]\\/\\/([a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9](?:\\.[a-zA-Z]{2,})+)\\/([a-zA-Z0-9-]+)\\/([a-zA-Z0-9-]+)\\.git';

export var GIT_SSH_PATTERN_REGEX = new RegExp(GIT_SSH_PATTERN);

export var GIT_HTTPS_PATTERN_REGEX = new RegExp(GIT_HTTPS_PATTERN);

export var SSH_FIELD = "sshUrl";
export var HTTP_FIELD = "httpUrl";
