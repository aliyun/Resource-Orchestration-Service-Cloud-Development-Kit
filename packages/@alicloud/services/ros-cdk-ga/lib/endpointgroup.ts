import * as ros from '@alicloud/ros-cdk-core';
import { RosEndpointGroup } from './ga.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosEndpointGroup as EndpointGroupProperty };

/**
 * Properties for defining a `ALIYUN::GA::EndpointGroup`
 */
export interface EndpointGroupProps {

    /**
     * @Property acceleratorId: The ID of the Global Accelerator instance with which the endpoint group will be associated.
     */
    readonly acceleratorId: string;

    /**
     * @Property endpointConfigurations:
     */
    readonly endpointConfigurations: Array<RosEndpointGroup.EndpointConfigurationsProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * @Property endpointGroupRegion: The region ID of the endpoint group.
     */
    readonly endpointGroupRegion: string;

    /**
     * @Property listenerId: The ID of the listener to be associated with the endpoint group.
     */
    readonly listenerId: string;

    /**
     * @Property description: The description of the endpoint group.
     */
    readonly description?: string;

    /**
     * @Property healthCheckIntervalSeconds: The interval between two consecutive health checks. Unit: seconds.
     */
    readonly healthCheckIntervalSeconds?: number;

    /**
     * @Property healthCheckPath: The path set as the destination on the targets for health checks.
     */
    readonly healthCheckPath?: string;

    /**
     * @Property healthCheckPort: The port that is used to connect with the targets for health checks.
     */
    readonly healthCheckPort?: number;

    /**
     * @Property healthCheckProtocol: The protocol that is used to connect with the targets for health checks.
     * tcp: TCP protocol
     * http: HTTP protocol
     * https: HTTPS protocol
     */
    readonly healthCheckProtocol?: string;

    /**
     * @Property name: The name of the endpoint group.
     */
    readonly name?: string;

    /**
     * @Property thresholdCount: The number of consecutive failed heath checks that must occur before declaring an endpoint unhealthy.
     */
    readonly thresholdCount?: number;

    /**
     * @Property trafficPercentage: The weight of the endpoint group when the corresponding listener is associated with
     * multiple endpoint groups.
     */
    readonly trafficPercentage?: number;
}

/**
 * A ROS resource type:  `ALIYUN::GA::EndpointGroup`
 */
export class EndpointGroup extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * @Attribute EndpointGroupId: The ID of the endpoint group.
     */
    public readonly attrEndpointGroupId: any;

    /**
     * Create a new `ALIYUN::GA::EndpointGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EndpointGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosEndpointGroup = new RosEndpointGroup(this, id,  {
            healthCheckIntervalSeconds: props.healthCheckIntervalSeconds,
            endpointGroupRegion: props.endpointGroupRegion,
            trafficPercentage: props.trafficPercentage,
            description: props.description,
            healthCheckPath: props.healthCheckPath,
            healthCheckProtocol: props.healthCheckProtocol,
            thresholdCount: props.thresholdCount,
            healthCheckPort: props.healthCheckPort,
            acceleratorId: props.acceleratorId,
            endpointConfigurations: props.endpointConfigurations,
            name: props.name,
            listenerId: props.listenerId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosEndpointGroup;
        this.attrEndpointGroupId = rosEndpointGroup.attrEndpointGroupId;
    }
}
