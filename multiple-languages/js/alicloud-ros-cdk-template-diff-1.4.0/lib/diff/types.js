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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidHlwZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ0eXBlcy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSxtQ0FBc0M7QUFDdEMsaUNBQWlDO0FBSWpDLHNEQUFzRDtBQUN0RCxNQUFhLFlBQVk7SUFhdkIsWUFBWSxJQUFtQjtRQUM3QixJQUFJLElBQUksQ0FBQyxXQUFXLEtBQUssU0FBUyxFQUFFO1lBQ2xDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLFdBQVcsQ0FBQztTQUNyQztRQUNELElBQUksSUFBSSxDQUFDLFNBQVMsS0FBSyxTQUFTLEVBQUU7WUFDaEMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDO1NBQ2pDO1FBRUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUMsS0FBSyxJQUFJLElBQUksb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEQsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUMsUUFBUSxJQUFJLElBQUksb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDOUQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUMsT0FBTyxJQUFJLElBQUksb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDbEUsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUksb0JBQW9CLENBQUMsRUFBRSxDQUFDLENBQUM7UUFD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RUFBRSxDQUFDO0lBQ3JDLEtBQUssTUFBTSxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsSUFBSSxNQUFNLENBQUMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1FBQzVDLElBQUksSUFBSSxDQUFDLFdBQVcsRUFBRTtZQUNwQixHQUFHLENBQUMsR0FBRyxDQUFDLEdBQUcsSUFBSSxDQUFDO1NBQ2pCO0tBQ0Y7SUFDRCxPQUFPLEdBQUcsQ0FBQztBQUNiLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0Fzc2VydGlvbkVycm9yfSBmcm9tICdhc3NlcnQnO1xuaW1wb3J0IHtkZWVwRXF1YWx9IGZyb20gJy4vdXRpbCc7XG5cbmV4cG9ydCB0eXBlIFByb3BlcnR5TWFwID0geyBba2V5OiBzdHJpbmddOiBhbnkgfTtcblxuLyoqIFNlbWFudGljIGRpZmZlcmVuY2VzIGJldHdlZW4gdHdvIFJPUyB0ZW1wbGF0ZXMuICovXG5leHBvcnQgY2xhc3MgVGVtcGxhdGVEaWZmIGltcGxlbWVudHMgSVRlbXBsYXRlRGlmZiB7XG4gIHB1YmxpYyBkZXNjcmlwdGlvbj86IERpZmZlcmVuY2U8c3RyaW5nPjtcbiAgcHVibGljIHRyYW5zZm9ybT86IERpZmZlcmVuY2U8c3RyaW5nPjtcbiAgcHVibGljIGNvbmRpdGlvbnM6IERpZmZlcmVuY2VDb2xsZWN0aW9uPENvbmRpdGlvbiwgQ29uZGl0aW9uRGlmZmVyZW5jZT47XG4gIHB1YmxpYyBtYXBwaW5nczogRGlmZmVyZW5jZUNvbGxlY3Rpb248TWFwcGluZywgTWFwcGluZ0RpZmZlcmVuY2U+O1xuICBwdWJsaWMgcnVsZXM6IERpZmZlcmVuY2VDb2xsZWN0aW9uPFJ1bGUsIFJ1bGVEaWZmZXJlbmNlPjtcbiAgcHVibGljIG1ldGFkYXRhOiBEaWZmZXJlbmNlQ29sbGVjdGlvbjxNZXRhZGF0YSwgTWV0YWRhdGFEaWZmZXJlbmNlPjtcbiAgcHVibGljIG91dHB1dHM6IERpZmZlcmVuY2VDb2xsZWN0aW9uPE91dHB1dCwgT3V0cHV0RGlmZmVyZW5jZT47XG4gIHB1YmxpYyBwYXJhbWV0ZXJzOiBEaWZmZXJlbmNlQ29sbGVjdGlvbjxQYXJhbWV0ZXIsIFBhcmFtZXRlckRpZmZlcmVuY2U+O1xuICBwdWJsaWMgcmVzb3VyY2VzOiBEaWZmZXJlbmNlQ29sbGVjdGlvbjxSZXNvdXJjZSwgUmVzb3VyY2VEaWZmZXJlbmNlPjtcbiAgLyoqIFRoZSBkaWZmZXJlbmNlcyBpbiB1bmtub3duL3VuZXhwZWN0ZWQgcGFydHMgb2YgdGhlIHRlbXBsYXRlICovXG4gIHB1YmxpYyB1bmtub3duOiBEaWZmZXJlbmNlQ29sbGVjdGlvbjxhbnksIERpZmZlcmVuY2U8YW55Pj47XG5cbiAgY29uc3RydWN0b3IoYXJnczogSVRlbXBsYXRlRGlmZikge1xuICAgIGlmIChhcmdzLmRlc2NyaXB0aW9uICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBhcmdzLmRlc2NyaXB0aW9uO1xuICAgIH1cbiAgICBpZiAoYXJncy50cmFuc2Zvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGhpcy50cmFuc2Zvcm0gPSBhcmdzLnRyYW5zZm9ybTtcbiAgICB9XG5cbiAgICB0aGlzLmNvbmRpdGlvbnMgPSBhcmdzLmNvbmRpdGlvbnMgfHwgbmV3IERpZmZlcmVuY2VDb2xsZWN0aW9uKHt9KTtcbiAgICB0aGlzLm1hcHBpbmdzID0gYXJncy5tYXBwaW5ncyB8fCBuZXcgRGlmZmVyZW5jZUNvbGxlY3Rpb24oe30pO1xuICAgIHRoaXMucnVsZXMgPSBhcmdzLnJ1bGVzIHx8IG5ldyBEaWZmZXJlbmNlQ29sbGVjdGlvbih7fSk7XG4gICAgdGhpcy5tZXRhZGF0YSA9IGFyZ3MubWV0YWRhdGEgfHwgbmV3IERpZmZlcmVuY2VDb2xsZWN0aW9uKHt9KTtcbiAgICB0aGlzLm91dHB1dHMgPSBhcmdzLm91dHB1dHMgfHwgbmV3IERpZmZlcmVuY2VDb2xsZWN0aW9uKHt9KTtcbiAgICB0aGlzLnBhcmFtZXRlcnMgPSBhcmdzLnBhcmFtZXRlcnMgfHwgbmV3IERpZmZlcmVuY2VDb2xsZWN0aW9uKHt9KTtcbiAgICB0aGlzLnJlc291cmNlcyA9IGFyZ3MucmVzb3VyY2VzIHx8IG5ldyBEaWZmZXJlbmNlQ29sbGVjdGlvbih7fSk7XG4gICAgdGhpcy51bmtub3duID0gYXJncy51bmtub3duIHx8IG5ldyBEaWZmZXJlbmNlQ29sbGVjdGlvbih7fSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGRpZmZlcmVuY2VDb3VudCgpIHtcbiAgICBsZXQgY291bnQgPSAwO1xuXG4gICAgaWYgKHRoaXMuZGVzY3JpcHRpb24gIT09IHVuZGVmaW5lZCkge1xuICAgICAgY291bnQgKz0gMTtcbiAgICB9XG4gICAgaWYgKHRoaXMudHJhbnNmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGNvdW50ICs9IDE7XG4gICAgfVxuXG4gICAgY291bnQgKz0gdGhpcy5jb25kaXRpb25zLmRpZmZlcmVuY2VDb3VudDtcbiAgICBjb3VudCArPSB0aGlzLm1hcHBpbmdzLmRpZmZlcmVuY2VDb3VudDtcbiAgICBjb3VudCArPSB0aGlzLm1ldGFkYXRhLmRpZmZlcmVuY2VDb3VudDtcbiAgICBjb3VudCArPSB0aGlzLnJ1bGVzLmRpZmZlcmVuY2VDb3VudDtcbiAgICBjb3VudCArPSB0aGlzLm91dHB1dHMuZGlmZmVyZW5jZUNvdW50O1xuICAgIGNvdW50ICs9IHRoaXMucGFyYW1ldGVycy5kaWZmZXJlbmNlQ291bnQ7XG4gICAgY291bnQgKz0gdGhpcy5yZXNvdXJjZXMuZGlmZmVyZW5jZUNvdW50O1xuICAgIGNvdW50ICs9IHRoaXMudW5rbm93bi5kaWZmZXJlbmNlQ291bnQ7XG5cbiAgICByZXR1cm4gY291bnQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IGlzRW1wdHkoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuZGlmZmVyZW5jZUNvdW50ID09PSAwO1xuICB9XG5cbiAgcHVibGljIHRvTWFwKCk6IFByb3BlcnR5TWFwIHtcbiAgICByZXR1cm4ge1xuICAgICAgZGVzY3JpcHRpb246IHRoaXMuZGVzY3JpcHRpb24sXG4gICAgICB0cmFuc2Zvcm06IHRoaXMudHJhbnNmb3JtLFxuICAgICAgY29uZGl0aW9uczogdGhpcy5jb25kaXRpb25zLmNoYW5nZXMsXG4gICAgICBtYXBwaW5nczogdGhpcy5tYXBwaW5ncy5jaGFuZ2VzLFxuICAgICAgbWV0YWRhdGE6IHRoaXMubWV0YWRhdGEuY2hhbmdlcyxcbiAgICAgIG91dHB1dHM6IHRoaXMub3V0cHV0cy5jaGFuZ2VzLFxuICAgICAgcGFyYW1ldGVyczogdGhpcy5wYXJhbWV0ZXJzLmNoYW5nZXMsXG4gICAgICByZXNvdXJjZXM6IHRoaXMucmVzb3VyY2VzLmNoYW5nZXMsXG4gICAgICB1bmtub3duOiB0aGlzLnVua25vd24uY2hhbmdlcyxcbiAgICB9O1xuICAgIC8vIGNvbnN0IG1hcCA9IG5ldyBNYXA8c3RyaW5nLCBhbnk+KCk7XG4gICAgLy8gbWFwLnNldCgnZGVzY3JpcHRpb24nLCB0aGlzLmRlc2NyaXB0aW9uKTtcbiAgICAvLyBtYXAuc2V0KCd0cmFuc2Zvcm0nLCB0aGlzLnRyYW5zZm9ybSk7XG4gICAgLy9cbiAgICAvLyBtYXAuc2V0KCdjb25kaXRpb25zJywgdGhpcy5jb25kaXRpb25zLmNoYW5nZXMpO1xuICAgIC8vIG1hcC5zZXQoJ21hcHBpbmdzJywgdGhpcy5tYXBwaW5ncy5jaGFuZ2VzKTtcbiAgICAvLyBtYXAuc2V0KCdtZXRhZGF0YScsIHRoaXMubWV0YWRhdGEuY2hhbmdlcyk7XG4gICAgLy8gbWFwLnNldCgnb3V0cHV0cycsIHRoaXMub3V0cHV0cy5jaGFuZ2VzKTtcbiAgICAvLyBtYXAuc2V0KCdwYXJhbWV0ZXJzJywgdGhpcy5wYXJhbWV0ZXJzLmNoYW5nZXMpO1xuICAgIC8vIG1hcC5zZXQoJ3Jlc291cmNlcycsIHRoaXMucmVzb3VyY2VzLmNoYW5nZXMpO1xuICAgIC8vXG4gICAgLy8gbWFwLnNldCgndW5rbm93bicsIHRoaXMudW5rbm93bi5jaGFuZ2VzKTtcbiAgICAvLyByZXR1cm4gbWFwO1xuICB9XG5cbiAgc3RhdGljIGZyb21NYXAobWFwOiBQcm9wZXJ0eU1hcCk6IFRlbXBsYXRlRGlmZiB7XG4gICAgcmV0dXJuIG5ldyBUZW1wbGF0ZURpZmYoe1xuICAgICAgZGVzY3JpcHRpb246IG1hcC5kZXNjcmlwdGlvbixcbiAgICAgIHRyYW5zZm9ybTogbWFwLnRyYW5zZm9ybSxcbiAgICAgIGNvbmRpdGlvbnM6IG5ldyBEaWZmZXJlbmNlQ29sbGVjdGlvbihtYXAuY29uZGl0aW9ucyksXG4gICAgICBtYXBwaW5nczogbmV3IERpZmZlcmVuY2VDb2xsZWN0aW9uKG1hcC5tYXBwaW5ncyksXG4gICAgICBtZXRhZGF0YTogbmV3IERpZmZlcmVuY2VDb2xsZWN0aW9uKG1hcC5tZXRhZGF0YSksXG4gICAgICBvdXRwdXRzOiBuZXcgRGlmZmVyZW5jZUNvbGxlY3Rpb24obWFwLm91dHB1dHMpLFxuICAgICAgcGFyYW1ldGVyczogbmV3IERpZmZlcmVuY2VDb2xsZWN0aW9uKG1hcC5wYXJhbWV0ZXJzKSxcbiAgICAgIHJlc291cmNlczogbmV3IERpZmZlcmVuY2VDb2xsZWN0aW9uKG1hcC5yZXNvdXJjZXMpLFxuICAgICAgdW5rbm93bjogbmV3IERpZmZlcmVuY2VDb2xsZWN0aW9uKG1hcC51bmtub3duKSxcbiAgICB9KTtcbiAgfVxufVxuXG4vKipcbiAqIEEgY2hhbmdlIGluIHByb3BlcnR5IHZhbHVlc1xuICpcbiAqIE5vdCBuZWNlc3NhcmlseSBhbiB1cGRhdGUsIGl0IGNvdWxkIGJlIHRoYXQgdGhlcmUgdXNlZCB0byBiZSBubyB2YWx1ZSB0aGVyZVxuICogYmVjYXVzZSB0aGVyZSB3YXMgbm8gcmVzb3VyY2UsIGFuZCBub3cgdGhlcmUgaXMgKG9yIHZpY2UgdmVyc2EpLlxuICpcbiAqIFRoZXJlZm9yZSwgd2UganVzdCBjb250YWluIHBsYWluIHZhbHVlcyBhbmQgbm90IGEgUHJvcGVydHlEaWZmZXJlbmNlPGFueT4uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgUHJvcGVydHlDaGFuZ2Uge1xuICAvKipcbiAgICogTG9naWNhbCBJRCBvZiB0aGUgcmVzb3VyY2Ugd2hlcmUgdGhpcyBwcm9wZXJ0eSBjaGFuZ2Ugd2FzIGZvdW5kXG4gICAqL1xuICByZXNvdXJjZUxvZ2ljYWxJZDogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUeXBlIG9mIHRoZSByZXNvdXJjZVxuICAgKi9cbiAgcmVzb3VyY2VUeXBlOiBzdHJpbmc7XG5cbiAgLyoqXG4gICAqIE5hbWUgb2YgdGhlIHByb3BlcnR5IHRoYXQgaXMgY2hhbmdpbmdcbiAgICovXG4gIHByb3BlcnR5TmFtZTogc3RyaW5nO1xuXG4gIC8qKlxuICAgKiBUaGUgb2xkIHByb3BlcnR5IHZhbHVlXG4gICAqL1xuICBvbGRWYWx1ZT86IGFueTtcblxuICAvKipcbiAgICogVGhlIG5ldyBwcm9wZXJ0eSB2YWx1ZVxuICAgKi9cbiAgbmV3VmFsdWU/OiBhbnk7XG59XG5cbi8qKlxuICogQSByZXNvdXJjZSBjaGFuZ2VcbiAqXG4gKiBFaXRoZXIgYSBjcmVhdGlvbiwgZGVsZXRpb24gb3IgdXBkYXRlLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJlc291cmNlQ2hhbmdlIHtcbiAgLyoqXG4gICAqIExvZ2ljYWwgSUQgb2YgdGhlIHJlc291cmNlIHdoZXJlIHRoaXMgcHJvcGVydHkgY2hhbmdlIHdhcyBmb3VuZFxuICAgKi9cbiAgcmVzb3VyY2VMb2dpY2FsSWQ6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIHR5cGUgb2YgdGhlIHJlc291cmNlXG4gICAqL1xuICByZXNvdXJjZVR5cGU6IHN0cmluZztcblxuICAvKipcbiAgICogVGhlIG9sZCBwcm9wZXJ0aWVzIHZhbHVlIChtaWdodCBiZSB1bmRlZmluZWQgaW4gY2FzZSBvZiBjcmVhdGlvbilcbiAgICovXG4gIG9sZFByb3BlcnRpZXM/OiBQcm9wZXJ0eU1hcDtcblxuICAvKipcbiAgICogVGhlIG5ldyBwcm9wZXJ0aWVzIHZhbHVlIChtaWdodCBiZSB1bmRlZmluZWQgaW4gY2FzZSBvZiBkZWxldGlvbilcbiAgICovXG4gIG5ld1Byb3BlcnRpZXM/OiBQcm9wZXJ0eU1hcDtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJRGlmZmVyZW5jZTxWYWx1ZVR5cGU+IHtcbiAgcmVhZG9ubHkgb2xkVmFsdWU6IFZhbHVlVHlwZSB8IHVuZGVmaW5lZDtcbiAgcmVhZG9ubHkgbmV3VmFsdWU6IFZhbHVlVHlwZSB8IHVuZGVmaW5lZDtcbiAgcmVhZG9ubHkgaXNEaWZmZXJlbnQ6IGJvb2xlYW47XG4gIHJlYWRvbmx5IGlzQWRkaXRpb246IGJvb2xlYW47XG4gIHJlYWRvbmx5IGlzUmVtb3ZhbDogYm9vbGVhbjtcbiAgcmVhZG9ubHkgaXNVcGRhdGU6IGJvb2xlYW47XG59XG5cbi8qKlxuICogTW9kZWxzIGFuIGVudGl0eSB0aGF0IGNoYW5nZWQgYmV0d2VlbiB0d28gdmVyc2lvbnMgb2YgYSBST1MgdGVtcGxhdGUuXG4gKi9cbmV4cG9ydCBjbGFzcyBEaWZmZXJlbmNlPFZhbHVlVHlwZT4gaW1wbGVtZW50cyBJRGlmZmVyZW5jZTxWYWx1ZVR5cGU+IHtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhpcyBpcyBhbiBhY3R1YWwgZGlmZmVyZW50IG9yIHRoZSB2YWx1ZXMgYXJlIGFjdHVhbGx5IHRoZSBzYW1lXG4gICAqXG4gICAqIGlzRGlmZmVyZW50ID0+IChpc1VwZGF0ZSB8IGlzUmVtb3ZlZCB8IGlzVXBkYXRlKVxuICAgKi9cbiAgcHVibGljIHJlYWRvbmx5IGlzRGlmZmVyZW50OiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0gb2xkVmFsdWUgdGhlIG9sZCB2YWx1ZSwgY2Fubm90IGJlIGVxdWFsICh0byB0aGUgc2Vuc2Ugb2YgK2RlZXBFcXVhbCspIHRvICtuZXdWYWx1ZSsuXG4gICAqIEBwYXJhbSBuZXdWYWx1ZSB0aGUgbmV3IHZhbHVlLCBjYW5ub3QgYmUgZXF1YWwgKHRvIHRoZSBzZW5zZSBvZiArZGVlcEVxdWFsKykgdG8gK29sZFZhbHVlKy5cbiAgICovXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBvbGRWYWx1ZTogVmFsdWVUeXBlIHwgdW5kZWZpbmVkLCBwdWJsaWMgcmVhZG9ubHkgbmV3VmFsdWU6IFZhbHVlVHlwZSB8IHVuZGVmaW5lZCkge1xuICAgIGlmIChvbGRWYWx1ZSA9PT0gdW5kZWZpbmVkICYmIG5ld1ZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHRocm93IG5ldyBBc3NlcnRpb25FcnJvcih7IG1lc3NhZ2U6ICdvbGRWYWx1ZSBhbmQgbmV3VmFsdWUgYXJlIGJvdGggdW5kZWZpbmVkIScgfSk7XG4gICAgfVxuICAgIHRoaXMuaXNEaWZmZXJlbnQgPSAhZGVlcEVxdWFsKG9sZFZhbHVlLCBuZXdWYWx1ZSk7XG4gIH1cblxuICAvKiogQHJldHVybnMgK3RydWUrIGlmIHRoZSBlbGVtZW50IGlzIG5ldyB0byB0aGUgdGVtcGxhdGUuICovXG4gIHB1YmxpYyBnZXQgaXNBZGRpdGlvbigpOiBib29sZWFuIHtcbiAgICByZXR1cm4gdGhpcy5vbGRWYWx1ZSA9PT0gdW5kZWZpbmVkO1xuICB9XG5cbiAgLyoqIEByZXR1cm5zICt0cnVlKyBpZiB0aGUgZWxlbWVudCB3YXMgcmVtb3ZlZCBmcm9tIHRoZSB0ZW1wbGF0ZS4gKi9cbiAgcHVibGljIGdldCBpc1JlbW92YWwoKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMubmV3VmFsdWUgPT09IHVuZGVmaW5lZDtcbiAgfVxuXG4gIC8qKiBAcmV0dXJucyArdHJ1ZSsgaWYgdGhlIGVsZW1lbnQgd2FzIGFscmVhZHkgaW4gdGhlIHRlbXBsYXRlIGFuZCBpcyB1cGRhdGVkLiAqL1xuICBwdWJsaWMgZ2V0IGlzVXBkYXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLm9sZFZhbHVlICE9PSB1bmRlZmluZWQgJiYgdGhpcy5uZXdWYWx1ZSAhPT0gdW5kZWZpbmVkO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RpZmZlcmVuY2VJbnN0YW5jZShvYmo6IGFueSk6IG9iaiBpcyBEaWZmZXJlbmNlPGFueT4ge1xuICByZXR1cm4gb2JqIGluc3RhbmNlb2YgRGlmZmVyZW5jZTtcbn1cblxuZXhwb3J0IGNsYXNzIFByb3BlcnR5RGlmZmVyZW5jZTxWYWx1ZVR5cGU+IGV4dGVuZHMgRGlmZmVyZW5jZTxWYWx1ZVR5cGU+IHtcbiAgcHVibGljIHJlYWRvbmx5IGNoYW5nZUltcGFjdD86IFJlc291cmNlSW1wYWN0O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIG9sZFZhbHVlOiBWYWx1ZVR5cGUgfCB1bmRlZmluZWQsXG4gICAgbmV3VmFsdWU6IFZhbHVlVHlwZSB8IHVuZGVmaW5lZCxcbiAgICBhcmdzOiB7IGNoYW5nZUltcGFjdD86IFJlc291cmNlSW1wYWN0IH0sXG4gICkge1xuICAgIHN1cGVyKG9sZFZhbHVlLCBuZXdWYWx1ZSk7XG4gICAgdGhpcy5jaGFuZ2VJbXBhY3QgPSBhcmdzLmNoYW5nZUltcGFjdDtcbiAgfVxufVxuXG5leHBvcnQgY2xhc3MgRGlmZmVyZW5jZUNvbGxlY3Rpb248ViwgVCBleHRlbmRzIElEaWZmZXJlbmNlPFY+PiB7XG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcmVhZG9ubHkgZGlmZnM6IHsgW2xvZ2ljYWxJZDogc3RyaW5nXTogVCB9KSB7fVxuXG4gIHB1YmxpYyBnZXQgY2hhbmdlcygpOiB7IFtsb2dpY2FsSWQ6IHN0cmluZ106IFQgfSB7XG4gICAgcmV0dXJuIG9ubHlDaGFuZ2VzKHRoaXMuZGlmZnMpO1xuICB9XG5cbiAgcHVibGljIGdldCBkaWZmZXJlbmNlQ291bnQoKTogbnVtYmVyIHtcbiAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyh0aGlzLmNoYW5nZXMpLmxlbmd0aDtcbiAgfVxuXG4gIHB1YmxpYyBnZXQobG9naWNhbElkOiBzdHJpbmcpOiBUIHtcbiAgICBjb25zdCByZXQgPSB0aGlzLmRpZmZzW2xvZ2ljYWxJZF07XG4gICAgaWYgKCFyZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihgTm8gb2JqZWN0IHdpdGggbG9naWNhbCBJRCAnJHtsb2dpY2FsSWR9J2ApO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcHVibGljIGdldCBsb2dpY2FsSWRzKCk6IHN0cmluZ1tdIHtcbiAgICByZXR1cm4gT2JqZWN0LmtleXModGhpcy5jaGFuZ2VzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgbmV3IFRlbXBsYXRlRGlmZiB3aGljaCBvbmx5IGNvbnRhaW5zIGNoYW5nZXMgZm9yIHdoaWNoIGBwcmVkaWNhdGVgXG4gICAqIHJldHVybnMgYHRydWVgLlxuICAgKi9cbiAgcHVibGljIGZpbHRlcihwcmVkaWNhdGU6IChkaWZmOiBUIHwgdW5kZWZpbmVkKSA9PiBib29sZWFuKTogRGlmZmVyZW5jZUNvbGxlY3Rpb248ViwgVD4ge1xuICAgIGNvbnN0IG5ld0NoYW5nZXM6IHsgW2xvZ2ljYWxJZDogc3RyaW5nXTogVCB9ID0ge307XG4gICAgZm9yIChjb25zdCBpZCBvZiBPYmplY3Qua2V5cyh0aGlzLmNoYW5nZXMpKSB7XG4gICAgICBjb25zdCBkaWZmID0gdGhpcy5jaGFuZ2VzW2lkXTtcblxuICAgICAgaWYgKHByZWRpY2F0ZShkaWZmKSkge1xuICAgICAgICBuZXdDaGFuZ2VzW2lkXSA9IGRpZmY7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG5ldyBEaWZmZXJlbmNlQ29sbGVjdGlvbjxWLCBUPihuZXdDaGFuZ2VzKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBJbnZva2VzIGBjYmAgZm9yIGFsbCBjaGFuZ2VzIGluIHRoaXMgY29sbGVjdGlvbi5cbiAgICpcbiAgICogQ2hhbmdlcyB3aWxsIGJlIHNvcnRlZCBhcyBmb2xsb3dzOlxuICAgKiAgLSBSZW1vdmVkXG4gICAqICAtIEFkZGVkXG4gICAqICAtIFVwZGF0ZWRcbiAgICogIC0gT3RoZXJzXG4gICAqXG4gICAqIEBwYXJhbSBjYlxuICAgKi9cbiAgcHVibGljIGZvckVhY2hEaWZmZXJlbmNlKGNiOiAobG9naWNhbElkOiBzdHJpbmcsIGNoYW5nZTogVCkgPT4gYW55KTogdm9pZCB7XG4gICAgY29uc3QgcmVtb3ZlZCA9IG5ldyBBcnJheTx7IGxvZ2ljYWxJZDogc3RyaW5nOyBjaGFuZ2U6IFQgfT4oKTtcbiAgICBjb25zdCBhZGRlZCA9IG5ldyBBcnJheTx7IGxvZ2ljYWxJZDogc3RyaW5nOyBjaGFuZ2U6IFQgfT4oKTtcbiAgICBjb25zdCB1cGRhdGVkID0gbmV3IEFycmF5PHsgbG9naWNhbElkOiBzdHJpbmc7IGNoYW5nZTogVCB9PigpO1xuICAgIGNvbnN0IG90aGVycyA9IG5ldyBBcnJheTx7IGxvZ2ljYWxJZDogc3RyaW5nOyBjaGFuZ2U6IFQgfT4oKTtcblxuICAgIGZvciAoY29uc3QgbG9naWNhbElkIG9mIHRoaXMubG9naWNhbElkcykge1xuICAgICAgY29uc3QgY2hhbmdlOiBUID0gdGhpcy5jaGFuZ2VzW2xvZ2ljYWxJZF0hO1xuICAgICAgaWYgKGNoYW5nZS5pc0FkZGl0aW9uKSB7XG4gICAgICAgIGFkZGVkLnB1c2goeyBsb2dpY2FsSWQsIGNoYW5nZSB9KTtcbiAgICAgIH0gZWxzZSBpZiAoY2hhbmdlLmlzUmVtb3ZhbCkge1xuICAgICAgICByZW1vdmVkLnB1c2goeyBsb2dpY2FsSWQsIGNoYW5nZSB9KTtcbiAgICAgIH0gZWxzZSBpZiAoY2hhbmdlLmlzVXBkYXRlKSB7XG4gICAgICAgIHVwZGF0ZWQucHVzaCh7IGxvZ2ljYWxJZCwgY2hhbmdlIH0pO1xuICAgICAgfSBlbHNlIGlmIChjaGFuZ2UuaXNEaWZmZXJlbnQpIHtcbiAgICAgICAgb3RoZXJzLnB1c2goeyBsb2dpY2FsSWQsIGNoYW5nZSB9KTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZW1vdmVkLmZvckVhY2goKHYpID0+IGNiKHYubG9naWNhbElkLCB2LmNoYW5nZSkpO1xuICAgIGFkZGVkLmZvckVhY2goKHYpID0+IGNiKHYubG9naWNhbElkLCB2LmNoYW5nZSkpO1xuICAgIHVwZGF0ZWQuZm9yRWFjaCgodikgPT4gY2Iodi5sb2dpY2FsSWQsIHYuY2hhbmdlKSk7XG4gICAgb3RoZXJzLmZvckVhY2goKHYpID0+IGNiKHYubG9naWNhbElkLCB2LmNoYW5nZSkpO1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0RpZmZlcmVuY2VDb2xsZWN0aW9uSW5zdGFuY2Uob2JqOiBhbnkpOiBvYmogaXMgRGlmZmVyZW5jZUNvbGxlY3Rpb248YW55LCBhbnk+IHtcbiAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIERpZmZlcmVuY2VDb2xsZWN0aW9uO1xufVxuXG4vKipcbiAqIEFyZ3VtZW50cyBleHBlY3RlZCBieSB0aGUgY29uc3RydWN0b3Igb2YgK1RlbXBsYXRlRGlmZissIGV4dHJhY3RlZCBhcyBhbiBpbnRlcmZhY2UgZm9yIHRoZSBzYWtlXG4gKiBvZiAocmVsYXRpdmUpIGNvbmNpc2VuZXNzIG9mIHRoZSBjb25zdHJ1Y3RvcidzIHNpZ25hdHVyZS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBJVGVtcGxhdGVEaWZmIHtcbiAgZGVzY3JpcHRpb24/OiBJRGlmZmVyZW5jZTxzdHJpbmc+O1xuICB0cmFuc2Zvcm0/OiBJRGlmZmVyZW5jZTxzdHJpbmc+O1xuXG4gIGNvbmRpdGlvbnM/OiBEaWZmZXJlbmNlQ29sbGVjdGlvbjxDb25kaXRpb24sIENvbmRpdGlvbkRpZmZlcmVuY2U+O1xuICBtYXBwaW5ncz86IERpZmZlcmVuY2VDb2xsZWN0aW9uPE1hcHBpbmcsIE1hcHBpbmdEaWZmZXJlbmNlPjtcbiAgcnVsZXM/OiBEaWZmZXJlbmNlQ29sbGVjdGlvbjxSdWxlLCBSdWxlRGlmZmVyZW5jZT47XG4gIG1ldGFkYXRhPzogRGlmZmVyZW5jZUNvbGxlY3Rpb248TWV0YWRhdGEsIE1ldGFkYXRhRGlmZmVyZW5jZT47XG4gIG91dHB1dHM/OiBEaWZmZXJlbmNlQ29sbGVjdGlvbjxPdXRwdXQsIE91dHB1dERpZmZlcmVuY2U+O1xuICBwYXJhbWV0ZXJzPzogRGlmZmVyZW5jZUNvbGxlY3Rpb248UGFyYW1ldGVyLCBQYXJhbWV0ZXJEaWZmZXJlbmNlPjtcbiAgcmVzb3VyY2VzPzogRGlmZmVyZW5jZUNvbGxlY3Rpb248UmVzb3VyY2UsIFJlc291cmNlRGlmZmVyZW5jZT47XG5cbiAgdW5rbm93bj86IERpZmZlcmVuY2VDb2xsZWN0aW9uPGFueSwgSURpZmZlcmVuY2U8YW55Pj47XG59XG5cbmV4cG9ydCB0eXBlIENvbmRpdGlvbiA9IGFueTtcbmV4cG9ydCBjbGFzcyBDb25kaXRpb25EaWZmZXJlbmNlIGV4dGVuZHMgRGlmZmVyZW5jZTxDb25kaXRpb24+IHtcbiAgLy8gVE9ETzogZGVmaW5lIHNwZWNpZmljIGRpZmZlcmVuY2UgYXR0cmlidXRlc1xufVxuXG5leHBvcnQgdHlwZSBNYXBwaW5nID0gYW55O1xuZXhwb3J0IGNsYXNzIE1hcHBpbmdEaWZmZXJlbmNlIGV4dGVuZHMgRGlmZmVyZW5jZTxNYXBwaW5nPiB7XG4gIC8vIFRPRE86IGRlZmluZSBzcGVjaWZpYyBkaWZmZXJlbmNlIGF0dHJpYnV0ZXNcbn1cblxuZXhwb3J0IHR5cGUgUnVsZSA9IGFueTtcbmV4cG9ydCBjbGFzcyBSdWxlRGlmZmVyZW5jZSBleHRlbmRzIERpZmZlcmVuY2U8UnVsZT4ge1xuICAvLyBUT0RPOiBkZWZpbmUgc3BlY2lmaWMgZGlmZmVyZW5jZSBhdHRyaWJ1dGVzXG59XG5cbmV4cG9ydCB0eXBlIE1ldGFkYXRhID0gYW55O1xuZXhwb3J0IGNsYXNzIE1ldGFkYXRhRGlmZmVyZW5jZSBleHRlbmRzIERpZmZlcmVuY2U8TWV0YWRhdGE+IHtcbiAgLy8gVE9ETzogZGVmaW5lIHNwZWNpZmljIGRpZmZlcmVuY2UgYXR0cmlidXRlc1xufVxuXG5leHBvcnQgdHlwZSBPdXRwdXQgPSBhbnk7XG5leHBvcnQgY2xhc3MgT3V0cHV0RGlmZmVyZW5jZSBleHRlbmRzIERpZmZlcmVuY2U8T3V0cHV0PiB7XG4gIC8vIFRPRE86IGRlZmluZSBzcGVjaWZpYyBkaWZmZXJlbmNlIGF0dHJpYnV0ZXNcbn1cblxuZXhwb3J0IHR5cGUgUGFyYW1ldGVyID0gYW55O1xuZXhwb3J0IGNsYXNzIFBhcmFtZXRlckRpZmZlcmVuY2UgZXh0ZW5kcyBEaWZmZXJlbmNlPFBhcmFtZXRlcj4ge1xuICAvLyBUT0RPOiBkZWZpbmUgc3BlY2lmaWMgZGlmZmVyZW5jZSBhdHRyaWJ1dGVzXG59XG5cbmV4cG9ydCBlbnVtIFJlc291cmNlSW1wYWN0IHtcbiAgLyoqIFRoZSBleGlzdGluZyBwaHlzaWNhbCByZXNvdXJjZSB3aWxsIGJlIHVwZGF0ZWQgKi9cbiAgV0lMTF9VUERBVEUgPSAnV0lMTF9VUERBVEUnLFxuICAvKiogQSBuZXcgcGh5c2ljYWwgcmVzb3VyY2Ugd2lsbCBiZSBjcmVhdGVkICovXG4gIFdJTExfQ1JFQVRFID0gJ1dJTExfQ1JFQVRFJyxcbiAgLyoqIFRoZSBleGlzdGluZyBwaHlzaWNhbCByZXNvdXJjZSB3aWxsIGJlIHJlcGxhY2VkICovXG4gIFdJTExfUkVQTEFDRSA9ICdXSUxMX1JFUExBQ0UnLFxuICAvKiogVGhlIGV4aXN0aW5nIHBoeXNpY2FsIHJlc291cmNlIG1heSBiZSByZXBsYWNlZCAqL1xuICBNQVlfUkVQTEFDRSA9ICdNQVlfUkVQTEFDRScsXG4gIC8qKiBUaGUgZXhpc3RpbmcgcGh5c2ljYWwgcmVzb3VyY2Ugd2lsbCBiZSBkZXN0cm95ZWQgKi9cbiAgV0lMTF9ERVNUUk9ZID0gJ1dJTExfREVTVFJPWScsXG4gIC8qKiBUaGUgZXhpc3RpbmcgcGh5c2ljYWwgcmVzb3VyY2Ugd2lsbCBiZSByZW1vdmVkIGZyb20gUk9TIHN1cGVydmlzaW9uICovXG4gIFdJTExfT1JQSEFOID0gJ1dJTExfT1JQSEFOJyxcbiAgLyoqIFRoZXJlIGlzIG5vIGNoYW5nZSBpbiB0aGlzIHJlc291cmNlICovXG4gIE5PX0NIQU5HRSA9ICdOT19DSEFOR0UnLFxufVxuXG4vKipcbiAqIFRoaXMgZnVuY3Rpb24gY2FuIGJlIHVzZWQgYXMgYSByZWR1Y2VyIHRvIG9idGFpbiB0aGUgcmVzb3VyY2UtbGV2ZWwgaW1wYWN0IG9mIGEgbGlzdFxuICogb2YgcHJvcGVydHktbGV2ZWwgaW1wYWN0cy5cbiAqIEBwYXJhbSBvbmUgdGhlIGN1cnJlbnQgd29yc3QgaW1wYWN0IHNvIGZhci5cbiAqIEBwYXJhbSB0d28gdGhlIG5ldyBpbXBhY3QgYmVpbmcgY29uc2lkZXJlZCAoY2FuIGJlIHVuZGVmaW5lZCwgYXMgd2UgbWF5IG5vdCBhbHdheXMgYmVcbiAqICAgICAgYWJsZSB0byBkZXRlcm1pbmUgc29tZSBwZXJvcGVydHkncyBpbXBhY3QpLlxuICovXG5mdW5jdGlvbiB3b3JzdEltcGFjdChvbmU6IFJlc291cmNlSW1wYWN0LCB0d28/OiBSZXNvdXJjZUltcGFjdCk6IFJlc291cmNlSW1wYWN0IHtcbiAgaWYgKCF0d28pIHtcbiAgICByZXR1cm4gb25lO1xuICB9XG4gIGNvbnN0IGJhZG5lc3MgPSB7XG4gICAgW1Jlc291cmNlSW1wYWN0Lk5PX0NIQU5HRV06IDAsXG4gICAgW1Jlc291cmNlSW1wYWN0LldJTExfVVBEQVRFXTogMSxcbiAgICBbUmVzb3VyY2VJbXBhY3QuV0lMTF9DUkVBVEVdOiAyLFxuICAgIFtSZXNvdXJjZUltcGFjdC5XSUxMX09SUEhBTl06IDMsXG4gICAgW1Jlc291cmNlSW1wYWN0Lk1BWV9SRVBMQUNFXTogNCxcbiAgICBbUmVzb3VyY2VJbXBhY3QuV0lMTF9SRVBMQUNFXTogNSxcbiAgICBbUmVzb3VyY2VJbXBhY3QuV0lMTF9ERVNUUk9ZXTogNixcbiAgfTtcbiAgcmV0dXJuIGJhZG5lc3Nbb25lXSA+IGJhZG5lc3NbdHdvXSA/IG9uZSA6IHR3bztcbn1cblxuZXhwb3J0IGludGVyZmFjZSBSZXNvdXJjZSB7XG4gIFR5cGU6IHN0cmluZztcbiAgUHJvcGVydGllcz86IHsgW25hbWU6IHN0cmluZ106IGFueSB9O1xuXG4gIFtrZXk6IHN0cmluZ106IGFueTtcbn1cblxuLyoqXG4gKiBDaGFuZ2UgdG8gYSBzaW5nbGUgcmVzb3VyY2UgYmV0d2VlbiB0d28gUk9TIHRlbXBsYXRlc1xuICpcbiAqIFRoaXMgY2xhc3MgY2FuIGJlIG11dGF0ZWQgYWZ0ZXIgY29uc3RydWN0aW9uLlxuICovXG5leHBvcnQgY2xhc3MgUmVzb3VyY2VEaWZmZXJlbmNlIGltcGxlbWVudHMgSURpZmZlcmVuY2U8UmVzb3VyY2U+IHtcbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhpcyByZXNvdXJjZSB3YXMgYWRkZWRcbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBpc0FkZGl0aW9uOiBib29sZWFuO1xuXG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoaXMgcmVzb3VyY2Ugd2FzIHJlbW92ZWRcbiAgICovXG4gIHB1YmxpYyByZWFkb25seSBpc1JlbW92YWw6IGJvb2xlYW47XG5cbiAgLyoqIFByb3BlcnR5LWxldmVsIGNoYW5nZXMgb24gdGhlIHJlc291cmNlICovXG4gIHByaXZhdGUgcmVhZG9ubHkgcHJvcGVydHlEaWZmczogeyBba2V5OiBzdHJpbmddOiBQcm9wZXJ0eURpZmZlcmVuY2U8YW55PiB9O1xuXG4gIC8qKiBDaGFuZ2VzIHRvIG5vbi1wcm9wZXJ0eSBsZXZlbCBhdHRyaWJ1dGVzIG9mIHRoZSByZXNvdXJjZSAqL1xuICBwcml2YXRlIHJlYWRvbmx5IG90aGVyRGlmZnM6IHsgW2tleTogc3RyaW5nXTogRGlmZmVyZW5jZTxhbnk+IH07XG5cbiAgLyoqIFRoZSByZXNvdXJjZSB0eXBlIChvciBvbGQgYW5kIG5ldyB0eXBlIGlmIGl0IGhhcyBjaGFuZ2VkKSAqL1xuICBwcml2YXRlIHJlYWRvbmx5IHJlc291cmNlVHlwZXM6IHsgcmVhZG9ubHkgb2xkVHlwZT86IHN0cmluZzsgcmVhZG9ubHkgbmV3VHlwZT86IHN0cmluZyB9O1xuXG4gIGNvbnN0cnVjdG9yKFxuICAgIHB1YmxpYyByZWFkb25seSBvbGRWYWx1ZTogUmVzb3VyY2UgfCB1bmRlZmluZWQsXG4gICAgcHVibGljIHJlYWRvbmx5IG5ld1ZhbHVlOiBSZXNvdXJjZSB8IHVuZGVmaW5lZCxcbiAgICBhcmdzOiB7XG4gICAgICByZXNvdXJjZVR5cGU6IHsgb2xkVHlwZT86IHN0cmluZzsgbmV3VHlwZT86IHN0cmluZyB9O1xuICAgICAgcHJvcGVydHlEaWZmczogeyBba2V5OiBzdHJpbmddOiBQcm9wZXJ0eURpZmZlcmVuY2U8YW55PiB9O1xuICAgICAgb3RoZXJEaWZmczogeyBba2V5OiBzdHJpbmddOiBEaWZmZXJlbmNlPGFueT4gfTtcbiAgICB9LFxuICApIHtcbiAgICB0aGlzLnJlc291cmNlVHlwZXMgPSBhcmdzLnJlc291cmNlVHlwZTtcbiAgICB0aGlzLnByb3BlcnR5RGlmZnMgPSBhcmdzLnByb3BlcnR5RGlmZnM7XG4gICAgdGhpcy5vdGhlckRpZmZzID0gYXJncy5vdGhlckRpZmZzO1xuXG4gICAgdGhpcy5pc0FkZGl0aW9uID0gb2xkVmFsdWUgPT09IHVuZGVmaW5lZDtcbiAgICB0aGlzLmlzUmVtb3ZhbCA9IG5ld1ZhbHVlID09PSB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG9sZFByb3BlcnRpZXMoKTogUHJvcGVydHlNYXAgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLm9sZFZhbHVlICYmIHRoaXMub2xkVmFsdWUuUHJvcGVydGllcztcbiAgfVxuXG4gIHB1YmxpYyBnZXQgbmV3UHJvcGVydGllcygpOiBQcm9wZXJ0eU1hcCB8IHVuZGVmaW5lZCB7XG4gICAgcmV0dXJuIHRoaXMubmV3VmFsdWUgJiYgdGhpcy5uZXdWYWx1ZS5Qcm9wZXJ0aWVzO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhpcyByZXNvdXJjZSB3YXMgbW9kaWZpZWQgYXQgYWxsXG4gICAqL1xuICBwdWJsaWMgZ2V0IGlzRGlmZmVyZW50KCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmRpZmZlcmVuY2VDb3VudCA+IDAgfHwgdGhpcy5vbGRSZXNvdXJjZVR5cGUgIT09IHRoaXMubmV3UmVzb3VyY2VUeXBlO1xuICB9XG5cbiAgLyoqXG4gICAqIFdoZXRoZXIgdGhlIHJlc291cmNlIHdhcyB1cGRhdGVkIGluLXBsYWNlXG4gICAqL1xuICBwdWJsaWMgZ2V0IGlzVXBkYXRlKCk6IGJvb2xlYW4ge1xuICAgIHJldHVybiB0aGlzLmlzRGlmZmVyZW50ICYmICF0aGlzLmlzQWRkaXRpb24gJiYgIXRoaXMuaXNSZW1vdmFsO1xuICB9XG5cbiAgcHVibGljIGdldCBvbGRSZXNvdXJjZVR5cGUoKTogc3RyaW5nIHwgdW5kZWZpbmVkIHtcbiAgICByZXR1cm4gdGhpcy5yZXNvdXJjZVR5cGVzLm9sZFR5cGU7XG4gIH1cblxuICBwdWJsaWMgZ2V0IG5ld1Jlc291cmNlVHlwZSgpOiBzdHJpbmcgfCB1bmRlZmluZWQge1xuICAgIHJldHVybiB0aGlzLnJlc291cmNlVHlwZXMubmV3VHlwZTtcbiAgfVxuXG4gIC8qKlxuICAgKiBBbGwgYWN0dWFsIHByb3BlcnR5IHVwZGF0ZXNcbiAgICovXG4gIHB1YmxpYyBnZXQgcHJvcGVydHlVcGRhdGVzKCk6IHsgW2tleTogc3RyaW5nXTogUHJvcGVydHlEaWZmZXJlbmNlPGFueT4gfSB7XG4gICAgcmV0dXJuIG9ubHlDaGFuZ2VzKHRoaXMucHJvcGVydHlEaWZmcyk7XG4gIH1cblxuICAvKipcbiAgICogQWxsIGFjdHVhbCBcIm90aGVyXCIgdXBkYXRlc1xuICAgKi9cbiAgcHVibGljIGdldCBvdGhlckNoYW5nZXMoKTogeyBba2V5OiBzdHJpbmddOiBEaWZmZXJlbmNlPGFueT4gfSB7XG4gICAgcmV0dXJuIG9ubHlDaGFuZ2VzKHRoaXMub3RoZXJEaWZmcyk7XG4gIH1cblxuICAvKipcbiAgICogUmV0dXJuIHdoZXRoZXIgdGhlIHJlc291cmNlIHR5cGUgd2FzIGNoYW5nZWQgaW4gdGhpcyBkaWZmXG4gICAqXG4gICAqIFRoaXMgaXMgbm90IGEgdmFsaWQgb3BlcmF0aW9uIGluIFJPUyBidXQgdG8gYmUgZGVmZW5zaXZlIHdlJ3JlIGdvaW5nXG4gICAqIHRvIGJlIGF3YXJlIG9mIGl0IGFueXdheS5cbiAgICovXG4gIHB1YmxpYyBnZXQgcmVzb3VyY2VUeXBlQ2hhbmdlZCgpOiBib29sZWFuIHtcbiAgICByZXR1cm4gKFxuICAgICAgdGhpcy5yZXNvdXJjZVR5cGVzLm9sZFR5cGUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgdGhpcy5yZXNvdXJjZVR5cGVzLm5ld1R5cGUgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgdGhpcy5yZXNvdXJjZVR5cGVzLm9sZFR5cGUgIT09IHRoaXMucmVzb3VyY2VUeXBlcy5uZXdUeXBlXG4gICAgKTtcbiAgfVxuXG4gIC8qKlxuICAgKiBSZXR1cm4gdGhlIHJlc291cmNlIHR5cGUgaWYgaXQgd2FzIHVuY2hhbmdlZFxuICAgKlxuICAgKiBJZiB0aGUgcmVzb3VyY2UgdHlwZSB3YXMgY2hhbmdlZCwgaXQncyBhbiBlcnJvciB0byBjYWxsIHRoaXMuXG4gICAqL1xuICBwdWJsaWMgZ2V0IHJlc291cmNlVHlwZSgpOiBzdHJpbmcge1xuICAgIGlmICh0aGlzLnJlc291cmNlVHlwZUNoYW5nZWQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IGdldCAucmVzb3VyY2VUeXBlLCBiZWNhdXNlIHRoZSB0eXBlIHdhcyBjaGFuZ2VkJyk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnJlc291cmNlVHlwZXMub2xkVHlwZSB8fCB0aGlzLnJlc291cmNlVHlwZXMubmV3VHlwZSE7XG4gIH1cblxuICAvKipcbiAgICogUmVwbGFjZSBhIFByb3BlcnR5Q2hhbmdlIGluIHRoaXMgb2JqZWN0XG4gICAqXG4gICAqIFRoaXMgYWZmZWN0cyB0aGUgcHJvcGVydHkgZGlmZiBhcyBpdCBpcyBzdW1tYXJpemVkIHRvIHVzZXJzLCBidXQgaXQgRE9FU1xuICAgKiBOT1QgYWZmZWN0IGVpdGhlciB0aGUgXCJvbGRWYWx1ZVwiIG9yIFwibmV3VmFsdWVcIiB2YWx1ZXM7IHRob3NlIHN0aWxsIGNvbnRhaW5cbiAgICogdGhlIGFjdHVhbCB0ZW1wbGF0ZSB2YWx1ZXMgYXMgcHJvdmlkZWQgYnkgdGhlIHVzZXIgKHRoZXkgbWlnaHQgc3RpbGwgYmVcbiAgICogdXNlZCBmb3IgZG93bnN0cmVhbSBwcm9jZXNzaW5nKS5cbiAgICovXG4gIHB1YmxpYyBzZXRQcm9wZXJ0eUNoYW5nZShwcm9wZXJ0eU5hbWU6IHN0cmluZywgY2hhbmdlOiBQcm9wZXJ0eURpZmZlcmVuY2U8YW55Pikge1xuICAgIHRoaXMucHJvcGVydHlEaWZmc1twcm9wZXJ0eU5hbWVdID0gY2hhbmdlO1xuICB9XG5cbiAgcHVibGljIGdldCBjaGFuZ2VJbXBhY3QoKTogUmVzb3VyY2VJbXBhY3Qge1xuICAgIC8vIENoZWNrIHRoZSBUeXBlIGZpcnN0XG4gICAgaWYgKHRoaXMucmVzb3VyY2VUeXBlcy5vbGRUeXBlICE9PSB0aGlzLnJlc291cmNlVHlwZXMubmV3VHlwZSkge1xuICAgICAgaWYgKHRoaXMucmVzb3VyY2VUeXBlcy5vbGRUeXBlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIFJlc291cmNlSW1wYWN0LldJTExfQ1JFQVRFO1xuICAgICAgfVxuICAgICAgaWYgKHRoaXMucmVzb3VyY2VUeXBlcy5uZXdUeXBlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub2xkVmFsdWUhLkRlbGV0aW9uUG9saWN5ID09PSAnUmV0YWluJyA/IFJlc291cmNlSW1wYWN0LldJTExfT1JQSEFOIDogUmVzb3VyY2VJbXBhY3QuV0lMTF9ERVNUUk9ZO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFJlc291cmNlSW1wYWN0LldJTExfUkVQTEFDRTtcbiAgICB9XG5cbiAgICAvLyBCYXNlIGltcGFjdCAoYmVmb3JlIHdlIG1peCBpbiB0aGUgd29yc3Qgb2YgdGhlIHByb3BlcnR5IGltcGFjdHMpO1xuICAgIC8vIFdJTExfVVBEQVRFIGlmIHdlIGhhdmUgXCJvdGhlclwiIGNoYW5nZXMsIE5PX0NIQU5HRSBpZiB0aGVyZSBhcmUgbm8gXCJvdGhlclwiIGNoYW5nZXMuXG4gICAgY29uc3QgYmFzZUltcGFjdCA9XG4gICAgICBPYmplY3Qua2V5cyh0aGlzLm90aGVyQ2hhbmdlcykubGVuZ3RoID4gMCA/IFJlc291cmNlSW1wYWN0LldJTExfVVBEQVRFIDogUmVzb3VyY2VJbXBhY3QuTk9fQ0hBTkdFO1xuXG4gICAgcmV0dXJuIE9iamVjdC52YWx1ZXModGhpcy5wcm9wZXJ0eURpZmZzKVxuICAgICAgLm1hcCgoZWx0KSA9PiBlbHQuY2hhbmdlSW1wYWN0KVxuICAgICAgLnJlZHVjZSh3b3JzdEltcGFjdCwgYmFzZUltcGFjdCk7XG4gIH1cblxuICAvKipcbiAgICogQ291bnQgb2YgYWN0dWFsIGRpZmZlcmVuY2VzIChub3Qgb2YgZWxlbWVudHMpXG4gICAqL1xuICBwdWJsaWMgZ2V0IGRpZmZlcmVuY2VDb3VudCgpOiBudW1iZXIge1xuICAgIHJldHVybiBPYmplY3QudmFsdWVzKHRoaXMucHJvcGVydHlVcGRhdGVzKS5sZW5ndGggKyBPYmplY3QudmFsdWVzKHRoaXMub3RoZXJDaGFuZ2VzKS5sZW5ndGg7XG4gIH1cblxuICAvKipcbiAgICogSW52b2tlIGEgY2FsbGJhY2sgZm9yIGVhY2ggYWN0dWFsIGRpZmZlcmVuY2VcbiAgICovXG4gIHB1YmxpYyBmb3JFYWNoRGlmZmVyZW5jZShcbiAgICBjYjogKHR5cGU6ICdQcm9wZXJ0eScgfCAnT3RoZXInLCBuYW1lOiBzdHJpbmcsIHZhbHVlOiBEaWZmZXJlbmNlPGFueT4gfCBQcm9wZXJ0eURpZmZlcmVuY2U8YW55PikgPT4gYW55LFxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLnByb3BlcnR5VXBkYXRlcykuc29ydCgpKSB7XG4gICAgICBjYignUHJvcGVydHknLCBrZXksIHRoaXMucHJvcGVydHlVcGRhdGVzW2tleV0pO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyh0aGlzLm90aGVyQ2hhbmdlcykuc29ydCgpKSB7XG4gICAgICBjYignT3RoZXInLCBrZXksIHRoaXMub3RoZXJEaWZmc1trZXldKTtcbiAgICB9XG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvcGVydHlEaWZmZXJlbmNlPFQ+KGRpZmY6IERpZmZlcmVuY2U8VD4pOiBkaWZmIGlzIFByb3BlcnR5RGlmZmVyZW5jZTxUPiB7XG4gIHJldHVybiAoZGlmZiBhcyBQcm9wZXJ0eURpZmZlcmVuY2U8VD4pLmNoYW5nZUltcGFjdCAhPT0gdW5kZWZpbmVkO1xufVxuXG4vKipcbiAqIEZpbHRlciBhIG1hcCBvZiBJRGlmZmVyZW5jZXMgZG93biB0byBvbmx5IHJldGFpbiB0aGUgYWN0dWFsIGNoYW5nZXNcbiAqL1xuZnVuY3Rpb24gb25seUNoYW5nZXM8ViwgVCBleHRlbmRzIElEaWZmZXJlbmNlPFY+Pih4czogeyBba2V5OiBzdHJpbmddOiBUIH0pOiB7IFtrZXk6IHN0cmluZ106IFQgfSB7XG4gIGlmICh4cyA9PT0gdW5kZWZpbmVkIHx8IHhzID09PSBudWxsKSB7XG4gICAgcmV0dXJuIHt9O1xuICB9XG4gIGNvbnN0IHJldDogeyBba2V5OiBzdHJpbmddOiBUIH0gPSB7fTtcbiAgZm9yIChjb25zdCBba2V5LCBkaWZmXSBvZiBPYmplY3QuZW50cmllcyh4cykpIHtcbiAgICBpZiAoZGlmZi5pc0RpZmZlcmVudCkge1xuICAgICAgcmV0W2tleV0gPSBkaWZmO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmV0O1xufVxuIl19