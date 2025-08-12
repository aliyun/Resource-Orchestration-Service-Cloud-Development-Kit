import * as ros from '@alicloud/ros-cdk-core';
import { RosDedicatedBlockStorageCluster } from './ebs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDedicatedBlockStorageCluster as DedicatedBlockStorageClusterProperty };

/**
 * Properties for defining a `DedicatedBlockStorageCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-dedicatedblockstoragecluster
 */
export interface DedicatedBlockStorageClusterProps {

    /**
     * Property azone: The ID of the zone in which to create the dedicated block storage cluster.
     */
    readonly azone: string | ros.IResolvable;

    /**
     * Property capacity: The capacity of the dedicated block storage cluster. Valid values: 61440 to 2334720. Unit: GiB. 2,334,720 GiB is equal to 2,280 TiB. The capacity increases in a minimum increment of 12,288 GiB.
     */
    readonly capacity: number | ros.IResolvable;

    /**
     * Property dbscName: The name of the dedicated block storage cluster.
     */
    readonly dbscName: string | ros.IResolvable;

    /**
     * Property period: The subscription duration of the dedicated block storage cluster. Valid values: 6, 7, 8, 9, 10, 11, 12, 24, and 36.
     */
    readonly period: number | ros.IResolvable;

    /**
     * Property periodUnit: The unit of the subscription duration specified by Period. Set the value to Month.
     */
    readonly periodUnit: string | ros.IResolvable;

    /**
     * Property type: The type of the dedicated block storage cluster. Valid values: 
     * Standard: basic dedicated block storage cluster. Enterprise SSDs (ESSDs) at performance level 0 (PL0 ESSDs) can be created in basic dedicated block storage clusters.
     * Premium: performance dedicated block storage cluster. ESSDs at performance level 1 (PL1 ESSDs) can be created in performance dedicated block storage clusters.
     * Default value: Premium.
     */
    readonly type: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group to which to assign the dedicated block storage cluster.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property tag: Tags of dedicated block storage cluster.
     */
    readonly tag?: Array<ros.RosTag | ros.IResolvable> | ros.IResolvable;
}

/**
 * Represents a `DedicatedBlockStorageCluster`.
 */
export interface IDedicatedBlockStorageCluster extends ros.IResource {
    readonly props: DedicatedBlockStorageClusterProps;

    /**
     * Attribute DedicatedBlockStorageClusterId: The ID of the dedicated block storage cluster.
     */
    readonly attrDedicatedBlockStorageClusterId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EBS::DedicatedBlockStorageCluster`, which is used to create a dedicated block storage cluster.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDedicatedBlockStorageCluster`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-dedicatedblockstoragecluster
 */
export class DedicatedBlockStorageCluster extends ros.Resource implements IDedicatedBlockStorageCluster {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DedicatedBlockStorageClusterProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute DedicatedBlockStorageClusterId: The ID of the dedicated block storage cluster.
     */
    public readonly attrDedicatedBlockStorageClusterId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DedicatedBlockStorageClusterProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDedicatedBlockStorageCluster = new RosDedicatedBlockStorageCluster(this, id,  {
            azone: props.azone,
            type: props.type,
            resourceGroupId: props.resourceGroupId,
            capacity: props.capacity,
            period: props.period,
            tag: props.tag,
            dbscName: props.dbscName,
            periodUnit: props.periodUnit,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDedicatedBlockStorageCluster;
        this.attrDedicatedBlockStorageClusterId = rosDedicatedBlockStorageCluster.attrDedicatedBlockStorageClusterId;
    }
}
