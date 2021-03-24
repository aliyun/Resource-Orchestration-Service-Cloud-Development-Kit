using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::NetworkInterfaceAttachment`.</summary>
    [JsiiInterface(nativeType: typeof(INetworkInterfaceAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.NetworkInterfaceAttachmentProps")]
    public interface INetworkInterfaceAttachmentProps
    {
        /// <summary>Property instanceId: ECS instance id.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
        string InstanceId
        {
            get;
        }

        /// <summary>Property networkInterfaceId: Network interface id.</summary>
        [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"primitive\":\"string\"}")]
        string NetworkInterfaceId
        {
            get;
        }

        /// <summary>Property trunkNetworkInstanceId: undefined.</summary>
        [JsiiProperty(name: "trunkNetworkInstanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? TrunkNetworkInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ECS::NetworkInterfaceAttachment`.</summary>
        [JsiiTypeProxy(nativeType: typeof(INetworkInterfaceAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.NetworkInterfaceAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.INetworkInterfaceAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceId: ECS instance id.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string InstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property networkInterfaceId: Network interface id.</summary>
            [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"primitive\":\"string\"}")]
            public string NetworkInterfaceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property trunkNetworkInstanceId: undefined.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "trunkNetworkInstanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? TrunkNetworkInstanceId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
