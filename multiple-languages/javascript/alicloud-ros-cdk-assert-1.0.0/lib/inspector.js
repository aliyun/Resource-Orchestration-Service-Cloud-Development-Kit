"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.StackPathInspector = exports.StackInspector = exports.Inspector = void 0;
const cxschema = require("@alicloud/ros-cdk-assembly-schema");
const api = require("@alicloud/ros-cdk-cxapi");
const assertion_1 = require("./assertion");
const match_template_1 = require("./assertions/match-template");
class Inspector {
    constructor() {
        this.aroundAssert = undefined;
    }
    to(assertion) {
        return this.aroundAssert ? this.aroundAssert(() => this._to(assertion)) : this._to(assertion);
    }
    notTo(assertion) {
        return this.to(assertion_1.not(assertion));
    }
    _to(assertion) {
        assertion.assertOrThrow(this);
    }
}
exports.Inspector = Inspector;
class StackInspector extends Inspector {
    constructor(stack) {
        super();
        this.stack = stack;
        this.template = stack instanceof api.RosStackArtifact ? stack.template : stack;
    }
    at(path) {
        if (!(this.stack instanceof api.RosStackArtifact)) {
            throw new Error('Cannot use "expect(stack).at(path)" for a raw template, only RosStackArtifact');
        }
        const strPath = typeof path === 'string' ? path : path.join('/');
        return new StackPathInspector(this.stack, strPath);
    }
    toMatch(template, matchStyle = match_template_1.MatchStyle.EXACT) {
        return this.to(match_template_1.matchTemplate(template, matchStyle));
    }
    get value() {
        return this.template;
    }
}
exports.StackInspector = StackInspector;
class StackPathInspector extends Inspector {
    constructor(stack, path) {
        super();
        this.stack = stack;
        this.path = path;
    }
    get value() {
        // The names of paths in metadata in tests are very ill-defined. Try with the full path first,
        // then try with the stack name preprended for backwards compat with most tests that happen to give
        // their stack an ID that's the same as the stack name.
        const metadata = this.stack.manifest.metadata || {};
        const md = metadata[this.path] || metadata[`/${this.stack.id}${this.path}`];
        if (md === undefined) {
            return undefined;
        }
        const resourceMd = md.find((entry) => entry.type === cxschema.ArtifactMetadataEntryType.LOGICAL_ID);
        if (resourceMd === undefined) {
            return undefined;
        }
        const logicalId = resourceMd.data;
        return this.stack.template.Resources[logicalId];
    }
}
exports.StackPathInspector = StackPathInspector;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zcGVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5zcGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhEQUE4RDtBQUM5RCwrQ0FBK0M7QUFDL0MsMkNBQTZDO0FBQzdDLGdFQUF3RTtBQUV4RSxNQUFzQixTQUFTO0lBRzdCO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7SUFDaEMsQ0FBQztJQUVNLEVBQUUsQ0FBQyxTQUEwQjtRQUNsQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7SUFFTSxLQUFLLENBQUMsU0FBMEI7UUFDckMsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLGVBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDO0lBQ2pDLENBQUM7SUFJTyxHQUFHLENBQUMsU0FBMEI7UUFDcEMsU0FBUyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUNoQyxDQUFDO0NBQ0Y7QUFwQkQsOEJBb0JDO0FBRUQsTUFBYSxjQUFlLFNBQVEsU0FBUztJQUczQyxZQUE0QixLQUFvQztRQUM5RCxLQUFLLEVBQUUsQ0FBQztRQURrQixVQUFLLEdBQUwsS0FBSyxDQUErQjtRQUc5RCxJQUFJLENBQUMsUUFBUSxHQUFHLEtBQUssWUFBWSxHQUFHLENBQUMsZ0JBQWdCLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQztJQUNqRixDQUFDO0lBRU0sRUFBRSxDQUFDLElBQXVCO1FBQy9CLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLFlBQVksR0FBRyxDQUFDLGdCQUFnQixDQUFDLEVBQUU7WUFDakQsTUFBTSxJQUFJLEtBQUssQ0FBQywrRUFBK0UsQ0FBQyxDQUFDO1NBQ2xHO1FBRUQsTUFBTSxPQUFPLEdBQUcsT0FBTyxJQUFJLEtBQUssUUFBUSxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDakUsT0FBTyxJQUFJLGtCQUFrQixDQUFDLElBQUksQ0FBQyxLQUFLLEVBQUUsT0FBTyxDQUFDLENBQUM7SUFDckQsQ0FBQztJQUVNLE9BQU8sQ0FBQyxRQUFnQyxFQUFFLFVBQVUsR0FBRywyQkFBVSxDQUFDLEtBQUs7UUFDNUUsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLDhCQUFhLENBQUMsUUFBUSxFQUFFLFVBQVUsQ0FBQyxDQUFDLENBQUM7SUFDdEQsQ0FBQztJQUVELElBQVcsS0FBSztRQUNkLE9BQU8sSUFBSSxDQUFDLFFBQVEsQ0FBQztJQUN2QixDQUFDO0NBQ0Y7QUF6QkQsd0NBeUJDO0FBRUQsTUFBYSxrQkFBbUIsU0FBUSxTQUFTO0lBQy9DLFlBQTRCLEtBQTJCLEVBQWtCLElBQVk7UUFDbkYsS0FBSyxFQUFFLENBQUM7UUFEa0IsVUFBSyxHQUFMLEtBQUssQ0FBc0I7UUFBa0IsU0FBSSxHQUFKLElBQUksQ0FBUTtJQUVyRixDQUFDO0lBRUQsSUFBVyxLQUFLO1FBQ2QsOEZBQThGO1FBQzlGLG1HQUFtRztRQUNuRyx1REFBdUQ7UUFDdkQsTUFBTSxRQUFRLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsUUFBUSxJQUFJLEVBQUUsQ0FBQztRQUNwRCxNQUFNLEVBQUUsR0FBRyxRQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLFFBQVEsQ0FBQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxHQUFHLElBQUksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxDQUFDO1FBQzVFLElBQUksRUFBRSxLQUFLLFNBQVMsRUFBRTtZQUNwQixPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUNELE1BQU0sVUFBVSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLEtBQUssUUFBUSxDQUFDLHlCQUF5QixDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BHLElBQUksVUFBVSxLQUFLLFNBQVMsRUFBRTtZQUM1QixPQUFPLFNBQVMsQ0FBQztTQUNsQjtRQUNELE1BQU0sU0FBUyxHQUFHLFVBQVUsQ0FBQyxJQUF3QyxDQUFDO1FBQ3RFLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2xELENBQUM7Q0FDRjtBQXJCRCxnREFxQkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyBjeHNjaGVtYSBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1hc3NlbWJseS1zY2hlbWEnO1xuaW1wb3J0ICogYXMgYXBpIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWN4YXBpJztcbmltcG9ydCB7IEFzc2VydGlvbiwgbm90IH0gZnJvbSAnLi9hc3NlcnRpb24nO1xuaW1wb3J0IHsgTWF0Y2hTdHlsZSwgbWF0Y2hUZW1wbGF0ZSB9IGZyb20gJy4vYXNzZXJ0aW9ucy9tYXRjaC10ZW1wbGF0ZSc7XG5cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBJbnNwZWN0b3Ige1xuICBwdWJsaWMgYXJvdW5kQXNzZXJ0PzogKGNiOiAoKSA9PiB2b2lkKSA9PiBhbnk7XG5cbiAgY29uc3RydWN0b3IoKSB7XG4gICAgdGhpcy5hcm91bmRBc3NlcnQgPSB1bmRlZmluZWQ7XG4gIH1cblxuICBwdWJsaWMgdG8oYXNzZXJ0aW9uOiBBc3NlcnRpb248dGhpcz4pOiBhbnkge1xuICAgIHJldHVybiB0aGlzLmFyb3VuZEFzc2VydCA/IHRoaXMuYXJvdW5kQXNzZXJ0KCgpID0+IHRoaXMuX3RvKGFzc2VydGlvbikpIDogdGhpcy5fdG8oYXNzZXJ0aW9uKTtcbiAgfVxuXG4gIHB1YmxpYyBub3RUbyhhc3NlcnRpb246IEFzc2VydGlvbjx0aGlzPik6IGFueSB7XG4gICAgcmV0dXJuIHRoaXMudG8obm90KGFzc2VydGlvbikpO1xuICB9XG5cbiAgYWJzdHJhY3QgZ2V0IHZhbHVlKCk6IGFueTtcblxuICBwcml2YXRlIF90byhhc3NlcnRpb246IEFzc2VydGlvbjx0aGlzPik6IGFueSB7XG4gICAgYXNzZXJ0aW9uLmFzc2VydE9yVGhyb3codGhpcyk7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0YWNrSW5zcGVjdG9yIGV4dGVuZHMgSW5zcGVjdG9yIHtcbiAgcHJpdmF0ZSByZWFkb25seSB0ZW1wbGF0ZTogeyBba2V5OiBzdHJpbmddOiBhbnkgfTtcblxuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgc3RhY2s6IGFwaS5Sb3NTdGFja0FydGlmYWN0IHwgb2JqZWN0KSB7XG4gICAgc3VwZXIoKTtcblxuICAgIHRoaXMudGVtcGxhdGUgPSBzdGFjayBpbnN0YW5jZW9mIGFwaS5Sb3NTdGFja0FydGlmYWN0ID8gc3RhY2sudGVtcGxhdGUgOiBzdGFjaztcbiAgfVxuXG4gIHB1YmxpYyBhdChwYXRoOiBzdHJpbmcgfCBzdHJpbmdbXSk6IFN0YWNrUGF0aEluc3BlY3RvciB7XG4gICAgaWYgKCEodGhpcy5zdGFjayBpbnN0YW5jZW9mIGFwaS5Sb3NTdGFja0FydGlmYWN0KSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgdXNlIFwiZXhwZWN0KHN0YWNrKS5hdChwYXRoKVwiIGZvciBhIHJhdyB0ZW1wbGF0ZSwgb25seSBSb3NTdGFja0FydGlmYWN0Jyk7XG4gICAgfVxuXG4gICAgY29uc3Qgc3RyUGF0aCA9IHR5cGVvZiBwYXRoID09PSAnc3RyaW5nJyA/IHBhdGggOiBwYXRoLmpvaW4oJy8nKTtcbiAgICByZXR1cm4gbmV3IFN0YWNrUGF0aEluc3BlY3Rvcih0aGlzLnN0YWNrLCBzdHJQYXRoKTtcbiAgfVxuXG4gIHB1YmxpYyB0b01hdGNoKHRlbXBsYXRlOiB7IFtrZXk6IHN0cmluZ106IGFueSB9LCBtYXRjaFN0eWxlID0gTWF0Y2hTdHlsZS5FWEFDVCkge1xuICAgIHJldHVybiB0aGlzLnRvKG1hdGNoVGVtcGxhdGUodGVtcGxhdGUsIG1hdGNoU3R5bGUpKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdmFsdWUoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB7XG4gICAgcmV0dXJuIHRoaXMudGVtcGxhdGU7XG4gIH1cbn1cblxuZXhwb3J0IGNsYXNzIFN0YWNrUGF0aEluc3BlY3RvciBleHRlbmRzIEluc3BlY3RvciB7XG4gIGNvbnN0cnVjdG9yKHB1YmxpYyByZWFkb25seSBzdGFjazogYXBpLlJvc1N0YWNrQXJ0aWZhY3QsIHB1YmxpYyByZWFkb25seSBwYXRoOiBzdHJpbmcpIHtcbiAgICBzdXBlcigpO1xuICB9XG5cbiAgcHVibGljIGdldCB2YWx1ZSgpOiB7IFtrZXk6IHN0cmluZ106IGFueSB9IHwgdW5kZWZpbmVkIHtcbiAgICAvLyBUaGUgbmFtZXMgb2YgcGF0aHMgaW4gbWV0YWRhdGEgaW4gdGVzdHMgYXJlIHZlcnkgaWxsLWRlZmluZWQuIFRyeSB3aXRoIHRoZSBmdWxsIHBhdGggZmlyc3QsXG4gICAgLy8gdGhlbiB0cnkgd2l0aCB0aGUgc3RhY2sgbmFtZSBwcmVwcmVuZGVkIGZvciBiYWNrd2FyZHMgY29tcGF0IHdpdGggbW9zdCB0ZXN0cyB0aGF0IGhhcHBlbiB0byBnaXZlXG4gICAgLy8gdGhlaXIgc3RhY2sgYW4gSUQgdGhhdCdzIHRoZSBzYW1lIGFzIHRoZSBzdGFjayBuYW1lLlxuICAgIGNvbnN0IG1ldGFkYXRhID0gdGhpcy5zdGFjay5tYW5pZmVzdC5tZXRhZGF0YSB8fCB7fTtcbiAgICBjb25zdCBtZCA9IG1ldGFkYXRhW3RoaXMucGF0aF0gfHwgbWV0YWRhdGFbYC8ke3RoaXMuc3RhY2suaWR9JHt0aGlzLnBhdGh9YF07XG4gICAgaWYgKG1kID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIGNvbnN0IHJlc291cmNlTWQgPSBtZC5maW5kKChlbnRyeSkgPT4gZW50cnkudHlwZSA9PT0gY3hzY2hlbWEuQXJ0aWZhY3RNZXRhZGF0YUVudHJ5VHlwZS5MT0dJQ0FMX0lEKTtcbiAgICBpZiAocmVzb3VyY2VNZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCBsb2dpY2FsSWQgPSByZXNvdXJjZU1kLmRhdGEgYXMgY3hzY2hlbWEuTG9nTWVzc2FnZU1ldGFkYXRhRW50cnk7XG4gICAgcmV0dXJuIHRoaXMuc3RhY2sudGVtcGxhdGUuUmVzb3VyY2VzW2xvZ2ljYWxJZF07XG4gIH1cbn1cbiJdfQ==