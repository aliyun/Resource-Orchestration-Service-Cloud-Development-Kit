using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    /// <summary>Properties for defining a `QosPolicy`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qospolicy
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IQosPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.QosPolicyProps")]
    public interface IQosPolicyProps
    {
        /// <summary>Property destCidr: The range of the destination IP addresses.</summary>
        /// <remarks>
        /// Specify the value of this parameter in CIDR notation. Example: 192.168.10.0/24.
        /// </remarks>
        [JsiiProperty(name: "destCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DestCidr
        {
            get;
        }

        /// <summary>Property destPortRange: The range of destination ports.</summary>
        /// <remarks>
        /// Valid values: 1 to 65535 and -1.
        /// Set this parameter in one of the following formats:
        /// 1/200: a port range from 1 to 200
        /// 80/80: port 80
        /// -1/-1: all ports
        /// </remarks>
        [JsiiProperty(name: "destPortRange", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DestPortRange
        {
            get;
        }

        /// <summary>Property ipProtocol: The type of the protocol that applies to the traffic classification rule.</summary>
        /// <remarks>
        /// The supported protocols provided in this topic are for reference only. The actual
        /// protocols in the console shall prevail.
        /// </remarks>
        [JsiiProperty(name: "ipProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object IpProtocol
        {
            get;
        }

        /// <summary>Property priority: The priority of the traffic throttling policy to which the traffic classification rule belongs.</summary>
        [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Priority
        {
            get;
        }

        /// <summary>Property qosId: The ID of the QoS policy.</summary>
        [JsiiProperty(name: "qosId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object QosId
        {
            get;
        }

        /// <summary>Property sourceCidr: The range of the source IP addresses.</summary>
        /// <remarks>
        /// Specify the value of this parameter in CIDR notation. Example: 192.168.1.0/24.
        /// </remarks>
        [JsiiProperty(name: "sourceCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourceCidr
        {
            get;
        }

        /// <summary>Property sourcePortRange: The range of source ports.</summary>
        /// <remarks>
        /// Valid values: 1 to 65535 and -1.
        /// Set this parameter in one of the following formats:
        /// 1/200: a port range from 1 to 200
        /// 80/80: port 80
        /// -1/-1: all ports
        /// </remarks>
        [JsiiProperty(name: "sourcePortRange", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SourcePortRange
        {
            get;
        }

        /// <summary>Property description: The description of the traffic classification rule.</summary>
        /// <remarks>
        /// The description must be 1 to 512 characters in length and can contain letters, digits,
        /// underscores (_), and hyphens (-). It must start with a letter.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dpiGroupIds: The ID of the application group.</summary>
        /// <remarks>
        /// You can enter at most 100 application group IDs at a time.
        /// You can call the ListDpiGroups operation to query application group IDs and information about the applications.
        /// </remarks>
        [JsiiProperty(name: "dpiGroupIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DpiGroupIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dpiSignatureIds: The ID of the application.</summary>
        /// <remarks>
        /// You can enter at most 100 application IDs at a time.
        /// You can call the ListDpiSignatures operation to query application IDs and information about the applications.
        /// </remarks>
        [JsiiProperty(name: "dpiSignatureIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DpiSignatureIds
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property endTime: The time when the traffic classification rule becomes invalid.</summary>
        /// <remarks>
        /// Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format.
        /// The time must be in UTC+8.
        /// </remarks>
        [JsiiProperty(name: "endTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EndTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property name: The name of the traffic classification rule.</summary>
        /// <remarks>
        /// The name must be 2 to 100 characters in length, and can contain digits, underscores
        /// (_), and hyphens (-). It must start with a letter.
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Name
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property startTime: The time when the traffic classification rule takes effect.</summary>
        /// <remarks>
        /// Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format.
        /// The time must be in UTC+8.
        /// </remarks>
        [JsiiProperty(name: "startTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? StartTime
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `QosPolicy`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-sag-qospolicy
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IQosPolicyProps), fullyQualifiedName: "@alicloud/ros-cdk-sag.QosPolicyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sag.IQosPolicyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property destCidr: The range of the destination IP addresses.</summary>
            /// <remarks>
            /// Specify the value of this parameter in CIDR notation. Example: 192.168.10.0/24.
            /// </remarks>
            [JsiiProperty(name: "destCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DestCidr
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property destPortRange: The range of destination ports.</summary>
            /// <remarks>
            /// Valid values: 1 to 65535 and -1.
            /// Set this parameter in one of the following formats:
            /// 1/200: a port range from 1 to 200
            /// 80/80: port 80
            /// -1/-1: all ports
            /// </remarks>
            [JsiiProperty(name: "destPortRange", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DestPortRange
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property ipProtocol: The type of the protocol that applies to the traffic classification rule.</summary>
            /// <remarks>
            /// The supported protocols provided in this topic are for reference only. The actual
            /// protocols in the console shall prevail.
            /// </remarks>
            [JsiiProperty(name: "ipProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object IpProtocol
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property priority: The priority of the traffic throttling policy to which the traffic classification rule belongs.</summary>
            [JsiiProperty(name: "priority", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Priority
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property qosId: The ID of the QoS policy.</summary>
            [JsiiProperty(name: "qosId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object QosId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property sourceCidr: The range of the source IP addresses.</summary>
            /// <remarks>
            /// Specify the value of this parameter in CIDR notation. Example: 192.168.1.0/24.
            /// </remarks>
            [JsiiProperty(name: "sourceCidr", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourceCidr
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property sourcePortRange: The range of source ports.</summary>
            /// <remarks>
            /// Valid values: 1 to 65535 and -1.
            /// Set this parameter in one of the following formats:
            /// 1/200: a port range from 1 to 200
            /// 80/80: port 80
            /// -1/-1: all ports
            /// </remarks>
            [JsiiProperty(name: "sourcePortRange", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SourcePortRange
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the traffic classification rule.</summary>
            /// <remarks>
            /// The description must be 1 to 512 characters in length and can contain letters, digits,
            /// underscores (_), and hyphens (-). It must start with a letter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dpiGroupIds: The ID of the application group.</summary>
            /// <remarks>
            /// You can enter at most 100 application group IDs at a time.
            /// You can call the ListDpiGroups operation to query application group IDs and information about the applications.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dpiGroupIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DpiGroupIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dpiSignatureIds: The ID of the application.</summary>
            /// <remarks>
            /// You can enter at most 100 application IDs at a time.
            /// You can call the ListDpiSignatures operation to query application IDs and information about the applications.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dpiSignatureIds", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? DpiSignatureIds
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property endTime: The time when the traffic classification rule becomes invalid.</summary>
            /// <remarks>
            /// Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format.
            /// The time must be in UTC+8.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "endTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EndTime
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property name: The name of the traffic classification rule.</summary>
            /// <remarks>
            /// The name must be 2 to 100 characters in length, and can contain digits, underscores
            /// (_), and hyphens (-). It must start with a letter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property startTime: The time when the traffic classification rule takes effect.</summary>
            /// <remarks>
            /// Specify the time in the ISO 8601 standard in the YYYY-MM-DDThh:mm:ss+0800 format.
            /// The time must be in UTC+8.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "startTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? StartTime
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
