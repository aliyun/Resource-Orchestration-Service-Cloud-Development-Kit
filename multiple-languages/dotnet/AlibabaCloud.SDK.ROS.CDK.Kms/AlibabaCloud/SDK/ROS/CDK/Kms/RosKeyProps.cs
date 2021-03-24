using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kms
{
    /// <summary>Properties for defining a `ALIYUN::KMS::Key`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-kms.RosKeyProps")]
    public class RosKeyProps : AlibabaCloud.SDK.ROS.CDK.Kms.IRosKeyProps
    {
        /// <remarks>
        /// <strong>Property</strong>: description: The description of the CMK. Length constraints: Minimum length of 0 characters. Maximum length of 8192 characters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: enable: Specifies whether the key is enabled. Defaults to true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Enable
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: enableAutomaticRotation: Whether to enable automatic key rotation. Valid value: true/false (default)
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "enableAutomaticRotation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? EnableAutomaticRotation
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: keySpec: Key type. Valid value: Aliyun_AES_256/Aliyun_SM4/RSA_2048/EC_P256/EC_P256K/EC_SM2
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "keySpec", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? KeySpec
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: keyUsage: The intended use of the CMK. Default value: ENCRYPT/DECRYPT.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "keyUsage", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? KeyUsage
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: pendingWindowInDays: The waiting period, specified in number of days. During this period, you can cancel the CMK in PendingDeletion status. After the waiting period expires, you cannot cancel the deletion. The value must be between 7 and 30. Default value is 30.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "pendingWindowInDays", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? PendingWindowInDays
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: protectionLevel: The protection level of the CMK to create. Valid value: SOFTWARE and HSM. When this parameter is set to HSM:
        /// If the Origin parameter is set to Aliyun_KMS, the CMK is created in Managed HSM.
        /// If the Origin parameter is set to EXTERNAL, you can import external keys to Managed HSM.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "protectionLevel", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ProtectionLevel
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: rotationInterval: The time period for automatic rotation. The format is integer[unit], where integer represents the length of time and unit represents the time unit. The legal unit units are: d (day), h (hour), m (minute), s (second). 7d or 604800s both represent a 7-day cycle. Value: 7~730 days.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "rotationInterval", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? RotationInterval
        {
            get;
            set;
        }
    }
}
