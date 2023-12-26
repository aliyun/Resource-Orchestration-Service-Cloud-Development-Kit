using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Emr.Datasource
{
    /// <summary>Properties for defining a `RosFlowProjects`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-emr-flowprojects
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosFlowProjectsProps), fullyQualifiedName: "@alicloud/ros-cdk-emr.datasource.RosFlowProjectsProps")]
    public interface IRosFlowProjectsProps
    {
        /// <remarks>
        /// <strong>Property</strong>: flowProjectId: The first ID of the resource
        /// </remarks>
        [JsiiProperty(name: "flowProjectId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FlowProjectId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: flowProjectName: Project name.
        /// </remarks>
        [JsiiProperty(name: "flowProjectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FlowProjectName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosFlowProjects`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-emr-flowprojects
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosFlowProjectsProps), fullyQualifiedName: "@alicloud/ros-cdk-emr.datasource.RosFlowProjectsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Emr.Datasource.IRosFlowProjectsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: flowProjectId: The first ID of the resource
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "flowProjectId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FlowProjectId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: flowProjectName: Project name.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "flowProjectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FlowProjectName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
