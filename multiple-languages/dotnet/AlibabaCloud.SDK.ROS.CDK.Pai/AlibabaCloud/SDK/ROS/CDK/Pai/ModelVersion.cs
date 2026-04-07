using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pai
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::PAI::ModelVersion`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosModelVersion`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pai-modelversion
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Pai.ModelVersion), fullyQualifiedName: "@alicloud/ros-cdk-pai.ModelVersion", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-pai.ModelVersionProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class ModelVersion : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Pai.IModelVersion
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public ModelVersion(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Pai.IModelVersionProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Pai.IModelVersionProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected ModelVersion(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected ModelVersion(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute ApprovalStatus: Admission status, with values as follows:.</summary>
        [JsiiProperty(name: "attrApprovalStatus", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrApprovalStatus
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ExtraInfo: Other information.</summary>
        [JsiiProperty(name: "attrExtraInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrExtraInfo
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute FormatType: Model format, possible values:.</summary>
        [JsiiProperty(name: "attrFormatType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrFormatType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute FrameworkType: Model framework, possible values:.</summary>
        [JsiiProperty(name: "attrFrameworkType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrFrameworkType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute GmtCreateTime: Create a model UTC time in the format ISO8601.</summary>
        [JsiiProperty(name: "attrGmtCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrGmtCreateTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute GmtModifiedTime: Finally, update the model UTC time in the format iso8601.</summary>
        [JsiiProperty(name: "attrGmtModifiedTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrGmtModifiedTime
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InferenceSpec: Describes how to apply to downstream inference services, such as processors and containers of EAS.</summary>
        [JsiiProperty(name: "attrInferenceSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInferenceSpec
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Labels: List of model version labels.</summary>
        [JsiiProperty(name: "attrLabels", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrLabels
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Metrics: Model indicators.</summary>
        [JsiiProperty(name: "attrMetrics", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMetrics
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Options: Extension field.</summary>
        /// <remarks>
        /// The JsonString type.
        /// </remarks>
        [JsiiProperty(name: "attrOptions", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrOptions
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute OwnerId: The Alibaba Cloud account ID.</summary>
        [JsiiProperty(name: "attrOwnerId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrOwnerId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SourceId: Source ID.</summary>
        [JsiiProperty(name: "attrSourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSourceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SourceType: Model source type, possible values:.</summary>
        [JsiiProperty(name: "attrSourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSourceType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute TrainingSpec: Training configuration.</summary>
        /// <remarks>
        /// Configuration for fine-tuning, incremental training.
        /// </remarks>
        [JsiiProperty(name: "attrTrainingSpec", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTrainingSpec
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Uri: Model version URI, that is, the location where the model is stored.</summary>
        [JsiiProperty(name: "attrUri", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrUri
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute UserId: The user ID.</summary>
        [JsiiProperty(name: "attrUserId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrUserId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VersionDescription: Model version description.</summary>
        [JsiiProperty(name: "attrVersionDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVersionDescription
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute VersionName: Model version.</summary>
        [JsiiProperty(name: "attrVersionName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrVersionName
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-pai.ModelVersionProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Pai.IModelVersionProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Pai.IModelVersionProps>()!;
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        protected virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "id", typeJson: "{\"primitive\":\"string\"}")]
        protected virtual string Id
        {
            get => GetInstanceProperty<string>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "scope", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}")]
        protected virtual AlibabaCloud.SDK.ROS.CDK.Core.Construct Scope
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.Construct>()!;
            set => SetInstanceProperty(value);
        }
    }
}
