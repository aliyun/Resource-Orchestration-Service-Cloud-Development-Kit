package com.aliyun.ros.cdk.hbr;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::HBR::ReplicationVault</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T12:25:51.781Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.ReplicationVault")
public class ReplicationVault extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.hbr.IReplicationVault {

    protected ReplicationVault(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ReplicationVault(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ReplicationVault(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.ReplicationVaultProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ReplicationVault(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.ReplicationVaultProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute VaultId: The ID of the vault.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVaultId() {
        return software.amazon.jsii.Kernel.get(this, "attrVaultId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.ReplicationVaultProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.hbr.ReplicationVaultProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.hbr.ReplicationVault}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.hbr.ReplicationVault> {
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
        private final com.aliyun.ros.cdk.hbr.ReplicationVaultProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.hbr.ReplicationVaultProps.Builder();
        }

        /**
         * Property replicationSourceRegionId: The region ID of the source vault for replication.
         * <p>
         * @return {@code this}
         * @param replicationSourceRegionId Property replicationSourceRegionId: The region ID of the source vault for replication. This parameter is required.
         */
        public Builder replicationSourceRegionId(final java.lang.String replicationSourceRegionId) {
            this.props.replicationSourceRegionId(replicationSourceRegionId);
            return this;
        }
        /**
         * Property replicationSourceRegionId: The region ID of the source vault for replication.
         * <p>
         * @return {@code this}
         * @param replicationSourceRegionId Property replicationSourceRegionId: The region ID of the source vault for replication. This parameter is required.
         */
        public Builder replicationSourceRegionId(final com.aliyun.ros.cdk.core.IResolvable replicationSourceRegionId) {
            this.props.replicationSourceRegionId(replicationSourceRegionId);
            return this;
        }

        /**
         * Property replicationSourceVaultId: The ID of the source vault for replication.
         * <p>
         * @return {@code this}
         * @param replicationSourceVaultId Property replicationSourceVaultId: The ID of the source vault for replication. This parameter is required.
         */
        public Builder replicationSourceVaultId(final java.lang.String replicationSourceVaultId) {
            this.props.replicationSourceVaultId(replicationSourceVaultId);
            return this;
        }
        /**
         * Property replicationSourceVaultId: The ID of the source vault for replication.
         * <p>
         * @return {@code this}
         * @param replicationSourceVaultId Property replicationSourceVaultId: The ID of the source vault for replication. This parameter is required.
         */
        public Builder replicationSourceVaultId(final com.aliyun.ros.cdk.core.IResolvable replicationSourceVaultId) {
            this.props.replicationSourceVaultId(replicationSourceVaultId);
            return this;
        }

        /**
         * Property vaultName: The name of the vault.
         * <p>
         * @return {@code this}
         * @param vaultName Property vaultName: The name of the vault. This parameter is required.
         */
        public Builder vaultName(final java.lang.String vaultName) {
            this.props.vaultName(vaultName);
            return this;
        }
        /**
         * Property vaultName: The name of the vault.
         * <p>
         * @return {@code this}
         * @param vaultName Property vaultName: The name of the vault. This parameter is required.
         */
        public Builder vaultName(final com.aliyun.ros.cdk.core.IResolvable vaultName) {
            this.props.vaultName(vaultName);
            return this;
        }

        /**
         * Property description: The description of the vault.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the vault. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the vault.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the vault. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property encryptType: The encryption type of the vault.
         * <p>
         * @return {@code this}
         * @param encryptType Property encryptType: The encryption type of the vault. This parameter is required.
         */
        public Builder encryptType(final java.lang.String encryptType) {
            this.props.encryptType(encryptType);
            return this;
        }
        /**
         * Property encryptType: The encryption type of the vault.
         * <p>
         * @return {@code this}
         * @param encryptType Property encryptType: The encryption type of the vault. This parameter is required.
         */
        public Builder encryptType(final com.aliyun.ros.cdk.core.IResolvable encryptType) {
            this.props.encryptType(encryptType);
            return this;
        }

        /**
         * Property kmsKeyId: The KMS key ID used for encryption.
         * <p>
         * @return {@code this}
         * @param kmsKeyId Property kmsKeyId: The KMS key ID used for encryption. This parameter is required.
         */
        public Builder kmsKeyId(final java.lang.String kmsKeyId) {
            this.props.kmsKeyId(kmsKeyId);
            return this;
        }
        /**
         * Property kmsKeyId: The KMS key ID used for encryption.
         * <p>
         * @return {@code this}
         * @param kmsKeyId Property kmsKeyId: The KMS key ID used for encryption. This parameter is required.
         */
        public Builder kmsKeyId(final com.aliyun.ros.cdk.core.IResolvable kmsKeyId) {
            this.props.kmsKeyId(kmsKeyId);
            return this;
        }

        /**
         * Property redundancyType: The redundancy type of the vault.
         * <p>
         * @return {@code this}
         * @param redundancyType Property redundancyType: The redundancy type of the vault. This parameter is required.
         */
        public Builder redundancyType(final java.lang.String redundancyType) {
            this.props.redundancyType(redundancyType);
            return this;
        }
        /**
         * Property redundancyType: The redundancy type of the vault.
         * <p>
         * @return {@code this}
         * @param redundancyType Property redundancyType: The redundancy type of the vault. This parameter is required.
         */
        public Builder redundancyType(final com.aliyun.ros.cdk.core.IResolvable redundancyType) {
            this.props.redundancyType(redundancyType);
            return this;
        }

        /**
         * Property vaultStorageClass: The storage class of the vault.
         * <p>
         * @return {@code this}
         * @param vaultStorageClass Property vaultStorageClass: The storage class of the vault. This parameter is required.
         */
        public Builder vaultStorageClass(final java.lang.String vaultStorageClass) {
            this.props.vaultStorageClass(vaultStorageClass);
            return this;
        }
        /**
         * Property vaultStorageClass: The storage class of the vault.
         * <p>
         * @return {@code this}
         * @param vaultStorageClass Property vaultStorageClass: The storage class of the vault. This parameter is required.
         */
        public Builder vaultStorageClass(final com.aliyun.ros.cdk.core.IResolvable vaultStorageClass) {
            this.props.vaultStorageClass(vaultStorageClass);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.hbr.ReplicationVault}.
         */
        @Override
        public com.aliyun.ros.cdk.hbr.ReplicationVault build() {
            return new com.aliyun.ros.cdk.hbr.ReplicationVault(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
