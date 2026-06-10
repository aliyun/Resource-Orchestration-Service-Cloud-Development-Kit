import * as ros from '@alicloud/ros-cdk-core';
import { RosBandwidthPackageAcceleratorAddition } from './ga.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * Represents a `BandwidthPackageAcceleratorAddition`.
 */
export interface IBandwidthPackageAcceleratorAddition extends ros.IResource {
    readonly props: BandwidthPackageAcceleratorAdditionProps;

    /**
     * Attribute AcceleratorId: The ID of the Global Accelerator instance
     */
    readonly attrAcceleratorId: ros.IResolvable | string;

    /**
     * Attribute BandwidthPackageId: The ID of the bandwidth package which is associated
     */
    readonly attrBandwidthPackageId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GA::BandwidthPackageAcceleratorAddition`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBandwidthPackageAcceleratorAddition`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-bandwidthpackageacceleratoraddition
 */
export class BandwidthPackageAcceleratorAddition extends ros.Resource implements IBandwidthPackageAcceleratorAddition {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: BandwidthPackageAcceleratorAdditionProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AcceleratorId: The ID of the Global Accelerator instance
     */
    public readonly attrAcceleratorId: ros.IResolvable | string;

    /**
     * Attribute BandwidthPackageId: The ID of the bandwidth package which is associated
     */
    public readonly attrBandwidthPackageId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BandwidthPackageAcceleratorAdditionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosBandwidthPackageAcceleratorAddition = new RosBandwidthPackageAcceleratorAddition(this, id,  {
            bandwidthPackageId: props.bandwidthPackageId,
            acceleratorId: props.acceleratorId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBandwidthPackageAcceleratorAddition;
        this.attrAcceleratorId = rosBandwidthPackageAcceleratorAddition.attrAcceleratorId;
        this.attrBandwidthPackageId = rosBandwidthPackageAcceleratorAddition.attrBandwidthPackageId;
    }
}
