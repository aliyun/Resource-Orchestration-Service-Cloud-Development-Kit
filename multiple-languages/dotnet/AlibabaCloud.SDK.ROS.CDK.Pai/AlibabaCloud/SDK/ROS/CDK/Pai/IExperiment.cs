using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pai
{
    /// <summary>Represents a `Experiment`.</summary>
    [JsiiInterface(nativeType: typeof(IExperiment), fullyQualifiedName: "@alicloud/ros-cdk-pai.IExperiment")]
    public interface IExperiment : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Accessibility: Experimental Visibility.</summary>
        [JsiiProperty(name: "attrAccessibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAccessibility
        {
            get;
        }

        /// <summary>Attribute ArtifactUri: ArtifactUri is default OSS storage path of the output of trials in the experiment.</summary>
        [JsiiProperty(name: "attrArtifactUri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrArtifactUri
        {
            get;
        }

        /// <summary>Attribute CreateTime: GmtCreateTime is time when this entity is created.</summary>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute ExperimentId: ExperimentId is globally unique identifier of the experiment.</summary>
        [JsiiProperty(name: "attrExperimentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrExperimentId
        {
            get;
        }

        /// <summary>Attribute ExperimentName: Name is the name of the experiment, unique in a namespace.</summary>
        [JsiiProperty(name: "attrExperimentName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrExperimentName
        {
            get;
        }

        /// <summary>Attribute GmtModifiedTime: GmtModifiedTime is time when this entity is modified.</summary>
        [JsiiProperty(name: "attrGmtModifiedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGmtModifiedTime
        {
            get;
        }

        /// <summary>Attribute Labels: Labels are tags of the experiment.</summary>
        [JsiiProperty(name: "attrLabels", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLabels
        {
            get;
        }

        /// <summary>Attribute OwnerId: OwnerId is the user account id which this entity belongs to.</summary>
        [JsiiProperty(name: "attrOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOwnerId
        {
            get;
        }

        /// <summary>Attribute TensorboardLogUri: TensorboardLogUri is the default OSS storage path of tensorboard log of trials in the experiment.</summary>
        [JsiiProperty(name: "attrTensorboardLogUri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTensorboardLogUri
        {
            get;
        }

        /// <summary>Attribute UserId: UserId is the user account id which created this entity.</summary>
        [JsiiProperty(name: "attrUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUserId
        {
            get;
        }

        /// <summary>Attribute WorkspaceId: WorkspaceId is the workspace id which contains the experiment.</summary>
        [JsiiProperty(name: "attrWorkspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrWorkspaceId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-pai.ExperimentProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Pai.IExperimentProps Props
        {
            get;
        }

        /// <summary>Represents a `Experiment`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IExperiment), fullyQualifiedName: "@alicloud/ros-cdk-pai.IExperiment")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pai.IExperiment
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Accessibility: Experimental Visibility.</summary>
            [JsiiProperty(name: "attrAccessibility", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAccessibility
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ArtifactUri: ArtifactUri is default OSS storage path of the output of trials in the experiment.</summary>
            [JsiiProperty(name: "attrArtifactUri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrArtifactUri
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreateTime: GmtCreateTime is time when this entity is created.</summary>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ExperimentId: ExperimentId is globally unique identifier of the experiment.</summary>
            [JsiiProperty(name: "attrExperimentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrExperimentId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ExperimentName: Name is the name of the experiment, unique in a namespace.</summary>
            [JsiiProperty(name: "attrExperimentName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrExperimentName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute GmtModifiedTime: GmtModifiedTime is time when this entity is modified.</summary>
            [JsiiProperty(name: "attrGmtModifiedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGmtModifiedTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Labels: Labels are tags of the experiment.</summary>
            [JsiiProperty(name: "attrLabels", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLabels
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OwnerId: OwnerId is the user account id which this entity belongs to.</summary>
            [JsiiProperty(name: "attrOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOwnerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TensorboardLogUri: TensorboardLogUri is the default OSS storage path of tensorboard log of trials in the experiment.</summary>
            [JsiiProperty(name: "attrTensorboardLogUri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTensorboardLogUri
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UserId: UserId is the user account id which created this entity.</summary>
            [JsiiProperty(name: "attrUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUserId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute WorkspaceId: WorkspaceId is the workspace id which contains the experiment.</summary>
            [JsiiProperty(name: "attrWorkspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrWorkspaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-pai.ExperimentProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Pai.IExperimentProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Pai.IExperimentProps>()!;
            }

            /// <summary>The environment this resource belongs to.</summary>
            /// <remarks>
            /// For resources that are created and managed by the CDK
            /// (generally, those created by creating new class instances like Role, Bucket, etc.),
            /// this is always the same as the environment of the stack they belong to;
            /// however, for imported resources
            /// (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
            /// that might be different than the stack they were imported into.
            /// </remarks>
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResourceEnvironment\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment Env
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResourceEnvironment>()!;
            }

            /// <summary>The stack in which this resource is defined.</summary>
            [JsiiProperty(name: "stack", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Stack\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.Stack Stack
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Stack>()!;
            }

            /// <summary>The construct tree node for this construct.</summary>
            [JsiiProperty(name: "node", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ConstructNode\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode Node
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.ConstructNode>()!;
            }
        }
    }
}
