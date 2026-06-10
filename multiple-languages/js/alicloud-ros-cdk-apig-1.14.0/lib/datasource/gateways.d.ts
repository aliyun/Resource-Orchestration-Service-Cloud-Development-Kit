import * as ros from '@alicloud/ros-cdk-core';
import { RosGateways } from './apig.generated';
export { RosGateways as GatewaysProperty };
/**
 * Properties for defining a `Gateways`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-gateways
 */
export interface GatewaysProps {
    /**
     * Property gatewayId: Cloud-native API Gateway ID.
     */
    readonly gatewayId?: string | ros.IResolvable;
    /**
     * Property gatewayName: The name of the Gateway.
     */
    readonly gatewayName?: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * Represents a `Gateways`.
 */
export interface IGateways extends ros.IResource {
    readonly props: GatewaysProps;
    /**
     * Attribute GatewayIds: The list of gateway IDs.
     */
    readonly attrGatewayIds: ros.IResolvable | string;
    /**
     * Attribute Gateways: The list of gateways.
     */
    readonly attrGateways: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::APIG::Gateways`, which is used to query gateways.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGateways`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-gateways
 */
export declare class Gateways extends ros.Resource implements IGateways {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: GatewaysProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute GatewayIds: The list of gateway IDs.
     */
    readonly attrGatewayIds: ros.IResolvable | string;
    /**
     * Attribute Gateways: The list of gateways.
     */
    readonly attrGateways: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: GatewaysProps, enableResourcePropertyConstraint?: boolean);
}
