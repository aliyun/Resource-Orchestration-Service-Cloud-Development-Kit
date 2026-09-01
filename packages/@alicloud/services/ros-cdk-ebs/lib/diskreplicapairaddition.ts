import * as ros from '@alicloud/ros-cdk-core';
import { RosDiskReplicaPairAddition } from './ebs.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosDiskReplicaPairAddition as DiskReplicaPairAdditionProperty };

/**
 * Properties for defining a `DiskReplicaPairAddition`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicapairaddition
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
 * Represents a `DiskReplicaPairAddition`.
 */
export interface IDiskReplicaPairAddition extends ros.IResource {
    readonly props: DiskReplicaPairAdditionProps;

    /**
     * Attribute ReplicaGroupId: The ID of the replication pair-consistent group.
     */
    readonly attrReplicaGroupId: ros.IResolvable | string;

    /**
     * Attribute ReplicaPairId: The ID of the replication pair.
     */
    readonly attrReplicaPairId: ros.IResolvable | string;
}
/**
 * This class encapsulates and extends the ROS resource type `ALIYUN::EBS::DiskReplicaPairAddition`.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosDiskReplicaPairAddition`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicapairaddition
 */
export class DiskReplicaPairAddition extends ros.Resource implements IDiskReplicaPairAddition {
    protected scope: ros.Construct;
    protected id: string;
    public readonly props: DiskReplicaPairAdditionProps;
    protected enableResourcePropertyConstraint: boolean;

    /**
     * Attribute ReplicaGroupId: The ID of the replication pair-consistent group.
     */
    public readonly attrReplicaGroupId: ros.IResolvable | string;

    /**
     * Attribute ReplicaPairId: The ID of the replication pair.
     */
    public readonly attrReplicaPairId: ros.IResolvable | string;

    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: DiskReplicaPairAdditionProps, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);
        this.scope = scope;
        this.id = id;
        this.props = props;
        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;

        const rosDiskReplicaPairAddition = new RosDiskReplicaPairAddition(this, id,  {
            replicaPairId: props.replicaPairId,
            replicaGroupId: props.replicaGroupId,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosDiskReplicaPairAddition;
        this.attrReplicaGroupId = rosDiskReplicaPairAddition.attrReplicaGroupId;
        this.attrReplicaPairId = rosDiskReplicaPairAddition.attrReplicaPairId;
    }
}
