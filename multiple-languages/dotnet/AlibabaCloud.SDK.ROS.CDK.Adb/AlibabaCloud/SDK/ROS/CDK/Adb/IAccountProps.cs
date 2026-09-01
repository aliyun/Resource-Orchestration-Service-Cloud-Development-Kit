using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Adb
{
    /// <summary>Properties for defining a `Account`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adb-account
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAccountProps), fullyQualifiedName: "@alicloud/ros-cdk-adb.AccountProps")]
    public interface IAccountProps
    {
        /// <summary>Property accountName: The database account name.</summary>
        /// <remarks>
        /// The name must meet the following requirements:
        ///
        /// <list type="bullet">
        /// <description>Start with a lowercase letter and end with a lowercase letter or digit.</description>
        /// <description>Contain only lowercase letters, digits, or underscores (_).</description>
        /// <description>Be 2 to 16 characters long.</description>
        /// <description>Not use reserved usernames such as root, admin, or opsadmin.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "accountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccountName
        {
            get;
        }

        /// <summary>Property accountPassword: The database account password.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>Use any three of the following character types: uppercase letters, lowercase
        /// letters, digits, and special characters.</description>
        /// <description>Special characters include the following: <c>!@#$%^&amp;*()_+-=</c></description>
        /// <description>Be 8 to 32 characters long.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "accountPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccountPassword
        {
            get;
        }

        /// <summary>Property dbClusterId: The ID of the cluster.</summary>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbClusterId
        {
            get;
        }

        /// <summary>Property accountDescription: The description of the account.</summary>
        /// <remarks>
        /// The description cannot start with http://or https://.
        /// The description can be up to 256 characters in length.
        /// </remarks>
        [JsiiProperty(name: "accountDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccountDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property accountType: Normal: standard account Super: privileged account.</summary>
        [JsiiProperty(name: "accountType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccountType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Account`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-adb-account
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAccountProps), fullyQualifiedName: "@alicloud/ros-cdk-adb.AccountProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Adb.IAccountProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property accountName: The database account name.</summary>
            /// <remarks>
            /// The name must meet the following requirements:
            ///
            /// <list type="bullet">
            /// <description>Start with a lowercase letter and end with a lowercase letter or digit.</description>
            /// <description>Contain only lowercase letters, digits, or underscores (_).</description>
            /// <description>Be 2 to 16 characters long.</description>
            /// <description>Not use reserved usernames such as root, admin, or opsadmin.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "accountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccountName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property accountPassword: The database account password.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>Use any three of the following character types: uppercase letters, lowercase
            /// letters, digits, and special characters.</description>
            /// <description>Special characters include the following: <c>!@#$%^&amp;*()_+-=</c></description>
            /// <description>Be 8 to 32 characters long.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "accountPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccountPassword
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbClusterId: The ID of the cluster.</summary>
            [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property accountDescription: The description of the account.</summary>
            /// <remarks>
            /// The description cannot start with http://or https://.
            /// The description can be up to 256 characters in length.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accountDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccountDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property accountType: Normal: standard account Super: privileged account.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "accountType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccountType
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
