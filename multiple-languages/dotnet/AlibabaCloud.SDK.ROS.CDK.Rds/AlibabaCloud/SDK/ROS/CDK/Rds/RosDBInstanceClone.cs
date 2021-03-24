using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    /// <summary>A ROS template type:  `ALIYUN::RDS::DBInstanceClone`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Rds.RosDBInstanceClone), fullyQualifiedName: "@alicloud/ros-cdk-rds.RosDBInstanceClone", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-rds.RosDBInstanceCloneProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosDBInstanceClone : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::RDS::DBInstanceClone`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosDBInstanceClone(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Rds.IRosDBInstanceCloneProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosDBInstanceClone(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosDBInstanceClone(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]", isOverride: true)]
        protected override System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>The resource type name for this resource class.</summary>
        [JsiiProperty(name: "ROS_RESOURCE_TYPE_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string ROS_RESOURCE_TYPE_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Rds.RosDBInstanceClone))!;

        /// <remarks>
        /// <strong>Attribute</strong>: DBInstanceId: The instance id of created database instance.
        /// </remarks>
        [JsiiProperty(name: "attrDbInstanceId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrDbInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: InnerConnectionString: DB instance connection url by Intranet.
        /// </remarks>
        [JsiiProperty(name: "attrInnerConnectionString", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInnerConnectionString
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: InnerIPAddress: IP Address for created DB instance of Intranet.
        /// </remarks>
        [JsiiProperty(name: "attrInnerIpAddress", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInnerIpAddress
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: InnerPort: Intranet port of created DB instance.
        /// </remarks>
        [JsiiProperty(name: "attrInnerPort", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInnerPort
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: PublicConnectionString: DB instance connection url by Internet.
        /// </remarks>
        [JsiiProperty(name: "attrPublicConnectionString", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPublicConnectionString
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: PublicIPAddress: IP Address for created DB instance of Internet.
        /// </remarks>
        [JsiiProperty(name: "attrPublicIpAddress", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPublicIpAddress
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: PublicPort: Internet port of created DB instance.
        /// </remarks>
        [JsiiProperty(name: "attrPublicPort", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPublicPort
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
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
        [JsiiProperty(name: "tags", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.TagManager\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.TagManager Tags
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.TagManager>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceId: Instance id
        /// </remarks>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string DbInstanceId
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: payType: The charge type of created instance.
        /// </remarks>
        [JsiiProperty(name: "payType", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string PayType
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: allocatePublicConnection: If true, allocate public connection automate.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "allocatePublicConnection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? AllocatePublicConnection
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: backupId: The ID of the backup set that you want to use. 
        /// You can call the DescribeBackups operation to query the most recent backup set list. 
        /// Note You must specify at least one of the BackupId and RestoreTime parameters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "backupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? BackupId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: backupRetentionPeriod: The retention period of the data backup. Value range: 7 to 730. The default value is the original value. Note When the BackupPolicyMode parameter is set to LogBackupPolicy, this parameter is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "backupRetentionPeriod", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? BackupRetentionPeriod
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: backupType: The type of backup used by the new instance. Valid values: 
        /// - FullBackup: full backup 
        /// - IncrementalBackup: incremental backup
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "backupType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? BackupType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: category: The edition of the instance. Valid values:
        /// Basic: specifies to use the Basic Edition.
        /// HighAvailability: specifies to use the High-availability Edition.
        /// AlwaysOn: specifies to use the Cluster Edition.
        /// Finance: specifies to use the Enterprise Edition.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "category", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? Category
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: connectionStringPrefix: The prefix of the endpoint. 
        /// Only the prefix of the CurrentConnectionString parameter value can be modified.
        /// The prefix must be 8 to 64 characters in length and can contain letters, digits, and hyphens (-).
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "connectionStringPrefix", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? ConnectionStringPrefix
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: connectionStringType: The endpoint type of the instance, allow values: Inner, Public
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "connectionStringType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? ConnectionStringType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbInstanceClass", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? DbInstanceClass
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceDescription: Description of created database instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbInstanceDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? DbInstanceDescription
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbInstanceStorage", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? DbInstanceStorage
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceStorageType: The storage type of the instance. Valid values:
        /// local_ssd: specifies to use local SSDs. This is the recommended storage type.
        /// cloud_ssd: specifies to use standard SSDs.
        /// cloud_essd: specifies to use enhanced SSDs.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbInstanceStorageType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? DbInstanceStorageType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: dbMappings: Database mappings to attach to db instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbMappings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-rds.RosDBInstanceClone.DBMappingsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? DbMappings
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: dbNames: The names of the databases that you want to create on the new instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbNames", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? DbNames
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: dedicatedHostGroupId: The ID of the host group to which the instance belongs if you create an instance in a host group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dedicatedHostGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? DedicatedHostGroupId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceNetworkType: The network type of the new instance. Valid values: 
        /// - VPC 
        /// - Classic 
        /// The default value is the network type of the original instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceNetworkType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? InstanceNetworkType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: maintainTime: The period during which the maintenance performs. The format is HH:mmZ-HH:mmZ.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "maintainTime", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? MaintainTime
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: masterUsername: The master user name for the database instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "masterUsername", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? MasterUsername
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: masterUserPassword: The master password for the database instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "masterUserPassword", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? MasterUserPassword
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: masterUserType: Privilege type of account.
        /// Normal: Common privilege. 
        /// Super: High privilege. 
        /// Sysadmin: Super privileges (SA) (only supported by SQL Server)
        /// The default value is Normal.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "masterUserType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? MasterUserType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? Period
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: periodType: Charge period for created instances.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "periodType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? PeriodType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: port: The port of the database service.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "port", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? Port
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: preferredBackupPeriod: The backup period. Separate multiple values with commas (,). The default value is the original value. Valid values:Monday Tuesday Wednesday Thursday Friday Saturday Sunday Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "preferredBackupPeriod", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? PreferredBackupPeriod
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: preferredBackupTime: The time when the backup task is performed. Format: yyyy-MM-ddZ-HH:mm:ssZ.Note When the BackupPolicyMode parameter is set to DataBackupPolicy, this parameter is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "preferredBackupTime", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? PreferredBackupTime
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: privateIpAddress: The private ip for created instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "privateIpAddress", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? PrivateIpAddress
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: restoreTable: Specifies whether to restore specific databases and tables. 
        /// The value 1 specifies to restore specific databases and tables. 
        /// If you do not want to restore specific databases or tables, you can choose not to specify this parameter.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "restoreTable", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? RestoreTable
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: restoreTime: The point in time to which you want to restore the data of the original instance. 
        /// The point in time must fall within the specified log backup retention period. 
        /// The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. 
        /// The time must be in UTC.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "restoreTime", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? RestoreTime
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupId: The ID of the ECS security groups. 
        /// Each RDS instance can be associated with up to three ECS security groups. 
        /// You must separate them with commas (,). 
        /// To delete an ECS Security group, leave this parameter empty.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? SecurityGroupId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: securityIpList: Security ip to access the database instance, combine with comma, 0.0.0.0/0 means no limitation.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityIpList", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? SecurityIpList
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: slaveZoneIds: List of slave zone ids can specify slave zone ids when creating the high-availability or enterprise edition instance. Meanwhile, VSwitchId needs to pass in the corresponding vswitch id to the slave zone by order. For example, ZoneId = "zone-a" and SlaveZoneIds = ["zone-c", "zone-b"], then the VSwitchId must be "vsw-zone-a,vsw-zone-c,vsw-zone-b". Of course, you can also choose automatic allocation, for example, ZoneId = "zone-a" and SlaveZoneIds = ["Auto", "Auto"], then the VSwitchId must be "vsw-zone-a,Auto,Auto". The list contains up to 2 slave zone ids, separated by commas.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "slaveZoneIds", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        public virtual string[]? SlaveZoneIds
        {
            get => GetInstanceProperty<string[]?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: sqlCollectorStatus: Specifies whether to enable or disable the SQL Explorer (SQL audit) feature. 
        /// Valid values:Enable | Disabled.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sqlCollectorStatus", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? SqlCollectorStatus
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: sslSetting: Secure Sockets Layer (SSL) link setting of the instance. Valid values:
        /// Disabled: Disable SSL
        /// EnabledForPublicConnection: Public connection address will be protected by the SSL certificate. It requires AllocatePublicConnection is true.
        /// EnabledForInnerConnection: Private connection address will be protected by the SSL certificate.
        /// Default value is Disabled.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sslSetting", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? SslSetting
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: tableMeta: The information about the databases and tables that you want to restore.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tableMeta", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-rds.RosDBInstanceClone.TableMetaProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? TableMeta
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: timeoutInMinutes: The timeout period for creating the clone instance resource. Unit: Minute. Default: 120.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "timeoutInMinutes", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? TimeoutInMinutes
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The VPC id of created database instance. For VPC network, the property is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? VpcId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: The vSwitch id of created instance. For VPC network, the property is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? VSwitchId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: selected zone to create database instance. You cannot set the ZoneId parameter if the MultiAZ parameter is set to true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? ZoneId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IDBMappingsProperty), fullyQualifiedName: "@alicloud/ros-cdk-rds.RosDBInstanceClone.DBMappingsProperty")]
        public interface IDBMappingsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: characterSetName: For supported engines, specifies the character set to associate with the database instance.
            /// </remarks>
            [JsiiProperty(name: "characterSetName", typeJson: "{\"primitive\":\"string\"}")]
            string CharacterSetName
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: dbName: Consists of [2, 64] lower case letters, numbers, underscores, lines, letters. Must start with a letter, end with letters or numbers
            /// </remarks>
            [JsiiProperty(name: "dbName", typeJson: "{\"primitive\":\"string\"}")]
            string DbName
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: dbDescription: Specifies the database description, containing up to 256 characters.
            /// </remarks>
            [JsiiProperty(name: "dbDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? DbDescription
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IDBMappingsProperty), fullyQualifiedName: "@alicloud/ros-cdk-rds.RosDBInstanceClone.DBMappingsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rds.RosDBInstanceClone.IDBMappingsProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: characterSetName: For supported engines, specifies the character set to associate with the database instance.
                /// </remarks>
                [JsiiProperty(name: "characterSetName", typeJson: "{\"primitive\":\"string\"}")]
                public string CharacterSetName
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: dbName: Consists of [2, 64] lower case letters, numbers, underscores, lines, letters. Must start with a letter, end with letters or numbers
                /// </remarks>
                [JsiiProperty(name: "dbName", typeJson: "{\"primitive\":\"string\"}")]
                public string DbName
                {
                    get => GetInstanceProperty<string>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: dbDescription: Specifies the database description, containing up to 256 characters.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "dbDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? DbDescription
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-rds.RosDBInstanceClone.DBMappingsProperty")]
        public class DBMappingsProperty : AlibabaCloud.SDK.ROS.CDK.Rds.RosDBInstanceClone.IDBMappingsProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: characterSetName: For supported engines, specifies the character set to associate with the database instance.
            /// </remarks>
            [JsiiProperty(name: "characterSetName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string CharacterSetName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: dbName: Consists of [2, 64] lower case letters, numbers, underscores, lines, letters. Must start with a letter, end with letters or numbers
            /// </remarks>
            [JsiiProperty(name: "dbName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
            public string DbName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: dbDescription: Specifies the database description, containing up to 256 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? DbDescription
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ITableMetaProperty), fullyQualifiedName: "@alicloud/ros-cdk-rds.RosDBInstanceClone.TableMetaProperty")]
        public interface ITableMetaProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: name: Name of database you want to restore.
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Name
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: newName: New database name in clone instance.
            /// </remarks>
            [JsiiProperty(name: "newName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? NewName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: tables: The table information that you want to restore.
            /// </remarks>
            [JsiiProperty(name: "tables", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-rds.RosDBInstanceClone.TablesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            object? Tables
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: type: Restore type, db
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Type
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ITableMetaProperty), fullyQualifiedName: "@alicloud/ros-cdk-rds.RosDBInstanceClone.TableMetaProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rds.RosDBInstanceClone.ITableMetaProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: name: Name of database you want to restore.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Name
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: newName: New database name in clone instance.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "newName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? NewName
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: tables: The table information that you want to restore.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "tables", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-rds.RosDBInstanceClone.TablesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
                public object? Tables
                {
                    get => GetInstanceProperty<object?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: type: Restore type, db
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Type
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-rds.RosDBInstanceClone.TableMetaProperty")]
        public class TableMetaProperty : AlibabaCloud.SDK.ROS.CDK.Rds.RosDBInstanceClone.ITableMetaProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: name: Name of database you want to restore.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Name
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: newName: New database name in clone instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "newName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? NewName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: tables: The table information that you want to restore.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tables", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-rds.RosDBInstanceClone.TablesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
            public object? Tables
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: Restore type, db
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Type
            {
                get;
                set;
            }
        }
        [JsiiInterface(nativeType: typeof(ITablesProperty), fullyQualifiedName: "@alicloud/ros-cdk-rds.RosDBInstanceClone.TablesProperty")]
        public interface ITablesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: name: Name of table you want to restore
            /// </remarks>
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Name
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: newName: New name of the table in db
            /// </remarks>
            [JsiiProperty(name: "newName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? NewName
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: type: Restore type, table
            /// </remarks>
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Type
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(ITablesProperty), fullyQualifiedName: "@alicloud/ros-cdk-rds.RosDBInstanceClone.TablesProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rds.RosDBInstanceClone.ITablesProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: name: Name of table you want to restore
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Name
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: newName: New name of the table in db
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "newName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? NewName
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: type: Restore type, table
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Type
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-rds.RosDBInstanceClone.TablesProperty")]
        public class TablesProperty : AlibabaCloud.SDK.ROS.CDK.Rds.RosDBInstanceClone.ITablesProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: name: Name of table you want to restore
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Name
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: newName: New name of the table in db
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "newName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? NewName
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: type: Restore type, table
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Type
            {
                get;
                set;
            }
        }
    }
}
