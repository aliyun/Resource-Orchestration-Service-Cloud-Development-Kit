import * as ros from '@alicloud/ros-cdk-core';
import { RosResourceGroup } from './resourcemanager.generated';
export { RosResourceGroup as ResourceGroupProperty };
/**
 * Properties for defining a `ResourceGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcegroup
 */
export interface ResourceGroupProps {
    /**
     * Property displayName: The display name of the resource group
     */
    readonly displayName: string | ros.IResolvable;
    /**
     * Property name: The unique identifier of the resource group
     */
    readonly name: string | ros.IResolvable;
}
/**
 * Represents a `ResourceGroup`.
 */
export interface IResourceGroup extends ros.IResource {
    readonly props: ResourceGroupProps;
    /**
     * Attribute AccountId: The ID of the Alibaba Cloud account to which the resource group belongs
     */
    readonly attrAccountId: ros.IResolvable | string;
    /**
     * Attribute DisplayName: The display name of the resource group
     */
    readonly attrDisplayName: ros.IResolvable | string;
    /**
     * Attribute Id: The ID of the resource group
     */
    readonly attrId: ros.IResolvable | string;
    /**
     * Attribute Name: The unique identifier of the resource group
     */
    readonly attrName: ros.IResolvable | string;
    /**
     * Attribute RegionStatuses: The status of the resource group in all regions
     */
    readonly attrRegionStatuses: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ResourceManager::ResourceGroup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosResourceGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcegroup
 */
export declare class ResourceGroup extends ros.Resource implements IResourceGroup {
    protected scope: ros.Construct;
    protected id: string;
    readonly props: ResourceGroupProps;
    protected enableResourcePropertyConstraint: boolean;
    /**
     * Attribute AccountId: The ID of the Alibaba Cloud account to which the resource group belongs
     */
    readonly attrAccountId: ros.IResolvable | string;
    /**
     * Attribute DisplayName: The display name of the resource group
     */
    readonly attrDisplayName: ros.IResolvable | string;
    /**
     * Attribute Id: The ID of the resource group
     */
    readonly attrId: ros.IResolvable | string;
    /**
     * Attribute Name: The unique identifier of the resource group
     */
    readonly attrName: ros.IResolvable | string;
    /**
     * Attribute RegionStatuses: The status of the resource group in all regions
     */
    readonly attrRegionStatuses: ros.IResolvable | string;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ResourceGroupProps, enableResourcePropertyConstraint?: boolean);
}
