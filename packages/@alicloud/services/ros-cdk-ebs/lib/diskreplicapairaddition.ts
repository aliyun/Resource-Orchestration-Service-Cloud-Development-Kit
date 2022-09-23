import * as ros from '@alicloud/ros-cdk-core';
import { RosDiskReplicaPairAddition } from './ebs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDiskReplicaPairAddition as DiskReplicaPairAdditionProperty };

/**
 * Properties for defining a `ALIYUN::EBS::DiskReplicaPairAddition`
 */
export interface DiskReplicaPairAdditionProps {

    /**
     * Property replicaGroupId: The ID of the replication pair-consistent group.
     */
    readonly replicaGroupId: string | ros.IResolvable;

    /**
     * Property replicaPairId: The ID of the replication pair. You can call the DescribeDiskReplicaPairs operation to query the IDs of existing replication pairs.
     */
    readonly replicaPairId: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `ALIYUN::EBS::DiskReplicaPairAddition`
 */
export class DiskReplicaPairAddition extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute ReplicaGroupId: The ID of the replication pair-consistent group.
     */
    public readonly attrReplicaGroupId: ros.IResolvable;

    /**
     * Attribute ReplicaPairId: The ID of the replication pair.
     */
    public readonly attrReplicaPairId: ros.IResolvable;

    /**
     * Create a new `ALIYUN::EBS::DiskReplicaPairAddition`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DiskReplicaPairAdditionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosDiskReplicaPairAddition = new RosDiskReplicaPairAddition(this, id,  {
            replicaPairId: props.replicaPairId,
            replicaGroupId: props.replicaGroupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDiskReplicaPairAddition;
        this.attrReplicaGroupId = rosDiskReplicaPairAddition.attrReplicaGroupId;
        this.attrReplicaPairId = rosDiskReplicaPairAddition.attrReplicaPairId;
    }
}
