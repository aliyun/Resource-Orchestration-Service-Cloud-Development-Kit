using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Clickhouse.Datasource
{
    /// <summary>Properties for defining a `DBCluster`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-dbcluster
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDBClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.datasource.DBClusterProps")]
    public interface IDBClusterProps
    {
        /// <summary>Property dbClusterId: Instance ID.</summary>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbClusterId
        {
            get;
        }

        /// <summary>Properties for defining a `DBCluster`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-dbcluster
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDBClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.datasource.DBClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Clickhouse.Datasource.IDBClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property dbClusterId: Instance ID.</summary>
            [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbClusterId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
