import * as ros from '@alicloud/ros-cdk-core';
import { RosCustomerGateways } from './vpc.generated';
export { RosCustomerGateways as CustomerGatewaysProperty };
/**
 * Properties for defining a `CustomerGateways`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-customergateways
 */
export interface CustomerGatewaysProps {
    /**
     * Property customerGatewayId: The ID of the customer gateway.
     */
    readonly customerGatewayId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::CustomerGateways`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCustomerGateways`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-customergateways
 */
export declare class CustomerGateways extends ros.Resource {
    /**
     * Attribute CustomerGatewayIds: The list of customer gateway IDs.
     */
    readonly attrCustomerGatewayIds: ros.IResolvable;
    /**
     * Attribute CustomerGateways: The list of customer gateways.
     */
    readonly attrCustomerGateways: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: CustomerGatewaysProps, enableResourcePropertyConstraint?: boolean);
}
