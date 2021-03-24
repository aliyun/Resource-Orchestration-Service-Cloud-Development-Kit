using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>Properties for defining a `ALIYUN::GA::Accelerator`.</summary>
    [JsiiInterface(nativeType: typeof(IRosAcceleratorProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosAcceleratorProps")]
    public interface IRosAcceleratorProps
    {
        /// <remarks>
        /// <strong>Property</strong>: duration: The Duration of the GA instance
        /// </remarks>
        [JsiiProperty(name: "duration", typeJson: "{\"primitive\":\"string\"}")]
        string Duration
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: pricingCycle: The PricingCycle of the GA instance.
        /// </remarks>
        [JsiiProperty(name: "pricingCycle", typeJson: "{\"primitive\":\"string\"}")]
        string PricingCycle
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: spec: The instance type of the GA instance
        /// </remarks>
        [JsiiProperty(name: "spec", typeJson: "{\"primitive\":\"string\"}")]
        string Spec
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: acceleratorName: The Name of the GA instance
        /// </remarks>
        [JsiiProperty(name: "acceleratorName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AcceleratorName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: autoPay: The AutoPay of the GA instance.
        /// </remarks>
        [JsiiProperty(name: "autoPay", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AutoPay
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: autoUseCoupon: The AutoUseCoupon of the GA instance.
        /// </remarks>
        [JsiiProperty(name: "autoUseCoupon", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AutoUseCoupon
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::GA::Accelerator`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosAcceleratorProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosAcceleratorProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.IRosAcceleratorProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: duration: The Duration of the GA instance
            /// </remarks>
            [JsiiProperty(name: "duration", typeJson: "{\"primitive\":\"string\"}")]
            public string Duration
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: pricingCycle: The PricingCycle of the GA instance.
            /// </remarks>
            [JsiiProperty(name: "pricingCycle", typeJson: "{\"primitive\":\"string\"}")]
            public string PricingCycle
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: spec: The instance type of the GA instance
            /// </remarks>
            [JsiiProperty(name: "spec", typeJson: "{\"primitive\":\"string\"}")]
            public string Spec
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: acceleratorName: The Name of the GA instance
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "acceleratorName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AcceleratorName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: autoPay: The AutoPay of the GA instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoPay", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AutoPay
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: autoUseCoupon: The AutoUseCoupon of the GA instance.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "autoUseCoupon", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AutoUseCoupon
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
