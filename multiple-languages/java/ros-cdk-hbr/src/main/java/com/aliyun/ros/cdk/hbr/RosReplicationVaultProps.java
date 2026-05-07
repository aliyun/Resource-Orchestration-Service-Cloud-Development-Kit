package com.aliyun.ros.cdk.hbr;

/**
 * Properties for defining a <code>RosReplicationVault</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hbr-replicationvault
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:51.234Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.RosReplicationVaultProps")
@software.amazon.jsii.Jsii.Proxy(RosReplicationVaultProps.Jsii$Proxy.class)
public interface RosReplicationVaultProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getReplicationSourceRegionId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getReplicationSourceVaultId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVaultName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getEncryptType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getKmsKeyId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRedundancyType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVaultStorageClass() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosReplicationVaultProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosReplicationVaultProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosReplicationVaultProps> {
        java.lang.Object replicationSourceRegionId;
        java.lang.Object replicationSourceVaultId;
        java.lang.Object vaultName;
        java.lang.Object description;
        java.lang.Object encryptType;
        java.lang.Object kmsKeyId;
        java.lang.Object redundancyType;
        java.lang.Object vaultStorageClass;

        /**
         * Sets the value of {@link RosReplicationVaultProps#getReplicationSourceRegionId}
         * @param replicationSourceRegionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder replicationSourceRegionId(java.lang.String replicationSourceRegionId) {
            this.replicationSourceRegionId = replicationSourceRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosReplicationVaultProps#getReplicationSourceRegionId}
         * @param replicationSourceRegionId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder replicationSourceRegionId(com.aliyun.ros.cdk.core.IResolvable replicationSourceRegionId) {
            this.replicationSourceRegionId = replicationSourceRegionId;
            return this;
        }

        /**
         * Sets the value of {@link RosReplicationVaultProps#getReplicationSourceVaultId}
         * @param replicationSourceVaultId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder replicationSourceVaultId(java.lang.String replicationSourceVaultId) {
            this.replicationSourceVaultId = replicationSourceVaultId;
            return this;
        }

        /**
         * Sets the value of {@link RosReplicationVaultProps#getReplicationSourceVaultId}
         * @param replicationSourceVaultId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder replicationSourceVaultId(com.aliyun.ros.cdk.core.IResolvable replicationSourceVaultId) {
            this.replicationSourceVaultId = replicationSourceVaultId;
            return this;
        }

        /**
         * Sets the value of {@link RosReplicationVaultProps#getVaultName}
         * @param vaultName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vaultName(java.lang.String vaultName) {
            this.vaultName = vaultName;
            return this;
        }

        /**
         * Sets the value of {@link RosReplicationVaultProps#getVaultName}
         * @param vaultName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder vaultName(com.aliyun.ros.cdk.core.IResolvable vaultName) {
            this.vaultName = vaultName;
            return this;
        }

        /**
         * Sets the value of {@link RosReplicationVaultProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosReplicationVaultProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosReplicationVaultProps#getEncryptType}
         * @param encryptType the value to be set.
         * @return {@code this}
         */
        public Builder encryptType(java.lang.String encryptType) {
            this.encryptType = encryptType;
            return this;
        }

        /**
         * Sets the value of {@link RosReplicationVaultProps#getEncryptType}
         * @param encryptType the value to be set.
         * @return {@code this}
         */
        public Builder encryptType(com.aliyun.ros.cdk.core.IResolvable encryptType) {
            this.encryptType = encryptType;
            return this;
        }

        /**
         * Sets the value of {@link RosReplicationVaultProps#getKmsKeyId}
         * @param kmsKeyId the value to be set.
         * @return {@code this}
         */
        public Builder kmsKeyId(java.lang.String kmsKeyId) {
            this.kmsKeyId = kmsKeyId;
            return this;
        }

        /**
         * Sets the value of {@link RosReplicationVaultProps#getKmsKeyId}
         * @param kmsKeyId the value to be set.
         * @return {@code this}
         */
        public Builder kmsKeyId(com.aliyun.ros.cdk.core.IResolvable kmsKeyId) {
            this.kmsKeyId = kmsKeyId;
            return this;
        }

        /**
         * Sets the value of {@link RosReplicationVaultProps#getRedundancyType}
         * @param redundancyType the value to be set.
         * @return {@code this}
         */
        public Builder redundancyType(java.lang.String redundancyType) {
            this.redundancyType = redundancyType;
            return this;
        }

        /**
         * Sets the value of {@link RosReplicationVaultProps#getRedundancyType}
         * @param redundancyType the value to be set.
         * @return {@code this}
         */
        public Builder redundancyType(com.aliyun.ros.cdk.core.IResolvable redundancyType) {
            this.redundancyType = redundancyType;
            return this;
        }

        /**
         * Sets the value of {@link RosReplicationVaultProps#getVaultStorageClass}
         * @param vaultStorageClass the value to be set.
         * @return {@code this}
         */
        public Builder vaultStorageClass(java.lang.String vaultStorageClass) {
            this.vaultStorageClass = vaultStorageClass;
            return this;
        }

        /**
         * Sets the value of {@link RosReplicationVaultProps#getVaultStorageClass}
         * @param vaultStorageClass the value to be set.
         * @return {@code this}
         */
        public Builder vaultStorageClass(com.aliyun.ros.cdk.core.IResolvable vaultStorageClass) {
            this.vaultStorageClass = vaultStorageClass;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosReplicationVaultProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosReplicationVaultProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosReplicationVaultProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosReplicationVaultProps {
        private final java.lang.Object replicationSourceRegionId;
        private final java.lang.Object replicationSourceVaultId;
        private final java.lang.Object vaultName;
        private final java.lang.Object description;
        private final java.lang.Object encryptType;
        private final java.lang.Object kmsKeyId;
        private final java.lang.Object redundancyType;
        private final java.lang.Object vaultStorageClass;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.replicationSourceRegionId = software.amazon.jsii.Kernel.get(this, "replicationSourceRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.replicationSourceVaultId = software.amazon.jsii.Kernel.get(this, "replicationSourceVaultId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vaultName = software.amazon.jsii.Kernel.get(this, "vaultName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.encryptType = software.amazon.jsii.Kernel.get(this, "encryptType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.kmsKeyId = software.amazon.jsii.Kernel.get(this, "kmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.redundancyType = software.amazon.jsii.Kernel.get(this, "redundancyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vaultStorageClass = software.amazon.jsii.Kernel.get(this, "vaultStorageClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.replicationSourceRegionId = java.util.Objects.requireNonNull(builder.replicationSourceRegionId, "replicationSourceRegionId is required");
            this.replicationSourceVaultId = java.util.Objects.requireNonNull(builder.replicationSourceVaultId, "replicationSourceVaultId is required");
            this.vaultName = java.util.Objects.requireNonNull(builder.vaultName, "vaultName is required");
            this.description = builder.description;
            this.encryptType = builder.encryptType;
            this.kmsKeyId = builder.kmsKeyId;
            this.redundancyType = builder.redundancyType;
            this.vaultStorageClass = builder.vaultStorageClass;
        }

        @Override
        public final java.lang.Object getReplicationSourceRegionId() {
            return this.replicationSourceRegionId;
        }

        @Override
        public final java.lang.Object getReplicationSourceVaultId() {
            return this.replicationSourceVaultId;
        }

        @Override
        public final java.lang.Object getVaultName() {
            return this.vaultName;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getEncryptType() {
            return this.encryptType;
        }

        @Override
        public final java.lang.Object getKmsKeyId() {
            return this.kmsKeyId;
        }

        @Override
        public final java.lang.Object getRedundancyType() {
            return this.redundancyType;
        }

        @Override
        public final java.lang.Object getVaultStorageClass() {
            return this.vaultStorageClass;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("replicationSourceRegionId", om.valueToTree(this.getReplicationSourceRegionId()));
            data.set("replicationSourceVaultId", om.valueToTree(this.getReplicationSourceVaultId()));
            data.set("vaultName", om.valueToTree(this.getVaultName()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getEncryptType() != null) {
                data.set("encryptType", om.valueToTree(this.getEncryptType()));
            }
            if (this.getKmsKeyId() != null) {
                data.set("kmsKeyId", om.valueToTree(this.getKmsKeyId()));
            }
            if (this.getRedundancyType() != null) {
                data.set("redundancyType", om.valueToTree(this.getRedundancyType()));
            }
            if (this.getVaultStorageClass() != null) {
                data.set("vaultStorageClass", om.valueToTree(this.getVaultStorageClass()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-hbr.RosReplicationVaultProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosReplicationVaultProps.Jsii$Proxy that = (RosReplicationVaultProps.Jsii$Proxy) o;

            if (!replicationSourceRegionId.equals(that.replicationSourceRegionId)) return false;
            if (!replicationSourceVaultId.equals(that.replicationSourceVaultId)) return false;
            if (!vaultName.equals(that.vaultName)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.encryptType != null ? !this.encryptType.equals(that.encryptType) : that.encryptType != null) return false;
            if (this.kmsKeyId != null ? !this.kmsKeyId.equals(that.kmsKeyId) : that.kmsKeyId != null) return false;
            if (this.redundancyType != null ? !this.redundancyType.equals(that.redundancyType) : that.redundancyType != null) return false;
            return this.vaultStorageClass != null ? this.vaultStorageClass.equals(that.vaultStorageClass) : that.vaultStorageClass == null;
        }

        @Override
        public final int hashCode() {
            int result = this.replicationSourceRegionId.hashCode();
            result = 31 * result + (this.replicationSourceVaultId.hashCode());
            result = 31 * result + (this.vaultName.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.encryptType != null ? this.encryptType.hashCode() : 0);
            result = 31 * result + (this.kmsKeyId != null ? this.kmsKeyId.hashCode() : 0);
            result = 31 * result + (this.redundancyType != null ? this.redundancyType.hashCode() : 0);
            result = 31 * result + (this.vaultStorageClass != null ? this.vaultStorageClass.hashCode() : 0);
            return result;
        }
    }
}
