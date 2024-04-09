"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NetworkAclAssociation = exports.NetworkAclAssociationProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const ens_generated_1 = require("./ens.generated");
Object.defineProperty(exports, "NetworkAclAssociationProperty", { enumerable: true, get: function () { return ens_generated_1.RosNetworkAclAssociation; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ENS::NetworkAclAssociation`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNetworkAclAssociation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-networkaclassociation
 */
class NetworkAclAssociation extends ros.Resource {
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
        const rosNetworkAclAssociation = new ens_generated_1.RosNetworkAclAssociation(this, id, {
            networkAclId: props.networkAclId,
            networkIds: props.networkIds,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNetworkAclAssociation;
        this.attrNetworkAclId = rosNetworkAclAssociation.attrNetworkAclId;
    }
}
exports.NetworkAclAssociation = NetworkAclAssociation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmV0d29ya2FjbGFzc29jaWF0aW9uLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmV0d29ya2FjbGFzc29jaWF0aW9uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBMkQ7QUFFdEIsOEdBRjVCLHdDQUF3QixPQUVpQztBQW1CbEU7Ozs7R0FJRztBQUNILE1BQWEscUJBQXNCLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFXbkQ7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBaUMsRUFBRSxtQ0FBMkMsSUFBSTtRQUM1SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sd0JBQXdCLEdBQUcsSUFBSSx3Q0FBd0IsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3JFLFlBQVksRUFBRSxLQUFLLENBQUMsWUFBWTtZQUNoQyxVQUFVLEVBQUUsS0FBSyxDQUFDLFVBQVU7U0FDL0IsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyx3QkFBd0IsQ0FBQztRQUN6QyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsd0JBQXdCLENBQUMsZ0JBQWdCLENBQUM7SUFDdEUsQ0FBQztDQUNKO0FBOUJELHNEQThCQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc05ldHdvcmtBY2xBc3NvY2lhdGlvbiB9IGZyb20gJy4vZW5zLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc05ldHdvcmtBY2xBc3NvY2lhdGlvbiBhcyBOZXR3b3JrQWNsQXNzb2NpYXRpb25Qcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYE5ldHdvcmtBY2xBc3NvY2lhdGlvbmAuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1lbnMtbmV0d29ya2FjbGFzc29jaWF0aW9uXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV0d29ya0FjbEFzc29jaWF0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmV0d29ya0FjbElkOiBUaGUgSUQgb2YgdGhlIG5ldHdvcmsgQUNMLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5ldHdvcmtBY2xJZDogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmV0d29ya0lkczogVGhlIG5ldHdvcmsgaWQgd2hpY2ggeW91IHdhbnQgdG8gYXNzb2NpYXRlIHRoZSBuZXR3b3JrIEFDTC5cbiAgICAgKi9cbiAgICByZWFkb25seSBuZXR3b3JrSWRzOiBBcnJheTxzdHJpbmcgfCByb3MuSVJlc29sdmFibGU+IHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpFTlM6Ok5ldHdvcmtBY2xBc3NvY2lhdGlvbmAuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NOZXR3b3JrQWNsQXNzb2NpYXRpb25gZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi1lbnMtbmV0d29ya2FjbGFzc29jaWF0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBOZXR3b3JrQWNsQXNzb2NpYXRpb24gZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IE5ldHdvcmtBY2xBc3NvY2lhdGlvblByb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBOZXR3b3JrQWNsSWQ6IFRoZSBuZXR3b3JrIGFjbCBpZCB0byBhc3NvY2lhdGUuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJOZXR3b3JrQWNsSWQ6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBOZXR3b3JrQWNsQXNzb2NpYXRpb25Qcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc05ldHdvcmtBY2xBc3NvY2lhdGlvbiA9IG5ldyBSb3NOZXR3b3JrQWNsQXNzb2NpYXRpb24odGhpcywgaWQsICB7XG4gICAgICAgICAgICBuZXR3b3JrQWNsSWQ6IHByb3BzLm5ldHdvcmtBY2xJZCxcbiAgICAgICAgICAgIG5ldHdvcmtJZHM6IHByb3BzLm5ldHdvcmtJZHMsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zTmV0d29ya0FjbEFzc29jaWF0aW9uO1xuICAgICAgICB0aGlzLmF0dHJOZXR3b3JrQWNsSWQgPSByb3NOZXR3b3JrQWNsQXNzb2NpYXRpb24uYXR0ck5ldHdvcmtBY2xJZDtcbiAgICB9XG59XG4iXX0=