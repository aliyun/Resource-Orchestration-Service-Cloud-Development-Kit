using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Alb
{
    /// <summary>Properties for defining a `RosServerGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-servergroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosServerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosServerGroupProps")]
    public interface IRosServerGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: healthCheckConfig: The configuration of health checks.
        /// </remarks>
        [JsiiProperty(name: "healthCheckConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosServerGroup.HealthCheckConfigProperty\"}]}}")]
        object HealthCheckConfig
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: serverGroupName: The name of the server group. The name must be 2 to 128 characters in length, and
        /// can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name
        /// must start with a letter.
        /// </remarks>
        [JsiiProperty(name: "serverGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ServerGroupName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The ID of the virtual private cloud (VPC). You can add only servers that are deployed
        /// in the specified VPC to the server group.
        /// Note: This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
        /// Note: This parameter takes effect when the ServerGroupType parameter is set to Instance or Ip.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VpcId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: protocol: The backend protocol. Valid values:
        /// HTTP (default): The server group can be associated with HTTPS, HTTP, and QUIC listeners.
        /// HTTPS: The server group can be associated with HTTPS listeners.
        /// gRPC: The server group can be associated with HTTPS and QUIC listeners.
        /// Note: If the ServerGroupType parameter is set to Fc, you can set Protocol only to HTTP.
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

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
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

        /// <remarks>
        /// <strong>Property</strong>: scheduler: The scheduling algorithm. Valid values:
        /// Wrr (default): The weighted round-robin algorithm is used. Backend servers that have higher weights receive more requests than those that have lower weights.
        /// Wlc: The weighted least connections algorithm is used. Requests are distributed based on the weights and the number of connections to backend servers. If two backend servers have the same weight, the backend server that has fewer connections is expected to receive more requests.
        /// Sch: The consistent hashing algorithm is used. Requests from the same source IP address are distributed to the same backend server.
        /// Note: This parameter takes effect when the ServerGroupType parameter is set to Instance or Ip.
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

        /// <remarks>
        /// <strong>Property</strong>: serverGroupType: The type of the server group. Valid values:
        /// Instance (default): allows you add servers by specifying Ecs, Ens, or Eci.
        /// Ip: allows you to add servers by specifying IP addresses.
        /// Fc: allows you to add servers by specifying functions of Function Compute.
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

        /// <remarks>
        /// <strong>Property</strong>: serviceName: This parameter is available only if the ALB Ingress controller is used. In this case, set the parameter to the name of the Kubernetes Service that is associated with the server group.
        /// </remarks>
        [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServiceName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: stickySessionConfig: The configuration of session persistence.
        /// Note: This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
        /// </remarks>
        [JsiiProperty(name: "stickySessionConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosServerGroup.StickySessionConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StickySessionConfig
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-alb.RosServerGroup.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Alb.RosServerGroup.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosServerGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-servergroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosServerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.RosServerGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.IRosServerGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: healthCheckConfig: The configuration of health checks.
            /// </remarks>
            [JsiiProperty(name: "healthCheckConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosServerGroup.HealthCheckConfigProperty\"}]}}")]
            public object HealthCheckConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: serverGroupName: The name of the server group. The name must be 2 to 128 characters in length, and
            /// can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name
            /// must start with a letter.
            /// </remarks>
            [JsiiProperty(name: "serverGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServerGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: The ID of the virtual private cloud (VPC). You can add only servers that are deployed
            /// in the specified VPC to the server group.
            /// Note: This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
            /// Note: This parameter takes effect when the ServerGroupType parameter is set to Instance or Ip.
            /// </remarks>
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VpcId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: protocol: The backend protocol. Valid values:
            /// HTTP (default): The server group can be associated with HTTPS, HTTP, and QUIC listeners.
            /// HTTPS: The server group can be associated with HTTPS listeners.
            /// gRPC: The server group can be associated with HTTPS and QUIC listeners.
            /// Note: If the ServerGroupType parameter is set to Fc, you can set Protocol only to HTTP.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "protocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Protocol
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of the resource group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: scheduler: The scheduling algorithm. Valid values:
            /// Wrr (default): The weighted round-robin algorithm is used. Backend servers that have higher weights receive more requests than those that have lower weights.
            /// Wlc: The weighted least connections algorithm is used. Requests are distributed based on the weights and the number of connections to backend servers. If two backend servers have the same weight, the backend server that has fewer connections is expected to receive more requests.
            /// Sch: The consistent hashing algorithm is used. Requests from the same source IP address are distributed to the same backend server.
            /// Note: This parameter takes effect when the ServerGroupType parameter is set to Instance or Ip.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "scheduler", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Scheduler
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: serverGroupType: The type of the server group. Valid values:
            /// Instance (default): allows you add servers by specifying Ecs, Ens, or Eci.
            /// Ip: allows you to add servers by specifying IP addresses.
            /// Fc: allows you to add servers by specifying functions of Function Compute.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serverGroupType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServerGroupType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceName: This parameter is available only if the ALB Ingress controller is used. In this case, set the parameter to the name of the Kubernetes Service that is associated with the server group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServiceName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: stickySessionConfig: The configuration of session persistence.
            /// Note: This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "stickySessionConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosServerGroup.StickySessionConfigProperty\"}]}}", isOptional: true)]
            public object? StickySessionConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-alb.RosServerGroup.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Alb.RosServerGroup.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Alb.RosServerGroup.ITagsProperty[]?>();
            }
        }
    }
}
