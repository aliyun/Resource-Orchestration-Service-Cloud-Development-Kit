package com.aliyun.ros.cdk.servicecatalog;

/**
 * Properties for defining a <code>RosProductPortfolioAssociation</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-productportfolioassociation
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:30.047Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.servicecatalog.$Module.class, fqn = "@alicloud/ros-cdk-servicecatalog.RosProductPortfolioAssociationProps")
@software.amazon.jsii.Jsii.Proxy(RosProductPortfolioAssociationProps.Jsii$Proxy.class)
public interface RosProductPortfolioAssociationProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPortfolioId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProductId();

    /**
     * @return a {@link Builder} of {@link RosProductPortfolioAssociationProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosProductPortfolioAssociationProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosProductPortfolioAssociationProps> {
        java.lang.Object portfolioId;
        java.lang.Object productId;

        /**
         * Sets the value of {@link RosProductPortfolioAssociationProps#getPortfolioId}
         * @param portfolioId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder portfolioId(java.lang.String portfolioId) {
            this.portfolioId = portfolioId;
            return this;
        }

        /**
         * Sets the value of {@link RosProductPortfolioAssociationProps#getPortfolioId}
         * @param portfolioId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder portfolioId(com.aliyun.ros.cdk.core.IResolvable portfolioId) {
            this.portfolioId = portfolioId;
            return this;
        }

        /**
         * Sets the value of {@link RosProductPortfolioAssociationProps#getProductId}
         * @param productId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder productId(java.lang.String productId) {
            this.productId = productId;
            return this;
        }

        /**
         * Sets the value of {@link RosProductPortfolioAssociationProps#getProductId}
         * @param productId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder productId(com.aliyun.ros.cdk.core.IResolvable productId) {
            this.productId = productId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosProductPortfolioAssociationProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosProductPortfolioAssociationProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosProductPortfolioAssociationProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosProductPortfolioAssociationProps {
        private final java.lang.Object portfolioId;
        private final java.lang.Object productId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.portfolioId = software.amazon.jsii.Kernel.get(this, "portfolioId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.productId = software.amazon.jsii.Kernel.get(this, "productId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.portfolioId = java.util.Objects.requireNonNull(builder.portfolioId, "portfolioId is required");
            this.productId = java.util.Objects.requireNonNull(builder.productId, "productId is required");
        }

        @Override
        public final java.lang.Object getPortfolioId() {
            return this.portfolioId;
        }

        @Override
        public final java.lang.Object getProductId() {
            return this.productId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("portfolioId", om.valueToTree(this.getPortfolioId()));
            data.set("productId", om.valueToTree(this.getProductId()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-servicecatalog.RosProductPortfolioAssociationProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosProductPortfolioAssociationProps.Jsii$Proxy that = (RosProductPortfolioAssociationProps.Jsii$Proxy) o;

            if (!portfolioId.equals(that.portfolioId)) return false;
            return this.productId.equals(that.productId);
        }

        @Override
        public final int hashCode() {
            int result = this.portfolioId.hashCode();
            result = 31 * result + (this.productId.hashCode());
            return result;
        }
    }
}
