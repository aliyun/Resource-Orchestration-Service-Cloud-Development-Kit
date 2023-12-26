import * as ros from '@alicloud/ros-cdk-core';
import { RosVpcPeerConnection } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosVpcPeerConnection as VpcPeerConnectionProperty };

/**
 * Properties for defining a `VpcPeerConnection`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcpeerconnection
 */
export interface VpcPeerConnectionProps {

    /**
     * Property acceptingVpcId: The ID of the acceptor VPC.
     */
    readonly acceptingVpcId: string | ros.IResolvable;

    /**
     * Property vpcId: The ID of the requester VPC.
     */
    readonly vpcId: string | ros.IResolvable;

    /**
     * Property acceptingAliUid: The ID of the Alibaba Cloud account to which the acceptor VPC belongs.
     * To create a VPC peering connection within your Alibaba Cloud account, enter the ID
     * of your Alibaba Cloud account.
     * To create a VPC peering connection between your Alibaba Cloud account and another
     * Alibaba Cloud account, enter the ID of the peer Alibaba Cloud account.
     * Note If the acceptor VPC belongs to a Resource Access Management (RAM) user, you must set
     * the value of AcceptingAliUid to the ID of the corresponding Alibaba Cloud account.
     * Default current account ID.
     */
    readonly acceptingAliUid?: number | ros.IResolvable;

    /**
     * Property acceptingRegionId: The region ID of the acceptor VPC of the VPC peering connection that you want to create.
     * To create an intra-region VPC peering connection, enter a region ID that is the same
     * as that of the requester VPC.
     * To create an inter-region VPC peering connection, enter a region ID that is different
     * from that of the requester VPC.
     * Default current region.
     */
    readonly acceptingRegionId?: string | ros.IResolvable;

    /**
     * Property deletionForce: Specifies whether to forcefully delete the VPC peering connection. Valid values:false (default): notrue: yes If you forcefully delete the VPC peering connection, the system deletes the routes that point to the VPC peering connection from the VPC route table.
     */
    readonly deletionForce?: boolean | ros.IResolvable;

    /**
     * Property description: The description of the VPC peering connection.
     * The description must be 2 to 256 characters in length. It must start with a letter
     * but cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property name: The name of the VPC peering connection.
     * The name must be 2 to 128 characters in length and can contain digits, underscores
     * (_), and hyphens (-). It must start with a letter.
     */
    readonly name?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::VPC::VpcPeerConnection`, which is used to create a peering connection between virtual private clouds (VPCs).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosVpcPeerConnection`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-vpcpeerconnection
 */
export class VpcPeerConnection extends ros.Resource {

    /**
     * Attribute InstanceId: The ID of the VPC peering connection.
     */
    public readonly attrInstanceId: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: VpcPeerConnectionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosVpcPeerConnection = new RosVpcPeerConnection(this, id,  {
            description: props.description,
            deletionForce: props.deletionForce,
            acceptingVpcId: props.acceptingVpcId,
            vpcId: props.vpcId,
            acceptingRegionId: props.acceptingRegionId,
            acceptingAliUid: props.acceptingAliUid,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosVpcPeerConnection;
        this.attrInstanceId = rosVpcPeerConnection.attrInstanceId;
    }
}
