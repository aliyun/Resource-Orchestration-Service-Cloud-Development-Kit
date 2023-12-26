import * as ros from '@alicloud/ros-cdk-core';
import { RosInstances } from './mongodb.generated';
export { RosInstances as InstancesProperty };
/**
 * Properties for defining a `Instances`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mongodb-instances
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
 * This class encapsulates and extends the ROS resource type `DATASOURCE::MONGODB::Instances`, which is used to query the details of ApsaraDB for MongoDB instances.
 * @Note This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosInstances`for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-mongodb-instances
 */
export declare class Instances extends ros.Resource {
    /**
     * Attribute InstanceIds: The list of The instance Ids.
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * Attribute Instances: The list of The instances.
     */
    readonly attrInstances: ros.IResolvable;
    /**
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props?: InstancesProps, enableResourcePropertyConstraint?: boolean);
}
