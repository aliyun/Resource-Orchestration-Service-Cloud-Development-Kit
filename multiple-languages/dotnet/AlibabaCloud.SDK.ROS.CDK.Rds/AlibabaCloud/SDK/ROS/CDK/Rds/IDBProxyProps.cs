using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    /// <summary>Properties for defining a `DBProxy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-dbproxy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDBProxyProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.DBProxyProps")]
    public interface IDBProxyProps
    {
        /// <summary>Property dbInstanceId: Instance ID of the DB.</summary>
        /// <remarks>
        /// DescribeDBInstances can be called to get it.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <summary>Property vpcId: The VPC ID to which the instance belongs.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Property vSwitchId: The virtual switch ID to which the instance belongs.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VSwitchId
        {
            get;
        }

        /// <summary>Property dbProxyInstanceNum: The number of activated proxy instances, the value is: 1~16.Default value: 1. Description More proxy instances can handle more requests, you can understand the load of proxy instances based on the monitoring data, and then set a reasonable number of proxy instances.</summary>
        [JsiiProperty(name: "dbProxyInstanceNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbProxyInstanceNum
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbProxyInstanceType: Database proxy instance type, value: common: general-purpose agent exclusive: exclusive proxy (default).</summary>
        [JsiiProperty(name: "dbProxyInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbProxyInstanceType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbProxyNodes: List of proxy nodes.</summary>
        [JsiiProperty(name: "dbProxyNodes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-rds.RosDBProxy.DBProxyNodesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbProxyNodes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property persistentConnectionStatus: Whether to enable connection hold.Value: Enabled: Turn on connection hold Disabled: Close connection hold illustrate Only RDS MySQL supports this parameter. When modifying the connection remains, the ConfigDBProxyService value is Modify.</summary>
        [JsiiProperty(name: "persistentConnectionStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PersistentConnectionStatus
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

        /// <summary>Properties for defining a `DBProxy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-dbproxy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDBProxyProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.DBProxyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rds.IDBProxyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dbInstanceId: Instance ID of the DB.</summary>
            /// <remarks>
            /// DescribeDBInstances can be called to get it.
            /// </remarks>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vpcId: The VPC ID to which the instance belongs.</summary>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vSwitchId: The virtual switch ID to which the instance belongs.</summary>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbProxyInstanceNum: The number of activated proxy instances, the value is: 1~16.Default value: 1. Description More proxy instances can handle more requests, you can understand the load of proxy instances based on the monitoring data, and then set a reasonable number of proxy instances.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dbProxyInstanceNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbProxyInstanceNum
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbProxyInstanceType: Database proxy instance type, value: common: general-purpose agent exclusive: exclusive proxy (default).</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dbProxyInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbProxyInstanceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbProxyNodes: List of proxy nodes.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dbProxyNodes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-rds.RosDBProxy.DBProxyNodesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DbProxyNodes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property persistentConnectionStatus: Whether to enable connection hold.Value: Enabled: Turn on connection hold Disabled: Close connection hold illustrate Only RDS MySQL supports this parameter. When modifying the connection remains, the ConfigDBProxyService value is Modify.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "persistentConnectionStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PersistentConnectionStatus
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
        }
    }
}
