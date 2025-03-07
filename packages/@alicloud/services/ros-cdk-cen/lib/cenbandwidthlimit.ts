import * as ros from '@alicloud/ros-cdk-core';
import { RosCenBandwidthLimit } from './cen.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosCenBandwidthLimit as CenBandwidthLimitProperty };

/**
 * Properties for defining a `CenBandwidthLimit`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenbandwidthlimit
 */
export interface CenBandwidthLimitProps {

    /**
     * Property bandwidthLimit: The bandwidth configured for the interconnected regions communication. Minimal value: 1
     */
    readonly bandwidthLimit: number | ros.IResolvable;

    /**
     * Property cenId: The ID of the CEN instance.
     */
    readonly cenId: string | ros.IResolvable;

    /**
     * Property localRegionId: The ID of the local region.
     */
    readonly localRegionId: string | ros.IResolvable;

    /**
     * Property oppositeRegionId: The ID of the other interconnected region.
     */
    readonly oppositeRegionId: string | ros.IResolvable;

    /**
     * Property bandwidthType: Bandwidth allocation mode. Value: BandwidthPackage: Allocates bandwidth from the bandwidth package.
     */
    readonly bandwidthType?: string | ros.IResolvable;
}

/**
 * Represents a `CenBandwidthLimit`.
 */
export interface ICenBandwidthLimit extends ros.IResource {
    readonly props: CenBandwidthLimitProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CEN::CenBandwidthLimit`, which is used to configure the bandwidth for cross-region interconnection in a bandwidth plan.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCenBandwidthLimit`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenbandwidthlimit
 */
export class CenBandwidthLimit extends ros.Resource implements ICenBandwidthLimit {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: CenBandwidthLimitProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CenBandwidthLimitProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosCenBandwidthLimit = new RosCenBandwidthLimit(this, id,  {
            bandwidthType: props.bandwidthType,
            oppositeRegionId: props.oppositeRegionId,
            cenId: props.cenId,
            bandwidthLimit: props.bandwidthLimit,
            localRegionId: props.localRegionId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosCenBandwidthLimit;
    }
}
