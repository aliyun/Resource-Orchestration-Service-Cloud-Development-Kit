using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds.Datasource
{
    /// <summary>Properties for defining a `Accounts`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-accounts
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAccountsProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.datasource.AccountsProps")]
    public interface IAccountsProps
    {
        /// <summary>Property dbInstanceId: The ID of the RDS instance.</summary>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <summary>Property accountName: The name of the RDS account.</summary>
        [JsiiProperty(name: "accountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccountName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Accounts`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-rds-accounts
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAccountsProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.datasource.AccountsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rds.Datasource.IAccountsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dbInstanceId: The ID of the RDS instance.</summary>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property accountName: The name of the RDS account.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "accountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccountName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
