using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ram
{
    /// <summary>Properties for defining a `RosLoginProfile`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-loginprofile
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosLoginProfileProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosLoginProfileProps")]
    public interface IRosLoginProfileProps
    {
        /// <remarks>
        /// <strong>Property</strong>: userPrincipalName: The login name of the RAM user.
        /// </remarks>
        [JsiiProperty(name: "userPrincipalName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object UserPrincipalName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: generateRandomPassword: Whether to generate a random password for the RAM user.
        /// </remarks>
        [JsiiProperty(name: "generateRandomPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? GenerateRandomPassword
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: mfaBindRequired: Whether to force RAM users to enable multi-factor authentication. Valid values:
        /// - true: This is required. RAM users must bind the multifactor authentication device the next time they log in.
        /// - false (default) : This is not required.
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

        /// <remarks>
        /// <strong>Property</strong>: password: The password of the RAM user.
        /// </remarks>
        [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Password
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: passwordResetRequired: Whether RAM users must reset their password the next time they log in.
        /// </remarks>
        [JsiiProperty(name: "passwordResetRequired", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? PasswordResetRequired
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: status: Enable or disable console password login. Valid values:
        /// - Activate (default): Enable.
        /// - Inactivate: Disable.
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

        /// <summary>Properties for defining a `RosLoginProfile`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ram-loginprofile
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosLoginProfileProps), fullyQualifiedName: "@alicloud/ros-cdk-ram.RosLoginProfileProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ram.IRosLoginProfileProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: userPrincipalName: The login name of the RAM user.
            /// </remarks>
            [JsiiProperty(name: "userPrincipalName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object UserPrincipalName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: generateRandomPassword: Whether to generate a random password for the RAM user.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "generateRandomPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? GenerateRandomPassword
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: mfaBindRequired: Whether to force RAM users to enable multi-factor authentication. Valid values:
            /// - true: This is required. RAM users must bind the multifactor authentication device the next time they log in.
            /// - false (default) : This is not required.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mfaBindRequired", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MfaBindRequired
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: password: The password of the RAM user.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Password
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: passwordResetRequired: Whether RAM users must reset their password the next time they log in.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "passwordResetRequired", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? PasswordResetRequired
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: status: Enable or disable console password login. Valid values:
            /// - Activate (default): Enable.
            /// - Inactivate: Disable.
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
