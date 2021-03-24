using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fnf
{
    /// <summary>Properties for defining a `ALIYUN::FNF::Schedule`.</summary>
    [JsiiInterface(nativeType: typeof(IScheduleProps), fullyQualifiedName: "@alicloud/ros-cdk-fnf.ScheduleProps")]
    public interface IScheduleProps
    {
        /// <summary>Property cronExpression: Cron expression.</summary>
        [JsiiProperty(name: "cronExpression", typeJson: "{\"primitive\":\"string\"}")]
        string CronExpression
        {
            get;
        }

        /// <summary>Property flowName: Flow name.</summary>
        [JsiiProperty(name: "flowName", typeJson: "{\"primitive\":\"string\"}")]
        string FlowName
        {
            get;
        }

        /// <summary>Property scheduleName: Schedule name.</summary>
        [JsiiProperty(name: "scheduleName", typeJson: "{\"primitive\":\"string\"}")]
        string ScheduleName
        {
            get;
        }

        /// <summary>Property description: Description of the schedule.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enable: Whether enable schedule.</summary>
        [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Enable
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property payload: Payload.</summary>
        [JsiiProperty(name: "payload", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Payload
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::FNF::Schedule`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IScheduleProps), fullyQualifiedName: "@alicloud/ros-cdk-fnf.ScheduleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fnf.IScheduleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property cronExpression: Cron expression.</summary>
            [JsiiProperty(name: "cronExpression", typeJson: "{\"primitive\":\"string\"}")]
            public string CronExpression
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property flowName: Flow name.</summary>
            [JsiiProperty(name: "flowName", typeJson: "{\"primitive\":\"string\"}")]
            public string FlowName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property scheduleName: Schedule name.</summary>
            [JsiiProperty(name: "scheduleName", typeJson: "{\"primitive\":\"string\"}")]
            public string ScheduleName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property description: Description of the schedule.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Property enable: Whether enable schedule.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Enable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property payload: Payload.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "payload", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Payload
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
