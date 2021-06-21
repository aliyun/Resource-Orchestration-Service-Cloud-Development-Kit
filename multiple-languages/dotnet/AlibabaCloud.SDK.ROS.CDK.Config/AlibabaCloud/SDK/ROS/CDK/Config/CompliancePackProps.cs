using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Config
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::Config::CompliancePack`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-config.CompliancePackProps")]
    public class CompliancePackProps : AlibabaCloud.SDK.ROS.CDK.Config.ICompliancePackProps
    {
        /// <summary>Property compliancePackName: Compliance Package Name.</summary>
        [JsiiProperty(name: "compliancePackName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object CompliancePackName
        {
            get;
            set;
        }

        /// <summary>Property description: Description.</summary>
        [JsiiProperty(name: "description", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object Description
        {
            get;
            set;
        }

        /// <summary>Property riskLevel: Ris Level.</summary>
        [JsiiProperty(name: "riskLevel", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"number\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object RiskLevel
        {
            get;
            set;
        }

        /// <summary>Property compliancePackTemplateId: Compliance Package Template Id.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "compliancePackTemplateId", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOptional: true, isOverride: true)]
        public object? CompliancePackTemplateId
        {
            get;
            set;
        }

        /// <summary>Property configRules: Config Rule List.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "configRules", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-config.RosCompliancePack.ConfigRulesProperty\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? ConfigRules
        {
            get;
            set;
        }
    }
}
