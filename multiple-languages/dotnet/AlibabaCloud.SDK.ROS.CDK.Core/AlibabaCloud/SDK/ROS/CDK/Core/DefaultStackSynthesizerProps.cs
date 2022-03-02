using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Configuration properties for DefaultStackSynthesizer.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.DefaultStackSynthesizerProps")]
    public class DefaultStackSynthesizerProps : AlibabaCloud.SDK.ROS.CDK.Core.IDefaultStackSynthesizerProps
    {
        /// <summary>Qualifier to disambiguate multiple environments in the same account.</summary>
        /// <remarks>
        /// You can use this and leave the other naming properties empty if you have deployed
        /// the bootstrap environment with standard names but only differnet qualifiers.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "qualifier", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public string? Qualifier
        {
            get;
            set;
        }
    }
}
