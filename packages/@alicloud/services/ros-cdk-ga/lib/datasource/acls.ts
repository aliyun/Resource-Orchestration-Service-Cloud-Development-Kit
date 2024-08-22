import * as ros from '@alicloud/ros-cdk-core';
import { RosAcls } from './ga.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosAcls as AclsProperty };

/**
 * Properties for defining a `Acls`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-acls
 */
export interface AclsProps {

    /**
     * Property aclId: The  ID of the Acl.
     */
    readonly aclId?: string | ros.IResolvable;

    /**
     * Property aclName: The name of the acl.
     */
    readonly aclName?: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::GA::Acls`, which is used to query access control lists (ACLs).
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosAcls`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-acls
 */
export class Acls extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: AclsProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AclIds: The list of acl IDs.
     */
    public readonly attrAclIds: ros.IResolvable;

    /**
     * Attribute Acls: The list of acls.
     */
    public readonly attrAcls: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: AclsProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosAcls = new RosAcls(this, id,  {
            resourceGroupId: props.resourceGroupId,
            aclId: props.aclId,
            aclName: props.aclName,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosAcls;
        this.attrAclIds = rosAcls.attrAclIds;
        this.attrAcls = rosAcls.attrAcls;
    }
}
