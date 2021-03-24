using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::SSHKeyPair`.</summary>
    [JsiiInterface(nativeType: typeof(IRosSSHKeyPairProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosSSHKeyPairProps")]
    public interface IRosSSHKeyPairProps
    {
        /// <remarks>
        /// <strong>Property</strong>: keyPairName: SSH key pair name. It must be unique. [2, 128] characters. All character sets are supported. Do not start with a special character, digit, http://, or https://. It can contain digits, ".", "_", or "-".
        /// </remarks>
        [JsiiProperty(name: "keyPairName", typeJson: "{\"primitive\":\"string\"}")]
        string KeyPairName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: publicKeyBody: SSH Public key. If PublicKeyBody is specified, existed public key body will be imported instead of creating new SSH key pair.
        /// </remarks>
        [JsiiProperty(name: "publicKeyBody", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? PublicKeyBody
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: resourceGroupId: Resource group id.
        /// </remarks>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Core.IRosTag[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ECS::SSHKeyPair`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosSSHKeyPairProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.RosSSHKeyPairProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ecs.IRosSSHKeyPairProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: keyPairName: SSH key pair name. It must be unique. [2, 128] characters. All character sets are supported. Do not start with a special character, digit, http://, or https://. It can contain digits, ".", "_", or "-".
            /// </remarks>
            [JsiiProperty(name: "keyPairName", typeJson: "{\"primitive\":\"string\"}")]
            public string KeyPairName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: publicKeyBody: SSH Public key. If PublicKeyBody is specified, existed public key body will be imported instead of creating new SSH key pair.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "publicKeyBody", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PublicKeyBody
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: resourceGroupId: Resource group id.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ResourceGroupId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: tags: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Core.IRosTag[]? Tags
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IRosTag[]?>();
            }
        }
    }
}
