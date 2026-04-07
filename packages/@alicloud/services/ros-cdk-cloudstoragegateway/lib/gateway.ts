import * as ros from '@alicloud/ros-cdk-core';
import { RosGateway } from './cloudstoragegateway.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosGateway as GatewayProperty };

/**
 * Properties for defining a `Gateway`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-gateway
 */
export interface GatewayProps {

    /**
     * Property category: The category of the gateway.
     */
    readonly category: string | ros.IResolvable;

    /**
     * Property location: The location of the gateway.
     */
    readonly location: string | ros.IResolvable;

    /**
     * Property name: The name of the gateway.
     */
    readonly name: string | ros.IResolvable;

    /**
     * Property type: The type of the gateway.
     */
    readonly type: string | ros.IResolvable;

    /**
     * Property description: The description of the gateway.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property gatewayClass: The class of the gateway.
     */
    readonly gatewayClass?: string | ros.IResolvable;

    /**
     * Property postPaid: Whether the gateway is pay-as-you-go.
     */
    readonly postPaid?: boolean | ros.IResolvable;

    /**
     * Property publicNetworkBandwidth: The public network bandwidth of the gateway.
     */
    readonly publicNetworkBandwidth?: number | ros.IResolvable;

    /**
     * Property releaseAfterExpiration: Whether to release the gateway after expiration.
     */
    readonly releaseAfterExpiration?: boolean | ros.IResolvable;

    /**
     * Property resourceRegionId: The region ID of the resource.
     */
    readonly resourceRegionId?: string | ros.IResolvable;

    /**
     * Property secondaryVSwitchId: The ID of the secondary VSwitch.
     */
    readonly secondaryVSwitchId?: string | ros.IResolvable;

    /**
     * Property storageBundleId: The ID of the storage bundle.
     */
    readonly storageBundleId?: string | ros.IResolvable;

    /**
     * Property untrustedEnvId: The ID of the untrusted environment.
     */
    readonly untrustedEnvId?: string | ros.IResolvable;

    /**
     * Property untrustedEnvInstanceType: The instance type of the untrusted environment.
     */
    readonly untrustedEnvInstanceType?: string | ros.IResolvable;

    /**
     * Property vSwitchId: The ID of the VSwitch.
     */
    readonly vSwitchId?: string | ros.IResolvable;
}

/**
 * Represents a `Gateway`.
 */
export interface IGateway extends ros.IResource {
    readonly props: GatewayProps;

    /**
     * Attribute GatewayId: The ID of the gateway.
     */
    readonly attrGatewayId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CloudStorageGateway::Gateway`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosGateway`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cloudstoragegateway-gateway
 */
export class Gateway extends ros.Resource implements IGateway {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: GatewayProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute GatewayId: The ID of the gateway.
     */
    public readonly attrGatewayId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: GatewayProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosGateway = new RosGateway(this, id,  {
            description: props.description,
            category: props.category,
            publicNetworkBandwidth: props.publicNetworkBandwidth,
            resourceRegionId: props.resourceRegionId,
            vSwitchId: props.vSwitchId,
            storageBundleId: props.storageBundleId,
            secondaryVSwitchId: props.secondaryVSwitchId,
            gatewayClass: props.gatewayClass,
            name: props.name,
            type: props.type,
            untrustedEnvId: props.untrustedEnvId,
            releaseAfterExpiration: props.releaseAfterExpiration,
            untrustedEnvInstanceType: props.untrustedEnvInstanceType,
            postPaid: props.postPaid,
            location: props.location,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosGateway;
        this.attrGatewayId = rosGateway.attrGatewayId;
    }
}
