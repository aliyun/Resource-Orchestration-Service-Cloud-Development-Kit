using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>Properties for defining a `LoginProfile`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-loginprofile
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ILoginProfileProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.LoginProfileProps")]
    public interface ILoginProfileProps
    {
        /// <summary>Property userPrincipalName: The login name of the RAM user.</summary>
        [JsiiProperty(name: "userPrincipalName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object UserPrincipalName
        {
            get;
        }

        /// <summary>Property generateRandomPassword: Whether to generate a random password for the RAM user.</summary>
        [JsiiProperty(name: "generateRandomPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GenerateRandomPassword
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property mfaBindRequired: Whether to force RAM users to enable multi-factor authentication.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>true: This is required. RAM users must bind the multifactor authentication device the next time they log in.</description>
        /// <description>false (default) : This is not required.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "mfaBindRequired", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MfaBindRequired
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property password: The password of the RAM user.</summary>
        [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Password
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property passwordResetRequired: Whether RAM users must reset their password the next time they log in.</summary>
        [JsiiProperty(name: "passwordResetRequired", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PasswordResetRequired
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property status: Enable or disable console password login.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Activate (default): Enable.</description>
        /// <description>Inactivate: Disable.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Status
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `LoginProfile`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-loginprofile
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ILoginProfileProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.LoginProfileProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.ILoginProfileProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property userPrincipalName: The login name of the RAM user.</summary>
            [JsiiProperty(name: "userPrincipalName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object UserPrincipalName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property generateRandomPassword: Whether to generate a random password for the RAM user.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "generateRandomPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GenerateRandomPassword
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property mfaBindRequired: Whether to force RAM users to enable multi-factor authentication.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>true: This is required. RAM users must bind the multifactor authentication device the next time they log in.</description>
            /// <description>false (default) : This is not required.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mfaBindRequired", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MfaBindRequired
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property password: The password of the RAM user.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Password
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property passwordResetRequired: Whether RAM users must reset their password the next time they log in.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "passwordResetRequired", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PasswordResetRequired
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property status: Enable or disable console password login.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Activate (default): Enable.</description>
            /// <description>Inactivate: Disable.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "status", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Status
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
