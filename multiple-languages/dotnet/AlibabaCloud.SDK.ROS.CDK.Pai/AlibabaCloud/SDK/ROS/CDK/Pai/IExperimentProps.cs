using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pai
{
    /// <summary>Properties for defining a `Experiment`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-experiment
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IExperimentProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.ExperimentProps")]
    public interface IExperimentProps
    {
        /// <summary>Property artifactUri: ArtifactUri is default OSS storage path of the output of trials in the experiment.</summary>
        [JsiiProperty(name: "artifactUri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ArtifactUri
        {
            get;
        }

        /// <summary>Property experimentName: Name is the name of the experiment, unique in a namespace.</summary>
        [JsiiProperty(name: "experimentName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ExperimentName
        {
            get;
        }

        /// <summary>Property workspaceId: WorkspaceId is the workspace id which contains the experiment.</summary>
        [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WorkspaceId
        {
            get;
        }

        /// <summary>Property accessibility: Experimental Visibility.</summary>
        [JsiiProperty(name: "accessibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Accessibility
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `Experiment`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-experiment
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IExperimentProps), fullyQualifiedName: "@alicloud/ros-cdk-pai.ExperimentProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pai.IExperimentProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property artifactUri: ArtifactUri is default OSS storage path of the output of trials in the experiment.</summary>
            [JsiiProperty(name: "artifactUri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ArtifactUri
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property experimentName: Name is the name of the experiment, unique in a namespace.</summary>
            [JsiiProperty(name: "experimentName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ExperimentName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property workspaceId: WorkspaceId is the workspace id which contains the experiment.</summary>
            [JsiiProperty(name: "workspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WorkspaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property accessibility: Experimental Visibility.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "accessibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Accessibility
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
