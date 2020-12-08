"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TokenizedStringFragments = void 0;
const token_1 = require("./token");
/**
 * Fragments of a concatenated string containing stringified Tokens
 */
class TokenizedStringFragments {
    constructor() {
        this.fragments = new Array();
    }
    get firstToken() {
        const first = this.fragments[0];
        if (first.type === "token") {
            return first.token;
        }
        return undefined;
    }
    get firstValue() {
        return fragmentValue(this.fragments[0]);
    }
    get length() {
        return this.fragments.length;
    }
    addLiteral(lit) {
        this.fragments.push({ type: "literal", lit });
    }
    addToken(token) {
        this.fragments.push({ type: "token", token });
    }
    addIntrinsic(value) {
        this.fragments.push({ type: "intrinsic", value });
    }
    /**
     * Return all Tokens from this string
     */
    get tokens() {
        const ret = new Array();
        for (const f of this.fragments) {
            if (f.type === "token") {
                ret.push(f.token);
            }
        }
        return ret;
    }
    /**
     * Apply a transformation function to all tokens in the string
     */
    mapTokens(mapper) {
        const ret = new TokenizedStringFragments();
        for (const f of this.fragments) {
            switch (f.type) {
                case "literal":
                    ret.addLiteral(f.lit);
                    break;
                case "token":
                    const mapped = mapper.mapToken(f.token);
                    if (token_1.isResolvableObject(mapped)) {
                        ret.addToken(mapped);
                    }
                    else {
                        ret.addIntrinsic(mapped);
                    }
                    break;
                case "intrinsic":
                    ret.addIntrinsic(f.value);
                    break;
            }
        }
        return ret;
    }
    /**
     * Combine the string fragments using the given joiner.
     *
     * If there are any
     */
    join(concat) {
        if (this.fragments.length === 0) {
            return concat.join(undefined, undefined);
        }
        if (this.fragments.length === 1) {
            return this.firstValue;
        }
        const values = this.fragments.map(fragmentValue);
        while (values.length > 1) {
            const prefix = values.splice(0, 2);
            values.splice(0, 0, concat.join(prefix[0], prefix[1]));
        }
        return values[0];
    }
}
exports.TokenizedStringFragments = TokenizedStringFragments;
/**
 * Resolve the value from a single fragment
 *
 * If the fragment is a Token, return the string encoding of the Token.
 */
function fragmentValue(fragment) {
    switch (fragment.type) {
        case "literal":
            return fragment.lit;
        case "token":
            return fragment.token.toString();
        case "intrinsic":
            return fragment.value;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLWZyYWdtZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0cmluZy1mcmFnbWVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsbUNBQTZDO0FBWTdDOztHQUVHO0FBQ0gsTUFBYSx3QkFBd0I7SUFBckM7UUFDbUIsY0FBUyxHQUFHLElBQUksS0FBSyxFQUFZLENBQUM7SUE2RnJELENBQUM7SUEzRkMsSUFBVyxVQUFVO1FBQ25CLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtZQUMxQixPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUM7U0FDcEI7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRUQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztJQUMvQixDQUFDO0lBRU0sVUFBVSxDQUFDLEdBQVE7UUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVNLFFBQVEsQ0FBQyxLQUFrQjtRQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU0sWUFBWSxDQUFDLEtBQVU7UUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBVyxNQUFNO1FBQ2YsTUFBTSxHQUFHLEdBQUcsSUFBSSxLQUFLLEVBQWUsQ0FBQztRQUNyQyxLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDOUIsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtnQkFDdEIsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbkI7U0FDRjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVEOztPQUVHO0lBQ0ksU0FBUyxDQUFDLE1BQW9CO1FBQ25DLE1BQU0sR0FBRyxHQUFHLElBQUksd0JBQXdCLEVBQUUsQ0FBQztRQUUzQyxLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDOUIsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFFO2dCQUNkLEtBQUssU0FBUztvQkFDWixHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdEIsTUFBTTtnQkFDUixLQUFLLE9BQU87b0JBQ1YsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3hDLElBQUksMEJBQWtCLENBQUMsTUFBTSxDQUFDLEVBQUU7d0JBQzlCLEdBQUcsQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUM7cUJBQ3RCO3lCQUFNO3dCQUNMLEdBQUcsQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7cUJBQzFCO29CQUNELE1BQU07Z0JBQ1IsS0FBSyxXQUFXO29CQUNkLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUMxQixNQUFNO2FBQ1Q7U0FDRjtRQUVELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVEOzs7O09BSUc7SUFDSSxJQUFJLENBQUMsTUFBNkI7UUFDdkMsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDL0IsT0FBTyxNQUFNLENBQUMsSUFBSSxDQUFDLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztTQUMxQztRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxFQUFFO1lBQy9CLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztTQUN4QjtRQUVELE1BQU0sTUFBTSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLGFBQWEsQ0FBQyxDQUFDO1FBRWpELE9BQU8sTUFBTSxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7WUFDeEIsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDbkMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxFQUFFLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDeEQ7UUFFRCxPQUFPLE1BQU0sQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNuQixDQUFDO0NBQ0Y7QUE5RkQsNERBOEZDO0FBY0Q7Ozs7R0FJRztBQUNILFNBQVMsYUFBYSxDQUFDLFFBQWtCO0lBQ3ZDLFFBQVEsUUFBUSxDQUFDLElBQUksRUFBRTtRQUNyQixLQUFLLFNBQVM7WUFDWixPQUFPLFFBQVEsQ0FBQyxHQUFHLENBQUM7UUFDdEIsS0FBSyxPQUFPO1lBQ1YsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxDQUFDO1FBQ25DLEtBQUssV0FBVztZQUNkLE9BQU8sUUFBUSxDQUFDLEtBQUssQ0FBQztLQUN6QjtBQUNILENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJRnJhZ21lbnRDb25jYXRlbmF0b3IsIElSZXNvbHZhYmxlIH0gZnJvbSBcIi4vcmVzb2x2YWJsZVwiO1xuaW1wb3J0IHsgaXNSZXNvbHZhYmxlT2JqZWN0IH0gZnJvbSBcIi4vdG9rZW5cIjtcblxuLyoqXG4gKiBSZXN1bHQgb2YgdGhlIHNwbGl0IG9mIGEgc3RyaW5nIHdpdGggVG9rZW5zXG4gKlxuICogRWl0aGVyIGEgbGl0ZXJhbCBwYXJ0IG9mIHRoZSBzdHJpbmcsIG9yIGFuIHVucmVzb2x2ZWQgVG9rZW4uXG4gKi9cbnR5cGUgTGl0ZXJhbEZyYWdtZW50ID0geyB0eXBlOiBcImxpdGVyYWxcIjsgbGl0OiBhbnkgfTtcbnR5cGUgVG9rZW5GcmFnbWVudCA9IHsgdHlwZTogXCJ0b2tlblwiOyB0b2tlbjogSVJlc29sdmFibGUgfTtcbnR5cGUgSW50cmluc2ljRnJhZ21lbnQgPSB7IHR5cGU6IFwiaW50cmluc2ljXCI7IHZhbHVlOiBhbnkgfTtcbnR5cGUgRnJhZ21lbnQgPSBMaXRlcmFsRnJhZ21lbnQgfCBUb2tlbkZyYWdtZW50IHwgSW50cmluc2ljRnJhZ21lbnQ7XG5cbi8qKlxuICogRnJhZ21lbnRzIG9mIGEgY29uY2F0ZW5hdGVkIHN0cmluZyBjb250YWluaW5nIHN0cmluZ2lmaWVkIFRva2Vuc1xuICovXG5leHBvcnQgY2xhc3MgVG9rZW5pemVkU3RyaW5nRnJhZ21lbnRzIHtcbiAgcHJpdmF0ZSByZWFkb25seSBmcmFnbWVudHMgPSBuZXcgQXJyYXk8RnJhZ21lbnQ+KCk7XG5cbiAgcHVibGljIGdldCBmaXJzdFRva2VuKCk6IElSZXNvbHZhYmxlIHwgdW5kZWZpbmVkIHtcbiAgICBjb25zdCBmaXJzdCA9IHRoaXMuZnJhZ21lbnRzWzBdO1xuICAgIGlmIChmaXJzdC50eXBlID09PSBcInRva2VuXCIpIHtcbiAgICAgIHJldHVybiBmaXJzdC50b2tlbjtcbiAgICB9XG4gICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZmlyc3RWYWx1ZSgpOiBhbnkge1xuICAgIHJldHVybiBmcmFnbWVudFZhbHVlKHRoaXMuZnJhZ21lbnRzWzBdKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbGVuZ3RoKCkge1xuICAgIHJldHVybiB0aGlzLmZyYWdtZW50cy5sZW5ndGg7XG4gIH1cblxuICBwdWJsaWMgYWRkTGl0ZXJhbChsaXQ6IGFueSkge1xuICAgIHRoaXMuZnJhZ21lbnRzLnB1c2goeyB0eXBlOiBcImxpdGVyYWxcIiwgbGl0IH0pO1xuICB9XG5cbiAgcHVibGljIGFkZFRva2VuKHRva2VuOiBJUmVzb2x2YWJsZSkge1xuICAgIHRoaXMuZnJhZ21lbnRzLnB1c2goeyB0eXBlOiBcInRva2VuXCIsIHRva2VuIH0pO1xuICB9XG5cbiAgcHVibGljIGFkZEludHJpbnNpYyh2YWx1ZTogYW55KSB7XG4gICAgdGhpcy5mcmFnbWVudHMucHVzaCh7IHR5cGU6IFwiaW50cmluc2ljXCIsIHZhbHVlIH0pO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiBhbGwgVG9rZW5zIGZyb20gdGhpcyBzdHJpbmdcbiAgICovXG4gIHB1YmxpYyBnZXQgdG9rZW5zKCk6IElSZXNvbHZhYmxlW10ge1xuICAgIGNvbnN0IHJldCA9IG5ldyBBcnJheTxJUmVzb2x2YWJsZT4oKTtcbiAgICBmb3IgKGNvbnN0IGYgb2YgdGhpcy5mcmFnbWVudHMpIHtcbiAgICAgIGlmIChmLnR5cGUgPT09IFwidG9rZW5cIikge1xuICAgICAgICByZXQucHVzaChmLnRva2VuKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBBcHBseSBhIHRyYW5zZm9ybWF0aW9uIGZ1bmN0aW9uIHRvIGFsbCB0b2tlbnMgaW4gdGhlIHN0cmluZ1xuICAgKi9cbiAgcHVibGljIG1hcFRva2VucyhtYXBwZXI6IElUb2tlbk1hcHBlcik6IFRva2VuaXplZFN0cmluZ0ZyYWdtZW50cyB7XG4gICAgY29uc3QgcmV0ID0gbmV3IFRva2VuaXplZFN0cmluZ0ZyYWdtZW50cygpO1xuXG4gICAgZm9yIChjb25zdCBmIG9mIHRoaXMuZnJhZ21lbnRzKSB7XG4gICAgICBzd2l0Y2ggKGYudHlwZSkge1xuICAgICAgICBjYXNlIFwibGl0ZXJhbFwiOlxuICAgICAgICAgIHJldC5hZGRMaXRlcmFsKGYubGl0KTtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcInRva2VuXCI6XG4gICAgICAgICAgY29uc3QgbWFwcGVkID0gbWFwcGVyLm1hcFRva2VuKGYudG9rZW4pO1xuICAgICAgICAgIGlmIChpc1Jlc29sdmFibGVPYmplY3QobWFwcGVkKSkge1xuICAgICAgICAgICAgcmV0LmFkZFRva2VuKG1hcHBlZCk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldC5hZGRJbnRyaW5zaWMobWFwcGVkKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJpbnRyaW5zaWNcIjpcbiAgICAgICAgICByZXQuYWRkSW50cmluc2ljKGYudmFsdWUpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICAvKipcbiAgICogQ29tYmluZSB0aGUgc3RyaW5nIGZyYWdtZW50cyB1c2luZyB0aGUgZ2l2ZW4gam9pbmVyLlxuICAgKlxuICAgKiBJZiB0aGVyZSBhcmUgYW55XG4gICAqL1xuICBwdWJsaWMgam9pbihjb25jYXQ6IElGcmFnbWVudENvbmNhdGVuYXRvcik6IGFueSB7XG4gICAgaWYgKHRoaXMuZnJhZ21lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGNvbmNhdC5qb2luKHVuZGVmaW5lZCwgdW5kZWZpbmVkKTtcbiAgICB9XG4gICAgaWYgKHRoaXMuZnJhZ21lbnRzLmxlbmd0aCA9PT0gMSkge1xuICAgICAgcmV0dXJuIHRoaXMuZmlyc3RWYWx1ZTtcbiAgICB9XG5cbiAgICBjb25zdCB2YWx1ZXMgPSB0aGlzLmZyYWdtZW50cy5tYXAoZnJhZ21lbnRWYWx1ZSk7XG5cbiAgICB3aGlsZSAodmFsdWVzLmxlbmd0aCA+IDEpIHtcbiAgICAgIGNvbnN0IHByZWZpeCA9IHZhbHVlcy5zcGxpY2UoMCwgMik7XG4gICAgICB2YWx1ZXMuc3BsaWNlKDAsIDAsIGNvbmNhdC5qb2luKHByZWZpeFswXSwgcHJlZml4WzFdKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHZhbHVlc1swXTtcbiAgfVxufVxuXG4vKipcbiAqIEludGVyZmFjZSB0byBhcHBseSBvcGVyYXRpb24gdG8gdG9rZW5zIGluIGEgc3RyaW5nXG4gKlxuICogSW50ZXJmYWNlIHNvIGl0IGNhbiBiZSBleHBvcnRlZCB2aWEganNpaS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJVG9rZW5NYXBwZXIge1xuICAvKipcbiAgICogUmVwbGFjZSBhIHNpbmdsZSB0b2tlblxuICAgKi9cbiAgbWFwVG9rZW4odDogSVJlc29sdmFibGUpOiBhbnk7XG59XG5cbi8qKlxuICogUmVzb2x2ZSB0aGUgdmFsdWUgZnJvbSBhIHNpbmdsZSBmcmFnbWVudFxuICpcbiAqIElmIHRoZSBmcmFnbWVudCBpcyBhIFRva2VuLCByZXR1cm4gdGhlIHN0cmluZyBlbmNvZGluZyBvZiB0aGUgVG9rZW4uXG4gKi9cbmZ1bmN0aW9uIGZyYWdtZW50VmFsdWUoZnJhZ21lbnQ6IEZyYWdtZW50KTogYW55IHtcbiAgc3dpdGNoIChmcmFnbWVudC50eXBlKSB7XG4gICAgY2FzZSBcImxpdGVyYWxcIjpcbiAgICAgIHJldHVybiBmcmFnbWVudC5saXQ7XG4gICAgY2FzZSBcInRva2VuXCI6XG4gICAgICByZXR1cm4gZnJhZ21lbnQudG9rZW4udG9TdHJpbmcoKTtcbiAgICBjYXNlIFwiaW50cmluc2ljXCI6XG4gICAgICByZXR1cm4gZnJhZ21lbnQudmFsdWU7XG4gIH1cbn1cbiJdfQ==