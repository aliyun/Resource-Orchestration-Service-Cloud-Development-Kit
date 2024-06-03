using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Options applied when copying directories.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.CopyOptions")]
    public class CopyOptions : AlibabaCloud.SDK.ROS.CDK.Core.ICopyOptions
    {
        /// <summary>File paths matching the patterns will be excluded.</summary>
        /// <remarks>
        /// See <c>ignoreMode</c> to set the matching behavior.
        /// Has no effect on Assets bundled using the <c>bundling</c> property.
        ///
        /// <strong>Default</strong>: - nothing is excluded
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "exclude", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}", isOptional: true)]
        public string[]? Exclude
        {
            get;
            set;
        }

        /// <summary>A strategy for how to handle symlinks.</summary>
        /// <remarks>
        /// <strong>Default</strong>: SymlinkFollowMode.NEVER
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "follow", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.SymlinkFollowMode\"}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Core.SymlinkFollowMode? Follow
        {
            get;
            set;
        }

        /// <summary>The ignore behavior to use for `exclude` patterns.</summary>
        /// <remarks>
        /// <strong>Default</strong>: IgnoreMode.GLOB
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "ignoreMode", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-core.IgnoreMode\"}", isOptional: true)]
        public AlibabaCloud.SDK.ROS.CDK.Core.IgnoreMode? IgnoreMode
        {
            get;
            set;
        }
    }
}
