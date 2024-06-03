using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{
    /// <summary>A Docker image.</summary>
    [JsiiClass(nativeType: typeof(AlibabaCloud.SDK.ROS.CDK.Core.DockerImage), fullyQualifiedName: "@alicloud/ros-cdk-core.DockerImage", parametersJson: "[{\"name\":\"image\",\"type\":{\"primitive\":\"string\"}},{\"name\":\"_imageHash\",\"optional\":true,\"type\":{\"primitive\":\"string\"}}]")]
    public class DockerImage : DeputyBase
    {
        public DockerImage(string image, string? imageHash = null): base(_MakeDeputyProps(image, imageHash))
        {
        }

        [System.Runtime.CompilerServices.MethodImpl(System.Runtime.CompilerServices.MethodImplOptions.AggressiveInlining)]
        private static DeputyProps _MakeDeputyProps(string image, string? imageHash = null)
        {
            return new DeputyProps(new object?[]{image, imageHash});
        }

        /// <summary>Used by jsii to construct an instance of this class from a Javascript-owned object reference</summary>
        /// <param name="reference">The Javascript-owned object reference</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected DockerImage(ByRefValue reference): base(reference)
        {
        }

        /// <summary>Used by jsii to construct an instance of this class from DeputyProps</summary>
        /// <param name="props">The deputy props</param>
        [System.ComponentModel.EditorBrowsable(System.ComponentModel.EditorBrowsableState.Never)]
        protected DockerImage(DeputyProps props): base(props)
        {
        }

        /// <summary>Builds a Docker image.</summary>
        /// <param name="path">The path to the directory containing the Docker file.</param>
        /// <param name="options">Docker build options.</param>
        [JsiiMethod(name: "fromBuild", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.DockerImage\"}}", parametersJson: "[{\"docs\":{\"summary\":\"The path to the directory containing the Docker file.\"},\"name\":\"path\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"Docker build options.\"},\"name\":\"options\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.DockerBuildOptions\"}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.DockerImage FromBuild(string path, AlibabaCloud.SDK.ROS.CDK.Core.IDockerBuildOptions? options = null)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.DockerImage>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.DockerImage), new System.Type[]{typeof(string), typeof(AlibabaCloud.SDK.ROS.CDK.Core.IDockerBuildOptions)}, new object?[]{path, options})!;
        }

        /// <summary>Reference an image on DockerHub or another online registry.</summary>
        /// <param name="image">the image name.</param>
        [JsiiMethod(name: "fromRegistry", returnsJson: "{\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.DockerImage\"}}", parametersJson: "[{\"docs\":{\"summary\":\"the image name.\"},\"name\":\"image\",\"type\":{\"primitive\":\"string\"}}]")]
        public static AlibabaCloud.SDK.ROS.CDK.Core.DockerImage FromRegistry(string image)
        {
            return InvokeStaticMethod<AlibabaCloud.SDK.ROS.CDK.Core.DockerImage>(typeof(AlibabaCloud.SDK.ROS.CDK.Core.DockerImage), new System.Type[]{typeof(string)}, new object[]{image})!;
        }

        /// <summary>Copies a file or directory out of the Docker image to the local filesystem.</summary>
        /// <param name="imagePath">the path in the Docker image.</param>
        /// <param name="outputPath">the destination path for the copy operation.</param>
        /// <returns>the destination path</returns>
        /// <remarks>
        /// If <c>outputPath</c> is omitted the destination path is a temporary directory.
        /// </remarks>
        [JsiiMethod(name: "cp", returnsJson: "{\"type\":{\"primitive\":\"string\"}}", parametersJson: "[{\"docs\":{\"summary\":\"the path in the Docker image.\"},\"name\":\"imagePath\",\"type\":{\"primitive\":\"string\"}},{\"docs\":{\"summary\":\"the destination path for the copy operation.\"},\"name\":\"outputPath\",\"optional\":true,\"type\":{\"primitive\":\"string\"}}]")]
        public virtual string Cp(string imagePath, string? outputPath = null)
        {
            return InvokeInstanceMethod<string>(new System.Type[]{typeof(string), typeof(string)}, new object?[]{imagePath, outputPath})!;
        }

        /// <summary>Runs a Docker image.</summary>
        [JsiiMethod(name: "run", parametersJson: "[{\"name\":\"options\",\"optional\":true,\"type\":{\"fqn\":\"@alicloud/ros-cdk-core.DockerRunOptions\"}}]")]
        public virtual void Run(AlibabaCloud.SDK.ROS.CDK.Core.IDockerRunOptions? options = null)
        {
            InvokeInstanceVoidMethod(new System.Type[]{typeof(AlibabaCloud.SDK.ROS.CDK.Core.IDockerRunOptions)}, new object?[]{options});
        }

        /// <summary>Provides a stable representation of this image for JSON serialization.</summary>
        /// <returns>The overridden image name if set or image hash name in that order</returns>
        [JsiiMethod(name: "toJSON", returnsJson: "{\"type\":{\"primitive\":\"string\"}}")]
        public virtual string ToJSON()
        {
            return InvokeInstanceMethod<string>(new System.Type[]{}, new object[]{})!;
        }

        [JsiiProperty(name: "image", typeJson: "{\"primitive\":\"string\"}")]
        public virtual string Image
        {
            get => GetInstanceProperty<string>()!;
        }
    }
}
