using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `TrafficMirrorSession`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficmirrorsession
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ITrafficMirrorSessionProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.TrafficMirrorSessionProps")]
    public interface ITrafficMirrorSessionProps
    {
        /// <summary>Property priority: The priority of the traffic mirror session.</summary>
        /// <remarks>
        /// Valid values: <strong>1 to 32766</strong>.
        /// A smaller value indicates a higher priority. You cannot specify identical priorities for traffic mirror sessions that are created in the same region by using the same account.
        /// </remarks>
        [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Priority
        {
            get;
        }

        /// <summary>Property trafficMirrorFilterId: The ID of the filter.</summary>
        [JsiiProperty(name: "trafficMirrorFilterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TrafficMirrorFilterId
        {
            get;
        }

        /// <summary>Property trafficMirrorSourceIds: undefined.</summary>
        [JsiiProperty(name: "trafficMirrorSourceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object TrafficMirrorSourceIds
        {
            get;
        }

        /// <summary>Property trafficMirrorTargetId: The ID of the traffic mirror destination.</summary>
        /// <remarks>
        /// You can specify only an elastic network interface (ENI) or a Server Load Balancer (SLB) instance as a traffic mirror destination.
        /// </remarks>
        [JsiiProperty(name: "trafficMirrorTargetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TrafficMirrorTargetId
        {
            get;
        }

        /// <summary>Property trafficMirrorTargetType: The type of the traffic mirror destination.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>NetworkInterface</strong>: an ENI</description>
        /// <description><strong>SLB</strong>: an SLB instance</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "trafficMirrorTargetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TrafficMirrorTargetType
        {
            get;
        }

        /// <summary>Property enabled: Specifies whether to enable the traffic mirror session.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>false</strong> (default): does not enable the traffic mirror session.</description>
        /// <description><strong>true</strong>: enables the traffic mirror session.</description>
        /// </list>
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

        /// <summary>Property packetLength: The maximum transmission unit (MTU).</summary>
        /// <remarks>
        /// Default value: <strong>1500</strong>.
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

        /// <summary>Property resourceGroupId: The ID of the resource group to which the mirrored traffic belongs.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tag:.</summary>
        [JsiiProperty(name: "tag", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Tag
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property trafficMirrorSessionDescription: The description of the traffic mirror session.</summary>
        /// <remarks>
        /// The description must be 1 to 256 characters in length and cannot start with http:// or https://.
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

        /// <summary>Property trafficMirrorSessionName: The name of the traffic mirror session.</summary>
        /// <remarks>
        /// The name must be 1 to 128 characters in length and cannot start with http:// or https://.
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

        /// <summary>Property virtualNetworkId: The VXLAN network identifier (VNI).</summary>
        /// <remarks>
        /// Valid values: <strong>0 to 16777215</strong>.
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

        /// <summary>Properties for defining a `TrafficMirrorSession`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-trafficmirrorsession
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ITrafficMirrorSessionProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.TrafficMirrorSessionProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.ITrafficMirrorSessionProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property priority: The priority of the traffic mirror session.</summary>
            /// <remarks>
            /// Valid values: <strong>1 to 32766</strong>.
            /// A smaller value indicates a higher priority. You cannot specify identical priorities for traffic mirror sessions that are created in the same region by using the same account.
            /// </remarks>
            [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Priority
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property trafficMirrorFilterId: The ID of the filter.</summary>
            [JsiiProperty(name: "trafficMirrorFilterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TrafficMirrorFilterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property trafficMirrorSourceIds: undefined.</summary>
            [JsiiProperty(name: "trafficMirrorSourceIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object TrafficMirrorSourceIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property trafficMirrorTargetId: The ID of the traffic mirror destination.</summary>
            /// <remarks>
            /// You can specify only an elastic network interface (ENI) or a Server Load Balancer (SLB) instance as a traffic mirror destination.
            /// </remarks>
            [JsiiProperty(name: "trafficMirrorTargetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TrafficMirrorTargetId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property trafficMirrorTargetType: The type of the traffic mirror destination.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>NetworkInterface</strong>: an ENI</description>
            /// <description><strong>SLB</strong>: an SLB instance</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "trafficMirrorTargetType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TrafficMirrorTargetType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property enabled: Specifies whether to enable the traffic mirror session.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>false</strong> (default): does not enable the traffic mirror session.</description>
            /// <description><strong>true</strong>: enables the traffic mirror session.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enabled", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Enabled
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property packetLength: The maximum transmission unit (MTU).</summary>
            /// <remarks>
            /// Default value: <strong>1500</strong>.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "packetLength", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PacketLength
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group to which the mirrored traffic belongs.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tag:.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "tag", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Tag
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property trafficMirrorSessionDescription: The description of the traffic mirror session.</summary>
            /// <remarks>
            /// The description must be 1 to 256 characters in length and cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "trafficMirrorSessionDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TrafficMirrorSessionDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property trafficMirrorSessionName: The name of the traffic mirror session.</summary>
            /// <remarks>
            /// The name must be 1 to 128 characters in length and cannot start with http:// or https://.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "trafficMirrorSessionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TrafficMirrorSessionName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property virtualNetworkId: The VXLAN network identifier (VNI).</summary>
            /// <remarks>
            /// Valid values: <strong>0 to 16777215</strong>.
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
