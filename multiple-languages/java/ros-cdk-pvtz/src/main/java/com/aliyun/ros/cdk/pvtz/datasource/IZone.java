package com.aliyun.ros.cdk.pvtz.datasource;

/**
 * Represents a <code>Zone</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:19.273Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pvtz.$Module.class, fqn = "@alicloud/ros-cdk-pvtz.datasource.IZone")
@software.amazon.jsii.Jsii.Proxy(IZone.Jsii$Proxy.class)
public interface IZone extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute BindVpcs: The VPCs associated with the zone.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBindVpcs();

    /**
     * Attribute CreateTime: The time when the zone was created.
     * <p>
     * The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute CreateTimestamp: The time when the zone was created.
     * <p>
     * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTimestamp();

    /**
     * Attribute IsPtr: Indicates whether the zone is a reverse lookup zone.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsPtr();

    /**
     * Attribute ProxyPattern: Indicates whether the recursive resolution proxy for subdomain names is enabled.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrProxyPattern();

    /**
     * Attribute RecordCount: The total number of DNS records added in the zone.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRecordCount();

    /**
     * Attribute Remark: The description of the zone.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemark();

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the zone belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId();

    /**
     * Attribute SlaveDns: Indicates whether the secondary Domain Name System (DNS) feature is enabled for the zone.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSlaveDns();

    /**
     * Attribute Tags: The tags of the zone.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags();

    /**
     * Attribute UpdateTime: The time when the zone was last updated.
     * <p>
     * The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime();

    /**
     * Attribute UpdateTimestamp: The time when the zone was last updated.
     * <p>
     * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTimestamp();

    /**
     * Attribute ZoneId: The zone ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId();

    /**
     * Attribute ZoneName: The zone name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneName();

    /**
     * Attribute ZoneTag: Not open to users for the time being, no value transfer is required.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneTag();

    /**
     * Attribute ZoneType: The zone type, temporarily closed to users, no need to pass values.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneType();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pvtz.datasource.ZoneProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.pvtz.datasource.IZone.Jsii$Default {
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
        }

        /**
         * The construct tree node for this construct.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute BindVpcs: The VPCs associated with the zone.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBindVpcs() {
            return software.amazon.jsii.Kernel.get(this, "attrBindVpcs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the zone was created.
         * <p>
         * The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTimestamp: The time when the zone was created.
         * <p>
         * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTimestamp() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTimestamp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IsPtr: Indicates whether the zone is a reverse lookup zone.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsPtr() {
            return software.amazon.jsii.Kernel.get(this, "attrIsPtr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProxyPattern: Indicates whether the recursive resolution proxy for subdomain names is enabled.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrProxyPattern() {
            return software.amazon.jsii.Kernel.get(this, "attrProxyPattern", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RecordCount: The total number of DNS records added in the zone.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRecordCount() {
            return software.amazon.jsii.Kernel.get(this, "attrRecordCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Remark: The description of the zone.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemark() {
            return software.amazon.jsii.Kernel.get(this, "attrRemark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group to which the zone belongs.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SlaveDns: Indicates whether the secondary Domain Name System (DNS) feature is enabled for the zone.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSlaveDns() {
            return software.amazon.jsii.Kernel.get(this, "attrSlaveDns", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of the zone.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateTime: The time when the zone was last updated.
         * <p>
         * The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateTimestamp: The time when the zone was last updated.
         * <p>
         * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTimestamp() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateTimestamp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: The zone ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneName: The zone name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneName() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneTag: Not open to users for the time being, no value transfer is required.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneTag() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneTag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneType: The zone type, temporarily closed to users, no need to pass values.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneType() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pvtz.datasource.ZoneProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pvtz.datasource.ZoneProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IZone}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IZone, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

        /**
         * The construct tree node for this construct.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ConstructNode getNode() {
            return software.amazon.jsii.Kernel.get(this, "node", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ConstructNode.class));
        }

        /**
         * The environment this resource belongs to.
         * <p>
         * For resources that are created and managed by the CDK
         * (generally, those created by creating new class instances like Role, Bucket, etc.),
         * this is always the same as the environment of the stack they belong to;
         * however, for imported resources
         * (those obtained from static methods like fromRoleArn, fromBucketName, etc.),
         * that might be different than the stack they were imported into.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.ResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.ResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute BindVpcs: The VPCs associated with the zone.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBindVpcs() {
            return software.amazon.jsii.Kernel.get(this, "attrBindVpcs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the zone was created.
         * <p>
         * The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTimestamp: The time when the zone was created.
         * <p>
         * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTimestamp() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTimestamp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute IsPtr: Indicates whether the zone is a reverse lookup zone.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsPtr() {
            return software.amazon.jsii.Kernel.get(this, "attrIsPtr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ProxyPattern: Indicates whether the recursive resolution proxy for subdomain names is enabled.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrProxyPattern() {
            return software.amazon.jsii.Kernel.get(this, "attrProxyPattern", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RecordCount: The total number of DNS records added in the zone.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRecordCount() {
            return software.amazon.jsii.Kernel.get(this, "attrRecordCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Remark: The description of the zone.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRemark() {
            return software.amazon.jsii.Kernel.get(this, "attrRemark", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ResourceGroupId: The ID of the resource group to which the zone belongs.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
            return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SlaveDns: Indicates whether the secondary Domain Name System (DNS) feature is enabled for the zone.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSlaveDns() {
            return software.amazon.jsii.Kernel.get(this, "attrSlaveDns", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Tags: The tags of the zone.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
            return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateTime: The time when the zone was last updated.
         * <p>
         * The time follows the ISO 8601 standard in the YYYY-MM-DDThh:mm:ssZ format. The time is displayed in UTC.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute UpdateTimestamp: The time when the zone was last updated.
         * <p>
         * This value is a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrUpdateTimestamp() {
            return software.amazon.jsii.Kernel.get(this, "attrUpdateTimestamp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneId: The zone ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneName: The zone name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneName() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneTag: Not open to users for the time being, no value transfer is required.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneTag() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneTag", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ZoneType: The zone type, temporarily closed to users, no need to pass values.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneType() {
            return software.amazon.jsii.Kernel.get(this, "attrZoneType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pvtz.datasource.ZoneProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pvtz.datasource.ZoneProps.class));
        }
    }
}
