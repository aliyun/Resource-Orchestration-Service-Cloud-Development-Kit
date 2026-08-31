using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cms
{
    /// <summary>Properties for defining a `DynamicTagGroup`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-dynamictaggroup
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IDynamicTagGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.DynamicTagGroupProps")]
    public interface IDynamicTagGroupProps
    {
        /// <summary>Property contactGroupList: The alert contact groups.</summary>
        /// <remarks>
        /// The value of N can be from 1 to 100. Alert
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

        /// <summary>Property tagKey: Tag key.</summary>
        [JsiiProperty(name: "tagKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TagKey
        {
            get;
        }

        /// <summary>Property enableInstallAgent: Whether to enable initial installation monitoring plug, not installed by default.</summary>
        /// <remarks>
        /// Values are:
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

        /// <summary>Property enableSubscribeEvent: Specifies whether to automatically subscribe to event notifications for the application group.</summary>
        /// <remarks>
        /// When a critical or warning event occurs on a resource in the
        /// application group, CloudMonitor sends an alert notification. Valid values:
        ///
        /// <list type="bullet">
        /// <description>true: enabled.</description>
        /// <description>false (default): disabled.</description>
        /// </list>
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

        /// <summary>Property matchExpress: The match expressions that are used to create an application group from tags.</summary>
        [JsiiProperty(name: "matchExpress", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosDynamicTagGroup.MatchExpressProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? MatchExpress
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property matchExpressFilterRelation: The relationship between the conditional expressions for the tag values.</summary>
        /// <remarks>
        /// Valid
        /// values:
        ///
        /// <list type="bullet">
        /// <description>and (default)</description>
        /// <description>or</description>
        /// </list>
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

        /// <summary>Property templateIdList: The ID of the alert template.</summary>
        /// <remarks>
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

        /// <summary>Properties for defining a `DynamicTagGroup`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cms-dynamictaggroup
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IDynamicTagGroupProps), fullyQualifiedName: "@alicloud/ros-cdk-cms.DynamicTagGroupProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cms.IDynamicTagGroupProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property contactGroupList: The alert contact groups.</summary>
            /// <remarks>
            /// The value of N can be from 1 to 100. Alert
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

            /// <summary>Property tagKey: Tag key.</summary>
            [JsiiProperty(name: "tagKey", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TagKey
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property enableInstallAgent: Whether to enable initial installation monitoring plug, not installed by default.</summary>
            /// <remarks>
            /// Values are:
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

            /// <summary>Property enableSubscribeEvent: Specifies whether to automatically subscribe to event notifications for the application group.</summary>
            /// <remarks>
            /// When a critical or warning event occurs on a resource in the
            /// application group, CloudMonitor sends an alert notification. Valid values:
            ///
            /// <list type="bullet">
            /// <description>true: enabled.</description>
            /// <description>false (default): disabled.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "enableSubscribeEvent", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"boolean\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? EnableSubscribeEvent
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property matchExpress: The match expressions that are used to create an application group from tags.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "matchExpress", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-cms.RosDynamicTagGroup.MatchExpressProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? MatchExpress
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property matchExpressFilterRelation: The relationship between the conditional expressions for the tag values.</summary>
            /// <remarks>
            /// Valid
            /// values:
            ///
            /// <list type="bullet">
            /// <description>and (default)</description>
            /// <description>or</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "matchExpressFilterRelation", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? MatchExpressFilterRelation
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property templateIdList: The ID of the alert template.</summary>
            /// <remarks>
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
