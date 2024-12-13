using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Aligreen
{
    /// <summary>Properties for defining a `KeywordLib`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-keywordlib
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IKeywordLibProps), fullyQualifiedName: "@alicloud/ros-cdk-aligreen.KeywordLibProps")]
    public interface IKeywordLibProps
    {
        /// <summary>Property keywordLibName: The name of the keyword library defined by the customer.</summary>
        /// <remarks>
        /// It can contain no more than 20 characters in Chinese, English, and underscore (_).
        /// </remarks>
        [JsiiProperty(name: "keywordLibName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object KeywordLibName
        {
            get;
        }

        /// <summary>Property resourceType: The moderation scenario to which the text library applies.</summary>
        /// <remarks>
        /// Valid values:TEXT: text anti-spam、IMAGE: ad violation detection、VOICE: audio anti-spam.
        /// </remarks>
        [JsiiProperty(name: "resourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ResourceType
        {
            get;
        }

        /// <summary>Property bizTypes: The business scenario.</summary>
        /// <remarks>
        /// Example:["bizTypeA","bizTypeB"].
        /// </remarks>
        [JsiiProperty(name: "bizTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? BizTypes
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property category: The category of the text library.</summary>
        /// <remarks>
        /// Valid values:
        /// BLACK: a blacklist. WHITE: a whitelist. REVIEW: a review list.
        /// </remarks>
        [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Category
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property enable: Specifies whether to enable text library.true: Enable the text library. This is the default value.false: Disable the text library.</summary>
        [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Enable
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property language: Language used by the text Library.</summary>
        /// <remarks>
        /// Example: zh:Chinese、en:English
        /// </remarks>
        [JsiiProperty(name: "language", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Language
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property libType: The category of the text library in each moderation scenario.</summary>
        /// <remarks>
        /// Valid values: textKeyword: a text library against which terms in text are matched. similarText: a text library against which text patterns are matched. voiceText: a text library against which terms converted from audio are matched.
        /// </remarks>
        [JsiiProperty(name: "libType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? LibType
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property matchMode: The matching method.</summary>
        /// <remarks>
        /// Valid values:fuzzy: fuzzy match precise: exact match.
        /// </remarks>
        [JsiiProperty(name: "matchMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MatchMode
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `KeywordLib`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-aligreen-keywordlib
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IKeywordLibProps), fullyQualifiedName: "@alicloud/ros-cdk-aligreen.KeywordLibProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Aligreen.IKeywordLibProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property keywordLibName: The name of the keyword library defined by the customer.</summary>
            /// <remarks>
            /// It can contain no more than 20 characters in Chinese, English, and underscore (_).
            /// </remarks>
            [JsiiProperty(name: "keywordLibName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object KeywordLibName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property resourceType: The moderation scenario to which the text library applies.</summary>
            /// <remarks>
            /// Valid values:TEXT: text anti-spam、IMAGE: ad violation detection、VOICE: audio anti-spam.
            /// </remarks>
            [JsiiProperty(name: "resourceType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ResourceType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property bizTypes: The business scenario.</summary>
            /// <remarks>
            /// Example:["bizTypeA","bizTypeB"].
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "bizTypes", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? BizTypes
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property category: The category of the text library.</summary>
            /// <remarks>
            /// Valid values:
            /// BLACK: a blacklist. WHITE: a whitelist. REVIEW: a review list.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "category", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Category
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property enable: Specifies whether to enable text library.true: Enable the text library. This is the default value.false: Disable the text library.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "enable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Enable
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property language: Language used by the text Library.</summary>
            /// <remarks>
            /// Example: zh:Chinese、en:English
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "language", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? Language
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property libType: The category of the text library in each moderation scenario.</summary>
            /// <remarks>
            /// Valid values: textKeyword: a text library against which terms in text are matched. similarText: a text library against which text patterns are matched. voiceText: a text library against which terms converted from audio are matched.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "libType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? LibType
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property matchMode: The matching method.</summary>
            /// <remarks>
            /// Valid values:fuzzy: fuzzy match precise: exact match.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "matchMode", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MatchMode
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
