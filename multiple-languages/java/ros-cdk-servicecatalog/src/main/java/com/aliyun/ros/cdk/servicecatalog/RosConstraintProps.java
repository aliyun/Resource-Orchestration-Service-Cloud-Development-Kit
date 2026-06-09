package com.aliyun.ros.cdk.servicecatalog;

/**
 * Properties for defining a <code>RosConstraint</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-servicecatalog-constraint
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:53:18.351Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.servicecatalog.$Module.class, fqn = "@alicloud/ros-cdk-servicecatalog.RosConstraintProps")
@software.amazon.jsii.Jsii.Proxy(RosConstraintProps.Jsii$Proxy.class)
public interface RosConstraintProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConfig();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConstraintType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPortfolioId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProductId();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosConstraintProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosConstraintProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosConstraintProps> {
        java.lang.Object config;
        java.lang.Object constraintType;
        java.lang.Object portfolioId;
        java.lang.Object productId;
        java.lang.Object description;

        /**
         * Sets the value of {@link RosConstraintProps#getConfig}
         * @param config the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder config(com.aliyun.ros.cdk.core.IResolvable config) {
            this.config = config;
            return this;
        }

        /**
         * Sets the value of {@link RosConstraintProps#getConfig}
         * @param config the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder config(java.util.Map<java.lang.String, ? extends java.lang.Object> config) {
            this.config = config;
            return this;
        }

        /**
         * Sets the value of {@link RosConstraintProps#getConstraintType}
         * @param constraintType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder constraintType(java.lang.String constraintType) {
            this.constraintType = constraintType;
            return this;
        }

        /**
         * Sets the value of {@link RosConstraintProps#getConstraintType}
         * @param constraintType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder constraintType(com.aliyun.ros.cdk.core.IResolvable constraintType) {
            this.constraintType = constraintType;
            return this;
        }

        /**
         * Sets the value of {@link RosConstraintProps#getPortfolioId}
         * @param portfolioId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder portfolioId(java.lang.String portfolioId) {
            this.portfolioId = portfolioId;
            return this;
        }

        /**
         * Sets the value of {@link RosConstraintProps#getPortfolioId}
         * @param portfolioId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder portfolioId(com.aliyun.ros.cdk.core.IResolvable portfolioId) {
            this.portfolioId = portfolioId;
            return this;
        }

        /**
         * Sets the value of {@link RosConstraintProps#getProductId}
         * @param productId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder productId(java.lang.String productId) {
            this.productId = productId;
            return this;
        }

        /**
         * Sets the value of {@link RosConstraintProps#getProductId}
         * @param productId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder productId(com.aliyun.ros.cdk.core.IResolvable productId) {
            this.productId = productId;
            return this;
        }

        /**
         * Sets the value of {@link RosConstraintProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosConstraintProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosConstraintProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosConstraintProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosConstraintProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosConstraintProps {
        private final java.lang.Object config;
        private final java.lang.Object constraintType;
        private final java.lang.Object portfolioId;
        private final java.lang.Object productId;
        private final java.lang.Object description;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.config = software.amazon.jsii.Kernel.get(this, "config", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.constraintType = software.amazon.jsii.Kernel.get(this, "constraintType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.portfolioId = software.amazon.jsii.Kernel.get(this, "portfolioId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.productId = software.amazon.jsii.Kernel.get(this, "productId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.config = java.util.Objects.requireNonNull(builder.config, "config is required");
            this.constraintType = java.util.Objects.requireNonNull(builder.constraintType, "constraintType is required");
            this.portfolioId = java.util.Objects.requireNonNull(builder.portfolioId, "portfolioId is required");
            this.productId = java.util.Objects.requireNonNull(builder.productId, "productId is required");
            this.description = builder.description;
        }

        @Override
        public final java.lang.Object getConfig() {
            return this.config;
        }

        @Override
        public final java.lang.Object getConstraintType() {
            return this.constraintType;
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
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("config", om.valueToTree(this.getConfig()));
            data.set("constraintType", om.valueToTree(this.getConstraintType()));
            data.set("portfolioId", om.valueToTree(this.getPortfolioId()));
            data.set("productId", om.valueToTree(this.getProductId()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-servicecatalog.RosConstraintProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosConstraintProps.Jsii$Proxy that = (RosConstraintProps.Jsii$Proxy) o;

            if (!config.equals(that.config)) return false;
            if (!constraintType.equals(that.constraintType)) return false;
            if (!portfolioId.equals(that.portfolioId)) return false;
            if (!productId.equals(that.productId)) return false;
            return this.description != null ? this.description.equals(that.description) : that.description == null;
        }

        @Override
        public final int hashCode() {
            int result = this.config.hashCode();
            result = 31 * result + (this.constraintType.hashCode());
            result = 31 * result + (this.portfolioId.hashCode());
            result = 31 * result + (this.productId.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            return result;
        }
    }
}
