import * as ros from '@alicloud/ros-cdk-core';
import { RosBandwidthPackageAcceleratorAddition } from './ga.generated';
export { RosBandwidthPackageAcceleratorAddition as BandwidthPackageAcceleratorAdditionProperty };
/**
 * Properties for defining a `ALIYUN::GA::BandwidthPackageAcceleratorAddition`
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
 * A ROS resource type:  `ALIYUN::GA::BandwidthPackageAcceleratorAddition`
 */
export declare class BandwidthPackageAcceleratorAddition extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute AcceleratorId: The ID of the Global Accelerator instance
     */
    readonly attrAcceleratorId: ros.IResolvable;
    /**
     * Attribute BandwidthPackageId: The ID of the bandwidth package which is associated
     */
    readonly attrBandwidthPackageId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::GA::BandwidthPackageAcceleratorAddition`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BandwidthPackageAcceleratorAdditionProps, enableResourcePropertyConstraint?: boolean);
}
