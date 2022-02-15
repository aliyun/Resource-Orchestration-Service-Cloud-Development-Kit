using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SLS::Audit`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sls.AuditProps")]
    public class AuditProps : AlibabaCloud.SDK.ROS.CDK.Sls.IAuditProps
    {
        /// <summary>Property displayName: Name of SLS log audit.</summary>
        [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}")]
        public object DisplayName
        {
            get;
            set;
        }

        /// <summary>Property variableMap: Log audit detailed configuration.</summary>
        [JsiiProperty(name: "variableMap", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosAudit.VariableMapProperty\"}]}}")]
        public object VariableMap
        {
            get;
            set;
        }

        /// <summary>Property multiAccount: Multi-account configuration, please fill in multiple aliuid.</summary>
        [JsiiOptional]
        [JsiiProperty(name: "multiAccount", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true)]
        public object? MultiAccount
        {
            get;
            set;
        }
    }
}
