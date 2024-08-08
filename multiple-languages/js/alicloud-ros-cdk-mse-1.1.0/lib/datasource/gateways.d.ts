import * as ros from '@alicloud/ros-cdk-core';
import { RosGateways } from './mse.generated';
export { RosGateways as GatewaysProperty };
/**
 * Properties for defining a `Gateways`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mse-gateways
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
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * Property vpc: The vpc ID of gateway.
     */
    readonly vpc?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::MSE::Gateways`, which is used to query gateways.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGateways`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mse-gateways
 */
export declare class Gateways extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: GatewaysProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute GatewayIds: The list of gateway IDs.
     */
    readonly attrGatewayIds: ros.IResolvable;
    /**
     * Attribute Gateways: The list of gateways.
     */
    readonly attrGateways: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: GatewaysProps, enableResourcePropertyConstraint?: boolean);
}
