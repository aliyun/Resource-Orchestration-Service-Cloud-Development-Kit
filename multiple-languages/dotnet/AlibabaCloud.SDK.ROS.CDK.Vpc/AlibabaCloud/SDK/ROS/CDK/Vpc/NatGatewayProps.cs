using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vpc
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::VPC::NatGateway`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-vpc.NatGatewayProps")]
    public class NatGatewayProps : AlibabaCloud.SDK.ROS.CDK.Vpc.INatGatewayProps
    {
        /// <summary>Property vpcId: The VPC id to create NAT gateway.</summary>
        [JsiiProperty(name: "vpcId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object VpcId
        {
            get;
            set;
        }

        /// <summary>Property vSwitchId: The VSwitch id to create NAT gateway.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object VSwitchId
        {
            get;
            set;
        }

        /// <summary>Property autoPay: Specifies whether to enable automatic payment.</summary>
        /// <remarks>
        /// Default is false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AutoPay
        {
            get;
            set;
        }

        /// <summary>Property deletionForce: Whether force delete the relative snat and dnat entries in the net gateway and unbind eips.</summary>
        /// <remarks>
        /// Default value is false.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deletionForce", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? DeletionForce
        {
            get;
            set;
        }

        /// <summary>Property deletionProtection: Whether to enable deletion protection.</summary>
        /// <remarks>
        /// Default to False.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "deletionProtection", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? DeletionProtection
        {
            get;
            set;
        }

        /// <summary>Property description: Description of the NAT gateway, [2, 256] characters.</summary>
        /// <remarks>
        /// Do not fill or empty, the default is empty.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Description
        {
            get;
            set;
        }

        /// <summary>Property duration: The subscription duration.</summary>
        /// <remarks>
        /// While choose by pay by month, it could be from 1 to 9 or 12, 24, 36. While choose pay by year, it could be from 1 to 3.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "duration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Duration
        {
            get;
            set;
        }

        /// <summary>Property instanceChargeType: The billing method.</summary>
        /// <remarks>
        /// The default value is PostPaid (which means pay-as-you-go).
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? InstanceChargeType
        {
            get;
            set;
        }

        /// <summary>Property internetChargeType: The billing method for the NAT gateway.</summary>
        /// <remarks>
        /// Valid values:
        /// PayBySpec: billed on a pay-by-specification basis.
        /// PayByLcu: billed on a pay-by-LCU basis.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "internetChargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? InternetChargeType
        {
            get;
            set;
        }

        /// <summary>Property natGatewayName: Display name of the NAT gateway, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "natGatewayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? NatGatewayName
        {
            get;
            set;
        }

        /// <summary>Property natType: The type of the NAT gateway.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>Enhanced: enhanced NAT gateway.</description>
        /// </list>
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "natType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? NatType
        {
            get;
            set;
        }

        /// <summary>Property pricingCycle: Price cycle of the resource.</summary>
        /// <remarks>
        /// This property has no default value.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "pricingCycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? PricingCycle
        {
            get;
            set;
        }

        /// <summary>Property spec: NAT gateway specification.</summary>
        /// <remarks>
        /// Now support 'Small|Middle|Large|XLarge.1'
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "spec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Spec
        {
            get;
            set;
        }

        /// <summary>Property tags: Tags to attach to natgateway.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create natgateway. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-vpc.RosNatGateway.TagsProperty\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public AlibabaCloud.SDK.ROS.CDK.Vpc.RosNatGateway.ITagsProperty[]? Tags
        {
            get;
            set;
        }
    }
}
