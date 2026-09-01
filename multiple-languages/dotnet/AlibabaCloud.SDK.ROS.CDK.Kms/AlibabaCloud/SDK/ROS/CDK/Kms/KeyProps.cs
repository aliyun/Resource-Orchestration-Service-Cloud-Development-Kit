using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Kms
{
    /// <summary>Properties for defining a `Key`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-kms-key
    /// </remarks>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-kms.KeyProps")]
    public class KeyProps : AlibabaCloud.SDK.ROS.CDK.Kms.IKeyProps
    {
        private object? _deletionProtection;

        /// <summary>Property deletionProtection: Specifies whether to enable the release protection feature for the key.</summary>
        /// <remarks>
        /// Default is false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DeletionProtection
        {
            get => _deletionProtection;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case bool cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _deletionProtection = value;
            }
        }

        private object? _description;

        /// <summary>Property description: The description of the CMK.</summary>
        /// <remarks>
        /// Length constraints: Minimum length of 0 characters. Maximum length of 8192 characters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get => _description;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _description = value;
            }
        }

        private object? _dkmsInstanceId;

        /// <summary>Property dkmsInstanceId: The ID of the KMS instance.</summary>
        /// <remarks>
        ///     This parameter is required when you create a key for a KMS instance. This
        ///     parameter is not required when you create a default key (master key).
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "dkmsInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DkmsInstanceId
        {
            get => _dkmsInstanceId;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _dkmsInstanceId = value;
            }
        }

        private object? _enable;

        /// <summary>Property enable: Specifies whether the key is enabled.</summary>
        /// <remarks>
        /// Defaults to true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Enable
        {
            get => _enable;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case bool cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _enable = value;
            }
        }

        private object? _enableAutomaticRotation;

        /// <summary>Property enableAutomaticRotation: Whether to enable automatic key rotation.</summary>
        /// <remarks>
        /// Valid value: true/false (default)
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "enableAutomaticRotation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? EnableAutomaticRotation
        {
            get => _enableAutomaticRotation;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case bool cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: bool, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _enableAutomaticRotation = value;
            }
        }

        private object? _keySpec;

        /// <summary>Property keySpec: Key type.</summary>
        /// <remarks>
        /// Valid value: Aliyun_AES_256/Aliyun_SM4/RSA_2048/EC_P256/EC_P256K/EC_SM2
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "keySpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? KeySpec
        {
            get => _keySpec;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _keySpec = value;
            }
        }

        private object? _keyUsage;

        /// <summary>Property keyUsage: The usage of the CMK.</summary>
        /// <remarks>
        /// Valid values:
        /// ENCRYPT/DECRYPT: encrypts or decrypts data.
        /// SIGN/VERIFY: generates or verifies a digital signature.
        /// If the CMK supports signature verification, the default value is SIGN/VERIFY. If the CMK does not support signature verification, the default value is ENCRYPT/DECRYPT.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "keyUsage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? KeyUsage
        {
            get => _keyUsage;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _keyUsage = value;
            }
        }

        private object? _pendingWindowInDays;

        /// <summary>Property pendingWindowInDays: The waiting period, specified in number of days.</summary>
        /// <remarks>
        /// During this period, you can cancel the CMK in PendingDeletion status. After the waiting period expires, you cannot cancel the deletion. The value must be between 7 and 366. Default value is 30.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "pendingWindowInDays", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PendingWindowInDays
        {
            get => _pendingWindowInDays;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case double cast_cd4240:
                            break;
                        case byte cast_cd4240:
                            break;
                        case decimal cast_cd4240:
                            break;
                        case float cast_cd4240:
                            break;
                        case int cast_cd4240:
                            break;
                        case long cast_cd4240:
                            break;
                        case sbyte cast_cd4240:
                            break;
                        case short cast_cd4240:
                            break;
                        case uint cast_cd4240:
                            break;
                        case ulong cast_cd4240:
                            break;
                        case ushort cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: double, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _pendingWindowInDays = value;
            }
        }

        private object? _policy;

        /// <summary>Property policy: The policy of key.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "policy", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        public object? Policy
        {
            get => _policy;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case System.Collections.Generic.IDictionary<string, object> cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}, System.Collections.Generic.IDictionary<string, object>; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _policy = value;
            }
        }

        private object? _protectionLevel;

        /// <summary>Property protectionLevel: You do not need to specify this parameter.</summary>
        /// <remarks>
        /// KMS automatically sets an appropriate
        /// protection level for your key.
        /// The protection level of the key. Valid values:
        ///
        /// <list type="bullet">
        /// <description>SOFTWARE</description>
        /// <description>HSM</description>
        /// </list>
        ///
        ///     <list type="bullet">
        ///     <description>If you specify DKMSInstanceId, this parameter is ignored. If the instance is
        ///     a software key management instance, the protection level is SOFTWARE. If the
        ///     instance is a hardware key management instance, the protection level is HSM.</description>
        ///     </list>
        ///
        /// <list type="bullet">
        /// <description>If you do not specify DKMSInstanceId, leave this parameter empty. KMS sets the
        /// protection level. If a managed HSM is available in the region, KMS sets this
        /// parameter to HSM. Otherwise, KMS sets this parameter to SOFTWARE. For more
        /// information, see <a href="">Managed HSM overview</a>.</description>
        /// </list>
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "protectionLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ProtectionLevel
        {
            get => _protectionLevel;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _protectionLevel = value;
            }
        }

        private object? _rotationInterval;

        /// <summary>Property rotationInterval: The automatic rotation period.</summary>
        /// <remarks>
        /// The format is <c>integer[unit]</c>. <c>integer</c>
        /// indicates the length of the period. <c>unit</c> indicates the unit of time. Valid
        /// units: d (day), h (hour), m (minute), and s (second). For example, both 7d and
        /// 604800s represent a period of 7 days.
        ///
        /// <list type="bullet">
        /// <description>If the key is a default key, the value is 365d.</description>
        /// <description>If the key is a software-protected key, the value can be from 7d to 365d.</description>
        /// <description>If the key is a hardware-protected key, automatic rotation is not supported.</description>
        /// </list>
        ///
        ///     This parameter is required if you set EnableAutomaticRotation to true.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "rotationInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? RotationInterval
        {
            get => _rotationInterval;
            set
            {
                if (Amazon.JSII.Runtime.Configuration.RuntimeTypeChecking)
                {
                    switch (value)
                    {
                        case string cast_cd4240:
                            break;
                        case AlibabaCloud.SDK.ROS.CDK.Core.IResolvable cast_cd4240:
                            break;
                        case Amazon.JSII.Runtime.Deputy.AnonymousObject cast_cd4240:
                            // Not enough information to type-check...
                            break;
                        case null:
                            break;
                        default:
                            throw new System.ArgumentException($"Expected {nameof(value)} to be one of: string, {typeof(AlibabaCloud.SDK.ROS.CDK.Core.IResolvable).FullName}; received {value.GetType().FullName}", nameof(value));
                    }
                }
                _rotationInterval = value;
            }
        }

        /// <summary>Property tags: Tags to attach to key.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create key. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-kms.RosKey.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Kms.RosKey.ITagsProperty[]? Tags
        {
            get;
            set;
        }
    }
}
