import * as ros from '@alicloud/ros-cdk-core';
import { RosAccessControls } from './slb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAccessControls as AccessControlsProperty };

/**
 * Properties for defining a `DATASOURCE::SLB::AccessControls`
 */
export interface AccessControlsProps {

    /**
     * Property aclName: The name of the network ACL.
     */
    readonly aclName?: string | ros.IResolvable;

    /**
     * Property addressIpVersion: The IP version. Valid values: ipv4 and ipv6.
     */
    readonly addressIpVersion?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group to which the network ACL belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::SLB::AccessControls`
 */
export class AccessControls extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute AccessControls: The list of access controls.
     */
    public readonly attrAccessControls: ros.IResolvable;

    /**
     * Attribute AclIds: The list of acl IDs.
     */
    public readonly attrAclIds: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::SLB::AccessControls`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AccessControlsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosAccessControls = new RosAccessControls(this, id,  {
            addressIpVersion: props.addressIpVersion,
            resourceGroupId: props.resourceGroupId,
            aclName: props.aclName,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAccessControls;
        this.attrAccessControls = rosAccessControls.attrAccessControls;
        this.attrAclIds = rosAccessControls.attrAclIds;
    }
}
