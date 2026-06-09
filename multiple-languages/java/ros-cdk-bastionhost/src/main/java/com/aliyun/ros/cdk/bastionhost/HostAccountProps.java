package com.aliyun.ros.cdk.bastionhost;

/**
 * Properties for defining a <code>HostAccount</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-bastionhost-hostaccount
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T10:35:53.478Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.bastionhost.$Module.class, fqn = "@alicloud/ros-cdk-bastionhost.HostAccountProps")
@software.amazon.jsii.Jsii.Proxy(HostAccountProps.Jsii$Proxy.class)
public interface HostAccountProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property hostAccountName: The name of the host account.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHostAccountName();

    /**
     * Property hostId: The ID of the host.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getHostId();

    /**
     * Property instanceId: The ID of the bastion host instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceId();

    /**
     * Property protocolName: The protocol name of the host account.
     * <p>
     * Valid values: SSH, RDP.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getProtocolName();

    /**
     * Property hostShareKeyId: The ID of the host share key.
     * <p>
     * This parameter is required when the protocol is SSH.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getHostShareKeyId() {
        return null;
    }

    /**
     * Property passPhrase: The passphrase of the host account.
     * <p>
     * This parameter is required when the protocol is SSH and the private key is encrypted.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPassPhrase() {
        return null;
    }

    /**
     * Property password: The password of the host account.
     * <p>
     * This parameter is required when the protocol is SSH or RDP.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPassword() {
        return null;
    }

    /**
     * Property privateKey: The private key of the host account.
     * <p>
     * This parameter is required when the protocol is SSH.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrivateKey() {
        return null;
    }

    /**
     * Property privilegeType: The privilege type of the host account.
     * <p>
     * Valid values: Normal, Administrator.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrivilegeType() {
        return null;
    }

    /**
     * Property rotationMode: The rotation mode of the host account.
     * <p>
     * Valid values: Manual, Automatic.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRotationMode() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link HostAccountProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link HostAccountProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<HostAccountProps> {
        java.lang.Object hostAccountName;
        java.lang.Object hostId;
        java.lang.Object instanceId;
        java.lang.Object protocolName;
        java.lang.Object hostShareKeyId;
        java.lang.Object passPhrase;
        java.lang.Object password;
        java.lang.Object privateKey;
        java.lang.Object privilegeType;
        java.lang.Object rotationMode;

        /**
         * Sets the value of {@link HostAccountProps#getHostAccountName}
         * @param hostAccountName Property hostAccountName: The name of the host account. This parameter is required.
         * @return {@code this}
         */
        public Builder hostAccountName(java.lang.String hostAccountName) {
            this.hostAccountName = hostAccountName;
            return this;
        }

        /**
         * Sets the value of {@link HostAccountProps#getHostAccountName}
         * @param hostAccountName Property hostAccountName: The name of the host account. This parameter is required.
         * @return {@code this}
         */
        public Builder hostAccountName(com.aliyun.ros.cdk.core.IResolvable hostAccountName) {
            this.hostAccountName = hostAccountName;
            return this;
        }

        /**
         * Sets the value of {@link HostAccountProps#getHostId}
         * @param hostId Property hostId: The ID of the host. This parameter is required.
         * @return {@code this}
         */
        public Builder hostId(java.lang.String hostId) {
            this.hostId = hostId;
            return this;
        }

        /**
         * Sets the value of {@link HostAccountProps#getHostId}
         * @param hostId Property hostId: The ID of the host. This parameter is required.
         * @return {@code this}
         */
        public Builder hostId(com.aliyun.ros.cdk.core.IResolvable hostId) {
            this.hostId = hostId;
            return this;
        }

        /**
         * Sets the value of {@link HostAccountProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the bastion host instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link HostAccountProps#getInstanceId}
         * @param instanceId Property instanceId: The ID of the bastion host instance. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link HostAccountProps#getProtocolName}
         * @param protocolName Property protocolName: The protocol name of the host account. This parameter is required.
         *                     Valid values: SSH, RDP.
         * @return {@code this}
         */
        public Builder protocolName(java.lang.String protocolName) {
            this.protocolName = protocolName;
            return this;
        }

        /**
         * Sets the value of {@link HostAccountProps#getProtocolName}
         * @param protocolName Property protocolName: The protocol name of the host account. This parameter is required.
         *                     Valid values: SSH, RDP.
         * @return {@code this}
         */
        public Builder protocolName(com.aliyun.ros.cdk.core.IResolvable protocolName) {
            this.protocolName = protocolName;
            return this;
        }

        /**
         * Sets the value of {@link HostAccountProps#getHostShareKeyId}
         * @param hostShareKeyId Property hostShareKeyId: The ID of the host share key.
         *                       This parameter is required when the protocol is SSH.
         * @return {@code this}
         */
        public Builder hostShareKeyId(java.lang.String hostShareKeyId) {
            this.hostShareKeyId = hostShareKeyId;
            return this;
        }

        /**
         * Sets the value of {@link HostAccountProps#getHostShareKeyId}
         * @param hostShareKeyId Property hostShareKeyId: The ID of the host share key.
         *                       This parameter is required when the protocol is SSH.
         * @return {@code this}
         */
        public Builder hostShareKeyId(com.aliyun.ros.cdk.core.IResolvable hostShareKeyId) {
            this.hostShareKeyId = hostShareKeyId;
            return this;
        }

        /**
         * Sets the value of {@link HostAccountProps#getPassPhrase}
         * @param passPhrase Property passPhrase: The passphrase of the host account.
         *                   This parameter is required when the protocol is SSH and the private key is encrypted.
         * @return {@code this}
         */
        public Builder passPhrase(java.lang.String passPhrase) {
            this.passPhrase = passPhrase;
            return this;
        }

        /**
         * Sets the value of {@link HostAccountProps#getPassPhrase}
         * @param passPhrase Property passPhrase: The passphrase of the host account.
         *                   This parameter is required when the protocol is SSH and the private key is encrypted.
         * @return {@code this}
         */
        public Builder passPhrase(com.aliyun.ros.cdk.core.IResolvable passPhrase) {
            this.passPhrase = passPhrase;
            return this;
        }

        /**
         * Sets the value of {@link HostAccountProps#getPassword}
         * @param password Property password: The password of the host account.
         *                 This parameter is required when the protocol is SSH or RDP.
         * @return {@code this}
         */
        public Builder password(java.lang.String password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link HostAccountProps#getPassword}
         * @param password Property password: The password of the host account.
         *                 This parameter is required when the protocol is SSH or RDP.
         * @return {@code this}
         */
        public Builder password(com.aliyun.ros.cdk.core.IResolvable password) {
            this.password = password;
            return this;
        }

        /**
         * Sets the value of {@link HostAccountProps#getPrivateKey}
         * @param privateKey Property privateKey: The private key of the host account.
         *                   This parameter is required when the protocol is SSH.
         * @return {@code this}
         */
        public Builder privateKey(java.lang.String privateKey) {
            this.privateKey = privateKey;
            return this;
        }

        /**
         * Sets the value of {@link HostAccountProps#getPrivateKey}
         * @param privateKey Property privateKey: The private key of the host account.
         *                   This parameter is required when the protocol is SSH.
         * @return {@code this}
         */
        public Builder privateKey(com.aliyun.ros.cdk.core.IResolvable privateKey) {
            this.privateKey = privateKey;
            return this;
        }

        /**
         * Sets the value of {@link HostAccountProps#getPrivilegeType}
         * @param privilegeType Property privilegeType: The privilege type of the host account.
         *                      Valid values: Normal, Administrator.
         * @return {@code this}
         */
        public Builder privilegeType(java.lang.String privilegeType) {
            this.privilegeType = privilegeType;
            return this;
        }

        /**
         * Sets the value of {@link HostAccountProps#getPrivilegeType}
         * @param privilegeType Property privilegeType: The privilege type of the host account.
         *                      Valid values: Normal, Administrator.
         * @return {@code this}
         */
        public Builder privilegeType(com.aliyun.ros.cdk.core.IResolvable privilegeType) {
            this.privilegeType = privilegeType;
            return this;
        }

        /**
         * Sets the value of {@link HostAccountProps#getRotationMode}
         * @param rotationMode Property rotationMode: The rotation mode of the host account.
         *                     Valid values: Manual, Automatic.
         * @return {@code this}
         */
        public Builder rotationMode(java.lang.String rotationMode) {
            this.rotationMode = rotationMode;
            return this;
        }

        /**
         * Sets the value of {@link HostAccountProps#getRotationMode}
         * @param rotationMode Property rotationMode: The rotation mode of the host account.
         *                     Valid values: Manual, Automatic.
         * @return {@code this}
         */
        public Builder rotationMode(com.aliyun.ros.cdk.core.IResolvable rotationMode) {
            this.rotationMode = rotationMode;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link HostAccountProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public HostAccountProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link HostAccountProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements HostAccountProps {
        private final java.lang.Object hostAccountName;
        private final java.lang.Object hostId;
        private final java.lang.Object instanceId;
        private final java.lang.Object protocolName;
        private final java.lang.Object hostShareKeyId;
        private final java.lang.Object passPhrase;
        private final java.lang.Object password;
        private final java.lang.Object privateKey;
        private final java.lang.Object privilegeType;
        private final java.lang.Object rotationMode;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.hostAccountName = software.amazon.jsii.Kernel.get(this, "hostAccountName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hostId = software.amazon.jsii.Kernel.get(this, "hostId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.protocolName = software.amazon.jsii.Kernel.get(this, "protocolName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.hostShareKeyId = software.amazon.jsii.Kernel.get(this, "hostShareKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.passPhrase = software.amazon.jsii.Kernel.get(this, "passPhrase", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.password = software.amazon.jsii.Kernel.get(this, "password", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.privateKey = software.amazon.jsii.Kernel.get(this, "privateKey", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.privilegeType = software.amazon.jsii.Kernel.get(this, "privilegeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rotationMode = software.amazon.jsii.Kernel.get(this, "rotationMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.hostAccountName = java.util.Objects.requireNonNull(builder.hostAccountName, "hostAccountName is required");
            this.hostId = java.util.Objects.requireNonNull(builder.hostId, "hostId is required");
            this.instanceId = java.util.Objects.requireNonNull(builder.instanceId, "instanceId is required");
            this.protocolName = java.util.Objects.requireNonNull(builder.protocolName, "protocolName is required");
            this.hostShareKeyId = builder.hostShareKeyId;
            this.passPhrase = builder.passPhrase;
            this.password = builder.password;
            this.privateKey = builder.privateKey;
            this.privilegeType = builder.privilegeType;
            this.rotationMode = builder.rotationMode;
        }

        @Override
        public final java.lang.Object getHostAccountName() {
            return this.hostAccountName;
        }

        @Override
        public final java.lang.Object getHostId() {
            return this.hostId;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getProtocolName() {
            return this.protocolName;
        }

        @Override
        public final java.lang.Object getHostShareKeyId() {
            return this.hostShareKeyId;
        }

        @Override
        public final java.lang.Object getPassPhrase() {
            return this.passPhrase;
        }

        @Override
        public final java.lang.Object getPassword() {
            return this.password;
        }

        @Override
        public final java.lang.Object getPrivateKey() {
            return this.privateKey;
        }

        @Override
        public final java.lang.Object getPrivilegeType() {
            return this.privilegeType;
        }

        @Override
        public final java.lang.Object getRotationMode() {
            return this.rotationMode;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("hostAccountName", om.valueToTree(this.getHostAccountName()));
            data.set("hostId", om.valueToTree(this.getHostId()));
            data.set("instanceId", om.valueToTree(this.getInstanceId()));
            data.set("protocolName", om.valueToTree(this.getProtocolName()));
            if (this.getHostShareKeyId() != null) {
                data.set("hostShareKeyId", om.valueToTree(this.getHostShareKeyId()));
            }
            if (this.getPassPhrase() != null) {
                data.set("passPhrase", om.valueToTree(this.getPassPhrase()));
            }
            if (this.getPassword() != null) {
                data.set("password", om.valueToTree(this.getPassword()));
            }
            if (this.getPrivateKey() != null) {
                data.set("privateKey", om.valueToTree(this.getPrivateKey()));
            }
            if (this.getPrivilegeType() != null) {
                data.set("privilegeType", om.valueToTree(this.getPrivilegeType()));
            }
            if (this.getRotationMode() != null) {
                data.set("rotationMode", om.valueToTree(this.getRotationMode()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-bastionhost.HostAccountProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            HostAccountProps.Jsii$Proxy that = (HostAccountProps.Jsii$Proxy) o;

            if (!hostAccountName.equals(that.hostAccountName)) return false;
            if (!hostId.equals(that.hostId)) return false;
            if (!instanceId.equals(that.instanceId)) return false;
            if (!protocolName.equals(that.protocolName)) return false;
            if (this.hostShareKeyId != null ? !this.hostShareKeyId.equals(that.hostShareKeyId) : that.hostShareKeyId != null) return false;
            if (this.passPhrase != null ? !this.passPhrase.equals(that.passPhrase) : that.passPhrase != null) return false;
            if (this.password != null ? !this.password.equals(that.password) : that.password != null) return false;
            if (this.privateKey != null ? !this.privateKey.equals(that.privateKey) : that.privateKey != null) return false;
            if (this.privilegeType != null ? !this.privilegeType.equals(that.privilegeType) : that.privilegeType != null) return false;
            return this.rotationMode != null ? this.rotationMode.equals(that.rotationMode) : that.rotationMode == null;
        }

        @Override
        public final int hashCode() {
            int result = this.hostAccountName.hashCode();
            result = 31 * result + (this.hostId.hashCode());
            result = 31 * result + (this.instanceId.hashCode());
            result = 31 * result + (this.protocolName.hashCode());
            result = 31 * result + (this.hostShareKeyId != null ? this.hostShareKeyId.hashCode() : 0);
            result = 31 * result + (this.passPhrase != null ? this.passPhrase.hashCode() : 0);
            result = 31 * result + (this.password != null ? this.password.hashCode() : 0);
            result = 31 * result + (this.privateKey != null ? this.privateKey.hashCode() : 0);
            result = 31 * result + (this.privilegeType != null ? this.privilegeType.hashCode() : 0);
            result = 31 * result + (this.rotationMode != null ? this.rotationMode.hashCode() : 0);
            return result;
        }
    }
}
