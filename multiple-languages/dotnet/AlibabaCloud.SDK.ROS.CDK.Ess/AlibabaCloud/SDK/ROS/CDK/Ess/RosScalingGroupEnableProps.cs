using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ESS::ScalingGroupEnable`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ess.RosScalingGroupEnableProps")]
    public class RosScalingGroupEnableProps : AlibabaCloud.SDK.ROS.CDK.Ess.IRosScalingGroupEnableProps
    {
        /// <remarks>
        /// <strong>Property</strong>: scalingGroupId: The id of operated scaling group.
        /// </remarks>
        [JsiiProperty(name: "scalingGroupId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ScalingGroupId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: instanceIds: The id list of ECS instance which will be attached. Max support 1000 instances.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? InstanceIds
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: removeInstanceIds: The id list of ECS instance which will be removed. Max support 1000 instances.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "removeInstanceIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? RemoveInstanceIds
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: scalingConfigurationId: The id of scaling configuration which will be activate.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "scalingConfigurationId", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? ScalingConfigurationId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: scalingRuleAris: A list of scaling rule aris which will be executed. Max support 10 scaling rule aris.
        /// When creating the resource, all the scaling rule aris in the list will be executed.
        /// When updating the resource, none of scaling rule aris in the list will be executed, unless ScalingRuleArisExecuteVersion is changed.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "scalingRuleAris", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? ScalingRuleAris
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: scalingRuleArisExecuteVersion: The change of the property leads to the execution of all the scaling rule aris in ScalingRuleAris.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "scalingRuleArisExecuteVersion", typeJson: "{\"primitive\":\"number\"}", isOptional: true, isOverride: true)]
        public double? ScalingRuleArisExecuteVersion
        {
            get;
            set;
        }
    }
}
