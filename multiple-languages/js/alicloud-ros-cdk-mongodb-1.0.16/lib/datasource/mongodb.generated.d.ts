import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `DATASOURCE::MONGODB::InstanceClasses`
 */
export interface RosInstanceClassesProps {
    /**
     * @Property dbType: The database engine type of the instance.
     * normal: replica set instance
     * sharding: sharded cluster instance
     */
    readonly dbType?: string | ros.IResolvable;
    /**
     * @Property instanceChargeType: The billing method of the instance. Default value: PostPaid. Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     */
    readonly instanceChargeType?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property zoneId: The zone ID of the instance. You can call the DescribeRegions operation to query the most recent zone list.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::MONGODB::InstanceClasses`
 */
export declare class RosInstanceClasses extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::MONGODB::InstanceClasses";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute InstanceClassIds: The list of The instance class Ids.
     */
    readonly attrInstanceClassIds: ros.IResolvable;
    /**
     * @Attribute InstanceClasses: The list of The instance classes.
     */
    readonly attrInstanceClasses: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbType: The database engine type of the instance.
     * normal: replica set instance
     * sharding: sharded cluster instance
     */
    dbType: string | ros.IResolvable | undefined;
    /**
     * @Property instanceChargeType: The billing method of the instance. Default value: PostPaid. Valid values:
     * PrePaid: subscription
     * PostPaid: pay-as-you-go
     */
    instanceChargeType: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: The zone ID of the instance. You can call the DescribeRegions operation to query the most recent zone list.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::MONGODB::InstanceClasses`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceClassesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
/**
 * Properties for defining a `DATASOURCE::MONGODB::Instances`
 */
export interface RosInstancesProps {
    /**
     * @Property chargeType: The billing method of the instance. Valid values:
     * PostPaid: pay-as-you-go
     * PrePaid: subscription
     */
    readonly chargeType?: string | ros.IResolvable;
    /**
     * @Property connectionDomain: The endpoint of the node. You can call the DescribeDBInstanceAttribute operation to query the endpoint of the node.
     */
    readonly connectionDomain?: string | ros.IResolvable;
    /**
     * @Property dbInstanceClass: The instance type. For more information about valid values, see Instance types.
     */
    readonly dbInstanceClass?: string | ros.IResolvable;
    /**
     * @Property dbInstanceDescription: The description of the instance.
     */
    readonly dbInstanceDescription?: string | ros.IResolvable;
    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    readonly dbInstanceId?: string | ros.IResolvable;
    /**
     * @Property dbInstanceStatus: The state of the instance. For more information about valid values, see Instance states.
     */
    readonly dbInstanceStatus?: string | ros.IResolvable;
    /**
     * @Property dbInstanceType: The category of the instance. Default value: replicate. Valid values:
     * sharding: sharded cluster instance
     * replicate: replica set or standalone instance
     * Note
     * To query the list of sharded cluster instances, you must set the parameter to sharding.
     * This operation displays the list of replica set and standalone instances when the parameter uses the default value replicate.
     */
    readonly dbInstanceType?: string | ros.IResolvable;
    /**
     * @Property engineVersion: The database engine version of the instance. Valid values:
     * 5.0
     * 4.4
     * 4.2
     * 4.0
     * 3.4
     */
    readonly engineVersion?: string | ros.IResolvable;
    /**
     * @Property expired: Specifies whether the instance expires. Valid values:
     * true: The instance expires.
     * false: The instance does not expire.
     */
    readonly expired?: boolean | ros.IResolvable;
    /**
     * @Property networkType: The network type of the instance. Valid values:
     * Classic
     * Vpc
     */
    readonly networkType?: string | ros.IResolvable;
    /**
     * @Property replicationFactor: The number of nodes in a replica set instance. Valid values: 3, 5, and 7.
     */
    readonly replicationFactor?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags of instance.
     */
    readonly tags?: RosInstances.TagsProperty[];
    /**
     * @Property vpcId: The VPC ID of the instance.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The vSwitch ID of the instance.
     */
    readonly vSwitchId?: string | ros.IResolvable;
    /**
     * @Property zoneId: The zone ID of the instance. You can call the DescribeRegions operation to query the most recent zone list.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `DATASOURCE::MONGODB::Instances`
 */
export declare class RosInstances extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "DATASOURCE::MONGODB::Instances";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute InstanceIds: The list of The instance Ids.
     */
    readonly attrInstanceIds: ros.IResolvable;
    /**
     * @Attribute Instances: The list of The instances.
     */
    readonly attrInstances: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property chargeType: The billing method of the instance. Valid values:
     * PostPaid: pay-as-you-go
     * PrePaid: subscription
     */
    chargeType: string | ros.IResolvable | undefined;
    /**
     * @Property connectionDomain: The endpoint of the node. You can call the DescribeDBInstanceAttribute operation to query the endpoint of the node.
     */
    connectionDomain: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceClass: The instance type. For more information about valid values, see Instance types.
     */
    dbInstanceClass: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceDescription: The description of the instance.
     */
    dbInstanceDescription: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceId: The ID of the instance.
     */
    dbInstanceId: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceStatus: The state of the instance. For more information about valid values, see Instance states.
     */
    dbInstanceStatus: string | ros.IResolvable | undefined;
    /**
     * @Property dbInstanceType: The category of the instance. Default value: replicate. Valid values:
     * sharding: sharded cluster instance
     * replicate: replica set or standalone instance
     * Note
     * To query the list of sharded cluster instances, you must set the parameter to sharding.
     * This operation displays the list of replica set and standalone instances when the parameter uses the default value replicate.
     */
    dbInstanceType: string | ros.IResolvable | undefined;
    /**
     * @Property engineVersion: The database engine version of the instance. Valid values:
     * 5.0
     * 4.4
     * 4.2
     * 4.0
     * 3.4
     */
    engineVersion: string | ros.IResolvable | undefined;
    /**
     * @Property expired: Specifies whether the instance expires. Valid values:
     * true: The instance expires.
     * false: The instance does not expire.
     */
    expired: boolean | ros.IResolvable | undefined;
    /**
     * @Property networkType: The network type of the instance. Valid values:
     * Classic
     * Vpc
     */
    networkType: string | ros.IResolvable | undefined;
    /**
     * @Property replicationFactor: The number of nodes in a replica set instance. Valid values: 3, 5, and 7.
     */
    replicationFactor: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags of instance.
     */
    tags: RosInstances.TagsProperty[] | undefined;
    /**
     * @Property vpcId: The VPC ID of the instance.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The vSwitch ID of the instance.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: The zone ID of the instance. You can call the DescribeRegions operation to query the most recent zone list.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * Create a new `DATASOURCE::MONGODB::Instances`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstancesProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosInstances {
    /**
     * @stability external
     */
    interface TagsProperty {
        /**
         * @Property value: undefined
         */
        readonly value?: string | ros.IResolvable;
        /**
         * @Property key: undefined
         */
        readonly key: string | ros.IResolvable;
    }
}
