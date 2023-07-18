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
     * Property endpointGroupType: The type of the endpoint group. Valid values:
     * default: The endpoint group is a default endpoint group. This is the default value.
     * virtual: The endpoint group is a virtual endpoint group.
     * Note Only HTTP and HTTPS listeners support virtual endpoint groups.
     */
    readonly endpointGroupType?: string | ros.IResolvable;
    /**
     * Property endpointRequestProtocol: The protocol used by the backend service. Valid values:
     * http: This is the default value.
     * https
     * Note: You can set this parameter only when the listener that is associated with the endpoint group uses HTTP or HTTPS.
     * For an HTTP listener, the backend service protocol must be HTTP.
     */
    readonly endpointRequestProtocol?: string | ros.IResolvable;
    /**
     * Property healthCheckEnabled: Specifies whether to enable the health check feature.
     */
    readonly healthCheckEnabled?: boolean | ros.IResolvable;
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
     * Property thresholdCount: The number of consecutive health check failures that must occur before a healthy endpoint is considered unhealthy, or the number of consecutive health check successes that must occur before an unhealthy endpoint is considered healthy.
     * Valid values: 2 to 10. Default value: 3.
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
