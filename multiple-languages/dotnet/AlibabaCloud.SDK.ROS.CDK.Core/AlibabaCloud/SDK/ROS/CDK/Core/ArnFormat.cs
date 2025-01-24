using Amazon.JSII.Runtime.Deputy;

#pragma warning disable CS0672,CS0809,CS1591

namespace AlibabaCloud.SDK.ROS.CDK.Core
{

    /// <summary>An enum representing the various ARN formats that different services use.</summary>
    [JsiiEnum(nativeType: typeof(ArnFormat), fullyQualifiedName: "@alicloud/ros-cdk-core.ArnFormat")]
    public enum ArnFormat
    {
        /// <summary>This represents a format where there is no 'resourceName' part.</summary>
        /// <remarks>
        /// Everything after the last colon is considered the 'resource',
        /// even if it contains slashes.
        /// For some resource types, e.g. OSS buckets, 'resource' part defines the bucket name.
        /// </remarks>
        [JsiiEnumMember(name: "NO_RESOURCE_NAME")]
        NO_RESOURCE_NAME,
        /// <summary>This represents a format where the 'resource' and 'resourceName' parts are separated with a colon.</summary>
        /// <remarks>
        /// Everything after the last colon is considered the 'resourceName',
        /// even if it contains slashes.
        /// </remarks>
        [JsiiEnumMember(name: "COLON_RESOURCE_NAME")]
        COLON_RESOURCE_NAME,
        /// <summary>This represents a format where the 'resource' and 'resourceName' parts are separated with a slash.</summary>
        /// <remarks>
        /// Like in: 'acs:ecs:cn-hangzhou:123456789012****:instance/i-12345678****'.
        /// Everything after the separating slash is considered the 'resourceName',
        /// even if it contains colons.
        /// The region part can be omitted.
        /// Like in: 'acs:ram::123456789012****:role/RoleName'.
        /// </remarks>
        [JsiiEnumMember(name: "SLASH_RESOURCE_NAME")]
        SLASH_RESOURCE_NAME,
        /// <summary>This represents a format where the 'resource' and 'resourceName' parts are seperated with a slash, but there is also an additional slash after the colon separating 'account' from 'resource'.</summary>
        /// <remarks>
        /// Like in: 'acs:mns:cn-hangzhou:123456789012****:/topics/my-topic'.
        /// Note that the leading slash is <em>not</em> included in the parsed 'resource' part.
        /// </remarks>
        [JsiiEnumMember(name: "SLASH_RESOURCE_SLASH_RESOURCE_NAME")]
        SLASH_RESOURCE_SLASH_RESOURCE_NAME
    }
}
