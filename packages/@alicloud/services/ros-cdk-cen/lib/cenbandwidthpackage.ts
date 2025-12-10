import * as ros from '@alicloud/ros-cdk-core';
import { RosCenBandwidthPackage } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCenBandwidthPackage as CenBandwidthPackageProperty };

/**
 * Properties for defining a `CenBandwidthPackage`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenbandwidthpackage
 */
export interface CenBandwidthPackageProps {

    /**
     * Property bandwidth: The bandwidth in Mbps of the bandwidth package. The bandwidth cannot be less than 2 Mbps.
     */
    readonly bandwidth: number | ros.IResolvable;

    /**
     * Property geographicRegionAId: The other area A to connect.
     * Valid value: China | North-America | Asia-Pacific | Europe | Australia
     */
    readonly geographicRegionAId: string | ros.IResolvable;

    /**
     * Property geographicRegionBId: The other area B to connect.
     * Valid value: China | North-America | Asia-Pacific | Europe | Australia
     */
    readonly geographicRegionBId: string | ros.IResolvable;

    /**
     * Property autoPay: Whether to automatically pay the bill. Valid value:
     * true (default)
     * false
     */
    readonly autoPay?: boolean | ros.IResolvable;

    /**
     * Property autoRenew: Indicates whether automatic renewal is enabled. Valid values:true: Automatic renewal is enabled.false: Automatic renewal is not enabled. You must renew the instance manually.Default value: false.
     */
    readonly autoRenew?: boolean | ros.IResolvable;

    /**
     * Property autoRenewDuration: Duration of each automatic renewals. It takes effect when AutoRenew is true.
     */
    readonly autoRenewDuration?: number | ros.IResolvable;

    /**
     * Property bandwidthPackageChargeType: The billing method. Valid value: PREPAY, POSTPAY (Default)
     */
    readonly bandwidthPackageChargeType?: string | ros.IResolvable;

    /**
     * Property description: The description of the bandwidth package.
     * The description can contain [2,256] characters, numbers, underscores, and hyphens, and the name must start with English letters, but cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property name: The name of the bandwidth package.
     * The name can contain 2-128 characters including a-z, A-Z, 0-9, periods, underlines, and hyphens. It must start with English letters, but cannot start with http:\/\/ or https:\/\/.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * Property period: The purchase period. The default value is 1.
     */
    readonly period?: number | ros.IResolvable;

    /**
     * Property pricingCycle: The pricing cycle.
     */
    readonly pricingCycle?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosCenBandwidthPackage.TagsProperty[];
}

/**
 * Represents a `CenBandwidthPackage`.
 */
export interface ICenBandwidthPackage extends ros.IResource {
    readonly props: CenBandwidthPackageProps;

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;

    /**
     * Attribute CenBandwidthPackageId: The ID of the bandwidth package.
     */
    readonly attrCenBandwidthPackageId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CEN::CenBandwidthPackage`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCenBandwidthPackage`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenbandwidthpackage
 */
export class CenBandwidthPackage extends ros.Resource implements ICenBandwidthPackage {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: CenBandwidthPackageProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    public readonly attrArn: ros.IResolvable | string;

    /**
     * Attribute CenBandwidthPackageId: The ID of the bandwidth package.
     */
    public readonly attrCenBandwidthPackageId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CenBandwidthPackageProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosCenBandwidthPackage = new RosCenBandwidthPackage(this, id,  {
            description: props.description,
            resourceGroupId: props.resourceGroupId,
            geographicRegionBId: props.geographicRegionBId,
            geographicRegionAId: props.geographicRegionAId,
            pricingCycle: props.pricingCycle === undefined || props.pricingCycle === null ? 'Month' : props.pricingCycle,
            autoRenew: props.autoRenew,
            period: props.period === undefined || props.period === null ? 1 : props.period,
            autoPay: props.autoPay === undefined || props.autoPay === null ? true : props.autoPay,
            name: props.name,
            autoRenewDuration: props.autoRenewDuration,
            bandwidthPackageChargeType: props.bandwidthPackageChargeType,
            bandwidth: props.bandwidth,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCenBandwidthPackage;
        this.attrArn = rosCenBandwidthPackage.attrArn;
        this.attrCenBandwidthPackageId = rosCenBandwidthPackage.attrCenBandwidthPackageId;
    }
}
