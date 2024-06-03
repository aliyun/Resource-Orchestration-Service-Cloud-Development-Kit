using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>Methods to build Docker CLI arguments for builds using secrets.</summary>
    /// <remarks>
    /// Docker BuildKit must be enabled to use build secrets.
    ///
    /// <strong>See</strong>: https://docs.docker.com/build/buildkit/
    /// </remarks>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.DockerBuildSecret), fullyQualifiedName: "@alicloud/ros-cdk-core.DockerBuildSecret")]
    public class DockerBuildSecret : DeputyBase
    {
        public DockerBuildSecret(): base(_MakeDeputyProps())
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
        protected DockerBuildSecret(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected DockerBuildSecret(DeputyProps props): base(props)
        {
        }

        /// <summary>A Docker build secret from a file source.</summary>
        /// <param name="src">The path to the source file, relative to the build directory.</param>
        /// <returns>The latter half required for `--secret`</returns>
        [JsiiMethod(name: "fromSrc", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"docs\":{\"summary\":\"The path to the source file, relative to the build directory.\"},\"name\":\"src\",\"type\":{\"primitive\":\"string\"}}]")]
        public static string FromSrc(string src)
        {
            return InvokeStaticMethod<string>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.DockerBuildSecret), new System.Type[]{typeof(string)}, new object[]{src})!;
        }
    }
}
