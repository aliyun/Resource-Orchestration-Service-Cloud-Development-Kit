export class NetworkError extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'NetworkError'
    }
}

export class DeployFailed extends Error {
    constructor(message: string) {
        super(message);
        this.name = 'DeployFailed'
    }
}