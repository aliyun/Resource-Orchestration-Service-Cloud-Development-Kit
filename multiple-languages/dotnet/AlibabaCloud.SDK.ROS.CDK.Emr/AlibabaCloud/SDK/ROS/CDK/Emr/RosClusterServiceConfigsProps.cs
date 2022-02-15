using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Emr
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::EMR::ClusterServiceConfigs`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-emr.RosClusterServiceConfigsProps")]
    public class RosClusterServiceConfigsProps : AlibabaCloud.SDK.ROS.CDK.Emr.IRosClusterServiceConfigsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: clusterId: The ID of the cluster.
        /// </remarks>
        [JsiiProperty(name: "clusterId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ClusterId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: serviceConfigs: Server configs
        /// </remarks>
        [JsiiProperty(name: "serviceConfigs", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-emr.RosClusterServiceConfigs.ServiceConfigsProperty\"}]}},\"kind\":\"array\"}}]}}")]
        public object ServiceConfigs
        {
            get;
            set;
        }
    }
}
