using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Ignores file paths based on the [`.gitignore specification`](https://git-scm.com/docs/gitignore).</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.GitIgnoreStrategy), fullyQualifiedName: "@alicloud/ros-cdk-core.GitIgnoreStrategy", parametersJson: "[{\"name\":\"absoluteRootPath\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"patterns\",\"type\":{\"collection\":{\"elementtype\":{\"primitive\":\"string\"},\"kind\":\"array\"}}}]")]
    public class GitIgnoreStrategy : AlibabaCloud.SDK.ROS.CDK.Core.IgnoreStrategy
    {
        public GitIgnoreStrategy(string absoluteRootPath, string[] patterns): base(_MakeDeputyProps(absoluteRootPath, patterns))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(string absoluteRootPath, string[] patterns)
        {
            return new DeputyProps(new object?[]{absoluteRootPath, patterns});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected GitIgnoreStrategy(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected GitIgnoreStrategy(DeputyProps props): base(props)
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
