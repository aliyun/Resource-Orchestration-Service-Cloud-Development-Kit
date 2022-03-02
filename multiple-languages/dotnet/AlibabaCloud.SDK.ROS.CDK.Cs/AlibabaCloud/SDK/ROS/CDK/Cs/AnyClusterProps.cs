using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cs
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CS::AnyCluster`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cs.AnyClusterProps")]
    public class AnyClusterProps : AlibabaCloud.SDK.ROS.CDK.Cs.IAnyClusterProps
    {
        /// <summary>Property clusterConfig: Cluster config.</summary>
        [JsiiProperty(name: "clusterConfig", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ClusterConfig
        {
            get;
            set;
        }
    }
}
