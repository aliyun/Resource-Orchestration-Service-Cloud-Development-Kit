using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Properties for defining a `ALIYUN::CMS::MonitorGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IMonitorGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.MonitorGroupProps")]
    public interface IMonitorGroupProps
    {
        /// <summary>Property groupName: The name of the application group.</summary>
        [JsiiProperty(name: "groupName", typeJson: "{\"primitive\":\"string\"}")]
        string GroupName
        {
            get;
        }

        /// <summary>Property contactGroups: The alert contact group.</summary>
        /// <remarks>
        /// Alert notifications for the application group are sent to
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
        [JsiiTypeProxy(nativeType: typeof(IMonitorGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.MonitorGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.IMonitorGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property groupName: The name of the application group.</summary>
            [JsiiProperty(name: "groupName", typeJson: "{\"primitive\":\"string\"}")]
            public string GroupName
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>Property contactGroups: The alert contact group.</summary>
            /// <remarks>
            /// Alert notifications for the application group are sent to
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
