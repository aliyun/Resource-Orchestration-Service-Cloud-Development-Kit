using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Properties for defining a `RosMonitorGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-monitorgroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosMonitorGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosMonitorGroupProps")]
    public interface IRosMonitorGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: groupName: The name of the application group.
        /// </remarks>
        [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object GroupName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: contactGroups: The alert contact group. Alert notifications for the application group are sent to
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

        /// <summary>Properties for defining a `RosMonitorGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-monitorgroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosMonitorGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosMonitorGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.IRosMonitorGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: groupName: The name of the application group.
            /// </remarks>
            [JsiiProperty(name: "groupName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object GroupName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: contactGroups: The alert contact group. Alert notifications for the application group are sent to
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
