"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPropertyDifference = exports.ResourceDifference = exports.ResourceImpact = exports.ParameterDifference = exports.OutputDifference = exports.MetadataDifference = exports.MappingDifference = exports.ConditionDifference = exports.isDifferenceCollectionInstance = exports.DifferenceCollection = exports.PropertyDifference = exports.isDifferenceInstance = exports.Difference = exports.TemplateDiff = void 0;
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
        this.isDifferent = !util_1.deepEqual(oldValue, newValue);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBc0M7QUFDdEMsaUNBQWlDO0FBSWpDLHNEQUFzRDtBQUN0RCxNQUFhLFlBQVk7SUFZdkIsWUFBWSxJQUFtQjtRQUM3QixJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUNyQztRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7SUFD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QjtLQUNGO0lBQ0QsT0FBTyxHQUFHLENBQUM7QUFDYixDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtBc3NlcnRpb25FcnJvcn0gZnJvbSAnYXNzZXJ0JztcbmltcG9ydCB7ZGVlcEVxdWFsfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgdHlwZSBQcm9wZXJ0eU1hcCA9IHsgW2tleTogc3RyaW5nXTogYW55IH07XG5cbi8qKiBTZW1hbnRpYyBkaWZmZXJlbmNlcyBiZXR3ZWVuIHR3byBST1MgdGVtcGxhdGVzLiAqL1xuZXhwb3J0IGNsYXNzIFRlbXBsYXRlRGlmZiBpbXBsZW1lbnRzIElUZW1wbGF0ZURpZmYge1xuICBwdWJsaWMgZGVzY3JpcHRpb24/OiBEaWZmZXJlbmNlPHN0cmluZz47XG4gIHB1YmxpYyB0cmFuc2Zvcm0/OiBEaWZmZXJlbmNlPHN0cmluZz47XG4gIHB1YmxpYyBjb25kaXRpb25zOiBEaWZmZXJlbmNlQ29sbGVjdGlvbjxDb25kaXRpb24sIENvbmRpdGlvbkRpZmZlcmVuY2U+O1xuICBwdWJsaWMgbWFwcGluZ3M6IERpZmZlcmVuY2VDb2xsZWN0aW9uPE1hcHBpbmcsIE1hcHBpbmdEaWZmZXJlbmNlPjtcbiAgcHVibGljIG1ldGFkYXRhOiBEaWZmZXJlbmNlQ29sbGVjdGlvbjxNZXRhZGF0YSwgTWV0YWRhdGFEaWZmZXJlbmNlPjtcbiAgcHVibGljIG91dHB1dHM6IERpZmZlcmVuY2VDb2xsZWN0aW9uPE91dHB1dCwgT3V0cHV0RGlmZmVyZW5jZT47XG4gIHB1YmxpYyBwYXJhbWV0ZXJzOiBEaWZmZXJlbmNlQ29sbGVjdGlvbjxQYXJhbWV0ZXIsIFBhcmFtZXRlckRpZmZlcmVuY2U+O1xuICBwdWJsaWMgcmVzb3VyY2VzOiBEaWZmZXJlbmNlQ29sbGVjdGlvbjxSZXNvdXJjZSwgUmVzb3VyY2VEaWZmZXJlbmNlPjtcbiAgLyoqIFRoZSBkaWZmZXJlbmNlcyBpbiB1bmtub3duL3VuZXhwZWN0ZWQgcGFydHMgb2YgdGhlIHRlbXBsYXRlICovXG4gIHB1YmxpYyB1bmtub3duOiBEaWZmZXJlbmNlQ29sbGVjdGlvbjxhbnksIERpZmZlcmVuY2U8YW55Pj47XG5cbiAgY29uc3RydWN0b3IoYXJnczogSVRlbXBsYXRlRGlmZikge1xuICAgIGlmIChhcmdzLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBhcmdzLmRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBpZiAoYXJncy50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy50cmFuc2Zvcm0gPSBhcmdzLnRyYW5zZm9ybTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbmRpdGlvbnMgPSBhcmdzLmNvbmRpdGlvbnMgfHwgbmV3IERpZmZlcmVuY2VDb2xsZWN0aW9uKHt9KTtcbiAgICB0aGlzLm1hcHBpbmdzID0gYXJncy5tYXBwaW5ncyB8fCBuZXcgRGlmZmVyZW5jZUNvbGxlY3Rpb24oe30pO1xuICAgIHRoaXMubWV0YWRhdGEgPSBhcmdzLm1ldGFkYXRhIHx8IG5ldyBEaWZmZXJlbmNlQ29sbGVjdGlvbih7fSk7XG4gICAgdGhpcy5vdXRwdXRzID0gYXJncy5vdXRwdXRzIHx8IG5ldyBEaWZmZXJlbmNlQ29sbGVjdGlvbih7fSk7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gYXJncy5wYXJhbWV0ZXJzIHx8IG5ldyBEaWZmZXJlbmNlQ29sbGVjdGlvbih7fSk7XG4gICAgdGhpcy5yZXNvdXJjZXMgPSBhcmdzLnJlc291cmNlcyB8fCBuZXcgRGlmZmVyZW5jZUNvbGxlY3Rpb24oe30pO1xuICAgIHRoaXMudW5rbm93biA9IGFyZ3MudW5rbm93biB8fCBuZXcgRGlmZmVyZW5jZUNvbGxlY3Rpb24oe30pO1xuICB9XG5cbiAgcHVibGljIGdldCBkaWZmZXJlbmNlQ291bnQoKSB7XG4gICAgbGV0IGNvdW50ID0gMDtcblxuICAgIGlmICh0aGlzLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvdW50ICs9IDE7XG4gICAgfVxuICAgIGlmICh0aGlzLnRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb3VudCArPSAxO1xuICAgIH1cblxuICAgIGNvdW50ICs9IHRoaXMuY29uZGl0aW9ucy5kaWZmZXJlbmNlQ291bnQ7XG4gICAgY291bnQgKz0gdGhpcy5tYXBwaW5ncy5kaWZmZXJlbmNlQ291bnQ7XG4gICAgY291bnQgKz0gdGhpcy5tZXRhZGF0YS5kaWZmZXJlbmNlQ291bnQ7XG4gICAgY291bnQgKz0gdGhpcy5vdXRwdXRzLmRpZmZlcmVuY2VDb3VudDtcbiAgICBjb3VudCArPSB0aGlzLnBhcmFtZXRlcnMuZGlmZmVyZW5jZUNvdW50O1xuICAgIGNvdW50ICs9IHRoaXMucmVzb3VyY2VzLmRpZmZlcmVuY2VDb3VudDtcbiAgICBjb3VudCArPSB0aGlzLnVua25vd24uZGlmZmVyZW5jZUNvdW50O1xuXG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG5cbiAgcHVibGljIGdldCBpc0VtcHR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRpZmZlcmVuY2VDb3VudCA9PT0gMDtcbiAgfVxuXG4gIHB1YmxpYyB0b01hcCgpOiBQcm9wZXJ0eU1hcCB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGRlc2NyaXB0aW9uOiB0aGlzLmRlc2NyaXB0aW9uLFxuICAgICAgdHJhbnNmb3JtOiB0aGlzLnRyYW5zZm9ybSxcbiAgICAgIGNvbmRpdGlvbnM6IHRoaXMuY29uZGl0aW9ucy5jaGFuZ2VzLFxuICAgICAgbWFwcGluZ3M6IHRoaXMubWFwcGluZ3MuY2hhbmdlcyxcbiAgICAgIG1ldGFkYXRhOiB0aGlzLm1ldGFkYXRhLmNoYW5nZXMsXG4gICAgICBvdXRwdXRzOiB0aGlzLm91dHB1dHMuY2hhbmdlcyxcbiAgICAgIHBhcmFtZXRlcnM6IHRoaXMucGFyYW1ldGVycy5jaGFuZ2VzLFxuICAgICAgcmVzb3VyY2VzOiB0aGlzLnJlc291cmNlcy5jaGFuZ2VzLFxuICAgICAgdW5rbm93bjogdGhpcy51bmtub3duLmNoYW5nZXMsXG4gICAgfTtcbiAgICAvLyBjb25zdCBtYXAgPSBuZXcgTWFwPHN0cmluZywgYW55PigpO1xuICAgIC8vIG1hcC5zZXQoJ2Rlc2NyaXB0aW9uJywgdGhpcy5kZXNjcmlwdGlvbik7XG4gICAgLy8gbWFwLnNldCgndHJhbnNmb3JtJywgdGhpcy50cmFuc2Zvcm0pO1xuICAgIC8vXG4gICAgLy8gbWFwLnNldCgnY29uZGl0aW9ucycsIHRoaXMuY29uZGl0aW9ucy5jaGFuZ2VzKTtcbiAgICAvLyBtYXAuc2V0KCdtYXBwaW5ncycsIHRoaXMubWFwcGluZ3MuY2hhbmdlcyk7XG4gICAgLy8gbWFwLnNldCgnbWV0YWRhdGEnLCB0aGlzLm1ldGFkYXRhLmNoYW5nZXMpO1xuICAgIC8vIG1hcC5zZXQoJ291dHB1dHMnLCB0aGlzLm91dHB1dHMuY2hhbmdlcyk7XG4gICAgLy8gbWFwLnNldCgncGFyYW1ldGVycycsIHRoaXMucGFyYW1ldGVycy5jaGFuZ2VzKTtcbiAgICAvLyBtYXAuc2V0KCdyZXNvdXJjZXMnLCB0aGlzLnJlc291cmNlcy5jaGFuZ2VzKTtcbiAgICAvL1xuICAgIC8vIG1hcC5zZXQoJ3Vua25vd24nLCB0aGlzLnVua25vd24uY2hhbmdlcyk7XG4gICAgLy8gcmV0dXJuIG1hcDtcbiAgfVxuXG4gIHN0YXRpYyBmcm9tTWFwKG1hcDogUHJvcGVydHlNYXApOiBUZW1wbGF0ZURpZmYge1xuICAgIHJldHVybiBuZXcgVGVtcGxhdGVEaWZmKHtcbiAgICAgIGRlc2NyaXB0aW9uOiBtYXAuZGVzY3JpcHRpb24sXG4gICAgICB0cmFuc2Zvcm06IG1hcC50cmFuc2Zvcm0sXG4gICAgICBjb25kaXRpb25zOiBuZXcgRGlmZmVyZW5jZUNvbGxlY3Rpb24obWFwLmNvbmRpdGlvbnMpLFxuICAgICAgbWFwcGluZ3M6IG5ldyBEaWZmZXJlbmNlQ29sbGVjdGlvbihtYXAubWFwcGluZ3MpLFxuICAgICAgbWV0YWRhdGE6IG5ldyBEaWZmZXJlbmNlQ29sbGVjdGlvbihtYXAubWV0YWRhdGEpLFxuICAgICAgb3V0cHV0czogbmV3IERpZmZlcmVuY2VDb2xsZWN0aW9uKG1hcC5vdXRwdXRzKSxcbiAgICAgIHBhcmFtZXRlcnM6IG5ldyBEaWZmZXJlbmNlQ29sbGVjdGlvbihtYXAucGFyYW1ldGVycyksXG4gICAgICByZXNvdXJjZXM6IG5ldyBEaWZmZXJlbmNlQ29sbGVjdGlvbihtYXAucmVzb3VyY2VzKSxcbiAgICAgIHVua25vd246IG5ldyBEaWZmZXJlbmNlQ29sbGVjdGlvbihtYXAudW5rbm93biksXG4gICAgfSk7XG4gIH1cbn1cblxuLyoqXG4gKiBBIGNoYW5nZSBpbiBwcm9wZXJ0eSB2YWx1ZXNcbiAqXG4gKiBOb3QgbmVjZXNzYXJpbHkgYW4gdXBkYXRlLCBpdCBjb3VsZCBiZSB0aGF0IHRoZXJlIHVzZWQgdG8gYmUgbm8gdmFsdWUgdGhlcmVcbiAqIGJlY2F1c2UgdGhlcmUgd2FzIG5vIHJlc291cmNlLCBhbmQgbm93IHRoZXJlIGlzIChvciB2aWNlIHZlcnNhKS5cbiAqXG4gKiBUaGVyZWZvcmUsIHdlIGp1c3QgY29udGFpbiBwbGFpbiB2YWx1ZXMgYW5kIG5vdCBhIFByb3BlcnR5RGlmZmVyZW5jZTxhbnk+LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFByb3BlcnR5Q2hhbmdlIHtcbiAgLyoqXG4gICAqIExvZ2ljYWwgSUQgb2YgdGhlIHJlc291cmNlIHdoZXJlIHRoaXMgcHJvcGVydHkgY2hhbmdlIHdhcyBmb3VuZFxuICAgKi9cbiAgcmVzb3VyY2VMb2dpY2FsSWQ6IHN0cmluZztcblxuICAvKipcbiAgICogVHlwZSBvZiB0aGUgcmVzb3VyY2VcbiAgICovXG4gIHJlc291cmNlVHlwZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBOYW1lIG9mIHRoZSBwcm9wZXJ0eSB0aGF0IGlzIGNoYW5naW5nXG4gICAqL1xuICBwcm9wZXJ0eU5hbWU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIG9sZCBwcm9wZXJ0eSB2YWx1ZVxuICAgKi9cbiAgb2xkVmFsdWU/OiBhbnk7XG5cbiAgLyoqXG4gICAqIFRoZSBuZXcgcHJvcGVydHkgdmFsdWVcbiAgICovXG4gIG5ld1ZhbHVlPzogYW55O1xufVxuXG4vKipcbiAqIEEgcmVzb3VyY2UgY2hhbmdlXG4gKlxuICogRWl0aGVyIGEgY3JlYXRpb24sIGRlbGV0aW9uIG9yIHVwZGF0ZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSZXNvdXJjZUNoYW5nZSB7XG4gIC8qKlxuICAgKiBMb2dpY2FsIElEIG9mIHRoZSByZXNvdXJjZSB3aGVyZSB0aGlzIHByb3BlcnR5IGNoYW5nZSB3YXMgZm91bmRcbiAgICovXG4gIHJlc291cmNlTG9naWNhbElkOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSB0eXBlIG9mIHRoZSByZXNvdXJjZVxuICAgKi9cbiAgcmVzb3VyY2VUeXBlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIFRoZSBvbGQgcHJvcGVydGllcyB2YWx1ZSAobWlnaHQgYmUgdW5kZWZpbmVkIGluIGNhc2Ugb2YgY3JlYXRpb24pXG4gICAqL1xuICBvbGRQcm9wZXJ0aWVzPzogUHJvcGVydHlNYXA7XG5cbiAgLyoqXG4gICAqIFRoZSBuZXcgcHJvcGVydGllcyB2YWx1ZSAobWlnaHQgYmUgdW5kZWZpbmVkIGluIGNhc2Ugb2YgZGVsZXRpb24pXG4gICAqL1xuICBuZXdQcm9wZXJ0aWVzPzogUHJvcGVydHlNYXA7XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSURpZmZlcmVuY2U8VmFsdWVUeXBlPiB7XG4gIHJlYWRvbmx5IG9sZFZhbHVlOiBWYWx1ZVR5cGUgfCB1bmRlZmluZWQ7XG4gIHJlYWRvbmx5IG5ld1ZhbHVlOiBWYWx1ZVR5cGUgfCB1bmRlZmluZWQ7XG4gIHJlYWRvbmx5IGlzRGlmZmVyZW50OiBib29sZWFuO1xuICByZWFkb25seSBpc0FkZGl0aW9uOiBib29sZWFuO1xuICByZWFkb25seSBpc1JlbW92YWw6IGJvb2xlYW47XG4gIHJlYWRvbmx5IGlzVXBkYXRlOiBib29sZWFuO1xufVxuXG4vKipcbiAqIE1vZGVscyBhbiBlbnRpdHkgdGhhdCBjaGFuZ2VkIGJldHdlZW4gdHdvIHZlcnNpb25zIG9mIGEgUk9TIHRlbXBsYXRlLlxuICovXG5leHBvcnQgY2xhc3MgRGlmZmVyZW5jZTxWYWx1ZVR5cGU+IGltcGxlbWVudHMgSURpZmZlcmVuY2U8VmFsdWVUeXBlPiB7XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoaXMgaXMgYW4gYWN0dWFsIGRpZmZlcmVudCBvciB0aGUgdmFsdWVzIGFyZSBhY3R1YWxseSB0aGUgc2FtZVxuICAgKlxuICAgKiBpc0RpZmZlcmVudCA9PiAoaXNVcGRhdGUgfCBpc1JlbW92ZWQgfCBpc1VwZGF0ZSlcbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBpc0RpZmZlcmVudDogYm9vbGVhbjtcblxuICAvKipcbiAgICogQHBhcmFtIG9sZFZhbHVlIHRoZSBvbGQgdmFsdWUsIGNhbm5vdCBiZSBlcXVhbCAodG8gdGhlIHNlbnNlIG9mICtkZWVwRXF1YWwrKSB0byArbmV3VmFsdWUrLlxuICAgKiBAcGFyYW0gbmV3VmFsdWUgdGhlIG5ldyB2YWx1ZSwgY2Fubm90IGJlIGVxdWFsICh0byB0aGUgc2Vuc2Ugb2YgK2RlZXBFcXVhbCspIHRvICtvbGRWYWx1ZSsuXG4gICAqL1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgb2xkVmFsdWU6IFZhbHVlVHlwZSB8IHVuZGVmaW5lZCwgcHVibGljIHJlYWRvbmx5IG5ld1ZhbHVlOiBWYWx1ZVR5cGUgfCB1bmRlZmluZWQpIHtcbiAgICBpZiAob2xkVmFsdWUgPT09IHVuZGVmaW5lZCAmJiBuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aHJvdyBuZXcgQXNzZXJ0aW9uRXJyb3IoeyBtZXNzYWdlOiAnb2xkVmFsdWUgYW5kIG5ld1ZhbHVlIGFyZSBib3RoIHVuZGVmaW5lZCEnIH0pO1xuICAgIH1cbiAgICB0aGlzLmlzRGlmZmVyZW50ID0gIWRlZXBFcXVhbChvbGRWYWx1ZSwgbmV3VmFsdWUpO1xuICB9XG5cbiAgLyoqIEByZXR1cm5zICt0cnVlKyBpZiB0aGUgZWxlbWVudCBpcyBuZXcgdG8gdGhlIHRlbXBsYXRlLiAqL1xuICBwdWJsaWMgZ2V0IGlzQWRkaXRpb24oKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMub2xkVmFsdWUgPT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKiBAcmV0dXJucyArdHJ1ZSsgaWYgdGhlIGVsZW1lbnQgd2FzIHJlbW92ZWQgZnJvbSB0aGUgdGVtcGxhdGUuICovXG4gIHB1YmxpYyBnZXQgaXNSZW1vdmFsKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm5ld1ZhbHVlID09PSB1bmRlZmluZWQ7XG4gIH1cblxuICAvKiogQHJldHVybnMgK3RydWUrIGlmIHRoZSBlbGVtZW50IHdhcyBhbHJlYWR5IGluIHRoZSB0ZW1wbGF0ZSBhbmQgaXMgdXBkYXRlZC4gKi9cbiAgcHVibGljIGdldCBpc1VwZGF0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5vbGRWYWx1ZSAhPT0gdW5kZWZpbmVkICYmIHRoaXMubmV3VmFsdWUgIT09IHVuZGVmaW5lZDtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEaWZmZXJlbmNlSW5zdGFuY2Uob2JqOiBhbnkpOiBvYmogaXMgRGlmZmVyZW5jZTxhbnk+IHtcbiAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIERpZmZlcmVuY2U7XG59XG5cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eURpZmZlcmVuY2U8VmFsdWVUeXBlPiBleHRlbmRzIERpZmZlcmVuY2U8VmFsdWVUeXBlPiB7XG4gIHB1YmxpYyByZWFkb25seSBjaGFuZ2VJbXBhY3Q/OiBSZXNvdXJjZUltcGFjdDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBvbGRWYWx1ZTogVmFsdWVUeXBlIHwgdW5kZWZpbmVkLFxuICAgIG5ld1ZhbHVlOiBWYWx1ZVR5cGUgfCB1bmRlZmluZWQsXG4gICAgYXJnczogeyBjaGFuZ2VJbXBhY3Q/OiBSZXNvdXJjZUltcGFjdCB9LFxuICApIHtcbiAgICBzdXBlcihvbGRWYWx1ZSwgbmV3VmFsdWUpO1xuICAgIHRoaXMuY2hhbmdlSW1wYWN0ID0gYXJncy5jaGFuZ2VJbXBhY3Q7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERpZmZlcmVuY2VDb2xsZWN0aW9uPFYsIFQgZXh0ZW5kcyBJRGlmZmVyZW5jZTxWPj4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRpZmZzOiB7IFtsb2dpY2FsSWQ6IHN0cmluZ106IFQgfSkge31cblxuICBwdWJsaWMgZ2V0IGNoYW5nZXMoKTogeyBbbG9naWNhbElkOiBzdHJpbmddOiBUIH0ge1xuICAgIHJldHVybiBvbmx5Q2hhbmdlcyh0aGlzLmRpZmZzKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGlmZmVyZW5jZUNvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5jaGFuZ2VzKS5sZW5ndGg7XG4gIH1cblxuICBwdWJsaWMgZ2V0KGxvZ2ljYWxJZDogc3RyaW5nKTogVCB7XG4gICAgY29uc3QgcmV0ID0gdGhpcy5kaWZmc1tsb2dpY2FsSWRdO1xuICAgIGlmICghcmV0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIG9iamVjdCB3aXRoIGxvZ2ljYWwgSUQgJyR7bG9naWNhbElkfSdgKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbG9naWNhbElkcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuY2hhbmdlcyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIG5ldyBUZW1wbGF0ZURpZmYgd2hpY2ggb25seSBjb250YWlucyBjaGFuZ2VzIGZvciB3aGljaCBgcHJlZGljYXRlYFxuICAgKiByZXR1cm5zIGB0cnVlYC5cbiAgICovXG4gIHB1YmxpYyBmaWx0ZXIocHJlZGljYXRlOiAoZGlmZjogVCB8IHVuZGVmaW5lZCkgPT4gYm9vbGVhbik6IERpZmZlcmVuY2VDb2xsZWN0aW9uPFYsIFQ+IHtcbiAgICBjb25zdCBuZXdDaGFuZ2VzOiB7IFtsb2dpY2FsSWQ6IHN0cmluZ106IFQgfSA9IHt9O1xuICAgIGZvciAoY29uc3QgaWQgb2YgT2JqZWN0LmtleXModGhpcy5jaGFuZ2VzKSkge1xuICAgICAgY29uc3QgZGlmZiA9IHRoaXMuY2hhbmdlc1tpZF07XG5cbiAgICAgIGlmIChwcmVkaWNhdGUoZGlmZikpIHtcbiAgICAgICAgbmV3Q2hhbmdlc1tpZF0gPSBkaWZmO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGlmZmVyZW5jZUNvbGxlY3Rpb248ViwgVD4obmV3Q2hhbmdlcyk7XG4gIH1cblxuICAvKipcbiAgICogSW52b2tlcyBgY2JgIGZvciBhbGwgY2hhbmdlcyBpbiB0aGlzIGNvbGxlY3Rpb24uXG4gICAqXG4gICAqIENoYW5nZXMgd2lsbCBiZSBzb3J0ZWQgYXMgZm9sbG93czpcbiAgICogIC0gUmVtb3ZlZFxuICAgKiAgLSBBZGRlZFxuICAgKiAgLSBVcGRhdGVkXG4gICAqICAtIE90aGVyc1xuICAgKlxuICAgKiBAcGFyYW0gY2JcbiAgICovXG4gIHB1YmxpYyBmb3JFYWNoRGlmZmVyZW5jZShjYjogKGxvZ2ljYWxJZDogc3RyaW5nLCBjaGFuZ2U6IFQpID0+IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IHJlbW92ZWQgPSBuZXcgQXJyYXk8eyBsb2dpY2FsSWQ6IHN0cmluZzsgY2hhbmdlOiBUIH0+KCk7XG4gICAgY29uc3QgYWRkZWQgPSBuZXcgQXJyYXk8eyBsb2dpY2FsSWQ6IHN0cmluZzsgY2hhbmdlOiBUIH0+KCk7XG4gICAgY29uc3QgdXBkYXRlZCA9IG5ldyBBcnJheTx7IGxvZ2ljYWxJZDogc3RyaW5nOyBjaGFuZ2U6IFQgfT4oKTtcbiAgICBjb25zdCBvdGhlcnMgPSBuZXcgQXJyYXk8eyBsb2dpY2FsSWQ6IHN0cmluZzsgY2hhbmdlOiBUIH0+KCk7XG5cbiAgICBmb3IgKGNvbnN0IGxvZ2ljYWxJZCBvZiB0aGlzLmxvZ2ljYWxJZHMpIHtcbiAgICAgIGNvbnN0IGNoYW5nZTogVCA9IHRoaXMuY2hhbmdlc1tsb2dpY2FsSWRdITtcbiAgICAgIGlmIChjaGFuZ2UuaXNBZGRpdGlvbikge1xuICAgICAgICBhZGRlZC5wdXNoKHsgbG9naWNhbElkLCBjaGFuZ2UgfSk7XG4gICAgICB9IGVsc2UgaWYgKGNoYW5nZS5pc1JlbW92YWwpIHtcbiAgICAgICAgcmVtb3ZlZC5wdXNoKHsgbG9naWNhbElkLCBjaGFuZ2UgfSk7XG4gICAgICB9IGVsc2UgaWYgKGNoYW5nZS5pc1VwZGF0ZSkge1xuICAgICAgICB1cGRhdGVkLnB1c2goeyBsb2dpY2FsSWQsIGNoYW5nZSB9KTtcbiAgICAgIH0gZWxzZSBpZiAoY2hhbmdlLmlzRGlmZmVyZW50KSB7XG4gICAgICAgIG90aGVycy5wdXNoKHsgbG9naWNhbElkLCBjaGFuZ2UgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlZC5mb3JFYWNoKCh2KSA9PiBjYih2LmxvZ2ljYWxJZCwgdi5jaGFuZ2UpKTtcbiAgICBhZGRlZC5mb3JFYWNoKCh2KSA9PiBjYih2LmxvZ2ljYWxJZCwgdi5jaGFuZ2UpKTtcbiAgICB1cGRhdGVkLmZvckVhY2goKHYpID0+IGNiKHYubG9naWNhbElkLCB2LmNoYW5nZSkpO1xuICAgIG90aGVycy5mb3JFYWNoKCh2KSA9PiBjYih2LmxvZ2ljYWxJZCwgdi5jaGFuZ2UpKTtcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNEaWZmZXJlbmNlQ29sbGVjdGlvbkluc3RhbmNlKG9iajogYW55KTogb2JqIGlzIERpZmZlcmVuY2VDb2xsZWN0aW9uPGFueSwgYW55PiB7XG4gIHJldHVybiBvYmogaW5zdGFuY2VvZiBEaWZmZXJlbmNlQ29sbGVjdGlvbjtcbn1cblxuLyoqXG4gKiBBcmd1bWVudHMgZXhwZWN0ZWQgYnkgdGhlIGNvbnN0cnVjdG9yIG9mICtUZW1wbGF0ZURpZmYrLCBleHRyYWN0ZWQgYXMgYW4gaW50ZXJmYWNlIGZvciB0aGUgc2FrZVxuICogb2YgKHJlbGF0aXZlKSBjb25jaXNlbmVzcyBvZiB0aGUgY29uc3RydWN0b3IncyBzaWduYXR1cmUuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVRlbXBsYXRlRGlmZiB7XG4gIGRlc2NyaXB0aW9uPzogSURpZmZlcmVuY2U8c3RyaW5nPjtcbiAgdHJhbnNmb3JtPzogSURpZmZlcmVuY2U8c3RyaW5nPjtcblxuICBjb25kaXRpb25zPzogRGlmZmVyZW5jZUNvbGxlY3Rpb248Q29uZGl0aW9uLCBDb25kaXRpb25EaWZmZXJlbmNlPjtcbiAgbWFwcGluZ3M/OiBEaWZmZXJlbmNlQ29sbGVjdGlvbjxNYXBwaW5nLCBNYXBwaW5nRGlmZmVyZW5jZT47XG4gIG1ldGFkYXRhPzogRGlmZmVyZW5jZUNvbGxlY3Rpb248TWV0YWRhdGEsIE1ldGFkYXRhRGlmZmVyZW5jZT47XG4gIG91dHB1dHM/OiBEaWZmZXJlbmNlQ29sbGVjdGlvbjxPdXRwdXQsIE91dHB1dERpZmZlcmVuY2U+O1xuICBwYXJhbWV0ZXJzPzogRGlmZmVyZW5jZUNvbGxlY3Rpb248UGFyYW1ldGVyLCBQYXJhbWV0ZXJEaWZmZXJlbmNlPjtcbiAgcmVzb3VyY2VzPzogRGlmZmVyZW5jZUNvbGxlY3Rpb248UmVzb3VyY2UsIFJlc291cmNlRGlmZmVyZW5jZT47XG5cbiAgdW5rbm93bj86IERpZmZlcmVuY2VDb2xsZWN0aW9uPGFueSwgSURpZmZlcmVuY2U8YW55Pj47XG59XG5cbmV4cG9ydCB0eXBlIENvbmRpdGlvbiA9IGFueTtcbmV4cG9ydCBjbGFzcyBDb25kaXRpb25EaWZmZXJlbmNlIGV4dGVuZHMgRGlmZmVyZW5jZTxDb25kaXRpb24+IHtcbiAgLy8gVE9ETzogZGVmaW5lIHNwZWNpZmljIGRpZmZlcmVuY2UgYXR0cmlidXRlc1xufVxuXG5leHBvcnQgdHlwZSBNYXBwaW5nID0gYW55O1xuZXhwb3J0IGNsYXNzIE1hcHBpbmdEaWZmZXJlbmNlIGV4dGVuZHMgRGlmZmVyZW5jZTxNYXBwaW5nPiB7XG4gIC8vIFRPRE86IGRlZmluZSBzcGVjaWZpYyBkaWZmZXJlbmNlIGF0dHJpYnV0ZXNcbn1cblxuZXhwb3J0IHR5cGUgTWV0YWRhdGEgPSBhbnk7XG5leHBvcnQgY2xhc3MgTWV0YWRhdGFEaWZmZXJlbmNlIGV4dGVuZHMgRGlmZmVyZW5jZTxNZXRhZGF0YT4ge1xuICAvLyBUT0RPOiBkZWZpbmUgc3BlY2lmaWMgZGlmZmVyZW5jZSBhdHRyaWJ1dGVzXG59XG5cbmV4cG9ydCB0eXBlIE91dHB1dCA9IGFueTtcbmV4cG9ydCBjbGFzcyBPdXRwdXREaWZmZXJlbmNlIGV4dGVuZHMgRGlmZmVyZW5jZTxPdXRwdXQ+IHtcbiAgLy8gVE9ETzogZGVmaW5lIHNwZWNpZmljIGRpZmZlcmVuY2UgYXR0cmlidXRlc1xufVxuXG5leHBvcnQgdHlwZSBQYXJhbWV0ZXIgPSBhbnk7XG5leHBvcnQgY2xhc3MgUGFyYW1ldGVyRGlmZmVyZW5jZSBleHRlbmRzIERpZmZlcmVuY2U8UGFyYW1ldGVyPiB7XG4gIC8vIFRPRE86IGRlZmluZSBzcGVjaWZpYyBkaWZmZXJlbmNlIGF0dHJpYnV0ZXNcbn1cblxuZXhwb3J0IGVudW0gUmVzb3VyY2VJbXBhY3Qge1xuICAvKiogVGhlIGV4aXN0aW5nIHBoeXNpY2FsIHJlc291cmNlIHdpbGwgYmUgdXBkYXRlZCAqL1xuICBXSUxMX1VQREFURSA9ICdXSUxMX1VQREFURScsXG4gIC8qKiBBIG5ldyBwaHlzaWNhbCByZXNvdXJjZSB3aWxsIGJlIGNyZWF0ZWQgKi9cbiAgV0lMTF9DUkVBVEUgPSAnV0lMTF9DUkVBVEUnLFxuICAvKiogVGhlIGV4aXN0aW5nIHBoeXNpY2FsIHJlc291cmNlIHdpbGwgYmUgcmVwbGFjZWQgKi9cbiAgV0lMTF9SRVBMQUNFID0gJ1dJTExfUkVQTEFDRScsXG4gIC8qKiBUaGUgZXhpc3RpbmcgcGh5c2ljYWwgcmVzb3VyY2UgbWF5IGJlIHJlcGxhY2VkICovXG4gIE1BWV9SRVBMQUNFID0gJ01BWV9SRVBMQUNFJyxcbiAgLyoqIFRoZSBleGlzdGluZyBwaHlzaWNhbCByZXNvdXJjZSB3aWxsIGJlIGRlc3Ryb3llZCAqL1xuICBXSUxMX0RFU1RST1kgPSAnV0lMTF9ERVNUUk9ZJyxcbiAgLyoqIFRoZSBleGlzdGluZyBwaHlzaWNhbCByZXNvdXJjZSB3aWxsIGJlIHJlbW92ZWQgZnJvbSBST1Mgc3VwZXJ2aXNpb24gKi9cbiAgV0lMTF9PUlBIQU4gPSAnV0lMTF9PUlBIQU4nLFxuICAvKiogVGhlcmUgaXMgbm8gY2hhbmdlIGluIHRoaXMgcmVzb3VyY2UgKi9cbiAgTk9fQ0hBTkdFID0gJ05PX0NIQU5HRScsXG59XG5cbi8qKlxuICogVGhpcyBmdW5jdGlvbiBjYW4gYmUgdXNlZCBhcyBhIHJlZHVjZXIgdG8gb2J0YWluIHRoZSByZXNvdXJjZS1sZXZlbCBpbXBhY3Qgb2YgYSBsaXN0XG4gKiBvZiBwcm9wZXJ0eS1sZXZlbCBpbXBhY3RzLlxuICogQHBhcmFtIG9uZSB0aGUgY3VycmVudCB3b3JzdCBpbXBhY3Qgc28gZmFyLlxuICogQHBhcmFtIHR3byB0aGUgbmV3IGltcGFjdCBiZWluZyBjb25zaWRlcmVkIChjYW4gYmUgdW5kZWZpbmVkLCBhcyB3ZSBtYXkgbm90IGFsd2F5cyBiZVxuICogICAgICBhYmxlIHRvIGRldGVybWluZSBzb21lIHBlcm9wZXJ0eSdzIGltcGFjdCkuXG4gKi9cbmZ1bmN0aW9uIHdvcnN0SW1wYWN0KG9uZTogUmVzb3VyY2VJbXBhY3QsIHR3bz86IFJlc291cmNlSW1wYWN0KTogUmVzb3VyY2VJbXBhY3Qge1xuICBpZiAoIXR3bykge1xuICAgIHJldHVybiBvbmU7XG4gIH1cbiAgY29uc3QgYmFkbmVzcyA9IHtcbiAgICBbUmVzb3VyY2VJbXBhY3QuTk9fQ0hBTkdFXTogMCxcbiAgICBbUmVzb3VyY2VJbXBhY3QuV0lMTF9VUERBVEVdOiAxLFxuICAgIFtSZXNvdXJjZUltcGFjdC5XSUxMX0NSRUFURV06IDIsXG4gICAgW1Jlc291cmNlSW1wYWN0LldJTExfT1JQSEFOXTogMyxcbiAgICBbUmVzb3VyY2VJbXBhY3QuTUFZX1JFUExBQ0VdOiA0LFxuICAgIFtSZXNvdXJjZUltcGFjdC5XSUxMX1JFUExBQ0VdOiA1LFxuICAgIFtSZXNvdXJjZUltcGFjdC5XSUxMX0RFU1RST1ldOiA2LFxuICB9O1xuICByZXR1cm4gYmFkbmVzc1tvbmVdID4gYmFkbmVzc1t0d29dID8gb25lIDogdHdvO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIFJlc291cmNlIHtcbiAgVHlwZTogc3RyaW5nO1xuICBQcm9wZXJ0aWVzPzogeyBbbmFtZTogc3RyaW5nXTogYW55IH07XG5cbiAgW2tleTogc3RyaW5nXTogYW55O1xufVxuXG4vKipcbiAqIENoYW5nZSB0byBhIHNpbmdsZSByZXNvdXJjZSBiZXR3ZWVuIHR3byBST1MgdGVtcGxhdGVzXG4gKlxuICogVGhpcyBjbGFzcyBjYW4gYmUgbXV0YXRlZCBhZnRlciBjb25zdHJ1Y3Rpb24uXG4gKi9cbmV4cG9ydCBjbGFzcyBSZXNvdXJjZURpZmZlcmVuY2UgaW1wbGVtZW50cyBJRGlmZmVyZW5jZTxSZXNvdXJjZT4ge1xuICAvKipcbiAgICogV2hldGhlciB0aGlzIHJlc291cmNlIHdhcyBhZGRlZFxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGlzQWRkaXRpb246IGJvb2xlYW47XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhpcyByZXNvdXJjZSB3YXMgcmVtb3ZlZFxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGlzUmVtb3ZhbDogYm9vbGVhbjtcblxuICAvKiogUHJvcGVydHktbGV2ZWwgY2hhbmdlcyBvbiB0aGUgcmVzb3VyY2UgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBwcm9wZXJ0eURpZmZzOiB7IFtrZXk6IHN0cmluZ106IFByb3BlcnR5RGlmZmVyZW5jZTxhbnk+IH07XG5cbiAgLyoqIENoYW5nZXMgdG8gbm9uLXByb3BlcnR5IGxldmVsIGF0dHJpYnV0ZXMgb2YgdGhlIHJlc291cmNlICovXG4gIHByaXZhdGUgcmVhZG9ubHkgb3RoZXJEaWZmczogeyBba2V5OiBzdHJpbmddOiBEaWZmZXJlbmNlPGFueT4gfTtcblxuICAvKiogVGhlIHJlc291cmNlIHR5cGUgKG9yIG9sZCBhbmQgbmV3IHR5cGUgaWYgaXQgaGFzIGNoYW5nZWQpICovXG4gIHByaXZhdGUgcmVhZG9ubHkgcmVzb3VyY2VUeXBlczogeyByZWFkb25seSBvbGRUeXBlPzogc3RyaW5nOyByZWFkb25seSBuZXdUeXBlPzogc3RyaW5nIH07XG5cbiAgY29uc3RydWN0b3IoXG4gICAgcHVibGljIHJlYWRvbmx5IG9sZFZhbHVlOiBSZXNvdXJjZSB8IHVuZGVmaW5lZCxcbiAgICBwdWJsaWMgcmVhZG9ubHkgbmV3VmFsdWU6IFJlc291cmNlIHwgdW5kZWZpbmVkLFxuICAgIGFyZ3M6IHtcbiAgICAgIHJlc291cmNlVHlwZTogeyBvbGRUeXBlPzogc3RyaW5nOyBuZXdUeXBlPzogc3RyaW5nIH07XG4gICAgICBwcm9wZXJ0eURpZmZzOiB7IFtrZXk6IHN0cmluZ106IFByb3BlcnR5RGlmZmVyZW5jZTxhbnk+IH07XG4gICAgICBvdGhlckRpZmZzOiB7IFtrZXk6IHN0cmluZ106IERpZmZlcmVuY2U8YW55PiB9O1xuICAgIH0sXG4gICkge1xuICAgIHRoaXMucmVzb3VyY2VUeXBlcyA9IGFyZ3MucmVzb3VyY2VUeXBlO1xuICAgIHRoaXMucHJvcGVydHlEaWZmcyA9IGFyZ3MucHJvcGVydHlEaWZmcztcbiAgICB0aGlzLm90aGVyRGlmZnMgPSBhcmdzLm90aGVyRGlmZnM7XG5cbiAgICB0aGlzLmlzQWRkaXRpb24gPSBvbGRWYWx1ZSA9PT0gdW5kZWZpbmVkO1xuICAgIHRoaXMuaXNSZW1vdmFsID0gbmV3VmFsdWUgPT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgb2xkUHJvcGVydGllcygpOiBQcm9wZXJ0eU1hcCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMub2xkVmFsdWUgJiYgdGhpcy5vbGRWYWx1ZS5Qcm9wZXJ0aWVzO1xuICB9XG5cbiAgcHVibGljIGdldCBuZXdQcm9wZXJ0aWVzKCk6IFByb3BlcnR5TWFwIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5uZXdWYWx1ZSAmJiB0aGlzLm5ld1ZhbHVlLlByb3BlcnRpZXM7XG4gIH1cblxuICAvKipcbiAgICogV2hldGhlciB0aGlzIHJlc291cmNlIHdhcyBtb2RpZmllZCBhdCBhbGxcbiAgICovXG4gIHB1YmxpYyBnZXQgaXNEaWZmZXJlbnQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGlmZmVyZW5jZUNvdW50ID4gMCB8fCB0aGlzLm9sZFJlc291cmNlVHlwZSAhPT0gdGhpcy5uZXdSZXNvdXJjZVR5cGU7XG4gIH1cblxuICAvKipcbiAgICogV2hldGhlciB0aGUgcmVzb3VyY2Ugd2FzIHVwZGF0ZWQgaW4tcGxhY2VcbiAgICovXG4gIHB1YmxpYyBnZXQgaXNVcGRhdGUoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuaXNEaWZmZXJlbnQgJiYgIXRoaXMuaXNBZGRpdGlvbiAmJiAhdGhpcy5pc1JlbW92YWw7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG9sZFJlc291cmNlVHlwZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLnJlc291cmNlVHlwZXMub2xkVHlwZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmV3UmVzb3VyY2VUeXBlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMucmVzb3VyY2VUeXBlcy5uZXdUeXBlO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbCBhY3R1YWwgcHJvcGVydHkgdXBkYXRlc1xuICAgKi9cbiAgcHVibGljIGdldCBwcm9wZXJ0eVVwZGF0ZXMoKTogeyBba2V5OiBzdHJpbmddOiBQcm9wZXJ0eURpZmZlcmVuY2U8YW55PiB9IHtcbiAgICByZXR1cm4gb25seUNoYW5nZXModGhpcy5wcm9wZXJ0eURpZmZzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGwgYWN0dWFsIFwib3RoZXJcIiB1cGRhdGVzXG4gICAqL1xuICBwdWJsaWMgZ2V0IG90aGVyQ2hhbmdlcygpOiB7IFtrZXk6IHN0cmluZ106IERpZmZlcmVuY2U8YW55PiB9IHtcbiAgICByZXR1cm4gb25seUNoYW5nZXModGhpcy5vdGhlckRpZmZzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gd2hldGhlciB0aGUgcmVzb3VyY2UgdHlwZSB3YXMgY2hhbmdlZCBpbiB0aGlzIGRpZmZcbiAgICpcbiAgICogVGhpcyBpcyBub3QgYSB2YWxpZCBvcGVyYXRpb24gaW4gUk9TIGJ1dCB0byBiZSBkZWZlbnNpdmUgd2UncmUgZ29pbmdcbiAgICogdG8gYmUgYXdhcmUgb2YgaXQgYW55d2F5LlxuICAgKi9cbiAgcHVibGljIGdldCByZXNvdXJjZVR5cGVDaGFuZ2VkKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiAoXG4gICAgICB0aGlzLnJlc291cmNlVHlwZXMub2xkVHlwZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICB0aGlzLnJlc291cmNlVHlwZXMubmV3VHlwZSAhPT0gdW5kZWZpbmVkICYmXG4gICAgICB0aGlzLnJlc291cmNlVHlwZXMub2xkVHlwZSAhPT0gdGhpcy5yZXNvdXJjZVR5cGVzLm5ld1R5cGVcbiAgICApO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB0aGUgcmVzb3VyY2UgdHlwZSBpZiBpdCB3YXMgdW5jaGFuZ2VkXG4gICAqXG4gICAqIElmIHRoZSByZXNvdXJjZSB0eXBlIHdhcyBjaGFuZ2VkLCBpdCdzIGFuIGVycm9yIHRvIGNhbGwgdGhpcy5cbiAgICovXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VUeXBlKCk6IHN0cmluZyB7XG4gICAgaWYgKHRoaXMucmVzb3VyY2VUeXBlQ2hhbmdlZCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgZ2V0IC5yZXNvdXJjZVR5cGUsIGJlY2F1c2UgdGhlIHR5cGUgd2FzIGNoYW5nZWQnKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMucmVzb3VyY2VUeXBlcy5vbGRUeXBlIHx8IHRoaXMucmVzb3VyY2VUeXBlcy5uZXdUeXBlITtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXBsYWNlIGEgUHJvcGVydHlDaGFuZ2UgaW4gdGhpcyBvYmplY3RcbiAgICpcbiAgICogVGhpcyBhZmZlY3RzIHRoZSBwcm9wZXJ0eSBkaWZmIGFzIGl0IGlzIHN1bW1hcml6ZWQgdG8gdXNlcnMsIGJ1dCBpdCBET0VTXG4gICAqIE5PVCBhZmZlY3QgZWl0aGVyIHRoZSBcIm9sZFZhbHVlXCIgb3IgXCJuZXdWYWx1ZVwiIHZhbHVlczsgdGhvc2Ugc3RpbGwgY29udGFpblxuICAgKiB0aGUgYWN0dWFsIHRlbXBsYXRlIHZhbHVlcyBhcyBwcm92aWRlZCBieSB0aGUgdXNlciAodGhleSBtaWdodCBzdGlsbCBiZVxuICAgKiB1c2VkIGZvciBkb3duc3RyZWFtIHByb2Nlc3NpbmcpLlxuICAgKi9cbiAgcHVibGljIHNldFByb3BlcnR5Q2hhbmdlKHByb3BlcnR5TmFtZTogc3RyaW5nLCBjaGFuZ2U6IFByb3BlcnR5RGlmZmVyZW5jZTxhbnk+KSB7XG4gICAgdGhpcy5wcm9wZXJ0eURpZmZzW3Byb3BlcnR5TmFtZV0gPSBjaGFuZ2U7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGNoYW5nZUltcGFjdCgpOiBSZXNvdXJjZUltcGFjdCB7XG4gICAgLy8gQ2hlY2sgdGhlIFR5cGUgZmlyc3RcbiAgICBpZiAodGhpcy5yZXNvdXJjZVR5cGVzLm9sZFR5cGUgIT09IHRoaXMucmVzb3VyY2VUeXBlcy5uZXdUeXBlKSB7XG4gICAgICBpZiAodGhpcy5yZXNvdXJjZVR5cGVzLm9sZFR5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gUmVzb3VyY2VJbXBhY3QuV0lMTF9DUkVBVEU7XG4gICAgICB9XG4gICAgICBpZiAodGhpcy5yZXNvdXJjZVR5cGVzLm5ld1R5cGUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gdGhpcy5vbGRWYWx1ZSEuRGVsZXRpb25Qb2xpY3kgPT09ICdSZXRhaW4nID8gUmVzb3VyY2VJbXBhY3QuV0lMTF9PUlBIQU4gOiBSZXNvdXJjZUltcGFjdC5XSUxMX0RFU1RST1k7XG4gICAgICB9XG4gICAgICByZXR1cm4gUmVzb3VyY2VJbXBhY3QuV0lMTF9SRVBMQUNFO1xuICAgIH1cblxuICAgIC8vIEJhc2UgaW1wYWN0IChiZWZvcmUgd2UgbWl4IGluIHRoZSB3b3JzdCBvZiB0aGUgcHJvcGVydHkgaW1wYWN0cyk7XG4gICAgLy8gV0lMTF9VUERBVEUgaWYgd2UgaGF2ZSBcIm90aGVyXCIgY2hhbmdlcywgTk9fQ0hBTkdFIGlmIHRoZXJlIGFyZSBubyBcIm90aGVyXCIgY2hhbmdlcy5cbiAgICBjb25zdCBiYXNlSW1wYWN0ID1cbiAgICAgIE9iamVjdC5rZXlzKHRoaXMub3RoZXJDaGFuZ2VzKS5sZW5ndGggPiAwID8gUmVzb3VyY2VJbXBhY3QuV0lMTF9VUERBVEUgOiBSZXNvdXJjZUltcGFjdC5OT19DSEFOR0U7XG5cbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLnByb3BlcnR5RGlmZnMpXG4gICAgICAubWFwKChlbHQpID0+IGVsdC5jaGFuZ2VJbXBhY3QpXG4gICAgICAucmVkdWNlKHdvcnN0SW1wYWN0LCBiYXNlSW1wYWN0KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBDb3VudCBvZiBhY3R1YWwgZGlmZmVyZW5jZXMgKG5vdCBvZiBlbGVtZW50cylcbiAgICovXG4gIHB1YmxpYyBnZXQgZGlmZmVyZW5jZUNvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5wcm9wZXJ0eVVwZGF0ZXMpLmxlbmd0aCArIE9iamVjdC52YWx1ZXModGhpcy5vdGhlckNoYW5nZXMpLmxlbmd0aDtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZva2UgYSBjYWxsYmFjayBmb3IgZWFjaCBhY3R1YWwgZGlmZmVyZW5jZVxuICAgKi9cbiAgcHVibGljIGZvckVhY2hEaWZmZXJlbmNlKFxuICAgIGNiOiAodHlwZTogJ1Byb3BlcnR5JyB8ICdPdGhlcicsIG5hbWU6IHN0cmluZywgdmFsdWU6IERpZmZlcmVuY2U8YW55PiB8IFByb3BlcnR5RGlmZmVyZW5jZTxhbnk+KSA9PiBhbnksXG4gICkge1xuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHRoaXMucHJvcGVydHlVcGRhdGVzKS5zb3J0KCkpIHtcbiAgICAgIGNiKCdQcm9wZXJ0eScsIGtleSwgdGhpcy5wcm9wZXJ0eVVwZGF0ZXNba2V5XSk7XG4gICAgfVxuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHRoaXMub3RoZXJDaGFuZ2VzKS5zb3J0KCkpIHtcbiAgICAgIGNiKCdPdGhlcicsIGtleSwgdGhpcy5vdGhlckRpZmZzW2tleV0pO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNQcm9wZXJ0eURpZmZlcmVuY2U8VD4oZGlmZjogRGlmZmVyZW5jZTxUPik6IGRpZmYgaXMgUHJvcGVydHlEaWZmZXJlbmNlPFQ+IHtcbiAgcmV0dXJuIChkaWZmIGFzIFByb3BlcnR5RGlmZmVyZW5jZTxUPikuY2hhbmdlSW1wYWN0ICE9PSB1bmRlZmluZWQ7XG59XG5cbi8qKlxuICogRmlsdGVyIGEgbWFwIG9mIElEaWZmZXJlbmNlcyBkb3duIHRvIG9ubHkgcmV0YWluIHRoZSBhY3R1YWwgY2hhbmdlc1xuICovXG5mdW5jdGlvbiBvbmx5Q2hhbmdlczxWLCBUIGV4dGVuZHMgSURpZmZlcmVuY2U8Vj4+KHhzOiB7IFtrZXk6IHN0cmluZ106IFQgfSk6IHsgW2tleTogc3RyaW5nXTogVCB9IHtcbiAgaWYgKHhzID09PSB1bmRlZmluZWQgfHwgeHMgPT09IG51bGwpIHtcbiAgICByZXR1cm4ge307XG4gIH1cbiAgY29uc3QgcmV0OiB7IFtrZXk6IHN0cmluZ106IFQgfSA9IHt9O1xuICBmb3IgKGNvbnN0IFtrZXksIGRpZmZdIG9mIE9iamVjdC5lbnRyaWVzKHhzKSkge1xuICAgIGlmIChkaWZmLmlzRGlmZmVyZW50KSB7XG4gICAgICByZXRba2V5XSA9IGRpZmY7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXQ7XG59XG4iXX0=