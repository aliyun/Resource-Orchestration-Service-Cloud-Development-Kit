"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchTemplate = exports.beASupersetOfTemplate = exports.exactlyMatchTemplate = exports.MatchStyle = void 0;
const rosDiff = require("@alicloud/ros-cdk-template-diff");
const assertion_1 = require("../assertion");
var MatchStyle;
(function (MatchStyle) {
    /** Requires an exact match */
    MatchStyle["EXACT"] = "exactly";
    /** Allows any change that does not cause a resource replacement */
    MatchStyle["NO_REPLACES"] = "no replaces";
    /** Allows additions, but no updates */
    MatchStyle["SUPERSET"] = "superset";
})(MatchStyle = exports.MatchStyle || (exports.MatchStyle = {}));
function exactlyMatchTemplate(template) {
    return matchTemplate(template, MatchStyle.EXACT);
}
exports.exactlyMatchTemplate = exactlyMatchTemplate;
function beASupersetOfTemplate(template) {
    return matchTemplate(template, MatchStyle.SUPERSET);
}
exports.beASupersetOfTemplate = beASupersetOfTemplate;
function matchTemplate(template, matchStyle = MatchStyle.EXACT) {
    return new StackMatchesTemplateAssertion(template, matchStyle);
}
exports.matchTemplate = matchTemplate;
class StackMatchesTemplateAssertion extends assertion_1.Assertion {
    constructor(template, matchStyle) {
        super();
        this.template = template;
        this.matchStyle = matchStyle;
    }
    assertOrThrow(inspector) {
        if (!this.assertUsing(inspector)) {
            // The details have already been printed, so don't generate a huge error message
            throw new Error('Template comparison produced unacceptable match');
        }
    }
    assertUsing(inspector) {
        const diff = rosDiff.diffTemplate(this.template, inspector.value);
        const acceptable = this.isDiffAcceptable(diff);
        if (!acceptable) {
            // Print the diff
            rosDiff.formatDifferences(process.stderr, diff);
            // Print the actual template
            process.stdout.write('--------------------------------------------------------------------------------------\n');
            process.stdout.write(JSON.stringify(inspector.value, undefined, 2) + '\n');
        }
        return acceptable;
    }
    isDiffAcceptable(diff) {
        switch (this.matchStyle) {
            case MatchStyle.EXACT:
                return diff.differenceCount === 0;
            case MatchStyle.NO_REPLACES:
                for (const change of Object.values(diff.resources.changes)) {
                    if (change.changeImpact === rosDiff.ResourceImpact.MAY_REPLACE) {
                        return false;
                    }
                    if (change.changeImpact === rosDiff.ResourceImpact.WILL_REPLACE) {
                        return false;
                    }
                }
                for (const change of Object.values(diff.parameters.changes)) {
                    if (change.isUpdate) {
                        return false;
                    }
                }
                for (const change of Object.values(diff.outputs.changes)) {
                    if (change.isUpdate) {
                        return false;
                    }
                }
                return true;
            case MatchStyle.SUPERSET:
                for (const change of Object.values(diff.resources.changes)) {
                    if (change.changeImpact !== rosDiff.ResourceImpact.WILL_CREATE) {
                        return false;
                    }
                }
                for (const change of Object.values(diff.parameters.changes)) {
                    if (change.isAddition) {
                        return false;
                    }
                }
                for (const change of Object.values(diff.outputs.changes)) {
                    if (change.isAddition || change.isUpdate) {
                        return false;
                    }
                }
                return true;
        }
        throw new Error(`Unsupported match style: ${this.matchStyle}`);
    }
    get description() {
        return `template (${this.matchStyle}): ${JSON.stringify(this.template, null, 2)}`;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gtdGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYXRjaC10ZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyREFBMkQ7QUFDM0QsNENBQXlDO0FBR3pDLElBQVksVUFPWDtBQVBELFdBQVksVUFBVTtJQUNwQiw4QkFBOEI7SUFDOUIsK0JBQWlCLENBQUE7SUFDakIsbUVBQW1FO0lBQ25FLHlDQUEyQixDQUFBO0lBQzNCLHVDQUF1QztJQUN2QyxtQ0FBcUIsQ0FBQTtBQUN2QixDQUFDLEVBUFcsVUFBVSxHQUFWLGtCQUFVLEtBQVYsa0JBQVUsUUFPckI7QUFFRCxTQUFnQixvQkFBb0IsQ0FBQyxRQUFnQztJQUNuRSxPQUFPLGFBQWEsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLEtBQUssQ0FBQyxDQUFDO0FBQ25ELENBQUM7QUFGRCxvREFFQztBQUVELFNBQWdCLHFCQUFxQixDQUFDLFFBQWdDO0lBQ3BFLE9BQU8sYUFBYSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsUUFBUSxDQUFDLENBQUM7QUFDdEQsQ0FBQztBQUZELHNEQUVDO0FBRUQsU0FBZ0IsYUFBYSxDQUMzQixRQUFnQyxFQUNoQyxhQUF5QixVQUFVLENBQUMsS0FBSztJQUV6QyxPQUFPLElBQUksNkJBQTZCLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQ2pFLENBQUM7QUFMRCxzQ0FLQztBQUVELE1BQU0sNkJBQThCLFNBQVEscUJBQXlCO0lBQ25FLFlBQTZCLFFBQWdDLEVBQW1CLFVBQXNCO1FBQ3BHLEtBQUssRUFBRSxDQUFDO1FBRG1CLGFBQVEsR0FBUixRQUFRLENBQXdCO1FBQW1CLGVBQVUsR0FBVixVQUFVLENBQVk7SUFFdEcsQ0FBQztJQUVNLGFBQWEsQ0FBQyxTQUF5QjtRQUM1QyxJQUFJLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxTQUFTLENBQUMsRUFBRTtZQUNoQyxnRkFBZ0Y7WUFDaEYsTUFBTSxJQUFJ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ZjtRQUNELE1BQU0sSUFBSSxLQUFLLENBQUMsNEJBQTRCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxhQUFhLElBQUksQ0FBQyxVQUFVLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3BGLENBQUM7Q0FDRiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvc0RpZmYgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstdGVtcGxhdGUtZGlmZic7XG5pbXBvcnQgeyBBc3NlcnRpb24gfSBmcm9tICcuLi9hc3NlcnRpb24nO1xuaW1wb3J0IHsgU3RhY2tJbnNwZWN0b3IgfSBmcm9tICcuLi9pbnNwZWN0b3InO1xuXG5leHBvcnQgZW51bSBNYXRjaFN0eWxlIHtcbiAgLyoqIFJlcXVpcmVzIGFuIGV4YWN0IG1hdGNoICovXG4gIEVYQUNUID0gJ2V4YWN0bHknLFxuICAvKiogQWxsb3dzIGFueSBjaGFuZ2UgdGhhdCBkb2VzIG5vdCBjYXVzZSBhIHJlc291cmNlIHJlcGxhY2VtZW50ICovXG4gIE5PX1JFUExBQ0VTID0gJ25vIHJlcGxhY2VzJyxcbiAgLyoqIEFsbG93cyBhZGRpdGlvbnMsIGJ1dCBubyB1cGRhdGVzICovXG4gIFNVUEVSU0VUID0gJ3N1cGVyc2V0Jyxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4YWN0bHlNYXRjaFRlbXBsYXRlKHRlbXBsYXRlOiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gIHJldHVybiBtYXRjaFRlbXBsYXRlKHRlbXBsYXRlLCBNYXRjaFN0eWxlLkVYQUNUKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJlQVN1cGVyc2V0T2ZUZW1wbGF0ZSh0ZW1wbGF0ZTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICByZXR1cm4gbWF0Y2hUZW1wbGF0ZSh0ZW1wbGF0ZSwgTWF0Y2hTdHlsZS5TVVBFUlNFVCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaFRlbXBsYXRlKFxuICB0ZW1wbGF0ZTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSxcbiAgbWF0Y2hTdHlsZTogTWF0Y2hTdHlsZSA9IE1hdGNoU3R5bGUuRVhBQ1QsXG4pOiBBc3NlcnRpb248U3RhY2tJbnNwZWN0b3I+IHtcbiAgcmV0dXJuIG5ldyBTdGFja01hdGNoZXNUZW1wbGF0ZUFzc2VydGlvbih0ZW1wbGF0ZSwgbWF0Y2hTdHlsZSk7XG59XG5cbmNsYXNzIFN0YWNrTWF0Y2hlc1RlbXBsYXRlQXNzZXJ0aW9uIGV4dGVuZHMgQXNzZXJ0aW9uPFN0YWNrSW5zcGVjdG9yPiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgdGVtcGxhdGU6IHsgW2tleTogc3RyaW5nXTogYW55IH0sIHByaXZhdGUgcmVhZG9ubHkgbWF0Y2hTdHlsZTogTWF0Y2hTdHlsZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgYXNzZXJ0T3JUaHJvdyhpbnNwZWN0b3I6IFN0YWNrSW5zcGVjdG9yKSB7XG4gICAgaWYgKCF0aGlzLmFzc2VydFVzaW5nKGluc3BlY3RvcikpIHtcbiAgICAgIC8vIFRoZSBkZXRhaWxzIGhhdmUgYWxyZWFkeSBiZWVuIHByaW50ZWQsIHNvIGRvbid0IGdlbmVyYXRlIGEgaHVnZSBlcnJvciBtZXNzYWdlXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RlbXBsYXRlIGNvbXBhcmlzb24gcHJvZHVjZWQgdW5hY2NlcHRhYmxlIG1hdGNoJyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFzc2VydFVzaW5nKGluc3BlY3RvcjogU3RhY2tJbnNwZWN0b3IpOiBib29sZWFuIHtcbiAgICBjb25zdCBkaWZmID0gcm9zRGlmZi5kaWZmVGVtcGxhdGUodGhpcy50ZW1wbGF0ZSwgaW5zcGVjdG9yLnZhbHVlKTtcbiAgICBjb25zdCBhY2NlcHRhYmxlID0gdGhpcy5pc0RpZmZBY2NlcHRhYmxlKGRpZmYpO1xuICAgIGlmICghYWNjZXB0YWJsZSkge1xuICAgICAgLy8gUHJpbnQgdGhlIGRpZmZcbiAgICAgIHJvc0RpZmYuZm9ybWF0RGlmZmVyZW5jZXMocHJvY2Vzcy5zdGRlcnIsIGRpZmYpO1xuXG4gICAgICAvLyBQcmludCB0aGUgYWN0dWFsIHRlbXBsYXRlXG4gICAgICBwcm9jZXNzLnN0ZG91dC53cml0ZSgnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4nKTtcbiAgICAgIHByb2Nlc3Muc3Rkb3V0LndyaXRlKEpTT04uc3RyaW5naWZ5KGluc3BlY3Rvci52YWx1ZSwgdW5kZWZpbmVkLCAyKSArICdcXG4nKTtcbiAgICB9XG5cbiAgICByZXR1cm4gYWNjZXB0YWJsZTtcbiAgfVxuXG4gIHByaXZhdGUgaXNEaWZmQWNjZXB0YWJsZShkaWZmOiByb3NEaWZmLlRlbXBsYXRlRGlmZik6IGJvb2xlYW4ge1xuICAgIHN3aXRjaCAodGhpcy5tYXRjaFN0eWxlKSB7XG4gICAgICBjYXNlIE1hdGNoU3R5bGUuRVhBQ1Q6XG4gICAgICAgIHJldHVybiBkaWZmLmRpZmZlcmVuY2VDb3VudCA9PT0gMDtcbiAgICAgIGNhc2UgTWF0Y2hTdHlsZS5OT19SRVBMQUNFUzpcbiAgICAgICAgZm9yIChjb25zdCBjaGFuZ2Ugb2YgT2JqZWN0LnZhbHVlcyhkaWZmLnJlc291cmNlcy5jaGFuZ2VzKSkge1xuICAgICAgICAgIGlmIChjaGFuZ2UuY2hhbmdlSW1wYWN0ID09PSByb3NEaWZmLlJlc291cmNlSW1wYWN0Lk1BWV9SRVBMQUNFKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjaGFuZ2UuY2hhbmdlSW1wYWN0ID09PSByb3NEaWZmLlJlc291cmNlSW1wYWN0LldJTExfUkVQTEFDRSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgY2hhbmdlIG9mIE9iamVjdC52YWx1ZXMoZGlmZi5wYXJhbWV0ZXJzLmNoYW5nZXMpKSB7XG4gICAgICAgICAgaWYgKGNoYW5nZS5pc1VwZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgY2hhbmdlIG9mIE9iamVjdC52YWx1ZXMoZGlmZi5vdXRwdXRzLmNoYW5nZXMpKSB7XG4gICAgICAgICAgaWYgKGNoYW5nZS5pc1VwZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgTWF0Y2hTdHlsZS5TVVBFUlNFVDpcbiAgICAgICAgZm9yIChjb25zdCBjaGFuZ2Ugb2YgT2JqZWN0LnZhbHVlcyhkaWZmLnJlc291cmNlcy5jaGFuZ2VzKSkge1xuICAgICAgICAgIGlmIChjaGFuZ2UuY2hhbmdlSW1wYWN0ICE9PSByb3NEaWZmLlJlc291cmNlSW1wYWN0LldJTExfQ1JFQVRFKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBjaGFuZ2Ugb2YgT2JqZWN0LnZhbHVlcyhkaWZmLnBhcmFtZXRlcnMuY2hhbmdlcykpIHtcbiAgICAgICAgICBpZiAoY2hhbmdlLmlzQWRkaXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGNoYW5nZSBvZiBPYmplY3QudmFsdWVzKGRpZmYub3V0cHV0cy5jaGFuZ2VzKSkge1xuICAgICAgICAgIGlmIChjaGFuZ2UuaXNBZGRpdGlvbiB8fCBjaGFuZ2UuaXNVcGRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGBVbnN1cHBvcnRlZCBtYXRjaCBzdHlsZTogJHt0aGlzLm1hdGNoU3R5bGV9YCk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRlc2NyaXB0aW9uKCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGB0ZW1wbGF0ZSAoJHt0aGlzLm1hdGNoU3R5bGV9KTogJHtKU09OLnN0cmluZ2lmeSh0aGlzLnRlbXBsYXRlLCBudWxsLCAyKX1gO1xuICB9XG59XG4iXX0=