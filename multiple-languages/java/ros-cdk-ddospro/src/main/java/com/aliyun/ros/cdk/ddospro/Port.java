package com.aliyun.ros.cdk.ddospro;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::DDoSPro::Port</code>, which is used to create a port forwarding rule for an Anti-DDoS Proxy instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:23.158Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ddospro.$Module.class, fqn = "@alicloud/ros-cdk-ddospro.Port")
public class Port extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ddospro.IPort {

    protected Port(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Port(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Port(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ddospro.PortProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Port(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ddospro.PortProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute FrontendPort: The forwarding port.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFrontendPort() {
        return software.amazon.jsii.Kernel.get(this, "attrFrontendPort", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ddospro.PortProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ddospro.PortProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ddospro.Port}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ddospro.Port> {
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
        private final com.aliyun.ros.cdk.ddospro.PortProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ddospro.PortProps.Builder();
        }

        /**
         * Property frontendProtocol: The type of the protocol.
         * <p>
         * Valid values:
         * tcp
         * udp
         * <p>
         * @return {@code this}
         * @param frontendProtocol Property frontendProtocol: The type of the protocol. This parameter is required.
         */
        public Builder frontendProtocol(final java.lang.String frontendProtocol) {
            this.props.frontendProtocol(frontendProtocol);
            return this;
        }
        /**
         * Property frontendProtocol: The type of the protocol.
         * <p>
         * Valid values:
         * tcp
         * udp
         * <p>
         * @return {@code this}
         * @param frontendProtocol Property frontendProtocol: The type of the protocol. This parameter is required.
         */
        public Builder frontendProtocol(final com.aliyun.ros.cdk.core.IResolvable frontendProtocol) {
            this.props.frontendProtocol(frontendProtocol);
            return this;
        }

        /**
         * Property instanceId: The ID of the Anti-DDoS Pro or Anti-DDoS Premium instance to which the port forwarding rule belongs.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the Anti-DDoS Pro or Anti-DDoS Premium instance to which the port forwarding rule belongs. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The ID of the Anti-DDoS Pro or Anti-DDoS Premium instance to which the port forwarding rule belongs.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the Anti-DDoS Pro or Anti-DDoS Premium instance to which the port forwarding rule belongs. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property realServers: An array that consists of the IP addresses of origin servers.
         * <p>
         * @return {@code this}
         * @param realServers Property realServers: An array that consists of the IP addresses of origin servers. This parameter is required.
         */
        public Builder realServers(final com.aliyun.ros.cdk.core.IResolvable realServers) {
            this.props.realServers(realServers);
            return this;
        }
        /**
         * Property realServers: An array that consists of the IP addresses of origin servers.
         * <p>
         * @return {@code this}
         * @param realServers Property realServers: An array that consists of the IP addresses of origin servers. This parameter is required.
         */
        public Builder realServers(final java.util.List<? extends java.lang.Object> realServers) {
            this.props.realServers(realServers);
            return this;
        }

        /**
         * Property backendPort: The port of the origin server.
         * <p>
         * Valid values: 0 to 65535.
         * <p>
         * @return {@code this}
         * @param backendPort Property backendPort: The port of the origin server. This parameter is required.
         */
        public Builder backendPort(final java.lang.String backendPort) {
            this.props.backendPort(backendPort);
            return this;
        }
        /**
         * Property backendPort: The port of the origin server.
         * <p>
         * Valid values: 0 to 65535.
         * <p>
         * @return {@code this}
         * @param backendPort Property backendPort: The port of the origin server. This parameter is required.
         */
        public Builder backendPort(final com.aliyun.ros.cdk.core.IResolvable backendPort) {
            this.props.backendPort(backendPort);
            return this;
        }

        /**
         * Property frontendPort: The forwarding port.
         * <p>
         * Valid values: 0 to 65535.
         * <p>
         * @return {@code this}
         * @param frontendPort Property frontendPort: The forwarding port. This parameter is required.
         */
        public Builder frontendPort(final java.lang.String frontendPort) {
            this.props.frontendPort(frontendPort);
            return this;
        }
        /**
         * Property frontendPort: The forwarding port.
         * <p>
         * Valid values: 0 to 65535.
         * <p>
         * @return {@code this}
         * @param frontendPort Property frontendPort: The forwarding port. This parameter is required.
         */
        public Builder frontendPort(final com.aliyun.ros.cdk.core.IResolvable frontendPort) {
            this.props.frontendPort(frontendPort);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ddospro.Port}.
         */
        @Override
        public com.aliyun.ros.cdk.ddospro.Port build() {
            return new com.aliyun.ros.cdk.ddospro.Port(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
