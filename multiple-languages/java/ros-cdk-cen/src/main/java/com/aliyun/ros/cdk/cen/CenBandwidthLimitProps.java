package com.aliyun.ros.cdk.cen;

/**
 * Properties for defining a `ALIYUN::CEN::CenBandwidthLimit`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.254Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.CenBandwidthLimitProps")
@software.amazon.jsii.Jsii.Proxy(CenBandwidthLimitProps.Jsii$Proxy.class)
public interface CenBandwidthLimitProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getBandwidthLimit();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getCenId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getLocalRegionId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getOppositeRegionId();

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
        private java.lang.Number bandwidthLimit;
        private java.lang.String cenId;
        private java.lang.String localRegionId;
        private java.lang.String oppositeRegionId;

        /**
         * Sets the value of {@link CenBandwidthLimitProps#getBandwidthLimit}
         * @param bandwidthLimit the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder bandwidthLimit(java.lang.Number bandwidthLimit) {
            this.bandwidthLimit = bandwidthLimit;
            return this;
        }

        /**
         * Sets the value of {@link CenBandwidthLimitProps#getCenId}
         * @param cenId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(java.lang.String cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link CenBandwidthLimitProps#getLocalRegionId}
         * @param localRegionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder localRegionId(java.lang.String localRegionId) {
            this.localRegionId = localRegionId;
            return this;
        }

        /**
         * Sets the value of {@link CenBandwidthLimitProps#getOppositeRegionId}
         * @param oppositeRegionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder oppositeRegionId(java.lang.String oppositeRegionId) {
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
            return new Jsii$Proxy(bandwidthLimit, cenId, localRegionId, oppositeRegionId);
        }
    }

    /**
     * An implementation for {@link CenBandwidthLimitProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements CenBandwidthLimitProps {
        private final java.lang.Number bandwidthLimit;
        private final java.lang.String cenId;
        private final java.lang.String localRegionId;
        private final java.lang.String oppositeRegionId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.bandwidthLimit = software.amazon.jsii.Kernel.get(this, "bandwidthLimit", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
            this.cenId = software.amazon.jsii.Kernel.get(this, "cenId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.localRegionId = software.amazon.jsii.Kernel.get(this, "localRegionId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.oppositeRegionId = software.amazon.jsii.Kernel.get(this, "oppositeRegionId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.Number bandwidthLimit, final java.lang.String cenId, final java.lang.String localRegionId, final java.lang.String oppositeRegionId) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.bandwidthLimit = java.util.Objects.requireNonNull(bandwidthLimit, "bandwidthLimit is required");
            this.cenId = java.util.Objects.requireNonNull(cenId, "cenId is required");
            this.localRegionId = java.util.Objects.requireNonNull(localRegionId, "localRegionId is required");
            this.oppositeRegionId = java.util.Objects.requireNonNull(oppositeRegionId, "oppositeRegionId is required");
        }

        @Override
        public final java.lang.Number getBandwidthLimit() {
            return this.bandwidthLimit;
        }

        @Override
        public final java.lang.String getCenId() {
            return this.cenId;
        }

        @Override
        public final java.lang.String getLocalRegionId() {
            return this.localRegionId;
        }

        @Override
        public final java.lang.String getOppositeRegionId() {
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
