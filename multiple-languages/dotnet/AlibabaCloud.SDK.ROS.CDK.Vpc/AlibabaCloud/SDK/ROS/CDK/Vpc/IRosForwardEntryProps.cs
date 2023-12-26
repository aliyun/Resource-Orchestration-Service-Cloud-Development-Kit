using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    /// <summary>Properties for defining a `RosForwardEntry`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-forwardentry
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosForwardEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosForwardEntryProps")]
    public interface IRosForwardEntryProps
    {
        /// <remarks>
        /// <strong>Property</strong>: externalIp: Source IP, must belongs to bandwidth package internet IP
        /// </remarks>
        [JsiiProperty(name: "externalIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ExternalIp
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: externalPort: Source port, now support [1-65535]|Any|x\/y
        /// </remarks>
        [JsiiProperty(name: "externalPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ExternalPort
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: forwardTableId: Create forward entry in specified forward table.
        /// </remarks>
        [JsiiProperty(name: "forwardTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ForwardTableId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: internalIp: Destination IP, must belong to VPC private IP
        /// </remarks>
        [JsiiProperty(name: "internalIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InternalIp
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: internalPort: Destination port, now support [1-65535]|Any|x\/y
        /// </remarks>
        [JsiiProperty(name: "internalPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InternalPort
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: ipProtocol: Supported protocol, Now support 'TCP|UDP|Any'
        /// </remarks>
        [JsiiProperty(name: "ipProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object IpProtocol
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: forwardEntryName: the name of the DNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:\/\/ or https:\/\/.
        /// </remarks>
        [JsiiProperty(name: "forwardEntryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ForwardEntryName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: portBreak: Specifies whether to remove limits on the port range.
        /// </remarks>
        [JsiiProperty(name: "portBreak", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PortBreak
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosForwardEntry`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-vpc-forwardentry
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosForwardEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-vpc.RosForwardEntryProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vpc.IRosForwardEntryProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: externalIp: Source IP, must belongs to bandwidth package internet IP
            /// </remarks>
            [JsiiProperty(name: "externalIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ExternalIp
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: externalPort: Source port, now support [1-65535]|Any|x\/y
            /// </remarks>
            [JsiiProperty(name: "externalPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ExternalPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: forwardTableId: Create forward entry in specified forward table.
            /// </remarks>
            [JsiiProperty(name: "forwardTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ForwardTableId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: internalIp: Destination IP, must belong to VPC private IP
            /// </remarks>
            [JsiiProperty(name: "internalIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InternalIp
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: internalPort: Destination port, now support [1-65535]|Any|x\/y
            /// </remarks>
            [JsiiProperty(name: "internalPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InternalPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: ipProtocol: Supported protocol, Now support 'TCP|UDP|Any'
            /// </remarks>
            [JsiiProperty(name: "ipProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object IpProtocol
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: forwardEntryName: the name of the DNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:\/\/ or https:\/\/.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "forwardEntryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ForwardEntryName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: portBreak: Specifies whether to remove limits on the port range.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "portBreak", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PortBreak
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
