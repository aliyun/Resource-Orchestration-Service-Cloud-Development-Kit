package com.aliyun.ros.cdk.bastionhost;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::BastionHost::HostAccount</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:22.143Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.bastionhost.$Module.class, fqn = "@alicloud/ros-cdk-bastionhost.RosHostAccount")
public class RosHostAccount extends com.aliyun.ros.cdk.core.RosResource {

    protected RosHostAccount(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosHostAccount(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.bastionhost.RosHostAccount.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosHostAccount(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bastionhost.RosHostAccountProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrHostAccountId() {
        return software.amazon.jsii.Kernel.get(this, "attrHostAccountId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getHostAccountName() {
        return software.amazon.jsii.Kernel.get(this, "hostAccountName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHostAccountName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "hostAccountName", java.util.Objects.requireNonNull(value, "hostAccountName is required"));
    }

    /**
     */
    public void setHostAccountName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "hostAccountName", java.util.Objects.requireNonNull(value, "hostAccountName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getHostId() {
        return software.amazon.jsii.Kernel.get(this, "hostId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHostId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "hostId", java.util.Objects.requireNonNull(value, "hostId is required"));
    }

    /**
     */
    public void setHostId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "hostId", java.util.Objects.requireNonNull(value, "hostId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceId", java.util.Objects.requireNonNull(value, "instanceId is required"));
    }

    /**
     */
    public void setInstanceId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceId", java.util.Objects.requireNonNull(value, "instanceId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getProtocolName() {
        return software.amazon.jsii.Kernel.get(this, "protocolName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setProtocolName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "protocolName", java.util.Objects.requireNonNull(value, "protocolName is required"));
    }

    /**
     */
    public void setProtocolName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "protocolName", java.util.Objects.requireNonNull(value, "protocolName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getHostShareKeyId() {
        return software.amazon.jsii.Kernel.get(this, "hostShareKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setHostShareKeyId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "hostShareKeyId", value);
    }

    /**
     */
    public void setHostShareKeyId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "hostShareKeyId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPassPhrase() {
        return software.amazon.jsii.Kernel.get(this, "passPhrase", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPassPhrase(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "passPhrase", value);
    }

    /**
     */
    public void setPassPhrase(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "passPhrase", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPassword() {
        return software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPassword(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "password", value);
    }

    /**
     */
    public void setPassword(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "password", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPrivateKey() {
        return software.amazon.jsii.Kernel.get(this, "privateKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPrivateKey(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "privateKey", value);
    }

    /**
     */
    public void setPrivateKey(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "privateKey", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getPrivilegeType() {
        return software.amazon.jsii.Kernel.get(this, "privilegeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setPrivilegeType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "privilegeType", value);
    }

    /**
     */
    public void setPrivilegeType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "privilegeType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRotationMode() {
        return software.amazon.jsii.Kernel.get(this, "rotationMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRotationMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "rotationMode", value);
    }

    /**
     */
    public void setRotationMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "rotationMode", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.bastionhost.RosHostAccount}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.bastionhost.RosHostAccount> {
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
        private final com.aliyun.ros.cdk.bastionhost.RosHostAccountProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.bastionhost.RosHostAccountProps.Builder();
        }

        /**
         * @return {@code this}
         * @param hostAccountName This parameter is required.
         */
        public Builder hostAccountName(final java.lang.String hostAccountName) {
            this.props.hostAccountName(hostAccountName);
            return this;
        }
        /**
         * @return {@code this}
         * @param hostAccountName This parameter is required.
         */
        public Builder hostAccountName(final com.aliyun.ros.cdk.core.IResolvable hostAccountName) {
            this.props.hostAccountName(hostAccountName);
            return this;
        }

        /**
         * @return {@code this}
         * @param hostId This parameter is required.
         */
        public Builder hostId(final java.lang.String hostId) {
            this.props.hostId(hostId);
            return this;
        }
        /**
         * @return {@code this}
         * @param hostId This parameter is required.
         */
        public Builder hostId(final com.aliyun.ros.cdk.core.IResolvable hostId) {
            this.props.hostId(hostId);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceId This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceId This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * @return {@code this}
         * @param protocolName This parameter is required.
         */
        public Builder protocolName(final java.lang.String protocolName) {
            this.props.protocolName(protocolName);
            return this;
        }
        /**
         * @return {@code this}
         * @param protocolName This parameter is required.
         */
        public Builder protocolName(final com.aliyun.ros.cdk.core.IResolvable protocolName) {
            this.props.protocolName(protocolName);
            return this;
        }

        /**
         * @return {@code this}
         * @param hostShareKeyId This parameter is required.
         */
        public Builder hostShareKeyId(final java.lang.String hostShareKeyId) {
            this.props.hostShareKeyId(hostShareKeyId);
            return this;
        }
        /**
         * @return {@code this}
         * @param hostShareKeyId This parameter is required.
         */
        public Builder hostShareKeyId(final com.aliyun.ros.cdk.core.IResolvable hostShareKeyId) {
            this.props.hostShareKeyId(hostShareKeyId);
            return this;
        }

        /**
         * @return {@code this}
         * @param passPhrase This parameter is required.
         */
        public Builder passPhrase(final java.lang.String passPhrase) {
            this.props.passPhrase(passPhrase);
            return this;
        }
        /**
         * @return {@code this}
         * @param passPhrase This parameter is required.
         */
        public Builder passPhrase(final com.aliyun.ros.cdk.core.IResolvable passPhrase) {
            this.props.passPhrase(passPhrase);
            return this;
        }

        /**
         * @return {@code this}
         * @param password This parameter is required.
         */
        public Builder password(final java.lang.String password) {
            this.props.password(password);
            return this;
        }
        /**
         * @return {@code this}
         * @param password This parameter is required.
         */
        public Builder password(final com.aliyun.ros.cdk.core.IResolvable password) {
            this.props.password(password);
            return this;
        }

        /**
         * @return {@code this}
         * @param privateKey This parameter is required.
         */
        public Builder privateKey(final java.lang.String privateKey) {
            this.props.privateKey(privateKey);
            return this;
        }
        /**
         * @return {@code this}
         * @param privateKey This parameter is required.
         */
        public Builder privateKey(final com.aliyun.ros.cdk.core.IResolvable privateKey) {
            this.props.privateKey(privateKey);
            return this;
        }

        /**
         * @return {@code this}
         * @param privilegeType This parameter is required.
         */
        public Builder privilegeType(final java.lang.String privilegeType) {
            this.props.privilegeType(privilegeType);
            return this;
        }
        /**
         * @return {@code this}
         * @param privilegeType This parameter is required.
         */
        public Builder privilegeType(final com.aliyun.ros.cdk.core.IResolvable privilegeType) {
            this.props.privilegeType(privilegeType);
            return this;
        }

        /**
         * @return {@code this}
         * @param rotationMode This parameter is required.
         */
        public Builder rotationMode(final java.lang.String rotationMode) {
            this.props.rotationMode(rotationMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param rotationMode This parameter is required.
         */
        public Builder rotationMode(final com.aliyun.ros.cdk.core.IResolvable rotationMode) {
            this.props.rotationMode(rotationMode);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.bastionhost.RosHostAccount}.
         */
        @Override
        public com.aliyun.ros.cdk.bastionhost.RosHostAccount build() {
            return new com.aliyun.ros.cdk.bastionhost.RosHostAccount(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
