using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs.Datasource
{
    /// <summary>Properties for defining a `KubernetesClusters`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-kubernetesclusters
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IKubernetesClustersProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.datasource.KubernetesClustersProps")]
    public interface IKubernetesClustersProps
    {
        /// <summary>Property clusterSpec: The specification of the cluster.</summary>
        /// <remarks>
        /// If you set the cluster type to ManagedKubernetes, you can use cluster specifications to distinguish clusters. Valid values:
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

        /// <summary>Property clusterType: The type of the cluster.</summary>
        /// <remarks>
        /// Valid values:
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

        /// <summary>Property name: The name of the cluster.The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).</summary>
        [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Name
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property profile: The identifier of the cluster.</summary>
        /// <remarks>
        /// If you set the cluster type to ManagedKubernetes, you can use cluster identifiers to distinguish clusters. Valid values:
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

        /// <summary>Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Never: Never refresh the datasource resource when the stack is updated.</description>
        /// <description>Always: Always refresh the datasource resource when the stack is updated.
        /// Default is Never.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "refreshOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RefreshOptions
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `KubernetesClusters`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cs-kubernetesclusters
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IKubernetesClustersProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.datasource.KubernetesClustersProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.Datasource.IKubernetesClustersProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property clusterSpec: The specification of the cluster.</summary>
            /// <remarks>
            /// If you set the cluster type to ManagedKubernetes, you can use cluster specifications to distinguish clusters. Valid values:
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

            /// <summary>Property clusterType: The type of the cluster.</summary>
            /// <remarks>
            /// Valid values:
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

            /// <summary>Property name: The name of the cluster.The name must be 1 to 63 characters in length, and can contain digits, letters, and hyphens (-). It cannot start with a hyphen (-).</summary>
            [JsiiOptional]
            [JsiiProperty(name: "name", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Name
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property profile: The identifier of the cluster.</summary>
            /// <remarks>
            /// If you set the cluster type to ManagedKubernetes, you can use cluster identifiers to distinguish clusters. Valid values:
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

            /// <summary>Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>Never: Never refresh the datasource resource when the stack is updated.</description>
            /// <description>Always: Always refresh the datasource resource when the stack is updated.
            /// Default is Never.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "refreshOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RefreshOptions
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
