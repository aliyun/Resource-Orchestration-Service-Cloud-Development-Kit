import * as ros from '@alicloud/ros-cdk-core';
import { RosEndpoint } from './elasticsearchserverless.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosEndpoint as EndpointProperty };

/**
 * Properties for defining a `Endpoint`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-elasticsearchserverless-endpoint
 */
export interface EndpointProps {

    /**
     * Property endpointZones: The zone configurations of the endpoint.
     */
    readonly endpointZones: Array<RosEndpoint.EndpointZonesProperty | ros.IResolvable> | ros.IResolvable;

    /**
     * Property name: The name of the endpoint.
     */
    readonly name?: string | ros.IResolvable;

    /**
     * Property type: Endpoint type, default value: VPC.
     */
    readonly type?: string | ros.IResolvable;

    /**
     * Property vpcId: The vpc id of the endpoint.
     */
    readonly vpcId?: string | ros.IResolvable;
}

/**
 * Represents a `Endpoint`.
 */
export interface IEndpoint extends ros.IResource {
    readonly props: EndpointProps;

    /**
     * Attribute Domain: The domain of the endpoint.
     */
    readonly attrDomain: ros.IResolvable | string;

    /**
     * Attribute EndpointId: The Id of the endpoint.
     */
    readonly attrEndpointId: ros.IResolvable | string;

    /**
     * Attribute PvlEndpointId: The Id of the private link endpoint.
     */
    readonly attrPvlEndpointId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ElasticSearchServerless::Endpoint`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosEndpoint`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-elasticsearchserverless-endpoint
 */
export class Endpoint extends ros.Resource implements IEndpoint {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: EndpointProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Domain: The domain of the endpoint.
     */
    public readonly attrDomain: ros.IResolvable | string;

    /**
     * Attribute EndpointId: The Id of the endpoint.
     */
    public readonly attrEndpointId: ros.IResolvable | string;

    /**
     * Attribute PvlEndpointId: The Id of the private link endpoint.
     */
    public readonly attrPvlEndpointId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: EndpointProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosEndpoint = new RosEndpoint(this, id,  {
            type: props.type,
            vpcId: props.vpcId,
            endpointZones: props.endpointZones,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosEndpoint;
        this.attrDomain = rosEndpoint.attrDomain;
        this.attrEndpointId = rosEndpoint.attrEndpointId;
        this.attrPvlEndpointId = rosEndpoint.attrPvlEndpointId;
    }
}
