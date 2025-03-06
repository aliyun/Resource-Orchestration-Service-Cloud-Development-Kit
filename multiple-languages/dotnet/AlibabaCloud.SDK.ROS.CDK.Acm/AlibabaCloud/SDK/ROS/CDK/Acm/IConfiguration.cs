using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Acm
{
    /// <summary>Represents a `Configuration`.</summary>
    [JsiiInterface(nativeType: typeof(IConfiguration), fullyQualifiedName: "@alicloud/ros-cdk-acm.IConfiguration")]
    public interface IConfiguration : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute DataId: The ID of the configuration.</summary>
        [JsiiProperty(name: "attrDataId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDataId
        {
            get;
        }

        /// <summary>Attribute Group: Group.</summary>
        [JsiiProperty(name: "attrGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrGroup
        {
            get;
        }

        /// <summary>Attribute NamespaceId: ID of namespace.</summary>
        [JsiiProperty(name: "attrNamespaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNamespaceId
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-acm.ConfigurationProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Acm.IConfigurationProps Props
        {
            get;
        }

        /// <summary>Represents a `Configuration`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IConfiguration), fullyQualifiedName: "@alicloud/ros-cdk-acm.IConfiguration")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Acm.IConfiguration
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute DataId: The ID of the configuration.</summary>
            [JsiiProperty(name: "attrDataId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDataId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Group: Group.</summary>
            [JsiiProperty(name: "attrGroup", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrGroup
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute NamespaceId: ID of namespace.</summary>
            [JsiiProperty(name: "attrNamespaceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNamespaceId
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-acm.ConfigurationProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Acm.IConfigurationProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Acm.IConfigurationProps>()!;
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
