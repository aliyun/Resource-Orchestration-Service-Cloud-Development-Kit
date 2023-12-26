import * as ros from '@alicloud/ros-cdk-core';
import { RosTrafficMirrorSessionSourcesAddition } from './vpc.generated';
export { RosTrafficMirrorSessionSourcesAddition as TrafficMirrorSessionSourcesAdditionProperty };
/**
 * Properties for defining a `TrafficMirrorSessionSourcesAddition`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficmirrorsessionsourcesaddition
 */
export interface TrafficMirrorSessionSourcesAdditionProps {
    /**
     * Property trafficMirrorSessionId: The ID of the traffic mirror session.
     */
    readonly trafficMirrorSessionId: string | ros.IResolvable;
    /**
     * Property trafficMirrorSourceIds: undefined
     */
    readonly trafficMirrorSourceIds: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::TrafficMirrorSessionSourcesAddition`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTrafficMirrorSessionSourcesAddition`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficmirrorsessionsourcesaddition
 */
export declare class TrafficMirrorSessionSourcesAddition extends ros.Resource {
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TrafficMirrorSessionSourcesAdditionProps, enableResourcePropertyConstraint?: boolean);
}
