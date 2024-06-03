package com.aliyun.ros.cdk.hbr.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::HBR::Vaults</code>, which is used to query the basic information about backup vaults.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:52.600Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hbr.$Module.class, fqn = "@alicloud/ros-cdk-hbr.datasource.Vaults")
public class Vaults extends com.aliyun.ros.cdk.core.Resource {

    protected Vaults(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Vaults(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public Vaults(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.hbr.datasource.VaultsProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public Vaults(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.hbr.datasource.VaultsProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Vaults(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute VaultIds: The list of vault IDs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVaultIds() {
        return software.amazon.jsii.Kernel.get(this, "attrVaultIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Vaults: The list of vaults.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrVaults() {
        return software.amazon.jsii.Kernel.get(this, "attrVaults", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.datasource.VaultsProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.hbr.datasource.VaultsProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.hbr.datasource.VaultsProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.hbr.datasource.Vaults}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.hbr.datasource.Vaults> {
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
        private com.aliyun.ros.cdk.hbr.datasource.VaultsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property vaultId: VaultId.
         * <p>
         * @return {@code this}
         * @param vaultId Property vaultId: VaultId. This parameter is required.
         */
        public Builder vaultId(final java.lang.String vaultId) {
            this.props().vaultId(vaultId);
            return this;
        }
        /**
         * Property vaultId: VaultId.
         * <p>
         * @return {@code this}
         * @param vaultId Property vaultId: VaultId. This parameter is required.
         */
        public Builder vaultId(final com.aliyun.ros.cdk.core.IResolvable vaultId) {
            this.props().vaultId(vaultId);
            return this;
        }

        /**
         * Property vaultType: Vault type.
         * <p>
         * Value
         * <p>
         * <ul>
         * <li><strong>STANDARD</strong>, which indicates a common backup vault.</li>
         * <li><strong>OTS_BACKUP</strong>, indicating OTS backup vault.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param vaultType Property vaultType: Vault type. This parameter is required.
         */
        public Builder vaultType(final java.lang.String vaultType) {
            this.props().vaultType(vaultType);
            return this;
        }
        /**
         * Property vaultType: Vault type.
         * <p>
         * Value
         * <p>
         * <ul>
         * <li><strong>STANDARD</strong>, which indicates a common backup vault.</li>
         * <li><strong>OTS_BACKUP</strong>, indicating OTS backup vault.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param vaultType Property vaultType: Vault type. This parameter is required.
         */
        public Builder vaultType(final com.aliyun.ros.cdk.core.IResolvable vaultType) {
            this.props().vaultType(vaultType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.hbr.datasource.Vaults}.
         */
        @Override
        public com.aliyun.ros.cdk.hbr.datasource.Vaults build() {
            return new com.aliyun.ros.cdk.hbr.datasource.Vaults(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.hbr.datasource.VaultsProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.hbr.datasource.VaultsProps.Builder();
            }
            return this.props;
        }
    }
}
