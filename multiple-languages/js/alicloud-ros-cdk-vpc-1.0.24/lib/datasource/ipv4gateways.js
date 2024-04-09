"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Ipv4Gateways = exports.Ipv4GatewaysProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const vpc_generated_1 = require("./vpc.generated");
Object.defineProperty(exports, "Ipv4GatewaysProperty", { enumerable: true, get: function () { return vpc_generated_1.RosIpv4Gateways; } });
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::Ipv4Gateways`, which is used to query the details of IPv4 gateways.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosIpv4Gateways`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-ipv4gateways
 */
class Ipv4Gateways extends ros.Resource {
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
        const rosIpv4Gateways = new vpc_generated_1.RosIpv4Gateways(this, id, {
            ipv4GatewayName: props.ipv4GatewayName,
            vpcId: props.vpcId,
            ipv4GatewayId: props.ipv4GatewayId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosIpv4Gateways;
        this.attrIpv4GatewayIds = rosIpv4Gateways.attrIpv4GatewayIds;
        this.attrIpv4Gateways = rosIpv4Gateways.attrIpv4Gateways;
    }
}
exports.Ipv4Gateways = Ipv4Gateways;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXB2NGdhdGV3YXlzLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiaXB2NGdhdGV3YXlzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7OztBQUFBLDhDQUE4QztBQUM5QyxtREFBa0Q7QUFFdEIscUdBRm5CLCtCQUFlLE9BRXdCO0FBd0JoRDs7OztHQUlHO0FBQ0gsTUFBYSxZQUFhLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFnQjFDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLFFBQTJCLEVBQUUsRUFBRSxtQ0FBMkMsSUFBSTtRQUN4SCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sZUFBZSxHQUFHLElBQUksK0JBQWUsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQ25ELGVBQWUsRUFBRSxLQUFLLENBQUMsZUFBZTtZQUN0QyxLQUFLLEVBQUUsS0FBSyxDQUFDLEtBQUs7WUFDbEIsYUFBYSxFQUFFLEtBQUssQ0FBQyxhQUFhO1NBQ3JDLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsZUFBZSxDQUFDO1FBQ2hDLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxlQUFlLENBQUMsa0JBQWtCLENBQUM7UUFDN0QsSUFBSSxDQUFDLGdCQUFnQixHQUFHLGVBQWUsQ0FBQyxnQkFBZ0IsQ0FBQztJQUM3RCxDQUFDO0NBQ0o7QUFyQ0Qsb0NBcUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zSXB2NEdhdGV3YXlzIH0gZnJvbSAnLi92cGMuZ2VuZXJhdGVkJztcbi8vIEdlbmVyYXRlZCBmcm9tIHRoZSBBbGlDbG91ZCBST1MgUmVzb3VyY2UgU3BlY2lmaWNhdGlvblxuZXhwb3J0IHsgUm9zSXB2NEdhdGV3YXlzIGFzIElwdjRHYXRld2F5c1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgSXB2NEdhdGV3YXlzYC5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS12cGMtaXB2NGdhdGV3YXlzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSXB2NEdhdGV3YXlzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaXB2NEdhdGV3YXlJZDogVGhlIHJlc291cmNlIGF0dHJpYnV0ZSBmaWVsZCB0aGF0IHJlcHJlc2VudHMgdGhlIHJlc291cmNlIGxldmVsIDEgSUQuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaXB2NEdhdGV3YXlJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGlwdjRHYXRld2F5TmFtZTogUmVzb3VyY2UgbmFtZS5cbiAgICAgKi9cbiAgICByZWFkb25seSBpcHY0R2F0ZXdheU5hbWU/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSB2cGNJZDogVGhlIElEIG9mIHRoZSBWUEMgYXNzb2NpYXRlZCB3aXRoIHRoZSBJUHY0IEdhdGV3YXkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgdnBjSWQ/OiBzdHJpbmcgfCByb3MuSVJlc29sdmFibGU7XG59XG5cbi8qKlxuICogVGhpcyBjbGFzcyBlbmNhcHN1bGF0ZXMgYW5kIGV4dGVuZHMgdGhlIFJPUyByZXNvdXJjZSB0eXBlIGBEQVRBU09VUkNFOjpWUEM6OklwdjRHYXRld2F5c2AsIHdoaWNoIGlzIHVzZWQgdG8gcXVlcnkgdGhlIGRldGFpbHMgb2YgSVB2NCBnYXRld2F5cy5cbiAqIEBOb3RlIFRoaXMgY2xhc3MgbWF5IGhhdmUgc29tZSBuZXcgZnVuY3Rpb25zIHRvIGZhY2lsaXRhdGUgZGV2ZWxvcG1lbnQsIHNvIGl0IGlzIHJlY29tbWVuZGVkIHRvIHVzZSB0aGlzIGNsYXNzIGluc3RlYWQgb2YgYFJvc0lwdjRHYXRld2F5c2Bmb3IgYSBtb3JlIGNvbnZlbmllbnQgZGV2ZWxvcG1lbnQgZXhwZXJpZW5jZS5cbiAqIFNlZSBodHRwczovL3d3dy5hbGliYWJhY2xvdWQuY29tL2hlbHAvcm9zL2RldmVsb3Blci1yZWZlcmVuY2UvZGF0YXNvdXJjZS12cGMtaXB2NGdhdGV3YXlzXG4gKi9cbmV4cG9ydCBjbGFzcyBJcHY0R2F0ZXdheXMgZXh0ZW5kcyByb3MuUmVzb3VyY2Uge1xuICAgIHByb3RlY3RlZCBzY29wZTogcm9zLkNvbnN0cnVjdDtcbiAgICBwcm90ZWN0ZWQgaWQ6IHN0cmluZztcbiAgICBwcm90ZWN0ZWQgcHJvcHM6IElwdjRHYXRld2F5c1Byb3BzO1xuICAgIHByb3RlY3RlZCBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDogYm9vbGVhbjtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBJcHY0R2F0ZXdheUlkczogVGhlIGxpc3Qgb2YgaXB2NCBnYXRld2F5IElEcy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0cklwdjRHYXRld2F5SWRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgSXB2NEdhdGV3YXlzOiBUaGUgbGlzdCBvZiBpcHY0IGdhdGV3YXlzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRySXB2NEdhdGV3YXlzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBQYXJhbSBzY29wZSAtIHNjb3BlIGluIHdoaWNoIHRoaXMgcmVzb3VyY2UgaXMgZGVmaW5lZFxuICAgICAqIFBhcmFtIGlkICAgIC0gc2NvcGVkIGlkIG9mIHRoZSByZXNvdXJjZVxuICAgICAqIFBhcmFtIHByb3BzIC0gcmVzb3VyY2UgcHJvcGVydGllc1xuICAgICAqL1xuICAgIGNvbnN0cnVjdG9yKHNjb3BlOiByb3MuQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogSXB2NEdhdGV3YXlzUHJvcHMgPSB7fSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc0lwdjRHYXRld2F5cyA9IG5ldyBSb3NJcHY0R2F0ZXdheXModGhpcywgaWQsICB7XG4gICAgICAgICAgICBpcHY0R2F0ZXdheU5hbWU6IHByb3BzLmlwdjRHYXRld2F5TmFtZSxcbiAgICAgICAgICAgIHZwY0lkOiBwcm9wcy52cGNJZCxcbiAgICAgICAgICAgIGlwdjRHYXRld2F5SWQ6IHByb3BzLmlwdjRHYXRld2F5SWQsXG4gICAgICAgIH0sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50ICYmIHRoaXMuc3RhY2suZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQpO1xuICAgICAgICB0aGlzLnJlc291cmNlID0gcm9zSXB2NEdhdGV3YXlzO1xuICAgICAgICB0aGlzLmF0dHJJcHY0R2F0ZXdheUlkcyA9IHJvc0lwdjRHYXRld2F5cy5hdHRySXB2NEdhdGV3YXlJZHM7XG4gICAgICAgIHRoaXMuYXR0cklwdjRHYXRld2F5cyA9IHJvc0lwdjRHYXRld2F5cy5hdHRySXB2NEdhdGV3YXlzO1xuICAgIH1cbn1cbiJdfQ==