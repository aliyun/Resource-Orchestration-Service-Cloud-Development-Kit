import * as ros from '@alicloud/ros-cdk-core';
import { RosInstances } from './mongodb.generated';
// Generated from the AliCloud ROS Resource Specification
export { RosInstances as InstancesProperty };

/**
 * Properties for defining a `DATASOURCE::MONGODB::Instances`
 */
export interface InstancesProps {

    /**
     * Property chargeType: The billing method of the instance. Valid values:
     * PostPaid: pay-as-you-go
     * PrePaid: subscription
     */
    readonly chargeType?: string | ros.IResolvable;

    /**
     * Property connectionDomain: The endpoint of the node. You can call the DescribeDBInstanceAttribute operation to query the endpoint of the node.
     */
    readonly connectionDomain?: string | ros.IResolvable;

    /**
     * Property dbInstanceClass: The instance type. For more information about valid values, see Instance types.
     */
    readonly dbInstanceClass?: string | ros.IResolvable;

    /**
     * Property dbInstanceDescription: The description of the instance.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;

    /**
     * Property dbInstanceId: The ID of the instance.
     */
    readonly dbInstanceId?: string | ros.IResolvable;

    /**
     * Property dbInstanceStatus: The state of the instance. For more information about valid values, see Instance states.
     */
    readonly dbInstanceStatus?: string | ros.IResolvable;

    /**
     * Property dbInstanceType: The category of the instance. Default value: replicate. Valid values:
     * sharding: sharded cluster instance
     * replicate: replica set or standalone instance
     * Note
     * To query the list of sharded cluster instances, you must set the parameter to sharding.
     * This operation displays the list of replica set and standalone instances when the parameter uses the default value replicate.
     */
    readonly dbInstanceType?: string | ros.IResolvable;

    /**
     * Property engineVersion: The database engine version of the instance. Valid values:
     * 5.0
     * 4.4
     * 4.2
     * 4.0
     * 3.4
     */
    readonly engineVersion?: string | ros.IResolvable;

    /**
     * Property expired: Specifies whether the instance expires. Valid values:
     * true: The instance expires.
     * false: The instance does not expire.
     */
    readonly expired?: boolean | ros.IResolvable;

    /**
     * Property networkType: The network type of the instance. Valid values:
     * Classic
     * Vpc
     */
    readonly networkType?: string | ros.IResolvable;

    /**
     * Property replicationFactor: The number of nodes in a replica set instance. Valid values: 3, 5, and 7.
     */
    readonly replicationFactor?: string | ros.IResolvable;

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;

    /**
     * Property tags: Tags of instance.
     */
    readonly tags?: RosInstances.TagsProperty[];

    /**
     * Property vpcId: The VPC ID of the instance.
     */
    readonly vpcId?: string | ros.IResolvable;

    /**
     * Property vSwitchId: The vSwitch ID of the instance.
     */
    readonly vSwitchId?: string | ros.IResolvable;

    /**
     * Property zoneId: The zone ID of the instance. You can call the DescribeRegions operation to query the most recent zone list.
     */
    readonly zoneId?: string | ros.IResolvable;
}

/**
 * A ROS resource type:  `DATASOURCE::MONGODB::Instances`
 */
export class Instances extends ros.Resource {

    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource, which will be assigned to ROS resource.
     */

    /**
     * Attribute InstanceIds: The list of The instance Ids.
     */
    public readonly attrInstanceIds: ros.IResolvable;

    /**
     * Attribute Instances: The list of The instances.
     */
    public readonly attrInstances: ros.IResolvable;

    /**
     * Create a new `DATASOURCE::MONGODB::Instances`.
     *
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: InstancesProps = {}, enableResourcePropertyConstraint:boolean = true) {
        super(scope, id);

        const rosInstances = new RosInstances(this, id,  {
            engineVersion: props.engineVersion,
            replicationFactor: props.replicationFactor,
            dbInstanceStatus: props.dbInstanceStatus,
            zoneId: props.zoneId,
            resourceGroupId: props.resourceGroupId,
            dbInstanceClass: props.dbInstanceClass,
            vSwitchId: props.vSwitchId,
            dbInstanceType: props.dbInstanceType === undefined || props.dbInstanceType === null ? 'replicate' : props.dbInstanceType,
            expired: props.expired,
            connectionDomain: props.connectionDomain,
            vpcId: props.vpcId,
            dbInstanceId: props.dbInstanceId,
            chargeType: props.chargeType === undefined || props.chargeType === null ? 'PostPaid' : props.chargeType,
            networkType: props.networkType,
            dbInstanceDescription: props.dbInstanceDescription,
            tags: props.tags,
        }, enableResourcePropertyConstraint && this.stack.enableResourcePropertyConstraint);
        this.resource = rosInstances;
        this.attrInstanceIds = rosInstances.attrInstanceIds;
        this.attrInstances = rosInstances.attrInstances;
    }
}
