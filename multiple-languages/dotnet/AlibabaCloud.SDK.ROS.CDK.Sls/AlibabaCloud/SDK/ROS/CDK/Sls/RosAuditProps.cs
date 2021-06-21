using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Sls
{
    #pragma warning disable CS8618

    /// <summary>Properties for defining a `ALIYUN::SLS::Audit`.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-sls.RosAuditProps")]
    public class RosAuditProps : AlibabaCloud.SDK.ROS.CDK.Sls.IRosAuditProps
    {
        /// <remarks>
        /// <strong>Property</strong>: displayName: Name of SLS log audit.
        /// </remarks>
        [JsiiProperty(name: "displayName", typeJson: "{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}}", isOverride: true)]
        public object DisplayName
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: variableMap: Log audit detailed configuration.
        /// </remarks>
        [JsiiProperty(name: "variableMap", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"fqn\":\"@alicloud/ros-cdk-sls.RosAudit.VariableMapProperty\"}]}}", isOverride: true)]
        public object VariableMap
        {
            get;
            set;
        }

        /// <remarks>
        /// <strong>Property</strong>: multiAccount: Multi-account configuration, please fill in multiple aliuid.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "multiAccount", typeJson: "{\"union\":{\"types\":[{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"},{\"collection\":{\"elementtype\":{\"union\":{\"types\":[{\"primitive\":\"string\"},{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}]}},\"kind\":\"array\"}}]}}", isOptional: true, isOverride: true)]
        public object? MultiAccount
        {
            get;
            set;
        }
    }
}
