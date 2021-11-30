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
    addCount(count) {
        var _a;
        (_a = this.resource) === null || _a === void 0 ? void 0 : _a.addCount(count);
    }
    getAtt(name) {
        var _a;
        return token_1.Token.asAny((_a = this.resource) === null || _a === void 0 ? void 0 : _a.getAtt(name));
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzb3VyY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJyZXNvdXJjZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSx5REFBMkQ7QUFDM0QsK0VBRzJDO0FBSTNDLG1DQUFnQztBQUNoQyxpQ0FBOEI7QUFDOUIsbUNBQWdDO0FBNkJoQzs7R0FFRztBQUNILE1BQXNCLFFBQVMsU0FBUSw0QkFBUztJQW9COUMsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxRQUF1QixFQUFFO1FBQ2pFLEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxhQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBRTVCLElBQUksWUFBWSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7UUFFdEMsSUFBSSxLQUFLLENBQUMsWUFBWSxJQUFJLHFEQUEyQixDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsRUFBRTtZQUN6RSw4Q0FBOEM7WUFDOUMsSUFBSSxDQUFDLGFBQWEsR0FBRyxTQUFTLENBQUM7WUFDL0IsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztZQUNuQyxZQUFZLEdBQUcsV0FBSSxDQUFDLFdBQVcsQ0FBQyxFQUFFLE9BQU8sRUFBRSxHQUFHLEVBQUUsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLENBQUMsQ0FBQztTQUN4RTthQUFNLElBQUksS0FBSyxDQUFDLFlBQVksSUFBSSxDQUFDLGFBQUssQ0FBQyxZQUFZLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxFQUFFO1lBQ3hFLHVDQUF1QztZQUN2QyxJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQyxZQUFZLENBQUM7WUFDeEMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLElBQUksQ0FBQztTQUNwQzthQUFNO1lBQ0wsdUZBQXVGO1lBQ3ZGLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDLFlBQVksQ0FBQztZQUN4QyxJQUFJLENBQUMsc0JBQXNCLEdBQUcsS0FBSyxDQUFDO1NBQ3JDO1FBRUQsSUFBSSxZQUFZLEtBQUssU0FBUyxFQUFFO1lBQzlCLFlBQVksR0FBRyxhQUFLLENBQUMsUUFBUSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1NBQzFDO1FBRUQsSUFBSSxDQUFDLFlBQVksR0FBRyxZQUFZLENBQUM7SUFDbkMsQ0FBQztJQUVNLGFBQWEsQ0FBQyxRQUFrQjs7UUFDckMsTUFBQSxJQUFJLENBQUMsUUFBUSwwQ0FBRSxnQkFBZ0IsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQUUsRUFBRTtJQUNwRCxDQUFDO0lBQ00sa0JBQWtCLENBQUMsTUFBcUI7O1FBQzdDLE1BQUEsSUFBSSxDQUFDLFFBQVEsMENBQUUsa0JBQWtCLENBQUMsTUFBTSxFQUFFO0lBQzVDLENBQUM7SUFFTSxZQUFZLENBQUMsU0FBdUI7O1FBQ3pDLE1BQUEsSUFBSSxDQUFDLFFBQVEsMENBQUUsWUFBWSxDQUFDLFNBQVMsRUFBRTtJQUN6QyxDQUFDO0lBRU0sZUFBZSxDQUFDLElBQVk7O1FBQ2pDLE1BQUEsSUFBSSxDQUFDLFFBQVEsMENBQUUsT0FBTyxDQUFDLElBQUksRUFBRTtJQUMvQixDQUFDO0lBRU0sV0FBVyxDQUFDLEdBQVcsRUFBRSxLQUFVO1FBQ3hDLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNqQixJQUFJLENBQUMsUUFBUSxDQUFDLFdBQVcsQ0FBQyxHQUFHLEVBQUUsS0FBSyxDQUFDLENBQUM7U0FDdkM7SUFDSCxDQUFDO0lBRU0sUUFBUSxDQUFDLEtBQTJCOztRQUN6QyxNQUFBLElBQUksQ0FBQyxRQUFRLDBDQUFFLFFBQVEsQ0FBQyxLQUFLLEVBQUU7SUFDakMsQ0FBQztJQUVNLE1BQU0sQ0FBQyxJQUFZOztRQUN4QixPQUFPLGFBQUssQ0FBQyxLQUFLLE9BQUMsSUFBSSxDQUFDLFFBQVEsMENBQUUsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xELENBQUM7SUFFRDs7Ozs7OztPQU9HO0lBQ0ksdUJBQXVCO1FBQzVCLElBQUksQ0FBQyxJQUFJLENBQUMsc0JBQXNCLEVBQUU7WUFDaEMsb0VBQW9FO1lBQ3BFLE1BQU0sSUFBSSxLQUFLLENBQ2Isd0JBQXdCLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxvQ0FBb0M7Z0JBQ3hFLDRGQUE0RixDQUMvRixDQUFDO1NBQ0g7UUFFRCxJQUFJLENBQUMsSUFBSSxDQUFDLGFBQWEsRUFBRTtZQUN2QixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1NBQ2xEO0lBQ0gsQ0FBQztJQUVTLG9CQUFvQjtRQUM1QixPQUFPLDhDQUFvQixDQUFDLElBQUksQ0FBQyxDQUFDO0lBQ3BDLENBQUM7Q0FDRjtBQXRHRCw0QkFzR0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb25zdHJ1Y3QsIElDb25zdHJ1Y3QgfSBmcm9tIFwiLi9jb25zdHJ1Y3QtY29tcGF0XCI7XG5pbXBvcnQge1xuICBnZW5lcmF0ZVBoeXNpY2FsTmFtZSxcbiAgaXNHZW5lcmF0ZWRXaGVuTmVlZGVkTWFya2VyLFxufSBmcm9tIFwiLi9wcml2YXRlL3BoeXNpY2FsLW5hbWUtZ2VuZXJhdG9yXCI7XG5pbXBvcnQgeyBSb3NSZXNvdXJjZSB9IGZyb20gXCIuL3Jvcy1yZXNvdXJjZVwiO1xuaW1wb3J0IHsgUmVtb3ZhbFBvbGljeSB9IGZyb20gXCIuL3Jvcy1yZW1vdmFsLXBvbGljeVwiO1xuaW1wb3J0IHsgUm9zQ29uZGl0aW9uIH0gZnJvbSBcIi4vcm9zLWNvbmRpdGlvblwiO1xuaW1wb3J0IHsgVG9rZW4gfSBmcm9tIFwiLi90b2tlblwiO1xuaW1wb3J0IHsgTGF6eSB9IGZyb20gXCIuL2xhenlcIjtcbmltcG9ydCB7IFN0YWNrIH0gZnJvbSBcIi4vc3RhY2tcIjtcbmltcG9ydCB7SVJlc29sdmFibGV9IGZyb20gXCIuL3Jlc29sdmFibGVcIjtcbi8qKlxuICogSW50ZXJmYWNlIGZvciB0aGUgUmVzb3VyY2UgY29uc3RydWN0LlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElSZXNvdXJjZSBleHRlbmRzIElDb25zdHJ1Y3Qge1xuICAvKipcbiAgICogVGhlIHN0YWNrIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZC5cbiAgICovXG4gIHJlYWRvbmx5IHN0YWNrOiBTdGFjaztcbn1cblxuLyoqXG4gKiBDb25zdHJ1Y3Rpb24gcHJvcGVydGllcyBmb3Ige0BsaW5rIFJlc291cmNlfS5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBSZXNvdXJjZVByb3BzIHtcbiAgLyoqXG4gICAqIFRoZSB2YWx1ZSBwYXNzZWQgaW4gYnkgdXNlcnMgdG8gdGhlIHBoeXNpY2FsIG5hbWUgcHJvcCBvZiB0aGUgcmVzb3VyY2UuXG4gICAqXG4gICAqIC0gYHVuZGVmaW5lZGAgaW1wbGllcyB0aGF0IGEgcGh5c2ljYWwgbmFtZSB3aWxsIGJlIGFsbG9jYXRlZCBkdXJpbmcgZGVwbG95bWVudC5cbiAgICogLSBhIGNvbmNyZXRlIHZhbHVlIGltcGxpZXMgYSBzcGVjaWZpYyBwaHlzaWNhbCBuYW1lXG4gICAqIC0gYFBoeXNpY2FsTmFtZS5HRU5FUkFURV9JRl9ORUVERURgIGlzIGEgbWFya2VyIHRoYXQgaW5kaWNhdGVzIHRoYXQgYSBwaHlzaWNhbCB3aWxsIG9ubHkgYmUgZ2VuZXJhdGVkXG4gICAqICAgYnkgdGhlIENESyBpZiBpdCBpcyBuZWVkZWQgZm9yIGNyb3NzLWVudmlyb25tZW50IHJlZmVyZW5jZXMuIE90aGVyd2lzZSwgaXQgd2lsbCBiZSBhbGxvY2F0ZWQuXG4gICAqXG4gICAqIEBkZWZhdWx0IC0gVGhlIHBoeXNpY2FsIG5hbWUgd2lsbCBiZSBhbGxvY2F0ZWQgYXQgZGVwbG95bWVudCB0aW1lXG4gICAqL1xuICByZWFkb25seSBwaHlzaWNhbE5hbWU/OiBzdHJpbmc7XG59XG5cbi8qKlxuICogQSBjb25zdHJ1Y3Qgd2hpY2ggcmVwcmVzZW50cyBhIHJlc291cmNlLlxuICovXG5leHBvcnQgYWJzdHJhY3QgY2xhc3MgUmVzb3VyY2UgZXh0ZW5kcyBDb25zdHJ1Y3QgaW1wbGVtZW50cyBJUmVzb3VyY2Uge1xuICBwdWJsaWMgcmVhZG9ubHkgc3RhY2s6IFN0YWNrO1xuICBwdWJsaWMgcmVzb3VyY2U6IFJvc1Jlc291cmNlIHwgdW5kZWZpbmVkO1xuICAvKipcbiAgICogUmV0dXJucyBhIHN0cmluZy1lbmNvZGVkIHRva2VuIHRoYXQgcmVzb2x2ZXMgdG8gdGhlIHBoeXNpY2FsIG5hbWUgdGhhdFxuICAgKiBzaG91bGQgYmUgcGFzc2VkIHRvIHRoZSBST1MgcmVzb3VyY2UuXG4gICAqXG4gICAqIFRoaXMgdmFsdWUgd2lsbCByZXNvbHZlIHRvIG9uZSBvZiB0aGUgZm9sbG93aW5nOlxuICAgKiAtIGEgY29uY3JldGUgdmFsdWUgKGUuZy4gYFwibXktYXdlc29tZS1idWNrZXRcImApXG4gICAqIC0gYHVuZGVmaW5lZGAsIHdoZW4gYSBuYW1lIHNob3VsZCBiZSBnZW5lcmF0ZWQgYnkgUk9TXG4gICAqIC0gYSBjb25jcmV0ZSBuYW1lIGdlbmVyYXRlZCBhdXRvbWF0aWNhbGx5IGR1cmluZyBzeW50aGVzaXMsIGluXG4gICAqICAgY3Jvc3MtZW52aXJvbm1lbnQgc2NlbmFyaW9zLlxuICAgKlxuICAgKiBAZXhwZXJpbWVudGFsXG4gICAqL1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgcGh5c2ljYWxOYW1lOiBzdHJpbmc7XG5cbiAgcHJpdmF0ZSBfcGh5c2ljYWxOYW1lOiBzdHJpbmcgfCB1bmRlZmluZWQ7XG4gIHByaXZhdGUgcmVhZG9ubHkgX2FsbG93Q3Jvc3NFbnZpcm9ubWVudDogYm9vbGVhbjtcblxuICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUmVzb3VyY2VQcm9wcyA9IHt9KSB7XG4gICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICB0aGlzLnN0YWNrID0gU3RhY2sub2YodGhpcyk7XG5cbiAgICBsZXQgcGh5c2ljYWxOYW1lID0gcHJvcHMucGh5c2ljYWxOYW1lO1xuXG4gICAgaWYgKHByb3BzLnBoeXNpY2FsTmFtZSAmJiBpc0dlbmVyYXRlZFdoZW5OZWVkZWRNYXJrZXIocHJvcHMucGh5c2ljYWxOYW1lKSkge1xuICAgICAgLy8gYXV0by1nZW5lcmF0ZSBvbmx5IGlmIGNyb3NzLWVudiBpcyByZXF1aXJlZFxuICAgICAgdGhpcy5fcGh5c2ljYWxOYW1lID0gdW5kZWZpbmVkO1xuICAgICAgdGhpcy5fYWxsb3dDcm9zc0Vudmlyb25tZW50ID0gdHJ1ZTtcbiAgICAgIHBoeXNpY2FsTmFtZSA9IExhenkuc3RyaW5nVmFsdWUoeyBwcm9kdWNlOiAoKSA9PiB0aGlzLl9waHlzaWNhbE5hbWUgfSk7XG4gICAgfSBlbHNlIGlmIChwcm9wcy5waHlzaWNhbE5hbWUgJiYgIVRva2VuLmlzVW5yZXNvbHZlZChwcm9wcy5waHlzaWNhbE5hbWUpKSB7XG4gICAgICAvLyBjb25jcmV0ZSB2YWx1ZSBzcGVjaWZpZWQgYnkgdGhlIHVzZXJcbiAgICAgIHRoaXMuX3BoeXNpY2FsTmFtZSA9IHByb3BzLnBoeXNpY2FsTmFtZTtcbiAgICAgIHRoaXMuX2FsbG93Q3Jvc3NFbnZpcm9ubWVudCA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIC8vIGVpdGhlciB1bmRlZmluZWQgKGRlcGxveS10aW1lKSBvciBoYXMgdG9rZW5zLCB3aGljaCBtZWFucyB3ZSBjYW4ndCB1c2UgZm9yIGNyb3NzLWVudlxuICAgICAgdGhpcy5fcGh5c2ljYWxOYW1lID0gcHJvcHMucGh5c2ljYWxOYW1lO1xuICAgICAgdGhpcy5fYWxsb3dDcm9zc0Vudmlyb25tZW50ID0gZmFsc2U7XG4gICAgfVxuXG4gICAgaWYgKHBoeXNpY2FsTmFtZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICBwaHlzaWNhbE5hbWUgPSBUb2tlbi5hc1N0cmluZyh1bmRlZmluZWQpO1xuICAgIH1cblxuICAgIHRoaXMucGh5c2ljYWxOYW1lID0gcGh5c2ljYWxOYW1lO1xuICB9XG5cbiAgcHVibGljIGFkZERlcGVuZGVuY3kocmVzb3VyY2U6IFJlc291cmNlKTogdm9pZCB7XG4gICAgdGhpcy5yZXNvdXJjZT8uYWRkUm9zRGVwZW5kZW5jeShyZXNvdXJjZS5ub2RlLmlkKTtcbiAgfVxuICBwdWJsaWMgYXBwbHlSZW1vdmFsUG9saWN5KHBvbGljeTogUmVtb3ZhbFBvbGljeSkge1xuICAgIHRoaXMucmVzb3VyY2U/LmFwcGx5UmVtb3ZhbFBvbGljeShwb2xpY3kpO1xuICB9XG5cbiAgcHVibGljIGFkZENvbmRpdGlvbihjb25kaXRpb246IFJvc0NvbmRpdGlvbikge1xuICAgIHRoaXMucmVzb3VyY2U/LmFkZENvbmRpdGlvbihjb25kaXRpb24pO1xuICB9XG5cbiAgcHVibGljIGFkZFJlc291cmNlRGVzYyhkZXNjOiBzdHJpbmcpIHtcbiAgICB0aGlzLnJlc291cmNlPy5hZGREZXNjKGRlc2MpO1xuICB9XG5cbiAgcHVibGljIHNldE1ldGFkYXRhKGtleTogc3RyaW5nLCB2YWx1ZTogYW55KSB7XG4gICAgaWYgKHRoaXMucmVzb3VyY2UpIHtcbiAgICAgIHRoaXMucmVzb3VyY2UuYWRkTWV0YURhdGEoa2V5LCB2YWx1ZSk7XG4gICAgfVxuICB9XG5cbiAgcHVibGljIGFkZENvdW50KGNvdW50OiBudW1iZXIgfCBJUmVzb2x2YWJsZSkge1xuICAgIHRoaXMucmVzb3VyY2U/LmFkZENvdW50KGNvdW50KTtcbiAgfVxuXG4gIHB1YmxpYyBnZXRBdHQobmFtZTogc3RyaW5nKTogSVJlc29sdmFibGUge1xuICAgIHJldHVybiBUb2tlbi5hc0FueSh0aGlzLnJlc291cmNlPy5nZXRBdHQobmFtZSkpO1xuICB9XG5cbiAgLyoqXG4gICAqIENhbGxlZCB3aGVuIHRoaXMgcmVzb3VyY2UgaXMgcmVmZXJlbmNlZCBhY3Jvc3MgZW52aXJvbm1lbnRzXG4gICAqIChhY2NvdW50L3JlZ2lvbikgdG8gb3JkZXIgdG8gcmVxdWVzdCB0aGF0IGEgcGh5c2ljYWwgbmFtZSB3aWxsIGJlIGdlbmVyYXRlZFxuICAgKiBmb3IgdGhpcyByZXNvdXJjZSBkdXJpbmcgc3ludGhlc2lzLCBzbyB0aGUgcmVzb3VyY2UgY2FuIGJlIHJlZmVyZW5jZWRcbiAgICogdGhyb3VnaCBpdCdzIGFic29sdXRlIG5hbWUvYXJuLlxuICAgKlxuICAgKiBAaW50ZXJuYWxcbiAgICovXG4gIHB1YmxpYyBfZW5hYmxlQ3Jvc3NFbnZpcm9ubWVudCgpOiB2b2lkIHtcbiAgICBpZiAoIXRoaXMuX2FsbG93Q3Jvc3NFbnZpcm9ubWVudCkge1xuICAgICAgLy8gZXJyb3Igb3V0IC0gYSBkZXBsb3ktdGltZSBuYW1lIGNhbm5vdCBiZSB1c2VkIGFjcm9zcyBlbnZpcm9ubWVudHNcbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgYENhbm5vdCB1c2UgcmVzb3VyY2UgJyR7dGhpcy5ub2RlLnBhdGh9JyBpbiBhIGNyb3NzLWVudmlyb25tZW50IGZhc2hpb24sIGAgK1xuICAgICAgICAgIFwidGhlIHJlc291cmNlJ3MgcGh5c2ljYWwgbmFtZSBtdXN0IGJlIGV4cGxpY2l0IHNldCBvciB1c2UgYFBoeXNpY2FsTmFtZS5HRU5FUkFURV9JRl9ORUVERURgXCJcbiAgICAgICk7XG4gICAgfVxuXG4gICAgaWYgKCF0aGlzLl9waHlzaWNhbE5hbWUpIHtcbiAgICAgIHRoaXMuX3BoeXNpY2FsTmFtZSA9IHRoaXMuZ2VuZXJhdGVQaHlzaWNhbE5hbWUoKTtcbiAgICB9XG4gIH1cblxuICBwcm90ZWN0ZWQgZ2VuZXJhdGVQaHlzaWNhbE5hbWUoKTogc3RyaW5nIHtcbiAgICByZXR1cm4gZ2VuZXJhdGVQaHlzaWNhbE5hbWUodGhpcyk7XG4gIH1cbn1cbiJdfQ==