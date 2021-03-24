using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::ForwardEntry`.</summary>
    [JsiiInterface(nativeType: typeof(IForwardEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.ForwardEntryProps")]
    public interface IForwardEntryProps
    {
        /// <summary>Property externalIp: Source IP, must belongs to bandwidth package internet IP.</summary>
        [JsiiProperty(name: "externalIp", typeJson: "{\"primitive\":\"string\"}")]
        string ExternalIp
        {
            get;
        }

        /// <summary>Property externalPort: Source port, now support [1-65535]|Any.</summary>
        [JsiiProperty(name: "externalPort", typeJson: "{\"primitive\":\"string\"}")]
        string ExternalPort
        {
            get;
        }

        /// <summary>Property forwardTableId: Create forward entry in specified forward table.</summary>
        [JsiiProperty(name: "forwardTableId", typeJson: "{\"primitive\":\"string\"}")]
        string ForwardTableId
        {
            get;
        }

        /// <summary>Property internalIp: Destination IP, must belong to VPC private IP.</summary>
        [JsiiProperty(name: "internalIp", typeJson: "{\"primitive\":\"string\"}")]
        string InternalIp
        {
            get;
        }

        /// <summary>Property internalPort: Destination port, now support [1-65535]|Any.</summary>
        [JsiiProperty(name: "internalPort", typeJson: "{\"primitive\":\"string\"}")]
        string InternalPort
        {
            get;
        }

        /// <summary>Property ipProtocol: Supported protocol, Now support 'TCP|UDP|Any'.</summary>
        [JsiiProperty(name: "ipProtocol", typeJson: "{\"primitive\":\"string\"}")]
        string IpProtocol
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::ECS::ForwardEntry`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IForwardEntryProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.ForwardEntryProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IForwardEntryProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property externalIp: Source IP, must belongs to bandwidth package internet IP.</summary>
            [JsiiProperty(name: "externalIp", typeJson: "{\"primitive\":\"string\"}")]
            public string ExternalIp
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property externalPort: Source port, now support [1-65535]|Any.</summary>
            [JsiiProperty(name: "externalPort", typeJson: "{\"primitive\":\"string\"}")]
            public string ExternalPort
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property forwardTableId: Create forward entry in specified forward table.</summary>
            [JsiiProperty(name: "forwardTableId", typeJson: "{\"primitive\":\"string\"}")]
            public string ForwardTableId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property internalIp: Destination IP, must belong to VPC private IP.</summary>
            [JsiiProperty(name: "internalIp", typeJson: "{\"primitive\":\"string\"}")]
            public string InternalIp
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property internalPort: Destination port, now support [1-65535]|Any.</summary>
            [JsiiProperty(name: "internalPort", typeJson: "{\"primitive\":\"string\"}")]
            public string InternalPort
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property ipProtocol: Supported protocol, Now support 'TCP|UDP|Any'.</summary>
            [JsiiProperty(name: "ipProtocol", typeJson: "{\"primitive\":\"string\"}")]
            public string IpProtocol
            {
                get => GetInstanceProperty<string>()!;
            }
        }
    }
}
