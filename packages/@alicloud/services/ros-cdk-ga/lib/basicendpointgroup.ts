import * as ros from '@alicloud/ros-cdk-core';
import { RosBasicEndpointGroup } from './ga.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosBasicEndpointGroup as BasicEndpointGroupProperty };

/**
 * Properties for defining a `BasicEndpointGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicendpointgroup
 */
export interface BasicEndpointGroupProps {

    /**
     * Property acceleratorId: The ID of the basic GA instance.
     */
    readonly acceleratorId: string | ros.IResolvable;

    /**
     * Property endpointGroupRegion: The ID of the region to which the endpoint group belongs.
     */
    readonly endpointGroupRegion: string | ros.IResolvable;

    /**
     * Property description: The description of the endpoint group. The description can be up to 200 characters in length and cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property endpointAddress: The endpoint address.
     */
    readonly endpointAddress?: string | ros.IResolvable;

    /**
     * Property endpointSubAddress: The secondary address of the endpoint. You must specify this parameter when the accelerated IP address is associated with the secondary private IP address of an Elastic Compute Service (ECS) instance or an elastic network interface (ENI).
     * When the endpoint type is ECS, you can set EndpointSubAddress to the secondary private IP address of the primary ENI. If the parameter is left empty, the primary private IP address of the primary ENI is used.
     * If the endpoint type is ENI, you can set EndpointSubAddress to the secondary private IP address of the secondary ENI. If the parameter is left empty, the primary private IP address of the secondary ENI is used.
     */
    readonly endpointSubAddress?: string | ros.IResolvable;

    /**
     * Property endpointType: The type of the endpoint. Valid values:
     * ENI
     * SLB
     * ECS
     */
    readonly endpointType?: string | ros.IResolvable;

    /**
     * Property name: The name of the endpoint group. The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter.
     */
    readonly name?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::GA::BasicEndpointGroup`, which is used to create an endpoint group for a basic Global Accelerator (GA) instance.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosBasicEndpointGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ga-basicendpointgroup
 */
export class BasicEndpointGroup extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: BasicEndpointGroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute EndpointGroupId: The endpoint group ID.
     */
    public readonly attrEndpointGroupId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: BasicEndpointGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosBasicEndpointGroup = new RosBasicEndpointGroup(this, id,  {
            endpointGroupRegion: props.endpointGroupRegion,
            description: props.description,
            endpointType: props.endpointType,
            endpointSubAddress: props.endpointSubAddress,
            acceleratorId: props.acceleratorId,
            endpointAddress: props.endpointAddress,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosBasicEndpointGroup;
        this.attrEndpointGroupId = rosBasicEndpointGroup.attrEndpointGroupId;
    }
}
