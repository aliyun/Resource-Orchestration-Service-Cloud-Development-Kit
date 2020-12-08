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
    readonly accountName: string;
    /**
     * @Property accountPassword: The password of the account. The password can be 8 to 32 characters in length and
     * must contain at least three types of the following characters: uppercase letters,
     * lowercase letters, digits, and special characters. Special characters include ! at signs (@), number signs (#), dollar signs ($), percent signs (%), carets (^),
     * ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+),
     * hyphens (-), and equal signs (=).
     */
    readonly accountPassword: string;
    /**
     * @Property instanceId: The ID of the instance for which you want to create the account.
     */
    readonly instanceId: string;
    /**
     * @Property accountDescription: The description of the account.
     * The description must start with a letter, and cannot start with http:// or https://.
     * The description can contain letters, underscores (_), hyphens (-), and digits.
     * It can be 2 to 256 characters in length.
     */
    readonly accountDescription?: string;
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
    readonly accountPrivilege?: string;
    /**
     * @Property accountType: The type of the account. Set this parameter to Normal.
     */
    readonly accountType?: string;
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
    readonly attrAccountName: any;
    /**
     * @Attribute InstanceId: The name of the instance.
     */
    readonly attrInstanceId: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accountName: The name of the account. The name must start with a lowercase letter and can contain
     * lowercase letters, digits, and underscores (_). The name can be 1 to 16 characters
     * in length.
     */
    accountName: string;
    /**
     * @Property accountPassword: The password of the account. The password can be 8 to 32 characters in length and
     * must contain at least three types of the following characters: uppercase letters,
     * lowercase letters, digits, and special characters. Special characters include ! at signs (@), number signs (#), dollar signs ($), percent signs (%), carets (^),
     * ampersands (&), asterisks (*), parentheses (()), underscores (_), plus signs (+),
     * hyphens (-), and equal signs (=).
     */
    accountPassword: string;
    /**
     * @Property instanceId: The ID of the instance for which you want to create the account.
     */
    instanceId: string;
    /**
     * @Property accountDescription: The description of the account.
     * The description must start with a letter, and cannot start with http:// or https://.
     * The description can contain letters, underscores (_), hyphens (-), and digits.
     * It can be 2 to 256 characters in length.
     */
    accountDescription: string | undefined;
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
    accountPrivilege: string | undefined;
    /**
     * @Property accountType: The type of the account. Set this parameter to Normal.
     */
    accountType: string | undefined;
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
     * @Property backupPolicy: Backup policy
     */
    readonly backupPolicy?: RosInstance.BackupPolicyProperty | ros.IResolvable;
    /**
     * @Property capacity: The storage capacity of redis instance.range from 1 to 512, in GB.
     */
    readonly capacity?: number;
    /**
     * @Property engineVersion: Engine version. Supported values: 2.8, 4.0 and 5.0.
     */
    readonly engineVersion?: string;
    /**
     * @Property evictionPolicy: The eviction policy of cache data storage.
     */
    readonly evictionPolicy?: string;
    /**
     * @Property instanceClass: Redis instance type. Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
     */
    readonly instanceClass?: string;
    /**
     * @Property instanceConnection: Instance connection message.
     */
    readonly instanceConnection?: RosInstance.InstanceConnectionProperty | ros.IResolvable;
    /**
     * @Property instanceMaintainTime: Instance maintain time.
     */
    readonly instanceMaintainTime?: RosInstance.InstanceMaintainTimeProperty | ros.IResolvable;
    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly instanceName?: string;
    /**
     * @Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers
     */
    readonly password?: string;
    /**
     * @Property securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
     */
    readonly securityGroupId?: string;
    /**
     * @Property sslEnabled: Modifies the SSL status. Valid values:
     * Disable: disables SSL encryption.
     * Enable: enables SSL encryption.
     * Update: updates the SSL certificate.
     */
    readonly sslEnabled?: string;
    /**
     * @Property tags: Tags to attach to redis. Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: ros.RosTag[];
    /**
     * @Property vpcId: The VPC id to create ecs instance.
     */
    readonly vpcId?: string;
    /**
     * @Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
     * - true: enables password free.
     * - false: disables password free.
     */
    readonly vpcPasswordFree?: boolean | ros.IResolvable;
    /**
     * @Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    readonly vSwitchId?: string;
    /**
     * @Property zoneId: The zone id of input region.
     */
    readonly zoneId?: string;
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
     * @Attribute ConnectionDomain: Connection domain of created instance.
     */
    readonly attrConnectionDomain: any;
    /**
     * @Attribute InstanceId: Instance id for created redis instance.
     */
    readonly attrInstanceId: any;
    /**
     * @Attribute OrderId: Order Id of created instance.
     */
    readonly attrOrderId: any;
    /**
     * @Attribute Port: Port of created instance.
     */
    readonly attrPort: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property backupPolicy: Backup policy
     */
    backupPolicy: RosInstance.BackupPolicyProperty | ros.IResolvable | undefined;
    /**
     * @Property capacity: The storage capacity of redis instance.range from 1 to 512, in GB.
     */
    capacity: number | undefined;
    /**
     * @Property engineVersion: Engine version. Supported values: 2.8, 4.0 and 5.0.
     */
    engineVersion: string | undefined;
    /**
     * @Property evictionPolicy: The eviction policy of cache data storage.
     */
    evictionPolicy: string | undefined;
    /**
     * @Property instanceClass: Redis instance type. Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
     */
    instanceClass: string | undefined;
    /**
     * @Property instanceConnection: Instance connection message.
     */
    instanceConnection: RosInstance.InstanceConnectionProperty | ros.IResolvable | undefined;
    /**
     * @Property instanceMaintainTime: Instance maintain time.
     */
    instanceMaintainTime: RosInstance.InstanceMaintainTimeProperty | ros.IResolvable | undefined;
    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    instanceName: string | undefined;
    /**
     * @Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers
     */
    password: string | undefined;
    /**
     * @Property securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
     */
    securityGroupId: string | undefined;
    /**
     * @Property sslEnabled: Modifies the SSL status. Valid values:
     * Disable: disables SSL encryption.
     * Enable: enables SSL encryption.
     * Update: updates the SSL certificate.
     */
    sslEnabled: string | undefined;
    /**
     * @Property tags: Tags to attach to redis. Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags: ros.TagManager;
    /**
     * @Property vpcId: The VPC id to create ecs instance.
     */
    vpcId: string | undefined;
    /**
     * @Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
     * - true: enables password free.
     * - false: disables password free.
     */
    vpcPasswordFree: boolean | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    vSwitchId: string | undefined;
    /**
     * @Property zoneId: The zone id of input region.
     */
    zoneId: string | undefined;
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
        readonly preferredBackupPeriod: string;
        /**
         * @Property preferredBackupTime: The time period in which data is backed up. The time period must be in the HH:mmZ-HH:mmZ format.
         */
        readonly preferredBackupTime: string;
        /**
         * @Property enableBackupLog: Enable or disable incremental backup. Options:
     * 1, means open.
     * 0, which means off, the default value.
         */
        readonly enableBackupLog?: number;
    }
}
export declare namespace RosInstance {
    /**
     * @stability external
     */
    interface InstanceConnectionProperty {
        /**
         * @Property ipType: The network type of the new endpoint. Value values:
     * - Private: internal network.
     * - Public: public network.
         */
        readonly ipType?: string;
        /**
         * @Property port: The service port of the instance.
     * Valid values: 1024 to 65535.
         */
        readonly port?: number;
        /**
         * @Property newConnectionString: The prefix of the new endpoint.
     * The new endpoint of the ApsaraDB for Redis instance is in the <Prefix>.redis.rds.aliyuncs.com format.
     * The prefix of the endpoint must start with a lowercase letter and can contain lowercase letters and digits.
     * The prefix can be 8 to 64 characters in length.
         */
        readonly newConnectionString?: string;
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
        readonly maintainEndTime?: string;
        /**
         * @Property maintainStartTime: The start time of the maintenance window.
     * Specify the time in the ISO 8601 standard in the HH:mmZ format.
     * The time must be in UTC. For example, if the maintenance starts at 1:00 a.m. UTC+08:00,
     * you must set this parameter to 17:00Z.
         */
        readonly maintainStartTime?: string;
    }
}
/**
 * Properties for defining a `ALIYUN::REDIS::PrepayInstance`
 */
export interface RosPrepayInstanceProps {
    /**
     * @Property backupPolicy: Backup policy
     */
    readonly backupPolicy?: RosPrepayInstance.BackupPolicyProperty | ros.IResolvable;
    /**
     * @Property capacity: The storage capacity of redis instance.range from 1 to 512, in GB.
     */
    readonly capacity?: number;
    /**
     * @Property engineVersion: Engine version. Supported values: 2.8, 4.0 and 5.0.
     */
    readonly engineVersion?: string;
    /**
     * @Property evictionPolicy: The eviction policy of cache data storage.
     */
    readonly evictionPolicy?: string;
    /**
     * @Property instanceClass: Redis instance type. Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
     */
    readonly instanceClass?: string;
    /**
     * @Property instanceConnection: Instance connection message.
     */
    readonly instanceConnection?: RosPrepayInstance.InstanceConnectionProperty | ros.IResolvable;
    /**
     * @Property instanceMaintainTime: Instance maintain time.
     */
    readonly instanceMaintainTime?: RosPrepayInstance.InstanceMaintainTimeProperty | ros.IResolvable;
    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    readonly instanceName?: string;
    /**
     * @Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers
     */
    readonly password?: string;
    /**
     * @Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, Unit in month.
     */
    readonly period?: number;
    /**
     * @Property securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
     */
    readonly securityGroupId?: string;
    /**
     * @Property sslEnabled: Modifies the SSL status. Valid values:
     * Disable: disables SSL encryption.
     * Enable: enables SSL encryption.
     * Update: updates the SSL certificate.
     */
    readonly sslEnabled?: string;
    /**
     * @Property tags: Tags to attach to redis. Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: ros.RosTag[];
    /**
     * @Property vpcId: The VPC id to create ecs instance.
     */
    readonly vpcId?: string;
    /**
     * @Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
     * - true: enables password free.
     * - false: disables password free.
     */
    readonly vpcPasswordFree?: boolean | ros.IResolvable;
    /**
     * @Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    readonly vSwitchId?: string;
    /**
     * @Property zoneId: The zone id of input region.
     */
    readonly zoneId?: string;
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
     * @Attribute ConnectionDomain: Connection domain of created instance.
     */
    readonly attrConnectionDomain: any;
    /**
     * @Attribute InstanceId: Instance id for created redis instance.
     */
    readonly attrInstanceId: any;
    /**
     * @Attribute OrderId: Order Id of created instance.
     */
    readonly attrOrderId: any;
    /**
     * @Attribute Port: Port of created instance.
     */
    readonly attrPort: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property backupPolicy: Backup policy
     */
    backupPolicy: RosPrepayInstance.BackupPolicyProperty | ros.IResolvable | undefined;
    /**
     * @Property capacity: The storage capacity of redis instance.range from 1 to 512, in GB.
     */
    capacity: number | undefined;
    /**
     * @Property engineVersion: Engine version. Supported values: 2.8, 4.0 and 5.0.
     */
    engineVersion: string | undefined;
    /**
     * @Property evictionPolicy: The eviction policy of cache data storage.
     */
    evictionPolicy: string | undefined;
    /**
     * @Property instanceClass: Redis instance type. Refer the Redis instance type reference, such as 'redis.master.small.default', 'redis.master.4xlarge.default', 'redis.sharding.mid.default' etc
     */
    instanceClass: string | undefined;
    /**
     * @Property instanceConnection: Instance connection message.
     */
    instanceConnection: RosPrepayInstance.InstanceConnectionProperty | ros.IResolvable | undefined;
    /**
     * @Property instanceMaintainTime: Instance maintain time.
     */
    instanceMaintainTime: RosPrepayInstance.InstanceMaintainTimeProperty | ros.IResolvable | undefined;
    /**
     * @Property instanceName: Display name of the instance, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'
     */
    instanceName: string | undefined;
    /**
     * @Property password: The password of redis instance.length 8 to 30 characters, need to contain both uppercase and lowercase letters and numbers
     */
    password: string | undefined;
    /**
     * @Property period: The period of order, when choose Prepaid required.optional value 1-9, 12, 24, 36, Unit in month.
     */
    period: number | undefined;
    /**
     * @Property securityGroupId: The IDs of security groups. Separate multiple security group IDs with commas (,) and up to 10 can be set.
     */
    securityGroupId: string | undefined;
    /**
     * @Property sslEnabled: Modifies the SSL status. Valid values:
     * Disable: disables SSL encryption.
     * Enable: enables SSL encryption.
     * Update: updates the SSL certificate.
     */
    sslEnabled: string | undefined;
    /**
     * @Property tags: Tags to attach to redis. Max support 20 tags to add during create redis. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags: ros.TagManager;
    /**
     * @Property vpcId: The VPC id to create ecs instance.
     */
    vpcId: string | undefined;
    /**
     * @Property vpcPasswordFree: Specifies whether to enable password free for access within the VPC. If set to:
     * - true: enables password free.
     * - false: disables password free.
     */
    vpcPasswordFree: boolean | ros.IResolvable | undefined;
    /**
     * @Property vSwitchId: The vSwitch Id to create ecs instance.
     */
    vSwitchId: string | undefined;
    /**
     * @Property zoneId: The zone id of input region.
     */
    zoneId: string | undefined;
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
        readonly preferredBackupPeriod: string;
        /**
         * @Property preferredBackupTime: The time period in which data is backed up. The time period must be in the HH:mmZ-HH:mmZ format.
         */
        readonly preferredBackupTime: string;
        /**
         * @Property enableBackupLog: Enable or disable incremental backup. Options:
     * 1, means open.
     * 0, which means off, the default value.
         */
        readonly enableBackupLog?: number;
    }
}
export declare namespace RosPrepayInstance {
    /**
     * @stability external
     */
    interface InstanceConnectionProperty {
        /**
         * @Property ipType: The network type of the new endpoint. Value values:
     * - Private: internal network.
     * - Public: public network.
         */
        readonly ipType?: string;
        /**
         * @Property port: The service port of the instance.
     * Valid values: 1024 to 65535.
         */
        readonly port?: number;
        /**
         * @Property newConnectionString: The prefix of the new endpoint.
     * The new endpoint of the ApsaraDB for Redis instance is in the <Prefix>.redis.rds.aliyuncs.com format.
     * The prefix of the endpoint must start with a lowercase letter and can contain lowercase letters and digits.
     * The prefix can be 8 to 64 characters in length.
         */
        readonly newConnectionString?: string;
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
        readonly maintainEndTime?: string;
        /**
         * @Property maintainStartTime: The start time of the maintenance window.
     * Specify the time in the ISO 8601 standard in the HH:mmZ format.
     * The time must be in UTC. For example, if the maintenance starts at 1:00 a.m. UTC+08:00,
     * you must set this parameter to 17:00Z.
         */
        readonly maintainStartTime?: string;
    }
}
/**
 * Properties for defining a `ALIYUN::REDIS::Whitelist`
 */
export interface RosWhitelistProps {
    /**
     * @Property instanceId: Instance ID (globally unique)
     */
    readonly instanceId: string;
    /**
     * @Property securityIps: IP address whitelist to be modified
     */
    readonly securityIps: string;
    /**
     * @Property securityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
     */
    readonly securityIpGroupAttribute?: string;
    /**
     * @Property securityIpGroupName: Whitelist group
     */
    readonly securityIpGroupName?: string;
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
    readonly attrSecurityIpGroupAttribute: any;
    /**
     * @Attribute SecurityIpGroupName: Whitelist group
     */
    readonly attrSecurityIpGroupName: any;
    /**
     * @Attribute SecurityIps: IP address whitelist to be modified
     */
    readonly attrSecurityIps: any;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: Instance ID (globally unique)
     */
    instanceId: string;
    /**
     * @Property securityIps: IP address whitelist to be modified
     */
    securityIps: string;
    /**
     * @Property securityIpGroupAttribute: The default is empty. For distinguishing between different attribute values, the console will not display the value of hidden whitelist packet.
     */
    securityIpGroupAttribute: string | undefined;
    /**
     * @Property securityIpGroupName: Whitelist group
     */
    securityIpGroupName: string | undefined;
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
