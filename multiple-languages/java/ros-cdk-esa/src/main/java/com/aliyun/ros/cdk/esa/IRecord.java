package com.aliyun.ros.cdk.esa;

/**
 * Represents a <code>Record</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.556Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.IRecord")
@software.amazon.jsii.Jsii.Proxy(IRecord.Jsii$Proxy.class)
public interface IRecord extends software.amazon.jsii.JsiiSerializable, com.aliyun.ros.cdk.core.IResource {

    /**
     * Attribute AuthConf: The origin authentication information of the CNAME record.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuthConf();

    /**
     * Attribute BizName: The business scenario of the record for acceleration.
     * <p>
     * Leave the parameter empty if your record is not proxied.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrBizName();

    /**
     * Attribute Comment: The comment of the record.
     * <p>
     * The maximum length is 100 characters.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrComment();

    /**
     * Attribute CreateTime: The time when the record was created.
     * <p>
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime();

    /**
     * Attribute Data: The DNS record information.
     * <p>
     * The format of this field varies based on the record type. For more information, see [References]https://www.alibabacloud.com/help/doc-detail/2708761.html?spm=openapi-amp.newDocPublishment.0.0.6a0f281feoeVWr.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrData();

    /**
     * Attribute HostPolicy: The origin host policy.
     * <p>
     * This policy takes effect when the record type is CNAME.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostPolicy();

    /**
     * Attribute ModifyTime: The time when the record was updated.
     * <p>
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrModifyTime();

    /**
     * Attribute Proxied: Specifies whether to proxy the record.
     * <p>
     * Only CNAME and A/AAAA records can be proxied.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrProxied();

    /**
     * Attribute RecordCname: The CNAME.
     * <p>
     * If you use CNAME setup when you add your website to ESA, the value is the CNAME that you configured then.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRecordCname();

    /**
     * Attribute RecordId: Record Id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRecordId();

    /**
     * Attribute RecordName: The record name.
     * <p>
     * This parameter specifies a filter condition for the query.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRecordName();

    /**
     * Attribute RecordType: The type of the DNS record, such as A/AAAA, CNAME, and TXT.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrRecordType();

    /**
     * Attribute SiteId: The website ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteId();

    /**
     * Attribute SiteName: The website name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteName();

    /**
     * Attribute SourceType: The origin type for the CNAME record.
     * <p>
     * This parameter is required when you add a CNAME record.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceType();

    /**
     * Attribute Ttl: The TTL of the record.
     * <p>
     * Unit: seconds. If the value is 1, the TTL of the record is determined by the system.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttrTtl();

    @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.RecordProps getProps();

    /**
     * A proxy class which represents a concrete javascript instance of this type.
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements com.aliyun.ros.cdk.esa.IRecord.Jsii$Default {
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
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute AuthConf: The origin authentication information of the CNAME record.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuthConf() {
            return software.amazon.jsii.Kernel.get(this, "attrAuthConf", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BizName: The business scenario of the record for acceleration.
         * <p>
         * Leave the parameter empty if your record is not proxied.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrBizName() {
            return software.amazon.jsii.Kernel.get(this, "attrBizName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Comment: The comment of the record.
         * <p>
         * The maximum length is 100 characters.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrComment() {
            return software.amazon.jsii.Kernel.get(this, "attrComment", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the record was created.
         * <p>
         * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Data: The DNS record information.
         * <p>
         * The format of this field varies based on the record type. For more information, see [References]https://www.alibabacloud.com/help/doc-detail/2708761.html?spm=openapi-amp.newDocPublishment.0.0.6a0f281feoeVWr.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrData() {
            return software.amazon.jsii.Kernel.get(this, "attrData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HostPolicy: The origin host policy.
         * <p>
         * This policy takes effect when the record type is CNAME.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostPolicy() {
            return software.amazon.jsii.Kernel.get(this, "attrHostPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ModifyTime: The time when the record was updated.
         * <p>
         * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrModifyTime() {
            return software.amazon.jsii.Kernel.get(this, "attrModifyTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Proxied: Specifies whether to proxy the record.
         * <p>
         * Only CNAME and A/AAAA records can be proxied.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrProxied() {
            return software.amazon.jsii.Kernel.get(this, "attrProxied", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RecordCname: The CNAME.
         * <p>
         * If you use CNAME setup when you add your website to ESA, the value is the CNAME that you configured then.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRecordCname() {
            return software.amazon.jsii.Kernel.get(this, "attrRecordCname", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RecordId: Record Id.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRecordId() {
            return software.amazon.jsii.Kernel.get(this, "attrRecordId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RecordName: The record name.
         * <p>
         * This parameter specifies a filter condition for the query.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRecordName() {
            return software.amazon.jsii.Kernel.get(this, "attrRecordName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RecordType: The type of the DNS record, such as A/AAAA, CNAME, and TXT.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrRecordType() {
            return software.amazon.jsii.Kernel.get(this, "attrRecordType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SiteId: The website ID.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteId() {
            return software.amazon.jsii.Kernel.get(this, "attrSiteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SiteName: The website name.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteName() {
            return software.amazon.jsii.Kernel.get(this, "attrSiteName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceType: The origin type for the CNAME record.
         * <p>
         * This parameter is required when you add a CNAME record.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceType() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Ttl: The TTL of the record.
         * <p>
         * Unit: seconds. If the value is 1, the TTL of the record is determined by the system.
         */
        @Override
        public final @org.jetbrains.annotations.NotNull java.lang.Object getAttrTtl() {
            return software.amazon.jsii.Kernel.get(this, "attrTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        public final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.RecordProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.RecordProps.class));
        }
    }

    /**
     * Internal default implementation for {@link IRecord}.
     */
    @software.amazon.jsii.Internal
    interface Jsii$Default extends IRecord, com.aliyun.ros.cdk.core.IResource.Jsii$Default {

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
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResourceEnvironment getEnv() {
            return software.amazon.jsii.Kernel.get(this, "env", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResourceEnvironment.class));
        }

        /**
         * The stack in which this resource is defined.
         */
        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Stack getStack() {
            return software.amazon.jsii.Kernel.get(this, "stack", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Stack.class));
        }

        /**
         * Attribute AuthConf: The origin authentication information of the CNAME record.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuthConf() {
            return software.amazon.jsii.Kernel.get(this, "attrAuthConf", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute BizName: The business scenario of the record for acceleration.
         * <p>
         * Leave the parameter empty if your record is not proxied.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrBizName() {
            return software.amazon.jsii.Kernel.get(this, "attrBizName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Comment: The comment of the record.
         * <p>
         * The maximum length is 100 characters.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrComment() {
            return software.amazon.jsii.Kernel.get(this, "attrComment", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute CreateTime: The time when the record was created.
         * <p>
         * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
            return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Data: The DNS record information.
         * <p>
         * The format of this field varies based on the record type. For more information, see [References]https://www.alibabacloud.com/help/doc-detail/2708761.html?spm=openapi-amp.newDocPublishment.0.0.6a0f281feoeVWr.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrData() {
            return software.amazon.jsii.Kernel.get(this, "attrData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute HostPolicy: The origin host policy.
         * <p>
         * This policy takes effect when the record type is CNAME.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostPolicy() {
            return software.amazon.jsii.Kernel.get(this, "attrHostPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute ModifyTime: The time when the record was updated.
         * <p>
         * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrModifyTime() {
            return software.amazon.jsii.Kernel.get(this, "attrModifyTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Proxied: Specifies whether to proxy the record.
         * <p>
         * Only CNAME and A/AAAA records can be proxied.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrProxied() {
            return software.amazon.jsii.Kernel.get(this, "attrProxied", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RecordCname: The CNAME.
         * <p>
         * If you use CNAME setup when you add your website to ESA, the value is the CNAME that you configured then.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRecordCname() {
            return software.amazon.jsii.Kernel.get(this, "attrRecordCname", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RecordId: Record Id.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRecordId() {
            return software.amazon.jsii.Kernel.get(this, "attrRecordId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RecordName: The record name.
         * <p>
         * This parameter specifies a filter condition for the query.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRecordName() {
            return software.amazon.jsii.Kernel.get(this, "attrRecordName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute RecordType: The type of the DNS record, such as A/AAAA, CNAME, and TXT.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrRecordType() {
            return software.amazon.jsii.Kernel.get(this, "attrRecordType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SiteId: The website ID.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteId() {
            return software.amazon.jsii.Kernel.get(this, "attrSiteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SiteName: The website name.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteName() {
            return software.amazon.jsii.Kernel.get(this, "attrSiteName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute SourceType: The origin type for the CNAME record.
         * <p>
         * This parameter is required when you add a CNAME record.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceType() {
            return software.amazon.jsii.Kernel.get(this, "attrSourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Attribute Ttl: The TTL of the record.
         * <p>
         * Unit: seconds. If the value is 1, the TTL of the record is determined by the system.
         */
        @Override
        default @org.jetbrains.annotations.NotNull java.lang.Object getAttrTtl() {
            return software.amazon.jsii.Kernel.get(this, "attrTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        @Override
        default @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.RecordProps getProps() {
            return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.RecordProps.class));
        }
    }
}
