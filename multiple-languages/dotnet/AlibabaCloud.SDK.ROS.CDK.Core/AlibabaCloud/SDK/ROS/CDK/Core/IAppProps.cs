using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Initialization props for apps.</summary>
    [JsiiInterface(nativeType: typeof(IAppProps), fullyQualifiedName: "@alicloud/ros-cdk-core.AppProps")]
    public interface IAppProps
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
        [JsiiProperty(name: "autoSynth", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        bool? AutoSynth
        {
            get
            {
                return null;
            }
        }

        /// <summary>Additional context values for the application.</summary>
        /// <remarks>
        /// Context set by the CLI or the 'context' key in 'cdk.json' has precedence.
        /// 
        /// Context can be read from any construct using 'node.getContext(key)'.
        /// 
        /// <strong>Default</strong>: - no additional context
        /// </remarks>
        [JsiiProperty(name: "context", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, string>? Context
        {
            get
            {
                return null;
            }
        }

        /// <summary>The output directory into which to emit synthesized artifacts.</summary>
        /// <remarks>
        /// Default - If this value is <em>not</em> set, considers the environment variable 'CDK_OUTDIR'.
        /// If 'CDK_OUTDIR' is not defined, uses a temp directory.
        /// </remarks>
        [JsiiProperty(name: "outdir", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        string? Outdir
        {
            get
            {
                return null;
            }
        }

        /// <summary>Include runtime versioning information.</summary>
        /// <remarks>
        /// <strong>Default</strong>: true runtime info is included unless related comtext is set.
        /// </remarks>
        [JsiiProperty(name: "runtimeInfo", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        bool? RuntimeInfo
        {
            get
            {
                return null;
            }
        }

        /// <summary>Include construct creation stack trace.</summary>
        /// <remarks>
        /// <strong>Default</strong>: true stack traces are included unless related context is set.
        /// </remarks>
        [JsiiProperty(name: "stackTraces", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        bool? StackTraces
        {
            get
            {
                return null;
            }
        }

        /// <summary>Include construct tree metadata as part of the Cloud Assembly.</summary>
        /// <remarks>
        /// <strong>Default</strong>: true
        /// </remarks>
        [JsiiProperty(name: "treeMetadata", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        bool? TreeMetadata
        {
            get
            {
                return null;
            }
        }

        /// <summary>Initialization props for apps.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAppProps), fullyQualifiedName: "@alicloud/ros-cdk-core.AppProps")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.IAppProps
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

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
            [JsiiProperty(name: "autoSynth", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
            public bool? AutoSynth
            {
                get => GetInstanceProperty<bool?>();
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
            [JsiiProperty(name: "context", typeJson: "{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"map\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, string>? Context
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, string>?>();
            }

            /// <summary>The output directory into which to emit synthesized artifacts.</summary>
            /// <remarks>
            /// Default - If this value is <em>not</em> set, considers the environment variable 'CDK_OUTDIR'.
            /// If 'CDK_OUTDIR' is not defined, uses a temp directory.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "outdir", typeJson: "{\"primitive\":\"string\"}", isOptional: true)]
            public string? Outdir
            {
                get => GetInstanceProperty<string?>();
            }

            /// <summary>Include runtime versioning information.</summary>
            /// <remarks>
            /// <strong>Default</strong>: true runtime info is included unless related comtext is set.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "runtimeInfo", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
            public bool? RuntimeInfo
            {
                get => GetInstanceProperty<bool?>();
            }

            /// <summary>Include construct creation stack trace.</summary>
            /// <remarks>
            /// <strong>Default</strong>: true stack traces are included unless related context is set.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "stackTraces", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
            public bool? StackTraces
            {
                get => GetInstanceProperty<bool?>();
            }

            /// <summary>Include construct tree metadata as part of the Cloud Assembly.</summary>
            /// <remarks>
            /// <strong>Default</strong>: true
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "treeMetadata", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
            public bool? TreeMetadata
            {
                get => GetInstanceProperty<bool?>();
            }
        }
    }
}
