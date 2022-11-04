using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs
{
    /// <summary>Properties for defining a `ALIYUN::CS::ClusterApplication`.</summary>
    [JsiiInterface(nativeType: typeof(IRosClusterApplicationProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosClusterApplicationProps")]
    public interface IRosClusterApplicationProps
    {
        /// <remarks>
        /// <strong>Property</strong>: clusterId: The ID of the kubernetes cluster.
        /// </remarks>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClusterId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: yamlContent: The yaml content of application.
        /// </remarks>
        [JsiiProperty(name: "yamlContent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object YamlContent
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: defaultNamespace: The default namespace for the application, default value is default.
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

        /// <summary>Properties for defining a `ALIYUN::CS::ClusterApplication`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosClusterApplicationProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosClusterApplicationProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.IRosClusterApplicationProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: clusterId: The ID of the kubernetes cluster.
            /// </remarks>
            [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: yamlContent: The yaml content of application.
            /// </remarks>
            [JsiiProperty(name: "yamlContent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object YamlContent
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: defaultNamespace: The default namespace for the application, default value is default.
            /// If a namespace is defined in yaml metadata, its priority is higher than DefaultNamespace.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "defaultNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? DefaultNamespace
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
