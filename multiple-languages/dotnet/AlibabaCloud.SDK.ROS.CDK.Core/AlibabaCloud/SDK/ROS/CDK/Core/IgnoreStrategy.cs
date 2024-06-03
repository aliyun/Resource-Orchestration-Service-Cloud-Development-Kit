using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Represents file path ignoring behavior.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.IgnoreStrategy), fullyQualifiedName: "@alicloud/ros-cdk-core.IgnoreStrategy")]
    public abstract class IgnoreStrategy : DeputyBase
    {
        protected IgnoreStrategy(): base(_MakeDeputyProps())
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
        protected IgnoreStrategy(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected IgnoreStrategy(DeputyProps props): base(props)
        {
        }

        /// <summary>Ignores file paths based on the [`.dockerignore specification`](https://docs.docker.com/engine/reference/builder/#dockerignore-file).</summary>
        /// <param name="absoluteRootPath">the absolute path to the root directory of the paths to be considered.</param>
        /// <returns>`DockerIgnorePattern` associated with the given patterns.</returns>
        [JsiiMethod(name: "docker", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.DockerIgnoreStrategy\"}}", parametersJson: "[{\"docs\":{\"summary\":\"the absolute path to the root directory of the paths to be considered.\"},\"name\":\"absoluteRootPath\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"patterns\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.DockerIgnoreStrategy Docker(string absoluteRootPath, string[] patterns)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.DockerIgnoreStrategy>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.IgnoreStrategy), new System.Type[]{typeof(string), typeof(string[])}, new object[]{absoluteRootPath, patterns})!;
        }

        /// <summary>Creates an IgnoreStrategy based on the `ignoreMode` and `exclude` in a `CopyOptions`.</summary>
        /// <param name="options">the `CopyOptions` to create the `IgnoreStrategy` from.</param>
        /// <param name="absoluteRootPath">the absolute path to the root directory of the paths to be considered.</param>
        /// <returns>`IgnoreStrategy` based on the `CopyOptions`</returns>
        [JsiiMethod(name: "fromCopyOptions", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.IgnoreStrategy\"}}", parametersJson: "[{\"docs\":{\"summary\":\"the `CopyOptions` to create the `IgnoreStrategy` from.\"},\"name\":\"options\",\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.CopyOptions\"}},{\"docs\":{\"summary\":\"the absolute path to the root directory of the paths to be considered.\"},\"name\":\"absoluteRootPath\",\"type\":{\"primitive\":\"string\"}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.IgnoreStrategy FromCopyOptions(AlibabaCloud.SDK.ROS.CDK.Core.ICopyOptions options, string absoluteRootPath)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.IgnoreStrategy>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.IgnoreStrategy), new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.ICopyOptions), typeof(string)}, new object[]{options, absoluteRootPath})!;
        }

        /// <summary>Ignores file paths based on the [`.gitignore specification`](https://git-scm.com/docs/gitignore).</summary>
        /// <param name="absoluteRootPath">the absolute path to the root directory of the paths to be considered.</param>
        /// <returns>`GitIgnorePattern` associated with the given patterns.</returns>
        [JsiiMethod(name: "git", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.GitIgnoreStrategy\"}}", parametersJson: "[{\"docs\":{\"summary\":\"the absolute path to the root directory of the paths to be considered.\"},\"name\":\"absoluteRootPath\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"patterns\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.GitIgnoreStrategy Git(string absoluteRootPath, string[] patterns)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.GitIgnoreStrategy>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.IgnoreStrategy), new System.Type[]{typeof(string), typeof(string[])}, new object[]{absoluteRootPath, patterns})!;
        }

        /// <summary>Ignores file paths based on simple glob patterns.</summary>
        /// <param name="absoluteRootPath">the absolute path to the root directory of the paths to be considered.</param>
        /// <returns>`GlobIgnorePattern` associated with the given patterns.</returns>
        [JsiiMethod(name: "glob", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.GlobIgnoreStrategy\"}}", parametersJson: "[{\"docs\":{\"summary\":\"the absolute path to the root directory of the paths to be considered.\"},\"name\":\"absoluteRootPath\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"patterns\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.GlobIgnoreStrategy Glob(string absoluteRootPath, string[] patterns)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.GlobIgnoreStrategy>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.IgnoreStrategy), new System.Type[]{typeof(string), typeof(string[])}, new object[]{absoluteRootPath, patterns})!;
        }

        /// <summary>Adds another pattern.</summary>
        /// <remarks>
        /// <strong>Params</strong>: pattern the pattern to add
        /// </remarks>
        [JsiiMethod(name: "add", parametersJson: "[{\"name\":\"pattern\",\"type\":{\"primitive\":\"string\"}}]")]
        public abstract void Add(string pattern);


        /// <summary>Determines whether a given file path should be ignored or not.</summary>
        /// <param name="absoluteFilePath">absolute file path to be assessed against the pattern.</param>
        /// <returns>`true` if the file should be ignored</returns>
        [JsiiMethod(name: "ignores", returnsJson: "{\"type\":{\"primitive\":\"boolean\"}}", parametersJson: "[{\"docs\":{\"summary\":\"absolute file path to be assessed against the pattern.\"},\"name\":\"absoluteFilePath\",\"type\":{\"primitive\":\"string\"}}]")]
        public abstract bool Ignores(string absoluteFilePath);


        /// <summary>Represents file path ignoring behavior.</summary>
        [JsiiTypeProxy(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.IgnoreStrategy), fullyQualifiedName: "@alicloud/ros-cdk-core.IgnoreStrategy")]
        internal sealed class _Proxy : AlibabaCloud.SDK.ROS.CDK.Core.IgnoreStrategy
        {
            private _Proxy(ByRefValue reference): base(reference)
            {
            }

            /// <summary>Adds another pattern.</summary>
            /// <remarks>
            /// <strong>Params</strong>: pattern the pattern to add
            /// </remarks>
            [JsiiMethod(name: "add", parametersJson: "[{\"name\":\"pattern\",\"type\":{\"primitive\":\"string\"}}]")]
            public override void Add(string pattern)
            {
                InvokeInstanceVoidMethod(new System.Type[]{typeof(string)}, new object[]{pattern});
            }

            /// <summary>Determines whether a given file path should be ignored or not.</summary>
            /// <param name="absoluteFilePath">absolute file path to be assessed against the pattern.</param>
            /// <returns>`true` if the file should be ignored</returns>
            [JsiiMethod(name: "ignores", returnsJson: "{\"type\":{\"primitive\":\"boolean\"}}", parametersJson: "[{\"docs\":{\"summary\":\"absolute file path to be assessed against the pattern.\"},\"name\":\"absoluteFilePath\",\"type\":{\"primitive\":\"string\"}}]")]
            public override bool Ignores(string absoluteFilePath)
            {
                return InvokeInstanceMethod<bool>(new System.Type[]{typeof(string)}, new object[]{absoluteFilePath})!;
            }
        }
    }
}
