using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    /// <summary>Properties for defining a `PrepayDBInstance`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-prepaydbinstance
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IPrepayDBInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.PrepayDBInstanceProps")]
    public interface IPrepayDBInstanceProps
    {
        /// <summary>Property commodityCode: The CommodityCode of the order.</summary>
        [JsiiProperty(name: "commodityCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CommodityCode
        {
            get;
        }

        /// <summary>Property dbInstanceClass: Database instance type.</summary>
        /// <remarks>
        /// Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        /// </remarks>
        [JsiiProperty(name: "dbInstanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceClass
        {
            get;
        }

        /// <summary>Property dbInstanceStorage: The storage capacity of the instance.</summary>
        /// <remarks>
        /// Unit: GB. The storage capacity increases in increments of 5 GB.
        /// You can call the DescribeAvailableResource operation to query the storage capacity range that is supported for a specified instance type in a region.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceStorage
        {
            get;
        }

        /// <summary>Property engine: Database instance engine type.</summary>
        /// <remarks>
        /// Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
        /// </remarks>
        [JsiiProperty(name: "engine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Engine
        {
            get;
        }

        /// <summary>Property engineVersion: Database instance version of the relative engine type.</summary>
        /// <remarks>
        /// Support:
        /// Valid values when you set the Engine parameter to MySQL: 5.5, 5.6, 5.7, and 8.0
        /// Valid values when you set the Engine parameter to SQL Server: 2008r2, 08r2_ent_ha, 2012, 2012_ent_ha, 2012_std_ha, 2012_web, 2014_std_ha, 2016_ent_ha, 2016_std_ha, 2016_web, 2017_std_ha, 2017_ent, 2019_std_ha, and 2019_ent
        /// Valid values when you set the Engine parameter to PostgreSQL: 10.0, 11.0, 12.0, 13.0, and 14.0
        /// Valid values when you set the Engine parameter to MariaDB: 10.3
        /// </remarks>
        [JsiiProperty(name: "engineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EngineVersion
        {
            get;
        }

        /// <summary>Property period: Prepaid time period.</summary>
        /// <remarks>
        /// While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Period
        {
            get;
        }

        /// <summary>Property periodType: Charge period for created instances.</summary>
        [JsiiProperty(name: "periodType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PeriodType
        {
            get;
        }

        /// <summary>Property allocatePublicConnection: If true, allocate public connection automate.</summary>
        [JsiiProperty(name: "allocatePublicConnection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AllocatePublicConnection
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property archiveBackupKeepCount: The number of archived backups that can be retained.</summary>
        /// <remarks>
        /// Default value: 1. Valid values:
        /// The value of this parameter ranges from 1 to 31 when the ArchiveBackupKeepPolicy
        /// parameter is set to ByMonth.
        /// The value of this parameter ranges from 1 to 7 when the ArchiveBackupKeepPolicy
        /// parameter is set to ByWeek.
        /// Note You do not need to specify this parameter when the ArchiveBackupKeepPolicy
        /// parameter is set to KeepAll.
        /// </remarks>
        [JsiiProperty(name: "archiveBackupKeepCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ArchiveBackupKeepCount
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property archiveBackupKeepPolicy: The period for which to retain archived backups.</summary>
        /// <remarks>
        /// The number of archived backups that can
        /// be retained within the specified period is determined by the ArchiveBackupKeepCount parameter.
        /// Default value: 0. Valid values:
        /// ByMonth
        /// ByWeek
        /// KeepAll
        /// </remarks>
        [JsiiProperty(name: "archiveBackupKeepPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ArchiveBackupKeepPolicy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property archiveBackupRetentionPeriod: The number of days for which to retain archived backups.</summary>
        /// <remarks>
        /// The default value 0 specifies not to enable the backup archiving function. Valid values: 30 to 1095.
        /// </remarks>
        [JsiiProperty(name: "archiveBackupRetentionPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ArchiveBackupRetentionPeriod
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoPay: Automatic Payment.</summary>
        /// <remarks>
        /// Default is true.
        /// </remarks>
        [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoPay
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoRenew: Auto renew the prepay instance.</summary>
        /// <remarks>
        /// If the period type is by year, it will renew by year, else it will renew by month.
        /// </remarks>
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoRenew
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property backUpCategory: Specifies whether to enable the second-level backup function.</summary>
        /// <remarks>
        /// This function allows a backup
        /// to be completed within seconds. Valid values:
        /// Flash: specifies to enable the second-level backup function.
        /// Standard: specifies to disable the second-level backup function.
        /// </remarks>
        [JsiiProperty(name: "backUpCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BackUpCategory
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property backupPolicyMode: Backup type,  DataBackupPolicy: data backup  LogBackupPolicy: log backup.</summary>
        [JsiiProperty(name: "backupPolicyMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BackupPolicyMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property backupRetentionPeriod: The retention period of the data backup.</summary>
        /// <remarks>
        /// Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
        /// </remarks>
        [JsiiProperty(name: "backupRetentionPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BackupRetentionPeriod
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property burstingEnabled: Whether to enable bursting.</summary>
        [JsiiProperty(name: "burstingEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BurstingEnabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property category: The edition of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// Basic: RDS Basic Edition
        /// HighAvailability: RDS High-availability Edition
        /// cluster: RDS Cluster Edition
        /// AlwaysOn: RDS Cluster Edition for SQL Server
        /// Finance: RDS Enterprise Edition
        /// serverless_basic: RDS Serverless Basic Edition
        /// </remarks>
        [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Category
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property coldDataEnabled: Whether to enable cold data storage.</summary>
        [JsiiProperty(name: "coldDataEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ColdDataEnabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property compressType: The format used to compress backups.</summary>
        /// <remarks>
        /// Valid values:
        /// 1: The zlib tool is used to compress backups into .tar.gz files.
        /// 4: The QuickLZ tool is used to compress backups into .xb.gz files.
        /// This compression format is supported only when the instance runs MySQL 5.6 or 5.7.
        /// It can be used to restore individual databases and tables.
        /// 8: The QuickLZ tool is used to compress backups into .xb.gz files.
        /// This compression format is supported only when the instance runs MySQL 8.0.
        /// It cannot be used to restore individual databases or tables.
        /// </remarks>
        [JsiiProperty(name: "compressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CompressType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode.</summary>
        /// <remarks>
        /// Default is RDS system assigns.
        /// </remarks>
        [JsiiProperty(name: "connectionMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ConnectionMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property connectionStringPrefix: The prefix of the endpoint.</summary>
        /// <remarks>
        /// Only the prefix of the CurrentConnectionString parameter value can be modified.
        /// The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
        /// </remarks>
        [JsiiProperty(name: "connectionStringPrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ConnectionStringPrefix
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public.</summary>
        [JsiiProperty(name: "connectionStringType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ConnectionStringType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property couponCode: The coupon code of the order.</summary>
        [JsiiProperty(name: "couponCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CouponCode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbInstanceDescription: Description of created database instance.</summary>
        [JsiiProperty(name: "dbInstanceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbInstanceDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.</summary>
        [JsiiProperty(name: "dbInstanceNetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbInstanceNetType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbInstanceStorageType: The storage type of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// local_ssd: specifies to use local SSDs. This is the recommended storage type.
        /// cloud_ssd: specifies to use standard SSDs.
        /// cloud_essd: enhanced SSD of performance level (PL)1.
        /// cloud_essd2: enhanced SSD of PL2.
        /// cloud_essd3: enhanced SSD of PL3.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceStorageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbInstanceStorageType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbIsIgnoreCase: Specifies whether table names are case-sensitive.</summary>
        /// <remarks>
        /// Valid values:
        /// 1: Table names are not case-sensitive. This is the default value.
        /// 0: Table names are case-sensitive.
        /// </remarks>
        [JsiiProperty(name: "dbIsIgnoreCase", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbIsIgnoreCase
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbMappings: Database mappings to attach to db instance.</summary>
        [JsiiProperty(name: "dbMappings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-rds.RosPrepayDBInstance.DBMappingsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbMappings
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbParamGroupId: The ID of the parameter template used by the instance.</summary>
        [JsiiProperty(name: "dbParamGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbParamGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbTimeZone: The UTC time zone of the instance.</summary>
        /// <remarks>
        /// Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
        /// </remarks>
        [JsiiProperty(name: "dbTimeZone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbTimeZone
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.</summary>
        [JsiiProperty(name: "dedicatedHostGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DedicatedHostGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property deletionProtection: Specifies whether to enable the release protection feature for the instance.</summary>
        /// <remarks>
        /// This feature is available only for pay-as-you-go instances. Default is false.
        /// </remarks>
        [JsiiProperty(name: "deletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeletionProtection
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableBackupLog: Specifies whether to enable the log backup function.</summary>
        /// <remarks>
        /// Valid values:
        /// True: specifies to enable the log backup function.
        /// False: specifies to disable the log backup function.
        /// Note You must specify this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
        /// </remarks>
        [JsiiProperty(name: "enableBackupLog", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableBackupLog
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region.</summary>
        /// <remarks>
        /// You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
        /// </remarks>
        [JsiiProperty(name: "encryptionKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EncryptionKey
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property highSpaceUsageProtection: Specifies whether to forcibly delete log backup files when the space usage of the    instance exceeds 80% or the remaining space is less than 5 GB.</summary>
        /// <remarks>
        /// Valid values:
        /// Enable and Disable. You can retain the default value. Note You must specify
        /// this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
        /// </remarks>
        [JsiiProperty(name: "highSpaceUsageProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HighSpaceUsageProtection
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property instanceNetworkType: Instance network type, VPC or Classic.</summary>
        [JsiiProperty(name: "instanceNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? InstanceNetworkType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ioAccelerationEnabled: Whether to enable IO Acceleration, 1 for enable 0 for disable.</summary>
        [JsiiProperty(name: "ioAccelerationEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IoAccelerationEnabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property localLogRetentionHours: The number of hours for which to retain log backup files on the instance.</summary>
        /// <remarks>
        /// Valid values: 0 to 168. The value 0 specifies not to retain log backup files on the instance.
        /// You can retain the default value. Note You must specify this parameter when the BackupPolicyMode
        /// parameter is set to LogBackupPolicy.
        /// </remarks>
        [JsiiProperty(name: "localLogRetentionHours", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LocalLogRetentionHours
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property localLogRetentionSpace: The maximum percentage of space that is allowed to store log backup files on the instance.</summary>
        /// <remarks>
        /// If the space usage for log backup files exceeds this percentage, the system deletes earlier
        /// log backup files until the space usage falls below this percentage. Valid values:0 to 50.
        /// You can retain the default value. Note You must specify this parameter when the
        /// BackupPolicyMode parameter is set to LogBackupPolicy.
        /// </remarks>
        [JsiiProperty(name: "localLogRetentionSpace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LocalLogRetentionSpace
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property logBackupFrequency: The frequency at which to back up logs.</summary>
        /// <remarks>
        /// Valid values:
        /// The value LogInterval specifies to back up logs every 30 minutes.
        /// The default value of this parameter is the same as the data backup frequency.
        /// Note The value LogInterval is supported only when the instance runs SQL Server.
        /// </remarks>
        [JsiiProperty(name: "logBackupFrequency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LogBackupFrequency
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property logBackupLocalRetentionNumber: The number of log backup files that can be retained on the instance.</summary>
        /// <remarks>
        /// Default value: 60. Valid values: 6 to 100.
        /// </remarks>
        [JsiiProperty(name: "logBackupLocalRetentionNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LogBackupLocalRetentionNumber
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property logBackupRetentionPeriod: The number of days for which to retain log backup files.</summary>
        /// <remarks>
        /// Valid values: 7 to 730. The log backup
        /// retention period cannot be longer than the data backup retention period.Note If you enable the log
        /// backup function, you can specify the log backup retention period. This applies only when the
        /// instance runs MySQL, PostgreSQL, or PPAS.
        /// </remarks>
        [JsiiProperty(name: "logBackupRetentionPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LogBackupRetentionPeriod
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property maintainTime: The period during which the maintenance performs.</summary>
        /// <remarks>
        /// The format is HH:mmZ-HH:mmZ.
        /// </remarks>
        [JsiiProperty(name: "maintainTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaintainTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property masterUsername: The master user name for the database instance.</summary>
        [JsiiProperty(name: "masterUsername", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MasterUsername
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property masterUserPassword: The master password for the database instance.</summary>
        [JsiiProperty(name: "masterUserPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MasterUserPassword
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property masterUserType: Privilege type of account.</summary>
        /// <remarks>
        /// Normal: Common privilege.
        /// Super: High privilege.
        /// Sysadmin: Super privileges (SA) (only supported by SQL Server)
        /// The default value is Normal.
        /// </remarks>
        [JsiiProperty(name: "masterUserType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MasterUserType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property multiAz: Specifies if the database instance is a multiple Availability Zone deployment.</summary>
        [JsiiProperty(name: "multiAz", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MultiAz
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property port: The port of the database service.</summary>
        [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Port
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property preferredBackupPeriod: The backup period.</summary>
        /// <remarks>
        /// Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        /// </remarks>
        [JsiiProperty(name: "preferredBackupPeriod", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PreferredBackupPeriod
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property preferredBackupTime: The time when the backup task is performed.</summary>
        /// <remarks>
        /// Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        /// </remarks>
        [JsiiProperty(name: "preferredBackupTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PreferredBackupTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property privateIpAddress: The private ip for created instance.</summary>
        [JsiiProperty(name: "privateIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PrivateIpAddress
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property quantity: The number of instance to be created, default is 1, max number is 99.</summary>
        [JsiiProperty(name: "quantity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Quantity
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property releasedKeepPolicy: The policy used to retain archived backups if the instance is released.</summary>
        /// <remarks>
        /// Default value: None.
        /// Valid values:
        /// Lastest: Only the last archived backup is retained.
        /// All: All of the archived backups are retained.
        /// </remarks>
        [JsiiProperty(name: "releasedKeepPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ReleasedKeepPolicy
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: Resource group id.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS.</summary>
        /// <remarks>
        /// You can copy the ARN from the RAM console.
        /// </remarks>
        [JsiiProperty(name: "roleArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RoleArn
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityGroupId: The ID of the ECS security groups.</summary>
        /// <remarks>
        /// Each RDS instance can be associated with up to three ECS security groups.
        /// You must separate them with commas (,).
        /// To delete an ECS Security group, leave this parameter empty.
        /// </remarks>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property serverlessConfig: The config of RDS serverless instance.</summary>
        /// <remarks>
        /// This is required when creating serverless instance.
        /// </remarks>
        [JsiiProperty(name: "serverlessConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-rds.RosPrepayDBInstance.ServerlessConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServerlessConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance.</summary>
        /// <remarks>
        /// Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
        /// </remarks>
        [JsiiProperty(name: "slaveZoneIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SlaveZoneIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.</summary>
        /// <remarks>
        /// Valid values:Enable | Disabled.
        /// </remarks>
        [JsiiProperty(name: "sqlCollectorStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SqlCollectorStatus
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance.</summary>
        /// <remarks>
        /// Valid values:
        /// Disabled: Disable SSL
        /// EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
        /// EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
        /// Default value is Disabled.
        /// </remarks>
        [JsiiProperty(name: "sslSetting", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SslSetting
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property storageAutoScale: Storage space automatic expansion switch, only supported by MySQL and PostgreSQL.</summary>
        [JsiiProperty(name: "storageAutoScale", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StorageAutoScale
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property storageThreshold: Storage space automatic expansion trigger threshold (percentage).</summary>
        [JsiiProperty(name: "storageThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StorageThreshold
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property storageUpperBound: The total storage space upper limit for automatic storage space expansion, that is, automatic expansion will not cause the total storage space of the instance to exceed this value.</summary>
        [JsiiProperty(name: "storageUpperBound", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StorageUpperBound
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: The tags of an instance.</summary>
        /// <remarks>
        /// You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
        /// At most 20 tags can be specified.
        /// Key
        /// It can be up to 64 characters in length.
        /// Cannot begin with aliyun.
        /// Cannot begin with http:// or https://.
        /// Cannot be a null string.
        /// Value
        /// It can be up to 128 characters in length.
        /// Cannot begin with aliyun.
        /// Cannot begin with http:// or https://.
        /// Can be a null string.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, object>? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.</summary>
        [JsiiProperty(name: "targetDedicatedHostIdForLog", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TargetDedicatedHostIdForLog
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.</summary>
        [JsiiProperty(name: "targetDedicatedHostIdForMaster", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TargetDedicatedHostIdForMaster
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.</summary>
        [JsiiProperty(name: "targetDedicatedHostIdForSlave", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TargetDedicatedHostIdForSlave
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcId: The VPC id of created database instance.</summary>
        /// <remarks>
        /// For VPC network, the property is required.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchId: The vSwitch id of created instance.</summary>
        /// <remarks>
        /// For VPC network, the property is required.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property zoneId: selected zone to create database instance.</summary>
        /// <remarks>
        /// You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `PrepayDBInstance`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-prepaydbinstance
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IPrepayDBInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.PrepayDBInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rds.IPrepayDBInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property commodityCode: The CommodityCode of the order.</summary>
            [JsiiProperty(name: "commodityCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CommodityCode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbInstanceClass: Database instance type.</summary>
            /// <remarks>
            /// Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
            /// </remarks>
            [JsiiProperty(name: "dbInstanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceClass
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbInstanceStorage: The storage capacity of the instance.</summary>
            /// <remarks>
            /// Unit: GB. The storage capacity increases in increments of 5 GB.
            /// You can call the DescribeAvailableResource operation to query the storage capacity range that is supported for a specified instance type in a region.
            /// </remarks>
            [JsiiProperty(name: "dbInstanceStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceStorage
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property engine: Database instance engine type.</summary>
            /// <remarks>
            /// Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
            /// </remarks>
            [JsiiProperty(name: "engine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Engine
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property engineVersion: Database instance version of the relative engine type.</summary>
            /// <remarks>
            /// Support:
            /// Valid values when you set the Engine parameter to MySQL: 5.5, 5.6, 5.7, and 8.0
            /// Valid values when you set the Engine parameter to SQL Server: 2008r2, 08r2_ent_ha, 2012, 2012_ent_ha, 2012_std_ha, 2012_web, 2014_std_ha, 2016_ent_ha, 2016_std_ha, 2016_web, 2017_std_ha, 2017_ent, 2019_std_ha, and 2019_ent
            /// Valid values when you set the Engine parameter to PostgreSQL: 10.0, 11.0, 12.0, 13.0, and 14.0
            /// Valid values when you set the Engine parameter to MariaDB: 10.3
            /// </remarks>
            [JsiiProperty(name: "engineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EngineVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property period: Prepaid time period.</summary>
            /// <remarks>
            /// While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
            /// </remarks>
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Period
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property periodType: Charge period for created instances.</summary>
            [JsiiProperty(name: "periodType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PeriodType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property allocatePublicConnection: If true, allocate public connection automate.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "allocatePublicConnection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AllocatePublicConnection
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property archiveBackupKeepCount: The number of archived backups that can be retained.</summary>
            /// <remarks>
            /// Default value: 1. Valid values:
            /// The value of this parameter ranges from 1 to 31 when the ArchiveBackupKeepPolicy
            /// parameter is set to ByMonth.
            /// The value of this parameter ranges from 1 to 7 when the ArchiveBackupKeepPolicy
            /// parameter is set to ByWeek.
            /// Note You do not need to specify this parameter when the ArchiveBackupKeepPolicy
            /// parameter is set to KeepAll.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "archiveBackupKeepCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ArchiveBackupKeepCount
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property archiveBackupKeepPolicy: The period for which to retain archived backups.</summary>
            /// <remarks>
            /// The number of archived backups that can
            /// be retained within the specified period is determined by the ArchiveBackupKeepCount parameter.
            /// Default value: 0. Valid values:
            /// ByMonth
            /// ByWeek
            /// KeepAll
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "archiveBackupKeepPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ArchiveBackupKeepPolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property archiveBackupRetentionPeriod: The number of days for which to retain archived backups.</summary>
            /// <remarks>
            /// The default value 0 specifies not to enable the backup archiving function. Valid values: 30 to 1095.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "archiveBackupRetentionPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ArchiveBackupRetentionPeriod
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoPay: Automatic Payment.</summary>
            /// <remarks>
            /// Default is true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoPay
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoRenew: Auto renew the prepay instance.</summary>
            /// <remarks>
            /// If the period type is by year, it will renew by year, else it will renew by month.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoRenew
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property backUpCategory: Specifies whether to enable the second-level backup function.</summary>
            /// <remarks>
            /// This function allows a backup
            /// to be completed within seconds. Valid values:
            /// Flash: specifies to enable the second-level backup function.
            /// Standard: specifies to disable the second-level backup function.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "backUpCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BackUpCategory
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property backupPolicyMode: Backup type,  DataBackupPolicy: data backup  LogBackupPolicy: log backup.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "backupPolicyMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BackupPolicyMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property backupRetentionPeriod: The retention period of the data backup.</summary>
            /// <remarks>
            /// Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "backupRetentionPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BackupRetentionPeriod
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property burstingEnabled: Whether to enable bursting.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "burstingEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BurstingEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property category: The edition of the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// Basic: RDS Basic Edition
            /// HighAvailability: RDS High-availability Edition
            /// cluster: RDS Cluster Edition
            /// AlwaysOn: RDS Cluster Edition for SQL Server
            /// Finance: RDS Enterprise Edition
            /// serverless_basic: RDS Serverless Basic Edition
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Category
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property coldDataEnabled: Whether to enable cold data storage.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "coldDataEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ColdDataEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property compressType: The format used to compress backups.</summary>
            /// <remarks>
            /// Valid values:
            /// 1: The zlib tool is used to compress backups into .tar.gz files.
            /// 4: The QuickLZ tool is used to compress backups into .xb.gz files.
            /// This compression format is supported only when the instance runs MySQL 5.6 or 5.7.
            /// It can be used to restore individual databases and tables.
            /// 8: The QuickLZ tool is used to compress backups into .xb.gz files.
            /// This compression format is supported only when the instance runs MySQL 8.0.
            /// It cannot be used to restore individual databases or tables.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "compressType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CompressType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode.</summary>
            /// <remarks>
            /// Default is RDS system assigns.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "connectionMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ConnectionMode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property connectionStringPrefix: The prefix of the endpoint.</summary>
            /// <remarks>
            /// Only the prefix of the CurrentConnectionString parameter value can be modified.
            /// The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "connectionStringPrefix", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ConnectionStringPrefix
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property connectionStringType: The endpoint type of the instance, allow values: Inner, Public.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "connectionStringType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ConnectionStringType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property couponCode: The coupon code of the order.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "couponCode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CouponCode
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbInstanceDescription: Description of created database instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dbInstanceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbInstanceDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dbInstanceNetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbInstanceNetType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbInstanceStorageType: The storage type of the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// local_ssd: specifies to use local SSDs. This is the recommended storage type.
            /// cloud_ssd: specifies to use standard SSDs.
            /// cloud_essd: enhanced SSD of performance level (PL)1.
            /// cloud_essd2: enhanced SSD of PL2.
            /// cloud_essd3: enhanced SSD of PL3.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbInstanceStorageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbInstanceStorageType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbIsIgnoreCase: Specifies whether table names are case-sensitive.</summary>
            /// <remarks>
            /// Valid values:
            /// 1: Table names are not case-sensitive. This is the default value.
            /// 0: Table names are case-sensitive.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbIsIgnoreCase", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbIsIgnoreCase
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbMappings: Database mappings to attach to db instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dbMappings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-rds.RosPrepayDBInstance.DBMappingsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DbMappings
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbParamGroupId: The ID of the parameter template used by the instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dbParamGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbParamGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbTimeZone: The UTC time zone of the instance.</summary>
            /// <remarks>
            /// Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbTimeZone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbTimeZone
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dedicatedHostGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DedicatedHostGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deletionProtection: Specifies whether to enable the release protection feature for the instance.</summary>
            /// <remarks>
            /// This feature is available only for pay-as-you-go instances. Default is false.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "deletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeletionProtection
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableBackupLog: Specifies whether to enable the log backup function.</summary>
            /// <remarks>
            /// Valid values:
            /// True: specifies to enable the log backup function.
            /// False: specifies to disable the log backup function.
            /// Note You must specify this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableBackupLog", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableBackupLog
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region.</summary>
            /// <remarks>
            /// You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "encryptionKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EncryptionKey
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property highSpaceUsageProtection: Specifies whether to forcibly delete log backup files when the space usage of the    instance exceeds 80% or the remaining space is less than 5 GB.</summary>
            /// <remarks>
            /// Valid values:
            /// Enable and Disable. You can retain the default value. Note You must specify
            /// this parameter when the BackupPolicyMode parameter is set to LogBackupPolicy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "highSpaceUsageProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? HighSpaceUsageProtection
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property instanceNetworkType: Instance network type, VPC or Classic.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "instanceNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? InstanceNetworkType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ioAccelerationEnabled: Whether to enable IO Acceleration, 1 for enable 0 for disable.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ioAccelerationEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IoAccelerationEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property localLogRetentionHours: The number of hours for which to retain log backup files on the instance.</summary>
            /// <remarks>
            /// Valid values: 0 to 168. The value 0 specifies not to retain log backup files on the instance.
            /// You can retain the default value. Note You must specify this parameter when the BackupPolicyMode
            /// parameter is set to LogBackupPolicy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "localLogRetentionHours", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LocalLogRetentionHours
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property localLogRetentionSpace: The maximum percentage of space that is allowed to store log backup files on the instance.</summary>
            /// <remarks>
            /// If the space usage for log backup files exceeds this percentage, the system deletes earlier
            /// log backup files until the space usage falls below this percentage. Valid values:0 to 50.
            /// You can retain the default value. Note You must specify this parameter when the
            /// BackupPolicyMode parameter is set to LogBackupPolicy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "localLogRetentionSpace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LocalLogRetentionSpace
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property logBackupFrequency: The frequency at which to back up logs.</summary>
            /// <remarks>
            /// Valid values:
            /// The value LogInterval specifies to back up logs every 30 minutes.
            /// The default value of this parameter is the same as the data backup frequency.
            /// Note The value LogInterval is supported only when the instance runs SQL Server.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "logBackupFrequency", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LogBackupFrequency
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property logBackupLocalRetentionNumber: The number of log backup files that can be retained on the instance.</summary>
            /// <remarks>
            /// Default value: 60. Valid values: 6 to 100.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "logBackupLocalRetentionNumber", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LogBackupLocalRetentionNumber
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property logBackupRetentionPeriod: The number of days for which to retain log backup files.</summary>
            /// <remarks>
            /// Valid values: 7 to 730. The log backup
            /// retention period cannot be longer than the data backup retention period.Note If you enable the log
            /// backup function, you can specify the log backup retention period. This applies only when the
            /// instance runs MySQL, PostgreSQL, or PPAS.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "logBackupRetentionPeriod", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LogBackupRetentionPeriod
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property maintainTime: The period during which the maintenance performs.</summary>
            /// <remarks>
            /// The format is HH:mmZ-HH:mmZ.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "maintainTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaintainTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property masterUsername: The master user name for the database instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "masterUsername", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MasterUsername
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property masterUserPassword: The master password for the database instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "masterUserPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MasterUserPassword
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property masterUserType: Privilege type of account.</summary>
            /// <remarks>
            /// Normal: Common privilege.
            /// Super: High privilege.
            /// Sysadmin: Super privileges (SA) (only supported by SQL Server)
            /// The default value is Normal.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "masterUserType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MasterUserType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property multiAz: Specifies if the database instance is a multiple Availability Zone deployment.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "multiAz", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MultiAz
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property port: The port of the database service.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "port", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Port
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property preferredBackupPeriod: The backup period.</summary>
            /// <remarks>
            /// Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "preferredBackupPeriod", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? PreferredBackupPeriod
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property preferredBackupTime: The time when the backup task is performed.</summary>
            /// <remarks>
            /// Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "preferredBackupTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PreferredBackupTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property privateIpAddress: The private ip for created instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "privateIpAddress", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PrivateIpAddress
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property quantity: The number of instance to be created, default is 1, max number is 99.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "quantity", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Quantity
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property releasedKeepPolicy: The policy used to retain archived backups if the instance is released.</summary>
            /// <remarks>
            /// Default value: None.
            /// Valid values:
            /// Lastest: Only the last archived backup is retained.
            /// All: All of the archived backups are retained.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "releasedKeepPolicy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ReleasedKeepPolicy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: Resource group id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS.</summary>
            /// <remarks>
            /// You can copy the ARN from the RAM console.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "roleArn", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RoleArn
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityGroupId: The ID of the ECS security groups.</summary>
            /// <remarks>
            /// Each RDS instance can be associated with up to three ECS security groups.
            /// You must separate them with commas (,).
            /// To delete an ECS Security group, leave this parameter empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecurityGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property serverlessConfig: The config of RDS serverless instance.</summary>
            /// <remarks>
            /// This is required when creating serverless instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serverlessConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-rds.RosPrepayDBInstance.ServerlessConfigProperty\"}]}}", isOptional: true)]
            public object? ServerlessConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance.</summary>
            /// <remarks>
            /// Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b".
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "slaveZoneIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SlaveZoneIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature.</summary>
            /// <remarks>
            /// Valid values:Enable | Disabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sqlCollectorStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SqlCollectorStatus
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sslSetting: Secure Sockets Layer (SSL) link setting of the instance.</summary>
            /// <remarks>
            /// Valid values:
            /// Disabled: Disable SSL
            /// EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
            /// EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
            /// Default value is Disabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sslSetting", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SslSetting
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property storageAutoScale: Storage space automatic expansion switch, only supported by MySQL and PostgreSQL.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "storageAutoScale", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StorageAutoScale
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property storageThreshold: Storage space automatic expansion trigger threshold (percentage).</summary>
            [JsiiOptional]
            [JsiiProperty(name: "storageThreshold", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StorageThreshold
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property storageUpperBound: The total storage space upper limit for automatic storage space expansion, that is, automatic expansion will not cause the total storage space of the instance to exceed this value.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "storageUpperBound", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StorageUpperBound
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: The tags of an instance.</summary>
            /// <remarks>
            /// You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
            /// At most 20 tags can be specified.
            /// Key
            /// It can be up to 64 characters in length.
            /// Cannot begin with aliyun.
            /// Cannot begin with http:// or https://.
            /// Cannot be a null string.
            /// Value
            /// It can be up to 128 characters in length.
            /// Cannot begin with aliyun.
            /// Cannot begin with http:// or https://.
            /// Can be a null string.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, object>? Tags
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>?>();
            }

            /// <summary>Property targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "targetDedicatedHostIdForLog", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TargetDedicatedHostIdForLog
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "targetDedicatedHostIdForMaster", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TargetDedicatedHostIdForMaster
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "targetDedicatedHostIdForSlave", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TargetDedicatedHostIdForSlave
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vpcId: The VPC id of created database instance.</summary>
            /// <remarks>
            /// For VPC network, the property is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vSwitchId: The vSwitch id of created instance.</summary>
            /// <remarks>
            /// For VPC network, the property is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property zoneId: selected zone to create database instance.</summary>
            /// <remarks>
            /// You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ZoneId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
