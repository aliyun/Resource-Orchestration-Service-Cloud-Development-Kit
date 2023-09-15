import * as ros from '@alicloud/ros-cdk-core';
import { RosCommonBandwidthPackage } from './vpc.generated';
export { RosCommonBandwidthPackage as CommonBandwidthPackageProperty };
/**
 * Properties for defining a `ALIYUN::VPC::CommonBandwidthPackage`
 */
export interface CommonBandwidthPackageProps {
    /**
     * Property bandwidth: The peak bandwidth of the Internet Shared Bandwidth instance. Unit: Mbit/s.
     */
    readonly bandwidth: number | ros.IResolvable;
    /**
     * Property description: The description of the Internet Shared Bandwidth instance.
     * The description must be 2 to 256 characters in length. It must start with a letter,
     * and cannot start with http:// or https://.
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
     * start with http:// or https://.
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
 * A ROS resource type:  `ALIYUN::VPC::CommonBandwidthPackage`
 */
export declare class CommonBandwidthPackage extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute BandwidthPackageId: The ID of the Internet Shared Bandwidth instance.
     */
    readonly attrBandwidthPackageId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::VPC::CommonBandwidthPackage`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CommonBandwidthPackageProps, enableResourcePropertyConstraint?: boolean);
}
