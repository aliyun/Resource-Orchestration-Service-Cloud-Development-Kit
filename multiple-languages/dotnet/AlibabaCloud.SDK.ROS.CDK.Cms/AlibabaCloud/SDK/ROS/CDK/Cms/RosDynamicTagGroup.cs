using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>A ROS template type:  `ALIYUN::CMS::DynamicTagGroup`.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Cms.RosDynamicTagGroup), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosDynamicTagGroup", parametersJson: "[{\"docs\":{\"summary\":\"- scope in which this resource is defined.\"},\"name\":\"scope\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.Construct\"}},{\"docs\":{\"summary\":\"- scoped id of the resource.\"},\"name\":\"id\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"- resource properties.\"},\"name\":\"props\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-cms.RosDynamicTagGroupProps\"}},{\"name\":\"enableResourcePropertyConstraint\",\"type\":{\"primitive\":\"boolean\"}}]")]
    public class RosDynamicTagGroup : AlibabaCloud.SDK.ROS.CDK.Core.RosResource
    {
        /// <summary>Create a new `ALIYUN::CMS::DynamicTagGroup`.</summary>
        /// <param name="scope">- scope in which this resource is defined.</param>
        /// <param name="id">- scoped id of the resource.</param>
        /// <param name="props">- resource properties.</param>
        public RosDynamicTagGroup(AlibabaCloud.SDK.ROS.CDK.Core.Construct scope, string id, AlibabaCloud.SDK.ROS.CDK.Cms.IRosDynamicTagGroupProps props, bool enableResourcePropertyConstraint): base(new DeputyProps(new object?[]{scope, id, props, enableResourcePropertyConstraint}))
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosDynamicTagGroup(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected RosDynamicTagGroup(DeputyProps props): base(props)
        {
        }

        [JsiiMethod(name: "renderProperties", returnsJson: "{\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}", parametersJson: "[{\"name\":\"props\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}}]", isOverride: true)]
        protected override System.Collections.Generic.IDictionary<string, object> RenderProperties(System.Collections.Generic.IDictionary<string, object> props)
        {
            return InvokeInstanceMethod<System.Collections.Generic.IDictionary<string, object>>(new System.Type[]{typeof(System.Collections.Generic.IDictionary<string, object>)}, new object[]{props})!;
        }

        /// <summary>The resource type name for this resource class.</summary>
        [JsiiProperty(name: "ROS_RESOURCE_TYPE_NAME", typeJson: "{\"primitive\":\"string\"}")]
        public static string ROS_RESOURCE_TYPE_NAME
        {
            get;
        }
        = GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Cms.RosDynamicTagGroup))!;

        /// <remarks>
        /// <strong>Attribute</strong>: DynamicTagRuleId: Dynamic tag rule ID.
        /// </remarks>
        [JsiiProperty(name: "attrDynamicTagRuleId", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrDynamicTagRuleId
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        /// <remarks>
        /// <strong>Attribute</strong>: TagKey: Tag key.
        /// </remarks>
        [JsiiProperty(name: "attrTagKey", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public virtual AlibabaCloud.SDK.ROS.CDK.Core.IResolvable AttrTagKey
        {
            get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Core.IResolvable>()!;
        }

        [JsiiProperty(name: "rosProperties", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"any\"},\"kind\":\"map\"}}")]
        protected override System.Collections.Generic.IDictionary<string, object> RosProperties
        {
            get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, object>>()!;
        }

        /// <remarks>
        /// <strong>Property</strong>: contactGroupList: Alarm contacts.
        /// </remarks>
        [JsiiProperty(name: "contactGroupList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}")]
        public virtual object ContactGroupList
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        [JsiiProperty(name: "enableResourcePropertyConstraint", typeJson: "{\"primitive\":\"boolean\"}")]
        public virtual bool EnableResourcePropertyConstraint
        {
            get => GetInstanceProperty<bool>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: tagKey: Tag key.
        /// </remarks>
        [JsiiProperty(name: "tagKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public virtual object TagKey
        {
            get => GetInstanceProperty<object>()!;
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: enableInstallAgent: Whether to enable initial installation monitoring plug, not installed by default. Values are:
        /// true: enable installation
        /// Note If ECS generated instances group does not monitor plug-in installed will attempt to automatically install.
        /// false: disable installation
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "enableInstallAgent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? EnableInstallAgent
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: enableSubscribeEvent: Whether the event subscription is enabled. Values are
        /// :true: enable event subscription
        /// false: disable event subscription
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "enableSubscribeEvent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? EnableSubscribeEvent
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: matchExpress: Matching list. Only supports one currently.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "matchExpress", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosDynamicTagGroup.MatchExpressProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? MatchExpress
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: matchExpressFilterRelation: The relationship between the conditional expressions. Values are:
        /// and: the relationship between
        /// or: the relationship or the
        /// Description currently supports only one combination of conditions, the follow-up Ali cloud will support a variety of combinations of conditions.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "matchExpressFilterRelation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        public virtual object? MatchExpressFilterRelation
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }

        /// <remarks>
        /// <strong>Property</strong>: templateIdList: Alarm template ID list.
        /// When the automatically generated application group synchronizes tags, it will generate alarm rules according to the specified alarm template.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "templateIdList", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public virtual object? TemplateIdList
        {
            get => GetInstanceProperty<object?>();
            set => SetInstanceProperty(value);
        }
        [JsiiInterface(nativeType: typeof(IMatchExpressProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosDynamicTagGroup.MatchExpressProperty")]
        public interface IMatchExpressProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: tagValue: Tag value, used with TagValueMatchFunction.
            /// </remarks>
            [JsiiProperty(name: "tagValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object TagValue
            {
                get;
            }

            /// <remarks>
            /// <strong>Property</strong>: tagValueMatchFunction: Matching labeled keys. Values are:
            /// contains: contains
            /// startWith: Prefix
            /// endWith: suffix
            /// notContains: not included
            /// equals: equals
            /// all: All
            /// </remarks>
            [JsiiProperty(name: "tagValueMatchFunction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            object TagValueMatchFunction
            {
                get;
            }

            [JsiiTypeProxy(nativeType: typeof(IMatchExpressProperty), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosDynamicTagGroup.MatchExpressProperty")]
            internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.RosDynamicTagGroup.IMatchExpressProperty
            {
                private _Proxy(ByRefValue reference): base(reference)
                {
                }

                /// <remarks>
                /// <strong>Property</strong>: tagValue: Tag value, used with TagValueMatchFunction.
                /// </remarks>
                [JsiiProperty(name: "tagValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object TagValue
                {
                    get => GetInstanceProperty<object>()!;
                }

                /// <remarks>
                /// <strong>Property</strong>: tagValueMatchFunction: Matching labeled keys. Values are:
                /// contains: contains
                /// startWith: Prefix
                /// endWith: suffix
                /// notContains: not included
                /// equals: equals
                /// all: All
                /// </remarks>
                [JsiiProperty(name: "tagValueMatchFunction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
                public object TagValueMatchFunction
                {
                    get => GetInstanceProperty<object>()!;
                }
            }
        }
        #pragma warning disable CS8618

        [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.RosDynamicTagGroup.MatchExpressProperty")]
        public class MatchExpressProperty : AlibabaCloud.SDK.ROS.CDK.Cms.RosDynamicTagGroup.IMatchExpressProperty
        {
            /// <remarks>
            /// <strong>Property</strong>: tagValue: Tag value, used with TagValueMatchFunction.
            /// </remarks>
            [JsiiProperty(name: "tagValue", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
            public object TagValue
            {
                get;
                set;
            }

            /// <remarks>
            /// <strong>Property</strong>: tagValueMatchFunction: Matching labeled keys. Values are:
            /// contains: contains
            /// startWith: Prefix
            /// endWith: suffix
            /// notContains: not included
            /// equals: equals
            /// all: All
            /// </remarks>
            [JsiiProperty(name: "tagValueMatchFunction", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
            public object TagValueMatchFunction
            {
                get;
                set;
            }
        }
    }
}
