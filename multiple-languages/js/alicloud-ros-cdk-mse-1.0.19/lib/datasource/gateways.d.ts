import * as ros from '@alicloud/ros-cdk-core';
import { RosGateways } from './mse.generated';
export { RosGateways as GatewaysProperty };
/**
 * Properties for defining a `DATASOURCE::MSE::Gateways`
 */
export interface GatewaysProps {
    /**
     * Property gatewayId: The ID of gateway.
     */
    readonly gatewayId?: string | ros.IResolvable;
    /**
     * Property gatewayType: The type of gateway.
     */
    readonly gatewayType?: string | ros.IResolvable;
    /**
     * Property instanceId: The instance ID of gateway.
     */
    readonly instanceId?: string | ros.IResolvable;
    /**
     * Property name: The name of gateway.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * Property vpc: The vpc ID of gateway.
     */
    readonly vpc?: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `DATASOURCE::MSE::Gateways`
 */
export declare class Gateways extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute GatewayIds: The list of gateway IDs.
     */
    readonly attrGatewayIds: ros.IResolvable;
    /**
     * Attribute Gateways: The list of gateways.
     */
    readonly attrGateways: ros.IResolvable;
    /**
     * Create a new `DATASOURCE::MSE::Gateways`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: GatewaysProps, enableResourcePropertyConstraint?: boolean);
}
