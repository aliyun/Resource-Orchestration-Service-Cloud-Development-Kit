import * as ros from '@alicloud/ros-cdk-core';
/**
 * Properties for defining a `RosAccount`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adb-account
 */
export interface RosAccountProps {
    /**
     * @Property accountName: The database account name. The name must meet the following requirements:
     * - Start with a lowercase letter and end with a lowercase letter or digit.
     * - Contain only lowercase letters, digits, or underscores (_).
     * - Be 2 to 16 characters long.
     * - Not use reserved usernames such as root, admin, or opsadmin.
     */
    readonly accountName: string | ros.IResolvable;
    /**
     * @Property accountPassword: The database account password.
     * - Use any three of the following character types: uppercase letters, lowercase
     * letters, digits, and special characters.
     * - Special characters include the following: `!@#$%^&*()_+-=`
     * - Be 8 to 32 characters long.
     */
    readonly accountPassword: string | ros.IResolvable;
    /**
     * @Property dbClusterId: The ID of the cluster.
     */
    readonly dbClusterId: string | ros.IResolvable;
    /**
     * @Property accountDescription: The description of the account.
     * The description cannot start with http:\/\/or https:\/\/.
     * The description can be up to 256 characters in length.
     */
    readonly accountDescription?: string | ros.IResolvable;
    /**
     * @Property accountType: Normal: standard account
     * Super: privileged account
     */
    readonly accountType?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ADB::Account`.
 * @Note This class does not contain additional functions, so it is recommended to use the `Account` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adb-account
 */
export declare class RosAccount extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ADB::Account";
    /**
     * @Attribute AccountName: The name of the account.
     */
    readonly attrAccountName: ros.IResolvable;
    /**
     * @Attribute AccountType: The type of the account.
     */
    readonly attrAccountType: ros.IResolvable;
    /**
     * @Attribute DBClusterId: The ID of the cluster.
     */
    readonly attrDbClusterId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property accountName: The database account name. The name must meet the following requirements:
     * - Start with a lowercase letter and end with a lowercase letter or digit.
     * - Contain only lowercase letters, digits, or underscores (_).
     * - Be 2 to 16 characters long.
     * - Not use reserved usernames such as root, admin, or opsadmin.
     */
    accountName: string | ros.IResolvable;
    /**
     * @Property accountPassword: The database account password.
     * - Use any three of the following character types: uppercase letters, lowercase
     * letters, digits, and special characters.
     * - Special characters include the following: `!@#$%^&*()_+-=`
     * - Be 8 to 32 characters long.
     */
    accountPassword: string | ros.IResolvable;
    /**
     * @Property dbClusterId: The ID of the cluster.
     */
    dbClusterId: string | ros.IResolvable;
    /**
     * @Property accountDescription: The description of the account.
     * The description cannot start with http:\/\/or https:\/\/.
     * The description can be up to 256 characters in length.
     */
    accountDescription: string | ros.IResolvable | undefined;
    /**
     * @Property accountType: Normal: standard account
     * Super: privileged account
     */
    accountType: string | ros.IResolvable | undefined;
    /**
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
 * Properties for defining a `RosBackupPolicy`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adb-backuppolicy
 */
export interface RosBackupPolicyProps {
    /**
     * @Property dbClusterId: The ID of the ADB cluster.
     */
    readonly dbClusterId: string | ros.IResolvable;
    /**
     * @Property preferredBackupPeriod: The preferred backup period. Valid values: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.
     */
    readonly preferredBackupPeriod: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property preferredBackupTime: The start time of the full backup within a time range. Specify the time range in
     * the HH:mmZ-HH:mmZ format. The time must be in UTC.
     * >  The time range is 1 hour.
     */
    readonly preferredBackupTime: string | ros.IResolvable;
    /**
     * @Property backupRetentionPeriod: The number of days for which to retain full backup files. Valid values: 7 to 730.
     * >  If you do not specify this parameter, the default value 7 is used.
     */
    readonly backupRetentionPeriod?: number | ros.IResolvable;
    /**
     * @Property enableBackupLog: Specifies whether to enable real-time log backup. Valid values:
     * *   Enable
     * *   Disable
     * > If you leave this parameter empty, the default value Enable is used.
     */
    readonly enableBackupLog?: string | ros.IResolvable;
    /**
     * @Property logBackupRetentionPeriod: The number of days for which to retain log backup files. Valid values: 7 to 730.
     * >  If you do not specify this parameter, the default value 7 is used.
     */
    readonly logBackupRetentionPeriod?: number | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ADB::BackupPolicy`.
 * @Note This class does not contain additional functions, so it is recommended to use the `BackupPolicy` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adb-backuppolicy
 */
export declare class RosBackupPolicy extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ADB::BackupPolicy";
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbClusterId: The ID of the ADB cluster.
     */
    dbClusterId: string | ros.IResolvable;
    /**
     * @Property preferredBackupPeriod: The preferred backup period. Valid values: Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday.
     */
    preferredBackupPeriod: Array<string | ros.IResolvable> | ros.IResolvable;
    /**
     * @Property preferredBackupTime: The start time of the full backup within a time range. Specify the time range in
     * the HH:mmZ-HH:mmZ format. The time must be in UTC.
     * >  The time range is 1 hour.
     */
    preferredBackupTime: string | ros.IResolvable;
    /**
     * @Property backupRetentionPeriod: The number of days for which to retain full backup files. Valid values: 7 to 730.
     * >  If you do not specify this parameter, the default value 7 is used.
     */
    backupRetentionPeriod: number | ros.IResolvable | undefined;
    /**
     * @Property enableBackupLog: Specifies whether to enable real-time log backup. Valid values:
     * *   Enable
     * *   Disable
     * > If you leave this parameter empty, the default value Enable is used.
     */
    enableBackupLog: string | ros.IResolvable | undefined;
    /**
     * @Property logBackupRetentionPeriod: The number of days for which to retain log backup files. Valid values: 7 to 730.
     * >  If you do not specify this parameter, the default value 7 is used.
     */
    logBackupRetentionPeriod: number | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosBackupPolicyProps, enableResourcePropertyConstraint: boolean);
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
 * Properties for defining a `RosDBCluster`.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adb-dbcluster
 */
export interface RosDBClusterProps {
    /**
     * @Property dbClusterCategory: The cluster edition. Valid values:
     * - Cluster: reserved cluster.
     * > Reserved clusters are available only in the Chinese mainland and Singapore
     * regions. In the Singapore region, you can purchase reserved clusters only with
     * the pay-as-you-go billing method.
     * - MixedStorage: elastic cluster (new).
     * > If you set `DBClusterCategory` to `Cluster`, you must set the `Mode` parameter
     * to `Reserved`. If you set `DBClusterCategory` to `MixedStorage`, you must set the
     * `Mode` parameter to `Flexible`. Otherwise, cluster creation will fail.
     */
    readonly dbClusterCategory: string | ros.IResolvable;
    /**
     * @Property dbClusterVersion: The version of the cluster. Set the value to 3.0.
     */
    readonly dbClusterVersion: string | ros.IResolvable;
    /**
     * @Property mode: The cluster mode. Valid values:
     * - Reserved: reserved mode.
     * - Flexible: flexible mode.
     */
    readonly mode: string | ros.IResolvable;
    /**
     * @Property payType: The billing method of the cluster. Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    readonly payType: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the VPC.
     *
     */
    readonly vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The ID of the vSwitch.
     */
    readonly vSwitchId: string | ros.IResolvable;
    /**
     * @Property computeResource: The compute resources for the cluster. Compute resources are used for data
     * queries. A larger amount of compute resources can provide better query
     * performance. Compute resources are available in cluster and single-node editions:
     * - Cluster edition: includes specifications such as 16 cores\/64 GB, 24 cores\/96
     * GB, and 32 cores or more. The cluster edition supports resource pool isolation,
     * scheduled scaling, and tiered storage of hot and cold data.
     * - Single-node edition: includes specifications such as 8 cores\/32 GB and 16
     * cores\/64 GB. The single-node edition does not provide an SLA guarantee and has a
     * long recovery time from failures (4 to 8 hours). We do not recommend that you use
     * the single-node edition in production environments.
     * > * You can call the [DescribeAvailableResource]() operation to query the compute
     * resources that are available in a specific region.
     * >
     * > * This parameter is required when `Mode` is set to `Flexible` (flexible mode).
     */
    readonly computeResource?: string | ros.IResolvable;
    /**
     * @Property dbClusterClass: The specification of the cluster. This parameter is required in reserved mode. Valid values:
     * Basic Edition: T8, T16, T32, and T52
     * Cluster Edition: C8 and C32
     */
    readonly dbClusterClass?: string | ros.IResolvable;
    /**
     * @Property dbClusterDescription: The description of the cluster.
     * - The description cannot start with `http:\/\/` or `https:\/\/`.
     * - The description must be 2 to 256 characters long.
     */
    readonly dbClusterDescription?: string | ros.IResolvable;
    /**
     * @Property dbNodeGroupCount: The number of node groups. The value must be an integer from 1 to 200.
     * > This parameter is required when `Mode` is set to `Reserved` (reserved mode).
     */
    readonly dbNodeGroupCount?: number | ros.IResolvable;
    /**
     * @Property dbNodeStorage: The storage space of the node. This parameter is required in reserved mode. Unit: GB. Valid values:
     * T8: 100 to 500
     * T16 and T32: 100 to 2000
     * T52: 100 to 4000
     * C8: 100 to 1000
     * C32: 100 to 8000
     * Note The storage space less than 1,000 GB increases in increments of 100 GB. The storage space greater than 1,000 GB increases in increments of 1,000 GB.
     */
    readonly dbNodeStorage?: number | ros.IResolvable;
    /**
     * @Property diskEncryption: Whether to enable cloud disk encryption. Value:
     *
     * - true: yes.
     * - false: no.
     */
    readonly diskEncryption?: boolean | ros.IResolvable;
    /**
     * @Property elasticIoResource: The number of Elastic IO Units (EIUs).
     */
    readonly elasticIoResource?: number | ros.IResolvable;
    /**
     * @Property enableSsl: Whether to enable SSL link encryption function, value:
     *
     * - **true**: open.
     * - **false**: close.
     */
    readonly enableSsl?: boolean | ros.IResolvable;
    /**
     * @Property executorCount: This parameter is reserved.
     */
    readonly executorCount?: number | ros.IResolvable;
    /**
     * @Property kmsId: The kmsId used for cloud disk encryption, effective only when DiskEncryption is true.
     */
    readonly kmsId?: string | ros.IResolvable;
    /**
     * @Property period: The subscription period unit. Valid values:
     * - Year
     * - Month
     * > This parameter is required when `PayType` is set to `Prepaid` (subscription).
     */
    readonly period?: number | ros.IResolvable;
    /**
     * @Property periodType: The subscription period for the cluster. This parameter is required if the PayType parameter is set to Prepaid. Valid values:
     * Year: subscription on a yearly basis
     * Month: subscription on a monthly basis
     */
    readonly periodType?: string | ros.IResolvable;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    readonly resourceGroupId?: string | ros.IResolvable;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    readonly tags?: RosDBCluster.TagsProperty[];
    /**
     * @Property zoneId: The zone ID of the cluster. You can call the DescribeRegions operation to query the most recent zone list.
     */
    readonly zoneId?: string | ros.IResolvable;
}
/**
 * This class is a base encapsulation around the ROS resource type `ALIYUN::ADB::DBCluster`.
 * @Note This class does not contain additional functions, so it is recommended to use the `DBCluster` class instead of this class for a more convenient development experience.
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adb-dbcluster
 */
export declare class RosDBCluster extends ros.RosResource {
    /**
     * The resource type name for this resource class.
     */
    static readonly ROS_RESOURCE_TYPE_NAME = "ALIYUN::ADB::DBCluster";
    /**
     * @Attribute Arn: The Alibaba Cloud Resource Name (ARN).
     */
    readonly attrArn: ros.IResolvable;
    /**
     * @Attribute ConnectionString: Vpc connection string.
     */
    readonly attrConnectionString: ros.IResolvable;
    /**
     * @Attribute DBClusterId: The ID of the cluster.
     */
    readonly attrDbClusterId: ros.IResolvable;
    /**
     * @Attribute OrderId: The ID of the order.
     */
    readonly attrOrderId: ros.IResolvable;
    enableResourcePropertyConstraint: boolean;
    /**
     * @Property dbClusterCategory: The cluster edition. Valid values:
     * - Cluster: reserved cluster.
     * > Reserved clusters are available only in the Chinese mainland and Singapore
     * regions. In the Singapore region, you can purchase reserved clusters only with
     * the pay-as-you-go billing method.
     * - MixedStorage: elastic cluster (new).
     * > If you set `DBClusterCategory` to `Cluster`, you must set the `Mode` parameter
     * to `Reserved`. If you set `DBClusterCategory` to `MixedStorage`, you must set the
     * `Mode` parameter to `Flexible`. Otherwise, cluster creation will fail.
     */
    dbClusterCategory: string | ros.IResolvable;
    /**
     * @Property dbClusterVersion: The version of the cluster. Set the value to 3.0.
     */
    dbClusterVersion: string | ros.IResolvable;
    /**
     * @Property mode: The cluster mode. Valid values:
     * - Reserved: reserved mode.
     * - Flexible: flexible mode.
     */
    mode: string | ros.IResolvable;
    /**
     * @Property payType: The billing method of the cluster. Valid values:
     * Postpaid: pay-as-you-go
     * Prepaid: subscription
     */
    payType: string | ros.IResolvable;
    /**
     * @Property vpcId: The ID of the VPC.
     *
     */
    vpcId: string | ros.IResolvable;
    /**
     * @Property vSwitchId: The ID of the vSwitch.
     */
    vSwitchId: string | ros.IResolvable;
    /**
     * @Property computeResource: The compute resources for the cluster. Compute resources are used for data
     * queries. A larger amount of compute resources can provide better query
     * performance. Compute resources are available in cluster and single-node editions:
     * - Cluster edition: includes specifications such as 16 cores\/64 GB, 24 cores\/96
     * GB, and 32 cores or more. The cluster edition supports resource pool isolation,
     * scheduled scaling, and tiered storage of hot and cold data.
     * - Single-node edition: includes specifications such as 8 cores\/32 GB and 16
     * cores\/64 GB. The single-node edition does not provide an SLA guarantee and has a
     * long recovery time from failures (4 to 8 hours). We do not recommend that you use
     * the single-node edition in production environments.
     * > * You can call the [DescribeAvailableResource]() operation to query the compute
     * resources that are available in a specific region.
     * >
     * > * This parameter is required when `Mode` is set to `Flexible` (flexible mode).
     */
    computeResource: string | ros.IResolvable | undefined;
    /**
     * @Property dbClusterClass: The specification of the cluster. This parameter is required in reserved mode. Valid values:
     * Basic Edition: T8, T16, T32, and T52
     * Cluster Edition: C8 and C32
     */
    dbClusterClass: string | ros.IResolvable | undefined;
    /**
     * @Property dbClusterDescription: The description of the cluster.
     * - The description cannot start with `http:\/\/` or `https:\/\/`.
     * - The description must be 2 to 256 characters long.
     */
    dbClusterDescription: string | ros.IResolvable | undefined;
    /**
     * @Property dbNodeGroupCount: The number of node groups. The value must be an integer from 1 to 200.
     * > This parameter is required when `Mode` is set to `Reserved` (reserved mode).
     */
    dbNodeGroupCount: number | ros.IResolvable | undefined;
    /**
     * @Property dbNodeStorage: The storage space of the node. This parameter is required in reserved mode. Unit: GB. Valid values:
     * T8: 100 to 500
     * T16 and T32: 100 to 2000
     * T52: 100 to 4000
     * C8: 100 to 1000
     * C32: 100 to 8000
     * Note The storage space less than 1,000 GB increases in increments of 100 GB. The storage space greater than 1,000 GB increases in increments of 1,000 GB.
     */
    dbNodeStorage: number | ros.IResolvable | undefined;
    /**
     * @Property diskEncryption: Whether to enable cloud disk encryption. Value:
     *
     * - true: yes.
     * - false: no.
     */
    diskEncryption: boolean | ros.IResolvable | undefined;
    /**
     * @Property elasticIoResource: The number of Elastic IO Units (EIUs).
     */
    elasticIoResource: number | ros.IResolvable | undefined;
    /**
     * @Property enableSsl: Whether to enable SSL link encryption function, value:
     *
     * - **true**: open.
     * - **false**: close.
     */
    enableSsl: boolean | ros.IResolvable | undefined;
    /**
     * @Property executorCount: This parameter is reserved.
     */
    executorCount: number | ros.IResolvable | undefined;
    /**
     * @Property kmsId: The kmsId used for cloud disk encryption, effective only when DiskEncryption is true.
     */
    kmsId: string | ros.IResolvable | undefined;
    /**
     * @Property period: The subscription period unit. Valid values:
     * - Year
     * - Month
     * > This parameter is required when `PayType` is set to `Prepaid` (subscription).
     */
    period: number | ros.IResolvable | undefined;
    /**
     * @Property periodType: The subscription period for the cluster. This parameter is required if the PayType parameter is set to Prepaid. Valid values:
     * Year: subscription on a yearly basis
     * Month: subscription on a monthly basis
     */
    periodType: string | ros.IResolvable | undefined;
    /**
     * @Property resourceGroupId: The ID of the resource group.
     */
    resourceGroupId: string | ros.IResolvable | undefined;
    /**
     * @Property tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
     */
    tags: RosDBCluster.TagsProperty[] | undefined;
    /**
     * @Property zoneId: The zone ID of the cluster. You can call the DescribeRegions operation to query the most recent zone list.
     */
    zoneId: string | ros.IResolvable | undefined;
    /**
     * @param scope - scope in which this resource is defined
     * @param id    - scoped id of the resource
     * @param props - resource properties
     */
    constructor(scope: ros.Construct, id: string, props: RosDBClusterProps, enableResourcePropertyConstraint: boolean);
    protected get rosProperties(): {
        [key: string]: any;
    };
    protected renderProperties(props: {
        [key: string]: any;
    }): {
        [key: string]: any;
    };
}
export declare namespace RosDBCluster {
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
