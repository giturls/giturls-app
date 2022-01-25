import {GIT_HTTPS_PATTERN_REGEX, GIT_SSH_PATTERN, GIT_SSH_PATTERN_REGEX} from "./Constants";

export class Url {
    url;
    host
    repository;
    organization;

    constructor(url) {
        this.url = url;
        this.parseUrl();
    }

    parseUrl() {
        if (this.isSSHUrl()) {
            this.parseGitUrl();
        } else if (this.isHttpsUrl()) {
            this.parseHttpsUrl();
        } else {
            // todo: handle error
        }
    }

    isSSHUrl = () => {
        return this.url?.match(GIT_SSH_PATTERN_REGEX)?.length < 4;
    }

    isHttpsUrl = () => {
        return this.url?.match(GIT_HTTPS_PATTERN_REGEX)?.length < 4;
    }

    toSSHUrl = () => {
        return `git@${this.host}:${this.organization}/${this.repository}.git`;
    }

    toHttpsUrl = () => {
        return `https://${this.host}/${this.organization}/${this.repository}.git`;
    }

    /**
     * Would be of the form git@github.com:giturls/giturls-app.git
     */
    parseGitUrl() {
        const urlParts = this.url.match(GIT_SSH_PATTERN_REGEX);
        this.host = urlParts[1];
        this.organization = urlParts[2];
        this.repository = urlParts[3];
    }

    /**
     * Would be of the form https://github.com/giturls/giturls-app.git
     */
    parseHttpsUrl() {
        const urlParts = this.url.match(GIT_HTTPS_PATTERN_REGEX);
        this.host = urlParts[1];
        this.organization = urlParts[2];
        this.repository = urlParts[3];
    }
}
