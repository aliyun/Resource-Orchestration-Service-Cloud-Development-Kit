import * as ros from '@alicloud/ros-cdk-core';
import { RosVpcGatewayEndpointAssociation } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosVpcGatewayEndpointAssociation as VpcGatewayEndpointAssociationProperty };

/**
 * Properties for defining a `VpcGatewayEndpointAssociation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcgatewayendpointassociation
 */
export interface VpcGatewayEndpointAssociationProps {

    /**
     * Property endpointId: The gateway endpoint instance ID to associate the routing table.
     */
    readonly endpointId: string | ros.IResolvable;

    /**
     * Property routeTableIds: The routing table ID to associate.The value range of N is 1~20, that is, a maximum of 20 routing tables can be bound at a time.
     */
    readonly routeTableIds: Array<string | ros.IResolvable> | ros.IResolvable;
}

/**
 * Represents a `VpcGatewayEndpointAssociation`.
 */
export interface IVpcGatewayEndpointAssociation extends ros.IResource {
    readonly props: VpcGatewayEndpointAssociationProps;

    /**
     * Attribute EndpointId: The gateway endpoint instance ID to associate the routing table.
     */
    readonly attrEndpointId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::VpcGatewayEndpointAssociation`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVpcGatewayEndpointAssociation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcgatewayendpointassociation
 */
export class VpcGatewayEndpointAssociation extends ros.Resource implements IVpcGatewayEndpointAssociation {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: VpcGatewayEndpointAssociationProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute EndpointId: The gateway endpoint instance ID to associate the routing table.
     */
    public readonly attrEndpointId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VpcGatewayEndpointAssociationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosVpcGatewayEndpointAssociation = new RosVpcGatewayEndpointAssociation(this, id,  {
            routeTableIds: props.routeTableIds,
            endpointId: props.endpointId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVpcGatewayEndpointAssociation;
        this.attrEndpointId = rosVpcGatewayEndpointAssociation.attrEndpointId;
    }
}
