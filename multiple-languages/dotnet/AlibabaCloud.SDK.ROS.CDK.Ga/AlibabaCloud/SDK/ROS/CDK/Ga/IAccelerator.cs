using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>Represents a `Accelerator`.</summary>
    [JsiiInterface(nativeType: typeof(IAccelerator), fullyQualifiedName: "@alicloud/ros-cdk-ga.IAccelerator")]
    public interface IAccelerator : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AcceleratorId: The ID of the GA instance to query.</summary>
        [JsiiProperty(name: "attrAcceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAcceleratorId
        {
            get;
        }

        /// <summary>Attribute AcceleratorName: The Name of the GA instance.</summary>
        [JsiiProperty(name: "attrAcceleratorName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAcceleratorName
        {
            get;
        }

        /// <summary>Attribute AutoPay: The AutoPay of the GA instance.</summary>
        [JsiiProperty(name: "attrAutoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAutoPay
        {
            get;
        }

        /// <summary>Attribute AutoUseCoupon: The AutoUseCoupon of the GA instance.</summary>
        [JsiiProperty(name: "attrAutoUseCoupon", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAutoUseCoupon
        {
            get;
        }

        /// <summary>Attribute DnsName: The DNS name of the accelerator.</summary>
        [JsiiProperty(name: "attrDnsName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDnsName
        {
            get;
        }

        /// <summary>Attribute Duration: The Duration of the GA instance.</summary>
        [JsiiProperty(name: "attrDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDuration
        {
            get;
        }

        /// <summary>Attribute OrderId: The OrderId of the GA instance.</summary>
        [JsiiProperty(name: "attrOrderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOrderId
        {
            get;
        }

        /// <summary>Attribute PaymentType: The Payment Typethe GA instance.</summary>
        [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPaymentType
        {
            get;
        }

        /// <summary>Attribute PricingCycle: The PricingCycle of the GA instance.</summary>
        [JsiiProperty(name: "attrPricingCycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPricingCycle
        {
            get;
        }

        /// <summary>Attribute Spec: The instance type of the GA instance.</summary>
        [JsiiProperty(name: "attrSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSpec
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ga.AcceleratorProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Ga.IAcceleratorProps Props
        {
            get;
        }

        /// <summary>Represents a `Accelerator`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAccelerator), fullyQualifiedName: "@alicloud/ros-cdk-ga.IAccelerator")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ga.IAccelerator
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AcceleratorId: The ID of the GA instance to query.</summary>
            [JsiiProperty(name: "attrAcceleratorId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAcceleratorId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AcceleratorName: The Name of the GA instance.</summary>
            [JsiiProperty(name: "attrAcceleratorName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAcceleratorName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AutoPay: The AutoPay of the GA instance.</summary>
            [JsiiProperty(name: "attrAutoPay", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAutoPay
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AutoUseCoupon: The AutoUseCoupon of the GA instance.</summary>
            [JsiiProperty(name: "attrAutoUseCoupon", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAutoUseCoupon
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute DnsName: The DNS name of the accelerator.</summary>
            [JsiiProperty(name: "attrDnsName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDnsName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Duration: The Duration of the GA instance.</summary>
            [JsiiProperty(name: "attrDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDuration
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OrderId: The OrderId of the GA instance.</summary>
            [JsiiProperty(name: "attrOrderId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOrderId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PaymentType: The Payment Typethe GA instance.</summary>
            [JsiiProperty(name: "attrPaymentType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPaymentType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PricingCycle: The PricingCycle of the GA instance.</summary>
            [JsiiProperty(name: "attrPricingCycle", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPricingCycle
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Spec: The instance type of the GA instance.</summary>
            [JsiiProperty(name: "attrSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSpec
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-ga.AcceleratorProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Ga.IAcceleratorProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Ga.IAcceleratorProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
