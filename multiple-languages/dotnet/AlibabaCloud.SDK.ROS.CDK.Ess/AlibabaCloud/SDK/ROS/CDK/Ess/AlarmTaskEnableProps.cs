using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::ESS::AlarmTaskEnable`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-ess.AlarmTaskEnableProps")]
    public class AlarmTaskEnableProps : AlibabaCloud.SDK.ROS.CDK.Ess.IAlarmTaskEnableProps
    {
        /// <summary>Property alarmTaskId: The id of alarm task.</summary>
        [JsiiProperty(name: "alarmTaskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object AlarmTaskId
        {
            get;
            set;
        }

        /// <summary>Property enable: Enable alarm task or not.</summary>
        [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object Enable
        {
            get;
            set;
        }
    }
}
