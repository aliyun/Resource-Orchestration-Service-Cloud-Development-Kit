"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NatIpCidr = exports.NatIpCidrProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const vpc_generated_1 = require("./vpc.generated");
Object.defineProperty(exports, "NatIpCidrProperty", { enumerable: true, get: function () { return vpc_generated_1.RosNatIpCidr; } });
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::NatIpCidr`, which is used to create a NAT CIDR block.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNatIpCidr`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-natipcidr
 */
class NatIpCidr extends ros.Resource {
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
        const rosNatIpCidr = new vpc_generated_1.RosNatIpCidr(this, id, {
            natIpCidr: props.natIpCidr,
            natIpCidrDescription: props.natIpCidrDescription,
            natIpCidrName: props.natIpCidrName,
            natGatewayId: props.natGatewayId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNatIpCidr;
        this.attrNatIpCidrId = rosNatIpCidr.attrNatIpCidrId;
    }
}
exports.NatIpCidr = NatIpCidr;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmF0aXBjaWRyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibmF0aXBjaWRyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBK0M7QUFFdEIsa0dBRmhCLDRCQUFZLE9BRXFCO0FBb0MxQzs7OztHQUlHO0FBQ0gsTUFBYSxTQUFVLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFXdkM7Ozs7T0FJRztJQUNILFlBQVksS0FBb0IsRUFBRSxFQUFVLEVBQUUsS0FBcUIsRUFBRSxtQ0FBMkMsSUFBSTtRQUNoSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sWUFBWSxHQUFHLElBQUksNEJBQVksQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzdDLFNBQVMsRUFBRSxLQUFLLENBQUMsU0FBUztZQUMxQixvQkFBb0IsRUFBRSxLQUFLLENBQUMsb0JBQW9CO1lBQ2hELGFBQWEsRUFBRSxLQUFLLENBQUMsYUFBYTtZQUNsQyxZQUFZLEVBQUUsS0FBSyxDQUFDLFlBQVk7U0FDbkMsRUFBRSxnQ0FBZ0MsSUFBSSxJQUFJLENBQUMsS0FBSyxDQUFDLGdDQUFnQyxDQUFDLENBQUM7UUFDcEYsSUFBSSxDQUFDLFFBQVEsR0FBRyxZQUFZLENBQUM7UUFDN0IsSUFBSSxDQUFDLGVBQWUsR0FBRyxZQUFZLENBQUMsZUFBZSxDQUFDO0lBQ3hELENBQUM7Q0FDSjtBQWhDRCw4QkFnQ0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NOYXRJcENpZHIgfSBmcm9tICcuL3ZwYy5nZW5lcmF0ZWQnO1xuLy8gR2VuZXJhdGVkIGZyb20gdGhlIEFsaUNsb3VkIFJPUyBSZXNvdXJjZSBTcGVjaWZpY2F0aW9uXG5leHBvcnQgeyBSb3NOYXRJcENpZHIgYXMgTmF0SXBDaWRyUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBOYXRJcENpZHJgLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tdnBjLW5hdGlwY2lkclxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5hdElwQ2lkclByb3BzIHtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG5hdEdhdGV3YXlJZDogVGhlIElEIG9mIHRoZSBWaXJ0dWFsIFByaXZhdGUgQ2xvdWQgKFZQQykgTkFUIGdhdGV3YXkgd2l0aCB3aGljaCB5b3Ugd2FudCB0byBhc3NvY2lhdGUgdGhlIENJRFIgYmxvY2suXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmF0R2F0ZXdheUlkOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuYXRJcENpZHI6IFRoZSBOQVQgQ0lEUiBibG9jayB0aGF0IHlvdSB3YW50IHRvIGFzc29jaWF0ZSB3aXRoIHRoZSBOQVQgZ2F0ZXdheS5cbiAgICAgKiBUaGUgbmV3IENJRFIgYmxvY2sgbXVzdCBtZWV0IHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcbiAgICAgKiBUaGUgTkFUIENJRFIgYmxvY2sgbXVzdCBmYWxsIHdpdGhpbiAxMC4wLjAuMFxcLzgsIDE3Mi4xNi4wLjBcXC8xMiwgMTkyLjE2OC4wLjBcXC8xNiwgb3IgdGhlaXIgc3VibmV0cy5cbiAgICAgKiBUaGUgc3VibmV0IG1hc2sgbXVzdCBiZSAxNiB0byAzMiBiaXRzIGluIGxlbmd0aC5cbiAgICAgKiBUaGUgTkFUIENJRFIgYmxvY2sgY2Fubm90IG92ZXJsYXAgd2l0aCB0aGUgcHJpdmF0ZSBDSURSIGJsb2NrIG9mIHRoZSBWUEMgdG8gd2hpY2ggdGhlIE5BVCBnYXRld2F5IGJlbG9uZ3MuIElmIHlvdSB3YW50IHRvIHVzZSBvdGhlciBJUCBhZGRyZXNzZXMgZnJvbSB0aGUgcHJpdmF0ZSBDSURSIGJsb2NrIG9mIHRoZSBWUEMgdG8gcHJvdmlkZSBOQVQgc2VydmljZXMsIGNyZWF0ZSBhIHZTd2l0Y2ggYW5kIGF0dGFjaCB0aGUgdlN3aXRjaCB0byBhbm90aGVyIFZQQyBOQVQgZ2F0ZXdheS5cbiAgICAgKiBJZiB5b3Ugd2FudCB0byB1c2UgcHVibGljIElQIGFkZHJlc3NlcyB0byBwcm92aWRlIE5BVCBzZXJ2aWNlcywgbWFrZSBzdXJlIHRoYXQgdGhlIHB1YmxpYyBJUCBhZGRyZXNzZXMgZmFsbCB3aXRoaW4gYSBjdXN0b21lciBDSURSIGJsb2NrIG9mIHRoZSBWUEMgdG8gd2hpY2ggdGhlIFZQQyBOQVQgZ2F0ZXdheSBiZWxvbmdzLiBGb3IgbW9yZSBpbmZvcm1hdGlvbiwgc2VlIFdoYXQgaXMgY3VzdG9tZXIgQ0lEUiBibG9jaz8uXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmF0SXBDaWRyOiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBuYXRJcENpZHJEZXNjcmlwdGlvbjogVGhlIGRlc2NyaXB0aW9uIG9mIHRoZSBOQVQgQ0lEUiBibG9jay5cbiAgICAgKiBUaGUgZGVzY3JpcHRpb24gbXVzdCBiZSAyIHRvIDI1NiBjaGFyYWN0ZXJzIGluIGxlbmd0aCBhbmQgc3RhcnQgd2l0aCBhIGxldHRlci4gVGhlIGRlc2NyaXB0aW9uIGNhbm5vdCBzdGFydCB3aXRoIGh0dHA6XFwvXFwvIG9yIGh0dHBzOlxcL1xcLy5cbiAgICAgKi9cbiAgICByZWFkb25seSBuYXRJcENpZHJEZXNjcmlwdGlvbjogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgbmF0SXBDaWRyTmFtZTogVGhlIG5hbWUgb2YgdGhlIENJRFIgYmxvY2suXG4gICAgICogVGhlIG5hbWUgbXVzdCBiZSAyIHRvIDEyOCBjaGFyYWN0ZXJzIGluIGxlbmd0aCwgYW5kIGNhbiBjb250YWluIGxldHRlcnMsIGRpZ2l0cywgcGVyaW9kcyAoLiksIHVuZGVyc2NvcmVzIChfKSwgYW5kIGh5cGhlbnMgKC0pLiBJdCBtdXN0IHN0YXJ0IHdpdGggYSBsZXR0ZXIuIFRoZSBuYW1lIG11c3Qgc3RhcnQgd2l0aCBhIGxldHRlciBhbmQgY2Fubm90IHN0YXJ0IHdpdGggaHR0cDpcXC9cXC8gb3IgaHR0cHM6XFwvXFwvLlxuICAgICAqL1xuICAgIHJlYWRvbmx5IG5hdElwQ2lkck5hbWU6IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYEFMSVlVTjo6VlBDOjpOYXRJcENpZHJgLCB3aGljaCBpcyB1c2VkIHRvIGNyZWF0ZSBhIE5BVCBDSURSIGJsb2NrLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zTmF0SXBDaWRyYGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9hbGl5dW4tdnBjLW5hdGlwY2lkclxuICovXG5leHBvcnQgY2xhc3MgTmF0SXBDaWRyIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBOYXRJcENpZHJQcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgTmF0SXBDaWRySWQ6IFRoZSBJRCBvZiB0aGUgTkFUIENJRFIgYmxvY2suXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJOYXRJcENpZHJJZDogcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUGFyYW0gc2NvcGUgLSBzY29wZSBpbiB3aGljaCB0aGlzIHJlc291cmNlIGlzIGRlZmluZWRcbiAgICAgKiBQYXJhbSBpZCAgICAtIHNjb3BlZCBpZCBvZiB0aGUgcmVzb3VyY2VcbiAgICAgKiBQYXJhbSBwcm9wcyAtIHJlc291cmNlIHByb3BlcnRpZXNcbiAgICAgKi9cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogcm9zLkNvbnN0cnVjdCwgaWQ6IHN0cmluZywgcHJvcHM6IE5hdElwQ2lkclByb3BzLCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDpib29sZWFuID0gdHJ1ZSkge1xuICAgICAgICBzdXBlcihzY29wZSwgaWQpO1xuICAgICAgICB0aGlzLnNjb3BlID0gc2NvcGU7XG4gICAgICAgIHRoaXMuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5wcm9wcyA9IHByb3BzO1xuICAgICAgICB0aGlzLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ID0gZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ7XG5cbiAgICAgICAgY29uc3Qgcm9zTmF0SXBDaWRyID0gbmV3IFJvc05hdElwQ2lkcih0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIG5hdElwQ2lkcjogcHJvcHMubmF0SXBDaWRyLFxuICAgICAgICAgICAgbmF0SXBDaWRyRGVzY3JpcHRpb246IHByb3BzLm5hdElwQ2lkckRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgbmF0SXBDaWRyTmFtZTogcHJvcHMubmF0SXBDaWRyTmFtZSxcbiAgICAgICAgICAgIG5hdEdhdGV3YXlJZDogcHJvcHMubmF0R2F0ZXdheUlkLFxuICAgICAgICB9LCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCAmJiB0aGlzLnN0YWNrLmVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50KTtcbiAgICAgICAgdGhpcy5yZXNvdXJjZSA9IHJvc05hdElwQ2lkcjtcbiAgICAgICAgdGhpcy5hdHRyTmF0SXBDaWRySWQgPSByb3NOYXRJcENpZHIuYXR0ck5hdElwQ2lkcklkO1xuICAgIH1cbn1cbiJdfQ==