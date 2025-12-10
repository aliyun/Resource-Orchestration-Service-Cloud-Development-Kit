import * as ros from '@alicloud/ros-cdk-core';
import { RosGateways } from './apig.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::APIG::Gateways`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGateways`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apig-gateways
 */
export class Gateways extends ros.Resource implements IGateways {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: GatewaysProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute GatewayIds: The list of gateway IDs.
     */
    public readonly attrGatewayIds: ros.IResolvable | string;

    /**
     * Attribute Gateways: The list of gateways.
     */
    public readonly attrGateways: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GatewaysProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosGateways = new RosGateways(this, id,  {
            resourceGroupId: props.resourceGroupId,
            gatewayName: props.gatewayName,
            gatewayId: props.gatewayId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGateways;
        this.attrGatewayIds = rosGateways.attrGatewayIds;
        this.attrGateways = rosGateways.attrGateways;
    }
}
