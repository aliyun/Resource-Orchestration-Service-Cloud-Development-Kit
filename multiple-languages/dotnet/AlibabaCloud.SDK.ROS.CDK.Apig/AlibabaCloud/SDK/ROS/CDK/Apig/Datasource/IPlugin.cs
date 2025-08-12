using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apig.Datasource
{
    /// <summary>Represents a `Plugin`.</summary>
    [JsiiInterface(nativeType: typeof(IPlugin), fullyQualifiedName: "@alicloud/ros-cdk-apig.datasource.IPlugin")]
    public interface IPlugin : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute GatewayId: The ID of the Gateway.</summary>
        [JsiiProperty(name: "attrGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGatewayId
        {
            get;
        }

        /// <summary>Attribute GatewayName: The name of the gateway name.</summary>
        [JsiiProperty(name: "attrGatewayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGatewayName
        {
            get;
        }

        /// <summary>Attribute PluginClassId: The ID of the plugin class.</summary>
        [JsiiProperty(name: "attrPluginClassId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPluginClassId
        {
            get;
        }

        /// <summary>Attribute PluginId: The ID of the plugin.</summary>
        [JsiiProperty(name: "attrPluginId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPluginId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-apig.datasource.PluginProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Apig.Datasource.IPluginProps Props
        {
            get;
        }

        /// <summary>Represents a `Plugin`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IPlugin), fullyQualifiedName: "@alicloud/ros-cdk-apig.datasource.IPlugin")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apig.Datasource.IPlugin
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute GatewayId: The ID of the Gateway.</summary>
            [JsiiProperty(name: "attrGatewayId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGatewayId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute GatewayName: The name of the gateway name.</summary>
            [JsiiProperty(name: "attrGatewayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGatewayName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PluginClassId: The ID of the plugin class.</summary>
            [JsiiProperty(name: "attrPluginClassId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPluginClassId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PluginId: The ID of the plugin.</summary>
            [JsiiProperty(name: "attrPluginId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPluginId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-apig.datasource.PluginProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Apig.Datasource.IPluginProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Apig.Datasource.IPluginProps>()!;
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
