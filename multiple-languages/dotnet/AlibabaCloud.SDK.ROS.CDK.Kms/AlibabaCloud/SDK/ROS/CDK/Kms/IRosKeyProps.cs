using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kms
{
    /// <summary>Properties for defining a `RosKey`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-key
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosKeyProps), fullyQualifiedName: "@alicloud/ros-cdk-kms.RosKeyProps")]
    public interface IRosKeyProps
    {
        /// <remarks>
        /// <strong>Property</strong>: description: The description of the CMK. Length constraints: Minimum length of 0 characters. Maximum length of 8192 characters.
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
        /// <strong>Property</strong>: dkmsInstanceId: The ID of the dedicated KMS instance.
        /// </remarks>
        [JsiiProperty(name: "dkmsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DkmsInstanceId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: enable: Specifies whether the key is enabled. Defaults to true.
        /// </remarks>
        [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Enable
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: enableAutomaticRotation: Whether to enable automatic key rotation. Valid value: true\/false (default)
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

        /// <remarks>
        /// <strong>Property</strong>: keySpec: Key type. Valid value: Aliyun_AES_256\/Aliyun_SM4\/RSA_2048\/EC_P256\/EC_P256K\/EC_SM2
        /// </remarks>
        [JsiiProperty(name: "keySpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KeySpec
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: keyUsage: The usage of the CMK. Valid values:
        /// ENCRYPT\/DECRYPT: encrypts or decrypts data.
        /// SIGN\/VERIFY: generates or verifies a digital signature.
        /// If the CMK supports signature verification, the default value is SIGN\/VERIFY. If the CMK does not support signature verification, the default value is ENCRYPT\/DECRYPT.
        /// </remarks>
        [JsiiProperty(name: "keyUsage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? KeyUsage
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: pendingWindowInDays: The waiting period, specified in number of days. During this period, you can cancel the CMK in PendingDeletion status. After the waiting period expires, you cannot cancel the deletion. The value must be between 7 and 366. Default value is 30.
        /// </remarks>
        [JsiiProperty(name: "pendingWindowInDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PendingWindowInDays
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: policy: The policy of key.
        /// </remarks>
        [JsiiProperty(name: "policy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Policy
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: protectionLevel: The protection level of the CMK to create. Valid value: SOFTWARE and HSM. When this parameter is set to HSM:
        /// If the Origin parameter is set to Aliyun_KMS, the CMK is created in Managed HSM.
        /// If the Origin parameter is set to EXTERNAL, you can import external keys to Managed HSM.
        /// </remarks>
        [JsiiProperty(name: "protectionLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ProtectionLevel
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: rotationInterval: The time period for automatic rotation. The format is integer[unit], where integer represents the length of time and unit represents the time unit. The legal unit units are: d (day), h (hour), m (minute), s (second). 7d or 604800s both represent a 7-day cycle. Value: 7~730 days.
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

        /// <summary>Properties for defining a `RosKey`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-key
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosKeyProps), fullyQualifiedName: "@alicloud/ros-cdk-kms.RosKeyProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Kms.IRosKeyProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the CMK. Length constraints: Minimum length of 0 characters. Maximum length of 8192 characters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dkmsInstanceId: The ID of the dedicated KMS instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dkmsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DkmsInstanceId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: enable: Specifies whether the key is enabled. Defaults to true.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Enable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: enableAutomaticRotation: Whether to enable automatic key rotation. Valid value: true\/false (default)
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableAutomaticRotation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableAutomaticRotation
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: keySpec: Key type. Valid value: Aliyun_AES_256\/Aliyun_SM4\/RSA_2048\/EC_P256\/EC_P256K\/EC_SM2
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "keySpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KeySpec
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: keyUsage: The usage of the CMK. Valid values:
            /// ENCRYPT\/DECRYPT: encrypts or decrypts data.
            /// SIGN\/VERIFY: generates or verifies a digital signature.
            /// If the CMK supports signature verification, the default value is SIGN\/VERIFY. If the CMK does not support signature verification, the default value is ENCRYPT\/DECRYPT.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "keyUsage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? KeyUsage
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: pendingWindowInDays: The waiting period, specified in number of days. During this period, you can cancel the CMK in PendingDeletion status. After the waiting period expires, you cannot cancel the deletion. The value must be between 7 and 366. Default value is 30.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "pendingWindowInDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PendingWindowInDays
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: policy: The policy of key.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "policy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Policy
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: protectionLevel: The protection level of the CMK to create. Valid value: SOFTWARE and HSM. When this parameter is set to HSM:
            /// If the Origin parameter is set to Aliyun_KMS, the CMK is created in Managed HSM.
            /// If the Origin parameter is set to EXTERNAL, you can import external keys to Managed HSM.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "protectionLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ProtectionLevel
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: rotationInterval: The time period for automatic rotation. The format is integer[unit], where integer represents the length of time and unit represents the time unit. The legal unit units are: d (day), h (hour), m (minute), s (second). 7d or 604800s both represent a 7-day cycle. Value: 7~730 days.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rotationInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RotationInterval
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
