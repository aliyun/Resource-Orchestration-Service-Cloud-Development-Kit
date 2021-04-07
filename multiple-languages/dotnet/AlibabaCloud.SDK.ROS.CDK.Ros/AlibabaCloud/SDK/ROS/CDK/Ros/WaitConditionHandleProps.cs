using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ros
{
    /// <summary>Properties for defining a `ALIYUN::ROS::WaitConditionHandle`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ros.WaitConditionHandleProps")]
    public class WaitConditionHandleProps : AlibabaCloud.SDK.ROS.CDK.Ros.IWaitConditionHandleProps
    {
        /// <summary>Property count: There are 3 preconditions that make Count taking effect: 1.Mode is set to Full. 2.Count &gt;= 0. 3.The id of signal is not specified. If so, it will be a self-increasing integer started from 1. For example, the id of the first signal is 1, the id of the second signal is 2, and so on.</summary>
        /// <remarks>
        /// If Count takes effect, signals with id &gt; Count will be deleted before update.
        /// The default value is -1, which means no effect.
        /// It is recommended to quote the same value with WaitCondition.Count.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "count", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Count
        {
            get;
            set;
        }

        /// <summary>Property mode: If set to Increment, all old signals will be deleted before update.</summary>
        /// <remarks>
        /// In this mode, WaitCondition.Count should reference an incremental value instead of a full value, such as ScalingGroupEnable.ScalingRuleArisExecuteResultNumberOfAddedInstances.
        ///
        /// If set to Full, no old signal will be deleted unless Count is set. In this mode, WaitCondition.Count should reference a full value, such as the same value with InstanceGroup.MaxAmount. It is recommended to use this mode with Count.
        ///
        /// Default to Full.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "mode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Mode
        {
            get;
            set;
        }
    }
}
