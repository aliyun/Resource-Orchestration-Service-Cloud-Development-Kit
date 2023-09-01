import * as ros from '@alicloud/ros-cdk-core';
import { RosTrafficMirrorSessionSourcesAddition } from './vpc.generated';
export { RosTrafficMirrorSessionSourcesAddition as TrafficMirrorSessionSourcesAdditionProperty };
/**
 * Properties for defining a `ALIYUN::VPC::TrafficMirrorSessionSourcesAddition`
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
 * A ROS resource type:  `ALIYUN::VPC::TrafficMirrorSessionSourcesAddition`
 */
export declare class TrafficMirrorSessionSourcesAddition extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::VPC::TrafficMirrorSessionSourcesAddition`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TrafficMirrorSessionSourcesAdditionProps, enableResourcePropertyConstraint?: boolean);
}
