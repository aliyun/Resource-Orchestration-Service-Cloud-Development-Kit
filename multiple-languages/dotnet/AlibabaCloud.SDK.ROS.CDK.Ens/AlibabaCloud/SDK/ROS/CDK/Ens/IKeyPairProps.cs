using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ens
{
    /// <summary>Properties for defining a `KeyPair`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-keypair
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IKeyPairProps), fullyQualifiedName: "@alicloud/ros-cdk-ens.KeyPairProps")]
    public interface IKeyPairProps
    {
        /// <summary>Property keyPairName: The name of the key pair.</summary>
        /// <remarks>
        /// The name must conform to the following naming conventions:
        /// The name must be 2 to 128 characters in length, and can contain letters, digits, colons (:), underscores (_), and hyphens (-).
        /// It must start with a letter but cannot start with http:// or https://.
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

        /// <summary>Properties for defining a `KeyPair`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ens-keypair
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IKeyPairProps), fullyQualifiedName: "@alicloud/ros-cdk-ens.KeyPairProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ens.IKeyPairProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property keyPairName: The name of the key pair.</summary>
            /// <remarks>
            /// The name must conform to the following naming conventions:
            /// The name must be 2 to 128 characters in length, and can contain letters, digits, colons (:), underscores (_), and hyphens (-).
            /// It must start with a letter but cannot start with http:// or https://.
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
        }
    }
}
