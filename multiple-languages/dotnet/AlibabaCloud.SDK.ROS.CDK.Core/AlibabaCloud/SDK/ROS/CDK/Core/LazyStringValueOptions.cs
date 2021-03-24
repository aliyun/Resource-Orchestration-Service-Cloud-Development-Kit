using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Options for creating a lazy string token.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.LazyStringValueOptions")]
    public class LazyStringValueOptions : AlibabaCloud.SDK.ROS.CDK.Core.ILazyStringValueOptions
    {
        /// <summary>Use the given name as a display hint.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - No hint
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "displayHint", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? DisplayHint
        {
            get;
            set;
        }
    }
}
