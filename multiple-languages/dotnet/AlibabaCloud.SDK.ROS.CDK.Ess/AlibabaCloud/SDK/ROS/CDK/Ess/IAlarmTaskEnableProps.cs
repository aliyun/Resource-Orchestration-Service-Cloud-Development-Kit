using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Ess
{
    /// <summary>Properties for defining a `ALIYUN::ESS::AlarmTaskEnable`.</summary>
    [JsiiInterface(nativeType: typeof(IAlarmTaskEnableProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.AlarmTaskEnableProps")]
    public interface IAlarmTaskEnableProps
    {
        /// <summary>Property alarmTaskId: The id of alarm task.</summary>
        [JsiiProperty(name: "alarmTaskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AlarmTaskId
        {
            get;
        }

        /// <summary>Property enable: Enable alarm task or not.</summary>
        [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Enable
        {
            get;
        }

        /// <summary>Properties for defining a `ALIYUN::ESS::AlarmTaskEnable`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAlarmTaskEnableProps), fullyQualifiedName: "@alicloud/ros-cdk-ess.AlarmTaskEnableProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Ess.IAlarmTaskEnableProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property alarmTaskId: The id of alarm task.</summary>
            [JsiiProperty(name: "alarmTaskId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AlarmTaskId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property enable: Enable alarm task or not.</summary>
            [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Enable
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
