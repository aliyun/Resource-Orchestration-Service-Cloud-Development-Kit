import * as ros from '@alicloud/ros-cdk-core';
import { RosResourceGroupRelation } from './dataworks.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosResourceGroupRelation as ResourceGroupRelationProperty };

/**
 * Properties for defining a `ResourceGroupRelation`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-resourcegrouprelation
 */
export interface ResourceGroupRelationProps {

    /**
     * Property projectId: Workspace ID to bind
     */
    readonly projectId: number | ros.IResolvable;

    /**
     * Property resourceGroupId: Unique ID of resource group
     */
    readonly resourceGroupId: string | ros.IResolvable;
}

/**
 * Represents a `ResourceGroupRelation`.
 */
export interface IResourceGroupRelation extends ros.IResource {
    readonly props: ResourceGroupRelationProps;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::DataWorks::ResourceGroupRelation`, which is used to associate a resource group with a workspace.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosResourceGroupRelation`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-resourcegrouprelation
 */
export class ResourceGroupRelation extends ros.Resource implements IResourceGroupRelation {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: ResourceGroupRelationProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: ResourceGroupRelationProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosResourceGroupRelation = new RosResourceGroupRelation(this, id,  {
            resourceGroupId: props.resourceGroupId,
            projectId: props.projectId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosResourceGroupRelation;
    }
}
