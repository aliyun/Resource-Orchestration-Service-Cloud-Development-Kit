package com.aliyun.ros.cdk.pvtz;

/**
 * Properties for defining a <code>RosSyncEcsHost</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-pvtz-syncecshost
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:32.466Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.pvtz.$Module.class, fqn = "@alicloud/ros-cdk-pvtz.RosSyncEcsHostProps")
@software.amazon.jsii.Jsii.Proxy(RosSyncEcsHostProps.Jsii$Proxy.class)
public interface RosSyncEcsHostProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getRegions();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getStatus();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

    /**
     * @return a {@link Builder} of {@link RosSyncEcsHostProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosSyncEcsHostProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosSyncEcsHostProps> {
        java.lang.Object regions;
        java.lang.Object status;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link RosSyncEcsHostProps#getRegions}
         * @param regions the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder regions(com.aliyun.ros.cdk.core.IResolvable regions) {
            this.regions = regions;
            return this;
        }

        /**
         * Sets the value of {@link RosSyncEcsHostProps#getRegions}
         * @param regions the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder regions(java.util.List<? extends java.lang.Object> regions) {
            this.regions = regions;
            return this;
        }

        /**
         * Sets the value of {@link RosSyncEcsHostProps#getStatus}
         * @param status the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder status(java.lang.String status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link RosSyncEcsHostProps#getStatus}
         * @param status the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder status(com.aliyun.ros.cdk.core.IResolvable status) {
            this.status = status;
            return this;
        }

        /**
         * Sets the value of {@link RosSyncEcsHostProps#getZoneId}
         * @param zoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link RosSyncEcsHostProps#getZoneId}
         * @param zoneId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosSyncEcsHostProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosSyncEcsHostProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosSyncEcsHostProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosSyncEcsHostProps {
        private final java.lang.Object regions;
        private final java.lang.Object status;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.regions = software.amazon.jsii.Kernel.get(this, "regions", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.status = software.amazon.jsii.Kernel.get(this, "status", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.regions = java.util.Objects.requireNonNull(builder.regions, "regions is required");
            this.status = java.util.Objects.requireNonNull(builder.status, "status is required");
            this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
        }

        @Override
        public final java.lang.Object getRegions() {
            return this.regions;
        }

        @Override
        public final java.lang.Object getStatus() {
            return this.status;
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

            data.set("regions", om.valueToTree(this.getRegions()));
            data.set("status", om.valueToTree(this.getStatus()));
            data.set("zoneId", om.valueToTree(this.getZoneId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-pvtz.RosSyncEcsHostProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosSyncEcsHostProps.Jsii$Proxy that = (RosSyncEcsHostProps.Jsii$Proxy) o;

            if (!regions.equals(that.regions)) return false;
            if (!status.equals(that.status)) return false;
            return this.zoneId.equals(that.zoneId);
        }

        @Override
        public final int hashCode() {
            int result = this.regions.hashCode();
            result = 31 * result + (this.status.hashCode());
            result = 31 * result + (this.zoneId.hashCode());
            return result;
        }
    }
}
