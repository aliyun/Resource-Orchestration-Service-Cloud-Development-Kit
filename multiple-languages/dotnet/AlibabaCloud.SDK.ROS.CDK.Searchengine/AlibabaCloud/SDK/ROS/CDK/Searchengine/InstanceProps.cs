using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Searchengine
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SearchEngine::Instance`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-searchengine.InstanceProps")]
    public class InstanceProps : AlibabaCloud.SDK.ROS.CDK.Searchengine.IInstanceProps
    {
        /// <summary>Property chargeType: The billing method.</summary>
        /// <remarks>
        /// Valid values: POSTPAY.
        /// POSTPAY: pay-as-you-go.
        /// </remarks>
        [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ChargeType
        {
            get;
            set;
        }

        /// <summary>Property password: The password of instance.</summary>
        /// <remarks>
        /// It consists of lowercase letters and numbers, and the length is 6-8 characters.
        /// </remarks>
        [JsiiProperty(name: "password", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Password
        {
            get;
            set;
        }

        /// <summary>Property qrsNum: The number of query nodes.</summary>
        [JsiiProperty(name: "qrsNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object QrsNum
        {
            get;
            set;
        }

        /// <summary>Property qrsSpec: The specification of query nodes.</summary>
        [JsiiProperty(name: "qrsSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object QrsSpec
        {
            get;
            set;
        }

        /// <summary>Property searcherDocSize: The storage size of single data node.</summary>
        [JsiiProperty(name: "searcherDocSize", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SearcherDocSize
        {
            get;
            set;
        }

        /// <summary>Property searcherNum: The number of data nodes.</summary>
        [JsiiProperty(name: "searcherNum", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SearcherNum
        {
            get;
            set;
        }

        /// <summary>Property searcherSpec: The specification of data nodes.</summary>
        [JsiiProperty(name: "searcherSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SearcherSpec
        {
            get;
            set;
        }

        /// <summary>Property userName: The user name of instance.</summary>
        /// <remarks>
        /// Begin with a letter, support upper and lower case letters, numbers, underscores, length 1-30 characters.
        /// </remarks>
        [JsiiProperty(name: "userName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object UserName
        {
            get;
            set;
        }

        /// <summary>Property vpcId: The ID of VPC.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object VpcId
        {
            get;
            set;
        }

        /// <summary>Property vSwitchId: The ID of vSwitch.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object VSwitchId
        {
            get;
            set;
        }
    }
}
