using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apig.Datasource
{
    /// <summary>Represents a `PluginClass`.</summary>
    [JsiiInterface(nativeType: typeof(IPluginClass), fullyQualifiedName: "@alicloud/ros-cdk-apig.datasource.IPluginClass")]
    public interface IPluginClass : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Alias: The alias of the plugin class.</summary>
        [JsiiProperty(name: "attrAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrAlias
        {
            get;
        }

        /// <summary>Attribute Description: The description of the plugin class.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute Document: The document of the plugin.</summary>
        [JsiiProperty(name: "attrDocument", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDocument
        {
            get;
        }

        /// <summary>Attribute PluginClassName: The name of the plugin class.</summary>
        [JsiiProperty(name: "attrPluginClassName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPluginClassName
        {
            get;
        }

        /// <summary>Attribute Type: The type of the plugin class.</summary>
        [JsiiProperty(name: "attrType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrType
        {
            get;
        }

        /// <summary>Attribute WasmLanguage: Wasm language.</summary>
        [JsiiProperty(name: "attrWasmLanguage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrWasmLanguage
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-apig.datasource.PluginClassProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Apig.Datasource.IPluginClassProps Props
        {
            get;
        }

        /// <summary>Represents a `PluginClass`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IPluginClass), fullyQualifiedName: "@alicloud/ros-cdk-apig.datasource.IPluginClass")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apig.Datasource.IPluginClass
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Alias: The alias of the plugin class.</summary>
            [JsiiProperty(name: "attrAlias", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrAlias
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: The description of the plugin class.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Document: The document of the plugin.</summary>
            [JsiiProperty(name: "attrDocument", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDocument
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PluginClassName: The name of the plugin class.</summary>
            [JsiiProperty(name: "attrPluginClassName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPluginClassName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Type: The type of the plugin class.</summary>
            [JsiiProperty(name: "attrType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute WasmLanguage: Wasm language.</summary>
            [JsiiProperty(name: "attrWasmLanguage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrWasmLanguage
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-apig.datasource.PluginClassProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Apig.Datasource.IPluginClassProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Apig.Datasource.IPluginClassProps>()!;
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
