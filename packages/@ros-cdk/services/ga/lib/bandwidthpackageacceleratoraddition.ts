import * as ros from '@ros-cdk/core';
import { RosBandwidthPackageAcceleratorAddition } from './ga.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosBandwidthPackageAcceleratorAddition as BandwidthPackageAcceleratorAdditionProperty };

/**
 * Properties for defining a `ALIYUN::GA::BandwidthPackageAcceleratorAddition`
 */
export interface BandwidthPackageAcceleratorAdditionProps {

    /**
     * @Property acceleratorId: The ID of the Global Accelerator instance with which you want to associate the bandwidth
     * plan.
     */
    readonly acceleratorId: string;

    /**
     * @Property bandwidthPackageId: The ID of the bandwidth package to associate.
     */
    readonly bandwidthPackageId: string;
}

/**
 * A ROS resource type:  `ALIYUN::GA::BandwidthPackageAcceleratorAddition`
 */
export class BandwidthPackageAcceleratorAddition extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute AcceleratorId: The ID of the Global Accelerator instance
     */
    public readonly attrAcceleratorId: any;

    /**
     * @Attribute BandwidthPackageId: The ID of the bandwidth package which is associated
     */
    public readonly attrBandwidthPackageId: any;

    /**
     * Create a new `ALIYUN::GA::BandwidthPackageAcceleratorAddition`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BandwidthPackageAcceleratorAdditionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosBandwidthPackageAcceleratorAddition = new RosBandwidthPackageAcceleratorAddition(this, id,  {
            bandwidthPackageId: props.bandwidthPackageId,
            acceleratorId: props.acceleratorId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBandwidthPackageAcceleratorAddition;
        this.attrAcceleratorId = rosBandwidthPackageAcceleratorAddition.attrAcceleratorId;
        this.attrBandwidthPackageId = rosBandwidthPackageAcceleratorAddition.attrBandwidthPackageId;
    }
}
