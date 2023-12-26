using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `NetworkInterfaceAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-networkinterfaceattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(INetworkInterfaceAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.NetworkInterfaceAttachmentProps")]
    public interface INetworkInterfaceAttachmentProps
    {
        /// <summary>Property instanceId: ECS instance id.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property networkInterfaceId: Network interface id.</summary>
        [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NetworkInterfaceId
        {
            get;
        }

        /// <summary>Property ecsRestartOption: Control whether to restart the ECS instance when binding an elastic network card.Only effective for ENI that does not support hot swapping.</summary>
        [JsiiProperty(name: "ecsRestartOption", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EcsRestartOption
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property trunkNetworkInstanceId: undefined.</summary>
        [JsiiProperty(name: "trunkNetworkInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TrunkNetworkInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `NetworkInterfaceAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-networkinterfaceattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(INetworkInterfaceAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.NetworkInterfaceAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.INetworkInterfaceAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceId: ECS instance id.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property networkInterfaceId: Network interface id.</summary>
            [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NetworkInterfaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property ecsRestartOption: Control whether to restart the ECS instance when binding an elastic network card.Only effective for ENI that does not support hot swapping.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ecsRestartOption", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EcsRestartOption
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property trunkNetworkInstanceId: undefined.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "trunkNetworkInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TrunkNetworkInstanceId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
