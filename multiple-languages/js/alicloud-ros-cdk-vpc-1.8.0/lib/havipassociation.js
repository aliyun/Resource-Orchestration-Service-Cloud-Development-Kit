"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.HaVipAssociation = exports.HaVipAssociationProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const vpc_generated_1 = require("./vpc.generated");
Object.defineProperty(exports, "HaVipAssociationProperty", { enumerable: true, get: function () { return vpc_generated_1.RosHaVipAssociation; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::HaVipAssociation`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosHaVipAssociation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-havipassociation
 */
class HaVipAssociation extends ros.Resource {
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
        const rosHaVipAssociation = new vpc_generated_1.RosHaVipAssociation(this, id, {
            instanceId: props.instanceId,
            haVipId: props.haVipId,
            instanceType: props.instanceType,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosHaVipAssociation;
    }
}
exports.HaVipAssociation = HaVipAssociation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGF2aXBhc3NvY2lhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImhhdmlwYXNzb2NpYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFzRDtBQUV0Qix5R0FGdkIsbUNBQW1CLE9BRTRCO0FBZ0N4RDs7OztHQUlHO0FBQ0gsTUFBYSxnQkFBaUIsU0FBUSxHQUFHLENBQUMsUUFBUTtJQU05Qzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxLQUE0QixFQUFFLG1DQUEyQyxJQUFJO1FBQ3ZILEtBQUssQ0FBQyxLQUFLLEVBQUUsRUFBRSxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLEVBQUUsR0FBRyxFQUFFLENBQUM7UUFDYixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsZ0NBQWdDLEdBQUcsZ0NBQWdDLENBQUM7UUFFekUsTUFBTSxtQkFBbUIsR0FBRyxJQUFJLG1DQUFtQixDQUFDLElBQUksRUFBRSxFQUFFLEVBQUc7WUFDM0QsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLE9BQU8sRUFBRSxLQUFLLENBQUMsT0FBTztZQUN0QixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7U0FDbkMsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxtQkFBbUIsQ0FBQztJQUN4QyxDQUFDO0NBQ0o7QUF6QkQsNENBeUJDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zSGFWaXBBc3NvY2lhdGlvbiB9IGZyb20gJy4vdnBjLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0hhVmlwQXNzb2NpYXRpb24gYXMgSGFWaXBBc3NvY2lhdGlvblByb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgSGFWaXBBc3NvY2lhdGlvbmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi12cGMtaGF2aXBhc3NvY2lhdGlvblxuICovXG5leHBvcnQgaW50ZXJmYWNlIEhhVmlwQXNzb2NpYXRpb25Qcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBoYVZpcElkOiBUaGUgSUQgb2YgdGhlIEhBVklQLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGhhVmlwSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGluc3RhbmNlSWQ6IFRoZSBJRCBvZiB0aGUgRUNTIGluc3RhbmNlIHRvIGJlIGFzc29jaWF0ZWQgd2l0aCB0aGUgSEFWSVAuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5zdGFuY2VUeXBlOiBUaGUgdHlwZSBvZiB0aGUgaW5zdGFuY2UgdG8gYmUgYXNzb2NpYXRlZCB3aXRoIHRoZSBIQVZJUC4gVmFsaWQgdmFsdWVzOlxuICAgICAqIEVjc0luc3RhbmNlOiBhbiBFQ1MgaW5zdGFuY2VcbiAgICAgKiBOZXR3b3JrSW50ZXJmYWNlOiBhbiBFTkkuIElmIHlvdSB3YW50IHRvIGFzc29jaWF0ZSB0aGUgSEFWSVAgd2l0aCBhbiBFTkksIHRoaXMgcGFyYW1ldGVyIGlzIHJlcXVpcmVkLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlVHlwZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBSZXByZXNlbnRzIGEgYEhhVmlwQXNzb2NpYXRpb25gLlxuICovXG5leHBvcnQgaW50ZXJmYWNlIElIYVZpcEFzc29jaWF0aW9uIGV4dGVuZHMgcm9zLklSZXNvdXJjZSB7XG4gICAgcmVhZG9ubHkgcHJvcHM6IEhhVmlwQXNzb2NpYXRpb25Qcm9wcztcbn1cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBBTElZVU46OlZQQzo6SGFWaXBBc3NvY2lhdGlvbmAuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NIYVZpcEFzc29jaWF0aW9uYGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tdnBjLWhhdmlwYXNzb2NpYXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEhhVmlwQXNzb2NpYXRpb24gZXh0ZW5kcyByb3MuUmVzb3VyY2UgaW1wbGVtZW50cyBJSGFWaXBBc3NvY2lhdGlvbiB7XG4gICAgcHJvdGVjdGVkIHNjb3BlOiByb3MuQ29uc3RydWN0O1xuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xuICAgIHB1YmxpYyByZWFkb25seSBwcm9wczogSGFWaXBBc3NvY2lhdGlvblByb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBIYVZpcEFzc29jaWF0aW9uUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NIYVZpcEFzc29jaWF0aW9uID0gbmV3IFJvc0hhVmlwQXNzb2NpYXRpb24odGhpcywgaWQsICB7XG4gICAgICAgICAgICBpbnN0YW5jZUlkOiBwcm9wcy5pbnN0YW5jZUlkLFxuICAgICAgICAgICAgaGFWaXBJZDogcHJvcHMuaGFWaXBJZCxcbiAgICAgICAgICAgIGluc3RhbmNlVHlwZTogcHJvcHMuaW5zdGFuY2VUeXBlLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc0hhVmlwQXNzb2NpYXRpb247XG4gICAgfVxufVxuIl19