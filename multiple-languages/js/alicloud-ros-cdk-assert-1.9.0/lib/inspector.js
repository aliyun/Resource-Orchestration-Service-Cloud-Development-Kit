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
        return this.to((0, assertion_1.not)(assertion));
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
        return this.to((0, match_template_1.matchTemplate)(template, matchStyle));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5zcGVjdG9yLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaW5zcGVjdG9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhEQUE4RDtBQUM5RCwrQ0FBK0M7QUFDL0MsMkNBQTZDO0FBQzdDLGdFQUF3RTtBQUV4RSxNQUFzQixTQUFTO0lBRzdCO1FBQ0UsSUFBSSxDQUFDLFlBQVksR0FBRyxTQUFTLENBQUM7SUFDaEMsQ0FBQztJQUVNLEVBQUUsQ0FBQyxTQUEwQjtRQUNsQyxPQUFPLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLFNBQVMsQ0FBQyxDQUFDO0lBQ2hHLENBQUM7SUFFTSxLQUFLLENBQUMsU0FBMEI7UUFDckMsT0FBTyxJQUFJLENBQUMsRUFBRSxDQUFDLElBQUEsZUFBRyxFQUFDLFNBQVMsQ0FBQyxDQUFDLENBQUM7SUFDakMsQ0FBQztJQUlPLEdBQUcsQ0FBQyxTQUEwQjtRQUNwQyxTQUFTLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ2hDLENBQUM7Q0FDRjtBQXBCRCw4QkFvQkM7QUFFRCxNQUFhLGNBQWUsU0FBUSxTQUFTO0lBRzNDLFlBQTRCLEtBQW9DO1FBQzlELEtBQUssRUFBRSxDQUFDO1FBRGtCLFVBQUssR0FBTCxLQUFLLENBQStCO1FBRzlELElBQUksQ0FBQyxRQUFRLEdBQUcsS0FBSyxZQUFZLEdBQUcsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsS0FBSyxDQUFDO0lBQ2pGLENBQUM7SUFFTSxFQUFFLENBQUMsSUFBdUI7UUFDL0IsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssWUFBWSxHQUFHLENBQUMsZ0JBQWdCLENBQUMsRUFBRTtZQUNqRCxNQUFNLElBQUksS0FBSyxDQUFDLCtFQUErRSxDQUFDLENBQUM7U0FDbEc7UUFFRCxNQUFNLE9BQU8sR0FBRyxPQUFPLElBQUksS0FBSyxRQUFRLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNqRSxPQUFPLElBQUksa0JBQWtCLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxPQUFPLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU0sT0FBTyxDQUFDLFFBQWdDLEVBQUUsVUFBVSxHQUFHLDJCQUFVLENBQUMsS0FBSztRQUM1RSxPQUFPLElBQUksQ0FBQyxFQUFFLENBQUMsSUFBQSw4QkFBYSxFQUFDLFFBQVEsRUFBRSxVQUFVLENBQUMsQ0FBQyxDQUFDO0lBQ3RELENBQUM7SUFFRCxJQUFXLEtBQUs7UUFDZCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUM7SUFDdkIsQ0FBQztDQUNGO0FBekJELHdDQXlCQztBQUVELE1BQWEsa0JBQW1CLFNBQVEsU0FBUztJQUMvQyxZQUE0QixLQUEyQixFQUFrQixJQUFZO1FBQ25GLEtBQUssRUFBRSxDQUFDO1FBRGtCLFVBQUssR0FBTCxLQUFLLENBQXNCO1FBQWtCLFNBQUksR0FBSixJQUFJLENBQVE7SUFFckYsQ0FBQztJQUVELElBQVcsS0FBSztRQUNkLDhGQUE4RjtRQUM5RixtR0FBbUc7UUFDbkcsdURBQXVEO1FBQ3ZELE1BQU0sUUFBUSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFFBQVEsSUFBSSxFQUFFLENBQUM7UUFDcEQsTUFBTSxFQUFFLEdBQUcsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxRQUFRLENBQUMsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLEVBQUUsR0FBRyxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztRQUM1RSxJQUFJLEVBQUUsS0FBSyxTQUFTLEVBQUU7WUFDcEIsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFDRCxNQUFNLFVBQVUsR0FBRyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxLQUFLLENBQUMsSUFBSSxLQUFLLFFBQVEsQ0FBQyx5QkFBeUIsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwRyxJQUFJLFVBQVUsS0FBSyxTQUFTLEVBQUU7WUFDNUIsT0FBTyxTQUFTLENBQUM7U0FDbEI7UUFDRCxNQUFNLFNBQVMsR0FBRyxVQUFVLENBQUMsSUFBd0MsQ0FBQztRQUN0RSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxTQUFTLENBQUMsQ0FBQztJQUNsRCxDQUFDO0NBQ0Y7QUFyQkQsZ0RBcUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgY3hzY2hlbWEgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstYXNzZW1ibHktc2NoZW1hJztcbmltcG9ydCAqIGFzIGFwaSBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jeGFwaSc7XG5pbXBvcnQgeyBBc3NlcnRpb24sIG5vdCB9IGZyb20gJy4vYXNzZXJ0aW9uJztcbmltcG9ydCB7IE1hdGNoU3R5bGUsIG1hdGNoVGVtcGxhdGUgfSBmcm9tICcuL2Fzc2VydGlvbnMvbWF0Y2gtdGVtcGxhdGUnO1xuXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgSW5zcGVjdG9yIHtcbiAgcHVibGljIGFyb3VuZEFzc2VydD86IChjYjogKCkgPT4gdm9pZCkgPT4gYW55O1xuXG4gIGNvbnN0cnVjdG9yKCkge1xuICAgIHRoaXMuYXJvdW5kQXNzZXJ0ID0gdW5kZWZpbmVkO1xuICB9XG5cbiAgcHVibGljIHRvKGFzc2VydGlvbjogQXNzZXJ0aW9uPHRoaXM+KTogYW55IHtcbiAgICByZXR1cm4gdGhpcy5hcm91bmRBc3NlcnQgPyB0aGlzLmFyb3VuZEFzc2VydCgoKSA9PiB0aGlzLl90byhhc3NlcnRpb24pKSA6IHRoaXMuX3RvKGFzc2VydGlvbik7XG4gIH1cblxuICBwdWJsaWMgbm90VG8oYXNzZXJ0aW9uOiBBc3NlcnRpb248dGhpcz4pOiBhbnkge1xuICAgIHJldHVybiB0aGlzLnRvKG5vdChhc3NlcnRpb24pKTtcbiAgfVxuXG4gIGFic3RyYWN0IGdldCB2YWx1ZSgpOiBhbnk7XG5cbiAgcHJpdmF0ZSBfdG8oYXNzZXJ0aW9uOiBBc3NlcnRpb248dGhpcz4pOiBhbnkge1xuICAgIGFzc2VydGlvbi5hc3NlcnRPclRocm93KHRoaXMpO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdGFja0luc3BlY3RvciBleHRlbmRzIEluc3BlY3RvciB7XG4gIHByaXZhdGUgcmVhZG9ubHkgdGVtcGxhdGU6IHsgW2tleTogc3RyaW5nXTogYW55IH07XG5cbiAgY29uc3RydWN0b3IocHVibGljIHJlYWRvbmx5IHN0YWNrOiBhcGkuUm9zU3RhY2tBcnRpZmFjdCB8IG9iamVjdCkge1xuICAgIHN1cGVyKCk7XG5cbiAgICB0aGlzLnRlbXBsYXRlID0gc3RhY2sgaW5zdGFuY2VvZiBhcGkuUm9zU3RhY2tBcnRpZmFjdCA/IHN0YWNrLnRlbXBsYXRlIDogc3RhY2s7XG4gIH1cblxuICBwdWJsaWMgYXQocGF0aDogc3RyaW5nIHwgc3RyaW5nW10pOiBTdGFja1BhdGhJbnNwZWN0b3Ige1xuICAgIGlmICghKHRoaXMuc3RhY2sgaW5zdGFuY2VvZiBhcGkuUm9zU3RhY2tBcnRpZmFjdCkpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignQ2Fubm90IHVzZSBcImV4cGVjdChzdGFjaykuYXQocGF0aClcIiBmb3IgYSByYXcgdGVtcGxhdGUsIG9ubHkgUm9zU3RhY2tBcnRpZmFjdCcpO1xuICAgIH1cblxuICAgIGNvbnN0IHN0clBhdGggPSB0eXBlb2YgcGF0aCA9PT0gJ3N0cmluZycgPyBwYXRoIDogcGF0aC5qb2luKCcvJyk7XG4gICAgcmV0dXJuIG5ldyBTdGFja1BhdGhJbnNwZWN0b3IodGhpcy5zdGFjaywgc3RyUGF0aCk7XG4gIH1cblxuICBwdWJsaWMgdG9NYXRjaCh0ZW1wbGF0ZTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSwgbWF0Y2hTdHlsZSA9IE1hdGNoU3R5bGUuRVhBQ1QpIHtcbiAgICByZXR1cm4gdGhpcy50byhtYXRjaFRlbXBsYXRlKHRlbXBsYXRlLCBtYXRjaFN0eWxlKSk7XG4gIH1cblxuICBwdWJsaWMgZ2V0IHZhbHVlKCk6IHsgW2tleTogc3RyaW5nXTogYW55IH0ge1xuICAgIHJldHVybiB0aGlzLnRlbXBsYXRlO1xuICB9XG59XG5cbmV4cG9ydCBjbGFzcyBTdGFja1BhdGhJbnNwZWN0b3IgZXh0ZW5kcyBJbnNwZWN0b3Ige1xuICBjb25zdHJ1Y3RvcihwdWJsaWMgcmVhZG9ubHkgc3RhY2s6IGFwaS5Sb3NTdGFja0FydGlmYWN0LCBwdWJsaWMgcmVhZG9ubHkgcGF0aDogc3RyaW5nKSB7XG4gICAgc3VwZXIoKTtcbiAgfVxuXG4gIHB1YmxpYyBnZXQgdmFsdWUoKTogeyBba2V5OiBzdHJpbmddOiBhbnkgfSB8IHVuZGVmaW5lZCB7XG4gICAgLy8gVGhlIG5hbWVzIG9mIHBhdGhzIGluIG1ldGFkYXRhIGluIHRlc3RzIGFyZSB2ZXJ5IGlsbC1kZWZpbmVkLiBUcnkgd2l0aCB0aGUgZnVsbCBwYXRoIGZpcnN0LFxuICAgIC8vIHRoZW4gdHJ5IHdpdGggdGhlIHN0YWNrIG5hbWUgcHJlcHJlbmRlZCBmb3IgYmFja3dhcmRzIGNvbXBhdCB3aXRoIG1vc3QgdGVzdHMgdGhhdCBoYXBwZW4gdG8gZ2l2ZVxuICAgIC8vIHRoZWlyIHN0YWNrIGFuIElEIHRoYXQncyB0aGUgc2FtZSBhcyB0aGUgc3RhY2sgbmFtZS5cbiAgICBjb25zdCBtZXRhZGF0YSA9IHRoaXMuc3RhY2subWFuaWZlc3QubWV0YWRhdGEgfHwge307XG4gICAgY29uc3QgbWQgPSBtZXRhZGF0YVt0aGlzLnBhdGhdIHx8IG1ldGFkYXRhW2AvJHt0aGlzLnN0YWNrLmlkfSR7dGhpcy5wYXRofWBdO1xuICAgIGlmIChtZCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICBjb25zdCByZXNvdXJjZU1kID0gbWQuZmluZCgoZW50cnkpID0+IGVudHJ5LnR5cGUgPT09IGN4c2NoZW1hLkFydGlmYWN0TWV0YWRhdGFFbnRyeVR5cGUuTE9HSUNBTF9JRCk7XG4gICAgaWYgKHJlc291cmNlTWQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgY29uc3QgbG9naWNhbElkID0gcmVzb3VyY2VNZC5kYXRhIGFzIGN4c2NoZW1hLkxvZ01lc3NhZ2VNZXRhZGF0YUVudHJ5O1xuICAgIHJldHVybiB0aGlzLnN0YWNrLnRlbXBsYXRlLlJlc291cmNlc1tsb2dpY2FsSWRdO1xuICB9XG59XG4iXX0=