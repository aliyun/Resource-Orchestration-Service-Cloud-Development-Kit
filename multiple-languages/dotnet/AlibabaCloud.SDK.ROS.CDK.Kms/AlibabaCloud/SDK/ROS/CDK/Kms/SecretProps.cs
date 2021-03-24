using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kms
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::KMS::Secret`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-kms.SecretProps")]
    public class SecretProps : AlibabaCloud.SDK.ROS.CDK.Kms.ISecretProps
    {
        /// <summary>Property secretData: The value of the secret that you want to create.</summary>
        /// <remarks>
        /// Secrets Manager encrypts the secret
        /// value and stores it in the initial version.
        /// </remarks>
        [JsiiProperty(name: "secretData", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SecretData
        {
            get;
            set;
        }

        /// <summary>Property secretName: The name of the secret.</summary>
        [JsiiProperty(name: "secretName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SecretName
        {
            get;
            set;
        }

        /// <summary>Property versionId: The version number of the initial version.</summary>
        /// <remarks>
        /// Version numbers are unique in each secret
        /// object.
        /// </remarks>
        [JsiiProperty(name: "versionId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string VersionId
        {
            get;
            set;
        }

        /// <summary>Property description: The description of the secret.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <summary>Property encryptionKeyId: The ID of the KMS CMK that is used to encrypt the secret value.</summary>
        /// <remarks>
        /// If you do not specify this parameter, Secrets Manager automatically creates an encryption
        /// key to encrypt the secret.
        /// Note The KMS CMK must be a symmetric key.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "encryptionKeyId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? EncryptionKeyId
        {
            get;
            set;
        }

        /// <summary>Property forceDeleteWithoutRecovery: Specifies whether to forcibly delete the secret.</summary>
        /// <remarks>
        /// If this parameter is set to true, the secret cannot be recovered. Valid values:
        /// true
        /// false (default value)
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "forceDeleteWithoutRecovery", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ForceDeleteWithoutRecovery
        {
            get;
            set;
        }

        /// <summary>Property recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it.</summary>
        /// <remarks>
        /// Default value: 30
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "recoveryWindowInDays", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? RecoveryWindowInDays
        {
            get;
            set;
        }

        /// <summary>Property secretDataType: The type of the secret value.</summary>
        /// <remarks>
        /// Valid values:
        /// text (default value)
        /// binary
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "secretDataType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? SecretDataType
        {
            get;
            set;
        }

        /// <summary>Property versionStages: The stage labels that mark the secret version.</summary>
        /// <remarks>
        /// ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "versionStages", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public string[]? VersionStages
        {
            get;
            set;
        }
    }
}
