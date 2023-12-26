using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    /// <summary>Properties for defining a `RosAlarmTaskEnable`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-alarmtaskenable
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosAlarmTaskEnableProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.RosAlarmTaskEnableProps")]
    public interface IRosAlarmTaskEnableProps
    {
        /// <remarks>
        /// <strong>Property</strong>: alarmTaskId: The id of alarm task.
        /// </remarks>
        [JsiiProperty(name: "alarmTaskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AlarmTaskId
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

        /// <summary>Properties for defining a `RosAlarmTaskEnable`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ess-alarmtaskenable
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosAlarmTaskEnableProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.RosAlarmTaskEnableProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ess.IRosAlarmTaskEnableProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: alarmTaskId: The id of alarm task.
            /// </remarks>
            [JsiiProperty(name: "alarmTaskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AlarmTaskId
            {
                get => GetInstanceProperty<object>()!;
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
