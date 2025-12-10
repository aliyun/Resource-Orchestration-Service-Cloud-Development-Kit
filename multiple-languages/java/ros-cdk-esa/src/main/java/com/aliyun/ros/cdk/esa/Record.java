package com.aliyun.ros.cdk.esa;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ESA::Record</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:56.606Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.esa.$Module.class, fqn = "@alicloud/ros-cdk-esa.Record")
public class Record extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.esa.IRecord {

    protected Record(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Record(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Record(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.RecordProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Record(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.RecordProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AuthConf: The origin authentication information of the CNAME record.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAuthConf() {
        return software.amazon.jsii.Kernel.get(this, "attrAuthConf", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute BizName: The business scenario of the record for acceleration.
     * <p>
     * Leave the parameter empty if your record is not proxied.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrBizName() {
        return software.amazon.jsii.Kernel.get(this, "attrBizName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Comment: The comment of the record.
     * <p>
     * The maximum length is 100 characters.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrComment() {
        return software.amazon.jsii.Kernel.get(this, "attrComment", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: The time when the record was created.
     * <p>
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Data: The DNS record information.
     * <p>
     * The format of this field varies based on the record type. For more information, see [References]https://www.alibabacloud.com/help/doc-detail/2708761.html?spm=openapi-amp.newDocPublishment.0.0.6a0f281feoeVWr.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrData() {
        return software.amazon.jsii.Kernel.get(this, "attrData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute HostPolicy: The origin host policy.
     * <p>
     * This policy takes effect when the record type is CNAME.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostPolicy() {
        return software.amazon.jsii.Kernel.get(this, "attrHostPolicy", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ModifyTime: The time when the record was updated.
     * <p>
     * The time follows the ISO 8601 standard in the yyyy-MM-ddTHH:mm:ssZ format. The time is displayed in UTC.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrModifyTime() {
        return software.amazon.jsii.Kernel.get(this, "attrModifyTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Proxied: Specifies whether to proxy the record.
     * <p>
     * Only CNAME and A/AAAA records can be proxied.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrProxied() {
        return software.amazon.jsii.Kernel.get(this, "attrProxied", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RecordCname: The CNAME.
     * <p>
     * If you use CNAME setup when you add your website to ESA, the value is the CNAME that you configured then.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRecordCname() {
        return software.amazon.jsii.Kernel.get(this, "attrRecordCname", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RecordId: Record Id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRecordId() {
        return software.amazon.jsii.Kernel.get(this, "attrRecordId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RecordName: The record name.
     * <p>
     * This parameter specifies a filter condition for the query.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRecordName() {
        return software.amazon.jsii.Kernel.get(this, "attrRecordName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RecordType: The type of the DNS record, such as A/AAAA, CNAME, and TXT.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRecordType() {
        return software.amazon.jsii.Kernel.get(this, "attrRecordType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SiteId: The website ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteId() {
        return software.amazon.jsii.Kernel.get(this, "attrSiteId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SiteName: The website name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSiteName() {
        return software.amazon.jsii.Kernel.get(this, "attrSiteName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SourceType: The origin type for the CNAME record.
     * <p>
     * This parameter is required when you add a CNAME record.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSourceType() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Ttl: The TTL of the record.
     * <p>
     * Unit: seconds. If the value is 1, the TTL of the record is determined by the system.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTtl() {
        return software.amazon.jsii.Kernel.get(this, "attrTtl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.esa.RecordProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.esa.RecordProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.esa.Record}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.esa.Record> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.esa.RecordProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.esa.RecordProps.Builder();
        }

        /**
         * Property data: The DNS record information.
         * <p>
         * The format of this field varies based on the record type. For more information, see [References] https://www.alibabacloud.com/help/doc-detail/2708761.html?spm=openapi-amp.newDocPublishment.0.0.6a0f281feoeVWr.
         * <p>
         * @return {@code this}
         * @param data Property data: The DNS record information. This parameter is required.
         */
        public Builder data(final com.aliyun.ros.cdk.core.IResolvable data) {
            this.props.data(data);
            return this;
        }
        /**
         * Property data: The DNS record information.
         * <p>
         * The format of this field varies based on the record type. For more information, see [References] https://www.alibabacloud.com/help/doc-detail/2708761.html?spm=openapi-amp.newDocPublishment.0.0.6a0f281feoeVWr.
         * <p>
         * @return {@code this}
         * @param data Property data: The DNS record information. This parameter is required.
         */
        public Builder data(final com.aliyun.ros.cdk.esa.RosRecord.DataProperty data) {
            this.props.data(data);
            return this;
        }

        /**
         * Property recordName: The record name.
         * <p>
         * This parameter specifies a filter condition for the query.
         * <p>
         * @return {@code this}
         * @param recordName Property recordName: The record name. This parameter is required.
         */
        public Builder recordName(final java.lang.String recordName) {
            this.props.recordName(recordName);
            return this;
        }
        /**
         * Property recordName: The record name.
         * <p>
         * This parameter specifies a filter condition for the query.
         * <p>
         * @return {@code this}
         * @param recordName Property recordName: The record name. This parameter is required.
         */
        public Builder recordName(final com.aliyun.ros.cdk.core.IResolvable recordName) {
            this.props.recordName(recordName);
            return this;
        }

        /**
         * Property recordType: The type of the DNS record, such as A/AAAA, CNAME, and TXT.
         * <p>
         * @return {@code this}
         * @param recordType Property recordType: The type of the DNS record, such as A/AAAA, CNAME, and TXT. This parameter is required.
         */
        public Builder recordType(final java.lang.String recordType) {
            this.props.recordType(recordType);
            return this;
        }
        /**
         * Property recordType: The type of the DNS record, such as A/AAAA, CNAME, and TXT.
         * <p>
         * @return {@code this}
         * @param recordType Property recordType: The type of the DNS record, such as A/AAAA, CNAME, and TXT. This parameter is required.
         */
        public Builder recordType(final com.aliyun.ros.cdk.core.IResolvable recordType) {
            this.props.recordType(recordType);
            return this;
        }

        /**
         * Property siteId: The website ID.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: The website ID. This parameter is required.
         */
        public Builder siteId(final java.lang.Number siteId) {
            this.props.siteId(siteId);
            return this;
        }
        /**
         * Property siteId: The website ID.
         * <p>
         * @return {@code this}
         * @param siteId Property siteId: The website ID. This parameter is required.
         */
        public Builder siteId(final com.aliyun.ros.cdk.core.IResolvable siteId) {
            this.props.siteId(siteId);
            return this;
        }

        /**
         * Property authConf: The origin authentication information of the CNAME record.
         * <p>
         * @return {@code this}
         * @param authConf Property authConf: The origin authentication information of the CNAME record. This parameter is required.
         */
        public Builder authConf(final com.aliyun.ros.cdk.core.IResolvable authConf) {
            this.props.authConf(authConf);
            return this;
        }
        /**
         * Property authConf: The origin authentication information of the CNAME record.
         * <p>
         * @return {@code this}
         * @param authConf Property authConf: The origin authentication information of the CNAME record. This parameter is required.
         */
        public Builder authConf(final com.aliyun.ros.cdk.esa.RosRecord.AuthConfProperty authConf) {
            this.props.authConf(authConf);
            return this;
        }

        /**
         * Property bizName: The business scenario of the record for acceleration.
         * <p>
         * Leave the parameter empty if your record is not proxied. Valid values:
         * image_video: video and image.
         * api: API.
         * web: web page.
         * <p>
         * @return {@code this}
         * @param bizName Property bizName: The business scenario of the record for acceleration. This parameter is required.
         */
        public Builder bizName(final java.lang.String bizName) {
            this.props.bizName(bizName);
            return this;
        }
        /**
         * Property bizName: The business scenario of the record for acceleration.
         * <p>
         * Leave the parameter empty if your record is not proxied. Valid values:
         * image_video: video and image.
         * api: API.
         * web: web page.
         * <p>
         * @return {@code this}
         * @param bizName Property bizName: The business scenario of the record for acceleration. This parameter is required.
         */
        public Builder bizName(final com.aliyun.ros.cdk.core.IResolvable bizName) {
            this.props.bizName(bizName);
            return this;
        }

        /**
         * Property comment: The comment of the record.
         * <p>
         * The maximum length is 100 characters.
         * <p>
         * @return {@code this}
         * @param comment Property comment: The comment of the record. This parameter is required.
         */
        public Builder comment(final java.lang.String comment) {
            this.props.comment(comment);
            return this;
        }
        /**
         * Property comment: The comment of the record.
         * <p>
         * The maximum length is 100 characters.
         * <p>
         * @return {@code this}
         * @param comment Property comment: The comment of the record. This parameter is required.
         */
        public Builder comment(final com.aliyun.ros.cdk.core.IResolvable comment) {
            this.props.comment(comment);
            return this;
        }

        /**
         * Property hostPolicy: The origin host policy.
         * <p>
         * This policy takes effect when the record type is CNAME. You can set the policy in two modes:
         * follow_hostname: Follow the host record.
         * follow_origin_domain: match the origin's domain name.
         * <p>
         * @return {@code this}
         * @param hostPolicy Property hostPolicy: The origin host policy. This parameter is required.
         */
        public Builder hostPolicy(final java.lang.String hostPolicy) {
            this.props.hostPolicy(hostPolicy);
            return this;
        }
        /**
         * Property hostPolicy: The origin host policy.
         * <p>
         * This policy takes effect when the record type is CNAME. You can set the policy in two modes:
         * follow_hostname: Follow the host record.
         * follow_origin_domain: match the origin's domain name.
         * <p>
         * @return {@code this}
         * @param hostPolicy Property hostPolicy: The origin host policy. This parameter is required.
         */
        public Builder hostPolicy(final com.aliyun.ros.cdk.core.IResolvable hostPolicy) {
            this.props.hostPolicy(hostPolicy);
            return this;
        }

        /**
         * Property proxied: Specifies whether to proxy the record.
         * <p>
         * Only CNAME and A/AAAA records can be proxied. Valid values:
         * true
         * false.
         * <p>
         * @return {@code this}
         * @param proxied Property proxied: Specifies whether to proxy the record. This parameter is required.
         */
        public Builder proxied(final java.lang.Boolean proxied) {
            this.props.proxied(proxied);
            return this;
        }
        /**
         * Property proxied: Specifies whether to proxy the record.
         * <p>
         * Only CNAME and A/AAAA records can be proxied. Valid values:
         * true
         * false.
         * <p>
         * @return {@code this}
         * @param proxied Property proxied: Specifies whether to proxy the record. This parameter is required.
         */
        public Builder proxied(final com.aliyun.ros.cdk.core.IResolvable proxied) {
            this.props.proxied(proxied);
            return this;
        }

        /**
         * Property sourceType: The origin type for the CNAME record.
         * <p>
         * This parameter is required when you add a CNAME record. Valid values:
         * OSS: OSS bucket.
         * S3: S3 bucket.
         * LB: load balancer.
         * OP: origin pool.
         * Domain: domain name.
         * If you do not pass this parameter or if you leave its value empty, Domain is used by default.
         * <p>
         * @return {@code this}
         * @param sourceType Property sourceType: The origin type for the CNAME record. This parameter is required.
         */
        public Builder sourceType(final java.lang.String sourceType) {
            this.props.sourceType(sourceType);
            return this;
        }
        /**
         * Property sourceType: The origin type for the CNAME record.
         * <p>
         * This parameter is required when you add a CNAME record. Valid values:
         * OSS: OSS bucket.
         * S3: S3 bucket.
         * LB: load balancer.
         * OP: origin pool.
         * Domain: domain name.
         * If you do not pass this parameter or if you leave its value empty, Domain is used by default.
         * <p>
         * @return {@code this}
         * @param sourceType Property sourceType: The origin type for the CNAME record. This parameter is required.
         */
        public Builder sourceType(final com.aliyun.ros.cdk.core.IResolvable sourceType) {
            this.props.sourceType(sourceType);
            return this;
        }

        /**
         * Property ttl: The TTL of the record.
         * <p>
         * Unit: seconds. If the value is 1, the TTL of the record is determined by the system.
         * <p>
         * @return {@code this}
         * @param ttl Property ttl: The TTL of the record. This parameter is required.
         */
        public Builder ttl(final java.lang.Number ttl) {
            this.props.ttl(ttl);
            return this;
        }
        /**
         * Property ttl: The TTL of the record.
         * <p>
         * Unit: seconds. If the value is 1, the TTL of the record is determined by the system.
         * <p>
         * @return {@code this}
         * @param ttl Property ttl: The TTL of the record. This parameter is required.
         */
        public Builder ttl(final com.aliyun.ros.cdk.core.IResolvable ttl) {
            this.props.ttl(ttl);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.esa.Record}.
         */
        @Override
        public com.aliyun.ros.cdk.esa.Record build() {
            return new com.aliyun.ros.cdk.esa.Record(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
