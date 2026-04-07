using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pai
{
    /// <summary>Represents a `ModelVersion`.</summary>
    [JsiiInterface(nativeType: typeof(IModelVersion), fullyQualifiedName: "@alicloud/ros-cdk-pai.IModelVersion")]
    public interface IModelVersion : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute ApprovalStatus: Admission status, with values as follows:.</summary>
        [JsiiProperty(name: "attrApprovalStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrApprovalStatus
        {
            get;
        }

        /// <summary>Attribute ExtraInfo: Other information.</summary>
        [JsiiProperty(name: "attrExtraInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrExtraInfo
        {
            get;
        }

        /// <summary>Attribute FormatType: Model format, possible values:.</summary>
        [JsiiProperty(name: "attrFormatType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFormatType
        {
            get;
        }

        /// <summary>Attribute FrameworkType: Model framework, possible values:.</summary>
        [JsiiProperty(name: "attrFrameworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrFrameworkType
        {
            get;
        }

        /// <summary>Attribute GmtCreateTime: Create a model UTC time in the format ISO8601.</summary>
        [JsiiProperty(name: "attrGmtCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGmtCreateTime
        {
            get;
        }

        /// <summary>Attribute GmtModifiedTime: Finally, update the model UTC time in the format iso8601.</summary>
        [JsiiProperty(name: "attrGmtModifiedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGmtModifiedTime
        {
            get;
        }

        /// <summary>Attribute InferenceSpec: Describes how to apply to downstream inference services, such as processors and containers of EAS.</summary>
        [JsiiProperty(name: "attrInferenceSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrInferenceSpec
        {
            get;
        }

        /// <summary>Attribute Labels: List of model version labels.</summary>
        [JsiiProperty(name: "attrLabels", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLabels
        {
            get;
        }

        /// <summary>Attribute Metrics: Model indicators.</summary>
        [JsiiProperty(name: "attrMetrics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMetrics
        {
            get;
        }

        /// <summary>Attribute Options: Extension field.</summary>
        /// <remarks>
        /// The JsonString type.
        /// </remarks>
        [JsiiProperty(name: "attrOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOptions
        {
            get;
        }

        /// <summary>Attribute OwnerId: The Alibaba Cloud account ID.</summary>
        [JsiiProperty(name: "attrOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrOwnerId
        {
            get;
        }

        /// <summary>Attribute SourceId: Source ID.</summary>
        [JsiiProperty(name: "attrSourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSourceId
        {
            get;
        }

        /// <summary>Attribute SourceType: Model source type, possible values:.</summary>
        [JsiiProperty(name: "attrSourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSourceType
        {
            get;
        }

        /// <summary>Attribute TrainingSpec: Training configuration.</summary>
        /// <remarks>
        /// Configuration for fine-tuning, incremental training.
        /// </remarks>
        [JsiiProperty(name: "attrTrainingSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTrainingSpec
        {
            get;
        }

        /// <summary>Attribute Uri: Model version URI, that is, the location where the model is stored.</summary>
        [JsiiProperty(name: "attrUri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUri
        {
            get;
        }

        /// <summary>Attribute UserId: The user ID.</summary>
        [JsiiProperty(name: "attrUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUserId
        {
            get;
        }

        /// <summary>Attribute VersionDescription: Model version description.</summary>
        [JsiiProperty(name: "attrVersionDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVersionDescription
        {
            get;
        }

        /// <summary>Attribute VersionName: Model version.</summary>
        [JsiiProperty(name: "attrVersionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrVersionName
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-pai.ModelVersionProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Pai.IModelVersionProps Props
        {
            get;
        }

        /// <summary>Represents a `ModelVersion`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IModelVersion), fullyQualifiedName: "@alicloud/ros-cdk-pai.IModelVersion")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Pai.IModelVersion
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute ApprovalStatus: Admission status, with values as follows:.</summary>
            [JsiiProperty(name: "attrApprovalStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrApprovalStatus
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ExtraInfo: Other information.</summary>
            [JsiiProperty(name: "attrExtraInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrExtraInfo
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute FormatType: Model format, possible values:.</summary>
            [JsiiProperty(name: "attrFormatType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFormatType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute FrameworkType: Model framework, possible values:.</summary>
            [JsiiProperty(name: "attrFrameworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrFrameworkType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute GmtCreateTime: Create a model UTC time in the format ISO8601.</summary>
            [JsiiProperty(name: "attrGmtCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGmtCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute GmtModifiedTime: Finally, update the model UTC time in the format iso8601.</summary>
            [JsiiProperty(name: "attrGmtModifiedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGmtModifiedTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute InferenceSpec: Describes how to apply to downstream inference services, such as processors and containers of EAS.</summary>
            [JsiiProperty(name: "attrInferenceSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrInferenceSpec
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Labels: List of model version labels.</summary>
            [JsiiProperty(name: "attrLabels", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLabels
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Metrics: Model indicators.</summary>
            [JsiiProperty(name: "attrMetrics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMetrics
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Options: Extension field.</summary>
            /// <remarks>
            /// The JsonString type.
            /// </remarks>
            [JsiiProperty(name: "attrOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOptions
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute OwnerId: The Alibaba Cloud account ID.</summary>
            [JsiiProperty(name: "attrOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrOwnerId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SourceId: Source ID.</summary>
            [JsiiProperty(name: "attrSourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSourceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SourceType: Model source type, possible values:.</summary>
            [JsiiProperty(name: "attrSourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSourceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TrainingSpec: Training configuration.</summary>
            /// <remarks>
            /// Configuration for fine-tuning, incremental training.
            /// </remarks>
            [JsiiProperty(name: "attrTrainingSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTrainingSpec
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Uri: Model version URI, that is, the location where the model is stored.</summary>
            [JsiiProperty(name: "attrUri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUri
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UserId: The user ID.</summary>
            [JsiiProperty(name: "attrUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUserId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VersionDescription: Model version description.</summary>
            [JsiiProperty(name: "attrVersionDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVersionDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute VersionName: Model version.</summary>
            [JsiiProperty(name: "attrVersionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrVersionName
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-pai.ModelVersionProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Pai.IModelVersionProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Pai.IModelVersionProps>()!;
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
