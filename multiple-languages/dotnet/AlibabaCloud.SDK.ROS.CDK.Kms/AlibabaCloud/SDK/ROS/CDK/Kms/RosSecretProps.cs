using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kms
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::KMS::Secret`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-kms.RosSecretProps")]
    public class RosSecretProps : AlibabaCloud.SDK.ROS.CDK.Kms.IRosSecretProps
    {
        /// <remarks>
        /// <strong>Property</strong>: secretData: The value of the secret that you want to create. Secrets Manager encrypts the secret
        /// value and stores it in the initial version.
        /// </remarks>
        [JsiiProperty(name: "secretData", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SecretData
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: secretName: The name of the secret.
        /// </remarks>
        [JsiiProperty(name: "secretName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string SecretName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: versionId: The version number of the initial version. Version numbers are unique in each secret
        /// object.
        /// </remarks>
        [JsiiProperty(name: "versionId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string VersionId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the secret.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: encryptionKeyId: The ID of the KMS CMK that is used to encrypt the secret value.
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

        /// <remarks>
        /// <strong>Property</strong>: forceDeleteWithoutRecovery: Specifies whether to forcibly delete the secret. If this parameter is set to true, the secret cannot be recovered. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: recoveryWindowInDays: Specifies the recovery period of the secret if you do not forcibly delete it. Default value: 30
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "recoveryWindowInDays", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? RecoveryWindowInDays
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: secretDataType: The type of the secret value. Valid values:
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

        /// <remarks>
        /// <strong>Property</strong>: versionStages: The stage labels that mark the secret version. ACSCurrent will be marked as DefaultIf you do not specify it, Secrets Manager marks it with "ACSCurrent".
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
