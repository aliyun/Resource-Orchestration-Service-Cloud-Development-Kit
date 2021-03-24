using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs
{
    /// <summary>Properties for defining a `ALIYUN::CS::AnyCluster`.</summary>
    [JsiiInterface(nativeType: typeof(IRosAnyClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosAnyClusterProps")]
    public interface IRosAnyClusterProps
    {
        /// <remarks>
        /// <strong>Property</strong>: clusterConfig: Cluster config.
        /// </remarks>
        [JsiiProperty(name: "clusterConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        object ClusterConfig
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::CS::AnyCluster`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosAnyClusterProps), fullyQualifiedName: "@alicloud/ros-cdk-cs.RosAnyClusterProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cs.IRosAnyClusterProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: clusterConfig: Cluster config.
            /// </remarks>
            [JsiiProperty(name: "clusterConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
            public object ClusterConfig
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
