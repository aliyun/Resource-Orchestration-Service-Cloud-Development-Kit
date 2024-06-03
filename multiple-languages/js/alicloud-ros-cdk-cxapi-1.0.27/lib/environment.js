"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EnvironmentUtils = exports.UNKNOWN_REGION = exports.UNKNOWN_ACCOUNT = void 0;
/**
 * Parser for the artifact environment field.
 *
 * Account validation is relaxed to allow account aliasing in the future.
 */
const ALIYUN_ENV_REGEX = /aliyun\:\/\/([a-z0-9A-Z\-\@\.\_]+)\/([a-z\-0-9]+)/;
exports.UNKNOWN_ACCOUNT = 'unknown-account';
exports.UNKNOWN_REGION = 'unknown-region';
class EnvironmentUtils {
    static parse(environment) {
        const env = ALIYUN_ENV_REGEX.exec(environment);
        if (!env) {
            throw new Error(`Unable to parse environment specification "${environment}". ` +
                'Expected format: aliyun://account/region');
        }
        const [, account, region] = env;
        if (!account || !region) {
            throw new Error(`Invalid environment specification: ${environment}`);
        }
        return { account, region, name: environment };
    }
    /**
     * Build an environment object from an account and region
     */
    static make(account, region) {
        return { account, region, name: this.format(account, region) };
    }
    /**
     * Format an environment string from an account and region
     */
    static format(account, region) {
        return `aliyun://${account}/${region}`;
    }
}
exports.EnvironmentUtils = EnvironmentUtils;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZW52aXJvbm1lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlbnZpcm9ubWVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQTs7OztHQUlHO0FBQ0gsTUFBTSxnQkFBZ0IsR0FBRyxtREFBbUQsQ0FBQztBQWdCaEUsUUFBQSxlQUFlLEdBQUcsaUJBQWlCLENBQUM7QUFDcEMsUUFBQSxjQUFjLEdBQUcsZ0JBQWdCLENBQUM7QUFFL0MsTUFBYSxnQkFBZ0I7SUFDcEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxXQUFtQjtRQUNyQyxNQUFNLEdBQUcsR0FBRyxnQkFBZ0IsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUM7UUFDL0MsSUFBSSxDQUFDLEdBQUcsRUFBRTtZQUNSLE1BQU0sSUFBSSxLQUFLLENBQ2IsOENBQThDLFdBQVcsS0FBSztnQkFDOUQsMENBQTBDLENBQUMsQ0FBQztTQUMvQztRQUVELE1BQU0sQ0FBQyxFQUFFLE9BQU8sRUFBRSxNQUFNLENBQUMsR0FBRyxHQUFHLENBQUM7UUFDaEMsSUFBSSxDQUFDLE9BQU8sSUFBSSxDQUFDLE1BQU0sRUFBRTtZQUN2QixNQUFNLElBQUksS0FBSyxDQUFDLHNDQUFzQyxXQUFXLEVBQUUsQ0FBQyxDQUFDO1NBQ3RFO1FBRUQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLFdBQVcsRUFBRSxDQUFDO0lBQ2hELENBQUM7SUFFRDs7T0FFRztJQUNJLE1BQU0sQ0FBQyxJQUFJLENBQUMsT0FBZSxFQUFFLE1BQWM7UUFDaEQsT0FBTyxFQUFFLE9BQU8sRUFBRSxNQUFNLEVBQUUsSUFBSSxFQUFFLElBQUksQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE1BQU0sQ0FBQyxFQUFFLENBQUM7SUFDakUsQ0FBQztJQUVEOztPQUVHO0lBQ0ksTUFBTSxDQUFDLE1BQU0sQ0FBQyxPQUFlLEVBQUUsTUFBYztRQUNsRCxPQUFPLFlBQVksT0FBTyxJQUFJLE1BQU0sRUFBRSxDQUFDO0lBQ3pDLENBQUM7Q0FDRjtBQTlCRCw0Q0E4QkMiLCJzb3VyY2VzQ29udGVudCI6WyIvKipcbiAqIFBhcnNlciBmb3IgdGhlIGFydGlmYWN0IGVudmlyb25tZW50IGZpZWxkLlxuICpcbiAqIEFjY291bnQgdmFsaWRhdGlvbiBpcyByZWxheGVkIHRvIGFsbG93IGFjY291bnQgYWxpYXNpbmcgaW4gdGhlIGZ1dHVyZS5cbiAqL1xuY29uc3QgQUxJWVVOX0VOVl9SRUdFWCA9IC9hbGl5dW5cXDpcXC9cXC8oW2EtejAtOUEtWlxcLVxcQFxcLlxcX10rKVxcLyhbYS16XFwtMC05XSspLztcblxuLyoqXG4gKiBNb2RlbHMgYW4gQUxJWVVOIGV4ZWN1dGlvbiBlbnZpcm9ubWVudCwgZm9yIHVzZSB3aXRoaW4gdGhlIENESyB0b29sa2l0LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIEVudmlyb25tZW50IHtcbiAgLyoqIFRoZSBhcmJpdHJhcnkgbmFtZSBvZiB0aGlzIGVudmlyb25tZW50ICh1c2VyLXNldCwgb3IgYXQgbGVhc3QgdXNlci1tZWFuaW5nZnVsKSAqL1xuICByZWFkb25seSBuYW1lOiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBBTElZVU4gYWNjb3VudCB0aGlzIGVudmlyb25tZW50IGRlcGxveXMgaW50byAqL1xuICByZWFkb25seSBhY2NvdW50OiBzdHJpbmc7XG5cbiAgLyoqIFRoZSBBTElZVU4gcmVnaW9uIG5hbWUgd2hlcmUgdGhpcyBlbnZpcm9ubWVudCBkZXBsb3lzIGludG8gKi9cbiAgcmVhZG9ubHkgcmVnaW9uOiBzdHJpbmc7XG59XG5cbmV4cG9ydCBjb25zdCBVTktOT1dOX0FDQ09VTlQgPSAndW5rbm93bi1hY2NvdW50JztcbmV4cG9ydCBjb25zdCBVTktOT1dOX1JFR0lPTiA9ICd1bmtub3duLXJlZ2lvbic7XG5cbmV4cG9ydCBjbGFzcyBFbnZpcm9ubWVudFV0aWxzIHtcbiAgcHVibGljIHN0YXRpYyBwYXJzZShlbnZpcm9ubWVudDogc3RyaW5nKTogRW52aXJvbm1lbnQge1xuICAgIGNvbnN0IGVudiA9IEFMSVlVTl9FTlZfUkVHRVguZXhlYyhlbnZpcm9ubWVudCk7XG4gICAgaWYgKCFlbnYpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYFVuYWJsZSB0byBwYXJzZSBlbnZpcm9ubWVudCBzcGVjaWZpY2F0aW9uIFwiJHtlbnZpcm9ubWVudH1cIi4gYCArXG4gICAgICAgICdFeHBlY3RlZCBmb3JtYXQ6IGFsaXl1bjovL2FjY291bnQvcmVnaW9uJyk7XG4gICAgfVxuXG4gICAgY29uc3QgWywgYWNjb3VudCwgcmVnaW9uXSA9IGVudjtcbiAgICBpZiAoIWFjY291bnQgfHwgIXJlZ2lvbikge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBJbnZhbGlkIGVudmlyb25tZW50IHNwZWNpZmljYXRpb246ICR7ZW52aXJvbm1lbnR9YCk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHsgYWNjb3VudCwgcmVnaW9uLCBuYW1lOiBlbnZpcm9ubWVudCB9O1xuICB9XG5cbiAgLyoqXG4gICAqIEJ1aWxkIGFuIGVudmlyb25tZW50IG9iamVjdCBmcm9tIGFuIGFjY291bnQgYW5kIHJlZ2lvblxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBtYWtlKGFjY291bnQ6IHN0cmluZywgcmVnaW9uOiBzdHJpbmcpOiBFbnZpcm9ubWVudCB7XG4gICAgcmV0dXJuIHsgYWNjb3VudCwgcmVnaW9uLCBuYW1lOiB0aGlzLmZvcm1hdChhY2NvdW50LCByZWdpb24pIH07XG4gIH1cblxuICAvKipcbiAgICogRm9ybWF0IGFuIGVudmlyb25tZW50IHN0cmluZyBmcm9tIGFuIGFjY291bnQgYW5kIHJlZ2lvblxuICAgKi9cbiAgcHVibGljIHN0YXRpYyBmb3JtYXQoYWNjb3VudDogc3RyaW5nLCByZWdpb246IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGBhbGl5dW46Ly8ke2FjY291bnR9LyR7cmVnaW9ufWA7XG4gIH1cbn1cbiJdfQ==