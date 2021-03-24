using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ESS::AlarmTaskEnable`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ess.RosAlarmTaskEnableProps")]
    public class RosAlarmTaskEnableProps : AlibabaCloud.SDK.ROS.CDK.Ess.IRosAlarmTaskEnableProps
    {
        /// <remarks>
        /// <strong>Property</strong>: alarmTaskId: The id of alarm task.
        /// </remarks>
        [JsiiProperty(name: "alarmTaskId", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string AlarmTaskId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: enable: Enable alarm task or not
        /// </remarks>
        [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Enable
        {
            get;
            set;
        }
    }
}
