import * as ros from '@alicloud/ros-cdk-core';
import { RosEndpointGroup } from './ga.generated';
export { RosEndpointGroup as EndpointGroupProperty };
/**
 * Properties for defining a `ALIYUN::GA::EndpointGroup`
 */
export interface EndpointGroupProps {
    /**
     * Property acceleratorId: The ID of the Global Accelerator instance with which the endpoint group will be associated.
     */
    readonly acceleratorId: string | ros.IResolvable;
    /**
     * Property endpointConfigurations:
     */
    readonly endpointConfigurations: Array<RosEndpointGroup.EndpointConfigurationsProperty | ros.IResolvable> | ros.IResolvable;
    /**
     * Property endpointGroupRegion: The region ID of the endpoint group.
     */
    readonly endpointGroupRegion: string | ros.IResolvable;
    /**
     * Property listenerId: The ID of the listener to be associated with the endpoint group.
     */
    readonly listenerId: string | ros.IResolvable;
    /**
     * Property description: The description of the endpoint group.
     */
    readonly description?: string | ros.IResolvable;
    /**
     * Property healthCheckIntervalSeconds: The interval between two consecutive health checks. Unit: seconds.
     */
    readonly healthCheckIntervalSeconds?: number | ros.IResolvable;
    /**
     * Property healthCheckPath: The path set as the destination on the targets for health checks.
     */
    readonly healthCheckPath?: string | ros.IResolvable;
    /**
     * Property healthCheckPort: The port that is used to connect with the targets for health checks.
     */
    readonly healthCheckPort?: number | ros.IResolvable;
    /**
     * Property healthCheckProtocol: The protocol that is used to connect with the targets for health checks.
     * tcp: TCP protocol
     * http: HTTP protocol
     * https: HTTPS protocol
     */
    readonly healthCheckProtocol?: string | ros.IResolvable;
    /**
     * Property name: The name of the endpoint group.
     */
    readonly name?: string | ros.IResolvable;
    /**
     * Property thresholdCount: The number of consecutive failed heath checks that must occur before declaring an endpoint unhealthy.
     */
    readonly thresholdCount?: number | ros.IResolvable;
    /**
     * Property trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with
     * multiple endpoint groups.
     */
    readonly trafficPercentage?: number | ros.IResolvable;
}
/**
 * A ROS resource type:  `ALIYUN::GA::EndpointGroup`
 */
export declare class EndpointGroup extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * Attribute EndpointGroupId: The ID of the endpoint group.
     */
    readonly attrEndpointGroupId: ros.IResolvable;
    /**
     * Create a new `ALIYUN::GA::EndpointGroup`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EndpointGroupProps, enableResourcePropertyConstraint?: boolean);
}
