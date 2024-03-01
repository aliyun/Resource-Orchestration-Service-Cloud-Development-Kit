import * as ros from '@alicloud/ros-cdk-core';
import { RosNetworkAcls } from './vpc.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosNetworkAcls as NetworkAclsProperty };

/**
 * Properties for defining a `NetworkAcls`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-networkacls
 */
export interface NetworkAclsProps {

    /**
     * Property networkAclId: The ID of the network ACL.
     */
    readonly networkAclId?: string | ros.IResolvable;

    /**
     * Property networkAclName: The name of the network ACL.
     * The name must be 2 to 128 characters in length, and can contain letters, digits, underscores (_), and hyphens (-). The name must start with a letter but cannot start with http:\/\/ or https:\/\/.
     */
    readonly networkAclName?: string | ros.IResolvable;

    /**
     * Property resourceId: The ID of the associated instance.This parameter is valid only if ResourceType and ResourceId are both set.
     */
    readonly resourceId?: string | ros.IResolvable;

    /**
     * Property resourceType: The type of the associated instance. Set the value to VSwitch.
     * This parameter is valid only if ResourceType and ResourceId are both set.
     */
    readonly resourceType?: string | ros.IResolvable;

    /**
     * Property vpcId: The ID of the virtual private cloud (VPC) to which the network ACL belongs.
     */
    readonly vpcId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::VPC::NetworkAcls`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosNetworkAcls`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-vpc-networkacls
 */
export class NetworkAcls extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: NetworkAclsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute NetworkAclIds: The list of The network acl ids.
     */
    public readonly attrNetworkAclIds: ros.IResolvable;

    /**
     * Attribute NetworkAcls: The list of The network acls.
     */
    public readonly attrNetworkAcls: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: NetworkAclsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosNetworkAcls = new RosNetworkAcls(this, id,  {
            networkAclId: props.networkAclId,
            vpcId: props.vpcId,
            resourceId: props.resourceId,
            resourceType: props.resourceType,
            networkAclName: props.networkAclName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosNetworkAcls;
        this.attrNetworkAclIds = rosNetworkAcls.attrNetworkAclIds;
        this.attrNetworkAcls = rosNetworkAcls.attrNetworkAcls;
    }
}
