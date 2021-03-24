using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::NetworkInterfaceAttachment`.</summary>
    [JsiiInterface(nativeType: typeof(IRosNetworkInterfaceAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosNetworkInterfaceAttachmentProps")]
    public interface IRosNetworkInterfaceAttachmentProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceId: ECS instance id
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
        string InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: networkInterfaceId: Network interface id
        /// </remarks>
        [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"primitive\":\"string\"}")]
        string NetworkInterfaceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: trunkNetworkInstanceId: undefined
        /// </remarks>
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
        [JsiiTypeProxy(nativeType: typeof(IRosNetworkInterfaceAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosNetworkInterfaceAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IRosNetworkInterfaceAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: ECS instance id
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"primitive\":\"string\"}")]
            public string InstanceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: networkInterfaceId: Network interface id
            /// </remarks>
            [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"primitive\":\"string\"}")]
            public string NetworkInterfaceId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: trunkNetworkInstanceId: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "trunkNetworkInstanceId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? TrunkNetworkInstanceId
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
