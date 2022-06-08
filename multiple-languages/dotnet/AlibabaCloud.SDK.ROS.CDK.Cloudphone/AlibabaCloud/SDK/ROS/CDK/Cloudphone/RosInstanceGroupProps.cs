using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cloudphone
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CloudPhone::InstanceGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cloudphone.RosInstanceGroupProps")]
    public class RosInstanceGroupProps : AlibabaCloud.SDK.ROS.CDK.Cloudphone.IRosInstanceGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: imageId: The image id
        /// </remarks>
        [JsiiProperty(name: "imageId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ImageId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceType: instance type
        /// </remarks>
        [JsiiProperty(name: "instanceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object InstanceType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: securityGroupId: Security group to create ecs instance. For classic instance need the security group not belong to VPC, for VPC instance, please make sure the security group belong to specified VPC.
        /// </remarks>
        [JsiiProperty(name: "securityGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object SecurityGroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vSwitchId: vswitch id
        /// </remarks>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object VSwitchId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: amount: Specifies the number of ECS instances to create.Value range: 1~100
        /// Default：1
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "amount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Amount
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoPay: Whether to pay automatically, the default is true
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AutoPay
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoRenew: Whether renew the fee automatically.
        /// When the parameter InstanceChargeType is PrePaid, it will take effect.
        /// Range of value:True: automatic renewal.
        /// False: no automatic renewal. Default value is False.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoRenew", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? AutoRenew
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: chargeType: Instance internet access charge type.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ChargeType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description of instance.
        /// The length is 2~256 English or Chinese characters and cannot start with http:// and https://.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: eipBandwidth: EIP bandwidth value, the value range is 1-200.
        /// Setting this parameter will automatically create an EIP instance
        /// corresponding to the bandwidth and bind the EIP instance to the
        /// cloud phone instance. When the instance is released, this EIP
        /// instance will be released and recycled together.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "eipBandwidth", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? EipBandwidth
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceName: "Display name of the instance, [2, 128] English or Chinese characters, must
        /// start with a letter or Chinese in size, can contain numbers, "_" or ".", "-"
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? InstanceName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: keyPairName: Cloud phone instance key pair name.
        /// The cloud phone key can be imported through the ImportKeyPair interface.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "keyPairName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? KeyPairName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: period: Prepaid time period. While PeriodUnit is month, it could be 1, 2, 3, 6.
        /// While PeriodUnit is year, it could be from 1 to 5Default value is 1.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Period
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: resolution: You can use the DescribeInstanceTypes interface to query the list of
        /// resolutions supported by the current specification and select an appropriate resolution.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "resolution", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? Resolution
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: tag: Tags to attach to instance. Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tag", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-core.RosTag\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? Tag
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: vncPassword: Cloud phone VNC password.
        /// The password must be six characters long, and must contain only uppercase,
        /// lowercase English letters and Arabic numerals.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "vncPassword", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? VncPassword
        {
            get;
            set;
        }
    }
}
