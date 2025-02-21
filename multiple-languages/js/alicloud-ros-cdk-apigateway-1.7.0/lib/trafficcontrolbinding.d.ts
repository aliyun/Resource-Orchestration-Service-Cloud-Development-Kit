import * as ros from '@alicloud/ros-cdk-core';
import { RosTrafficControlBinding } from './apigateway.generated';
export { RosTrafficControlBinding as TrafficControlBindingProperty };
/**
 * Properties for defining a `TrafficControlBinding`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-trafficcontrolbinding
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
 * Represents a `TrafficControlBinding`.
 */
export interface ITrafficControlBinding extends ros.IResource {
    readonly props: TrafficControlBindingProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ApiGateway::TrafficControlBinding`, which is used to bind a custom throttling policy to APIs.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosTrafficControlBinding`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apigateway-trafficcontrolbinding
 */
export declare class TrafficControlBinding extends ros.Resource implements ITrafficControlBinding {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: TrafficControlBindingProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: TrafficControlBindingProps, enableResourcePropertyConstraint?: boolean);
}
