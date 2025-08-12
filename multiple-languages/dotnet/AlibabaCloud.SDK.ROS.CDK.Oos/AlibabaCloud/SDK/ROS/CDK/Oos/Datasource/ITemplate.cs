using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Oos.Datasource
{
    /// <summary>Represents a `Template`.</summary>
    [JsiiInterface(nativeType: typeof(ITemplate), fullyQualifiedName: "@alicloud/ros-cdk-oos.datasource.ITemplate")]
    public interface ITemplate : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Content: The content of the template.</summary>
        [JsiiProperty(name: "attrContent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrContent
        {
            get;
        }

        /// <summary>Attribute CreatedBy: The creator of the template.</summary>
        [JsiiProperty(name: "attrCreatedBy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreatedBy
        {
            get;
        }

        /// <summary>Attribute CreatedDate: Specifies to query the template that is created at or before the specified time.The value must be in the YYYY-MM-DDThh:mm::ssZ format.</summary>
        [JsiiProperty(name: "attrCreatedDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreatedDate
        {
            get;
        }

        /// <summary>Attribute Description: The description of the template.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute Hash: The SHA-256 value of the template content.</summary>
        [JsiiProperty(name: "attrHash", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHash
        {
            get;
        }

        /// <summary>Attribute HasTrigger: Specifies whether to query the template that is configured with a trigger.</summary>
        [JsiiProperty(name: "attrHasTrigger", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHasTrigger
        {
            get;
        }

        /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
        [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceGroupId
        {
            get;
        }

        /// <summary>Attribute ShareType: The share type of the template.</summary>
        /// <remarks>
        /// Valid values:
        /// Public
        /// Private
        /// </remarks>
        [JsiiProperty(name: "attrShareType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrShareType
        {
            get;
        }

        /// <summary>Attribute Tags: The tag keys and values.</summary>
        /// <remarks>
        /// The number of key-value pairs ranges from 1 to 20. Example: {"k1":"k2","k2":"v2"}
        /// </remarks>
        [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTags
        {
            get;
        }

        /// <summary>Attribute TemplateFormat: The format of the template.</summary>
        /// <remarks>
        /// Valid values:
        /// JSON
        /// YAML
        /// </remarks>
        [JsiiProperty(name: "attrTemplateFormat", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTemplateFormat
        {
            get;
        }

        /// <summary>Attribute TemplateId: The ID of the template.</summary>
        [JsiiProperty(name: "attrTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTemplateId
        {
            get;
        }

        /// <summary>Attribute TemplateType: The type of the template.</summary>
        /// <remarks>
        /// Valid values:
        /// Automation: the template for automated tasks.
        /// State: the template for configuration inventories.
        /// Package: the template for software packages.
        /// </remarks>
        [JsiiProperty(name: "attrTemplateType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrTemplateType
        {
            get;
        }

        /// <summary>Attribute UpdatedBy: The user who last updated the template.</summary>
        [JsiiProperty(name: "attrUpdatedBy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUpdatedBy
        {
            get;
        }

        /// <summary>Attribute UpdatedDate: The time when the template was last updated.</summary>
        [JsiiProperty(name: "attrUpdatedDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrUpdatedDate
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-oos.datasource.TemplateProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Oos.Datasource.ITemplateProps Props
        {
            get;
        }

        /// <summary>Represents a `Template`.</summary>
        [JsiiTypeProxy(nativeType: typeof(ITemplate), fullyQualifiedName: "@alicloud/ros-cdk-oos.datasource.ITemplate")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Oos.Datasource.ITemplate
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Content: The content of the template.</summary>
            [JsiiProperty(name: "attrContent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrContent
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreatedBy: The creator of the template.</summary>
            [JsiiProperty(name: "attrCreatedBy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreatedBy
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute CreatedDate: Specifies to query the template that is created at or before the specified time.The value must be in the YYYY-MM-DDThh:mm::ssZ format.</summary>
            [JsiiProperty(name: "attrCreatedDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreatedDate
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: The description of the template.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Hash: The SHA-256 value of the template content.</summary>
            [JsiiProperty(name: "attrHash", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHash
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HasTrigger: Specifies whether to query the template that is configured with a trigger.</summary>
            [JsiiProperty(name: "attrHasTrigger", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHasTrigger
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceGroupId: The ID of the resource group.</summary>
            [JsiiProperty(name: "attrResourceGroupId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceGroupId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ShareType: The share type of the template.</summary>
            /// <remarks>
            /// Valid values:
            /// Public
            /// Private
            /// </remarks>
            [JsiiProperty(name: "attrShareType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrShareType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Tags: The tag keys and values.</summary>
            /// <remarks>
            /// The number of key-value pairs ranges from 1 to 20. Example: {"k1":"k2","k2":"v2"}
            /// </remarks>
            [JsiiProperty(name: "attrTags", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTags
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TemplateFormat: The format of the template.</summary>
            /// <remarks>
            /// Valid values:
            /// JSON
            /// YAML
            /// </remarks>
            [JsiiProperty(name: "attrTemplateFormat", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTemplateFormat
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TemplateId: The ID of the template.</summary>
            [JsiiProperty(name: "attrTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTemplateId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute TemplateType: The type of the template.</summary>
            /// <remarks>
            /// Valid values:
            /// Automation: the template for automated tasks.
            /// State: the template for configuration inventories.
            /// Package: the template for software packages.
            /// </remarks>
            [JsiiProperty(name: "attrTemplateType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrTemplateType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UpdatedBy: The user who last updated the template.</summary>
            [JsiiProperty(name: "attrUpdatedBy", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUpdatedBy
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute UpdatedDate: The time when the template was last updated.</summary>
            [JsiiProperty(name: "attrUpdatedDate", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrUpdatedDate
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-oos.datasource.TemplateProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Oos.Datasource.ITemplateProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Oos.Datasource.ITemplateProps>()!;
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
