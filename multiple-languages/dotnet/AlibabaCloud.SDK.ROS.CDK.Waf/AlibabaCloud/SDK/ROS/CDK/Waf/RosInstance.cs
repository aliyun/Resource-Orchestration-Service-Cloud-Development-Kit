using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Waf
{
    /// <summary>A ROS template type:  `ALIYUN::WAF::Instance`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Waf.RosInstance), fullyQualifiedName: "@alicloud/ros-cdk-waf.RosInstance", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-waf.RosInstanceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosInstance : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::WAF::Instance`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosInstance(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Waf.IRosInstanceProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosInstance(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosInstance(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Waf.RosInstance))!;

        /// <remarks>
        /// <strong>Attribute</strong>: EndDate: Due date of the instance
        /// </remarks>
        [JsiiProperty(name: "attrEndDate", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrEndDate
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: InDebt: Instance is overdue
        /// </remarks>
        [JsiiProperty(name: "attrInDebt", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInDebt
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: InstanceId: Instance ID
        /// </remarks>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: RemainDay: Number of available days for WAF Trial version
        /// </remarks>
        [JsiiProperty(name: "attrRemainDay", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrRemainDay
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: SubscriptionType: Subscription type of the instance
        /// </remarks>
        [JsiiProperty(name: "attrSubscriptionType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrSubscriptionType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: Trial: Trial version
        /// </remarks>
        [JsiiProperty(name: "attrTrial", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrTrial
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: bigScreen:
        /// </remarks>
        [JsiiProperty(name: "bigScreen", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string BigScreen
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: exclusiveIpPackage:
        /// </remarks>
        [JsiiProperty(name: "exclusiveIpPackage", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string ExclusiveIpPackage
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: extBandwidth:
        /// </remarks>
        [JsiiProperty(name: "extBandwidth", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string ExtBandwidth
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: extDomainPackage:
        /// </remarks>
        [JsiiProperty(name: "extDomainPackage", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string ExtDomainPackage
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: logStorage:
        /// </remarks>
        [JsiiProperty(name: "logStorage", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string LogStorage
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: logTime:
        /// </remarks>
        [JsiiProperty(name: "logTime", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string LogTime
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: packageCode:
        /// </remarks>
        [JsiiProperty(name: "packageCode", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string PackageCode
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: prefessionalService:
        /// </remarks>
        [JsiiProperty(name: "prefessionalService", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string PrefessionalService
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: subscriptionType: Subscription type of the instance
        /// </remarks>
        [JsiiProperty(name: "subscriptionType", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string SubscriptionType
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: wafLog:
        /// </remarks>
        [JsiiProperty(name: "wafLog", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string WafLog
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: period:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "period", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? Period
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: renewalStatus:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "renewalStatus", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? RenewalStatus
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: renewPeriod:
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "renewPeriod", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? RenewPeriod
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }
    }
}
