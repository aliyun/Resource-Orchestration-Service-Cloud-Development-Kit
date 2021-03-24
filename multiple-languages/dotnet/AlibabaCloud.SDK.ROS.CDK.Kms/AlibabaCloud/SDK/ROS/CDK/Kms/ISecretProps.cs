using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kms
{
    /// <summary>Properties for defining a `ALIYUN::KMS::Secret`.</summary>
    [JsiiInterface(nativeType: typeof(ISecretProps), fullyQualifiedName: "@alicloud/ros-cdk-kms.SecretProps")]
    public interface ISecretProps
    {
        /// <summary>Property secretData: The value of the secret that you want to create.</summary>
        /// <remarks>
        /// Secrets Manager encrypts the secret
        /// value and stores it in the initial version.
        /// </remarks>
        [JsiiProperty(name: "secretData", typeJson: "{\"primitive\":\"string\"}")]
        string SecretData
        {
            get;
        }

        /// <summary>Property secretName: The name of the secret.</summary>
        [JsiiProperty(name: "secretName", typeJson: "{\"primitive\":\"string\"}")]
        string SecretName
        {
            get;
        }

        /// <summary>Property versionId: The version number of the initial version.</summary>
        /// <remarks>
        /// Version numbers are unique in each secret
        /// object.
        /// </remarks>
        [JsiiProperty(name: "versionId", typeJson: "{\"primitive\":\"string\"}")]
        string VersionId
        {
            get;
        }

        /// <summary>Property description: The description of the secret.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property encryptionKeyId: The ID of the KMS CMK that is used to encrypt the secret value.</summary>
        /// <remarks>
        /// If you do not specify this parameter, Secrets Manager automatically creates an encryption
        /// key to encrypt the secret.
        /// Note The KMS CMK must be a symmetric key.
        /// </remarks>
        [JsiiProperty(name: "encryptionKeyId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? EncryptionKeyId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property forceDeleteWithoutRecovery: Specifies whether to forcibly delete the secret.</summary>
        /// <remarks>
        /// If this parameter is set to true, the secret cannot be recovered. Valid values:
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

        /// <summary>Property recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it.</summary>
        /// <remarks>
        /// Default value: 30
        /// </remarks>
        [JsiiProperty(name: "recoveryWindowInDays", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        double? RecoveryWindowInDays
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property secretDataType: The type of the secret value.</summary>
        /// <remarks>
        /// Valid values:
        /// text (default value)
        /// binary
        /// </remarks>
        [JsiiProperty(name: "secretDataType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? SecretDataType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property versionStages: The stage labels that mark the secret version.</summary>
        /// <remarks>
        /// ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
        /// </remarks>
        [JsiiProperty(name: "versionStages", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string[]? VersionStages
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::KMS::Secret`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISecretProps), fullyQualifiedName: "@alicloud/ros-cdk-kms.SecretProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Kms.ISecretProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property secretData: The value of the secret that you want to create.</summary>
            /// <remarks>
            /// Secrets Manager encrypts the secret
            /// value and stores it in the initial version.
            /// </remarks>
            [JsiiProperty(name: "secretData", typeJson: "{\"primitive\":\"string\"}")]
            public string SecretData
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property secretName: The name of the secret.</summary>
            [JsiiProperty(name: "secretName", typeJson: "{\"primitive\":\"string\"}")]
            public string SecretName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property versionId: The version number of the initial version.</summary>
            /// <remarks>
            /// Version numbers are unique in each secret
            /// object.
            /// </remarks>
            [JsiiProperty(name: "versionId", typeJson: "{\"primitive\":\"string\"}")]
            public string VersionId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property description: The description of the secret.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property encryptionKeyId: The ID of the KMS CMK that is used to encrypt the secret value.</summary>
            /// <remarks>
            /// If you do not specify this parameter, Secrets Manager automatically creates an encryption
            /// key to encrypt the secret.
            /// Note The KMS CMK must be a symmetric key.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "encryptionKeyId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? EncryptionKeyId
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property forceDeleteWithoutRecovery: Specifies whether to forcibly delete the secret.</summary>
            /// <remarks>
            /// If this parameter is set to true, the secret cannot be recovered. Valid values:
            /// true
            /// false (default value)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "forceDeleteWithoutRecovery", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ForceDeleteWithoutRecovery
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it.</summary>
            /// <remarks>
            /// Default value: 30
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "recoveryWindowInDays", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
            public double? RecoveryWindowInDays
            {
                get => GetInstanceProperty<double?>();
            }

            /// <summary>Property secretDataType: The type of the secret value.</summary>
            /// <remarks>
            /// Valid values:
            /// text (default value)
            /// binary
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "secretDataType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? SecretDataType
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property versionStages: The stage labels that mark the secret version.</summary>
            /// <remarks>
            /// ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "versionStages", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
            public string[]? VersionStages
            {
                get => GetInstanceProperty<string[]?>();
            }
        }
    }
}
