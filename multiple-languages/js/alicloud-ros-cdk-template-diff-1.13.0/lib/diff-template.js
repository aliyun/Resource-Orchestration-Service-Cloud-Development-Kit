"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.diffResource = exports.diffTemplate = void 0;
const impl = require("./diff");
const types = require("./diff/types");
const util_1 = require("./diff/util");
__exportStar(require("./diff/types"), exports);
const DIFF_HANDLERS = {
    Description: (diff, oldValue, newValue) => (diff.description = impl.diffAttribute(oldValue, newValue)),
    Metadata: (diff, oldValue, newValue) => (diff.metadata = new types.DifferenceCollection((0, util_1.diffKeyedEntities)(oldValue, newValue, impl.diffMetadata))),
    Parameters: (diff, oldValue, newValue) => (diff.parameters = new types.DifferenceCollection((0, util_1.diffKeyedEntities)(oldValue, newValue, impl.diffParameter))),
    Mappings: (diff, oldValue, newValue) => (diff.mappings = new types.DifferenceCollection((0, util_1.diffKeyedEntities)(oldValue, newValue, impl.diffMapping))),
    Rules: (diff, oldValue, newValue) => (diff.rules = new types.DifferenceCollection((0, util_1.diffKeyedEntities)(oldValue, newValue, impl.diffRule))),
    Conditions: (diff, oldValue, newValue) => (diff.conditions = new types.DifferenceCollection((0, util_1.diffKeyedEntities)(oldValue, newValue, impl.diffCondition))),
    Transform: (diff, oldValue, newValue) => (diff.transform = impl.diffAttribute(oldValue, newValue)),
    Resources: (diff, oldValue, newValue) => (diff.resources = new types.DifferenceCollection((0, util_1.diffKeyedEntities)(oldValue, newValue, impl.diffResource))),
    Outputs: (diff, oldValue, newValue) => (diff.outputs = new types.DifferenceCollection((0, util_1.diffKeyedEntities)(oldValue, newValue, impl.diffOutput))),
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
    for (const key of (0, util_1.unionOf)(Object.keys(currentTemplate), Object.keys(newTemplate)).sort()) {
        const oldValue = currentTemplate[key];
        const newValue = newTemplate[key];
        if ((0, util_1.deepEqual)(oldValue, newValue)) {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGlmZi10ZW1wbGF0ZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRpZmYtdGVtcGxhdGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwrQkFBK0I7QUFDL0Isc0NBQXNDO0FBQ3RDLHNDQUFvRTtBQUVwRSwrQ0FBNkI7QUFLN0IsTUFBTSxhQUFhLEdBQW9CO0lBQ3JDLFdBQVcsRUFBRSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FBQyxDQUFDLElBQUksQ0FBQyxXQUFXLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxRQUFRLEVBQUUsUUFBUSxDQUFDLENBQUM7SUFDdEcsUUFBUSxFQUFFLENBQUMsSUFBSSxFQUFFLFFBQVEsRUFBRSxRQUFRLEVBQUUsRUFBRSxDQUNyQyxDQUFDLElBQUksQ0FBQyxRQUFRLEdBQUcsSUFBSSxLQUFLLENBQUMsb0JBQW9CLENBQUMsSUFBQSx3QkFBaUIsRUFBQyxRQUFRLEVBQUUsUUFBUSxFQUFFLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDO0lBQzVHLFVBQVUsRUFBRSxDQUFDLElBQUksRUFBRSxRQUFRLEVBQUUsUUFBUSxFQUFFLEVBQUUsQ0FDdkMsQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksS0FBSyxDQUFDLG9CQUFvQixDQUFDLElBQUEsd0JBQWlCLEVBQUMsUUFBUSxFQUFFLFFBQVEsRUFBRSxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUMsQ0FBQztJQUMvRyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsUUFBUSxFQUFFLFFBQVEsRUFBRSxFQUFFLENBQ3JDLENBQUMsSUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLEtBQUssQ0FBQyxvQkFBb0IsQ0FBQyxJQUFBLHdCQUFpQixFQUFDLFFBQVEsRUFBRSxRQUFRLEVBQUUsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLENBQUM7SUFDM0csS0FBSyxFQUFFLENBQUMsSUFBSSxF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QUU7UUFDcEIsT0FBTyxDQUFDLENBQUMsR0FBRyxDQUFDLFFBQVEsQ0FBQyxDQUFDO0tBQ3hCO0lBRUQsSUFBSSxPQUFPLENBQUMsS0FBSyxRQUFRLElBQUksQ0FBQyxLQUFLLElBQUksRUFBRTtRQUN2QyxNQUFNLEdBQUcsR0FBUSxFQUFFLENBQUM7UUFDcEIsS0FBSyxNQUFNLEdBQUcsSUFBSSxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ2hDLEdBQUcsQ0FBQyxHQUFHLENBQUMsR0FBRyxRQUFRLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7U0FDN0I7UUFDRCxPQUFPLEdBQUcsQ0FBQztLQUNaO0lBRUQsT0FBTyxDQUFDLENBQUM7QUFDWCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgaW1wbCBmcm9tICcuL2RpZmYnO1xuaW1wb3J0ICogYXMgdHlwZXMgZnJvbSAnLi9kaWZmL3R5cGVzJztcbmltcG9ydCB7IGRlZXBFcXVhbCwgZGlmZktleWVkRW50aXRpZXMsIHVuaW9uT2YgfSBmcm9tICcuL2RpZmYvdXRpbCc7XG5cbmV4cG9ydCAqIGZyb20gJy4vZGlmZi90eXBlcyc7XG5cbnR5cGUgRGlmZkhhbmRsZXIgPSAoZGlmZjogdHlwZXMuSVRlbXBsYXRlRGlmZiwgb2xkVmFsdWU6IGFueSwgbmV3VmFsdWU6IGFueSkgPT4gdm9pZDtcbnR5cGUgSGFuZGxlclJlZ2lzdHJ5ID0geyBbc2VjdGlvbjogc3RyaW5nXTogRGlmZkhhbmRsZXIgfTtcblxuY29uc3QgRElGRl9IQU5ETEVSUzogSGFuZGxlclJlZ2lzdHJ5ID0ge1xuICBEZXNjcmlwdGlvbjogKGRpZmYsIG9sZFZhbHVlLCBuZXdWYWx1ZSkgPT4gKGRpZmYuZGVzY3JpcHRpb24gPSBpbXBsLmRpZmZBdHRyaWJ1dGUob2xkVmFsdWUsIG5ld1ZhbHVlKSksXG4gIE1ldGFkYXRhOiAoZGlmZiwgb2xkVmFsdWUsIG5ld1ZhbHVlKSA9PlxuICAgIChkaWZmLm1ldGFkYXRhID0gbmV3IHR5cGVzLkRpZmZlcmVuY2VDb2xsZWN0aW9uKGRpZmZLZXllZEVudGl0aWVzKG9sZFZhbHVlLCBuZXdWYWx1ZSwgaW1wbC5kaWZmTWV0YWRhdGEpKSksXG4gIFBhcmFtZXRlcnM6IChkaWZmLCBvbGRWYWx1ZSwgbmV3VmFsdWUpID0+XG4gICAgKGRpZmYucGFyYW1ldGVycyA9IG5ldyB0eXBlcy5EaWZmZXJlbmNlQ29sbGVjdGlvbihkaWZmS2V5ZWRFbnRpdGllcyhvbGRWYWx1ZSwgbmV3VmFsdWUsIGltcGwuZGlmZlBhcmFtZXRlcikpKSxcbiAgTWFwcGluZ3M6IChkaWZmLCBvbGRWYWx1ZSwgbmV3VmFsdWUpID0+XG4gICAgKGRpZmYubWFwcGluZ3MgPSBuZXcgdHlwZXMuRGlmZmVyZW5jZUNvbGxlY3Rpb24oZGlmZktleWVkRW50aXRpZXMob2xkVmFsdWUsIG5ld1ZhbHVlLCBpbXBsLmRpZmZNYXBwaW5nKSkpLFxuICBSdWxlczogKGRpZmYsIG9sZFZhbHVlLCBuZXdWYWx1ZSkgPT5cbiAgICAoZGlmZi5ydWxlcyA9IG5ldyB0eXBlcy5EaWZmZXJlbmNlQ29sbGVjdGlvbihkaWZmS2V5ZWRFbnRpdGllcyhvbGRWYWx1ZSwgbmV3VmFsdWUsIGltcGwuZGlmZlJ1bGUpKSksXG4gIENvbmRpdGlvbnM6IChkaWZmLCBvbGRWYWx1ZSwgbmV3VmFsdWUpID0+XG4gICAgKGRpZmYuY29uZGl0aW9ucyA9IG5ldyB0eXBlcy5EaWZmZXJlbmNlQ29sbGVjdGlvbihkaWZmS2V5ZWRFbnRpdGllcyhvbGRWYWx1ZSwgbmV3VmFsdWUsIGltcGwuZGlmZkNvbmRpdGlvbikpKSxcbiAgVHJhbnNmb3JtOiAoZGlmZiwgb2xkVmFsdWUsIG5ld1ZhbHVlKSA9PiAoZGlmZi50cmFuc2Zvcm0gPSBpbXBsLmRpZmZBdHRyaWJ1dGUob2xkVmFsdWUsIG5ld1ZhbHVlKSksXG4gIFJlc291cmNlczogKGRpZmYsIG9sZFZhbHVlLCBuZXdWYWx1ZSkgPT5cbiAgICAoZGlmZi5yZXNvdXJjZXMgPSBuZXcgdHlwZXMuRGlmZmVyZW5jZUNvbGxlY3Rpb24oZGlmZktleWVkRW50aXRpZXMob2xkVmFsdWUsIG5ld1ZhbHVlLCBpbXBsLmRpZmZSZXNvdXJjZSkpKSxcbiAgT3V0cHV0czogKGRpZmYsIG9sZFZhbHVlLCBuZXdWYWx1ZSkgPT5cbiAgICAoZGlmZi5vdXRwdXRzID0gbmV3IHR5cGVzLkRpZmZlcmVuY2VDb2xsZWN0aW9uKGRpZmZLZXllZEVudGl0aWVzKG9sZFZhbHVlLCBuZXdWYWx1ZSwgaW1wbC5kaWZmT3V0cHV0KSkpLFxufTtcblxuLyoqXG4gKiBDb21wYXJlIHR3byBST1MgdGVtcGxhdGVzIGFuZCByZXR1cm4gc2VtYW50aWMgZGlmZmVyZW5jZXMgYmV0d2VlbiB0aGVtLlxuICpcbiAqIEBwYXJhbSBjdXJyZW50VGVtcGxhdGUgdGhlIGN1cnJlbnQgc3RhdGUgb2YgdGhlIHN0YWNrLlxuICogQHBhcmFtIG5ld1RlbXBsYXRlICAgICB0aGUgdGFyZ2V0IHN0YXRlIG9mIHRoZSBzdGFjay5cbiAqXG4gKiBAcmV0dXJucyBhICt0eXBlcy5UZW1wbGF0ZURpZmYrIG9iamVjdCB0aGF0IHJlcHJlc2VudHMgdGhlIGNoYW5nZXMgdGhhdCB3aWxsIGhhcHBlbiBpZlxuICogICAgICBhIHN0YWNrIHdoaWNoIGN1cnJlbnQgc3RhdGUgaXMgZGVzY3JpYmVkIGJ5ICtjdXJyZW50VGVtcGxhdGUrIGlzIHVwZGF0ZWQgd2l0aFxuICogICAgICB0aGUgdGVtcGxhdGUgK25ld1RlbXBsYXRlKy5cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZUZW1wbGF0ZShcbiAgY3VycmVudFRlbXBsYXRlOiB7IFtrZXk6IHN0cmluZ106IGFueSB9LFxuICBuZXdUZW1wbGF0ZTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSxcbik6IHR5cGVzLlRlbXBsYXRlRGlmZiB7XG4gIC8vIEJhc2UgZGlmZlxuICBjb25zdCB0aGVEaWZmID0gY2FsY3VsYXRlVGVtcGxhdGVEaWZmKGN1cnJlbnRUZW1wbGF0ZSwgbmV3VGVtcGxhdGUpO1xuXG4gIC8vIFdlJ3JlIGdvaW5nIHRvIG1vZGlmeSB0aGlzIGluLXBsYWNlXG4gIGNvbnN0IG5ld1RlbXBsYXRlQ29weSA9IGRlZXBDb3B5KG5ld1RlbXBsYXRlKTtcblxuICBsZXQgZGlkUHJvcGFnYXRlUmVmZXJlbmNlQ2hhbmdlcztcbiAgbGV0IGRpZmZXaXRoUmVwbGFjZW1lbnRzO1xuICBkbyB7XG4gICAgZGlmZldpdGhSZXBsYWNlbWVudHMgPSBjYWxjdWxhdGVUZW1wbGF0ZURpZmYoY3VycmVudFRlbXBsYXRlLCBuZXdUZW1wbGF0ZUNvcHkpO1xuXG4gICAgLy8gUHJvcGFnYXRlIHJlcGxhY2VtZW50cyBmb3IgcmVwbGFjZWQgcmVzb3VyY2VzXG4gICAgZGlkUHJvcGFnYXRlUmVmZXJlbmNlQ2hhbmdlcyA9IGZhbHNlO1xuICAgIGlmIChkaWZmV2l0aFJlcGxhY2VtZW50cy5yZXNvdXJjZXMpIHtcbiAgICAgIGRpZmZXaXRoUmVwbGFjZW1lbnRzLnJlc291cmNlcy5mb3JFYWNoRGlmZmVyZW5jZSgobG9naWNhbElkLCBjaGFuZ2UpID0+IHtcbiAgICAgICAgaWYgKGNoYW5nZS5jaGFuZ2VJbXBhY3QgPT09IHR5cGVzLlJlc291cmNlSW1wYWN0LldJTExfUkVQTEFDRSkge1xuICAgICAgICAgIGlmIChwcm9wYWdhdGVSZXBsYWNlZFJlZmVyZW5jZXMobmV3VGVtcGxhdGVDb3B5LCBsb2dpY2FsSWQpKSB7XG4gICAgICAgICAgICBkaWRQcm9wYWdhdGVSZWZlcmVuY2VDaGFuZ2VzID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH1cbiAgfSB3aGlsZSAoZGlkUHJvcGFnYXRlUmVmZXJlbmNlQ2hhbmdlcyk7XG5cbiAgLy8gQ29weSBcInJlcGxhY2VkXCIgc3RhdGVzIGZyb20gYGRpZmZXaXRoUmVwbGFjZW1lbnRzYCB0byBgdGhlRGlmZmAuXG4gIGRpZmZXaXRoUmVwbGFjZW1lbnRzLnJlc291cmNlc1xuICAgIC5maWx0ZXIoKHIpID0+IGlzUmVwbGFjZW1lbnQociEuY2hhbmdlSW1wYWN0KSlcbiAgICAuZm9yRWFjaERpZmZlcmVuY2UoKGxvZ2ljYWxJZCwgZG93bnN0cmVhbVJlcGxhY2VtZW50KSA9PiB7XG4gICAgICBjb25zdCByZXNvdXJjZSA9IHRoZURpZmYucmVzb3VyY2VzLmdldChsb2dpY2FsSWQpO1xuXG4gICAgICBpZiAocmVzb3VyY2UuY2hhbmdlSW1wYWN0ICE9PSBkb3duc3RyZWFtUmVwbGFjZW1lbnQuY2hhbmdlSW1wYWN0KSB7XG4gICAgICAgIHByb3BhZ2F0ZVByb3BlcnR5UmVwbGFjZW1lbnQoZG93bnN0cmVhbVJlcGxhY2VtZW50LCByZXNvdXJjZSk7XG4gICAgICB9XG4gICAgfSk7XG5cbiAgcmV0dXJuIHRoZURpZmY7XG59XG5cbmZ1bmN0aW9uIGlzUmVwbGFjZW1lbnQoaW1wYWN0OiB0eXBlcy5SZXNvdXJjZUltcGFjdCkge1xuICByZXR1cm4gaW1wYWN0ID09PSB0eXBlcy5SZXNvdXJjZUltcGFjdC5NQVlfUkVQTEFDRSB8fCBpbXBhY3QgPT09IHR5cGVzLlJlc291cmNlSW1wYWN0LldJTExfUkVQTEFDRTtcbn1cblxuLyoqXG4gKiBGb3IgYWxsIHByb3BlcnRpZXMgaW4gJ3NvdXJjZScgdGhhdCBoYXZlIGEgXCJyZXBsYWNlbWVudFwiIGltcGFjdCwgcHJvcGFnYXRlIHRoYXQgaW1wYWN0IHRvIFwiZGVzdFwiXG4gKi9cbmZ1bmN0aW9uIHByb3BhZ2F0ZVByb3BlcnR5UmVwbGFjZW1lbnQoc291cmNlOiB0eXBlcy5SZXNvdXJjZURpZmZlcmVuY2UsIGRlc3Q6IHR5cGVzLlJlc291cmNlRGlmZmVyZW5jZSkge1xuICBmb3IgKGNvbnN0IFtwcm9wZXJ0eU5hbWUsIGRpZmZdIG9mIE9iamVjdC5lbnRyaWVzKHNvdXJjZS5wcm9wZXJ0eVVwZGF0ZXMpKSB7XG4gICAgaWYgKGRpZmYuY2hhbmdlSW1wYWN0ICYmIGlzUmVwbGFjZW1lbnQoZGlmZi5jaGFuZ2VJbXBhY3QpKSB7XG4gICAgICAvLyBVc2UgdGhlIHByb3BlcnR5ZGlmZiBvZiBzb3VyY2UgaW4gdGFyZ2V0LiBUaGUgcmVzdWx0IG9mIHRoaXMgaGFwcGVucyB0byBiZSBjbGVhciBlbm91Z2guXG4gICAgICBkZXN0LnNldFByb3BlcnR5Q2hhbmdlKHByb3BlcnR5TmFtZSwgZGlmZik7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGNhbGN1bGF0ZVRlbXBsYXRlRGlmZihcbiAgY3VycmVudFRlbXBsYXRlOiB7IFtrZXk6IHN0cmluZ106IGFueSB9LFxuICBuZXdUZW1wbGF0ZTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSxcbik6IHR5cGVzLlRlbXBsYXRlRGlmZiB7XG4gIGNvbnN0IGRpZmZlcmVuY2VzOiB0eXBlcy5JVGVtcGxhdGVEaWZmID0ge307XG4gIGNvbnN0IHVua25vd246IHsgW2tleTogc3RyaW5nXTogdHlwZXMuRGlmZmVyZW5jZTxhbnk+IH0gPSB7fTtcbiAgZm9yIChjb25zdCBrZXkgb2YgdW5pb25PZihPYmplY3Qua2V5cyhjdXJyZW50VGVtcGxhdGUpLCBPYmplY3Qua2V5cyhuZXdUZW1wbGF0ZSkpLnNvcnQoKSkge1xuICAgIGNvbnN0IG9sZFZhbHVlID0gY3VycmVudFRlbXBsYXRlW2tleV07XG4gICAgY29uc3QgbmV3VmFsdWUgPSBuZXdUZW1wbGF0ZVtrZXldO1xuICAgIGlmIChkZWVwRXF1YWwob2xkVmFsdWUsIG5ld1ZhbHVlKSkge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGNvbnN0IGhhbmRsZXI6IERpZmZIYW5kbGVyID1cbiAgICAgIERJRkZfSEFORExFUlNba2V5XSB8fCAoKF9kaWZmLCBvbGRWLCBuZXdWKSA9PiAodW5rbm93bltrZXldID0gaW1wbC5kaWZmVW5rbm93bihvbGRWLCBuZXdWKSkpO1xuICAgIGhhbmRsZXIoZGlmZmVyZW5jZXMsIG9sZFZhbHVlLCBuZXdWYWx1ZSk7XG4gIH1cbiAgaWYgKE9iamVjdC5rZXlzKHVua25vd24pLmxlbmd0aCA+IDApIHtcbiAgICBkaWZmZXJlbmNlcy51bmtub3duID0gbmV3IHR5cGVzLkRpZmZlcmVuY2VDb2xsZWN0aW9uKHVua25vd24pO1xuICB9XG5cbiAgcmV0dXJuIG5ldyB0eXBlcy5UZW1wbGF0ZURpZmYoZGlmZmVyZW5jZXMpO1xufVxuXG4vKipcbiAqIENvbXBhcmUgdHdvIFJPUyByZXNvdXJjZXMgYW5kIHJldHVybiBzZW1hbnRpYyBkaWZmZXJlbmNlcyBiZXR3ZWVuIHRoZW1cbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIGRpZmZSZXNvdXJjZShvbGRWYWx1ZTogdHlwZXMuUmVzb3VyY2UsIG5ld1ZhbHVlOiB0eXBlcy5SZXNvdXJjZSk6IHR5cGVzLlJlc291cmNlRGlmZmVyZW5jZSB7XG4gIHJldHVybiBpbXBsLmRpZmZSZXNvdXJjZShvbGRWYWx1ZSwgbmV3VmFsdWUpO1xufVxuXG4vKipcbiAqIFJlcGxhY2UgYWxsIHJlZmVyZW5jZXMgdG8gdGhlIGdpdmVuIGxvZ2ljYWxJRCBvbiB0aGUgZ2l2ZW4gdGVtcGxhdGUsIGluLXBsYWNlXG4gKlxuICogUmV0dXJucyB0cnVlIGlmZiBhbnkgcmVmZXJlbmNlcyB3ZXJlIHJlcGxhY2VkLlxuICovXG5mdW5jdGlvbiBwcm9wYWdhdGVSZXBsYWNlZFJlZmVyZW5jZXModGVtcGxhdGU6IG9iamVjdCwgbG9naWNhbElkOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgbGV0IHJldCA9IGZhbHNlO1xuXG4gIGZ1bmN0aW9uIHJlY3Vyc2Uob2JqOiBhbnkpIHtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShvYmopKSB7XG4gICAgICBvYmouZm9yRWFjaChyZWN1cnNlKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcgJiYgb2JqICE9PSBudWxsKSB7XG4gICAgICBpZiAoIXJlcGxhY2VSZWZlcmVuY2Uob2JqKSkge1xuICAgICAgICBPYmplY3QudmFsdWVzKG9iaikuZm9yRWFjaChyZWN1cnNlKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBmdW5jdGlvbiByZXBsYWNlUmVmZXJlbmNlKG9iajogYW55KSB7XG4gICAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKG9iaik7XG4gICAgaWYgKGtleXMubGVuZ3RoICE9PSAxKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGtleSA9IGtleXNbMF07XG5cbiAgICBpZiAoa2V5ID09PSAnUmVmJykge1xuICAgICAgaWYgKG9iai5SZWYgPT09IGxvZ2ljYWxJZCkge1xuICAgICAgICBvYmouUmVmID0gbG9naWNhbElkICsgJyAocmVwbGFjZWQpJztcbiAgICAgICAgcmV0ID0gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cblxuICAgIGlmIChrZXkuc3RhcnRzV2l0aCgnRm46OicpKSB7XG4gICAgICBpZiAoQXJyYXkuaXNBcnJheShvYmpba2V5XSkgJiYgb2JqW2tleV0ubGVuZ3RoID4gMCAmJiBvYmpba2V5XVswXSA9PT0gbG9naWNhbElkKSB7XG4gICAgICAgIG9ialtrZXldWzBdID0gbG9naWNhbElkICsgJyhyZXBsYWNlZCknO1xuICAgICAgICByZXQgPSB0cnVlO1xuICAgICAgfVxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgcmVjdXJzZSh0ZW1wbGF0ZSk7XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIGRlZXBDb3B5KHg6IGFueSk6IGFueSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHgpKSB7XG4gICAgcmV0dXJuIHgubWFwKGRlZXBDb3B5KTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgeCA9PT0gJ29iamVjdCcgJiYgeCAhPT0gbnVsbCkge1xuICAgIGNvbnN0IHJldDogYW55ID0ge307XG4gICAgZm9yIChjb25zdCBrZXkgb2YgT2JqZWN0LmtleXMoeCkpIHtcbiAgICAgIHJldFtrZXldID0gZGVlcENvcHkoeFtrZXldKTtcbiAgICB9XG4gICAgcmV0dXJuIHJldDtcbiAgfVxuXG4gIHJldHVybiB4O1xufVxuIl19