import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::EBS::DiskReplicaPairAddition`
 */
export interface RosDiskReplicaPairAdditionProps {
    /**
     * @Property replicaGroupId: The ID of the replication pair-consistent group.
     */
    readonly replicaGroupId: string | ros.IResolvable;
    /**
     * @Property replicaPairId: The ID of the replication pair. You can call the DescribeDiskReplicaPairs operation to query the IDs of existing replication pairs.
     */
    readonly replicaPairId: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::EBS::DiskReplicaPairAddition`
 */
export declare class RosDiskReplicaPairAddition extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EBS::DiskReplicaPairAddition";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ReplicaGroupId: The ID of the replication pair-consistent group.
     */
    readonly attrReplicaGroupId: ros.IResolvable;
    /**
     * @Attribute ReplicaPairId: The ID of the replication pair.
     */
    readonly attrReplicaPairId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property replicaGroupId: The ID of the replication pair-consistent group.
     */
    replicaGroupId: string | ros.IResolvable;
    /**
     * @Property replicaPairId: The ID of the replication pair. You can call the DescribeDiskReplicaPairs operation to query the IDs of existing replication pairs.
     */
    replicaPairId: string | ros.IResolvable;
    /**
     * Create a new `ALIYUN::EBS::DiskReplicaPairAddition`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDiskReplicaPairAdditionProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
