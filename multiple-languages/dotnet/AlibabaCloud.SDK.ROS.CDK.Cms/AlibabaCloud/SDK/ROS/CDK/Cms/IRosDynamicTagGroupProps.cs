using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Properties for defining a `ALIYUN::CMS::DynamicTagGroup`.</summary>
    [JsiiInterface(nativeType: typeof(IRosDynamicTagGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosDynamicTagGroupProps")]
    public interface IRosDynamicTagGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: contactGroupList: Alarm contacts.
        /// </remarks>
        [JsiiProperty(name: "contactGroupList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        object ContactGroupList
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: tagKey: Tag key.
        /// </remarks>
        [JsiiProperty(name: "tagKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TagKey
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: enableInstallAgent: Whether to enable initial installation monitoring plug, not installed by default. Values are:
        /// true: enable installation
        /// Note If ECS generated instances group does not monitor plug-in installed will attempt to automatically install.
        /// false: disable installation
        /// </remarks>
        [JsiiProperty(name: "enableInstallAgent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableInstallAgent
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: enableSubscribeEvent: Whether the event subscription is enabled. Values are
        /// :true: enable event subscription
        /// false: disable event subscription
        /// </remarks>
        [JsiiProperty(name: "enableSubscribeEvent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? EnableSubscribeEvent
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: matchExpress: Matching list. Only supports one currently.
        /// </remarks>
        [JsiiProperty(name: "matchExpress", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosDynamicTagGroup.MatchExpressProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MatchExpress
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: matchExpressFilterRelation: The relationship between the conditional expressions. Values are:
        /// and: the relationship between
        /// or: the relationship or the
        /// Description currently supports only one combination of conditions, the follow-up Ali cloud will support a variety of combinations of conditions.
        /// </remarks>
        [JsiiProperty(name: "matchExpressFilterRelation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MatchExpressFilterRelation
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: templateIdList: Alarm template ID list.
        /// When the automatically generated application group synchronizes tags, it will generate alarm rules according to the specified alarm template.
        /// </remarks>
        [JsiiProperty(name: "templateIdList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? TemplateIdList
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ALIYUN::CMS::DynamicTagGroup`.</summary>
        [JsiiTypeProxy(nativeType: typeof(IRosDynamicTagGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosDynamicTagGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.IRosDynamicTagGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: contactGroupList: Alarm contacts.
            /// </remarks>
            [JsiiProperty(name: "contactGroupList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
            public object ContactGroupList
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: tagKey: Tag key.
            /// </remarks>
            [JsiiProperty(name: "tagKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TagKey
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: enableInstallAgent: Whether to enable initial installation monitoring plug, not installed by default. Values are:
            /// true: enable installation
            /// Note If ECS generated instances group does not monitor plug-in installed will attempt to automatically install.
            /// false: disable installation
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableInstallAgent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableInstallAgent
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: enableSubscribeEvent: Whether the event subscription is enabled. Values are
            /// :true: enable event subscription
            /// false: disable event subscription
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableSubscribeEvent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableSubscribeEvent
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: matchExpress: Matching list. Only supports one currently.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "matchExpress", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosDynamicTagGroup.MatchExpressProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? MatchExpress
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: matchExpressFilterRelation: The relationship between the conditional expressions. Values are:
            /// and: the relationship between
            /// or: the relationship or the
            /// Description currently supports only one combination of conditions, the follow-up Ali cloud will support a variety of combinations of conditions.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "matchExpressFilterRelation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MatchExpressFilterRelation
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: templateIdList: Alarm template ID list.
            /// When the automatically generated application group synchronizes tags, it will generate alarm rules according to the specified alarm template.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "templateIdList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? TemplateIdList
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
