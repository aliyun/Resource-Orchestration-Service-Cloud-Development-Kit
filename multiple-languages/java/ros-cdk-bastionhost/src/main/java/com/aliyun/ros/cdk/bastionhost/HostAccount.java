package com.aliyun.ros.cdk.bastionhost;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::BastionHost::HostAccount</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:35:53.474Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.bastionhost.$Module.class, fqn = "@alicloud/ros-cdk-bastionhost.HostAccount")
public class HostAccount extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.bastionhost.IHostAccount {

    protected HostAccount(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected HostAccount(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public HostAccount(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bastionhost.HostAccountProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public HostAccount(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bastionhost.HostAccountProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute HostAccountId: The ID of the host account.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrHostAccountId() {
        return software.amazon.jsii.Kernel.get(this, "attrHostAccountId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.bastionhost.HostAccountProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.bastionhost.HostAccountProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.bastionhost.HostAccount}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.bastionhost.HostAccount> {
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
        private final com.aliyun.ros.cdk.bastionhost.HostAccountProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.bastionhost.HostAccountProps.Builder();
        }

        /**
         * Property hostAccountName: The name of the host account.
         * <p>
         * @return {@code this}
         * @param hostAccountName Property hostAccountName: The name of the host account. This parameter is required.
         */
        public Builder hostAccountName(final java.lang.String hostAccountName) {
            this.props.hostAccountName(hostAccountName);
            return this;
        }
        /**
         * Property hostAccountName: The name of the host account.
         * <p>
         * @return {@code this}
         * @param hostAccountName Property hostAccountName: The name of the host account. This parameter is required.
         */
        public Builder hostAccountName(final com.aliyun.ros.cdk.core.IResolvable hostAccountName) {
            this.props.hostAccountName(hostAccountName);
            return this;
        }

        /**
         * Property hostId: The ID of the host.
         * <p>
         * @return {@code this}
         * @param hostId Property hostId: The ID of the host. This parameter is required.
         */
        public Builder hostId(final java.lang.String hostId) {
            this.props.hostId(hostId);
            return this;
        }
        /**
         * Property hostId: The ID of the host.
         * <p>
         * @return {@code this}
         * @param hostId Property hostId: The ID of the host. This parameter is required.
         */
        public Builder hostId(final com.aliyun.ros.cdk.core.IResolvable hostId) {
            this.props.hostId(hostId);
            return this;
        }

        /**
         * Property instanceId: The ID of the bastion host instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the bastion host instance. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The ID of the bastion host instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the bastion host instance. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property protocolName: The protocol name of the host account.
         * <p>
         * Valid values: SSH, RDP.
         * <p>
         * @return {@code this}
         * @param protocolName Property protocolName: The protocol name of the host account. This parameter is required.
         */
        public Builder protocolName(final java.lang.String protocolName) {
            this.props.protocolName(protocolName);
            return this;
        }
        /**
         * Property protocolName: The protocol name of the host account.
         * <p>
         * Valid values: SSH, RDP.
         * <p>
         * @return {@code this}
         * @param protocolName Property protocolName: The protocol name of the host account. This parameter is required.
         */
        public Builder protocolName(final com.aliyun.ros.cdk.core.IResolvable protocolName) {
            this.props.protocolName(protocolName);
            return this;
        }

        /**
         * Property hostShareKeyId: The ID of the host share key.
         * <p>
         * This parameter is required when the protocol is SSH.
         * <p>
         * @return {@code this}
         * @param hostShareKeyId Property hostShareKeyId: The ID of the host share key. This parameter is required.
         */
        public Builder hostShareKeyId(final java.lang.String hostShareKeyId) {
            this.props.hostShareKeyId(hostShareKeyId);
            return this;
        }
        /**
         * Property hostShareKeyId: The ID of the host share key.
         * <p>
         * This parameter is required when the protocol is SSH.
         * <p>
         * @return {@code this}
         * @param hostShareKeyId Property hostShareKeyId: The ID of the host share key. This parameter is required.
         */
        public Builder hostShareKeyId(final com.aliyun.ros.cdk.core.IResolvable hostShareKeyId) {
            this.props.hostShareKeyId(hostShareKeyId);
            return this;
        }

        /**
         * Property passPhrase: The passphrase of the host account.
         * <p>
         * This parameter is required when the protocol is SSH and the private key is encrypted.
         * <p>
         * @return {@code this}
         * @param passPhrase Property passPhrase: The passphrase of the host account. This parameter is required.
         */
        public Builder passPhrase(final java.lang.String passPhrase) {
            this.props.passPhrase(passPhrase);
            return this;
        }
        /**
         * Property passPhrase: The passphrase of the host account.
         * <p>
         * This parameter is required when the protocol is SSH and the private key is encrypted.
         * <p>
         * @return {@code this}
         * @param passPhrase Property passPhrase: The passphrase of the host account. This parameter is required.
         */
        public Builder passPhrase(final com.aliyun.ros.cdk.core.IResolvable passPhrase) {
            this.props.passPhrase(passPhrase);
            return this;
        }

        /**
         * Property password: The password of the host account.
         * <p>
         * This parameter is required when the protocol is SSH or RDP.
         * <p>
         * @return {@code this}
         * @param password Property password: The password of the host account. This parameter is required.
         */
        public Builder password(final java.lang.String password) {
            this.props.password(password);
            return this;
        }
        /**
         * Property password: The password of the host account.
         * <p>
         * This parameter is required when the protocol is SSH or RDP.
         * <p>
         * @return {@code this}
         * @param password Property password: The password of the host account. This parameter is required.
         */
        public Builder password(final com.aliyun.ros.cdk.core.IResolvable password) {
            this.props.password(password);
            return this;
        }

        /**
         * Property privateKey: The private key of the host account.
         * <p>
         * This parameter is required when the protocol is SSH.
         * <p>
         * @return {@code this}
         * @param privateKey Property privateKey: The private key of the host account. This parameter is required.
         */
        public Builder privateKey(final java.lang.String privateKey) {
            this.props.privateKey(privateKey);
            return this;
        }
        /**
         * Property privateKey: The private key of the host account.
         * <p>
         * This parameter is required when the protocol is SSH.
         * <p>
         * @return {@code this}
         * @param privateKey Property privateKey: The private key of the host account. This parameter is required.
         */
        public Builder privateKey(final com.aliyun.ros.cdk.core.IResolvable privateKey) {
            this.props.privateKey(privateKey);
            return this;
        }

        /**
         * Property privilegeType: The privilege type of the host account.
         * <p>
         * Valid values: Normal, Administrator.
         * <p>
         * @return {@code this}
         * @param privilegeType Property privilegeType: The privilege type of the host account. This parameter is required.
         */
        public Builder privilegeType(final java.lang.String privilegeType) {
            this.props.privilegeType(privilegeType);
            return this;
        }
        /**
         * Property privilegeType: The privilege type of the host account.
         * <p>
         * Valid values: Normal, Administrator.
         * <p>
         * @return {@code this}
         * @param privilegeType Property privilegeType: The privilege type of the host account. This parameter is required.
         */
        public Builder privilegeType(final com.aliyun.ros.cdk.core.IResolvable privilegeType) {
            this.props.privilegeType(privilegeType);
            return this;
        }

        /**
         * Property rotationMode: The rotation mode of the host account.
         * <p>
         * Valid values: Manual, Automatic.
         * <p>
         * @return {@code this}
         * @param rotationMode Property rotationMode: The rotation mode of the host account. This parameter is required.
         */
        public Builder rotationMode(final java.lang.String rotationMode) {
            this.props.rotationMode(rotationMode);
            return this;
        }
        /**
         * Property rotationMode: The rotation mode of the host account.
         * <p>
         * Valid values: Manual, Automatic.
         * <p>
         * @return {@code this}
         * @param rotationMode Property rotationMode: The rotation mode of the host account. This parameter is required.
         */
        public Builder rotationMode(final com.aliyun.ros.cdk.core.IResolvable rotationMode) {
            this.props.rotationMode(rotationMode);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.bastionhost.HostAccount}.
         */
        @Override
        public com.aliyun.ros.cdk.bastionhost.HostAccount build() {
            return new com.aliyun.ros.cdk.bastionhost.HostAccount(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
