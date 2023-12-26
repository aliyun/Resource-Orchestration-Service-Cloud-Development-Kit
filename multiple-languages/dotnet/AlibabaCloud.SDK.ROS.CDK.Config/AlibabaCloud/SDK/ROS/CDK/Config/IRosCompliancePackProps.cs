using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Config
{
    /// <summary>Properties for defining a `RosCompliancePack`.</summary>
    /// <remarks>
    /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-compliancepack
    /// </remarks>
    [JsiiInterface(nativeType: typeof(IRosCompliancePackProps), fullyQualifiedName: "@alicloud/ros-cdk-config.RosCompliancePackProps")]
    public interface IRosCompliancePackProps
    {
        /// <remarks>
        /// <strong>Property</strong>: compliancePackName: Compliance Package Name
        /// </remarks>
        [JsiiProperty(name: "compliancePackName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object CompliancePackName
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object Description
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: riskLevel: Ris Level
        /// </remarks>
        [JsiiProperty(name: "riskLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        object RiskLevel
        {
            get;
        }

        /// <remarks>
        /// <strong>Property</strong>: compliancePackTemplateId: Compliance Package Template Id
        /// </remarks>
        [JsiiProperty(name: "compliancePackTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? CompliancePackTemplateId
        {
            get
            {
                return null;
            }
        }

        /// <remarks>
        /// <strong>Property</strong>: configRules: Config Rule List
        /// </remarks>
        [JsiiProperty(name: "configRules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-config.RosCompliancePack.ConfigRulesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        object? ConfigRules
        {
            get
            {
                return null;
            }
        }

        /// <summary>Properties for defining a `RosCompliancePack`.</summary>
        /// <remarks>
        /// See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-config-compliancepack
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(IRosCompliancePackProps), fullyQualifiedName: "@alicloud/ros-cdk-config.RosCompliancePackProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Config.IRosCompliancePackProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <remarks>
            /// <strong>Property</strong>: compliancePackName: Compliance Package Name
            /// </remarks>
            [JsiiProperty(name: "compliancePackName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object CompliancePackName
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: description: Description
            /// </remarks>
            [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object Description
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: riskLevel: Ris Level
            /// </remarks>
            [JsiiProperty(name: "riskLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
            public object RiskLevel
            {
                get => GetInstanceProperty<object>()!;
            }

            /// <remarks>
            /// <strong>Property</strong>: compliancePackTemplateId: Compliance Package Template Id
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "compliancePackTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true)]
            public object? CompliancePackTemplateId
            {
                get => GetInstanceProperty<object?>();
            }

            /// <remarks>
            /// <strong>Property</strong>: configRules: Config Rule List
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "configRules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-config.RosCompliancePack.ConfigRulesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
            public object? ConfigRules
            {
                get => GetInstanceProperty<object?>();
            }
        }
    }
}
