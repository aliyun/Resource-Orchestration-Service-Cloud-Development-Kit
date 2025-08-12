package com.aliyun.ros.cdk.rds;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::RDS::DBProxy</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:49.817Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.DBProxy")
public class DBProxy extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.rds.IDBProxy {

    protected DBProxy(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DBProxy(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public DBProxy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.DBProxyProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public DBProxy(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.DBProxyProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.DBProxyProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.rds.DBProxyProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.rds.DBProxy}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.rds.DBProxy> {
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
        private final com.aliyun.ros.cdk.rds.DBProxyProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.rds.DBProxyProps.Builder();
        }

        /**
         * Property dbInstanceId: Instance ID of the DB.
         * <p>
         * DescribeDBInstances can be called to get it.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: Instance ID of the DB. This parameter is required.
         */
        public Builder dbInstanceId(final java.lang.String dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }
        /**
         * Property dbInstanceId: Instance ID of the DB.
         * <p>
         * DescribeDBInstances can be called to get it.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: Instance ID of the DB. This parameter is required.
         */
        public Builder dbInstanceId(final com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.props.dbInstanceId(dbInstanceId);
            return this;
        }

        /**
         * Property vpcId: The VPC ID to which the instance belongs.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The VPC ID to which the instance belongs. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The VPC ID to which the instance belongs.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The VPC ID to which the instance belongs. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: The virtual switch ID to which the instance belongs.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The virtual switch ID to which the instance belongs. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The virtual switch ID to which the instance belongs.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The virtual switch ID to which the instance belongs. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property dbProxyInstanceNum: The number of activated proxy instances, the value is: 1~16.Default value: 1. Description More proxy instances can handle more requests, you can understand the load of proxy instances based on the monitoring data, and then set a reasonable number of proxy instances.
         * <p>
         * @return {@code this}
         * @param dbProxyInstanceNum Property dbProxyInstanceNum: The number of activated proxy instances, the value is: 1~16.Default value: 1. Description More proxy instances can handle more requests, you can understand the load of proxy instances based on the monitoring data, and then set a reasonable number of proxy instances. This parameter is required.
         */
        public Builder dbProxyInstanceNum(final java.lang.Number dbProxyInstanceNum) {
            this.props.dbProxyInstanceNum(dbProxyInstanceNum);
            return this;
        }
        /**
         * Property dbProxyInstanceNum: The number of activated proxy instances, the value is: 1~16.Default value: 1. Description More proxy instances can handle more requests, you can understand the load of proxy instances based on the monitoring data, and then set a reasonable number of proxy instances.
         * <p>
         * @return {@code this}
         * @param dbProxyInstanceNum Property dbProxyInstanceNum: The number of activated proxy instances, the value is: 1~16.Default value: 1. Description More proxy instances can handle more requests, you can understand the load of proxy instances based on the monitoring data, and then set a reasonable number of proxy instances. This parameter is required.
         */
        public Builder dbProxyInstanceNum(final com.aliyun.ros.cdk.core.IResolvable dbProxyInstanceNum) {
            this.props.dbProxyInstanceNum(dbProxyInstanceNum);
            return this;
        }

        /**
         * Property dbProxyInstanceType: Database proxy instance type, value: common: general-purpose agent exclusive: exclusive proxy (default).
         * <p>
         * @return {@code this}
         * @param dbProxyInstanceType Property dbProxyInstanceType: Database proxy instance type, value: common: general-purpose agent exclusive: exclusive proxy (default). This parameter is required.
         */
        public Builder dbProxyInstanceType(final java.lang.String dbProxyInstanceType) {
            this.props.dbProxyInstanceType(dbProxyInstanceType);
            return this;
        }
        /**
         * Property dbProxyInstanceType: Database proxy instance type, value: common: general-purpose agent exclusive: exclusive proxy (default).
         * <p>
         * @return {@code this}
         * @param dbProxyInstanceType Property dbProxyInstanceType: Database proxy instance type, value: common: general-purpose agent exclusive: exclusive proxy (default). This parameter is required.
         */
        public Builder dbProxyInstanceType(final com.aliyun.ros.cdk.core.IResolvable dbProxyInstanceType) {
            this.props.dbProxyInstanceType(dbProxyInstanceType);
            return this;
        }

        /**
         * Property dbProxyNodes: List of proxy nodes.
         * <p>
         * @return {@code this}
         * @param dbProxyNodes Property dbProxyNodes: List of proxy nodes. This parameter is required.
         */
        public Builder dbProxyNodes(final com.aliyun.ros.cdk.core.IResolvable dbProxyNodes) {
            this.props.dbProxyNodes(dbProxyNodes);
            return this;
        }
        /**
         * Property dbProxyNodes: List of proxy nodes.
         * <p>
         * @return {@code this}
         * @param dbProxyNodes Property dbProxyNodes: List of proxy nodes. This parameter is required.
         */
        public Builder dbProxyNodes(final java.util.List<? extends java.lang.Object> dbProxyNodes) {
            this.props.dbProxyNodes(dbProxyNodes);
            return this;
        }

        /**
         * Property persistentConnectionStatus: Whether to enable connection hold.Value: Enabled: Turn on connection hold Disabled: Close connection hold illustrate Only RDS MySQL supports this parameter. When modifying the connection remains, the ConfigDBProxyService value is Modify.
         * <p>
         * @return {@code this}
         * @param persistentConnectionStatus Property persistentConnectionStatus: Whether to enable connection hold.Value: Enabled: Turn on connection hold Disabled: Close connection hold illustrate Only RDS MySQL supports this parameter. When modifying the connection remains, the ConfigDBProxyService value is Modify. This parameter is required.
         */
        public Builder persistentConnectionStatus(final java.lang.String persistentConnectionStatus) {
            this.props.persistentConnectionStatus(persistentConnectionStatus);
            return this;
        }
        /**
         * Property persistentConnectionStatus: Whether to enable connection hold.Value: Enabled: Turn on connection hold Disabled: Close connection hold illustrate Only RDS MySQL supports this parameter. When modifying the connection remains, the ConfigDBProxyService value is Modify.
         * <p>
         * @return {@code this}
         * @param persistentConnectionStatus Property persistentConnectionStatus: Whether to enable connection hold.Value: Enabled: Turn on connection hold Disabled: Close connection hold illustrate Only RDS MySQL supports this parameter. When modifying the connection remains, the ConfigDBProxyService value is Modify. This parameter is required.
         */
        public Builder persistentConnectionStatus(final com.aliyun.ros.cdk.core.IResolvable persistentConnectionStatus) {
            this.props.persistentConnectionStatus(persistentConnectionStatus);
            return this;
        }

        /**
         * Property resourceGroupId: Resource Group ID.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource Group ID. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource Group ID.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource Group ID. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.rds.DBProxy}.
         */
        @Override
        public com.aliyun.ros.cdk.rds.DBProxy build() {
            return new com.aliyun.ros.cdk.rds.DBProxy(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
