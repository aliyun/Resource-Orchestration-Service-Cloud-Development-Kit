using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `WaitingRoomRule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-waitingroomrule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IWaitingRoomRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.WaitingRoomRuleProps")]
    public interface IWaitingRoomRuleProps
    {
        /// <summary>Property rule: The content of the rule, the implemented policy or conditional expression.</summary>
        [JsiiProperty(name: "rule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Rule
        {
            get;
        }

        /// <summary>Property ruleEnable: Rule switch.</summary>
        /// <remarks>
        /// When adding global configuration, this parameter does not need to be set. Value range:
        ///
        /// <list type="bullet">
        /// <description>on: open.</description>
        /// <description>off: close.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "ruleEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RuleEnable
        {
            get;
        }

        /// <summary>Property ruleName: Rule name, optional, used to query by waiting room bypass rule name.</summary>
        [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RuleName
        {
            get;
        }

        /// <summary>Property siteId: The site ID, which can be obtained by calling the ListSites API.</summary>
        [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SiteId
        {
            get;
        }

        /// <summary>Property waitingRoomId: Waiting room ID, used to identify a specific waiting room.</summary>
        /// <remarks>
        /// It can be obtained by calling the <a href="https://help.aliyun.com/document_detail/2850279.html">listwaitingroom</a> interface.
        /// </remarks>
        [JsiiProperty(name: "waitingRoomId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WaitingRoomId
        {
            get;
        }

        /// <summary>Properties for defining a `WaitingRoomRule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-waitingroomrule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IWaitingRoomRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.WaitingRoomRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IWaitingRoomRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property rule: The content of the rule, the implemented policy or conditional expression.</summary>
            [JsiiProperty(name: "rule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Rule
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property ruleEnable: Rule switch.</summary>
            /// <remarks>
            /// When adding global configuration, this parameter does not need to be set. Value range:
            ///
            /// <list type="bullet">
            /// <description>on: open.</description>
            /// <description>off: close.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "ruleEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RuleEnable
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property ruleName: Rule name, optional, used to query by waiting room bypass rule name.</summary>
            [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RuleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property siteId: The site ID, which can be obtained by calling the ListSites API.</summary>
            [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property waitingRoomId: Waiting room ID, used to identify a specific waiting room.</summary>
            /// <remarks>
            /// It can be obtained by calling the <a href="https://help.aliyun.com/document_detail/2850279.html">listwaitingroom</a> interface.
            /// </remarks>
            [JsiiProperty(name: "waitingRoomId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WaitingRoomId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
