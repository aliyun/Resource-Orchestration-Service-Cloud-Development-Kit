using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    /// <summary>A ROS resource type:  `ALIYUN::ESS::ScalingGroupEnable`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ess.ScalingGroupEnable), fullyQualifiedName: "@alicloud/ros-cdk-ess.ScalingGroupEnable", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ess.ScalingGroupEnableProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class ScalingGroupEnable : AlibabaCloud.SDK.ROS.CDK.Core.Resource_
    {
        /// <summary>Create a new `ALIYUN::ESS::ScalingGroupEnable`.</summary>
        /// <remarks>
        /// Param scope - scope in which this resource is defined
        /// Param id    - scoped id of the resource
        /// Param props - resource properties
        /// </remarks>
        public ScalingGroupEnable(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ess.IScalingGroupEnableProps props, bool? enableResourcePropertyConstraint = null): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected ScalingGroupEnable(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected ScalingGroupEnable(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute LifecycleState: The scaling group status.</summary>
        [JsiiProperty(name: "attrLifecycleState", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrLifecycleState
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ScalingGroupId: The scaling group id.</summary>
        [JsiiProperty(name: "attrScalingGroupId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrScalingGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ScalingInstanceDetails: Detail information of auto created scaling instances.</summary>
        [JsiiProperty(name: "attrScalingInstanceDetails", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrScalingInstanceDetails
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ScalingInstances: The auto created scaling instances.</summary>
        [JsiiProperty(name: "attrScalingInstances", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrScalingInstances
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ScalingRuleArisExecuteErrorInfo: The error info of the execution of scaling rule aris.</summary>
        [JsiiProperty(name: "attrScalingRuleArisExecuteErrorInfo", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrScalingRuleArisExecuteErrorInfo
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ScalingRuleArisExecuteResultInstancesAdded: Instances added via the execution of scaling rule aris.</summary>
        [JsiiProperty(name: "attrScalingRuleArisExecuteResultInstancesAdded", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrScalingRuleArisExecuteResultInstancesAdded
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ScalingRuleArisExecuteResultInstancesRemoved: Instances removed via the execution of scaling rule aris.</summary>
        [JsiiProperty(name: "attrScalingRuleArisExecuteResultInstancesRemoved", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrScalingRuleArisExecuteResultInstancesRemoved
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ScalingRuleArisExecuteResultNumberOfAddedInstances: The number of added vm via the execution of scaling rule aris.</summary>
        [JsiiProperty(name: "attrScalingRuleArisExecuteResultNumberOfAddedInstances", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrScalingRuleArisExecuteResultNumberOfAddedInstances
        {
            get => GetInstanceProperty<object>()!;
        }
    }
}
