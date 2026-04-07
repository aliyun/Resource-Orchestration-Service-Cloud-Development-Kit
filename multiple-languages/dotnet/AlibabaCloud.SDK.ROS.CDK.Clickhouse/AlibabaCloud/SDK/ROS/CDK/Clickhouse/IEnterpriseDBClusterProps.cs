using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Clickhouse
{
    /// <summary>Properties for defining a `EnterpriseDBCluster`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbcluster
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IEnterpriseDBClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.EnterpriseDBClusterProps")]
    public interface IEnterpriseDBClusterProps
    {
        /// <summary>Property engine: The engine type.</summary>
        [JsiiProperty(name: "engine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Engine
        {
            get;
        }

        /// <summary>Property nodeCount: The number of nodes.</summary>
        [JsiiProperty(name: "nodeCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NodeCount
        {
            get;
        }

        /// <summary>Property nodeScaleMax: The maximum number of nodes for scaling.</summary>
        [JsiiProperty(name: "nodeScaleMax", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NodeScaleMax
        {
            get;
        }

        /// <summary>Property nodeScaleMin: The minimum number of nodes for scaling.</summary>
        [JsiiProperty(name: "nodeScaleMin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NodeScaleMin
        {
            get;
        }

        /// <summary>Property vpcId: The ID of the VPC.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Property vSwitchId: The ID of the VSwitch.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VSwitchId
        {
            get;
        }

        /// <summary>Property zoneId: The ID of the zone.</summary>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ZoneId
        {
            get;
        }

        /// <summary>Property backupSetId: The ID of the backup set.</summary>
        [JsiiProperty(name: "backupSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BackupSetId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbInstanceDescription: The description of the database instance.</summary>
        [JsiiProperty(name: "dbInstanceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbInstanceDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbTimeZone: The time zone of the database.</summary>
        [JsiiProperty(name: "dbTimeZone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbTimeZone
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property deploySchema: The deployment schema.</summary>
        [JsiiProperty(name: "deploySchema", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DeploySchema
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property multiZone: Multi-zone configuration.</summary>
        [JsiiProperty(name: "multiZone", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-clickhouse.RosEnterpriseDBCluster.MultiZoneProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MultiZone
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property publicConnectionSetting: The public connection setting.</summary>
        [JsiiProperty(name: "publicConnectionSetting", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-clickhouse.RosEnterpriseDBCluster.PublicConnectionSettingProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PublicConnectionSetting
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceDbInstanceId: The ID of the source database instance.</summary>
        [JsiiProperty(name: "sourceDbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceDbInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property storageQuota: The storage quota.</summary>
        [JsiiProperty(name: "storageQuota", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StorageQuota
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property storageType: The type of storage.</summary>
        [JsiiProperty(name: "storageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StorageType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to clickhouse_enterprise_db.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create clickhouse_enterprise_db. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-clickhouse.RosEnterpriseDBCluster.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Clickhouse.RosEnterpriseDBCluster.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `EnterpriseDBCluster`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbcluster
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IEnterpriseDBClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.EnterpriseDBClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Clickhouse.IEnterpriseDBClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property engine: The engine type.</summary>
            [JsiiProperty(name: "engine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Engine
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property nodeCount: The number of nodes.</summary>
            [JsiiProperty(name: "nodeCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NodeCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property nodeScaleMax: The maximum number of nodes for scaling.</summary>
            [JsiiProperty(name: "nodeScaleMax", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NodeScaleMax
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property nodeScaleMin: The minimum number of nodes for scaling.</summary>
            [JsiiProperty(name: "nodeScaleMin", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NodeScaleMin
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vpcId: The ID of the VPC.</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vSwitchId: The ID of the VSwitch.</summary>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property zoneId: The ID of the zone.</summary>
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property backupSetId: The ID of the backup set.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "backupSetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BackupSetId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbInstanceDescription: The description of the database instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dbInstanceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbInstanceDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbTimeZone: The time zone of the database.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dbTimeZone", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbTimeZone
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property deploySchema: The deployment schema.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "deploySchema", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DeploySchema
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property multiZone: Multi-zone configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "multiZone", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-clickhouse.RosEnterpriseDBCluster.MultiZoneProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? MultiZone
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property publicConnectionSetting: The public connection setting.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "publicConnectionSetting", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-clickhouse.RosEnterpriseDBCluster.PublicConnectionSettingProperty\"}]}}", isOptional: true)]
            public object? PublicConnectionSetting
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceDbInstanceId: The ID of the source database instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "sourceDbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceDbInstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property storageQuota: The storage quota.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "storageQuota", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StorageQuota
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property storageType: The type of storage.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "storageType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StorageType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to clickhouse_enterprise_db.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create clickhouse_enterprise_db. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-clickhouse.RosEnterpriseDBCluster.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Clickhouse.RosEnterpriseDBCluster.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Clickhouse.RosEnterpriseDBCluster.ITagsProperty[]?>();
            }
        }
    }
}
