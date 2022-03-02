using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Options for assemly synthesis.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.StageSynthesisOptions")]
    public class StageSynthesisOptions : AlibabaCloud.SDK.ROS.CDK.Core.IStageSynthesisOptions
    {
        /// <summary>Should we skip construct validation.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - false
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "skipValidation", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
        public bool? SkipValidation
        {
            get;
            set;
        }
    }
}
