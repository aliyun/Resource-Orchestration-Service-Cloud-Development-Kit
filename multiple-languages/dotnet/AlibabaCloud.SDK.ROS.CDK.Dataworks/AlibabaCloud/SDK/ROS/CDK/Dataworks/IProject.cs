using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Dataworks
{
    /// <summary>Represents a `Project`.</summary>
    [JsiiInterface(nativeType: typeof(IProject), fullyQualifiedName: "@alicloud/ros-cdk-dataworks.IProject")]
    public interface IProject : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute EnvTypes: The environment of the workspace.</summary>
        /// <remarks>
        /// Valid values: PROD and DEV.
        /// The value PROD indicates the production environment. Workspaces in basic mode provide only the production environment.
        /// The value DEV indicates the development environment. Workspaces in standard mode provide both the development environment and the production environment.
        /// </remarks>
        [JsiiProperty(name: "attrEnvTypes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnvTypes
        {
            get;
        }

        /// <summary>Attribute IsDefault: Indicates whether the workspace is the default workspace.</summary>
        /// <remarks>
        /// Valid values:
        /// 1: The workspace is the default workspace.
        /// 0: The workspace is not the default workspace.
        /// </remarks>
        [JsiiProperty(name: "attrIsDefault", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrIsDefault
        {
            get;
        }

        /// <summary>Attribute ProjectId: The ID of the workspace.</summary>
        [JsiiProperty(name: "attrProjectId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrProjectId
        {
            get;
        }

        /// <summary>Attribute ProjectIdentifier: The name of the workspace.</summary>
        /// <remarks>
        /// The name can contain letters, digits, and underscores (_) and must start with a letter or digit.
        /// </remarks>
        [JsiiProperty(name: "attrProjectIdentifier", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrProjectIdentifier
        {
            get;
        }

        /// <summary>Attribute ProtectedMode: Indicates whether the workspace protection feature is enabled.</summary>
        /// <remarks>
        /// Valid values:
        /// 1: The workspace protection feature is enabled.
        /// 0: The workspace protection feature is disabled.
        /// </remarks>
        [JsiiProperty(name: "attrProtectedMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrProtectedMode
        {
            get;
        }

        /// <summary>Attribute ResidentArea: The type of the workspace.</summary>
        /// <remarks>
        /// Valid values: private and swap.
        /// </remarks>
        [JsiiProperty(name: "attrResidentArea", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResidentArea
        {
            get;
        }

        /// <summary>Attribute SchedulerMaxRetryTimes: The default maximum number of automatic reruns that are allowed after an error occurs.</summary>
        [JsiiProperty(name: "attrSchedulerMaxRetryTimes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSchedulerMaxRetryTimes
        {
            get;
        }

        /// <summary>Attribute SchedulerRetryInterval: The interval between automatic reruns after an error occurs.</summary>
        /// <remarks>
        /// Unit: milliseconds. The maximum interval is 30 minutes. You must pay attention to the conversion between units.
        /// </remarks>
        [JsiiProperty(name: "attrSchedulerRetryInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSchedulerRetryInterval
        {
            get;
        }

        /// <summary>Attribute TablePrivacyMode: Indicates whether the MaxCompute tables in the workspace are visible to the users within the tenant.</summary>
        /// <remarks>
        /// Valid values:
        /// 0: The MaxCompute tables are invisible to the users within a tenant.
        /// 1: The MaxCompute tables are visible to the users within a tenant.
        /// </remarks>
        [JsiiProperty(name: "attrTablePrivacyMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTablePrivacyMode
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-dataworks.ProjectProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Dataworks.IProjectProps Props
        {
            get;
        }

        /// <summary>Represents a `Project`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IProject), fullyQualifiedName: "@alicloud/ros-cdk-dataworks.IProject")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Dataworks.IProject
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute EnvTypes: The environment of the workspace.</summary>
            /// <remarks>
            /// Valid values: PROD and DEV.
            /// The value PROD indicates the production environment. Workspaces in basic mode provide only the production environment.
            /// The value DEV indicates the development environment. Workspaces in standard mode provide both the development environment and the production environment.
            /// </remarks>
            [JsiiProperty(name: "attrEnvTypes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnvTypes
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
            public object AttrIsDefault
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ProjectId: The ID of the workspace.</summary>
            [JsiiProperty(name: "attrProjectId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrProjectId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ProjectIdentifier: The name of the workspace.</summary>
            /// <remarks>
            /// The name can contain letters, digits, and underscores (_) and must start with a letter or digit.
            /// </remarks>
            [JsiiProperty(name: "attrProjectIdentifier", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrProjectIdentifier
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
            public object AttrProtectedMode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResidentArea: The type of the workspace.</summary>
            /// <remarks>
            /// Valid values: private and swap.
            /// </remarks>
            [JsiiProperty(name: "attrResidentArea", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResidentArea
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SchedulerMaxRetryTimes: The default maximum number of automatic reruns that are allowed after an error occurs.</summary>
            [JsiiProperty(name: "attrSchedulerMaxRetryTimes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSchedulerMaxRetryTimes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute SchedulerRetryInterval: The interval between automatic reruns after an error occurs.</summary>
            /// <remarks>
            /// Unit: milliseconds. The maximum interval is 30 minutes. You must pay attention to the conversion between units.
            /// </remarks>
            [JsiiProperty(name: "attrSchedulerRetryInterval", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSchedulerRetryInterval
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
            public object AttrTablePrivacyMode
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-dataworks.ProjectProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Dataworks.IProjectProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Dataworks.IProjectProps>()!;
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
            [JsiiProperty(name: "env", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.ResourceEnvironment\"}")]
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
