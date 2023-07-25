using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Mse.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::MSE::Clusters`.</summary>
    [JsiiInterface(nativeType: typeof(IClustersProps), fullyQualifiedName: "@alicloud/ros-cdk-mse.datasource.ClustersProps")]
    public interface IClustersProps
    {
        /// <summary>Property clusterAliasName: The alias name of cluster.</summary>
        [JsiiProperty(name: "clusterAliasName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ClusterAliasName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::MSE::Clusters`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IClustersProps), fullyQualifiedName: "@alicloud/ros-cdk-mse.datasource.ClustersProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Mse.Datasource.IClustersProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property clusterAliasName: The alias name of cluster.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "clusterAliasName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ClusterAliasName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
