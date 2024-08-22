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
    /** Allows regular expressions to match strings */
    MatchStyle["REGEXP"] = "regexp";
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
        this.diff = rosDiff.diffTemplate(this.template, inspector.value);
        const acceptable = this.isDiffAcceptable();
        if (!acceptable) {
            // Print the diff
            rosDiff.formatDifferences(process.stderr, this.diff);
            // Print the actual template
            process.stderr.write(colors.rainbow('--------------------------------------------------------------------------------------\n'));
            process.stderr.write(colors.white((JSON.stringify(inspector.value, undefined, 2) + '\n')));
        }
        return acceptable;
    }
    isDiffAcceptable() {
        switch (this.matchStyle) {
            case MatchStyle.EXACT:
                return this.diff.differenceCount === 0;
            case MatchStyle.NO_REPLACES:
                for (const change of Object.values(this.diff.resources.changes)) {
                    if (change.changeImpact === rosDiff.ResourceImpact.MAY_REPLACE) {
                        return false;
                    }
                    if (change.changeImpact === rosDiff.ResourceImpact.WILL_REPLACE) {
                        return false;
                    }
                }
                for (const change of Object.values(this.diff.parameters.changes)) {
                    if (change.isUpdate) {
                        return false;
                    }
                }
                for (const change of Object.values(this.diff.outputs.changes)) {
                    if (change.isUpdate) {
                        return false;
                    }
                }
                return true;
            case MatchStyle.SUPERSET:
                for (const change of Object.values(this.diff.resources.changes)) {
                    if (change.changeImpact !== rosDiff.ResourceImpact.WILL_CREATE) {
                        return false;
                    }
                }
                for (const change of Object.values(this.diff.parameters.changes)) {
                    if (change.isAddition) {
                        return false;
                    }
                }
                for (const change of Object.values(this.diff.outputs.changes)) {
                    if (change.isAddition || change.isUpdate) {
                        return false;
                    }
                }
                return true;
            case MatchStyle.REGEXP:
                let acceptable = true;
                let diffMap = this.diff.toMap();
                let keysToDelete = [];
                for (const key in diffMap) {
                    const value = diffMap[key];
                    if (value === undefined || value === null || value === {}) {
                        keysToDelete.push(key);
                        continue;
                    }
                    if (rosDiff.isDifferenceInstance(value)) {
                        if (compareVariablesWithRegExp(value.oldValue, value.newValue)) {
                            keysToDelete.push(key);
                        }
                        else {
                            acceptable = false;
                        }
                    }
                    else if (typeof value === 'object' && !Array.isArray(value)) {
                        for (const subKey in value) {
                            if (compareVariablesWithRegExp(value[subKey].oldValue, value[subKey].newValue)) {
                                keysToDelete.push(key + '.' + subKey);
                            }
                            else {
                                for (const otherSubKey in value) {
                                    const regex = new RegExp(subKey);
                                    if (otherSubKey === subKey || !regex.test(otherSubKey)) {
                                        continue;
                                    }
                                    if (compareVariablesWithRegExp(value[subKey].oldValue, value[otherSubKey].newValue)
                                        || compareVariablesWithRegExp(value[otherSubKey].oldValue, value[subKey].newValue)) {
                                        keysToDelete.push(key + '.' + subKey);
                                        keysToDelete.push(key + '.' + otherSubKey);
                                        break;
                                    }
                                    else {
                                        acceptable = false;
                                    }
                                }
                            }
                        }
                    }
                }
                for (const key of keysToDelete) {
                    const keys = key.split('.');
                    if (keys.length == 1) {
                        delete diffMap[key];
                    }
                    else {
                        delete diffMap[keys[0]][keys[1]];
                        if (Object.keys(diffMap[keys[0]]).length === 0) {
                            delete diffMap[keys[0]];
                        }
                    }
                }
                this.diff = rosDiff.TemplateDiff.fromMap(diffMap);
                return acceptable;
        }
        throw new Error(`Unsupported match style: ${this.matchStyle}`);
    }
    get description() {
        return `template (${this.matchStyle}): ${JSON.stringify(this.template, null, 2)}`;
    }
}
function compareVariablesWithRegExp(var1, var2) {
    if (typeof var1 !== typeof var2) {
        return false;
    }
    if (typeof var1 === 'string' && typeof var2 === 'string') {
        if (var1 !== var2) {
            const regex = new RegExp(var1);
            return regex.test(var2);
        }
        else {
            return true;
        }
    }
    if (typeof var1 !== 'object' && typeof var2 !== 'object') {
        return var1 === var2;
    }
    if (typeof var1 === 'object' && typeof var2 === 'object') {
        if (Array.isArray(var1) && Array.isArray(var2)) {
            if (var1.length !== var2.length) {
                return false;
            }
            for (let i = 0; i < var1.length; i++) {
                if (!compareVariablesWithRegExp(var1[i], var2[i])) {
                    return false;
                }
            }
            return true;
        }
        else {
            const keys1 = Object.keys(var1);
            const keys2 = Object.keys(var2);
            if (keys1.length !== keys2.length) {
                return false;
            }
            for (const key of keys1) {
                if (!compareVariablesWithRegExp(var1[key], var2[key])) {
                    return false;
                }
            }
            return true;
        }
    }
    return false;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gtdGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYXRjaC10ZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyREFBMkQ7QUFDM0QsNENBQXVDO0FBRXZDLHNDQUFzQztBQUV0QyxJQUFZLFVBU1g7QUFURCxXQUFZLFVBQVU7SUFDcEIsOEJBQThCO0lBQzlCLCtCQUFpQixDQUFBO0lBQ2pCLG1FQUFtRTtJQUNuRSx5Q0FBMkIsQ0FBQTtJQUMzQix1Q0FBdUM7SUFDdkMsbUNBQXFCLENBQUE7SUFDckIsa0RBQWtEO0lBQ2xELCtCQUFpQixDQUFBO0FBQ25CLENBQUMsRUFUVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQVNyQjtBQUVELFNBQWdCLG9CQUFvQixDQUFDLFFBQWdDO0lBQ25FLE9BQU8sYUFBYSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbkQsQ0FBQztBQUZELG9EQUVDO0FBRUQsU0FBZ0IscUJBQXFCLENBQUMsUUFBZ0M7SUFDcEUsT0FBTyxhQUFhLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN0RCxDQUFDO0FBRkQsc0RBRUM7QUFFRCxTQUFnQixhQUFhLENBQzNCLFFBQWdDLEVBQ2hDLGFBQXlCLFVBQVUsQ0FBQyxLQUFLO0lBRXpDLE9BQU8sSUFBSSw2QkFBNkIsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDakUsQ0FBQztBQUxELHNDQUtDO0FBRUQsTUFBTSw2QkFBOEIsU0FBUSxxQkFBeUI7SUFFbkUsWUFBNkIsUUFBZ0MsRUFBbUIsVUFBc0I7UUFDcEcsS0FBSyxFQUFFLENBQUM7UUFEbUIsYUFBUSxHQUFSLFFBQVEsQ0FBd0I7UUFBbUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUV0RyxDQUFDO0lBRU0sYUFBYSxDQUFDLFNBQXlCO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFD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LEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3NEaWZmIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLXRlbXBsYXRlLWRpZmYnO1xuaW1wb3J0IHtBc3NlcnRpb259IGZyb20gJy4uL2Fzc2VydGlvbic7XG5pbXBvcnQge1N0YWNrSW5zcGVjdG9yfSBmcm9tICcuLi9pbnNwZWN0b3InO1xuaW1wb3J0ICogYXMgY29sb3JzIGZyb20gJ2NvbG9ycy9zYWZlJztcblxuZXhwb3J0IGVudW0gTWF0Y2hTdHlsZSB7XG4gIC8qKiBSZXF1aXJlcyBhbiBleGFjdCBtYXRjaCAqL1xuICBFWEFDVCA9ICdleGFjdGx5JyxcbiAgLyoqIEFsbG93cyBhbnkgY2hhbmdlIHRoYXQgZG9lcyBub3QgY2F1c2UgYSByZXNvdXJjZSByZXBsYWNlbWVudCAqL1xuICBOT19SRVBMQUNFUyA9ICdubyByZXBsYWNlcycsXG4gIC8qKiBBbGxvd3MgYWRkaXRpb25zLCBidXQgbm8gdXBkYXRlcyAqL1xuICBTVVBFUlNFVCA9ICdzdXBlcnNldCcsXG4gIC8qKiBBbGxvd3MgcmVndWxhciBleHByZXNzaW9ucyB0byBtYXRjaCBzdHJpbmdzICovXG4gIFJFR0VYUCA9ICdyZWdleHAnLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhhY3RseU1hdGNoVGVtcGxhdGUodGVtcGxhdGU6IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgcmV0dXJuIG1hdGNoVGVtcGxhdGUodGVtcGxhdGUsIE1hdGNoU3R5bGUuRVhBQ1QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmVBU3VwZXJzZXRPZlRlbXBsYXRlKHRlbXBsYXRlOiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gIHJldHVybiBtYXRjaFRlbXBsYXRlKHRlbXBsYXRlLCBNYXRjaFN0eWxlLlNVUEVSU0VUKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoVGVtcGxhdGUoXG4gIHRlbXBsYXRlOiB7IFtrZXk6IHN0cmluZ106IGFueSB9LFxuICBtYXRjaFN0eWxlOiBNYXRjaFN0eWxlID0gTWF0Y2hTdHlsZS5FWEFDVCxcbik6IEFzc2VydGlvbjxTdGFja0luc3BlY3Rvcj4ge1xuICByZXR1cm4gbmV3IFN0YWNrTWF0Y2hlc1RlbXBsYXRlQXNzZXJ0aW9uKHRlbXBsYXRlLCBtYXRjaFN0eWxlKTtcbn1cblxuY2xhc3MgU3RhY2tNYXRjaGVzVGVtcGxhdGVBc3NlcnRpb24gZXh0ZW5kcyBBc3NlcnRpb248U3RhY2tJbnNwZWN0b3I+IHtcbiAgcHVibGljIGRpZmY/OiByb3NEaWZmLlRlbXBsYXRlRGlmZjtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSB0ZW1wbGF0ZTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSwgcHJpdmF0ZSByZWFkb25seSBtYXRjaFN0eWxlOiBNYXRjaFN0eWxlKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3NlcnRPclRocm93KGluc3BlY3RvcjogU3RhY2tJbnNwZWN0b3IpIHtcbiAgICBpZiAoIXRoaXMuYXNzZXJ0VXNpbmcoaW5zcGVjdG9yKSkge1xuICAgICAgLy8gVGhlIGRldGFpbHMgaGF2ZSBhbHJlYWR5IGJlZW4gcHJpbnRlZCwgc28gZG9uJ3QgZ2VuZXJhdGUgYSBodWdlIGVycm9yIG1lc3NhZ2VcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGVtcGxhdGUgY29tcGFyaXNvbiBwcm9kdWNlZCB1bmFjY2VwdGFibGUgbWF0Y2gnKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYXNzZXJ0VXNpbmcoaW5zcGVjdG9yOiBTdGFja0luc3BlY3Rvcik6IGJvb2xlYW4ge1xuICAgIHRoaXMuZGlmZiA9IHJvc0RpZmYuZGlmZlRlbXBsYXRlKHRoaXMudGVtcGxhdGUsIGluc3BlY3Rvci52YWx1ZSk7XG4gICAgY29uc3QgYWNjZXB0YWJsZSA9IHRoaXMuaXNEaWZmQWNjZXB0YWJsZSgpO1xuICAgIGlmICghYWNjZXB0YWJsZSkge1xuICAgICAgLy8gUHJpbnQgdGhlIGRpZmZcbiAgICAgIHJvc0RpZmYuZm9ybWF0RGlmZmVyZW5jZXMocHJvY2Vzcy5zdGRlcnIsIHRoaXMuZGlmZik7XG5cbiAgICAgIC8vIFByaW50IHRoZSBhY3R1YWwgdGVtcGxhdGVcbiAgICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKGNvbG9ycy5yYWluYm93KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbicpKTtcbiAgICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKGNvbG9ycy53aGl0ZSgoSlNPTi5zdHJpbmdpZnkoaW5zcGVjdG9yLnZhbHVlLCB1bmRlZmluZWQsIDIpICsgJ1xcbicpKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjY2VwdGFibGU7XG4gIH1cblxuICBwcml2YXRlIGlzRGlmZkFjY2VwdGFibGUoKTogYm9vbGVhbiB7XG4gICAgc3dpdGNoICh0aGlzLm1hdGNoU3R5bGUpIHtcbiAgICAgIGNhc2UgTWF0Y2hTdHlsZS5FWEFDVDpcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlmZiEuZGlmZmVyZW5jZUNvdW50ID09PSAwO1xuICAgICAgY2FzZSBNYXRjaFN0eWxlLk5PX1JFUExBQ0VTOlxuICAgICAgICBmb3IgKGNvbnN0IGNoYW5nZSBvZiBPYmplY3QudmFsdWVzKHRoaXMuZGlmZiEucmVzb3VyY2VzLmNoYW5nZXMpKSB7XG4gICAgICAgICAgaWYgKGNoYW5nZS5jaGFuZ2VJbXBhY3QgPT09IHJvc0RpZmYuUmVzb3VyY2VJbXBhY3QuTUFZX1JFUExBQ0UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGNoYW5nZS5jaGFuZ2VJbXBhY3QgPT09IHJvc0RpZmYuUmVzb3VyY2VJbXBhY3QuV0lMTF9SRVBMQUNFKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBjaGFuZ2Ugb2YgT2JqZWN0LnZhbHVlcyh0aGlzLmRpZmYhLnBhcmFtZXRlcnMuY2hhbmdlcykpIHtcbiAgICAgICAgICBpZiAoY2hhbmdlLmlzVXBkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBjaGFuZ2Ugb2YgT2JqZWN0LnZhbHVlcyh0aGlzLmRpZmYhLm91dHB1dHMuY2hhbmdlcykpIHtcbiAgICAgICAgICBpZiAoY2hhbmdlLmlzVXBkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSBNYXRjaFN0eWxlLlNVUEVSU0VUOlxuICAgICAgICBmb3IgKGNvbnN0IGNoYW5nZSBvZiBPYmplY3QudmFsdWVzKHRoaXMuZGlmZiEucmVzb3VyY2VzLmNoYW5nZXMpKSB7XG4gICAgICAgICAgaWYgKGNoYW5nZS5jaGFuZ2VJbXBhY3QgIT09IHJvc0RpZmYuUmVzb3VyY2VJbXBhY3QuV0lMTF9DUkVBVEUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGNoYW5nZSBvZiBPYmplY3QudmFsdWVzKHRoaXMuZGlmZiEucGFyYW1ldGVycy5jaGFuZ2VzKSkge1xuICAgICAgICAgIGlmIChjaGFuZ2UuaXNBZGRpdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgY2hhbmdlIG9mIE9iamVjdC52YWx1ZXModGhpcy5kaWZmIS5vdXRwdXRzLmNoYW5nZXMpKSB7XG4gICAgICAgICAgaWYgKGNoYW5nZS5pc0FkZGl0aW9uIHx8IGNoYW5nZS5pc1VwZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSBNYXRjaFN0eWxlLlJFR0VYUDpcbiAgICAgICAgbGV0IGFjY2VwdGFibGUgPSB0cnVlO1xuICAgICAgICBsZXQgZGlmZk1hcCA9IHRoaXMuZGlmZiEudG9NYXAoKTtcbiAgICAgICAgbGV0IGtleXNUb0RlbGV0ZTogc3RyaW5nW10gPSBbXTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgaW4gZGlmZk1hcCkge1xuICAgICAgICAgIGNvbnN0IHZhbHVlID0gZGlmZk1hcFtrZXldO1xuICAgICAgICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkIHx8IHZhbHVlID09PSBudWxsIHx8IHZhbHVlID09PSB7fSkge1xuICAgICAgICAgICAga2V5c1RvRGVsZXRlLnB1c2goa2V5KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocm9zRGlmZi5pc0RpZmZlcmVuY2VJbnN0YW5jZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlVmFyaWFibGVzV2l0aFJlZ0V4cCh2YWx1ZS5vbGRWYWx1ZSwgdmFsdWUubmV3VmFsdWUpKSB7XG4gICAgICAgICAgICAgIGtleXNUb0RlbGV0ZS5wdXNoKGtleSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhY2NlcHRhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBzdWJLZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgICAgaWYgKGNvbXBhcmVWYXJpYWJsZXNXaXRoUmVnRXhwKHZhbHVlW3N1YktleV0ub2xkVmFsdWUsIHZhbHVlW3N1YktleV0ubmV3VmFsdWUpKSB7XG4gICAgICAgICAgICAgICAga2V5c1RvRGVsZXRlLnB1c2goa2V5ICsgJy4nICsgc3ViS2V5KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG90aGVyU3ViS2V5IGluIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoc3ViS2V5KTtcbiAgICAgICAgICAgICAgICAgIGlmIChvdGhlclN1YktleSA9PT0gc3ViS2V5IHx8ICFyZWdleC50ZXN0KG90aGVyU3ViS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChjb21wYXJlVmFyaWFibGVzV2l0aFJlZ0V4cCh2YWx1ZVtzdWJLZXldLm9sZFZhbHVlLCB2YWx1ZVtvdGhlclN1YktleV0ubmV3VmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgfHwgY29tcGFyZVZhcmlhYmxlc1dpdGhSZWdFeHAodmFsdWVbb3RoZXJTdWJLZXldLm9sZFZhbHVlLCB2YWx1ZVtzdWJLZXldLm5ld1ZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBrZXlzVG9EZWxldGUucHVzaChrZXkgKyAnLicgKyBzdWJLZXkpO1xuICAgICAgICAgICAgICAgICAgICBrZXlzVG9EZWxldGUucHVzaChrZXkgKyAnLicgKyBvdGhlclN1YktleSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYWNjZXB0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzVG9EZWxldGUpIHtcbiAgICAgICAgICBjb25zdCBrZXlzID0ga2V5LnNwbGl0KCcuJyk7XG4gICAgICAgICAgaWYgKGtleXMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBkaWZmTWFwW2tleV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSBkaWZmTWFwW2tleXNbMF1dW2tleXNbMV1dO1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRpZmZNYXBba2V5c1swXV0pLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICBkZWxldGUgZGlmZk1hcFtrZXlzWzBdXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaWZmID0gcm9zRGlmZi5UZW1wbGF0ZURpZmYuZnJvbU1hcChkaWZmTWFwKTtcbiAgICAgICAgcmV0dXJuIGFjY2VwdGFibGU7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgbWF0Y2ggc3R5bGU6ICR7dGhpcy5tYXRjaFN0eWxlfWApO1xuICB9XG5cbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiBgdGVtcGxhdGUgKCR7dGhpcy5tYXRjaFN0eWxlfSk6ICR7SlNPTi5zdHJpbmdpZnkodGhpcy50ZW1wbGF0ZSwgbnVsbCwgMil9YDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb21wYXJlVmFyaWFibGVzV2l0aFJlZ0V4cCh2YXIxOiBhbnksIHZhcjI6IGFueSk6IGJvb2xlYW4ge1xuICBpZiAodHlwZW9mIHZhcjEgIT09IHR5cGVvZiB2YXIyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YXIxID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgdmFyMiA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodmFyMSAhPT0gdmFyMikge1xuICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHZhcjEpO1xuICAgICAgcmV0dXJuIHJlZ2V4LnRlc3QodmFyMik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFyMSAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhcjIgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIHZhcjEgPT09IHZhcjI7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhcjEgPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YXIyID09PSAnb2JqZWN0Jykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhcjEpICYmIEFycmF5LmlzQXJyYXkodmFyMikpIHtcbiAgICAgIGlmICh2YXIxLmxlbmd0aCAhPT0gdmFyMi5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YXIxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghY29tcGFyZVZhcmlhYmxlc1dpdGhSZWdFeHAodmFyMVtpXSwgdmFyMltpXSkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBrZXlzMSA9IE9iamVjdC5rZXlzKHZhcjEpO1xuICAgICAgY29uc3Qga2V5czIgPSBPYmplY3Qua2V5cyh2YXIyKTtcbiAgICAgIGlmIChrZXlzMS5sZW5ndGggIT09IGtleXMyLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzMSkge1xuICAgICAgICBpZiAoIWNvbXBhcmVWYXJpYWJsZXNXaXRoUmVnRXhwKHZhcjFba2V5XSwgdmFyMltrZXldKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuIl19