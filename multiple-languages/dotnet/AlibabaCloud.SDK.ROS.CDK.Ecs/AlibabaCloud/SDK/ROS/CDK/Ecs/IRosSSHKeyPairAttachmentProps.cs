using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `RosSSHKeyPairAttachment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-sshkeypairattachment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosSSHKeyPairAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosSSHKeyPairAttachmentProps")]
    public interface IRosSSHKeyPairAttachmentProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceIds: The comma delimited ECS instance id list. Only support Linux.
        /// </remarks>
        [JsiiProperty(name: "instanceIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceIds
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: keyPairName: SSH key pair name.
        /// </remarks>
        [JsiiProperty(name: "keyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object KeyPairName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoReboot: If the instance is running, whether to reboot the instance for the ssh key to take effect.
        /// Default: false
        /// </remarks>
        [JsiiProperty(name: "autoReboot", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoReboot
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosSSHKeyPairAttachment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-sshkeypairattachment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosSSHKeyPairAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosSSHKeyPairAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IRosSSHKeyPairAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceIds: The comma delimited ECS instance id list. Only support Linux.
            /// </remarks>
            [JsiiProperty(name: "instanceIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: keyPairName: SSH key pair name.
            /// </remarks>
            [JsiiProperty(name: "keyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object KeyPairName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: autoReboot: If the instance is running, whether to reboot the instance for the ssh key to take effect.
            /// Default: false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoReboot", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoReboot
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
