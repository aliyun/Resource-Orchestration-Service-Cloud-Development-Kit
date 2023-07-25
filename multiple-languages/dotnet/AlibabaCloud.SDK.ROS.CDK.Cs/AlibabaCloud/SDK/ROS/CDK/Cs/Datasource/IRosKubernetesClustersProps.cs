using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::CS::KubernetesClusters`.</summary>
    [JsiiInterface(nativeType: typeof(IRosKubernetesClustersProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.datasource.RosKubernetesClustersProps")]
    public interface IRosKubernetesClustersProps
    {
        /// <remarks>
        /// <strong>Property</strong>: clusterSpec: The specification of the cluster. If you set the cluster type to ManagedKubernetes, you can use cluster specifications to distinguish clusters. Valid values:
        /// ack.pro.small: professional managed Kubernetes cluster
        /// ack.standard: standard managed Kubernetes cluster
        /// By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
        /// </remarks>
        [JsiiProperty(name: "clusterSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ClusterSpec
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: clusterType: The type of the cluster. Valid values:
        /// Kubernetes: dedicated Kubernetes cluster
        /// ManagedKubernetes: managed Kubernetes cluster, serverless Kubernetes (ASK) cluster, or edge Kubernetes cluster
        /// Ask: ASK cluster
        /// ExternalKubernetes: registered external cluster
        /// When you query an ASK cluster, the value specified when the cluster was created is returned.
        /// </remarks>
        [JsiiProperty(name: "clusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ClusterType
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: name: The name of the cluster.The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
        /// </remarks>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Name
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: profile: The identifier of the cluster. If you set the cluster type to ManagedKubernetes, you can use cluster identifiers to distinguish clusters. Valid values:
        /// Default: managed Kubernetes cluster
        /// Serverless: ASK cluster
        /// Edge: edge Kubernetes cluster
        /// By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
        /// </remarks>
        [JsiiProperty(name: "profile", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Profile
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::CS::KubernetesClusters`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosKubernetesClustersProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.datasource.RosKubernetesClustersProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.Datasource.IRosKubernetesClustersProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: clusterSpec: The specification of the cluster. If you set the cluster type to ManagedKubernetes, you can use cluster specifications to distinguish clusters. Valid values:
            /// ack.pro.small: professional managed Kubernetes cluster
            /// ack.standard: standard managed Kubernetes cluster
            /// By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "clusterSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ClusterSpec
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: clusterType: The type of the cluster. Valid values:
            /// Kubernetes: dedicated Kubernetes cluster
            /// ManagedKubernetes: managed Kubernetes cluster, serverless Kubernetes (ASK) cluster, or edge Kubernetes cluster
            /// Ask: ASK cluster
            /// ExternalKubernetes: registered external cluster
            /// When you query an ASK cluster, the value specified when the cluster was created is returned.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "clusterType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ClusterType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: name: The name of the cluster.The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: profile: The identifier of the cluster. If you set the cluster type to ManagedKubernetes, you can use cluster identifiers to distinguish clusters. Valid values:
            /// Default: managed Kubernetes cluster
            /// Serverless: ASK cluster
            /// Edge: edge Kubernetes cluster
            /// By default, this parameter is empty. This indicates that the parameter is not used to filter clusters.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "profile", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Profile
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
