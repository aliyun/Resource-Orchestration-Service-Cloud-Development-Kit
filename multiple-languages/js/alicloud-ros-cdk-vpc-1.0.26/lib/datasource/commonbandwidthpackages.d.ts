import * as ros from '@alicloud/ros-cdk-core';
import { RosCommonBandwidthPackages } from './vpc.generated';
export { RosCommonBandwidthPackages as CommonBandwidthPackagesProperty };
/**
 * Properties for defining a `CommonBandwidthPackages`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-commonbandwidthpackages
 */
export interface CommonBandwidthPackagesProps {
    /**
     * Property commonBandwidthPackageId: The ID of the Internet shared bandwidth.
     */
    readonly commonBandwidthPackageId?: string | ros.IResolvable;
    /**
     * Property commonBandwidthPackageName: The name of the Internet Shared Bandwidth instance.
     */
    readonly commonBandwidthPackageName?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::CommonBandwidthPackages`, which is used to query the elastic IP address (EIP) bandwidth plans in a specified region.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCommonBandwidthPackages`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-commonbandwidthpackages
 */
export declare class CommonBandwidthPackages extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: CommonBandwidthPackagesProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute CommonBandwidthPackageIds: The list of common bandwidth package IDs.
     */
    readonly attrCommonBandwidthPackageIds: ros.IResolvable;
    /**
     * Attribute CommonBandwidthPackages: The list of common bandwidth packages.
     */
    readonly attrCommonBandwidthPackages: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: CommonBandwidthPackagesProps, enableResourcePropertyConstraint?: boolean);
}
