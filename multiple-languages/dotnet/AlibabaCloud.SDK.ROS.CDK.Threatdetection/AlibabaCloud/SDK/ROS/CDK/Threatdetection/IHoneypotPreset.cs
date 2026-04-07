using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Threatdetection
{
    /// <summary>Represents a `HoneypotPreset`.</summary>
    [JsiiInterface(nativeType: typeof(IHoneypotPreset), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.IHoneypotPreset")]
    public interface IHoneypotPreset : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute HoneypotImageName: The name of the honeypot image.</summary>
        [JsiiProperty(name: "attrHoneypotImageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHoneypotImageName
        {
            get;
        }

        /// <summary>Attribute HoneypotPresetId: The ID of the honeypot template.</summary>
        [JsiiProperty(name: "attrHoneypotPresetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrHoneypotPresetId
        {
            get;
        }

        /// <summary>Attribute Meta: The custom configurations of the honeypot template.</summary>
        [JsiiProperty(name: "attrMeta", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMeta
        {
            get;
        }

        /// <summary>Attribute NodeId: The ID of the management node.</summary>
        [JsiiProperty(name: "attrNodeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNodeId
        {
            get;
        }

        /// <summary>Attribute PresetName: The custom name of the honeypot template.</summary>
        [JsiiProperty(name: "attrPresetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPresetName
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-threatdetection.HoneypotPresetProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Threatdetection.IHoneypotPresetProps Props
        {
            get;
        }

        /// <summary>Represents a `HoneypotPreset`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IHoneypotPreset), fullyQualifiedName: "@alicloud/ros-cdk-threatdetection.IHoneypotPreset")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Threatdetection.IHoneypotPreset
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute HoneypotImageName: The name of the honeypot image.</summary>
            [JsiiProperty(name: "attrHoneypotImageName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHoneypotImageName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute HoneypotPresetId: The ID of the honeypot template.</summary>
            [JsiiProperty(name: "attrHoneypotPresetId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrHoneypotPresetId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Meta: The custom configurations of the honeypot template.</summary>
            [JsiiProperty(name: "attrMeta", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMeta
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NodeId: The ID of the management node.</summary>
            [JsiiProperty(name: "attrNodeId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNodeId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PresetName: The custom name of the honeypot template.</summary>
            [JsiiProperty(name: "attrPresetName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPresetName
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-threatdetection.HoneypotPresetProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Threatdetection.IHoneypotPresetProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Threatdetection.IHoneypotPresetProps>()!;
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
