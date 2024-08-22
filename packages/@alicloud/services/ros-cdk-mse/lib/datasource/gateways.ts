import * as ros from '@alicloud/ros-cdk-core';
import { RosGateways } from './mse.generated';
// Generated from the AliCloud ROS Resource Specification
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
export class Gateways extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: GatewaysProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute GatewayIds: The list of gateway IDs.
     */
    public readonly attrGatewayIds: ros.IResolvable;

    /**
     * Attribute Gateways: The list of gateways.
     */
    public readonly attrGateways: ros.IResolvable;

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
            instanceId: props.instanceId,
            vpc: props.vpc,
            gatewayType: props.gatewayType,
            gatewayId: props.gatewayId,
            name: props.name,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGateways;
        this.attrGatewayIds = rosGateways.attrGatewayIds;
        this.attrGateways = rosGateways.attrGateways;
    }
}
