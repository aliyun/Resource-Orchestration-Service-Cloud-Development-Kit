using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    #pragma warning disable CS8618

    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.RosRuleAssertionProps")]
    public class RosRuleAssertionProps : AlibabaCloud.SDK.ROS.CDK.Core.IRosRuleAssertionProps
    {
        /// <summary>Define assertions.</summary>
        [JsiiProperty(name: "assert", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IResolvable\"}")]
        public AlibabaCloud.SDK.ROS.CDK.Core.IResolvable Assert
        {
            get;
            set;
        }

        /// <summary>Define the assertion description.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - None
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "assertDescription", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        public string? AssertDescription
        {
            get;
            set;
        }
    }
}
