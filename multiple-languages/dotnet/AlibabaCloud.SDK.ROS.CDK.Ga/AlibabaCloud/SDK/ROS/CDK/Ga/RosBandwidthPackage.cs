using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>A ROS template type:  `ALIYUN::GA::BandwidthPackage`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ga.RosBandwidthPackage), fullyQualifiedName: "@alicloud/ros-cdk-ga.RosBandwidthPackage", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ga.RosBandwidthPackageProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosBandwidthPackage : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::GA::BandwidthPackage`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosBandwidthPackage(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ga.IRosBandwidthPackageProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosBandwidthPackage(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosBandwidthPackage(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]", isOverride: true)]
        protected override System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>The resource type name for this resource class.</summary>
        [JsiiProperty(name: "ROS_RESOURCE_TYPE_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string ROS_RESOURCE_TYPE_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Ga.RosBandwidthPackage))!;

        /// <remarks>
        /// <strong>Attribute</strong>: AutoPay: The AutoPay of the bandwidth
        /// </remarks>
        [JsiiProperty(name: "attrAutoPay", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrAutoPay
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: AutoUseCoupon: The AutoUseCoupon  of the bandwidth
        /// </remarks>
        [JsiiProperty(name: "attrAutoUseCoupon", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrAutoUseCoupon
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: Bandwidth: The bandwidth provided by the bandwidth plan.
        /// </remarks>
        [JsiiProperty(name: "attrBandwidth", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrBandwidth
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: BandwidthPackageId: The Resource ID of the bandwidth
        /// </remarks>
        [JsiiProperty(name: "attrBandwidthPackageId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrBandwidthPackageId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: BandwidthPackageName: The Resource name of the bandwidth
        /// </remarks>
        [JsiiProperty(name: "attrBandwidthPackageName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrBandwidthPackageName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: BandwidthType: the bandwidth BandwidthType of the bandwidth
        /// </remarks>
        [JsiiProperty(name: "attrBandwidthType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrBandwidthType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: BillingType: The BillingType of the bandwidth
        /// </remarks>
        [JsiiProperty(name: "attrBillingType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrBillingType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: CbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
        /// </remarks>
        [JsiiProperty(name: "attrCbnGeographicRegionIdA", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrCbnGeographicRegionIdA
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: CbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
        /// </remarks>
        [JsiiProperty(name: "attrCbnGeographicRegionIdB", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrCbnGeographicRegionIdB
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ChargeType: The ChargeType of the bandwidth
        /// </remarks>
        [JsiiProperty(name: "attrChargeType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrChargeType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: PaymentType: The Payment Type of the bandwidth
        /// </remarks>
        [JsiiProperty(name: "attrPaymentType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPaymentType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: Ratio: The Ratio of the bandwidth
        /// </remarks>
        [JsiiProperty(name: "attrRatio", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrRatio
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: Type: The type of the bandwidth plan
        /// </remarks>
        [JsiiProperty(name: "attrType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrType
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: bandwidth: The bandwidth provided by the bandwidth plan.
        /// </remarks>
        [JsiiProperty(name: "bandwidth", typeJson: "{\"primitive\":\"number\"}")]
        public virtual double Bandwidth
        {
            get => GetInstanceProperty<double>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: type: The type of the bandwidth plan
        /// </remarks>
        [JsiiProperty(name: "type", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string Type
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: autoPay: The AutoPay of the bandwidth
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoPay", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? AutoPay
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: autoUseCoupon: The AutoUseCoupon  of the bandwidth
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoUseCoupon", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? AutoUseCoupon
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: bandwidthType: the bandwidth BandwidthType of the bandwidth
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "bandwidthType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? BandwidthType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: billingType: The BillingType of the bandwidth
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "billingType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? BillingType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: cbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "cbnGeographicRegionIdA", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? CbnGeographicRegionIdA
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: cbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "cbnGeographicRegionIdB", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? CbnGeographicRegionIdB
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: chargeType: The ChargeType of the bandwidth
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "chargeType", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? ChargeType
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: duration:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "duration", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? Duration
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: pricingCycle:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "pricingCycle", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? PricingCycle
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: ratio: The Ratio of the bandwidth
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ratio", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? Ratio
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }
    }
}
