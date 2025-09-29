using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Gwlb
{
    /// <summary>Properties for defining a `ServerGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gwlb-servergroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IServerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-gwlb.ServerGroupProps")]
    public interface IServerGroupProps
    {
        /// <summary>Property vpcId: The VPC instance ID.</summary>
        /// <remarks>
        ///     If the value of ServerGroupType is Instance, only servers in the VPC can be added to the server group.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <summary>Property connectionDrainConfig: Connected graceful interrupt configuration.</summary>
        [JsiiProperty(name: "connectionDrainConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-gwlb.RosServerGroup.ConnectionDrainConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ConnectionDrainConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property healthCheckConfig: Health check configurations.</summary>
        [JsiiProperty(name: "healthCheckConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-gwlb.RosServerGroup.HealthCheckConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HealthCheckConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property protocol: Backend Protocol.</summary>
        /// <remarks>
        /// Value:
        /// <strong>GENEVE (default)</strong>.
        /// </remarks>
        [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Protocol
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

        /// <summary>Property scheduler: Scheduling algorithm.</summary>
        /// <remarks>
        /// Value:
        ///
        /// <list type="bullet">
        /// <description><strong>5TCH (default)</strong>: quintuple hash, which is based on the consistent hash of the quintuple (source IP, Destination IP, source port, destination port, and protocol). The same flow is scheduled to the same backend server.</description>
        /// <description><strong>3TCH</strong>: a three-tuple hash, which is based on the consistent hash of three tuples (source IP address, destination IP address, and protocol). The same flow is dispatched to the same backend server.</description>
        /// <description><strong>2TCH</strong>: Binary Group hash, which is based on the consistent hash of the binary group (source IP and destination IP). The same flow is scheduled to the same backend server.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "scheduler", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Scheduler
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property serverGroupName: The server group name.</summary>
        /// <remarks>
        /// It must be 2 to 128 characters in length, start with an uppercase letter or a Chinese character, and can contain digits, half-width periods (.), underscores (_), and dashes (-).
        /// </remarks>
        [JsiiProperty(name: "serverGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServerGroupName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property serverGroupType: The server group type.</summary>
        /// <remarks>
        /// Value:
        ///
        /// <list type="bullet">
        /// <description><strong>Instance (default)</strong>: The instance type. You can add Ecs, Eni, and Eci instances to the server group.</description>
        /// <description><strong>Ip</strong>: The Ip address type. You can directly add backend servers of the Ip address type to the server group.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "serverGroupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServerGroupType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property servers: List of servers.</summary>
        [JsiiProperty(name: "servers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-gwlb.RosServerGroup.ServersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Servers
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags of server group.</summary>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-gwlb.RosServerGroup.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Gwlb.RosServerGroup.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ServerGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-gwlb-servergroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IServerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-gwlb.ServerGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Gwlb.IServerGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property vpcId: The VPC instance ID.</summary>
            /// <remarks>
            ///     If the value of ServerGroupType is Instance, only servers in the VPC can be added to the server group.
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property connectionDrainConfig: Connected graceful interrupt configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "connectionDrainConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-gwlb.RosServerGroup.ConnectionDrainConfigProperty\"}]}}", isOptional: true)]
            public object? ConnectionDrainConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property healthCheckConfig: Health check configurations.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "healthCheckConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-gwlb.RosServerGroup.HealthCheckConfigProperty\"}]}}", isOptional: true)]
            public object? HealthCheckConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property protocol: Backend Protocol.</summary>
            /// <remarks>
            /// Value:
            /// <strong>GENEVE (default)</strong>.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Protocol
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

            /// <summary>Property scheduler: Scheduling algorithm.</summary>
            /// <remarks>
            /// Value:
            ///
            /// <list type="bullet">
            /// <description><strong>5TCH (default)</strong>: quintuple hash, which is based on the consistent hash of the quintuple (source IP, Destination IP, source port, destination port, and protocol). The same flow is scheduled to the same backend server.</description>
            /// <description><strong>3TCH</strong>: a three-tuple hash, which is based on the consistent hash of three tuples (source IP address, destination IP address, and protocol). The same flow is dispatched to the same backend server.</description>
            /// <description><strong>2TCH</strong>: Binary Group hash, which is based on the consistent hash of the binary group (source IP and destination IP). The same flow is scheduled to the same backend server.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scheduler", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Scheduler
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property serverGroupName: The server group name.</summary>
            /// <remarks>
            /// It must be 2 to 128 characters in length, start with an uppercase letter or a Chinese character, and can contain digits, half-width periods (.), underscores (_), and dashes (-).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serverGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServerGroupName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property serverGroupType: The server group type.</summary>
            /// <remarks>
            /// Value:
            ///
            /// <list type="bullet">
            /// <description><strong>Instance (default)</strong>: The instance type. You can add Ecs, Eni, and Eci instances to the server group.</description>
            /// <description><strong>Ip</strong>: The Ip address type. You can directly add backend servers of the Ip address type to the server group.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serverGroupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServerGroupType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property servers: List of servers.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "servers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-gwlb.RosServerGroup.ServersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Servers
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags of server group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-gwlb.RosServerGroup.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Gwlb.RosServerGroup.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Gwlb.RosServerGroup.ITagsProperty[]?>();
            }
        }
    }
}
