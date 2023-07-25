using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::RDS::Accounts`.</summary>
    [JsiiInterface(nativeType: typeof(IRosAccountsProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.datasource.RosAccountsProps")]
    public interface IRosAccountsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dbInstanceId: The ID of the RDS instance.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: accountName: The name of the RDS account.
        /// </remarks>
        [JsiiProperty(name: "accountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AccountName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::RDS::Accounts`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosAccountsProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.datasource.RosAccountsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rds.Datasource.IRosAccountsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dbInstanceId: The ID of the RDS instance.
            /// </remarks>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: accountName: The name of the RDS account.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AccountName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
