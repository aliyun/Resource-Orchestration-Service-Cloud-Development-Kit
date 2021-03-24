using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Assembly.Schema
{

    /// <summary>Type of artifact metadata entry.</summary>
    [JsiiEnum(nativeType: typeof(ArtifactMetadataEntryType), fullyQualifiedName: "@alicloud/ros-cdk-assembly-schema.ArtifactMetadataEntryType")]
    public enum ArtifactMetadataEntryType
    {
        /// <summary>Metadata key used to print INFO-level messages by the toolkit when an app is syntheized.</summary>
        [JsiiEnumMember(name: "INFO")]
        INFO,
        /// <summary>Metadata key used to print WARNING-level messages by the toolkit when an app is syntheized.</summary>
        [JsiiEnumMember(name: "WARN")]
        WARN,
        /// <summary>Metadata key used to print ERROR-level messages by the toolkit when an app is syntheized.</summary>
        [JsiiEnumMember(name: "ERROR")]
        ERROR,
        /// <summary>Represents the ROS logical ID of a resource at a certain path.</summary>
        [JsiiEnumMember(name: "LOGICAL_ID")]
        LOGICAL_ID,
        /// <summary>Represents tags of a stack.</summary>
        [JsiiEnumMember(name: "STACK_TAGS")]
        STACK_TAGS
    }
}
