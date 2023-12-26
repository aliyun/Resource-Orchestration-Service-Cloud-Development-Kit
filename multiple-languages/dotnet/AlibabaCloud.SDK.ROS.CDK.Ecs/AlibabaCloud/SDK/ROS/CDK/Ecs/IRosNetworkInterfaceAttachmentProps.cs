using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `RosNetworkInterfaceAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-networkinterfaceattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosNetworkInterfaceAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosNetworkInterfaceAttachmentProps")]
    public interface IRosNetworkInterfaceAttachmentProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceId: ECS instance id
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: networkInterfaceId: Network interface id
        /// </remarks>
        [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object NetworkInterfaceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: ecsRestartOption: Control whether to restart the ECS instance when binding an elastic network card.Only effective for ENI that does not support hot swapping.
        /// </remarks>
        [JsiiProperty(name: "ecsRestartOption", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EcsRestartOption
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: trunkNetworkInstanceId: undefined
        /// </remarks>
        [JsiiProperty(name: "trunkNetworkInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TrunkNetworkInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosNetworkInterfaceAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-networkinterfaceattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosNetworkInterfaceAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosNetworkInterfaceAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IRosNetworkInterfaceAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: ECS instance id
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: networkInterfaceId: Network interface id
            /// </remarks>
            [JsiiProperty(name: "networkInterfaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object NetworkInterfaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: ecsRestartOption: Control whether to restart the ECS instance when binding an elastic network card.Only effective for ENI that does not support hot swapping.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "ecsRestartOption", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EcsRestartOption
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: trunkNetworkInstanceId: undefined
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "trunkNetworkInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? TrunkNetworkInstanceId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
