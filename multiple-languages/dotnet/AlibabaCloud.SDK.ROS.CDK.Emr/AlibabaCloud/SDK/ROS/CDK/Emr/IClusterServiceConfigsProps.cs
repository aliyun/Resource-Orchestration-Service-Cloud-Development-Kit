using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Emr
{
    /// <summary>Properties for defining a `ALIYUN::EMR::ClusterServiceConfigs`.</summary>
    [JsiiInterface(nativeType: typeof(IClusterServiceConfigsProps), fullyQualifiedName: "@alicloud/ros-cdk-emr.ClusterServiceConfigsProps")]
    public interface IClusterServiceConfigsProps
    {
        /// <summary>Property clusterId: The ID of the cluster.</summary>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ClusterId
        {
            get;
        }

        /// <summary>Property serviceConfigs: Server configs.</summary>
        [JsiiProperty(name: "serviceConfigs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosClusterServiceConfigs.ServiceConfigsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        object ServiceConfigs
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::EMR::ClusterServiceConfigs`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IClusterServiceConfigsProps), fullyQualifiedName: "@alicloud/ros-cdk-emr.ClusterServiceConfigsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Emr.IClusterServiceConfigsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property clusterId: The ID of the cluster.</summary>
            [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ClusterId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property serviceConfigs: Server configs.</summary>
            [JsiiProperty(name: "serviceConfigs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosClusterServiceConfigs.ServiceConfigsProperty\"}]}},\"kind\":\"array\"}}]}}")]
            public object ServiceConfigs
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
