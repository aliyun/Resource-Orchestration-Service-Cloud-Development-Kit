using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Devops
{
    /// <summary>Properties for defining a `PipelineRun`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipelinerun
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IPipelineRunProps), fullyQualifiedName: "@alicloud/ros-cdk-devops.PipelineRunProps")]
    public interface IPipelineRunProps
    {
        /// <summary>Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.</summary>
        [JsiiProperty(name: "organizationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object OrganizationId
        {
            get;
        }

        /// <summary>Property pipelineId: The pipeline ID, which can be obtained from the pipeline link.</summary>
        [JsiiProperty(name: "pipelineId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object PipelineId
        {
            get;
        }

        /// <summary>Property params: Pipeline operating parameters.</summary>
        /// <remarks>
        /// Keys:
        ///
        /// <list type="bullet">
        /// <description><strong>branchModeBranchs</strong>: Branch mode runs branches.</description>
        /// <description><strong>envs</strong>: Running variables.</description>
        /// <description><strong>runningBranchs</strong>: Running branches whose key is the warehouse address.</description>
        /// <description><strong>runningTags</strong>: Running tags whose key is the warehouse address.</description>
        /// </list>
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

        /// <summary>Property sync: Whether to wait synchronously for the result of the pipeline execution.</summary>
        /// <remarks>
        /// If you select true, the resource will not be created until the pipeline is complete. <strong>Default is false.</strong>
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

        /// <summary>Property timeout: Maximum wait time for pipeline execution in minutes.</summary>
        /// <remarks>
        /// This parameter need only be configured if Sync is set to true. <strong>Default is 10.</strong>
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

        /// <summary>Properties for defining a `PipelineRun`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-devops-pipelinerun
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IPipelineRunProps), fullyQualifiedName: "@alicloud/ros-cdk-devops.PipelineRunProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Devops.IPipelineRunProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property organizationId: Corporate identity, also known as enterprise id, can obtain in cloud effect access links.</summary>
            [JsiiProperty(name: "organizationId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object OrganizationId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property pipelineId: The pipeline ID, which can be obtained from the pipeline link.</summary>
            [JsiiProperty(name: "pipelineId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object PipelineId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property params: Pipeline operating parameters.</summary>
            /// <remarks>
            /// Keys:
            ///
            /// <list type="bullet">
            /// <description><strong>branchModeBranchs</strong>: Branch mode runs branches.</description>
            /// <description><strong>envs</strong>: Running variables.</description>
            /// <description><strong>runningBranchs</strong>: Running branches whose key is the warehouse address.</description>
            /// <description><strong>runningTags</strong>: Running tags whose key is the warehouse address.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "params", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}]}}", isOptional: true)]
            public object? Params
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property sync: Whether to wait synchronously for the result of the pipeline execution.</summary>
            /// <remarks>
            /// If you select true, the resource will not be created until the pipeline is complete. <strong>Default is false.</strong>
            /// Note: Do not set this option to true when the pipeline has a pause policy configured, as publishing requires manual intervention and synchronization is not appropriate.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "sync", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Sync
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property timeout: Maximum wait time for pipeline execution in minutes.</summary>
            /// <remarks>
            /// This parameter need only be configured if Sync is set to true. <strong>Default is 10.</strong>
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
