package com.aliyun.ros.cdk.apig;

/**
 * Properties for defining a <code>Policy</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-apig-policy
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:52.355Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.PolicyProps")
@software.amazon.jsii.Jsii.Proxy(PolicyProps.Jsii$Proxy.class)
public interface PolicyProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property attachResourceIds: The Mount point id list.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttachResourceIds();

    /**
     * Property attachResourceType: Policies support mount point types.
     * <p>
     * HttpApi:HttpApi.
     * Operation: the Operation of the HttpApi.
     * GatewayRoute: Gateway route.
     * GatewayService: Gateway service.
     * GatewayServicePort: The Gateway service port.
     * Domain: The Gateway Domain name.
     * Gateway: Gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getAttachResourceType();

    /**
     * Property environmentId: The id of the environment.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEnvironmentId();

    /**
     * Property gatewayId: The ID of the Gateway.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGatewayId();

    /**
     * Property policyClassName: The name of the policy class.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPolicyClassName();

    /**
     * Property policyConfig: Policy Configuration.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPolicyConfig();

    /**
     * Property policyName: The name of the policy.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPolicyName() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link PolicyProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link PolicyProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<PolicyProps> {
        java.lang.Object attachResourceIds;
        java.lang.Object attachResourceType;
        java.lang.Object environmentId;
        java.lang.Object gatewayId;
        java.lang.Object policyClassName;
        java.lang.Object policyConfig;
        java.lang.Object policyName;

        /**
         * Sets the value of {@link PolicyProps#getAttachResourceIds}
         * @param attachResourceIds Property attachResourceIds: The Mount point id list. This parameter is required.
         * @return {@code this}
         */
        public Builder attachResourceIds(com.aliyun.ros.cdk.core.IResolvable attachResourceIds) {
            this.attachResourceIds = attachResourceIds;
            return this;
        }

        /**
         * Sets the value of {@link PolicyProps#getAttachResourceIds}
         * @param attachResourceIds Property attachResourceIds: The Mount point id list. This parameter is required.
         * @return {@code this}
         */
        public Builder attachResourceIds(java.util.List<? extends java.lang.Object> attachResourceIds) {
            this.attachResourceIds = attachResourceIds;
            return this;
        }

        /**
         * Sets the value of {@link PolicyProps#getAttachResourceType}
         * @param attachResourceType Property attachResourceType: Policies support mount point types. This parameter is required.
         *                           HttpApi:HttpApi.
         *                           Operation: the Operation of the HttpApi.
         *                           GatewayRoute: Gateway route.
         *                           GatewayService: Gateway service.
         *                           GatewayServicePort: The Gateway service port.
         *                           Domain: The Gateway Domain name.
         *                           Gateway: Gateway.
         * @return {@code this}
         */
        public Builder attachResourceType(java.lang.String attachResourceType) {
            this.attachResourceType = attachResourceType;
            return this;
        }

        /**
         * Sets the value of {@link PolicyProps#getAttachResourceType}
         * @param attachResourceType Property attachResourceType: Policies support mount point types. This parameter is required.
         *                           HttpApi:HttpApi.
         *                           Operation: the Operation of the HttpApi.
         *                           GatewayRoute: Gateway route.
         *                           GatewayService: Gateway service.
         *                           GatewayServicePort: The Gateway service port.
         *                           Domain: The Gateway Domain name.
         *                           Gateway: Gateway.
         * @return {@code this}
         */
        public Builder attachResourceType(com.aliyun.ros.cdk.core.IResolvable attachResourceType) {
            this.attachResourceType = attachResourceType;
            return this;
        }

        /**
         * Sets the value of {@link PolicyProps#getEnvironmentId}
         * @param environmentId Property environmentId: The id of the environment. This parameter is required.
         * @return {@code this}
         */
        public Builder environmentId(java.lang.String environmentId) {
            this.environmentId = environmentId;
            return this;
        }

        /**
         * Sets the value of {@link PolicyProps#getEnvironmentId}
         * @param environmentId Property environmentId: The id of the environment. This parameter is required.
         * @return {@code this}
         */
        public Builder environmentId(com.aliyun.ros.cdk.core.IResolvable environmentId) {
            this.environmentId = environmentId;
            return this;
        }

        /**
         * Sets the value of {@link PolicyProps#getGatewayId}
         * @param gatewayId Property gatewayId: The ID of the Gateway. This parameter is required.
         * @return {@code this}
         */
        public Builder gatewayId(java.lang.String gatewayId) {
            this.gatewayId = gatewayId;
            return this;
        }

        /**
         * Sets the value of {@link PolicyProps#getGatewayId}
         * @param gatewayId Property gatewayId: The ID of the Gateway. This parameter is required.
         * @return {@code this}
         */
        public Builder gatewayId(com.aliyun.ros.cdk.core.IResolvable gatewayId) {
            this.gatewayId = gatewayId;
            return this;
        }

        /**
         * Sets the value of {@link PolicyProps#getPolicyClassName}
         * @param policyClassName Property policyClassName: The name of the policy class. This parameter is required.
         * @return {@code this}
         */
        public Builder policyClassName(java.lang.String policyClassName) {
            this.policyClassName = policyClassName;
            return this;
        }

        /**
         * Sets the value of {@link PolicyProps#getPolicyClassName}
         * @param policyClassName Property policyClassName: The name of the policy class. This parameter is required.
         * @return {@code this}
         */
        public Builder policyClassName(com.aliyun.ros.cdk.core.IResolvable policyClassName) {
            this.policyClassName = policyClassName;
            return this;
        }

        /**
         * Sets the value of {@link PolicyProps#getPolicyConfig}
         * @param policyConfig Property policyConfig: Policy Configuration. This parameter is required.
         * @return {@code this}
         */
        public Builder policyConfig(java.lang.String policyConfig) {
            this.policyConfig = policyConfig;
            return this;
        }

        /**
         * Sets the value of {@link PolicyProps#getPolicyConfig}
         * @param policyConfig Property policyConfig: Policy Configuration. This parameter is required.
         * @return {@code this}
         */
        public Builder policyConfig(com.aliyun.ros.cdk.core.IResolvable policyConfig) {
            this.policyConfig = policyConfig;
            return this;
        }

        /**
         * Sets the value of {@link PolicyProps#getPolicyName}
         * @param policyName Property policyName: The name of the policy.
         * @return {@code this}
         */
        public Builder policyName(java.lang.String policyName) {
            this.policyName = policyName;
            return this;
        }

        /**
         * Sets the value of {@link PolicyProps#getPolicyName}
         * @param policyName Property policyName: The name of the policy.
         * @return {@code this}
         */
        public Builder policyName(com.aliyun.ros.cdk.core.IResolvable policyName) {
            this.policyName = policyName;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link PolicyProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public PolicyProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link PolicyProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements PolicyProps {
        private final java.lang.Object attachResourceIds;
        private final java.lang.Object attachResourceType;
        private final java.lang.Object environmentId;
        private final java.lang.Object gatewayId;
        private final java.lang.Object policyClassName;
        private final java.lang.Object policyConfig;
        private final java.lang.Object policyName;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.attachResourceIds = software.amazon.jsii.Kernel.get(this, "attachResourceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.attachResourceType = software.amazon.jsii.Kernel.get(this, "attachResourceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.environmentId = software.amazon.jsii.Kernel.get(this, "environmentId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.gatewayId = software.amazon.jsii.Kernel.get(this, "gatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policyClassName = software.amazon.jsii.Kernel.get(this, "policyClassName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policyConfig = software.amazon.jsii.Kernel.get(this, "policyConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.policyName = software.amazon.jsii.Kernel.get(this, "policyName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.attachResourceIds = java.util.Objects.requireNonNull(builder.attachResourceIds, "attachResourceIds is required");
            this.attachResourceType = java.util.Objects.requireNonNull(builder.attachResourceType, "attachResourceType is required");
            this.environmentId = java.util.Objects.requireNonNull(builder.environmentId, "environmentId is required");
            this.gatewayId = java.util.Objects.requireNonNull(builder.gatewayId, "gatewayId is required");
            this.policyClassName = java.util.Objects.requireNonNull(builder.policyClassName, "policyClassName is required");
            this.policyConfig = java.util.Objects.requireNonNull(builder.policyConfig, "policyConfig is required");
            this.policyName = builder.policyName;
        }

        @Override
        public final java.lang.Object getAttachResourceIds() {
            return this.attachResourceIds;
        }

        @Override
        public final java.lang.Object getAttachResourceType() {
            return this.attachResourceType;
        }

        @Override
        public final java.lang.Object getEnvironmentId() {
            return this.environmentId;
        }

        @Override
        public final java.lang.Object getGatewayId() {
            return this.gatewayId;
        }

        @Override
        public final java.lang.Object getPolicyClassName() {
            return this.policyClassName;
        }

        @Override
        public final java.lang.Object getPolicyConfig() {
            return this.policyConfig;
        }

        @Override
        public final java.lang.Object getPolicyName() {
            return this.policyName;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("attachResourceIds", om.valueToTree(this.getAttachResourceIds()));
            data.set("attachResourceType", om.valueToTree(this.getAttachResourceType()));
            data.set("environmentId", om.valueToTree(this.getEnvironmentId()));
            data.set("gatewayId", om.valueToTree(this.getGatewayId()));
            data.set("policyClassName", om.valueToTree(this.getPolicyClassName()));
            data.set("policyConfig", om.valueToTree(this.getPolicyConfig()));
            if (this.getPolicyName() != null) {
                data.set("policyName", om.valueToTree(this.getPolicyName()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apig.PolicyProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            PolicyProps.Jsii$Proxy that = (PolicyProps.Jsii$Proxy) o;

            if (!attachResourceIds.equals(that.attachResourceIds)) return false;
            if (!attachResourceType.equals(that.attachResourceType)) return false;
            if (!environmentId.equals(that.environmentId)) return false;
            if (!gatewayId.equals(that.gatewayId)) return false;
            if (!policyClassName.equals(that.policyClassName)) return false;
            if (!policyConfig.equals(that.policyConfig)) return false;
            return this.policyName != null ? this.policyName.equals(that.policyName) : that.policyName == null;
        }

        @Override
        public final int hashCode() {
            int result = this.attachResourceIds.hashCode();
            result = 31 * result + (this.attachResourceType.hashCode());
            result = 31 * result + (this.environmentId.hashCode());
            result = 31 * result + (this.gatewayId.hashCode());
            result = 31 * result + (this.policyClassName.hashCode());
            result = 31 * result + (this.policyConfig.hashCode());
            result = 31 * result + (this.policyName != null ? this.policyName.hashCode() : 0);
            return result;
        }
    }
}
