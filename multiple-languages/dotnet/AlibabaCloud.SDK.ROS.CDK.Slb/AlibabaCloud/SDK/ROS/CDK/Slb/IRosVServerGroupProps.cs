using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    /// <summary>Properties for defining a `RosVServerGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-vservergroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosVServerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.RosVServerGroupProps")]
    public interface IRosVServerGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: loadBalancerId: The id of load balancer.
        /// </remarks>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LoadBalancerId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: vServerGroupName: The name of the vServer group.
        /// The name must be 1 to 80 characters in length, and can contain letters, digits,
        /// hyphens (-), forward slashes (\/), periods (.),and underscores (_).
        /// </remarks>
        [JsiiProperty(name: "vServerGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VServerGroupName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: backendServers: The backend servers that you want to add. Configure the following parameters:
        /// - ServerId: required. The ID of the backend server. Specify the ID in a string.
        /// You can specify the ID of an Elastic Compute Service (ECS) instance, an elastic
        /// network interface (ENI), or an elastic container instance. If you set ServerId to
        /// the ID of an ENI or an elastic container instance, you must configure the Type
        /// parameter.
        /// - Weight: the weight of the backend server. Valid values: 0 to 100. Default
        /// value: 100. If you set the weight of a backend server to 0, no requests are
        /// forwarded to the backend server.
        /// - Description: optional. The description of the backend server. Specify the
        /// description in a string. The description must be 1 to 80 characters in length,
        /// and can contain letters, digits, hyphens (-), forward slashes (\/), periods (.),
        /// and underscores (_).
        /// - Type: the type of the backend server. Valid values:
        /// - ecs (default): ECS instance
        /// - eni: ENI.
        /// - eni: elastic container instance.
        /// > You can specify ENIs and elastic container instances as backend servers only
        /// for high-performance SLB instances.
        /// - ServerIp: The IP address of the ECS instance or ENI.
        /// - Port: the backend port.
        /// Examples:
        /// - Add an ECS instance:
        /// `[{ "ServerId": "i-xxxxxxxxx", "Weight": "100", "Type": "ecs",
        /// "Port":"80","Description":"test-112" }]`
        /// - Add an ENI:
        /// `[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp":
        /// "192.168..", "Port":"80","Description":"test-112" }]`
        /// - Add an ENI with multiple IP addresses:
        /// `[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp":
        /// "192.168..", "Port":"80","Description":"test-113" },{ "ServerId":
        /// "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "172.166..",
        /// "Port":"80","Description":"test-113" }]`
        /// - Add an elastic container instance:
        /// `[{ "ServerId": "eci-xxxxxxxxx", "Weight": "100", "Type": "eci", "ServerIp":
        /// "192.168..", "Port":"80","Description":"test-114" }]`
        /// > You can add only running backend servers to SLB instances. You can specify at
        /// most 20 backend servers.
        /// </remarks>
        [JsiiProperty(name: "backendServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosVServerGroup.BackendServersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BackendServers
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-slb.RosVServerGroup.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Slb.RosVServerGroup.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosVServerGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-vservergroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosVServerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.RosVServerGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.IRosVServerGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: loadBalancerId: The id of load balancer.
            /// </remarks>
            [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LoadBalancerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: vServerGroupName: The name of the vServer group.
            /// The name must be 1 to 80 characters in length, and can contain letters, digits,
            /// hyphens (-), forward slashes (\/), periods (.),and underscores (_).
            /// </remarks>
            [JsiiProperty(name: "vServerGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VServerGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: backendServers: The backend servers that you want to add. Configure the following parameters:
            /// - ServerId: required. The ID of the backend server. Specify the ID in a string.
            /// You can specify the ID of an Elastic Compute Service (ECS) instance, an elastic
            /// network interface (ENI), or an elastic container instance. If you set ServerId to
            /// the ID of an ENI or an elastic container instance, you must configure the Type
            /// parameter.
            /// - Weight: the weight of the backend server. Valid values: 0 to 100. Default
            /// value: 100. If you set the weight of a backend server to 0, no requests are
            /// forwarded to the backend server.
            /// - Description: optional. The description of the backend server. Specify the
            /// description in a string. The description must be 1 to 80 characters in length,
            /// and can contain letters, digits, hyphens (-), forward slashes (\/), periods (.),
            /// and underscores (_).
            /// - Type: the type of the backend server. Valid values:
            /// - ecs (default): ECS instance
            /// - eni: ENI.
            /// - eni: elastic container instance.
            /// > You can specify ENIs and elastic container instances as backend servers only
            /// for high-performance SLB instances.
            /// - ServerIp: The IP address of the ECS instance or ENI.
            /// - Port: the backend port.
            /// Examples:
            /// - Add an ECS instance:
            /// `[{ "ServerId": "i-xxxxxxxxx", "Weight": "100", "Type": "ecs",
            /// "Port":"80","Description":"test-112" }]`
            /// - Add an ENI:
            /// `[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp":
            /// "192.168..", "Port":"80","Description":"test-112" }]`
            /// - Add an ENI with multiple IP addresses:
            /// `[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp":
            /// "192.168..", "Port":"80","Description":"test-113" },{ "ServerId":
            /// "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "172.166..",
            /// "Port":"80","Description":"test-113" }]`
            /// - Add an elastic container instance:
            /// `[{ "ServerId": "eci-xxxxxxxxx", "Weight": "100", "Type": "eci", "ServerIp":
            /// "192.168..", "Port":"80","Description":"test-114" }]`
            /// > You can add only running backend servers to SLB instances. You can specify at
            /// most 20 backend servers.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "backendServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosVServerGroup.BackendServersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? BackendServers
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-slb.RosVServerGroup.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Slb.RosVServerGroup.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Slb.RosVServerGroup.ITagsProperty[]?>();
            }
        }
    }
}
