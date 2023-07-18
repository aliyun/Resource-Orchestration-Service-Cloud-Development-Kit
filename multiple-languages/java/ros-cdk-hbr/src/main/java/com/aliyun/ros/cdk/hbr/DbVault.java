package com.aliyun.ros.cdk.hbr;

/**
 * A ROS resource type:  <code>ALIYUN::HBR::DbVault</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-18T08:28:02.353Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.DbVault")
public class DbVault extends com.aliyun.ros.cdk.core.Resource {

    protected DbVault(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DbVault(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::HBR::DbVault</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public DbVault(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.DbVaultProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::HBR::DbVault</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public DbVault(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.DbVaultProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Description: Description of the vault.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RetentionDays: Data retention days of the vault.
     * <p>
     * Data will be deleted when it's older than this time.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRetentionDays() {
        return software.amazon.jsii.Kernel.get(this, "attrRetentionDays", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VaultId: Vault ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVaultId() {
        return software.amazon.jsii.Kernel.get(this, "attrVaultId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VaultName: Display name of the vault.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVaultName() {
        return software.amazon.jsii.Kernel.get(this, "attrVaultName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute VaultRegionId: The region ID to create the vault.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVaultRegionId() {
        return software.amazon.jsii.Kernel.get(this, "attrVaultRegionId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.hbr.DbVault}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.hbr.DbVault> {
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
        private final com.aliyun.ros.cdk.hbr.DbVaultProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.hbr.DbVaultProps.Builder();
        }

        /**
         * Property retentionDays: Data retention days of the vault.
         * <p>
         * Data will be deleted when it's older than this time.
         * <p>
         * @return {@code this}
         * @param retentionDays Property retentionDays: Data retention days of the vault. This parameter is required.
         */
        public Builder retentionDays(final java.lang.Number retentionDays) {
            this.props.retentionDays(retentionDays);
            return this;
        }
        /**
         * Property retentionDays: Data retention days of the vault.
         * <p>
         * Data will be deleted when it's older than this time.
         * <p>
         * @return {@code this}
         * @param retentionDays Property retentionDays: Data retention days of the vault. This parameter is required.
         */
        public Builder retentionDays(final com.aliyun.ros.cdk.core.IResolvable retentionDays) {
            this.props.retentionDays(retentionDays);
            return this;
        }

        /**
         * Property vaultName: Display name of the vault.
         * <p>
         * @return {@code this}
         * @param vaultName Property vaultName: Display name of the vault. This parameter is required.
         */
        public Builder vaultName(final java.lang.String vaultName) {
            this.props.vaultName(vaultName);
            return this;
        }
        /**
         * Property vaultName: Display name of the vault.
         * <p>
         * @return {@code this}
         * @param vaultName Property vaultName: Display name of the vault. This parameter is required.
         */
        public Builder vaultName(final com.aliyun.ros.cdk.core.IResolvable vaultName) {
            this.props.vaultName(vaultName);
            return this;
        }

        /**
         * Property vaultRegionId: The region ID to create the vault.
         * <p>
         * @return {@code this}
         * @param vaultRegionId Property vaultRegionId: The region ID to create the vault. This parameter is required.
         */
        public Builder vaultRegionId(final java.lang.String vaultRegionId) {
            this.props.vaultRegionId(vaultRegionId);
            return this;
        }
        /**
         * Property vaultRegionId: The region ID to create the vault.
         * <p>
         * @return {@code this}
         * @param vaultRegionId Property vaultRegionId: The region ID to create the vault. This parameter is required.
         */
        public Builder vaultRegionId(final com.aliyun.ros.cdk.core.IResolvable vaultRegionId) {
            this.props.vaultRegionId(vaultRegionId);
            return this;
        }

        /**
         * Property description: Description of the vault.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the vault. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Description of the vault.
         * <p>
         * @return {@code this}
         * @param description Property description: Description of the vault. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property tags: Tags to attach to instance.
         * <p>
         * Max support 20 tags to add during create instance. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.hbr.RosDbVault.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.hbr.DbVault}.
         */
        @Override
        public com.aliyun.ros.cdk.hbr.DbVault build() {
            return new com.aliyun.ros.cdk.hbr.DbVault(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
