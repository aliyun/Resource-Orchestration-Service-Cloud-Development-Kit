using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Foas
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::FOAS::Cluster`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-foas.RosClusterProps")]
    public class RosClusterProps : AlibabaCloud.SDK.ROS.CDK.Foas.IRosClusterProps
    {
        /// <remarks>
        /// <strong>Property</strong>: clusterName: Cluster name. It begins with a letter, and contains only lowercase English letters, numbers, underscores (_), and is limited to 3-64 characters.
        /// </remarks>
        [JsiiProperty(name: "clusterName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ClusterName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Cluster description.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: ossBucket: Bucket name in your OSS.
        /// </remarks>
        [JsiiProperty(name: "ossBucket", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object OssBucket
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: VSwitch ID.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object VSwitchId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: order: Order detail. Only one of property Order or OrderId can be specified.
        /// Order is not suggested.
        /// Policy AliyunBSSFullAccess must be granted to StreamDefaultRole in RAM console.
        /// The order can not be cancelled.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "order", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-foas.RosCluster.OrderProperty\"}]}}", isOptional: true)]
        public object? Order
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: orderId: Order Id. Only one of property Order or OrderId can be specified.
        /// OrderId is suggested.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "orderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? OrderId
        {
            get;
            set;
        }
    }
}
