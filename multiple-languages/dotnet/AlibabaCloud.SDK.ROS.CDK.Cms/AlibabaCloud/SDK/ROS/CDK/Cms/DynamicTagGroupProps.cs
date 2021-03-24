using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::CMS::DynamicTagGroup`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-cms.DynamicTagGroupProps")]
    public class DynamicTagGroupProps : AlibabaCloud.SDK.ROS.CDK.Cms.IDynamicTagGroupProps
    {
        /// <summary>Property contactGroupList: Alarm contacts.</summary>
        [JsiiProperty(name: "contactGroupList", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOverride: true)]
        public string[] ContactGroupList
        {
            get;
            set;
        }

        /// <summary>Property tagKey: Tag key.</summary>
        [JsiiProperty(name: "tagKey", typeJson: "{\"primitive\":\"string\"}", isOverride: true)]
        public string TagKey
        {
            get;
            set;
        }

        /// <summary>Property enableInstallAgent: Whether to enable initial installation monitoring plug, not installed by default.</summary>
        /// <remarks>
        /// Values are:
        /// true: enable installation
        /// Note If ECS generated instances group does not monitor plug-in installed will attempt to automatically install.
        /// false: disable installation
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "enableInstallAgent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? EnableInstallAgent
        {
            get;
            set;
        }

        /// <summary>Property enableSubscribeEvent: Whether the event subscription is enabled.</summary>
        /// <remarks>
        /// Values are
        /// :true: enable event subscription
        /// false: disable event subscription
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "enableSubscribeEvent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? EnableSubscribeEvent
        {
            get;
            set;
        }

        /// <summary>Property matchExpress: Matching list.</summary>
        /// <remarks>
        /// Only supports one currently.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "matchExpress", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosDynamicTagGroup.MatchExpressProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? MatchExpress
        {
            get;
            set;
        }

        /// <summary>Property matchExpressFilterRelation: The relationship between the conditional expressions.</summary>
        /// <remarks>
        /// Values are:
        /// and: the relationship between
        /// or: the relationship or the
        /// Description currently supports only one combination of conditions, the follow-up Ali cloud will support a variety of combinations of conditions.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "matchExpressFilterRelation", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? MatchExpressFilterRelation
        {
            get;
            set;
        }

        /// <summary>Property templateIdList: Alarm template ID list.</summary>
        /// <remarks>
        /// When the automatically generated application group synchronizes tags, it will generate alarm rules according to the specified alarm template.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "templateIdList", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true, isOverride: true)]
        public string[]? TemplateIdList
        {
            get;
            set;
        }
    }
}
