using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `RosTrafficMirrorSession`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficmirrorsession
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosTrafficMirrorSessionProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosTrafficMirrorSessionProps")]
    public interface IRosTrafficMirrorSessionProps
    {
        /// <remarks>
        /// <strong>Property</strong>: priority: The priority of the traffic mirror session. Valid values: **1 to 32766**.
        /// A smaller value indicates a higher priority. You cannot specify identical priorities for traffic mirror sessions that are created in the same region by using the same account.
        /// </remarks>
        [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Priority
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: trafficMirrorFilterId: The ID of the filter.
        /// </remarks>
        [JsiiProperty(name: "trafficMirrorFilterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TrafficMirrorFilterId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: trafficMirrorSourceIds: undefined
        /// </remarks>
        [JsiiProperty(name: "trafficMirrorSourceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object TrafficMirrorSourceIds
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: trafficMirrorTargetId: The ID of the traffic mirror destination. You can specify only an elastic network interface (ENI) or a Server Load Balancer (SLB) instance as a traffic mirror destination.
        /// </remarks>
        [JsiiProperty(name: "trafficMirrorTargetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TrafficMirrorTargetId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: trafficMirrorTargetType: The type of the traffic mirror destination. Valid values:
        /// - **NetworkInterface**: an ENI
        /// - **SLB**: an SLB instance
        /// </remarks>
        [JsiiProperty(name: "trafficMirrorTargetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TrafficMirrorTargetType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: enabled: Specifies whether to enable the traffic mirror session. Valid values:
        /// - **false** (default): does not enable the traffic mirror session.
        /// - **true**: enables the traffic mirror session.
        /// </remarks>
        [JsiiProperty(name: "enabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Enabled
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: packetLength: The maximum transmission unit (MTU). Default value: **1500**.
        /// </remarks>
        [JsiiProperty(name: "packetLength", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PacketLength
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: The ID of the resource group to which the mirrored traffic belongs.
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
        /// <strong>Property</strong>: tag:
        /// </remarks>
        [JsiiProperty(name: "tag", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Tag
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: trafficMirrorSessionDescription: The description of the traffic mirror session.
        /// The description must be 1 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
        /// </remarks>
        [JsiiProperty(name: "trafficMirrorSessionDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TrafficMirrorSessionDescription
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: trafficMirrorSessionName: The name of the traffic mirror session.
        /// The name must be 1 to 128 characters in length and cannot start with http:\/\/ or https:\/\/.
        /// </remarks>
        [JsiiProperty(name: "trafficMirrorSessionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TrafficMirrorSessionName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: virtualNetworkId: The VXLAN network identifier (VNI). Valid values: **0 to 16777215**.
        /// You can use VNIs to identify mirrored traffic from different sessions at the traffic mirror destination. You can specify a custom VNI or use a random VNI allocated by the system. If you want the system to randomly allocate a VNI, do not enter a value.
        /// </remarks>
        [JsiiProperty(name: "virtualNetworkId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VirtualNetworkId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosTrafficMirrorSession`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficmirrorsession
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosTrafficMirrorSessionProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosTrafficMirrorSessionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosTrafficMirrorSessionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: priority: The priority of the traffic mirror session. Valid values: **1 to 32766**.
            /// A smaller value indicates a higher priority. You cannot specify identical priorities for traffic mirror sessions that are created in the same region by using the same account.
            /// </remarks>
            [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Priority
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: trafficMirrorFilterId: The ID of the filter.
            /// </remarks>
            [JsiiProperty(name: "trafficMirrorFilterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TrafficMirrorFilterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: trafficMirrorSourceIds: undefined
            /// </remarks>
            [JsiiProperty(name: "trafficMirrorSourceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object TrafficMirrorSourceIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: trafficMirrorTargetId: The ID of the traffic mirror destination. You can specify only an elastic network interface (ENI) or a Server Load Balancer (SLB) instance as a traffic mirror destination.
            /// </remarks>
            [JsiiProperty(name: "trafficMirrorTargetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TrafficMirrorTargetId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: trafficMirrorTargetType: The type of the traffic mirror destination. Valid values:
            /// - **NetworkInterface**: an ENI
            /// - **SLB**: an SLB instance
            /// </remarks>
            [JsiiProperty(name: "trafficMirrorTargetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TrafficMirrorTargetType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: enabled: Specifies whether to enable the traffic mirror session. Valid values:
            /// - **false** (default): does not enable the traffic mirror session.
            /// - **true**: enables the traffic mirror session.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Enabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: packetLength: The maximum transmission unit (MTU). Default value: **1500**.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "packetLength", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PacketLength
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: The ID of the resource group to which the mirrored traffic belongs.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tag:
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tag", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Tag
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: trafficMirrorSessionDescription: The description of the traffic mirror session.
            /// The description must be 1 to 256 characters in length and cannot start with http:\/\/ or https:\/\/.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "trafficMirrorSessionDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TrafficMirrorSessionDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: trafficMirrorSessionName: The name of the traffic mirror session.
            /// The name must be 1 to 128 characters in length and cannot start with http:\/\/ or https:\/\/.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "trafficMirrorSessionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TrafficMirrorSessionName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: virtualNetworkId: The VXLAN network identifier (VNI). Valid values: **0 to 16777215**.
            /// You can use VNIs to identify mirrored traffic from different sessions at the traffic mirror destination. You can specify a custom VNI or use a random VNI allocated by the system. If you want the system to randomly allocate a VNI, do not enter a value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "virtualNetworkId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? VirtualNetworkId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
