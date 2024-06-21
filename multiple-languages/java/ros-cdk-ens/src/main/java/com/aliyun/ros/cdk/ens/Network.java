package com.aliyun.ros.cdk.ens;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ENS::Network</code>, which is used to create a virtual private cloud (VPC).
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-21T05:59:09.888Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ens.$Module.class, fqn = "@alicloud/ros-cdk-ens.Network")
public class Network extends com.aliyun.ros.cdk.core.Resource {

    protected Network(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Network(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Network(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ens.NetworkProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Network(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ens.NetworkProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute NetworkId: The ID of the network.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrNetworkId() {
        return software.amazon.jsii.Kernel.get(this, "attrNetworkId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ens.NetworkProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ens.NetworkProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ens.NetworkProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ens.Network}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ens.Network> {
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
        private final com.aliyun.ros.cdk.ens.NetworkProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ens.NetworkProps.Builder();
        }

        /**
         * Property cidrBlock: The CIDR block of the network.
         * <p>
         * You can use one of the following CIDR blocks or their subnets as the CIDR block of the network:
         * 10.0.0.0/8 (default)
         * 172.16.0.0/12
         * 192.168.0.0/16
         * <p>
         * @return {@code this}
         * @param cidrBlock Property cidrBlock: The CIDR block of the network. This parameter is required.
         */
        public Builder cidrBlock(final java.lang.String cidrBlock) {
            this.props.cidrBlock(cidrBlock);
            return this;
        }
        /**
         * Property cidrBlock: The CIDR block of the network.
         * <p>
         * You can use one of the following CIDR blocks or their subnets as the CIDR block of the network:
         * 10.0.0.0/8 (default)
         * 172.16.0.0/12
         * 192.168.0.0/16
         * <p>
         * @return {@code this}
         * @param cidrBlock Property cidrBlock: The CIDR block of the network. This parameter is required.
         */
        public Builder cidrBlock(final com.aliyun.ros.cdk.core.IResolvable cidrBlock) {
            this.props.cidrBlock(cidrBlock);
            return this;
        }

        /**
         * Property ensRegionId: The ID of the edge node.
         * <p>
         * @return {@code this}
         * @param ensRegionId Property ensRegionId: The ID of the edge node. This parameter is required.
         */
        public Builder ensRegionId(final java.lang.String ensRegionId) {
            this.props.ensRegionId(ensRegionId);
            return this;
        }
        /**
         * Property ensRegionId: The ID of the edge node.
         * <p>
         * @return {@code this}
         * @param ensRegionId Property ensRegionId: The ID of the edge node. This parameter is required.
         */
        public Builder ensRegionId(final com.aliyun.ros.cdk.core.IResolvable ensRegionId) {
            this.props.ensRegionId(ensRegionId);
            return this;
        }

        /**
         * Property description: The description of the network.
         * <p>
         * The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the network. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the network.
         * <p>
         * The description must be 2 to 256 characters in length. It must start with a letter but cannot start with http:// or https://.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the network. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property networkName: The name of the network.
         * <p>
         * The name must meet the following requirements:
         * The name must be 2 to 128 characters in length.
         * The name must start with a letter but cannot start with http:// or https://.
         * The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
         * <p>
         * @return {@code this}
         * @param networkName Property networkName: The name of the network. This parameter is required.
         */
        public Builder networkName(final java.lang.String networkName) {
            this.props.networkName(networkName);
            return this;
        }
        /**
         * Property networkName: The name of the network.
         * <p>
         * The name must meet the following requirements:
         * The name must be 2 to 128 characters in length.
         * The name must start with a letter but cannot start with http:// or https://.
         * The name can contain letters, digits, colons (:), underscores (_), and hyphens (-).
         * <p>
         * @return {@code this}
         * @param networkName Property networkName: The name of the network. This parameter is required.
         */
        public Builder networkName(final com.aliyun.ros.cdk.core.IResolvable networkName) {
            this.props.networkName(networkName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ens.Network}.
         */
        @Override
        public com.aliyun.ros.cdk.ens.Network build() {
            return new com.aliyun.ros.cdk.ens.Network(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
