package com.aliyun.ros.cdk.cloudstoragegateway;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::CloudStorageGateway::Gateway</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:22.990Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudstoragegateway.$Module.class, fqn = "@alicloud/ros-cdk-cloudstoragegateway.RosGateway")
public class RosGateway extends com.aliyun.ros.cdk.core.RosResource {

    protected RosGateway(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosGateway(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cloudstoragegateway.RosGateway.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosGateway(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudstoragegateway.RosGatewayProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGatewayId() {
        return software.amazon.jsii.Kernel.get(this, "attrGatewayId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getCategory() {
        return software.amazon.jsii.Kernel.get(this, "category", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCategory(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "category", java.util.Objects.requireNonNull(value, "category is required"));
    }

    /**
     */
    public void setCategory(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "category", java.util.Objects.requireNonNull(value, "category is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getLocation() {
        return software.amazon.jsii.Kernel.get(this, "location", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLocation(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "location", java.util.Objects.requireNonNull(value, "location is required"));
    }

    /**
     */
    public void setLocation(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "location", java.util.Objects.requireNonNull(value, "location is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getName() {
        return software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "name", java.util.Objects.requireNonNull(value, "name is required"));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "name", java.util.Objects.requireNonNull(value, "name is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getType() {
        return software.amazon.jsii.Kernel.get(this, "type", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "type", java.util.Objects.requireNonNull(value, "type is required"));
    }

    /**
     */
    public void setType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "type", java.util.Objects.requireNonNull(value, "type is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public void setDescription(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "description", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getGatewayClass() {
        return software.amazon.jsii.Kernel.get(this, "gatewayClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setGatewayClass(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "gatewayClass", value);
    }

    /**
     */
    public void setGatewayClass(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "gatewayClass", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPostPaid() {
        return software.amazon.jsii.Kernel.get(this, "postPaid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPostPaid(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "postPaid", value);
    }

    /**
     */
    public void setPostPaid(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "postPaid", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPublicNetworkBandwidth() {
        return software.amazon.jsii.Kernel.get(this, "publicNetworkBandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPublicNetworkBandwidth(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "publicNetworkBandwidth", value);
    }

    /**
     */
    public void setPublicNetworkBandwidth(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "publicNetworkBandwidth", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getReleaseAfterExpiration() {
        return software.amazon.jsii.Kernel.get(this, "releaseAfterExpiration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReleaseAfterExpiration(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "releaseAfterExpiration", value);
    }

    /**
     */
    public void setReleaseAfterExpiration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "releaseAfterExpiration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getResourceRegionId() {
        return software.amazon.jsii.Kernel.get(this, "resourceRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setResourceRegionId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "resourceRegionId", value);
    }

    /**
     */
    public void setResourceRegionId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "resourceRegionId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getSecondaryVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "secondaryVSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSecondaryVSwitchId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "secondaryVSwitchId", value);
    }

    /**
     */
    public void setSecondaryVSwitchId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "secondaryVSwitchId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getStorageBundleId() {
        return software.amazon.jsii.Kernel.get(this, "storageBundleId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setStorageBundleId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "storageBundleId", value);
    }

    /**
     */
    public void setStorageBundleId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "storageBundleId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getUntrustedEnvId() {
        return software.amazon.jsii.Kernel.get(this, "untrustedEnvId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUntrustedEnvId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "untrustedEnvId", value);
    }

    /**
     */
    public void setUntrustedEnvId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "untrustedEnvId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getUntrustedEnvInstanceType() {
        return software.amazon.jsii.Kernel.get(this, "untrustedEnvInstanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUntrustedEnvInstanceType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "untrustedEnvInstanceType", value);
    }

    /**
     */
    public void setUntrustedEnvInstanceType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "untrustedEnvInstanceType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVSwitchId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchId", value);
    }

    /**
     */
    public void setVSwitchId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vSwitchId", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudstoragegateway.RosGateway}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudstoragegateway.RosGateway> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.cloudstoragegateway.RosGatewayProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cloudstoragegateway.RosGatewayProps.Builder();
        }

        /**
         * @return {@code this}
         * @param category This parameter is required.
         */
        public Builder category(final java.lang.String category) {
            this.props.category(category);
            return this;
        }
        /**
         * @return {@code this}
         * @param category This parameter is required.
         */
        public Builder category(final com.aliyun.ros.cdk.core.IResolvable category) {
            this.props.category(category);
            return this;
        }

        /**
         * @return {@code this}
         * @param location This parameter is required.
         */
        public Builder location(final java.lang.String location) {
            this.props.location(location);
            return this;
        }
        /**
         * @return {@code this}
         * @param location This parameter is required.
         */
        public Builder location(final com.aliyun.ros.cdk.core.IResolvable location) {
            this.props.location(location);
            return this;
        }

        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * @return {@code this}
         * @param name This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * @return {@code this}
         * @param type This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * @return {@code this}
         * @param type This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * @return {@code this}
         * @param description This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return {@code this}
         * @param gatewayClass This parameter is required.
         */
        public Builder gatewayClass(final java.lang.String gatewayClass) {
            this.props.gatewayClass(gatewayClass);
            return this;
        }
        /**
         * @return {@code this}
         * @param gatewayClass This parameter is required.
         */
        public Builder gatewayClass(final com.aliyun.ros.cdk.core.IResolvable gatewayClass) {
            this.props.gatewayClass(gatewayClass);
            return this;
        }

        /**
         * @return {@code this}
         * @param postPaid This parameter is required.
         */
        public Builder postPaid(final java.lang.Boolean postPaid) {
            this.props.postPaid(postPaid);
            return this;
        }
        /**
         * @return {@code this}
         * @param postPaid This parameter is required.
         */
        public Builder postPaid(final com.aliyun.ros.cdk.core.IResolvable postPaid) {
            this.props.postPaid(postPaid);
            return this;
        }

        /**
         * @return {@code this}
         * @param publicNetworkBandwidth This parameter is required.
         */
        public Builder publicNetworkBandwidth(final java.lang.Number publicNetworkBandwidth) {
            this.props.publicNetworkBandwidth(publicNetworkBandwidth);
            return this;
        }
        /**
         * @return {@code this}
         * @param publicNetworkBandwidth This parameter is required.
         */
        public Builder publicNetworkBandwidth(final com.aliyun.ros.cdk.core.IResolvable publicNetworkBandwidth) {
            this.props.publicNetworkBandwidth(publicNetworkBandwidth);
            return this;
        }

        /**
         * @return {@code this}
         * @param releaseAfterExpiration This parameter is required.
         */
        public Builder releaseAfterExpiration(final java.lang.Boolean releaseAfterExpiration) {
            this.props.releaseAfterExpiration(releaseAfterExpiration);
            return this;
        }
        /**
         * @return {@code this}
         * @param releaseAfterExpiration This parameter is required.
         */
        public Builder releaseAfterExpiration(final com.aliyun.ros.cdk.core.IResolvable releaseAfterExpiration) {
            this.props.releaseAfterExpiration(releaseAfterExpiration);
            return this;
        }

        /**
         * @return {@code this}
         * @param resourceRegionId This parameter is required.
         */
        public Builder resourceRegionId(final java.lang.String resourceRegionId) {
            this.props.resourceRegionId(resourceRegionId);
            return this;
        }
        /**
         * @return {@code this}
         * @param resourceRegionId This parameter is required.
         */
        public Builder resourceRegionId(final com.aliyun.ros.cdk.core.IResolvable resourceRegionId) {
            this.props.resourceRegionId(resourceRegionId);
            return this;
        }

        /**
         * @return {@code this}
         * @param secondaryVSwitchId This parameter is required.
         */
        public Builder secondaryVSwitchId(final java.lang.String secondaryVSwitchId) {
            this.props.secondaryVSwitchId(secondaryVSwitchId);
            return this;
        }
        /**
         * @return {@code this}
         * @param secondaryVSwitchId This parameter is required.
         */
        public Builder secondaryVSwitchId(final com.aliyun.ros.cdk.core.IResolvable secondaryVSwitchId) {
            this.props.secondaryVSwitchId(secondaryVSwitchId);
            return this;
        }

        /**
         * @return {@code this}
         * @param storageBundleId This parameter is required.
         */
        public Builder storageBundleId(final java.lang.String storageBundleId) {
            this.props.storageBundleId(storageBundleId);
            return this;
        }
        /**
         * @return {@code this}
         * @param storageBundleId This parameter is required.
         */
        public Builder storageBundleId(final com.aliyun.ros.cdk.core.IResolvable storageBundleId) {
            this.props.storageBundleId(storageBundleId);
            return this;
        }

        /**
         * @return {@code this}
         * @param untrustedEnvId This parameter is required.
         */
        public Builder untrustedEnvId(final java.lang.String untrustedEnvId) {
            this.props.untrustedEnvId(untrustedEnvId);
            return this;
        }
        /**
         * @return {@code this}
         * @param untrustedEnvId This parameter is required.
         */
        public Builder untrustedEnvId(final com.aliyun.ros.cdk.core.IResolvable untrustedEnvId) {
            this.props.untrustedEnvId(untrustedEnvId);
            return this;
        }

        /**
         * @return {@code this}
         * @param untrustedEnvInstanceType This parameter is required.
         */
        public Builder untrustedEnvInstanceType(final java.lang.String untrustedEnvInstanceType) {
            this.props.untrustedEnvInstanceType(untrustedEnvInstanceType);
            return this;
        }
        /**
         * @return {@code this}
         * @param untrustedEnvInstanceType This parameter is required.
         */
        public Builder untrustedEnvInstanceType(final com.aliyun.ros.cdk.core.IResolvable untrustedEnvInstanceType) {
            this.props.untrustedEnvInstanceType(untrustedEnvInstanceType);
            return this;
        }

        /**
         * @return {@code this}
         * @param vSwitchId This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vSwitchId This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cloudstoragegateway.RosGateway}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudstoragegateway.RosGateway build() {
            return new com.aliyun.ros.cdk.cloudstoragegateway.RosGateway(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
