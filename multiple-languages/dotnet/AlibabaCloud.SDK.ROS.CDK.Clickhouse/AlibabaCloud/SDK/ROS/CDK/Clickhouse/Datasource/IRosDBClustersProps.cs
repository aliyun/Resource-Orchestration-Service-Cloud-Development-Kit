using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Clickhouse.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::ClickHouse::DBClusters`.</summary>
    [JsiiInterface(nativeType: typeof(IRosDBClustersProps), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.datasource.RosDBClustersProps")]
    public interface IRosDBClustersProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dbClusterId: Instance ID.
        /// </remarks>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbClusterId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: dbClusterName: The cluster description information.
        /// </remarks>
        [JsiiProperty(name: "dbClusterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbClusterName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::ClickHouse::DBClusters`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosDBClustersProps), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.datasource.RosDBClustersProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Clickhouse.Datasource.IRosDBClustersProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dbClusterId: Instance ID.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbClusterId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: dbClusterName: The cluster description information.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "dbClusterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbClusterName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
