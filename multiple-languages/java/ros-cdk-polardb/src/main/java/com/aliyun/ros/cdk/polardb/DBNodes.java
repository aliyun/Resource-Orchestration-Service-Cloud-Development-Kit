package com.aliyun.ros.cdk.polardb;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::POLARDB::DBNodes</code>, which is used to add nodes to a PolarDB cluster.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:49.376Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.polardb.$Module.class, fqn = "@alicloud/ros-cdk-polardb.DBNodes")
public class DBNodes extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.polardb.IDBNodes {

    protected DBNodes(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DBNodes(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public DBNodes(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.DBNodesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public DBNodes(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.DBNodesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DBNodeIds: The ID list of added cluster nodes.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbNodeIds() {
        return software.amazon.jsii.Kernel.get(this, "attrDbNodeIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OrderIds: The order ID list of added cluster nodes.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOrderIds() {
        return software.amazon.jsii.Kernel.get(this, "attrOrderIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.polardb.DBNodesProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.polardb.DBNodesProps.class));
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
         * Property dbNodeType: Node type.
         * <p>
         * Ranges: RO|STANDBY|DLNode|RW
         * <p>
         * @return {@code this}
         * @param dbNodeType Property dbNodeType: Node type. This parameter is required.
         */
        public Builder dbNodeType(final java.lang.String dbNodeType) {
            this.props.dbNodeType(dbNodeType);
            return this;
        }
        /**
         * Property dbNodeType: Node type.
         * <p>
         * Ranges: RO|STANDBY|DLNode|RW
         * <p>
         * @return {@code this}
         * @param dbNodeType Property dbNodeType: Node type. This parameter is required.
         */
        public Builder dbNodeType(final com.aliyun.ros.cdk.core.IResolvable dbNodeType) {
            this.props.dbNodeType(dbNodeType);
            return this;
        }

        /**
         * Property endpointBindList: Address IDs that specifies the cluster connection address to which the new node should join.
         * <p>
         * @return {@code this}
         * @param endpointBindList Property endpointBindList: Address IDs that specifies the cluster connection address to which the new node should join. This parameter is required.
         */
        public Builder endpointBindList(final com.aliyun.ros.cdk.core.IResolvable endpointBindList) {
            this.props.endpointBindList(endpointBindList);
            return this;
        }
        /**
         * Property endpointBindList: Address IDs that specifies the cluster connection address to which the new node should join.
         * <p>
         * @return {@code this}
         * @param endpointBindList Property endpointBindList: Address IDs that specifies the cluster connection address to which the new node should join. This parameter is required.
         */
        public Builder endpointBindList(final java.util.List<? extends java.lang.Object> endpointBindList) {
            this.props.endpointBindList(endpointBindList);
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
         * Property plannedEndTime: The latest time at which a new node task can be added to start executing a timed (that is, within the target time period).
         * <p>
         * The format is YYYY-MM-DDThh:mm:ssZ (UTC).
         * <p>
         * @return {@code this}
         * @param plannedEndTime Property plannedEndTime: The latest time at which a new node task can be added to start executing a timed (that is, within the target time period). This parameter is required.
         */
        public Builder plannedEndTime(final java.lang.String plannedEndTime) {
            this.props.plannedEndTime(plannedEndTime);
            return this;
        }
        /**
         * Property plannedEndTime: The latest time at which a new node task can be added to start executing a timed (that is, within the target time period).
         * <p>
         * The format is YYYY-MM-DDThh:mm:ssZ (UTC).
         * <p>
         * @return {@code this}
         * @param plannedEndTime Property plannedEndTime: The latest time at which a new node task can be added to start executing a timed (that is, within the target time period). This parameter is required.
         */
        public Builder plannedEndTime(final com.aliyun.ros.cdk.core.IResolvable plannedEndTime) {
            this.props.plannedEndTime(plannedEndTime);
            return this;
        }

        /**
         * Property plannedStartTime: The earliest time at which a new node task can be added to start executing a timed (that is, within the target time period).
         * <p>
         * The format is YYYY-MM-DDThh:mm:ssZ (UTC).
         * <p>
         * @return {@code this}
         * @param plannedStartTime Property plannedStartTime: The earliest time at which a new node task can be added to start executing a timed (that is, within the target time period). This parameter is required.
         */
        public Builder plannedStartTime(final java.lang.String plannedStartTime) {
            this.props.plannedStartTime(plannedStartTime);
            return this;
        }
        /**
         * Property plannedStartTime: The earliest time at which a new node task can be added to start executing a timed (that is, within the target time period).
         * <p>
         * The format is YYYY-MM-DDThh:mm:ssZ (UTC).
         * <p>
         * @return {@code this}
         * @param plannedStartTime Property plannedStartTime: The earliest time at which a new node task can be added to start executing a timed (that is, within the target time period). This parameter is required.
         */
        public Builder plannedStartTime(final com.aliyun.ros.cdk.core.IResolvable plannedStartTime) {
            this.props.plannedStartTime(plannedStartTime);
            return this;
        }

        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.polardb.DBNodes}.
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
