using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr
{
    /// <summary>Properties for defining a `ScanRule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-scanrule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IScanRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.ScanRuleProps")]
    public interface IScanRuleProps
    {
        /// <summary>Property instanceId: ACR Instance ID.</summary>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <summary>Property repoTagFilterPattern: The tag that triggers the scan matches the regular expression.</summary>
        [JsiiProperty(name: "repoTagFilterPattern", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RepoTagFilterPattern
        {
            get;
        }

        /// <summary>Property ruleName: The scan rule name.</summary>
        [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RuleName
        {
            get;
        }

        /// <summary>Property scanScope: The scan scope.</summary>
        /// <remarks>
        /// Valid values:
        /// NAMESPACE: namespace.
        /// REPO: repository.
        /// INSTANCE: CR instance.
        /// </remarks>
        [JsiiProperty(name: "scanScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ScanScope
        {
            get;
        }

        /// <summary>Property scanType: The scan type.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>VUL: Products Cloud Security Scanner.</description>
        /// <description>SBOM: Product Content Analysis.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "scanType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ScanType
        {
            get;
        }

        /// <summary>Property triggerType: Trigger type.</summary>
        /// <remarks>
        /// Valid values:
        ///
        /// <list type="bullet">
        /// <description>AUTO: automatically trigger.</description>
        /// <description>MANUAL: manually trigger.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "triggerType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TriggerType
        {
            get;
        }

        /// <summary>Property namespaces: The list of namespaces.</summary>
        /// <remarks>
        /// <list type="bullet">
        /// <description>When the scan scope is NAMESPACE, this parameter cannot be empty.</description>
        /// <description>If the scan scope is REPO, you must specify a unique Namespace for this parameter.</description>
        /// </list>
        /// </remarks>
        [JsiiProperty(name: "namespaces", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? Namespaces
        {
            get
            {
                return null;
            }
        }

        /// <summary>Property repoNames: The list of repositories.* When the scan scope is NAMESPACE, this parameter must be empty. * When the scan scope is REPO, this parameter cannot be empty.</summary>
        [JsiiProperty(name: "repoNames", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RepoNames
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `ScanRule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-scanrule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IScanRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.ScanRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cr.IScanRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Property instanceId: ACR Instance ID.</summary>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property repoTagFilterPattern: The tag that triggers the scan matches the regular expression.</summary>
            [JsiiProperty(name: "repoTagFilterPattern", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RepoTagFilterPattern
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property ruleName: The scan rule name.</summary>
            [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RuleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property scanScope: The scan scope.</summary>
            /// <remarks>
            /// Valid values:
            /// NAMESPACE: namespace.
            /// REPO: repository.
            /// INSTANCE: CR instance.
            /// </remarks>
            [JsiiProperty(name: "scanScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ScanScope
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property scanType: The scan type.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>VUL: Products Cloud Security Scanner.</description>
            /// <description>SBOM: Product Content Analysis.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "scanType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ScanType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property triggerType: Trigger type.</summary>
            /// <remarks>
            /// Valid values:
            ///
            /// <list type="bullet">
            /// <description>AUTO: automatically trigger.</description>
            /// <description>MANUAL: manually trigger.</description>
            /// </list>
            /// </remarks>
            [JsiiProperty(name: "triggerType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TriggerType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <summary>Property namespaces: The list of namespaces.</summary>
            /// <remarks>
            /// <list type="bullet">
            /// <description>When the scan scope is NAMESPACE, this parameter cannot be empty.</description>
            /// <description>If the scan scope is REPO, you must specify a unique Namespace for this parameter.</description>
            /// </list>
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "namespaces", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Namespaces
            {
                get => GetInstanceProperty<object?>();
            }

            /// <summary>Property repoNames: The list of repositories.* When the scan scope is NAMESPACE, this parameter must be empty. * When the scan scope is REPO, this parameter cannot be empty.</summary>
            [JsiiOptional]
            [JsiiProperty(name: "repoNames", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? RepoNames
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
