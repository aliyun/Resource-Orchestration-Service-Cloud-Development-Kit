import * as ros from '@alicloud/ros-cdk-core';
import { RosTrafficControlBinding } from './apigateway.generated';
export { RosTrafficControlBinding as TrafficControlBindingProperty };
/**
 * Properties for defining a `ALIYUN::ApiGateway::TrafficControlBinding`
 */
export interface TrafficControlBindingProps {
    /**
     * Property apiIds: APIs to bind with the traffic control.
     */
    readonly apiIds: Array<any | ros.IResolvable> | ros.IResolvable;
    /**
     * Property groupId: The id of group.
     */
    readonly groupId: string | ros.IResolvable;
    /**
     * Property stageName: Bind traffic in this stage.
     */
    readonly stageName: string | ros.IResolvable;
    /**
     * Property trafficControlId: The id of traffic control.
     */
    readonly trafficControlId: string | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::ApiGateway::TrafficControlBinding`
 */
export declare class TrafficControlBinding extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Create a new `ALIYUN::ApiGateway::TrafficControlBinding`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TrafficControlBindingProps, enableResourcePropertyConstraint?: boolean);
}
