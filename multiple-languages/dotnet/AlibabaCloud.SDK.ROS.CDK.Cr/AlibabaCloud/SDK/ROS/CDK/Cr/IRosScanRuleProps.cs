using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Cr
{
    /// <summary>Properties for defining a `RosScanRule`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-scanrule
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosScanRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.RosScanRuleProps")]
    public interface IRosScanRuleProps
    {
        /// <remarks>
        /// <strong>Property</strong>: instanceId: ACR Instance ID.
        /// </remarks>
        [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object InstanceId
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: repoTagFilterPattern: The tag that triggers the scan matches the regular expression.
        /// </remarks>
        [JsiiProperty(name: "repoTagFilterPattern", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RepoTagFilterPattern
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: ruleName: The scan rule name.
        /// </remarks>
        [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RuleName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: scanScope: The scan scope. Valid values:
        /// NAMESPACE: namespace.
        /// REPO: repository.
        /// INSTANCE: CR instance.
        /// </remarks>
        [JsiiProperty(name: "scanScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ScanScope
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: scanType: The scan type. Valid values:
        /// * VUL: Products Cloud Security Scanner.
        /// * SBOM: Product Content Analysis.
        /// </remarks>
        [JsiiProperty(name: "scanType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object ScanType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: triggerType: Trigger type. Valid values:
        /// * AUTO: automatically trigger.
        /// * MANUAL: manually trigger.
        /// </remarks>
        [JsiiProperty(name: "triggerType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object TriggerType
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: namespaces: The list of namespaces.
        /// * When the scan scope is NAMESPACE, this parameter cannot be empty.
        /// * If the scan scope is REPO, you must specify a unique Namespace for this parameter.
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

        /// <remarks>
        /// <strong>Property</strong>: repoNames: The list of repositories.* When the scan scope is NAMESPACE, this parameter must be empty.
        /// * When the scan scope is REPO, this parameter cannot be empty.
        /// </remarks>
        [JsiiProperty(name: "repoNames", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? RepoNames
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosScanRule`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cr-scanrule
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosScanRuleProps), fullyQualifiedName: "@alicloud/ros-cdk-cr.RosScanRuleProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Cr.IRosScanRuleProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: instanceId: ACR Instance ID.
            /// </remarks>
            [JsiiProperty(name: "instanceId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object InstanceId
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: repoTagFilterPattern: The tag that triggers the scan matches the regular expression.
            /// </remarks>
            [JsiiProperty(name: "repoTagFilterPattern", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RepoTagFilterPattern
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: ruleName: The scan rule name.
            /// </remarks>
            [JsiiProperty(name: "ruleName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RuleName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: scanScope: The scan scope. Valid values:
            /// NAMESPACE: namespace.
            /// REPO: repository.
            /// INSTANCE: CR instance.
            /// </remarks>
            [JsiiProperty(name: "scanScope", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ScanScope
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: scanType: The scan type. Valid values:
            /// * VUL: Products Cloud Security Scanner.
            /// * SBOM: Product Content Analysis.
            /// </remarks>
            [JsiiProperty(name: "scanType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object ScanType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: triggerType: Trigger type. Valid values:
            /// * AUTO: automatically trigger.
            /// * MANUAL: manually trigger.
            /// </remarks>
            [JsiiProperty(name: "triggerType", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object TriggerType
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: namespaces: The list of namespaces.
            /// * When the scan scope is NAMESPACE, this parameter cannot be empty.
            /// * If the scan scope is REPO, you must specify a unique Namespace for this parameter.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "namespaces", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? Namespaces
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: repoNames: The list of repositories.* When the scan scope is NAMESPACE, this parameter must be empty.
            /// * When the scan scope is REPO, this parameter cannot be empty.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "repoNames", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? RepoNames
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
