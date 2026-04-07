import * as ros from '@alicloud/ros-cdk-core';
import { RosDedicatedBlockStorageClusters } from './ebs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDedicatedBlockStorageClusters as DedicatedBlockStorageClustersProperty };

/**
 * Properties for defining a `DedicatedBlockStorageClusters`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-dedicatedblockstorageclusters
 */
export interface DedicatedBlockStorageClustersProps {

    /**
     * Property dedicatedBlockStorageClusterId: The ID of the dedicated block storage cluster.
     */
    readonly dedicatedBlockStorageClusterId?: string | ros.IResolvable;

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
 * Represents a `DedicatedBlockStorageClusters`.
 */
export interface IDedicatedBlockStorageClusters extends ros.IResource {
    readonly props: DedicatedBlockStorageClustersProps;

    /**
     * Attribute DedicatedBlockStorageClusterIds: The list of dedicated block storage cluster IDs.
     */
    readonly attrDedicatedBlockStorageClusterIds: ros.IResolvable | string;

    /**
     * Attribute DedicatedBlockStorageClusters: The list of dedicated block storage clusters.
     */
    readonly attrDedicatedBlockStorageClusters: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `DATASOURCE::EBS::DedicatedBlockStorageClusters`, which is used to query dedicated block storage clusters.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDedicatedBlockStorageClusters`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-ebs-dedicatedblockstorageclusters
 */
export class DedicatedBlockStorageClusters extends ros.Resource implements IDedicatedBlockStorageClusters {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DedicatedBlockStorageClustersProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DedicatedBlockStorageClusterIds: The list of dedicated block storage cluster IDs.
     */
    public readonly attrDedicatedBlockStorageClusterIds: ros.IResolvable | string;

    /**
     * Attribute DedicatedBlockStorageClusters: The list of dedicated block storage clusters.
     */
    public readonly attrDedicatedBlockStorageClusters: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DedicatedBlockStorageClustersProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDedicatedBlockStorageClusters = new RosDedicatedBlockStorageClusters(this, id,  {
            resourceGroupId: props.resourceGroupId,
            dedicatedBlockStorageClusterId: props.dedicatedBlockStorageClusterId,
            refreshOptions: props.refreshOptions === undefined || props.refreshOptions === null ? 'Never' : props.refreshOptions,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDedicatedBlockStorageClusters;
        this.attrDedicatedBlockStorageClusterIds = rosDedicatedBlockStorageClusters.attrDedicatedBlockStorageClusterIds;
        this.attrDedicatedBlockStorageClusters = rosDedicatedBlockStorageClusters.attrDedicatedBlockStorageClusters;
    }
}
