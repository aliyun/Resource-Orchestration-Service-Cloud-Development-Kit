using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Properties for defining a `RosHoneypotProbe`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotprobe
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosHoneypotProbeProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.RosHoneypotProbeProps")]
    public interface IRosHoneypotProbeProps
    {
        /// <remarks>
        /// <strong>Property</strong>: controlNodeId: The ID of the management node.
        /// > You can call the [ListHoneypotNode](~~ListHoneypotNode~~) operation to query the IDs of management nodes.
        /// </remarks>
        [JsiiProperty(name: "controlNodeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ControlNodeId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: displayName: The name of the probe.
        /// </remarks>
        [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DisplayName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: probeType: The type of the probe. Valid values:
        /// *   **host_probe**: host probe
        /// *   **vpc_black_hole_probe**: virtual private cloud (VPC) probe.
        /// </remarks>
        [JsiiProperty(name: "probeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProbeType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: arp: Specifies whether to enable Address Resolution Protocol (ARP) spoofing. Valid values:
        /// *   **true**: yes
        /// *   **false**: no.
        /// </remarks>
        [JsiiProperty(name: "arp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Arp
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: businessGroupId: Business grouping.
        /// </remarks>
        [JsiiProperty(name: "businessGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BusinessGroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: honeypotBindList: The configuration of the probe.
        /// </remarks>
        [JsiiProperty(name: "honeypotBindList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-threatdetection.RosHoneypotProbe.HoneypotBindListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HoneypotBindList
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: ping: Specifies whether to enable ping scan. Valid values:
        /// *   **true**: yes
        /// *   **false**: no.
        /// </remarks>
        [JsiiProperty(name: "ping", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Ping
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: probeVersion: The version of the probe.
        /// </remarks>
        [JsiiProperty(name: "probeVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProbeVersion
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: proxyIp: The IP address of the proxy.
        /// </remarks>
        [JsiiProperty(name: "proxyIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProxyIp
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceIpList: Listen to the IP address list.
        /// </remarks>
        [JsiiProperty(name: "serviceIpList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServiceIpList
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: uuid: The UUID of the instance.
        /// > If **ProbeType** is set to **host_probe**, this parameter is required.
        /// </remarks>
        [JsiiProperty(name: "uuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Uuid
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The ID of the VPC.
        /// > **ProbeType** is **vpc\_Black \_hole\_probe**. This value cannot be empty. You can call the [DescribeVpcHoneyPotList](~~ DescribeVpcHoneyPotList ~~) interface to obtain the value.
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

        /// <summary>Properties for defining a `RosHoneypotProbe`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotprobe
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosHoneypotProbeProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.RosHoneypotProbeProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IRosHoneypotProbeProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: controlNodeId: The ID of the management node.
            /// > You can call the [ListHoneypotNode](~~ListHoneypotNode~~) operation to query the IDs of management nodes.
            /// </remarks>
            [JsiiProperty(name: "controlNodeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ControlNodeId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: displayName: The name of the probe.
            /// </remarks>
            [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DisplayName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: probeType: The type of the probe. Valid values:
            /// *   **host_probe**: host probe
            /// *   **vpc_black_hole_probe**: virtual private cloud (VPC) probe.
            /// </remarks>
            [JsiiProperty(name: "probeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProbeType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: arp: Specifies whether to enable Address Resolution Protocol (ARP) spoofing. Valid values:
            /// *   **true**: yes
            /// *   **false**: no.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "arp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Arp
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: businessGroupId: Business grouping.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "businessGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BusinessGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: honeypotBindList: The configuration of the probe.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "honeypotBindList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-threatdetection.RosHoneypotProbe.HoneypotBindListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? HoneypotBindList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: ping: Specifies whether to enable ping scan. Valid values:
            /// *   **true**: yes
            /// *   **false**: no.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ping", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ping
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: probeVersion: The version of the probe.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "probeVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProbeVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: proxyIp: The IP address of the proxy.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "proxyIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProxyIp
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceIpList: Listen to the IP address list.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "serviceIpList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ServiceIpList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: uuid: The UUID of the instance.
            /// > If **ProbeType** is set to **host_probe**, this parameter is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "uuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Uuid
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: vpcId: The ID of the VPC.
            /// > **ProbeType** is **vpc\_Black \_hole\_probe**. This value cannot be empty. You can call the [DescribeVpcHoneyPotList](~~ DescribeVpcHoneyPotList ~~) interface to obtain the value.
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
