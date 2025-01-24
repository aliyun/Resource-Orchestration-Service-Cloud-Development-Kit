import * as ros from '@alicloud/ros-cdk-core';
import { RosEndpointGroup } from './ga.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosEndpointGroup as EndpointGroupProperty };

/**
 * Properties for defining a `EndpointGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-endpointgroup
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
 * Represents a `EndpointGroup`.
 */
export interface IEndpointGroup extends ros.IResource {
    readonly props: EndpointGroupProps;

    /**
     * Attribute EndpointGroupId: The ID of the endpoint group.
     */
    readonly attrEndpointGroupId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GA::EndpointGroup`, which is used to create an endpoint group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEndpointGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-endpointgroup
 */
export class EndpointGroup extends ros.Resource implements IEndpointGroup {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: EndpointGroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute EndpointGroupId: The ID of the endpoint group.
     */
    public readonly attrEndpointGroupId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EndpointGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosEndpointGroup = new RosEndpointGroup(this, id,  {
            healthCheckIntervalSeconds: props.healthCheckIntervalSeconds,
            trafficPercentage: props.trafficPercentage,
            description: props.description,
            healthCheckPath: props.healthCheckPath,
            thresholdCount: props.thresholdCount,
            healthCheckEnabled: props.healthCheckEnabled,
            endpointRequestProtocol: props.endpointRequestProtocol,
            name: props.name,
            endpointGroupRegion: props.endpointGroupRegion,
            healthCheckProtocol: props.healthCheckProtocol,
            healthCheckPort: props.healthCheckPort,
            acceleratorId: props.acceleratorId,
            endpointConfigurations: props.endpointConfigurations,
            endpointGroupType: props.endpointGroupType,
            listenerId: props.listenerId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosEndpointGroup;
        this.attrEndpointGroupId = rosEndpointGroup.attrEndpointGroupId;
    }
}
