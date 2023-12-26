using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Clickhouse
{
    /// <summary>Properties for defining a `RosSynDb`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-syndb
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosSynDbProps), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.RosSynDbProps")]
    public interface IRosSynDbProps
    {
        /// <remarks>
        /// <strong>Property</strong>: ckPassword: The password of the database account
        /// </remarks>
        [JsiiProperty(name: "ckPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CkPassword
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: ckUserName: The account of the clickhouse database.
        /// </remarks>
        [JsiiProperty(name: "ckUserName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CkUserName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: dbClusterId: Clickhouse cluster id.
        /// </remarks>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbClusterId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: rdsId: The instance id of RDS.
        /// </remarks>
        [JsiiProperty(name: "rdsId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RdsId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: rdsPassword: The password of the RDS database account.
        /// </remarks>
        [JsiiProperty(name: "rdsPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RdsPassword
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: rdsUserName: The account of the RDS database.
        /// </remarks>
        [JsiiProperty(name: "rdsUserName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RdsUserName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: skipUnsupported: Skip unsupported table or not.
        /// </remarks>
        [JsiiProperty(name: "skipUnsupported", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SkipUnsupported
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: synDbTables: The tables to syn.
        /// </remarks>
        [JsiiProperty(name: "synDbTables", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-clickhouse.RosSynDb.SynDbTablesProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object SynDbTables
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: clickhousePort: The port of clickhouse id.
        /// </remarks>
        [JsiiProperty(name: "clickhousePort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ClickhousePort
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: limitUpper: The maximum number of rows to sync per second.
        /// </remarks>
        [JsiiProperty(name: "limitUpper", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LimitUpper
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: rdsPort: The port of rds.
        /// </remarks>
        [JsiiProperty(name: "rdsPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RdsPort
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: rdsVpcId: The vpc of rds.
        /// </remarks>
        [JsiiProperty(name: "rdsVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RdsVpcId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: rdsVpcUrl: Intranet address of ApsaraDB for RDS.
        /// </remarks>
        [JsiiProperty(name: "rdsVpcUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RdsVpcUrl
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosSynDb`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-clickhouse-syndb
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosSynDbProps), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.RosSynDbProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Clickhouse.IRosSynDbProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: ckPassword: The password of the database account
            /// </remarks>
            [JsiiProperty(name: "ckPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CkPassword
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: ckUserName: The account of the clickhouse database.
            /// </remarks>
            [JsiiProperty(name: "ckUserName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CkUserName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: dbClusterId: Clickhouse cluster id.
            /// </remarks>
            [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsId: The instance id of RDS.
            /// </remarks>
            [JsiiProperty(name: "rdsId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RdsId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsPassword: The password of the RDS database account.
            /// </remarks>
            [JsiiProperty(name: "rdsPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RdsPassword
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsUserName: The account of the RDS database.
            /// </remarks>
            [JsiiProperty(name: "rdsUserName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RdsUserName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: skipUnsupported: Skip unsupported table or not.
            /// </remarks>
            [JsiiProperty(name: "skipUnsupported", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SkipUnsupported
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: synDbTables: The tables to syn.
            /// </remarks>
            [JsiiProperty(name: "synDbTables", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-clickhouse.RosSynDb.SynDbTablesProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object SynDbTables
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: clickhousePort: The port of clickhouse id.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "clickhousePort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ClickhousePort
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: limitUpper: The maximum number of rows to sync per second.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "limitUpper", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LimitUpper
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsPort: The port of rds.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rdsPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RdsPort
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsVpcId: The vpc of rds.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rdsVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RdsVpcId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: rdsVpcUrl: Intranet address of ApsaraDB for RDS.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "rdsVpcUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RdsVpcUrl
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
