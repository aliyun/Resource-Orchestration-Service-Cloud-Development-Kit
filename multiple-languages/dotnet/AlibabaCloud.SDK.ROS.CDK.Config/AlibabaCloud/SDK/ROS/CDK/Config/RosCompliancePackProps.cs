using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Config
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::Config::CompliancePack`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-config.RosCompliancePackProps")]
    public class RosCompliancePackProps : AlibabaCloud.SDK.ROS.CDK.Config.IRosCompliancePackProps
    {
        /// <remarks>
        /// <strong>Property</strong>: compliancePackName: Compliance Package Name
        /// </remarks>
        [JsiiProperty(name: "compliancePackName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object CompliancePackName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: description: Description
        /// </remarks>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Description
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: riskLevel: Ris Level
        /// </remarks>
        [JsiiProperty(name: "riskLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object RiskLevel
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: compliancePackTemplateId: Compliance Package Template Id
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "compliancePackTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? CompliancePackTemplateId
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: configRules: Config Rule List
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "configRules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-config.RosCompliancePack.ConfigRulesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? ConfigRules
        {
            get;
            set;
        }
    }
}
