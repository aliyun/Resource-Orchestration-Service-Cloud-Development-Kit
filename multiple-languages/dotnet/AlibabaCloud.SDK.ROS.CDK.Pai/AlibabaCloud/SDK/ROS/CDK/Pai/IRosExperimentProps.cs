using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pai
{
    /// <summary>Properties for defining a `RosExperiment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-experiment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosExperimentProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.RosExperimentProps")]
    public interface IRosExperimentProps
    {
        /// <remarks>
        /// <strong>Property</strong>: artifactUri: ArtifactUri is default OSS storage path of the output of trials in the experiment.
        /// </remarks>
        [JsiiProperty(name: "artifactUri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ArtifactUri
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: experimentName: Name is the name of the experiment, unique in a namespace.
        /// </remarks>
        [JsiiProperty(name: "experimentName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ExperimentName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: workspaceId: WorkspaceId is the workspace id which contains the experiment.
        /// </remarks>
        [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WorkspaceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: accessibility: Experimental Visibility.
        /// </remarks>
        [JsiiProperty(name: "accessibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Accessibility
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosExperiment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-experiment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosExperimentProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.RosExperimentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pai.IRosExperimentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: artifactUri: ArtifactUri is default OSS storage path of the output of trials in the experiment.
            /// </remarks>
            [JsiiProperty(name: "artifactUri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ArtifactUri
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: experimentName: Name is the name of the experiment, unique in a namespace.
            /// </remarks>
            [JsiiProperty(name: "experimentName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ExperimentName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: workspaceId: WorkspaceId is the workspace id which contains the experiment.
            /// </remarks>
            [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WorkspaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: accessibility: Experimental Visibility.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "accessibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Accessibility
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
