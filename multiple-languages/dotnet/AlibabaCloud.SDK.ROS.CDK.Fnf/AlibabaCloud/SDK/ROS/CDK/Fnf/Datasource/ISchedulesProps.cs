using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Fnf.Datasource
{
    /// <summary>Properties for defining a `Schedules`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-schedules
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISchedulesProps), fullyQualifiedName: "@alicloud/ros-cdk-fnf.datasource.SchedulesProps")]
    public interface ISchedulesProps
    {
        /// <summary>Property flowName: The name of the flow that is bound to the time-based schedule.</summary>
        /// <remarks>
        /// The name is unique within the region and cannot be modified after the time-based schedule is created. Valid values:
        /// The name can contain letters, digits, underscores (<em>), and hyphens (-).
        /// The name must start with a letter or an underscore (</em>).
        /// The name is case-sensitive.
        /// The name must be 1 to 128 characters in length.
        /// </remarks>
        [JsiiProperty(name: "flowName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FlowName
        {
            get;
        }

        /// <summary>Properties for defining a `Schedules`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-fnf-schedules
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISchedulesProps), fullyQualifiedName: "@alicloud/ros-cdk-fnf.datasource.SchedulesProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Fnf.Datasource.ISchedulesProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property flowName: The name of the flow that is bound to the time-based schedule.</summary>
            /// <remarks>
            /// The name is unique within the region and cannot be modified after the time-based schedule is created. Valid values:
            /// The name can contain letters, digits, underscores (<em>), and hyphens (-).
            /// The name must start with a letter or an underscore (</em>).
            /// The name is case-sensitive.
            /// The name must be 1 to 128 characters in length.
            /// </remarks>
            [JsiiProperty(name: "flowName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FlowName
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
