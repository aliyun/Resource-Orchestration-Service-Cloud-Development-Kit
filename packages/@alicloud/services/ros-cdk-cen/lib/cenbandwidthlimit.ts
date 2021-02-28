import * as ros from '@alicloud/ros-cdk-core';
import { RosCenBandwidthLimit } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCenBandwidthLimit as CenBandwidthLimitProperty };

/**
 * Properties for defining a `ALIYUN::CEN::CenBandwidthLimit`
 */
export interface CenBandwidthLimitProps {

    /**
     * Property bandwidthLimit: The bandwidth configured for the interconnected regions communication. Minimal value: 1
     */
    readonly bandwidthLimit: number;

    /**
     * Property cenId: The ID of the CEN instance.
     */
    readonly cenId: string;

    /**
     * Property localRegionId: The ID of the local region.
     */
    readonly localRegionId: string;

    /**
     * Property oppositeRegionId: The ID of the other interconnected region.
     */
    readonly oppositeRegionId: string;
}

/**
 * A ROS resource type:  `ALIYUN::CEN::CenBandwidthLimit`
 */
export class CenBandwidthLimit extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Create a new `ALIYUN::CEN::CenBandwidthLimit`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CenBandwidthLimitProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosCenBandwidthLimit = new RosCenBandwidthLimit(this, id,  {
            oppositeRegionId: props.oppositeRegionId,
            cenId: props.cenId,
            bandwidthLimit: props.bandwidthLimit,
            localRegionId: props.localRegionId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCenBandwidthLimit;
    }
}
