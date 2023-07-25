using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Vod.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::VOD::EditingProjects`.</summary>
    [JsiiInterface(nativeType: typeof(IRosEditingProjectsProps), fullyQualifiedName: "@alicloud/ros-cdk-vod.datasource.RosEditingProjectsProps")]
    public interface IRosEditingProjectsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: title: The title of the online editing project.
        /// </remarks>
        [JsiiProperty(name: "title", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Title
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::VOD::EditingProjects`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosEditingProjectsProps), fullyQualifiedName: "@alicloud/ros-cdk-vod.datasource.RosEditingProjectsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Vod.Datasource.IRosEditingProjectsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: title: The title of the online editing project.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "title", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Title
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
