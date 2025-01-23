using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apig
{
    /// <summary>Represents a `PluginAttachment`.</summary>
    [JsiiInterface(nativeType: typeof(IPluginAttachment), fullyQualifiedName: "@alicloud/ros-cdk-apig.IPluginAttachment")]
    public interface IPluginAttachment : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute AttachResourceId: The resource ID to be attached by the plugin.</summary>
        [JsiiProperty(name: "attrAttachResourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAttachResourceId
        {
            get;
        }

        /// <summary>Attribute AttachResourceIds: The list of resource IDs to be attached by the plugin.</summary>
        [JsiiProperty(name: "attrAttachResourceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAttachResourceIds
        {
            get;
        }

        /// <summary>Attribute AttachResourceNames: The list of resource names to be attached by the plugin.</summary>
        [JsiiProperty(name: "attrAttachResourceNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAttachResourceNames
        {
            get;
        }

        /// <summary>Attribute AttachResourceParentIds: The list of parent IDs for resources to be attached by the plugin.</summary>
        [JsiiProperty(name: "attrAttachResourceParentIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAttachResourceParentIds
        {
            get;
        }

        /// <summary>Attribute AttachResourceType: The type of the resource to be attached by the plugin.</summary>
        [JsiiProperty(name: "attrAttachResourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAttachResourceType
        {
            get;
        }

        /// <summary>Attribute Enable: Whether to enable this plugin.</summary>
        [JsiiProperty(name: "attrEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnable
        {
            get;
        }

        /// <summary>Attribute EnvironmentId: The ID of the environment.</summary>
        [JsiiProperty(name: "attrEnvironmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnvironmentId
        {
            get;
        }

        /// <summary>Attribute PluginAttachmentId: The ID of plugin attachment.</summary>
        [JsiiProperty(name: "attrPluginAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPluginAttachmentId
        {
            get;
        }

        /// <summary>Attribute PluginClassInfo: The type of the plugin.</summary>
        [JsiiProperty(name: "attrPluginClassInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPluginClassInfo
        {
            get;
        }

        /// <summary>Attribute PluginInfo: The information about the association of plugin with gateway instance.</summary>
        [JsiiProperty(name: "attrPluginInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPluginInfo
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-apig.PluginAttachmentProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Apig.IPluginAttachmentProps Props
        {
            get;
        }

        /// <summary>Represents a `PluginAttachment`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IPluginAttachment), fullyQualifiedName: "@alicloud/ros-cdk-apig.IPluginAttachment")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apig.IPluginAttachment
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute AttachResourceId: The resource ID to be attached by the plugin.</summary>
            [JsiiProperty(name: "attrAttachResourceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAttachResourceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AttachResourceIds: The list of resource IDs to be attached by the plugin.</summary>
            [JsiiProperty(name: "attrAttachResourceIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAttachResourceIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AttachResourceNames: The list of resource names to be attached by the plugin.</summary>
            [JsiiProperty(name: "attrAttachResourceNames", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAttachResourceNames
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AttachResourceParentIds: The list of parent IDs for resources to be attached by the plugin.</summary>
            [JsiiProperty(name: "attrAttachResourceParentIds", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAttachResourceParentIds
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute AttachResourceType: The type of the resource to be attached by the plugin.</summary>
            [JsiiProperty(name: "attrAttachResourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAttachResourceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Enable: Whether to enable this plugin.</summary>
            [JsiiProperty(name: "attrEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnable
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute EnvironmentId: The ID of the environment.</summary>
            [JsiiProperty(name: "attrEnvironmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnvironmentId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PluginAttachmentId: The ID of plugin attachment.</summary>
            [JsiiProperty(name: "attrPluginAttachmentId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPluginAttachmentId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PluginClassInfo: The type of the plugin.</summary>
            [JsiiProperty(name: "attrPluginClassInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPluginClassInfo
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PluginInfo: The information about the association of plugin with gateway instance.</summary>
            [JsiiProperty(name: "attrPluginInfo", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPluginInfo
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-apig.PluginAttachmentProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Apig.IPluginAttachmentProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Apig.IPluginAttachmentProps>()!;
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
