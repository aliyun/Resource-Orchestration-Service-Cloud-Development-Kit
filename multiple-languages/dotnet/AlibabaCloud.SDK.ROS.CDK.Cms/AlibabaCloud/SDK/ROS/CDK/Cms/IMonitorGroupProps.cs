using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Properties for defining a `ALIYUN::CMS::MonitorGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IMonitorGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.MonitorGroupProps")]
    public interface IMonitorGroupProps
    {
        /// <summary>Property groupName: The name of the application group.</summary>
        [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GroupName
        {
            get;
        }

        /// <summary>Property contactGroups: The alert contact group.</summary>
        /// <remarks>
        /// Alert notifications for the application group are sent to
        /// the specified alert contact group.
        /// </remarks>
        [JsiiProperty(name: "contactGroups", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ContactGroups
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
            [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property contactGroups: The alert contact group.</summary>
            /// <remarks>
            /// Alert notifications for the application group are sent to
            /// the specified alert contact group.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "contactGroups", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ContactGroups
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
