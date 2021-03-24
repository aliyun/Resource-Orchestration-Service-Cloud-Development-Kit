using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Options for creating a lazy list token.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.LazyListValueOptions")]
    public class LazyListValueOptions : AlibabaCloud.SDK.ROS.CDK.Core.ILazyListValueOptions
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

        /// <summary>If the produced list is empty, return 'undefined' instead.</summary>
        /// <remarks>
        /// <strong>Default</strong>: false
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "omitEmpty", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true, isOverride: true)]
        public bool? OmitEmpty
        {
            get;
            set;
        }
    }
}
