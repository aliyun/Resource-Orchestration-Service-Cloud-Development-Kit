using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs
{
    /// <summary>Properties for defining a `ALIYUN::CS::ClusterApplication`.</summary>
    [JsiiInterface(nativeType: typeof(IClusterApplicationProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.ClusterApplicationProps")]
    public interface IClusterApplicationProps
    {
        /// <summary>Property clusterId: The ID of the kubernetes cluster.</summary>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClusterId
        {
            get;
        }

        /// <summary>Property yamlContent: The yaml content of application.</summary>
        [JsiiProperty(name: "yamlContent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object YamlContent
        {
            get;
        }

        /// <summary>Property defaultNamespace: The default namespace for the application, default value is default.</summary>
        /// <remarks>
        /// If a namespace is defined in yaml metadata, its priority is higher than DefaultNamespace.
        /// </remarks>
        [JsiiProperty(name: "defaultNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DefaultNamespace
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property defaultNamespaceDeletion: Whether to delete the namespace specified by DefaultNamespace.</summary>
        /// <remarks>
        /// If DefaultNamespace is in ('default', 'kube-node-lease', 'kube-public', 'kube-system', 'arms-prom'), no matter whether DefaultNamespaceDeletion is true or not, it will not be deleted.
        /// </remarks>
        [JsiiProperty(name: "defaultNamespaceDeletion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? DefaultNamespaceDeletion
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::CS::ClusterApplication`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IClusterApplicationProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.ClusterApplicationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.IClusterApplicationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property clusterId: The ID of the kubernetes cluster.</summary>
            [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property yamlContent: The yaml content of application.</summary>
            [JsiiProperty(name: "yamlContent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object YamlContent
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property defaultNamespace: The default namespace for the application, default value is default.</summary>
            /// <remarks>
            /// If a namespace is defined in yaml metadata, its priority is higher than DefaultNamespace.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "defaultNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DefaultNamespace
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property defaultNamespaceDeletion: Whether to delete the namespace specified by DefaultNamespace.</summary>
            /// <remarks>
            /// If DefaultNamespace is in ('default', 'kube-node-lease', 'kube-public', 'kube-system', 'arms-prom'), no matter whether DefaultNamespaceDeletion is true or not, it will not be deleted.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "defaultNamespaceDeletion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DefaultNamespaceDeletion
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
