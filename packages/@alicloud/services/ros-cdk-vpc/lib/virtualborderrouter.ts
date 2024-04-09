import * as ros from '@alicloud/ros-cdk-core';
import { RosVirtualBorderRouter } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosVirtualBorderRouter as VirtualBorderRouterProperty };

/**
 * Properties for defining a `VirtualBorderRouter`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-virtualborderrouter
 */
export interface VirtualBorderRouterProps {

    /**
     * Property localGatewayIp: The IP address of the VBR on the Alibaba Cloud side.
     */
    readonly localGatewayIp: string | ros.IResolvable;

    /**
     * Property peerGatewayIp: The IP address of the peer router interface of the VBR.
     * Only the owner of the VBR can set or modify the value.
     * This parameter is required when you create a VBR for the owner of the physical connection.
     * You can ignore this parameter when you create a VBR for another Alibaba Cloud account.
     */
    readonly peerGatewayIp: string | ros.IResolvable;

    /**
     * Property peeringSubnetMask: The subnet mask for the IP addresses of the VBR on the Alibaba Cloud side and on the
     * user side.
     * The two IP addresses must fall within the same subnet.
     */
    readonly peeringSubnetMask: string | ros.IResolvable;

    /**
     * Property physicalConnectionId: The ID of the physical connection.
     */
    readonly physicalConnectionId: string | ros.IResolvable;

    /**
     * Property vlanId: The VLAN ID of the VBR. Valid values: 0 to 2999.
     * Note Only the owner of the physical connection can set this parameter. The VLAN IDs of
     * two VBRs of the same physical connection must be different.
     */
    readonly vlanId: number | ros.IResolvable;

    /**
     * Property circuitCode: The circuit code provided by the Internet service provider (ISP) for the physical
     * connection.
     * Note Only the owner of the physical connection can set this parameter.
     */
    readonly circuitCode?: string | ros.IResolvable;

    /**
     * Property description: The description of the VBR.
     * The description must be 2 to 256 characters in length. It must start with a letter
     * but cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property name: The name of the VBR.
     * The name must be 2 to 128 characters in length, and can contain, digits, periods (.),
     * underscores (_), and hyphens (-). The name cannot start with http:\/\/ or https:\/\/.
     */
    readonly name?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::VirtualBorderRouter`, which is used to create a virtual border router (VBR).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVirtualBorderRouter`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-virtualborderrouter
 */
export class VirtualBorderRouter extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: VirtualBorderRouterProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute Name: The name of the VBR.
     */
    public readonly attrName: ros.IResolvable;

    /**
     * Attribute RouteTableId: The ID of the route table of the VBR.
     */
    public readonly attrRouteTableId: ros.IResolvable;

    /**
     * Attribute VbrId: The ID of the VBR.
     */
    public readonly attrVbrId: ros.IResolvable;

    /**
     * Attribute VlanInterfaceId: The ID of the VBR interface.
     */
    public readonly attrVlanInterfaceId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VirtualBorderRouterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosVirtualBorderRouter = new RosVirtualBorderRouter(this, id,  {
            peerGatewayIp: props.peerGatewayIp,
            localGatewayIp: props.localGatewayIp,
            description: props.description,
            circuitCode: props.circuitCode,
            physicalConnectionId: props.physicalConnectionId,
            peeringSubnetMask: props.peeringSubnetMask,
            vlanId: props.vlanId,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVirtualBorderRouter;
        this.attrName = rosVirtualBorderRouter.attrName;
        this.attrRouteTableId = rosVirtualBorderRouter.attrRouteTableId;
        this.attrVbrId = rosVirtualBorderRouter.attrVbrId;
        this.attrVlanInterfaceId = rosVirtualBorderRouter.attrVlanInterfaceId;
    }
}
