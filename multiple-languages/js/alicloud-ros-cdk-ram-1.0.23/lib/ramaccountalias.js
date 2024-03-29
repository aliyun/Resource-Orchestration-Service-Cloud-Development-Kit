"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RamAccountAlias = exports.RamAccountAliasProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ram_generated_1 = require("./ram.generated");
Object.defineProperty(exports, "RamAccountAliasProperty", { enumerable: true, get: function () { return ram_generated_1.RosRamAccountAlias; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::RAM::RamAccountAlias`, which is used to create an alias for an Alibaba Cloud account.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRamAccountAlias`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-ramaccountalias
 */
class RamAccountAlias extends ros.Resource {
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope, id, props, enableResourcePropertyConstraint = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        const rosRamAccountAlias = new ram_generated_1.RosRamAccountAlias(this, id, {
            accountAlias: props.accountAlias,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRamAccountAlias;
        this.attrAccountAlias = rosRamAccountAlias.attrAccountAlias;
    }
}
exports.RamAccountAlias = RamAccountAlias;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmFtYWNjb3VudGFsaWFzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsicmFtYWNjb3VudGFsaWFzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBcUQ7QUFFdEIsd0dBRnRCLGtDQUFrQixPQUUyQjtBQWtCdEQ7Ozs7R0FJRztBQUNILE1BQWEsZUFBZ0IsU0FBUSxHQUFHLENBQUMsUUFBUTtJQVc3Qzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUEyQixFQUFFLG1DQUEyQyxJQUFJO1FBQ3RILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxrQkFBa0IsR0FBRyxJQUFJLGtDQUFrQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDekQsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1NBQ25DLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsa0JBQWtCLENBQUM7UUFDbkMsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGtCQUFrQixDQUFDLGdCQUFnQixDQUFDO0lBQ2hFLENBQUM7Q0FDSjtBQTdCRCwwQ0E2QkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NSYW1BY2NvdW50QWxpYXMgfSBmcm9tICcuL3JhbS5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NSYW1BY2NvdW50QWxpYXMgYXMgUmFtQWNjb3VudEFsaWFzUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSYW1BY2NvdW50QWxpYXNgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcmFtLXJhbWFjY291bnRhbGlhc1xuICovXG5leHBvcnQgaW50ZXJmYWNlIFJhbUFjY291bnRBbGlhc1Byb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGFjY291bnRBbGlhczogVGhlIGFsaWFzIG9mIHRoZSBBbGliYWJhIENsb3VkIGFjY291bnQuXG4gICAgICogVGhlIGFsaWFzIG11c3QgYmUgMSB0byA1MCBjaGFyYWN0ZXJzIGluIGxlbmd0aCwgYW5kIGNhbiBjb250YWluIGxvd2VyY2FzZSBsZXR0ZXJzLFxuICAgICAqIGRpZ2l0cywgaHlwaGVucyAoLSksIHBlcmlvZHMgKC4pIGFuZCB1bmRlcnNjb3JlcyAoXykuXG4gICAgICogTm90ZSBJdCBjYW5ub3Qgc3RhcnQgb3IgZW5kIHdpdGggYSBoeXBoZW4gKC0pLlRoZSBkZWZhdWx0IGRvbWFpbiBuYW1lIGNhbm5vdCBzdGFydCBvciBlbmQgd2l0aCBhIFxuICAgICAqIGh5cGhlbiAoLSkgYW5kIGNhbm5vdCBoYXZlIHR3byBjb25zZWN1dGl2ZSBoeXBoZW5zICgtKS5cbiAgICAgKi9cbiAgICByZWFkb25seSBhY2NvdW50QWxpYXM6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6UkFNOjpSYW1BY2NvdW50QWxpYXNgLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhbiBhbGlhcyBmb3IgYW4gQWxpYmFiYSBDbG91ZCBhY2NvdW50LlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zUmFtQWNjb3VudEFsaWFzYGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tcmFtLXJhbWFjY291bnRhbGlhc1xuICovXG5leHBvcnQgY2xhc3MgUmFtQWNjb3VudEFsaWFzIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBSYW1BY2NvdW50QWxpYXNQcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgQWNjb3VudEFsaWFzOiBUaGUgYWxpYXMgb2YgdGhlIEFsaWJhYmEgQ2xvdWQgYWNjb3VudC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFjY291bnRBbGlhczogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFJhbUFjY291bnRBbGlhc1Byb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zUmFtQWNjb3VudEFsaWFzID0gbmV3IFJvc1JhbUFjY291bnRBbGlhcyh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGFjY291bnRBbGlhczogcHJvcHMuYWNjb3VudEFsaWFzLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc1JhbUFjY291bnRBbGlhcztcbiAgICAgICAgdGhpcy5hdHRyQWNjb3VudEFsaWFzID0gcm9zUmFtQWNjb3VudEFsaWFzLmF0dHJBY2NvdW50QWxpYXM7XG4gICAgfVxufVxuIl19