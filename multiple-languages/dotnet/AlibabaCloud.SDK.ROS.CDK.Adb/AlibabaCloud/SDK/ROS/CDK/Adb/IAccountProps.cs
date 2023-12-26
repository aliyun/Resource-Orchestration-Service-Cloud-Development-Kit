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
        /// <summary>Property accountName: The name of the account.</summary>
        [JsiiProperty(name: "accountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccountName
        {
            get;
        }

        /// <summary>Property accountPassword: The password of the account.</summary>
        /// <remarks>
        /// The password must contain uppercase letters, lowercase letters, digits, and special
        /// characters.
        /// Special characters include ! @ # $ % ^ &amp; * ()  _ + - and =
        /// The password must be 8 to 32 characters in length.
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

            /// <summary>Property accountName: The name of the account.</summary>
            [JsiiProperty(name: "accountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccountName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property accountPassword: The password of the account.</summary>
            /// <remarks>
            /// The password must contain uppercase letters, lowercase letters, digits, and special
            /// characters.
            /// Special characters include ! @ # $ % ^ &amp; * ()  _ + - and =
            /// The password must be 8 to 32 characters in length.
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
