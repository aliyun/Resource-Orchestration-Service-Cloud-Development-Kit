package com.aliyun.ros.cdk.cen;

/**
 * Properties for defining a `ALIYUN::CEN::CenBandwidthLimit`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.56.0 (build 55e7d15)", date = "2022-04-13T06:46:13.916Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.RosCenBandwidthLimitProps")
@software.amazon.jsii.Jsii.Proxy(RosCenBandwidthLimitProps.Jsii$Proxy.class)
public interface RosCenBandwidthLimitProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBandwidthLimit();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCenId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLocalRegionId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOppositeRegionId();

    /**
     * @return a {@link Builder} of {@link RosCenBandwidthLimitProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosCenBandwidthLimitProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosCenBandwidthLimitProps> {
        java.lang.Object bandwidthLimit;
        java.lang.Object cenId;
        java.lang.Object localRegionId;
        java.lang.Object oppositeRegionId;

        /**
         * Sets the value of {@link RosCenBandwidthLimitProps#getBandwidthLimit}
         * @param bandwidthLimit the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bandwidthLimit(java.lang.Number bandwidthLimit) {
            this.bandwidthLimit = bandwidthLimit;
            return this;
        }

        /**
         * Sets the value of {@link RosCenBandwidthLimitProps#getBandwidthLimit}
         * @param bandwidthLimit the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bandwidthLimit(com.aliyun.ros.cdk.core.IResolvable bandwidthLimit) {
            this.bandwidthLimit = bandwidthLimit;
            return this;
        }

        /**
         * Sets the value of {@link RosCenBandwidthLimitProps#getCenId}
         * @param cenId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(java.lang.String cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link RosCenBandwidthLimitProps#getCenId}
         * @param cenId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link RosCenBandwidthLimitProps#getLocalRegionId}
         * @param localRegionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder localRegionId(java.lang.String localRegionId) {
            this.localRegionId = localRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosCenBandwidthLimitProps#getLocalRegionId}
         * @param localRegionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder localRegionId(com.aliyun.ros.cdk.core.IResolvable localRegionId) {
            this.localRegionId = localRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosCenBandwidthLimitProps#getOppositeRegionId}
         * @param oppositeRegionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder oppositeRegionId(java.lang.String oppositeRegionId) {
            this.oppositeRegionId = oppositeRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosCenBandwidthLimitProps#getOppositeRegionId}
         * @param oppositeRegionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder oppositeRegionId(com.aliyun.ros.cdk.core.IResolvable oppositeRegionId) {
            this.oppositeRegionId = oppositeRegionId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosCenBandwidthLimitProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosCenBandwidthLimitProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosCenBandwidthLimitProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosCenBandwidthLimitProps {
        private final java.lang.Object bandwidthLimit;
        private final java.lang.Object cenId;
        private final java.lang.Object localRegionId;
        private final java.lang.Object oppositeRegionId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bandwidthLimit = software.amazon.jsii.Kernel.get(this, "bandwidthLimit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cenId = software.amazon.jsii.Kernel.get(this, "cenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.localRegionId = software.amazon.jsii.Kernel.get(this, "localRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.oppositeRegionId = software.amazon.jsii.Kernel.get(this, "oppositeRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bandwidthLimit = java.util.Objects.requireNonNull(builder.bandwidthLimit, "bandwidthLimit is required");
            this.cenId = java.util.Objects.requireNonNull(builder.cenId, "cenId is required");
            this.localRegionId = java.util.Objects.requireNonNull(builder.localRegionId, "localRegionId is required");
            this.oppositeRegionId = java.util.Objects.requireNonNull(builder.oppositeRegionId, "oppositeRegionId is required");
        }

        @Override
        public final java.lang.Object getBandwidthLimit() {
            return this.bandwidthLimit;
        }

        @Override
        public final java.lang.Object getCenId() {
            return this.cenId;
        }

        @Override
        public final java.lang.Object getLocalRegionId() {
            return this.localRegionId;
        }

        @Override
        public final java.lang.Object getOppositeRegionId() {
            return this.oppositeRegionId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("bandwidthLimit", om.valueToTree(this.getBandwidthLimit()));
            data.set("cenId", om.valueToTree(this.getCenId()));
            data.set("localRegionId", om.valueToTree(this.getLocalRegionId()));
            data.set("oppositeRegionId", om.valueToTree(this.getOppositeRegionId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.RosCenBandwidthLimitProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosCenBandwidthLimitProps.Jsii$Proxy that = (RosCenBandwidthLimitProps.Jsii$Proxy) o;

            if (!bandwidthLimit.equals(that.bandwidthLimit)) return false;
            if (!cenId.equals(that.cenId)) return false;
            if (!localRegionId.equals(that.localRegionId)) return false;
            return this.oppositeRegionId.equals(that.oppositeRegionId);
        }

        @Override
        public final int hashCode() {
            int result = this.bandwidthLimit.hashCode();
            result = 31 * result + (this.cenId.hashCode());
            result = 31 * result + (this.localRegionId.hashCode());
            result = 31 * result + (this.oppositeRegionId.hashCode());
            return result;
        }
    }
}
