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
        [JsiiProperty(name: "externalIp", typeJson: "{\"primitive\":\"string\"}")]
        string ExternalIp
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: externalPort: Source port, now support [1-65535]|Any
        /// </remarks>
        [JsiiProperty(name: "externalPort", typeJson: "{\"primitive\":\"string\"}")]
        string ExternalPort
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: forwardTableId: Create forward entry in specified forward table.
        /// </remarks>
        [JsiiProperty(name: "forwardTableId", typeJson: "{\"primitive\":\"string\"}")]
        string ForwardTableId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: internalIp: Destination IP, must belong to VPC private IP
        /// </remarks>
        [JsiiProperty(name: "internalIp", typeJson: "{\"primitive\":\"string\"}")]
        string InternalIp
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: internalPort: Destination port, now support [1-65535]|Any
        /// </remarks>
        [JsiiProperty(name: "internalPort", typeJson: "{\"primitive\":\"string\"}")]
        string InternalPort
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: ipProtocol: Supported protocol, Now support 'TCP|UDP|Any'
        /// </remarks>
        [JsiiProperty(name: "ipProtocol", typeJson: "{\"primitive\":\"string\"}")]
        string IpProtocol
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
            [JsiiProperty(name: "externalIp", typeJson: "{\"primitive\":\"string\"}")]
            public string ExternalIp
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: externalPort: Source port, now support [1-65535]|Any
            /// </remarks>
            [JsiiProperty(name: "externalPort", typeJson: "{\"primitive\":\"string\"}")]
            public string ExternalPort
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: forwardTableId: Create forward entry in specified forward table.
            /// </remarks>
            [JsiiProperty(name: "forwardTableId", typeJson: "{\"primitive\":\"string\"}")]
            public string ForwardTableId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: internalIp: Destination IP, must belong to VPC private IP
            /// </remarks>
            [JsiiProperty(name: "internalIp", typeJson: "{\"primitive\":\"string\"}")]
            public string InternalIp
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: internalPort: Destination port, now support [1-65535]|Any
            /// </remarks>
            [JsiiProperty(name: "internalPort", typeJson: "{\"primitive\":\"string\"}")]
            public string InternalPort
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: ipProtocol: Supported protocol, Now support 'TCP|UDP|Any'
            /// </remarks>
            [JsiiProperty(name: "ipProtocol", typeJson: "{\"primitive\":\"string\"}")]
            public string IpProtocol
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
