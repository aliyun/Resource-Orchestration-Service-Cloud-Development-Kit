import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosHiTSDBInstance`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-tsdb-hitsdbinstance
 */
export interface RosHiTSDBInstanceProps {
    /**
     * @Property instanceClass: The type of the instance.
     */
    readonly instanceClass: string | ros.IResolvable;
    /**
     * @Property instanceStorage: The storage capacity of the instance. Unit: GB. For example, the value 50 indicates 50 GB.
     */
    readonly instanceStorage: number | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) that is connected to the instance.
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The ID of the VSwitch in the specified VPC.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * @Property zoneId: The zone ID of the instance.
     */
    readonly zoneId: string | ros.IResolvable;
    /**
     * @Property diskCategory: The category of disk.
     */
    readonly diskCategory?: string | ros.IResolvable;
    /**
     * @Property duration: The validity period of the instance. This parameter is valid only when the PayType parameter is set to PREPAY. Default value: 1.
     */
    readonly duration?: number | ros.IResolvable;
    /**
     * @Property instanceAlias: The alias of the instance.
     */
    readonly instanceAlias?: string | ros.IResolvable;
    /**
     * @Property payType: The billing method. Valid values:
     * - **prepay**: The prepay value indicates the subscription method.
     */
    readonly payType?: string | ros.IResolvable;
    /**
     * @Property pricingCycle: The unit of the validity period. This parameter is valid only when the PayType parameter is set to PREPAY. Default value: Month.
     */
    readonly pricingCycle?: string | ros.IResolvable;
    /**
     * @Property securityIpList: List of the IP patterns.For example, ["127.0.0.1", "192.168.0.1\/24"]
     */
    readonly securityIpList?: Array<string | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::TSDB::HiTSDBInstance`, which is used to create a Time Series Database (TSDB) instance.
 * @Note This class does not contain additional functions, so it is recommended to use the `HiTSDBInstance` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-tsdb-hitsdbinstance
 */
export declare class RosHiTSDBInstance extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::TSDB::HiTSDBInstance";
    /**
     * @Attribute ConnectionString: Connection string of the instance.
     */
    readonly attrConnectionString: ros.IResolvable;
    /**
     * @Attribute EngineType: Engine type of the instance.
     */
    readonly attrEngineType: ros.IResolvable;
    /**
     * @Attribute InstanceId: The ID of the instance.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute OrderId: Order id of created instance.
     */
    readonly attrOrderId: ros.IResolvable;
    /**
     * @Attribute PublicConnectionString: Public connection string of the instance.
     */
    readonly attrPublicConnectionString: ros.IResolvable;
    /**
     * @Attribute ReverseVpcIp: Reverse vpc ip of the instance.
     */
    readonly attrReverseVpcIp: ros.IResolvable;
    /**
     * @Attribute ReverseVpcPort: Reverse vpc port of the instance.
     */
    readonly attrReverseVpcPort: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceClass: The type of the instance.
     */
    instanceClass: string | ros.IResolvable;
    /**
     * @Property instanceStorage: The storage capacity of the instance. Unit: GB. For example, the value 50 indicates 50 GB.
     */
    instanceStorage: number | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the virtual private cloud (VPC) that is connected to the instance.
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The ID of the VSwitch in the specified VPC.
     */
    vSwitchId: string | ros.IResolvable;
    /**
     * @Property zoneId: The zone ID of the instance.
     */
    zoneId: string | ros.IResolvable;
    /**
     * @Property diskCategory: The category of disk.
     */
    diskCategory: string | ros.IResolvable | undefined;
    /**
     * @Property duration: The validity period of the instance. This parameter is valid only when the PayType parameter is set to PREPAY. Default value: 1.
     */
    duration: number | ros.IResolvable | undefined;
    /**
     * @Property instanceAlias: The alias of the instance.
     */
    instanceAlias: string | ros.IResolvable | undefined;
    /**
     * @Property payType: The billing method. Valid values:
     * - **prepay**: The prepay value indicates the subscription method.
     */
    payType: string | ros.IResolvable | undefined;
    /**
     * @Property pricingCycle: The unit of the validity period. This parameter is valid only when the PayType parameter is set to PREPAY. Default value: Month.
     */
    pricingCycle: string | ros.IResolvable | undefined;
    /**
     * @Property securityIpList: List of the IP patterns.For example, ["127.0.0.1", "192.168.0.1\/24"]
     */
    securityIpList: Array<string | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosHiTSDBInstanceProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosInfluxDBDatabase`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-tsdb-influxdbdatabase
 */
export interface RosInfluxDBDatabaseProps {
    /**
     * @Property dbName: The name of database. The name can at most be 64 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
     */
    readonly dbName: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of TSDB for InfluxDB.
     */
    readonly instanceId: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::TSDB::InfluxDBDatabase`, which is used to create a Time Series Database (TSDB) database.
 * @Note This class does not contain additional functions, so it is recommended to use the `InfluxDBDatabase` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-tsdb-influxdbdatabase
 */
export declare class RosInfluxDBDatabase extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::TSDB::InfluxDBDatabase";
    /**
     * @Attribute DBName: The name of database.
     */
    readonly attrDbName: ros.IResolvable;
    /**
     * @Attribute InstanceId: The ID of TSDB for InfluxDB.
     */
    readonly attrInstanceId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbName: The name of database. The name can at most be 64 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
     */
    dbName: string | ros.IResolvable;
    /**
     * @Property instanceId: The ID of TSDB for InfluxDB.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInfluxDBDatabaseProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosInfluxDBUser`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-tsdb-influxdbuser
 */
export interface RosInfluxDBUserProps {
    /**
     * @Property instanceId: The ID of TSDB for InfluxDB.
     */
    readonly instanceId: string | ros.IResolvable;
    /**
     * @Property password: The password must be 8 to 32 characters in length and contain letters, digits, and special characters.!@#$%^&*()_+-=
     */
    readonly password: string | ros.IResolvable;
    /**
     * @Property userName: The name of user. The name can at must be 16 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
     */
    readonly userName: string | ros.IResolvable;
    /**
     * @Property userType: The type of user. Valid values:
     * normal: normal user
     * admin: administrator user.
     */
    readonly userType: string | ros.IResolvable;
    /**
     * @Property databasePermissions: The list of databases that the user can access. If the user type is admin, do not specify this parameter.
     */
    readonly databasePermissions?: Array<RosInfluxDBUser.DatabasePermissionsProperty | ros.IResolvable> | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::TSDB::InfluxDBUser`, which is used to create a Time Series Database (TSDB) database account.
 * @Note This class does not contain additional functions, so it is recommended to use the `InfluxDBUser` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-tsdb-influxdbuser
 */
export declare class RosInfluxDBUser extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::TSDB::InfluxDBUser";
    /**
     * @Attribute InstanceId: The ID of TSDB for InfluxDB.
     */
    readonly attrInstanceId: ros.IResolvable;
    /**
     * @Attribute UserName: The name of user.
     */
    readonly attrUserName: ros.IResolvable;
    /**
     * @Attribute UserType: The type of user.
     */
    readonly attrUserType: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property instanceId: The ID of TSDB for InfluxDB.
     */
    instanceId: string | ros.IResolvable;
    /**
     * @Property password: The password must be 8 to 32 characters in length and contain letters, digits, and special characters.!@#$%^&*()_+-=
     */
    password: string | ros.IResolvable;
    /**
     * @Property userName: The name of user. The name can at must be 16 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
     */
    userName: string | ros.IResolvable;
    /**
     * @Property userType: The type of user. Valid values:
     * normal: normal user
     * admin: administrator user.
     */
    userType: string | ros.IResolvable;
    /**
     * @Property databasePermissions: The list of databases that the user can access. If the user type is admin, do not specify this parameter.
     */
    databasePermissions: Array<RosInfluxDBUser.DatabasePermissionsProperty | ros.IResolvable> | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosInfluxDBUserProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosInfluxDBUser {
    /**
     * @stability external
     */
    interface DatabasePermissionsProperty {
        /**
         * @Property permission: The database privilege the user has. Valid values: read, write, all.
         */
        readonly permission: string | ros.IResolvable;
        /**
         * @Property dbName: The name of database. The name can at most be 64 characters in length and can contain lowercase letters, digits, and underscores (_). It must start with a letter and end with a letter or digit.
         */
        readonly dbName: string | ros.IResolvable;
    }
}
