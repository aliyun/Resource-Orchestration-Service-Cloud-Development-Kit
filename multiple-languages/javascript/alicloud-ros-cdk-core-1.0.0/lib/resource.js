"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Resource = void 0;
const construct_compat_1 = require("./construct-compat");
const physical_name_generator_1 = require("./private/physical-name-generator");
const token_1 = require("./token");
const lazy_1 = require("./lazy");
const stack_1 = require("./stack");
/**
 * A construct which represents a resource.
 */
class Resource extends construct_compat_1.Construct {
    constructor(scope, id, props = {}) {
        super(scope, id);
        this.stack = stack_1.Stack.of(this);
        let physicalName = props.physicalName;
        if (props.physicalName && physical_name_generator_1.isGeneratedWhenNeededMarker(props.physicalName)) {
            // auto-generate only if cross-env is required
            this._physicalName = undefined;
            this._allowCrossEnvironment = true;
            physicalName = lazy_1.Lazy.stringValue({ produce: () => this._physicalName });
        }
        else if (props.physicalName && !token_1.Token.isUnresolved(props.physicalName)) {
            // concrete value specified by the user
            this._physicalName = props.physicalName;
            this._allowCrossEnvironment = true;
        }
        else {
            // either undefined (deploy-time) or has tokens, which means we can't use for cross-env
            this._physicalName = props.physicalName;
            this._allowCrossEnvironment = false;
        }
        if (physicalName === undefined) {
            physicalName = token_1.Token.asString(undefined);
        }
        this.physicalName = physicalName;
    }
    addDependency(resource) {
        var _a;
        (_a = this.resource) === null || _a === void 0 ? void 0 : _a.addRosDependency(resource.node.id);
    }
    applyRemovalPolicy(policy) {
        var _a;
        (_a = this.resource) === null || _a === void 0 ? void 0 : _a.applyRemovalPolicy(policy);
    }
    addCondition(condition) {
        var _a;
        (_a = this.resource) === null || _a === void 0 ? void 0 : _a.addCondition(condition);
    }
    addResourceDesc(desc) {
        var _a;
        (_a = this.resource) === null || _a === void 0 ? void 0 : _a.addDesc(desc);
    }
    setMetadata(key, value) {
        if (this.resource) {
            this.resource.addMetaData(key, value);
        }
    }
    getAtt(name) {
        var _a;
        return token_1.Token.asString((_a = this.resource) === null || _a === void 0 ? void 0 : _a.getAtt(name));
    }
    /**
     * Called when this resource is referenced across environments
     * (account/region) to order to request that a physical name will be generated
     * for this resource during synthesis, so the resource can be referenced
     * through it's absolute name/arn.
     *
     * @internal
     */
    _enableCrossEnvironment() {
        if (!this._allowCrossEnvironment) {
            // error out - a deploy-time name cannot be used across environments
            throw new Error(`Cannot use resource '${this.node.path}' in a cross-environment fashion, ` +
                "the resource's physical name must be explicit set or use `PhysicalName.GENERATE_IF_NEEDED`");
        }
        if (!this._physicalName) {
            this._physicalName = this.generatePhysicalName();
        }
    }
    generatePhysicalName() {
        return physical_name_generator_1.generatePhysicalName(this);
    }
}
exports.Resource = Resource;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5REFBMkQ7QUFDM0QsK0VBRzJDO0FBSTNDLG1DQUFnQztBQUNoQyxpQ0FBOEI7QUFDOUIsbUNBQWdDO0FBNEJoQzs7R0FFRztBQUNILE1BQXNCLFFBQVMsU0FBUSw0QkFBUztJQW9COUMsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxRQUF1QixFQUFFO1FBQ2pFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxhQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTVCLElBQUksWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7UUFFdEMsSUFBSSxLQUFLLENBQUMsWUFBWSxJQUFJLHFEQUEyQixDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUN6RSw4Q0FBOEM7WUFDOUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDL0IsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztZQUNuQyxZQUFZLEdBQUcsV0FBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztTQUN4RTthQUFNLElBQUksS0FBSyxDQUFDLFlBQVksSUFBSSxDQUFDLGFBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ3hFLHVDQUF1QztZQUN2QyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7WUFDeEMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztTQUNwQzthQUFNO1lBQ0wsdUZBQXVGO1lBQ3ZGLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztZQUN4QyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxZQUFZLEtBQUssU0FBUyxFQUFFO1lBQzlCLFlBQVksR0FBRyxhQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzFDO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDbkMsQ0FBQztJQUVNLGFBQWEsQ0FBQyxRQUFrQjs7UUFDckMsTUFBQSxJQUFJLENBQUMsUUFBUSwwQ0FBRSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtJQUNwRCxDQUFDO0lBQ00sa0JBQWtCLENBQUMsTUFBcUI7O1FBQzdDLE1BQUEsSUFBSSxDQUFDLFFBQVEsMENBQUUsa0JBQWtCLENBQUMsTUFBTSxFQUFFO0lBQzVDLENBQUM7SUFFTSxZQUFZLENBQUMsU0FBdUI7O1FBQ3pDLE1BQUEsSUFBSSxDQUFDLFFBQVEsMENBQUUsWUFBWSxDQUFDLFNBQVMsRUFBRTtJQUN6QyxDQUFDO0lBRU0sZUFBZSxDQUFDLElBQVk7O1FBQ2pDLE1BQUEsSUFBSSxDQUFDLFFBQVEsMENBQUUsT0FBTyxDQUFDLElBQUksRUFBRTtJQUMvQixDQUFDO0lBRU0sV0FBVyxDQUFDLEdBQVcsRUFBRSxLQUFVO1FBQ3hDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDO0lBRU0sTUFBTSxDQUFDLElBQVk7O1FBQ3hCLE9BQU8sYUFBSyxDQUFDLFFBQVEsT0FBQyxJQUFJLENBQUMsUUFBUSwwQ0FBRSxNQUFNLENBQUMsSUFBSSxFQUFFLENBQUM7SUFDckQsQ0FBQztJQUVEOzs7Ozs7O09BT0c7SUFDSSx1QkFBdUI7UUFDNUIsSUFBSSxDQUFDLElBQUksQ0FBQyxzQkFBc0IsRUFBRTtZQUNoQyxvRUFBb0U7WUFDcEUsTUFBTSxJQUFJLEtBQUssQ0FDYix3QkFBd0IsSUFBSSxDQUFDLElBQUksQ0FBQyxJQUFJLG9DQUFvQztnQkFDeEUsNEZBQTRGLENBQy9GLENBQUM7U0FDSDtRQUVELElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO1lBQ3ZCLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLG9CQUFvQixFQUFFLENBQUM7U0FDbEQ7SUFDSCxDQUFDO0lBRVMsb0JBQW9CO1FBQzVCLE9BQU8sOENBQW9CLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDcEMsQ0FBQztDQUNGO0FBbEdELDRCQWtHQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbnN0cnVjdCwgSUNvbnN0cnVjdCB9IGZyb20gXCIuL2NvbnN0cnVjdC1jb21wYXRcIjtcbmltcG9ydCB7XG4gIGdlbmVyYXRlUGh5c2ljYWxOYW1lLFxuICBpc0dlbmVyYXRlZFdoZW5OZWVkZWRNYXJrZXIsXG59IGZyb20gXCIuL3ByaXZhdGUvcGh5c2ljYWwtbmFtZS1nZW5lcmF0b3JcIjtcbmltcG9ydCB7IFJvc1Jlc291cmNlIH0gZnJvbSBcIi4vcm9zLXJlc291cmNlXCI7XG5pbXBvcnQgeyBSZW1vdmFsUG9saWN5IH0gZnJvbSBcIi4vcm9zLXJlbW92YWwtcG9saWN5XCI7XG5pbXBvcnQgeyBSb3NDb25kaXRpb24gfSBmcm9tIFwiLi9yb3MtY29uZGl0aW9uXCI7XG5pbXBvcnQgeyBUb2tlbiB9IGZyb20gXCIuL3Rva2VuXCI7XG5pbXBvcnQgeyBMYXp5IH0gZnJvbSBcIi4vbGF6eVwiO1xuaW1wb3J0IHsgU3RhY2sgfSBmcm9tIFwiLi9zdGFja1wiO1xuLyoqXG4gKiBJbnRlcmZhY2UgZm9yIHRoZSBSZXNvdXJjZSBjb25zdHJ1Y3QuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVJlc291cmNlIGV4dGVuZHMgSUNvbnN0cnVjdCB7XG4gIC8qKlxuICAgKiBUaGUgc3RhY2sgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkLlxuICAgKi9cbiAgcmVhZG9ubHkgc3RhY2s6IFN0YWNrO1xufVxuXG4vKipcbiAqIENvbnN0cnVjdGlvbiBwcm9wZXJ0aWVzIGZvciB7QGxpbmsgUmVzb3VyY2V9LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJlc291cmNlUHJvcHMge1xuICAvKipcbiAgICogVGhlIHZhbHVlIHBhc3NlZCBpbiBieSB1c2VycyB0byB0aGUgcGh5c2ljYWwgbmFtZSBwcm9wIG9mIHRoZSByZXNvdXJjZS5cbiAgICpcbiAgICogLSBgdW5kZWZpbmVkYCBpbXBsaWVzIHRoYXQgYSBwaHlzaWNhbCBuYW1lIHdpbGwgYmUgYWxsb2NhdGVkIGR1cmluZyBkZXBsb3ltZW50LlxuICAgKiAtIGEgY29uY3JldGUgdmFsdWUgaW1wbGllcyBhIHNwZWNpZmljIHBoeXNpY2FsIG5hbWVcbiAgICogLSBgUGh5c2ljYWxOYW1lLkdFTkVSQVRFX0lGX05FRURFRGAgaXMgYSBtYXJrZXIgdGhhdCBpbmRpY2F0ZXMgdGhhdCBhIHBoeXNpY2FsIHdpbGwgb25seSBiZSBnZW5lcmF0ZWRcbiAgICogICBieSB0aGUgQ0RLIGlmIGl0IGlzIG5lZWRlZCBmb3IgY3Jvc3MtZW52aXJvbm1lbnQgcmVmZXJlbmNlcy4gT3RoZXJ3aXNlLCBpdCB3aWxsIGJlIGFsbG9jYXRlZC5cbiAgICpcbiAgICogQGRlZmF1bHQgLSBUaGUgcGh5c2ljYWwgbmFtZSB3aWxsIGJlIGFsbG9jYXRlZCBhdCBkZXBsb3ltZW50IHRpbWVcbiAgICovXG4gIHJlYWRvbmx5IHBoeXNpY2FsTmFtZT86IHN0cmluZztcbn1cblxuLyoqXG4gKiBBIGNvbnN0cnVjdCB3aGljaCByZXByZXNlbnRzIGEgcmVzb3VyY2UuXG4gKi9cbmV4cG9ydCBhYnN0cmFjdCBjbGFzcyBSZXNvdXJjZSBleHRlbmRzIENvbnN0cnVjdCBpbXBsZW1lbnRzIElSZXNvdXJjZSB7XG4gIHB1YmxpYyByZWFkb25seSBzdGFjazogU3RhY2s7XG4gIHB1YmxpYyByZXNvdXJjZTogUm9zUmVzb3VyY2UgfCB1bmRlZmluZWQ7XG4gIC8qKlxuICAgKiBSZXR1cm5zIGEgc3RyaW5nLWVuY29kZWQgdG9rZW4gdGhhdCByZXNvbHZlcyB0byB0aGUgcGh5c2ljYWwgbmFtZSB0aGF0XG4gICAqIHNob3VsZCBiZSBwYXNzZWQgdG8gdGhlIFJPUyByZXNvdXJjZS5cbiAgICpcbiAgICogVGhpcyB2YWx1ZSB3aWxsIHJlc29sdmUgdG8gb25lIG9mIHRoZSBmb2xsb3dpbmc6XG4gICAqIC0gYSBjb25jcmV0ZSB2YWx1ZSAoZS5nLiBgXCJteS1hd2Vzb21lLWJ1Y2tldFwiYClcbiAgICogLSBgdW5kZWZpbmVkYCwgd2hlbiBhIG5hbWUgc2hvdWxkIGJlIGdlbmVyYXRlZCBieSBST1NcbiAgICogLSBhIGNvbmNyZXRlIG5hbWUgZ2VuZXJhdGVkIGF1dG9tYXRpY2FsbHkgZHVyaW5nIHN5bnRoZXNpcywgaW5cbiAgICogICBjcm9zcy1lbnZpcm9ubWVudCBzY2VuYXJpb3MuXG4gICAqXG4gICAqIEBleHBlcmltZW50YWxcbiAgICovXG4gIHByb3RlY3RlZCByZWFkb25seSBwaHlzaWNhbE5hbWU6IHN0cmluZztcblxuICBwcml2YXRlIF9waHlzaWNhbE5hbWU6IHN0cmluZyB8IHVuZGVmaW5lZDtcbiAgcHJpdmF0ZSByZWFkb25seSBfYWxsb3dDcm9zc0Vudmlyb25tZW50OiBib29sZWFuO1xuXG4gIGNvbnN0cnVjdG9yKHNjb3BlOiBDb25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBSZXNvdXJjZVByb3BzID0ge30pIHtcbiAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgIHRoaXMuc3RhY2sgPSBTdGFjay5vZih0aGlzKTtcblxuICAgIGxldCBwaHlzaWNhbE5hbWUgPSBwcm9wcy5waHlzaWNhbE5hbWU7XG5cbiAgICBpZiAocHJvcHMucGh5c2ljYWxOYW1lICYmIGlzR2VuZXJhdGVkV2hlbk5lZWRlZE1hcmtlcihwcm9wcy5waHlzaWNhbE5hbWUpKSB7XG4gICAgICAvLyBhdXRvLWdlbmVyYXRlIG9ubHkgaWYgY3Jvc3MtZW52IGlzIHJlcXVpcmVkXG4gICAgICB0aGlzLl9waHlzaWNhbE5hbWUgPSB1bmRlZmluZWQ7XG4gICAgICB0aGlzLl9hbGxvd0Nyb3NzRW52aXJvbm1lbnQgPSB0cnVlO1xuICAgICAgcGh5c2ljYWxOYW1lID0gTGF6eS5zdHJpbmdWYWx1ZSh7IHByb2R1Y2U6ICgpID0+IHRoaXMuX3BoeXNpY2FsTmFtZSB9KTtcbiAgICB9IGVsc2UgaWYgKHByb3BzLnBoeXNpY2FsTmFtZSAmJiAhVG9rZW4uaXNVbnJlc29sdmVkKHByb3BzLnBoeXNpY2FsTmFtZSkpIHtcbiAgICAgIC8vIGNvbmNyZXRlIHZhbHVlIHNwZWNpZmllZCBieSB0aGUgdXNlclxuICAgICAgdGhpcy5fcGh5c2ljYWxOYW1lID0gcHJvcHMucGh5c2ljYWxOYW1lO1xuICAgICAgdGhpcy5fYWxsb3dDcm9zc0Vudmlyb25tZW50ID0gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgLy8gZWl0aGVyIHVuZGVmaW5lZCAoZGVwbG95LXRpbWUpIG9yIGhhcyB0b2tlbnMsIHdoaWNoIG1lYW5zIHdlIGNhbid0IHVzZSBmb3IgY3Jvc3MtZW52XG4gICAgICB0aGlzLl9waHlzaWNhbE5hbWUgPSBwcm9wcy5waHlzaWNhbE5hbWU7XG4gICAgICB0aGlzLl9hbGxvd0Nyb3NzRW52aXJvbm1lbnQgPSBmYWxzZTtcbiAgICB9XG5cbiAgICBpZiAocGh5c2ljYWxOYW1lID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHBoeXNpY2FsTmFtZSA9IFRva2VuLmFzU3RyaW5nKHVuZGVmaW5lZCk7XG4gICAgfVxuXG4gICAgdGhpcy5waHlzaWNhbE5hbWUgPSBwaHlzaWNhbE5hbWU7XG4gIH1cblxuICBwdWJsaWMgYWRkRGVwZW5kZW5jeShyZXNvdXJjZTogUmVzb3VyY2UpOiB2b2lkIHtcbiAgICB0aGlzLnJlc291cmNlPy5hZGRSb3NEZXBlbmRlbmN5KHJlc291cmNlLm5vZGUuaWQpO1xuICB9XG4gIHB1YmxpYyBhcHBseVJlbW92YWxQb2xpY3kocG9saWN5OiBSZW1vdmFsUG9saWN5KSB7XG4gICAgdGhpcy5yZXNvdXJjZT8uYXBwbHlSZW1vdmFsUG9saWN5KHBvbGljeSk7XG4gIH1cblxuICBwdWJsaWMgYWRkQ29uZGl0aW9uKGNvbmRpdGlvbjogUm9zQ29uZGl0aW9uKSB7XG4gICAgdGhpcy5yZXNvdXJjZT8uYWRkQ29uZGl0aW9uKGNvbmRpdGlvbik7XG4gIH1cblxuICBwdWJsaWMgYWRkUmVzb3VyY2VEZXNjKGRlc2M6IHN0cmluZykge1xuICAgIHRoaXMucmVzb3VyY2U/LmFkZERlc2MoZGVzYyk7XG4gIH1cblxuICBwdWJsaWMgc2V0TWV0YWRhdGEoa2V5OiBzdHJpbmcsIHZhbHVlOiBhbnkpIHtcbiAgICBpZiAodGhpcy5yZXNvdXJjZSkge1xuICAgICAgdGhpcy5yZXNvdXJjZS5hZGRNZXRhRGF0YShrZXksIHZhbHVlKTtcbiAgICB9XG4gIH1cblxuICBwdWJsaWMgZ2V0QXR0KG5hbWU6IHN0cmluZykge1xuICAgIHJldHVybiBUb2tlbi5hc1N0cmluZyh0aGlzLnJlc291cmNlPy5nZXRBdHQobmFtZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoaXMgcmVzb3VyY2UgaXMgcmVmZXJlbmNlZCBhY3Jvc3MgZW52aXJvbm1lbnRzXG4gICAqIChhY2NvdW50L3JlZ2lvbikgdG8gb3JkZXIgdG8gcmVxdWVzdCB0aGF0IGEgcGh5c2ljYWwgbmFtZSB3aWxsIGJlIGdlbmVyYXRlZFxuICAgKiBmb3IgdGhpcyByZXNvdXJjZSBkdXJpbmcgc3ludGhlc2lzLCBzbyB0aGUgcmVzb3VyY2UgY2FuIGJlIHJlZmVyZW5jZWRcbiAgICogdGhyb3VnaCBpdCdzIGFic29sdXRlIG5hbWUvYXJuLlxuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHB1YmxpYyBfZW5hYmxlQ3Jvc3NFbnZpcm9ubWVudCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2FsbG93Q3Jvc3NFbnZpcm9ubWVudCkge1xuICAgICAgLy8gZXJyb3Igb3V0IC0gYSBkZXBsb3ktdGltZSBuYW1lIGNhbm5vdCBiZSB1c2VkIGFjcm9zcyBlbnZpcm9ubWVudHNcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYENhbm5vdCB1c2UgcmVzb3VyY2UgJyR7dGhpcy5ub2RlLnBhdGh9JyBpbiBhIGNyb3NzLWVudmlyb25tZW50IGZhc2hpb24sIGAgK1xuICAgICAgICAgIFwidGhlIHJlc291cmNlJ3MgcGh5c2ljYWwgbmFtZSBtdXN0IGJlIGV4cGxpY2l0IHNldCBvciB1c2UgYFBoeXNpY2FsTmFtZS5HRU5FUkFURV9JRl9ORUVERURgXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9waHlzaWNhbE5hbWUpIHtcbiAgICAgIHRoaXMuX3BoeXNpY2FsTmFtZSA9IHRoaXMuZ2VuZXJhdGVQaHlzaWNhbE5hbWUoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2VuZXJhdGVQaHlzaWNhbE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZ2VuZXJhdGVQaHlzaWNhbE5hbWUodGhpcyk7XG4gIH1cbn1cbiJdfQ==