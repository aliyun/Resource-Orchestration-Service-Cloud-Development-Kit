using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    /// <summary>Properties for defining a `RosDBProxy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-dbproxy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDBProxyProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.RosDBProxyProps")]
    public interface IRosDBProxyProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dbInstanceId: Instance ID of the DB. DescribeDBInstances can be called to get it.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The VPC ID to which the instance belongs.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: The virtual switch ID to which the instance belongs.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VSwitchId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbProxyInstanceNum: The number of activated proxy instances, the value is: 1~16.Default value: 1.
        /// Description More proxy instances can handle more requests, you can understand the load of proxy instances based on the monitoring data, and then set a reasonable number of proxy instances.
        /// </remarks>
        [JsiiProperty(name: "dbProxyInstanceNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbProxyInstanceNum
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dbProxyInstanceType: Database proxy instance type, value:
        /// common: general-purpose agent
        /// exclusive: exclusive proxy (default)
        /// </remarks>
        [JsiiProperty(name: "dbProxyInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbProxyInstanceType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dbProxyNodes: List of proxy nodes.
        /// </remarks>
        [JsiiProperty(name: "dbProxyNodes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-rds.RosDBProxy.DBProxyNodesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbProxyNodes
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: persistentConnectionStatus: Whether to enable connection hold.Value:
        /// Enabled: Turn on connection hold
        /// Disabled: Close connection hold
        /// illustrate
        /// Only RDS MySQL supports this parameter.
        /// When modifying the connection remains, the ConfigDBProxyService value is Modify.
        /// </remarks>
        [JsiiProperty(name: "persistentConnectionStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PersistentConnectionStatus
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: Resource Group ID.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosDBProxy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-dbproxy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDBProxyProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.RosDBProxyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rds.IRosDBProxyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dbInstanceId: Instance ID of the DB. DescribeDBInstances can be called to get it.
            /// </remarks>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: The VPC ID to which the instance belongs.
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vSwitchId: The virtual switch ID to which the instance belongs.
            /// </remarks>
            [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VSwitchId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dbProxyInstanceNum: The number of activated proxy instances, the value is: 1~16.Default value: 1.
            /// Description More proxy instances can handle more requests, you can understand the load of proxy instances based on the monitoring data, and then set a reasonable number of proxy instances.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbProxyInstanceNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbProxyInstanceNum
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dbProxyInstanceType: Database proxy instance type, value:
            /// common: general-purpose agent
            /// exclusive: exclusive proxy (default)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbProxyInstanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbProxyInstanceType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dbProxyNodes: List of proxy nodes.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbProxyNodes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-rds.RosDBProxy.DBProxyNodesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DbProxyNodes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: persistentConnectionStatus: Whether to enable connection hold.Value:
            /// Enabled: Turn on connection hold
            /// Disabled: Close connection hold
            /// illustrate
            /// Only RDS MySQL supports this parameter.
            /// When modifying the connection remains, the ConfigDBProxyService value is Modify.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "persistentConnectionStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PersistentConnectionStatus
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: Resource Group ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
