import * as ros from '@alicloud/ros-cdk-core';
import { RosResourceGroup } from './resourcemanager.generated';
// Generated from the AliCloud ROS Resource Specification
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
 * This class encapsulates and extends the ROS resource type `ALIYUN::ResourceManager::ResourceGroup`, which is used to create a resource group.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosResourceGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-resourcemanager-resourcegroup
 */
export class ResourceGroup extends ros.Resource {

    /**
     * Attribute AccountId: The ID of the Alibaba Cloud account to which the resource group belongs
     */
    public readonly attrAccountId: ros.IResolvable;

    /**
     * Attribute DisplayName: The display name of the resource group
     */
    public readonly attrDisplayName: ros.IResolvable;

    /**
     * Attribute Id: The ID of the resource group
     */
    public readonly attrId: ros.IResolvable;

    /**
     * Attribute Name: The unique identifier of the resource group
     */
    public readonly attrName: ros.IResolvable;

    /**
     * Attribute RegionStatuses: The status of the resource group in all regions
     */
    public readonly attrRegionStatuses: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ResourceGroupProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosResourceGroup = new RosResourceGroup(this, id,  {
            displayName: props.displayName,
            name: props.name,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosResourceGroup;
        this.attrAccountId = rosResourceGroup.attrAccountId;
        this.attrDisplayName = rosResourceGroup.attrDisplayName;
        this.attrId = rosResourceGroup.attrId;
        this.attrName = rosResourceGroup.attrName;
        this.attrRegionStatuses = rosResourceGroup.attrRegionStatuses;
    }
}
