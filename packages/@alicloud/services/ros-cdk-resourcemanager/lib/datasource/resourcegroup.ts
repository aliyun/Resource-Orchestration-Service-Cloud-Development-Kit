import * as ros from '@alicloud/ros-cdk-core';
import { RosResourceGroup } from './resourcemanager.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosResourceGroup as ResourceGroupProperty };

/**
 * Properties for defining a `ResourceGroup`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-resourcemanager-resourcegroup
 */
export interface ResourceGroupProps {

    /**
     * Property includeTags: Whether to include the tags of the resource group in the query results.
     */
    readonly includeTags?: boolean | ros.IResolvable;

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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ResourceManager::ResourceGroup`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosResourceGroup`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-resourcemanager-resourcegroup
 */
export class ResourceGroup extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: ResourceGroupProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute AccountId: The ID of the Alibaba Cloud account to which the resource group belongs.
     */
    public readonly attrAccountId: ros.IResolvable;

    /**
     * Attribute CreateDate: The time when the resource group was created.
     */
    public readonly attrCreateDate: ros.IResolvable;

    /**
     * Attribute DisplayName: The display name of the resource group.
     */
    public readonly attrDisplayName: ros.IResolvable;

    /**
     * Attribute Name: The name of the resource group.
     */
    public readonly attrName: ros.IResolvable;

    /**
     * Attribute RegionStatuses: The status of the resource group in each region.
     */
    public readonly attrRegionStatuses: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute Status: The status of the resource group.
     */
    public readonly attrStatus: ros.IResolvable;

    /**
     * Attribute Tags: The tags of the resource group.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ResourceGroupProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosResourceGroup = new RosResourceGroup(this, id,  {
            includeTags: props.includeTags === undefined || props.includeTags === null ? false : props.includeTags,
            resourceGroupId: props.resourceGroupId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosResourceGroup;
        this.attrAccountId = rosResourceGroup.attrAccountId;
        this.attrCreateDate = rosResourceGroup.attrCreateDate;
        this.attrDisplayName = rosResourceGroup.attrDisplayName;
        this.attrName = rosResourceGroup.attrName;
        this.attrRegionStatuses = rosResourceGroup.attrRegionStatuses;
        this.attrResourceGroupId = rosResourceGroup.attrResourceGroupId;
        this.attrStatus = rosResourceGroup.attrStatus;
        this.attrTags = rosResourceGroup.attrTags;
    }
}
