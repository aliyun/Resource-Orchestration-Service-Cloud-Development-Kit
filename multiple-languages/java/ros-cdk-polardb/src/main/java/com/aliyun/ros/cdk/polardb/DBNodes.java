package com.aliyun.ros.cdk.polardb;

/**
 * A ROS resource type:  `ALIYUN::POLARDB::DBNodes`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.62.0 (build 293ac17)", date = "2022-07-21T02:24:25.958Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.DBNodes")
public class DBNodes extends com.aliyun.ros.cdk.core.Resource {

    protected DBNodes(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DBNodes(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::POLARDB::DBNodes`.
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
    public DBNodes(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.DBNodesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::POLARDB::DBNodes`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public DBNodes(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.DBNodesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DBNodeIds: The ID list of added cluster nodes.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDbNodeIds() {
        return software.amazon.jsii.Kernel.get(this, "attrDbNodeIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute OrderIds: The order ID list of added cluster nodes.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrOrderIds() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.polardb.DBNodes}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.polardb.DBNodes> {
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
        private final com.aliyun.ros.cdk.polardb.DBNodesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.polardb.DBNodesProps.Builder();
        }

        /**
         * Property amount: Number of nodes to be added to cluster.
         * <p>
         * @return {@code this}
         * @param amount Property amount: Number of nodes to be added to cluster. This parameter is required.
         */
        public Builder amount(final java.lang.Number amount) {
            this.props.amount(amount);
            return this;
        }
        /**
         * Property amount: Number of nodes to be added to cluster.
         * <p>
         * @return {@code this}
         * @param amount Property amount: Number of nodes to be added to cluster. This parameter is required.
         */
        public Builder amount(final com.aliyun.ros.cdk.core.IResolvable amount) {
            this.props.amount(amount);
            return this;
        }

        /**
         * Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to be added nodes to.
         * <p>
         * @return {@code this}
         * @param dbClusterId Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to be added nodes to. This parameter is required.
         */
        public Builder dbClusterId(final java.lang.String dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }
        /**
         * Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to be added nodes to.
         * <p>
         * @return {@code this}
         * @param dbClusterId Property dbClusterId: The ID of the ApsaraDB for POLARDB cluster to be added nodes to. This parameter is required.
         */
        public Builder dbClusterId(final com.aliyun.ros.cdk.core.IResolvable dbClusterId) {
            this.props.dbClusterId(dbClusterId);
            return this;
        }

        /**
         * Property imciSwitch: Specifies whether to enable the In-Memory Column Index (IMCI) feature.
         * <p>
         * @return {@code this}
         * @param imciSwitch Property imciSwitch: Specifies whether to enable the In-Memory Column Index (IMCI) feature. This parameter is required.
         */
        public Builder imciSwitch(final java.lang.String imciSwitch) {
            this.props.imciSwitch(imciSwitch);
            return this;
        }
        /**
         * Property imciSwitch: Specifies whether to enable the In-Memory Column Index (IMCI) feature.
         * <p>
         * @return {@code this}
         * @param imciSwitch Property imciSwitch: Specifies whether to enable the In-Memory Column Index (IMCI) feature. This parameter is required.
         */
        public Builder imciSwitch(final com.aliyun.ros.cdk.core.IResolvable imciSwitch) {
            this.props.imciSwitch(imciSwitch);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.polardb.DBNodes}.
         */
        @Override
        public com.aliyun.ros.cdk.polardb.DBNodes build() {
            return new com.aliyun.ros.cdk.polardb.DBNodes(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
