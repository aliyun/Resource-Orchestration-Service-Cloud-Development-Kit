using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Waf
{
    /// <summary>A ROS resource type:  `ALIYUN::WAF::Instance`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Waf.Instance), fullyQualifiedName: "@alicloud/ros-cdk-waf.Instance", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-waf.InstanceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Instance : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::WAF::Instance`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public Instance(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Waf.IInstanceProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Instance(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Instance(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute EndDate: Due date of the instance.</summary>
        [JsiiProperty(name: "attrEndDate", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrEndDate
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InDebt: Instance is overdue.</summary>
        [JsiiProperty(name: "attrInDebt", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInDebt
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InstanceId: Instance ID.</summary>
        [JsiiProperty(name: "attrInstanceId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute RemainDay: Number of available days for WAF Trial version.</summary>
        [JsiiProperty(name: "attrRemainDay", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrRemainDay
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SubscriptionType: Subscription type of the instance.</summary>
        [JsiiProperty(name: "attrSubscriptionType", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrSubscriptionType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Trial: Trial version.</summary>
        [JsiiProperty(name: "attrTrial", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrTrial
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
