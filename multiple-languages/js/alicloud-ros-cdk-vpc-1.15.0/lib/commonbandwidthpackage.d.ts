import * as ros from '@alicloud/ros-cdk-core';
import { RosCommonBandwidthPackage } from './vpc.generated';
export { RosCommonBandwidthPackage as CommonBandwidthPackageProperty };
/**
 * Properties for defining a `CommonBandwidthPackage`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-commonbandwidthpackage
 */
export interface CommonBandwidthPackageProps {
    /**
     * Property bandwidth: The maximum bandwidth of the Internet Shared Bandwidth instance. Unit: Mbit\/s.
     * Valid values: 1 to 1000. Default value: 1.
     */
    readonly bandwidth: number | ros.IResolvable;
    /**
     * Property deletionProtection: Whether to enable deletion protection.
     * Default to False.
     */
    readonly deletionProtection?: boolean | ros.IResolvable;
    /**
     * Property description: The description of the Internet Shared Bandwidth instance.
     * The description must be 0 to 256 characters in length and cannot start with
     * `http:\/\/` or `https:\/\/`.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property internetChargeType: The billing method of the Internet Shared Bandwidth instance. Set the value to
     * PayByTraffic, which specifies the pay-by-data-transfer billing method.
     */
    readonly internetChargeType?: string | ros.IResolvable;
    /**
     * Property isp: The line type. Valid values:
     * *   BGP (default) All regions support BGP (Multi-ISP).
     * *   BGP_PRO BGP (Multi-ISP) Pro lines are available in the China (Hong Kong),
     * Singapore, Japan (Tokyo), Philippines (Manila), Malaysia (Kuala Lumpur),
     * Indonesia (Jakarta), and Thailand (Bangkok) regions.
     * If you are allowed to use single-ISP bandwidth, you can also use one of the
     * following values:
     * *   ChinaTelecom
     * *   ChinaUnicom
     * *   ChinaMobile
     * *   ChinaTelecom_L2
     * *   ChinaUnicom_L2
     * *   ChinaMobile_L2
     * If your services are deployed in China East 1 Finance, this parameter is required
     * and you must set the value to BGP_FinanceCloud.
     */
    readonly isp?: string | ros.IResolvable;
    /**
     * Property name: The name of the Internet Shared Bandwidth instance.
     * The name must be 0 to 128 characters in length and cannot start with `http:\/\/` or
     * `https:\/\/`.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * Property ratio: The percentage of the minimum bandwidth commitment. Set the parameter to 20.
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
     * Property zone: The zone of the Internet Shared Bandwidth instance. This parameter is required if
     * you create an Internet Shared Bandwidth instance for a cloud box.
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::CommonBandwidthPackage`, which is used to create an Internet Shared Bandwidth instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCommonBandwidthPackage`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-commonbandwidthpackage
 */
export declare class CommonBandwidthPackage extends ros.Resource implements ICommonBandwidthPackage {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: CommonBandwidthPackageProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable | string;
    /**
     * Attribute BandwidthPackageId: The ID of the Internet Shared Bandwidth instance.
     */
    readonly attrBandwidthPackageId: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CommonBandwidthPackageProps, enableResourcePropertyConstraint?: boolean);
}
