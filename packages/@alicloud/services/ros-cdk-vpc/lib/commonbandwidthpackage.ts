import * as ros from '@alicloud/ros-cdk-core';
import { RosCommonBandwidthPackage } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCommonBandwidthPackage as CommonBandwidthPackageProperty };

/**
 * Properties for defining a `CommonBandwidthPackage`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-commonbandwidthpackage
 */
export interface CommonBandwidthPackageProps {

    /**
     * Property bandwidth: The peak bandwidth of the Internet Shared Bandwidth instance. Unit: Mbit\/s.
     */
    readonly bandwidth: number | ros.IResolvable;

    /**
     * Property deletionProtection: Whether to enable deletion protection.
     * Default to False.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;

    /**
     * Property description: The description of the Internet Shared Bandwidth instance.
     * The description must be 2 to 256 characters in length. It must start with a letter,
     * and cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property internetChargeType: The billing model of the Internet Shared Bandwidth instance. Allowed values:
     * PayByBandwidth (default): Billed by bandwidth.
     * PayBy95: Charged at Enhanced 95.
     */
    readonly internetChargeType?: string | ros.IResolvable;

    /**
     * Property isp: Line type of EIP, value: BGP (multi-line).
     */
    readonly isp?: string | ros.IResolvable;

    /**
     * Property name: The name of the Internet Shared Bandwidth instance.
     * The name must be 2 to 128 characters in length and can contain letters, numbers, periods
     * (.), underscores (_), and hyphens (-). The name must start with a letter, and cannot
     * start with http:\/\/ or https:\/\/.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * Property ratio: The minimum consumption ratio of the Internet Shared Bandwidth instance. Default to 100.
     * Note This parameter is only supported on the China site.
     */
    readonly ratio?: number | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosCommonBandwidthPackage.TagsProperty[];

    /**
     * Property zone: Zone Id.
     */
    readonly zone?: string | ros.IResolvable;
}

/**
 * Represents a `CommonBandwidthPackage`.
 */
export interface ICommonBandwidthPackage extends ros.IResource {
    readonly props: CommonBandwidthPackageProps;

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;

    /**
     * Attribute BandwidthPackageId: The ID of the Internet Shared Bandwidth instance.
     */
    readonly attrBandwidthPackageId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::CommonBandwidthPackage`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCommonBandwidthPackage`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-commonbandwidthpackage
 */
export class CommonBandwidthPackage extends ros.Resource implements ICommonBandwidthPackage {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: CommonBandwidthPackageProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    public readonly attrArn: ros.IResolvable | string;

    /**
     * Attribute BandwidthPackageId: The ID of the Internet Shared Bandwidth instance.
     */
    public readonly attrBandwidthPackageId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CommonBandwidthPackageProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosCommonBandwidthPackage = new RosCommonBandwidthPackage(this, id,  {
            description: props.description,
            resourceGroupId: props.resourceGroupId,
            zone: props.zone,
            isp: props.isp === undefined || props.isp === null ? 'BGP' : props.isp,
            bandwidth: props.bandwidth,
            ratio: props.ratio === undefined || props.ratio === null ? 100 : props.ratio,
            deletionProtection: props.deletionProtection === undefined || props.deletionProtection === null ? false : props.deletionProtection,
            tags: props.tags,
            internetChargeType: props.internetChargeType,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCommonBandwidthPackage;
        this.attrArn = rosCommonBandwidthPackage.attrArn;
        this.attrBandwidthPackageId = rosCommonBandwidthPackage.attrBandwidthPackageId;
    }
}
