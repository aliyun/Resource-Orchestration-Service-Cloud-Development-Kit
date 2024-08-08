import * as ros from '@alicloud/ros-cdk-core';
import { RosAccessControls } from './slb.generated';
export { RosAccessControls as AccessControlsProperty };
/**
 * Properties for defining a `AccessControls`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-accesscontrols
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
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * Property resourceGroupId: The ID of the resource group to which the network ACL belongs.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::SLB::AccessControls`, which is used to query created access control lists (ACLs).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAccessControls`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-slb-accesscontrols
 */
export declare class AccessControls extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AccessControlsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AccessControls: The list of access controls.
     */
    readonly attrAccessControls: ros.IResolvable;
    /**
     * Attribute AclIds: The list of acl IDs.
     */
    readonly attrAclIds: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: AccessControlsProps, enableResourcePropertyConstraint?: boolean);
}
