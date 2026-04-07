using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Properties for defining a `HoneypotProbe`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotprobe
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IHoneypotProbeProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.HoneypotProbeProps")]
    public interface IHoneypotProbeProps
    {
        /// <summary>Property controlNodeId: The ID of the management node.</summary>
        /// <remarks>
        ///     You can call the <a href="~~ListHoneypotNode~~">ListHoneypotNode</a> operation to query the IDs of management nodes.
        /// </remarks>
        [JsiiProperty(name: "controlNodeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ControlNodeId
        {
            get;
        }

        /// <summary>Property displayName: The name of the probe.</summary>
        [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DisplayName
        {
            get;
        }

        /// <summary>Property probeType: The type of the probe.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>host_probe</strong>: host probe</description>
        /// <description><strong>vpc_black_hole_probe</strong>: virtual private cloud (VPC) probe.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "probeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProbeType
        {
            get;
        }

        /// <summary>Property arp: Specifies whether to enable Address Resolution Protocol (ARP) spoofing.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>true</strong>: yes</description>
        /// <description><strong>false</strong>: no.</description>
        /// </list>
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

        /// <summary>Property businessGroupId: Business grouping.</summary>
        [JsiiProperty(name: "businessGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BusinessGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property honeypotBindList: The configuration of the probe.</summary>
        [JsiiProperty(name: "honeypotBindList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-threatdetection.RosHoneypotProbe.HoneypotBindListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? HoneypotBindList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property ping: Specifies whether to enable ping scan.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>true</strong>: yes</description>
        /// <description><strong>false</strong>: no.</description>
        /// </list>
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

        /// <summary>Property probeVersion: The version of the probe.</summary>
        [JsiiProperty(name: "probeVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProbeVersion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property proxyIp: The IP address of the proxy.</summary>
        [JsiiProperty(name: "proxyIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProxyIp
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property serviceIpList: Listen to the IP address list.</summary>
        [JsiiProperty(name: "serviceIpList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ServiceIpList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property uuid: The UUID of the instance.</summary>
        /// <remarks>
        ///     If <strong>ProbeType</strong> is set to <strong>host_probe</strong>, this parameter is required.
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

        /// <summary>Property vpcId: The ID of the VPC.</summary>
        /// <remarks>
        ///     <strong>ProbeType</strong> is <strong>vpc_Black _hole_probe</strong>. This value cannot be empty. You can call the [DescribeVpcHoneyPotList](~~ DescribeVpcHoneyPotList ~~) interface to obtain the value.
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

        /// <summary>Properties for defining a `HoneypotProbe`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-honeypotprobe
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IHoneypotProbeProps), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.HoneypotProbeProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IHoneypotProbeProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property controlNodeId: The ID of the management node.</summary>
            /// <remarks>
            ///     You can call the <a href="~~ListHoneypotNode~~">ListHoneypotNode</a> operation to query the IDs of management nodes.
            /// </remarks>
            [JsiiProperty(name: "controlNodeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ControlNodeId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property displayName: The name of the probe.</summary>
            [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DisplayName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property probeType: The type of the probe.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>host_probe</strong>: host probe</description>
            /// <description><strong>vpc_black_hole_probe</strong>: virtual private cloud (VPC) probe.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "probeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProbeType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property arp: Specifies whether to enable Address Resolution Protocol (ARP) spoofing.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>true</strong>: yes</description>
            /// <description><strong>false</strong>: no.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "arp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Arp
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property businessGroupId: Business grouping.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "businessGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? BusinessGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property honeypotBindList: The configuration of the probe.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "honeypotBindList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-threatdetection.RosHoneypotProbe.HoneypotBindListProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? HoneypotBindList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property ping: Specifies whether to enable ping scan.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>true</strong>: yes</description>
            /// <description><strong>false</strong>: no.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ping", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Ping
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property probeVersion: The version of the probe.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "probeVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProbeVersion
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property proxyIp: The IP address of the proxy.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "proxyIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProxyIp
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property serviceIpList: Listen to the IP address list.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "serviceIpList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ServiceIpList
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property uuid: The UUID of the instance.</summary>
            /// <remarks>
            ///     If <strong>ProbeType</strong> is set to <strong>host_probe</strong>, this parameter is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "uuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Uuid
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property vpcId: The ID of the VPC.</summary>
            /// <remarks>
            ///     <strong>ProbeType</strong> is <strong>vpc_Black _hole_probe</strong>. This value cannot be empty. You can call the [DescribeVpcHoneyPotList](~~ DescribeVpcHoneyPotList ~~) interface to obtain the value.
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
