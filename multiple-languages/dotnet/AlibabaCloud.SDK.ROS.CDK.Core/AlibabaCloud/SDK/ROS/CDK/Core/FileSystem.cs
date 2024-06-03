using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>File system utilities.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.FileSystem), fullyQualifiedName: "@alicloud/ros-cdk-core.FileSystem")]
    public class FileSystem : DeputyBase
    {
        public FileSystem(): base(_MakeDeputyProps())
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps()
        {
            return new DeputyProps(System.Array.Empty<object?>());
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FileSystem(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected FileSystem(DeputyProps props): base(props)
        {
        }

        /// <summary>Copies an entire directory structure.</summary>
        /// <param name="srcDir">Source directory.</param>
        /// <param name="destDir">Destination directory.</param>
        /// <param name="options">options.</param>
        /// <param name="rootDir">Root directory to calculate exclusions from.</param>
        [JsiiMethod(name: "copyDirectory", parametersJson: "[{\"docs\":{\"summary\":\"Source directory.\"},\"name\":\"srcDir\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"Destination directory.\"},\"name\":\"destDir\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"options.\"},\"name\":\"options\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.CopyOptions\"}},{\"docs\":{\"summary\":\"Root directory to calculate exclusions from.\"},\"name\":\"rootDir\",\"optional\":true,\"type\":{\"primitive\":\"string\"}}]")]
        public static void CopyDirectory(string srcDir, string destDir, AlibabaCloud.SDK.ROS.CDK.Core.ICopyOptions? options = null, string? rootDir = null)
        {
            InvokeStaticVoidMethod(typeof(AlibabaCloud.SDK.ROS.CDK.Core.FileSystem), new System.Type[]{typeof(string), typeof(string), typeof(AlibabaCloud.SDK.ROS.CDK.Core.ICopyOptions), typeof(string)}, new object?[]{srcDir, destDir, options, rootDir});
        }

        /// <summary>Produces fingerprint based on the contents of a single file or an entire directory tree.</summary>
        /// <param name="fileOrDirectory">The directory or file to fingerprint.</param>
        /// <param name="options">Fingerprinting options.</param>
        /// <remarks>
        /// Line endings are converted from CRLF to LF.
        ///
        /// The fingerprint will also include:
        ///
        /// <list type="number">
        /// <description>An extra string if defined in <c>options.extra</c>.</description>
        /// <description>The symlink follow mode value.</description>
        /// </list>
        /// </remarks>
        [JsiiMethod(name: "fingerprint", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"docs\":{\"summary\":\"The directory or file to fingerprint.\"},\"name\":\"fileOrDirectory\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"Fingerprinting options.\"},\"name\":\"options\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.FingerprintOptions\"}}]")]
        public static string Fingerprint(string fileOrDirectory, AlibabaCloud.SDK.ROS.CDK.Core.IFingerprintOptions? options = null)
        {
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.FileSystem), new System.Type[]{typeof(string), typeof(AlibabaCloud.SDK.ROS.CDK.Core.IFingerprintOptions)}, new object?[]{fileOrDirectory, options})!;
        }

        /// <summary>Checks whether a directory is empty.</summary>
        /// <param name="dir">The directory to check.</param>
        [JsiiMethod(name: "isEmpty", returnsJson: "{\"type\":{\"primitive\":\"boolean\"}}", parametersJson: "[{\"docs\":{\"summary\":\"The directory to check.\"},\"name\":\"dir\",\"type\":{\"primitive\":\"string\"}}]")]
        public static bool IsEmpty(string dir)
        {
            return InvokeStaticMethod<bool>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.FileSystem), new System.Type[]{typeof(string)}, new object[]{dir})!;
        }

        /// <summary>Creates a unique temporary directory in the **system temp directory**.</summary>
        /// <param name="prefix">A prefix for the directory name.</param>
        [JsiiMethod(name: "mkdtemp", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"docs\":{\"remarks\":\"Six random characters\nwill be generated and appended behind this prefix.\",\"summary\":\"A prefix for the directory name.\"},\"name\":\"prefix\",\"type\":{\"primitive\":\"string\"}}]")]
        public static string Mkdtemp(string prefix)
        {
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.FileSystem), new System.Type[]{typeof(string)}, new object[]{prefix})!;
        }

        /// <summary>The real path of the system temp directory.</summary>
        [JsiiProperty(name: "tmpdir", typeJson: "{\"primitive\":\"string\"}")]
        public static string Tmpdir
        {
            get => GetStaticProperty<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.FileSystem))!;
        }
    }
}
