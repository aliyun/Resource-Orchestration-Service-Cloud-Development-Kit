import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `ALIYUN::REDIS::Account`
 */
export interface RosAccountProps {
    /**
     * @Property accountName: The name of the account. The name must start with a lowercase letter and can contain
     * lowercase letters, digits, and underscores (_). The name can be 1 to 16 characters
     * in length.
     */
    readonly accountName: string | ros.IResolvable;
    /**
     * @Property accountPassword: The password of the account. The password can be 8 to 32 characters in length and
     * must contain at least three types of the following characters: uppercase letters,
     * lowercase letters, digits, and special characters. Special characters include ! at signs (@), number signs (#), dollar signs ($), percent signs (%), carets (^),
     * ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+),
     * hyphens (-), and equal signs (=).
     */
    readonly accountPassword: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the instance for which you want to create the account.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property accountDescription: The description of the account.
     * The description must start with a letter, and cannot start with http:// or https://.
     * The description can contain letters, underscores (_), hyphens (-), and digits.
     * It can be 2 to 256 characters in length.
     */
    readonly accountDescription?: string | ros.IResolvable;
    /**
     * @Property accountPrivilege: The permission of the account. Valid values:
     * RoleReadOnly
     * RoleReadWrite (default value)
     * RoleRepl
     * Note In addition to reading data from and writing data to the ApsaraDB for Redis instance,
     * an account with the RoleRepl permission can run the SYNC and PSYNC commands. The RoleRepl
     * permission can be granted to an account only in an ApsaraDB for Redis instance of
     * the standard edition in Redis 4.0.
     */
    readonly accountPrivilege?: string | ros.IResolvable;
    /**
     * @Property accountType: The type of the account. Set this parameter to Normal.
     */
    readonly accountType?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::REDIS::Account`
 */
export declare class RosAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::REDIS::Account";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute AccountName: The name of the account.
     */
    readonly attrAccountName: ros.IResolvable;
    /**
     * @Attribute InstanceId: The name of the instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accountName: The name of the account. The name must start with a lowercase letter and can contain
     * lowercase letters, digits, and underscores (_). The name can be 1 to 16 characters
     * in length.
     */
    accountName: string | ros.IResolvable;
    /**
     * @Property accountPassword: The password of the account. The password can be 8 to 32 characters in length and
     * must contain at least three types of the following characters: uppercase letters,
     * lowercase letters, digits, and special characters. Special characters include ! at signs (@), number signs (#), dollar signs ($), percent signs (%), carets (^),
     * ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+),
     * hyphens (-), and equal signs (=).
     */
    accountPassword: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of the instance for which you want to create the account.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property accountDescription: The description of the account.
     * The description must start with a letter, and cannot start with http:// or https://.
     * The description can contain letters, underscores (_), hyphens (-), and digits.
     * It can be 2 to 256 characters in length.
     */
    accountDescription: string | ros.IResolvable | undefined;
    /**
     * @Property accountPrivilege: The permission of the account. Valid values:
     * RoleReadOnly
     * RoleReadWrite (default value)
     * RoleRepl
     * Note In addition to reading data from and writing data to the ApsaraDB for Redis instance,
     * an account with the RoleRepl permission can run the SYNC and PSYNC commands. The RoleRepl
     * permission can be granted to an account only in an ApsaraDB for Redis instance of
     * the standard edition in Redis 4.0.
     */
    accountPrivilege: string | ros.IResolvable | undefined;
    /**
     * @Property accountType: The type of the account. Set this parameter to Normal.
     */
    accountType: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::REDIS::Account`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosAccountProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `ALIYUN::REDIS::Instance`
 */
export interface RosInstanceProps {
    /**
     * @Property autoRenewDuration: The auto-renewal period. Valid values: 1 to 12.
     *  When the instance is about to expire, the instance is automatically renewed
     * based on the number of months specified by this parameter.
     * Note This parameter is valid only when ChargeType is set to PrePaid.
     */
    readonly autoRenewDuration?: number | ros.IResolvable;
    /**
     * @Property backupPolicy: Backup policy
     */
    readonly backupPolicy?: RosInstance.BackupPolicyProperty | ros.IResolvable;
    /**
     * @Property chargeType: The billing method of the ApsaraDB for Redis instance.
     */
    readonly chargeType?: string | ros.IResolvable;
    /**
     * @Property connections: Connection address
     */
    readonly connections?: RosInstance.ConnectionsProperty | ros.IResolvable;
    /**
     * @Property deletionForce: Whether destroy instance when it is in recycle. Default is false
     */
    readonly deletionForce?: boolean | ros.IResolvable;
    /**
     * @Property engineVersion: Engine version. Supported values: 2.8, 4.0 and 5.0.
     */
    readonly engineVersion?: string | ros.IResolvable;
    /**
     * @Property evictionPolicy: The eviction policy of cache data storage.
     */
    readonly evictionPolicy?: string | ros.IResolvable;
    /**
     * @Property instanceClass: Redis instance type. Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
     */
    readonly instanceClass?: string | ros.IResolvable;
    /**
     * @Property instanceMaintainTime: Instance maintain time.
     */
    readonly instanceMaintainTime?: RosInstance.InstanceMaintainTimeProperty | ros.IResolvable;
    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly instanceName?: string | ros.IResolvable;
    /**
     * @Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers
     */
    readonly password?: string | ros.IResolvable;
    /**
     * @Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, 60 Unit in month.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * @Property productType: Product type. Valid values:Local: Community Edition(Local) or Enhanced Edition(Local)Tair_rdb: Performance Enhanced(Cloud Disk)Tair_scm: Persistent Memory(Cloud Disk)Tair_essd: Capacity Storage(Cloud Disk)OnECS: Community Edition(Cloud Disk)
     */
    readonly productType?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property secondaryZoneId: The secondary zone ID of the instance.
     */
    readonly secondaryZoneId?: string | ros.IResolvable;
    /**
     * @Property securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * @Property sslEnabled: Modifies the SSL status. Valid values:
     * Disable: disables SSL encryption.
     * Enable: enables SSL encryption.
     * Update: updates the SSL certificate.
     */
    readonly sslEnabled?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to redis. Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosInstance.TagsProperty[];
    /**
     * @Property vpcId: The VPC id to create ecs instance.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
     * - true: enables password free.
     * - false: disables password free.
     */
    readonly vpcPasswordFree?: boolean | ros.IResolvable;
    /**
     * @Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    readonly vSwitchId?: string | ros.IResolvable;
    /**
     * @Property zoneId: The zone id of input region.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::REDIS::Instance`
 */
export declare class RosInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::REDIS::Instance";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ArchitectureType: The architecture.
     */
    readonly attrArchitectureType: ros.IResolvable;
    /**
     * @Attribute Bandwidth: The bandwidth of the instance. Unit: Mbit/s.
     */
    readonly attrBandwidth: ros.IResolvable;
    /**
     * @Attribute Capacity: The storage capacity of the instance. Unit: MB.
     */
    readonly attrCapacity: ros.IResolvable;
    /**
     * @Attribute ChargeType: The billing method of the instance.
     */
    readonly attrChargeType: ros.IResolvable;
    /**
     * @Attribute ClassicInnerConnectionPort: The classic inner connection port of the instance
     */
    readonly attrClassicInnerConnectionPort: ros.IResolvable;
    /**
     * @Attribute ClassicInnerConnectionString: The classic inner connection string of the instance
     */
    readonly attrClassicInnerConnectionString: ros.IResolvable;
    /**
     * @Attribute ConnectionDomain: Connection domain of created instance.
     */
    readonly attrConnectionDomain: ros.IResolvable;
    /**
     * @Attribute Connections: The maximum number of connections supported by the instance.
     */
    readonly attrConnections: ros.IResolvable;
    /**
     * @Attribute DirectConnectionPort: The direct connection port of the instance
     */
    readonly attrDirectConnectionPort: ros.IResolvable;
    /**
     * @Attribute DirectConnectionString: The direct connection string of the instance
     */
    readonly attrDirectConnectionString: ros.IResolvable;
    /**
     * @Attribute EngineVersion: The engine version of the instance.
     */
    readonly attrEngineVersion: ros.IResolvable;
    /**
     * @Attribute HasRenewChangeOrder: Indicates whether the Alibaba Cloud account has pending renewal or scaling orders
     */
    readonly attrHasRenewChangeOrder: ros.IResolvable;
    /**
     * @Attribute InstanceClass: Redis instance type.
     */
    readonly attrInstanceClass: ros.IResolvable;
    /**
     * @Attribute InstanceId: Instance id of created redis instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute InstanceName: Name of created redis instance.
     */
    readonly attrInstanceName: ros.IResolvable;
    /**
     * @Attribute InstanceType: The engine type of the instance.
     */
    readonly attrInstanceType: ros.IResolvable;
    /**
     * @Attribute NetworkType: The network type.
     */
    readonly attrNetworkType: ros.IResolvable;
    /**
     * @Attribute NodeType: The type of node.
     */
    readonly attrNodeType: ros.IResolvable;
    /**
     * @Attribute OrderId: Order Id of created instance.
     */
    readonly attrOrderId: ros.IResolvable;
    /**
     * @Attribute PackageType: The plan type.
     */
    readonly attrPackageType: ros.IResolvable;
    /**
     * @Attribute Port: Port of created instance.
     */
    readonly attrPort: ros.IResolvable;
    /**
     * @Attribute PrivateIp: The internal IP address of the instance.
     */
    readonly attrPrivateIp: ros.IResolvable;
    /**
     * @Attribute PublicConnectionPort: The public connection port of the instance
     */
    readonly attrPublicConnectionPort: ros.IResolvable;
    /**
     * @Attribute PublicConnectionString: The public connection string of the instance
     */
    readonly attrPublicConnectionString: ros.IResolvable;
    /**
     * @Attribute QPS: The queries per second (QPS) supported by the instance.
     */
    readonly attrQps: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute VSwitchId: The ID of the vSwitch.
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * @Attribute VpcId: The ID of the VPC.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * @Attribute VpcPrivateConnectionPort: The vpc private connection port of the instance
     */
    readonly attrVpcPrivateConnectionPort: ros.IResolvable;
    /**
     * @Attribute VpcPrivateConnectionString: The vpc private connection string of the instance
     */
    readonly attrVpcPrivateConnectionString: ros.IResolvable;
    /**
     * @Attribute ZoneId: The ID of the zone.
     */
    readonly attrZoneId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property autoRenewDuration: The auto-renewal period. Valid values: 1 to 12.
     *  When the instance is about to expire, the instance is automatically renewed
     * based on the number of months specified by this parameter.
     * Note This parameter is valid only when ChargeType is set to PrePaid.
     */
    autoRenewDuration: number | ros.IResolvable | undefined;
    /**
     * @Property backupPolicy: Backup policy
     */
    backupPolicy: RosInstance.BackupPolicyProperty | ros.IResolvable | undefined;
    /**
     * @Property chargeType: The billing method of the ApsaraDB for Redis instance.
     */
    chargeType: string | ros.IResolvable | undefined;
    /**
     * @Property connections: Connection address
     */
    connections: RosInstance.ConnectionsProperty | ros.IResolvable | undefined;
    /**
     * @Property deletionForce: Whether destroy instance when it is in recycle. Default is false
     */
    deletionForce: boolean | ros.IResolvable | undefined;
    /**
     * @Property engineVersion: Engine version. Supported values: 2.8, 4.0 and 5.0.
     */
    engineVersion: string | ros.IResolvable | undefined;
    /**
     * @Property evictionPolicy: The eviction policy of cache data storage.
     */
    evictionPolicy: string | ros.IResolvable | undefined;
    /**
     * @Property instanceClass: Redis instance type. Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
     */
    instanceClass: string | ros.IResolvable | undefined;
    /**
     * @Property instanceMaintainTime: Instance maintain time.
     */
    instanceMaintainTime: RosInstance.InstanceMaintainTimeProperty | ros.IResolvable | undefined;
    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    instanceName: string | ros.IResolvable | undefined;
    /**
     * @Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers
     */
    password: string | ros.IResolvable | undefined;
    /**
     * @Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, 60 Unit in month.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property productType: Product type. Valid values:Local: Community Edition(Local) or Enhanced Edition(Local)Tair_rdb: Performance Enhanced(Cloud Disk)Tair_scm: Persistent Memory(Cloud Disk)Tair_essd: Capacity Storage(Cloud Disk)OnECS: Community Edition(Cloud Disk)
     */
    productType: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property secondaryZoneId: The secondary zone ID of the instance.
     */
    secondaryZoneId: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
     */
    securityGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property sslEnabled: Modifies the SSL status. Valid values:
     * Disable: disables SSL encryption.
     * Enable: enables SSL encryption.
     * Update: updates the SSL certificate.
     */
    sslEnabled: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to redis. Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosInstance.TagsProperty[] | undefined;
    /**
     * @Property vpcId: The VPC id to create ecs instance.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
     * - true: enables password free.
     * - false: disables password free.
     */
    vpcPasswordFree: boolean | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: The zone id of input region.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::REDIS::Instance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface BackupPolicyProperty {
        /**
         * @Property preferredBackupPeriod: The backup cycle. Valid values: Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday
         */
        readonly preferredBackupPeriod: string | ros.IResolvable;
        /**
         * @Property preferredBackupTime: The time period in which data is backed up. The time period must be in the HH:mmZ-HH:mmZ format.
         */
        readonly preferredBackupTime: string | ros.IResolvable;
        /**
         * @Property enableBackupLog: Enable or disable incremental backup. Options:
     * 1, means open.
     * 0, which means off, the default value.
         */
        readonly enableBackupLog?: number | ros.IResolvable;
    }
}
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface ClassicInnerConnectionProperty {
        /**
         * @Property connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
         */
        readonly connectionPort: number | ros.IResolvable;
        /**
         * @Property connectionString: The prefix of the public endpoint.
     * The prefix must be 8 to 64 characters in length,
     * and can contain lowercase letters and digits.
     * It must start with a lowercase letter.
         */
        readonly connectionString: string | ros.IResolvable;
    }
}
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface ConnectionsProperty {
        /**
         * @Property vpcPrivateConnection: Vpc intranet address.
         */
        readonly vpcPrivateConnection?: RosInstance.VpcPrivateConnectionProperty | ros.IResolvable;
        /**
         * @Property publicConnection: Public address.
         */
        readonly publicConnection?: RosInstance.PublicConnectionProperty | ros.IResolvable;
        /**
         * @Property directConnection: Direct connection address. The instance is a cluster instance.
     * You can apply for a direct connection endpoint as required.
         */
        readonly directConnection?: RosInstance.DirectConnectionProperty | ros.IResolvable;
        /**
         * @Property classicInnerConnection: Classic intranet address.
         */
        readonly classicInnerConnection?: RosInstance.ClassicInnerConnectionProperty | ros.IResolvable;
    }
}
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface DirectConnectionProperty {
        /**
         * @Property connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
         */
        readonly connectionPort: number | ros.IResolvable;
        /**
         * @Property connectionString: The prefix of the public endpoint.
     * The prefix must be 8 to 64 characters in length,
     * and can contain lowercase letters and digits.
     * It must start with a lowercase letter.
         */
        readonly connectionString: string | ros.IResolvable;
    }
}
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface InstanceMaintainTimeProperty {
        /**
         * @Property maintainEndTime: The end time of the maintenance window.
     * Specify the time in the ISO 8601 standard in the HH:mmZ format.
     * The time must be in UTC. For example, if the maintenance ends at 2:00 a.m. UTC+08:00,
     * you must set this parameter to 18:00Z.
         */
        readonly maintainEndTime?: string | ros.IResolvable;
        /**
         * @Property maintainStartTime: The start time of the maintenance window.
     * Specify the time in the ISO 8601 standard in the HH:mmZ format.
     * The time must be in UTC. For example, if the maintenance starts at 1:00 a.m. UTC+08:00,
     * you must set this parameter to 17:00Z.
         */
        readonly maintainStartTime?: string | ros.IResolvable;
    }
}
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface PublicConnectionProperty {
        /**
         * @Property connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
         */
        readonly connectionPort: number | ros.IResolvable;
        /**
         * @Property connectionString: The prefix of the public endpoint.
     * The prefix must be 8 to 64 characters in length,
     * and can contain lowercase letters and digits.
     * It must start with a lowercase letter.
         */
        readonly connectionString: string | ros.IResolvable;
    }
}
export declare namespace RosInstance {
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
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface VpcPrivateConnectionProperty {
        /**
         * @Property connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
         */
        readonly connectionPort: number | ros.IResolvable;
        /**
         * @Property connectionString: The prefix of the public endpoint.
     * The prefix must be 8 to 64 characters in length,
     * and can contain lowercase letters and digits.
     * It must start with a lowercase letter.
         */
        readonly connectionString: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::REDIS::PrepayInstance`
 */
export interface RosPrepayInstanceProps {
    /**
     * @Property autoPay: Indicates whether automatic payment is enabled. Valid values:
     * false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated.
     * true: Automatic payment is enabled. The payment is automatically made.
     * Default is False
     */
    readonly autoPay?: boolean | ros.IResolvable;
    /**
     * @Property autoRenewDuration: The auto-renewal period. Valid values: 1 to 12.
     *  When the instance is about to expire, the instance is automatically renewed
     * based on the number of months specified by this parameter.
     * Note This parameter is valid only when ChargeType is set to PrePaid.
     */
    readonly autoRenewDuration?: number | ros.IResolvable;
    /**
     * @Property backupPolicy: Backup policy
     */
    readonly backupPolicy?: RosPrepayInstance.BackupPolicyProperty | ros.IResolvable;
    /**
     * @Property connections: Connection address
     */
    readonly connections?: RosPrepayInstance.ConnectionsProperty | ros.IResolvable;
    /**
     * @Property deletionForce: Whether destroy instance when it is in recycle. Default is false
     */
    readonly deletionForce?: boolean | ros.IResolvable;
    /**
     * @Property engineVersion: Engine version. Supported values: 2.8, 4.0 and 5.0.
     */
    readonly engineVersion?: string | ros.IResolvable;
    /**
     * @Property evictionPolicy: The eviction policy of cache data storage.
     */
    readonly evictionPolicy?: string | ros.IResolvable;
    /**
     * @Property instanceClass: Redis instance type. Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
     */
    readonly instanceClass?: string | ros.IResolvable;
    /**
     * @Property instanceMaintainTime: Instance maintain time.
     */
    readonly instanceMaintainTime?: RosPrepayInstance.InstanceMaintainTimeProperty | ros.IResolvable;
    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly instanceName?: string | ros.IResolvable;
    /**
     * @Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers
     */
    readonly password?: string | ros.IResolvable;
    /**
     * @Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, 60 Unit in month.
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    readonly periodUnit?: string | ros.IResolvable;
    /**
     * @Property productType: Product type. Valid values:Local: Community Edition(Local) or Enhanced Edition(Local)Tair_rdb: Performance Enhanced(Cloud Disk)Tair_scm: Persistent Memory(Cloud Disk)Tair_essd: Capacity Storage(Cloud Disk)OnECS: Community Edition(Cloud Disk)
     */
    readonly productType?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property secondaryZoneId: The secondary zone ID of the instance.
     */
    readonly secondaryZoneId?: string | ros.IResolvable;
    /**
     * @Property securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
     */
    readonly securityGroupId?: string | ros.IResolvable;
    /**
     * @Property sslEnabled: Modifies the SSL status. Valid values:
     * Disable: disables SSL encryption.
     * Enable: enables SSL encryption.
     * Update: updates the SSL certificate.
     */
    readonly sslEnabled?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to redis. Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosPrepayInstance.TagsProperty[];
    /**
     * @Property vpcId: The VPC id to create ecs instance.
     */
    readonly vpcId?: string | ros.IResolvable;
    /**
     * @Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
     * - true: enables password free.
     * - false: disables password free.
     */
    readonly vpcPasswordFree?: boolean | ros.IResolvable;
    /**
     * @Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    readonly vSwitchId?: string | ros.IResolvable;
    /**
     * @Property zoneId: The zone id of input region.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::REDIS::PrepayInstance`
 */
export declare class RosPrepayInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::REDIS::PrepayInstance";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute ArchitectureType: The architecture.
     */
    readonly attrArchitectureType: ros.IResolvable;
    /**
     * @Attribute Bandwidth: The bandwidth of the instance. Unit: Mbit/s.
     */
    readonly attrBandwidth: ros.IResolvable;
    /**
     * @Attribute Capacity: The storage capacity of the instance. Unit: MB.
     */
    readonly attrCapacity: ros.IResolvable;
    /**
     * @Attribute ChargeType: The billing method of the instance.
     */
    readonly attrChargeType: ros.IResolvable;
    /**
     * @Attribute ClassicInnerConnectionPort: The classic inner connection port of the instance
     */
    readonly attrClassicInnerConnectionPort: ros.IResolvable;
    /**
     * @Attribute ClassicInnerConnectionString: The classic inner connection string of the instance
     */
    readonly attrClassicInnerConnectionString: ros.IResolvable;
    /**
     * @Attribute ConnectionDomain: Connection domain of created instance.
     */
    readonly attrConnectionDomain: ros.IResolvable;
    /**
     * @Attribute Connections: The maximum number of connections supported by the instance.
     */
    readonly attrConnections: ros.IResolvable;
    /**
     * @Attribute DirectConnectionPort: The direct connection port of the instance
     */
    readonly attrDirectConnectionPort: ros.IResolvable;
    /**
     * @Attribute DirectConnectionString: The direct connection string of the instance
     */
    readonly attrDirectConnectionString: ros.IResolvable;
    /**
     * @Attribute EngineVersion: The engine version of the instance.
     */
    readonly attrEngineVersion: ros.IResolvable;
    /**
     * @Attribute HasRenewChangeOrder: Indicates whether the Alibaba Cloud account has pending renewal or scaling orders
     */
    readonly attrHasRenewChangeOrder: ros.IResolvable;
    /**
     * @Attribute InstanceClass: Redis instance type.
     */
    readonly attrInstanceClass: ros.IResolvable;
    /**
     * @Attribute InstanceId: Instance id of created redis instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute InstanceName: Name of created redis instance.
     */
    readonly attrInstanceName: ros.IResolvable;
    /**
     * @Attribute InstanceType: The engine type of the instance.
     */
    readonly attrInstanceType: ros.IResolvable;
    /**
     * @Attribute NetworkType: The network type.
     */
    readonly attrNetworkType: ros.IResolvable;
    /**
     * @Attribute NodeType: The type of node.
     */
    readonly attrNodeType: ros.IResolvable;
    /**
     * @Attribute OrderId: Order Id of created instance.
     */
    readonly attrOrderId: ros.IResolvable;
    /**
     * @Attribute PackageType: The plan type.
     */
    readonly attrPackageType: ros.IResolvable;
    /**
     * @Attribute Port: Port of created instance.
     */
    readonly attrPort: ros.IResolvable;
    /**
     * @Attribute PrivateIp: The internal IP address of the instance.
     */
    readonly attrPrivateIp: ros.IResolvable;
    /**
     * @Attribute PublicConnectionPort: The public connection port of the instance
     */
    readonly attrPublicConnectionPort: ros.IResolvable;
    /**
     * @Attribute PublicConnectionString: The public connection string of the instance
     */
    readonly attrPublicConnectionString: ros.IResolvable;
    /**
     * @Attribute QPS: The queries per second (QPS) supported by the instance.
     */
    readonly attrQps: ros.IResolvable;
    /**
     * @Attribute ResourceGroupId: The ID of the resource group to which the instance belongs.
     */
    readonly attrResourceGroupId: ros.IResolvable;
    /**
     * @Attribute VSwitchId: The ID of the vSwitch.
     */
    readonly attrVSwitchId: ros.IResolvable;
    /**
     * @Attribute VpcId: The ID of the VPC.
     */
    readonly attrVpcId: ros.IResolvable;
    /**
     * @Attribute VpcPrivateConnectionPort: The vpc private connection port of the instance
     */
    readonly attrVpcPrivateConnectionPort: ros.IResolvable;
    /**
     * @Attribute VpcPrivateConnectionString: The vpc private connection string of the instance
     */
    readonly attrVpcPrivateConnectionString: ros.IResolvable;
    /**
     * @Attribute ZoneId: The ID of the zone.
     */
    readonly attrZoneId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property autoPay: Indicates whether automatic payment is enabled. Valid values:
     * false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated.
     * true: Automatic payment is enabled. The payment is automatically made.
     * Default is False
     */
    autoPay: boolean | ros.IResolvable | undefined;
    /**
     * @Property autoRenewDuration: The auto-renewal period. Valid values: 1 to 12.
     *  When the instance is about to expire, the instance is automatically renewed
     * based on the number of months specified by this parameter.
     * Note This parameter is valid only when ChargeType is set to PrePaid.
     */
    autoRenewDuration: number | ros.IResolvable | undefined;
    /**
     * @Property backupPolicy: Backup policy
     */
    backupPolicy: RosPrepayInstance.BackupPolicyProperty | ros.IResolvable | undefined;
    /**
     * @Property connections: Connection address
     */
    connections: RosPrepayInstance.ConnectionsProperty | ros.IResolvable | undefined;
    /**
     * @Property deletionForce: Whether destroy instance when it is in recycle. Default is false
     */
    deletionForce: boolean | ros.IResolvable | undefined;
    /**
     * @Property engineVersion: Engine version. Supported values: 2.8, 4.0 and 5.0.
     */
    engineVersion: string | ros.IResolvable | undefined;
    /**
     * @Property evictionPolicy: The eviction policy of cache data storage.
     */
    evictionPolicy: string | ros.IResolvable | undefined;
    /**
     * @Property instanceClass: Redis instance type. Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
     */
    instanceClass: string | ros.IResolvable | undefined;
    /**
     * @Property instanceMaintainTime: Instance maintain time.
     */
    instanceMaintainTime: RosPrepayInstance.InstanceMaintainTimeProperty | ros.IResolvable | undefined;
    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    instanceName: string | ros.IResolvable | undefined;
    /**
     * @Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers
     */
    password: string | ros.IResolvable | undefined;
    /**
     * @Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, 60 Unit in month.
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodUnit: The unit of the subscription duration. Valid values:
     * Month
     * Year
     * Default value: Month.
     */
    periodUnit: string | ros.IResolvable | undefined;
    /**
     * @Property productType: Product type. Valid values:Local: Community Edition(Local) or Enhanced Edition(Local)Tair_rdb: Performance Enhanced(Cloud Disk)Tair_scm: Persistent Memory(Cloud Disk)Tair_essd: Capacity Storage(Cloud Disk)OnECS: Community Edition(Cloud Disk)
     */
    productType: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: Resource group id.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property secondaryZoneId: The secondary zone ID of the instance.
     */
    secondaryZoneId: string | ros.IResolvable | undefined;
    /**
     * @Property securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
     */
    securityGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property sslEnabled: Modifies the SSL status. Valid values:
     * Disable: disables SSL encryption.
     * Enable: enables SSL encryption.
     * Update: updates the SSL certificate.
     */
    sslEnabled: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to redis. Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosPrepayInstance.TagsProperty[] | undefined;
    /**
     * @Property vpcId: The VPC id to create ecs instance.
     */
    vpcId: string | ros.IResolvable | undefined;
    /**
     * @Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
     * - true: enables password free.
     * - false: disables password free.
     */
    vpcPasswordFree: boolean | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    vSwitchId: string | ros.IResolvable | undefined;
    /**
     * @Property zoneId: The zone id of input region.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::REDIS::PrepayInstance`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosPrepayInstanceProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosPrepayInstance {
    /**
     * @stability external
     */
    interface BackupPolicyProperty {
        /**
         * @Property preferredBackupPeriod: The backup cycle. Valid values: Monday/Tuesday/Wednesday/Thursday/Friday/Saturday/Sunday
         */
        readonly preferredBackupPeriod: string | ros.IResolvable;
        /**
         * @Property preferredBackupTime: The time period in which data is backed up. The time period must be in the HH:mmZ-HH:mmZ format.
         */
        readonly preferredBackupTime: string | ros.IResolvable;
        /**
         * @Property enableBackupLog: Enable or disable incremental backup. Options:
     * 1, means open.
     * 0, which means off, the default value.
         */
        readonly enableBackupLog?: number | ros.IResolvable;
    }
}
export declare namespace RosPrepayInstance {
    /**
     * @stability external
     */
    interface ClassicInnerConnectionProperty {
        /**
         * @Property connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
         */
        readonly connectionPort: number | ros.IResolvable;
        /**
         * @Property connectionString: The prefix of the public endpoint.
     * The prefix must be 8 to 64 characters in length,
     * and can contain lowercase letters and digits.
     * It must start with a lowercase letter.
         */
        readonly connectionString: string | ros.IResolvable;
    }
}
export declare namespace RosPrepayInstance {
    /**
     * @stability external
     */
    interface ConnectionsProperty {
        /**
         * @Property vpcPrivateConnection: Vpc intranet address.
         */
        readonly vpcPrivateConnection?: RosPrepayInstance.VpcPrivateConnectionProperty | ros.IResolvable;
        /**
         * @Property publicConnection: Public address.
         */
        readonly publicConnection?: RosPrepayInstance.PublicConnectionProperty | ros.IResolvable;
        /**
         * @Property directConnection: Direct connection address. The instance is a cluster instance.
     * You can apply for a direct connection endpoint as required.
         */
        readonly directConnection?: RosPrepayInstance.DirectConnectionProperty | ros.IResolvable;
        /**
         * @Property classicInnerConnection: Classic intranet address.
         */
        readonly classicInnerConnection?: RosPrepayInstance.ClassicInnerConnectionProperty | ros.IResolvable;
    }
}
export declare namespace RosPrepayInstance {
    /**
     * @stability external
     */
    interface DirectConnectionProperty {
        /**
         * @Property connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
         */
        readonly connectionPort: number | ros.IResolvable;
        /**
         * @Property connectionString: The prefix of the public endpoint.
     * The prefix must be 8 to 64 characters in length,
     * and can contain lowercase letters and digits.
     * It must start with a lowercase letter.
         */
        readonly connectionString: string | ros.IResolvable;
    }
}
export declare namespace RosPrepayInstance {
    /**
     * @stability external
     */
    interface InstanceMaintainTimeProperty {
        /**
         * @Property maintainEndTime: The end time of the maintenance window.
     * Specify the time in the ISO 8601 standard in the HH:mmZ format.
     * The time must be in UTC. For example, if the maintenance ends at 2:00 a.m. UTC+08:00,
     * you must set this parameter to 18:00Z.
         */
        readonly maintainEndTime?: string | ros.IResolvable;
        /**
         * @Property maintainStartTime: The start time of the maintenance window.
     * Specify the time in the ISO 8601 standard in the HH:mmZ format.
     * The time must be in UTC. For example, if the maintenance starts at 1:00 a.m. UTC+08:00,
     * you must set this parameter to 17:00Z.
         */
        readonly maintainStartTime?: string | ros.IResolvable;
    }
}
export declare namespace RosPrepayInstance {
    /**
     * @stability external
     */
    interface PublicConnectionProperty {
        /**
         * @Property connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
         */
        readonly connectionPort: number | ros.IResolvable;
        /**
         * @Property connectionString: The prefix of the public endpoint.
     * The prefix must be 8 to 64 characters in length,
     * and can contain lowercase letters and digits.
     * It must start with a lowercase letter.
         */
        readonly connectionString: string | ros.IResolvable;
    }
}
export declare namespace RosPrepayInstance {
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
export declare namespace RosPrepayInstance {
    /**
     * @stability external
     */
    interface VpcPrivateConnectionProperty {
        /**
         * @Property connectionPort: The service port number of the ApsaraDB for Redis instance. Valid values: 1024 to 65535.
         */
        readonly connectionPort: number | ros.IResolvable;
        /**
         * @Property connectionString: The prefix of the public endpoint.
     * The prefix must be 8 to 64 characters in length,
     * and can contain lowercase letters and digits.
     * It must start with a lowercase letter.
         */
        readonly connectionString: string | ros.IResolvable;
    }
}
/**
 * Properties for defining a `ALIYUN::REDIS::Whitelist`
 */
export interface RosWhitelistProps {
    /**
     * @Property instanceId: Instance ID (globally unique)
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property securityIps: IP address whitelist to be modified
     */
    readonly securityIps: string | ros.IResolvable;
    /**
     * @Property securityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
     */
    readonly securityIpGroupAttribute?: string | ros.IResolvable;
    /**
     * @Property securityIpGroupName: Whitelist group
     */
    readonly securityIpGroupName?: string | ros.IResolvable;
}
/**
 * A ROS template type:  `ALIYUN::REDIS::Whitelist`
 */
export declare class RosWhitelist extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::REDIS::Whitelist";
    /**
     * A factory method that creates a new instance of this class from an object
     * containing the properties of this ROS resource.
     */
    /**
     * @Attribute SecurityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
     */
    readonly attrSecurityIpGroupAttribute: ros.IResolvable;
    /**
     * @Attribute SecurityIpGroupName: Whitelist group
     */
    readonly attrSecurityIpGroupName: ros.IResolvable;
    /**
     * @Attribute SecurityIps: IP address whitelist to be modified
     */
    readonly attrSecurityIps: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: Instance ID (globally unique)
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property securityIps: IP address whitelist to be modified
     */
    securityIps: string | ros.IResolvable;
    /**
     * @Property securityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
     */
    securityIpGroupAttribute: string | ros.IResolvable | undefined;
    /**
     * @Property securityIpGroupName: Whitelist group
     */
    securityIpGroupName: string | ros.IResolvable | undefined;
    /**
     * Create a new `ALIYUN::REDIS::Whitelist`.
     *
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosWhitelistProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
