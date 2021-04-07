using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::GA::Accelerator`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ga.RosAcceleratorProps")]
    public class RosAcceleratorProps : AlibabaCloud.SDK.ROS.CDK.Ga.IRosAcceleratorProps
    {
        /// <remarks>
        /// <strong>Property</strong>: duration: The Duration of the GA instance
        /// </remarks>
        [JsiiProperty(name: "duration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Duration
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: pricingCycle: The PricingCycle of the GA instance.
        /// </remarks>
        [JsiiProperty(name: "pricingCycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object PricingCycle
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: spec: The instance type of the GA instance
        /// </remarks>
        [JsiiProperty(name: "spec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Spec
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: acceleratorName: The Name of the GA instance
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "acceleratorName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AcceleratorName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoPay: The AutoPay of the GA instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AutoPay
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: autoUseCoupon: The AutoUseCoupon of the GA instance.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoUseCoupon", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? AutoUseCoupon
        {
            get;
            set;
        }
    }
}
