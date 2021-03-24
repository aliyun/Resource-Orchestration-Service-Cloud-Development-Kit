using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ecs
{
    /// <summary>Properties for defining a `ALIYUN::ECS::SSHKeyPair`.</summary>
    [JsiiInterface(nativeType: typeof(ISSHKeyPairProps), fullyQualifiedName: "@alicloud/ros-cdk-ecs.SSHKeyPairProps")]
    public interface ISSHKeyPairProps
    {
        /// <summary>Property keyPairName: SSH key pair name.</summary>
        /// <remarks>
        /// It must be unique. [2, 128] characters. All character sets are supported. Do not start with a special character, digit, http://, or https://. It can contain digits, ".", "_", or "-".
        /// </remarks>
        [JsiiProperty(name: "keyPairName", typeJson: "{\"primitive\":\"string\"}")]
        string KeyPairName
        {
            get;
        }

        /// <summary>Property publicKeyBody: SSH Public key.</summary>
        /// <remarks>
        /// If PublicKeyBody is specified, existed public key body will be imported instead of creating new SSH key pair.
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

        /// <summary>Property resourceGroupId: Resource group id.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ResourceGroupId
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
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ECS::SSHKeyPair`.</summary>
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
            [JsiiProperty(name: "keyPairName", typeJson: "{\"primitive\":\"string\"}")]
            public string KeyPairName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property publicKeyBody: SSH Public key.</summary>
            /// <remarks>
            /// If PublicKeyBody is specified, existed public key body will be imported instead of creating new SSH key pair.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "publicKeyBody", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? PublicKeyBody
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property resourceGroupId: Resource group id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ResourceGroupId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property tags: Tags to attach to instance.</summary>
            /// <remarks>
            /// Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, object>[]? Tags
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>[]?>();
            }
        }
    }
}
