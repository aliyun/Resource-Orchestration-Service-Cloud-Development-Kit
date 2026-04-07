package com.aliyun.ros.cdk.hbr;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::HBR::ReplicationVault</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:27.294Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.RosReplicationVault")
public class RosReplicationVault extends com.aliyun.ros.cdk.core.RosResource {

    protected RosReplicationVault(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosReplicationVault(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.hbr.RosReplicationVault.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosReplicationVault(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.RosReplicationVaultProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVaultId() {
        return software.amazon.jsii.Kernel.get(this, "attrVaultId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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
    public @org.jetbrains.annotations.NotNull java.lang.Object getReplicationSourceRegionId() {
        return software.amazon.jsii.Kernel.get(this, "replicationSourceRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReplicationSourceRegionId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "replicationSourceRegionId", java.util.Objects.requireNonNull(value, "replicationSourceRegionId is required"));
    }

    /**
     */
    public void setReplicationSourceRegionId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "replicationSourceRegionId", java.util.Objects.requireNonNull(value, "replicationSourceRegionId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getReplicationSourceVaultId() {
        return software.amazon.jsii.Kernel.get(this, "replicationSourceVaultId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setReplicationSourceVaultId(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "replicationSourceVaultId", java.util.Objects.requireNonNull(value, "replicationSourceVaultId is required"));
    }

    /**
     */
    public void setReplicationSourceVaultId(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "replicationSourceVaultId", java.util.Objects.requireNonNull(value, "replicationSourceVaultId is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getVaultName() {
        return software.amazon.jsii.Kernel.get(this, "vaultName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVaultName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vaultName", java.util.Objects.requireNonNull(value, "vaultName is required"));
    }

    /**
     */
    public void setVaultName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vaultName", java.util.Objects.requireNonNull(value, "vaultName is required"));
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
    public @org.jetbrains.annotations.Nullable java.lang.Object getEncryptType() {
        return software.amazon.jsii.Kernel.get(this, "encryptType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEncryptType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "encryptType", value);
    }

    /**
     */
    public void setEncryptType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "encryptType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getKmsKeyId() {
        return software.amazon.jsii.Kernel.get(this, "kmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setKmsKeyId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "kmsKeyId", value);
    }

    /**
     */
    public void setKmsKeyId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "kmsKeyId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getRedundancyType() {
        return software.amazon.jsii.Kernel.get(this, "redundancyType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRedundancyType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "redundancyType", value);
    }

    /**
     */
    public void setRedundancyType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "redundancyType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getVaultStorageClass() {
        return software.amazon.jsii.Kernel.get(this, "vaultStorageClass", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setVaultStorageClass(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "vaultStorageClass", value);
    }

    /**
     */
    public void setVaultStorageClass(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "vaultStorageClass", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.hbr.RosReplicationVault}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.hbr.RosReplicationVault> {
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
        private final com.aliyun.ros.cdk.hbr.RosReplicationVaultProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.hbr.RosReplicationVaultProps.Builder();
        }

        /**
         * @return {@code this}
         * @param replicationSourceRegionId This parameter is required.
         */
        public Builder replicationSourceRegionId(final java.lang.String replicationSourceRegionId) {
            this.props.replicationSourceRegionId(replicationSourceRegionId);
            return this;
        }
        /**
         * @return {@code this}
         * @param replicationSourceRegionId This parameter is required.
         */
        public Builder replicationSourceRegionId(final com.aliyun.ros.cdk.core.IResolvable replicationSourceRegionId) {
            this.props.replicationSourceRegionId(replicationSourceRegionId);
            return this;
        }

        /**
         * @return {@code this}
         * @param replicationSourceVaultId This parameter is required.
         */
        public Builder replicationSourceVaultId(final java.lang.String replicationSourceVaultId) {
            this.props.replicationSourceVaultId(replicationSourceVaultId);
            return this;
        }
        /**
         * @return {@code this}
         * @param replicationSourceVaultId This parameter is required.
         */
        public Builder replicationSourceVaultId(final com.aliyun.ros.cdk.core.IResolvable replicationSourceVaultId) {
            this.props.replicationSourceVaultId(replicationSourceVaultId);
            return this;
        }

        /**
         * @return {@code this}
         * @param vaultName This parameter is required.
         */
        public Builder vaultName(final java.lang.String vaultName) {
            this.props.vaultName(vaultName);
            return this;
        }
        /**
         * @return {@code this}
         * @param vaultName This parameter is required.
         */
        public Builder vaultName(final com.aliyun.ros.cdk.core.IResolvable vaultName) {
            this.props.vaultName(vaultName);
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
         * @param encryptType This parameter is required.
         */
        public Builder encryptType(final java.lang.String encryptType) {
            this.props.encryptType(encryptType);
            return this;
        }
        /**
         * @return {@code this}
         * @param encryptType This parameter is required.
         */
        public Builder encryptType(final com.aliyun.ros.cdk.core.IResolvable encryptType) {
            this.props.encryptType(encryptType);
            return this;
        }

        /**
         * @return {@code this}
         * @param kmsKeyId This parameter is required.
         */
        public Builder kmsKeyId(final java.lang.String kmsKeyId) {
            this.props.kmsKeyId(kmsKeyId);
            return this;
        }
        /**
         * @return {@code this}
         * @param kmsKeyId This parameter is required.
         */
        public Builder kmsKeyId(final com.aliyun.ros.cdk.core.IResolvable kmsKeyId) {
            this.props.kmsKeyId(kmsKeyId);
            return this;
        }

        /**
         * @return {@code this}
         * @param redundancyType This parameter is required.
         */
        public Builder redundancyType(final java.lang.String redundancyType) {
            this.props.redundancyType(redundancyType);
            return this;
        }
        /**
         * @return {@code this}
         * @param redundancyType This parameter is required.
         */
        public Builder redundancyType(final com.aliyun.ros.cdk.core.IResolvable redundancyType) {
            this.props.redundancyType(redundancyType);
            return this;
        }

        /**
         * @return {@code this}
         * @param vaultStorageClass This parameter is required.
         */
        public Builder vaultStorageClass(final java.lang.String vaultStorageClass) {
            this.props.vaultStorageClass(vaultStorageClass);
            return this;
        }
        /**
         * @return {@code this}
         * @param vaultStorageClass This parameter is required.
         */
        public Builder vaultStorageClass(final com.aliyun.ros.cdk.core.IResolvable vaultStorageClass) {
            this.props.vaultStorageClass(vaultStorageClass);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.hbr.RosReplicationVault}.
         */
        @Override
        public com.aliyun.ros.cdk.hbr.RosReplicationVault build() {
            return new com.aliyun.ros.cdk.hbr.RosReplicationVault(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
