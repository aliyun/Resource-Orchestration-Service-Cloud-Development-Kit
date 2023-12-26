using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ForwardEntry`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-forwardentry
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IForwardEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.ForwardEntryProps")]
    public interface IForwardEntryProps
    {
        /// <summary>Property externalIp: Source IP, must belongs to bandwidth package internet IP.</summary>
        [JsiiProperty(name: "externalIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ExternalIp
        {
            get;
        }

        /// <summary>Property externalPort: Source port, now support [1-65535]|Any|x\/y.</summary>
        [JsiiProperty(name: "externalPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ExternalPort
        {
            get;
        }

        /// <summary>Property forwardTableId: Create forward entry in specified forward table.</summary>
        [JsiiProperty(name: "forwardTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ForwardTableId
        {
            get;
        }

        /// <summary>Property internalIp: Destination IP, must belong to VPC private IP.</summary>
        [JsiiProperty(name: "internalIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InternalIp
        {
            get;
        }

        /// <summary>Property internalPort: Destination port, now support [1-65535]|Any|x\/y.</summary>
        [JsiiProperty(name: "internalPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InternalPort
        {
            get;
        }

        /// <summary>Property ipProtocol: Supported protocol, Now support 'TCP|UDP|Any'.</summary>
        [JsiiProperty(name: "ipProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object IpProtocol
        {
            get;
        }

        /// <summary>Property forwardEntryName: the name of the DNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:\/\/ or https:\/\/.</summary>
        [JsiiProperty(name: "forwardEntryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ForwardEntryName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property portBreak: Specifies whether to remove limits on the port range.</summary>
        [JsiiProperty(name: "portBreak", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PortBreak
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ForwardEntry`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-forwardentry
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IForwardEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.ForwardEntryProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IForwardEntryProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property externalIp: Source IP, must belongs to bandwidth package internet IP.</summary>
            [JsiiProperty(name: "externalIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ExternalIp
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property externalPort: Source port, now support [1-65535]|Any|x\/y.</summary>
            [JsiiProperty(name: "externalPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ExternalPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property forwardTableId: Create forward entry in specified forward table.</summary>
            [JsiiProperty(name: "forwardTableId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ForwardTableId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property internalIp: Destination IP, must belong to VPC private IP.</summary>
            [JsiiProperty(name: "internalIp", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InternalIp
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property internalPort: Destination port, now support [1-65535]|Any|x\/y.</summary>
            [JsiiProperty(name: "internalPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InternalPort
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property ipProtocol: Supported protocol, Now support 'TCP|UDP|Any'.</summary>
            [JsiiProperty(name: "ipProtocol", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object IpProtocol
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property forwardEntryName: the name of the DNAT rule is 2-128 characters long and must start with a letter or Chinese, but cannot begin with HTTP:\/\/ or https:\/\/.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "forwardEntryName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ForwardEntryName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property portBreak: Specifies whether to remove limits on the port range.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "portBreak", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PortBreak
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
