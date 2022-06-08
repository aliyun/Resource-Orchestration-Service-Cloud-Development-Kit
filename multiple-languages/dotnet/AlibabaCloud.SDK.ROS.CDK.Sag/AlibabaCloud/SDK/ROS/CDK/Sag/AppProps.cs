using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sag
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SAG::App`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sag.AppProps")]
    public class AppProps : AlibabaCloud.SDK.ROS.CDK.Sag.IAppProps
    {
        /// <summary>Property autoPay: Specifies whether to automatically pay the bills of SAG APP instances.</summary>
        /// <remarks>
        /// Default value:
        /// false. Valid values:
        /// true: automatically pays the bills of SAG APP instances.
        /// false: does not automatically pay the bills of SAG APP instances.
        /// If you set the parameter to false, after you call this operation, go to Billing Management
        /// of the SAG console to complete the payment, the instance can be created.
        /// </remarks>
        [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object AutoPay
        {
            get;
            set;
        }

        /// <summary>Property dataPlan: The quota of the traffic plan that the system allows each client account to use for free each month.</summary>
        /// <remarks>
        /// Unit: GB. Set the value to 5.
        /// Note The system allows each client account to use 5 GB traffic plan for free.
        /// </remarks>
        [JsiiProperty(name: "dataPlan", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DataPlan
        {
            get;
            set;
        }

        /// <summary>Property period: The subscription period of the SAG APP instance.</summary>
        /// <remarks>
        /// Unit: months.
        /// Valid values: 1~9, 12, 24, and 36.
        /// </remarks>
        [JsiiProperty(name: "period", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Period
        {
            get;
            set;
        }

        /// <summary>Property userCount: The quota of client accounts for the SAG APP instance.</summary>
        /// <remarks>
        /// Note The quota must be a positive multiple of 5, for example, 5, 10, and 15.
        /// </remarks>
        [JsiiProperty(name: "userCount", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object UserCount
        {
            get;
            set;
        }

        /// <summary>Property chargeType: The billing method of the SAG APP instance.</summary>
        /// <remarks>
        /// Set the value to PREPAY.
        /// This value indicates that the SAG APP instance is a subscription resource.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "chargeType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ChargeType
        {
            get;
            set;
        }
    }
}
