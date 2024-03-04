import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAcls`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-acls
 */
export interface RosAclsProps {
    /**
     * @Property aclId: The  ID of the Acl.
     */
    readonly aclId?: string | ros.IResolvable;
    /**
     * @Property aclName: The name of the acl.
     */
    readonly aclName?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::GA::Acls`, which is used to query access control lists (ACLs).
 * @Note This class does not contain additional functions, so it is recommended to use the `Acls` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ga-acls
 */
export declare class RosAcls extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::GA::Acls";
    /**
     * @Attribute AclIds: The list of acl IDs.
     */
    readonly attrAclIds: ros.IResolvable;
    /**
     * @Attribute Acls: The list of acls.
     */
    readonly attrAcls: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property aclId: The  ID of the Acl.
     */
    aclId: string | ros.IResolvable | undefined;
    /**
     * @Property aclName: The name of the acl.
     */
    aclName: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAclsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
