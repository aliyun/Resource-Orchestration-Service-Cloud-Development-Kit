using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Searchengine
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SearchEngine::Instance`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-searchengine.RosInstanceProps")]
    public class RosInstanceProps : AlibabaCloud.SDK.ROS.CDK.Searchengine.IRosInstanceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: chargeType: The billing method. Valid values: POSTPAY.
        /// POSTPAY: pay-as-you-go.
        /// </remarks>
        [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ChargeType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: password: The password of instance. It consists of lowercase letters and numbers, and the length is 6-8 characters.
        /// </remarks>
        [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Password
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: qrsNum: The number of query nodes.
        /// </remarks>
        [JsiiProperty(name: "qrsNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object QrsNum
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: qrsSpec: The specification of query nodes.
        /// </remarks>
        [JsiiProperty(name: "qrsSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object QrsSpec
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: searcherDocSize: The storage size of single data node.
        /// </remarks>
        [JsiiProperty(name: "searcherDocSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SearcherDocSize
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: searcherNum: The number of data nodes.
        /// </remarks>
        [JsiiProperty(name: "searcherNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SearcherNum
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: searcherSpec: The specification of data nodes.
        /// </remarks>
        [JsiiProperty(name: "searcherSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SearcherSpec
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: userName: The user name of instance. Begin with a letter, support upper and lower case letters, numbers, underscores, length 1-30 characters.
        /// </remarks>
        [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object UserName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The ID of VPC.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object VpcId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: The ID of vSwitch.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object VSwitchId
        {
            get;
            set;
        }
    }
}
