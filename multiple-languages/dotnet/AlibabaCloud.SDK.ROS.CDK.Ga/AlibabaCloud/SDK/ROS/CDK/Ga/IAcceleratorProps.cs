using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>Properties for defining a `ALIYUN::GA::Accelerator`.</summary>
    [JsiiInterface(nativeType: typeof(IAcceleratorProps), fullyQualifiedName: "@alicloud/ros-cdk-ga.AcceleratorProps")]
    public interface IAcceleratorProps
    {
        /// <summary>Property duration: The Duration of the GA instance.</summary>
        [JsiiProperty(name: "duration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Duration
        {
            get;
        }

        /// <summary>Property pricingCycle: The PricingCycle of the GA instance.</summary>
        [JsiiProperty(name: "pricingCycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PricingCycle
        {
            get;
        }

        /// <summary>Property spec: The instance type of the GA instance.</summary>
        [JsiiProperty(name: "spec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Spec
        {
            get;
        }

        /// <summary>Property acceleratorName: The Name of the GA instance.</summary>
        [JsiiProperty(name: "acceleratorName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AcceleratorName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoPay: The AutoPay of the GA instance.</summary>
        [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoPay
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property autoUseCoupon: The AutoUseCoupon of the GA instance.</summary>
        [JsiiProperty(name: "autoUseCoupon", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AutoUseCoupon
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
            [JsiiProperty(name: "duration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Duration
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property pricingCycle: The PricingCycle of the GA instance.</summary>
            [JsiiProperty(name: "pricingCycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PricingCycle
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property spec: The instance type of the GA instance.</summary>
            [JsiiProperty(name: "spec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Spec
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property acceleratorName: The Name of the GA instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "acceleratorName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AcceleratorName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoPay: The AutoPay of the GA instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoPay
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property autoUseCoupon: The AutoUseCoupon of the GA instance.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "autoUseCoupon", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AutoUseCoupon
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
