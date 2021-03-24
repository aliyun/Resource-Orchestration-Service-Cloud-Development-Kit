using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{

    /// <summary>Type of cloud artifact.</summary>
    [JsiiEnum(nativeType: typeof(ArtifactType), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.ArtifactType")]
    public enum ArtifactType
    {
        /// <summary>Stub required because of JSII.</summary>
        [JsiiEnumMember(name: "NONE")]
        NONE,
        /// <summary>The artifact is an ROS stack.</summary>
        [JsiiEnumMember(name: "ALIYUN_ROS_STACK")]
        ALIYUN_ROS_STACK,
        /// <summary>The artifact contains the CDK application's construct tree.</summary>
        [JsiiEnumMember(name: "CDK_TREE")]
        CDK_TREE,
        /// <summary>Manifest for all assets in the Cloud Assembly.</summary>
        [JsiiEnumMember(name: "ASSET_MANIFEST")]
        ASSET_MANIFEST,
        /// <summary>Nested Cloud Assembly.</summary>
        [JsiiEnumMember(name: "NESTED_CLOUD_ASSEMBLY")]
        NESTED_CLOUD_ASSEMBLY
    }
}
