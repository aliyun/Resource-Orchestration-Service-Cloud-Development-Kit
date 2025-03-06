using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Aligreen
{
    /// <summary>Represents a `KeywordLib`.</summary>
    [JsiiInterface(nativeType: typeof(IKeywordLib), fullyQualifiedName: "@alicloud/ros-cdk-aligreen.IKeywordLib")]
    public interface IKeywordLib : AlibabaCloud.SDK.ROS.CDK.Core.IResource
    {
        /// <summary>Attribute BizTypes: The business scenario.</summary>
        [JsiiProperty(name: "attrBizTypes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrBizTypes
        {
            get;
        }

        /// <summary>Attribute Category: The category of the text library.</summary>
        [JsiiProperty(name: "attrCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrCategory
        {
            get;
        }

        /// <summary>Attribute Enable: Specifies whether to enable text library.</summary>
        [JsiiProperty(name: "attrEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrEnable
        {
            get;
        }

        /// <summary>Attribute KeywordLibId: The ID of the primary key of the keyword library.</summary>
        [JsiiProperty(name: "attrKeywordLibId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrKeywordLibId
        {
            get;
        }

        /// <summary>Attribute KeywordLibName: The name of the keyword library defined by the customer.</summary>
        [JsiiProperty(name: "attrKeywordLibName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrKeywordLibName
        {
            get;
        }

        /// <summary>Attribute Language: Language used by the text Library.</summary>
        [JsiiProperty(name: "attrLanguage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLanguage
        {
            get;
        }

        /// <summary>Attribute LibType: The category of the text library in each moderation scenario.</summary>
        [JsiiProperty(name: "attrLibType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrLibType
        {
            get;
        }

        /// <summary>Attribute MatchMode: The matching method.</summary>
        [JsiiProperty(name: "attrMatchMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrMatchMode
        {
            get;
        }

        /// <summary>Attribute ResourceType: The moderation scenario to which the text library applies.</summary>
        [JsiiProperty(name: "attrResourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object AttrResourceType
        {
            get;
        }

        [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-aligreen.KeywordLibProps\"}")]
        AlibabaCloud.SDK.ROS.CDK.Aligreen.IKeywordLibProps Props
        {
            get;
        }

        /// <summary>Represents a `KeywordLib`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IKeywordLib), fullyQualifiedName: "@alicloud/ros-cdk-aligreen.IKeywordLib")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Aligreen.IKeywordLib
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Attribute BizTypes: The business scenario.</summary>
            [JsiiProperty(name: "attrBizTypes", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrBizTypes
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Category: The category of the text library.</summary>
            [JsiiProperty(name: "attrCategory", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrCategory
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Enable: Specifies whether to enable text library.</summary>
            [JsiiProperty(name: "attrEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrEnable
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute KeywordLibId: The ID of the primary key of the keyword library.</summary>
            [JsiiProperty(name: "attrKeywordLibId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrKeywordLibId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute KeywordLibName: The name of the keyword library defined by the customer.</summary>
            [JsiiProperty(name: "attrKeywordLibName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrKeywordLibName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute Language: Language used by the text Library.</summary>
            [JsiiProperty(name: "attrLanguage", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLanguage
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute LibType: The category of the text library in each moderation scenario.</summary>
            [JsiiProperty(name: "attrLibType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrLibType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute MatchMode: The matching method.</summary>
            [JsiiProperty(name: "attrMatchMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrMatchMode
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Attribute ResourceType: The moderation scenario to which the text library applies.</summary>
            [JsiiProperty(name: "attrResourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object AttrResourceType
            {
                get => GetInstanceProperty<object>()!;
            }

            [JsiiProperty(name: "props", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-aligreen.KeywordLibProps\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Aligreen.IKeywordLibProps Props
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Aligreen.IKeywordLibProps>()!;
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
