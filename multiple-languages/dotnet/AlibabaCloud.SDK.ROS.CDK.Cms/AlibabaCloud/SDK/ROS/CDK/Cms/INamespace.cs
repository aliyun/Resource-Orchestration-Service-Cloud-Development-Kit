using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Represents a `Namespace`.</summary>
    [JsiiInterface(nativeType: typeof(INamespace), fullyQualifiedName: "@alicloud/ros-cdk-cms.INamespace")]
    public interface INamespace : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute CreateTime: The timestamp that was generated when the namespace was created.</summary>
        /// <remarks>
        /// Unit: milliseconds.
        /// </remarks>
        [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCreateTime
        {
            get;
        }

        /// <summary>Attribute Description: The description of the namespace.</summary>
        [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrDescription
        {
            get;
        }

        /// <summary>Attribute ModifyTime: The timestamp that was generated when the namespace was last modified.</summary>
        [JsiiProperty(name: "attrModifyTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrModifyTime
        {
            get;
        }

        /// <summary>Attribute Namespace: The namespace for the Alibaba Cloud service.</summary>
        [JsiiProperty(name: "attrNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrNamespace
        {
            get;
        }

        /// <summary>Attribute Specification: The data retention period of the namespace.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>cms.s1.large: Data storage duration is 15 days.</description>
        /// <description>cms.s1.xlarge: Data storage duration is 32 days.</description>
        /// <description>cms.s1.2xlarge: Data storage duration 63 days.</description>
        /// <description>cms.s1.3xlarge: Data storage duration 93 days.</description>
        /// <description>cms.s1.6xlarge: Data storage duration 185 days.</description>
        /// <description>cms.s1.12xlarge: Data storage duration 376 days.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "attrSpecification", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrSpecification
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cms.NamespaceProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cms.INamespaceProps Props
        {
            get;
        }

        /// <summary>Represents a `Namespace`.</summary>
        [JsiiTypeProxy(nativeType: typeof(INamespace), fullyQualifiedName: "@alicloud/ros-cdk-cms.INamespace")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.INamespace
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute CreateTime: The timestamp that was generated when the namespace was created.</summary>
            /// <remarks>
            /// Unit: milliseconds.
            /// </remarks>
            [JsiiProperty(name: "attrCreateTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCreateTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Description: The description of the namespace.</summary>
            [JsiiProperty(name: "attrDescription", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrDescription
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ModifyTime: The timestamp that was generated when the namespace was last modified.</summary>
            [JsiiProperty(name: "attrModifyTime", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrModifyTime
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Namespace: The namespace for the Alibaba Cloud service.</summary>
            [JsiiProperty(name: "attrNamespace", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrNamespace
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Specification: The data retention period of the namespace.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>cms.s1.large: Data storage duration is 15 days.</description>
            /// <description>cms.s1.xlarge: Data storage duration is 32 days.</description>
            /// <description>cms.s1.2xlarge: Data storage duration 63 days.</description>
            /// <description>cms.s1.3xlarge: Data storage duration 93 days.</description>
            /// <description>cms.s1.6xlarge: Data storage duration 185 days.</description>
            /// <description>cms.s1.12xlarge: Data storage duration 376 days.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "attrSpecification", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrSpecification
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cms.NamespaceProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cms.INamespaceProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cms.INamespaceProps>()!;
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
