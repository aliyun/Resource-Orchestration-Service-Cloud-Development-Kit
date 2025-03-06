using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Apigateway
{
    /// <summary>Represents a `Plugin`.</summary>
    [JsiiInterface(nativeType: typeof(IPlugin), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.IPlugin")]
    public interface IPlugin : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute Description: The description of the plug-in, which cannot exceed 200 characters.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute PluginData: The definition statement of the plug-in.</summary>
        /// <remarks>
        /// Plug-in definition statements in the JSON and YAML formats are supported.
        /// </remarks>
        [JsiiProperty(name: "attrPluginData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPluginData
        {
            get;
        }

        /// <summary>Attribute PluginId: The generated plugin ID.</summary>
        [JsiiProperty(name: "attrPluginId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPluginId
        {
            get;
        }

        /// <summary>Attribute PluginName: The name of the plug-in that you want to create.</summary>
        /// <remarks>
        /// It can contain uppercase English letters, lowercase English letters, Chinese characters, numbers, and underscores (). It must be 4 to 50 characters in length and cannot start with an underscore ().
        /// </remarks>
        [JsiiProperty(name: "attrPluginName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPluginName
        {
            get;
        }

        /// <summary>Attribute PluginType: The type of the plug-in.</summary>
        /// <remarks>
        /// Valid values: ipControl: indicates IP address-based access control. trafficControl: indicates throttling. backendSignature: indicates backend signature. jwtAuth: indicates JWT (OpenId Connect). cors: indicates cross-origin resource access (CORS). caching: indicates caching.
        /// </remarks>
        [JsiiProperty(name: "attrPluginType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrPluginType
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-apigateway.PluginProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Apigateway.IPluginProps Props
        {
            get;
        }

        /// <summary>Represents a `Plugin`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IPlugin), fullyQualifiedName: "@alicloud/ros-cdk-apigateway.IPlugin")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Apigateway.IPlugin
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute Description: The description of the plug-in, which cannot exceed 200 characters.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PluginData: The definition statement of the plug-in.</summary>
            /// <remarks>
            /// Plug-in definition statements in the JSON and YAML formats are supported.
            /// </remarks>
            [JsiiProperty(name: "attrPluginData", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPluginData
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PluginId: The generated plugin ID.</summary>
            [JsiiProperty(name: "attrPluginId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPluginId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PluginName: The name of the plug-in that you want to create.</summary>
            /// <remarks>
            /// It can contain uppercase English letters, lowercase English letters, Chinese characters, numbers, and underscores (). It must be 4 to 50 characters in length and cannot start with an underscore ().
            /// </remarks>
            [JsiiProperty(name: "attrPluginName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPluginName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute PluginType: The type of the plug-in.</summary>
            /// <remarks>
            /// Valid values: ipControl: indicates IP address-based access control. trafficControl: indicates throttling. backendSignature: indicates backend signature. jwtAuth: indicates JWT (OpenId Connect). cors: indicates cross-origin resource access (CORS). caching: indicates caching.
            /// </remarks>
            [JsiiProperty(name: "attrPluginType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrPluginType
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-apigateway.PluginProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Apigateway.IPluginProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Apigateway.IPluginProps>()!;
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
