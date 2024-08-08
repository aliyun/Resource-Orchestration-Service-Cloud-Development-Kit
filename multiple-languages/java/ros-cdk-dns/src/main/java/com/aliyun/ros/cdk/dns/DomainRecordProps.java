package com.aliyun.ros.cdk.dns;

/**
 * Properties for defining a <code>DomainRecord</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-dns-domainrecord
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:09.172Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dns.$Module.class, fqn = "@alicloud/ros-cdk-dns.DomainRecordProps")
@software.amazon.jsii.Jsii.Proxy(DomainRecordProps.Jsii$Proxy.class)
public interface DomainRecordProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property domainName: Domain name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDomainName();

    /**
     * Property rr: Host record, if you want to resolve &#64;.exmaple.com, the host record should fill in "&#64;" instead of empty.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRr();

    /**
     * Property type: Parse record type, see parsing record type format.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getType();

    /**
     * Property value: Record value.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getValue();

    /**
     * Property line: Parse the line, the default is default.
     * <p>
     * See parsing line enumeration
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLine() {
        return null;
    }

    /**
     * Property priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPriority() {
        return null;
    }

    /**
     * Property ttl: The resolution time is valid.
     * <p>
     * The default is 600 seconds (10 minutes). See the TTL definition.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTtl() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DomainRecordProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DomainRecordProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DomainRecordProps> {
        java.lang.Object domainName;
        java.lang.Object rr;
        java.lang.Object type;
        java.lang.Object value;
        java.lang.Object line;
        java.lang.Object priority;
        java.lang.Object ttl;

        /**
         * Sets the value of {@link DomainRecordProps#getDomainName}
         * @param domainName Property domainName: Domain name. This parameter is required.
         * @return {@code this}
         */
        public Builder domainName(java.lang.String domainName) {
            this.domainName = domainName;
            return this;
        }

        /**
         * Sets the value of {@link DomainRecordProps#getDomainName}
         * @param domainName Property domainName: Domain name. This parameter is required.
         * @return {@code this}
         */
        public Builder domainName(com.aliyun.ros.cdk.core.IResolvable domainName) {
            this.domainName = domainName;
            return this;
        }

        /**
         * Sets the value of {@link DomainRecordProps#getRr}
         * @param rr Property rr: Host record, if you want to resolve &#64;.exmaple.com, the host record should fill in "&#64;" instead of empty. This parameter is required.
         * @return {@code this}
         */
        public Builder rr(java.lang.String rr) {
            this.rr = rr;
            return this;
        }

        /**
         * Sets the value of {@link DomainRecordProps#getRr}
         * @param rr Property rr: Host record, if you want to resolve &#64;.exmaple.com, the host record should fill in "&#64;" instead of empty. This parameter is required.
         * @return {@code this}
         */
        public Builder rr(com.aliyun.ros.cdk.core.IResolvable rr) {
            this.rr = rr;
            return this;
        }

        /**
         * Sets the value of {@link DomainRecordProps#getType}
         * @param type Property type: Parse record type, see parsing record type format. This parameter is required.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link DomainRecordProps#getType}
         * @param type Property type: Parse record type, see parsing record type format. This parameter is required.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link DomainRecordProps#getValue}
         * @param value Property value: Record value. This parameter is required.
         * @return {@code this}
         */
        public Builder value(java.lang.String value) {
            this.value = value;
            return this;
        }

        /**
         * Sets the value of {@link DomainRecordProps#getValue}
         * @param value Property value: Record value. This parameter is required.
         * @return {@code this}
         */
        public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
            this.value = value;
            return this;
        }

        /**
         * Sets the value of {@link DomainRecordProps#getLine}
         * @param line Property line: Parse the line, the default is default.
         *             See parsing line enumeration
         * @return {@code this}
         */
        public Builder line(java.lang.String line) {
            this.line = line;
            return this;
        }

        /**
         * Sets the value of {@link DomainRecordProps#getLine}
         * @param line Property line: Parse the line, the default is default.
         *             See parsing line enumeration
         * @return {@code this}
         */
        public Builder line(com.aliyun.ros.cdk.core.IResolvable line) {
            this.line = line;
            return this;
        }

        /**
         * Sets the value of {@link DomainRecordProps#getPriority}
         * @param priority Property priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be.
         * @return {@code this}
         */
        public Builder priority(java.lang.Number priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link DomainRecordProps#getPriority}
         * @param priority Property priority: The priority of the MX record, the value range [1,10], when the record type is MX record, this parameter must be.
         * @return {@code this}
         */
        public Builder priority(com.aliyun.ros.cdk.core.IResolvable priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link DomainRecordProps#getTtl}
         * @param ttl Property ttl: The resolution time is valid.
         *            The default is 600 seconds (10 minutes). See the TTL definition.
         * @return {@code this}
         */
        public Builder ttl(java.lang.Number ttl) {
            this.ttl = ttl;
            return this;
        }

        /**
         * Sets the value of {@link DomainRecordProps#getTtl}
         * @param ttl Property ttl: The resolution time is valid.
         *            The default is 600 seconds (10 minutes). See the TTL definition.
         * @return {@code this}
         */
        public Builder ttl(com.aliyun.ros.cdk.core.IResolvable ttl) {
            this.ttl = ttl;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DomainRecordProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DomainRecordProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DomainRecordProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DomainRecordProps {
        private final java.lang.Object domainName;
        private final java.lang.Object rr;
        private final java.lang.Object type;
        private final java.lang.Object value;
        private final java.lang.Object line;
        private final java.lang.Object priority;
        private final java.lang.Object ttl;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.domainName = software.amazon.jsii.Kernel.get(this, "domainName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rr = software.amazon.jsii.Kernel.get(this, "rr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.line = software.amazon.jsii.Kernel.get(this, "line", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.priority = software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ttl = software.amazon.jsii.Kernel.get(this, "ttl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.domainName = java.util.Objects.requireNonNull(builder.domainName, "domainName is required");
            this.rr = java.util.Objects.requireNonNull(builder.rr, "rr is required");
            this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
            this.value = java.util.Objects.requireNonNull(builder.value, "value is required");
            this.line = builder.line;
            this.priority = builder.priority;
            this.ttl = builder.ttl;
        }

        @Override
        public final java.lang.Object getDomainName() {
            return this.domainName;
        }

        @Override
        public final java.lang.Object getRr() {
            return this.rr;
        }

        @Override
        public final java.lang.Object getType() {
            return this.type;
        }

        @Override
        public final java.lang.Object getValue() {
            return this.value;
        }

        @Override
        public final java.lang.Object getLine() {
            return this.line;
        }

        @Override
        public final java.lang.Object getPriority() {
            return this.priority;
        }

        @Override
        public final java.lang.Object getTtl() {
            return this.ttl;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("domainName", om.valueToTree(this.getDomainName()));
            data.set("rr", om.valueToTree(this.getRr()));
            data.set("type", om.valueToTree(this.getType()));
            data.set("value", om.valueToTree(this.getValue()));
            if (this.getLine() != null) {
                data.set("line", om.valueToTree(this.getLine()));
            }
            if (this.getPriority() != null) {
                data.set("priority", om.valueToTree(this.getPriority()));
            }
            if (this.getTtl() != null) {
                data.set("ttl", om.valueToTree(this.getTtl()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-dns.DomainRecordProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DomainRecordProps.Jsii$Proxy that = (DomainRecordProps.Jsii$Proxy) o;

            if (!domainName.equals(that.domainName)) return false;
            if (!rr.equals(that.rr)) return false;
            if (!type.equals(that.type)) return false;
            if (!value.equals(that.value)) return false;
            if (this.line != null ? !this.line.equals(that.line) : that.line != null) return false;
            if (this.priority != null ? !this.priority.equals(that.priority) : that.priority != null) return false;
            return this.ttl != null ? this.ttl.equals(that.ttl) : that.ttl == null;
        }

        @Override
        public final int hashCode() {
            int result = this.domainName.hashCode();
            result = 31 * result + (this.rr.hashCode());
            result = 31 * result + (this.type.hashCode());
            result = 31 * result + (this.value.hashCode());
            result = 31 * result + (this.line != null ? this.line.hashCode() : 0);
            result = 31 * result + (this.priority != null ? this.priority.hashCode() : 0);
            result = 31 * result + (this.ttl != null ? this.ttl.hashCode() : 0);
            return result;
        }
    }
}
