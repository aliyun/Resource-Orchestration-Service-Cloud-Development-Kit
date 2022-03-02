using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Tsdb
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::TSDB::HiTSDBInstance`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-tsdb.RosHiTSDBInstanceProps")]
    public class RosHiTSDBInstanceProps : AlibabaCloud.SDK.ROS.CDK.Tsdb.IRosHiTSDBInstanceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceClass: The type of the instance. For more information, see Instance types:
        /// tsdb.1x.basic: Basic Edition I
        /// tsdb.3x.basic: Basic Edition II
        /// tsdb.4x.basic: Basic Edition III
        /// tsdb.12x.standard: Standard Edition I
        /// tsdb.24x.standard: Standard Edition II
        /// tsdb.48x.large: Ultimate Edition I
        /// tsdb.96x.large: Ultimate Edition II and so on.
        /// </remarks>
        [JsiiProperty(name: "instanceClass", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object InstanceClass
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceStorage: The storage capacity of the instance. Unit: GB. For example, the value 50 indicates 50 GB.
        /// </remarks>
        [JsiiProperty(name: "instanceStorage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object InstanceStorage
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vpcId: The ID of the virtual private cloud (VPC) that is connected to the instance.
        /// </remarks>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object VpcId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: The ID of the VSwitch in the specified VPC.
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object VSwitchId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: The zone ID of the instance.
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ZoneId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: diskCategory: The category of disk.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "diskCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DiskCategory
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: duration: The validity period of the instance. This parameter is valid only when the PayType parameter is set to PREPAY. Default value: 1.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "duration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Duration
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceAlias: The alias of the instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? InstanceAlias
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: payType: The billing method. Valid values: POSTPAY and PREPAY. The POSTPAY value indicates the pay-as-you-go method, and the PREPAY value indicates the subscription method. Default POSTPAY
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "payType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PayType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: pricingCycle: The unit of the validity period. This parameter is valid only when the PayType parameter is set to PREPAY. Default value: Month.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "pricingCycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? PricingCycle
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: securityIpList: List of the IP patterns.For example, ["127.0.0.1", "192.168.0.1/24"]
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "securityIpList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? SecurityIpList
        {
            get;
            set;
        }
    }
}
