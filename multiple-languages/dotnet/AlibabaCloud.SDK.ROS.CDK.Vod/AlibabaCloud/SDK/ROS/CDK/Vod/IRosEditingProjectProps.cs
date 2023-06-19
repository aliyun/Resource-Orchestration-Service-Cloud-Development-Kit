using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vod
{
    /// <summary>Properties for defining a `ALIYUN::VOD::EditingProject`.</summary>
    [JsiiInterface(nativeType: typeof(IRosEditingProjectProps), fullyQualifiedName: "@alicloud/ros-cdk-vod.RosEditingProjectProps")]
    public interface IRosEditingProjectProps
    {
        /// <remarks>
        /// <strong>Property</strong>: title: The title of the online editing project.
        /// </remarks>
        [JsiiProperty(name: "title", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Title
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: editingProjectName: The name of the online editing project.
        /// </remarks>
        [JsiiProperty(name: "editingProjectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EditingProjectName
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: timeline: The timeline of the online editing project, in JSON format.
        /// If you do not specify this parameter, an empty timeline is created and the duration of the online editing project is zero.
        /// </remarks>
        [JsiiProperty(name: "timeline", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Timeline
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::VOD::EditingProject`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosEditingProjectProps), fullyQualifiedName: "@alicloud/ros-cdk-vod.RosEditingProjectProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vod.IRosEditingProjectProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: title: The title of the online editing project.
            /// </remarks>
            [JsiiProperty(name: "title", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Title
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: editingProjectName: The name of the online editing project.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "editingProjectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EditingProjectName
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: timeline: The timeline of the online editing project, in JSON format.
            /// If you do not specify this parameter, an empty timeline is created and the duration of the online editing project is zero.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "timeline", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Timeline
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
