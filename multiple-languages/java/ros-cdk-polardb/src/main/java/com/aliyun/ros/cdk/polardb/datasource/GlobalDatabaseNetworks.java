package com.aliyun.ros.cdk.polardb.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::POLARDB::GlobalDatabaseNetworks</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-25T03:56:01.392Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.datasource.GlobalDatabaseNetworks")
public class GlobalDatabaseNetworks extends com.aliyun.ros.cdk.core.Resource {

    protected GlobalDatabaseNetworks(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected GlobalDatabaseNetworks(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::POLARDB::GlobalDatabaseNetworks</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public GlobalDatabaseNetworks(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.polardb.datasource.GlobalDatabaseNetworksProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::POLARDB::GlobalDatabaseNetworks</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public GlobalDatabaseNetworks(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.polardb.datasource.GlobalDatabaseNetworksProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>DATASOURCE::POLARDB::GlobalDatabaseNetworks</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public GlobalDatabaseNetworks(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute GdnIds: The list of gdn IDs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGdnIds() {
        return software.amazon.jsii.Kernel.get(this, "attrGdnIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute GlobalDatabaseNetworks: The list of global database networks.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGlobalDatabaseNetworks() {
        return software.amazon.jsii.Kernel.get(this, "attrGlobalDatabaseNetworks", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.polardb.datasource.GlobalDatabaseNetworks}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.polardb.datasource.GlobalDatabaseNetworks> {
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
        private com.aliyun.ros.cdk.polardb.datasource.GlobalDatabaseNetworksProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property dbClusterId: The ID of the cluster.
         * <p>
         * @return {@code this}
         * @param dbClusterId Property dbClusterId: The ID of the cluster. This parameter is required.
         */
        public Builder dbClusterId(final java.lang.String dbClusterId) {
            this.props().dbClusterId(dbClusterId);
            return this;
        }
        /**
         * Property dbClusterId: The ID of the cluster.
         * <p>
         * @return {@code this}
         * @param dbClusterId Property dbClusterId: The ID of the cluster. This parameter is required.
         */
        public Builder dbClusterId(final com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.props().dbClusterId(dbClusterId);
            return this;
        }

        /**
         * Property gdnId: The ID of the GDN.
         * <p>
         * @return {@code this}
         * @param gdnId Property gdnId: The ID of the GDN. This parameter is required.
         */
        public Builder gdnId(final java.lang.String gdnId) {
            this.props().gdnId(gdnId);
            return this;
        }
        /**
         * Property gdnId: The ID of the GDN.
         * <p>
         * @return {@code this}
         * @param gdnId Property gdnId: The ID of the GDN. This parameter is required.
         */
        public Builder gdnId(final com.aliyun.ros.cdk.core.IResolvable gdnId) {
            this.props().gdnId(gdnId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.polardb.datasource.GlobalDatabaseNetworks}.
         */
        @Override
        public com.aliyun.ros.cdk.polardb.datasource.GlobalDatabaseNetworks build() {
            return new com.aliyun.ros.cdk.polardb.datasource.GlobalDatabaseNetworks(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.polardb.datasource.GlobalDatabaseNetworksProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.polardb.datasource.GlobalDatabaseNetworksProps.Builder();
            }
            return this.props;
        }
    }
}
