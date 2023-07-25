using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Emr.Datasource
{
    /// <summary>Properties for defining a `DATASOURCE::EMR::FlowProjects`.</summary>
    [JsiiInterface(nativeType: typeof(IFlowProjectsProps), fullyQualifiedName: "@alicloud/ros-cdk-emr.datasource.FlowProjectsProps")]
    public interface IFlowProjectsProps
    {
        /// <summary>Property flowProjectId: The first ID of the resource.</summary>
        [JsiiProperty(name: "flowProjectId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FlowProjectId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property flowProjectName: Project name.</summary>
        [JsiiProperty(name: "flowProjectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? FlowProjectName
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `DATASOURCE::EMR::FlowProjects`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IFlowProjectsProps), fullyQualifiedName: "@alicloud/ros-cdk-emr.datasource.FlowProjectsProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Emr.Datasource.IFlowProjectsProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property flowProjectId: The first ID of the resource.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "flowProjectId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FlowProjectId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property flowProjectName: Project name.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "flowProjectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? FlowProjectName
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
