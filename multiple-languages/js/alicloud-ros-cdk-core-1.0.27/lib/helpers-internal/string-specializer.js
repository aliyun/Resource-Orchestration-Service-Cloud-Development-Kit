"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.translateAssetTokenToRosToken = exports.translateRosTokenToAssetToken = exports.resolvedOr = exports.StringSpecializer = exports.generateRandomString = void 0;
const cxapi = require("@alicloud/ros-cdk-cxapi");
const ros_pseudo_1 = require("../ros-pseudo");
const token_1 = require("../token");
/**
 * A "replace-all" function that doesn't require us escaping a literal string to a regex
 */
function replaceAll(s, search, replace) {
    return s.split(search).join(replace);
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
    static validateNoTokens(s, what) {
        if (token_1.Token.isUnresolved(s)) {
            throw new Error(`${what} may not contain tokens; only the following literal placeholder strings are allowed: ` + [
                '${Qualifier}',
                cxapi.EnvironmentPlaceholders.CURRENT_REGION,
                cxapi.EnvironmentPlaceholders.CURRENT_ACCOUNT,
            ].join(', ') + `. Got: ${s}`);
        }
    }
    /**
     * Function to replace placeholders in the input string as much as possible
     *
     * We replace:
     * - ${Qualifier}: always
     * - ${ALIYUN::AccountId}, ${ALIYUN::Region}: only if we have the actual values available
     */
    specialize(s) {
        s = replaceAll(s, '${Qualifier}', this.qualifier);
        return cxapi.EnvironmentPlaceholders.replace(s, {
            region: resolvedOr(this.stack.region, cxapi.EnvironmentPlaceholders.CURRENT_REGION),
            accountId: resolvedOr(this.stack.account, cxapi.EnvironmentPlaceholders.CURRENT_ACCOUNT),
        });
    }
    /**
     * Specialize the given string, make sure it doesn't contain tokens
     */
    specializeNoTokens(s, what) {
        StringSpecializer.validateNoTokens(s, what);
        return this.specialize(s);
    }
    /**
     * Specialize only the qualifier
     */
    qualifierOnly(s) {
        return replaceAll(s, '${Qualifier}', this.qualifier);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLXNwZWNpYWxpemVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsic3RyaW5nLXNwZWNpYWxpemVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLGlEQUFpRDtBQUNqRCw4Q0FBMEM7QUFFMUMsb0NBQWlDO0FBRWpDOztHQUVHO0FBQ0gsU0FBUyxVQUFVLENBQUMsQ0FBUyxFQUFFLE1BQWMsRUFBRSxPQUFlO0lBQzVELE9BQU8sQ0FBQyxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLENBQUM7QUFDdkMsQ0FBQztBQUVELFNBQWdCLG9CQUFvQixDQUFDLE1BQWM7SUFDakQsTUFBTSxVQUFVLEdBQUcsc0NBQXNDLENBQUM7SUFDMUQsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDO0lBQ2hCLE1BQU0sZ0JBQWdCLEdBQUcsVUFBVSxDQUFDLE1BQU0sQ0FBQztJQUMzQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQy9CLE1BQU0sSUFBSSxVQUFVLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLGdCQUFnQixDQUFDLENBQUMsQ0FBQztLQUMzRTtJQUNELE9BQU8sTUFBTSxDQUFDO0FBQ2hCLENBQUM7QUFSRCxvREFRQztBQUVELE1BQWEsaUJBQWlCO0lBYzVCLFlBQTZCLEtBQVksRUFBbUIsU0FBaUI7UUFBaEQsVUFBSyxHQUFMLEtBQUssQ0FBTztRQUFtQixjQUFTLEdBQVQsU0FBUyxDQUFRO0lBQUksQ0FBQztJQWJsRjs7T0FFRztJQUNJLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFTLEVBQUUsSUFBWTtRQUNwRCxJQUFJLGFBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDekIsTUFBTSxJQUFJLEtBQUssQ0FBQyxHQUFHLElBQUksdUZBQXVGLEdBQUc7Z0JBQy9HLGNBQWM7Z0JBQ2QsS0FBSyxDQUFDLHVCQUF1QixDQUFDLGNBQWM7Z0JBQzVDLEtBQUssQ0FBQyx1QkFBdUIsQ0FBQyxlQUFlO2FBQzlDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUMvQjtJQUNILENBQUM7SUFJRDs7Ozs7O09BTUc7SUFDSSxVQUFVLENBQUMsQ0FBUztRQUN6QixDQUFDLEdBQUcsVUFBVSxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ2xELE9BQU8sS0FBSyxDQUFDLHVCQUF1QixDQUFDLE9BQU8sQ0FBQyxDQUFDLEVBQUU7WUFDOUMsTUFBTSxFQUFFLFVBQVUsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLE1BQU0sRUFBRSxLQUFLLENBQUMsdUJBQXVCLENBQUMsY0FBYyxDQUFDO1lBQ25GLFNBQVMsRUFBRSxVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLHVCQUF1QixDQUFDLGVBQWUsQ0FBQztTQUN6RixDQUFDLENBQUM7SUFDTCxDQUFDO0lBRUQ7O09BRUc7SUFDSSxrQkFBa0IsQ0FBQyxDQUFTLEVBQUUsSUFBWTtRQUMvQyxpQkFBaUIsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDNUMsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQzVCLENBQUM7SUFFRDs7T0FFRztJQUNJLGFBQWEsQ0FBQyxDQUFTO1FBQzVCLE9BQU8sVUFBVSxDQUFDLENBQUMsRUFBRSxjQUFjLEVBQUUsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ3ZELENBQUM7Q0FDRjtBQTdDRCw4Q0E2Q0M7QUFFRDs7R0FFRztBQUNILFNBQWdCLFVBQVUsQ0FBSSxDQUFTLEVBQUUsR0FBTTtJQUM3QyxPQUFPLGFBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0FBQ3pDLENBQUM7QUFGRCxnQ0FFQztBQUVELE1BQU0sWUFBWSxHQUFHLENBQUMsbUJBQW1CLEVBQUUsc0JBQXNCLENBQUMsQ0FBQztBQUNuRSxNQUFNLFVBQVUsR0FBRyxDQUFDLHNCQUFTLENBQUMsTUFBTSxFQUFFLHNCQUFTLENBQUMsU0FBUyxDQUFDLENBQUM7QUFFM0Q7O0dBRUc7QUFDSCxTQUFnQiw2QkFBNkIsQ0FBQyxHQUFXO0lBQ3ZELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxVQUFVLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzFDLEdBQUcsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUMsRUFBRSxZQUFZLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN2RDtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQUxELHNFQUtDO0FBRUQ7O0dBRUc7QUFDSCxTQUFnQiw2QkFBNkIsQ0FBQyxHQUFXO0lBQ3ZELEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxZQUFZLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1FBQzVDLEdBQUcsR0FBRyxVQUFVLENBQUMsR0FBRyxFQUFFLFlBQVksQ0FBQyxDQUFDLENBQUMsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztLQUN2RDtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQztBQUxELHNFQUtDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY3hhcGkgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY3hhcGknO1xuaW1wb3J0IHsgUm9zUHNldWRvIH0gZnJvbSAnLi4vcm9zLXBzZXVkbyc7XG5pbXBvcnQgeyBTdGFjayB9IGZyb20gJy4uL3N0YWNrJztcbmltcG9ydCB7IFRva2VuIH0gZnJvbSAnLi4vdG9rZW4nO1xuXG4vKipcbiAqIEEgXCJyZXBsYWNlLWFsbFwiIGZ1bmN0aW9uIHRoYXQgZG9lc24ndCByZXF1aXJlIHVzIGVzY2FwaW5nIGEgbGl0ZXJhbCBzdHJpbmcgdG8gYSByZWdleFxuICovXG5mdW5jdGlvbiByZXBsYWNlQWxsKHM6IHN0cmluZywgc2VhcmNoOiBzdHJpbmcsIHJlcGxhY2U6IHN0cmluZykge1xuICByZXR1cm4gcy5zcGxpdChzZWFyY2gpLmpvaW4ocmVwbGFjZSk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZW5lcmF0ZVJhbmRvbVN0cmluZyhsZW5ndGg6IG51bWJlcik6IHN0cmluZyB7XG4gIGNvbnN0IGNoYXJhY3RlcnMgPSAnYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5JztcbiAgbGV0IHJlc3VsdCA9ICcnO1xuICBjb25zdCBjaGFyYWN0ZXJzTGVuZ3RoID0gY2hhcmFjdGVycy5sZW5ndGg7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICByZXN1bHQgKz0gY2hhcmFjdGVycy5jaGFyQXQoTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogY2hhcmFjdGVyc0xlbmd0aCkpO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmV4cG9ydCBjbGFzcyBTdHJpbmdTcGVjaWFsaXplciB7XG4gIC8qKlxuICAgKiBWYWxpZGF0ZSB0aGF0IHRoZSBnaXZlbiBzdHJpbmcgZG9lcyBub3QgY29udGFpbiB0b2tlbnNcbiAgICovXG4gIHB1YmxpYyBzdGF0aWMgdmFsaWRhdGVOb1Rva2VucyhzOiBzdHJpbmcsIHdoYXQ6IHN0cmluZykge1xuICAgIGlmIChUb2tlbi5pc1VucmVzb2x2ZWQocykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgJHt3aGF0fSBtYXkgbm90IGNvbnRhaW4gdG9rZW5zOyBvbmx5IHRoZSBmb2xsb3dpbmcgbGl0ZXJhbCBwbGFjZWhvbGRlciBzdHJpbmdzIGFyZSBhbGxvd2VkOiBgICsgW1xuICAgICAgICAnJHtRdWFsaWZpZXJ9JyxcbiAgICAgICAgY3hhcGkuRW52aXJvbm1lbnRQbGFjZWhvbGRlcnMuQ1VSUkVOVF9SRUdJT04sXG4gICAgICAgIGN4YXBpLkVudmlyb25tZW50UGxhY2Vob2xkZXJzLkNVUlJFTlRfQUNDT1VOVCxcbiAgICAgIF0uam9pbignLCAnKSArIGAuIEdvdDogJHtzfWApO1xuICAgIH1cbiAgfVxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgc3RhY2s6IFN0YWNrLCBwcml2YXRlIHJlYWRvbmx5IHF1YWxpZmllcjogc3RyaW5nKSB7IH1cblxuICAvKipcbiAgICogRnVuY3Rpb24gdG8gcmVwbGFjZSBwbGFjZWhvbGRlcnMgaW4gdGhlIGlucHV0IHN0cmluZyBhcyBtdWNoIGFzIHBvc3NpYmxlXG4gICAqXG4gICAqIFdlIHJlcGxhY2U6XG4gICAqIC0gJHtRdWFsaWZpZXJ9OiBhbHdheXNcbiAgICogLSAke0FMSVlVTjo6QWNjb3VudElkfSwgJHtBTElZVU46OlJlZ2lvbn06IG9ubHkgaWYgd2UgaGF2ZSB0aGUgYWN0dWFsIHZhbHVlcyBhdmFpbGFibGVcbiAgICovXG4gIHB1YmxpYyBzcGVjaWFsaXplKHM6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgcyA9IHJlcGxhY2VBbGwocywgJyR7UXVhbGlmaWVyfScsIHRoaXMucXVhbGlmaWVyKTtcbiAgICByZXR1cm4gY3hhcGkuRW52aXJvbm1lbnRQbGFjZWhvbGRlcnMucmVwbGFjZShzLCB7XG4gICAgICByZWdpb246IHJlc29sdmVkT3IodGhpcy5zdGFjay5yZWdpb24sIGN4YXBpLkVudmlyb25tZW50UGxhY2Vob2xkZXJzLkNVUlJFTlRfUkVHSU9OKSxcbiAgICAgIGFjY291bnRJZDogcmVzb2x2ZWRPcih0aGlzLnN0YWNrLmFjY291bnQsIGN4YXBpLkVudmlyb25tZW50UGxhY2Vob2xkZXJzLkNVUlJFTlRfQUNDT1VOVCksXG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogU3BlY2lhbGl6ZSB0aGUgZ2l2ZW4gc3RyaW5nLCBtYWtlIHN1cmUgaXQgZG9lc24ndCBjb250YWluIHRva2Vuc1xuICAgKi9cbiAgcHVibGljIHNwZWNpYWxpemVOb1Rva2VucyhzOiBzdHJpbmcsIHdoYXQ6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgU3RyaW5nU3BlY2lhbGl6ZXIudmFsaWRhdGVOb1Rva2VucyhzLCB3aGF0KTtcbiAgICByZXR1cm4gdGhpcy5zcGVjaWFsaXplKHMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFNwZWNpYWxpemUgb25seSB0aGUgcXVhbGlmaWVyXG4gICAqL1xuICBwdWJsaWMgcXVhbGlmaWVyT25seShzOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIHJldHVybiByZXBsYWNlQWxsKHMsICcke1F1YWxpZmllcn0nLCB0aGlzLnF1YWxpZmllcik7XG4gIH1cbn1cblxuLyoqXG4gKiBSZXR1cm4gdGhlIGdpdmVuIHZhbHVlIGlmIHJlc29sdmVkIG9yIGZhbGwgYmFjayB0byBhIGRlZmF1bHRcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHJlc29sdmVkT3I8QT4oeDogc3RyaW5nLCBkZWY6IEEpOiBzdHJpbmcgfCBBIHtcbiAgcmV0dXJuIFRva2VuLmlzVW5yZXNvbHZlZCh4KSA/IGRlZiA6IHg7XG59XG5cbmNvbnN0IEFTU0VUX1RPS0VOUyA9IFsnJHtBTElZVU46OlJlZ2lvbn0nLCAnJHtBTElZVU46OkFjY291bnRJZH0nXTtcbmNvbnN0IFJPU19UT0tFTlMgPSBbUm9zUHNldWRvLnJlZ2lvbiwgUm9zUHNldWRvLmFjY291bnRJZF07XG5cbi8qKlxuICogUmVwbGFjZXMgUk9TIFRva2VucyB3aXRoIGNvcnJlc3BvbmRpbmcgQXNzZXQgVG9rZW5zLlxuICovXG5leHBvcnQgZnVuY3Rpb24gdHJhbnNsYXRlUm9zVG9rZW5Ub0Fzc2V0VG9rZW4oYXJuOiBzdHJpbmcpIHtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBST1NfVE9LRU5TLmxlbmd0aDsgaSsrKSB7XG4gICAgYXJuID0gcmVwbGFjZUFsbChhcm4sIFJPU19UT0tFTlNbaV0sIEFTU0VUX1RPS0VOU1tpXSk7XG4gIH1cbiAgcmV0dXJuIGFybjtcbn1cblxuLyoqXG4gKiBSZXBsYWNlcyBBc3NldCBUb2tlbnMgd2l0aCBjb3JyZXNwb25kaW5nIFJPUyBUb2tlbnMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiB0cmFuc2xhdGVBc3NldFRva2VuVG9Sb3NUb2tlbihhcm46IHN0cmluZykge1xuICBmb3IgKGxldCBpID0gMDsgaSA8IEFTU0VUX1RPS0VOUy5sZW5ndGg7IGkrKykge1xuICAgIGFybiA9IHJlcGxhY2VBbGwoYXJuLCBBU1NFVF9UT0tFTlNbaV0sIFJPU19UT0tFTlNbaV0pO1xuICB9XG4gIHJldHVybiBhcm47XG59XG4iXX0=