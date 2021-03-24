using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    /// <summary>A manifest which describes the cloud assembly.</summary>
    [JsiiInterface(nativeType: typeof(IAssemblyManifest), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.AssemblyManifest")]
    public interface IAssemblyManifest
    {
        /// <summary>Protocol version.</summary>
        [JsiiProperty(name: "version", typeJson: "{\"primitive\":\"string\"}")]
        string Version
        {
            get;
        }

        /// <summary>The set of artifacts in this assembly.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no artifacts.
        /// </remarks>
        [JsiiProperty(name: "artifacts", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.ArtifactManifest\"},\"kind\":\"map\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        System.Collections.Generic.IDictionary<string, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IArtifactManifest>? Artifacts
        {
            get
            {
                return null;
            }
        }

        /// <summary>Missing context information.</summary>
        /// <remarks>
        /// If this field has values, it means that the
        /// cloud assembly is not complete and should not be deployed.
        /// 
        /// <strong>Default</strong>: - no missing context.
        /// </remarks>
        [JsiiProperty(name: "missing", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.MissingContext\"},\"kind\":\"array\"}}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IMissingContext[]? Missing
        {
            get
            {
                return null;
            }
        }

        /// <summary>Runtime information.</summary>
        /// <remarks>
        /// <strong>Default</strong>: - no info.
        /// </remarks>
        [JsiiProperty(name: "runtime", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.RuntimeInfo\"}", isOptional: true)]
        [Amazon.JSII.Runtime.Deputy.JsiiOptional]
        AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IRuntimeInfo? Runtime
        {
            get
            {
                return null;
            }
        }

        /// <summary>A manifest which describes the cloud assembly.</summary>
        [JsiiTypeProxy(nativeType: typeof(IAssemblyManifest), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.AssemblyManifest")]
        internal sealed class _Proxy : DeputyBase, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IAssemblyManifest
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Protocol version.</summary>
            [JsiiProperty(name: "version", typeJson: "{\"primitive\":\"string\"}")]
            public string Version
            {
                get => GetInstanceProperty<string>()!;
            }

            /// <summary>The set of artifacts in this assembly.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - no artifacts.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "artifacts", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.ArtifactManifest\"},\"kind\":\"map\"}}", isOptional: true)]
            public System.Collections.Generic.IDictionary<string, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IArtifactManifest>? Artifacts
            {
                get => GetInstanceProperty<System.Collections.Generic.IDictionary<string, AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IArtifactManifest>?>();
            }

            /// <summary>Missing context information.</summary>
            /// <remarks>
            /// If this field has values, it means that the
            /// cloud assembly is not complete and should not be deployed.
            /// 
            /// <strong>Default</strong>: - no missing context.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "missing", typeJson: "{\"collection\":{\"elementtype\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.MissingContext\"},\"kind\":\"array\"}}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IMissingContext[]? Missing
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IMissingContext[]?>();
            }

            /// <summary>Runtime information.</summary>
            /// <remarks>
            /// <strong>Default</strong>: - no info.
            /// </remarks>
            [JsiiOptional]
            [JsiiProperty(name: "runtime", typeJson: "{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.RuntimeInfo\"}", isOptional: true)]
            public AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IRuntimeInfo? Runtime
            {
                get => GetInstanceProperty<AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IRuntimeInfo?>();
            }
        }
    }
}
