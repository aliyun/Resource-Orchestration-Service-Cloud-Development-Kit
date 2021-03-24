using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{

    /// <summary>With the DeletionPolicy attribute you can preserve or (in some cases) backup a resource when its stack is deleted.</summary>
    /// <remarks>
    /// You specify a DeletionPolicy attribute for each resource that you want to control. If a resource has no DeletionPolicy
    /// attribute, ROS deletes the resource by default.
    /// </remarks>
    [JsiiEnum(nativeType: typeof(RosDeletionPolicy), fullyQualifiedName: "@alicloud/ros-cdk-core.RosDeletionPolicy")]
    public enum RosDeletionPolicy
    {
        /// <summary>ROS will deletes the resource and all its content if applicable during stack deletion.</summary>
        /// <remarks>
        /// You can add this deletion policy to any resource type.
        /// </remarks>
        [JsiiEnumMember(name: "DELETE")]
        DELETE,
        /// <summary>ROS keeps the resource without deleting the resource or its contents when its stack is deleted.</summary>
        /// <remarks>
        /// You can add this deletion policy to any resource type.
        /// </remarks>
        [JsiiEnumMember(name: "RETAIN")]
        RETAIN
    }
}
