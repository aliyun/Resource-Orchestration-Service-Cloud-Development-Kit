using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::GA::Accelerator`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ga.AcceleratorProps")]
    public class AcceleratorProps : AlibabaCloud.SDK.ROS.CDK.Ga.IAcceleratorProps
    {
        /// <summary>Property duration: The Duration of the GA instance.</summary>
        [JsiiProperty(name: "duration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Duration
        {
            get;
            set;
        }

        /// <summary>Property pricingCycle: The PricingCycle of the GA instance.</summary>
        [JsiiProperty(name: "pricingCycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object PricingCycle
        {
            get;
            set;
        }

        /// <summary>Property spec: The instance type of the GA instance.</summary>
        [JsiiProperty(name: "spec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Spec
        {
            get;
            set;
        }

        /// <summary>Property acceleratorName: The Name of the GA instance.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "acceleratorName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AcceleratorName
        {
            get;
            set;
        }

        /// <summary>Property autoPay: The AutoPay of the GA instance.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AutoPay
        {
            get;
            set;
        }

        /// <summary>Property autoUseCoupon: The AutoUseCoupon of the GA instance.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "autoUseCoupon", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AutoUseCoupon
        {
            get;
            set;
        }
    }
}
