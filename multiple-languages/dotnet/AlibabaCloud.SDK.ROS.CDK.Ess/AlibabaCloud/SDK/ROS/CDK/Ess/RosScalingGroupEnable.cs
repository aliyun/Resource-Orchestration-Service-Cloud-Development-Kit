using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    /// <summary>A ROS template type:  `ALIYUN::ESS::ScalingGroupEnable`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Ess.RosScalingGroupEnable), fullyQualifiedName: "@alicloud/ros-cdk-ess.RosScalingGroupEnable", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-ess.RosScalingGroupEnableProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosScalingGroupEnable : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::ESS::ScalingGroupEnable`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosScalingGroupEnable(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Ess.IRosScalingGroupEnableProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosScalingGroupEnable(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosScalingGroupEnable(DeputyProps props): base(props)
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
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Ess.RosScalingGroupEnable))!;

        /// <remarks>
        /// <strong>Attribute</strong>: LifecycleState: The scaling group status
        /// </remarks>
        [JsiiProperty(name: "attrLifecycleState", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrLifecycleState
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ScalingGroupId: The scaling group id
        /// </remarks>
        [JsiiProperty(name: "attrScalingGroupId", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrScalingGroupId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ScalingInstanceDetails: Detail information of auto created scaling instances
        /// </remarks>
        [JsiiProperty(name: "attrScalingInstanceDetails", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrScalingInstanceDetails
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ScalingInstances: The auto created scaling instances
        /// </remarks>
        [JsiiProperty(name: "attrScalingInstances", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrScalingInstances
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ScalingRuleArisExecuteErrorInfo: The error info of the execution of scaling rule aris
        /// </remarks>
        [JsiiProperty(name: "attrScalingRuleArisExecuteErrorInfo", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrScalingRuleArisExecuteErrorInfo
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ScalingRuleArisExecuteResultInstancesAdded: Instances added via the execution of scaling rule aris
        /// </remarks>
        [JsiiProperty(name: "attrScalingRuleArisExecuteResultInstancesAdded", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrScalingRuleArisExecuteResultInstancesAdded
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ScalingRuleArisExecuteResultInstancesRemoved: Instances removed via the execution of scaling rule aris
        /// </remarks>
        [JsiiProperty(name: "attrScalingRuleArisExecuteResultInstancesRemoved", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrScalingRuleArisExecuteResultInstancesRemoved
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: ScalingRuleArisExecuteResultNumberOfAddedInstances: The number of added vm via the execution of scaling rule aris
        /// </remarks>
        [JsiiProperty(name: "attrScalingRuleArisExecuteResultNumberOfAddedInstances", typeJson: "{\"primitive\":\"any\"}")]
        public virtual object AttrScalingRuleArisExecuteResultNumberOfAddedInstances
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: scalingGroupId: The id of operated scaling group.
        /// </remarks>
        [JsiiProperty(name: "scalingGroupId", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string ScalingGroupId
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceIds: The id list of ECS instance which will be attached. Max support 1000 instances.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? InstanceIds
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: removeInstanceIds: The id list of ECS instance which will be removed. Max support 1000 instances.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "removeInstanceIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? RemoveInstanceIds
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: scalingConfigurationId: The id of scaling configuration which will be activate.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "scalingConfigurationId", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public virtual string? ScalingConfigurationId
        {
            get => GetInstanceProperty<string?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: scalingRuleAris: A list of scaling rule aris which will be executed. Max support 10 scaling rule aris.
        /// When creating the resource, all the scaling rule aris in the list will be executed.
        /// When updating the resource, none of scaling rule aris in the list will be executed, unless ScalingRuleArisExecuteVersion is changed.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "scalingRuleAris", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? ScalingRuleAris
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: scalingRuleArisExecuteVersion: The change of the property leads to the execution of all the scaling rule aris in ScalingRuleAris.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "scalingRuleArisExecuteVersion", typeJson: "{\"primitive\":\"number\"}", isOptional: true)]
        public virtual double? ScalingRuleArisExecuteVersion
        {
            get => GetInstanceProperty<double?>();
            set => SetInstanceProperty(value);
        }
    }
}
