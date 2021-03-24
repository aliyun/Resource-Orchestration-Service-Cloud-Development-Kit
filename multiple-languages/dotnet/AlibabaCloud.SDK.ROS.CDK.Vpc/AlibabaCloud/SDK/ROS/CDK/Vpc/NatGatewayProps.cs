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
        [JsiiProperty(name: "vpcId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string VpcId
        {
            get;
            set;
        }

        /// <summary>Property vSwitchId: The VSwitch id to create NAT gateway.</summary>
        [JsiiProperty(name: "vSwitchId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string VSwitchId
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
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <summary>Property duration: The subscription duration.</summary>
        /// <remarks>
        /// While choose by pay by month, it could be from 1 to 9. While choose pay by year, it could be from 1 to 3.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "duration", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Duration
        {
            get;
            set;
        }

        /// <summary>Property instanceChargeType: The billing method.</summary>
        /// <remarks>
        /// The default value is PostPaid (which means pay-as-you-go).
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? InstanceChargeType
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
        [JsiiProperty(name: "internetChargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? InternetChargeType
        {
            get;
            set;
        }

        /// <summary>Property natGatewayName: Display name of the NAT gateway, [2, 128] English or Chinese characters, must start with a letter or Chinese in size, can contain numbers, '_' or '.', '-'.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "natGatewayName", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? NatGatewayName
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
        [JsiiProperty(name: "natType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? NatType
        {
            get;
            set;
        }

        /// <summary>Property pricingCycle: Price cycle of the resource.</summary>
        /// <remarks>
        /// This property has no default value.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "pricingCycle", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PricingCycle
        {
            get;
            set;
        }

        /// <summary>Property spec: NAT gateway specification.</summary>
        /// <remarks>
        /// Now support 'Small|Middle|Large|XLarge.1'
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "spec", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Spec
        {
            get;
            set;
        }

        /// <summary>Property tags: Tags to attach to natgateway.</summary>
        /// <remarks>
        /// Max support 20 tags to add during create natgateway. Each tag with two properties Key and Value, and Key is required.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "tags", typeJson: "{\"collection\":{\"elementtype\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public System.Collections.Generic.IDictionary<string, object>[]? Tags
        {
            get;
            set;
        }
    }
}
