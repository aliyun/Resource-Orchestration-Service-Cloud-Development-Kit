package com.aliyun.ros.cdk.cen;

/**
 * Properties for defining a <code>ALIYUN::CEN::CenBandwidthLimit</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-25T03:55:58.306Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.CenBandwidthLimitProps")
@software.amazon.jsii.Jsii.Proxy(CenBandwidthLimitProps.Jsii$Proxy.class)
public interface CenBandwidthLimitProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property bandwidthLimit: The bandwidth configured for the interconnected regions communication.
     * <p>
     * Minimal value: 1
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getBandwidthLimit();

    /**
     * Property cenId: The ID of the CEN instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCenId();

    /**
     * Property localRegionId: The ID of the local region.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLocalRegionId();

    /**
     * Property oppositeRegionId: The ID of the other interconnected region.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getOppositeRegionId();

    /**
     * @return a {@link Builder} of {@link CenBandwidthLimitProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link CenBandwidthLimitProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<CenBandwidthLimitProps> {
        java.lang.Object bandwidthLimit;
        java.lang.Object cenId;
        java.lang.Object localRegionId;
        java.lang.Object oppositeRegionId;

        /**
         * Sets the value of {@link CenBandwidthLimitProps#getBandwidthLimit}
         * @param bandwidthLimit Property bandwidthLimit: The bandwidth configured for the interconnected regions communication. This parameter is required.
         *                       Minimal value: 1
         * @return {@code this}
         */
        public Builder bandwidthLimit(java.lang.Number bandwidthLimit) {
            this.bandwidthLimit = bandwidthLimit;
            return this;
        }

        /**
         * Sets the value of {@link CenBandwidthLimitProps#getBandwidthLimit}
         * @param bandwidthLimit Property bandwidthLimit: The bandwidth configured for the interconnected regions communication. This parameter is required.
         *                       Minimal value: 1
         * @return {@code this}
         */
        public Builder bandwidthLimit(com.aliyun.ros.cdk.core.IResolvable bandwidthLimit) {
            this.bandwidthLimit = bandwidthLimit;
            return this;
        }

        /**
         * Sets the value of {@link CenBandwidthLimitProps#getCenId}
         * @param cenId Property cenId: The ID of the CEN instance. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(java.lang.String cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link CenBandwidthLimitProps#getCenId}
         * @param cenId Property cenId: The ID of the CEN instance. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link CenBandwidthLimitProps#getLocalRegionId}
         * @param localRegionId Property localRegionId: The ID of the local region. This parameter is required.
         * @return {@code this}
         */
        public Builder localRegionId(java.lang.String localRegionId) {
            this.localRegionId = localRegionId;
            return this;
        }

        /**
         * Sets the value of {@link CenBandwidthLimitProps#getLocalRegionId}
         * @param localRegionId Property localRegionId: The ID of the local region. This parameter is required.
         * @return {@code this}
         */
        public Builder localRegionId(com.aliyun.ros.cdk.core.IResolvable localRegionId) {
            this.localRegionId = localRegionId;
            return this;
        }

        /**
         * Sets the value of {@link CenBandwidthLimitProps#getOppositeRegionId}
         * @param oppositeRegionId Property oppositeRegionId: The ID of the other interconnected region. This parameter is required.
         * @return {@code this}
         */
        public Builder oppositeRegionId(java.lang.String oppositeRegionId) {
            this.oppositeRegionId = oppositeRegionId;
            return this;
        }

        /**
         * Sets the value of {@link CenBandwidthLimitProps#getOppositeRegionId}
         * @param oppositeRegionId Property oppositeRegionId: The ID of the other interconnected region. This parameter is required.
         * @return {@code this}
         */
        public Builder oppositeRegionId(com.aliyun.ros.cdk.core.IResolvable oppositeRegionId) {
            this.oppositeRegionId = oppositeRegionId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link CenBandwidthLimitProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public CenBandwidthLimitProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link CenBandwidthLimitProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CenBandwidthLimitProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.CenBandwidthLimitProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            CenBandwidthLimitProps.Jsii$Proxy that = (CenBandwidthLimitProps.Jsii$Proxy) o;

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
