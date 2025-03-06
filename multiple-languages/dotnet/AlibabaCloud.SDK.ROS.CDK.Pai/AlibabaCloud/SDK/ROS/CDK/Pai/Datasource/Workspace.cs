using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Pai.Datasource
{
    /// <summary>This class encapsulates and extends the ROS resource type `DATASOURCE::PAI::Workspace`, which is used to query the information about a Platform for AI (PAI) workspace.</summary>
    /// <remarks>
    /// <strong>Note</strong>: This class may have some new functions to facilitate development, so it is recommended to use this class instead of `RosWorkspace`for a more convenient development experience.
    /// See https://www.alibabacloud.com/help/ros/developer-reference/datasource-pai-workspace
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Pai.Datasource.Workspace), fullyQualifiedName: "@alicloud/ros-cdk-pai.datasource.Workspace", parametersJson: "[{\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-pai.datasource.WorkspaceProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"optional\":true,\"type\":{\"primitive\":\"boolean\"}}]")]
    public class Workspace : AlibabaCloud.SDK.ROS.CDK.Core.Resource_, AlibabaCloud.SDK.ROS.CDK.Pai.Datasource.IWorkspace
    {
        /// <summary>Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.</summary>
        public Workspace(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Pai.Datasource.IWorkspaceProps props, bool? enableResourcePropertyConstraint = null): base(_MakeDeputyProps(scope, id, props, enableResourcePropertyConstraint))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Pai.Datasource.IWorkspaceProps props, bool? enableResourcePropertyConstraint = null)
        {
            return new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Workspace(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Workspace(DeputyProps props): base(props)
        {
        }

        /// <summary>Attribute AdminNames: List of administrator account names.</summary>
        [JsiiProperty(name: "attrAdminNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrAdminNames
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Creator: The user ID of the creator.</summary>
        [JsiiProperty(name: "attrCreator", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrCreator
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Description: The description of the workspace.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDescription
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute DisplayName: The display name of the workspace.</summary>
        [JsiiProperty(name: "attrDisplayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrDisplayName
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute EnvTypes: The environments of the workspace.</summary>
        [JsiiProperty(name: "attrEnvTypes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrEnvTypes
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute ExtraInfos: Additional information, currently including TenantId (tenant ID).</summary>
        [JsiiProperty(name: "attrExtraInfos", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrExtraInfos
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute IsDefault: Default Workspace.</summary>
        [JsiiProperty(name: "attrIsDefault", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrIsDefault
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute Users: List of users.</summary>
        [JsiiProperty(name: "attrUsers", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrUsers
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute WorkspaceId: The first ID of the resource.</summary>
        [JsiiProperty(name: "attrWorkspaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrWorkspaceId
        {
            get => GetInstanceProperty<object>()!;
        }

        /// <summary>Attribute WorkspaceName: The name of the workspace.</summary>
        [JsiiProperty(name: "attrWorkspaceName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object AttrWorkspaceName
        {
            get => GetInstanceProperty<object>()!;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-pai.datasource.WorkspaceProps\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Pai.Datasource.IWorkspaceProps Props
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Pai.Datasource.IWorkspaceProps>()!;
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
