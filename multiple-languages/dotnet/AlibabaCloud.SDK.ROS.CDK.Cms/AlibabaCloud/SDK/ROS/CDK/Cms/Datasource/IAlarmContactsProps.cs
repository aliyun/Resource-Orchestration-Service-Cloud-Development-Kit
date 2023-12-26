using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms.Datasource
{
    /// <summary>Properties for defining a `AlarmContacts`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-alarmcontacts
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IAlarmContactsProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.datasource.AlarmContactsProps")]
    public interface IAlarmContactsProps
    {
        /// <summary>Property alarmContactName: The name of the alert contact.</summary>
        [JsiiProperty(name: "alarmContactName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AlarmContactName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `AlarmContacts`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-cms-alarmcontacts
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IAlarmContactsProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.datasource.AlarmContactsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.Datasource.IAlarmContactsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property alarmContactName: The name of the alert contact.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "alarmContactName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AlarmContactName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
