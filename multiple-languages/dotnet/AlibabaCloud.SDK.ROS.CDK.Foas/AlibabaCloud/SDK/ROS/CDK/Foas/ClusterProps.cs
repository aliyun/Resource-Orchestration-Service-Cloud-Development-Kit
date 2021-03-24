using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Foas
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::FOAS::Cluster`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-foas.ClusterProps")]
    public class ClusterProps : AlibabaCloud.SDK.ROS.CDK.Foas.IClusterProps
    {
        /// <summary>Property clusterName: Cluster name.</summary>
        /// <remarks>
        /// It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
        /// </remarks>
        [JsiiProperty(name: "clusterName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ClusterName
        {
            get;
            set;
        }

        /// <summary>Property description: Cluster description.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string Description
        {
            get;
            set;
        }

        /// <summary>Property ossBucket: Bucket name in your OSS.</summary>
        [JsiiProperty(name: "ossBucket", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string OssBucket
        {
            get;
            set;
        }

        /// <summary>Property vSwitchId: VSwitch ID.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string VSwitchId
        {
            get;
            set;
        }

        /// <summary>Property order: Order detail.</summary>
        /// <remarks>
        /// Only one of property Order or OrderId can be specified.
        /// Order is not suggested.
        /// Policy AliyunBSSFullAccess must be granted to StreamDefaultRole in RAM console.
        /// The order can not be cancelled.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "order", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-foas.RosCluster.OrderProperty\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Order
        {
            get;
            set;
        }

        /// <summary>Property orderId: Order Id.</summary>
        /// <remarks>
        /// Only one of property Order or OrderId can be specified.
        /// OrderId is suggested.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "orderId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? OrderId
        {
            get;
            set;
        }
    }
}
