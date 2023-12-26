using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Clickhouse.Datasource
{
    /// <summary>Properties for defining a `DBClusters`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-dbclusters
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDBClustersProps), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.datasource.DBClustersProps")]
    public interface IDBClustersProps
    {
        /// <summary>Property dbClusterId: Instance ID.</summary>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbClusterId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property dbClusterName: The cluster description information.</summary>
        [JsiiProperty(name: "dbClusterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DbClusterName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DBClusters`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-dbclusters
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDBClustersProps), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.datasource.DBClustersProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Clickhouse.Datasource.IDBClustersProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dbClusterId: Instance ID.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbClusterId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property dbClusterName: The cluster description information.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "dbClusterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DbClusterName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
