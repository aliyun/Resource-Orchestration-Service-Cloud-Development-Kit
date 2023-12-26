using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Polardbx
{
    /// <summary>Properties for defining a `RosDatabase`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardbx-database
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDatabaseProps), fullyQualifiedName: "@alicloud/ros-cdk-polardbx.RosDatabaseProps")]
    public interface IRosDatabaseProps
    {
        /// <remarks>
        /// <strong>Property</strong>: accounts: List of accounts.
        /// </remarks>
        [JsiiProperty(name: "accounts", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-polardbx.RosDatabase.AccountsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object Accounts
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: characterSetName: Character set, which supports the following character sets:
        /// - **utf8 * *
        /// - **gbk**
        /// - **latin1 * *
        /// - **utf8mb4 * *.
        /// </remarks>
        [JsiiProperty(name: "characterSetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CharacterSetName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: databaseName: The name of the database.
        /// </remarks>
        [JsiiProperty(name: "databaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DatabaseName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbInstanceId: The ID of the instance.
        /// </remarks>
        [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbInstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: databaseDescription: Database description information.
        /// </remarks>
        [JsiiProperty(name: "databaseDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DatabaseDescription
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: mode: The mode selected when creating the database. The values are as follows:
        /// - **auto**: The database in this mode supports automatic partitioning, that is, you do not need to specify a partition key when creating a table;
        /// - **drds**: databases in this mode do not support automatic partitioning. When creating tables, you must use the dedicated database Shard syntax and specify the database shard key.
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

        /// <summary>Properties for defining a `RosDatabase`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-polardbx-database
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDatabaseProps), fullyQualifiedName: "@alicloud/ros-cdk-polardbx.RosDatabaseProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Polardbx.IRosDatabaseProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: accounts: List of accounts.
            /// </remarks>
            [JsiiProperty(name: "accounts", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-polardbx.RosDatabase.AccountsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object Accounts
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: characterSetName: Character set, which supports the following character sets:
            /// - **utf8 * *
            /// - **gbk**
            /// - **latin1 * *
            /// - **utf8mb4 * *.
            /// </remarks>
            [JsiiProperty(name: "characterSetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CharacterSetName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: databaseName: The name of the database.
            /// </remarks>
            [JsiiProperty(name: "databaseName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DatabaseName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dbInstanceId: The ID of the instance.
            /// </remarks>
            [JsiiProperty(name: "dbInstanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbInstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: databaseDescription: Database description information.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "databaseDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DatabaseDescription
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: mode: The mode selected when creating the database. The values are as follows:
            /// - **auto**: The database in this mode supports automatic partitioning, that is, you do not need to specify a partition key when creating a table;
            /// - **drds**: databases in this mode do not support automatic partitioning. When creating tables, you must use the dedicated database Shard syntax and specify the database shard key.
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
