"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isPropertyDifference = exports.ResourceDifference = exports.ResourceImpact = exports.ParameterDifference = exports.OutputDifference = exports.MetadataDifference = exports.MappingDifference = exports.ConditionDifference = exports.DifferenceCollection = exports.PropertyDifference = exports.Difference = exports.TemplateDiff = void 0;
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
    const ret = {};
    for (const [key, diff] of Object.entries(xs)) {
        if (diff.isDifferent) {
            ret[key] = diff;
        }
    }
    return ret;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBd0M7QUFDeEMsaUNBQW1DO0FBSW5DLHNEQUFzRDtBQUN0RCxNQUFhLFlBQVk7SUFZdkIsWUFBWSxJQUFtQjtRQUM3QixJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUNyQztRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDaEUsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7SUFD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QUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDLElBQUksRUFBRSxFQUFFO1lBQ3ZELEVBQUUsQ0FBQyxPQUFPLEVBQUUsR0FBRyxFQUFFLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUN4QztJQUNILENBQUM7Q0FDRjtBQWpLRCxnREFpS0M7QUFFRCxTQUFnQixvQkFBb0IsQ0FBSSxJQUFtQjtJQUN6RCxPQUFRLElBQThCLENBQUMsWUFBWSxLQUFLLFNBQVMsQ0FBQztBQUNwRSxDQUFDO0FBRkQsb0RBRUM7QUFFRDs7R0FFRztBQUNILFNBQVMsV0FBVyxDQUE4QixFQUF3QjtJQUN4RSxNQUFNLEdBQUcsR0FBeUIsRUFBRSxDQUFDO0lBQ3JDLEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQzVDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ2pCO0tBQ0Y7SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBc3NlcnRpb25FcnJvciB9IGZyb20gJ2Fzc2VydCc7XG5pbXBvcnQgeyBkZWVwRXF1YWwgfSBmcm9tICcuL3V0aWwnO1xuXG5leHBvcnQgdHlwZSBQcm9wZXJ0eU1hcCA9IHsgW2tleTogc3RyaW5nXTogYW55IH07XG5cbi8qKiBTZW1hbnRpYyBkaWZmZXJlbmNlcyBiZXR3ZWVuIHR3byBST1MgdGVtcGxhdGVzLiAqL1xuZXhwb3J0IGNsYXNzIFRlbXBsYXRlRGlmZiBpbXBsZW1lbnRzIElUZW1wbGF0ZURpZmYge1xuICBwdWJsaWMgZGVzY3JpcHRpb24/OiBEaWZmZXJlbmNlPHN0cmluZz47XG4gIHB1YmxpYyB0cmFuc2Zvcm0/OiBEaWZmZXJlbmNlPHN0cmluZz47XG4gIHB1YmxpYyBjb25kaXRpb25zOiBEaWZmZXJlbmNlQ29sbGVjdGlvbjxDb25kaXRpb24sIENvbmRpdGlvbkRpZmZlcmVuY2U+O1xuICBwdWJsaWMgbWFwcGluZ3M6IERpZmZlcmVuY2VDb2xsZWN0aW9uPE1hcHBpbmcsIE1hcHBpbmdEaWZmZXJlbmNlPjtcbiAgcHVibGljIG1ldGFkYXRhOiBEaWZmZXJlbmNlQ29sbGVjdGlvbjxNZXRhZGF0YSwgTWV0YWRhdGFEaWZmZXJlbmNlPjtcbiAgcHVibGljIG91dHB1dHM6IERpZmZlcmVuY2VDb2xsZWN0aW9uPE91dHB1dCwgT3V0cHV0RGlmZmVyZW5jZT47XG4gIHB1YmxpYyBwYXJhbWV0ZXJzOiBEaWZmZXJlbmNlQ29sbGVjdGlvbjxQYXJhbWV0ZXIsIFBhcmFtZXRlckRpZmZlcmVuY2U+O1xuICBwdWJsaWMgcmVzb3VyY2VzOiBEaWZmZXJlbmNlQ29sbGVjdGlvbjxSZXNvdXJjZSwgUmVzb3VyY2VEaWZmZXJlbmNlPjtcbiAgLyoqIFRoZSBkaWZmZXJlbmNlcyBpbiB1bmtub3duL3VuZXhwZWN0ZWQgcGFydHMgb2YgdGhlIHRlbXBsYXRlICovXG4gIHB1YmxpYyB1bmtub3duOiBEaWZmZXJlbmNlQ29sbGVjdGlvbjxhbnksIERpZmZlcmVuY2U8YW55Pj47XG5cbiAgY29uc3RydWN0b3IoYXJnczogSVRlbXBsYXRlRGlmZikge1xuICAgIGlmIChhcmdzLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBhcmdzLmRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBpZiAoYXJncy50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy50cmFuc2Zvcm0gPSBhcmdzLnRyYW5zZm9ybTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbmRpdGlvbnMgPSBhcmdzLmNvbmRpdGlvbnMgfHwgbmV3IERpZmZlcmVuY2VDb2xsZWN0aW9uKHt9KTtcbiAgICB0aGlzLm1hcHBpbmdzID0gYXJncy5tYXBwaW5ncyB8fCBuZXcgRGlmZmVyZW5jZUNvbGxlY3Rpb24oe30pO1xuICAgIHRoaXMubWV0YWRhdGEgPSBhcmdzLm1ldGFkYXRhIHx8IG5ldyBEaWZmZXJlbmNlQ29sbGVjdGlvbih7fSk7XG4gICAgdGhpcy5vdXRwdXRzID0gYXJncy5vdXRwdXRzIHx8IG5ldyBEaWZmZXJlbmNlQ29sbGVjdGlvbih7fSk7XG4gICAgdGhpcy5wYXJhbWV0ZXJzID0gYXJncy5wYXJhbWV0ZXJzIHx8IG5ldyBEaWZmZXJlbmNlQ29sbGVjdGlvbih7fSk7XG4gICAgdGhpcy5yZXNvdXJjZXMgPSBhcmdzLnJlc291cmNlcyB8fCBuZXcgRGlmZmVyZW5jZUNvbGxlY3Rpb24oe30pO1xuICAgIHRoaXMudW5rbm93biA9IGFyZ3MudW5rbm93biB8fCBuZXcgRGlmZmVyZW5jZUNvbGxlY3Rpb24oe30pO1xuICB9XG5cbiAgcHVibGljIGdldCBkaWZmZXJlbmNlQ291bnQoKSB7XG4gICAgbGV0IGNvdW50ID0gMDtcblxuICAgIGlmICh0aGlzLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvdW50ICs9IDE7XG4gICAgfVxuICAgIGlmICh0aGlzLnRyYW5zZm9ybSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBjb3VudCArPSAxO1xuICAgIH1cblxuICAgIGNvdW50ICs9IHRoaXMuY29uZGl0aW9ucy5kaWZmZXJlbmNlQ291bnQ7XG4gICAgY291bnQgKz0gdGhpcy5tYXBwaW5ncy5kaWZmZXJlbmNlQ291bnQ7XG4gICAgY291bnQgKz0gdGhpcy5tZXRhZGF0YS5kaWZmZXJlbmNlQ291bnQ7XG4gICAgY291bnQgKz0gdGhpcy5vdXRwdXRzLmRpZmZlcmVuY2VDb3VudDtcbiAgICBjb3VudCArPSB0aGlzLnBhcmFtZXRlcnMuZGlmZmVyZW5jZUNvdW50O1xuICAgIGNvdW50ICs9IHRoaXMucmVzb3VyY2VzLmRpZmZlcmVuY2VDb3VudDtcbiAgICBjb3VudCArPSB0aGlzLnVua25vd24uZGlmZmVyZW5jZUNvdW50O1xuXG4gICAgcmV0dXJuIGNvdW50O1xuICB9XG5cbiAgcHVibGljIGdldCBpc0VtcHR5KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRpZmZlcmVuY2VDb3VudCA9PT0gMDtcbiAgfVxufVxuXG4vKipcbiAqIEEgY2hhbmdlIGluIHByb3BlcnR5IHZhbHVlc1xuICpcbiAqIE5vdCBuZWNlc3NhcmlseSBhbiB1cGRhdGUsIGl0IGNvdWxkIGJlIHRoYXQgdGhlcmUgdXNlZCB0byBiZSBubyB2YWx1ZSB0aGVyZVxuICogYmVjYXVzZSB0aGVyZSB3YXMgbm8gcmVzb3VyY2UsIGFuZCBub3cgdGhlcmUgaXMgKG9yIHZpY2UgdmVyc2EpLlxuICpcbiAqIFRoZXJlZm9yZSwgd2UganVzdCBjb250YWluIHBsYWluIHZhbHVlcyBhbmQgbm90IGEgUHJvcGVydHlEaWZmZXJlbmNlPGFueT4uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcGVydHlDaGFuZ2Uge1xuICAvKipcbiAgICogTG9naWNhbCBJRCBvZiB0aGUgcmVzb3VyY2Ugd2hlcmUgdGhpcyBwcm9wZXJ0eSBjaGFuZ2Ugd2FzIGZvdW5kXG4gICAqL1xuICByZXNvdXJjZUxvZ2ljYWxJZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUeXBlIG9mIHRoZSByZXNvdXJjZVxuICAgKi9cbiAgcmVzb3VyY2VUeXBlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE5hbWUgb2YgdGhlIHByb3BlcnR5IHRoYXQgaXMgY2hhbmdpbmdcbiAgICovXG4gIHByb3BlcnR5TmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgb2xkIHByb3BlcnR5IHZhbHVlXG4gICAqL1xuICBvbGRWYWx1ZT86IGFueTtcblxuICAvKipcbiAgICogVGhlIG5ldyBwcm9wZXJ0eSB2YWx1ZVxuICAgKi9cbiAgbmV3VmFsdWU/OiBhbnk7XG59XG5cbi8qKlxuICogQSByZXNvdXJjZSBjaGFuZ2VcbiAqXG4gKiBFaXRoZXIgYSBjcmVhdGlvbiwgZGVsZXRpb24gb3IgdXBkYXRlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJlc291cmNlQ2hhbmdlIHtcbiAgLyoqXG4gICAqIExvZ2ljYWwgSUQgb2YgdGhlIHJlc291cmNlIHdoZXJlIHRoaXMgcHJvcGVydHkgY2hhbmdlIHdhcyBmb3VuZFxuICAgKi9cbiAgcmVzb3VyY2VMb2dpY2FsSWQ6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHR5cGUgb2YgdGhlIHJlc291cmNlXG4gICAqL1xuICByZXNvdXJjZVR5cGU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIG9sZCBwcm9wZXJ0aWVzIHZhbHVlIChtaWdodCBiZSB1bmRlZmluZWQgaW4gY2FzZSBvZiBjcmVhdGlvbilcbiAgICovXG4gIG9sZFByb3BlcnRpZXM/OiBQcm9wZXJ0eU1hcDtcblxuICAvKipcbiAgICogVGhlIG5ldyBwcm9wZXJ0aWVzIHZhbHVlIChtaWdodCBiZSB1bmRlZmluZWQgaW4gY2FzZSBvZiBkZWxldGlvbilcbiAgICovXG4gIG5ld1Byb3BlcnRpZXM/OiBQcm9wZXJ0eU1hcDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGlmZmVyZW5jZTxWYWx1ZVR5cGU+IHtcbiAgcmVhZG9ubHkgb2xkVmFsdWU6IFZhbHVlVHlwZSB8IHVuZGVmaW5lZDtcbiAgcmVhZG9ubHkgbmV3VmFsdWU6IFZhbHVlVHlwZSB8IHVuZGVmaW5lZDtcbiAgcmVhZG9ubHkgaXNEaWZmZXJlbnQ6IGJvb2xlYW47XG4gIHJlYWRvbmx5IGlzQWRkaXRpb246IGJvb2xlYW47XG4gIHJlYWRvbmx5IGlzUmVtb3ZhbDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgaXNVcGRhdGU6IGJvb2xlYW47XG59XG5cbi8qKlxuICogTW9kZWxzIGFuIGVudGl0eSB0aGF0IGNoYW5nZWQgYmV0d2VlbiB0d28gdmVyc2lvbnMgb2YgYSBST1MgdGVtcGxhdGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBEaWZmZXJlbmNlPFZhbHVlVHlwZT4gaW1wbGVtZW50cyBJRGlmZmVyZW5jZTxWYWx1ZVR5cGU+IHtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhpcyBpcyBhbiBhY3R1YWwgZGlmZmVyZW50IG9yIHRoZSB2YWx1ZXMgYXJlIGFjdHVhbGx5IHRoZSBzYW1lXG4gICAqXG4gICAqIGlzRGlmZmVyZW50ID0+IChpc1VwZGF0ZSB8IGlzUmVtb3ZlZCB8IGlzVXBkYXRlKVxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGlzRGlmZmVyZW50OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gb2xkVmFsdWUgdGhlIG9sZCB2YWx1ZSwgY2Fubm90IGJlIGVxdWFsICh0byB0aGUgc2Vuc2Ugb2YgK2RlZXBFcXVhbCspIHRvICtuZXdWYWx1ZSsuXG4gICAqIEBwYXJhbSBuZXdWYWx1ZSB0aGUgbmV3IHZhbHVlLCBjYW5ub3QgYmUgZXF1YWwgKHRvIHRoZSBzZW5zZSBvZiArZGVlcEVxdWFsKykgdG8gK29sZFZhbHVlKy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBvbGRWYWx1ZTogVmFsdWVUeXBlIHwgdW5kZWZpbmVkLCBwdWJsaWMgcmVhZG9ubHkgbmV3VmFsdWU6IFZhbHVlVHlwZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmIChvbGRWYWx1ZSA9PT0gdW5kZWZpbmVkICYmIG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBBc3NlcnRpb25FcnJvcih7IG1lc3NhZ2U6ICdvbGRWYWx1ZSBhbmQgbmV3VmFsdWUgYXJlIGJvdGggdW5kZWZpbmVkIScgfSk7XG4gICAgfVxuICAgIHRoaXMuaXNEaWZmZXJlbnQgPSAhZGVlcEVxdWFsKG9sZFZhbHVlLCBuZXdWYWx1ZSk7XG4gIH1cblxuICAvKiogQHJldHVybnMgK3RydWUrIGlmIHRoZSBlbGVtZW50IGlzIG5ldyB0byB0aGUgdGVtcGxhdGUuICovXG4gIHB1YmxpYyBnZXQgaXNBZGRpdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5vbGRWYWx1ZSA9PT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqIEByZXR1cm5zICt0cnVlKyBpZiB0aGUgZWxlbWVudCB3YXMgcmVtb3ZlZCBmcm9tIHRoZSB0ZW1wbGF0ZS4gKi9cbiAgcHVibGljIGdldCBpc1JlbW92YWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubmV3VmFsdWUgPT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKiBAcmV0dXJucyArdHJ1ZSsgaWYgdGhlIGVsZW1lbnQgd2FzIGFscmVhZHkgaW4gdGhlIHRlbXBsYXRlIGFuZCBpcyB1cGRhdGVkLiAqL1xuICBwdWJsaWMgZ2V0IGlzVXBkYXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm9sZFZhbHVlICE9PSB1bmRlZmluZWQgJiYgdGhpcy5uZXdWYWx1ZSAhPT0gdW5kZWZpbmVkO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBQcm9wZXJ0eURpZmZlcmVuY2U8VmFsdWVUeXBlPiBleHRlbmRzIERpZmZlcmVuY2U8VmFsdWVUeXBlPiB7XG4gIHB1YmxpYyByZWFkb25seSBjaGFuZ2VJbXBhY3Q/OiBSZXNvdXJjZUltcGFjdDtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBvbGRWYWx1ZTogVmFsdWVUeXBlIHwgdW5kZWZpbmVkLFxuICAgIG5ld1ZhbHVlOiBWYWx1ZVR5cGUgfCB1bmRlZmluZWQsXG4gICAgYXJnczogeyBjaGFuZ2VJbXBhY3Q/OiBSZXNvdXJjZUltcGFjdCB9LFxuICApIHtcbiAgICBzdXBlcihvbGRWYWx1ZSwgbmV3VmFsdWUpO1xuICAgIHRoaXMuY2hhbmdlSW1wYWN0ID0gYXJncy5jaGFuZ2VJbXBhY3Q7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIERpZmZlcmVuY2VDb2xsZWN0aW9uPFYsIFQgZXh0ZW5kcyBJRGlmZmVyZW5jZTxWPj4ge1xuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHJlYWRvbmx5IGRpZmZzOiB7IFtsb2dpY2FsSWQ6IHN0cmluZ106IFQgfSkge31cblxuICBwdWJsaWMgZ2V0IGNoYW5nZXMoKTogeyBbbG9naWNhbElkOiBzdHJpbmddOiBUIH0ge1xuICAgIHJldHVybiBvbmx5Q2hhbmdlcyh0aGlzLmRpZmZzKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgZGlmZmVyZW5jZUNvdW50KCk6IG51bWJlciB7XG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5jaGFuZ2VzKS5sZW5ndGg7XG4gIH1cblxuICBwdWJsaWMgZ2V0KGxvZ2ljYWxJZDogc3RyaW5nKTogVCB7XG4gICAgY29uc3QgcmV0ID0gdGhpcy5kaWZmc1tsb2dpY2FsSWRdO1xuICAgIGlmICghcmV0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYE5vIG9iamVjdCB3aXRoIGxvZ2ljYWwgSUQgJyR7bG9naWNhbElkfSdgKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbG9naWNhbElkcygpOiBzdHJpbmdbXSB7XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHRoaXMuY2hhbmdlcyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJucyBhIG5ldyBUZW1wbGF0ZURpZmYgd2hpY2ggb25seSBjb250YWlucyBjaGFuZ2VzIGZvciB3aGljaCBgcHJlZGljYXRlYFxuICAgKiByZXR1cm5zIGB0cnVlYC5cbiAgICovXG4gIHB1YmxpYyBmaWx0ZXIocHJlZGljYXRlOiAoZGlmZjogVCB8IHVuZGVmaW5lZCkgPT4gYm9vbGVhbik6IERpZmZlcmVuY2VDb2xsZWN0aW9uPFYsIFQ+IHtcbiAgICBjb25zdCBuZXdDaGFuZ2VzOiB7IFtsb2dpY2FsSWQ6IHN0cmluZ106IFQgfSA9IHt9O1xuICAgIGZvciAoY29uc3QgaWQgb2YgT2JqZWN0LmtleXModGhpcy5jaGFuZ2VzKSkge1xuICAgICAgY29uc3QgZGlmZiA9IHRoaXMuY2hhbmdlc1tpZF07XG5cbiAgICAgIGlmIChwcmVkaWNhdGUoZGlmZikpIHtcbiAgICAgICAgbmV3Q2hhbmdlc1tpZF0gPSBkaWZmO1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgRGlmZmVyZW5jZUNvbGxlY3Rpb248ViwgVD4obmV3Q2hhbmdlcyk7XG4gIH1cblxuICAvKipcbiAgICogSW52b2tlcyBgY2JgIGZvciBhbGwgY2hhbmdlcyBpbiB0aGlzIGNvbGxlY3Rpb24uXG4gICAqXG4gICAqIENoYW5nZXMgd2lsbCBiZSBzb3J0ZWQgYXMgZm9sbG93czpcbiAgICogIC0gUmVtb3ZlZFxuICAgKiAgLSBBZGRlZFxuICAgKiAgLSBVcGRhdGVkXG4gICAqICAtIE90aGVyc1xuICAgKlxuICAgKiBAcGFyYW0gY2JcbiAgICovXG4gIHB1YmxpYyBmb3JFYWNoRGlmZmVyZW5jZShjYjogKGxvZ2ljYWxJZDogc3RyaW5nLCBjaGFuZ2U6IFQpID0+IGFueSk6IHZvaWQge1xuICAgIGNvbnN0IHJlbW92ZWQgPSBuZXcgQXJyYXk8eyBsb2dpY2FsSWQ6IHN0cmluZzsgY2hhbmdlOiBUIH0+KCk7XG4gICAgY29uc3QgYWRkZWQgPSBuZXcgQXJyYXk8eyBsb2dpY2FsSWQ6IHN0cmluZzsgY2hhbmdlOiBUIH0+KCk7XG4gICAgY29uc3QgdXBkYXRlZCA9IG5ldyBBcnJheTx7IGxvZ2ljYWxJZDogc3RyaW5nOyBjaGFuZ2U6IFQgfT4oKTtcbiAgICBjb25zdCBvdGhlcnMgPSBuZXcgQXJyYXk8eyBsb2dpY2FsSWQ6IHN0cmluZzsgY2hhbmdlOiBUIH0+KCk7XG5cbiAgICBmb3IgKGNvbnN0IGxvZ2ljYWxJZCBvZiB0aGlzLmxvZ2ljYWxJZHMpIHtcbiAgICAgIGNvbnN0IGNoYW5nZTogVCA9IHRoaXMuY2hhbmdlc1tsb2dpY2FsSWRdITtcbiAgICAgIGlmIChjaGFuZ2UuaXNBZGRpdGlvbikge1xuICAgICAgICBhZGRlZC5wdXNoKHsgbG9naWNhbElkLCBjaGFuZ2UgfSk7XG4gICAgICB9IGVsc2UgaWYgKGNoYW5nZS5pc1JlbW92YWwpIHtcbiAgICAgICAgcmVtb3ZlZC5wdXNoKHsgbG9naWNhbElkLCBjaGFuZ2UgfSk7XG4gICAgICB9IGVsc2UgaWYgKGNoYW5nZS5pc1VwZGF0ZSkge1xuICAgICAgICB1cGRhdGVkLnB1c2goeyBsb2dpY2FsSWQsIGNoYW5nZSB9KTtcbiAgICAgIH0gZWxzZSBpZiAoY2hhbmdlLmlzRGlmZmVyZW50KSB7XG4gICAgICAgIG90aGVycy5wdXNoKHsgbG9naWNhbElkLCBjaGFuZ2UgfSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmVtb3ZlZC5mb3JFYWNoKCh2KSA9PiBjYih2LmxvZ2ljYWxJZCwgdi5jaGFuZ2UpKTtcbiAgICBhZGRlZC5mb3JFYWNoKCh2KSA9PiBjYih2LmxvZ2ljYWxJZCwgdi5jaGFuZ2UpKTtcbiAgICB1cGRhdGVkLmZvckVhY2goKHYpID0+IGNiKHYubG9naWNhbElkLCB2LmNoYW5nZSkpO1xuICAgIG90aGVycy5mb3JFYWNoKCh2KSA9PiBjYih2LmxvZ2ljYWxJZCwgdi5jaGFuZ2UpKTtcbiAgfVxufVxuXG4vKipcbiAqIEFyZ3VtZW50cyBleHBlY3RlZCBieSB0aGUgY29uc3RydWN0b3Igb2YgK1RlbXBsYXRlRGlmZissIGV4dHJhY3RlZCBhcyBhbiBpbnRlcmZhY2UgZm9yIHRoZSBzYWtlXG4gKiBvZiAocmVsYXRpdmUpIGNvbmNpc2VuZXNzIG9mIHRoZSBjb25zdHJ1Y3RvcidzIHNpZ25hdHVyZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJVGVtcGxhdGVEaWZmIHtcbiAgZGVzY3JpcHRpb24/OiBJRGlmZmVyZW5jZTxzdHJpbmc+O1xuICB0cmFuc2Zvcm0/OiBJRGlmZmVyZW5jZTxzdHJpbmc+O1xuXG4gIGNvbmRpdGlvbnM/OiBEaWZmZXJlbmNlQ29sbGVjdGlvbjxDb25kaXRpb24sIENvbmRpdGlvbkRpZmZlcmVuY2U+O1xuICBtYXBwaW5ncz86IERpZmZlcmVuY2VDb2xsZWN0aW9uPE1hcHBpbmcsIE1hcHBpbmdEaWZmZXJlbmNlPjtcbiAgbWV0YWRhdGE/OiBEaWZmZXJlbmNlQ29sbGVjdGlvbjxNZXRhZGF0YSwgTWV0YWRhdGFEaWZmZXJlbmNlPjtcbiAgb3V0cHV0cz86IERpZmZlcmVuY2VDb2xsZWN0aW9uPE91dHB1dCwgT3V0cHV0RGlmZmVyZW5jZT47XG4gIHBhcmFtZXRlcnM/OiBEaWZmZXJlbmNlQ29sbGVjdGlvbjxQYXJhbWV0ZXIsIFBhcmFtZXRlckRpZmZlcmVuY2U+O1xuICByZXNvdXJjZXM/OiBEaWZmZXJlbmNlQ29sbGVjdGlvbjxSZXNvdXJjZSwgUmVzb3VyY2VEaWZmZXJlbmNlPjtcblxuICB1bmtub3duPzogRGlmZmVyZW5jZUNvbGxlY3Rpb248YW55LCBJRGlmZmVyZW5jZTxhbnk+Pjtcbn1cblxuZXhwb3J0IHR5cGUgQ29uZGl0aW9uID0gYW55O1xuZXhwb3J0IGNsYXNzIENvbmRpdGlvbkRpZmZlcmVuY2UgZXh0ZW5kcyBEaWZmZXJlbmNlPENvbmRpdGlvbj4ge1xuICAvLyBUT0RPOiBkZWZpbmUgc3BlY2lmaWMgZGlmZmVyZW5jZSBhdHRyaWJ1dGVzXG59XG5cbmV4cG9ydCB0eXBlIE1hcHBpbmcgPSBhbnk7XG5leHBvcnQgY2xhc3MgTWFwcGluZ0RpZmZlcmVuY2UgZXh0ZW5kcyBEaWZmZXJlbmNlPE1hcHBpbmc+IHtcbiAgLy8gVE9ETzogZGVmaW5lIHNwZWNpZmljIGRpZmZlcmVuY2UgYXR0cmlidXRlc1xufVxuXG5leHBvcnQgdHlwZSBNZXRhZGF0YSA9IGFueTtcbmV4cG9ydCBjbGFzcyBNZXRhZGF0YURpZmZlcmVuY2UgZXh0ZW5kcyBEaWZmZXJlbmNlPE1ldGFkYXRhPiB7XG4gIC8vIFRPRE86IGRlZmluZSBzcGVjaWZpYyBkaWZmZXJlbmNlIGF0dHJpYnV0ZXNcbn1cblxuZXhwb3J0IHR5cGUgT3V0cHV0ID0gYW55O1xuZXhwb3J0IGNsYXNzIE91dHB1dERpZmZlcmVuY2UgZXh0ZW5kcyBEaWZmZXJlbmNlPE91dHB1dD4ge1xuICAvLyBUT0RPOiBkZWZpbmUgc3BlY2lmaWMgZGlmZmVyZW5jZSBhdHRyaWJ1dGVzXG59XG5cbmV4cG9ydCB0eXBlIFBhcmFtZXRlciA9IGFueTtcbmV4cG9ydCBjbGFzcyBQYXJhbWV0ZXJEaWZmZXJlbmNlIGV4dGVuZHMgRGlmZmVyZW5jZTxQYXJhbWV0ZXI+IHtcbiAgLy8gVE9ETzogZGVmaW5lIHNwZWNpZmljIGRpZmZlcmVuY2UgYXR0cmlidXRlc1xufVxuXG5leHBvcnQgZW51bSBSZXNvdXJjZUltcGFjdCB7XG4gIC8qKiBUaGUgZXhpc3RpbmcgcGh5c2ljYWwgcmVzb3VyY2Ugd2lsbCBiZSB1cGRhdGVkICovXG4gIFdJTExfVVBEQVRFID0gJ1dJTExfVVBEQVRFJyxcbiAgLyoqIEEgbmV3IHBoeXNpY2FsIHJlc291cmNlIHdpbGwgYmUgY3JlYXRlZCAqL1xuICBXSUxMX0NSRUFURSA9ICdXSUxMX0NSRUFURScsXG4gIC8qKiBUaGUgZXhpc3RpbmcgcGh5c2ljYWwgcmVzb3VyY2Ugd2lsbCBiZSByZXBsYWNlZCAqL1xuICBXSUxMX1JFUExBQ0UgPSAnV0lMTF9SRVBMQUNFJyxcbiAgLyoqIFRoZSBleGlzdGluZyBwaHlzaWNhbCByZXNvdXJjZSBtYXkgYmUgcmVwbGFjZWQgKi9cbiAgTUFZX1JFUExBQ0UgPSAnTUFZX1JFUExBQ0UnLFxuICAvKiogVGhlIGV4aXN0aW5nIHBoeXNpY2FsIHJlc291cmNlIHdpbGwgYmUgZGVzdHJveWVkICovXG4gIFdJTExfREVTVFJPWSA9ICdXSUxMX0RFU1RST1knLFxuICAvKiogVGhlIGV4aXN0aW5nIHBoeXNpY2FsIHJlc291cmNlIHdpbGwgYmUgcmVtb3ZlZCBmcm9tIFJPUyBzdXBlcnZpc2lvbiAqL1xuICBXSUxMX09SUEhBTiA9ICdXSUxMX09SUEhBTicsXG4gIC8qKiBUaGVyZSBpcyBubyBjaGFuZ2UgaW4gdGhpcyByZXNvdXJjZSAqL1xuICBOT19DSEFOR0UgPSAnTk9fQ0hBTkdFJyxcbn1cblxuLyoqXG4gKiBUaGlzIGZ1bmN0aW9uIGNhbiBiZSB1c2VkIGFzIGEgcmVkdWNlciB0byBvYnRhaW4gdGhlIHJlc291cmNlLWxldmVsIGltcGFjdCBvZiBhIGxpc3RcbiAqIG9mIHByb3BlcnR5LWxldmVsIGltcGFjdHMuXG4gKiBAcGFyYW0gb25lIHRoZSBjdXJyZW50IHdvcnN0IGltcGFjdCBzbyBmYXIuXG4gKiBAcGFyYW0gdHdvIHRoZSBuZXcgaW1wYWN0IGJlaW5nIGNvbnNpZGVyZWQgKGNhbiBiZSB1bmRlZmluZWQsIGFzIHdlIG1heSBub3QgYWx3YXlzIGJlXG4gKiAgICAgIGFibGUgdG8gZGV0ZXJtaW5lIHNvbWUgcGVyb3BlcnR5J3MgaW1wYWN0KS5cbiAqL1xuZnVuY3Rpb24gd29yc3RJbXBhY3Qob25lOiBSZXNvdXJjZUltcGFjdCwgdHdvPzogUmVzb3VyY2VJbXBhY3QpOiBSZXNvdXJjZUltcGFjdCB7XG4gIGlmICghdHdvKSB7XG4gICAgcmV0dXJuIG9uZTtcbiAgfVxuICBjb25zdCBiYWRuZXNzID0ge1xuICAgIFtSZXNvdXJjZUltcGFjdC5OT19DSEFOR0VdOiAwLFxuICAgIFtSZXNvdXJjZUltcGFjdC5XSUxMX1VQREFURV06IDEsXG4gICAgW1Jlc291cmNlSW1wYWN0LldJTExfQ1JFQVRFXTogMixcbiAgICBbUmVzb3VyY2VJbXBhY3QuV0lMTF9PUlBIQU5dOiAzLFxuICAgIFtSZXNvdXJjZUltcGFjdC5NQVlfUkVQTEFDRV06IDQsXG4gICAgW1Jlc291cmNlSW1wYWN0LldJTExfUkVQTEFDRV06IDUsXG4gICAgW1Jlc291cmNlSW1wYWN0LldJTExfREVTVFJPWV06IDYsXG4gIH07XG4gIHJldHVybiBiYWRuZXNzW29uZV0gPiBiYWRuZXNzW3R3b10gPyBvbmUgOiB0d287XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgUmVzb3VyY2Uge1xuICBUeXBlOiBzdHJpbmc7XG4gIFByb3BlcnRpZXM/OiB7IFtuYW1lOiBzdHJpbmddOiBhbnkgfTtcblxuICBba2V5OiBzdHJpbmddOiBhbnk7XG59XG5cbi8qKlxuICogQ2hhbmdlIHRvIGEgc2luZ2xlIHJlc291cmNlIGJldHdlZW4gdHdvIFJPUyB0ZW1wbGF0ZXNcbiAqXG4gKiBUaGlzIGNsYXNzIGNhbiBiZSBtdXRhdGVkIGFmdGVyIGNvbnN0cnVjdGlvbi5cbiAqL1xuZXhwb3J0IGNsYXNzIFJlc291cmNlRGlmZmVyZW5jZSBpbXBsZW1lbnRzIElEaWZmZXJlbmNlPFJlc291cmNlPiB7XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoaXMgcmVzb3VyY2Ugd2FzIGFkZGVkXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgaXNBZGRpdGlvbjogYm9vbGVhbjtcblxuICAvKipcbiAgICogV2hldGhlciB0aGlzIHJlc291cmNlIHdhcyByZW1vdmVkXG4gICAqL1xuICBwdWJsaWMgcmVhZG9ubHkgaXNSZW1vdmFsOiBib29sZWFuO1xuXG4gIC8qKiBQcm9wZXJ0eS1sZXZlbCBjaGFuZ2VzIG9uIHRoZSByZXNvdXJjZSAqL1xuICBwcml2YXRlIHJlYWRvbmx5IHByb3BlcnR5RGlmZnM6IHsgW2tleTogc3RyaW5nXTogUHJvcGVydHlEaWZmZXJlbmNlPGFueT4gfTtcblxuICAvKiogQ2hhbmdlcyB0byBub24tcHJvcGVydHkgbGV2ZWwgYXR0cmlidXRlcyBvZiB0aGUgcmVzb3VyY2UgKi9cbiAgcHJpdmF0ZSByZWFkb25seSBvdGhlckRpZmZzOiB7IFtrZXk6IHN0cmluZ106IERpZmZlcmVuY2U8YW55PiB9O1xuXG4gIC8qKiBUaGUgcmVzb3VyY2UgdHlwZSAob3Igb2xkIGFuZCBuZXcgdHlwZSBpZiBpdCBoYXMgY2hhbmdlZCkgKi9cbiAgcHJpdmF0ZSByZWFkb25seSByZXNvdXJjZVR5cGVzOiB7IHJlYWRvbmx5IG9sZFR5cGU/OiBzdHJpbmc7IHJlYWRvbmx5IG5ld1R5cGU/OiBzdHJpbmcgfTtcblxuICBjb25zdHJ1Y3RvcihcbiAgICBwdWJsaWMgcmVhZG9ubHkgb2xkVmFsdWU6IFJlc291cmNlIHwgdW5kZWZpbmVkLFxuICAgIHB1YmxpYyByZWFkb25seSBuZXdWYWx1ZTogUmVzb3VyY2UgfCB1bmRlZmluZWQsXG4gICAgYXJnczoge1xuICAgICAgcmVzb3VyY2VUeXBlOiB7IG9sZFR5cGU/OiBzdHJpbmc7IG5ld1R5cGU/OiBzdHJpbmcgfTtcbiAgICAgIHByb3BlcnR5RGlmZnM6IHsgW2tleTogc3RyaW5nXTogUHJvcGVydHlEaWZmZXJlbmNlPGFueT4gfTtcbiAgICAgIG90aGVyRGlmZnM6IHsgW2tleTogc3RyaW5nXTogRGlmZmVyZW5jZTxhbnk+IH07XG4gICAgfSxcbiAgKSB7XG4gICAgdGhpcy5yZXNvdXJjZVR5cGVzID0gYXJncy5yZXNvdXJjZVR5cGU7XG4gICAgdGhpcy5wcm9wZXJ0eURpZmZzID0gYXJncy5wcm9wZXJ0eURpZmZzO1xuICAgIHRoaXMub3RoZXJEaWZmcyA9IGFyZ3Mub3RoZXJEaWZmcztcblxuICAgIHRoaXMuaXNBZGRpdGlvbiA9IG9sZFZhbHVlID09PSB1bmRlZmluZWQ7XG4gICAgdGhpcy5pc1JlbW92YWwgPSBuZXdWYWx1ZSA9PT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIGdldCBvbGRQcm9wZXJ0aWVzKCk6IFByb3BlcnR5TWFwIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5vbGRWYWx1ZSAmJiB0aGlzLm9sZFZhbHVlLlByb3BlcnRpZXM7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5ld1Byb3BlcnRpZXMoKTogUHJvcGVydHlNYXAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLm5ld1ZhbHVlICYmIHRoaXMubmV3VmFsdWUuUHJvcGVydGllcztcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoaXMgcmVzb3VyY2Ugd2FzIG1vZGlmaWVkIGF0IGFsbFxuICAgKi9cbiAgcHVibGljIGdldCBpc0RpZmZlcmVudCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5kaWZmZXJlbmNlQ291bnQgPiAwIHx8IHRoaXMub2xkUmVzb3VyY2VUeXBlICE9PSB0aGlzLm5ld1Jlc291cmNlVHlwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSByZXNvdXJjZSB3YXMgdXBkYXRlZCBpbi1wbGFjZVxuICAgKi9cbiAgcHVibGljIGdldCBpc1VwZGF0ZSgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5pc0RpZmZlcmVudCAmJiAhdGhpcy5pc0FkZGl0aW9uICYmICF0aGlzLmlzUmVtb3ZhbDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgb2xkUmVzb3VyY2VUeXBlKCk6IHN0cmluZyB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMucmVzb3VyY2VUeXBlcy5vbGRUeXBlO1xuICB9XG5cbiAgcHVibGljIGdldCBuZXdSZXNvdXJjZVR5cGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvdXJjZVR5cGVzLm5ld1R5cGU7XG4gIH1cblxuICAvKipcbiAgICogQWxsIGFjdHVhbCBwcm9wZXJ0eSB1cGRhdGVzXG4gICAqL1xuICBwdWJsaWMgZ2V0IHByb3BlcnR5VXBkYXRlcygpOiB7IFtrZXk6IHN0cmluZ106IFByb3BlcnR5RGlmZmVyZW5jZTxhbnk+IH0ge1xuICAgIHJldHVybiBvbmx5Q2hhbmdlcyh0aGlzLnByb3BlcnR5RGlmZnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIEFsbCBhY3R1YWwgXCJvdGhlclwiIHVwZGF0ZXNcbiAgICovXG4gIHB1YmxpYyBnZXQgb3RoZXJDaGFuZ2VzKCk6IHsgW2tleTogc3RyaW5nXTogRGlmZmVyZW5jZTxhbnk+IH0ge1xuICAgIHJldHVybiBvbmx5Q2hhbmdlcyh0aGlzLm90aGVyRGlmZnMpO1xuICB9XG5cbiAgLyoqXG4gICAqIFJldHVybiB3aGV0aGVyIHRoZSByZXNvdXJjZSB0eXBlIHdhcyBjaGFuZ2VkIGluIHRoaXMgZGlmZlxuICAgKlxuICAgKiBUaGlzIGlzIG5vdCBhIHZhbGlkIG9wZXJhdGlvbiBpbiBST1MgYnV0IHRvIGJlIGRlZmVuc2l2ZSB3ZSdyZSBnb2luZ1xuICAgKiB0byBiZSBhd2FyZSBvZiBpdCBhbnl3YXkuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHJlc291cmNlVHlwZUNoYW5nZWQoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIChcbiAgICAgIHRoaXMucmVzb3VyY2VUeXBlcy5vbGRUeXBlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIHRoaXMucmVzb3VyY2VUeXBlcy5uZXdUeXBlICE9PSB1bmRlZmluZWQgJiZcbiAgICAgIHRoaXMucmVzb3VyY2VUeXBlcy5vbGRUeXBlICE9PSB0aGlzLnJlc291cmNlVHlwZXMubmV3VHlwZVxuICAgICk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHRoZSByZXNvdXJjZSB0eXBlIGlmIGl0IHdhcyB1bmNoYW5nZWRcbiAgICpcbiAgICogSWYgdGhlIHJlc291cmNlIHR5cGUgd2FzIGNoYW5nZWQsIGl0J3MgYW4gZXJyb3IgdG8gY2FsbCB0aGlzLlxuICAgKi9cbiAgcHVibGljIGdldCByZXNvdXJjZVR5cGUoKTogc3RyaW5nIHtcbiAgICBpZiAodGhpcy5yZXNvdXJjZVR5cGVDaGFuZ2VkKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0Nhbm5vdCBnZXQgLnJlc291cmNlVHlwZSwgYmVjYXVzZSB0aGUgdHlwZSB3YXMgY2hhbmdlZCcpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy5yZXNvdXJjZVR5cGVzLm9sZFR5cGUgfHwgdGhpcy5yZXNvdXJjZVR5cGVzLm5ld1R5cGUhO1xuICB9XG5cbiAgLyoqXG4gICAqIFJlcGxhY2UgYSBQcm9wZXJ0eUNoYW5nZSBpbiB0aGlzIG9iamVjdFxuICAgKlxuICAgKiBUaGlzIGFmZmVjdHMgdGhlIHByb3BlcnR5IGRpZmYgYXMgaXQgaXMgc3VtbWFyaXplZCB0byB1c2VycywgYnV0IGl0IERPRVNcbiAgICogTk9UIGFmZmVjdCBlaXRoZXIgdGhlIFwib2xkVmFsdWVcIiBvciBcIm5ld1ZhbHVlXCIgdmFsdWVzOyB0aG9zZSBzdGlsbCBjb250YWluXG4gICAqIHRoZSBhY3R1YWwgdGVtcGxhdGUgdmFsdWVzIGFzIHByb3ZpZGVkIGJ5IHRoZSB1c2VyICh0aGV5IG1pZ2h0IHN0aWxsIGJlXG4gICAqIHVzZWQgZm9yIGRvd25zdHJlYW0gcHJvY2Vzc2luZykuXG4gICAqL1xuICBwdWJsaWMgc2V0UHJvcGVydHlDaGFuZ2UocHJvcGVydHlOYW1lOiBzdHJpbmcsIGNoYW5nZTogUHJvcGVydHlEaWZmZXJlbmNlPGFueT4pIHtcbiAgICB0aGlzLnByb3BlcnR5RGlmZnNbcHJvcGVydHlOYW1lXSA9IGNoYW5nZTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgY2hhbmdlSW1wYWN0KCk6IFJlc291cmNlSW1wYWN0IHtcbiAgICAvLyBDaGVjayB0aGUgVHlwZSBmaXJzdFxuICAgIGlmICh0aGlzLnJlc291cmNlVHlwZXMub2xkVHlwZSAhPT0gdGhpcy5yZXNvdXJjZVR5cGVzLm5ld1R5cGUpIHtcbiAgICAgIGlmICh0aGlzLnJlc291cmNlVHlwZXMub2xkVHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBSZXNvdXJjZUltcGFjdC5XSUxMX0NSRUFURTtcbiAgICAgIH1cbiAgICAgIGlmICh0aGlzLnJlc291cmNlVHlwZXMubmV3VHlwZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9sZFZhbHVlIS5EZWxldGlvblBvbGljeSA9PT0gJ1JldGFpbicgPyBSZXNvdXJjZUltcGFjdC5XSUxMX09SUEhBTiA6IFJlc291cmNlSW1wYWN0LldJTExfREVTVFJPWTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBSZXNvdXJjZUltcGFjdC5XSUxMX1JFUExBQ0U7XG4gICAgfVxuXG4gICAgLy8gQmFzZSBpbXBhY3QgKGJlZm9yZSB3ZSBtaXggaW4gdGhlIHdvcnN0IG9mIHRoZSBwcm9wZXJ0eSBpbXBhY3RzKTtcbiAgICAvLyBXSUxMX1VQREFURSBpZiB3ZSBoYXZlIFwib3RoZXJcIiBjaGFuZ2VzLCBOT19DSEFOR0UgaWYgdGhlcmUgYXJlIG5vIFwib3RoZXJcIiBjaGFuZ2VzLlxuICAgIGNvbnN0IGJhc2VJbXBhY3QgPVxuICAgICAgT2JqZWN0LmtleXModGhpcy5vdGhlckNoYW5nZXMpLmxlbmd0aCA+IDAgPyBSZXNvdXJjZUltcGFjdC5XSUxMX1VQREFURSA6IFJlc291cmNlSW1wYWN0Lk5PX0NIQU5HRTtcblxuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMucHJvcGVydHlEaWZmcylcbiAgICAgIC5tYXAoKGVsdCkgPT4gZWx0LmNoYW5nZUltcGFjdClcbiAgICAgIC5yZWR1Y2Uod29yc3RJbXBhY3QsIGJhc2VJbXBhY3QpO1xuICB9XG5cbiAgLyoqXG4gICAqIENvdW50IG9mIGFjdHVhbCBkaWZmZXJlbmNlcyAobm90IG9mIGVsZW1lbnRzKVxuICAgKi9cbiAgcHVibGljIGdldCBkaWZmZXJlbmNlQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLnByb3BlcnR5VXBkYXRlcykubGVuZ3RoICsgT2JqZWN0LnZhbHVlcyh0aGlzLm90aGVyQ2hhbmdlcykubGVuZ3RoO1xuICB9XG5cbiAgLyoqXG4gICAqIEludm9rZSBhIGNhbGxiYWNrIGZvciBlYWNoIGFjdHVhbCBkaWZmZXJlbmNlXG4gICAqL1xuICBwdWJsaWMgZm9yRWFjaERpZmZlcmVuY2UoXG4gICAgY2I6ICh0eXBlOiAnUHJvcGVydHknIHwgJ090aGVyJywgbmFtZTogc3RyaW5nLCB2YWx1ZTogRGlmZmVyZW5jZTxhbnk+IHwgUHJvcGVydHlEaWZmZXJlbmNlPGFueT4pID0+IGFueSxcbiAgKSB7XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXModGhpcy5wcm9wZXJ0eVVwZGF0ZXMpLnNvcnQoKSkge1xuICAgICAgY2IoJ1Byb3BlcnR5Jywga2V5LCB0aGlzLnByb3BlcnR5VXBkYXRlc1trZXldKTtcbiAgICB9XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXModGhpcy5vdGhlckNoYW5nZXMpLnNvcnQoKSkge1xuICAgICAgY2IoJ090aGVyJywga2V5LCB0aGlzLm90aGVyRGlmZnNba2V5XSk7XG4gICAgfVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Byb3BlcnR5RGlmZmVyZW5jZTxUPihkaWZmOiBEaWZmZXJlbmNlPFQ+KTogZGlmZiBpcyBQcm9wZXJ0eURpZmZlcmVuY2U8VD4ge1xuICByZXR1cm4gKGRpZmYgYXMgUHJvcGVydHlEaWZmZXJlbmNlPFQ+KS5jaGFuZ2VJbXBhY3QgIT09IHVuZGVmaW5lZDtcbn1cblxuLyoqXG4gKiBGaWx0ZXIgYSBtYXAgb2YgSURpZmZlcmVuY2VzIGRvd24gdG8gb25seSByZXRhaW4gdGhlIGFjdHVhbCBjaGFuZ2VzXG4gKi9cbmZ1bmN0aW9uIG9ubHlDaGFuZ2VzPFYsIFQgZXh0ZW5kcyBJRGlmZmVyZW5jZTxWPj4oeHM6IHsgW2tleTogc3RyaW5nXTogVCB9KTogeyBba2V5OiBzdHJpbmddOiBUIH0ge1xuICBjb25zdCByZXQ6IHsgW2tleTogc3RyaW5nXTogVCB9ID0ge307XG4gIGZvciAoY29uc3QgW2tleSwgZGlmZl0gb2YgT2JqZWN0LmVudHJpZXMoeHMpKSB7XG4gICAgaWYgKGRpZmYuaXNEaWZmZXJlbnQpIHtcbiAgICAgIHJldFtrZXldID0gZGlmZjtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cbiJdfQ==