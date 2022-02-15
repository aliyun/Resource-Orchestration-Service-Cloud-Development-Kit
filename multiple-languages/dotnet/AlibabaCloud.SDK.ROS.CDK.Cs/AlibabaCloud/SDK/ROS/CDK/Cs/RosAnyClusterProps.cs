using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CS::AnyCluster`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cs.RosAnyClusterProps")]
    public class RosAnyClusterProps : AlibabaCloud.SDK.ROS.CDK.Cs.IRosAnyClusterProps
    {
        /// <remarks>
        /// <strong>Property</strong>: clusterConfig: Cluster config.
        /// </remarks>
        [JsiiProperty(name: "clusterConfig", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}")]
        public object ClusterConfig
        {
            get;
            set;
        }
    }
}
