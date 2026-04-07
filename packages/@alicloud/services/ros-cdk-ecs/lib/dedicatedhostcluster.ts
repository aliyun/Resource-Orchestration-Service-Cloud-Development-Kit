import * as ros from '@alicloud/ros-cdk-core';
import { RosDedicatedHostCluster } from './ecs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDedicatedHostCluster as DedicatedHostClusterProperty };

/**
 * Properties for defining a `DedicatedHostCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-dedicatedhostcluster
 */
export interface DedicatedHostClusterProps {

    /**
     * Property dedicatedHostClusterName: The name of the host group. It must be 2 to 128 characters in length and can contain letters, digits, colons (:), underscores (_), periods (.), and hyphens (-).
     */
    readonly dedicatedHostClusterName?: string | ros.IResolvable;

    /**
     * Property description: The description of the host group. It must be 2 to 256 characters in length, and cannot start with http:\/\/ or https:\/\/.
     */
    readonly description?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The resource group ID of the host group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property tags: Tags of dedicated host cluster.
     */
    readonly tags?: RosDedicatedHostCluster.TagsProperty[];

    /**
     * Property zoneId: The zone ID of the host group.
     */
    readonly zoneId?: string | ros.IResolvable;
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
     * Attribute DedicatedHostClusterName: The name of the host group.
     */
    readonly attrDedicatedHostClusterName: ros.IResolvable | string;

    /**
     * Attribute Description: The description of the host group.
     */
    readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The resource group ID of the host group.
     */
    readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute Tags: The tag of the dedicated host cluster.
     */
    readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute ZoneId: The zone ID of the host group.
     */
    readonly attrZoneId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::ECS::DedicatedHostCluster`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDedicatedHostCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-dedicatedhostcluster
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
     * Attribute DedicatedHostClusterName: The name of the host group.
     */
    public readonly attrDedicatedHostClusterName: ros.IResolvable | string;

    /**
     * Attribute Description: The description of the host group.
     */
    public readonly attrDescription: ros.IResolvable | string;

    /**
     * Attribute ResourceGroupId: The resource group ID of the host group.
     */
    public readonly attrResourceGroupId: ros.IResolvable | string;

    /**
     * Attribute Tags: The tag of the dedicated host cluster.
     */
    public readonly attrTags: ros.IResolvable | string;

    /**
     * Attribute ZoneId: The zone ID of the host group.
     */
    public readonly attrZoneId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DedicatedHostClusterProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDedicatedHostCluster = new RosDedicatedHostCluster(this, id,  {
            description: props.description,
            dedicatedHostClusterName: props.dedicatedHostClusterName,
            resourceGroupId: props.resourceGroupId,
            zoneId: props.zoneId,
            tags: props.tags,
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
