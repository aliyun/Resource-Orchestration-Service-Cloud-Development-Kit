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
                let diffMap = this.diff.toMap();
                let keysToDelete = [];
                for (const key in diffMap) {
                    const value = diffMap[key];
                    if (value === undefined || value === null || (typeof value === 'object' && Object.keys(value).length === 0)) {
                        keysToDelete.push(key);
                        continue;
                    }
                    if (rosDiff.isDifferenceInstance(value)) {
                        if (compareVariablesWithRegExp(value.oldValue, value.newValue)) {
                            keysToDelete.push(key);
                        }
                    }
                    else if (typeof value === 'object' && !Array.isArray(value)) {
                        for (const subKey in value) {
                            if (`${key}.${subKey}` in keysToDelete) {
                                continue;
                            }
                            if (compareVariablesWithRegExp(value[subKey].oldValue, value[subKey].newValue)) {
                                keysToDelete.push(key + '.' + subKey);
                            }
                            else {
                                for (const otherSubKey in value) {
                                    if (`${key}.${otherSubKey}` in keysToDelete) {
                                        continue;
                                    }
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
                return this.diff.differenceCount === 0;
        }
        throw new Error(`Unsupported match style: ${this.matchStyle}`);
    }
    get description() {
        return `template (${this.matchStyle}): ${JSON.stringify(this.template, null, 2)}`;
    }
}
function compareVariablesWithRegExp(var1, var2) {
    if (var1 === undefined || var2 === undefined) {
        return false;
    }
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gtdGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYXRjaC10ZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyREFBMkQ7QUFDM0QsNENBQXVDO0FBRXZDLHNDQUFzQztBQUV0QyxJQUFZLFVBU1g7QUFURCxXQUFZLFVBQVU7SUFDcEIsOEJBQThCO0lBQzlCLCtCQUFpQixDQUFBO0lBQ2pCLG1FQUFtRTtJQUNuRSx5Q0FBMkIsQ0FBQTtJQUMzQix1Q0FBdUM7SUFDdkMsbUNBQXFCLENBQUE7SUFDckIsa0RBQWtEO0lBQ2xELCtCQUFpQixDQUFBO0FBQ25CLENBQUMsRUFUVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQVNyQjtBQUVELFNBQWdCLG9CQUFvQixDQUFDLFFBQWdDO0lBQ25FLE9BQU8sYUFBYSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbkQsQ0FBQztBQUZELG9EQUVDO0FBRUQsU0FBZ0IscUJBQXFCLENBQUMsUUFBZ0M7SUFDcEUsT0FBTyxhQUFhLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN0RCxDQUFDO0FBRkQsc0RBRUM7QUFFRCxTQUFnQixhQUFhLENBQzNCLFFBQWdDLEVBQ2hDLGFBQXlCLFVBQVUsQ0FBQyxLQUFLO0lBRXpDLE9BQU8sSUFBSSw2QkFBNkIsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDakUsQ0FBQztBQUxELHNDQUtDO0FBRUQsTUFBTSw2QkFBOEIsU0FBUSxxQkFBeUI7SUFFbkUsWUFBNkIsUUFBZ0MsRUFBbUIsVUFBc0I7UUFDcEcsS0FBSyxFQUFFLENBQUM7UUFEbUIsYUFBUSxHQUFSLFFBQVEsQ0FBd0I7UUFBbUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUV0RyxDQUFDO0lBRU0sYUFBYSxDQUFDLFNBQXlCO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFD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QUssQ0FBQzthQUNkO1lBQ0QsS0FBSyxNQUFNLEdBQUcsSUFBSSxLQUFLLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQywwQkFBMEIsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7b0JBQ3JELE9BQU8sS0FBSyxDQUFDO2lCQUNkO2FBQ0Y7WUFDRCxPQUFPLElBQUksQ0FBQztTQUNiO0tBQ0Y7SUFFRCxPQUFPLEtBQUssQ0FBQztBQUNmLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3NEaWZmIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLXRlbXBsYXRlLWRpZmYnO1xuaW1wb3J0IHtBc3NlcnRpb259IGZyb20gJy4uL2Fzc2VydGlvbic7XG5pbXBvcnQge1N0YWNrSW5zcGVjdG9yfSBmcm9tICcuLi9pbnNwZWN0b3InO1xuaW1wb3J0ICogYXMgY29sb3JzIGZyb20gJ2NvbG9ycy9zYWZlJztcblxuZXhwb3J0IGVudW0gTWF0Y2hTdHlsZSB7XG4gIC8qKiBSZXF1aXJlcyBhbiBleGFjdCBtYXRjaCAqL1xuICBFWEFDVCA9ICdleGFjdGx5JyxcbiAgLyoqIEFsbG93cyBhbnkgY2hhbmdlIHRoYXQgZG9lcyBub3QgY2F1c2UgYSByZXNvdXJjZSByZXBsYWNlbWVudCAqL1xuICBOT19SRVBMQUNFUyA9ICdubyByZXBsYWNlcycsXG4gIC8qKiBBbGxvd3MgYWRkaXRpb25zLCBidXQgbm8gdXBkYXRlcyAqL1xuICBTVVBFUlNFVCA9ICdzdXBlcnNldCcsXG4gIC8qKiBBbGxvd3MgcmVndWxhciBleHByZXNzaW9ucyB0byBtYXRjaCBzdHJpbmdzICovXG4gIFJFR0VYUCA9ICdyZWdleHAnLFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZXhhY3RseU1hdGNoVGVtcGxhdGUodGVtcGxhdGU6IHsgW2tleTogc3RyaW5nXTogYW55IH0pIHtcbiAgcmV0dXJuIG1hdGNoVGVtcGxhdGUodGVtcGxhdGUsIE1hdGNoU3R5bGUuRVhBQ1QpO1xufVxuXG5leHBvcnQgZnVuY3Rpb24gYmVBU3VwZXJzZXRPZlRlbXBsYXRlKHRlbXBsYXRlOiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gIHJldHVybiBtYXRjaFRlbXBsYXRlKHRlbXBsYXRlLCBNYXRjaFN0eWxlLlNVUEVSU0VUKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoVGVtcGxhdGUoXG4gIHRlbXBsYXRlOiB7IFtrZXk6IHN0cmluZ106IGFueSB9LFxuICBtYXRjaFN0eWxlOiBNYXRjaFN0eWxlID0gTWF0Y2hTdHlsZS5FWEFDVCxcbik6IEFzc2VydGlvbjxTdGFja0luc3BlY3Rvcj4ge1xuICByZXR1cm4gbmV3IFN0YWNrTWF0Y2hlc1RlbXBsYXRlQXNzZXJ0aW9uKHRlbXBsYXRlLCBtYXRjaFN0eWxlKTtcbn1cblxuY2xhc3MgU3RhY2tNYXRjaGVzVGVtcGxhdGVBc3NlcnRpb24gZXh0ZW5kcyBBc3NlcnRpb248U3RhY2tJbnNwZWN0b3I+IHtcbiAgcHVibGljIGRpZmY/OiByb3NEaWZmLlRlbXBsYXRlRGlmZjtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSB0ZW1wbGF0ZTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSwgcHJpdmF0ZSByZWFkb25seSBtYXRjaFN0eWxlOiBNYXRjaFN0eWxlKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBhc3NlcnRPclRocm93KGluc3BlY3RvcjogU3RhY2tJbnNwZWN0b3IpIHtcbiAgICBpZiAoIXRoaXMuYXNzZXJ0VXNpbmcoaW5zcGVjdG9yKSkge1xuICAgICAgLy8gVGhlIGRldGFpbHMgaGF2ZSBhbHJlYWR5IGJlZW4gcHJpbnRlZCwgc28gZG9uJ3QgZ2VuZXJhdGUgYSBodWdlIGVycm9yIG1lc3NhZ2VcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGVtcGxhdGUgY29tcGFyaXNvbiBwcm9kdWNlZCB1bmFjY2VwdGFibGUgbWF0Y2gnKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgYXNzZXJ0VXNpbmcoaW5zcGVjdG9yOiBTdGFja0luc3BlY3Rvcik6IGJvb2xlYW4ge1xuICAgIHRoaXMuZGlmZiA9IHJvc0RpZmYuZGlmZlRlbXBsYXRlKHRoaXMudGVtcGxhdGUsIGluc3BlY3Rvci52YWx1ZSk7XG4gICAgY29uc3QgYWNjZXB0YWJsZSA9IHRoaXMuaXNEaWZmQWNjZXB0YWJsZSgpO1xuICAgIGlmICghYWNjZXB0YWJsZSkge1xuICAgICAgLy8gUHJpbnQgdGhlIGRpZmZcbiAgICAgIHJvc0RpZmYuZm9ybWF0RGlmZmVyZW5jZXMocHJvY2Vzcy5zdGRlcnIsIHRoaXMuZGlmZik7XG5cbiAgICAgIC8vIFByaW50IHRoZSBhY3R1YWwgdGVtcGxhdGVcbiAgICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKGNvbG9ycy5yYWluYm93KCctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVxcbicpKTtcbiAgICAgIHByb2Nlc3Muc3RkZXJyLndyaXRlKGNvbG9ycy53aGl0ZSgoSlNPTi5zdHJpbmdpZnkoaW5zcGVjdG9yLnZhbHVlLCB1bmRlZmluZWQsIDIpICsgJ1xcbicpKSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGFjY2VwdGFibGU7XG4gIH1cblxuICBwcml2YXRlIGlzRGlmZkFjY2VwdGFibGUoKTogYm9vbGVhbiB7XG4gICAgc3dpdGNoICh0aGlzLm1hdGNoU3R5bGUpIHtcbiAgICAgIGNhc2UgTWF0Y2hTdHlsZS5FWEFDVDpcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlmZiEuZGlmZmVyZW5jZUNvdW50ID09PSAwO1xuICAgICAgY2FzZSBNYXRjaFN0eWxlLk5PX1JFUExBQ0VTOlxuICAgICAgICBmb3IgKGNvbnN0IGNoYW5nZSBvZiBPYmplY3QudmFsdWVzKHRoaXMuZGlmZiEucmVzb3VyY2VzLmNoYW5nZXMpKSB7XG4gICAgICAgICAgaWYgKGNoYW5nZS5jaGFuZ2VJbXBhY3QgPT09IHJvc0RpZmYuUmVzb3VyY2VJbXBhY3QuTUFZX1JFUExBQ0UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKGNoYW5nZS5jaGFuZ2VJbXBhY3QgPT09IHJvc0RpZmYuUmVzb3VyY2VJbXBhY3QuV0lMTF9SRVBMQUNFKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBjaGFuZ2Ugb2YgT2JqZWN0LnZhbHVlcyh0aGlzLmRpZmYhLnBhcmFtZXRlcnMuY2hhbmdlcykpIHtcbiAgICAgICAgICBpZiAoY2hhbmdlLmlzVXBkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBjaGFuZ2Ugb2YgT2JqZWN0LnZhbHVlcyh0aGlzLmRpZmYhLm91dHB1dHMuY2hhbmdlcykpIHtcbiAgICAgICAgICBpZiAoY2hhbmdlLmlzVXBkYXRlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSBNYXRjaFN0eWxlLlNVUEVSU0VUOlxuICAgICAgICBmb3IgKGNvbnN0IGNoYW5nZSBvZiBPYmplY3QudmFsdWVzKHRoaXMuZGlmZiEucmVzb3VyY2VzLmNoYW5nZXMpKSB7XG4gICAgICAgICAgaWYgKGNoYW5nZS5jaGFuZ2VJbXBhY3QgIT09IHJvc0RpZmYuUmVzb3VyY2VJbXBhY3QuV0lMTF9DUkVBVEUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGNoYW5nZSBvZiBPYmplY3QudmFsdWVzKHRoaXMuZGlmZiEucGFyYW1ldGVycy5jaGFuZ2VzKSkge1xuICAgICAgICAgIGlmIChjaGFuZ2UuaXNBZGRpdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgY2hhbmdlIG9mIE9iamVjdC52YWx1ZXModGhpcy5kaWZmIS5vdXRwdXRzLmNoYW5nZXMpKSB7XG4gICAgICAgICAgaWYgKGNoYW5nZS5pc0FkZGl0aW9uIHx8IGNoYW5nZS5pc1VwZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgY2FzZSBNYXRjaFN0eWxlLlJFR0VYUDpcbiAgICAgICAgbGV0IGRpZmZNYXAgPSB0aGlzLmRpZmYhLnRvTWFwKCk7XG4gICAgICAgIGxldCBrZXlzVG9EZWxldGU6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRpZmZNYXApIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IGRpZmZNYXBba2V5XTtcbiAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCB8fCAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwKSkge1xuICAgICAgICAgICAga2V5c1RvRGVsZXRlLnB1c2goa2V5KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocm9zRGlmZi5pc0RpZmZlcmVuY2VJbnN0YW5jZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlVmFyaWFibGVzV2l0aFJlZ0V4cCh2YWx1ZS5vbGRWYWx1ZSwgdmFsdWUubmV3VmFsdWUpKSB7XG4gICAgICAgICAgICAgIGtleXNUb0RlbGV0ZS5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBzdWJLZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgICAgaWYgKGAke2tleX0uJHtzdWJLZXl9YCBpbiBrZXlzVG9EZWxldGUpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoY29tcGFyZVZhcmlhYmxlc1dpdGhSZWdFeHAodmFsdWVbc3ViS2V5XS5vbGRWYWx1ZSwgdmFsdWVbc3ViS2V5XS5uZXdWYWx1ZSkpIHtcbiAgICAgICAgICAgICAgICBrZXlzVG9EZWxldGUucHVzaChrZXkgKyAnLicgKyBzdWJLZXkpO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGZvciAoY29uc3Qgb3RoZXJTdWJLZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChgJHtrZXl9LiR7b3RoZXJTdWJLZXl9YCBpbiBrZXlzVG9EZWxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoc3ViS2V5KTtcbiAgICAgICAgICAgICAgICAgIGlmIChvdGhlclN1YktleSA9PT0gc3ViS2V5IHx8ICFyZWdleC50ZXN0KG90aGVyU3ViS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChjb21wYXJlVmFyaWFibGVzV2l0aFJlZ0V4cCh2YWx1ZVtzdWJLZXldLm9sZFZhbHVlLCB2YWx1ZVtvdGhlclN1YktleV0ubmV3VmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgfHwgY29tcGFyZVZhcmlhYmxlc1dpdGhSZWdFeHAodmFsdWVbb3RoZXJTdWJLZXldLm9sZFZhbHVlLCB2YWx1ZVtzdWJLZXldLm5ld1ZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBrZXlzVG9EZWxldGUucHVzaChrZXkgKyAnLicgKyBzdWJLZXkpO1xuICAgICAgICAgICAgICAgICAgICBrZXlzVG9EZWxldGUucHVzaChrZXkgKyAnLicgKyBvdGhlclN1YktleSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzVG9EZWxldGUpIHtcbiAgICAgICAgICBjb25zdCBrZXlzID0ga2V5LnNwbGl0KCcuJyk7XG4gICAgICAgICAgaWYgKGtleXMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBkaWZmTWFwW2tleV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSBkaWZmTWFwW2tleXNbMF1dW2tleXNbMV1dO1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRpZmZNYXBba2V5c1swXV0pLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICBkZWxldGUgZGlmZk1hcFtrZXlzWzBdXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaWZmID0gcm9zRGlmZi5UZW1wbGF0ZURpZmYuZnJvbU1hcChkaWZmTWFwKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlmZiEuZGlmZmVyZW5jZUNvdW50ID09PSAwO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYFVuc3VwcG9ydGVkIG1hdGNoIHN0eWxlOiAke3RoaXMubWF0Y2hTdHlsZX1gKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGVzY3JpcHRpb24oKTogc3RyaW5nIHtcbiAgICByZXR1cm4gYHRlbXBsYXRlICgke3RoaXMubWF0Y2hTdHlsZX0pOiAke0pTT04uc3RyaW5naWZ5KHRoaXMudGVtcGxhdGUsIG51bGwsIDIpfWA7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29tcGFyZVZhcmlhYmxlc1dpdGhSZWdFeHAodmFyMTogYW55LCB2YXIyOiBhbnkpOiBib29sZWFuIHtcbiAgaWYgKHZhcjEgPT09IHVuZGVmaW5lZCB8fCB2YXIyID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKHR5cGVvZiB2YXIxICE9PSB0eXBlb2YgdmFyMikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFyMSA9PT0gJ3N0cmluZycgJiYgdHlwZW9mIHZhcjIgPT09ICdzdHJpbmcnKSB7XG4gICAgaWYgKHZhcjEgIT09IHZhcjIpIHtcbiAgICAgIGNvbnN0IHJlZ2V4ID0gbmV3IFJlZ0V4cCh2YXIxKTtcbiAgICAgIHJldHVybiByZWdleC50ZXN0KHZhcjIpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gIH1cblxuICBpZiAodHlwZW9mIHZhcjEgIT09ICdvYmplY3QnICYmIHR5cGVvZiB2YXIyICE9PSAnb2JqZWN0Jykge1xuICAgIHJldHVybiB2YXIxID09PSB2YXIyO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YXIxID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgdmFyMiA9PT0gJ29iamVjdCcpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheSh2YXIxKSAmJiBBcnJheS5pc0FycmF5KHZhcjIpKSB7XG4gICAgICBpZiAodmFyMS5sZW5ndGggIT09IHZhcjIubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdmFyMS5sZW5ndGg7IGkrKykge1xuICAgICAgICBpZiAoIWNvbXBhcmVWYXJpYWJsZXNXaXRoUmVnRXhwKHZhcjFbaV0sIHZhcjJbaV0pKSB7XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3Qga2V5czEgPSBPYmplY3Qua2V5cyh2YXIxKTtcbiAgICAgIGNvbnN0IGtleXMyID0gT2JqZWN0LmtleXModmFyMik7XG4gICAgICBpZiAoa2V5czEubGVuZ3RoICE9PSBrZXlzMi5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5czEpIHtcbiAgICAgICAgaWYgKCFjb21wYXJlVmFyaWFibGVzV2l0aFJlZ0V4cCh2YXIxW2tleV0sIHZhcjJba2V5XSkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmYWxzZTtcbn1cbiJdfQ==