using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    /// <summary>A ROS template type:  `ALIYUN::RDS::PrepayDBInstance`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Rds.RosPrepayDBInstance), fullyQualifiedName: "@alicloud/ros-cdk-rds.RosPrepayDBInstance", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-rds.RosPrepayDBInstanceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosPrepayDBInstance : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::RDS::PrepayDBInstance`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosPrepayDBInstance(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Rds.IRosPrepayDBInstanceProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosPrepayDBInstance(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosPrepayDBInstance(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Rds.RosPrepayDBInstance))!;

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
        /// <strong>Attribute</strong>: OrderId: The order id list of created instance.
        /// </remarks>
        [JsiiProperty(name: "attrOrderId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrOrderId
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
        /// <strong>Property</strong>: commodityCode: The CommodityCode of the order.
        /// </remarks>
        [JsiiProperty(name: "commodityCode", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string CommodityCode
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceClass: Database instance type. Refer the RDS database instance type reference, such as 'rds.mys2.large', 'rds.mss1.large', 'rds.pg.s1.small' etc
        /// </remarks>
        [JsiiProperty(name: "dbInstanceClass", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string DbInstanceClass
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceStorage: Database instance storage size. mysql is [5,1000]. sql server 2008r2 is [10,1000], sql server 2012/2012_web/2016-web is [20,1000]. PostgreSQL and PPAS is [5,2000]. Increased every 5 GB, Unit in GB
        /// </remarks>
        [JsiiProperty(name: "dbInstanceStorage", typeJson: "{\"primitive\":\"number\"}")]
        public virtual double DbInstanceStorage
        {
            get => GetInstanceProperty<double>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: engine: Database instance engine type. Support MySQL/SQLServer/PostgreSQL/PPAS/MariaDB now.
        /// </remarks>
        [JsiiProperty(name: "engine", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string Engine
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: engineVersion: Database instance version of the relative engine type.Support MySQL: 5.5/5.6/5.7/8.0;
        /// SQLServer: 2008r2/2012/2012_ent_ha/2012_std_ha/2012_web/2016_ent_ha/2016_std_ha/2016_web/2017_std_ha/2017_ent;
        /// PostgreSQL: 9.4/10.0/11.0/12.0;
        /// PPAS: 9.3/10.0;
        /// MariaDB: 10.3.
        /// </remarks>
        [JsiiProperty(name: "engineVersion", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string EngineVersion
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: period: Prepaid time period. While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}")]
        public virtual double Period
        {
            get => GetInstanceProperty<double>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: periodType: Charge period for created instances.
        /// </remarks>
        [JsiiProperty(name: "periodType", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string PeriodType
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
        /// <strong>Property</strong>: autoPay: Automatic Payment. Default is false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? AutoPay
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: autoRenew: Auto renew the prepay instance. If the period type is by year, it will renew by year, else it will renew by month.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? AutoRenew
        {
            get => GetInstanceProperty<object?>();
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
        /// <strong>Property</strong>: connectionMode: Connection Mode for database instance,support 'Standard' and 'Safe' mode. Default is RDS system assigns.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "connectionMode", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? ConnectionMode
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
        /// <strong>Property</strong>: couponCode: The coupon code of the order.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "couponCode", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? CouponCode
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
        /// <strong>Property</strong>: dbInstanceNetType: Database instance net type, default is Intranet.Internet for public access, Intranet for private access.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbInstanceNetType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? DbInstanceNetType
        {
            get => GetInstanceProperty<string?>();
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
        /// <strong>Property</strong>: dbIsIgnoreCase: Specifies whether table names are case-sensitive. Valid values:
        /// 1: Table names are not case-sensitive. This is the default value.
        /// 0: Table names are case-sensitive.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbIsIgnoreCase", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? DbIsIgnoreCase
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: dbMappings: Database mappings to attach to db instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbMappings", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-rds.RosPrepayDBInstance.DBMappingsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? DbMappings
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: dbParamGroupId: The ID of the parameter template used by the instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbParamGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? DbParamGroupId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: dbTimeZone: The UTC time zone of the instance. Valid values: -12:00 to +12:00. The time zone must be an integer value such as +08:00. Values such as +08:30 are not allowed.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbTimeZone", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? DbTimeZone
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
        /// <strong>Property</strong>: encryptionKey: The ID of the encryption key that is used to encrypt data on SSDs in the region. You can view the encryption key ID in the Key Management Service (KMS) console. You can also create an encryption key.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "encryptionKey", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? EncryptionKey
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
        /// <strong>Property</strong>: multiAz: Specifies if the database instance is a multiple Availability Zone deployment.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "multiAz", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? MultiAz
        {
            get => GetInstanceProperty<object?>();
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
        /// <strong>Property</strong>: quantity: The number of instance to be created, default is 1, max number is 99
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "quantity", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? Quantity
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: Resource group id.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? ResourceGroupId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: roleArn: The Alibaba Cloud Resource Name (ARN) provided to the service account of the instance by your Alibaba Cloud account to connect to KMS. You can copy the ARN from the RAM console.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "roleArn", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? RoleArn
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
        /// <strong>Property</strong>: targetDedicatedHostIdForLog: The ID of the host to which the instance belongs if you create a log instance in a host group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "targetDedicatedHostIdForLog", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? TargetDedicatedHostIdForLog
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: targetDedicatedHostIdForMaster: The ID of the host to which the instance belongs if you create a primary instance in a host group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "targetDedicatedHostIdForMaster", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? TargetDedicatedHostIdForMaster
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: targetDedicatedHostIdForSlave: The ID of the host to which the instance belongs if you create a secondary instance in a host group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "targetDedicatedHostIdForSlave", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? TargetDedicatedHostIdForSlave
        {
            get => GetInstanceProperty<string?>();
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
        [JsiiInterface(nativeType: typeof(IDBMappingsProperty), fullyQualifiedName: "@alicloud/ros-cdk-rds.RosPrepayDBInstance.DBMappingsProperty")]
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

            [JsiiTypeProxy(nativeType: typeof(IDBMappingsProperty), fullyQualifiedName: "@alicloud/ros-cdk-rds.RosPrepayDBInstance.DBMappingsProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rds.RosPrepayDBInstance.IDBMappingsProperty
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

        [JsiiByValue(fqn: "@alicloud/ros-cdk-rds.RosPrepayDBInstance.DBMappingsProperty")]
        public class DBMappingsProperty : AlibabaCloud.SDK.ROS.CDK.Rds.RosPrepayDBInstance.IDBMappingsProperty
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
    }
}
