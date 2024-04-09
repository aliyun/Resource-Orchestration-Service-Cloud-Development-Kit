"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.VpcPeerConnection = exports.VpcPeerConnectionProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const vpc_generated_1 = require("./vpc.generated");
Object.defineProperty(exports, "VpcPeerConnectionProperty", { enumerable: true, get: function () { return vpc_generated_1.RosVpcPeerConnection; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::VpcPeerConnection`, which is used to create a peering connection between virtual private clouds (VPCs).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVpcPeerConnection`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcpeerconnection
 */
class VpcPeerConnection extends ros.Resource {
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
        const rosVpcPeerConnection = new vpc_generated_1.RosVpcPeerConnection(this, id, {
            description: props.description,
            deletionForce: props.deletionForce,
            acceptingVpcId: props.acceptingVpcId,
            vpcId: props.vpcId,
            acceptingRegionId: props.acceptingRegionId,
            acceptingAliUid: props.acceptingAliUid,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVpcPeerConnection;
        this.attrInstanceId = rosVpcPeerConnection.attrInstanceId;
    }
}
exports.VpcPeerConnection = VpcPeerConnection;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidnBjcGVlcmNvbm5lY3Rpb24uanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJ2cGNwZWVyY29ubmVjdGlvbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQXVEO0FBRXRCLDBHQUZ4QixvQ0FBb0IsT0FFNkI7QUE0RDFEOzs7O0dBSUc7QUFDSCxNQUFhLGlCQUFrQixTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBVy9DOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLEtBQTZCLEVBQUUsbUNBQTJDLElBQUk7UUFDeEgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLG9CQUFvQixHQUFHLElBQUksb0NBQW9CLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUM3RCxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1lBQ2xDLGNBQWMsRUFBRSxLQUFLLENBQUMsY0FBYztZQUNwQyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsaUJBQWlCLEVBQUUsS0FBSyxDQUFDLGlCQUFpQjtZQUMxQyxlQUFlLEVBQUUsS0FBSyxDQUFDLGVBQWU7WUFDdEMsSUFBSSxFQUFFLEtBQUssQ0FBQyxJQUFJO1NBQ25CLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsb0JBQW9CLENBQUM7UUFDckMsSUFBSSxDQUFDLGNBQWMsR0FBRyxvQkFBb0IsQ0FBQyxjQUFjLENBQUM7SUFDOUQsQ0FBQztDQUNKO0FBbkNELDhDQW1DQyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAqIGFzIHJvcyBmcm9tICdAYWxpY2xvdWQvcm9zLWNkay1jb3JlJztcbmltcG9ydCB7IFJvc1ZwY1BlZXJDb25uZWN0aW9uIH0gZnJvbSAnLi92cGMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zVnBjUGVlckNvbm5lY3Rpb24gYXMgVnBjUGVlckNvbm5lY3Rpb25Qcm9wZXJ0eSB9O1xuXG4vKipcbiAqIFByb3BlcnRpZXMgZm9yIGRlZmluaW5nIGEgYFZwY1BlZXJDb25uZWN0aW9uYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvYWxpeXVuLXZwYy12cGNwZWVyY29ubmVjdGlvblxuICovXG5leHBvcnQgaW50ZXJmYWNlIFZwY1BlZXJDb25uZWN0aW9uUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgYWNjZXB0aW5nVnBjSWQ6IFRoZSBJRCBvZiB0aGUgYWNjZXB0b3IgVlBDLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFjY2VwdGluZ1ZwY0lkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2cGNJZDogVGhlIElEIG9mIHRoZSByZXF1ZXN0ZXIgVlBDLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZwY0lkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBhY2NlcHRpbmdBbGlVaWQ6IFRoZSBJRCBvZiB0aGUgQWxpYmFiYSBDbG91ZCBhY2NvdW50IHRvIHdoaWNoIHRoZSBhY2NlcHRvciBWUEMgYmVsb25ncy5cbiAgICAgKiBUbyBjcmVhdGUgYSBWUEMgcGVlcmluZyBjb25uZWN0aW9uIHdpdGhpbiB5b3VyIEFsaWJhYmEgQ2xvdWQgYWNjb3VudCwgZW50ZXIgdGhlIElEXG4gICAgICogb2YgeW91ciBBbGliYWJhIENsb3VkIGFjY291bnQuXG4gICAgICogVG8gY3JlYXRlIGEgVlBDIHBlZXJpbmcgY29ubmVjdGlvbiBiZXR3ZWVuIHlvdXIgQWxpYmFiYSBDbG91ZCBhY2NvdW50IGFuZCBhbm90aGVyXG4gICAgICogQWxpYmFiYSBDbG91ZCBhY2NvdW50LCBlbnRlciB0aGUgSUQgb2YgdGhlIHBlZXIgQWxpYmFiYSBDbG91ZCBhY2NvdW50LlxuICAgICAqIE5vdGUgSWYgdGhlIGFjY2VwdG9yIFZQQyBiZWxvbmdzIHRvIGEgUmVzb3VyY2UgQWNjZXNzIE1hbmFnZW1lbnQgKFJBTSkgdXNlciwgeW91IG11c3Qgc2V0XG4gICAgICogdGhlIHZhbHVlIG9mIEFjY2VwdGluZ0FsaVVpZCB0byB0aGUgSUQgb2YgdGhlIGNvcnJlc3BvbmRpbmcgQWxpYmFiYSBDbG91ZCBhY2NvdW50LlxuICAgICAqIERlZmF1bHQgY3VycmVudCBhY2NvdW50IElELlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGFjY2VwdGluZ0FsaVVpZD86IG51bWJlciB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGFjY2VwdGluZ1JlZ2lvbklkOiBUaGUgcmVnaW9uIElEIG9mIHRoZSBhY2NlcHRvciBWUEMgb2YgdGhlIFZQQyBwZWVyaW5nIGNvbm5lY3Rpb24gdGhhdCB5b3Ugd2FudCB0byBjcmVhdGUuXG4gICAgICogVG8gY3JlYXRlIGFuIGludHJhLXJlZ2lvbiBWUEMgcGVlcmluZyBjb25uZWN0aW9uLCBlbnRlciBhIHJlZ2lvbiBJRCB0aGF0IGlzIHRoZSBzYW1lXG4gICAgICogYXMgdGhhdCBvZiB0aGUgcmVxdWVzdGVyIFZQQy5cbiAgICAgKiBUbyBjcmVhdGUgYW4gaW50ZXItcmVnaW9uIFZQQyBwZWVyaW5nIGNvbm5lY3Rpb24sIGVudGVyIGEgcmVnaW9uIElEIHRoYXQgaXMgZGlmZmVyZW50XG4gICAgICogZnJvbSB0aGF0IG9mIHRoZSByZXF1ZXN0ZXIgVlBDLlxuICAgICAqIERlZmF1bHQgY3VycmVudCByZWdpb24uXG4gICAgICovXG4gICAgcmVhZG9ubHkgYWNjZXB0aW5nUmVnaW9uSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBkZWxldGlvbkZvcmNlOiBTcGVjaWZpZXMgd2hldGhlciB0byBmb3JjZWZ1bGx5IGRlbGV0ZSB0aGUgVlBDIHBlZXJpbmcgY29ubmVjdGlvbi4gVmFsaWQgdmFsdWVzOmZhbHNlIChkZWZhdWx0KTogbm90cnVlOiB5ZXMgSWYgeW91IGZvcmNlZnVsbHkgZGVsZXRlIHRoZSBWUEMgcGVlcmluZyBjb25uZWN0aW9uLCB0aGUgc3lzdGVtIGRlbGV0ZXMgdGhlIHJvdXRlcyB0aGF0IHBvaW50IHRvIHRoZSBWUEMgcGVlcmluZyBjb25uZWN0aW9uIGZyb20gdGhlIFZQQyByb3V0ZSB0YWJsZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBkZWxldGlvbkZvcmNlPzogYm9vbGVhbiB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGRlc2NyaXB0aW9uOiBUaGUgZGVzY3JpcHRpb24gb2YgdGhlIFZQQyBwZWVyaW5nIGNvbm5lY3Rpb24uXG4gICAgICogVGhlIGRlc2NyaXB0aW9uIG11c3QgYmUgMiB0byAyNTYgY2hhcmFjdGVycyBpbiBsZW5ndGguIEl0IG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlclxuICAgICAqIGJ1dCBjYW5ub3Qgc3RhcnQgd2l0aCBodHRwOlxcL1xcLyBvciBodHRwczpcXC9cXC8uXG4gICAgICovXG4gICAgcmVhZG9ubHkgZGVzY3JpcHRpb24/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuYW1lOiBUaGUgbmFtZSBvZiB0aGUgVlBDIHBlZXJpbmcgY29ubmVjdGlvbi5cbiAgICAgKiBUaGUgbmFtZSBtdXN0IGJlIDIgdG8gMTI4IGNoYXJhY3RlcnMgaW4gbGVuZ3RoIGFuZCBjYW4gY29udGFpbiBkaWdpdHMsIHVuZGVyc2NvcmVzXG4gICAgICogKF8pLCBhbmQgaHlwaGVucyAoLSkuIEl0IG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlci5cbiAgICAgKi9cbiAgICByZWFkb25seSBuYW1lPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xufVxuXG4vKipcbiAqIFRoaXMgY2xhc3MgZW5jYXBzdWxhdGVzIGFuZCBleHRlbmRzIHRoZSBST1MgcmVzb3VyY2UgdHlwZSBgQUxJWVVOOjpWUEM6OlZwY1BlZXJDb25uZWN0aW9uYCwgd2hpY2ggaXMgdXNlZCB0byBjcmVhdGUgYSBwZWVyaW5nIGNvbm5lY3Rpb24gYmV0d2VlbiB2aXJ0dWFsIHByaXZhdGUgY2xvdWRzIChWUENzKS5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc1ZwY1BlZXJDb25uZWN0aW9uYGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tdnBjLXZwY3BlZXJjb25uZWN0aW9uXG4gKi9cbmV4cG9ydCBjbGFzcyBWcGNQZWVyQ29ubmVjdGlvbiBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIHNjb3BlOiByb3MuQ29uc3RydWN0O1xuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBwcm9wczogVnBjUGVlckNvbm5lY3Rpb25Qcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSW5zdGFuY2VJZDogVGhlIElEIG9mIHRoZSBWUEMgcGVlcmluZyBjb25uZWN0aW9uLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySW5zdGFuY2VJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IFZwY1BlZXJDb25uZWN0aW9uUHJvcHMsIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NWcGNQZWVyQ29ubmVjdGlvbiA9IG5ldyBSb3NWcGNQZWVyQ29ubmVjdGlvbih0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwcm9wcy5kZXNjcmlwdGlvbixcbiAgICAgICAgICAgIGRlbGV0aW9uRm9yY2U6IHByb3BzLmRlbGV0aW9uRm9yY2UsXG4gICAgICAgICAgICBhY2NlcHRpbmdWcGNJZDogcHJvcHMuYWNjZXB0aW5nVnBjSWQsXG4gICAgICAgICAgICB2cGNJZDogcHJvcHMudnBjSWQsXG4gICAgICAgICAgICBhY2NlcHRpbmdSZWdpb25JZDogcHJvcHMuYWNjZXB0aW5nUmVnaW9uSWQsXG4gICAgICAgICAgICBhY2NlcHRpbmdBbGlVaWQ6IHByb3BzLmFjY2VwdGluZ0FsaVVpZCxcbiAgICAgICAgICAgIG5hbWU6IHByb3BzLm5hbWUsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zVnBjUGVlckNvbm5lY3Rpb247XG4gICAgICAgIHRoaXMuYXR0ckluc3RhbmNlSWQgPSByb3NWcGNQZWVyQ29ubmVjdGlvbi5hdHRySW5zdGFuY2VJZDtcbiAgICB9XG59XG4iXX0=