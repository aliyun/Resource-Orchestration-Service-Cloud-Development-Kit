using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Clickhouse
{
    /// <summary>Properties for defining a `ALIYUN::ClickHouse::SynDb`.</summary>
    [JsiiInterface(nativeType: typeof(ISynDbProps), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.SynDbProps")]
    public interface ISynDbProps
    {
        /// <summary>Property ckPassword: The password of the database account.</summary>
        [JsiiProperty(name: "ckPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CkPassword
        {
            get;
        }

        /// <summary>Property ckUserName: The account of the clickhouse database.</summary>
        [JsiiProperty(name: "ckUserName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CkUserName
        {
            get;
        }

        /// <summary>Property dbClusterId: Clickhouse cluster id.</summary>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbClusterId
        {
            get;
        }

        /// <summary>Property rdsId: The instance id of RDS.</summary>
        [JsiiProperty(name: "rdsId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RdsId
        {
            get;
        }

        /// <summary>Property rdsPassword: The password of the RDS database account.</summary>
        [JsiiProperty(name: "rdsPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RdsPassword
        {
            get;
        }

        /// <summary>Property rdsUserName: The account of the RDS database.</summary>
        [JsiiProperty(name: "rdsUserName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RdsUserName
        {
            get;
        }

        /// <summary>Property skipUnsupported: Skip unsupported table or not.</summary>
        [JsiiProperty(name: "skipUnsupported", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SkipUnsupported
        {
            get;
        }

        /// <summary>Property synDbTables: The tables to syn.</summary>
        [JsiiProperty(name: "synDbTables", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-clickhouse.RosSynDb.SynDbTablesProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object SynDbTables
        {
            get;
        }

        /// <summary>Property clickhousePort: The port of clickhouse id.</summary>
        [JsiiProperty(name: "clickhousePort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ClickhousePort
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property limitUpper: The maximum number of rows to sync per second.</summary>
        [JsiiProperty(name: "limitUpper", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LimitUpper
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property rdsPort: The port of rds.</summary>
        [JsiiProperty(name: "rdsPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RdsPort
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property rdsVpcId: The vpc of rds.</summary>
        [JsiiProperty(name: "rdsVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RdsVpcId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property rdsVpcUrl: Intranet address of ApsaraDB for RDS.</summary>
        [JsiiProperty(name: "rdsVpcUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RdsVpcUrl
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::ClickHouse::SynDb`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ISynDbProps), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.SynDbProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Clickhouse.ISynDbProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property ckPassword: The password of the database account.</summary>
            [JsiiProperty(name: "ckPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CkPassword
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property ckUserName: The account of the clickhouse database.</summary>
            [JsiiProperty(name: "ckUserName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CkUserName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property dbClusterId: Clickhouse cluster id.</summary>
            [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property rdsId: The instance id of RDS.</summary>
            [JsiiProperty(name: "rdsId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RdsId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property rdsPassword: The password of the RDS database account.</summary>
            [JsiiProperty(name: "rdsPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RdsPassword
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property rdsUserName: The account of the RDS database.</summary>
            [JsiiProperty(name: "rdsUserName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RdsUserName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property skipUnsupported: Skip unsupported table or not.</summary>
            [JsiiProperty(name: "skipUnsupported", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SkipUnsupported
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property synDbTables: The tables to syn.</summary>
            [JsiiProperty(name: "synDbTables", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-clickhouse.RosSynDb.SynDbTablesProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object SynDbTables
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property clickhousePort: The port of clickhouse id.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "clickhousePort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ClickhousePort
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property limitUpper: The maximum number of rows to sync per second.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "limitUpper", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LimitUpper
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property rdsPort: The port of rds.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "rdsPort", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RdsPort
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property rdsVpcId: The vpc of rds.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "rdsVpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RdsVpcId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property rdsVpcUrl: Intranet address of ApsaraDB for RDS.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "rdsVpcUrl", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RdsVpcUrl
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
