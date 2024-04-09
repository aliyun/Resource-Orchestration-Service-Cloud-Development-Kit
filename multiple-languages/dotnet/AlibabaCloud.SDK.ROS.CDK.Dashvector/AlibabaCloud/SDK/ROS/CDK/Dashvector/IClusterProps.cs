using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dashvector
{
    /// <summary>Properties for defining a `Cluster`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dashvector-cluster
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-dashvector.ClusterProps")]
    public interface IClusterProps
    {
        /// <summary>Property clusterName: The name of cluster.</summary>
        [JsiiProperty(name: "clusterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClusterName
        {
            get;
        }

        /// <summary>Property clusterType: The type of cluster.</summary>
        [JsiiProperty(name: "clusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClusterType
        {
            get;
        }

        /// <summary>Property replicaCount: The number of replicas.</summary>
        [JsiiProperty(name: "replicaCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ReplicaCount
        {
            get;
        }

        /// <summary>Property ignoreExisting: Whether to ignore existing dash vector cluster False: ROS will perform a uniqueness check.If the dash vector cluster exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If the dash vector cluster exists, the creation process will be ignored. If the dash vector cluster is not created by ROS, it will be ignored during update and delete stage.</summary>
        [JsiiProperty(name: "ignoreExisting", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? IgnoreExisting
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Cluster`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dashvector-cluster
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-dashvector.ClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dashvector.IClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property clusterName: The name of cluster.</summary>
            [JsiiProperty(name: "clusterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClusterName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property clusterType: The type of cluster.</summary>
            [JsiiProperty(name: "clusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClusterType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property replicaCount: The number of replicas.</summary>
            [JsiiProperty(name: "replicaCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ReplicaCount
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property ignoreExisting: Whether to ignore existing dash vector cluster False: ROS will perform a uniqueness check.If the dash vector cluster exists, an error will be reported when creating it. True: ROS will not check the uniqueness.If the dash vector cluster exists, the creation process will be ignored. If the dash vector cluster is not created by ROS, it will be ignored during update and delete stage.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "ignoreExisting", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? IgnoreExisting
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
