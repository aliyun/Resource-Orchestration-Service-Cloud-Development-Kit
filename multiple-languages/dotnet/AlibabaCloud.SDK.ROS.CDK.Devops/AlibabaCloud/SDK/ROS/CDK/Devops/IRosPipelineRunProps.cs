using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Devops
{
    /// <summary>Properties for defining a `RosPipelineRun`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipelinerun
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosPipelineRunProps), fullyQualifiedName: "@alicloud/ros-cdk-devops.RosPipelineRunProps")]
    public interface IRosPipelineRunProps
    {
        /// <remarks>
        /// <strong>Property</strong>: organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
        /// </remarks>
        [JsiiProperty(name: "organizationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object OrganizationId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: pipelineId: The pipeline ID, which can be obtained from the pipeline link.
        /// </remarks>
        [JsiiProperty(name: "pipelineId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PipelineId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: params: Pipeline operating parameters. Keys:
        /// - **branchModeBranchs**: Branch mode runs branches.
        /// - **envs**: Running variables.
        /// - **runningBranchs**: Running branches whose key is the warehouse address.
        /// - **runningTags**: Running tags whose key is the warehouse address.
        /// </remarks>
        [JsiiProperty(name: "params", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Params
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: sync: Whether to wait synchronously for the result of the pipeline execution. If you select true, the resource will not be created until the pipeline is complete. **Default is false.**
        /// Note: Do not set this option to true when the pipeline has a pause policy configured, as publishing requires manual intervention and synchronization is not appropriate.
        /// </remarks>
        [JsiiProperty(name: "sync", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Sync
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: timeout: Maximum wait time for pipeline execution in minutes. This parameter need only be configured if Sync is set to true. **Default is 10.**
        /// </remarks>
        [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Timeout
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosPipelineRun`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipelinerun
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosPipelineRunProps), fullyQualifiedName: "@alicloud/ros-cdk-devops.RosPipelineRunProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Devops.IRosPipelineRunProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.
            /// </remarks>
            [JsiiProperty(name: "organizationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object OrganizationId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: pipelineId: The pipeline ID, which can be obtained from the pipeline link.
            /// </remarks>
            [JsiiProperty(name: "pipelineId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PipelineId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: params: Pipeline operating parameters. Keys:
            /// - **branchModeBranchs**: Branch mode runs branches.
            /// - **envs**: Running variables.
            /// - **runningBranchs**: Running branches whose key is the warehouse address.
            /// - **runningTags**: Running tags whose key is the warehouse address.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "params", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Params
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: sync: Whether to wait synchronously for the result of the pipeline execution. If you select true, the resource will not be created until the pipeline is complete. **Default is false.**
            /// Note: Do not set this option to true when the pipeline has a pause policy configured, as publishing requires manual intervention and synchronization is not appropriate.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sync", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Sync
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: timeout: Maximum wait time for pipeline execution in minutes. This parameter need only be configured if Sync is set to true. **Default is 10.**
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "timeout", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Timeout
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
