using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ens
{
    /// <summary>Represents a `KeyPair`.</summary>
    [JsiiInterface(nativeType: typeof(IKeyPair), fullyQualifiedName: "@alicloud/ros-cdk-ens.IKeyPair")]
    public interface IKeyPair : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute KeyPairFingerPrint: The fingerprint of the key pair.</summary>
        /// <remarks>
        /// The message-digest algorithm 5 (MD5) is used based on the public key fingerprint format defined in RFC 4716. For more information, see RFC 4716.
        /// </remarks>
        [JsiiProperty(name: "attrKeyPairFingerPrint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrKeyPairFingerPrint
        {
            get;
        }

        /// <summary>Attribute KeyPairName: SSH Key pair name.</summary>
        [JsiiProperty(name: "attrKeyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrKeyPairName
        {
            get;
        }

        /// <summary>Attribute PrivateKeyBody: The private key of the key pair.</summary>
        /// <remarks>
        /// The private key is encoded with PEM in the PKCS#8 format.
        /// </remarks>
        [JsiiProperty(name: "attrPrivateKeyBody", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPrivateKeyBody
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ens.KeyPairProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ens.IKeyPairProps Props
        {
            get;
        }

        /// <summary>Represents a `KeyPair`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IKeyPair), fullyQualifiedName: "@alicloud/ros-cdk-ens.IKeyPair")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ens.IKeyPair
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute KeyPairFingerPrint: The fingerprint of the key pair.</summary>
            /// <remarks>
            /// The message-digest algorithm 5 (MD5) is used based on the public key fingerprint format defined in RFC 4716. For more information, see RFC 4716.
            /// </remarks>
            [JsiiProperty(name: "attrKeyPairFingerPrint", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrKeyPairFingerPrint
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute KeyPairName: SSH Key pair name.</summary>
            [JsiiProperty(name: "attrKeyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrKeyPairName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PrivateKeyBody: The private key of the key pair.</summary>
            /// <remarks>
            /// The private key is encoded with PEM in the PKCS#8 format.
            /// </remarks>
            [JsiiProperty(name: "attrPrivateKeyBody", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPrivateKeyBody
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ens.KeyPairProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ens.IKeyPairProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ens.IKeyPairProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
