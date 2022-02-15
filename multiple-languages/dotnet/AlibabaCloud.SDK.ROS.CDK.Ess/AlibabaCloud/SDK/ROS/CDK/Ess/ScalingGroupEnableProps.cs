using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ESS::ScalingGroupEnable`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ess.ScalingGroupEnableProps")]
    public class ScalingGroupEnableProps : AlibabaCloud.SDK.ROS.CDK.Ess.IScalingGroupEnableProps
    {
        /// <summary>Property scalingGroupId: The id of operated scaling group.</summary>
        [JsiiProperty(name: "scalingGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object ScalingGroupId
        {
            get;
            set;
        }

        /// <summary>Property instanceIds: The id list of ECS instance which will be attached.</summary>
        /// <remarks>
        /// Max support 1000 instances.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "instanceIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? InstanceIds
        {
            get;
            set;
        }

        /// <summary>Property removeInstanceIds: The id list of ECS instance which will be removed.</summary>
        /// <remarks>
        /// Max support 1000 instances.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "removeInstanceIds", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? RemoveInstanceIds
        {
            get;
            set;
        }

        /// <summary>Property scalingConfigurationId: The id of scaling configuration which will be activate.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "scalingConfigurationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ScalingConfigurationId
        {
            get;
            set;
        }

        /// <summary>Property scalingRuleAris: A list of scaling rule aris which will be executed.</summary>
        /// <remarks>
        /// Max support 10 scaling rule aris.
        /// When creating the resource, all the scaling rule aris in the list will be executed.
        /// When updating the resource, none of scaling rule aris in the list will be executed, unless ScalingRuleArisExecuteVersion is changed.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "scalingRuleAris", typeJson: "{\"union\":{\"types\":[{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"array\"}},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ScalingRuleAris
        {
            get;
            set;
        }

        /// <summary>Property scalingRuleArisExecuteVersion: The change of the property leads to the execution of all the scaling rule aris in ScalingRuleAris.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "scalingRuleArisExecuteVersion", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? ScalingRuleArisExecuteVersion
        {
            get;
            set;
        }
    }
}
