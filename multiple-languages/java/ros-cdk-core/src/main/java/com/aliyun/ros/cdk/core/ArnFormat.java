package com.aliyun.ros.cdk.core;

/**
 * An enum representing the various ARN formats that different services use.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:20.146Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.ArnFormat")
public enum ArnFormat {
    /**
     * This represents a format where there is no 'resourceName' part.
     * <p>
     * Everything after the last colon is considered the 'resource',
     * even if it contains slashes.
     * For some resource types, e.g. OSS buckets, 'resource' part defines the bucket name.
     */
    NO_RESOURCE_NAME,
    /**
     * This represents a format where the 'resource' and 'resourceName' parts are separated with a colon.
     * <p>
     * Everything after the last colon is considered the 'resourceName',
     * even if it contains slashes.
     */
    COLON_RESOURCE_NAME,
    /**
     * This represents a format where the 'resource' and 'resourceName' parts are separated with a slash.
     * <p>
     * Like in: 'acs:ecs:cn-hangzhou:123456789012****:instance/i-12345678****'.
     * Everything after the separating slash is considered the 'resourceName',
     * even if it contains colons.
     * The region part can be omitted.
     * Like in: 'acs:ram::123456789012****:role/RoleName'.
     */
    SLASH_RESOURCE_NAME,
    /**
     * This represents a format where the 'resource' and 'resourceName' parts are seperated with a slash, but there is also an additional slash after the colon separating 'account' from 'resource'.
     * <p>
     * Like in: 'acs:mns:cn-hangzhou:123456789012****:/topics/my-topic'.
     * Note that the leading slash is <em>not</em> included in the parsed 'resource' part.
     */
    SLASH_RESOURCE_SLASH_RESOURCE_NAME,
}
