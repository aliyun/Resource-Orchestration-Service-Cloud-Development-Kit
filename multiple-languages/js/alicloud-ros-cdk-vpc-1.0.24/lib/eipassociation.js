"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.EIPAssociation = exports.EIPAssociationProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const vpc_generated_1 = require("./vpc.generated");
Object.defineProperty(exports, "EIPAssociationProperty", { enumerable: true, get: function () { return vpc_generated_1.RosEIPAssociation; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::EIPAssociation`, which is used to associate an elastic IP address (EIP) with a cloud service instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEIPAssociation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-eipassociation
 */
class EIPAssociation extends ros.Resource {
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
        const rosEIPAssociation = new vpc_generated_1.RosEIPAssociation(this, id, {
            privateIpAddress: props.privateIpAddress,
            instanceId: props.instanceId,
            mode: props.mode,
            allocationId: props.allocationId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosEIPAssociation;
        this.attrAllocationId = rosEIPAssociation.attrAllocationId;
        this.attrEipAddress = rosEIPAssociation.attrEipAddress;
    }
}
exports.EIPAssociation = EIPAssociation;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZWlwYXNzb2NpYXRpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJlaXBhc3NvY2lhdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQW9EO0FBRXRCLHVHQUZyQixpQ0FBaUIsT0FFMEI7QUFrQ3BEOzs7O0dBSUc7QUFDSCxNQUFhLGNBQWUsU0FBUSxHQUFHLENBQUMsUUFBUTtJQWdCNUM7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBMEIsRUFBRSxtQ0FBMkMsSUFBSTtRQUNySCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0saUJBQWlCLEdBQUcsSUFBSSxpQ0FBaUIsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ3ZELGdCQUFnQixFQUFFLEtBQUssQ0FBQyxnQkFBZ0I7WUFDeEMsVUFBVSxFQUFFLEtBQUssQ0FBQyxVQUFVO1lBQzVCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtZQUNoQixZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7U0FDbkMsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxpQkFBaUIsQ0FBQztRQUNsQyxJQUFJLENBQUMsZ0JBQWdCLEdBQUcsaUJBQWlCLENBQUMsZ0JBQWdCLENBQUM7UUFDM0QsSUFBSSxDQUFDLGNBQWMsR0FBRyxpQkFBaUIsQ0FBQyxjQUFjLENBQUM7SUFDM0QsQ0FBQztDQUNKO0FBdENELHdDQXNDQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc0VJUEFzc29jaWF0aW9uIH0gZnJvbSAnLi92cGMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zRUlQQXNzb2NpYXRpb24gYXMgRUlQQXNzb2NpYXRpb25Qcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYEVJUEFzc29jaWF0aW9uYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXZwYy1laXBhc3NvY2lhdGlvblxuICovXG5leHBvcnQgaW50ZXJmYWNlIEVJUEFzc29jaWF0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYWxsb2NhdGlvbklkOiBFSVAgaW5zdGFuY2UgaWQgdG8gYmluZC5cbiAgICAgKi9cbiAgICByZWFkb25seSBhbGxvY2F0aW9uSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGluc3RhbmNlSWQ6IEVDU1xcL1NMQlxcL05BVFxcL0hhVmlwXFwvRU5JIGluc3RhbmNlIGlkIHRvIGJpZCB0aGUgRUlQLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGluc3RhbmNlSWQ6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG1vZGU6IFRoZSBtb2RlIG9mIGFzc29jaWF0aW9uLiBWYWxpZCB2YWx1ZXM6XG4gICAgICogTkFUKERlZmF1bHQpOiBOQVQgbW9kZS5cbiAgICAgKiBCSU5ERUQ6IEN1dC10aHJvdWdoIG1vZGUuXG4gICAgICogTVVMVElfQklOREVEOiBNdWx0aS1FSVAgdG8gRU5JIG1vZGUuXG4gICAgICogVGhpcyBpcyByZXF1aXJlZCBvbmx5IHdoZW4gdGhlIHZhbHVlIG9mIEluc3RhbmNlVHlwZSBpcyBOZXR3b3JrSW50ZXJmYWNlLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG1vZGU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBwcml2YXRlSXBBZGRyZXNzOiBBbiBJUCBhZGRyZXNzIGluIHRoZSBDSURSIGJsb2NrIG9mIHRoZSBWU3dpdGNoLlxuICAgICAqIElmIHlvdSBsZWF2ZSB0aGUgb3B0aW9uIGVtcHR5LCB0aGUgc3lzdGVtIGFsbG9jYXRlcyBhIHByaXZhdGUgSVAgYWRkcmVzcyBhY2NvcmRpbmcgdG8gdGhlIFZQQyBJRCBhbmQgVlN3aXRjaCBJRC5cbiAgICAgKi9cbiAgICByZWFkb25seSBwcml2YXRlSXBBZGRyZXNzPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpWUEM6OkVJUEFzc29jaWF0aW9uYCwgd2hpY2ggaXMgdXNlZCB0byBhc3NvY2lhdGUgYW4gZWxhc3RpYyBJUCBhZGRyZXNzIChFSVApIHdpdGggYSBjbG91ZCBzZXJ2aWNlIGluc3RhbmNlLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zRUlQQXNzb2NpYXRpb25gZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2FsaXl1bi12cGMtZWlwYXNzb2NpYXRpb25cbiAqL1xuZXhwb3J0IGNsYXNzIEVJUEFzc29jaWF0aW9uIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBFSVBBc3NvY2lhdGlvblByb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBBbGxvY2F0aW9uSWQ6IElEIHRoYXQgQWxpeXVuIGFzc2lnbnMgdG8gcmVwcmVzZW50IHRoZSBhbGxvY2F0aW9uIG9mIHRoZSBhZGRyZXNzIGZvciB1c2Ugd2l0aCBWUEMuIFJldHVybmVkIG9ubHkgZm9yIFZQQyBlbGFzdGljIElQIGFkZHJlc3Nlcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckFsbG9jYXRpb25JZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEVpcEFkZHJlc3M6IElQIGFkZHJlc3Mgb2YgY3JlYXRlZCBFSVAuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJFaXBBZGRyZXNzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogRUlQQXNzb2NpYXRpb25Qcm9wcywgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc0VJUEFzc29jaWF0aW9uID0gbmV3IFJvc0VJUEFzc29jaWF0aW9uKHRoaXMsIGlkLCAge1xuICAgICAgICAgICAgcHJpdmF0ZUlwQWRkcmVzczogcHJvcHMucHJpdmF0ZUlwQWRkcmVzcyxcbiAgICAgICAgICAgIGluc3RhbmNlSWQ6IHByb3BzLmluc3RhbmNlSWQsXG4gICAgICAgICAgICBtb2RlOiBwcm9wcy5tb2RlLFxuICAgICAgICAgICAgYWxsb2NhdGlvbklkOiBwcm9wcy5hbGxvY2F0aW9uSWQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zRUlQQXNzb2NpYXRpb247XG4gICAgICAgIHRoaXMuYXR0ckFsbG9jYXRpb25JZCA9IHJvc0VJUEFzc29jaWF0aW9uLmF0dHJBbGxvY2F0aW9uSWQ7XG4gICAgICAgIHRoaXMuYXR0ckVpcEFkZHJlc3MgPSByb3NFSVBBc3NvY2lhdGlvbi5hdHRyRWlwQWRkcmVzcztcbiAgICB9XG59XG4iXX0=