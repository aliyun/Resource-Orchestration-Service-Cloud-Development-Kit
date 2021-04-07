using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kms
{
    /// <summary>Properties for defining a `ALIYUN::KMS::Key`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-kms.KeyProps")]
    public class KeyProps : AlibabaCloud.SDK.ROS.CDK.Kms.IKeyProps
    {
        /// <summary>Property description: The description of the CMK.</summary>
        /// <remarks>
        /// Length constraints: Minimum length of 0 characters. Maximum length of 8192 characters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property enable: Specifies whether the key is enabled.</summary>
        /// <remarks>
        /// Defaults to true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Enable
        {
            get;
            set;
        }

        /// <summary>Property enableAutomaticRotation: Whether to enable automatic key rotation.</summary>
        /// <remarks>
        /// Valid value: true/false (default)
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "enableAutomaticRotation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? EnableAutomaticRotation
        {
            get;
            set;
        }

        /// <summary>Property keySpec: Key type.</summary>
        /// <remarks>
        /// Valid value: Aliyun_AES_256/Aliyun_SM4/RSA_2048/EC_P256/EC_P256K/EC_SM2
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "keySpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? KeySpec
        {
            get;
            set;
        }

        /// <summary>Property keyUsage: The intended use of the CMK.</summary>
        /// <remarks>
        /// Default value: ENCRYPT/DECRYPT.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "keyUsage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? KeyUsage
        {
            get;
            set;
        }

        /// <summary>Property pendingWindowInDays: The waiting period, specified in number of days.</summary>
        /// <remarks>
        /// During this period, you can cancel the CMK in PendingDeletion status. After the waiting period expires, you cannot cancel the deletion. The value must be between 7 and 30. Default value is 30.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "pendingWindowInDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? PendingWindowInDays
        {
            get;
            set;
        }

        /// <summary>Property protectionLevel: The protection level of the CMK to create.</summary>
        /// <remarks>
        /// Valid value: SOFTWARE and HSM. When this parameter is set to HSM:
        /// If the Origin parameter is set to Aliyun_KMS, the CMK is created in Managed HSM.
        /// If the Origin parameter is set to EXTERNAL, you can import external keys to Managed HSM.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "protectionLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ProtectionLevel
        {
            get;
            set;
        }

        /// <summary>Property rotationInterval: The time period for automatic rotation.</summary>
        /// <remarks>
        /// The format is integer[unit], where integer represents the length of time and unit represents the time unit. The legal unit units are: d (day), h (hour), m (minute), s (second). 7d or 604800s both represent a 7-day cycle. Value: 7~730 days.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "rotationInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? RotationInterval
        {
            get;
            set;
        }
    }
}
