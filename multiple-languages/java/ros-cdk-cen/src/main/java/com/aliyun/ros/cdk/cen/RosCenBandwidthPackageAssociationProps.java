package com.aliyun.ros.cdk.cen;

/**
 * Properties for defining a <code>RosCenBandwidthPackageAssociation</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-cen-cenbandwidthpackageassociation
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-06T03:35:12.842Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cen.$Module.class, fqn = "@alicloud/ros-cdk-cen.RosCenBandwidthPackageAssociationProps")
@software.amazon.jsii.Jsii.Proxy(RosCenBandwidthPackageAssociationProps.Jsii$Proxy.class)
public interface RosCenBandwidthPackageAssociationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCenBandwidthPackageId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getCenId();

    /**
     * @return a {@link Builder} of {@link RosCenBandwidthPackageAssociationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosCenBandwidthPackageAssociationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosCenBandwidthPackageAssociationProps> {
        java.lang.Object cenBandwidthPackageId;
        java.lang.Object cenId;

        /**
         * Sets the value of {@link RosCenBandwidthPackageAssociationProps#getCenBandwidthPackageId}
         * @param cenBandwidthPackageId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cenBandwidthPackageId(java.lang.String cenBandwidthPackageId) {
            this.cenBandwidthPackageId = cenBandwidthPackageId;
            return this;
        }

        /**
         * Sets the value of {@link RosCenBandwidthPackageAssociationProps#getCenBandwidthPackageId}
         * @param cenBandwidthPackageId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cenBandwidthPackageId(com.aliyun.ros.cdk.core.IResolvable cenBandwidthPackageId) {
            this.cenBandwidthPackageId = cenBandwidthPackageId;
            return this;
        }

        /**
         * Sets the value of {@link RosCenBandwidthPackageAssociationProps#getCenId}
         * @param cenId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(java.lang.String cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Sets the value of {@link RosCenBandwidthPackageAssociationProps#getCenId}
         * @param cenId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder cenId(com.aliyun.ros.cdk.core.IResolvable cenId) {
            this.cenId = cenId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosCenBandwidthPackageAssociationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosCenBandwidthPackageAssociationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosCenBandwidthPackageAssociationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosCenBandwidthPackageAssociationProps {
        private final java.lang.Object cenBandwidthPackageId;
        private final java.lang.Object cenId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.cenBandwidthPackageId = software.amazon.jsii.Kernel.get(this, "cenBandwidthPackageId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cenId = software.amazon.jsii.Kernel.get(this, "cenId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.cenBandwidthPackageId = java.util.Objects.requireNonNull(builder.cenBandwidthPackageId, "cenBandwidthPackageId is required");
            this.cenId = java.util.Objects.requireNonNull(builder.cenId, "cenId is required");
        }

        @Override
        public final java.lang.Object getCenBandwidthPackageId() {
            return this.cenBandwidthPackageId;
        }

        @Override
        public final java.lang.Object getCenId() {
            return this.cenId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("cenBandwidthPackageId", om.valueToTree(this.getCenBandwidthPackageId()));
            data.set("cenId", om.valueToTree(this.getCenId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-cen.RosCenBandwidthPackageAssociationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosCenBandwidthPackageAssociationProps.Jsii$Proxy that = (RosCenBandwidthPackageAssociationProps.Jsii$Proxy) o;

            if (!cenBandwidthPackageId.equals(that.cenBandwidthPackageId)) return false;
            return this.cenId.equals(that.cenId);
        }

        @Override
        public final int hashCode() {
            int result = this.cenBandwidthPackageId.hashCode();
            result = 31 * result + (this.cenId.hashCode());
            return result;
        }
    }
}
