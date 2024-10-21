using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls.Datasource
{
    /// <summary>Properties for defining a `RosProject`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sls-project
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosProjectProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.datasource.RosProjectProps")]
    public interface IRosProjectProps
    {
        /// <remarks>
        /// <strong>Property</strong>: projectName: The name of the project.
        /// </remarks>
        [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ProjectName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
        /// - Never: Never refresh the datasource resource when the stack is updated.
        /// - Always: Always refresh the datasource resource when the stack is updated.
        /// Default is Never.
        /// </remarks>
        [JsiiProperty(name: "refreshOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RefreshOptions
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosProject`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-sls-project
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosProjectProps), fullyQualifiedName: "@alicloud/ros-cdk-sls.datasource.RosProjectProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Sls.Datasource.IRosProjectProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: projectName: The name of the project.
            /// </remarks>
            [JsiiProperty(name: "projectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ProjectName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: refreshOptions: The refresh strategy for the datasource resource when the stack is updated. Valid values:
            /// - Never: Never refresh the datasource resource when the stack is updated.
            /// - Always: Always refresh the datasource resource when the stack is updated.
            /// Default is Never.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "refreshOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? RefreshOptions
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
