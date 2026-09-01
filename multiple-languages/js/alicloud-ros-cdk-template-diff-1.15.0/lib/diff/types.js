"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPropertyDifference = exports.ResourceDifference = exports.ResourceImpact = exports.ParameterDifference = exports.OutputDifference = exports.MetadataDifference = exports.RuleDifference = exports.MappingDifference = exports.ConditionDifference = exports.isDifferenceCollectionInstance = exports.DifferenceCollection = exports.PropertyDifference = exports.isDifferenceInstance = exports.Difference = exports.TemplateDiff = void 0;
const assert_1 = require("assert");
const util_1 = require("./util");
/** Semantic differences between two ROS templates. */
class TemplateDiff {
    constructor(args) {
        if (args.description !== undefined) {
            this.description = args.description;
        }
        if (args.transform !== undefined) {
            this.transform = args.transform;
        }
        this.conditions = args.conditions || new DifferenceCollection({});
        this.mappings = args.mappings || new DifferenceCollection({});
        this.rules = args.rules || new DifferenceCollection({});
        this.metadata = args.metadata || new DifferenceCollection({});
        this.outputs = args.outputs || new DifferenceCollection({});
        this.parameters = args.parameters || new DifferenceCollection({});
        this.resources = args.resources || new DifferenceCollection({});
        this.unknown = args.unknown || new DifferenceCollection({});
    }
    get differenceCount() {
        let count = 0;
        if (this.description !== undefined) {
            count += 1;
        }
        if (this.transform !== undefined) {
            count += 1;
        }
        count += this.conditions.differenceCount;
        count += this.mappings.differenceCount;
        count += this.metadata.differenceCount;
        count += this.rules.differenceCount;
        count += this.outputs.differenceCount;
        count += this.parameters.differenceCount;
        count += this.resources.differenceCount;
        count += this.unknown.differenceCount;
        return count;
    }
    get isEmpty() {
        return this.differenceCount === 0;
    }
    toMap() {
        return {
            description: this.description,
            transform: this.transform,
            conditions: this.conditions.changes,
            mappings: this.mappings.changes,
            metadata: this.metadata.changes,
            outputs: this.outputs.changes,
            parameters: this.parameters.changes,
            resources: this.resources.changes,
            unknown: this.unknown.changes,
        };
        // const map = new Map<string, any>();
        // map.set('description', this.description);
        // map.set('transform', this.transform);
        //
        // map.set('conditions', this.conditions.changes);
        // map.set('mappings', this.mappings.changes);
        // map.set('metadata', this.metadata.changes);
        // map.set('outputs', this.outputs.changes);
        // map.set('parameters', this.parameters.changes);
        // map.set('resources', this.resources.changes);
        //
        // map.set('unknown', this.unknown.changes);
        // return map;
    }
    static fromMap(map) {
        return new TemplateDiff({
            description: map.description,
            transform: map.transform,
            conditions: new DifferenceCollection(map.conditions),
            mappings: new DifferenceCollection(map.mappings),
            metadata: new DifferenceCollection(map.metadata),
            outputs: new DifferenceCollection(map.outputs),
            parameters: new DifferenceCollection(map.parameters),
            resources: new DifferenceCollection(map.resources),
            unknown: new DifferenceCollection(map.unknown),
        });
    }
}
exports.TemplateDiff = TemplateDiff;
/**
 * Models an entity that changed between two versions of a ROS template.
 */
class Difference {
    /**
     * @param oldValue the old value, cannot be equal (to the sense of +deepEqual+) to +newValue+.
     * @param newValue the new value, cannot be equal (to the sense of +deepEqual+) to +oldValue+.
     */
    constructor(oldValue, newValue) {
        this.oldValue = oldValue;
        this.newValue = newValue;
        if (oldValue === undefined && newValue === undefined) {
            throw new assert_1.AssertionError({ message: 'oldValue and newValue are both undefined!' });
        }
        this.isDifferent = !(0, util_1.deepEqual)(oldValue, newValue);
    }
    /** @returns +true+ if the element is new to the template. */
    get isAddition() {
        return this.oldValue === undefined;
    }
    /** @returns +true+ if the element was removed from the template. */
    get isRemoval() {
        return this.newValue === undefined;
    }
    /** @returns +true+ if the element was already in the template and is updated. */
    get isUpdate() {
        return this.oldValue !== undefined && this.newValue !== undefined;
    }
}
exports.Difference = Difference;
function isDifferenceInstance(obj) {
    return obj instanceof Difference;
}
exports.isDifferenceInstance = isDifferenceInstance;
class PropertyDifference extends Difference {
    constructor(oldValue, newValue, args) {
        super(oldValue, newValue);
        this.changeImpact = args.changeImpact;
    }
}
exports.PropertyDifference = PropertyDifference;
class DifferenceCollection {
    constructor(diffs) {
        this.diffs = diffs;
    }
    get changes() {
        return onlyChanges(this.diffs);
    }
    get differenceCount() {
        return Object.values(this.changes).length;
    }
    get(logicalId) {
        const ret = this.diffs[logicalId];
        if (!ret) {
            throw new Error(`No object with logical ID '${logicalId}'`);
        }
        return ret;
    }
    get logicalIds() {
        return Object.keys(this.changes);
    }
    /**
     * Returns a new TemplateDiff which only contains changes for which `predicate`
     * returns `true`.
     */
    filter(predicate) {
        const newChanges = {};
        for (const id of Object.keys(this.changes)) {
            const diff = this.changes[id];
            if (predicate(diff)) {
                newChanges[id] = diff;
            }
        }
        return new DifferenceCollection(newChanges);
    }
    /**
     * Invokes `cb` for all changes in this collection.
     *
     * Changes will be sorted as follows:
     *  - Removed
     *  - Added
     *  - Updated
     *  - Others
     *
     * @param cb
     */
    forEachDifference(cb) {
        const removed = new Array();
        const added = new Array();
        const updated = new Array();
        const others = new Array();
        for (const logicalId of this.logicalIds) {
            const change = this.changes[logicalId];
            if (change.isAddition) {
                added.push({ logicalId, change });
            }
            else if (change.isRemoval) {
                removed.push({ logicalId, change });
            }
            else if (change.isUpdate) {
                updated.push({ logicalId, change });
            }
            else if (change.isDifferent) {
                others.push({ logicalId, change });
            }
        }
        removed.forEach((v) => cb(v.logicalId, v.change));
        added.forEach((v) => cb(v.logicalId, v.change));
        updated.forEach((v) => cb(v.logicalId, v.change));
        others.forEach((v) => cb(v.logicalId, v.change));
    }
}
exports.DifferenceCollection = DifferenceCollection;
function isDifferenceCollectionInstance(obj) {
    return obj instanceof DifferenceCollection;
}
exports.isDifferenceCollectionInstance = isDifferenceCollectionInstance;
class ConditionDifference extends Difference {
}
exports.ConditionDifference = ConditionDifference;
class MappingDifference extends Difference {
}
exports.MappingDifference = MappingDifference;
class RuleDifference extends Difference {
}
exports.RuleDifference = RuleDifference;
class MetadataDifference extends Difference {
}
exports.MetadataDifference = MetadataDifference;
class OutputDifference extends Difference {
}
exports.OutputDifference = OutputDifference;
class ParameterDifference extends Difference {
}
exports.ParameterDifference = ParameterDifference;
var ResourceImpact;
(function (ResourceImpact) {
    /** The existing physical resource will be updated */
    ResourceImpact["WILL_UPDATE"] = "WILL_UPDATE";
    /** A new physical resource will be created */
    ResourceImpact["WILL_CREATE"] = "WILL_CREATE";
    /** The existing physical resource will be replaced */
    ResourceImpact["WILL_REPLACE"] = "WILL_REPLACE";
    /** The existing physical resource may be replaced */
    ResourceImpact["MAY_REPLACE"] = "MAY_REPLACE";
    /** The existing physical resource will be destroyed */
    ResourceImpact["WILL_DESTROY"] = "WILL_DESTROY";
    /** The existing physical resource will be removed from ROS supervision */
    ResourceImpact["WILL_ORPHAN"] = "WILL_ORPHAN";
    /** There is no change in this resource */
    ResourceImpact["NO_CHANGE"] = "NO_CHANGE";
})(ResourceImpact = exports.ResourceImpact || (exports.ResourceImpact = {}));
/**
 * This function can be used as a reducer to obtain the resource-level impact of a list
 * of property-level impacts.
 * @param one the current worst impact so far.
 * @param two the new impact being considered (can be undefined, as we may not always be
 *      able to determine some peroperty's impact).
 */
function worstImpact(one, two) {
    if (!two) {
        return one;
    }
    const badness = {
        [ResourceImpact.NO_CHANGE]: 0,
        [ResourceImpact.WILL_UPDATE]: 1,
        [ResourceImpact.WILL_CREATE]: 2,
        [ResourceImpact.WILL_ORPHAN]: 3,
        [ResourceImpact.MAY_REPLACE]: 4,
        [ResourceImpact.WILL_REPLACE]: 5,
        [ResourceImpact.WILL_DESTROY]: 6,
    };
    return badness[one] > badness[two] ? one : two;
}
/**
 * Change to a single resource between two ROS templates
 *
 * This class can be mutated after construction.
 */
class ResourceDifference {
    constructor(oldValue, newValue, args) {
        this.oldValue = oldValue;
        this.newValue = newValue;
        this.resourceTypes = args.resourceType;
        this.propertyDiffs = args.propertyDiffs;
        this.otherDiffs = args.otherDiffs;
        this.isAddition = oldValue === undefined;
        this.isRemoval = newValue === undefined;
    }
    get oldProperties() {
        return this.oldValue && this.oldValue.Properties;
    }
    get newProperties() {
        return this.newValue && this.newValue.Properties;
    }
    /**
     * Whether this resource was modified at all
     */
    get isDifferent() {
        return this.differenceCount > 0 || this.oldResourceType !== this.newResourceType;
    }
    /**
     * Whether the resource was updated in-place
     */
    get isUpdate() {
        return this.isDifferent && !this.isAddition && !this.isRemoval;
    }
    get oldResourceType() {
        return this.resourceTypes.oldType;
    }
    get newResourceType() {
        return this.resourceTypes.newType;
    }
    /**
     * All actual property updates
     */
    get propertyUpdates() {
        return onlyChanges(this.propertyDiffs);
    }
    /**
     * All actual "other" updates
     */
    get otherChanges() {
        return onlyChanges(this.otherDiffs);
    }
    /**
     * Return whether the resource type was changed in this diff
     *
     * This is not a valid operation in ROS but to be defensive we're going
     * to be aware of it anyway.
     */
    get resourceTypeChanged() {
        return (this.resourceTypes.oldType !== undefined &&
            this.resourceTypes.newType !== undefined &&
            this.resourceTypes.oldType !== this.resourceTypes.newType);
    }
    /**
     * Return the resource type if it was unchanged
     *
     * If the resource type was changed, it's an error to call this.
     */
    get resourceType() {
        if (this.resourceTypeChanged) {
            throw new Error('Cannot get .resourceType, because the type was changed');
        }
        return this.resourceTypes.oldType || this.resourceTypes.newType;
    }
    /**
     * Replace a PropertyChange in this object
     *
     * This affects the property diff as it is summarized to users, but it DOES
     * NOT affect either the "oldValue" or "newValue" values; those still contain
     * the actual template values as provided by the user (they might still be
     * used for downstream processing).
     */
    setPropertyChange(propertyName, change) {
        this.propertyDiffs[propertyName] = change;
    }
    get changeImpact() {
        // Check the Type first
        if (this.resourceTypes.oldType !== this.resourceTypes.newType) {
            if (this.resourceTypes.oldType === undefined) {
                return ResourceImpact.WILL_CREATE;
            }
            if (this.resourceTypes.newType === undefined) {
                return this.oldValue.DeletionPolicy === 'Retain' ? ResourceImpact.WILL_ORPHAN : ResourceImpact.WILL_DESTROY;
            }
            return ResourceImpact.WILL_REPLACE;
        }
        // Base impact (before we mix in the worst of the property impacts);
        // WILL_UPDATE if we have "other" changes, NO_CHANGE if there are no "other" changes.
        const baseImpact = Object.keys(this.otherChanges).length > 0 ? ResourceImpact.WILL_UPDATE : ResourceImpact.NO_CHANGE;
        return Object.values(this.propertyDiffs)
            .map((elt) => elt.changeImpact)
            .reduce(worstImpact, baseImpact);
    }
    /**
     * Count of actual differences (not of elements)
     */
    get differenceCount() {
        return Object.values(this.propertyUpdates).length + Object.values(this.otherChanges).length;
    }
    /**
     * Invoke a callback for each actual difference
     */
    forEachDifference(cb) {
        for (const key of Object.keys(this.propertyUpdates).sort()) {
            cb('Property', key, this.propertyUpdates[key]);
        }
        for (const key of Object.keys(this.otherChanges).sort()) {
            cb('Other', key, this.otherDiffs[key]);
        }
    }
}
exports.ResourceDifference = ResourceDifference;
function isPropertyDifference(diff) {
    return diff.changeImpact !== undefined;
}
exports.isPropertyDifference = isPropertyDifference;
/**
 * Filter a map of IDifferences down to only retain the actual changes
 */
function onlyChanges(xs) {
    if (xs === undefined || xs === null) {
        return {};
    }
    const ret = {};
    for (const [key, diff] of Object.entries(xs)) {
        if (diff.isDifferent) {
            ret[key] = diff;
        }
    }
    return ret;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBc0M7QUFDdEMsaUNBQWlDO0FBSWpDLHNEQUFzRDtBQUN0RCxNQUFhLFlBQVk7SUFhdkIsWUFBWSxJQUFtQjtRQUM3QixJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUNyQztRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7UUFD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QUF5QixFQUFFLENBQUM7SUFDckMsS0FBSyxNQUFNLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxJQUFJLE1BQU0sQ0FBQyxPQUFPLENBQUMsRUFBRSxDQUFDLEVBQUU7UUFDNUMsSUFBSSxJQUFJLENBQUMsV0FBVyxFQUFFO1lBQ3BCLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUM7U0FDakI7S0FDRjtJQUNELE9BQU8sR0FBRyxDQUFDO0FBQ2IsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7QXNzZXJ0aW9uRXJyb3J9IGZyb20gJ2Fzc2VydCc7XG5pbXBvcnQge2RlZXBFcXVhbH0gZnJvbSAnLi91dGlsJztcblxuZXhwb3J0IHR5cGUgUHJvcGVydHlNYXAgPSB7IFtrZXk6IHN0cmluZ106IGFueSB9O1xuXG4vKiogU2VtYW50aWMgZGlmZmVyZW5jZXMgYmV0d2VlbiB0d28gUk9TIHRlbXBsYXRlcy4gKi9cbmV4cG9ydCBjbGFzcyBUZW1wbGF0ZURpZmYgaW1wbGVtZW50cyBJVGVtcGxhdGVEaWZmIHtcbiAgcHVibGljIGRlc2NyaXB0aW9uPzogRGlmZmVyZW5jZTxzdHJpbmc+O1xuICBwdWJsaWMgdHJhbnNmb3JtPzogRGlmZmVyZW5jZTxzdHJpbmc+O1xuICBwdWJsaWMgY29uZGl0aW9uczogRGlmZmVyZW5jZUNvbGxlY3Rpb248Q29uZGl0aW9uLCBDb25kaXRpb25EaWZmZXJlbmNlPjtcbiAgcHVibGljIG1hcHBpbmdzOiBEaWZmZXJlbmNlQ29sbGVjdGlvbjxNYXBwaW5nLCBNYXBwaW5nRGlmZmVyZW5jZT47XG4gIHB1YmxpYyBydWxlczogRGlmZmVyZW5jZUNvbGxlY3Rpb248UnVsZSwgUnVsZURpZmZlcmVuY2U+O1xuICBwdWJsaWMgbWV0YWRhdGE6IERpZmZlcmVuY2VDb2xsZWN0aW9uPE1ldGFkYXRhLCBNZXRhZGF0YURpZmZlcmVuY2U+O1xuICBwdWJsaWMgb3V0cHV0czogRGlmZmVyZW5jZUNvbGxlY3Rpb248T3V0cHV0LCBPdXRwdXREaWZmZXJlbmNlPjtcbiAgcHVibGljIHBhcmFtZXRlcnM6IERpZmZlcmVuY2VDb2xsZWN0aW9uPFBhcmFtZXRlciwgUGFyYW1ldGVyRGlmZmVyZW5jZT47XG4gIHB1YmxpYyByZXNvdXJjZXM6IERpZmZlcmVuY2VDb2xsZWN0aW9uPFJlc291cmNlLCBSZXNvdXJjZURpZmZlcmVuY2U+O1xuICAvKiogVGhlIGRpZmZlcmVuY2VzIGluIHVua25vd24vdW5leHBlY3RlZCBwYXJ0cyBvZiB0aGUgdGVtcGxhdGUgKi9cbiAgcHVibGljIHVua25vd246IERpZmZlcmVuY2VDb2xsZWN0aW9uPGFueSwgRGlmZmVyZW5jZTxhbnk+PjtcblxuICBjb25zdHJ1Y3RvcihhcmdzOiBJVGVtcGxhdGVEaWZmKSB7XG4gICAgaWYgKGFyZ3MuZGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy5kZXNjcmlwdGlvbiA9IGFyZ3MuZGVzY3JpcHRpb247XG4gICAgfVxuICAgIGlmIChhcmdzLnRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLnRyYW5zZm9ybSA9IGFyZ3MudHJhbnNmb3JtO1xuICAgIH1cblxuICAgIHRoaXMuY29uZGl0aW9ucyA9IGFyZ3MuY29uZGl0aW9ucyB8fCBuZXcgRGlmZmVyZW5jZUNvbGxlY3Rpb24oe30pO1xuICAgIHRoaXMubWFwcGluZ3MgPSBhcmdzLm1hcHBpbmdzIHx8IG5ldyBEaWZmZXJlbmNlQ29sbGVjdGlvbih7fSk7XG4gICAgdGhpcy5ydWxlcyA9IGFyZ3MucnVsZXMgfHwgbmV3IERpZmZlcmVuY2VDb2xsZWN0aW9uKHt9KTtcbiAgICB0aGlzLm1ldGFkYXRhID0gYXJncy5tZXRhZGF0YSB8fCBuZXcgRGlmZmVyZW5jZUNvbGxlY3Rpb24oe30pO1xuICAgIHRoaXMub3V0cHV0cyA9IGFyZ3Mub3V0cHV0cyB8fCBuZXcgRGlmZmVyZW5jZUNvbGxlY3Rpb24oe30pO1xuICAgIHRoaXMucGFyYW1ldGVycyA9IGFyZ3MucGFyYW1ldGVycyB8fCBuZXcgRGlmZmVyZW5jZUNvbGxlY3Rpb24oe30pO1xuICAgIHRoaXMucmVzb3VyY2VzID0gYXJncy5yZXNvdXJjZXMgfHwgbmV3IERpZmZlcmVuY2VDb2xsZWN0aW9uKHt9KTtcbiAgICB0aGlzLnVua25vd24gPSBhcmdzLnVua25vd24gfHwgbmV3IERpZmZlcmVuY2VDb2xsZWN0aW9uKHt9KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGlmZmVyZW5jZUNvdW50KCkge1xuICAgIGxldCBjb3VudCA9IDA7XG5cbiAgICBpZiAodGhpcy5kZXNjcmlwdGlvbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb3VudCArPSAxO1xuICAgIH1cbiAgICBpZiAodGhpcy50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgY291bnQgKz0gMTtcbiAgICB9XG5cbiAgICBjb3VudCArPSB0aGlzLmNvbmRpdGlvbnMuZGlmZmVyZW5jZUNvdW50O1xuICAgIGNvdW50ICs9IHRoaXMubWFwcGluZ3MuZGlmZmVyZW5jZUNvdW50O1xuICAgIGNvdW50ICs9IHRoaXMubWV0YWRhdGEuZGlmZmVyZW5jZUNvdW50O1xuICAgIGNvdW50ICs9IHRoaXMucnVsZXMuZGlmZmVyZW5jZUNvdW50O1xuICAgIGNvdW50ICs9IHRoaXMub3V0cHV0cy5kaWZmZXJlbmNlQ291bnQ7XG4gICAgY291bnQgKz0gdGhpcy5wYXJhbWV0ZXJzLmRpZmZlcmVuY2VDb3VudDtcbiAgICBjb3VudCArPSB0aGlzLnJlc291cmNlcy5kaWZmZXJlbmNlQ291bnQ7XG4gICAgY291bnQgKz0gdGhpcy51bmtub3duLmRpZmZlcmVuY2VDb3VudDtcblxuICAgIHJldHVybiBjb3VudDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgaXNFbXB0eSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kaWZmZXJlbmNlQ291bnQgPT09IDA7XG4gIH1cblxuICBwdWJsaWMgdG9NYXAoKTogUHJvcGVydHlNYXAge1xuICAgIHJldHVybiB7XG4gICAgICBkZXNjcmlwdGlvbjogdGhpcy5kZXNjcmlwdGlvbixcbiAgICAgIHRyYW5zZm9ybTogdGhpcy50cmFuc2Zvcm0sXG4gICAgICBjb25kaXRpb25zOiB0aGlzLmNvbmRpdGlvbnMuY2hhbmdlcyxcbiAgICAgIG1hcHBpbmdzOiB0aGlzLm1hcHBpbmdzLmNoYW5nZXMsXG4gICAgICBtZXRhZGF0YTogdGhpcy5tZXRhZGF0YS5jaGFuZ2VzLFxuICAgICAgb3V0cHV0czogdGhpcy5vdXRwdXRzLmNoYW5nZXMsXG4gICAgICBwYXJhbWV0ZXJzOiB0aGlzLnBhcmFtZXRlcnMuY2hhbmdlcyxcbiAgICAgIHJlc291cmNlczogdGhpcy5yZXNvdXJjZXMuY2hhbmdlcyxcbiAgICAgIHVua25vd246IHRoaXMudW5rbm93bi5jaGFuZ2VzLFxuICAgIH07XG4gICAgLy8gY29uc3QgbWFwID0gbmV3IE1hcDxzdHJpbmcsIGFueT4oKTtcbiAgICAvLyBtYXAuc2V0KCdkZXNjcmlwdGlvbicsIHRoaXMuZGVzY3JpcHRpb24pO1xuICAgIC8vIG1hcC5zZXQoJ3RyYW5zZm9ybScsIHRoaXMudHJhbnNmb3JtKTtcbiAgICAvL1xuICAgIC8vIG1hcC5zZXQoJ2NvbmRpdGlvbnMnLCB0aGlzLmNvbmRpdGlvbnMuY2hhbmdlcyk7XG4gICAgLy8gbWFwLnNldCgnbWFwcGluZ3MnLCB0aGlzLm1hcHBpbmdzLmNoYW5nZXMpO1xuICAgIC8vIG1hcC5zZXQoJ21ldGFkYXRhJywgdGhpcy5tZXRhZGF0YS5jaGFuZ2VzKTtcbiAgICAvLyBtYXAuc2V0KCdvdXRwdXRzJywgdGhpcy5vdXRwdXRzLmNoYW5nZXMpO1xuICAgIC8vIG1hcC5zZXQoJ3BhcmFtZXRlcnMnLCB0aGlzLnBhcmFtZXRlcnMuY2hhbmdlcyk7XG4gICAgLy8gbWFwLnNldCgncmVzb3VyY2VzJywgdGhpcy5yZXNvdXJjZXMuY2hhbmdlcyk7XG4gICAgLy9cbiAgICAvLyBtYXAuc2V0KCd1bmtub3duJywgdGhpcy51bmtub3duLmNoYW5nZXMpO1xuICAgIC8vIHJldHVybiBtYXA7XG4gIH1cblxuICBzdGF0aWMgZnJvbU1hcChtYXA6IFByb3BlcnR5TWFwKTogVGVtcGxhdGVEaWZmIHtcbiAgICByZXR1cm4gbmV3IFRlbXBsYXRlRGlmZih7XG4gICAgICBkZXNjcmlwdGlvbjogbWFwLmRlc2NyaXB0aW9uLFxuICAgICAgdHJhbnNmb3JtOiBtYXAudHJhbnNmb3JtLFxuICAgICAgY29uZGl0aW9uczogbmV3IERpZmZlcmVuY2VDb2xsZWN0aW9uKG1hcC5jb25kaXRpb25zKSxcbiAgICAgIG1hcHBpbmdzOiBuZXcgRGlmZmVyZW5jZUNvbGxlY3Rpb24obWFwLm1hcHBpbmdzKSxcbiAgICAgIG1ldGFkYXRhOiBuZXcgRGlmZmVyZW5jZUNvbGxlY3Rpb24obWFwLm1ldGFkYXRhKSxcbiAgICAgIG91dHB1dHM6IG5ldyBEaWZmZXJlbmNlQ29sbGVjdGlvbihtYXAub3V0cHV0cyksXG4gICAgICBwYXJhbWV0ZXJzOiBuZXcgRGlmZmVyZW5jZUNvbGxlY3Rpb24obWFwLnBhcmFtZXRlcnMpLFxuICAgICAgcmVzb3VyY2VzOiBuZXcgRGlmZmVyZW5jZUNvbGxlY3Rpb24obWFwLnJlc291cmNlcyksXG4gICAgICB1bmtub3duOiBuZXcgRGlmZmVyZW5jZUNvbGxlY3Rpb24obWFwLnVua25vd24pLFxuICAgIH0pO1xuICB9XG59XG5cbi8qKlxuICogQSBjaGFuZ2UgaW4gcHJvcGVydHkgdmFsdWVzXG4gKlxuICogTm90IG5lY2Vzc2FyaWx5IGFuIHVwZGF0ZSwgaXQgY291bGQgYmUgdGhhdCB0aGVyZSB1c2VkIHRvIGJlIG5vIHZhbHVlIHRoZXJlXG4gKiBiZWNhdXNlIHRoZXJlIHdhcyBubyByZXNvdXJjZSwgYW5kIG5vdyB0aGVyZSBpcyAob3IgdmljZSB2ZXJzYSkuXG4gKlxuICogVGhlcmVmb3JlLCB3ZSBqdXN0IGNvbnRhaW4gcGxhaW4gdmFsdWVzIGFuZCBub3QgYSBQcm9wZXJ0eURpZmZlcmVuY2U8YW55Pi5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBQcm9wZXJ0eUNoYW5nZSB7XG4gIC8qKlxuICAgKiBMb2dpY2FsIElEIG9mIHRoZSByZXNvdXJjZSB3aGVyZSB0aGlzIHByb3BlcnR5IGNoYW5nZSB3YXMgZm91bmRcbiAgICovXG4gIHJlc291cmNlTG9naWNhbElkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFR5cGUgb2YgdGhlIHJlc291cmNlXG4gICAqL1xuICByZXNvdXJjZVR5cGU6IHN0cmluZztcblxuICAvKipcbiAgICogTmFtZSBvZiB0aGUgcHJvcGVydHkgdGhhdCBpcyBjaGFuZ2luZ1xuICAgKi9cbiAgcHJvcGVydHlOYW1lOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBvbGQgcHJvcGVydHkgdmFsdWVcbiAgICovXG4gIG9sZFZhbHVlPzogYW55O1xuXG4gIC8qKlxuICAgKiBUaGUgbmV3IHByb3BlcnR5IHZhbHVlXG4gICAqL1xuICBuZXdWYWx1ZT86IGFueTtcbn1cblxuLyoqXG4gKiBBIHJlc291cmNlIGNoYW5nZVxuICpcbiAqIEVpdGhlciBhIGNyZWF0aW9uLCBkZWxldGlvbiBvciB1cGRhdGUuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUmVzb3VyY2VDaGFuZ2Uge1xuICAvKipcbiAgICogTG9naWNhbCBJRCBvZiB0aGUgcmVzb3VyY2Ugd2hlcmUgdGhpcyBwcm9wZXJ0eSBjaGFuZ2Ugd2FzIGZvdW5kXG4gICAqL1xuICByZXNvdXJjZUxvZ2ljYWxJZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgdHlwZSBvZiB0aGUgcmVzb3VyY2VcbiAgICovXG4gIHJlc291cmNlVHlwZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgb2xkIHByb3BlcnRpZXMgdmFsdWUgKG1pZ2h0IGJlIHVuZGVmaW5lZCBpbiBjYXNlIG9mIGNyZWF0aW9uKVxuICAgKi9cbiAgb2xkUHJvcGVydGllcz86IFByb3BlcnR5TWFwO1xuXG4gIC8qKlxuICAgKiBUaGUgbmV3IHByb3BlcnRpZXMgdmFsdWUgKG1pZ2h0IGJlIHVuZGVmaW5lZCBpbiBjYXNlIG9mIGRlbGV0aW9uKVxuICAgKi9cbiAgbmV3UHJvcGVydGllcz86IFByb3BlcnR5TWFwO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElEaWZmZXJlbmNlPFZhbHVlVHlwZT4ge1xuICByZWFkb25seSBvbGRWYWx1ZTogVmFsdWVUeXBlIHwgdW5kZWZpbmVkO1xuICByZWFkb25seSBuZXdWYWx1ZTogVmFsdWVUeXBlIHwgdW5kZWZpbmVkO1xuICByZWFkb25seSBpc0RpZmZlcmVudDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgaXNBZGRpdGlvbjogYm9vbGVhbjtcbiAgcmVhZG9ubHkgaXNSZW1vdmFsOiBib29sZWFuO1xuICByZWFkb25seSBpc1VwZGF0ZTogYm9vbGVhbjtcbn1cblxuLyoqXG4gKiBNb2RlbHMgYW4gZW50aXR5IHRoYXQgY2hhbmdlZCBiZXR3ZWVuIHR3byB2ZXJzaW9ucyBvZiBhIFJPUyB0ZW1wbGF0ZS5cbiAqL1xuZXhwb3J0IGNsYXNzIERpZmZlcmVuY2U8VmFsdWVUeXBlPiBpbXBsZW1lbnRzIElEaWZmZXJlbmNlPFZhbHVlVHlwZT4ge1xuICAvKipcbiAgICogV2hldGhlciB0aGlzIGlzIGFuIGFjdHVhbCBkaWZmZXJlbnQgb3IgdGhlIHZhbHVlcyBhcmUgYWN0dWFsbHkgdGhlIHNhbWVcbiAgICpcbiAgICogaXNEaWZmZXJlbnQgPT4gKGlzVXBkYXRlIHwgaXNSZW1vdmVkIHwgaXNVcGRhdGUpXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgaXNEaWZmZXJlbnQ6IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIEBwYXJhbSBvbGRWYWx1ZSB0aGUgb2xkIHZhbHVlLCBjYW5ub3QgYmUgZXF1YWwgKHRvIHRoZSBzZW5zZSBvZiArZGVlcEVxdWFsKykgdG8gK25ld1ZhbHVlKy5cbiAgICogQHBhcmFtIG5ld1ZhbHVlIHRoZSBuZXcgdmFsdWUsIGNhbm5vdCBiZSBlcXVhbCAodG8gdGhlIHNlbnNlIG9mICtkZWVwRXF1YWwrKSB0byArb2xkVmFsdWUrLlxuICAgKi9cbiAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IG9sZFZhbHVlOiBWYWx1ZVR5cGUgfCB1bmRlZmluZWQsIHB1YmxpYyByZWFkb25seSBuZXdWYWx1ZTogVmFsdWVUeXBlIHwgdW5kZWZpbmVkKSB7XG4gICAgaWYgKG9sZFZhbHVlID09PSB1bmRlZmluZWQgJiYgbmV3VmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhyb3cgbmV3IEFzc2VydGlvbkVycm9yKHsgbWVzc2FnZTogJ29sZFZhbHVlIGFuZCBuZXdWYWx1ZSBhcmUgYm90aCB1bmRlZmluZWQhJyB9KTtcbiAgICB9XG4gICAgdGhpcy5pc0RpZmZlcmVudCA9ICFkZWVwRXF1YWwob2xkVmFsdWUsIG5ld1ZhbHVlKTtcbiAgfVxuXG4gIC8qKiBAcmV0dXJucyArdHJ1ZSsgaWYgdGhlIGVsZW1lbnQgaXMgbmV3IHRvIHRoZSB0ZW1wbGF0ZS4gKi9cbiAgcHVibGljIGdldCBpc0FkZGl0aW9uKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm9sZFZhbHVlID09PSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKiogQHJldHVybnMgK3RydWUrIGlmIHRoZSBlbGVtZW50IHdhcyByZW1vdmVkIGZyb20gdGhlIHRlbXBsYXRlLiAqL1xuICBwdWJsaWMgZ2V0IGlzUmVtb3ZhbCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5uZXdWYWx1ZSA9PT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqIEByZXR1cm5zICt0cnVlKyBpZiB0aGUgZWxlbWVudCB3YXMgYWxyZWFkeSBpbiB0aGUgdGVtcGxhdGUgYW5kIGlzIHVwZGF0ZWQuICovXG4gIHB1YmxpYyBnZXQgaXNVcGRhdGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMub2xkVmFsdWUgIT09IHVuZGVmaW5lZCAmJiB0aGlzLm5ld1ZhbHVlICE9PSB1bmRlZmluZWQ7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRGlmZmVyZW5jZUluc3RhbmNlKG9iajogYW55KTogb2JqIGlzIERpZmZlcmVuY2U8YW55PiB7XG4gIHJldHVybiBvYmogaW5zdGFuY2VvZiBEaWZmZXJlbmNlO1xufVxuXG5leHBvcnQgY2xhc3MgUHJvcGVydHlEaWZmZXJlbmNlPFZhbHVlVHlwZT4gZXh0ZW5kcyBEaWZmZXJlbmNlPFZhbHVlVHlwZT4ge1xuICBwdWJsaWMgcmVhZG9ubHkgY2hhbmdlSW1wYWN0PzogUmVzb3VyY2VJbXBhY3Q7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgb2xkVmFsdWU6IFZhbHVlVHlwZSB8IHVuZGVmaW5lZCxcbiAgICBuZXdWYWx1ZTogVmFsdWVUeXBlIHwgdW5kZWZpbmVkLFxuICAgIGFyZ3M6IHsgY2hhbmdlSW1wYWN0PzogUmVzb3VyY2VJbXBhY3QgfSxcbiAgKSB7XG4gICAgc3VwZXIob2xkVmFsdWUsIG5ld1ZhbHVlKTtcbiAgICB0aGlzLmNoYW5nZUltcGFjdCA9IGFyZ3MuY2hhbmdlSW1wYWN0O1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBEaWZmZXJlbmNlQ29sbGVjdGlvbjxWLCBUIGV4dGVuZHMgSURpZmZlcmVuY2U8Vj4+IHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByZWFkb25seSBkaWZmczogeyBbbG9naWNhbElkOiBzdHJpbmddOiBUIH0pIHt9XG5cbiAgcHVibGljIGdldCBjaGFuZ2VzKCk6IHsgW2xvZ2ljYWxJZDogc3RyaW5nXTogVCB9IHtcbiAgICByZXR1cm4gb25seUNoYW5nZXModGhpcy5kaWZmcyk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRpZmZlcmVuY2VDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMuY2hhbmdlcykubGVuZ3RoO1xuICB9XG5cbiAgcHVibGljIGdldChsb2dpY2FsSWQ6IHN0cmluZyk6IFQge1xuICAgIGNvbnN0IHJldCA9IHRoaXMuZGlmZnNbbG9naWNhbElkXTtcbiAgICBpZiAoIXJldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKGBObyBvYmplY3Qgd2l0aCBsb2dpY2FsIElEICcke2xvZ2ljYWxJZH0nYCk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGxvZ2ljYWxJZHMoKTogc3RyaW5nW10ge1xuICAgIHJldHVybiBPYmplY3Qua2V5cyh0aGlzLmNoYW5nZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybnMgYSBuZXcgVGVtcGxhdGVEaWZmIHdoaWNoIG9ubHkgY29udGFpbnMgY2hhbmdlcyBmb3Igd2hpY2ggYHByZWRpY2F0ZWBcbiAgICogcmV0dXJucyBgdHJ1ZWAuXG4gICAqL1xuICBwdWJsaWMgZmlsdGVyKHByZWRpY2F0ZTogKGRpZmY6IFQgfCB1bmRlZmluZWQpID0+IGJvb2xlYW4pOiBEaWZmZXJlbmNlQ29sbGVjdGlvbjxWLCBUPiB7XG4gICAgY29uc3QgbmV3Q2hhbmdlczogeyBbbG9naWNhbElkOiBzdHJpbmddOiBUIH0gPSB7fTtcbiAgICBmb3IgKGNvbnN0IGlkIG9mIE9iamVjdC5rZXlzKHRoaXMuY2hhbmdlcykpIHtcbiAgICAgIGNvbnN0IGRpZmYgPSB0aGlzLmNoYW5nZXNbaWRdO1xuXG4gICAgICBpZiAocHJlZGljYXRlKGRpZmYpKSB7XG4gICAgICAgIG5ld0NoYW5nZXNbaWRdID0gZGlmZjtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbmV3IERpZmZlcmVuY2VDb2xsZWN0aW9uPFYsIFQ+KG5ld0NoYW5nZXMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEludm9rZXMgYGNiYCBmb3IgYWxsIGNoYW5nZXMgaW4gdGhpcyBjb2xsZWN0aW9uLlxuICAgKlxuICAgKiBDaGFuZ2VzIHdpbGwgYmUgc29ydGVkIGFzIGZvbGxvd3M6XG4gICAqICAtIFJlbW92ZWRcbiAgICogIC0gQWRkZWRcbiAgICogIC0gVXBkYXRlZFxuICAgKiAgLSBPdGhlcnNcbiAgICpcbiAgICogQHBhcmFtIGNiXG4gICAqL1xuICBwdWJsaWMgZm9yRWFjaERpZmZlcmVuY2UoY2I6IChsb2dpY2FsSWQ6IHN0cmluZywgY2hhbmdlOiBUKSA9PiBhbnkpOiB2b2lkIHtcbiAgICBjb25zdCByZW1vdmVkID0gbmV3IEFycmF5PHsgbG9naWNhbElkOiBzdHJpbmc7IGNoYW5nZTogVCB9PigpO1xuICAgIGNvbnN0IGFkZGVkID0gbmV3IEFycmF5PHsgbG9naWNhbElkOiBzdHJpbmc7IGNoYW5nZTogVCB9PigpO1xuICAgIGNvbnN0IHVwZGF0ZWQgPSBuZXcgQXJyYXk8eyBsb2dpY2FsSWQ6IHN0cmluZzsgY2hhbmdlOiBUIH0+KCk7XG4gICAgY29uc3Qgb3RoZXJzID0gbmV3IEFycmF5PHsgbG9naWNhbElkOiBzdHJpbmc7IGNoYW5nZTogVCB9PigpO1xuXG4gICAgZm9yIChjb25zdCBsb2dpY2FsSWQgb2YgdGhpcy5sb2dpY2FsSWRzKSB7XG4gICAgICBjb25zdCBjaGFuZ2U6IFQgPSB0aGlzLmNoYW5nZXNbbG9naWNhbElkXSE7XG4gICAgICBpZiAoY2hhbmdlLmlzQWRkaXRpb24pIHtcbiAgICAgICAgYWRkZWQucHVzaCh7IGxvZ2ljYWxJZCwgY2hhbmdlIH0pO1xuICAgICAgfSBlbHNlIGlmIChjaGFuZ2UuaXNSZW1vdmFsKSB7XG4gICAgICAgIHJlbW92ZWQucHVzaCh7IGxvZ2ljYWxJZCwgY2hhbmdlIH0pO1xuICAgICAgfSBlbHNlIGlmIChjaGFuZ2UuaXNVcGRhdGUpIHtcbiAgICAgICAgdXBkYXRlZC5wdXNoKHsgbG9naWNhbElkLCBjaGFuZ2UgfSk7XG4gICAgICB9IGVsc2UgaWYgKGNoYW5nZS5pc0RpZmZlcmVudCkge1xuICAgICAgICBvdGhlcnMucHVzaCh7IGxvZ2ljYWxJZCwgY2hhbmdlIH0pO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJlbW92ZWQuZm9yRWFjaCgodikgPT4gY2Iodi5sb2dpY2FsSWQsIHYuY2hhbmdlKSk7XG4gICAgYWRkZWQuZm9yRWFjaCgodikgPT4gY2Iodi5sb2dpY2FsSWQsIHYuY2hhbmdlKSk7XG4gICAgdXBkYXRlZC5mb3JFYWNoKCh2KSA9PiBjYih2LmxvZ2ljYWxJZCwgdi5jaGFuZ2UpKTtcbiAgICBvdGhlcnMuZm9yRWFjaCgodikgPT4gY2Iodi5sb2dpY2FsSWQsIHYuY2hhbmdlKSk7XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzRGlmZmVyZW5jZUNvbGxlY3Rpb25JbnN0YW5jZShvYmo6IGFueSk6IG9iaiBpcyBEaWZmZXJlbmNlQ29sbGVjdGlvbjxhbnksIGFueT4ge1xuICByZXR1cm4gb2JqIGluc3RhbmNlb2YgRGlmZmVyZW5jZUNvbGxlY3Rpb247XG59XG5cbi8qKlxuICogQXJndW1lbnRzIGV4cGVjdGVkIGJ5IHRoZSBjb25zdHJ1Y3RvciBvZiArVGVtcGxhdGVEaWZmKywgZXh0cmFjdGVkIGFzIGFuIGludGVyZmFjZSBmb3IgdGhlIHNha2VcbiAqIG9mIChyZWxhdGl2ZSkgY29uY2lzZW5lc3Mgb2YgdGhlIGNvbnN0cnVjdG9yJ3Mgc2lnbmF0dXJlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElUZW1wbGF0ZURpZmYge1xuICBkZXNjcmlwdGlvbj86IElEaWZmZXJlbmNlPHN0cmluZz47XG4gIHRyYW5zZm9ybT86IElEaWZmZXJlbmNlPHN0cmluZz47XG5cbiAgY29uZGl0aW9ucz86IERpZmZlcmVuY2VDb2xsZWN0aW9uPENvbmRpdGlvbiwgQ29uZGl0aW9uRGlmZmVyZW5jZT47XG4gIG1hcHBpbmdzPzogRGlmZmVyZW5jZUNvbGxlY3Rpb248TWFwcGluZywgTWFwcGluZ0RpZmZlcmVuY2U+O1xuICBydWxlcz86IERpZmZlcmVuY2VDb2xsZWN0aW9uPFJ1bGUsIFJ1bGVEaWZmZXJlbmNlPjtcbiAgbWV0YWRhdGE/OiBEaWZmZXJlbmNlQ29sbGVjdGlvbjxNZXRhZGF0YSwgTWV0YWRhdGFEaWZmZXJlbmNlPjtcbiAgb3V0cHV0cz86IERpZmZlcmVuY2VDb2xsZWN0aW9uPE91dHB1dCwgT3V0cHV0RGlmZmVyZW5jZT47XG4gIHBhcmFtZXRlcnM/OiBEaWZmZXJlbmNlQ29sbGVjdGlvbjxQYXJhbWV0ZXIsIFBhcmFtZXRlckRpZmZlcmVuY2U+O1xuICByZXNvdXJjZXM/OiBEaWZmZXJlbmNlQ29sbGVjdGlvbjxSZXNvdXJjZSwgUmVzb3VyY2VEaWZmZXJlbmNlPjtcblxuICB1bmtub3duPzogRGlmZmVyZW5jZUNvbGxlY3Rpb248YW55LCBJRGlmZmVyZW5jZTxhbnk+Pjtcbn1cblxuZXhwb3J0IHR5cGUgQ29uZGl0aW9uID0gYW55O1xuZXhwb3J0IGNsYXNzIENvbmRpdGlvbkRpZmZlcmVuY2UgZXh0ZW5kcyBEaWZmZXJlbmNlPENvbmRpdGlvbj4ge1xuICAvLyBUT0RPOiBkZWZpbmUgc3BlY2lmaWMgZGlmZmVyZW5jZSBhdHRyaWJ1dGVzXG59XG5cbmV4cG9ydCB0eXBlIE1hcHBpbmcgPSBhbnk7XG5leHBvcnQgY2xhc3MgTWFwcGluZ0RpZmZlcmVuY2UgZXh0ZW5kcyBEaWZmZXJlbmNlPE1hcHBpbmc+IHtcbiAgLy8gVE9ETzogZGVmaW5lIHNwZWNpZmljIGRpZmZlcmVuY2UgYXR0cmlidXRlc1xufVxuXG5leHBvcnQgdHlwZSBSdWxlID0gYW55O1xuZXhwb3J0IGNsYXNzIFJ1bGVEaWZmZXJlbmNlIGV4dGVuZHMgRGlmZmVyZW5jZTxSdWxlPiB7XG4gIC8vIFRPRE86IGRlZmluZSBzcGVjaWZpYyBkaWZmZXJlbmNlIGF0dHJpYnV0ZXNcbn1cblxuZXhwb3J0IHR5cGUgTWV0YWRhdGEgPSBhbnk7XG5leHBvcnQgY2xhc3MgTWV0YWRhdGFEaWZmZXJlbmNlIGV4dGVuZHMgRGlmZmVyZW5jZTxNZXRhZGF0YT4ge1xuICAvLyBUT0RPOiBkZWZpbmUgc3BlY2lmaWMgZGlmZmVyZW5jZSBhdHRyaWJ1dGVzXG59XG5cbmV4cG9ydCB0eXBlIE91dHB1dCA9IGFueTtcbmV4cG9ydCBjbGFzcyBPdXRwdXREaWZmZXJlbmNlIGV4dGVuZHMgRGlmZmVyZW5jZTxPdXRwdXQ+IHtcbiAgLy8gVE9ETzogZGVmaW5lIHNwZWNpZmljIGRpZmZlcmVuY2UgYXR0cmlidXRlc1xufVxuXG5leHBvcnQgdHlwZSBQYXJhbWV0ZXIgPSBhbnk7XG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyRGlmZmVyZW5jZSBleHRlbmRzIERpZmZlcmVuY2U8UGFyYW1ldGVyPiB7XG4gIC8vIFRPRE86IGRlZmluZSBzcGVjaWZpYyBkaWZmZXJlbmNlIGF0dHJpYnV0ZXNcbn1cblxuZXhwb3J0IGVudW0gUmVzb3VyY2VJbXBhY3Qge1xuICAvKiogVGhlIGV4aXN0aW5nIHBoeXNpY2FsIHJlc291cmNlIHdpbGwgYmUgdXBkYXRlZCAqL1xuICBXSUxMX1VQREFURSA9ICdXSUxMX1VQREFURScsXG4gIC8qKiBBIG5ldyBwaHlzaWNhbCByZXNvdXJjZSB3aWxsIGJlIGNyZWF0ZWQgKi9cbiAgV0lMTF9DUkVBVEUgPSAnV0lMTF9DUkVBVEUnLFxuICAvKiogVGhlIGV4aXN0aW5nIHBoeXNpY2FsIHJlc291cmNlIHdpbGwgYmUgcmVwbGFjZWQgKi9cbiAgV0lMTF9SRVBMQUNFID0gJ1dJTExfUkVQTEFDRScsXG4gIC8qKiBUaGUgZXhpc3RpbmcgcGh5c2ljYWwgcmVzb3VyY2UgbWF5IGJlIHJlcGxhY2VkICovXG4gIE1BWV9SRVBMQUNFID0gJ01BWV9SRVBMQUNFJyxcbiAgLyoqIFRoZSBleGlzdGluZyBwaHlzaWNhbCByZXNvdXJjZSB3aWxsIGJlIGRlc3Ryb3llZCAqL1xuICBXSUxMX0RFU1RST1kgPSAnV0lMTF9ERVNUUk9ZJyxcbiAgLyoqIFRoZSBleGlzdGluZyBwaHlzaWNhbCByZXNvdXJjZSB3aWxsIGJlIHJlbW92ZWQgZnJvbSBST1Mgc3VwZXJ2aXNpb24gKi9cbiAgV0lMTF9PUlBIQU4gPSAnV0lMTF9PUlBIQU4nLFxuICAvKiogVGhlcmUgaXMgbm8gY2hhbmdlIGluIHRoaXMgcmVzb3VyY2UgKi9cbiAgTk9fQ0hBTkdFID0gJ05PX0NIQU5HRScsXG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjYW4gYmUgdXNlZCBhcyBhIHJlZHVjZXIgdG8gb2J0YWluIHRoZSByZXNvdXJjZS1sZXZlbCBpbXBhY3Qgb2YgYSBsaXN0XG4gKiBvZiBwcm9wZXJ0eS1sZXZlbCBpbXBhY3RzLlxuICogQHBhcmFtIG9uZSB0aGUgY3VycmVudCB3b3JzdCBpbXBhY3Qgc28gZmFyLlxuICogQHBhcmFtIHR3byB0aGUgbmV3IGltcGFjdCBiZWluZyBjb25zaWRlcmVkIChjYW4gYmUgdW5kZWZpbmVkLCBhcyB3ZSBtYXkgbm90IGFsd2F5cyBiZVxuICogICAgICBhYmxlIHRvIGRldGVybWluZSBzb21lIHBlcm9wZXJ0eSdzIGltcGFjdCkuXG4gKi9cbmZ1bmN0aW9uIHdvcnN0SW1wYWN0KG9uZTogUmVzb3VyY2VJbXBhY3QsIHR3bz86IFJlc291cmNlSW1wYWN0KTogUmVzb3VyY2VJbXBhY3Qge1xuICBpZiAoIXR3bykge1xuICAgIHJldHVybiBvbmU7XG4gIH1cbiAgY29uc3QgYmFkbmVzcyA9IHtcbiAgICBbUmVzb3VyY2VJbXBhY3QuTk9fQ0hBTkdFXTogMCxcbiAgICBbUmVzb3VyY2VJbXBhY3QuV0lMTF9VUERBVEVdOiAxLFxuICAgIFtSZXNvdXJjZUltcGFjdC5XSUxMX0NSRUFURV06IDIsXG4gICAgW1Jlc291cmNlSW1wYWN0LldJTExfT1JQSEFOXTogMyxcbiAgICBbUmVzb3VyY2VJbXBhY3QuTUFZX1JFUExBQ0VdOiA0LFxuICAgIFtSZXNvdXJjZUltcGFjdC5XSUxMX1JFUExBQ0VdOiA1LFxuICAgIFtSZXNvdXJjZUltcGFjdC5XSUxMX0RFU1RST1ldOiA2LFxuICB9O1xuICByZXR1cm4gYmFkbmVzc1tvbmVdID4gYmFkbmVzc1t0d29dID8gb25lIDogdHdvO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc291cmNlIHtcbiAgVHlwZTogc3RyaW5nO1xuICBQcm9wZXJ0aWVzPzogeyBbbmFtZTogc3RyaW5nXTogYW55IH07XG5cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG4vKipcbiAqIENoYW5nZSB0byBhIHNpbmdsZSByZXNvdXJjZSBiZXR3ZWVuIHR3byBST1MgdGVtcGxhdGVzXG4gKlxuICogVGhpcyBjbGFzcyBjYW4gYmUgbXV0YXRlZCBhZnRlciBjb25zdHJ1Y3Rpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXNvdXJjZURpZmZlcmVuY2UgaW1wbGVtZW50cyBJRGlmZmVyZW5jZTxSZXNvdXJjZT4ge1xuICAvKipcbiAgICogV2hldGhlciB0aGlzIHJlc291cmNlIHdhcyBhZGRlZFxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGlzQWRkaXRpb246IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhpcyByZXNvdXJjZSB3YXMgcmVtb3ZlZFxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGlzUmVtb3ZhbDogYm9vbGVhbjtcblxuICAvKiogUHJvcGVydHktbGV2ZWwgY2hhbmdlcyBvbiB0aGUgcmVzb3VyY2UgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBwcm9wZXJ0eURpZmZzOiB7IFtrZXk6IHN0cmluZ106IFByb3BlcnR5RGlmZmVyZW5jZTxhbnk+IH07XG5cbiAgLyoqIENoYW5nZXMgdG8gbm9uLXByb3BlcnR5IGxldmVsIGF0dHJpYnV0ZXMgb2YgdGhlIHJlc291cmNlICovXG4gIHByaXZhdGUgcmVhZG9ubHkgb3RoZXJEaWZmczogeyBba2V5OiBzdHJpbmddOiBEaWZmZXJlbmNlPGFueT4gfTtcblxuICAvKiogVGhlIHJlc291cmNlIHR5cGUgKG9yIG9sZCBhbmQgbmV3IHR5cGUgaWYgaXQgaGFzIGNoYW5nZWQpICovXG4gIHByaXZhdGUgcmVhZG9ubHkgcmVzb3VyY2VUeXBlczogeyByZWFkb25seSBvbGRUeXBlPzogc3RyaW5nOyByZWFkb25seSBuZXdUeXBlPzogc3RyaW5nIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlYWRvbmx5IG9sZFZhbHVlOiBSZXNvdXJjZSB8IHVuZGVmaW5lZCxcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmV3VmFsdWU6IFJlc291cmNlIHwgdW5kZWZpbmVkLFxuICAgIGFyZ3M6IHtcbiAgICAgIHJlc291cmNlVHlwZTogeyBvbGRUeXBlPzogc3RyaW5nOyBuZXdUeXBlPzogc3RyaW5nIH07XG4gICAgICBwcm9wZXJ0eURpZmZzOiB7IFtrZXk6IHN0cmluZ106IFByb3BlcnR5RGlmZmVyZW5jZTxhbnk+IH07XG4gICAgICBvdGhlckRpZmZzOiB7IFtrZXk6IHN0cmluZ106IERpZmZlcmVuY2U8YW55PiB9O1xuICAgIH0sXG4gICkge1xuICAgIHRoaXMucmVzb3VyY2VUeXBlcyA9IGFyZ3MucmVzb3VyY2VUeXBlO1xuICAgIHRoaXMucHJvcGVydHlEaWZmcyA9IGFyZ3MucHJvcGVydHlEaWZmcztcbiAgICB0aGlzLm90aGVyRGlmZnMgPSBhcmdzLm90aGVyRGlmZnM7XG5cbiAgICB0aGlzLmlzQWRkaXRpb24gPSBvbGRWYWx1ZSA9PT0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaXNSZW1vdmFsID0gbmV3VmFsdWUgPT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgb2xkUHJvcGVydGllcygpOiBQcm9wZXJ0eU1hcCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMub2xkVmFsdWUgJiYgdGhpcy5vbGRWYWx1ZS5Qcm9wZXJ0aWVzO1xuICB9XG5cbiAgcHVibGljIGdldCBuZXdQcm9wZXJ0aWVzKCk6IFByb3BlcnR5TWFwIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5uZXdWYWx1ZSAmJiB0aGlzLm5ld1ZhbHVlLlByb3BlcnRpZXM7XG4gIH1cblxuICAvKipcbiAgICogV2hldGhlciB0aGlzIHJlc291cmNlIHdhcyBtb2RpZmllZCBhdCBhbGxcbiAgICovXG4gIHB1YmxpYyBnZXQgaXNEaWZmZXJlbnQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGlmZmVyZW5jZUNvdW50ID4gMCB8fCB0aGlzLm9sZFJlc291cmNlVHlwZSAhPT0gdGhpcy5uZXdSZXNvdXJjZVR5cGU7XG4gIH1cblxuICAvKipcbiAgICogV2hldGhlciB0aGUgcmVzb3VyY2Ugd2FzIHVwZGF0ZWQgaW4tcGxhY2VcbiAgICovXG4gIHB1YmxpYyBnZXQgaXNVcGRhdGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNEaWZmZXJlbnQgJiYgIXRoaXMuaXNBZGRpdGlvbiAmJiAhdGhpcy5pc1JlbW92YWw7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG9sZFJlc291cmNlVHlwZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLnJlc291cmNlVHlwZXMub2xkVHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmV3UmVzb3VyY2VUeXBlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMucmVzb3VyY2VUeXBlcy5uZXdUeXBlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbCBhY3R1YWwgcHJvcGVydHkgdXBkYXRlc1xuICAgKi9cbiAgcHVibGljIGdldCBwcm9wZXJ0eVVwZGF0ZXMoKTogeyBba2V5OiBzdHJpbmddOiBQcm9wZXJ0eURpZmZlcmVuY2U8YW55PiB9IHtcbiAgICByZXR1cm4gb25seUNoYW5nZXModGhpcy5wcm9wZXJ0eURpZmZzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGwgYWN0dWFsIFwib3RoZXJcIiB1cGRhdGVzXG4gICAqL1xuICBwdWJsaWMgZ2V0IG90aGVyQ2hhbmdlcygpOiB7IFtrZXk6IHN0cmluZ106IERpZmZlcmVuY2U8YW55PiB9IHtcbiAgICByZXR1cm4gb25seUNoYW5nZXModGhpcy5vdGhlckRpZmZzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGUgcmVzb3VyY2UgdHlwZSB3YXMgY2hhbmdlZCBpbiB0aGlzIGRpZmZcbiAgICpcbiAgICogVGhpcyBpcyBub3QgYSB2YWxpZCBvcGVyYXRpb24gaW4gUk9TIGJ1dCB0byBiZSBkZWZlbnNpdmUgd2UncmUgZ29pbmdcbiAgICogdG8gYmUgYXdhcmUgb2YgaXQgYW55d2F5LlxuICAgKi9cbiAgcHVibGljIGdldCByZXNvdXJjZVR5cGVDaGFuZ2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnJlc291cmNlVHlwZXMub2xkVHlwZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICB0aGlzLnJlc291cmNlVHlwZXMubmV3VHlwZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICB0aGlzLnJlc291cmNlVHlwZXMub2xkVHlwZSAhPT0gdGhpcy5yZXNvdXJjZVR5cGVzLm5ld1R5cGVcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgcmVzb3VyY2UgdHlwZSBpZiBpdCB3YXMgdW5jaGFuZ2VkXG4gICAqXG4gICAqIElmIHRoZSByZXNvdXJjZSB0eXBlIHdhcyBjaGFuZ2VkLCBpdCdzIGFuIGVycm9yIHRvIGNhbGwgdGhpcy5cbiAgICovXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VUeXBlKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMucmVzb3VyY2VUeXBlQ2hhbmdlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZ2V0IC5yZXNvdXJjZVR5cGUsIGJlY2F1c2UgdGhlIHR5cGUgd2FzIGNoYW5nZWQnKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucmVzb3VyY2VUeXBlcy5vbGRUeXBlIHx8IHRoaXMucmVzb3VyY2VUeXBlcy5uZXdUeXBlITtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlIGEgUHJvcGVydHlDaGFuZ2UgaW4gdGhpcyBvYmplY3RcbiAgICpcbiAgICogVGhpcyBhZmZlY3RzIHRoZSBwcm9wZXJ0eSBkaWZmIGFzIGl0IGlzIHN1bW1hcml6ZWQgdG8gdXNlcnMsIGJ1dCBpdCBET0VTXG4gICAqIE5PVCBhZmZlY3QgZWl0aGVyIHRoZSBcIm9sZFZhbHVlXCIgb3IgXCJuZXdWYWx1ZVwiIHZhbHVlczsgdGhvc2Ugc3RpbGwgY29udGFpblxuICAgKiB0aGUgYWN0dWFsIHRlbXBsYXRlIHZhbHVlcyBhcyBwcm92aWRlZCBieSB0aGUgdXNlciAodGhleSBtaWdodCBzdGlsbCBiZVxuICAgKiB1c2VkIGZvciBkb3duc3RyZWFtIHByb2Nlc3NpbmcpLlxuICAgKi9cbiAgcHVibGljIHNldFByb3BlcnR5Q2hhbmdlKHByb3BlcnR5TmFtZTogc3RyaW5nLCBjaGFuZ2U6IFByb3BlcnR5RGlmZmVyZW5jZTxhbnk+KSB7XG4gICAgdGhpcy5wcm9wZXJ0eURpZmZzW3Byb3BlcnR5TmFtZV0gPSBjaGFuZ2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNoYW5nZUltcGFjdCgpOiBSZXNvdXJjZUltcGFjdCB7XG4gICAgLy8gQ2hlY2sgdGhlIFR5cGUgZmlyc3RcbiAgICBpZiAodGhpcy5yZXNvdXJjZVR5cGVzLm9sZFR5cGUgIT09IHRoaXMucmVzb3VyY2VUeXBlcy5uZXdUeXBlKSB7XG4gICAgICBpZiAodGhpcy5yZXNvdXJjZVR5cGVzLm9sZFR5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gUmVzb3VyY2VJbXBhY3QuV0lMTF9DUkVBVEU7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5yZXNvdXJjZVR5cGVzLm5ld1R5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vbGRWYWx1ZSEuRGVsZXRpb25Qb2xpY3kgPT09ICdSZXRhaW4nID8gUmVzb3VyY2VJbXBhY3QuV0lMTF9PUlBIQU4gOiBSZXNvdXJjZUltcGFjdC5XSUxMX0RFU1RST1k7XG4gICAgICB9XG4gICAgICByZXR1cm4gUmVzb3VyY2VJbXBhY3QuV0lMTF9SRVBMQUNFO1xuICAgIH1cblxuICAgIC8vIEJhc2UgaW1wYWN0IChiZWZvcmUgd2UgbWl4IGluIHRoZSB3b3JzdCBvZiB0aGUgcHJvcGVydHkgaW1wYWN0cyk7XG4gICAgLy8gV0lMTF9VUERBVEUgaWYgd2UgaGF2ZSBcIm90aGVyXCIgY2hhbmdlcywgTk9fQ0hBTkdFIGlmIHRoZXJlIGFyZSBubyBcIm90aGVyXCIgY2hhbmdlcy5cbiAgICBjb25zdCBiYXNlSW1wYWN0ID1cbiAgICAgIE9iamVjdC5rZXlzKHRoaXMub3RoZXJDaGFuZ2VzKS5sZW5ndGggPiAwID8gUmVzb3VyY2VJbXBhY3QuV0lMTF9VUERBVEUgOiBSZXNvdXJjZUltcGFjdC5OT19DSEFOR0U7XG5cbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLnByb3BlcnR5RGlmZnMpXG4gICAgICAubWFwKChlbHQpID0+IGVsdC5jaGFuZ2VJbXBhY3QpXG4gICAgICAucmVkdWNlKHdvcnN0SW1wYWN0LCBiYXNlSW1wYWN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb3VudCBvZiBhY3R1YWwgZGlmZmVyZW5jZXMgKG5vdCBvZiBlbGVtZW50cylcbiAgICovXG4gIHB1YmxpYyBnZXQgZGlmZmVyZW5jZUNvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5wcm9wZXJ0eVVwZGF0ZXMpLmxlbmd0aCArIE9iamVjdC52YWx1ZXModGhpcy5vdGhlckNoYW5nZXMpLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZva2UgYSBjYWxsYmFjayBmb3IgZWFjaCBhY3R1YWwgZGlmZmVyZW5jZVxuICAgKi9cbiAgcHVibGljIGZvckVhY2hEaWZmZXJlbmNlKFxuICAgIGNiOiAodHlwZTogJ1Byb3BlcnR5JyB8ICdPdGhlcicsIG5hbWU6IHN0cmluZywgdmFsdWU6IERpZmZlcmVuY2U8YW55PiB8IFByb3BlcnR5RGlmZmVyZW5jZTxhbnk+KSA9PiBhbnksXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHRoaXMucHJvcGVydHlVcGRhdGVzKS5zb3J0KCkpIHtcbiAgICAgIGNiKCdQcm9wZXJ0eScsIGtleSwgdGhpcy5wcm9wZXJ0eVVwZGF0ZXNba2V5XSk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHRoaXMub3RoZXJDaGFuZ2VzKS5zb3J0KCkpIHtcbiAgICAgIGNiKCdPdGhlcicsIGtleSwgdGhpcy5vdGhlckRpZmZzW2tleV0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm9wZXJ0eURpZmZlcmVuY2U8VD4oZGlmZjogRGlmZmVyZW5jZTxUPik6IGRpZmYgaXMgUHJvcGVydHlEaWZmZXJlbmNlPFQ+IHtcbiAgcmV0dXJuIChkaWZmIGFzIFByb3BlcnR5RGlmZmVyZW5jZTxUPikuY2hhbmdlSW1wYWN0ICE9PSB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogRmlsdGVyIGEgbWFwIG9mIElEaWZmZXJlbmNlcyBkb3duIHRvIG9ubHkgcmV0YWluIHRoZSBhY3R1YWwgY2hhbmdlc1xuICovXG5mdW5jdGlvbiBvbmx5Q2hhbmdlczxWLCBUIGV4dGVuZHMgSURpZmZlcmVuY2U8Vj4+KHhzOiB7IFtrZXk6IHN0cmluZ106IFQgfSk6IHsgW2tleTogc3RyaW5nXTogVCB9IHtcbiAgaWYgKHhzID09PSB1bmRlZmluZWQgfHwgeHMgPT09IG51bGwpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgY29uc3QgcmV0OiB7IFtrZXk6IHN0cmluZ106IFQgfSA9IHt9O1xuICBmb3IgKGNvbnN0IFtrZXksIGRpZmZdIG9mIE9iamVjdC5lbnRyaWVzKHhzKSkge1xuICAgIGlmIChkaWZmLmlzRGlmZmVyZW50KSB7XG4gICAgICByZXRba2V5XSA9IGRpZmY7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXQ7XG59XG4iXX0=