package com.aliyun.ros.cdk.vpc;

/**
 * A ROS template type:  <code>ALIYUN::VPC::VirtualBorderRouter</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-28T08:22:30.898Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.vpc.$Module.class, fqn = "@alicloud/ros-cdk-vpc.RosVirtualBorderRouter")
public class RosVirtualBorderRouter extends com.aliyun.ros.cdk.core.RosResource {

    protected RosVirtualBorderRouter(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosVirtualBorderRouter(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.vpc.RosVirtualBorderRouter.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * Create a new <code>ALIYUN::VPC::VirtualBorderRouter</code>.
     * <p>
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosVirtualBorderRouter(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.vpc.RosVirtualBorderRouterProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrName() {
        return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRouteTableId() {
        return software.amazon.jsii.Kernel.get(this, "attrRouteTableId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVbrId() {
        return software.amazon.jsii.Kernel.get(this, "attrVbrId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVlanInterfaceId() {
        return software.amazon.jsii.Kernel.get(this, "attrVlanInterfaceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getLocalGatewayIp() {
        return software.amazon.jsii.Kernel.get(this, "localGatewayIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLocalGatewayIp(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "localGatewayIp", java.util.Objects.requireNonNull(value, "localGatewayIp is required"));
    }

    /**
     */
    public void setLocalGatewayIp(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "localGatewayIp", java.util.Objects.requireNonNull(value, "localGatewayIp is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPeerGatewayIp() {
        return software.amazon.jsii.Kernel.get(this, "peerGatewayIp", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeerGatewayIp(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "peerGatewayIp", java.util.Objects.requireNonNull(value, "peerGatewayIp is required"));
    }

    /**
     */
    public void setPeerGatewayIp(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "peerGatewayIp", java.util.Objects.requireNonNull(value, "peerGatewayIp is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPeeringSubnetMask() {
        return software.amazon.jsii.Kernel.get(this, "peeringSubnetMask", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPeeringSubnetMask(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "peeringSubnetMask", java.util.Objects.requireNonNull(value, "peeringSubnetMask is required"));
    }

    /**
     */
    public void setPeeringSubnetMask(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "peeringSubnetMask", java.util.Objects.requireNonNull(value, "peeringSubnetMask is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getPhysicalConnectionId() {
        return software.amazon.jsii.Kernel.get(this, "physicalConnectionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPhysicalConnectionId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "physicalConnectionId", java.util.Objects.requireNonNull(value, "physicalConnectionId is required"));
    }

    /**
     */
    public void setPhysicalConnectionId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "physicalConnectionId", java.util.Objects.requireNonNull(value, "physicalConnectionId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getVlanId() {
        return software.amazon.jsii.Kernel.get(this, "vlanId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVlanId(final @org.jetbrains.annotations.NotNull java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "vlanId", java.util.Objects.requireNonNull(value, "vlanId is required"));
    }

    /**
     */
    public void setVlanId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vlanId", java.util.Objects.requireNonNull(value, "vlanId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getCircuitCode() {
        return software.amazon.jsii.Kernel.get(this, "circuitCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setCircuitCode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "circuitCode", value);
    }

    /**
     */
    public void setCircuitCode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "circuitCode", value);
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getName() {
        return software.amazon.jsii.Kernel.get(this, "name", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "name", value);
    }

    /**
     */
    public void setName(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "name", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.vpc.RosVirtualBorderRouter}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.vpc.RosVirtualBorderRouter> {
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
        private final com.aliyun.ros.cdk.vpc.RosVirtualBorderRouterProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.vpc.RosVirtualBorderRouterProps.Builder();
        }

        /**
         * @return {@code this}
         * @param localGatewayIp This parameter is required.
         */
        public Builder localGatewayIp(final java.lang.String localGatewayIp) {
            this.props.localGatewayIp(localGatewayIp);
            return this;
        }
        /**
         * @return {@code this}
         * @param localGatewayIp This parameter is required.
         */
        public Builder localGatewayIp(final com.aliyun.ros.cdk.core.IResolvable localGatewayIp) {
            this.props.localGatewayIp(localGatewayIp);
            return this;
        }

        /**
         * @return {@code this}
         * @param peerGatewayIp This parameter is required.
         */
        public Builder peerGatewayIp(final java.lang.String peerGatewayIp) {
            this.props.peerGatewayIp(peerGatewayIp);
            return this;
        }
        /**
         * @return {@code this}
         * @param peerGatewayIp This parameter is required.
         */
        public Builder peerGatewayIp(final com.aliyun.ros.cdk.core.IResolvable peerGatewayIp) {
            this.props.peerGatewayIp(peerGatewayIp);
            return this;
        }

        /**
         * @return {@code this}
         * @param peeringSubnetMask This parameter is required.
         */
        public Builder peeringSubnetMask(final java.lang.String peeringSubnetMask) {
            this.props.peeringSubnetMask(peeringSubnetMask);
            return this;
        }
        /**
         * @return {@code this}
         * @param peeringSubnetMask This parameter is required.
         */
        public Builder peeringSubnetMask(final com.aliyun.ros.cdk.core.IResolvable peeringSubnetMask) {
            this.props.peeringSubnetMask(peeringSubnetMask);
            return this;
        }

        /**
         * @return {@code this}
         * @param physicalConnectionId This parameter is required.
         */
        public Builder physicalConnectionId(final java.lang.String physicalConnectionId) {
            this.props.physicalConnectionId(physicalConnectionId);
            return this;
        }
        /**
         * @return {@code this}
         * @param physicalConnectionId This parameter is required.
         */
        public Builder physicalConnectionId(final com.aliyun.ros.cdk.core.IResolvable physicalConnectionId) {
            this.props.physicalConnectionId(physicalConnectionId);
            return this;
        }

        /**
         * @return {@code this}
         * @param vlanId This parameter is required.
         */
        public Builder vlanId(final java.lang.Number vlanId) {
            this.props.vlanId(vlanId);
            return this;
        }
        /**
         * @return {@code this}
         * @param vlanId This parameter is required.
         */
        public Builder vlanId(final com.aliyun.ros.cdk.core.IResolvable vlanId) {
            this.props.vlanId(vlanId);
            return this;
        }

        /**
         * @return {@code this}
         * @param circuitCode This parameter is required.
         */
        public Builder circuitCode(final java.lang.String circuitCode) {
            this.props.circuitCode(circuitCode);
            return this;
        }
        /**
         * @return {@code this}
         * @param circuitCode This parameter is required.
         */
        public Builder circuitCode(final com.aliyun.ros.cdk.core.IResolvable circuitCode) {
            this.props.circuitCode(circuitCode);
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
         * @return a newly built instance of {@link com.aliyun.ros.cdk.vpc.RosVirtualBorderRouter}.
         */
        @Override
        public com.aliyun.ros.cdk.vpc.RosVirtualBorderRouter build() {
            return new com.aliyun.ros.cdk.vpc.RosVirtualBorderRouter(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
