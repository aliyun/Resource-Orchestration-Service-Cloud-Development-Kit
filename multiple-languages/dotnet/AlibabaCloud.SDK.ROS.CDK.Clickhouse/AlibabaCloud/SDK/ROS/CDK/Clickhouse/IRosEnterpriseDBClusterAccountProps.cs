using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Clickhouse
{
    /// <summary>Properties for defining a `RosEnterpriseDBClusterAccount`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclusteraccount
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosEnterpriseDBClusterAccountProps), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.RosEnterpriseDBClusterAccountProps")]
    public interface IRosEnterpriseDBClusterAccountProps
    {
        /// <remarks>
        /// <strong>Property</strong>: account: The name of the database account.
        /// </remarks>
        [JsiiProperty(name: "account", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Account
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: accountType: The type of the database account. Valid values:
        /// - **NormalAccount**: Normal account number.
        /// - **SuperAccount**: The privileged account.
        /// </remarks>
        [JsiiProperty(name: "accountType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccountType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceId: The cluster ID.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong></strong>: #$%^& *()_+-= is a special character.
        /// - Length is 8~32 characters.
        ///
        /// <strong>Property</strong>: password: Database account password. Set the following rules.
        /// - Consists of at least three of uppercase letters, lowercase letters, numbers, and special characters.
        /// - Oh-!
        /// </remarks>
        [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Password
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: The description of the account.
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
        /// <strong>Property</strong>: dmlAuthSetting: The information about permissions.
        /// </remarks>
        [JsiiProperty(name: "dmlAuthSetting", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-clickhouse.RosEnterpriseDBClusterAccount.DmlAuthSettingProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DmlAuthSetting
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosEnterpriseDBClusterAccount`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclusteraccount
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosEnterpriseDBClusterAccountProps), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.RosEnterpriseDBClusterAccountProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Clickhouse.IRosEnterpriseDBClusterAccountProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: account: The name of the database account.
            /// </remarks>
            [JsiiProperty(name: "account", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Account
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: accountType: The type of the database account. Valid values:
            /// - **NormalAccount**: Normal account number.
            /// - **SuperAccount**: The privileged account.
            /// </remarks>
            [JsiiProperty(name: "accountType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccountType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dbInstanceId: The cluster ID.
            /// </remarks>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong></strong>: #$%^& *()_+-= is a special character.
            /// - Length is 8~32 characters.
            ///
            /// <strong>Property</strong>: password: Database account password. Set the following rules.
            /// - Consists of at least three of uppercase letters, lowercase letters, numbers, and special characters.
            /// - Oh-!
            /// </remarks>
            [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Password
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: The description of the account.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dmlAuthSetting: The information about permissions.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dmlAuthSetting", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-clickhouse.RosEnterpriseDBClusterAccount.DmlAuthSettingProperty\"}]}}", isOptional: true)]
            public object? DmlAuthSetting
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
