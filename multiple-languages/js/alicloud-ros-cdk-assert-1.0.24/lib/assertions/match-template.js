"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.matchTemplate = exports.beASupersetOfTemplate = exports.exactlyMatchTemplate = exports.MatchStyle = void 0;
const rosDiff = require("@alicloud/ros-cdk-template-diff");
const assertion_1 = require("../assertion");
const colors = require("colors/safe");
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
            process.stderr.write(colors.rainbow('--------------------------------------------------------------------------------------\n'));
            process.stderr.write(colors.white((JSON.stringify(inspector.value, undefined, 2) + '\n')));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gtdGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYXRjaC10ZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyREFBMkQ7QUFDM0QsNENBQXlDO0FBRXpDLHNDQUFzQztBQUV0QyxJQUFZLFVBT1g7QUFQRCxXQUFZLFVBQVU7SUFDcEIsOEJBQThCO0lBQzlCLCtCQUFpQixDQUFBO0lBQ2pCLG1FQUFtRTtJQUNuRSx5Q0FBMkIsQ0FBQTtJQUMzQix1Q0FBdUM7SUFDdkMsbUNBQXFCLENBQUE7QUFDdkIsQ0FBQyxFQVBXLFVBQVUsR0FBVixrQkFBVSxLQUFWLGtCQUFVLFFBT3JCO0FBRUQsU0FBZ0Isb0JBQW9CLENBQUMsUUFBZ0M7SUFDbkUsT0FBTyxhQUFhLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztBQUNuRCxDQUFDO0FBRkQsb0RBRUM7QUFFRCxTQUFnQixxQkFBcUIsQ0FBQyxRQUFnQztJQUNwRSxPQUFPLGFBQWEsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLFFBQVEsQ0FBQyxDQUFDO0FBQ3RELENBQUM7QUFGRCxzREFFQztBQUVELFNBQWdCLGFBQWEsQ0FDM0IsUUFBZ0MsRUFDaEMsYUFBeUIsVUFBVSxDQUFDLEtBQUs7SUFFekMsT0FBTyxJQUFJLDZCQUE2QixDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQztBQUNqRSxDQUFDO0FBTEQsc0NBS0M7QUFFRCxNQUFNLDZCQUE4QixTQUFRLHFCQUF5QjtJQUNuRSxZQUE2QixRQUFnQyxFQUFtQixVQUFzQjtRQUNwRyxLQUFLLEVBQUUsQ0FBQztRQURtQixhQUFRLEdBQVIsUUFBUSxDQUF3QjtRQUFtQixlQUFVLEdBQVYsVUFBVSxDQUFZO0lBRXRHLENBQUM7SUFFTSxhQUFhLENBQUMsU0FBeUI7UUFDNUMsSUFBSSxDQUFDLElBQUksQ0FBQyxXQUFXLENBQUMsU0FBUyxDQUFDLEVBQUU7WUFDaEMsZ0ZBQWdGO1lB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Q0FBQyxRQUFRLEVBQUU7d0JBQ3hDLE9BQU8sS0FBSyxDQUFDO3FCQUNkO2lCQUNGO2dCQUVELE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxNQUFNLElBQUksS0FBSyxDQUFDLDRCQUE0QixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUMsQ0FBQztJQUNqRSxDQUFDO0lBRUQsSUFBVyxXQUFXO1FBQ3BCLE9BQU8sYUFBYSxJQUFJLENBQUMsVUFBVSxNQUFNLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNwRixDQUFDO0NBQ0YiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3NEaWZmIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLXRlbXBsYXRlLWRpZmYnO1xuaW1wb3J0IHsgQXNzZXJ0aW9uIH0gZnJvbSAnLi4vYXNzZXJ0aW9uJztcbmltcG9ydCB7IFN0YWNrSW5zcGVjdG9yIH0gZnJvbSAnLi4vaW5zcGVjdG9yJztcbmltcG9ydCAqIGFzIGNvbG9ycyBmcm9tICdjb2xvcnMvc2FmZSc7XG5cbmV4cG9ydCBlbnVtIE1hdGNoU3R5bGUge1xuICAvKiogUmVxdWlyZXMgYW4gZXhhY3QgbWF0Y2ggKi9cbiAgRVhBQ1QgPSAnZXhhY3RseScsXG4gIC8qKiBBbGxvd3MgYW55IGNoYW5nZSB0aGF0IGRvZXMgbm90IGNhdXNlIGEgcmVzb3VyY2UgcmVwbGFjZW1lbnQgKi9cbiAgTk9fUkVQTEFDRVMgPSAnbm8gcmVwbGFjZXMnLFxuICAvKiogQWxsb3dzIGFkZGl0aW9ucywgYnV0IG5vIHVwZGF0ZXMgKi9cbiAgU1VQRVJTRVQgPSAnc3VwZXJzZXQnLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhhY3RseU1hdGNoVGVtcGxhdGUodGVtcGxhdGU6IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgcmV0dXJuIG1hdGNoVGVtcGxhdGUodGVtcGxhdGUsIE1hdGNoU3R5bGUuRVhBQ1QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmVBU3VwZXJzZXRPZlRlbXBsYXRlKHRlbXBsYXRlOiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gIHJldHVybiBtYXRjaFRlbXBsYXRlKHRlbXBsYXRlLCBNYXRjaFN0eWxlLlNVUEVSU0VUKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoVGVtcGxhdGUoXG4gIHRlbXBsYXRlOiB7IFtrZXk6IHN0cmluZ106IGFueSB9LFxuICBtYXRjaFN0eWxlOiBNYXRjaFN0eWxlID0gTWF0Y2hTdHlsZS5FWEFDVCxcbik6IEFzc2VydGlvbjxTdGFja0luc3BlY3Rvcj4ge1xuICByZXR1cm4gbmV3IFN0YWNrTWF0Y2hlc1RlbXBsYXRlQXNzZXJ0aW9uKHRlbXBsYXRlLCBtYXRjaFN0eWxlKTtcbn1cblxuY2xhc3MgU3RhY2tNYXRjaGVzVGVtcGxhdGVBc3NlcnRpb24gZXh0ZW5kcyBBc3NlcnRpb248U3RhY2tJbnNwZWN0b3I+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSB0ZW1wbGF0ZTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSwgcHJpdmF0ZSByZWFkb25seSBtYXRjaFN0eWxlOiBNYXRjaFN0eWxlKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3NlcnRPclRocm93KGluc3BlY3RvcjogU3RhY2tJbnNwZWN0b3IpIHtcbiAgICBpZiAoIXRoaXMuYXNzZXJ0VXNpbmcoaW5zcGVjdG9yKSkge1xuICAgICAgLy8gVGhlIGRldGFpbHMgaGF2ZSBhbHJlYWR5IGJlZW4gcHJpbnRlZCwgc28gZG9uJ3QgZ2VuZXJhdGUgYSBodWdlIGVycm9yIG1lc3NhZ2VcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGVtcGxhdGUgY29tcGFyaXNvbiBwcm9kdWNlZCB1bmFjY2VwdGFibGUgbWF0Y2gnKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYXNzZXJ0VXNpbmcoaW5zcGVjdG9yOiBTdGFja0luc3BlY3Rvcik6IGJvb2xlYW4ge1xuICAgIGNvbnN0IGRpZmYgPSByb3NEaWZmLmRpZmZUZW1wbGF0ZSh0aGlzLnRlbXBsYXRlLCBpbnNwZWN0b3IudmFsdWUpO1xuICAgIGNvbnN0IGFjY2VwdGFibGUgPSB0aGlzLmlzRGlmZkFjY2VwdGFibGUoZGlmZik7XG4gICAgaWYgKCFhY2NlcHRhYmxlKSB7XG4gICAgICAvLyBQcmludCB0aGUgZGlmZlxuICAgICAgcm9zRGlmZi5mb3JtYXREaWZmZXJlbmNlcyhwcm9jZXNzLnN0ZGVyciwgZGlmZik7XG5cbiAgICAgIC8vIFByaW50IHRoZSBhY3R1YWwgdGVtcGxhdGVcbiAgICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKGNvbG9ycy5yYWluYm93KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbicpKTtcbiAgICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKGNvbG9ycy53aGl0ZSgoSlNPTi5zdHJpbmdpZnkoaW5zcGVjdG9yLnZhbHVlLCB1bmRlZmluZWQsIDIpICsgJ1xcbicpKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjY2VwdGFibGU7XG4gIH1cblxuICBwcml2YXRlIGlzRGlmZkFjY2VwdGFibGUoZGlmZjogcm9zRGlmZi5UZW1wbGF0ZURpZmYpOiBib29sZWFuIHtcbiAgICBzd2l0Y2ggKHRoaXMubWF0Y2hTdHlsZSkge1xuICAgICAgY2FzZSBNYXRjaFN0eWxlLkVYQUNUOlxuICAgICAgICByZXR1cm4gZGlmZi5kaWZmZXJlbmNlQ291bnQgPT09IDA7XG4gICAgICBjYXNlIE1hdGNoU3R5bGUuTk9fUkVQTEFDRVM6XG4gICAgICAgIGZvciAoY29uc3QgY2hhbmdlIG9mIE9iamVjdC52YWx1ZXMoZGlmZi5yZXNvdXJjZXMuY2hhbmdlcykpIHtcbiAgICAgICAgICBpZiAoY2hhbmdlLmNoYW5nZUltcGFjdCA9PT0gcm9zRGlmZi5SZXNvdXJjZUltcGFjdC5NQVlfUkVQTEFDRSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoY2hhbmdlLmNoYW5nZUltcGFjdCA9PT0gcm9zRGlmZi5SZXNvdXJjZUltcGFjdC5XSUxMX1JFUExBQ0UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGNoYW5nZSBvZiBPYmplY3QudmFsdWVzKGRpZmYucGFyYW1ldGVycy5jaGFuZ2VzKSkge1xuICAgICAgICAgIGlmIChjaGFuZ2UuaXNVcGRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGNoYW5nZSBvZiBPYmplY3QudmFsdWVzKGRpZmYub3V0cHV0cy5jaGFuZ2VzKSkge1xuICAgICAgICAgIGlmIChjaGFuZ2UuaXNVcGRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICBjYXNlIE1hdGNoU3R5bGUuU1VQRVJTRVQ6XG4gICAgICAgIGZvciAoY29uc3QgY2hhbmdlIG9mIE9iamVjdC52YWx1ZXMoZGlmZi5yZXNvdXJjZXMuY2hhbmdlcykpIHtcbiAgICAgICAgICBpZiAoY2hhbmdlLmNoYW5nZUltcGFjdCAhPT0gcm9zRGlmZi5SZXNvdXJjZUltcGFjdC5XSUxMX0NSRUFURSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgY2hhbmdlIG9mIE9iamVjdC52YWx1ZXMoZGlmZi5wYXJhbWV0ZXJzLmNoYW5nZXMpKSB7XG4gICAgICAgICAgaWYgKGNoYW5nZS5pc0FkZGl0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBjaGFuZ2Ugb2YgT2JqZWN0LnZhbHVlcyhkaWZmLm91dHB1dHMuY2hhbmdlcykpIHtcbiAgICAgICAgICBpZiAoY2hhbmdlLmlzQWRkaXRpb24gfHwgY2hhbmdlLmlzVXBkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgbWF0Y2ggc3R5bGU6ICR7dGhpcy5tYXRjaFN0eWxlfWApO1xuICB9XG5cbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiBgdGVtcGxhdGUgKCR7dGhpcy5tYXRjaFN0eWxlfSk6ICR7SlNPTi5zdHJpbmdpZnkodGhpcy50ZW1wbGF0ZSwgbnVsbCwgMil9YDtcbiAgfVxufVxuIl19