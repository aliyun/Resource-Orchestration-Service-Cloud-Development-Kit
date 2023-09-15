using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::SSHKeyPairAttachment`.</summary>
    [JsiiInterface(nativeType: typeof(ISSHKeyPairAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.SSHKeyPairAttachmentProps")]
    public interface ISSHKeyPairAttachmentProps
    {
        /// <summary>Property instanceIds: The comma delimited ECS instance id list.</summary>
        /// <remarks>
        /// Only support Linux.
        /// </remarks>
        [JsiiProperty(name: "instanceIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceIds
        {
            get;
        }

        /// <summary>Property keyPairName: SSH key pair name.</summary>
        [JsiiProperty(name: "keyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object KeyPairName
        {
            get;
        }

        /// <summary>Property autoReboot: If the instance is running, whether to reboot the instance for the ssh key to take effect.</summary>
        /// <remarks>
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

        /// <summary>Properties for defining a `ALIYUN::ECS::SSHKeyPairAttachment`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISSHKeyPairAttachmentProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.SSHKeyPairAttachmentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.ISSHKeyPairAttachmentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceIds: The comma delimited ECS instance id list.</summary>
            /// <remarks>
            /// Only support Linux.
            /// </remarks>
            [JsiiProperty(name: "instanceIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property keyPairName: SSH key pair name.</summary>
            [JsiiProperty(name: "keyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object KeyPairName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property autoReboot: If the instance is running, whether to reboot the instance for the ssh key to take effect.</summary>
            /// <remarks>
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
