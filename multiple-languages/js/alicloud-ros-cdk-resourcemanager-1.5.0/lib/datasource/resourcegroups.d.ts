import * as ros from '@alicloud/ros-cdk-core';
import { RosResourceGroups } from './resourcemanager.generated';
export { RosResourceGroups as ResourceGroupsProperty };
/**
 * Properties for defining a `ResourceGroups`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-resourcemanager-resourcegroups
 */
export interface ResourceGroupsProps {
    /**
     * Property displayName: The display name of the resource group. This parameter specifies a filter condition for the query. Fuzzy match is supported.The display name can be a maximum of 50 characters in length.
     */
    readonly displayName?: string | ros.IResolvable;
    /**
     * Property includeTags: Whether to include the tags of the resource groups in the query results.
     */
    readonly includeTags?: boolean | ros.IResolvable;
    /**
     * Property name: The identifier of the resource group. This parameter specifies a filter condition for the query. Fuzzy match is supported. The identifier can be a maximum of 50 characters in length and can contain letters, digits, and hyphens (-).
     */
    readonly name?: string | ros.IResolvable;
    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
    /**
     * Property resourceGroupIds: The IDs of the resource groups. This parameter specifies a filter condition for the query.You can specify a maximum of 100 resource group IDs.
     */
    readonly resourceGroupIds?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ResourceManager::ResourceGroups`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosResourceGroups`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-resourcemanager-resourcegroups
 */
export declare class ResourceGroups extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ResourceGroupsProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute ResourceGroupIds: The IDs of the resource groups.
     */
    readonly attrResourceGroupIds: ros.IResolvable;
    /**
     * Attribute ResourceGroups: The list of the resource groups.
     */
    readonly attrResourceGroups: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: ResourceGroupsProps, enableResourcePropertyConstraint?: boolean);
}
