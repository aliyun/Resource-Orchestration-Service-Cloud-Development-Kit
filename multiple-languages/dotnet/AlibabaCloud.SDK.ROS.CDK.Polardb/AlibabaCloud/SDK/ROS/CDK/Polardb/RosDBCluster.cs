using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardb
{
    /// <summary>A ROS template type:  `ALIYUN::POLARDB::DBCluster`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Polardb.RosDBCluster), fullyQualifiedName: "@alicloud/ros-cdk-polardb.RosDBCluster", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-polardb.RosDBClusterProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosDBCluster : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::POLARDB::DBCluster`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosDBCluster(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Polardb.IRosDBClusterProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosDBCluster(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosDBCluster(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Polardb.RosDBCluster))!;

        /// <remarks>
        /// <strong>Attribute</strong>: ClusterConnectionString: The cluster connection string of the db cluster.
        /// </remarks>
        [JsiiProperty(name: "attrClusterConnectionString", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrClusterConnectionString
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ClusterEndpointId: The cluster endpoint ID of the db cluster.
        /// </remarks>
        [JsiiProperty(name: "attrClusterEndpointId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrClusterEndpointId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: CustomConnectionStrings: The custom connection strings of the db cluster.
        /// </remarks>
        [JsiiProperty(name: "attrCustomConnectionStrings", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrCustomConnectionStrings
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: CustomEndpointIds: The custom endpoint IDs of the db cluster.
        /// </remarks>
        [JsiiProperty(name: "attrCustomEndpointIds", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrCustomEndpointIds
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: DBClusterId: The ID of the ApsaraDB for POLARDB cluster.
        /// </remarks>
        [JsiiProperty(name: "attrDbClusterId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrDbClusterId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: DBNodeIds: The ID list of cluster nodes.
        /// </remarks>
        [JsiiProperty(name: "attrDbNodeIds", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrDbNodeIds
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: OrderId: The Order ID.
        /// </remarks>
        [JsiiProperty(name: "attrOrderId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrOrderId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: PrimaryConnectionString: The primary connection string of the db cluster.
        /// </remarks>
        [JsiiProperty(name: "attrPrimaryConnectionString", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPrimaryConnectionString
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: PrimaryEndpointId: The primary endpoint ID of the db cluster.
        /// </remarks>
        [JsiiProperty(name: "attrPrimaryEndpointId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPrimaryEndpointId
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.TagManager\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.TagManager Tags
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.TagManager>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbNodeClass: The node specifications of the cluster. For more information, see Specifications and pricing.
        /// </remarks>
        [JsiiProperty(name: "dbNodeClass", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string DbNodeClass
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: dbType: Database type, value:
        /// MySQL
        /// PostgreSQL
        /// Oracle
        /// </remarks>
        [JsiiProperty(name: "dbType", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string DbType
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: dbVersion: The version of the database. Valid values:
        /// MySQL: 5.6, 5.7 or 8.0
        /// PostgreSQL: 11
        /// Oracle: 11
        /// </remarks>
        [JsiiProperty(name: "dbVersion", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string DbVersion
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
        /// <strong>Property</strong>: payType: The billing method of the cluster. Valid values:
        /// Postpaid: pay-as-you-go
        /// Prepaid: subscription
        /// </remarks>
        [JsiiProperty(name: "payType", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string PayType
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: autoRenewPeriod: Set the cluster auto renewal time. Valid values: 1, 2, 3, 6, 12, 24, 36. Default to 1.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenewPeriod", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? AutoRenewPeriod
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: backupRetentionPolicyOnClusterDeletion: The backup set retention policy when deleting a cluster, the value range is as follows:
        /// ALL: Keep all backups permanently.
        /// LATEST: Permanently keep the last backup (automatic backup before deletion).
        /// NONE: The backup set is not retained when the cluster is deleted.
        /// When creating a cluster, the default value is NONE, that is, the backup set is not retained when the cluster is deleted.
        /// Note: This parameter takes effect only when the value of DBType is MySQL.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "backupRetentionPolicyOnClusterDeletion", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? BackupRetentionPolicyOnClusterDeletion
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: cloneDataPoint: The time point of data to be cloned. Valid values:
        /// LATEST: clones data of the latest time point.
        /// <BackupID>: clones historical backup data. Specify the ID of the specific backup set.
        /// <Timestamp>: clones data of a historical time point. Specify the specific time in
        /// the yyyy-MM-ddTHH:mm:ssZ format. The time must be in UTC.
        /// Default value: LATEST.
        /// Note
        /// This parameter takes effect only when the DBType parameter is set to MySQL, the DBVersion parameter is set to 5.6, and the CreationOption parameter is set to CloneFromRDS or CloneFromPolarDB.
        /// If the CreationOption parameter is set to CloneFromRDS, the value of this parameter must be LATEST.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "cloneDataPoint", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? CloneDataPoint
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterNetworkType: The network type of the cluster. Currently, only VPC is supported. Default value: VPC.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "clusterNetworkType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? ClusterNetworkType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: creationCategory: Cluster series. The value could be Normal (standard version).
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "creationCategory", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? CreationCategory
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: creationOption: The method for creating an ApsaraDB for POLARDB cluster. Valid values:
        /// Normal: creates an ApsaraDB for POLARDB cluster.
        /// CloneFromPolarDB: clones data from an existing ApsaraDB for POLARDB cluster to a new ApsaraDB for POLARDB cluster.
        /// CloneFromRDS: clones data from an existing ApsaraDB for RDS instance to a new ApsaraDB
        /// for POLARDB cluster.
        /// MigrationFromRDS: migrates data from an existing ApsaraDB for RDS instance to a new ApsaraDB for POLARDB cluster. The created ApsaraDB for POLARDB cluster is in read-only mode and has binary logs enabled by default.
        /// CreateGdnStandby: Create a secondary cluster.
        /// Default value: Normal.
        /// Note:
        /// When DBType is MySQL and DBVersion is 5.6, this parameter can be specified as CloneFromRDS or MigrationFromRDS.
        /// When DBType is MySQL and DBVersion is 8.0, this parameter can be specified as CreateGdnStandby.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "creationOption", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? CreationOption
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: dbClusterDescription: The description of the cluster. The description must comply with the following rules:
        /// It must start with a Chinese character or an English letter.
        /// It can contain Chinese and English characters, digits, underscores (_), and hyphens (-).
        /// It cannot start with http:// or https://.
        /// It must be 2 to 256 characters in length.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbClusterDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? DbClusterDescription
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: dbClusterParameters: Modifies the parameters of a the PolarDB cluster.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dbClusterParameters", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-polardb.RosDBCluster.DBClusterParametersProperty\"}]}}", isOptional: true)]
        public virtual object? DbClusterParameters
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: defaultTimeZone: Set up a time zone (UTC), the value range is as follows:
        /// System:  The default time zone is the same as the time zone where the region is located. This is default value.
        /// Other pickable value range is from -12:00 to +13:00, for example, 00:00.
        /// Note: This parameter takes effect only when DBType is MySQL.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "defaultTimeZone", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? DefaultTimeZone
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: gdnId: The ID of the Global Database Network (GDN).
        /// Note: This parameter is required when the CreationOption is CreateGdnStandby.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "gdnId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? GdnId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: lowerCaseTableNames: Whether the table name is case sensitive, the value range is as follows:
        /// 1: Not case sensitive0: case sensitive
        /// The default value is 1.
        /// Note: This parameter takes effect only when the value of DBType is MySQL.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "lowerCaseTableNames", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? LowerCaseTableNames
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: maintainTime: The maintainable time of the cluster:
        /// Format: HH: mmZ- HH: mmZ.
        /// Example: 16:00Z-17:00Z, which means 0 to 1 (UTC+08:00) for routine maintenance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "maintainTime", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? MaintainTime
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: period: The subscription period of the cluster in month. Valid values: 1, 2, 3, 4, 5, 6, 7, 8, 9, 12, 24, 36.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? Period
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: renewalStatus: The auto renewal status of the cluster Valid values:
        /// AutoRenewal: automatically renews the cluster.
        /// Normal: manually renews the cluster.
        /// NotRenewal: does not renew the cluster.
        /// Default value: Normal.
        /// Note If this parameter is set to NotRenewal, the system does not send a reminder for expiration,
        /// but only sends an SMS message three days before the cluster expires to remind you
        /// that the cluster is not renewed.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "renewalStatus", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? RenewalStatus
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? ResourceGroupId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupIds: The ID of the security group. 
        /// You can add up to three security groups to a cluster.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityGroupIds", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        public virtual string[]? SecurityGroupIds
        {
            get => GetInstanceProperty<string[]?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: securityIpList: The whitelist of the Apsara PolarDB cluster.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityIpList", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? SecurityIpList
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: sourceResourceId: The ID of the source RDS instance or source POLARDB cluster.
        /// Note
        /// This parameter takes effect only when the DBType parameter is set to MySQL and the DBVersion parameter is set to 5.6.
        /// This parameter is required if the CreationOption parameter is not set to Normal.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "sourceResourceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? SourceResourceId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: tdeStatus: Specifies whether to enable Transparent Data Encryption (TDE). Valid values:
        /// true: enable TDE
        /// false: disable TDE (default)
        /// Note: The parameter takes effect only when DBType is PostgreSQL or Oracle. You cannot disable TDE after it is enabled.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tdeStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? TdeStatus
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The ID of the VPC to connect to.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? VpcId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: The ID of the VSwitch to connect to.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? VSwitchId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: The zone ID of the cluster. You can call the DescribeRegions operation to query available zones.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? ZoneId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IDBClusterParametersProperty), fullyQualifiedName: "@alicloud/ros-cdk-polardb.RosDBCluster.DBClusterParametersProperty")]
        public interface IDBClusterParametersProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: effectiveTime: The time when the modified values of parameters take effect. Valid values: 
            /// - Auto: The system automatically determines how the modified values of parameters take effect.
            /// If all the modified values of parameters can take effect without a cluster restart, 
            /// they immediately take effect. If a cluster restart is required to make the modified values  
            /// of some parameters take effect, all of them take effect after a cluster restart 
            /// is performed within the maintenance window. 
            /// - Immediately: If all the modified values of parameters can take effect without a 
            /// cluster restart, the modifications immediately take effect. If a cluster restart is 
            /// required to make the modified values of some parameters take effect, 
            /// the cluster is immediately restarted for the modifications to take effect. 
            /// - MaintainTime: The modified values of parameters take effect within the maintenance window. 
            /// All the modified values of parameters take effect within the maintenance window.
            /// Default value: Auto.
            /// </remarks>
            [JsiiProperty(name: "effectiveTime", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? EffectiveTime
            {
                get
                {
                    return null;
                }
            }

            /// <remarks>
            /// <strong>Property</strong>: parameters: The JSON string that consists of parameters and values. 
            /// The parameter values are strings, for example, 
            /// {"auto_increment_increment":"1","character_set_filesystem":"utf8"}.
            /// You can call the DescribeDBClusterParameters operation to 
            /// view the parameters of the PolarDB cluster.
            /// </remarks>
            [JsiiProperty(name: "parameters", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            [Amazon.JSII.Runtime.Deputy.JsiiOptional]
            string? Parameters
            {
                get
                {
                    return null;
                }
            }

            [JsiiTypeProxy(nativeType: typeof(IDBClusterParametersProperty), fullyQualifiedName: "@alicloud/ros-cdk-polardb.RosDBCluster.DBClusterParametersProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardb.RosDBCluster.IDBClusterParametersProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: effectiveTime: The time when the modified values of parameters take effect. Valid values: 
                /// - Auto: The system automatically determines how the modified values of parameters take effect.
                /// If all the modified values of parameters can take effect without a cluster restart, 
                /// they immediately take effect. If a cluster restart is required to make the modified values  
                /// of some parameters take effect, all of them take effect after a cluster restart 
                /// is performed within the maintenance window. 
                /// - Immediately: If all the modified values of parameters can take effect without a 
                /// cluster restart, the modifications immediately take effect. If a cluster restart is 
                /// required to make the modified values of some parameters take effect, 
                /// the cluster is immediately restarted for the modifications to take effect. 
                /// - MaintainTime: The modified values of parameters take effect within the maintenance window. 
                /// All the modified values of parameters take effect within the maintenance window.
                /// Default value: Auto.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "effectiveTime", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? EffectiveTime
                {
                    get => GetInstanceProperty<string?>();
                }

                /// <remarks>
                /// <strong>Property</strong>: parameters: The JSON string that consists of parameters and values. 
                /// The parameter values are strings, for example, 
                /// {"auto_increment_increment":"1","character_set_filesystem":"utf8"}.
                /// You can call the DescribeDBClusterParameters operation to 
                /// view the parameters of the PolarDB cluster.
                /// </remarks>
                [JsiiOptional]
                [JsiiProperty(name: "parameters", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
                public string? Parameters
                {
                    get => GetInstanceProperty<string?>();
                }
            }
        }
        [JsiiByValue(fqn: "@alicloud/ros-cdk-polardb.RosDBCluster.DBClusterParametersProperty")]
        public class DBClusterParametersProperty : AlibabaCloud.SDK.ROS.CDK.Polardb.RosDBCluster.IDBClusterParametersProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: effectiveTime: The time when the modified values of parameters take effect. Valid values: 
            /// - Auto: The system automatically determines how the modified values of parameters take effect.
            /// If all the modified values of parameters can take effect without a cluster restart, 
            /// they immediately take effect. If a cluster restart is required to make the modified values  
            /// of some parameters take effect, all of them take effect after a cluster restart 
            /// is performed within the maintenance window. 
            /// - Immediately: If all the modified values of parameters can take effect without a 
            /// cluster restart, the modifications immediately take effect. If a cluster restart is 
            /// required to make the modified values of some parameters take effect, 
            /// the cluster is immediately restarted for the modifications to take effect. 
            /// - MaintainTime: The modified values of parameters take effect within the maintenance window. 
            /// All the modified values of parameters take effect within the maintenance window.
            /// Default value: Auto.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "effectiveTime", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? EffectiveTime
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: parameters: The JSON string that consists of parameters and values. 
            /// The parameter values are strings, for example, 
            /// {"auto_increment_increment":"1","character_set_filesystem":"utf8"}.
            /// You can call the DescribeDBClusterParameters operation to 
            /// view the parameters of the PolarDB cluster.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "parameters", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
            public string? Parameters
            {
                get;
                set;
            }
        }
    }
}
