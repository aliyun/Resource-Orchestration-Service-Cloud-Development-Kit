using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>Properties for defining a `ALIYUN::GA::Accelerator`.</summary>
    [JsiiInterface(nativeType: typeof(IAcceleratorProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.AcceleratorProps")]
    public interface IAcceleratorProps
    {
        /// <summary>Property duration: The Duration of the GA instance.</summary>
        [JsiiProperty(name: "duration", typeJson: "{\"primitive\":\"string\"}")]
        string Duration
        {
            get;
        }

        /// <summary>Property pricingCycle: The PricingCycle of the GA instance.</summary>
        [JsiiProperty(name: "pricingCycle", typeJson: "{\"primitive\":\"string\"}")]
        string PricingCycle
        {
            get;
        }

        /// <summary>Property spec: The instance type of the GA instance.</summary>
        [JsiiProperty(name: "spec", typeJson: "{\"primitive\":\"string\"}")]
        string Spec
        {
            get;
        }

        /// <summary>Property acceleratorName: The Name of the GA instance.</summary>
        [JsiiProperty(name: "acceleratorName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AcceleratorName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoPay: The AutoPay of the GA instance.</summary>
        [JsiiProperty(name: "autoPay", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? AutoPay
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoUseCoupon: The AutoUseCoupon of the GA instance.</summary>
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
        [JsiiTypeProxy(nativeType: typeof(IAcceleratorProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.AcceleratorProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.IAcceleratorProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property duration: The Duration of the GA instance.</summary>
            [JsiiProperty(name: "duration", typeJson: "{\"primitive\":\"string\"}")]
            public string Duration
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property pricingCycle: The PricingCycle of the GA instance.</summary>
            [JsiiProperty(name: "pricingCycle", typeJson: "{\"primitive\":\"string\"}")]
            public string PricingCycle
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property spec: The instance type of the GA instance.</summary>
            [JsiiProperty(name: "spec", typeJson: "{\"primitive\":\"string\"}")]
            public string Spec
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property acceleratorName: The Name of the GA instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "acceleratorName", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AcceleratorName
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property autoPay: The AutoPay of the GA instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoPay", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AutoPay
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property autoUseCoupon: The AutoUseCoupon of the GA instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoUseCoupon", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? AutoUseCoupon
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
