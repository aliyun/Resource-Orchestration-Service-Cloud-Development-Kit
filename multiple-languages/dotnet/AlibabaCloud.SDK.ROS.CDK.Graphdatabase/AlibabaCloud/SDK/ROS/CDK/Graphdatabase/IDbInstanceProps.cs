using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Graphdatabase
{
    /// <summary>Properties for defining a `DbInstance`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-graphdatabase-dbinstance
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDbInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-graphdatabase.DbInstanceProps")]
    public interface IDbInstanceProps
    {
        /// <summary>Property dbInstanceCategory: The category of the db instance.</summary>
        [JsiiProperty(name: "dbInstanceCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceCategory
        {
            get;
        }

        /// <summary>Property dbInstanceNetworkType: The network type of the db instance.</summary>
        [JsiiProperty(name: "dbInstanceNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceNetworkType
        {
            get;
        }

        /// <summary>Property dbInstanceStorageType: Instance storage type, Valid values: - cloud_essd.</summary>
        [JsiiProperty(name: "dbInstanceStorageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceStorageType
        {
            get;
        }

        /// <summary>Property dbNodeClass: The class of the db node.</summary>
        /// <remarks>
        /// Valid values:
        /// gdb.r.xlarge, gdb.r.2xlarge, gdb.r.4xlarge, gdb.r.8xlarge,gdb.r.16xlarge, gdb.re.13xlarge, gdb.re.26xlarge, gdb.re.52xlarge
        /// </remarks>
        [JsiiProperty(name: "dbNodeClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbNodeClass
        {
            get;
        }

        /// <summary>Property dbNodeStorage: Instance storage space, which is measured in GB.</summary>
        /// <remarks>
        /// The minimum storage space is 20 GB and the step size is 10GB.
        /// </remarks>
        [JsiiProperty(name: "dbNodeStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbNodeStorage
        {
            get;
        }

        /// <summary>Property dbVersion: Kernel version 1.0 is represented as gremlin,1.0-OpenCypher said opencypher.</summary>
        [JsiiProperty(name: "dbVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbVersion
        {
            get;
        }

        /// <summary>Property backupSetId: Backup set id.</summary>
        [JsiiProperty(name: "backupSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BackupSetId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property createType: The creation method.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>CreateDBInstance: Create instance</description>
        /// <description>CloneDBInstance: Clone instance</description>
        /// <description>CreateReadDBInstance: Create a read-only instance</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "createType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CreateType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbInstanceDescription: According to the practical example or notes.</summary>
        [JsiiProperty(name: "dbInstanceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbInstanceDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbInstanceIpArray: IP address whitelist for the instance group list.</summary>
        [JsiiProperty(name: "dbInstanceIpArray", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-graphdatabase.RosDbInstance.DBInstanceIPArrayProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbInstanceIpArray
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ecsSecurityGroupRelations: Security group information array.</summary>
        [JsiiProperty(name: "ecsSecurityGroupRelations", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-graphdatabase.RosDbInstance.EcsSecurityGroupRelationsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EcsSecurityGroupRelations
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property maintainTime: Instance maintenance time such as 00:00Z-02:00Z, 0 to 2 points to carry out routine maintenance.</summary>
        [JsiiProperty(name: "maintainTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MaintainTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property paymentType: The resource attribute field representing the paid type is desirable: - PayAsYouGo: Postpaid.</summary>
        [JsiiProperty(name: "paymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PaymentType
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

        /// <summary>Property restoreType: Restore type.</summary>
        [JsiiProperty(name: "restoreType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RestoreType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceDbInstanceId: Source Instance Id.</summary>
        [JsiiProperty(name: "sourceDbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceDbInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags of db instance.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-graphdatabase.RosDbInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Graphdatabase.RosDbInstance.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcId: The vpc id of the db instance.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vSwitchId: The vpc switch id of the resource.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VSwitchId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property zoneId: ZoneId.</summary>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ZoneId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DbInstance`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-graphdatabase-dbinstance
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDbInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-graphdatabase.DbInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Graphdatabase.IDbInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dbInstanceCategory: The category of the db instance.</summary>
            [JsiiProperty(name: "dbInstanceCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceCategory
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbInstanceNetworkType: The network type of the db instance.</summary>
            [JsiiProperty(name: "dbInstanceNetworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceNetworkType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbInstanceStorageType: Instance storage type, Valid values: - cloud_essd.</summary>
            [JsiiProperty(name: "dbInstanceStorageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceStorageType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbNodeClass: The class of the db node.</summary>
            /// <remarks>
            /// Valid values:
            /// gdb.r.xlarge, gdb.r.2xlarge, gdb.r.4xlarge, gdb.r.8xlarge,gdb.r.16xlarge, gdb.re.13xlarge, gdb.re.26xlarge, gdb.re.52xlarge
            /// </remarks>
            [JsiiProperty(name: "dbNodeClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbNodeClass
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbNodeStorage: Instance storage space, which is measured in GB.</summary>
            /// <remarks>
            /// The minimum storage space is 20 GB and the step size is 10GB.
            /// </remarks>
            [JsiiProperty(name: "dbNodeStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbNodeStorage
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbVersion: Kernel version 1.0 is represented as gremlin,1.0-OpenCypher said opencypher.</summary>
            [JsiiProperty(name: "dbVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property backupSetId: Backup set id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "backupSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BackupSetId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property createType: The creation method.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>CreateDBInstance: Create instance</description>
            /// <description>CloneDBInstance: Clone instance</description>
            /// <description>CreateReadDBInstance: Create a read-only instance</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "createType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CreateType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbInstanceDescription: According to the practical example or notes.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dbInstanceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbInstanceDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbInstanceIpArray: IP address whitelist for the instance group list.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dbInstanceIpArray", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-graphdatabase.RosDbInstance.DBInstanceIPArrayProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DbInstanceIpArray
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ecsSecurityGroupRelations: Security group information array.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ecsSecurityGroupRelations", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-graphdatabase.RosDbInstance.EcsSecurityGroupRelationsProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? EcsSecurityGroupRelations
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property maintainTime: Instance maintenance time such as 00:00Z-02:00Z, 0 to 2 points to carry out routine maintenance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "maintainTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MaintainTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property paymentType: The resource attribute field representing the paid type is desirable: - PayAsYouGo: Postpaid.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "paymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PaymentType
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

            /// <summary>Property restoreType: Restore type.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "restoreType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RestoreType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceDbInstanceId: Source Instance Id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "sourceDbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceDbInstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags of db instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-graphdatabase.RosDbInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Graphdatabase.RosDbInstance.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Graphdatabase.RosDbInstance.ITagsProperty[]?>();
            }

            /// <summary>Property vpcId: The vpc id of the db instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vSwitchId: The vpc switch id of the resource.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VSwitchId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property zoneId: ZoneId.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ZoneId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
