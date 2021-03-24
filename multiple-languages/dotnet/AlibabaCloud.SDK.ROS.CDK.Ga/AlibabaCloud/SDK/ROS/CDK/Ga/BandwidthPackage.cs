using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ga
{
    /// <summary>A ROS resource type:  `ALIYUN::GA::BandwidthPackage`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ga.BandwidthPackage), fullyQualifiedName: "@alicloud/ros-cdk-ga.BandwidthPackage", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ga.BandwidthPackageProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class BandwidthPackage : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::GA::BandwidthPackage`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public BandwidthPackage(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ga.IBandwidthPackageProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected BandwidthPackage(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected BandwidthPackage(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute AutoPay: The AutoPay of the bandwidth.</summary>
        [JsiiProperty(name: "attrAutoPay", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrAutoPay
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute AutoUseCoupon: The AutoUseCoupon  of the bandwidth.</summary>
        [JsiiProperty(name: "attrAutoUseCoupon", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrAutoUseCoupon
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Bandwidth: The bandwidth provided by the bandwidth plan.</summary>
        [JsiiProperty(name: "attrBandwidth", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrBandwidth
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute BandwidthPackageId: The Resource ID of the bandwidth.</summary>
        [JsiiProperty(name: "attrBandwidthPackageId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrBandwidthPackageId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute BandwidthPackageName: The Resource name of the bandwidth.</summary>
        [JsiiProperty(name: "attrBandwidthPackageName", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrBandwidthPackageName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute BandwidthType: the bandwidth BandwidthType of the bandwidth.</summary>
        [JsiiProperty(name: "attrBandwidthType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrBandwidthType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute BillingType: The BillingType of the bandwidth.</summary>
        [JsiiProperty(name: "attrBillingType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrBillingType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CbnGeographicRegionIdA: The CbnGeographicRegionIdA  of the bandwidth.</summary>
        [JsiiProperty(name: "attrCbnGeographicRegionIdA", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrCbnGeographicRegionIdA
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute CbnGeographicRegionIdB: The CbnGeographicRegionIdB of the bandwidth.</summary>
        [JsiiProperty(name: "attrCbnGeographicRegionIdB", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrCbnGeographicRegionIdB
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ChargeType: The ChargeType of the bandwidth.</summary>
        [JsiiProperty(name: "attrChargeType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrChargeType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PaymentType: The Payment Type of the bandwidth.</summary>
        [JsiiProperty(name: "attrPaymentType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPaymentType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Ratio: The Ratio of the bandwidth.</summary>
        [JsiiProperty(name: "attrRatio", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrRatio
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Type: The type of the bandwidth plan.</summary>
        [JsiiProperty(name: "attrType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrType
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
