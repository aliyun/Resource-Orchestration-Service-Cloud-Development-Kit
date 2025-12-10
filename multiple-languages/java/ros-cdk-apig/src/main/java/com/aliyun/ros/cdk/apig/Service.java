package com.aliyun.ros.cdk.apig;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::APIG::Service</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:24:52.407Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apig.$Module.class, fqn = "@alicloud/ros-cdk-apig.Service")
public class Service extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.apig.IService {

    protected Service(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Service(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Service(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.ServiceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Service(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.ServiceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Addresses: Service Address List.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAddresses() {
        return software.amazon.jsii.Kernel.get(this, "attrAddresses", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute AiServiceConfig: AI service configuration when SourceType equals AI.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAiServiceConfig() {
        return software.amazon.jsii.Kernel.get(this, "attrAiServiceConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute GatewayId: The ID of the Cloud Native API Gateway.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGatewayId() {
        return software.amazon.jsii.Kernel.get(this, "attrGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute GroupName: The service group name.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrGroupName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Namespace: The namespace of the service:.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrNamespace() {
        return software.amazon.jsii.Kernel.get(this, "attrNamespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Qualifier: The function version or alias.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrQualifier() {
        return software.amazon.jsii.Kernel.get(this, "attrQualifier", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ServiceId: The ID of the service.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceId() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ServiceName: Service Name, need to fill in manually when SourceType is VIP/DNS/AI.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrServiceName() {
        return software.amazon.jsii.Kernel.get(this, "attrServiceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.apig.ServiceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.apig.ServiceProps.class));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    protected void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    protected @org.jetbrains.annotations.NotNull java.lang.String getId() {
        return software.amazon.jsii.Kernel.get(this, "id", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    protected void setId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "id", java.util.Objects.requireNonNull(value, "id is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.apig.Service}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.apig.Service> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         * @param enableResourcePropertyConstraint
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id, null);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.apig.ServiceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.apig.ServiceProps.Builder();
        }

        /**
         * Property gatewayId: The ID of the Cloud Native API Gateway.
         * <p>
         * @return {@code this}
         * @param gatewayId Property gatewayId: The ID of the Cloud Native API Gateway. This parameter is required.
         */
        public Builder gatewayId(final java.lang.String gatewayId) {
            this.props.gatewayId(gatewayId);
            return this;
        }
        /**
         * Property gatewayId: The ID of the Cloud Native API Gateway.
         * <p>
         * @return {@code this}
         * @param gatewayId Property gatewayId: The ID of the Cloud Native API Gateway. This parameter is required.
         */
        public Builder gatewayId(final com.aliyun.ros.cdk.core.IResolvable gatewayId) {
            this.props.gatewayId(gatewayId);
            return this;
        }

        /**
         * Property addresses: Service Address List.
         * <p>
         * @return {@code this}
         * @param addresses Property addresses: Service Address List. This parameter is required.
         */
        public Builder addresses(final com.aliyun.ros.cdk.core.IResolvable addresses) {
            this.props.addresses(addresses);
            return this;
        }
        /**
         * Property addresses: Service Address List.
         * <p>
         * @return {@code this}
         * @param addresses Property addresses: Service Address List. This parameter is required.
         */
        public Builder addresses(final java.util.List<? extends java.lang.Object> addresses) {
            this.props.addresses(addresses);
            return this;
        }

        /**
         * Property aiServiceConfig: AI service configuration when SourceType equals AI.
         * <p>
         * @return {@code this}
         * @param aiServiceConfig Property aiServiceConfig: AI service configuration when SourceType equals AI. This parameter is required.
         */
        public Builder aiServiceConfig(final com.aliyun.ros.cdk.core.IResolvable aiServiceConfig) {
            this.props.aiServiceConfig(aiServiceConfig);
            return this;
        }
        /**
         * Property aiServiceConfig: AI service configuration when SourceType equals AI.
         * <p>
         * @return {@code this}
         * @param aiServiceConfig Property aiServiceConfig: AI service configuration when SourceType equals AI. This parameter is required.
         */
        public Builder aiServiceConfig(final com.aliyun.ros.cdk.apig.RosService.AiServiceConfigProperty aiServiceConfig) {
            this.props.aiServiceConfig(aiServiceConfig);
            return this;
        }

        /**
         * Property groupName: The service group name.
         * <p>
         * Required when SourceType is MSE_NACOS.
         * <p>
         * @return {@code this}
         * @param groupName Property groupName: The service group name. This parameter is required.
         */
        public Builder groupName(final java.lang.String groupName) {
            this.props.groupName(groupName);
            return this;
        }
        /**
         * Property groupName: The service group name.
         * <p>
         * Required when SourceType is MSE_NACOS.
         * <p>
         * @return {@code this}
         * @param groupName Property groupName: The service group name. This parameter is required.
         */
        public Builder groupName(final com.aliyun.ros.cdk.core.IResolvable groupName) {
            this.props.groupName(groupName);
            return this;
        }

        /**
         * Property namespace: The namespace of the service: - SourceType is K8S, indicating the namespace of the K8S service.
         * <p>
         * When-SourceType is set to MSE_NACOS, it indicates the namespace in Nacos.
         * When the SourceType is K8S and MSE_NACOS, it needs to be specified.
         * <p>
         * @return {@code this}
         * @param namespace Property namespace: The namespace of the service: - SourceType is K8S, indicating the namespace of the K8S service. This parameter is required.
         */
        public Builder namespace(final java.lang.String namespace) {
            this.props.namespace(namespace);
            return this;
        }
        /**
         * Property namespace: The namespace of the service: - SourceType is K8S, indicating the namespace of the K8S service.
         * <p>
         * When-SourceType is set to MSE_NACOS, it indicates the namespace in Nacos.
         * When the SourceType is K8S and MSE_NACOS, it needs to be specified.
         * <p>
         * @return {@code this}
         * @param namespace Property namespace: The namespace of the service: - SourceType is K8S, indicating the namespace of the K8S service. This parameter is required.
         */
        public Builder namespace(final com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.props.namespace(namespace);
            return this;
        }

        /**
         * Property qualifier: The function version or alias.
         * <p>
         * @return {@code this}
         * @param qualifier Property qualifier: The function version or alias. This parameter is required.
         */
        public Builder qualifier(final java.lang.String qualifier) {
            this.props.qualifier(qualifier);
            return this;
        }
        /**
         * Property qualifier: The function version or alias.
         * <p>
         * @return {@code this}
         * @param qualifier Property qualifier: The function version or alias. This parameter is required.
         */
        public Builder qualifier(final com.aliyun.ros.cdk.core.IResolvable qualifier) {
            this.props.qualifier(qualifier);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property serviceName: The name of the service, need to fill in manually when SourceType is VIP/DNS/AI.
         * <p>
         * @return {@code this}
         * @param serviceName Property serviceName: The name of the service, need to fill in manually when SourceType is VIP/DNS/AI. This parameter is required.
         */
        public Builder serviceName(final java.lang.String serviceName) {
            this.props.serviceName(serviceName);
            return this;
        }
        /**
         * Property serviceName: The name of the service, need to fill in manually when SourceType is VIP/DNS/AI.
         * <p>
         * @return {@code this}
         * @param serviceName Property serviceName: The name of the service, need to fill in manually when SourceType is VIP/DNS/AI. This parameter is required.
         */
        public Builder serviceName(final com.aliyun.ros.cdk.core.IResolvable serviceName) {
            this.props.serviceName(serviceName);
            return this;
        }

        /**
         * Property sourceType: The type of the service source, optional value is K8S/MSE_NACOS/FC3/SAE_K8S_SERVICE/VIP/DNS/AI.
         * <p>
         * @return {@code this}
         * @param sourceType Property sourceType: The type of the service source, optional value is K8S/MSE_NACOS/FC3/SAE_K8S_SERVICE/VIP/DNS/AI. This parameter is required.
         */
        public Builder sourceType(final java.lang.String sourceType) {
            this.props.sourceType(sourceType);
            return this;
        }
        /**
         * Property sourceType: The type of the service source, optional value is K8S/MSE_NACOS/FC3/SAE_K8S_SERVICE/VIP/DNS/AI.
         * <p>
         * @return {@code this}
         * @param sourceType Property sourceType: The type of the service source, optional value is K8S/MSE_NACOS/FC3/SAE_K8S_SERVICE/VIP/DNS/AI. This parameter is required.
         */
        public Builder sourceType(final com.aliyun.ros.cdk.core.IResolvable sourceType) {
            this.props.sourceType(sourceType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.apig.Service}.
         */
        @Override
        public com.aliyun.ros.cdk.apig.Service build() {
            return new com.aliyun.ros.cdk.apig.Service(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
