package com.aliyun.ros.cdk.pvtz;

/**
 * Properties for defining a `ALIYUN::PVTZ::ZoneVpcBinder`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-18T07:25:26.566Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pvtz.$Module.class, fqn = "@alicloud/ros-cdk-pvtz.ZoneVpcBinderProps")
@software.amazon.jsii.Jsii.Proxy(ZoneVpcBinderProps.Jsii$Proxy.class)
public interface ZoneVpcBinderProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property vpcs:.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcs();

    /**
     * Property zoneId: Zone Id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

    /**
     * @return a {@link Builder} of {@link ZoneVpcBinderProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ZoneVpcBinderProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ZoneVpcBinderProps> {
        java.lang.Object vpcs;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link ZoneVpcBinderProps#getVpcs}
         * @param vpcs Property vpcs:. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcs(com.aliyun.ros.cdk.core.IResolvable vpcs) {
            this.vpcs = vpcs;
            return this;
        }

        /**
         * Sets the value of {@link ZoneVpcBinderProps#getVpcs}
         * @param vpcs Property vpcs:. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcs(java.util.List<? extends java.lang.Object> vpcs) {
            this.vpcs = vpcs;
            return this;
        }

        /**
         * Sets the value of {@link ZoneVpcBinderProps#getZoneId}
         * @param zoneId Property zoneId: Zone Id. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link ZoneVpcBinderProps#getZoneId}
         * @param zoneId Property zoneId: Zone Id. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ZoneVpcBinderProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ZoneVpcBinderProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ZoneVpcBinderProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ZoneVpcBinderProps {
        private final java.lang.Object vpcs;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.vpcs = software.amazon.jsii.Kernel.get(this, "vpcs", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.vpcs = java.util.Objects.requireNonNull(builder.vpcs, "vpcs is required");
            this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
        }

        @Override
        public final java.lang.Object getVpcs() {
            return this.vpcs;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("vpcs", om.valueToTree(this.getVpcs()));
            data.set("zoneId", om.valueToTree(this.getZoneId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-pvtz.ZoneVpcBinderProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ZoneVpcBinderProps.Jsii$Proxy that = (ZoneVpcBinderProps.Jsii$Proxy) o;

            if (!vpcs.equals(that.vpcs)) return false;
            return this.zoneId.equals(that.zoneId);
        }

        @Override
        public final int hashCode() {
            int result = this.vpcs.hashCode();
            result = 31 * result + (this.zoneId.hashCode());
            return result;
        }
    }
}
