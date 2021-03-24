using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::RDS::DBInstanceClone`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-rds.RosDBInstanceCloneProps")]
    public class RosDBInstanceCloneProps : AlibabaCloud.SDK.ROS.CDK.Rds.IRosDBInstanceCloneProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dbInstanceId: Instance id
        /// </remarks>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string DbInstanceId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: payType: The charge type of created instance.
        /// </remarks>
        [JsiiProperty(name: "payType", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string PayType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: allocatePublicConnection: If true, allocate public connection automate.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "allocatePublicConnection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AllocatePublicConnection
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: backupId: The ID of the backup set that you want to use. 
        /// You can call the DescribeBackups operation to query the most recent backup set list. 
        /// Note You must specify at least one of the BackupId and RestoreTime parameters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "backupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? BackupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "backupRetentionPeriod", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? BackupRetentionPeriod
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: backupType: The type of backup used by the new instance. Valid values: 
        /// - FullBackup: full backup 
        /// - IncrementalBackup: incremental backup
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "backupType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? BackupType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: category: The edition of the instance. Valid values:
        /// Basic: specifies to use the Basic Edition.
        /// HighAvailability: specifies to use the High-availability Edition.
        /// AlwaysOn: specifies to use the Cluster Edition.
        /// Finance: specifies to use the Enterprise Edition.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "category", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Category
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: connectionStringPrefix: The prefix of the endpoint. 
        /// Only the prefix of the CurrentConnectionString parameter value can be modified.
        /// The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "connectionStringPrefix", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ConnectionStringPrefix
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: connectionStringType: The endpoint type of the instance, allow values: Inner, Public
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "connectionStringType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ConnectionStringType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbInstanceClass", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DbInstanceClass
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceDescription: Description of created database instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbInstanceDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DbInstanceDescription
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbInstanceStorage", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? DbInstanceStorage
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceStorageType: The storage type of the instance. Valid values:
        /// local_ssd: specifies to use local SSDs. This is the recommended storage type.
        /// cloud_ssd: specifies to use standard SSDs.
        /// cloud_essd: specifies to use enhanced SSDs.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbInstanceStorageType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DbInstanceStorageType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbMappings: Database mappings to attach to db instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbMappings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-rds.RosDBInstanceClone.DBMappingsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? DbMappings
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbNames: The names of the databases that you want to create on the new instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbNames", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DbNames
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dedicatedHostGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DedicatedHostGroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceNetworkType: The network type of the new instance. Valid values: 
        /// - VPC 
        /// - Classic 
        /// The default value is the network type of the original instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceNetworkType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? InstanceNetworkType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "maintainTime", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? MaintainTime
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: masterUsername: The master user name for the database instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "masterUsername", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? MasterUsername
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: masterUserPassword: The master password for the database instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "masterUserPassword", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? MasterUserPassword
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: masterUserType: Privilege type of account.
        /// Normal: Common privilege. 
        /// Super: High privilege. 
        /// Sysadmin: Super privileges (SA) (only supported by SQL Server)
        /// The default value is Normal.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "masterUserType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? MasterUserType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Period
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: periodType: Charge period for created instances.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "periodType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PeriodType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: port: The port of the database service.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Port
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "preferredBackupPeriod", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? PreferredBackupPeriod
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "preferredBackupTime", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PreferredBackupTime
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: privateIpAddress: The private ip for created instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "privateIpAddress", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PrivateIpAddress
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: restoreTable: Specifies whether to restore specific databases and tables. 
        /// The value 1 specifies to restore specific databases and tables. 
        /// If you do not want to restore specific databases or tables, you can choose not to specify this parameter.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "restoreTable", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RestoreTable
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: restoreTime: The point in time to which you want to restore the data of the original instance. 
        /// The point in time must fall within the specified log backup retention period. 
        /// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. 
        /// The time must be in UTC.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "restoreTime", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RestoreTime
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupId: The ID of the ECS security groups. 
        /// Each RDS instance can be associated with up to three ECS security groups. 
        /// You must separate them with commas (,). 
        /// To delete an ECS Security group, leave this parameter empty.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SecurityGroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityIpList", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SecurityIpList
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b". Of course, you can also choose automatic allocation, for example, ZoneId = "zone-a" and SlaveZoneIds = ["Auto", "Auto"], then the VSwitchId must be "vsw-zone-a,Auto,Auto". The list contains up to 2 slave zone ids, separated by commas.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "slaveZoneIds", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public string[]? SlaveZoneIds
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature. 
        /// Valid values:Enable | Disabled.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sqlCollectorStatus", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SqlCollectorStatus
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
        /// Disabled: Disable SSL
        /// EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
        /// EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
        /// Default value is Disabled.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sslSetting", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SslSetting
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: tableMeta: The information about the databases and tables that you want to restore.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tableMeta", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-rds.RosDBInstanceClone.TableMetaProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? TableMeta
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: The tags of an instance.
        /// You should input the information of the tag with the format of the Key-Value, such as {"key1":"value1","key2":"value2", ... "key5":"value5"}.
        /// At most 5 tags can be specified.
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
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public AlibabaCloud.SDK.ROS.CDK.Core.IRosTag[]? Tags
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: timeoutInMinutes: The timeout period for creating the clone instance resource. Unit: Minute. Default: 120.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "timeoutInMinutes", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? TimeoutInMinutes
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The VPC id of created database instance. For VPC network, the property is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VpcId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? VSwitchId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ZoneId
        {
            get;
            set;
        }
    }
}
