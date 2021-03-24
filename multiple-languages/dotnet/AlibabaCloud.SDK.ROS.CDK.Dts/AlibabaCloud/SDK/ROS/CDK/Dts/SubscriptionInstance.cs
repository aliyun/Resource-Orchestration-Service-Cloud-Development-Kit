using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dts
{
    /// <summary>A ROS resource type:  `ALIYUN::DTS::SubscriptionInstance`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Dts.SubscriptionInstance), fullyQualifiedName: "@alicloud/ros-cdk-dts.SubscriptionInstance", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-dts.SubscriptionInstanceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class SubscriptionInstance : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::DTS::SubscriptionInstance`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public SubscriptionInstance(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Dts.ISubscriptionInstanceProps? props = null, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected SubscriptionInstance(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected SubscriptionInstance(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute PrivateHost: Private host.</summary>
        [JsiiProperty(name: "attrPrivateHost", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPrivateHost
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute PublicHost: Public host.</summary>
        [JsiiProperty(name: "attrPublicHost", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrPublicHost
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SubscriptionInstanceId: The ID of Data subscription instance.</summary>
        [JsiiProperty(name: "attrSubscriptionInstanceId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrSubscriptionInstanceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VPCHost: VPC host.</summary>
        [JsiiProperty(name: "attrVpcHost", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrVpcHost
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
