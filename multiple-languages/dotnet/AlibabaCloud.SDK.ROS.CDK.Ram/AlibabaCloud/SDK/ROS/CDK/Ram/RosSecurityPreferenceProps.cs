using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>Properties for defining a `ALIYUN::RAM::SecurityPreference`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ram.RosSecurityPreferenceProps")]
    public class RosSecurityPreferenceProps : AlibabaCloud.SDK.ROS.CDK.Ram.IRosSecurityPreferenceProps
    {
        private object? _allowUserToChangePassword;

        /// <remarks>
        /// <strong>Property</strong>: allowUserToChangePassword: Specifies whether RAM users can change their passwords. Valid values:
        /// true: RAM users can change their passwords. This is the default value.
        /// false: RAM users cannot change their passwords.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "allowUserToChangePassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AllowUserToChangePassword
        {
            get => _allowUserToChangePassword;
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
                _allowUserToChangePassword = value;
            }
        }

        private object? _allowUserToManageAccessKeys;

        /// <remarks>
        /// <strong>Property</strong>: allowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs. Valid values:
        /// true: RAM users can manage their AccessKey pairs.
        /// false: RAM users cannot manage their AccessKey pairs. This is the default value.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "allowUserToManageAccessKeys", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AllowUserToManageAccessKeys
        {
            get => _allowUserToManageAccessKeys;
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
                _allowUserToManageAccessKeys = value;
            }
        }

        private object? _allowUserToManageMfaDevices;

        /// <remarks>
        /// <strong>Property</strong>: allowUserToManageMfaDevices: Specifies whether RAM users can manage their MFA devices. Valid values:
        /// true: RAM users can manage their MFA devices. This is the default value.
        /// false: RAM users cannot manage their MFA devices.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "allowUserToManageMfaDevices", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AllowUserToManageMfaDevices
        {
            get => _allowUserToManageMfaDevices;
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
                _allowUserToManageMfaDevices = value;
            }
        }

        private object? _allowUserToManagePublicKeys;

        /// <remarks>
        /// <strong>Property</strong>: allowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys. Valid values:
        /// true: RAM users can manage their public keys.
        /// false: RAM users cannot manage their public keys. This is the default value.
        /// Note This parameter is valid only for the Japan site.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "allowUserToManagePublicKeys", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AllowUserToManagePublicKeys
        {
            get => _allowUserToManagePublicKeys;
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
                _allowUserToManagePublicKeys = value;
            }
        }

        private object? _enableSaveMfaTicket;

        /// <remarks>
        /// <strong>Property</strong>: enableSaveMfaTicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes
        /// during logon. The security codes are valid for 7 days. Valid values:
        /// true: RAM users can save MFA security codes during logon.
        /// false: RAM users cannot save MFA security codes during logon. This is the default
        /// value.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "enableSaveMfaTicket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? EnableSaveMfaTicket
        {
            get => _enableSaveMfaTicket;
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
                _enableSaveMfaTicket = value;
            }
        }

        private object? _loginNetworkMasks;

        /// <remarks>
        /// <strong>Property</strong>: loginNetworkMasks: The subnet mask that specifies the IP addresses from which logon to the console is
        /// allowed. This parameter applies to password-based logon and single sign-on (SSO).
        /// However, this parameter does not apply to API calls that are authenticated based on
        /// AccessKey pairs.
        /// If a subnet mask is specified, RAM users can log on to the console only by using the
        /// IP addresses in the subnet.
        /// If you do not specify a subnet mask, RAM users can log on to the console by using
        /// all IP addresses.
        /// If you want to specify multiple subnet masks, separate the subnet masks with semicolons
        /// (;). Example: 192.168.0.0/16;10.0.0.0/8.
        /// A maximum of 25 subnet masks can be set. The total length of the subnet masks can
        /// be 1 to 512 characters.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "loginNetworkMasks", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? LoginNetworkMasks
        {
            get => _loginNetworkMasks;
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
                _loginNetworkMasks = value;
            }
        }

        private object? _loginSessionDuration;

        /// <remarks>
        /// <strong>Property</strong>: loginSessionDuration: The validity period of the logon session of the RAM user.
        /// Valid values: 6 to 24. Default value: 6. Unit: hours.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "loginSessionDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? LoginSessionDuration
        {
            get => _loginSessionDuration;
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
                _loginSessionDuration = value;
            }
        }
    }
}
