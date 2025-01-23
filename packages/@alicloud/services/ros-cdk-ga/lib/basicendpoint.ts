import * as ros from '@alicloud/ros-cdk-core';
import { RosBasicEndpoint } from './ga.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosBasicEndpoint as BasicEndpointProperty };

/**
 * Properties for defining a `BasicEndpoint`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicendpoint
 */
export interface BasicEndpointProps {

    /**
     * Property acceleratorId: The ID of the basic GA instance.
     */
    readonly acceleratorId: string | ros.IResolvable;

    /**
     * Property endpointAddress: The address of the endpoint.
     */
    readonly endpointAddress: string | ros.IResolvable;

    /**
     * Property endpointGroupId: The ID of the endpoint group.
     */
    readonly endpointGroupId: string | ros.IResolvable;

    /**
     * Property endpointSubAddress: The secondary address of the endpoint. This parameter is required if the endpoint type is ECS, ENI, or NLB.
     * If the endpoint type is ECS, you can set EndpointSubAddress to the secondary private IP address of the primary ENI. If the parameter is left empty, the primary private IP address of the primary ENI is used.
     * If the endpoint type is ENI, you can set EndpointSubAddress to the secondary private IP address of the secondary ENI. If the parameter is left empty, the primary private IP address of the secondary ENI is used.
     * This parameter is required if the endpoint type is NLB. EndpointSubAddress is the primary private IP address of the NLB backend server.This parameter is required if the endpoint type is NLB. EndpointSubAddress is the primary private IP address of the NLB backend server.
     */
    readonly endpointSubAddress?: string | ros.IResolvable;

    /**
     * Property endpointSubAddressType: The type of the secondary address of the endpoint. Valid values:
     * primary: a primary private IP address.
     * secondary: a secondary private IP address.
     * This parameter is required if the endpoint type is ECS, ENI, or NLB. If the endpoint type is NLB, only primary is supported.
     */
    readonly endpointSubAddressType?: string | ros.IResolvable;

    /**
     * Property endpointType: The type of the endpoint. Valid values:
     * ENI: elastic network interface (ENI)
     * SLB: Classic Load Balancer (CLB)
     * NLB: Network Load Balancer (NLB)
     * ECS: Elastic Compute Service (ECS)
     */
    readonly endpointType?: string | ros.IResolvable;

    /**
     * Property endpointZoneId: The zone ID of the endpoint. This parameter is required only if the endpoint type is NLB.
     */
    readonly endpointZoneId?: string | ros.IResolvable;

    /**
     * Property name: The name of the endpoint that is associated with the basic GA instance. The name must be 1 to 128 characters in length, and can contain letters, digits, periods (.), underscores (_), and hyphens (-). It must start with a letter.
     */
    readonly name?: string | ros.IResolvable;
}

/**
 * Represents a `BasicEndpoint`.
 */
export interface IBasicEndpoint extends ros.IResource {
    readonly props: BasicEndpointProps;

    /**
     * Attribute EndpointId: The ID of the endpoint.
     */
    readonly attrEndpointId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GA::BasicEndpoint`, which is used to create an endpoint for a basic Global Accelerator (GA) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBasicEndpoint`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicendpoint
 */
export class BasicEndpoint extends ros.Resource implements IBasicEndpoint {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: BasicEndpointProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute EndpointId: The ID of the endpoint.
     */
    public readonly attrEndpointId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BasicEndpointProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosBasicEndpoint = new RosBasicEndpoint(this, id,  {
            endpointGroupId: props.endpointGroupId,
            endpointZoneId: props.endpointZoneId,
            endpointType: props.endpointType,
            endpointSubAddressType: props.endpointSubAddressType,
            endpointSubAddress: props.endpointSubAddress,
            acceleratorId: props.acceleratorId,
            name: props.name,
            endpointAddress: props.endpointAddress,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBasicEndpoint;
        this.attrEndpointId = rosBasicEndpoint.attrEndpointId;
    }
}
