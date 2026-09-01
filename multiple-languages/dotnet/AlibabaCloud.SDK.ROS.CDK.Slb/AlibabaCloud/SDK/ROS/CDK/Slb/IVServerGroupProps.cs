using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Slb
{
    /// <summary>Properties for defining a `VServerGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-vservergroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IVServerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.VServerGroupProps")]
    public interface IVServerGroupProps
    {
        /// <summary>Property loadBalancerId: The id of load balancer.</summary>
        [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object LoadBalancerId
        {
            get;
        }

        /// <summary>Property vServerGroupName: The name of the vServer group.</summary>
        /// <remarks>
        /// The name must be 1 to 80 characters in length, and can contain letters, digits,
        /// hyphens (-), forward slashes (/), periods (.),and underscores (_).
        /// </remarks>
        [JsiiProperty(name: "vServerGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VServerGroupName
        {
            get;
        }

        /// <summary>Property backendServers: The backend servers that you want to add.</summary>
        /// <remarks>
        /// Configure the following parameters:
        ///
        /// <list type="bullet">
        /// <description>ServerId: required. The ID of the backend server. Specify the ID in a string.
        /// You can specify the ID of an Elastic Compute Service (ECS) instance, an elastic
        /// network interface (ENI), or an elastic container instance. If you set ServerId to
        /// the ID of an ENI or an elastic container instance, you must configure the Type
        /// parameter.</description>
        /// <description>Weight: the weight of the backend server. Valid values: 0 to 100. Default
        /// value: 100. If you set the weight of a backend server to 0, no requests are
        /// forwarded to the backend server.</description>
        /// <description>Description: optional. The description of the backend server. Specify the
        /// description in a string. The description must be 1 to 80 characters in length,
        /// and can contain letters, digits, hyphens (-), forward slashes (/), periods (.),
        /// and underscores (_).</description>
        /// <description>Type: the type of the backend server. Valid values:</description>
        /// <description>ecs (default): ECS instance</description>
        /// <description>eni: ENI.</description>
        /// <description>eni: elastic container instance.</description>
        /// </list>
        ///
        ///     You can specify ENIs and elastic container instances as backend servers only
        ///     for high-performance SLB instances.
        ///
        /// <list type="bullet">
        /// <description>ServerIp: The IP address of the ECS instance or ENI.</description>
        /// <description>Port: the backend port.
        /// Examples:</description>
        /// <description>Add an ECS instance:
        /// <c>[{ "ServerId": "i-xxxxxxxxx", "Weight": "100", "Type": "ecs", "Port":"80","Description":"test-112" }]</c></description>
        /// <description>Add an ENI:
        /// <c>[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "192.168..", "Port":"80","Description":"test-112" }]</c></description>
        /// <description>Add an ENI with multiple IP addresses:
        /// <c>[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "192.168..", "Port":"80","Description":"test-113" },{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "172.166..", "Port":"80","Description":"test-113" }]</c></description>
        /// <description>Add an elastic container instance:
        /// <c>[{ "ServerId": "eci-xxxxxxxxx", "Weight": "100", "Type": "eci", "ServerIp": "192.168..", "Port":"80","Description":"test-114" }]</c></description>
        /// </list>
        ///
        ///     You can add only running backend servers to SLB instances. You can specify at
        ///     most 20 backend servers.
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

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
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

        /// <summary>Properties for defining a `VServerGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-slb-vservergroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IVServerGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-slb.VServerGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Slb.IVServerGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property loadBalancerId: The id of load balancer.</summary>
            [JsiiProperty(name: "loadBalancerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object LoadBalancerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property vServerGroupName: The name of the vServer group.</summary>
            /// <remarks>
            /// The name must be 1 to 80 characters in length, and can contain letters, digits,
            /// hyphens (-), forward slashes (/), periods (.),and underscores (_).
            /// </remarks>
            [JsiiProperty(name: "vServerGroupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VServerGroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property backendServers: The backend servers that you want to add.</summary>
            /// <remarks>
            /// Configure the following parameters:
            ///
            /// <list type="bullet">
            /// <description>ServerId: required. The ID of the backend server. Specify the ID in a string.
            /// You can specify the ID of an Elastic Compute Service (ECS) instance, an elastic
            /// network interface (ENI), or an elastic container instance. If you set ServerId to
            /// the ID of an ENI or an elastic container instance, you must configure the Type
            /// parameter.</description>
            /// <description>Weight: the weight of the backend server. Valid values: 0 to 100. Default
            /// value: 100. If you set the weight of a backend server to 0, no requests are
            /// forwarded to the backend server.</description>
            /// <description>Description: optional. The description of the backend server. Specify the
            /// description in a string. The description must be 1 to 80 characters in length,
            /// and can contain letters, digits, hyphens (-), forward slashes (/), periods (.),
            /// and underscores (_).</description>
            /// <description>Type: the type of the backend server. Valid values:</description>
            /// <description>ecs (default): ECS instance</description>
            /// <description>eni: ENI.</description>
            /// <description>eni: elastic container instance.</description>
            /// </list>
            ///
            ///     You can specify ENIs and elastic container instances as backend servers only
            ///     for high-performance SLB instances.
            ///
            /// <list type="bullet">
            /// <description>ServerIp: The IP address of the ECS instance or ENI.</description>
            /// <description>Port: the backend port.
            /// Examples:</description>
            /// <description>Add an ECS instance:
            /// <c>[{ "ServerId": "i-xxxxxxxxx", "Weight": "100", "Type": "ecs", "Port":"80","Description":"test-112" }]</c></description>
            /// <description>Add an ENI:
            /// <c>[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "192.168..", "Port":"80","Description":"test-112" }]</c></description>
            /// <description>Add an ENI with multiple IP addresses:
            /// <c>[{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "192.168..", "Port":"80","Description":"test-113" },{ "ServerId": "eni-xxxxxxxxx", "Weight": "100", "Type": "eni", "ServerIp": "172.166..", "Port":"80","Description":"test-113" }]</c></description>
            /// <description>Add an elastic container instance:
            /// <c>[{ "ServerId": "eci-xxxxxxxxx", "Weight": "100", "Type": "eci", "ServerIp": "192.168..", "Port":"80","Description":"test-114" }]</c></description>
            /// </list>
            ///
            ///     You can add only running backend servers to SLB instances. You can specify at
            ///     most 20 backend servers.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "backendServers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-slb.RosVServerGroup.BackendServersProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? BackendServers
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
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
