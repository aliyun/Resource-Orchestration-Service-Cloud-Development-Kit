import * as ros from '@alicloud/ros-cdk-core';
import { RosResourceGroup } from './resourcemanager.generated';
export { RosResourceGroup as ResourceGroupProperty };
/**
 * Properties for defining a `ALIYUN::ResourceManager::ResourceGroup`
 */
export interface ResourceGroupProps {
    /**
     * @Property displayName: The display name of the resource group
     */
    readonly displayName: string;
    /**
     * @Property name: The unique identifier of the resource group
     */
    readonly name: string;
}
/**
 * A ROS resource type:  `ALIYUN::ResourceManager::ResourceGroup`
 */
export declare class ResourceGroup extends ros.Resource {
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */
    /**
     * @Attribute AccountId: The ID of the Alibaba Cloud account to which the resource group belongs
     */
    readonly attrAccountId: any;
    /**
     * @Attribute CreateDate: The time when the resource group was created
     */
    readonly attrCreateDate: any;
    /**
     * @Attribute DisplayName: The display name of the resource group
     */
    readonly attrDisplayName: any;
    /**
     * @Attribute Id: The ID of the resource group
     */
    readonly attrId: any;
    /**
     * @Attribute Name: The unique identifier of the resource group
     */
    readonly attrName: any;
    /**
     * @Attribute RegionStatuses: The status of the resource group in all regions
     */
    readonly attrRegionStatuses: any;
    /**
     * Create a new `ALIYUN::ResourceManager::ResourceGroup`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ResourceGroupProps, enableResourcePropertyConstraint?: boolean);
}
