"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Namespaces = exports.NamespacesProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const sae_generated_1 = require("./sae.generated");
Object.defineProperty(exports, "NamespacesProperty", { enumerable: true, get: function () { return sae_generated_1.RosNamespaces; } });
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::SAE::Namespaces`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNamespaces`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sae-namespaces
 */
class Namespaces extends ros.Resource {
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props = {}, enableResourcePropertyConstraint = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        const rosNamespaces = new sae_generated_1.RosNamespaces(this, id, {}, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        props;
        this.resource = rosNamespaces;
        this.attrNamespaceIds = rosNamespaces.attrNamespaceIds;
        this.attrNamespaces = rosNamespaces.attrNamespaces;
    }
}
exports.Namespaces = Namespaces;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmFtZXNwYWNlcy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm5hbWVzcGFjZXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFnRDtBQUV0QixtR0FGakIsNkJBQWEsT0FFc0I7QUFTNUM7Ozs7R0FJRztBQUNILE1BQWEsVUFBVyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBZ0J4Qzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxRQUF5QixFQUFFLEVBQUUsbUNBQTJDLElBQUk7UUFDdEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLGFBQWEsR0FBRyxJQUFJLDZCQUFhLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRyxFQUNsRCxFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixLQUFLLENBQUM7UUFDTixJQUFJLENBQUMsUUFBUSxHQUFHLGFBQWEsQ0FBQztRQUM5QixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsYUFBYSxDQUFDLGdCQUFnQixDQUFDO1FBQ3ZELElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDLGNBQWMsQ0FBQztJQUN2RCxDQUFDO0NBQ0o7QUFuQ0QsZ0NBbUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zTmFtZXNwYWNlcyB9IGZyb20gJy4vc2FlLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc05hbWVzcGFjZXMgYXMgTmFtZXNwYWNlc1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgTmFtZXNwYWNlc2AuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2Utc2FlLW5hbWVzcGFjZXNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOYW1lc3BhY2VzUHJvcHMge1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgREFUQVNPVVJDRTo6U0FFOjpOYW1lc3BhY2VzYC5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc05hbWVzcGFjZXNgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2Utc2FlLW5hbWVzcGFjZXNcbiAqL1xuZXhwb3J0IGNsYXNzIE5hbWVzcGFjZXMgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IE5hbWVzcGFjZXNQcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTmFtZXNwYWNlSWRzOiBUaGUgbGlzdCBvZiBuYW1lc3BhY2UgbmFtZXMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJOYW1lc3BhY2VJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBOYW1lc3BhY2VzOiBUaGUgbGlzdCBvZiBuYW1lc3BhY2VzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyTmFtZXNwYWNlczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IE5hbWVzcGFjZXNQcm9wcyA9IHt9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zTmFtZXNwYWNlcyA9IG5ldyBSb3NOYW1lc3BhY2VzKHRoaXMsIGlkLCAge1xuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgcHJvcHM7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NOYW1lc3BhY2VzO1xuICAgICAgICB0aGlzLmF0dHJOYW1lc3BhY2VJZHMgPSByb3NOYW1lc3BhY2VzLmF0dHJOYW1lc3BhY2VJZHM7XG4gICAgICAgIHRoaXMuYXR0ck5hbWVzcGFjZXMgPSByb3NOYW1lc3BhY2VzLmF0dHJOYW1lc3BhY2VzO1xuICAgIH1cbn1cbiJdfQ==