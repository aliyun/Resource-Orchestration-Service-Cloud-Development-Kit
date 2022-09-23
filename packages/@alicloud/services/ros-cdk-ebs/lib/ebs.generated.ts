// Generated from the AliCloud ROS Resource Specification

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
 * Determine whether the given properties match those of a `RosDiskReplicaPairAdditionProps`
 *
 * @param properties - the TypeScript properties of a `RosDiskReplicaPairAdditionProps`
 *
 * @returns the result of the validation.
 */
function RosDiskReplicaPairAdditionPropsValidator(properties: any): ros.ValidationResult {
    if (!ros.canInspect(properties)) { return ros.VALIDATION_SUCCESS; }
    const errors = new ros.ValidationResults();
    errors.collect(ros.propertyValidator('replicaPairId', ros.requiredValidator)(properties.replicaPairId));
    errors.collect(ros.propertyValidator('replicaPairId', ros.validateString)(properties.replicaPairId));
    errors.collect(ros.propertyValidator('replicaGroupId', ros.requiredValidator)(properties.replicaGroupId));
    errors.collect(ros.propertyValidator('replicaGroupId', ros.validateString)(properties.replicaGroupId));
    return errors.wrap('supplied properties not correct for "RosDiskReplicaPairAdditionProps"');
}

/**
 * Renders the AliCloud ROS Resource properties of an `ALIYUN::EBS::DiskReplicaPairAddition` resource
 *
 * @param properties - the TypeScript properties of a `RosDiskReplicaPairAdditionProps`
 *
 * @returns the AliCloud ROS Resource properties of an `ALIYUN::EBS::DiskReplicaPairAddition` resource.
 */
// @ts-ignore TS6133
function rosDiskReplicaPairAdditionPropsToRosTemplate(properties: any, enableResourcePropertyConstraint: boolean): any {
    if (!ros.canInspect(properties)) { return properties; }
    if(enableResourcePropertyConstraint) {
        RosDiskReplicaPairAdditionPropsValidator(properties).assertSuccess();
    }
    return {
      ReplicaGroupId: ros.stringToRosTemplate(properties.replicaGroupId),
      ReplicaPairId: ros.stringToRosTemplate(properties.replicaPairId),
    };
}

/**
 * A ROS template type:  `ALIYUN::EBS::DiskReplicaPairAddition`
 */
export class RosDiskReplicaPairAddition extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    public static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::EBS::DiskReplicaPairAddition";

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */

    /**
     * @Attribute ReplicaGroupId: The ID of the replication pair-consistent group.
     */
    public readonly attrReplicaGroupId: ros.IResolvable;

    /**
     * @Attribute ReplicaPairId: The ID of the replication pair.
     */
    public readonly attrReplicaPairId: ros.IResolvable;

    public enableResourcePropertyConstraint: boolean;


    /**
     * @Property replicaGroupId: The ID of the replication pair-consistent group.
     */
    public replicaGroupId: string | ros.IResolvable;

    /**
     * @Property replicaPairId: The ID of the replication pair. You can call the DescribeDiskReplicaPairs operation to query the IDs of existing replication pairs.
     */
    public replicaPairId: string | ros.IResolvable;

    /**
     * Create a new `ALIYUN::EBS::DiskReplicaPairAddition`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDiskReplicaPairAdditionProps, enableResourcePropertyConstraint: boolean) {
        super(scope, id, { type: RosDiskReplicaPairAddition.ROS_RESOURCE_TYPE_NAME, properties: props });
        this.attrReplicaGroupId = this.getAtt('ReplicaGroupId');
        this.attrReplicaPairId = this.getAtt('ReplicaPairId');

        this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        this.replicaGroupId = props.replicaGroupId;
        this.replicaPairId = props.replicaPairId;
    }


    protected get rosProperties(): { [key: string]: any }  {
        return {
            replicaGroupId: this.replicaGroupId,
            replicaPairId: this.replicaPairId,
        };
    }
    protected renderProperties(props: {[key: string]: any}): { [key: string]: any }  {
        return rosDiskReplicaPairAdditionPropsToRosTemplate(props, this.enableResourcePropertyConstraint);
    }
}
