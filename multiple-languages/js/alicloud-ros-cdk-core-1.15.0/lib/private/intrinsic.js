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
        this.creationStack = (0, stack_trace_1.captureStackTrace)();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW50cmluc2ljLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW50cmluc2ljLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUNBLGdEQUFtRDtBQUNuRCxvQ0FBaUM7QUFFakM7Ozs7OztHQU1HO0FBQ0gsTUFBYSxTQUFTO0lBUXBCLFlBQVksS0FBVTtRQUNwQixJQUFJLFVBQVUsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUNyQixNQUFNLElBQUksS0FBSyxDQUNiLDJEQUEyRCxLQUFLLEVBQUUsQ0FDbkUsQ0FBQztTQUNIO1FBRUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFBLCtCQUFpQixHQUFFLENBQUM7UUFDekMsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7SUFDckIsQ0FBQztJQUVNLE9BQU8sQ0FBQyxRQUF5QjtRQUN0QyxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7SUFDcEIsQ0FBQztJQUVEOzs7Ozs7T0FNRztJQUNJLFFBQVE7UUFDYixPQUFPLGFBQUssQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxNQUFNO1FBQ1gsNEVBQTRFO1FBQzVFLHlFQUF5RTtRQUN6RSw2REFBNkQ7UUFDN0Qsc0VBQXNFO1FBRXRFLHlFQUF5RTtRQUN6RSwwRUFBMEU7UUFDMUUsMEVBQTBFO1FBQzFFLHlFQUF5RTtRQUN6RSx1QkFBdUI7UUFDdkIsT0FBTyxvQkFBb0IsQ0FBQztJQUM5QixDQUFDO0lBRUQ7OztPQUdHO0lBQ08sUUFBUSxDQUFDLE9BQWU7UUFDaEMsT0FBTyxJQUFJLEtBQUssQ0FDZCxHQUFHLE9BQU8sNEJBQTRCLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUMzRCxXQUFXLENBQ1osaUJBQWlCLENBQ25CLENBQUM7SUFDSixDQUFDO0NBQ0Y7QUFoRUQsOEJBZ0VDO0FBRUQsU0FBUyxVQUFVLENBQUMsQ0FBTTtJQUN4QixPQUFPLE9BQU8sQ0FBQyxLQUFLLFVBQVUsQ0FBQztBQUNqQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSVJlc29sdmFibGUsIElSZXNvbHZlQ29udGV4dCB9IGZyb20gXCIuLi9yZXNvbHZhYmxlXCI7XG5pbXBvcnQgeyBjYXB0dXJlU3RhY2tUcmFjZSB9IGZyb20gXCIuLi9zdGFjay10cmFjZVwiO1xuaW1wb3J0IHsgVG9rZW4gfSBmcm9tIFwiLi4vdG9rZW5cIjtcblxuLyoqXG4gKiBUb2tlbiBzdWJjbGFzcyB0aGF0IHJlcHJlc2VudHMgdmFsdWVzIGludHJpbnNpYyB0byB0aGUgdGFyZ2V0IGRvY3VtZW50IGxhbmd1YWdlXG4gKlxuICogVGhpcyBjbGFzcyB3aWxsIGRpc2FwcGVhciBpbiBhIGZ1dHVyZSByZWxlYXNlIGFuZCBzaG91bGQgbm90IGJlIHVzZWQuXG4gKlxuICogQGV4cGVyaW1lbnRhbFxuICovXG5leHBvcnQgY2xhc3MgSW50cmluc2ljIGltcGxlbWVudHMgSVJlc29sdmFibGUge1xuICAvKipcbiAgICogVGhlIGNhcHR1cmVkIHN0YWNrIHRyYWNlIHdoaWNoIHJlcHJlc2VudHMgdGhlIGxvY2F0aW9uIGluIHdoaWNoIHRoaXMgdG9rZW4gd2FzIGNyZWF0ZWQuXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgY3JlYXRpb25TdGFjazogc3RyaW5nW107XG5cbiAgcHJpdmF0ZSByZWFkb25seSB2YWx1ZTogYW55O1xuXG4gIGNvbnN0cnVjdG9yKHZhbHVlOiBhbnkpIHtcbiAgICBpZiAoaXNGdW5jdGlvbih2YWx1ZSkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYEFyZ3VtZW50IHRvIEludHJpbnNpYyBtdXN0IGJlIGEgcGxhaW4gdmFsdWUgb2JqZWN0LCBnb3QgJHt2YWx1ZX1gXG4gICAgICApO1xuICAgIH1cblxuICAgIHRoaXMuY3JlYXRpb25TdGFjayA9IGNhcHR1cmVTdGFja1RyYWNlKCk7XG4gICAgdGhpcy52YWx1ZSA9IHZhbHVlO1xuICB9XG5cbiAgcHVibGljIHJlc29sdmUoX2NvbnRleHQ6IElSZXNvbHZlQ29udGV4dCkge1xuICAgIHJldHVybiB0aGlzLnZhbHVlO1xuICB9XG5cbiAgLyoqXG4gICAqIENvbnZlcnQgYW4gaW5zdGFuY2Ugb2YgdGhpcyBUb2tlbiB0byBhIHN0cmluZ1xuICAgKlxuICAgKiBUaGlzIG1ldGhvZCB3aWxsIGJlIGNhbGxlZCBpbXBsaWNpdGx5IGJ5IGxhbmd1YWdlIHJ1bnRpbWVzIGlmIHRoZSBvYmplY3RcbiAgICogaXMgZW1iZWRkZWQgaW50byBhIHN0cmluZy4gV2UgdHJlYXQgaXQgdGhlIHNhbWUgYXMgYW4gZXhwbGljaXRcbiAgICogc3RyaW5naWZpY2F0aW9uLlxuICAgKi9cbiAgcHVibGljIHRvU3RyaW5nKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIFRva2VuLmFzU3RyaW5nKHRoaXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFR1cm4gdGhpcyBUb2tlbiBpbnRvIEpTT05cbiAgICpcbiAgICogQ2FsbGVkIGF1dG9tYXRpY2FsbHkgd2hlbiBKU09OLnN0cmluZ2lmeSgpIGlzIGNhbGxlZCBvbiBhIFRva2VuLlxuICAgKi9cbiAgcHVibGljIHRvSlNPTigpOiBhbnkge1xuICAgIC8vIFdlIGNhbid0IGRvIHRoZSByaWdodCB3b3JrIGhlcmUgYmVjYXVzZSBpbiBjYXNlIHdlIGNvbnRhaW4gYSBmdW5jdGlvbiwgd2VcbiAgICAvLyB3b24ndCBrbm93IHRoZSB0eXBlIG9mIHZhbHVlIHRoYXQgZnVuY3Rpb24gcmVwcmVzZW50cyAoaW4gdGhlIHNpbXBsZXN0XG4gICAgLy8gY2FzZSwgc3RyaW5nIG9yIG51bWJlciksIGFuZCB3ZSBjYW4ndCBrbm93IHRoYXQgd2l0aG91dCBhblxuICAgIC8vIElSZXNvbHZlQ29udGV4dCB0byBhY3R1YWxseSBkbyB0aGUgcmVzb2x1dGlvbiwgd2hpY2ggd2UgZG9uJ3QgaGF2ZS5cblxuICAgIC8vIFdlIHVzZWQgdG8gdGhyb3cgYW4gZXJyb3IsIGJ1dCBzaW5jZSBKU09OLnN0cmluZ2lmeSgpIGlzIG9mdGVuIHVzZWQgaW5cbiAgICAvLyBlcnJvciBtZXNzYWdlcyB0byBwcm9kdWNlIGEgcmVhZGFibGUgcmVwcmVzZW50YXRpb24gb2YgYW4gb2JqZWN0LCBpZiB3ZVxuICAgIC8vIHRocm93IGhlcmUgd2UnbGwgb2JmdXNjYXRlIHRoYXQgZGVzY3JpcHRpdmUgZXJyb3Igd2l0aCBzb21ldGhpbmcgd29yc2UuXG4gICAgLy8gU28gcmV0dXJuIGEgc3RyaW5nIHJlcHJlc2VudGF0aW9uIHRoYXQgaW5kaWNhdGVzIHRoaXMgdGhpbmcgaXMgYSB0b2tlblxuICAgIC8vIGFuZCBuZWVkcyByZXNvbHZpbmcuXG4gICAgcmV0dXJuIFwiPHVucmVzb2x2ZWQtdG9rZW4+XCI7XG4gIH1cblxuICAvKipcbiAgICogQ3JlYXRlcyBhIHRocm93YWJsZSBFcnJvciBvYmplY3QgdGhhdCBjb250YWlucyB0aGUgdG9rZW4gY3JlYXRpb24gc3RhY2sgdHJhY2UuXG4gICAqIEBwYXJhbSBtZXNzYWdlIEVycm9yIG1lc3NhZ2VcbiAgICovXG4gIHByb3RlY3RlZCBuZXdFcnJvcihtZXNzYWdlOiBzdHJpbmcpOiBhbnkge1xuICAgIHJldHVybiBuZXcgRXJyb3IoXG4gICAgICBgJHttZXNzYWdlfVxcblRva2VuIGNyZWF0ZWQ6XFxuICAgIGF0ICR7dGhpcy5jcmVhdGlvblN0YWNrLmpvaW4oXG4gICAgICAgIFwiXFxuICAgIGF0IFwiXG4gICAgICApfVxcbkVycm9yIHRocm93bjpgXG4gICAgKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0Z1bmN0aW9uKHg6IGFueSkge1xuICByZXR1cm4gdHlwZW9mIHggPT09IFwiZnVuY3Rpb25cIjtcbn1cbiJdfQ==