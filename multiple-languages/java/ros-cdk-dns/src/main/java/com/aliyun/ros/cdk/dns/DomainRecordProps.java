package com.aliyun.ros.cdk.dns;

/**
 * Properties for defining a `ALIYUN::DNS::DomainRecord`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.512Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dns.$Module.class, fqn = "@alicloud/ros-cdk-dns.DomainRecordProps")
@software.amazon.jsii.Jsii.Proxy(DomainRecordProps.Jsii$Proxy.class)
public interface DomainRecordProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getDomainName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getRr();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getValue();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getLine() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getPriority() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Number getTtl() {
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
        private java.lang.String domainName;
        private java.lang.String rr;
        private java.lang.String type;
        private java.lang.String value;
        private java.lang.String line;
        private java.lang.Number priority;
        private java.lang.Number ttl;

        /**
         * Sets the value of {@link DomainRecordProps#getDomainName}
         * @param domainName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder domainName(java.lang.String domainName) {
            this.domainName = domainName;
            return this;
        }

        /**
         * Sets the value of {@link DomainRecordProps#getRr}
         * @param rr the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder rr(java.lang.String rr) {
            this.rr = rr;
            return this;
        }

        /**
         * Sets the value of {@link DomainRecordProps#getType}
         * @param type the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link DomainRecordProps#getValue}
         * @param value the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder value(java.lang.String value) {
            this.value = value;
            return this;
        }

        /**
         * Sets the value of {@link DomainRecordProps#getLine}
         * @param line the value to be set.
         * @return {@code this}
         */
        public Builder line(java.lang.String line) {
            this.line = line;
            return this;
        }

        /**
         * Sets the value of {@link DomainRecordProps#getPriority}
         * @param priority the value to be set.
         * @return {@code this}
         */
        public Builder priority(java.lang.Number priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link DomainRecordProps#getTtl}
         * @param ttl the value to be set.
         * @return {@code this}
         */
        public Builder ttl(java.lang.Number ttl) {
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
            return new Jsii$Proxy(domainName, rr, type, value, line, priority, ttl);
        }
    }

    /**
     * An implementation for {@link DomainRecordProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DomainRecordProps {
        private final java.lang.String domainName;
        private final java.lang.String rr;
        private final java.lang.String type;
        private final java.lang.String value;
        private final java.lang.String line;
        private final java.lang.Number priority;
        private final java.lang.Number ttl;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.domainName = software.amazon.jsii.Kernel.get(this, "domainName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.rr = software.amazon.jsii.Kernel.get(this, "rr", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.line = software.amazon.jsii.Kernel.get(this, "line", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.priority = software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.ttl = software.amazon.jsii.Kernel.get(this, "ttl", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String domainName, final java.lang.String rr, final java.lang.String type, final java.lang.String value, final java.lang.String line, final java.lang.Number priority, final java.lang.Number ttl) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.domainName = java.util.Objects.requireNonNull(domainName, "domainName is required");
            this.rr = java.util.Objects.requireNonNull(rr, "rr is required");
            this.type = java.util.Objects.requireNonNull(type, "type is required");
            this.value = java.util.Objects.requireNonNull(value, "value is required");
            this.line = line;
            this.priority = priority;
            this.ttl = ttl;
        }

        @Override
        public final java.lang.String getDomainName() {
            return this.domainName;
        }

        @Override
        public final java.lang.String getRr() {
            return this.rr;
        }

        @Override
        public final java.lang.String getType() {
            return this.type;
        }

        @Override
        public final java.lang.String getValue() {
            return this.value;
        }

        @Override
        public final java.lang.String getLine() {
            return this.line;
        }

        @Override
        public final java.lang.Number getPriority() {
            return this.priority;
        }

        @Override
        public final java.lang.Number getTtl() {
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
