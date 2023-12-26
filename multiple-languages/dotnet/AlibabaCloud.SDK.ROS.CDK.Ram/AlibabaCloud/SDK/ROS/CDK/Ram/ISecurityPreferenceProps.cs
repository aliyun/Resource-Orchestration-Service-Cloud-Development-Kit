using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>Properties for defining a `SecurityPreference`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-securitypreference
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISecurityPreferenceProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.SecurityPreferenceProps")]
    public interface ISecurityPreferenceProps
    {
        /// <summary>Property allowUserToChangePassword: Specifies whether RAM users can change their passwords.</summary>
        /// <remarks>
        /// Valid values:
        /// true: RAM users can change their passwords. This is the default value.
        /// false: RAM users cannot change their passwords.
        /// </remarks>
        [JsiiProperty(name: "allowUserToChangePassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AllowUserToChangePassword
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property allowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs.</summary>
        /// <remarks>
        /// Valid values:
        /// true: RAM users can manage their AccessKey pairs.
        /// false: RAM users cannot manage their AccessKey pairs. This is the default value.
        /// </remarks>
        [JsiiProperty(name: "allowUserToManageAccessKeys", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AllowUserToManageAccessKeys
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property allowUserToManageMfaDevices: Specifies whether RAM users can manage their MFA devices.</summary>
        /// <remarks>
        /// Valid values:
        /// true: RAM users can manage their MFA devices. This is the default value.
        /// false: RAM users cannot manage their MFA devices.
        /// </remarks>
        [JsiiProperty(name: "allowUserToManageMfaDevices", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AllowUserToManageMfaDevices
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property allowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys.</summary>
        /// <remarks>
        /// Valid values:
        /// true: RAM users can manage their public keys.
        /// false: RAM users cannot manage their public keys. This is the default value.
        /// Note This parameter is valid only for the Japan site.
        /// </remarks>
        [JsiiProperty(name: "allowUserToManagePublicKeys", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AllowUserToManagePublicKeys
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enableSaveMfaTicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes during logon.</summary>
        /// <remarks>
        /// The security codes are valid for 7 days. Valid values:
        /// true: RAM users can save MFA security codes during logon.
        /// false: RAM users cannot save MFA security codes during logon. This is the default
        /// value.
        /// </remarks>
        [JsiiProperty(name: "enableSaveMfaTicket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableSaveMfaTicket
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property loginNetworkMasks: The subnet mask that specifies the IP addresses from which logon to the console is allowed.</summary>
        /// <remarks>
        /// This parameter applies to password-based logon and single sign-on (SSO).
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
        [JsiiProperty(name: "loginNetworkMasks", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoginNetworkMasks
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property loginSessionDuration: The validity period of the logon session of the RAM user.</summary>
        /// <remarks>
        /// Valid values: 6 to 24. Default value: 6. Unit: hours.
        /// </remarks>
        [JsiiProperty(name: "loginSessionDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LoginSessionDuration
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `SecurityPreference`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-securitypreference
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISecurityPreferenceProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.SecurityPreferenceProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.ISecurityPreferenceProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property allowUserToChangePassword: Specifies whether RAM users can change their passwords.</summary>
            /// <remarks>
            /// Valid values:
            /// true: RAM users can change their passwords. This is the default value.
            /// false: RAM users cannot change their passwords.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "allowUserToChangePassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AllowUserToChangePassword
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property allowUserToManageAccessKeys: Specifies whether RAM users can manage their AccessKey pairs.</summary>
            /// <remarks>
            /// Valid values:
            /// true: RAM users can manage their AccessKey pairs.
            /// false: RAM users cannot manage their AccessKey pairs. This is the default value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "allowUserToManageAccessKeys", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AllowUserToManageAccessKeys
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property allowUserToManageMfaDevices: Specifies whether RAM users can manage their MFA devices.</summary>
            /// <remarks>
            /// Valid values:
            /// true: RAM users can manage their MFA devices. This is the default value.
            /// false: RAM users cannot manage their MFA devices.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "allowUserToManageMfaDevices", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AllowUserToManageMfaDevices
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property allowUserToManagePublicKeys: Specifies whether RAM users can manage their public keys.</summary>
            /// <remarks>
            /// Valid values:
            /// true: RAM users can manage their public keys.
            /// false: RAM users cannot manage their public keys. This is the default value.
            /// Note This parameter is valid only for the Japan site.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "allowUserToManagePublicKeys", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AllowUserToManagePublicKeys
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enableSaveMfaTicket: Specifies whether RAM users can save multi-factor authentication (MFA) security codes during logon.</summary>
            /// <remarks>
            /// The security codes are valid for 7 days. Valid values:
            /// true: RAM users can save MFA security codes during logon.
            /// false: RAM users cannot save MFA security codes during logon. This is the default
            /// value.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableSaveMfaTicket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableSaveMfaTicket
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property loginNetworkMasks: The subnet mask that specifies the IP addresses from which logon to the console is allowed.</summary>
            /// <remarks>
            /// This parameter applies to password-based logon and single sign-on (SSO).
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
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property loginSessionDuration: The validity period of the logon session of the RAM user.</summary>
            /// <remarks>
            /// Valid values: 6 to 24. Default value: 6. Unit: hours.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "loginSessionDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LoginSessionDuration
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
