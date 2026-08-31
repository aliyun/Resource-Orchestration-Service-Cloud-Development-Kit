package com.aliyun.ros.cdk.pvtz;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::PVTZ::ZoneRecord</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T10:52:38.658Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pvtz.$Module.class, fqn = "@alicloud/ros-cdk-pvtz.ZoneRecord")
public class ZoneRecord extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.pvtz.IZoneRecord {

    protected ZoneRecord(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ZoneRecord(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ZoneRecord(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pvtz.ZoneRecordProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ZoneRecord(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pvtz.ZoneRecordProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Record: Record data.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRecord() {
        return software.amazon.jsii.Kernel.get(this, "attrRecord", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RecordId: Parsing record Id.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRecordId() {
        return software.amazon.jsii.Kernel.get(this, "attrRecordId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ZoneId: Zone ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.pvtz.ZoneRecordProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.pvtz.ZoneRecordProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.pvtz.ZoneRecord}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.pvtz.ZoneRecord> {
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
        private final com.aliyun.ros.cdk.pvtz.ZoneRecordProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.pvtz.ZoneRecordProps.Builder();
        }

        /**
         * Property rr: The host record.
         * <p>
         * A host record is the prefix of a domain name. Common host
         * records include www, &#64;, * (for wildcard DNS), and mail (for mailboxes).
         * For example, to resolve &#64;.example.com, set the host record to "&#64;", not an empty
         * string.
         * <p>
         * @return {@code this}
         * @param rr Property rr: The host record. This parameter is required.
         */
        public Builder rr(final java.lang.String rr) {
            this.props.rr(rr);
            return this;
        }
        /**
         * Property rr: The host record.
         * <p>
         * A host record is the prefix of a domain name. Common host
         * records include www, &#64;, * (for wildcard DNS), and mail (for mailboxes).
         * For example, to resolve &#64;.example.com, set the host record to "&#64;", not an empty
         * string.
         * <p>
         * @return {@code this}
         * @param rr Property rr: The host record. This parameter is required.
         */
        public Builder rr(final com.aliyun.ros.cdk.core.IResolvable rr) {
            this.props.rr(rr);
            return this;
        }

        /**
         * Property status: The status of the DNS record.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>ENABLE: Enables DNS resolution.</li>
         * <li>DISABLE: Pauses DNS resolution.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param status Property status: The status of the DNS record. This parameter is required.
         */
        public Builder status(final java.lang.String status) {
            this.props.status(status);
            return this;
        }
        /**
         * Property status: The status of the DNS record.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>ENABLE: Enables DNS resolution.</li>
         * <li>DISABLE: Pauses DNS resolution.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param status Property status: The status of the DNS record. This parameter is required.
         */
        public Builder status(final com.aliyun.ros.cdk.core.IResolvable status) {
            this.props.status(status);
            return this;
        }

        /**
         * Property type: The type of the DNS record.
         * <p>
         * The following types are supported:
         * <p>
         * <ul>
         * <li>A: Maps a domain name to an IPv4 address in dotted decimal notation.</li>
         * <li>AAAA: Maps a domain name to an IPv6 address.</li>
         * <li>CNAME: Maps a domain name to another domain name.</li>
         * <li>TXT: A text record. The text can be up to 255 characters in length. TXT records
         * are often used for Sender Policy Framework (SPF) records to prevent spam.</li>
         * <li>MX: Maps a domain name to the domain name of a mail server.</li>
         * <li>PTR: Maps an IP address to a domain name.</li>
         * <li>SRV: Specifies the server for a specific service. The format is: Priority
         * Weight Port Target. Separate each value with a space.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * Before adding a PTR record, configure a reverse lookup zone. For more
         * information, see <a href="">Reverse DNS lookups and PTR records</a>.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param type Property type: The type of the DNS record. This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * Property type: The type of the DNS record.
         * <p>
         * The following types are supported:
         * <p>
         * <ul>
         * <li>A: Maps a domain name to an IPv4 address in dotted decimal notation.</li>
         * <li>AAAA: Maps a domain name to an IPv6 address.</li>
         * <li>CNAME: Maps a domain name to another domain name.</li>
         * <li>TXT: A text record. The text can be up to 255 characters in length. TXT records
         * are often used for Sender Policy Framework (SPF) records to prevent spam.</li>
         * <li>MX: Maps a domain name to the domain name of a mail server.</li>
         * <li>PTR: Maps an IP address to a domain name.</li>
         * <li>SRV: Specifies the server for a specific service. The format is: Priority
         * Weight Port Target. Separate each value with a space.</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * Before adding a PTR record, configure a reverse lookup zone. For more
         * information, see <a href="">Reverse DNS lookups and PTR records</a>.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param type Property type: The type of the DNS record. This parameter is required.
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
         * Property zoneId: Zone Id.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: Zone Id. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: Zone Id.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: Zone Id. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * Property priority: The priority of the MX record.
         * <p>
         * A smaller value indicates a higher priority. Valid
         * values: [1, 99].
         * <p>
         * @return {@code this}
         * @param priority Property priority: The priority of the MX record. This parameter is required.
         */
        public Builder priority(final java.lang.Number priority) {
            this.props.priority(priority);
            return this;
        }
        /**
         * Property priority: The priority of the MX record.
         * <p>
         * A smaller value indicates a higher priority. Valid
         * values: [1, 99].
         * <p>
         * @return {@code this}
         * @param priority Property priority: The priority of the MX record. This parameter is required.
         */
        public Builder priority(final com.aliyun.ros.cdk.core.IResolvable priority) {
            this.props.priority(priority);
            return this;
        }

        /**
         * Property ttl: The time to live (TTL).
         * <p>
         * The unit is seconds (s). Valid values are 5, 30, 60, 3600
         * (1 hour), 43200 (12 hours), and 86400 (1 day). The default value is 60.
         * <p>
         * @return {@code this}
         * @param ttl Property ttl: The time to live (TTL). This parameter is required.
         */
        public Builder ttl(final java.lang.Number ttl) {
            this.props.ttl(ttl);
            return this;
        }
        /**
         * Property ttl: The time to live (TTL).
         * <p>
         * The unit is seconds (s). Valid values are 5, 30, 60, 3600
         * (1 hour), 43200 (12 hours), and 86400 (1 day). The default value is 60.
         * <p>
         * @return {@code this}
         * @param ttl Property ttl: The time to live (TTL). This parameter is required.
         */
        public Builder ttl(final com.aliyun.ros.cdk.core.IResolvable ttl) {
            this.props.ttl(ttl);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.pvtz.ZoneRecord}.
         */
        @Override
        public com.aliyun.ros.cdk.pvtz.ZoneRecord build() {
            return new com.aliyun.ros.cdk.pvtz.ZoneRecord(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
