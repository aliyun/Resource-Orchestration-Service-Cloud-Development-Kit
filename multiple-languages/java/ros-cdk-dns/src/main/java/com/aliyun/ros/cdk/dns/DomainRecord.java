package com.aliyun.ros.cdk.dns;

/**
 * A ROS resource type:  <code>ALIYUN::DNS::DomainRecord</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-19T08:52:09.093Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dns.$Module.class, fqn = "@alicloud/ros-cdk-dns.DomainRecord")
public class DomainRecord extends com.aliyun.ros.cdk.core.Resource {

    protected DomainRecord(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DomainRecord(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::DNS::DomainRecord</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public DomainRecord(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dns.DomainRecordProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::DNS::DomainRecord</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public DomainRecord(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dns.DomainRecordProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute RecordId: Parse the ID of the record.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRecordId() {
        return software.amazon.jsii.Kernel.get(this, "attrRecordId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dns.DomainRecord}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dns.DomainRecord> {
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
        private final com.aliyun.ros.cdk.dns.DomainRecordProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dns.DomainRecordProps.Builder();
        }

        /**
         * Property domainName: Domain name.
         * <p>
         * @return {@code this}
         * @param domainName Property domainName: Domain name. This parameter is required.
         */
        public Builder domainName(final java.lang.String domainName) {
            this.props.domainName(domainName);
            return this;
        }
        /**
         * Property domainName: Domain name.
         * <p>
         * @return {@code this}
         * @param domainName Property domainName: Domain name. This parameter is required.
         */
        public Builder domainName(final com.aliyun.ros.cdk.core.IResolvable domainName) {
            this.props.domainName(domainName);
            return this;
        }

        /**
         * Property rr: Host record, if you want to resolve &#64;.exmaple.com, the host record should fill in "&#64;" instead of empty.
         * <p>
         * @return {@code this}
         * @param rr Property rr: Host record, if you want to resolve &#64;.exmaple.com, the host record should fill in "&#64;" instead of empty. This parameter is required.
         */
        public Builder rr(final java.lang.String rr) {
            this.props.rr(rr);
            return this;
        }
        /**
         * Property rr: Host record, if you want to resolve &#64;.exmaple.com, the host record should fill in "&#64;" instead of empty.
         * <p>
         * @return {@code this}
         * @param rr Property rr: Host record, if you want to resolve &#64;.exmaple.com, the host record should fill in "&#64;" instead of empty. This parameter is required.
         */
        public Builder rr(final com.aliyun.ros.cdk.core.IResolvable rr) {
            this.props.rr(rr);
            return this;
        }

        /**
         * Property type: Parse record type, see parsing record type format.
         * <p>
         * @return {@code this}
         * @param type Property type: Parse record type, see parsing record type format. This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * Property type: Parse record type, see parsing record type format.
         * <p>
         * @return {@code this}
         * @param type Property type: Parse record type, see parsing record type format. This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * Property value: Record value.
         * <p>
         * @return {@code this}
         * @param value Property value: Record value. This parameter is required.
         */
        public Builder value(final java.lang.String value) {
            this.props.value(value);
            return this;
        }
        /**
         * Property value: Record value.
         * <p>
         * @return {@code this}
         * @param value Property value: Record value. This parameter is required.
         */
        public Builder value(final com.aliyun.ros.cdk.core.IResolvable value) {
            this.props.value(value);
            return this;
        }

        /**
         * Property line: Parse the line, the default is default.
         * <p>
         * See parsing line enumeration
         * <p>
         * @return {@code this}
         * @param line Property line: Parse the line, the default is default. This parameter is required.
         */
        public Builder line(final java.lang.String line) {
            this.props.line(line);
            return this;
        }
        /**
         * Property line: Parse the line, the default is default.
         * <p>
         * See parsing line enumeration
         * <p>
         * @return {@code this}
         * @param line Property line: Parse the line, the default is default. This parameter is required.
         */
        public Builder line(final com.aliyun.ros.cdk.core.IResolvable line) {
            this.props.line(line);
            return this;
        }

        /**
         * Property priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be.
         * <p>
         * @return {@code this}
         * @param priority Property priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be. This parameter is required.
         */
        public Builder priority(final java.lang.Number priority) {
            this.props.priority(priority);
            return this;
        }
        /**
         * Property priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be.
         * <p>
         * @return {@code this}
         * @param priority Property priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be. This parameter is required.
         */
        public Builder priority(final com.aliyun.ros.cdk.core.IResolvable priority) {
            this.props.priority(priority);
            return this;
        }

        /**
         * Property ttl: The resolution time is valid.
         * <p>
         * The default is 600 seconds (10 minutes). See the TTL definition.
         * <p>
         * @return {@code this}
         * @param ttl Property ttl: The resolution time is valid. This parameter is required.
         */
        public Builder ttl(final java.lang.Number ttl) {
            this.props.ttl(ttl);
            return this;
        }
        /**
         * Property ttl: The resolution time is valid.
         * <p>
         * The default is 600 seconds (10 minutes). See the TTL definition.
         * <p>
         * @return {@code this}
         * @param ttl Property ttl: The resolution time is valid. This parameter is required.
         */
        public Builder ttl(final com.aliyun.ros.cdk.core.IResolvable ttl) {
            this.props.ttl(ttl);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dns.DomainRecord}.
         */
        @Override
        public com.aliyun.ros.cdk.dns.DomainRecord build() {
            return new com.aliyun.ros.cdk.dns.DomainRecord(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
