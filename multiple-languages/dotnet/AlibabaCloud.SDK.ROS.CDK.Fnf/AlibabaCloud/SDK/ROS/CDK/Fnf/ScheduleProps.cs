using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fnf
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::FNF::Schedule`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-fnf.ScheduleProps")]
    public class ScheduleProps : AlibabaCloud.SDK.ROS.CDK.Fnf.IScheduleProps
    {
        /// <summary>Property cronExpression: Cron expression.</summary>
        [JsiiProperty(name: "cronExpression", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string CronExpression
        {
            get;
            set;
        }

        /// <summary>Property flowName: Flow name.</summary>
        [JsiiProperty(name: "flowName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string FlowName
        {
            get;
            set;
        }

        /// <summary>Property scheduleName: Schedule name.</summary>
        [JsiiProperty(name: "scheduleName", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string ScheduleName
        {
            get;
            set;
        }

        /// <summary>Property description: Description of the schedule.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Description
        {
            get;
            set;
        }

        /// <summary>Property enable: Whether enable schedule.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? Enable
        {
            get;
            set;
        }

        /// <summary>Property payload: Payload.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "payload", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Payload
        {
            get;
            set;
        }
    }
}
