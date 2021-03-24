using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Initialization props for apps.</summary>
    [JsiiByValue(fqn: "@alicloud/ros-cdk-core.AppProps")]
    public class AppProps : AlibabaCloud.SDK.ROS.CDK.Core.IAppProps
    {
        /// <summary>Automatically call 'synth()' before the program exits.</summary>
        /// <remarks>
        /// If you set this, you don't have to call 'synth()' explicitly. Note that
        /// this feature is only available for certain programming languages, and
        /// calling 'synth()' is still recommended.
        /// 
        /// Default true if running via CDK CLI ('CDK_OUTDIR' is set), 'false'
        /// otherwise
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "autoSynth", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true, isOverride: true)]
        public bool? AutoSynth
        {
            get;
            set;
        }

        /// <summary>Additional context values for the application.</summary>
        /// <remarks>
        /// Context set by the CLI or the 'context' key in 'cdk.json' has precedence.
        /// 
        /// Context can be read from any construct using 'node.getContext(key)'.
        /// 
        /// <strong>Default</strong>: - no additional context
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "context", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}", isOptional: true, isOverride: true)]
        public System.Collections.Generic.IDictionary<string, string>? Context
        {
            get;
            set;
        }

        /// <summary>The output directory into which to emit synthesized artifacts.</summary>
        /// <remarks>
        /// Default - If this value is <em>not</em> set, considers the environment variable 'CDK_OUTDIR'.
        /// If 'CDK_OUTDIR' is not defined, uses a temp directory.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "outdir", typeJson: "{\"primitive\":\"string\"}", isOptional: true, isOverride: true)]
        public string? Outdir
        {
            get;
            set;
        }

        /// <summary>Include runtime versioning information.</summary>
        /// <remarks>
        /// <strong>Default</strong>: true runtime info is included unless related comtext is set.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "runtimeInfo", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true, isOverride: true)]
        public bool? RuntimeInfo
        {
            get;
            set;
        }

        /// <summary>Include construct creation stack trace.</summary>
        /// <remarks>
        /// <strong>Default</strong>: true stack traces are included unless related context is set.
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "stackTraces", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true, isOverride: true)]
        public bool? StackTraces
        {
            get;
            set;
        }

        /// <summary>Include construct tree metadata as part of the Cloud Assembly.</summary>
        /// <remarks>
        /// <strong>Default</strong>: true
        /// </remarks>
        [JsiiOptional]
        [JsiiProperty(name: "treeMetadata", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true, isOverride: true)]
        public bool? TreeMetadata
        {
            get;
            set;
        }
    }
}
