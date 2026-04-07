using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::ThreatDetection::WebLockConfig`.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosWebLockConfig`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-weblockconfig
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Threatdetection.WebLockConfig), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.WebLockConfig", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-threatdetection.WebLockConfigProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class WebLockConfig : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IWebLockConfig
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public WebLockConfig(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IWebLockConfigProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IWebLockConfigProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected WebLockConfig(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected WebLockConfig(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute ConfigId: The configuration ID of the protected directory.</summary>
        [JsiiProperty(name: "attrConfigId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrConfigId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DefenceMode: The prevention mode.</summary>
        [JsiiProperty(name: "attrDefenceMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDefenceMode
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Dir: The directory for which you want to enable web tamper proofing.</summary>
        [JsiiProperty(name: "attrDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDir
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ExclusiveDir: The directory for which you want to disable web tamper proofing.</summary>
        [JsiiProperty(name: "attrExclusiveDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrExclusiveDir
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ExclusiveFile: The file for which you want to disable web tamper proofing.</summary>
        [JsiiProperty(name: "attrExclusiveFile", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrExclusiveFile
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ExclusiveFileType: The type of file for which you want to disable web tamper proofing.</summary>
        /// <remarks>
        /// Separate multiple types with semicolons (;).
        /// </remarks>
        [JsiiProperty(name: "attrExclusiveFileType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrExclusiveFileType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InclusiveFile: The file that has web tamper proofing enabled.</summary>
        [JsiiProperty(name: "attrInclusiveFile", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInclusiveFile
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute InclusiveFileType: The type of file for which you want to enable web tamper proofing.</summary>
        /// <remarks>
        /// Separate multiple types with semicolons (;).
        /// </remarks>
        [JsiiProperty(name: "attrInclusiveFileType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrInclusiveFileType
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute LocalBackupDir: The local path to the backup files of the protected directory.</summary>
        [JsiiProperty(name: "attrLocalBackupDir", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrLocalBackupDir
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Mode: The protection mode of web tamper proofing.</summary>
        [JsiiProperty(name: "attrMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrMode
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Uuid: The UUID of the server for which you want to add a directory to protect.</summary>
        [JsiiProperty(name: "attrUuid", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrUuid
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-threatdetection.WebLockConfigProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Threatdetection.IWebLockConfigProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Threatdetection.IWebLockConfigProps>()!;
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
