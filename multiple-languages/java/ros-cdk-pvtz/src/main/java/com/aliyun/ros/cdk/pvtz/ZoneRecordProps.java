package com.aliyun.ros.cdk.pvtz;

/**
 * Properties for defining a <code>ZoneRecord</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-zonerecord
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-12T02:20:29.558Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pvtz.$Module.class, fqn = "@alicloud/ros-cdk-pvtz.ZoneRecordProps")
@software.amazon.jsii.Jsii.Proxy(ZoneRecordProps.Jsii$Proxy.class)
public interface ZoneRecordProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property rr: Host record, if you want to resolve &#64;.exmaple.com, the host record should fill in "&#64;" instead of empty.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRr();

    /**
     * Property status: Allowed values: [ENABLE, DISABLE].
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStatus();

    /**
     * Property type: Analyze record type, currently only supports A, AAAA, CNAME, TXT, MX, PTR, SRV.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getType();

    /**
     * Property value: Record value.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getValue();

    /**
     * Property zoneId: Zone Id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

    /**
     * Property priority: MX record priority, value range [1,99].
     * <p>
     * Default to 10.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPriority() {
        return null;
    }

    /**
     * Property ttl: Survival time, default is 60.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTtl() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ZoneRecordProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ZoneRecordProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ZoneRecordProps> {
        java.lang.Object rr;
        java.lang.Object status;
        java.lang.Object type;
        java.lang.Object value;
        java.lang.Object zoneId;
        java.lang.Object priority;
        java.lang.Object ttl;

        /**
         * Sets the value of {@link ZoneRecordProps#getRr}
         * @param rr Property rr: Host record, if you want to resolve &#64;.exmaple.com, the host record should fill in "&#64;" instead of empty. This parameter is required.
         * @return {@code this}
         */
        public Builder rr(java.lang.String rr) {
            this.rr = rr;
            return this;
        }

        /**
         * Sets the value of {@link ZoneRecordProps#getRr}
         * @param rr Property rr: Host record, if you want to resolve &#64;.exmaple.com, the host record should fill in "&#64;" instead of empty. This parameter is required.
         * @return {@code this}
         */
        public Builder rr(com.aliyun.ros.cdk.core.IResolvable rr) {
            this.rr = rr;
            return this;
        }

        /**
         * Sets the value of {@link ZoneRecordProps#getStatus}
         * @param status Property status: Allowed values: [ENABLE, DISABLE]. This parameter is required.
         * @return {@code this}
         */
        public Builder status(java.lang.String status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link ZoneRecordProps#getStatus}
         * @param status Property status: Allowed values: [ENABLE, DISABLE]. This parameter is required.
         * @return {@code this}
         */
        public Builder status(com.aliyun.ros.cdk.core.IResolvable status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link ZoneRecordProps#getType}
         * @param type Property type: Analyze record type, currently only supports A, AAAA, CNAME, TXT, MX, PTR, SRV. This parameter is required.
         * @return {@code this}
         */
        public Builder type(java.lang.String type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link ZoneRecordProps#getType}
         * @param type Property type: Analyze record type, currently only supports A, AAAA, CNAME, TXT, MX, PTR, SRV. This parameter is required.
         * @return {@code this}
         */
        public Builder type(com.aliyun.ros.cdk.core.IResolvable type) {
            this.type = type;
            return this;
        }

        /**
         * Sets the value of {@link ZoneRecordProps#getValue}
         * @param value Property value: Record value. This parameter is required.
         * @return {@code this}
         */
        public Builder value(java.lang.String value) {
            this.value = value;
            return this;
        }

        /**
         * Sets the value of {@link ZoneRecordProps#getValue}
         * @param value Property value: Record value. This parameter is required.
         * @return {@code this}
         */
        public Builder value(com.aliyun.ros.cdk.core.IResolvable value) {
            this.value = value;
            return this;
        }

        /**
         * Sets the value of {@link ZoneRecordProps#getZoneId}
         * @param zoneId Property zoneId: Zone Id. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link ZoneRecordProps#getZoneId}
         * @param zoneId Property zoneId: Zone Id. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link ZoneRecordProps#getPriority}
         * @param priority Property priority: MX record priority, value range [1,99].
         *                 Default to 10.
         * @return {@code this}
         */
        public Builder priority(java.lang.Number priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link ZoneRecordProps#getPriority}
         * @param priority Property priority: MX record priority, value range [1,99].
         *                 Default to 10.
         * @return {@code this}
         */
        public Builder priority(com.aliyun.ros.cdk.core.IResolvable priority) {
            this.priority = priority;
            return this;
        }

        /**
         * Sets the value of {@link ZoneRecordProps#getTtl}
         * @param ttl Property ttl: Survival time, default is 60.
         * @return {@code this}
         */
        public Builder ttl(java.lang.Number ttl) {
            this.ttl = ttl;
            return this;
        }

        /**
         * Sets the value of {@link ZoneRecordProps#getTtl}
         * @param ttl Property ttl: Survival time, default is 60.
         * @return {@code this}
         */
        public Builder ttl(com.aliyun.ros.cdk.core.IResolvable ttl) {
            this.ttl = ttl;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ZoneRecordProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ZoneRecordProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ZoneRecordProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ZoneRecordProps {
        private final java.lang.Object rr;
        private final java.lang.Object status;
        private final java.lang.Object type;
        private final java.lang.Object value;
        private final java.lang.Object zoneId;
        private final java.lang.Object priority;
        private final java.lang.Object ttl;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.rr = software.amazon.jsii.Kernel.get(this, "rr", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.status = software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.type = software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.value = software.amazon.jsii.Kernel.get(this, "value", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.priority = software.amazon.jsii.Kernel.get(this, "priority", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.ttl = software.amazon.jsii.Kernel.get(this, "ttl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.rr = java.util.Objects.requireNonNull(builder.rr, "rr is required");
            this.status = java.util.Objects.requireNonNull(builder.status, "status is required");
            this.type = java.util.Objects.requireNonNull(builder.type, "type is required");
            this.value = java.util.Objects.requireNonNull(builder.value, "value is required");
            this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
            this.priority = builder.priority;
            this.ttl = builder.ttl;
        }

        @Override
        public final java.lang.Object getRr() {
            return this.rr;
        }

        @Override
        public final java.lang.Object getStatus() {
            return this.status;
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
        public final java.lang.Object getZoneId() {
            return this.zoneId;
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

            data.set("rr", om.valueToTree(this.getRr()));
            data.set("status", om.valueToTree(this.getStatus()));
            data.set("type", om.valueToTree(this.getType()));
            data.set("value", om.valueToTree(this.getValue()));
            data.set("zoneId", om.valueToTree(this.getZoneId()));
            if (this.getPriority() != null) {
                data.set("priority", om.valueToTree(this.getPriority()));
            }
            if (this.getTtl() != null) {
                data.set("ttl", om.valueToTree(this.getTtl()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-pvtz.ZoneRecordProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ZoneRecordProps.Jsii$Proxy that = (ZoneRecordProps.Jsii$Proxy) o;

            if (!rr.equals(that.rr)) return false;
            if (!status.equals(that.status)) return false;
            if (!type.equals(that.type)) return false;
            if (!value.equals(that.value)) return false;
            if (!zoneId.equals(that.zoneId)) return false;
            if (this.priority != null ? !this.priority.equals(that.priority) : that.priority != null) return false;
            return this.ttl != null ? this.ttl.equals(that.ttl) : that.ttl == null;
        }

        @Override
        public final int hashCode() {
            int result = this.rr.hashCode();
            result = 31 * result + (this.status.hashCode());
            result = 31 * result + (this.type.hashCode());
            result = 31 * result + (this.value.hashCode());
            result = 31 * result + (this.zoneId.hashCode());
            result = 31 * result + (this.priority != null ? this.priority.hashCode() : 0);
            result = 31 * result + (this.ttl != null ? this.ttl.hashCode() : 0);
            return result;
        }
    }
}
