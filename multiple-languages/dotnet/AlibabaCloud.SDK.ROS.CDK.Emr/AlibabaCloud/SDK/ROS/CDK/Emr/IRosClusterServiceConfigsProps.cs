using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Emr
{
    /// <summary>Properties for defining a `RosClusterServiceConfigs`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-clusterserviceconfigs
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosClusterServiceConfigsProps), fullyQualifiedName: "@alicloud/ros-cdk-emr.RosClusterServiceConfigsProps")]
    public interface IRosClusterServiceConfigsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: clusterId: The ID of the cluster.
        /// </remarks>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClusterId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceConfigs: Server configs
        /// </remarks>
        [JsiiProperty(name: "serviceConfigs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosClusterServiceConfigs.ServiceConfigsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object ServiceConfigs
        {
            get;
        }

        /// <summary>Properties for defining a `RosClusterServiceConfigs`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-clusterserviceconfigs
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosClusterServiceConfigsProps), fullyQualifiedName: "@alicloud/ros-cdk-emr.RosClusterServiceConfigsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Emr.IRosClusterServiceConfigsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: clusterId: The ID of the cluster.
            /// </remarks>
            [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: serviceConfigs: Server configs
            /// </remarks>
            [JsiiProperty(name: "serviceConfigs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosClusterServiceConfigs.ServiceConfigsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object ServiceConfigs
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
