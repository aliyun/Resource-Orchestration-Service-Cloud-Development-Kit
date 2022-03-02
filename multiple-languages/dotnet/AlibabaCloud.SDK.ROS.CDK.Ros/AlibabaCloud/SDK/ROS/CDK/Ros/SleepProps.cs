using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ros
{
    /// <summary>Properties for defining a `ALIYUN::ROS::Sleep`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ros.SleepProps")]
    public class SleepProps : AlibabaCloud.SDK.ROS.CDK.Ros.ISleepProps
    {
        /// <summary>Property createDuration: The number of seconds to wait before resource creation.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "createDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? CreateDuration
        {
            get;
            set;
        }

        /// <summary>Property deleteDuration: The number of seconds to wait before resource deletion.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "deleteDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? DeleteDuration
        {
            get;
            set;
        }

        /// <summary>Property triggers: Arbitrary map of values that, when changed, will run update or update rollback delays again.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "triggers", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        public object? Triggers
        {
            get;
            set;
        }

        /// <summary>Property updateDuration: The number of seconds to wait before resource update.</summary>
        /// <remarks>
        /// It only triggers when the property Triggers change and the status of stack is UPDATE_IN_PROGRESS.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "updateDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? UpdateDuration
        {
            get;
            set;
        }

        /// <summary>Property updateRollbackDuration: The number of seconds to wait before resource update rollback.</summary>
        /// <remarks>
        /// It only triggers when stack update failed and resource was updated.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "updateRollbackDuration", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public object? UpdateRollbackDuration
        {
            get;
            set;
        }
    }
}
