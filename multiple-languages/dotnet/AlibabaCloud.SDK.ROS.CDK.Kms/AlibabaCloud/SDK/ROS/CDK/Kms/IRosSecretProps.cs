using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kms
{
    /// <summary>Properties for defining a `ALIYUN::KMS::Secret`.</summary>
    [JsiiInterface(nativeType: typeof(IRosSecretProps), fullyQualifiedName: "@alicloud/ros-cdk-kms.RosSecretProps")]
    public interface IRosSecretProps
    {
        /// <remarks>
        /// <strong>Property</strong>: secretData: The value of the secret that you want to create. Secrets Manager encrypts the secret
        /// value and stores it in the initial version.
        /// </remarks>
        [JsiiProperty(name: "secretData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SecretData
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: secretName: The name of the secret.
        /// </remarks>
        [JsiiProperty(name: "secretName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SecretName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: versionId: The version number of the initial version. Version numbers are unique in each secret
        /// object.
        /// </remarks>
        [JsiiProperty(name: "versionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VersionId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the secret.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: encryptionKeyId: The ID of the KMS CMK that is used to encrypt the secret value.
        /// If you do not specify this parameter, Secrets Manager automatically creates an encryption
        /// key to encrypt the secret.
        /// Note The KMS CMK must be a symmetric key.
        /// </remarks>
        [JsiiProperty(name: "encryptionKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EncryptionKeyId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: forceDeleteWithoutRecovery: Specifies whether to forcibly delete the secret. If this parameter is set to true, the secret cannot be recovered. Valid values:
        /// true
        /// false (default value)
        /// </remarks>
        [JsiiProperty(name: "forceDeleteWithoutRecovery", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ForceDeleteWithoutRecovery
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it. Default value: 30
        /// </remarks>
        [JsiiProperty(name: "recoveryWindowInDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RecoveryWindowInDays
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: secretDataType: The type of the secret value. Valid values:
        /// text (default value)
        /// binary
        /// </remarks>
        [JsiiProperty(name: "secretDataType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecretDataType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: versionStages: The stage labels that mark the secret version. ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
        /// </remarks>
        [JsiiProperty(name: "versionStages", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VersionStages
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::KMS::Secret`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosSecretProps), fullyQualifiedName: "@alicloud/ros-cdk-kms.RosSecretProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Kms.IRosSecretProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: secretData: The value of the secret that you want to create. Secrets Manager encrypts the secret
            /// value and stores it in the initial version.
            /// </remarks>
            [JsiiProperty(name: "secretData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecretData
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: secretName: The name of the secret.
            /// </remarks>
            [JsiiProperty(name: "secretName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecretName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: versionId: The version number of the initial version. Version numbers are unique in each secret
            /// object.
            /// </remarks>
            [JsiiProperty(name: "versionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VersionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the secret.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: encryptionKeyId: The ID of the KMS CMK that is used to encrypt the secret value.
            /// If you do not specify this parameter, Secrets Manager automatically creates an encryption
            /// key to encrypt the secret.
            /// Note The KMS CMK must be a symmetric key.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "encryptionKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EncryptionKeyId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: forceDeleteWithoutRecovery: Specifies whether to forcibly delete the secret. If this parameter is set to true, the secret cannot be recovered. Valid values:
            /// true
            /// false (default value)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "forceDeleteWithoutRecovery", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ForceDeleteWithoutRecovery
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it. Default value: 30
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "recoveryWindowInDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RecoveryWindowInDays
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: secretDataType: The type of the secret value. Valid values:
            /// text (default value)
            /// binary
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "secretDataType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecretDataType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: versionStages: The stage labels that mark the secret version. ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "versionStages", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? VersionStages
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
