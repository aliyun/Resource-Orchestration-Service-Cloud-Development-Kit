using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Alb
{
    /// <summary>Properties for defining a `ServerGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-servergroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IServerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.ServerGroupProps")]
    public interface IServerGroupProps
    {
        /// <summary>Property healthCheckConfig: The configuration of health checks.</summary>
        [JsiiProperty(name: "healthCheckConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosServerGroup.HealthCheckConfigProperty\"}]}}")]
        object HealthCheckConfig
        {
            get;
        }

        /// <summary>Property serverGroupName: The name of the server group.</summary>
        /// <remarks>
        /// The name must be 2 to 128 characters in length, and
        /// can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name
        /// must start with a letter.
        /// </remarks>
        [JsiiProperty(name: "serverGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ServerGroupName
        {
            get;
        }

        /// <summary>Property connectionDrainConfig: Configuration related to graceful connection interruption.Enable graceful connection interruption. After the backend server is removed or the health check fails, the load balancing allows the existing connection to be transmitted normally within a certain period of time.Note:  Basic Edition instances do not support enabling graceful connection interruption. Only Standard Edition and WAF Enhanced Edition instances support it.Server type and IP type server group support graceful connection interruption. Function Compute type does not support it.</summary>
        [JsiiProperty(name: "connectionDrainConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosServerGroup.ConnectionDrainConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ConnectionDrainConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property crossZoneEnabled: Specifies whether to enable cross-zone load balancing.</summary>
        /// <remarks>
        /// Valid values:
        /// true (default)
        /// false
        /// Note:
        /// Basic ALB instances do not support server groups that have cross-zone load balancing disabled. Only Standard and WAF-enabled ALB instances support server groups that have cross-zone load balancing.
        /// Cross-zone load balancing can be disabled for server groups of the server and IP type, but not for server groups of the Function Compute type.
        /// When cross-zone load balancing is disabled, session persistence cannot be enabled.
        /// </remarks>
        [JsiiProperty(name: "crossZoneEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CrossZoneEnabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ipv6Enabled: Whether to enable IPv6.</summary>
        [JsiiProperty(name: "ipv6Enabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ipv6Enabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property protocol: The backend protocol.</summary>
        /// <remarks>
        /// Valid values:
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

        /// <summary>Property scheduler: The scheduling algorithm.</summary>
        /// <remarks>
        /// Valid values:
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

        /// <summary>Property serverGroupType: The type of the server group.</summary>
        /// <remarks>
        /// Valid values:
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

        /// <summary>Property serviceName: This parameter is available only if the ALB Ingress controller is used.</summary>
        /// <remarks>
        /// In this case, set the parameter to the name of the Kubernetes Service that is associated with the server group.
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

        /// <summary>Property slowStartConfig: Slow start related configuration.After slow start is enabled, the backend server newly added to the backend server group will be preheated within the set time period, and the number of requests forwarded to the server will increase linearly.Note: Basic Edition instances do not support slow start, only Standard Edition and WAF Enhanced Edition instances support it.Server type and IP type server groups support slow start configuration, but Function Compute type does not.Slow start can only be enabled when the backend scheduling algorithm is the weighted polling algorithm.</summary>
        [JsiiProperty(name: "slowStartConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosServerGroup.SlowStartConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SlowStartConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property stickySessionConfig: The configuration of session persistence.</summary>
        /// <remarks>
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

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
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

        /// <summary>Property uchConfig: URL consistency hash parameter configuration.</summary>
        [JsiiProperty(name: "uchConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosServerGroup.UchConfigProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UchConfig
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property upstreamKeepaliveEnabled: Whether to enable upstream keepalive.</summary>
        [JsiiProperty(name: "upstreamKeepaliveEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? UpstreamKeepaliveEnabled
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property vpcId: The ID of the virtual private cloud (VPC).</summary>
        /// <remarks>
        /// You can add only servers that are deployed
        /// in the specified VPC to the server group.
        /// Note: This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
        /// Note: This parameter takes effect when the ServerGroupType parameter is set to Instance or Ip.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ServerGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-alb-servergroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IServerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-alb.ServerGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Alb.IServerGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property healthCheckConfig: The configuration of health checks.</summary>
            [JsiiProperty(name: "healthCheckConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosServerGroup.HealthCheckConfigProperty\"}]}}")]
            public object HealthCheckConfig
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property serverGroupName: The name of the server group.</summary>
            /// <remarks>
            /// The name must be 2 to 128 characters in length, and
            /// can contain letters, digits, periods (.), underscores (_), and hyphens (-). The name
            /// must start with a letter.
            /// </remarks>
            [JsiiProperty(name: "serverGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ServerGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property connectionDrainConfig: Configuration related to graceful connection interruption.Enable graceful connection interruption. After the backend server is removed or the health check fails, the load balancing allows the existing connection to be transmitted normally within a certain period of time.Note:  Basic Edition instances do not support enabling graceful connection interruption. Only Standard Edition and WAF Enhanced Edition instances support it.Server type and IP type server group support graceful connection interruption. Function Compute type does not support it.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "connectionDrainConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosServerGroup.ConnectionDrainConfigProperty\"}]}}", isOptional: true)]
            public object? ConnectionDrainConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property crossZoneEnabled: Specifies whether to enable cross-zone load balancing.</summary>
            /// <remarks>
            /// Valid values:
            /// true (default)
            /// false
            /// Note:
            /// Basic ALB instances do not support server groups that have cross-zone load balancing disabled. Only Standard and WAF-enabled ALB instances support server groups that have cross-zone load balancing.
            /// Cross-zone load balancing can be disabled for server groups of the server and IP type, but not for server groups of the Function Compute type.
            /// When cross-zone load balancing is disabled, session persistence cannot be enabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "crossZoneEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CrossZoneEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ipv6Enabled: Whether to enable IPv6.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ipv6Enabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ipv6Enabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property protocol: The backend protocol.</summary>
            /// <remarks>
            /// Valid values:
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

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property scheduler: The scheduling algorithm.</summary>
            /// <remarks>
            /// Valid values:
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

            /// <summary>Property serverGroupType: The type of the server group.</summary>
            /// <remarks>
            /// Valid values:
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

            /// <summary>Property serviceName: This parameter is available only if the ALB Ingress controller is used.</summary>
            /// <remarks>
            /// In this case, set the parameter to the name of the Kubernetes Service that is associated with the server group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serviceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ServiceName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property slowStartConfig: Slow start related configuration.After slow start is enabled, the backend server newly added to the backend server group will be preheated within the set time period, and the number of requests forwarded to the server will increase linearly.Note: Basic Edition instances do not support slow start, only Standard Edition and WAF Enhanced Edition instances support it.Server type and IP type server groups support slow start configuration, but Function Compute type does not.Slow start can only be enabled when the backend scheduling algorithm is the weighted polling algorithm.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "slowStartConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosServerGroup.SlowStartConfigProperty\"}]}}", isOptional: true)]
            public object? SlowStartConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property stickySessionConfig: The configuration of session persistence.</summary>
            /// <remarks>
            /// Note: This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "stickySessionConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosServerGroup.StickySessionConfigProperty\"}]}}", isOptional: true)]
            public object? StickySessionConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-alb.RosServerGroup.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Alb.RosServerGroup.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Alb.RosServerGroup.ITagsProperty[]?>();
            }

            /// <summary>Property uchConfig: URL consistency hash parameter configuration.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "uchConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-alb.RosServerGroup.UchConfigProperty\"}]}}", isOptional: true)]
            public object? UchConfig
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property upstreamKeepaliveEnabled: Whether to enable upstream keepalive.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "upstreamKeepaliveEnabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? UpstreamKeepaliveEnabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vpcId: The ID of the virtual private cloud (VPC).</summary>
            /// <remarks>
            /// You can add only servers that are deployed
            /// in the specified VPC to the server group.
            /// Note: This parameter is required if the ServerGroupType parameter is set to Instance or Ip.
            /// Note: This parameter takes effect when the ServerGroupType parameter is set to Instance or Ip.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VpcId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
