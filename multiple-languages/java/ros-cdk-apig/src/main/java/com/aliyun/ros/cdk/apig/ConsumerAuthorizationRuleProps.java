package com.aliyun.ros.cdk.apig;

/**
 * Properties for defining a <code>ConsumerAuthorizationRule</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-consumerauthorizationrule
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:26:59.549Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.ConsumerAuthorizationRuleProps")
@software.amazon.jsii.Jsii.Proxy(ConsumerAuthorizationRuleProps.Jsii$Proxy.class)
public interface ConsumerAuthorizationRuleProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property consumerId: The consumer ID.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getConsumerId();

    /**
     * Property resourceIdentifier: Resource identifier for non-standard code sources.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getResourceIdentifier();

    /**
     * Property resourceType: The resource type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getResourceType();

    /**
     * Property expireMode: The expire mode.
     * <p>
     * Valid values: LongTerm, ShortTerm.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExpireMode() {
        return null;
    }

    /**
     * Property expireTimestamp: The expire timestamp in milliseconds.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExpireTimestamp() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link ConsumerAuthorizationRuleProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ConsumerAuthorizationRuleProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ConsumerAuthorizationRuleProps> {
        java.lang.Object consumerId;
        java.lang.Object resourceIdentifier;
        java.lang.Object resourceType;
        java.lang.Object expireMode;
        java.lang.Object expireTimestamp;

        /**
         * Sets the value of {@link ConsumerAuthorizationRuleProps#getConsumerId}
         * @param consumerId Property consumerId: The consumer ID. This parameter is required.
         * @return {@code this}
         */
        public Builder consumerId(java.lang.String consumerId) {
            this.consumerId = consumerId;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerAuthorizationRuleProps#getConsumerId}
         * @param consumerId Property consumerId: The consumer ID. This parameter is required.
         * @return {@code this}
         */
        public Builder consumerId(com.aliyun.ros.cdk.core.IResolvable consumerId) {
            this.consumerId = consumerId;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerAuthorizationRuleProps#getResourceIdentifier}
         * @param resourceIdentifier Property resourceIdentifier: Resource identifier for non-standard code sources. This parameter is required.
         * @return {@code this}
         */
        public Builder resourceIdentifier(com.aliyun.ros.cdk.core.IResolvable resourceIdentifier) {
            this.resourceIdentifier = resourceIdentifier;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerAuthorizationRuleProps#getResourceIdentifier}
         * @param resourceIdentifier Property resourceIdentifier: Resource identifier for non-standard code sources. This parameter is required.
         * @return {@code this}
         */
        public Builder resourceIdentifier(com.aliyun.ros.cdk.apig.RosConsumerAuthorizationRule.ResourceIdentifierProperty resourceIdentifier) {
            this.resourceIdentifier = resourceIdentifier;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerAuthorizationRuleProps#getResourceType}
         * @param resourceType Property resourceType: The resource type. This parameter is required.
         * @return {@code this}
         */
        public Builder resourceType(java.lang.String resourceType) {
            this.resourceType = resourceType;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerAuthorizationRuleProps#getResourceType}
         * @param resourceType Property resourceType: The resource type. This parameter is required.
         * @return {@code this}
         */
        public Builder resourceType(com.aliyun.ros.cdk.core.IResolvable resourceType) {
            this.resourceType = resourceType;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerAuthorizationRuleProps#getExpireMode}
         * @param expireMode Property expireMode: The expire mode.
         *                   Valid values: LongTerm, ShortTerm.
         * @return {@code this}
         */
        public Builder expireMode(java.lang.String expireMode) {
            this.expireMode = expireMode;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerAuthorizationRuleProps#getExpireMode}
         * @param expireMode Property expireMode: The expire mode.
         *                   Valid values: LongTerm, ShortTerm.
         * @return {@code this}
         */
        public Builder expireMode(com.aliyun.ros.cdk.core.IResolvable expireMode) {
            this.expireMode = expireMode;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerAuthorizationRuleProps#getExpireTimestamp}
         * @param expireTimestamp Property expireTimestamp: The expire timestamp in milliseconds.
         * @return {@code this}
         */
        public Builder expireTimestamp(java.lang.Number expireTimestamp) {
            this.expireTimestamp = expireTimestamp;
            return this;
        }

        /**
         * Sets the value of {@link ConsumerAuthorizationRuleProps#getExpireTimestamp}
         * @param expireTimestamp Property expireTimestamp: The expire timestamp in milliseconds.
         * @return {@code this}
         */
        public Builder expireTimestamp(com.aliyun.ros.cdk.core.IResolvable expireTimestamp) {
            this.expireTimestamp = expireTimestamp;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ConsumerAuthorizationRuleProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ConsumerAuthorizationRuleProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link ConsumerAuthorizationRuleProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ConsumerAuthorizationRuleProps {
        private final java.lang.Object consumerId;
        private final java.lang.Object resourceIdentifier;
        private final java.lang.Object resourceType;
        private final java.lang.Object expireMode;
        private final java.lang.Object expireTimestamp;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.consumerId = software.amazon.jsii.Kernel.get(this, "consumerId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceIdentifier = software.amazon.jsii.Kernel.get(this, "resourceIdentifier", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceType = software.amazon.jsii.Kernel.get(this, "resourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.expireMode = software.amazon.jsii.Kernel.get(this, "expireMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.expireTimestamp = software.amazon.jsii.Kernel.get(this, "expireTimestamp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.consumerId = java.util.Objects.requireNonNull(builder.consumerId, "consumerId is required");
            this.resourceIdentifier = java.util.Objects.requireNonNull(builder.resourceIdentifier, "resourceIdentifier is required");
            this.resourceType = java.util.Objects.requireNonNull(builder.resourceType, "resourceType is required");
            this.expireMode = builder.expireMode;
            this.expireTimestamp = builder.expireTimestamp;
        }

        @Override
        public final java.lang.Object getConsumerId() {
            return this.consumerId;
        }

        @Override
        public final java.lang.Object getResourceIdentifier() {
            return this.resourceIdentifier;
        }

        @Override
        public final java.lang.Object getResourceType() {
            return this.resourceType;
        }

        @Override
        public final java.lang.Object getExpireMode() {
            return this.expireMode;
        }

        @Override
        public final java.lang.Object getExpireTimestamp() {
            return this.expireTimestamp;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("consumerId", om.valueToTree(this.getConsumerId()));
            data.set("resourceIdentifier", om.valueToTree(this.getResourceIdentifier()));
            data.set("resourceType", om.valueToTree(this.getResourceType()));
            if (this.getExpireMode() != null) {
                data.set("expireMode", om.valueToTree(this.getExpireMode()));
            }
            if (this.getExpireTimestamp() != null) {
                data.set("expireTimestamp", om.valueToTree(this.getExpireTimestamp()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.ConsumerAuthorizationRuleProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ConsumerAuthorizationRuleProps.Jsii$Proxy that = (ConsumerAuthorizationRuleProps.Jsii$Proxy) o;

            if (!consumerId.equals(that.consumerId)) return false;
            if (!resourceIdentifier.equals(that.resourceIdentifier)) return false;
            if (!resourceType.equals(that.resourceType)) return false;
            if (this.expireMode != null ? !this.expireMode.equals(that.expireMode) : that.expireMode != null) return false;
            return this.expireTimestamp != null ? this.expireTimestamp.equals(that.expireTimestamp) : that.expireTimestamp == null;
        }

        @Override
        public final int hashCode() {
            int result = this.consumerId.hashCode();
            result = 31 * result + (this.resourceIdentifier.hashCode());
            result = 31 * result + (this.resourceType.hashCode());
            result = 31 * result + (this.expireMode != null ? this.expireMode.hashCode() : 0);
            result = 31 * result + (this.expireTimestamp != null ? this.expireTimestamp.hashCode() : 0);
            return result;
        }
    }
}
