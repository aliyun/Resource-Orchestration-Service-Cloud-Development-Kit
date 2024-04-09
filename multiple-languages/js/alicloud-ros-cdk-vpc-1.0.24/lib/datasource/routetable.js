"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RouteTable = exports.RouteTableProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const vpc_generated_1 = require("./vpc.generated");
Object.defineProperty(exports, "RouteTableProperty", { enumerable: true, get: function () { return vpc_generated_1.RosRouteTable; } });
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::RouteTable`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosRouteTable`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-routetable
 */
class RouteTable extends ros.Resource {
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
        const rosRouteTable = new vpc_generated_1.RosRouteTable(this, id, {
            routeTableId: props.routeTableId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosRouteTable;
        this.attrCreateTime = rosRouteTable.attrCreateTime;
        this.attrDescription = rosRouteTable.attrDescription;
        this.attrResourceGroupId = rosRouteTable.attrResourceGroupId;
        this.attrRouteTableId = rosRouteTable.attrRouteTableId;
        this.attrRouteTableName = rosRouteTable.attrRouteTableName;
        this.attrRouteTableType = rosRouteTable.attrRouteTableType;
        this.attrRouterId = rosRouteTable.attrRouterId;
        this.attrRouterType = rosRouteTable.attrRouterType;
        this.attrTags = rosRouteTable.attrTags;
        this.attrVSwitchIds = rosRouteTable.attrVSwitchIds;
        this.attrVpcId = rosRouteTable.attrVpcId;
    }
}
exports.RouteTable = RouteTable;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm91dGV0YWJsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInJvdXRldGFibGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFnRDtBQUV0QixtR0FGakIsNkJBQWEsT0FFc0I7QUFjNUM7Ozs7R0FJRztBQUNILE1BQWEsVUFBVyxTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBNkR4Qzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUFzQixFQUFFLG1DQUEyQyxJQUFJO1FBQ2pILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxhQUFhLEdBQUcsSUFBSSw2QkFBYSxDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDL0MsWUFBWSxFQUFFLEtBQUssQ0FBQyxZQUFZO1NBQ25DLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDO1FBQzlCLElBQUksQ0FBQyxjQUFjLEdBQUcsYUFBYSxDQUFDLGNBQWMsQ0FBQztRQUNuRCxJQUFJLENBQUMsZUFBZSxHQUFHLGFBQWEsQ0FBQyxlQUFlLENBQUM7UUFDckQsSUFBSSxDQUFDLG1CQUFtQixHQUFHLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQztRQUM3RCxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsYUFBYSxDQUFDLGdCQUFnQixDQUFDO1FBQ3ZELElBQUksQ0FBQyxrQkFBa0IsR0FBRyxhQUFhLENBQUMsa0JBQWtCLENBQUM7UUFDM0QsSUFBSSxDQUFDLGtCQUFrQixHQUFHLGFBQWEsQ0FBQyxrQkFBa0IsQ0FBQztRQUMzRCxJQUFJLENBQUMsWUFBWSxHQUFHLGFBQWEsQ0FBQyxZQUFZLENBQUM7UUFDL0MsSUFBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUMsY0FBYyxDQUFDO1FBQ25ELElBQUksQ0FBQyxRQUFRLEdBQUcsYUFBYSxDQUFDLFFBQVEsQ0FBQztRQUN2QyxJQUFJLENBQUMsY0FBYyxHQUFHLGFBQWEsQ0FBQyxjQUFjLENBQUM7UUFDbkQsSUFBSSxDQUFDLFNBQVMsR0FBRyxhQUFhLENBQUMsU0FBUyxDQUFDO0lBQzdDLENBQUM7Q0FDSjtBQXpGRCxnQ0F5RkMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NSb3V0ZVRhYmxlIH0gZnJvbSAnLi92cGMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zUm91dGVUYWJsZSBhcyBSb3V0ZVRhYmxlUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBSb3V0ZVRhYmxlYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS12cGMtcm91dGV0YWJsZVxuICovXG5leHBvcnQgaW50ZXJmYWNlIFJvdXRlVGFibGVQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSByb3V0ZVRhYmxlSWQ6IFRoZSBJRCBvZiB0aGUgcm91dGluZyB0YWJsZS5cbiAgICAgKi9cbiAgICByZWFkb25seSByb3V0ZVRhYmxlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6OlZQQzo6Um91dGVUYWJsZWAuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NSb3V0ZVRhYmxlYGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLXZwYy1yb3V0ZXRhYmxlXG4gKi9cbmV4cG9ydCBjbGFzcyBSb3V0ZVRhYmxlIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBSb3V0ZVRhYmxlUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIENyZWF0ZVRpbWU6IFRoZSBjcmVhdGlvbiB0aW1lIG9mIHRoZSByb3V0aW5nIHRhYmxlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyQ3JlYXRlVGltZTogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIERlc2NyaXB0aW9uOiBEZXNjcmlwdGlvbiBvZiB0aGUgcm91dGluZyB0YWJsZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckRlc2NyaXB0aW9uOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUmVzb3VyY2VHcm91cElkOiBSZXNvdXJjZSBncm91cCBJRC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJlc291cmNlR3JvdXBJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIFJvdXRlVGFibGVJZDogVGhlIElEIG9mIHRoZSByb3V0aW5nIHRhYmxlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUm91dGVUYWJsZUlkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUm91dGVUYWJsZU5hbWU6IFRoZSBuYW1lIG9mIHRoZSByb3V0aW5nIHRhYmxlLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyUm91dGVUYWJsZU5hbWU6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBSb3V0ZVRhYmxlVHlwZTogVGhlIHR5cGUgb2Ygcm91dGluZyB0YWJsZS5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJvdXRlVGFibGVUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUm91dGVySWQ6IFRoZSByb3V0ZXIgSUQgdG8gd2hpY2ggdGhlIHJvdXRpbmcgdGFibGUgYmVsb25ncy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clJvdXRlcklkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgUm91dGVyVHlwZTogVGhlIHJvdXRlciB0eXBlIHRvIHdoaWNoIHRoZSByb3V0aW5nIHRhYmxlIGJlbG9uZ3MuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJSb3V0ZXJUeXBlOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgVGFnczogVGhlIHRhZy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clRhZ3M6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBWU3dpdGNoSWRzOiBUaGUgSUQgb2YgdGhlIHN3aXRjaC5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZTd2l0Y2hJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBWcGNJZDogVGhlIElEIG9mIFZQQy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0clZwY0lkOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogUm91dGVUYWJsZVByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zUm91dGVUYWJsZSA9IG5ldyBSb3NSb3V0ZVRhYmxlKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgcm91dGVUYWJsZUlkOiBwcm9wcy5yb3V0ZVRhYmxlSWQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zUm91dGVUYWJsZTtcbiAgICAgICAgdGhpcy5hdHRyQ3JlYXRlVGltZSA9IHJvc1JvdXRlVGFibGUuYXR0ckNyZWF0ZVRpbWU7XG4gICAgICAgIHRoaXMuYXR0ckRlc2NyaXB0aW9uID0gcm9zUm91dGVUYWJsZS5hdHRyRGVzY3JpcHRpb247XG4gICAgICAgIHRoaXMuYXR0clJlc291cmNlR3JvdXBJZCA9IHJvc1JvdXRlVGFibGUuYXR0clJlc291cmNlR3JvdXBJZDtcbiAgICAgICAgdGhpcy5hdHRyUm91dGVUYWJsZUlkID0gcm9zUm91dGVUYWJsZS5hdHRyUm91dGVUYWJsZUlkO1xuICAgICAgICB0aGlzLmF0dHJSb3V0ZVRhYmxlTmFtZSA9IHJvc1JvdXRlVGFibGUuYXR0clJvdXRlVGFibGVOYW1lO1xuICAgICAgICB0aGlzLmF0dHJSb3V0ZVRhYmxlVHlwZSA9IHJvc1JvdXRlVGFibGUuYXR0clJvdXRlVGFibGVUeXBlO1xuICAgICAgICB0aGlzLmF0dHJSb3V0ZXJJZCA9IHJvc1JvdXRlVGFibGUuYXR0clJvdXRlcklkO1xuICAgICAgICB0aGlzLmF0dHJSb3V0ZXJUeXBlID0gcm9zUm91dGVUYWJsZS5hdHRyUm91dGVyVHlwZTtcbiAgICAgICAgdGhpcy5hdHRyVGFncyA9IHJvc1JvdXRlVGFibGUuYXR0clRhZ3M7XG4gICAgICAgIHRoaXMuYXR0clZTd2l0Y2hJZHMgPSByb3NSb3V0ZVRhYmxlLmF0dHJWU3dpdGNoSWRzO1xuICAgICAgICB0aGlzLmF0dHJWcGNJZCA9IHJvc1JvdXRlVGFibGUuYXR0clZwY0lkO1xuICAgIH1cbn1cbiJdfQ==