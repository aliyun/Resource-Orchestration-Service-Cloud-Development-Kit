import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosResourceGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-resourcemanager-resourcegroup
 */
export interface RosResourceGroupProps {
    /**
     * @Property includeTags: Whether to include the tags of the resource group in the query results.
     */
    readonly includeTags?: boolean | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ResourceManager::ResourceGroup`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ResourceGroup` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-resourcemanager-resourcegroup
 */
export declare class RosResourceGroup extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ResourceManager::ResourceGroup";
    /**
     * @Attribute AccountId: The ID of the Alibaba Cloud account to which the resource group belongs.
     */
    readonly attrAccountId: ros.IResolvable;
    /**
     * @Attribute CreateDate: The time when the resource group was created.
     */
    readonly attrCreateDate: ros.IResolvable;
    /**
     * @Attribute DisplayName: The display name of the resource group.
     */
    readonly attrDisplayName: ros.IResolvable;
    /**
     * @Attribute Name: The name of the resource group.
     */
    readonly attrName: ros.IResolvable;
    /**
     * @Attribute RegionStatuses: The status of the resource group in each region.
     */
    readonly attrRegionStatuses: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute Status: The status of the resource group.
     */
    readonly attrStatus: ros.IResolvable;
    /**
     * @Attribute Tags: The tags of the resource group.
     */
    readonly attrTags: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property includeTags: Whether to include the tags of the resource group in the query results.
     */
    includeTags: boolean | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosResourceGroupProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `RosResourceGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-resourcemanager-resourcegroups
 */
export interface RosResourceGroupsProps {
    /**
     * @Property displayName: The display name of the resource group. This parameter specifies a filter condition for the query. Fuzzy match is supported.The display name can be a maximum of 50 characters in length.
     */
    readonly displayName?: string | ros.IResolvable;
    /**
     * @Property includeTags: Whether to include the tags of the resource groups in the query results.
     */
    readonly includeTags?: boolean | ros.IResolvable;
    /**
     * @Property name: The identifier of the resource group. This parameter specifies a filter condition for the query. Fuzzy match is supported. The identifier can be a maximum of 50 characters in length and can contain letters, digits, and hyphens (-).
     */
    readonly name?: string | ros.IResolvable;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * @Property resourceGroupIds: The IDs of the resource groups. This parameter specifies a filter condition for the query.You can specify a maximum of 100 resource group IDs.
     */
    readonly resourceGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `DATASOURCE::ResourceManager::ResourceGroups`.
 * @Note This class does not contain additional functions, so it is recommended to use the `ResourceGroups` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-resourcemanager-resourcegroups
 */
export declare class RosResourceGroups extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::ResourceManager::ResourceGroups";
    /**
     * @Attribute ResourceGroupIds: The IDs of the resource groups.
     */
    readonly attrResourceGroupIds: ros.IResolvable;
    /**
     * @Attribute ResourceGroups: The list of the resource groups.
     */
    readonly attrResourceGroups: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property displayName: The display name of the resource group. This parameter specifies a filter condition for the query. Fuzzy match is supported.The display name can be a maximum of 50 characters in length.
     */
    displayName: string | ros.IResolvable | undefined;
    /**
     * @Property includeTags: Whether to include the tags of the resource groups in the query results.
     */
    includeTags: boolean | ros.IResolvable | undefined;
    /**
     * @Property name: The identifier of the resource group. This parameter specifies a filter condition for the query. Fuzzy match is supported. The identifier can be a maximum of 50 characters in length and can contain letters, digits, and hyphens (-).
     */
    name: string | ros.IResolvable | undefined;
    /**
     * @Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    refreshOptions: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupIds: The IDs of the resource groups. This parameter specifies a filter condition for the query.You can specify a maximum of 100 resource group IDs.
     */
    resourceGroupIds: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosResourceGroupsProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
