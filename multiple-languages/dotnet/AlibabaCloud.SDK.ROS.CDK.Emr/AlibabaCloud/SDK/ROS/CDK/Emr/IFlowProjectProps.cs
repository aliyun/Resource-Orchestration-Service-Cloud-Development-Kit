using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Emr
{
    /// <summary>Properties for defining a `FlowProject`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-flowproject
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IFlowProjectProps), fullyQualifiedName: "@alicloud/ros-cdk-emr.FlowProjectProps")]
    public interface IFlowProjectProps
    {
        /// <summary>Property description: The description of the project.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Description
        {
            get;
        }

        /// <summary>Property flowProjectName: The name of the project.</summary>
        [JsiiProperty(name: "flowProjectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object FlowProjectName
        {
            get;
        }

        /// <summary>Property resourceGroupId: The ID of the enterprise resource group to which the EMR instances and ECS node instances belong.</summary>
        [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ResourceGroupId
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `FlowProject`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-emr-flowproject
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IFlowProjectProps), fullyQualifiedName: "@alicloud/ros-cdk-emr.FlowProjectProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Emr.IFlowProjectProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property description: The description of the project.</summary>
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Description
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property flowProjectName: The name of the project.</summary>
            [JsiiProperty(name: "flowProjectName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object FlowProjectName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property resourceGroupId: The ID of the enterprise resource group to which the EMR instances and ECS node instances belong.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "resourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? ResourceGroupId
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
