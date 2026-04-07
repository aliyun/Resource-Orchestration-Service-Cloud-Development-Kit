package com.aliyun.ros.cdk.cloudstoragegateway;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CloudStorageGateway::Gateway</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:22.982Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cloudstoragegateway.$Module.class, fqn = "@alicloud/ros-cdk-cloudstoragegateway.Gateway")
public class Gateway extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cloudstoragegateway.IGateway {

    protected Gateway(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Gateway(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Gateway(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudstoragegateway.GatewayProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Gateway(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudstoragegateway.GatewayProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute GatewayId: The ID of the gateway.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrGatewayId() {
        return software.amazon.jsii.Kernel.get(this, "attrGatewayId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cloudstoragegateway.GatewayProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cloudstoragegateway.GatewayProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.cloudstoragegateway.Gateway}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cloudstoragegateway.Gateway> {
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
        private final com.aliyun.ros.cdk.cloudstoragegateway.GatewayProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cloudstoragegateway.GatewayProps.Builder();
        }

        /**
         * Property category: The category of the gateway.
         * <p>
         * @return {@code this}
         * @param category Property category: The category of the gateway. This parameter is required.
         */
        public Builder category(final java.lang.String category) {
            this.props.category(category);
            return this;
        }
        /**
         * Property category: The category of the gateway.
         * <p>
         * @return {@code this}
         * @param category Property category: The category of the gateway. This parameter is required.
         */
        public Builder category(final com.aliyun.ros.cdk.core.IResolvable category) {
            this.props.category(category);
            return this;
        }

        /**
         * Property location: The location of the gateway.
         * <p>
         * @return {@code this}
         * @param location Property location: The location of the gateway. This parameter is required.
         */
        public Builder location(final java.lang.String location) {
            this.props.location(location);
            return this;
        }
        /**
         * Property location: The location of the gateway.
         * <p>
         * @return {@code this}
         * @param location Property location: The location of the gateway. This parameter is required.
         */
        public Builder location(final com.aliyun.ros.cdk.core.IResolvable location) {
            this.props.location(location);
            return this;
        }

        /**
         * Property name: The name of the gateway.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the gateway. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The name of the gateway.
         * <p>
         * @return {@code this}
         * @param name Property name: The name of the gateway. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property type: The type of the gateway.
         * <p>
         * @return {@code this}
         * @param type Property type: The type of the gateway. This parameter is required.
         */
        public Builder type(final java.lang.String type) {
            this.props.type(type);
            return this;
        }
        /**
         * Property type: The type of the gateway.
         * <p>
         * @return {@code this}
         * @param type Property type: The type of the gateway. This parameter is required.
         */
        public Builder type(final com.aliyun.ros.cdk.core.IResolvable type) {
            this.props.type(type);
            return this;
        }

        /**
         * Property description: The description of the gateway.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the gateway. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the gateway.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the gateway. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property gatewayClass: The class of the gateway.
         * <p>
         * @return {@code this}
         * @param gatewayClass Property gatewayClass: The class of the gateway. This parameter is required.
         */
        public Builder gatewayClass(final java.lang.String gatewayClass) {
            this.props.gatewayClass(gatewayClass);
            return this;
        }
        /**
         * Property gatewayClass: The class of the gateway.
         * <p>
         * @return {@code this}
         * @param gatewayClass Property gatewayClass: The class of the gateway. This parameter is required.
         */
        public Builder gatewayClass(final com.aliyun.ros.cdk.core.IResolvable gatewayClass) {
            this.props.gatewayClass(gatewayClass);
            return this;
        }

        /**
         * Property postPaid: Whether the gateway is pay-as-you-go.
         * <p>
         * @return {@code this}
         * @param postPaid Property postPaid: Whether the gateway is pay-as-you-go. This parameter is required.
         */
        public Builder postPaid(final java.lang.Boolean postPaid) {
            this.props.postPaid(postPaid);
            return this;
        }
        /**
         * Property postPaid: Whether the gateway is pay-as-you-go.
         * <p>
         * @return {@code this}
         * @param postPaid Property postPaid: Whether the gateway is pay-as-you-go. This parameter is required.
         */
        public Builder postPaid(final com.aliyun.ros.cdk.core.IResolvable postPaid) {
            this.props.postPaid(postPaid);
            return this;
        }

        /**
         * Property publicNetworkBandwidth: The public network bandwidth of the gateway.
         * <p>
         * @return {@code this}
         * @param publicNetworkBandwidth Property publicNetworkBandwidth: The public network bandwidth of the gateway. This parameter is required.
         */
        public Builder publicNetworkBandwidth(final java.lang.Number publicNetworkBandwidth) {
            this.props.publicNetworkBandwidth(publicNetworkBandwidth);
            return this;
        }
        /**
         * Property publicNetworkBandwidth: The public network bandwidth of the gateway.
         * <p>
         * @return {@code this}
         * @param publicNetworkBandwidth Property publicNetworkBandwidth: The public network bandwidth of the gateway. This parameter is required.
         */
        public Builder publicNetworkBandwidth(final com.aliyun.ros.cdk.core.IResolvable publicNetworkBandwidth) {
            this.props.publicNetworkBandwidth(publicNetworkBandwidth);
            return this;
        }

        /**
         * Property releaseAfterExpiration: Whether to release the gateway after expiration.
         * <p>
         * @return {@code this}
         * @param releaseAfterExpiration Property releaseAfterExpiration: Whether to release the gateway after expiration. This parameter is required.
         */
        public Builder releaseAfterExpiration(final java.lang.Boolean releaseAfterExpiration) {
            this.props.releaseAfterExpiration(releaseAfterExpiration);
            return this;
        }
        /**
         * Property releaseAfterExpiration: Whether to release the gateway after expiration.
         * <p>
         * @return {@code this}
         * @param releaseAfterExpiration Property releaseAfterExpiration: Whether to release the gateway after expiration. This parameter is required.
         */
        public Builder releaseAfterExpiration(final com.aliyun.ros.cdk.core.IResolvable releaseAfterExpiration) {
            this.props.releaseAfterExpiration(releaseAfterExpiration);
            return this;
        }

        /**
         * Property resourceRegionId: The region ID of the resource.
         * <p>
         * @return {@code this}
         * @param resourceRegionId Property resourceRegionId: The region ID of the resource. This parameter is required.
         */
        public Builder resourceRegionId(final java.lang.String resourceRegionId) {
            this.props.resourceRegionId(resourceRegionId);
            return this;
        }
        /**
         * Property resourceRegionId: The region ID of the resource.
         * <p>
         * @return {@code this}
         * @param resourceRegionId Property resourceRegionId: The region ID of the resource. This parameter is required.
         */
        public Builder resourceRegionId(final com.aliyun.ros.cdk.core.IResolvable resourceRegionId) {
            this.props.resourceRegionId(resourceRegionId);
            return this;
        }

        /**
         * Property secondaryVSwitchId: The ID of the secondary VSwitch.
         * <p>
         * @return {@code this}
         * @param secondaryVSwitchId Property secondaryVSwitchId: The ID of the secondary VSwitch. This parameter is required.
         */
        public Builder secondaryVSwitchId(final java.lang.String secondaryVSwitchId) {
            this.props.secondaryVSwitchId(secondaryVSwitchId);
            return this;
        }
        /**
         * Property secondaryVSwitchId: The ID of the secondary VSwitch.
         * <p>
         * @return {@code this}
         * @param secondaryVSwitchId Property secondaryVSwitchId: The ID of the secondary VSwitch. This parameter is required.
         */
        public Builder secondaryVSwitchId(final com.aliyun.ros.cdk.core.IResolvable secondaryVSwitchId) {
            this.props.secondaryVSwitchId(secondaryVSwitchId);
            return this;
        }

        /**
         * Property storageBundleId: The ID of the storage bundle.
         * <p>
         * @return {@code this}
         * @param storageBundleId Property storageBundleId: The ID of the storage bundle. This parameter is required.
         */
        public Builder storageBundleId(final java.lang.String storageBundleId) {
            this.props.storageBundleId(storageBundleId);
            return this;
        }
        /**
         * Property storageBundleId: The ID of the storage bundle.
         * <p>
         * @return {@code this}
         * @param storageBundleId Property storageBundleId: The ID of the storage bundle. This parameter is required.
         */
        public Builder storageBundleId(final com.aliyun.ros.cdk.core.IResolvable storageBundleId) {
            this.props.storageBundleId(storageBundleId);
            return this;
        }

        /**
         * Property untrustedEnvId: The ID of the untrusted environment.
         * <p>
         * @return {@code this}
         * @param untrustedEnvId Property untrustedEnvId: The ID of the untrusted environment. This parameter is required.
         */
        public Builder untrustedEnvId(final java.lang.String untrustedEnvId) {
            this.props.untrustedEnvId(untrustedEnvId);
            return this;
        }
        /**
         * Property untrustedEnvId: The ID of the untrusted environment.
         * <p>
         * @return {@code this}
         * @param untrustedEnvId Property untrustedEnvId: The ID of the untrusted environment. This parameter is required.
         */
        public Builder untrustedEnvId(final com.aliyun.ros.cdk.core.IResolvable untrustedEnvId) {
            this.props.untrustedEnvId(untrustedEnvId);
            return this;
        }

        /**
         * Property untrustedEnvInstanceType: The instance type of the untrusted environment.
         * <p>
         * @return {@code this}
         * @param untrustedEnvInstanceType Property untrustedEnvInstanceType: The instance type of the untrusted environment. This parameter is required.
         */
        public Builder untrustedEnvInstanceType(final java.lang.String untrustedEnvInstanceType) {
            this.props.untrustedEnvInstanceType(untrustedEnvInstanceType);
            return this;
        }
        /**
         * Property untrustedEnvInstanceType: The instance type of the untrusted environment.
         * <p>
         * @return {@code this}
         * @param untrustedEnvInstanceType Property untrustedEnvInstanceType: The instance type of the untrusted environment. This parameter is required.
         */
        public Builder untrustedEnvInstanceType(final com.aliyun.ros.cdk.core.IResolvable untrustedEnvInstanceType) {
            this.props.untrustedEnvInstanceType(untrustedEnvInstanceType);
            return this;
        }

        /**
         * Property vSwitchId: The ID of the VSwitch.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The ID of the VSwitch.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cloudstoragegateway.Gateway}.
         */
        @Override
        public com.aliyun.ros.cdk.cloudstoragegateway.Gateway build() {
            return new com.aliyun.ros.cdk.cloudstoragegateway.Gateway(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
