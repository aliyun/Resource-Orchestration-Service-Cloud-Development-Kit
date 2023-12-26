using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fnf
{
    /// <summary>Properties for defining a `Schedule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fnf-schedule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IScheduleProps), fullyQualifiedName: "@alicloud/ros-cdk-fnf.ScheduleProps")]
    public interface IScheduleProps
    {
        /// <summary>Property cronExpression: Cron expression.</summary>
        [JsiiProperty(name: "cronExpression", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CronExpression
        {
            get;
        }

        /// <summary>Property flowName: Flow name.</summary>
        [JsiiProperty(name: "flowName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FlowName
        {
            get;
        }

        /// <summary>Property scheduleName: Schedule name.</summary>
        [JsiiProperty(name: "scheduleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ScheduleName
        {
            get;
        }

        /// <summary>Property description: Description of the schedule.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Description
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
        [JsiiProperty(name: "payload", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Payload
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Schedule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-fnf-schedule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IScheduleProps), fullyQualifiedName: "@alicloud/ros-cdk-fnf.ScheduleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fnf.IScheduleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property cronExpression: Cron expression.</summary>
            [JsiiProperty(name: "cronExpression", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CronExpression
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property flowName: Flow name.</summary>
            [JsiiProperty(name: "flowName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FlowName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property scheduleName: Schedule name.</summary>
            [JsiiProperty(name: "scheduleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ScheduleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property description: Description of the schedule.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Description
            {
                get => GetInstanceProperty<object?>();
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
            [JsiiProperty(name: "payload", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Payload
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
