using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `SSHKeyPair`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-sshkeypair
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISSHKeyPairProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.SSHKeyPairProps")]
    public interface ISSHKeyPairProps
    {
        /// <summary>Property keyPairName: SSH key pair name.</summary>
        /// <remarks>
        /// It must be unique. [2, 128] characters. All character sets are supported. Do not start with a special character, digit, http://, or https://. It can contain digits, ".", "_", or "-".
        /// </remarks>
        [JsiiProperty(name: "keyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object KeyPairName
        {
            get;
        }

        /// <summary>Property publicKeyBody: SSH Public key.</summary>
        /// <remarks>
        /// If PublicKeyBody is specified, existed public key body will be imported instead of creating new SSH key pair.
        /// </remarks>
        [JsiiProperty(name: "publicKeyBody", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PublicKeyBody
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: Resource group id.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property tags: Tags to attach to instance.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosSSHKeyPair.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Ecs.RosSSHKeyPair.ITagsProperty[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `SSHKeyPair`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ecs-sshkeypair
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISSHKeyPairProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.SSHKeyPairProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.ISSHKeyPairProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property keyPairName: SSH key pair name.</summary>
            /// <remarks>
            /// It must be unique. [2, 128] characters. All character sets are supported. Do not start with a special character, digit, http://, or https://. It can contain digits, ".", "_", or "-".
            /// </remarks>
            [JsiiProperty(name: "keyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object KeyPairName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property publicKeyBody: SSH Public key.</summary>
            /// <remarks>
            /// If PublicKeyBody is specified, existed public key body will be imported instead of creating new SSH key pair.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "publicKeyBody", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PublicKeyBody
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: Resource group id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-ecs.RosSSHKeyPair.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Ecs.RosSSHKeyPair.ITagsProperty[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ecs.RosSSHKeyPair.ITagsProperty[]?>();
            }
        }
    }
}
