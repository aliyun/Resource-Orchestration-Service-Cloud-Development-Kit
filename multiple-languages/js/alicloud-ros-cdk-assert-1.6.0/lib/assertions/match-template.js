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
                    if (value === undefined || value === null || (typeof value === 'object' && Object.keys(value).length === 0)) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWF0Y2gtdGVtcGxhdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJtYXRjaC10ZW1wbGF0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSwyREFBMkQ7QUFDM0QsNENBQXVDO0FBRXZDLHNDQUFzQztBQUV0QyxJQUFZLFVBU1g7QUFURCxXQUFZLFVBQVU7SUFDcEIsOEJBQThCO0lBQzlCLCtCQUFpQixDQUFBO0lBQ2pCLG1FQUFtRTtJQUNuRSx5Q0FBMkIsQ0FBQTtJQUMzQix1Q0FBdUM7SUFDdkMsbUNBQXFCLENBQUE7SUFDckIsa0RBQWtEO0lBQ2xELCtCQUFpQixDQUFBO0FBQ25CLENBQUMsRUFUVyxVQUFVLEdBQVYsa0JBQVUsS0FBVixrQkFBVSxRQVNyQjtBQUVELFNBQWdCLG9CQUFvQixDQUFDLFFBQWdDO0lBQ25FLE9BQU8sYUFBYSxDQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsS0FBSyxDQUFDLENBQUM7QUFDbkQsQ0FBQztBQUZELG9EQUVDO0FBRUQsU0FBZ0IscUJBQXFCLENBQUMsUUFBZ0M7SUFDcEUsT0FBTyxhQUFhLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxRQUFRLENBQUMsQ0FBQztBQUN0RCxDQUFDO0FBRkQsc0RBRUM7QUFFRCxTQUFnQixhQUFhLENBQzNCLFFBQWdDLEVBQ2hDLGFBQXlCLFVBQVUsQ0FBQyxLQUFLO0lBRXpDLE9BQU8sSUFBSSw2QkFBNkIsQ0FBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUM7QUFDakUsQ0FBQztBQUxELHNDQUtDO0FBRUQsTUFBTSw2QkFBOEIsU0FBUSxxQkFBeUI7SUFFbkUsWUFBNkIsUUFBZ0MsRUFBbUIsVUFBc0I7UUFDcEcsS0FBSyxFQUFFLENBQUM7UUFEbUIsYUFBUSxHQUFSLFFBQVEsQ0FBd0I7UUFBbUIsZUFBVSxHQUFWLFVBQVUsQ0FBWTtJQUV0RyxDQUFDO0lBRU0sYUFBYSxDQUFDLFNBQXlCO1FBQzVDLElBQUksQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLFNBQVMsQ0FBQyxFQUFFO1lBQ2hDLGdGQUFnRjtZQUNoRixNQUFNLElBQUksS0FBSyxDQUFDLGlEQUFpRCxDQUFDLENBQUM7U0FDcEU7SUFDSCxDQUFDO0lBRU0sV0FBVyxDQUFDLFNBQXlCO1FBQzFDLElBQUksQ0FBQyxJQUFJLEdBQUcsT0FBTyxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLFNBQVMsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqRSxNQUFNLFVBQVUsR0FBRyxJQUFJLENBQUMsZ0JBQWdCLEVBQUUsQ0FBQztRQUMzQyxJQUFJLENBQUMsVUFBVSxFQUFFO1lBQ2YsaUJBQWlCO1lBQ2pCLE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxPQUFPLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUVyRCw0QkFBNEI7WUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQywwRkFBMEYsQ0FBQyxDQUFDLENBQUM7WUFDakksT0FBTyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLEtBQUssRUFBRSxTQUFTLEVBQUUsQ0FBQyxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzVGO1FBRUQsT0FBTyxVQUFVLENBQUM7SUFDcEIsQ0FBQztJQUVPLGdCQUFnQjtRQUN0QixRQUFRLElBQUksQ0FBQyxVQUFVLEVBQUU7WUFDdkIsS0FBSyxVQUFVLENBQUMsS0FBSztnQkFDbkIsT0FBTyxJQUFJLENBQUMsSUFBSyxDQUFDLGVBQWUsS0FBSyxDQUFDLENBQUM7WUFDMUMsS0FBSyxVQUFVLENBQUMsV0FBVztnQkFDekIsS0FBSyxNQUFNLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFLLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNoRSxJQUFJLE1BQU0sQ0FBQyxZQUFZLEtBQUssT0FBTyxDQUFDLGNBQWMsQ0FBQyxXQUFXLEVBQUU7d0JBQzlELE9BQU8sS0FBSyxDQUFDO3FCQUNkO29CQUNELElBQUksTUFBTSxDQUFDLFlBQVksS0FBSyxPQUFPLENBQUMsY0FBYyxDQUFDLFlBQVksRUFBRTt3QkFDL0QsT0FBTyxLQUFLLENBQUM7cUJBQ2Q7aUJBQ0Y7Z0JBRUQsS0FBSyxNQUFNLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFLLENBQUMsVUFBVSxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUNqRSxJQUFJLE1BQU0sQ0FBQyxRQUFRLEVBQUU7d0JBQ25CLE9BQU8sS0FBSyxDQUFDO3FCQUNkO2lCQUNGO2dCQUVELEtBQUssTUFBTSxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSyxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDOUQsSUFBSSxNQUFNLENBQUMsUUFBUSxFQUFFO3dCQUNuQixPQUFPLEtBQUssQ0FBQztxQkFDZDtpQkFDRjtnQkFDRCxPQUFPLElBQUksQ0FBQztZQUNkLEtBQUssVUFBVSxDQUFDLFFBQVE7Z0JBQ3RCLEtBQUssTUFBTSxNQUFNLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSyxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsRUFBRTtvQkFDaEUsSUFBSSxNQUFNLENBQUMsWUFBWSxLQUFLLE9BQU8sQ0FBQyxjQUFjLENBQUMsV0FBVyxFQUFFO3dCQUM5RCxPQUFPLEtBQUssQ0FBQztxQkFDZDtpQkFDRjtnQkFFRCxLQUFLLE1BQU0sTUFBTSxJQUFJLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLElBQUssQ0FBQyxVQUFVLENBQUMsT0FBTyxDQUFDLEVBQUU7b0JBQ2pFLElBQUksTUFBTSxDQUFDLFVBQVUsRUFBRTt3QkFDckIsT0FBTyxLQUFLLENBQUM7cUJBQ2Q7aUJBQ0Y7Z0JBRUQsS0FBSyxNQUFNLE1BQU0sSUFBSSxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFLLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxFQUFFO29CQUM5RCxJQUFJLE1BQU0sQ0FBQyxVQUFVLElBQUksTUFBTSxDQUFDLFFBQVEsRUFBRTt3QkFDeEMsT0FBTyxLQUFLLENBQUM7cUJBQ2Q7aUJBQ0Y7Z0JBRUQsT0FBTyxJQUFJLENBQUM7WUFDZCxLQUFLLFVBQVUsQ0FBQyxNQUFNO2dCQUNwQixJQUFJLFVBQVUsR0FBRyxJQUFJLENBQUM7Z0JBQ3RCLElBQUksT0FBTyxHQUFHLElBQUksQ0FBQyxJQUFLLENBQUMsS0FBSyxFQUFFLENBQUM7Z0JBQ2pDLElBQUksWUFBWSxHQUFhLEVBQUUsQ0FBQztnQkFDaEMsS0FBSyxNQUFNLEdBQUcsSUFBSSxPQUFPLEVBQUU7b0JBQ3pCLE1BQU0sS0FBSyxHQUFHLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztvQkFDM0IsSUFBSSxLQUFLLEtBQUssU0FBUyxJQUFJLEtBQUssS0FBSyxJQUFJLElBQUksQ0FBQyxPQUFPLEtBQUssS0FBSyxRQUFRLElBQUksTUFBTSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEtBQUssQ0FBQyxDQUFDLEVBQUU7d0JBQzNHLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3ZCLFNBQVM7cUJBQ1Y7b0JBQ0QsSUFBSSxPQUFPLENBQUMsb0JBQW9CLENBQUMsS0FBSyxDQUFDLEVBQUU7d0JBQ3ZDLElBQUksMEJBQTBCLENBQUMsS0FBSyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsUUFBUSxDQUFDLEVBQUU7NEJBQzlELFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7eUJBQ3hCOzZCQUFNOzRCQUNMLFVBQVUsR0FBRyxLQUFLLENBQUM7eUJBQ3BCO3FCQUNGO3lCQUFNLElBQUksT0FBTyxLQUFLLEtBQUssUUFBUSxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsRUFBRTt3QkFDN0QsS0FBSyxNQUFNLE1BQU0sSUFBSSxLQUFLLEVBQUU7NEJBQzFCLElBQUksMEJBQTBCLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsTUFBTSxDQUFDLENBQUMsUUFBUSxDQUFDLEVBQUU7Z0NBQzlFLFlBQVksQ0FBQyxJQUFJLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxNQUFNLENBQUMsQ0FBQzs2QkFDdkM7aUNBQU07Z0NBQ0wsS0FBSyxNQUFNLFdBQVcsSUFBSSxLQUFLLEVBQUU7b0NBQy9CLE1BQU0sS0FBSyxHQUFHLElBQUksTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO29DQUNqQyxJQUFJLFdBQVcsS0FBSyxNQUFNLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFO3dDQUN0RCxTQUFTO3FDQUNWO29DQUNELElBQUksMEJBQTBCLENBQUMsS0FBSyxDQUFDLE1BQU0sQ0FBQyxDQUFDLFFBQVEsRUFBRSxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxDQUFDOzJDQUM1RSwwQkFBMEIsQ0FBQyxLQUFLLENBQUMsV0FBVyxDQUFDLENBQUMsUUFBUSxFQUFFLEtBQUssQ0FBQyxNQUFNLENBQUMsQ0FBQyxRQUFRLENBQUMsRUFBRTt3Q0FDdEYsWUFBWSxDQUFDLElBQUksQ0FBQyxHQUFHLEdBQUcsR0FBRyxHQUFHLE1BQU0sQ0FBQyxDQUFDO3dDQUN0QyxZQUFZLENBQUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxHQUFHLEdBQUcsV0FBVyxDQUFDLENBQUM7d0NBQzNDLE1BQU07cUNBQ1A7eUNBQU07d0NBQ0wsVUFBVSxHQUFHLEtBQUssQ0FBQztxQ0FDcEI7aUNBQ0Y7NkJBQ0Y7eUJBQ0Y7cUJBQ0Y7aUJBQ0Y7Z0JBQ0QsS0FBSyxNQUFNLEdBQUcsSUFBSSxZQUFZLEVBQUU7b0JBQzlCLE1BQU0sSUFBSSxHQUFHLEdBQUcsQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQzVCLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7d0JBQ3BCLE9BQU8sT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUNyQjt5QkFBTTt3QkFDTCxPQUFPLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDakMsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7NEJBQzlDLE9BQU8sT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO3lCQUN6QjtxQkFDRjtpQkFDRjtnQkFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO2dCQUNsRCxPQUFPLFVBQVUsQ0FBQztTQUNyQjtRQUNELE1BQU0sSUFBSSxLQUFLLENBQUMsNEJBQTRCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQyxDQUFDO0lBQ2pFLENBQUM7SUFFRCxJQUFXLFdBQVc7UUFDcEIsT0FBTyxhQUFhLElBQUksQ0FBQyxVQUFVLE1BQU0sSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsUUFBUSxFQUFFLElBQUksRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDO0lBQ3BGLENBQUM7Q0FDRjtBQUVELFNBQVMsMEJBQTBCLENBQUMsSUFBUyxFQUFFLElBQVM7SUFDdEQsSUFBSSxPQUFPLElBQUksS0FBSyxPQUFPLElBQUksRUFBRTtRQUMvQixPQUFPLEtBQUssQ0FBQztLQUNkO0lBRUQsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxFQUFFO1FBQ3hELElBQUksSUFBSSxLQUFLLElBQUksRUFBRTtZQUNqQixNQUFNLEtBQUssR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUMvQixPQUFPLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7U0FDekI7YUFBTTtZQUNMLE9BQU8sSUFBSSxDQUFDO1NBQ2I7S0FDRjtJQUVELElBQUksT0FBTyxJQUFJLEtBQUssUUFBUSxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsRUFBRTtRQUN4RCxPQUFPLElBQUksS0FBSyxJQUFJLENBQUM7S0FDdEI7SUFFRCxJQUFJLE9BQU8sSUFBSSxLQUFLLFFBQVEsSUFBSSxPQUFPLElBQUksS0FBSyxRQUFRLEVBQUU7UUFDeEQsSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUU7WUFDOUMsSUFBSSxJQUFJLENBQUMsTUFBTSxLQUFLLElBQUksQ0FBQyxNQUFNLEVBQUU7Z0JBQy9CLE9BQU8sS0FBSyxDQUFDO2FBQ2Q7WUFDRCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDcEMsSUFBSSxDQUFDLDBCQUEwQixDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsRUFBRSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDakQsT0FBTyxLQUFLLENBQUM7aUJBQ2Q7YUFDRjtZQUNELE9BQU8sSUFBSSxDQUFDO1NBQ2I7YUFBTTtZQUNMLE1BQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDaEMsTUFBTSxLQUFLLEdBQUcsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUNoQyxJQUFJLEtBQUssQ0FBQyxNQUFNLEtBQUssS0FBSyxDQUFDLE1BQU0sRUFBRTtnQkFDakMsT0FBTyxLQUFLLENBQUM7YUFDZDtZQUNELEtBQUssTUFBTSxHQUFHLElBQUksS0FBSyxFQUFFO2dCQUN2QixJQUFJLENBQUMsMEJBQTBCLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQyxFQUFFO29CQUNyRCxPQUFPLEtBQUssQ0FBQztpQkFDZDthQUNGO1lBQ0QsT0FBTyxJQUFJLENBQUM7U0FDYjtLQUNGO0lBRUQsT0FBTyxLQUFLLENBQUM7QUFDZixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zRGlmZiBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay10ZW1wbGF0ZS1kaWZmJztcbmltcG9ydCB7QXNzZXJ0aW9ufSBmcm9tICcuLi9hc3NlcnRpb24nO1xuaW1wb3J0IHtTdGFja0luc3BlY3Rvcn0gZnJvbSAnLi4vaW5zcGVjdG9yJztcbmltcG9ydCAqIGFzIGNvbG9ycyBmcm9tICdjb2xvcnMvc2FmZSc7XG5cbmV4cG9ydCBlbnVtIE1hdGNoU3R5bGUge1xuICAvKiogUmVxdWlyZXMgYW4gZXhhY3QgbWF0Y2ggKi9cbiAgRVhBQ1QgPSAnZXhhY3RseScsXG4gIC8qKiBBbGxvd3MgYW55IGNoYW5nZSB0aGF0IGRvZXMgbm90IGNhdXNlIGEgcmVzb3VyY2UgcmVwbGFjZW1lbnQgKi9cbiAgTk9fUkVQTEFDRVMgPSAnbm8gcmVwbGFjZXMnLFxuICAvKiogQWxsb3dzIGFkZGl0aW9ucywgYnV0IG5vIHVwZGF0ZXMgKi9cbiAgU1VQRVJTRVQgPSAnc3VwZXJzZXQnLFxuICAvKiogQWxsb3dzIHJlZ3VsYXIgZXhwcmVzc2lvbnMgdG8gbWF0Y2ggc3RyaW5ncyAqL1xuICBSRUdFWFAgPSAncmVnZXhwJyxcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4YWN0bHlNYXRjaFRlbXBsYXRlKHRlbXBsYXRlOiB7IFtrZXk6IHN0cmluZ106IGFueSB9KSB7XG4gIHJldHVybiBtYXRjaFRlbXBsYXRlKHRlbXBsYXRlLCBNYXRjaFN0eWxlLkVYQUNUKTtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGJlQVN1cGVyc2V0T2ZUZW1wbGF0ZSh0ZW1wbGF0ZTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSkge1xuICByZXR1cm4gbWF0Y2hUZW1wbGF0ZSh0ZW1wbGF0ZSwgTWF0Y2hTdHlsZS5TVVBFUlNFVCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaFRlbXBsYXRlKFxuICB0ZW1wbGF0ZTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSxcbiAgbWF0Y2hTdHlsZTogTWF0Y2hTdHlsZSA9IE1hdGNoU3R5bGUuRVhBQ1QsXG4pOiBBc3NlcnRpb248U3RhY2tJbnNwZWN0b3I+IHtcbiAgcmV0dXJuIG5ldyBTdGFja01hdGNoZXNUZW1wbGF0ZUFzc2VydGlvbih0ZW1wbGF0ZSwgbWF0Y2hTdHlsZSk7XG59XG5cbmNsYXNzIFN0YWNrTWF0Y2hlc1RlbXBsYXRlQXNzZXJ0aW9uIGV4dGVuZHMgQXNzZXJ0aW9uPFN0YWNrSW5zcGVjdG9yPiB7XG4gIHB1YmxpYyBkaWZmPzogcm9zRGlmZi5UZW1wbGF0ZURpZmY7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgdGVtcGxhdGU6IHsgW2tleTogc3RyaW5nXTogYW55IH0sIHByaXZhdGUgcmVhZG9ubHkgbWF0Y2hTdHlsZTogTWF0Y2hTdHlsZSkge1xuICAgIHN1cGVyKCk7XG4gIH1cblxuICBwdWJsaWMgYXNzZXJ0T3JUaHJvdyhpbnNwZWN0b3I6IFN0YWNrSW5zcGVjdG9yKSB7XG4gICAgaWYgKCF0aGlzLmFzc2VydFVzaW5nKGluc3BlY3RvcikpIHtcbiAgICAgIC8vIFRoZSBkZXRhaWxzIGhhdmUgYWxyZWFkeSBiZWVuIHByaW50ZWQsIHNvIGRvbid0IGdlbmVyYXRlIGEgaHVnZSBlcnJvciBtZXNzYWdlXG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RlbXBsYXRlIGNvbXBhcmlzb24gcHJvZHVjZWQgdW5hY2NlcHRhYmxlIG1hdGNoJyk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFzc2VydFVzaW5nKGluc3BlY3RvcjogU3RhY2tJbnNwZWN0b3IpOiBib29sZWFuIHtcbiAgICB0aGlzLmRpZmYgPSByb3NEaWZmLmRpZmZUZW1wbGF0ZSh0aGlzLnRlbXBsYXRlLCBpbnNwZWN0b3IudmFsdWUpO1xuICAgIGNvbnN0IGFjY2VwdGFibGUgPSB0aGlzLmlzRGlmZkFjY2VwdGFibGUoKTtcbiAgICBpZiAoIWFjY2VwdGFibGUpIHtcbiAgICAgIC8vIFByaW50IHRoZSBkaWZmXG4gICAgICByb3NEaWZmLmZvcm1hdERpZmZlcmVuY2VzKHByb2Nlc3Muc3RkZXJyLCB0aGlzLmRpZmYpO1xuXG4gICAgICAvLyBQcmludCB0aGUgYWN0dWFsIHRlbXBsYXRlXG4gICAgICBwcm9jZXNzLnN0ZGVyci53cml0ZShjb2xvcnMucmFpbmJvdygnLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1cXG4nKSk7XG4gICAgICBwcm9jZXNzLnN0ZGVyci53cml0ZShjb2xvcnMud2hpdGUoKEpTT04uc3RyaW5naWZ5KGluc3BlY3Rvci52YWx1ZSwgdW5kZWZpbmVkLCAyKSArICdcXG4nKSkpO1xuICAgIH1cblxuICAgIHJldHVybiBhY2NlcHRhYmxlO1xuICB9XG5cbiAgcHJpdmF0ZSBpc0RpZmZBY2NlcHRhYmxlKCk6IGJvb2xlYW4ge1xuICAgIHN3aXRjaCAodGhpcy5tYXRjaFN0eWxlKSB7XG4gICAgICBjYXNlIE1hdGNoU3R5bGUuRVhBQ1Q6XG4gICAgICAgIHJldHVybiB0aGlzLmRpZmYhLmRpZmZlcmVuY2VDb3VudCA9PT0gMDtcbiAgICAgIGNhc2UgTWF0Y2hTdHlsZS5OT19SRVBMQUNFUzpcbiAgICAgICAgZm9yIChjb25zdCBjaGFuZ2Ugb2YgT2JqZWN0LnZhbHVlcyh0aGlzLmRpZmYhLnJlc291cmNlcy5jaGFuZ2VzKSkge1xuICAgICAgICAgIGlmIChjaGFuZ2UuY2hhbmdlSW1wYWN0ID09PSByb3NEaWZmLlJlc291cmNlSW1wYWN0Lk1BWV9SRVBMQUNFKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChjaGFuZ2UuY2hhbmdlSW1wYWN0ID09PSByb3NEaWZmLlJlc291cmNlSW1wYWN0LldJTExfUkVQTEFDRSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgY2hhbmdlIG9mIE9iamVjdC52YWx1ZXModGhpcy5kaWZmIS5wYXJhbWV0ZXJzLmNoYW5nZXMpKSB7XG4gICAgICAgICAgaWYgKGNoYW5nZS5pc1VwZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgY2hhbmdlIG9mIE9iamVjdC52YWx1ZXModGhpcy5kaWZmIS5vdXRwdXRzLmNoYW5nZXMpKSB7XG4gICAgICAgICAgaWYgKGNoYW5nZS5pc1VwZGF0ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgTWF0Y2hTdHlsZS5TVVBFUlNFVDpcbiAgICAgICAgZm9yIChjb25zdCBjaGFuZ2Ugb2YgT2JqZWN0LnZhbHVlcyh0aGlzLmRpZmYhLnJlc291cmNlcy5jaGFuZ2VzKSkge1xuICAgICAgICAgIGlmIChjaGFuZ2UuY2hhbmdlSW1wYWN0ICE9PSByb3NEaWZmLlJlc291cmNlSW1wYWN0LldJTExfQ1JFQVRFKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBjaGFuZ2Ugb2YgT2JqZWN0LnZhbHVlcyh0aGlzLmRpZmYhLnBhcmFtZXRlcnMuY2hhbmdlcykpIHtcbiAgICAgICAgICBpZiAoY2hhbmdlLmlzQWRkaXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IGNoYW5nZSBvZiBPYmplY3QudmFsdWVzKHRoaXMuZGlmZiEub3V0cHV0cy5jaGFuZ2VzKSkge1xuICAgICAgICAgIGlmIChjaGFuZ2UuaXNBZGRpdGlvbiB8fCBjaGFuZ2UuaXNVcGRhdGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIGNhc2UgTWF0Y2hTdHlsZS5SRUdFWFA6XG4gICAgICAgIGxldCBhY2NlcHRhYmxlID0gdHJ1ZTtcbiAgICAgICAgbGV0IGRpZmZNYXAgPSB0aGlzLmRpZmYhLnRvTWFwKCk7XG4gICAgICAgIGxldCBrZXlzVG9EZWxldGU6IHN0cmluZ1tdID0gW107XG4gICAgICAgIGZvciAoY29uc3Qga2V5IGluIGRpZmZNYXApIHtcbiAgICAgICAgICBjb25zdCB2YWx1ZSA9IGRpZmZNYXBba2V5XTtcbiAgICAgICAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCB8fCB2YWx1ZSA9PT0gbnVsbCB8fCAodHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiBPYmplY3Qua2V5cyh2YWx1ZSkubGVuZ3RoID09PSAwKSkge1xuICAgICAgICAgICAga2V5c1RvRGVsZXRlLnB1c2goa2V5KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAocm9zRGlmZi5pc0RpZmZlcmVuY2VJbnN0YW5jZSh2YWx1ZSkpIHtcbiAgICAgICAgICAgIGlmIChjb21wYXJlVmFyaWFibGVzV2l0aFJlZ0V4cCh2YWx1ZS5vbGRWYWx1ZSwgdmFsdWUubmV3VmFsdWUpKSB7XG4gICAgICAgICAgICAgIGtleXNUb0RlbGV0ZS5wdXNoKGtleSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBhY2NlcHRhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBzdWJLZXkgaW4gdmFsdWUpIHtcbiAgICAgICAgICAgICAgaWYgKGNvbXBhcmVWYXJpYWJsZXNXaXRoUmVnRXhwKHZhbHVlW3N1YktleV0ub2xkVmFsdWUsIHZhbHVlW3N1YktleV0ubmV3VmFsdWUpKSB7XG4gICAgICAgICAgICAgICAga2V5c1RvRGVsZXRlLnB1c2goa2V5ICsgJy4nICsgc3ViS2V5KTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBmb3IgKGNvbnN0IG90aGVyU3ViS2V5IGluIHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCByZWdleCA9IG5ldyBSZWdFeHAoc3ViS2V5KTtcbiAgICAgICAgICAgICAgICAgIGlmIChvdGhlclN1YktleSA9PT0gc3ViS2V5IHx8ICFyZWdleC50ZXN0KG90aGVyU3ViS2V5KSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGlmIChjb21wYXJlVmFyaWFibGVzV2l0aFJlZ0V4cCh2YWx1ZVtzdWJLZXldLm9sZFZhbHVlLCB2YWx1ZVtvdGhlclN1YktleV0ubmV3VmFsdWUpXG4gICAgICAgICAgICAgICAgICAgICAgfHwgY29tcGFyZVZhcmlhYmxlc1dpdGhSZWdFeHAodmFsdWVbb3RoZXJTdWJLZXldLm9sZFZhbHVlLCB2YWx1ZVtzdWJLZXldLm5ld1ZhbHVlKSkge1xuICAgICAgICAgICAgICAgICAgICBrZXlzVG9EZWxldGUucHVzaChrZXkgKyAnLicgKyBzdWJLZXkpO1xuICAgICAgICAgICAgICAgICAgICBrZXlzVG9EZWxldGUucHVzaChrZXkgKyAnLicgKyBvdGhlclN1YktleSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYWNjZXB0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzVG9EZWxldGUpIHtcbiAgICAgICAgICBjb25zdCBrZXlzID0ga2V5LnNwbGl0KCcuJyk7XG4gICAgICAgICAgaWYgKGtleXMubGVuZ3RoID09IDEpIHtcbiAgICAgICAgICAgIGRlbGV0ZSBkaWZmTWFwW2tleV07XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRlbGV0ZSBkaWZmTWFwW2tleXNbMF1dW2tleXNbMV1dO1xuICAgICAgICAgICAgaWYgKE9iamVjdC5rZXlzKGRpZmZNYXBba2V5c1swXV0pLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICBkZWxldGUgZGlmZk1hcFtrZXlzWzBdXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaWZmID0gcm9zRGlmZi5UZW1wbGF0ZURpZmYuZnJvbU1hcChkaWZmTWFwKTtcbiAgICAgICAgcmV0dXJuIGFjY2VwdGFibGU7XG4gICAgfVxuICAgIHRocm93IG5ldyBFcnJvcihgVW5zdXBwb3J0ZWQgbWF0Y2ggc3R5bGU6ICR7dGhpcy5tYXRjaFN0eWxlfWApO1xuICB9XG5cbiAgcHVibGljIGdldCBkZXNjcmlwdGlvbigpOiBzdHJpbmcge1xuICAgIHJldHVybiBgdGVtcGxhdGUgKCR7dGhpcy5tYXRjaFN0eWxlfSk6ICR7SlNPTi5zdHJpbmdpZnkodGhpcy50ZW1wbGF0ZSwgbnVsbCwgMil9YDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb21wYXJlVmFyaWFibGVzV2l0aFJlZ0V4cCh2YXIxOiBhbnksIHZhcjI6IGFueSk6IGJvb2xlYW4ge1xuICBpZiAodHlwZW9mIHZhcjEgIT09IHR5cGVvZiB2YXIyKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB2YXIxID09PSAnc3RyaW5nJyAmJiB0eXBlb2YgdmFyMiA9PT0gJ3N0cmluZycpIHtcbiAgICBpZiAodmFyMSAhPT0gdmFyMikge1xuICAgICAgY29uc3QgcmVnZXggPSBuZXcgUmVnRXhwKHZhcjEpO1xuICAgICAgcmV0dXJuIHJlZ2V4LnRlc3QodmFyMik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuXG4gIGlmICh0eXBlb2YgdmFyMSAhPT0gJ29iamVjdCcgJiYgdHlwZW9mIHZhcjIgIT09ICdvYmplY3QnKSB7XG4gICAgcmV0dXJuIHZhcjEgPT09IHZhcjI7XG4gIH1cblxuICBpZiAodHlwZW9mIHZhcjEgPT09ICdvYmplY3QnICYmIHR5cGVvZiB2YXIyID09PSAnb2JqZWN0Jykge1xuICAgIGlmIChBcnJheS5pc0FycmF5KHZhcjEpICYmIEFycmF5LmlzQXJyYXkodmFyMikpIHtcbiAgICAgIGlmICh2YXIxLmxlbmd0aCAhPT0gdmFyMi5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB2YXIxLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGlmICghY29tcGFyZVZhcmlhYmxlc1dpdGhSZWdFeHAodmFyMVtpXSwgdmFyMltpXSkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICBjb25zdCBrZXlzMSA9IE9iamVjdC5rZXlzKHZhcjEpO1xuICAgICAgY29uc3Qga2V5czIgPSBPYmplY3Qua2V5cyh2YXIyKTtcbiAgICAgIGlmIChrZXlzMS5sZW5ndGggIT09IGtleXMyLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzMSkge1xuICAgICAgICBpZiAoIWNvbXBhcmVWYXJpYWJsZXNXaXRoUmVnRXhwKHZhcjFba2V5XSwgdmFyMltrZXldKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufVxuIl19