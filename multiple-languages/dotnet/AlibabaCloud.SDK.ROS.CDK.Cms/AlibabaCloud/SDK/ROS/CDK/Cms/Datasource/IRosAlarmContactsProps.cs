using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::CMS::AlarmContacts`.</summary>
    [JsiiInterface(nativeType: typeof(IRosAlarmContactsProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.datasource.RosAlarmContactsProps")]
    public interface IRosAlarmContactsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: alarmContactName: The name of the alert contact.
        /// </remarks>
        [JsiiProperty(name: "alarmContactName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? AlarmContactName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::CMS::AlarmContacts`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosAlarmContactsProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.datasource.RosAlarmContactsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.Datasource.IRosAlarmContactsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: alarmContactName: The name of the alert contact.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "alarmContactName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? AlarmContactName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
