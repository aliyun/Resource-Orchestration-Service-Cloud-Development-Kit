"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeployFailed = exports.NetworkError = void 0;
class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NetworkError';
    }
}
exports.NetworkError = NetworkError;
class DeployFailed extends Error {
    constructor(message) {
        super(message);
        this.name = 'DeployFailed';
    }
}
exports.DeployFailed = DeployFailed;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXhjZXB0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiZXhjZXB0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLE1BQWEsWUFBYSxTQUFRLEtBQUs7SUFDbkMsWUFBWSxPQUFlO1FBQ3ZCLEtBQUssQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxJQUFJLEdBQUcsY0FBYyxDQUFBO0lBQzlCLENBQUM7Q0FDSjtBQUxELG9DQUtDO0FBRUQsTUFBYSxZQUFhLFNBQVEsS0FBSztJQUNuQyxZQUFZLE9BQWU7UUFDdkIsS0FBSyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ2YsSUFBSSxDQUFDLElBQUksR0FBRyxjQUFjLENBQUE7SUFDOUIsQ0FBQztDQUNKO0FBTEQsb0NBS0MiLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgY2xhc3MgTmV0d29ya0Vycm9yIGV4dGVuZHMgRXJyb3Ige1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2U6IHN0cmluZykge1xuICAgICAgICBzdXBlcihtZXNzYWdlKTtcbiAgICAgICAgdGhpcy5uYW1lID0gJ05ldHdvcmtFcnJvcidcbiAgICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEZXBsb3lGYWlsZWQgZXh0ZW5kcyBFcnJvciB7XG4gICAgY29uc3RydWN0b3IobWVzc2FnZTogc3RyaW5nKSB7XG4gICAgICAgIHN1cGVyKG1lc3NhZ2UpO1xuICAgICAgICB0aGlzLm5hbWUgPSAnRGVwbG95RmFpbGVkJ1xuICAgIH1cbn0iXX0=