"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerGateways = exports.CustomerGatewaysProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const vpc_generated_1 = require("./vpc.generated");
Object.defineProperty(exports, "CustomerGatewaysProperty", { enumerable: true, get: function () { return vpc_generated_1.RosCustomerGateways; } });
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::CustomerGateways`, which is used to query customer gateways.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCustomerGateways`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-customergateways
 */
class CustomerGateways extends ros.Resource {
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
        const rosCustomerGateways = new vpc_generated_1.RosCustomerGateways(this, id, {
            customerGatewayId: props.customerGatewayId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCustomerGateways;
        this.attrCustomerGatewayIds = rosCustomerGateways.attrCustomerGatewayIds;
        this.attrCustomerGateways = rosCustomerGateways.attrCustomerGateways;
    }
}
exports.CustomerGateways = CustomerGateways;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY3VzdG9tZXJnYXRld2F5cy5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImN1c3RvbWVyZ2F0ZXdheXMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUEsOENBQThDO0FBQzlDLG1EQUFzRDtBQUV0Qix5R0FGdkIsbUNBQW1CLE9BRTRCO0FBY3hEOzs7O0dBSUc7QUFDSCxNQUFhLGdCQUFpQixTQUFRLEdBQUcsQ0FBQyxRQUFRO0lBZ0I5Qzs7OztPQUlHO0lBQ0gsWUFBWSxLQUFvQixFQUFFLEVBQVUsRUFBRSxRQUErQixFQUFFLEVBQUUsbUNBQTJDLElBQUk7UUFDNUgsS0FBSyxDQUFDLEtBQUssRUFBRSxFQUFFLENBQUMsQ0FBQztRQUNqQixJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztRQUNuQixJQUFJLENBQUMsRUFBRSxHQUFHLEVBQUUsQ0FBQztRQUNiLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxnQ0FBZ0MsR0FBRyxnQ0FBZ0MsQ0FBQztRQUV6RSxNQUFNLG1CQUFtQixHQUFHLElBQUksbUNBQW1CLENBQUMsSUFBSSxFQUFFLEVBQUUsRUFBRztZQUMzRCxpQkFBaUIsRUFBRSxLQUFLLENBQUMsaUJBQWlCO1NBQzdDLEVBQUUsZ0NBQWdDLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDO1FBQ3BGLElBQUksQ0FBQyxRQUFRLEdBQUcsbUJBQW1CLENBQUM7UUFDcEMsSUFBSSxDQUFDLHNCQUFzQixHQUFHLG1CQUFtQixDQUFDLHNCQUFzQixDQUFDO1FBQ3pFLElBQUksQ0FBQyxvQkFBb0IsR0FBRyxtQkFBbUIsQ0FBQyxvQkFBb0IsQ0FBQztJQUN6RSxDQUFDO0NBQ0o7QUFuQ0QsNENBbUNDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgcm9zIGZyb20gJ0BhbGljbG91ZC9yb3MtY2RrLWNvcmUnO1xuaW1wb3J0IHsgUm9zQ3VzdG9tZXJHYXRld2F5cyB9IGZyb20gJy4vdnBjLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0N1c3RvbWVyR2F0ZXdheXMgYXMgQ3VzdG9tZXJHYXRld2F5c1Byb3BlcnR5IH07XG5cbi8qKlxuICogUHJvcGVydGllcyBmb3IgZGVmaW5pbmcgYSBgQ3VzdG9tZXJHYXRld2F5c2AuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtdnBjLWN1c3RvbWVyZ2F0ZXdheXNcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBDdXN0b21lckdhdGV3YXlzUHJvcHMge1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgY3VzdG9tZXJHYXRld2F5SWQ6IFRoZSBJRCBvZiB0aGUgY3VzdG9tZXIgZ2F0ZXdheS5cbiAgICAgKi9cbiAgICByZWFkb25seSBjdXN0b21lckdhdGV3YXlJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6OlZQQzo6Q3VzdG9tZXJHYXRld2F5c2AsIHdoaWNoIGlzIHVzZWQgdG8gcXVlcnkgY3VzdG9tZXIgZ2F0ZXdheXMuXG4gKiBATm90ZSBUaGlzIGNsYXNzIG1heSBoYXZlIHNvbWUgbmV3IGZ1bmN0aW9ucyB0byBmYWNpbGl0YXRlIGRldmVsb3BtZW50LCBzbyBpdCBpcyByZWNvbW1lbmRlZCB0byB1c2UgdGhpcyBjbGFzcyBpbnN0ZWFkIG9mIGBSb3NDdXN0b21lckdhdGV3YXlzYGZvciBhIG1vcmUgY29udmVuaWVudCBkZXZlbG9wbWVudCBleHBlcmllbmNlLlxuICogU2VlIGh0dHBzOi8vd3d3LmFsaWJhYmFjbG91ZC5jb20vaGVscC9yb3MvZGV2ZWxvcGVyLXJlZmVyZW5jZS9kYXRhc291cmNlLXZwYy1jdXN0b21lcmdhdGV3YXlzXG4gKi9cbmV4cG9ydCBjbGFzcyBDdXN0b21lckdhdGV3YXlzIGV4dGVuZHMgcm9zLlJlc291cmNlIHtcbiAgICBwcm90ZWN0ZWQgc2NvcGU6IHJvcy5Db25zdHJ1Y3Q7XG4gICAgcHJvdGVjdGVkIGlkOiBzdHJpbmc7XG4gICAgcHJvdGVjdGVkIHByb3BzOiBDdXN0b21lckdhdGV3YXlzUHJvcHM7XG4gICAgcHJvdGVjdGVkIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OiBib29sZWFuO1xuXG4gICAgLyoqXG4gICAgICogQXR0cmlidXRlIEN1c3RvbWVyR2F0ZXdheUlkczogVGhlIGxpc3Qgb2YgY3VzdG9tZXIgZ2F0ZXdheSBJRHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJDdXN0b21lckdhdGV3YXlJZHM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIEF0dHJpYnV0ZSBDdXN0b21lckdhdGV3YXlzOiBUaGUgbGlzdCBvZiBjdXN0b21lciBnYXRld2F5cy5cbiAgICAgKi9cbiAgICBwdWJsaWMgcmVhZG9ubHkgYXR0ckN1c3RvbWVyR2F0ZXdheXM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBDdXN0b21lckdhdGV3YXlzUHJvcHMgPSB7fSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6Ym9vbGVhbiA9IHRydWUpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcbiAgICAgICAgdGhpcy5zY29wZSA9IHNjb3BlO1xuICAgICAgICB0aGlzLmlkID0gaWQ7XG4gICAgICAgIHRoaXMucHJvcHMgPSBwcm9wcztcbiAgICAgICAgdGhpcy5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCA9IGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50O1xuXG4gICAgICAgIGNvbnN0IHJvc0N1c3RvbWVyR2F0ZXdheXMgPSBuZXcgUm9zQ3VzdG9tZXJHYXRld2F5cyh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGN1c3RvbWVyR2F0ZXdheUlkOiBwcm9wcy5jdXN0b21lckdhdGV3YXlJZCxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NDdXN0b21lckdhdGV3YXlzO1xuICAgICAgICB0aGlzLmF0dHJDdXN0b21lckdhdGV3YXlJZHMgPSByb3NDdXN0b21lckdhdGV3YXlzLmF0dHJDdXN0b21lckdhdGV3YXlJZHM7XG4gICAgICAgIHRoaXMuYXR0ckN1c3RvbWVyR2F0ZXdheXMgPSByb3NDdXN0b21lckdhdGV3YXlzLmF0dHJDdXN0b21lckdhdGV3YXlzO1xuICAgIH1cbn1cbiJdfQ==