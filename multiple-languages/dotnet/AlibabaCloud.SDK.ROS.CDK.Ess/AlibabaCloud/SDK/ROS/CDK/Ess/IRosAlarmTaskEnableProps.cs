using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    /// <summary>Properties for defining a `ALIYUN::ESS::AlarmTaskEnable`.</summary>
    [JsiiInterface(nativeType: typeof(IRosAlarmTaskEnableProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.RosAlarmTaskEnableProps")]
    public interface IRosAlarmTaskEnableProps
    {
        /// <remarks>
        /// <strong>Property</strong>: alarmTaskId: The id of alarm task.
        /// </remarks>
        [JsiiProperty(name: "alarmTaskId", typeJson: "{\"primitive\":\"string\"}")]
        string AlarmTaskId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: enable: Enable alarm task or not
        /// </remarks>
        [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Enable
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::ESS::AlarmTaskEnable`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosAlarmTaskEnableProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.RosAlarmTaskEnableProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ess.IRosAlarmTaskEnableProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: alarmTaskId: The id of alarm task.
            /// </remarks>
            [JsiiProperty(name: "alarmTaskId", typeJson: "{\"primitive\":\"string\"}")]
            public string AlarmTaskId
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: enable: Enable alarm task or not
            /// </remarks>
            [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Enable
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
