using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardbx
{
    /// <summary>Properties for defining a `ALIYUN::PolarDBX::Database`.</summary>
    [JsiiInterface(nativeType: typeof(IDatabaseProps), fullyQualifiedName: "@alicloud/ros-cdk-polardbx.DatabaseProps")]
    public interface IDatabaseProps
    {
        /// <summary>Property accounts: List of accounts.</summary>
        [JsiiProperty(name: "accounts", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-polardbx.RosDatabase.AccountsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Accounts
        {
            get;
        }

        /// <summary>Property characterSetName: Character set, which supports the following character sets: - **utf8 * * - **gbk** - **latin1 * * - **utf8mb4 * *.</summary>
        [JsiiProperty(name: "characterSetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CharacterSetName
        {
            get;
        }

        /// <summary>Property databaseName: The name of the database.</summary>
        [JsiiProperty(name: "databaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DatabaseName
        {
            get;
        }

        /// <summary>Property dbInstanceId: The ID of the instance.</summary>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <summary>Property databaseDescription: Database description information.</summary>
        [JsiiProperty(name: "databaseDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DatabaseDescription
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property mode: The mode selected when creating the database.</summary>
        /// <remarks>
        /// The values are as follows:
        ///
        /// <list type="bullet">
        /// <description><strong>auto</strong>: The database in this mode supports automatic partitioning, that is, you do not need to specify a partition key when creating a table;</description>
        /// <description><strong>drds</strong>: databases in this mode do not support automatic partitioning. When creating tables, you must use the dedicated database Shard syntax and specify the database shard key.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "mode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Mode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::PolarDBX::Database`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IDatabaseProps), fullyQualifiedName: "@alicloud/ros-cdk-polardbx.DatabaseProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardbx.IDatabaseProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property accounts: List of accounts.</summary>
            [JsiiProperty(name: "accounts", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-polardbx.RosDatabase.AccountsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Accounts
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property characterSetName: Character set, which supports the following character sets: - **utf8 * * - **gbk** - **latin1 * * - **utf8mb4 * *.</summary>
            [JsiiProperty(name: "characterSetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CharacterSetName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property databaseName: The name of the database.</summary>
            [JsiiProperty(name: "databaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DatabaseName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbInstanceId: The ID of the instance.</summary>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property databaseDescription: Database description information.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "databaseDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DatabaseDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property mode: The mode selected when creating the database.</summary>
            /// <remarks>
            /// The values are as follows:
            ///
            /// <list type="bullet">
            /// <description><strong>auto</strong>: The database in this mode supports automatic partitioning, that is, you do not need to specify a partition key when creating a table;</description>
            /// <description><strong>drds</strong>: databases in this mode do not support automatic partitioning. When creating tables, you must use the dedicated database Shard syntax and specify the database shard key.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "mode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Mode
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
