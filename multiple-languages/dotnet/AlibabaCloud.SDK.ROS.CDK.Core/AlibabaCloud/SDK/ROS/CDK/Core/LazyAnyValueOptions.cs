using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Options for creating lazy untyped tokens.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.LazyAnyValueOptions")]
    public class LazyAnyValueOptions : AlibabaCloud.SDK.ROS.CDK.Core.ILazyAnyValueOptions
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

        /// <summary>If the produced value is an array and it is empty, return 'undefined' instead.</summary>
        /// <remarks>
        /// <strong>Default</strong>: false
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "omitEmptyArray", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true, isOverride: true)]
        public bool? OmitEmptyArray
        {
            get;
            set;
        }
    }
}
