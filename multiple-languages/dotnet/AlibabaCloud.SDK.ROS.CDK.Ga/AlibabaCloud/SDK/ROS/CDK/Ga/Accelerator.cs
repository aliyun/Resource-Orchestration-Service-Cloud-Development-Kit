using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>A ROS resource type:  `ALIYUN::GA::Accelerator`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ga.Accelerator), fullyQualifiedName: "@alicloud/ros-cdk-ga.Accelerator", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ga.AcceleratorProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Accelerator : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::GA::Accelerator`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public Accelerator(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ga.IAcceleratorProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Accelerator(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Accelerator(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute AcceleratorId: The ID of the GA instance to query.</summary>
        [JsiiProperty(name: "attrAcceleratorId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrAcceleratorId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute AcceleratorName: The Name of the GA instance.</summary>
        [JsiiProperty(name: "attrAcceleratorName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrAcceleratorName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute AutoPay: The AutoPay of the GA instance.</summary>
        [JsiiProperty(name: "attrAutoPay", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrAutoPay
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute AutoUseCoupon: The AutoUseCoupon of the GA instance.</summary>
        [JsiiProperty(name: "attrAutoUseCoupon", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrAutoUseCoupon
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Duration: The Duration of the GA instance.</summary>
        [JsiiProperty(name: "attrDuration", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrDuration
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute OrderId: The OrderId of the GA instance.</summary>
        [JsiiProperty(name: "attrOrderId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrOrderId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PaymentType: The Payment Typethe GA instance.</summary>
        [JsiiProperty(name: "attrPaymentType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPaymentType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PricingCycle: The PricingCycle of the GA instance.</summary>
        [JsiiProperty(name: "attrPricingCycle", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPricingCycle
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Spec: The instance type of the GA instance.</summary>
        [JsiiProperty(name: "attrSpec", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrSpec
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
