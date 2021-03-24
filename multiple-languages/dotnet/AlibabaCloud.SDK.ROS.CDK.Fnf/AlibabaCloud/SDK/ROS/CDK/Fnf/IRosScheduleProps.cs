using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fnf
{
    /// <summary>Properties for defining a `ALIYUN::FNF::Schedule`.</summary>
    [JsiiInterface(nativeType: typeof(IRosScheduleProps), fullyQualifiedName: "@alicloud/ros-cdk-fnf.RosScheduleProps")]
    public interface IRosScheduleProps
    {
        /// <remarks>
        /// <strong>Property</strong>: cronExpression: Cron expression.
        /// </remarks>
        [JsiiProperty(name: "cronExpression", typeJson: "{\"primitive\":\"string\"}")]
        string CronExpression
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: flowName: Flow name.
        /// </remarks>
        [JsiiProperty(name: "flowName", typeJson: "{\"primitive\":\"string\"}")]
        string FlowName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: scheduleName: Schedule name.
        /// </remarks>
        [JsiiProperty(name: "scheduleName", typeJson: "{\"primitive\":\"string\"}")]
        string ScheduleName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description of the schedule.
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Description
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: enable: Whether enable schedule.
        /// </remarks>
        [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Enable
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: payload: Payload.
        /// </remarks>
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
        [JsiiTypeProxy(nativeType: typeof(IRosScheduleProps), fullyQualifiedName: "@alicloud/ros-cdk-fnf.RosScheduleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fnf.IRosScheduleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: cronExpression: Cron expression.
            /// </remarks>
            [JsiiProperty(name: "cronExpression", typeJson: "{\"primitive\":\"string\"}")]
            public string CronExpression
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: flowName: Flow name.
            /// </remarks>
            [JsiiProperty(name: "flowName", typeJson: "{\"primitive\":\"string\"}")]
            public string FlowName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: scheduleName: Schedule name.
            /// </remarks>
            [JsiiProperty(name: "scheduleName", typeJson: "{\"primitive\":\"string\"}")]
            public string ScheduleName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Description of the schedule.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Description
            {
                get => GetInstanceProperty<string?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: enable: Whether enable schedule.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Enable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: payload: Payload.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "payload", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Payload
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
