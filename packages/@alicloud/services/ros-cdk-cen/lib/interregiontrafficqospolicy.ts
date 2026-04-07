import * as ros from '@alicloud/ros-cdk-core';
import { RosInterRegionTrafficQosPolicy } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInterRegionTrafficQosPolicy as InterRegionTrafficQosPolicyProperty };

/**
 * Properties for defining a `InterRegionTrafficQosPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-interregiontrafficqospolicy
 */
export interface InterRegionTrafficQosPolicyProps {

    /**
     * Property transitRouterAttachmentId: The ID of the inter-region connection.
     */
    readonly transitRouterAttachmentId: string | ros.IResolvable;

    /**
     * Property transitRouterId: The ID of the transit router.
     */
    readonly transitRouterId: string | ros.IResolvable;

    /**
     * Property bandwidthGuaranteeMode: The allocation mode of the guaranteed bandwidth. You can specify an absolute bandwidth value or a bandwidth percentage. Valid values: 
     *  * byBandwidth: allocates an absolute bandwidth value for the QoS queue. 
     *  * byBandwidthPercent (default): allocates a bandwidth percentage for the OoS queue.
     */
    readonly bandwidthGuaranteeMode?: string | ros.IResolvable;

    /**
     * Property interRegionTrafficQosPolicyDescription: The description of the QoS policy. This parameter is optional. If you enter a description, it must be 1 to 256 characters in length, and cannot start with http:\/\/ or https:\/\/.
     */
    readonly interRegionTrafficQosPolicyDescription?: string | ros.IResolvable;

    /**
     * Property interRegionTrafficQosPolicyName: The name of the QoS policy. The name can be empty or 1 to 128 characters in length, and cannot start with http:\/\/ or https:\/\/.
     */
    readonly interRegionTrafficQosPolicyName?: string | ros.IResolvable;
}

/**
 * Represents a `InterRegionTrafficQosPolicy`.
 */
export interface IInterRegionTrafficQosPolicy extends ros.IResource {
    readonly props: InterRegionTrafficQosPolicyProps;

    /**
     * Attribute BandwidthGuaranteeMode: The allocation mode of the guaranteed bandwidth.
     */
    readonly attrBandwidthGuaranteeMode: ros.IResolvable | string;

    /**
     * Attribute InterRegionTrafficQosPolicyDescription: The description of the QoS policy.
     */
    readonly attrInterRegionTrafficQosPolicyDescription: ros.IResolvable | string;

    /**
     * Attribute InterRegionTrafficQosPolicyId: The ID of the QoS policy.
     */
    readonly attrInterRegionTrafficQosPolicyId: ros.IResolvable | string;

    /**
     * Attribute InterRegionTrafficQosPolicyName: The name of the QoS policy.
     */
    readonly attrInterRegionTrafficQosPolicyName: ros.IResolvable | string;

    /**
     * Attribute TransitRouterAttachmentId: The ID of the inter-region connection.
     */
    readonly attrTransitRouterAttachmentId: ros.IResolvable | string;

    /**
     * Attribute TransitRouterId: The ID of the transit router.
     */
    readonly attrTransitRouterId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CEN::InterRegionTrafficQosPolicy`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInterRegionTrafficQosPolicy`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-interregiontrafficqospolicy
 */
export class InterRegionTrafficQosPolicy extends ros.Resource implements IInterRegionTrafficQosPolicy {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: InterRegionTrafficQosPolicyProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute BandwidthGuaranteeMode: The allocation mode of the guaranteed bandwidth.
     */
    public readonly attrBandwidthGuaranteeMode: ros.IResolvable | string;

    /**
     * Attribute InterRegionTrafficQosPolicyDescription: The description of the QoS policy.
     */
    public readonly attrInterRegionTrafficQosPolicyDescription: ros.IResolvable | string;

    /**
     * Attribute InterRegionTrafficQosPolicyId: The ID of the QoS policy.
     */
    public readonly attrInterRegionTrafficQosPolicyId: ros.IResolvable | string;

    /**
     * Attribute InterRegionTrafficQosPolicyName: The name of the QoS policy.
     */
    public readonly attrInterRegionTrafficQosPolicyName: ros.IResolvable | string;

    /**
     * Attribute TransitRouterAttachmentId: The ID of the inter-region connection.
     */
    public readonly attrTransitRouterAttachmentId: ros.IResolvable | string;

    /**
     * Attribute TransitRouterId: The ID of the transit router.
     */
    public readonly attrTransitRouterId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InterRegionTrafficQosPolicyProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosInterRegionTrafficQosPolicy = new RosInterRegionTrafficQosPolicy(this, id,  {
            transitRouterAttachmentId: props.transitRouterAttachmentId,
            interRegionTrafficQosPolicyName: props.interRegionTrafficQosPolicyName,
            interRegionTrafficQosPolicyDescription: props.interRegionTrafficQosPolicyDescription,
            bandwidthGuaranteeMode: props.bandwidthGuaranteeMode,
            transitRouterId: props.transitRouterId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInterRegionTrafficQosPolicy;
        this.attrBandwidthGuaranteeMode = rosInterRegionTrafficQosPolicy.attrBandwidthGuaranteeMode;
        this.attrInterRegionTrafficQosPolicyDescription = rosInterRegionTrafficQosPolicy.attrInterRegionTrafficQosPolicyDescription;
        this.attrInterRegionTrafficQosPolicyId = rosInterRegionTrafficQosPolicy.attrInterRegionTrafficQosPolicyId;
        this.attrInterRegionTrafficQosPolicyName = rosInterRegionTrafficQosPolicy.attrInterRegionTrafficQosPolicyName;
        this.attrTransitRouterAttachmentId = rosInterRegionTrafficQosPolicy.attrTransitRouterAttachmentId;
        this.attrTransitRouterId = rosInterRegionTrafficQosPolicy.attrTransitRouterId;
    }
}
