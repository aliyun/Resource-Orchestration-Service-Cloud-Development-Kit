using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{
    /// <summary>Protocol utility class.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.Manifest), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.Manifest")]
    public class Manifest : DeputyBase
    {
        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Manifest(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected Manifest(DeputyProps props): base(props)
        {
        }

        /// <summary>(deprecated) Deprecated.</summary>
        /// <remarks>
        /// <strong>Stability</strong>: Deprecated
        /// </remarks>
        [JsiiMethod(name: "load", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.AssemblyManifest\"}}", parametersJson: "[{\"name\":\"filePath\",\"type\":{\"primitive\":\"string\"}}]")]
        [System.Obsolete("use `loadAssemblyManifest()`")]
        public static AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IAssemblyManifest Load(string filePath)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IAssemblyManifest>(typeof(AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.Manifest), new System.Type[]{typeof(string)}, new object[]{filePath})!;
        }

        /// <summary>Load and validates the cloud assembly manifest from file.</summary>
        /// <param name="filePath">- path to the manifest file.</param>
        [JsiiMethod(name: "loadAssemblyManifest", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.AssemblyManifest\"}}", parametersJson: "[{\"docs\":{\"summary\":\"- path to the manifest file.\"},\"name\":\"filePath\",\"type\":{\"primitive\":\"string\"}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IAssemblyManifest LoadAssemblyManifest(string filePath)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IAssemblyManifest>(typeof(AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.Manifest), new System.Type[]{typeof(string)}, new object[]{filePath})!;
        }

        /// <summary>(deprecated) Deprecated.</summary>
        /// <remarks>
        /// <strong>Stability</strong>: Deprecated
        /// </remarks>
        [JsiiMethod(name: "save", parametersJson: "[{\"name\":\"manifest\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.AssemblyManifest\"}},{\"name\":\"filePath\",\"type\":{\"primitive\":\"string\"}}]")]
        [System.Obsolete("use `saveAssemblyManifest()`")]
        public static void Save(AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IAssemblyManifest manifest, string filePath)
        {
            InvokeStaticVoidMethod(typeof(AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.Manifest), new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IAssemblyManifest), typeof(string)}, new object[]{manifest, filePath});
        }

        /// <summary>Validates and saves the cloud assembly manifest to file.</summary>
        /// <param name="manifest">- manifest.</param>
        /// <param name="filePath">- output file path.</param>
        [JsiiMethod(name: "saveAssemblyManifest", parametersJson: "[{\"docs\":{\"summary\":\"- manifest.\"},\"name\":\"manifest\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-assembly-schema.AssemblyManifest\"}},{\"docs\":{\"summary\":\"- output file path.\"},\"name\":\"filePath\",\"type\":{\"primitive\":\"string\"}}]")]
        public static void SaveAssemblyManifest(AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IAssemblyManifest manifest, string filePath)
        {
            InvokeStaticVoidMethod(typeof(AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.Manifest), new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.IAssemblyManifest), typeof(string)}, new object[]{manifest, filePath});
        }

        /// <summary>Fetch the current schema version number.</summary>
        [JsiiMethod(name: "version", returnsJson: "{\"type\":{\"primitive\":\"string\"}}")]
        public static string Version()
        {
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Assembly.Schema.Manifest), new System.Type[]{}, new object[]{})!;
        }
    }
}
