using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kms
{
    /// <summary>Properties for defining a `Secret`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-secret
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISecretProps), fullyQualifiedName: "@alicloud/ros-cdk-kms.SecretProps")]
    public interface ISecretProps
    {
        /// <summary>Property secretData: The value of the secret that you want to create.</summary>
        /// <remarks>
        /// Secrets Manager encrypts the secret
        /// value and stores it in the initial version.
        /// </remarks>
        [JsiiProperty(name: "secretData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SecretData
        {
            get;
        }

        /// <summary>Property secretName: The name of the secret.</summary>
        [JsiiProperty(name: "secretName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SecretName
        {
            get;
        }

        /// <summary>Property versionId: The version number of the initial version.</summary>
        /// <remarks>
        /// Version numbers are unique in each secret
        /// object.
        /// </remarks>
        [JsiiProperty(name: "versionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object VersionId
        {
            get;
        }

        /// <summary>Property description: The description of the secret.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dkmsInstanceId: The ID of the dedicated KMS instance.</summary>
        [JsiiProperty(name: "dkmsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DkmsInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableAutomaticRotation: Specifies whether to enable automatic rotation.</summary>
        /// <remarks>
        /// Valid values:
        /// true: specifies to enable automatic rotation.
        /// false: specifies to disable automatic rotation. This is the default value.
        /// </remarks>
        [JsiiProperty(name: "enableAutomaticRotation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableAutomaticRotation
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
        [JsiiProperty(name: "encryptionKeyId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EncryptionKeyId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property extendedConfig: The extended configuration of the secret.</summary>
        /// <remarks>
        /// This parameter specifies the properties of the secret of the specific type.
        /// </remarks>
        [JsiiProperty(name: "extendedConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ExtendedConfig
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
        [JsiiProperty(name: "recoveryWindowInDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RecoveryWindowInDays
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property rotationInterval: The interval for automatic rotation.</summary>
        /// <remarks>
        /// Valid values: 6 hours to 8,760 hours (365 days).
        /// The value is in the integer[unit] format.
        /// The unit can be d (day), h (hour), m (minute), or s (second). For example, both 7d and 604800s indicate a seven-day interval.
        /// </remarks>
        [JsiiProperty(name: "rotationInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RotationInterval
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
        [JsiiProperty(name: "secretDataType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecretDataType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property secretType: The type of the secret.</summary>
        /// <remarks>
        /// Valid values:
        /// Generic: specifies a generic secret.
        /// Rds: specifies a managed ApsaraDB RDS secret.
        /// RAMCredentials: specifies a managed RAM secret.
        /// ECS: specifies a managed ECS secret.
        /// </remarks>
        [JsiiProperty(name: "secretType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SecretType
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
        [JsiiProperty(name: "versionStages", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? VersionStages
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Secret`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-secret
        /// </remarks>
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
            [JsiiProperty(name: "secretData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecretData
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property secretName: The name of the secret.</summary>
            [JsiiProperty(name: "secretName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SecretName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property versionId: The version number of the initial version.</summary>
            /// <remarks>
            /// Version numbers are unique in each secret
            /// object.
            /// </remarks>
            [JsiiProperty(name: "versionId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object VersionId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the secret.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dkmsInstanceId: The ID of the dedicated KMS instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dkmsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DkmsInstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableAutomaticRotation: Specifies whether to enable automatic rotation.</summary>
            /// <remarks>
            /// Valid values:
            /// true: specifies to enable automatic rotation.
            /// false: specifies to disable automatic rotation. This is the default value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableAutomaticRotation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableAutomaticRotation
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property encryptionKeyId: The ID of the KMS CMK that is used to encrypt the secret value.</summary>
            /// <remarks>
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

            /// <summary>Property extendedConfig: The extended configuration of the secret.</summary>
            /// <remarks>
            /// This parameter specifies the properties of the secret of the specific type.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "extendedConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? ExtendedConfig
            {
                get => GetInstanceProperty<object?>();
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
            [JsiiProperty(name: "recoveryWindowInDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RecoveryWindowInDays
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property rotationInterval: The interval for automatic rotation.</summary>
            /// <remarks>
            /// Valid values: 6 hours to 8,760 hours (365 days).
            /// The value is in the integer[unit] format.
            /// The unit can be d (day), h (hour), m (minute), or s (second). For example, both 7d and 604800s indicate a seven-day interval.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rotationInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RotationInterval
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property secretDataType: The type of the secret value.</summary>
            /// <remarks>
            /// Valid values:
            /// text (default value)
            /// binary
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "secretDataType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecretDataType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property secretType: The type of the secret.</summary>
            /// <remarks>
            /// Valid values:
            /// Generic: specifies a generic secret.
            /// Rds: specifies a managed ApsaraDB RDS secret.
            /// RAMCredentials: specifies a managed RAM secret.
            /// ECS: specifies a managed ECS secret.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "secretType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SecretType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property versionStages: The stage labels that mark the secret version.</summary>
            /// <remarks>
            /// ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
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
