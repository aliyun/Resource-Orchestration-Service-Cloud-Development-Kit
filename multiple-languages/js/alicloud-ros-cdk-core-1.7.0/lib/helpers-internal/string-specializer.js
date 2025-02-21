"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translateAssetTokenToRosToken = exports.translateRosTokenToAssetToken = exports.resolvedOr = exports.StringSpecializer = exports.generateRandomString = void 0;
const cxapi = require("@alicloud/ros-cdk-cxapi");
const ros_pseudo_1 = require("../ros-pseudo");
const token_1 = require("../token");
/**
 * A "replace-all" function that doesn't require us escaping a literal string to a regex
 */
function replaceAll(str, search, replace) {
    return str.split(search).join(replace);
}
function generateRandomString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}
exports.generateRandomString = generateRandomString;
class StringSpecializer {
    constructor(stack, qualifier) {
        this.stack = stack;
        this.qualifier = qualifier;
    }
    /**
     * Validate that the given string does not contain tokens
     */
    static validateNoTokens(str, what) {
        if (token_1.Token.isUnresolved(str)) {
            throw new Error(`${what} may not contain tokens; only the following literal placeholder strings are allowed: ` + [
                '${Qualifier}',
                cxapi.EnvironmentPlaceholders.CURRENT_REGION,
                cxapi.EnvironmentPlaceholders.CURRENT_ACCOUNT,
            ].join(', ') + `. Got: ${str}`);
        }
    }
    /**
     * Function to replace placeholders in the input string as much as possible
     *
     * We replace:
     * - ${Qualifier}: always
     * - ${ALIYUN::AccountId}, ${ALIYUN::Region}: only if we have the actual values available
     */
    specialize(str) {
        str = replaceAll(str, '${Qualifier}', this.qualifier);
        return cxapi.EnvironmentPlaceholders.replace(str, {
            region: resolvedOr(this.stack.region, cxapi.EnvironmentPlaceholders.CURRENT_REGION),
            accountId: resolvedOr(this.stack.account, cxapi.EnvironmentPlaceholders.CURRENT_ACCOUNT),
        });
    }
    /**
     * Specialize the given string, make sure it doesn't contain tokens
     */
    specializeNoTokens(str, what) {
        StringSpecializer.validateNoTokens(str, what);
        return this.specialize(str);
    }
    /**
     * Specialize only the qualifier
     */
    qualifierOnly(str) {
        return replaceAll(str, '${Qualifier}', this.qualifier);
    }
}
exports.StringSpecializer = StringSpecializer;
/**
 * Return the given value if resolved or fall back to a default
 */
function resolvedOr(x, def) {
    return token_1.Token.isUnresolved(x) ? def : x;
}
exports.resolvedOr = resolvedOr;
const ASSET_TOKENS = ['${ALIYUN::Region}', '${ALIYUN::AccountId}'];
const ROS_TOKENS = [ros_pseudo_1.RosPseudo.region, ros_pseudo_1.RosPseudo.accountId];
/**
 * Replaces ROS Tokens with corresponding Asset Tokens.
 */
function translateRosTokenToAssetToken(arn) {
    for (let i = 0; i < ROS_TOKENS.length; i++) {
        arn = replaceAll(arn, ROS_TOKENS[i], ASSET_TOKENS[i]);
    }
    return arn;
}
exports.translateRosTokenToAssetToken = translateRosTokenToAssetToken;
/**
 * Replaces Asset Tokens with corresponding ROS Tokens.
 */
function translateAssetTokenToRosToken(arn) {
    for (let i = 0; i < ASSET_TOKENS.length; i++) {
        arn = replaceAll(arn, ASSET_TOKENS[i], ROS_TOKENS[i]);
    }
    return arn;
}
exports.translateAssetTokenToRosToken = translateAssetTokenToRosToken;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLXNwZWNpYWxpemVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RyaW5nLXNwZWNpYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlEQUFpRDtBQUNqRCw4Q0FBMEM7QUFFMUMsb0NBQWlDO0FBRWpDOztHQUVHO0FBQ0gsU0FBUyxVQUFVLENBQUMsR0FBVyxFQUFFLE1BQWMsRUFBRSxPQUFlO0lBQzlELE9BQU8sR0FBRyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDekMsQ0FBQztBQUVELFNBQWdCLG9CQUFvQixDQUFDLE1BQWM7SUFDakQsTUFBTSxVQUFVLEdBQUcsc0NBQXNDLENBQUM7SUFDMUQsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLE1BQU0sZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUMzQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQy9CLE1BQU0sSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLGdCQUFnQixDQUFDLENBQUMsQ0FBQztLQUMzRTtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFSRCxvREFRQztBQUVELE1BQWEsaUJBQWlCO0lBYzVCLFlBQTZCLEtBQVksRUFBbUIsU0FBaUI7UUFBaEQsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUFtQixjQUFTLEdBQVQsU0FBUyxDQUFRO0lBQUksQ0FBQztJQWJsRjs7T0FFRztJQUNJLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFXLEVBQUUsSUFBWTtRQUN0RCxJQUFJLGFBQUssQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLEVBQUU7WUFDM0IsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksdUZBQXVGLEdBQUc7Z0JBQy9HLGNBQWM7Z0JBQ2QsS0FBSyxDQUFDLHVCQUF1QixDQUFDLGNBQWM7Z0JBQzVDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxlQUFlO2FBQzlDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsR0FBRyxFQUFFLENBQUMsQ0FBQztTQUNqQztJQUNILENBQUM7SUFJRDs7Ozs7O09BTUc7SUFDSSxVQUFVLENBQUMsR0FBVztRQUMzQixHQUFHLEdBQUcsVUFBVSxDQUFDLEdBQUcsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3RELE9BQU8sS0FBSyxDQUFDLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUU7WUFDaEQsTUFBTSxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsdUJBQXVCLENBQUMsY0FBYyxDQUFDO1lBQ25GLFNBQVMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLHVCQUF1QixDQUFDLGVBQWUsQ0FBQztTQUN6RixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxrQkFBa0IsQ0FBQyxHQUFXLEVBQUUsSUFBWTtRQUNqRCxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7T0FFRztJQUNJLGFBQWEsQ0FBQyxHQUFXO1FBQzlCLE9BQU8sVUFBVSxDQUFDLEdBQUcsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3pELENBQUM7Q0FDRjtBQTdDRCw4Q0E2Q0M7QUFFRDs7R0FFRztBQUNILFNBQWdCLFVBQVUsQ0FBSSxDQUFTLEVBQUUsR0FBTTtJQUM3QyxPQUFPLGFBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pDLENBQUM7QUFGRCxnQ0FFQztBQUVELE1BQU0sWUFBWSxHQUFHLENBQUMsbUJBQW1CLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztBQUNuRSxNQUFNLFVBQVUsR0FBRyxDQUFDLHNCQUFTLENBQUMsTUFBTSxFQUFFLHNCQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFM0Q7O0dBRUc7QUFDSCxTQUFnQiw2QkFBNkIsQ0FBQyxHQUFXO0lBQ3ZELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzFDLEdBQUcsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN2RDtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQUxELHNFQUtDO0FBRUQ7O0dBRUc7QUFDSCxTQUFnQiw2QkFBNkIsQ0FBQyxHQUFXO0lBQ3ZELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzVDLEdBQUcsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN2RDtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQUxELHNFQUtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY3hhcGkgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY3hhcGknO1xuaW1wb3J0IHsgUm9zUHNldWRvIH0gZnJvbSAnLi4vcm9zLXBzZXVkbyc7XG5pbXBvcnQgeyBTdGFjayB9IGZyb20gJy4uL3N0YWNrJztcbmltcG9ydCB7IFRva2VuIH0gZnJvbSAnLi4vdG9rZW4nO1xuXG4vKipcbiAqIEEgXCJyZXBsYWNlLWFsbFwiIGZ1bmN0aW9uIHRoYXQgZG9lc24ndCByZXF1aXJlIHVzIGVzY2FwaW5nIGEgbGl0ZXJhbCBzdHJpbmcgdG8gYSByZWdleFxuICovXG5mdW5jdGlvbiByZXBsYWNlQWxsKHN0cjogc3RyaW5nLCBzZWFyY2g6IHN0cmluZywgcmVwbGFjZTogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIuc3BsaXQoc2VhcmNoKS5qb2luKHJlcGxhY2UpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2VuZXJhdGVSYW5kb21TdHJpbmcobGVuZ3RoOiBudW1iZXIpOiBzdHJpbmcge1xuICBjb25zdCBjaGFyYWN0ZXJzID0gJ2FiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6MDEyMzQ1Njc4OSc7XG4gIGxldCByZXN1bHQgPSAnJztcbiAgY29uc3QgY2hhcmFjdGVyc0xlbmd0aCA9IGNoYXJhY3RlcnMubGVuZ3RoO1xuICBmb3IgKGxldCBpID0gMDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgcmVzdWx0ICs9IGNoYXJhY3RlcnMuY2hhckF0KE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGNoYXJhY3RlcnNMZW5ndGgpKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5leHBvcnQgY2xhc3MgU3RyaW5nU3BlY2lhbGl6ZXIge1xuICAvKipcbiAgICogVmFsaWRhdGUgdGhhdCB0aGUgZ2l2ZW4gc3RyaW5nIGRvZXMgbm90IGNvbnRhaW4gdG9rZW5zXG4gICAqL1xuICBwdWJsaWMgc3RhdGljIHZhbGlkYXRlTm9Ub2tlbnMoc3RyOiBzdHJpbmcsIHdoYXQ6IHN0cmluZykge1xuICAgIGlmIChUb2tlbi5pc1VucmVzb2x2ZWQoc3RyKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGAke3doYXR9IG1heSBub3QgY29udGFpbiB0b2tlbnM7IG9ubHkgdGhlIGZvbGxvd2luZyBsaXRlcmFsIHBsYWNlaG9sZGVyIHN0cmluZ3MgYXJlIGFsbG93ZWQ6IGAgKyBbXG4gICAgICAgICcke1F1YWxpZmllcn0nLFxuICAgICAgICBjeGFwaS5FbnZpcm9ubWVudFBsYWNlaG9sZGVycy5DVVJSRU5UX1JFR0lPTixcbiAgICAgICAgY3hhcGkuRW52aXJvbm1lbnRQbGFjZWhvbGRlcnMuQ1VSUkVOVF9BQ0NPVU5ULFxuICAgICAgXS5qb2luKCcsICcpICsgYC4gR290OiAke3N0cn1gKTtcbiAgICB9XG4gIH1cblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IHN0YWNrOiBTdGFjaywgcHJpdmF0ZSByZWFkb25seSBxdWFsaWZpZXI6IHN0cmluZykgeyB9XG5cbiAgLyoqXG4gICAqIEZ1bmN0aW9uIHRvIHJlcGxhY2UgcGxhY2Vob2xkZXJzIGluIHRoZSBpbnB1dCBzdHJpbmcgYXMgbXVjaCBhcyBwb3NzaWJsZVxuICAgKlxuICAgKiBXZSByZXBsYWNlOlxuICAgKiAtICR7UXVhbGlmaWVyfTogYWx3YXlzXG4gICAqIC0gJHtBTElZVU46OkFjY291bnRJZH0sICR7QUxJWVVOOjpSZWdpb259OiBvbmx5IGlmIHdlIGhhdmUgdGhlIGFjdHVhbCB2YWx1ZXMgYXZhaWxhYmxlXG4gICAqL1xuICBwdWJsaWMgc3BlY2lhbGl6ZShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgc3RyID0gcmVwbGFjZUFsbChzdHIsICcke1F1YWxpZmllcn0nLCB0aGlzLnF1YWxpZmllcik7XG4gICAgcmV0dXJuIGN4YXBpLkVudmlyb25tZW50UGxhY2Vob2xkZXJzLnJlcGxhY2Uoc3RyLCB7XG4gICAgICByZWdpb246IHJlc29sdmVkT3IodGhpcy5zdGFjay5yZWdpb24sIGN4YXBpLkVudmlyb25tZW50UGxhY2Vob2xkZXJzLkNVUlJFTlRfUkVHSU9OKSxcbiAgICAgIGFjY291bnRJZDogcmVzb2x2ZWRPcih0aGlzLnN0YWNrLmFjY291bnQsIGN4YXBpLkVudmlyb25tZW50UGxhY2Vob2xkZXJzLkNVUlJFTlRfQUNDT1VOVCksXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU3BlY2lhbGl6ZSB0aGUgZ2l2ZW4gc3RyaW5nLCBtYWtlIHN1cmUgaXQgZG9lc24ndCBjb250YWluIHRva2Vuc1xuICAgKi9cbiAgcHVibGljIHNwZWNpYWxpemVOb1Rva2VucyhzdHI6IHN0cmluZywgd2hhdDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBTdHJpbmdTcGVjaWFsaXplci52YWxpZGF0ZU5vVG9rZW5zKHN0ciwgd2hhdCk7XG4gICAgcmV0dXJuIHRoaXMuc3BlY2lhbGl6ZShzdHIpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwZWNpYWxpemUgb25seSB0aGUgcXVhbGlmaWVyXG4gICAqL1xuICBwdWJsaWMgcXVhbGlmaWVyT25seShzdHI6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHJlcGxhY2VBbGwoc3RyLCAnJHtRdWFsaWZpZXJ9JywgdGhpcy5xdWFsaWZpZXIpO1xuICB9XG59XG5cbi8qKlxuICogUmV0dXJuIHRoZSBnaXZlbiB2YWx1ZSBpZiByZXNvbHZlZCBvciBmYWxsIGJhY2sgdG8gYSBkZWZhdWx0XG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlZE9yPEE+KHg6IHN0cmluZywgZGVmOiBBKTogc3RyaW5nIHwgQSB7XG4gIHJldHVybiBUb2tlbi5pc1VucmVzb2x2ZWQoeCkgPyBkZWYgOiB4O1xufVxuXG5jb25zdCBBU1NFVF9UT0tFTlMgPSBbJyR7QUxJWVVOOjpSZWdpb259JywgJyR7QUxJWVVOOjpBY2NvdW50SWR9J107XG5jb25zdCBST1NfVE9LRU5TID0gW1Jvc1BzZXVkby5yZWdpb24sIFJvc1BzZXVkby5hY2NvdW50SWRdO1xuXG4vKipcbiAqIFJlcGxhY2VzIFJPUyBUb2tlbnMgd2l0aCBjb3JyZXNwb25kaW5nIEFzc2V0IFRva2Vucy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHRyYW5zbGF0ZVJvc1Rva2VuVG9Bc3NldFRva2VuKGFybjogc3RyaW5nKSB7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgUk9TX1RPS0VOUy5sZW5ndGg7IGkrKykge1xuICAgIGFybiA9IHJlcGxhY2VBbGwoYXJuLCBST1NfVE9LRU5TW2ldLCBBU1NFVF9UT0tFTlNbaV0pO1xuICB9XG4gIHJldHVybiBhcm47XG59XG5cbi8qKlxuICogUmVwbGFjZXMgQXNzZXQgVG9rZW5zIHdpdGggY29ycmVzcG9uZGluZyBST1MgVG9rZW5zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlQXNzZXRUb2tlblRvUm9zVG9rZW4oYXJuOiBzdHJpbmcpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBBU1NFVF9UT0tFTlMubGVuZ3RoOyBpKyspIHtcbiAgICBhcm4gPSByZXBsYWNlQWxsKGFybiwgQVNTRVRfVE9LRU5TW2ldLCBST1NfVE9LRU5TW2ldKTtcbiAgfVxuICByZXR1cm4gYXJuO1xufVxuIl19