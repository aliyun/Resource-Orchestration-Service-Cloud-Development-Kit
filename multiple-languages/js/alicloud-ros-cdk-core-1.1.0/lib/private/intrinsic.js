"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Intrinsic = void 0;
const stack_trace_1 = require("../stack-trace");
const token_1 = require("../token");
/**
 * Token subclass that represents values intrinsic to the target document language
 *
 * This class will disappear in a future release and should not be used.
 *
 * @experimental
 */
class Intrinsic {
    constructor(value) {
        if (isFunction(value)) {
            throw new Error(`Argument to Intrinsic must be a plain value object, got ${value}`);
        }
        this.creationStack = stack_trace_1.captureStackTrace();
        this.value = value;
    }
    resolve(_context) {
        return this.value;
    }
    /**
     * Convert an instance of this Token to a string
     *
     * This method will be called implicitly by language runtimes if the object
     * is embedded into a string. We treat it the same as an explicit
     * stringification.
     */
    toString() {
        return token_1.Token.asString(this);
    }
    /**
     * Turn this Token into JSON
     *
     * Called automatically when JSON.stringify() is called on a Token.
     */
    toJSON() {
        // We can't do the right work here because in case we contain a function, we
        // won't know the type of value that function represents (in the simplest
        // case, string or number), and we can't know that without an
        // IResolveContext to actually do the resolution, which we don't have.
        // We used to throw an error, but since JSON.stringify() is often used in
        // error messages to produce a readable representation of an object, if we
        // throw here we'll obfuscate that descriptive error with something worse.
        // So return a string representation that indicates this thing is a token
        // and needs resolving.
        return "<unresolved-token>";
    }
    /**
     * Creates a throwable Error object that contains the token creation stack trace.
     * @param message Error message
     */
    newError(message) {
        return new Error(`${message}\nToken created:\n    at ${this.creationStack.join("\n    at ")}\nError thrown:`);
    }
}
exports.Intrinsic = Intrinsic;
function isFunction(x) {
    return typeof x === "function";
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50cmluc2ljLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW50cmluc2ljLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGdEQUFtRDtBQUNuRCxvQ0FBaUM7QUFFakM7Ozs7OztHQU1HO0FBQ0gsTUFBYSxTQUFTO0lBUXBCLFlBQVksS0FBVTtRQUNwQixJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNyQixNQUFNLElBQUksS0FBSyxDQUNiLDJEQUEyRCxLQUFLLEVBQUUsQ0FDbkUsQ0FBQztTQUNIO1FBRUQsSUFBSSxDQUFDLGFBQWEsR0FBRywrQkFBaUIsRUFBRSxDQUFDO1FBQ3pDLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO0lBQ3JCLENBQUM7SUFFTSxPQUFPLENBQUMsUUFBeUI7UUFDdEMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0lBQ3BCLENBQUM7SUFFRDs7Ozs7O09BTUc7SUFDSSxRQUFRO1FBQ2IsT0FBTyxhQUFLLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRDs7OztPQUlHO0lBQ0ksTUFBTTtRQUNYLDRFQUE0RTtRQUM1RSx5RUFBeUU7UUFDekUsNkRBQTZEO1FBQzdELHNFQUFzRTtRQUV0RSx5RUFBeUU7UUFDekUsMEVBQTBFO1FBQzFFLDBFQUEwRTtRQUMxRSx5RUFBeUU7UUFDekUsdUJBQXVCO1FBQ3ZCLE9BQU8sb0JBQW9CLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7T0FHRztJQUNPLFFBQVEsQ0FBQyxPQUFlO1FBQ2hDLE9BQU8sSUFBSSxLQUFLLENBQ2QsR0FBRyxPQUFPLDRCQUE0QixJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FDM0QsV0FBVyxDQUNaLGlCQUFpQixDQUNuQixDQUFDO0lBQ0osQ0FBQztDQUNGO0FBaEVELDhCQWdFQztBQUVELFNBQVMsVUFBVSxDQUFDLENBQU07SUFDeEIsT0FBTyxPQUFPLENBQUMsS0FBSyxVQUFVLENBQUM7QUFDakMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElSZXNvbHZhYmxlLCBJUmVzb2x2ZUNvbnRleHQgfSBmcm9tIFwiLi4vcmVzb2x2YWJsZVwiO1xuaW1wb3J0IHsgY2FwdHVyZVN0YWNrVHJhY2UgfSBmcm9tIFwiLi4vc3RhY2stdHJhY2VcIjtcbmltcG9ydCB7IFRva2VuIH0gZnJvbSBcIi4uL3Rva2VuXCI7XG5cbi8qKlxuICogVG9rZW4gc3ViY2xhc3MgdGhhdCByZXByZXNlbnRzIHZhbHVlcyBpbnRyaW5zaWMgdG8gdGhlIHRhcmdldCBkb2N1bWVudCBsYW5ndWFnZVxuICpcbiAqIFRoaXMgY2xhc3Mgd2lsbCBkaXNhcHBlYXIgaW4gYSBmdXR1cmUgcmVsZWFzZSBhbmQgc2hvdWxkIG5vdCBiZSB1c2VkLlxuICpcbiAqIEBleHBlcmltZW50YWxcbiAqL1xuZXhwb3J0IGNsYXNzIEludHJpbnNpYyBpbXBsZW1lbnRzIElSZXNvbHZhYmxlIHtcbiAgLyoqXG4gICAqIFRoZSBjYXB0dXJlZCBzdGFjayB0cmFjZSB3aGljaCByZXByZXNlbnRzIHRoZSBsb2NhdGlvbiBpbiB3aGljaCB0aGlzIHRva2VuIHdhcyBjcmVhdGVkLlxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGNyZWF0aW9uU3RhY2s6IHN0cmluZ1tdO1xuXG4gIHByaXZhdGUgcmVhZG9ubHkgdmFsdWU6IGFueTtcblxuICBjb25zdHJ1Y3Rvcih2YWx1ZTogYW55KSB7XG4gICAgaWYgKGlzRnVuY3Rpb24odmFsdWUpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgIGBBcmd1bWVudCB0byBJbnRyaW5zaWMgbXVzdCBiZSBhIHBsYWluIHZhbHVlIG9iamVjdCwgZ290ICR7dmFsdWV9YFxuICAgICAgKTtcbiAgICB9XG5cbiAgICB0aGlzLmNyZWF0aW9uU3RhY2sgPSBjYXB0dXJlU3RhY2tUcmFjZSgpO1xuICAgIHRoaXMudmFsdWUgPSB2YWx1ZTtcbiAgfVxuXG4gIHB1YmxpYyByZXNvbHZlKF9jb250ZXh0OiBJUmVzb2x2ZUNvbnRleHQpIHtcbiAgICByZXR1cm4gdGhpcy52YWx1ZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb252ZXJ0IGFuIGluc3RhbmNlIG9mIHRoaXMgVG9rZW4gdG8gYSBzdHJpbmdcbiAgICpcbiAgICogVGhpcyBtZXRob2Qgd2lsbCBiZSBjYWxsZWQgaW1wbGljaXRseSBieSBsYW5ndWFnZSBydW50aW1lcyBpZiB0aGUgb2JqZWN0XG4gICAqIGlzIGVtYmVkZGVkIGludG8gYSBzdHJpbmcuIFdlIHRyZWF0IGl0IHRoZSBzYW1lIGFzIGFuIGV4cGxpY2l0XG4gICAqIHN0cmluZ2lmaWNhdGlvbi5cbiAgICovXG4gIHB1YmxpYyB0b1N0cmluZygpOiBzdHJpbmcge1xuICAgIHJldHVybiBUb2tlbi5hc1N0cmluZyh0aGlzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBUdXJuIHRoaXMgVG9rZW4gaW50byBKU09OXG4gICAqXG4gICAqIENhbGxlZCBhdXRvbWF0aWNhbGx5IHdoZW4gSlNPTi5zdHJpbmdpZnkoKSBpcyBjYWxsZWQgb24gYSBUb2tlbi5cbiAgICovXG4gIHB1YmxpYyB0b0pTT04oKTogYW55IHtcbiAgICAvLyBXZSBjYW4ndCBkbyB0aGUgcmlnaHQgd29yayBoZXJlIGJlY2F1c2UgaW4gY2FzZSB3ZSBjb250YWluIGEgZnVuY3Rpb24sIHdlXG4gICAgLy8gd29uJ3Qga25vdyB0aGUgdHlwZSBvZiB2YWx1ZSB0aGF0IGZ1bmN0aW9uIHJlcHJlc2VudHMgKGluIHRoZSBzaW1wbGVzdFxuICAgIC8vIGNhc2UsIHN0cmluZyBvciBudW1iZXIpLCBhbmQgd2UgY2FuJ3Qga25vdyB0aGF0IHdpdGhvdXQgYW5cbiAgICAvLyBJUmVzb2x2ZUNvbnRleHQgdG8gYWN0dWFsbHkgZG8gdGhlIHJlc29sdXRpb24sIHdoaWNoIHdlIGRvbid0IGhhdmUuXG5cbiAgICAvLyBXZSB1c2VkIHRvIHRocm93IGFuIGVycm9yLCBidXQgc2luY2UgSlNPTi5zdHJpbmdpZnkoKSBpcyBvZnRlbiB1c2VkIGluXG4gICAgLy8gZXJyb3IgbWVzc2FnZXMgdG8gcHJvZHVjZSBhIHJlYWRhYmxlIHJlcHJlc2VudGF0aW9uIG9mIGFuIG9iamVjdCwgaWYgd2VcbiAgICAvLyB0aHJvdyBoZXJlIHdlJ2xsIG9iZnVzY2F0ZSB0aGF0IGRlc2NyaXB0aXZlIGVycm9yIHdpdGggc29tZXRoaW5nIHdvcnNlLlxuICAgIC8vIFNvIHJldHVybiBhIHN0cmluZyByZXByZXNlbnRhdGlvbiB0aGF0IGluZGljYXRlcyB0aGlzIHRoaW5nIGlzIGEgdG9rZW5cbiAgICAvLyBhbmQgbmVlZHMgcmVzb2x2aW5nLlxuICAgIHJldHVybiBcIjx1bnJlc29sdmVkLXRva2VuPlwiO1xuICB9XG5cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSB0aHJvd2FibGUgRXJyb3Igb2JqZWN0IHRoYXQgY29udGFpbnMgdGhlIHRva2VuIGNyZWF0aW9uIHN0YWNrIHRyYWNlLlxuICAgKiBAcGFyYW0gbWVzc2FnZSBFcnJvciBtZXNzYWdlXG4gICAqL1xuICBwcm90ZWN0ZWQgbmV3RXJyb3IobWVzc2FnZTogc3RyaW5nKTogYW55IHtcbiAgICByZXR1cm4gbmV3IEVycm9yKFxuICAgICAgYCR7bWVzc2FnZX1cXG5Ub2tlbiBjcmVhdGVkOlxcbiAgICBhdCAke3RoaXMuY3JlYXRpb25TdGFjay5qb2luKFxuICAgICAgICBcIlxcbiAgICBhdCBcIlxuICAgICAgKX1cXG5FcnJvciB0aHJvd246YFxuICAgICk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNGdW5jdGlvbih4OiBhbnkpIHtcbiAgcmV0dXJuIHR5cGVvZiB4ID09PSBcImZ1bmN0aW9uXCI7XG59XG4iXX0=