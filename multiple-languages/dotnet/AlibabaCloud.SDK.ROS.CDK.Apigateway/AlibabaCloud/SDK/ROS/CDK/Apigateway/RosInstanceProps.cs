using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ApiGateway::Instance`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-apigateway.RosInstanceProps")]
    public class RosInstanceProps : AlibabaCloud.SDK.ROS.CDK.Apigateway.IRosInstanceProps
    {
        /// <remarks>
        /// <strong>Property</strong>: httpsPolicy: HTTPS security policy. Valid values: HTTPS2_TLS1_0, HTTPS2_TLS1_2, HTTPS1_1_TLS1_0
        /// </remarks>
        [JsiiProperty(name: "httpsPolicy", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string HttpsPolicy
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceName: Instance name
        /// </remarks>
        [JsiiProperty(name: "instanceName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string InstanceName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceSpec: Instance specification. For example: api.s1.small
        /// </remarks>
        [JsiiProperty(name: "instanceSpec", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string InstanceSpec
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: zoneId: Zone to which the instance belongs. For example: cn-beijing-MAZ2(f,g).
        /// Pleas call DescribeZones to get supported zone list.
        /// </remarks>
        [JsiiProperty(name: "zoneId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ZoneId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoPay: Indicates whether automatic payment is enabled. Valid values:false: Automatic payment is disabled. You need to go to Orders to make the payment once an order is generated. true: Automatic payment is enabled. The payment is automatically made.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AutoPay
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: chargeType: The billing method of the router interface. Valid values: PrePaid (Subscription), PostPaid (default, Pay-As-You-Go). Default value: PostPaid.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "chargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ChargeType
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: duration: Prepaid time period. It could be from 1 to 9 when PricingCycle is Month, or 1 to 3 when PricingCycle is Year. Default value is 3.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "duration", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? Duration
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: pricingCycle: Unit of the payment cycle. It could be Month (default) or Year.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "pricingCycle", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? PricingCycle
        {
            get;
            set;
        }
    }
}
