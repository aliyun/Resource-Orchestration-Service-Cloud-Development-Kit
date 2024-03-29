"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Gateways = exports.GatewaysProperty = void 0;
const ros = require("@alicloud/ros-cdk-core");
const mse_generated_1 = require("./mse.generated");
Object.defineProperty(exports, "GatewaysProperty", { enumerable: true, get: function () { return mse_generated_1.RosGateways; } });
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::MSE::Gateways`, which is used to query gateways.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGateways`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mse-gateways
 */
class Gateways extends ros.Resource {
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
        const rosGateways = new mse_generated_1.RosGateways(this, id, {
            instanceId: props.instanceId,
            vpc: props.vpc,
            gatewayType: props.gatewayType,
            gatewayId: props.gatewayId,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGateways;
        this.attrGatewayIds = rosGateways.attrGatewayIds;
        this.attrGateways = rosGateways.attrGateways;
    }
}
exports.Gateways = Gateways;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2F0ZXdheXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJnYXRld2F5cy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7QUFBQSw4Q0FBOEM7QUFDOUMsbURBQThDO0FBRXRCLGlHQUZmLDJCQUFXLE9BRW9CO0FBa0N4Qzs7OztHQUlHO0FBQ0gsTUFBYSxRQUFTLFNBQVEsR0FBRyxDQUFDLFFBQVE7SUFnQnRDOzs7O09BSUc7SUFDSCxZQUFZLEtBQW9CLEVBQUUsRUFBVSxFQUFFLFFBQXVCLEVBQUUsRUFBRSxtQ0FBMkMsSUFBSTtRQUNwSCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBQ2pCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDO1FBQ25CLElBQUksQ0FBQyxFQUFFLEdBQUcsRUFBRSxDQUFDO1FBQ2IsSUFBSSxDQUFDLEtBQUssR0FBRyxLQUFLLENBQUM7UUFDbkIsSUFBSSxDQUFDLGdDQUFnQyxHQUFHLGdDQUFnQyxDQUFDO1FBRXpFLE1BQU0sV0FBVyxHQUFHLElBQUksMkJBQVcsQ0FBQyxJQUFJLEVBQUUsRUFBRSxFQUFHO1lBQzNDLFVBQVUsRUFBRSxLQUFLLENBQUMsVUFBVTtZQUM1QixHQUFHLEVBQUUsS0FBSyxDQUFDLEdBQUc7WUFDZCxXQUFXLEVBQUUsS0FBSyxDQUFDLFdBQVc7WUFDOUIsU0FBUyxFQUFFLEtBQUssQ0FBQyxTQUFTO1lBQzFCLElBQUksRUFBRSxLQUFLLENBQUMsSUFBSTtTQUNuQixFQUFFLGdDQUFnQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsZ0NBQWdDLENBQUMsQ0FBQztRQUNwRixJQUFJLENBQUMsUUFBUSxHQUFHLFdBQVcsQ0FBQztRQUM1QixJQUFJLENBQUMsY0FBYyxHQUFHLFdBQVcsQ0FBQyxjQUFjLENBQUM7UUFDakQsSUFBSSxDQUFDLFlBQVksR0FBRyxXQUFXLENBQUMsWUFBWSxDQUFDO0lBQ2pELENBQUM7Q0FDSjtBQXZDRCw0QkF1Q0MiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgKiBhcyByb3MgZnJvbSAnQGFsaWNsb3VkL3Jvcy1jZGstY29yZSc7XG5pbXBvcnQgeyBSb3NHYXRld2F5cyB9IGZyb20gJy4vbXNlLmdlbmVyYXRlZCc7XG4vLyBHZW5lcmF0ZWQgZnJvbSB0aGUgQWxpQ2xvdWQgUk9TIFJlc291cmNlIFNwZWNpZmljYXRpb25cbmV4cG9ydCB7IFJvc0dhdGV3YXlzIGFzIEdhdGV3YXlzUHJvcGVydHkgfTtcblxuLyoqXG4gKiBQcm9wZXJ0aWVzIGZvciBkZWZpbmluZyBhIGBHYXRld2F5c2AuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtbXNlLWdhdGV3YXlzXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgR2F0ZXdheXNQcm9wcyB7XG5cbiAgICAvKipcbiAgICAgKiBQcm9wZXJ0eSBnYXRld2F5SWQ6IFRoZSBJRCBvZiBnYXRld2F5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdhdGV3YXlJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IGdhdGV3YXlUeXBlOiBUaGUgdHlwZSBvZiBnYXRld2F5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IGdhdGV3YXlUeXBlPzogc3RyaW5nIHwgcm9zLklSZXNvbHZhYmxlO1xuXG4gICAgLyoqXG4gICAgICogUHJvcGVydHkgaW5zdGFuY2VJZDogVGhlIGluc3RhbmNlIElEIG9mIGdhdGV3YXkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgaW5zdGFuY2VJZD86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IG5hbWU6IFRoZSBuYW1lIG9mIGdhdGV3YXkuXG4gICAgICovXG4gICAgcmVhZG9ubHkgbmFtZT86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFByb3BlcnR5IHZwYzogVGhlIHZwYyBJRCBvZiBnYXRld2F5LlxuICAgICAqL1xuICAgIHJlYWRvbmx5IHZwYz86IHN0cmluZyB8IHJvcy5JUmVzb2x2YWJsZTtcbn1cblxuLyoqXG4gKiBUaGlzIGNsYXNzIGVuY2Fwc3VsYXRlcyBhbmQgZXh0ZW5kcyB0aGUgUk9TIHJlc291cmNlIHR5cGUgYERBVEFTT1VSQ0U6Ok1TRTo6R2F0ZXdheXNgLCB3aGljaCBpcyB1c2VkIHRvIHF1ZXJ5IGdhdGV3YXlzLlxuICogQE5vdGUgVGhpcyBjbGFzcyBtYXkgaGF2ZSBzb21lIG5ldyBmdW5jdGlvbnMgdG8gZmFjaWxpdGF0ZSBkZXZlbG9wbWVudCwgc28gaXQgaXMgcmVjb21tZW5kZWQgdG8gdXNlIHRoaXMgY2xhc3MgaW5zdGVhZCBvZiBgUm9zR2F0ZXdheXNgZm9yIGEgbW9yZSBjb252ZW5pZW50IGRldmVsb3BtZW50IGV4cGVyaWVuY2UuXG4gKiBTZWUgaHR0cHM6Ly93d3cuYWxpYmFiYWNsb3VkLmNvbS9oZWxwL3Jvcy9kZXZlbG9wZXItcmVmZXJlbmNlL2RhdGFzb3VyY2UtbXNlLWdhdGV3YXlzXG4gKi9cbmV4cG9ydCBjbGFzcyBHYXRld2F5cyBleHRlbmRzIHJvcy5SZXNvdXJjZSB7XG4gICAgcHJvdGVjdGVkIHNjb3BlOiByb3MuQ29uc3RydWN0O1xuICAgIHByb3RlY3RlZCBpZDogc3RyaW5nO1xuICAgIHByb3RlY3RlZCBwcm9wczogR2F0ZXdheXNQcm9wcztcbiAgICBwcm90ZWN0ZWQgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQ6IGJvb2xlYW47XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgR2F0ZXdheUlkczogVGhlIGxpc3Qgb2YgZ2F0ZXdheSBJRHMuXG4gICAgICovXG4gICAgcHVibGljIHJlYWRvbmx5IGF0dHJHYXRld2F5SWRzOiByb3MuSVJlc29sdmFibGU7XG5cbiAgICAvKipcbiAgICAgKiBBdHRyaWJ1dGUgR2F0ZXdheXM6IFRoZSBsaXN0IG9mIGdhdGV3YXlzLlxuICAgICAqL1xuICAgIHB1YmxpYyByZWFkb25seSBhdHRyR2F0ZXdheXM6IHJvcy5JUmVzb2x2YWJsZTtcblxuICAgIC8qKlxuICAgICAqIFBhcmFtIHNjb3BlIC0gc2NvcGUgaW4gd2hpY2ggdGhpcyByZXNvdXJjZSBpcyBkZWZpbmVkXG4gICAgICogUGFyYW0gaWQgICAgLSBzY29wZWQgaWQgb2YgdGhlIHJlc291cmNlXG4gICAgICogUGFyYW0gcHJvcHMgLSByZXNvdXJjZSBwcm9wZXJ0aWVzXG4gICAgICovXG4gICAgY29uc3RydWN0b3Ioc2NvcGU6IHJvcy5Db25zdHJ1Y3QsIGlkOiBzdHJpbmcsIHByb3BzOiBHYXRld2F5c1Byb3BzID0ge30sIGVuYWJsZVJlc291cmNlUHJvcGVydHlDb25zdHJhaW50OmJvb2xlYW4gPSB0cnVlKSB7XG4gICAgICAgIHN1cGVyKHNjb3BlLCBpZCk7XG4gICAgICAgIHRoaXMuc2NvcGUgPSBzY29wZTtcbiAgICAgICAgdGhpcy5pZCA9IGlkO1xuICAgICAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gICAgICAgIHRoaXMuZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgPSBlbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludDtcblxuICAgICAgICBjb25zdCByb3NHYXRld2F5cyA9IG5ldyBSb3NHYXRld2F5cyh0aGlzLCBpZCwgIHtcbiAgICAgICAgICAgIGluc3RhbmNlSWQ6IHByb3BzLmluc3RhbmNlSWQsXG4gICAgICAgICAgICB2cGM6IHByb3BzLnZwYyxcbiAgICAgICAgICAgIGdhdGV3YXlUeXBlOiBwcm9wcy5nYXRld2F5VHlwZSxcbiAgICAgICAgICAgIGdhdGV3YXlJZDogcHJvcHMuZ2F0ZXdheUlkLFxuICAgICAgICAgICAgbmFtZTogcHJvcHMubmFtZSxcbiAgICAgICAgfSwgZW5hYmxlUmVzb3VyY2VQcm9wZXJ0eUNvbnN0cmFpbnQgJiYgdGhpcy5zdGFjay5lbmFibGVSZXNvdXJjZVByb3BlcnR5Q29uc3RyYWludCk7XG4gICAgICAgIHRoaXMucmVzb3VyY2UgPSByb3NHYXRld2F5cztcbiAgICAgICAgdGhpcy5hdHRyR2F0ZXdheUlkcyA9IHJvc0dhdGV3YXlzLmF0dHJHYXRld2F5SWRzO1xuICAgICAgICB0aGlzLmF0dHJHYXRld2F5cyA9IHJvc0dhdGV3YXlzLmF0dHJHYXRld2F5cztcbiAgICB9XG59XG4iXX0=