import * as ros from '@alicloud/ros-cdk-core';
import { RosDedicatedHostCluster } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDedicatedHostCluster as DedicatedHostClusterProperty };

/**
 * Properties for defining a `DedicatedHostCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-dedicatedhostcluster
 */
export interface DedicatedHostClusterProps {

    /**
     * Property dedicatedHostClusterId: Dedicated host cluster id.
     */
    readonly dedicatedHostClusterId: string | ros.IResolvable;

    /**
     * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
     * - Never: Never refresh the datasource resource when the stack is updated.
     * - Always: Always refresh the datasource resource when the stack is updated.
     * Default is Never.
     */
    readonly refreshOptions?: string | ros.IResolvable;
}

/**
 * Represents a `DedicatedHostCluster`.
 */
export interface IDedicatedHostCluster extends ros.IResource {
    readonly props: DedicatedHostClusterProps;

    /**
     * Attribute DedicatedHostClusterId: Dedicated host cluster id.
     */
    readonly attrDedicatedHostClusterId: ros.IResolvable | string;

    /**
     * Attribute DedicatedHostClusterName: The name of the dedicated host cluster.
     */
    readonly attrDedicatedHostClusterName: ros.IResolvable | string;

    /**
     * Attribute Description: The description of the dedicated host cluster.
     */
    readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the dedicated host cluster belongs.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute Tags: The tags of the dedicated host cluster.
     */
    readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute ZoneId: The zone ID of the dedicated host cluster.
     */
    readonly attrZoneId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::DedicatedHostCluster`, which is used to query the information about a dedicated host cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDedicatedHostCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-dedicatedhostcluster
 */
export class DedicatedHostCluster extends ros.Resource implements IDedicatedHostCluster {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DedicatedHostClusterProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DedicatedHostClusterId: Dedicated host cluster id.
     */
    public readonly attrDedicatedHostClusterId: ros.IResolvable | string;

    /**
     * Attribute DedicatedHostClusterName: The name of the dedicated host cluster.
     */
    public readonly attrDedicatedHostClusterName: ros.IResolvable | string;

    /**
     * Attribute Description: The description of the dedicated host cluster.
     */
    public readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the dedicated host cluster belongs.
     */
    public readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute Tags: The tags of the dedicated host cluster.
     */
    public readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute ZoneId: The zone ID of the dedicated host cluster.
     */
    public readonly attrZoneId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DedicatedHostClusterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDedicatedHostCluster = new RosDedicatedHostCluster(this, id,  {
            dedicatedHostClusterId: props.dedicatedHostClusterId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDedicatedHostCluster;
        this.attrDedicatedHostClusterId = rosDedicatedHostCluster.attrDedicatedHostClusterId;
        this.attrDedicatedHostClusterName = rosDedicatedHostCluster.attrDedicatedHostClusterName;
        this.attrDescription = rosDedicatedHostCluster.attrDescription;
        this.attrResourceGroupId = rosDedicatedHostCluster.attrResourceGroupId;
        this.attrTags = rosDedicatedHostCluster.attrTags;
        this.attrZoneId = rosDedicatedHostCluster.attrZoneId;
    }
}
