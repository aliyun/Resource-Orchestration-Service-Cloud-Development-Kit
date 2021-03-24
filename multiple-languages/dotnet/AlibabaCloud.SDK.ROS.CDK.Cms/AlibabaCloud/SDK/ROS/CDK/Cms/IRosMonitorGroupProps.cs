using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Properties for defining a `ALIYUN::CMS::MonitorGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IRosMonitorGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosMonitorGroupProps")]
    public interface IRosMonitorGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: groupName: The name of the application group.
        /// </remarks>
        [JsiiProperty(name: "groupName", typeJson: "{\"primitive\":\"string\"}")]
        string GroupName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: contactGroups: The alert contact group. Alert notifications for the application group are sent to
        /// the specified alert contact group.
        /// </remarks>
        [JsiiProperty(name: "contactGroups", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? ContactGroups
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::CMS::MonitorGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosMonitorGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosMonitorGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.IRosMonitorGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: groupName: The name of the application group.
            /// </remarks>
            [JsiiProperty(name: "groupName", typeJson: "{\"primitive\":\"string\"}")]
            public string GroupName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: contactGroups: The alert contact group. Alert notifications for the application group are sent to
            /// the specified alert contact group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "contactGroups", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? ContactGroups
            {
                get => GetInstanceProperty<string?>();
            }
        }
    }
}
