using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Represents a single session of synthesis.</summary>
    /// <remarks>
    /// Passed into <c>Construct.synthesize()</c> methods.
    /// </remarks>
    [JsiiInterface(nativeType: typeof(ISynthesisSession), fullyQualifiedName: "@alicloud/ros-cdk-core.ISynthesisSession")]
    public interface ISynthesisSession
    {
        /// <summary>Cloud assembly builder.</summary>
        [JsiiProperty(name: "assembly", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cxapi.CloudAssemblyBuilder\"}")]
        AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudAssemblyBuilder Assembly
        {
            get;
            set;
        }

        /// <summary>The output directory for this synthesis session.</summary>
        [JsiiProperty(name: "outdir", typeJson: "{\"primitive\":\"string\"}")]
        string Outdir
        {
            get;
            set;
        }

        /// <summary>Whether the stack should be validated after synthesis to check for error metadata.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - false
        /// </remarks>
        [JsiiProperty(name: "validateOnSynth", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        bool? ValidateOnSynth
        {
            get
            {
                return null;
            }
            set
            {
                throw new System.NotSupportedException("'set' for 'ValidateOnSynth' is not implemented");
            }
        }

        /// <summary>Represents a single session of synthesis.</summary>
        /// <remarks>
        /// Passed into <c>Construct.synthesize()</c> methods.
        /// </remarks>
        [JsiiTypeProxy(nativeType: typeof(ISynthesisSession), fullyQualifiedName: "@alicloud/ros-cdk-core.ISynthesisSession")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Core.ISynthesisSession
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Cloud assembly builder.</summary>
            [JsiiProperty(name: "assembly", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-cxapi.CloudAssemblyBuilder\"}")]
            public AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudAssemblyBuilder Assembly
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Cxapi.CloudAssemblyBuilder>()!;
                set => SetInstanceProperty(value);
            }

            /// <summary>The output directory for this synthesis session.</summary>
            [JsiiProperty(name: "outdir", typeJson: "{\"primitive\":\"string\"}")]
            public string Outdir
            {
                get => GetInstanceProperty<string>()!;
                set => SetInstanceProperty(value);
            }

            /// <summary>Whether the stack should be validated after synthesis to check for error metadata.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - false
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "validateOnSynth", typeJson: "{\"primitive\":\"boolean\"}", isOptional: true)]
            public bool? ValidateOnSynth
            {
                get => GetInstanceProperty<bool?>();
                set => SetInstanceProperty(value);
            }
        }
    }
}
