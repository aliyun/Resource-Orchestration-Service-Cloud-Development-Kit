using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Esa
{
    /// <summary>Properties for defining a `RosWaitingRoomRule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-waitingroomrule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosWaitingRoomRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RosWaitingRoomRuleProps")]
    public interface IRosWaitingRoomRuleProps
    {
        /// <remarks>
        /// <strong>Property</strong>: rule: The content of the rule, the implemented policy or conditional expression.
        /// </remarks>
        [JsiiProperty(name: "rule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Rule
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
        /// - on: open.
        /// - off: close.
        /// </remarks>
        [JsiiProperty(name: "ruleEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RuleEnable
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: ruleName: Rule name, optional, used to query by waiting room bypass rule name.
        /// </remarks>
        [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RuleName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: siteId: The site ID, which can be obtained by calling the ListSites API.
        /// </remarks>
        [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object SiteId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: waitingRoomId: Waiting room ID, used to identify a specific waiting room. It can be obtained by calling the [listwaitingroom](https:\/\/help.aliyun.com\/document_detail\/2850279.html) interface.
        /// </remarks>
        [JsiiProperty(name: "waitingRoomId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object WaitingRoomId
        {
            get;
        }

        /// <summary>Properties for defining a `RosWaitingRoomRule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-esa-waitingroomrule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosWaitingRoomRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-esa.RosWaitingRoomRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Esa.IRosWaitingRoomRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: rule: The content of the rule, the implemented policy or conditional expression.
            /// </remarks>
            [JsiiProperty(name: "rule", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Rule
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: ruleEnable: Rule switch. When adding global configuration, this parameter does not need to be set. Value range:
            /// - on: open.
            /// - off: close.
            /// </remarks>
            [JsiiProperty(name: "ruleEnable", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RuleEnable
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: ruleName: Rule name, optional, used to query by waiting room bypass rule name.
            /// </remarks>
            [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RuleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: siteId: The site ID, which can be obtained by calling the ListSites API.
            /// </remarks>
            [JsiiProperty(name: "siteId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object SiteId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: waitingRoomId: Waiting room ID, used to identify a specific waiting room. It can be obtained by calling the [listwaitingroom](https:\/\/help.aliyun.com\/document_detail\/2850279.html) interface.
            /// </remarks>
            [JsiiProperty(name: "waitingRoomId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object WaitingRoomId
            {
                get => GetInstanceProperty<object>()!;
            }
        }
    }
}
