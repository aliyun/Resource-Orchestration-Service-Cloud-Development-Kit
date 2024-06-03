using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{

    /// <summary>Determines the ignore behavior to use.</summary>
    [JsiiEnum(nativeType: typeof(IgnoreMode), fullyQualifiedName: "@alicloud/ros-cdk-core.IgnoreMode")]
    public enum IgnoreMode
    {
        /// <summary>Ignores file paths based on simple glob patterns.</summary>
        /// <remarks>
        /// This is the default for file assets.
        ///
        /// It is also the default for Docker image assets, unless the 'ros-cdk:dockerIgnoreSupport'
        /// context flag is set.
        /// </remarks>
        [JsiiEnumMember(name: "GLOB")]
        GLOB,
        /// <summary>Ignores file paths based on the [`.gitignore specification`](https://git-scm.com/docs/gitignore).</summary>
        [JsiiEnumMember(name: "GIT")]
        GIT,
        /// <summary>Ignores file paths based on the [`.dockerignore specification`](https://docs.docker.com/engine/reference/builder/#dockerignore-file).</summary>
        /// <remarks>
        /// This is the default for Docker image assets if the 'ros-cdk:dockerIgnoreSupport'
        /// context flag is set.
        /// </remarks>
        [JsiiEnumMember(name: "DOCKER")]
        DOCKER
    }
}
