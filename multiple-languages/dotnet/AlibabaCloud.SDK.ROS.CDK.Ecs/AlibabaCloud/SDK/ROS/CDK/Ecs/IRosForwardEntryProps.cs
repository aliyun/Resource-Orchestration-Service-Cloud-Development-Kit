using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::ForwardEntry`.</summary>
    [JsiiInterface(nativeType: typeof(IRosForwardEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosForwardEntryProps")]
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
        /// <strong>Property</strong>: externalPort: Source port, now support [1-65535]|Any
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
        /// <strong>Property</strong>: internalPort: Destination port, now support [1-65535]|Any
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

        /// <summary>Properties for defining a `ALIYUN::ECS::ForwardEntry`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosForwardEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosForwardEntryProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IRosForwardEntryProps
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
            /// <strong>Property</strong>: externalPort: Source port, now support [1-65535]|Any
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
            /// <strong>Property</strong>: internalPort: Destination port, now support [1-65535]|Any
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
        }
    }
}
