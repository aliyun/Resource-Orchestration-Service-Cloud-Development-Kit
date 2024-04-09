using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Clickhouse.Datasource
{
    /// <summary>Properties for defining a `RosDBCluster`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-dbcluster
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDBClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.datasource.RosDBClusterProps")]
    public interface IRosDBClusterProps
    {
        /// <remarks>
        /// <strong>Property</strong>: dbClusterId: Instance ID.
        /// </remarks>
        [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object DbClusterId
        {
            get;
        }

        /// <summary>Properties for defining a `RosDBCluster`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-clickhouse-dbcluster
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDBClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-clickhouse.datasource.RosDBClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Clickhouse.Datasource.IRosDBClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: dbClusterId: Instance ID.
            /// </remarks>
            [JsiiProperty(name: "dbClusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object DbClusterId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
