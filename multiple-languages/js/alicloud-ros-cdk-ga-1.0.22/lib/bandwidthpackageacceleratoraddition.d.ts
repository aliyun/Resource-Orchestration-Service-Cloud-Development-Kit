import * as ros from '@alicloud/ros-cdk-core';
import { RosBandwidthPackageAcceleratorAddition } from './ga.generated';
export { RosBandwidthPackageAcceleratorAddition as BandwidthPackageAcceleratorAdditionProperty };
/**
 * Properties for defining a `BandwidthPackageAcceleratorAddition`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-bandwidthpackageacceleratoraddition
 */
export interface BandwidthPackageAcceleratorAdditionProps {
    /**
     * Property acceleratorId: The ID of the Global Accelerator instance with which you want to associate the bandwidth
     * plan.
     */
    readonly acceleratorId: string | ros.IResolvable;
    /**
     * Property bandwidthPackageId: The ID of the bandwidth package to associate.
     */
    readonly bandwidthPackageId: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GA::BandwidthPackageAcceleratorAddition`, which is used to bind a bandwidth plan to a global acceleration instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBandwidthPackageAcceleratorAddition`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-bandwidthpackageacceleratoraddition
 */
export declare class BandwidthPackageAcceleratorAddition extends ros.Resource {
    /**
     * Attribute AcceleratorId: The ID of the Global Accelerator instance
     */
    readonly attrAcceleratorId: ros.IResolvable;
    /**
     * Attribute BandwidthPackageId: The ID of the bandwidth package which is associated
     */
    readonly attrBandwidthPackageId: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BandwidthPackageAcceleratorAdditionProps, enableResourcePropertyConstraint?: boolean);
}
