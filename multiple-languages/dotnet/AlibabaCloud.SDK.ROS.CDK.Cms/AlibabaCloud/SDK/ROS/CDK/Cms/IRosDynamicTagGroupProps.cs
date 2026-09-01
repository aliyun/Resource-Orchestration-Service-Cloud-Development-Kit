using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Properties for defining a `RosDynamicTagGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-dynamictaggroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosDynamicTagGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosDynamicTagGroupProps")]
    public interface IRosDynamicTagGroupProps
    {
        /// <remarks>
        /// <strong>Property</strong>: contactGroupList: The alert contact groups. The value of N can be from 1 to 100. Alert
        /// notifications for the application group are sent to the alert contacts in these
        /// alert contact groups.
        /// An alert contact group can contain one or more alert contacts. For more
        /// information about how to create alert contacts and alert contact groups, see
        /// PutContact and PutContactGroup. For more information about how to obtain
        /// alert contact groups, see DescribeContactGroupList.
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
        /// <strong>Property</strong>: enableSubscribeEvent: Specifies whether to automatically subscribe to event notifications for the
        /// application group. When a critical or warning event occurs on a resource in the
        /// application group, CloudMonitor sends an alert notification. Valid values:
        /// - true: enabled.
        /// - false (default): disabled.
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
        /// <strong>Property</strong>: matchExpress: The match expressions that are used to create an application group from tags.
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
        /// <strong>Property</strong>: matchExpressFilterRelation: The relationship between the conditional expressions for the tag values. Valid
        /// values:
        /// - and (default)
        /// - or
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
        /// <strong>Property</strong>: templateIdList: The ID of the alert template.
        /// For more information about how to query the IDs of alert templates, see
        /// DescribeMetricRuleTemplateList.
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

        /// <summary>Properties for defining a `RosDynamicTagGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-dynamictaggroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosDynamicTagGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.RosDynamicTagGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.IRosDynamicTagGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: contactGroupList: The alert contact groups. The value of N can be from 1 to 100. Alert
            /// notifications for the application group are sent to the alert contacts in these
            /// alert contact groups.
            /// An alert contact group can contain one or more alert contacts. For more
            /// information about how to create alert contacts and alert contact groups, see
            /// PutContact and PutContactGroup. For more information about how to obtain
            /// alert contact groups, see DescribeContactGroupList.
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
            /// <strong>Property</strong>: enableSubscribeEvent: Specifies whether to automatically subscribe to event notifications for the
            /// application group. When a critical or warning event occurs on a resource in the
            /// application group, CloudMonitor sends an alert notification. Valid values:
            /// - true: enabled.
            /// - false (default): disabled.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableSubscribeEvent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableSubscribeEvent
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: matchExpress: The match expressions that are used to create an application group from tags.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "matchExpress", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosDynamicTagGroup.MatchExpressProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? MatchExpress
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: matchExpressFilterRelation: The relationship between the conditional expressions for the tag values. Valid
            /// values:
            /// - and (default)
            /// - or
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "matchExpressFilterRelation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MatchExpressFilterRelation
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: templateIdList: The ID of the alert template.
            /// For more information about how to query the IDs of alert templates, see
            /// DescribeMetricRuleTemplateList.
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
