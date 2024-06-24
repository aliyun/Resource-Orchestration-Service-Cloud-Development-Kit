import * as ros from '@alicloud/ros-cdk-core';
import { RosCenBandwidthLimit } from './cen.generated';
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
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::CEN::CenBandwidthLimit`, which is used to configure the cross-region interconnection bandwidth in a bandwidth plan.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosCenBandwidthLimit`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenbandwidthlimit
 */
export declare class CenBandwidthLimit extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: CenBandwidthLimitProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: CenBandwidthLimitProps, enableResourcePropertyConstraint?: boolean);
}
