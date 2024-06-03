using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Rds
{
    /// <summary>Properties for defining a `PostgresExtensions`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-postgresextensions
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IPostgresExtensionsProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.PostgresExtensionsProps")]
    public interface IPostgresExtensionsProps
    {
        /// <summary>Property accountName: The account of the user who owns the extension.</summary>
        /// <remarks>
        /// Only privileged accounts are supported.
        /// </remarks>
        [JsiiProperty(name: "accountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AccountName
        {
            get;
        }

        /// <summary>Property dbInstanceId: The instance ID.</summary>
        /// <remarks>
        /// You can call the DescribeDBInstances operation to query the instance ID.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <summary>Property dbName: The database name.</summary>
        /// <remarks>
        /// You can call the DescribeDatabases operation to query the database name.
        /// </remarks>
        [JsiiProperty(name: "dbName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbName
        {
            get;
        }

        /// <summary>Property extensions: The extensions that you want to install.</summary>
        [JsiiProperty(name: "extensions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Extensions
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property riskConfirmed: The risk description that you need to confirm.</summary>
        /// <remarks>
        /// If your instance runs an outdated minor engine version, installing specific extensions on the instance poses security risks. Proceed with the installation only after you acknowledge these risks. Valid values:
        /// true
        /// false
        /// Note For more information about the risks, see Limits on extension creation for ApsaraDB RDS for PostgreSQL instances.
        /// </remarks>
        [JsiiProperty(name: "riskConfirmed", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RiskConfirmed
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property sourceDatabase: The source database from which you want to synchronize the extension to the destination database.</summary>
        /// <remarks>
        /// If you do not specify the Extensions parameter, you must specify this parameter.
        /// </remarks>
        [JsiiProperty(name: "sourceDatabase", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? SourceDatabase
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `PostgresExtensions`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-rds-postgresextensions
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IPostgresExtensionsProps), fullyQualifiedName: "@alicloud/ros-cdk-rds.PostgresExtensionsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Rds.IPostgresExtensionsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property accountName: The account of the user who owns the extension.</summary>
            /// <remarks>
            /// Only privileged accounts are supported.
            /// </remarks>
            [JsiiProperty(name: "accountName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AccountName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbInstanceId: The instance ID.</summary>
            /// <remarks>
            /// You can call the DescribeDBInstances operation to query the instance ID.
            /// </remarks>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbName: The database name.</summary>
            /// <remarks>
            /// You can call the DescribeDatabases operation to query the database name.
            /// </remarks>
            [JsiiProperty(name: "dbName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property extensions: The extensions that you want to install.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "extensions", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Extensions
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property resourceGroupId: The ID of the resource group.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property riskConfirmed: The risk description that you need to confirm.</summary>
            /// <remarks>
            /// If your instance runs an outdated minor engine version, installing specific extensions on the instance poses security risks. Proceed with the installation only after you acknowledge these risks. Valid values:
            /// true
            /// false
            /// Note For more information about the risks, see Limits on extension creation for ApsaraDB RDS for PostgreSQL instances.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "riskConfirmed", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RiskConfirmed
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sourceDatabase: The source database from which you want to synchronize the extension to the destination database.</summary>
            /// <remarks>
            /// If you do not specify the Extensions parameter, you must specify this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sourceDatabase", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? SourceDatabase
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
