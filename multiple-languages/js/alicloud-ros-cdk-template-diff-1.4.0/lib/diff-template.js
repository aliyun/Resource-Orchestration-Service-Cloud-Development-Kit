"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.diffResource = exports.diffTemplate = void 0;
const impl = require("./diff");
const types = require("./diff/types");
const util_1 = require("./diff/util");
__exportStar(require("./diff/types"), exports);
const DIFF_HANDLERS = {
    Description: (diff, oldValue, newValue) => (diff.description = impl.diffAttribute(oldValue, newValue)),
    Metadata: (diff, oldValue, newValue) => (diff.metadata = new types.DifferenceCollection(util_1.diffKeyedEntities(oldValue, newValue, impl.diffMetadata))),
    Parameters: (diff, oldValue, newValue) => (diff.parameters = new types.DifferenceCollection(util_1.diffKeyedEntities(oldValue, newValue, impl.diffParameter))),
    Mappings: (diff, oldValue, newValue) => (diff.mappings = new types.DifferenceCollection(util_1.diffKeyedEntities(oldValue, newValue, impl.diffMapping))),
    Rules: (diff, oldValue, newValue) => (diff.rules = new types.DifferenceCollection(util_1.diffKeyedEntities(oldValue, newValue, impl.diffRule))),
    Conditions: (diff, oldValue, newValue) => (diff.conditions = new types.DifferenceCollection(util_1.diffKeyedEntities(oldValue, newValue, impl.diffCondition))),
    Transform: (diff, oldValue, newValue) => (diff.transform = impl.diffAttribute(oldValue, newValue)),
    Resources: (diff, oldValue, newValue) => (diff.resources = new types.DifferenceCollection(util_1.diffKeyedEntities(oldValue, newValue, impl.diffResource))),
    Outputs: (diff, oldValue, newValue) => (diff.outputs = new types.DifferenceCollection(util_1.diffKeyedEntities(oldValue, newValue, impl.diffOutput))),
};
/**
 * Compare two ROS templates and return semantic differences between them.
 *
 * @param currentTemplate the current state of the stack.
 * @param newTemplate     the target state of the stack.
 *
 * @returns a +types.TemplateDiff+ object that represents the changes that will happen if
 *      a stack which current state is described by +currentTemplate+ is updated with
 *      the template +newTemplate+.
 */
function diffTemplate(currentTemplate, newTemplate) {
    // Base diff
    const theDiff = calculateTemplateDiff(currentTemplate, newTemplate);
    // We're going to modify this in-place
    const newTemplateCopy = deepCopy(newTemplate);
    let didPropagateReferenceChanges;
    let diffWithReplacements;
    do {
        diffWithReplacements = calculateTemplateDiff(currentTemplate, newTemplateCopy);
        // Propagate replacements for replaced resources
        didPropagateReferenceChanges = false;
        if (diffWithReplacements.resources) {
            diffWithReplacements.resources.forEachDifference((logicalId, change) => {
                if (change.changeImpact === types.ResourceImpact.WILL_REPLACE) {
                    if (propagateReplacedReferences(newTemplateCopy, logicalId)) {
                        didPropagateReferenceChanges = true;
                    }
                }
            });
        }
    } while (didPropagateReferenceChanges);
    // Copy "replaced" states from `diffWithReplacements` to `theDiff`.
    diffWithReplacements.resources
        .filter((r) => isReplacement(r.changeImpact))
        .forEachDifference((logicalId, downstreamReplacement) => {
        const resource = theDiff.resources.get(logicalId);
        if (resource.changeImpact !== downstreamReplacement.changeImpact) {
            propagatePropertyReplacement(downstreamReplacement, resource);
        }
    });
    return theDiff;
}
exports.diffTemplate = diffTemplate;
function isReplacement(impact) {
    return impact === types.ResourceImpact.MAY_REPLACE || impact === types.ResourceImpact.WILL_REPLACE;
}
/**
 * For all properties in 'source' that have a "replacement" impact, propagate that impact to "dest"
 */
function propagatePropertyReplacement(source, dest) {
    for (const [propertyName, diff] of Object.entries(source.propertyUpdates)) {
        if (diff.changeImpact && isReplacement(diff.changeImpact)) {
            // Use the propertydiff of source in target. The result of this happens to be clear enough.
            dest.setPropertyChange(propertyName, diff);
        }
    }
}
function calculateTemplateDiff(currentTemplate, newTemplate) {
    const differences = {};
    const unknown = {};
    for (const key of util_1.unionOf(Object.keys(currentTemplate), Object.keys(newTemplate)).sort()) {
        const oldValue = currentTemplate[key];
        const newValue = newTemplate[key];
        if (util_1.deepEqual(oldValue, newValue)) {
            continue;
        }
        const handler = DIFF_HANDLERS[key] || ((_diff, oldV, newV) => (unknown[key] = impl.diffUnknown(oldV, newV)));
        handler(differences, oldValue, newValue);
    }
    if (Object.keys(unknown).length > 0) {
        differences.unknown = new types.DifferenceCollection(unknown);
    }
    return new types.TemplateDiff(differences);
}
/**
 * Compare two ROS resources and return semantic differences between them
 */
function diffResource(oldValue, newValue) {
    return impl.diffResource(oldValue, newValue);
}
exports.diffResource = diffResource;
/**
 * Replace all references to the given logicalID on the given template, in-place
 *
 * Returns true iff any references were replaced.
 */
function propagateReplacedReferences(template, logicalId) {
    let ret = false;
    function recurse(obj) {
        if (Array.isArray(obj)) {
            obj.forEach(recurse);
        }
        if (typeof obj === 'object' && obj !== null) {
            if (!replaceReference(obj)) {
                Object.values(obj).forEach(recurse);
            }
        }
    }
    function replaceReference(obj) {
        const keys = Object.keys(obj);
        if (keys.length !== 1) {
            return false;
        }
        const key = keys[0];
        if (key === 'Ref') {
            if (obj.Ref === logicalId) {
                obj.Ref = logicalId + ' (replaced)';
                ret = true;
            }
            return true;
        }
        if (key.startsWith('Fn::')) {
            if (Array.isArray(obj[key]) && obj[key].length > 0 && obj[key][0] === logicalId) {
                obj[key][0] = logicalId + '(replaced)';
                ret = true;
            }
            return true;
        }
        return false;
    }
    recurse(template);
    return ret;
}
function deepCopy(x) {
    if (Array.isArray(x)) {
        return x.map(deepCopy);
    }
    if (typeof x === 'object' && x !== null) {
        const ret = {};
        for (const key of Object.keys(x)) {
            ret[key] = deepCopy(x[key]);
        }
        return ret;
    }
    return x;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZi10ZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmYtdGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUErQjtBQUMvQixzQ0FBc0M7QUFDdEMsc0NBQW9FO0FBRXBFLCtDQUE2QjtBQUs3QixNQUFNLGFBQWEsR0FBb0I7SUFDckMsV0FBVyxFQUFFLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN0RyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQ3JDLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyx3QkFBaUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQzVHLFVBQVUsRUFBRSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FDdkMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksS0FBSyxDQUFDLG9CQUFvQixDQUFDLHdCQUFpQixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDL0csUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUNyQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsb0JBQW9CLENBQUMsd0JBQWlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUMzRyxLQUFLLEVBQUUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEs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S0FDeEI7SUFFRCxJQUFJLE9BQU8sQ0FBQyxLQUFLLFFBQVEsSUFBSSxDQUFDLEtBQUssSUFBSSxFQUFFO1FBQ3ZDLE1BQU0sR0FBRyxHQUFRLEVBQUUsQ0FBQztRQUNwQixLQUFLLE1BQU0sR0FBRyxJQUFJLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDaEMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFFBQVEsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztTQUM3QjtRQUNELE9BQU8sR0FBRyxDQUFDO0tBQ1o7SUFFRCxPQUFPLENBQUMsQ0FBQztBQUNYLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBpbXBsIGZyb20gJy4vZGlmZic7XG5pbXBvcnQgKiBhcyB0eXBlcyBmcm9tICcuL2RpZmYvdHlwZXMnO1xuaW1wb3J0IHsgZGVlcEVxdWFsLCBkaWZmS2V5ZWRFbnRpdGllcywgdW5pb25PZiB9IGZyb20gJy4vZGlmZi91dGlsJztcblxuZXhwb3J0ICogZnJvbSAnLi9kaWZmL3R5cGVzJztcblxudHlwZSBEaWZmSGFuZGxlciA9IChkaWZmOiB0eXBlcy5JVGVtcGxhdGVEaWZmLCBvbGRWYWx1ZTogYW55LCBuZXdWYWx1ZTogYW55KSA9PiB2b2lkO1xudHlwZSBIYW5kbGVyUmVnaXN0cnkgPSB7IFtzZWN0aW9uOiBzdHJpbmddOiBEaWZmSGFuZGxlciB9O1xuXG5jb25zdCBESUZGX0hBTkRMRVJTOiBIYW5kbGVyUmVnaXN0cnkgPSB7XG4gIERlc2NyaXB0aW9uOiAoZGlmZiwgb2xkVmFsdWUsIG5ld1ZhbHVlKSA9PiAoZGlmZi5kZXNjcmlwdGlvbiA9IGltcGwuZGlmZkF0dHJpYnV0ZShvbGRWYWx1ZSwgbmV3VmFsdWUpKSxcbiAgTWV0YWRhdGE6IChkaWZmLCBvbGRWYWx1ZSwgbmV3VmFsdWUpID0+XG4gICAgKGRpZmYubWV0YWRhdGEgPSBuZXcgdHlwZXMuRGlmZmVyZW5jZUNvbGxlY3Rpb24oZGlmZktleWVkRW50aXRpZXMob2xkVmFsdWUsIG5ld1ZhbHVlLCBpbXBsLmRpZmZNZXRhZGF0YSkpKSxcbiAgUGFyYW1ldGVyczogKGRpZmYsIG9sZFZhbHVlLCBuZXdWYWx1ZSkgPT5cbiAgICAoZGlmZi5wYXJhbWV0ZXJzID0gbmV3IHR5cGVzLkRpZmZlcmVuY2VDb2xsZWN0aW9uKGRpZmZLZXllZEVudGl0aWVzKG9sZFZhbHVlLCBuZXdWYWx1ZSwgaW1wbC5kaWZmUGFyYW1ldGVyKSkpLFxuICBNYXBwaW5nczogKGRpZmYsIG9sZFZhbHVlLCBuZXdWYWx1ZSkgPT5cbiAgICAoZGlmZi5tYXBwaW5ncyA9IG5ldyB0eXBlcy5EaWZmZXJlbmNlQ29sbGVjdGlvbihkaWZmS2V5ZWRFbnRpdGllcyhvbGRWYWx1ZSwgbmV3VmFsdWUsIGltcGwuZGlmZk1hcHBpbmcpKSksXG4gIFJ1bGVzOiAoZGlmZiwgb2xkVmFsdWUsIG5ld1ZhbHVlKSA9PlxuICAgIChkaWZmLnJ1bGVzID0gbmV3IHR5cGVzLkRpZmZlcmVuY2VDb2xsZWN0aW9uKGRpZmZLZXllZEVudGl0aWVzKG9sZFZhbHVlLCBuZXdWYWx1ZSwgaW1wbC5kaWZmUnVsZSkpKSxcbiAgQ29uZGl0aW9uczogKGRpZmYsIG9sZFZhbHVlLCBuZXdWYWx1ZSkgPT5cbiAgICAoZGlmZi5jb25kaXRpb25zID0gbmV3IHR5cGVzLkRpZmZlcmVuY2VDb2xsZWN0aW9uKGRpZmZLZXllZEVudGl0aWVzKG9sZFZhbHVlLCBuZXdWYWx1ZSwgaW1wbC5kaWZmQ29uZGl0aW9uKSkpLFxuICBUcmFuc2Zvcm06IChkaWZmLCBvbGRWYWx1ZSwgbmV3VmFsdWUpID0+IChkaWZmLnRyYW5zZm9ybSA9IGltcGwuZGlmZkF0dHJpYnV0ZShvbGRWYWx1ZSwgbmV3VmFsdWUpKSxcbiAgUmVzb3VyY2VzOiAoZGlmZiwgb2xkVmFsdWUsIG5ld1ZhbHVlKSA9PlxuICAgIChkaWZmLnJlc291cmNlcyA9IG5ldyB0eXBlcy5EaWZmZXJlbmNlQ29sbGVjdGlvbihkaWZmS2V5ZWRFbnRpdGllcyhvbGRWYWx1ZSwgbmV3VmFsdWUsIGltcGwuZGlmZlJlc291cmNlKSkpLFxuICBPdXRwdXRzOiAoZGlmZiwgb2xkVmFsdWUsIG5ld1ZhbHVlKSA9PlxuICAgIChkaWZmLm91dHB1dHMgPSBuZXcgdHlwZXMuRGlmZmVyZW5jZUNvbGxlY3Rpb24oZGlmZktleWVkRW50aXRpZXMob2xkVmFsdWUsIG5ld1ZhbHVlLCBpbXBsLmRpZmZPdXRwdXQpKSksXG59O1xuXG4vKipcbiAqIENvbXBhcmUgdHdvIFJPUyB0ZW1wbGF0ZXMgYW5kIHJldHVybiBzZW1hbnRpYyBkaWZmZXJlbmNlcyBiZXR3ZWVuIHRoZW0uXG4gKlxuICogQHBhcmFtIGN1cnJlbnRUZW1wbGF0ZSB0aGUgY3VycmVudCBzdGF0ZSBvZiB0aGUgc3RhY2suXG4gKiBAcGFyYW0gbmV3VGVtcGxhdGUgICAgIHRoZSB0YXJnZXQgc3RhdGUgb2YgdGhlIHN0YWNrLlxuICpcbiAqIEByZXR1cm5zIGEgK3R5cGVzLlRlbXBsYXRlRGlmZisgb2JqZWN0IHRoYXQgcmVwcmVzZW50cyB0aGUgY2hhbmdlcyB0aGF0IHdpbGwgaGFwcGVuIGlmXG4gKiAgICAgIGEgc3RhY2sgd2hpY2ggY3VycmVudCBzdGF0ZSBpcyBkZXNjcmliZWQgYnkgK2N1cnJlbnRUZW1wbGF0ZSsgaXMgdXBkYXRlZCB3aXRoXG4gKiAgICAgIHRoZSB0ZW1wbGF0ZSArbmV3VGVtcGxhdGUrLlxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZlRlbXBsYXRlKFxuICBjdXJyZW50VGVtcGxhdGU6IHsgW2tleTogc3RyaW5nXTogYW55IH0sXG4gIG5ld1RlbXBsYXRlOiB7IFtrZXk6IHN0cmluZ106IGFueSB9LFxuKTogdHlwZXMuVGVtcGxhdGVEaWZmIHtcbiAgLy8gQmFzZSBkaWZmXG4gIGNvbnN0IHRoZURpZmYgPSBjYWxjdWxhdGVUZW1wbGF0ZURpZmYoY3VycmVudFRlbXBsYXRlLCBuZXdUZW1wbGF0ZSk7XG5cbiAgLy8gV2UncmUgZ29pbmcgdG8gbW9kaWZ5IHRoaXMgaW4tcGxhY2VcbiAgY29uc3QgbmV3VGVtcGxhdGVDb3B5ID0gZGVlcENvcHkobmV3VGVtcGxhdGUpO1xuXG4gIGxldCBkaWRQcm9wYWdhdGVSZWZlcmVuY2VDaGFuZ2VzO1xuICBsZXQgZGlmZldpdGhSZXBsYWNlbWVudHM7XG4gIGRvIHtcbiAgICBkaWZmV2l0aFJlcGxhY2VtZW50cyA9IGNhbGN1bGF0ZVRlbXBsYXRlRGlmZihjdXJyZW50VGVtcGxhdGUsIG5ld1RlbXBsYXRlQ29weSk7XG5cbiAgICAvLyBQcm9wYWdhdGUgcmVwbGFjZW1lbnRzIGZvciByZXBsYWNlZCByZXNvdXJjZXNcbiAgICBkaWRQcm9wYWdhdGVSZWZlcmVuY2VDaGFuZ2VzID0gZmFsc2U7XG4gICAgaWYgKGRpZmZXaXRoUmVwbGFjZW1lbnRzLnJlc291cmNlcykge1xuICAgICAgZGlmZldpdGhSZXBsYWNlbWVudHMucmVzb3VyY2VzLmZvckVhY2hEaWZmZXJlbmNlKChsb2dpY2FsSWQsIGNoYW5nZSkgPT4ge1xuICAgICAgICBpZiAoY2hhbmdlLmNoYW5nZUltcGFjdCA9PT0gdHlwZXMuUmVzb3VyY2VJbXBhY3QuV0lMTF9SRVBMQUNFKSB7XG4gICAgICAgICAgaWYgKHByb3BhZ2F0ZVJlcGxhY2VkUmVmZXJlbmNlcyhuZXdUZW1wbGF0ZUNvcHksIGxvZ2ljYWxJZCkpIHtcbiAgICAgICAgICAgIGRpZFByb3BhZ2F0ZVJlZmVyZW5jZUNoYW5nZXMgPSB0cnVlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICB9IHdoaWxlIChkaWRQcm9wYWdhdGVSZWZlcmVuY2VDaGFuZ2VzKTtcblxuICAvLyBDb3B5IFwicmVwbGFjZWRcIiBzdGF0ZXMgZnJvbSBgZGlmZldpdGhSZXBsYWNlbWVudHNgIHRvIGB0aGVEaWZmYC5cbiAgZGlmZldpdGhSZXBsYWNlbWVudHMucmVzb3VyY2VzXG4gICAgLmZpbHRlcigocikgPT4gaXNSZXBsYWNlbWVudChyIS5jaGFuZ2VJbXBhY3QpKVxuICAgIC5mb3JFYWNoRGlmZmVyZW5jZSgobG9naWNhbElkLCBkb3duc3RyZWFtUmVwbGFjZW1lbnQpID0+IHtcbiAgICAgIGNvbnN0IHJlc291cmNlID0gdGhlRGlmZi5yZXNvdXJjZXMuZ2V0KGxvZ2ljYWxJZCk7XG5cbiAgICAgIGlmIChyZXNvdXJjZS5jaGFuZ2VJbXBhY3QgIT09IGRvd25zdHJlYW1SZXBsYWNlbWVudC5jaGFuZ2VJbXBhY3QpIHtcbiAgICAgICAgcHJvcGFnYXRlUHJvcGVydHlSZXBsYWNlbWVudChkb3duc3RyZWFtUmVwbGFjZW1lbnQsIHJlc291cmNlKTtcbiAgICAgIH1cbiAgICB9KTtcblxuICByZXR1cm4gdGhlRGlmZjtcbn1cblxuZnVuY3Rpb24gaXNSZXBsYWNlbWVudChpbXBhY3Q6IHR5cGVzLlJlc291cmNlSW1wYWN0KSB7XG4gIHJldHVybiBpbXBhY3QgPT09IHR5cGVzLlJlc291cmNlSW1wYWN0Lk1BWV9SRVBMQUNFIHx8IGltcGFjdCA9PT0gdHlwZXMuUmVzb3VyY2VJbXBhY3QuV0lMTF9SRVBMQUNFO1xufVxuXG4vKipcbiAqIEZvciBhbGwgcHJvcGVydGllcyBpbiAnc291cmNlJyB0aGF0IGhhdmUgYSBcInJlcGxhY2VtZW50XCIgaW1wYWN0LCBwcm9wYWdhdGUgdGhhdCBpbXBhY3QgdG8gXCJkZXN0XCJcbiAqL1xuZnVuY3Rpb24gcHJvcGFnYXRlUHJvcGVydHlSZXBsYWNlbWVudChzb3VyY2U6IHR5cGVzLlJlc291cmNlRGlmZmVyZW5jZSwgZGVzdDogdHlwZXMuUmVzb3VyY2VEaWZmZXJlbmNlKSB7XG4gIGZvciAoY29uc3QgW3Byb3BlcnR5TmFtZSwgZGlmZl0gb2YgT2JqZWN0LmVudHJpZXMoc291cmNlLnByb3BlcnR5VXBkYXRlcykpIHtcbiAgICBpZiAoZGlmZi5jaGFuZ2VJbXBhY3QgJiYgaXNSZXBsYWNlbWVudChkaWZmLmNoYW5nZUltcGFjdCkpIHtcbiAgICAgIC8vIFVzZSB0aGUgcHJvcGVydHlkaWZmIG9mIHNvdXJjZSBpbiB0YXJnZXQuIFRoZSByZXN1bHQgb2YgdGhpcyBoYXBwZW5zIHRvIGJlIGNsZWFyIGVub3VnaC5cbiAgICAgIGRlc3Quc2V0UHJvcGVydHlDaGFuZ2UocHJvcGVydHlOYW1lLCBkaWZmKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsY3VsYXRlVGVtcGxhdGVEaWZmKFxuICBjdXJyZW50VGVtcGxhdGU6IHsgW2tleTogc3RyaW5nXTogYW55IH0sXG4gIG5ld1RlbXBsYXRlOiB7IFtrZXk6IHN0cmluZ106IGFueSB9LFxuKTogdHlwZXMuVGVtcGxhdGVEaWZmIHtcbiAgY29uc3QgZGlmZmVyZW5jZXM6IHR5cGVzLklUZW1wbGF0ZURpZmYgPSB7fTtcbiAgY29uc3QgdW5rbm93bjogeyBba2V5OiBzdHJpbmddOiB0eXBlcy5EaWZmZXJlbmNlPGFueT4gfSA9IHt9O1xuICBmb3IgKGNvbnN0IGtleSBvZiB1bmlvbk9mKE9iamVjdC5rZXlzKGN1cnJlbnRUZW1wbGF0ZSksIE9iamVjdC5rZXlzKG5ld1RlbXBsYXRlKSkuc29ydCgpKSB7XG4gICAgY29uc3Qgb2xkVmFsdWUgPSBjdXJyZW50VGVtcGxhdGVba2V5XTtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IG5ld1RlbXBsYXRlW2tleV07XG4gICAgaWYgKGRlZXBFcXVhbChvbGRWYWx1ZSwgbmV3VmFsdWUpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgY29uc3QgaGFuZGxlcjogRGlmZkhhbmRsZXIgPVxuICAgICAgRElGRl9IQU5ETEVSU1trZXldIHx8ICgoX2RpZmYsIG9sZFYsIG5ld1YpID0+ICh1bmtub3duW2tleV0gPSBpbXBsLmRpZmZVbmtub3duKG9sZFYsIG5ld1YpKSk7XG4gICAgaGFuZGxlcihkaWZmZXJlbmNlcywgb2xkVmFsdWUsIG5ld1ZhbHVlKTtcbiAgfVxuICBpZiAoT2JqZWN0LmtleXModW5rbm93bikubGVuZ3RoID4gMCkge1xuICAgIGRpZmZlcmVuY2VzLnVua25vd24gPSBuZXcgdHlwZXMuRGlmZmVyZW5jZUNvbGxlY3Rpb24odW5rbm93bik7XG4gIH1cblxuICByZXR1cm4gbmV3IHR5cGVzLlRlbXBsYXRlRGlmZihkaWZmZXJlbmNlcyk7XG59XG5cbi8qKlxuICogQ29tcGFyZSB0d28gUk9TIHJlc291cmNlcyBhbmQgcmV0dXJuIHNlbWFudGljIGRpZmZlcmVuY2VzIGJldHdlZW4gdGhlbVxuICovXG5leHBvcnQgZnVuY3Rpb24gZGlmZlJlc291cmNlKG9sZFZhbHVlOiB0eXBlcy5SZXNvdXJjZSwgbmV3VmFsdWU6IHR5cGVzLlJlc291cmNlKTogdHlwZXMuUmVzb3VyY2VEaWZmZXJlbmNlIHtcbiAgcmV0dXJuIGltcGwuZGlmZlJlc291cmNlKG9sZFZhbHVlLCBuZXdWYWx1ZSk7XG59XG5cbi8qKlxuICogUmVwbGFjZSBhbGwgcmVmZXJlbmNlcyB0byB0aGUgZ2l2ZW4gbG9naWNhbElEIG9uIHRoZSBnaXZlbiB0ZW1wbGF0ZSwgaW4tcGxhY2VcbiAqXG4gKiBSZXR1cm5zIHRydWUgaWZmIGFueSByZWZlcmVuY2VzIHdlcmUgcmVwbGFjZWQuXG4gKi9cbmZ1bmN0aW9uIHByb3BhZ2F0ZVJlcGxhY2VkUmVmZXJlbmNlcyh0ZW1wbGF0ZTogb2JqZWN0LCBsb2dpY2FsSWQ6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBsZXQgcmV0ID0gZmFsc2U7XG5cbiAgZnVuY3Rpb24gcmVjdXJzZShvYmo6IGFueSkge1xuICAgIGlmIChBcnJheS5pc0FycmF5KG9iaikpIHtcbiAgICAgIG9iai5mb3JFYWNoKHJlY3Vyc2UpO1xuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnb2JqZWN0JyAmJiBvYmogIT09IG51bGwpIHtcbiAgICAgIGlmICghcmVwbGFjZVJlZmVyZW5jZShvYmopKSB7XG4gICAgICAgIE9iamVjdC52YWx1ZXMob2JqKS5mb3JFYWNoKHJlY3Vyc2UpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIHJlcGxhY2VSZWZlcmVuY2Uob2JqOiBhbnkpIHtcbiAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMob2JqKTtcbiAgICBpZiAoa2V5cy5sZW5ndGggIT09IDEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3Qga2V5ID0ga2V5c1swXTtcblxuICAgIGlmIChrZXkgPT09ICdSZWYnKSB7XG4gICAgICBpZiAob2JqLlJlZiA9PT0gbG9naWNhbElkKSB7XG4gICAgICAgIG9iai5SZWYgPSBsb2dpY2FsSWQgKyAnIChyZXBsYWNlZCknO1xuICAgICAgICByZXQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgaWYgKGtleS5zdGFydHNXaXRoKCdGbjo6JykpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KG9ialtrZXldKSAmJiBvYmpba2V5XS5sZW5ndGggPiAwICYmIG9ialtrZXldWzBdID09PSBsb2dpY2FsSWQpIHtcbiAgICAgICAgb2JqW2tleV1bMF0gPSBsb2dpY2FsSWQgKyAnKHJlcGxhY2VkKSc7XG4gICAgICAgIHJldCA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICByZWN1cnNlKHRlbXBsYXRlKTtcbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gZGVlcENvcHkoeDogYW55KTogYW55IHtcbiAgaWYgKEFycmF5LmlzQXJyYXkoeCkpIHtcbiAgICByZXR1cm4geC5tYXAoZGVlcENvcHkpO1xuICB9XG5cbiAgaWYgKHR5cGVvZiB4ID09PSAnb2JqZWN0JyAmJiB4ICE9PSBudWxsKSB7XG4gICAgY29uc3QgcmV0OiBhbnkgPSB7fTtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBPYmplY3Qua2V5cyh4KSkge1xuICAgICAgcmV0W2tleV0gPSBkZWVwQ29weSh4W2tleV0pO1xuICAgIH1cbiAgICByZXR1cm4gcmV0O1xuICB9XG5cbiAgcmV0dXJuIHg7XG59XG4iXX0=