import * as ros from '@alicloud/ros-cdk-core';
import { RosVpcGatewayEndpoint } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosVpcGatewayEndpoint as VpcGatewayEndpointProperty };

/**
 * Properties for defining a `VpcGatewayEndpoint`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcgatewayendpoint
 */
export interface VpcGatewayEndpointProps {

    /**
     * Property serviceName: Terminal service name.
     */
    readonly serviceName: string | ros.IResolvable;

    /**
     * Property vpcId: The VPC ID of the gateway endpoint is to be created.
     * The VPC must be in the same region as the gateway endpoint.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * Property endpointDescription: Description information of the gateway endpoint.
     * The length of the description information is between 1 and 255 characters.
     */
    readonly endpointDescription?: string | ros.IResolvable;

    /**
     * Property endpointName: The name of the gateway endpoint.
     * The length of the name is between 1 and 128 characters.
     */
    readonly endpointName?: string | ros.IResolvable;

    /**
     * Property policyDocument: Access policies for cloud services.
     * For the syntax and structure of access policies, see Permission Policy Syntax and Structure.
     * illustrate
     * This field is required when the selected endpoint service supports setting access policies;
     * This field must be empty when the selected endpoint service does not support setting access policies.
     * Whether the terminal node service supports setting access policies can be obtained through the ListVpcEndpointServicesByEndUser interface. SupportPolicy is true to indicate support, otherwise it is not supported.
     */
    readonly policyDocument?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The resource group ID to which the gateway endpoint belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property tags: The list of tags in the form of key\/value pairs. You can define a maximum of 20 tags.
     */
    readonly tags?: RosVpcGatewayEndpoint.TagsProperty[];
}

/**
 * Represents a `VpcGatewayEndpoint`.
 */
export interface IVpcGatewayEndpoint extends ros.IResource {
    readonly props: VpcGatewayEndpointProps;

    /**
     * Attribute EndpointId: Gateway endpoint instance ID.
     */
    readonly attrEndpointId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::VpcGatewayEndpoint`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVpcGatewayEndpoint`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcgatewayendpoint
 */
export class VpcGatewayEndpoint extends ros.Resource implements IVpcGatewayEndpoint {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: VpcGatewayEndpointProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute EndpointId: Gateway endpoint instance ID.
     */
    public readonly attrEndpointId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VpcGatewayEndpointProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosVpcGatewayEndpoint = new RosVpcGatewayEndpoint(this, id,  {
            vpcId: props.vpcId,
            resourceGroupId: props.resourceGroupId,
            endpointName: props.endpointName,
            serviceName: props.serviceName,
            policyDocument: props.policyDocument,
            endpointDescription: props.endpointDescription,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVpcGatewayEndpoint;
        this.attrEndpointId = rosVpcGatewayEndpoint.attrEndpointId;
    }
}
