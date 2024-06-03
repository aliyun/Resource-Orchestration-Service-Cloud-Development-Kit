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
}

/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::ECS::DedicatedHostCluster`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDedicatedHostCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ecs-dedicatedhostcluster
 */
export class DedicatedHostCluster extends ros.Resource {
    protected scope: ros.Construct;
    protected id: string;
    protected props: DedicatedHostClusterProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DedicatedHostClusterId: Dedicated host cluster id.
     */
    public readonly attrDedicatedHostClusterId: ros.IResolvable;

    /**
     * Attribute DedicatedHostClusterName: The name of the dedicated host cluster.
     */
    public readonly attrDedicatedHostClusterName: ros.IResolvable;

    /**
     * Attribute Description: The description of the dedicated host cluster.
     */
    public readonly attrDescription: ros.IResolvable;

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the dedicated host cluster belongs.
     */
    public readonly attrResourceGroupId: ros.IResolvable;

    /**
     * Attribute Tags: The tags of the dedicated host cluster.
     */
    public readonly attrTags: ros.IResolvable;

    /**
     * Attribute ZoneId: The zone ID of the dedicated host cluster.
     */
    public readonly attrZoneId: ros.IResolvable;

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
