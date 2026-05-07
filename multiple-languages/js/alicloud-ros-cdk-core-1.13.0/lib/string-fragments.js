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
                    if ((0, token_1.isResolvableObject)(mapped)) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RyaW5nLWZyYWdtZW50cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInN0cmluZy1mcmFnbWVudHMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQ0EsbUNBQTZDO0FBWTdDOztHQUVHO0FBQ0gsTUFBYSx3QkFBd0I7SUFBckM7UUFDbUIsY0FBUyxHQUFHLElBQUksS0FBSyxFQUFZLENBQUM7SUE2RnJELENBQUM7SUEzRkMsSUFBVyxVQUFVO1FBQ25CLE1BQU0sS0FBSyxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDaEMsSUFBSSxLQUFLLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtZQUMxQixPQUFPLEtBQUssQ0FBQyxLQUFLLENBQUM7U0FDcEI7UUFDRCxPQUFPLFNBQVMsQ0FBQztJQUNuQixDQUFDO0lBRUQsSUFBVyxVQUFVO1FBQ25CLE9BQU8sYUFBYSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUQsSUFBVyxNQUFNO1FBQ2YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sQ0FBQztJQUMvQixDQUFDO0lBRU0sVUFBVSxDQUFDLEdBQVE7UUFDeEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsU0FBUyxFQUFFLEdBQUcsRUFBRSxDQUFDLENBQUM7SUFDaEQsQ0FBQztJQUVNLFFBQVEsQ0FBQyxLQUFrQjtRQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFLElBQUksRUFBRSxPQUFPLEVBQUUsS0FBSyxFQUFFLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBRU0sWUFBWSxDQUFDLEtBQVU7UUFDNUIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsRUFBRSxJQUFJLEVBQUUsV0FBVyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDcEQsQ0FBQztJQUVEOztPQUVHO0lBQ0gsSUFBVyxNQUFNO1FBQ2YsTUFBTSxHQUFHLEdBQUcsSUFBSSxLQUFLLEVBQWUsQ0FBQztRQUNyQyxLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDOUIsSUFBSSxDQUFDLENBQUMsSUFBSSxLQUFLLE9BQU8sRUFBRTtnQkFDdEIsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDbkI7U0FDRjtRQUNELE9BQU8sR0FBRyxDQUFDO0lBQ2IsQ0FBQztJQUVEOztPQUVHO0lBQ0ksU0FBUyxDQUFDLE1BQW9CO1FBQ25DLE1BQU0sR0FBRyxHQUFHLElBQUksd0JBQXdCLEVBQUUsQ0FBQztRQUUzQyxLQUFLLE1BQU0sQ0FBQyxJQUFJLElBQUksQ0FBQyxTQUFTLEVBQUU7WUFDOUIsUUFBUSxDQUFDLENBQUMsSUFBSSxFQUFFO2dCQUNkLEtBQUssU0FBUztvQkFDWixHQUFHLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDdEIsTUFBTTtnQkFDUixLQUFLLE9BQU87b0JBQ1YsTUFBTSxNQUFNLEdBQUcsTUFBTSxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQ3hDLElBQUksSUFBQSwwQkFBa0IsRUFBQyxNQUFNLENBQUMsRUFBRTt3QkFDOUIsR0FBRyxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztxQkFDdEI7eUJBQU07d0JBQ0wsR0FBRyxDQUFDLFlBQVksQ0FBQyxNQUFNLENBQUMsQ0FBQztxQkFDMUI7b0JBQ0QsTUFBTTtnQkFDUixLQUFLLFdBQVc7b0JBQ2QsR0FBRyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLENBQUM7b0JBQzFCLE1BQU07YUFDVDtTQUNGO1FBRUQsT0FBTyxHQUFHLENBQUM7SUFDYixDQUFDO0lBRUQ7Ozs7T0FJRztJQUNJLElBQUksQ0FBQyxNQUE2QjtRQUN2QyxJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsTUFBTSxLQUFLLENBQUMsRUFBRTtZQUMvQixPQUFPLE1BQU0sQ0FBQyxJQUFJLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO1NBQzFDO1FBQ0QsSUFBSSxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7WUFDL0IsT0FBTyxJQUFJLENBQUMsVUFBVSxDQUFDO1NBQ3hCO1FBRUQsTUFBTSxNQUFNLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsYUFBYSxDQUFDLENBQUM7UUFFakQsT0FBTyxNQUFNLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUN4QixNQUFNLE1BQU0sR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNuQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN4RDtRQUVELE9BQU8sTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ25CLENBQUM7Q0FDRjtBQTlGRCw0REE4RkM7QUFjRDs7OztHQUlHO0FBQ0gsU0FBUyxhQUFhLENBQUMsUUFBa0I7SUFDdkMsUUFBUSxRQUFRLENBQUMsSUFBSSxFQUFFO1FBQ3JCLEtBQUssU0FBUztZQUNaLE9BQU8sUUFBUSxDQUFDLEdBQUcsQ0FBQztRQUN0QixLQUFLLE9BQU87WUFDVixPQUFPLFFBQVEsQ0FBQyxLQUFLLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbkMsS0FBSyxXQUFXO1lBQ2QsT0FBTyxRQUFRLENBQUMsS0FBSyxDQUFDO0tBQ3pCO0FBQ0gsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IElGcmFnbWVudENvbmNhdGVuYXRvciwgSVJlc29sdmFibGUgfSBmcm9tIFwiLi9yZXNvbHZhYmxlXCI7XG5pbXBvcnQgeyBpc1Jlc29sdmFibGVPYmplY3QgfSBmcm9tIFwiLi90b2tlblwiO1xuXG4vKipcbiAqIFJlc3VsdCBvZiB0aGUgc3BsaXQgb2YgYSBzdHJpbmcgd2l0aCBUb2tlbnNcbiAqXG4gKiBFaXRoZXIgYSBsaXRlcmFsIHBhcnQgb2YgdGhlIHN0cmluZywgb3IgYW4gdW5yZXNvbHZlZCBUb2tlbi5cbiAqL1xudHlwZSBMaXRlcmFsRnJhZ21lbnQgPSB7IHR5cGU6IFwibGl0ZXJhbFwiOyBsaXQ6IGFueSB9O1xudHlwZSBUb2tlbkZyYWdtZW50ID0geyB0eXBlOiBcInRva2VuXCI7IHRva2VuOiBJUmVzb2x2YWJsZSB9O1xudHlwZSBJbnRyaW5zaWNGcmFnbWVudCA9IHsgdHlwZTogXCJpbnRyaW5zaWNcIjsgdmFsdWU6IGFueSB9O1xudHlwZSBGcmFnbWVudCA9IExpdGVyYWxGcmFnbWVudCB8IFRva2VuRnJhZ21lbnQgfCBJbnRyaW5zaWNGcmFnbWVudDtcblxuLyoqXG4gKiBGcmFnbWVudHMgb2YgYSBjb25jYXRlbmF0ZWQgc3RyaW5nIGNvbnRhaW5pbmcgc3RyaW5naWZpZWQgVG9rZW5zXG4gKi9cbmV4cG9ydCBjbGFzcyBUb2tlbml6ZWRTdHJpbmdGcmFnbWVudHMge1xuICBwcml2YXRlIHJlYWRvbmx5IGZyYWdtZW50cyA9IG5ldyBBcnJheTxGcmFnbWVudD4oKTtcblxuICBwdWJsaWMgZ2V0IGZpcnN0VG9rZW4oKTogSVJlc29sdmFibGUgfCB1bmRlZmluZWQge1xuICAgIGNvbnN0IGZpcnN0ID0gdGhpcy5mcmFnbWVudHNbMF07XG4gICAgaWYgKGZpcnN0LnR5cGUgPT09IFwidG9rZW5cIikge1xuICAgICAgcmV0dXJuIGZpcnN0LnRva2VuO1xuICAgIH1cbiAgICByZXR1cm4gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIGdldCBmaXJzdFZhbHVlKCk6IGFueSB7XG4gICAgcmV0dXJuIGZyYWdtZW50VmFsdWUodGhpcy5mcmFnbWVudHNbMF0pO1xuICB9XG5cbiAgcHVibGljIGdldCBsZW5ndGgoKSB7XG4gICAgcmV0dXJuIHRoaXMuZnJhZ21lbnRzLmxlbmd0aDtcbiAgfVxuXG4gIHB1YmxpYyBhZGRMaXRlcmFsKGxpdDogYW55KSB7XG4gICAgdGhpcy5mcmFnbWVudHMucHVzaCh7IHR5cGU6IFwibGl0ZXJhbFwiLCBsaXQgfSk7XG4gIH1cblxuICBwdWJsaWMgYWRkVG9rZW4odG9rZW46IElSZXNvbHZhYmxlKSB7XG4gICAgdGhpcy5mcmFnbWVudHMucHVzaCh7IHR5cGU6IFwidG9rZW5cIiwgdG9rZW4gfSk7XG4gIH1cblxuICBwdWJsaWMgYWRkSW50cmluc2ljKHZhbHVlOiBhbnkpIHtcbiAgICB0aGlzLmZyYWdtZW50cy5wdXNoKHsgdHlwZTogXCJpbnRyaW5zaWNcIiwgdmFsdWUgfSk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIGFsbCBUb2tlbnMgZnJvbSB0aGlzIHN0cmluZ1xuICAgKi9cbiAgcHVibGljIGdldCB0b2tlbnMoKTogSVJlc29sdmFibGVbXSB7XG4gICAgY29uc3QgcmV0ID0gbmV3IEFycmF5PElSZXNvbHZhYmxlPigpO1xuICAgIGZvciAoY29uc3QgZiBvZiB0aGlzLmZyYWdtZW50cykge1xuICAgICAgaWYgKGYudHlwZSA9PT0gXCJ0b2tlblwiKSB7XG4gICAgICAgIHJldC5wdXNoKGYudG9rZW4pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgLyoqXG4gICAqIEFwcGx5IGEgdHJhbnNmb3JtYXRpb24gZnVuY3Rpb24gdG8gYWxsIHRva2VucyBpbiB0aGUgc3RyaW5nXG4gICAqL1xuICBwdWJsaWMgbWFwVG9rZW5zKG1hcHBlcjogSVRva2VuTWFwcGVyKTogVG9rZW5pemVkU3RyaW5nRnJhZ21lbnRzIHtcbiAgICBjb25zdCByZXQgPSBuZXcgVG9rZW5pemVkU3RyaW5nRnJhZ21lbnRzKCk7XG5cbiAgICBmb3IgKGNvbnN0IGYgb2YgdGhpcy5mcmFnbWVudHMpIHtcbiAgICAgIHN3aXRjaCAoZi50eXBlKSB7XG4gICAgICAgIGNhc2UgXCJsaXRlcmFsXCI6XG4gICAgICAgICAgcmV0LmFkZExpdGVyYWwoZi5saXQpO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwidG9rZW5cIjpcbiAgICAgICAgICBjb25zdCBtYXBwZWQgPSBtYXBwZXIubWFwVG9rZW4oZi50b2tlbik7XG4gICAgICAgICAgaWYgKGlzUmVzb2x2YWJsZU9iamVjdChtYXBwZWQpKSB7XG4gICAgICAgICAgICByZXQuYWRkVG9rZW4obWFwcGVkKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0LmFkZEludHJpbnNpYyhtYXBwZWQpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSBcImludHJpbnNpY1wiOlxuICAgICAgICAgIHJldC5hZGRJbnRyaW5zaWMoZi52YWx1ZSk7XG4gICAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb21iaW5lIHRoZSBzdHJpbmcgZnJhZ21lbnRzIHVzaW5nIHRoZSBnaXZlbiBqb2luZXIuXG4gICAqXG4gICAqIElmIHRoZXJlIGFyZSBhbnlcbiAgICovXG4gIHB1YmxpYyBqb2luKGNvbmNhdDogSUZyYWdtZW50Q29uY2F0ZW5hdG9yKTogYW55IHtcbiAgICBpZiAodGhpcy5mcmFnbWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gY29uY2F0LmpvaW4odW5kZWZpbmVkLCB1bmRlZmluZWQpO1xuICAgIH1cbiAgICBpZiAodGhpcy5mcmFnbWVudHMubGVuZ3RoID09PSAxKSB7XG4gICAgICByZXR1cm4gdGhpcy5maXJzdFZhbHVlO1xuICAgIH1cblxuICAgIGNvbnN0IHZhbHVlcyA9IHRoaXMuZnJhZ21lbnRzLm1hcChmcmFnbWVudFZhbHVlKTtcblxuICAgIHdoaWxlICh2YWx1ZXMubGVuZ3RoID4gMSkge1xuICAgICAgY29uc3QgcHJlZml4ID0gdmFsdWVzLnNwbGljZSgwLCAyKTtcbiAgICAgIHZhbHVlcy5zcGxpY2UoMCwgMCwgY29uY2F0LmpvaW4ocHJlZml4WzBdLCBwcmVmaXhbMV0pKTtcbiAgICB9XG5cbiAgICByZXR1cm4gdmFsdWVzWzBdO1xuICB9XG59XG5cbi8qKlxuICogSW50ZXJmYWNlIHRvIGFwcGx5IG9wZXJhdGlvbiB0byB0b2tlbnMgaW4gYSBzdHJpbmdcbiAqXG4gKiBJbnRlcmZhY2Ugc28gaXQgY2FuIGJlIGV4cG9ydGVkIHZpYSBqc2lpLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElUb2tlbk1hcHBlciB7XG4gIC8qKlxuICAgKiBSZXBsYWNlIGEgc2luZ2xlIHRva2VuXG4gICAqL1xuICBtYXBUb2tlbih0OiBJUmVzb2x2YWJsZSk6IGFueTtcbn1cblxuLyoqXG4gKiBSZXNvbHZlIHRoZSB2YWx1ZSBmcm9tIGEgc2luZ2xlIGZyYWdtZW50XG4gKlxuICogSWYgdGhlIGZyYWdtZW50IGlzIGEgVG9rZW4sIHJldHVybiB0aGUgc3RyaW5nIGVuY29kaW5nIG9mIHRoZSBUb2tlbi5cbiAqL1xuZnVuY3Rpb24gZnJhZ21lbnRWYWx1ZShmcmFnbWVudDogRnJhZ21lbnQpOiBhbnkge1xuICBzd2l0Y2ggKGZyYWdtZW50LnR5cGUpIHtcbiAgICBjYXNlIFwibGl0ZXJhbFwiOlxuICAgICAgcmV0dXJuIGZyYWdtZW50LmxpdDtcbiAgICBjYXNlIFwidG9rZW5cIjpcbiAgICAgIHJldHVybiBmcmFnbWVudC50b2tlbi50b1N0cmluZygpO1xuICAgIGNhc2UgXCJpbnRyaW5zaWNcIjpcbiAgICAgIHJldHVybiBmcmFnbWVudC52YWx1ZTtcbiAgfVxufVxuIl19