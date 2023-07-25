import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::GA::Acls`
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
 * A ROS template type:  `DATASOURCE::GA::Acls`
 */
export declare class RosAcls extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::GA::Acls";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
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
     * Create a new `DATASOURCE::GA::Acls`.
     *
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
