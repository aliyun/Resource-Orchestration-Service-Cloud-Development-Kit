using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Selectdb
{
    /// <summary>Properties for defining a `DBInstance`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-selectdb-dbinstance
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDBInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-selectdb.DBInstanceProps")]
    public interface IDBInstanceProps
    {
        /// <summary>Property cacheSize: Reserve cache size.</summary>
        [JsiiProperty(name: "cacheSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CacheSize
        {
            get;
        }

        /// <summary>Property chargeType: The paid type of instance.Value: Postpaid: Postpaid (pay per quantity). Prepaid: Prepaid (year and monthly).</summary>
        [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ChargeType
        {
            get;
        }

        /// <summary>Property dbInstanceClass: The class of the DB instance.</summary>
        /// <remarks>
        /// Call DescribeAllDBInstanceClass API to check the latest class list
        /// </remarks>
        [JsiiProperty(name: "dbInstanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceClass
        {
            get;
        }

        /// <summary>Property engineVersion: Database version.</summary>
        [JsiiProperty(name: "engineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object EngineVersion
        {
            get;
        }

        /// <summary>Property vpcId: VPC id.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Property vSwitchId: Switch ID.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VSwitchId
        {
            get;
        }

        /// <summary>Property zoneId: Availability Zone ID.</summary>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ZoneId
        {
            get;
        }

        /// <summary>Property accountPassword: The password of the instance login account, the current account name of selectdb can only be admin.</summary>
        [JsiiProperty(name: "accountPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccountPassword
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property connectionString: Database connection address.</summary>
        [JsiiProperty(name: "connectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ConnectionString
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbInstanceDescription: Example Notes Information.</summary>
        [JsiiProperty(name: "dbInstanceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbInstanceDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property engine: Database type, default value is selectdb.</summary>
        [JsiiProperty(name: "engine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Engine
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property period: Specify the prepaid cluster as annual or monthly type.Value description: Year: Year-end type. Month: Month type. Note This parameter takes effect and is required only if ChargeType is Prepaid.</summary>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Period
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: Resource Group ID.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property securityIpList: The default IP whitelist of the instance.</summary>
        [JsiiProperty(name: "securityIpList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecurityIpList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: The list of tags in the form of key\/value pairs.</summary>
        /// <remarks>
        /// You can define a maximum of 20 tags.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-selectdb.RosDBInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Selectdb.RosDBInstance.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property usedTime: Specifies the purchase duration of the prepaid instance.Value description: When Period is Year, UsedTime values range: 1, 2, 3, 5 (integral). When Period is Month, the UsedTime value range is: 1~9 (integral). Note This parameter takes effect and is required only if ChargeType is Prepaid.</summary>
        [JsiiProperty(name: "usedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UsedTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DBInstance`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-selectdb-dbinstance
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDBInstanceProps), fullyQualifiedName: "@alicloud/ros-cdk-selectdb.DBInstanceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Selectdb.IDBInstanceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property cacheSize: Reserve cache size.</summary>
            [JsiiProperty(name: "cacheSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CacheSize
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property chargeType: The paid type of instance.Value: Postpaid: Postpaid (pay per quantity). Prepaid: Prepaid (year and monthly).</summary>
            [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ChargeType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbInstanceClass: The class of the DB instance.</summary>
            /// <remarks>
            /// Call DescribeAllDBInstanceClass API to check the latest class list
            /// </remarks>
            [JsiiProperty(name: "dbInstanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceClass
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property engineVersion: Database version.</summary>
            [JsiiProperty(name: "engineVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object EngineVersion
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vpcId: VPC id.</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vSwitchId: Switch ID.</summary>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property zoneId: Availability Zone ID.</summary>
            [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ZoneId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property accountPassword: The password of the instance login account, the current account name of selectdb can only be admin.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "accountPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccountPassword
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property connectionString: Database connection address.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "connectionString", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ConnectionString
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbInstanceDescription: Example Notes Information.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dbInstanceDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbInstanceDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property engine: Database type, default value is selectdb.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "engine", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Engine
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property period: Specify the prepaid cluster as annual or monthly type.Value description: Year: Year-end type. Month: Month type. Note This parameter takes effect and is required only if ChargeType is Prepaid.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Period
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: Resource Group ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property securityIpList: The default IP whitelist of the instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "securityIpList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? SecurityIpList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: The list of tags in the form of key\/value pairs.</summary>
            /// <remarks>
            /// You can define a maximum of 20 tags.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-selectdb.RosDBInstance.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Selectdb.RosDBInstance.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Selectdb.RosDBInstance.ITagsProperty[]?>();
            }

            /// <summary>Property usedTime: Specifies the purchase duration of the prepaid instance.Value description: When Period is Year, UsedTime values range: 1, 2, 3, 5 (integral). When Period is Month, the UsedTime value range is: 1~9 (integral). Note This parameter takes effect and is required only if ChargeType is Prepaid.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "usedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UsedTime
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
