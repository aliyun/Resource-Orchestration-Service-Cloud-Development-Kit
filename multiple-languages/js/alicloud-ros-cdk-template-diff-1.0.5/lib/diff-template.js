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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZi10ZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmYtdGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLCtCQUErQjtBQUMvQixzQ0FBc0M7QUFDdEMsc0NBQW9FO0FBRXBFLCtDQUE2QjtBQUs3QixNQUFNLGFBQWEsR0FBb0I7SUFDckMsV0FBVyxFQUFFLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUFDLENBQUMsSUFBSSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLFFBQVEsRUFBRSxRQUFRLENBQUMsQ0FBQztJQUN0RyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQ3JDLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyx3QkFBaUIsQ0FBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQzVHLFVBQVUsRUFBRSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FDdkMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksS0FBSyxDQUFDLG9CQUFvQixDQUFDLHdCQUFpQixDQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxDQUFDLENBQUM7SUFDL0csUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUNyQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsb0JBQW9CLENBQUMsd0JBQWlCLENBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsV0FBVyxDQUFDLENBQUMsQ0FBQztJQUMzRyxVQUFVLEVBQUUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEs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QUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDN0I7UUFDRCxPQUFPLEdBQUcsQ0FBQztLQUNaO0lBRUQsT0FBTyxDQUFDLENBQUM7QUFDWCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgaW1wbCBmcm9tICcuL2RpZmYnO1xuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi9kaWZmL3R5cGVzJztcbmltcG9ydCB7IGRlZXBFcXVhbCwgZGlmZktleWVkRW50aXRpZXMsIHVuaW9uT2YgfSBmcm9tICcuL2RpZmYvdXRpbCc7XG5cbmV4cG9ydCAqIGZyb20gJy4vZGlmZi90eXBlcyc7XG5cbnR5cGUgRGlmZkhhbmRsZXIgPSAoZGlmZjogdHlwZXMuSVRlbXBsYXRlRGlmZiwgb2xkVmFsdWU6IGFueSwgbmV3VmFsdWU6IGFueSkgPT4gdm9pZDtcbnR5cGUgSGFuZGxlclJlZ2lzdHJ5ID0geyBbc2VjdGlvbjogc3RyaW5nXTogRGlmZkhhbmRsZXIgfTtcblxuY29uc3QgRElGRl9IQU5ETEVSUzogSGFuZGxlclJlZ2lzdHJ5ID0ge1xuICBEZXNjcmlwdGlvbjogKGRpZmYsIG9sZFZhbHVlLCBuZXdWYWx1ZSkgPT4gKGRpZmYuZGVzY3JpcHRpb24gPSBpbXBsLmRpZmZBdHRyaWJ1dGUob2xkVmFsdWUsIG5ld1ZhbHVlKSksXG4gIE1ldGFkYXRhOiAoZGlmZiwgb2xkVmFsdWUsIG5ld1ZhbHVlKSA9PlxuICAgIChkaWZmLm1ldGFkYXRhID0gbmV3IHR5cGVzLkRpZmZlcmVuY2VDb2xsZWN0aW9uKGRpZmZLZXllZEVudGl0aWVzKG9sZFZhbHVlLCBuZXdWYWx1ZSwgaW1wbC5kaWZmTWV0YWRhdGEpKSksXG4gIFBhcmFtZXRlcnM6IChkaWZmLCBvbGRWYWx1ZSwgbmV3VmFsdWUpID0+XG4gICAgKGRpZmYucGFyYW1ldGVycyA9IG5ldyB0eXBlcy5EaWZmZXJlbmNlQ29sbGVjdGlvbihkaWZmS2V5ZWRFbnRpdGllcyhvbGRWYWx1ZSwgbmV3VmFsdWUsIGltcGwuZGlmZlBhcmFtZXRlcikpKSxcbiAgTWFwcGluZ3M6IChkaWZmLCBvbGRWYWx1ZSwgbmV3VmFsdWUpID0+XG4gICAgKGRpZmYubWFwcGluZ3MgPSBuZXcgdHlwZXMuRGlmZmVyZW5jZUNvbGxlY3Rpb24oZGlmZktleWVkRW50aXRpZXMob2xkVmFsdWUsIG5ld1ZhbHVlLCBpbXBsLmRpZmZNYXBwaW5nKSkpLFxuICBDb25kaXRpb25zOiAoZGlmZiwgb2xkVmFsdWUsIG5ld1ZhbHVlKSA9PlxuICAgIChkaWZmLmNvbmRpdGlvbnMgPSBuZXcgdHlwZXMuRGlmZmVyZW5jZUNvbGxlY3Rpb24oZGlmZktleWVkRW50aXRpZXMob2xkVmFsdWUsIG5ld1ZhbHVlLCBpbXBsLmRpZmZDb25kaXRpb24pKSksXG4gIFRyYW5zZm9ybTogKGRpZmYsIG9sZFZhbHVlLCBuZXdWYWx1ZSkgPT4gKGRpZmYudHJhbnNmb3JtID0gaW1wbC5kaWZmQXR0cmlidXRlKG9sZFZhbHVlLCBuZXdWYWx1ZSkpLFxuICBSZXNvdXJjZXM6IChkaWZmLCBvbGRWYWx1ZSwgbmV3VmFsdWUpID0+XG4gICAgKGRpZmYucmVzb3VyY2VzID0gbmV3IHR5cGVzLkRpZmZlcmVuY2VDb2xsZWN0aW9uKGRpZmZLZXllZEVudGl0aWVzKG9sZFZhbHVlLCBuZXdWYWx1ZSwgaW1wbC5kaWZmUmVzb3VyY2UpKSksXG4gIE91dHB1dHM6IChkaWZmLCBvbGRWYWx1ZSwgbmV3VmFsdWUpID0+XG4gICAgKGRpZmYub3V0cHV0cyA9IG5ldyB0eXBlcy5EaWZmZXJlbmNlQ29sbGVjdGlvbihkaWZmS2V5ZWRFbnRpdGllcyhvbGRWYWx1ZSwgbmV3VmFsdWUsIGltcGwuZGlmZk91dHB1dCkpKSxcbn07XG5cbi8qKlxuICogQ29tcGFyZSB0d28gUk9TIHRlbXBsYXRlcyBhbmQgcmV0dXJuIHNlbWFudGljIGRpZmZlcmVuY2VzIGJldHdlZW4gdGhlbS5cbiAqXG4gKiBAcGFyYW0gY3VycmVudFRlbXBsYXRlIHRoZSBjdXJyZW50IHN0YXRlIG9mIHRoZSBzdGFjay5cbiAqIEBwYXJhbSBuZXdUZW1wbGF0ZSAgICAgdGhlIHRhcmdldCBzdGF0ZSBvZiB0aGUgc3RhY2suXG4gKlxuICogQHJldHVybnMgYSArdHlwZXMuVGVtcGxhdGVEaWZmKyBvYmplY3QgdGhhdCByZXByZXNlbnRzIHRoZSBjaGFuZ2VzIHRoYXQgd2lsbCBoYXBwZW4gaWZcbiAqICAgICAgYSBzdGFjayB3aGljaCBjdXJyZW50IHN0YXRlIGlzIGRlc2NyaWJlZCBieSArY3VycmVudFRlbXBsYXRlKyBpcyB1cGRhdGVkIHdpdGhcbiAqICAgICAgdGhlIHRlbXBsYXRlICtuZXdUZW1wbGF0ZSsuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmVGVtcGxhdGUoXG4gIGN1cnJlbnRUZW1wbGF0ZTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSxcbiAgbmV3VGVtcGxhdGU6IHsgW2tleTogc3RyaW5nXTogYW55IH0sXG4pOiB0eXBlcy5UZW1wbGF0ZURpZmYge1xuICAvLyBCYXNlIGRpZmZcbiAgY29uc3QgdGhlRGlmZiA9IGNhbGN1bGF0ZVRlbXBsYXRlRGlmZihjdXJyZW50VGVtcGxhdGUsIG5ld1RlbXBsYXRlKTtcblxuICAvLyBXZSdyZSBnb2luZyB0byBtb2RpZnkgdGhpcyBpbi1wbGFjZVxuICBjb25zdCBuZXdUZW1wbGF0ZUNvcHkgPSBkZWVwQ29weShuZXdUZW1wbGF0ZSk7XG5cbiAgbGV0IGRpZFByb3BhZ2F0ZVJlZmVyZW5jZUNoYW5nZXM7XG4gIGxldCBkaWZmV2l0aFJlcGxhY2VtZW50cztcbiAgZG8ge1xuICAgIGRpZmZXaXRoUmVwbGFjZW1lbnRzID0gY2FsY3VsYXRlVGVtcGxhdGVEaWZmKGN1cnJlbnRUZW1wbGF0ZSwgbmV3VGVtcGxhdGVDb3B5KTtcblxuICAgIC8vIFByb3BhZ2F0ZSByZXBsYWNlbWVudHMgZm9yIHJlcGxhY2VkIHJlc291cmNlc1xuICAgIGRpZFByb3BhZ2F0ZVJlZmVyZW5jZUNoYW5nZXMgPSBmYWxzZTtcbiAgICBpZiAoZGlmZldpdGhSZXBsYWNlbWVudHMucmVzb3VyY2VzKSB7XG4gICAgICBkaWZmV2l0aFJlcGxhY2VtZW50cy5yZXNvdXJjZXMuZm9yRWFjaERpZmZlcmVuY2UoKGxvZ2ljYWxJZCwgY2hhbmdlKSA9PiB7XG4gICAgICAgIGlmIChjaGFuZ2UuY2hhbmdlSW1wYWN0ID09PSB0eXBlcy5SZXNvdXJjZUltcGFjdC5XSUxMX1JFUExBQ0UpIHtcbiAgICAgICAgICBpZiAocHJvcGFnYXRlUmVwbGFjZWRSZWZlcmVuY2VzKG5ld1RlbXBsYXRlQ29weSwgbG9naWNhbElkKSkge1xuICAgICAgICAgICAgZGlkUHJvcGFnYXRlUmVmZXJlbmNlQ2hhbmdlcyA9IHRydWU7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gIH0gd2hpbGUgKGRpZFByb3BhZ2F0ZVJlZmVyZW5jZUNoYW5nZXMpO1xuXG4gIC8vIENvcHkgXCJyZXBsYWNlZFwiIHN0YXRlcyBmcm9tIGBkaWZmV2l0aFJlcGxhY2VtZW50c2AgdG8gYHRoZURpZmZgLlxuICBkaWZmV2l0aFJlcGxhY2VtZW50cy5yZXNvdXJjZXNcbiAgICAuZmlsdGVyKChyKSA9PiBpc1JlcGxhY2VtZW50KHIhLmNoYW5nZUltcGFjdCkpXG4gICAgLmZvckVhY2hEaWZmZXJlbmNlKChsb2dpY2FsSWQsIGRvd25zdHJlYW1SZXBsYWNlbWVudCkgPT4ge1xuICAgICAgY29uc3QgcmVzb3VyY2UgPSB0aGVEaWZmLnJlc291cmNlcy5nZXQobG9naWNhbElkKTtcblxuICAgICAgaWYgKHJlc291cmNlLmNoYW5nZUltcGFjdCAhPT0gZG93bnN0cmVhbVJlcGxhY2VtZW50LmNoYW5nZUltcGFjdCkge1xuICAgICAgICBwcm9wYWdhdGVQcm9wZXJ0eVJlcGxhY2VtZW50KGRvd25zdHJlYW1SZXBsYWNlbWVudCwgcmVzb3VyY2UpO1xuICAgICAgfVxuICAgIH0pO1xuXG4gIHJldHVybiB0aGVEaWZmO1xufVxuXG5mdW5jdGlvbiBpc1JlcGxhY2VtZW50KGltcGFjdDogdHlwZXMuUmVzb3VyY2VJbXBhY3QpIHtcbiAgcmV0dXJuIGltcGFjdCA9PT0gdHlwZXMuUmVzb3VyY2VJbXBhY3QuTUFZX1JFUExBQ0UgfHwgaW1wYWN0ID09PSB0eXBlcy5SZXNvdXJjZUltcGFjdC5XSUxMX1JFUExBQ0U7XG59XG5cbi8qKlxuICogRm9yIGFsbCBwcm9wZXJ0aWVzIGluICdzb3VyY2UnIHRoYXQgaGF2ZSBhIFwicmVwbGFjZW1lbnRcIiBpbXBhY3QsIHByb3BhZ2F0ZSB0aGF0IGltcGFjdCB0byBcImRlc3RcIlxuICovXG5mdW5jdGlvbiBwcm9wYWdhdGVQcm9wZXJ0eVJlcGxhY2VtZW50KHNvdXJjZTogdHlwZXMuUmVzb3VyY2VEaWZmZXJlbmNlLCBkZXN0OiB0eXBlcy5SZXNvdXJjZURpZmZlcmVuY2UpIHtcbiAgZm9yIChjb25zdCBbcHJvcGVydHlOYW1lLCBkaWZmXSBvZiBPYmplY3QuZW50cmllcyhzb3VyY2UucHJvcGVydHlVcGRhdGVzKSkge1xuICAgIGlmIChkaWZmLmNoYW5nZUltcGFjdCAmJiBpc1JlcGxhY2VtZW50KGRpZmYuY2hhbmdlSW1wYWN0KSkge1xuICAgICAgLy8gVXNlIHRoZSBwcm9wZXJ0eWRpZmYgb2Ygc291cmNlIGluIHRhcmdldC4gVGhlIHJlc3VsdCBvZiB0aGlzIGhhcHBlbnMgdG8gYmUgY2xlYXIgZW5vdWdoLlxuICAgICAgZGVzdC5zZXRQcm9wZXJ0eUNoYW5nZShwcm9wZXJ0eU5hbWUsIGRpZmYpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxjdWxhdGVUZW1wbGF0ZURpZmYoXG4gIGN1cnJlbnRUZW1wbGF0ZTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSxcbiAgbmV3VGVtcGxhdGU6IHsgW2tleTogc3RyaW5nXTogYW55IH0sXG4pOiB0eXBlcy5UZW1wbGF0ZURpZmYge1xuICBjb25zdCBkaWZmZXJlbmNlczogdHlwZXMuSVRlbXBsYXRlRGlmZiA9IHt9O1xuICBjb25zdCB1bmtub3duOiB7IFtrZXk6IHN0cmluZ106IHR5cGVzLkRpZmZlcmVuY2U8YW55PiB9ID0ge307XG4gIGZvciAoY29uc3Qga2V5IG9mIHVuaW9uT2YoT2JqZWN0LmtleXMoY3VycmVudFRlbXBsYXRlKSwgT2JqZWN0LmtleXMobmV3VGVtcGxhdGUpKS5zb3J0KCkpIHtcbiAgICBjb25zdCBvbGRWYWx1ZSA9IGN1cnJlbnRUZW1wbGF0ZVtrZXldO1xuICAgIGNvbnN0IG5ld1ZhbHVlID0gbmV3VGVtcGxhdGVba2V5XTtcbiAgICBpZiAoZGVlcEVxdWFsKG9sZFZhbHVlLCBuZXdWYWx1ZSkpIHtcbiAgICAgIGNvbnRpbnVlO1xuICAgIH1cbiAgICBjb25zdCBoYW5kbGVyOiBEaWZmSGFuZGxlciA9XG4gICAgICBESUZGX0hBTkRMRVJTW2tleV0gfHwgKChfZGlmZiwgb2xkViwgbmV3VikgPT4gKHVua25vd25ba2V5XSA9IGltcGwuZGlmZlVua25vd24ob2xkViwgbmV3VikpKTtcbiAgICBoYW5kbGVyKGRpZmZlcmVuY2VzLCBvbGRWYWx1ZSwgbmV3VmFsdWUpO1xuICB9XG4gIGlmIChPYmplY3Qua2V5cyh1bmtub3duKS5sZW5ndGggPiAwKSB7XG4gICAgZGlmZmVyZW5jZXMudW5rbm93biA9IG5ldyB0eXBlcy5EaWZmZXJlbmNlQ29sbGVjdGlvbih1bmtub3duKTtcbiAgfVxuXG4gIHJldHVybiBuZXcgdHlwZXMuVGVtcGxhdGVEaWZmKGRpZmZlcmVuY2VzKTtcbn1cblxuLyoqXG4gKiBDb21wYXJlIHR3byBST1MgcmVzb3VyY2VzIGFuZCByZXR1cm4gc2VtYW50aWMgZGlmZmVyZW5jZXMgYmV0d2VlbiB0aGVtXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkaWZmUmVzb3VyY2Uob2xkVmFsdWU6IHR5cGVzLlJlc291cmNlLCBuZXdWYWx1ZTogdHlwZXMuUmVzb3VyY2UpOiB0eXBlcy5SZXNvdXJjZURpZmZlcmVuY2Uge1xuICByZXR1cm4gaW1wbC5kaWZmUmVzb3VyY2Uob2xkVmFsdWUsIG5ld1ZhbHVlKTtcbn1cblxuLyoqXG4gKiBSZXBsYWNlIGFsbCByZWZlcmVuY2VzIHRvIHRoZSBnaXZlbiBsb2dpY2FsSUQgb24gdGhlIGdpdmVuIHRlbXBsYXRlLCBpbi1wbGFjZVxuICpcbiAqIFJldHVybnMgdHJ1ZSBpZmYgYW55IHJlZmVyZW5jZXMgd2VyZSByZXBsYWNlZC5cbiAqL1xuZnVuY3Rpb24gcHJvcGFnYXRlUmVwbGFjZWRSZWZlcmVuY2VzKHRlbXBsYXRlOiBvYmplY3QsIGxvZ2ljYWxJZDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGxldCByZXQgPSBmYWxzZTtcblxuICBmdW5jdGlvbiByZWN1cnNlKG9iajogYW55KSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkob2JqKSkge1xuICAgICAgb2JqLmZvckVhY2gocmVjdXJzZSk7XG4gICAgfVxuXG4gICAgaWYgKHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iaiAhPT0gbnVsbCkge1xuICAgICAgaWYgKCFyZXBsYWNlUmVmZXJlbmNlKG9iaikpIHtcbiAgICAgICAgT2JqZWN0LnZhbHVlcyhvYmopLmZvckVhY2gocmVjdXJzZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgZnVuY3Rpb24gcmVwbGFjZVJlZmVyZW5jZShvYmo6IGFueSkge1xuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgIGlmIChrZXlzLmxlbmd0aCAhPT0gMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBrZXkgPSBrZXlzWzBdO1xuXG4gICAgaWYgKGtleSA9PT0gJ1JlZicpIHtcbiAgICAgIGlmIChvYmouUmVmID09PSBsb2dpY2FsSWQpIHtcbiAgICAgICAgb2JqLlJlZiA9IGxvZ2ljYWxJZCArICcgKHJlcGxhY2VkKSc7XG4gICAgICAgIHJldCA9IHRydWU7XG4gICAgICB9XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG5cbiAgICBpZiAoa2V5LnN0YXJ0c1dpdGgoJ0ZuOjonKSkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkob2JqW2tleV0pICYmIG9ialtrZXldLmxlbmd0aCA+IDAgJiYgb2JqW2tleV1bMF0gPT09IGxvZ2ljYWxJZCkge1xuICAgICAgICBvYmpba2V5XVswXSA9IGxvZ2ljYWxJZCArICcocmVwbGFjZWQpJztcbiAgICAgICAgcmV0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHJlY3Vyc2UodGVtcGxhdGUpO1xuICByZXR1cm4gcmV0O1xufVxuXG5mdW5jdGlvbiBkZWVwQ29weSh4OiBhbnkpOiBhbnkge1xuICBpZiAoQXJyYXkuaXNBcnJheSh4KSkge1xuICAgIHJldHVybiB4Lm1hcChkZWVwQ29weSk7XG4gIH1cblxuICBpZiAodHlwZW9mIHggPT09ICdvYmplY3QnICYmIHggIT09IG51bGwpIHtcbiAgICBjb25zdCByZXQ6IGFueSA9IHt9O1xuICAgIGZvciAoY29uc3Qga2V5IG9mIE9iamVjdC5rZXlzKHgpKSB7XG4gICAgICByZXRba2V5XSA9IGRlZXBDb3B5KHhba2V5XSk7XG4gICAgfVxuICAgIHJldHVybiByZXQ7XG4gIH1cblxuICByZXR1cm4geDtcbn1cbiJdfQ==