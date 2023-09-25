import * as ros from '@alicloud/ros-cdk-core';
import { RosCustomerGateways } from './vpc.generated';
export { RosCustomerGateways as CustomerGatewaysProperty };
/**
 * Properties for defining a `DATASOURCE::VPC::CustomerGateways`
 */
export interface CustomerGatewaysProps {
    /**
     * Property customerGatewayId: The ID of the customer gateway.
     */
    readonly customerGatewayId?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::VPC::CustomerGateways`
 */
export declare class CustomerGateways extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute CustomerGatewayIds: The list of customer gateway IDs.
     */
    readonly attrCustomerGatewayIds: ros.IResolvable;
    /**
     * Attribute CustomerGateways: The list of customer gateways.
     */
    readonly attrCustomerGateways: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::VPC::CustomerGateways`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: CustomerGatewaysProps, enableResourcePropertyConstraint?: boolean);
}
