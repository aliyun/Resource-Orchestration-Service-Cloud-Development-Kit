using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Clickhouse
{
    /// <summary>Properties for defining a `EnterpriseDBClusterAccount`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclusteraccount
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IEnterpriseDBClusterAccountProps), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.EnterpriseDBClusterAccountProps")]
    public interface IEnterpriseDBClusterAccountProps
    {
        /// <summary>Property account: The name of the database account.</summary>
        [JsiiProperty(name: "account", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Account
        {
            get;
        }

        /// <summary>Property accountType: The type of the database account.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description><strong>NormalAccount</strong>: Normal account number.</description>
        /// <description><strong>SuperAccount</strong>: The privileged account.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "accountType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccountType
        {
            get;
        }

        /// <summary>Property dbInstanceId: The cluster ID.</summary>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <summary>Property password: Database account password.</summary>
        /// <remarks>
        /// Set the following rules.
        ///
        /// <list type="bullet">
        /// <description>Consists of at least three of uppercase letters, lowercase letters, numbers, and special characters.</description>
        /// <description>Oh-! @#$%^&amp; *()_+-= is a special character.</description>
        /// <description>Length is 8~32 characters.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Password
        {
            get;
        }

        /// <summary>Property description: The description of the account.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dmlAuthSetting: The information about permissions.</summary>
        [JsiiProperty(name: "dmlAuthSetting", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-clickhouse.RosEnterpriseDBClusterAccount.DmlAuthSettingProperty\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DmlAuthSetting
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `EnterpriseDBClusterAccount`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-enterprisedbclusteraccount
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IEnterpriseDBClusterAccountProps), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.EnterpriseDBClusterAccountProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Clickhouse.IEnterpriseDBClusterAccountProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property account: The name of the database account.</summary>
            [JsiiProperty(name: "account", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Account
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property accountType: The type of the database account.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description><strong>NormalAccount</strong>: Normal account number.</description>
            /// <description><strong>SuperAccount</strong>: The privileged account.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "accountType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccountType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbInstanceId: The cluster ID.</summary>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property password: Database account password.</summary>
            /// <remarks>
            /// Set the following rules.
            ///
            /// <list type="bullet">
            /// <description>Consists of at least three of uppercase letters, lowercase letters, numbers, and special characters.</description>
            /// <description>Oh-! @#$%^&amp; *()_+-= is a special character.</description>
            /// <description>Length is 8~32 characters.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Password
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: The description of the account.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dmlAuthSetting: The information about permissions.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dmlAuthSetting", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-clickhouse.RosEnterpriseDBClusterAccount.DmlAuthSettingProperty\"}]}}", isOptional: true)]
            public object? DmlAuthSetting
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
