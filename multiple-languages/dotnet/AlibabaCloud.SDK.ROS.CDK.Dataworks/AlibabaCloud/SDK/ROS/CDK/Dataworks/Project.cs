using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dataworks
{
    /// <summary>This class encapsulates and extends the ROS resource type `ALIYUN::DataWorks::Project`, which is used to create a DataWorks workspace.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosProject`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dataworks-project
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Dataworks.Project), fullyQualifiedName: "@alicloud/ros-cdk-dataworks.Project", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-dataworks.ProjectProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Project : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Dataworks.IProject
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public Project(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Dataworks.IProjectProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Dataworks.IProjectProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Project(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Project(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute EnvTypes: The environment of the workspace.</summary>
        /// <remarks>
        /// Valid values: PROD and DEV.
        /// The value PROD indicates the production environment. Workspaces in basic mode provide only the production environment.
        /// The value DEV indicates the development environment. Workspaces in standard mode provide both the development environment and the production environment.
        /// </remarks>
        [JsiiProperty(name: "attrEnvTypes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEnvTypes
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Id: The ID number of the workspace.</summary>
        [JsiiProperty(name: "attrId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IsDefault: Indicates whether the workspace is the default workspace.</summary>
        /// <remarks>
        /// Valid values:
        /// 1: The workspace is the default workspace.
        /// 0: The workspace is not the default workspace.
        /// </remarks>
        [JsiiProperty(name: "attrIsDefault", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrIsDefault
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ProjectIdentifier: The name of the workspace.</summary>
        /// <remarks>
        /// The name can contain letters, digits, and underscores (_) and must start with a letter or digit.
        /// </remarks>
        [JsiiProperty(name: "attrProjectIdentifier", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrProjectIdentifier
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ProtectedMode: Indicates whether the workspace protection feature is enabled.</summary>
        /// <remarks>
        /// Valid values:
        /// 1: The workspace protection feature is enabled.
        /// 0: The workspace protection feature is disabled.
        /// </remarks>
        [JsiiProperty(name: "attrProtectedMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrProtectedMode
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ResidentArea: The type of the workspace.</summary>
        /// <remarks>
        /// Valid values: private and swap.
        /// </remarks>
        [JsiiProperty(name: "attrResidentArea", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrResidentArea
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SchedulerMaxRetryTimes: The default maximum number of automatic reruns that are allowed after an error occurs.</summary>
        [JsiiProperty(name: "attrSchedulerMaxRetryTimes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSchedulerMaxRetryTimes
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute SchedulerRetryInterval: The interval between automatic reruns after an error occurs.</summary>
        /// <remarks>
        /// Unit: milliseconds. The maximum interval is 30 minutes. You must pay attention to the conversion between units.
        /// </remarks>
        [JsiiProperty(name: "attrSchedulerRetryInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrSchedulerRetryInterval
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute TablePrivacyMode: Indicates whether the MaxCompute tables in the workspace are visible to the users within the tenant.</summary>
        /// <remarks>
        /// Valid values:
        /// 0: The MaxCompute tables are invisible to the users within a tenant.
        /// 1: The MaxCompute tables are visible to the users within a tenant.
        /// </remarks>
        [JsiiProperty(name: "attrTablePrivacyMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrTablePrivacyMode
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-dataworks.ProjectProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Dataworks.IProjectProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Dataworks.IProjectProps>()!;
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
