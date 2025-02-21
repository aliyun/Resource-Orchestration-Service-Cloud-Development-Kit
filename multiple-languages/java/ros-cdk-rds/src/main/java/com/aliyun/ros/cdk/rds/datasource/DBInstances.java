package com.aliyun.ros.cdk.rds.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::RDS::DBInstances</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-02-21T03:23:19.702Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rds.$Module.class, fqn = "@alicloud/ros-cdk-rds.datasource.DBInstances")
public class DBInstances extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.rds.datasource.IDBInstances {

    protected DBInstances(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DBInstances(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public DBInstances(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.rds.datasource.DBInstancesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public DBInstances(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.rds.datasource.DBInstancesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public DBInstances(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute DBInstanceIds: The list of The RDS Database instance Ids.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstanceIds() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstanceIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DBInstances: The list of The RDS Database instances.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDbInstances() {
        return software.amazon.jsii.Kernel.get(this, "attrDbInstances", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rds.datasource.DBInstancesProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.rds.datasource.DBInstancesProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.rds.datasource.DBInstances}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.rds.datasource.DBInstances> {
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
        private com.aliyun.ros.cdk.rds.datasource.DBInstancesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property connectionMode: The connection mode of the instance.
         * <p>
         * @return {@code this}
         * @param connectionMode Property connectionMode: The connection mode of the instance. This parameter is required.
         */
        public Builder connectionMode(final java.lang.String connectionMode) {
            this.props().connectionMode(connectionMode);
            return this;
        }
        /**
         * Property connectionMode: The connection mode of the instance.
         * <p>
         * @return {@code this}
         * @param connectionMode Property connectionMode: The connection mode of the instance. This parameter is required.
         */
        public Builder connectionMode(final com.aliyun.ros.cdk.core.IResolvable connectionMode) {
            this.props().connectionMode(connectionMode);
            return this;
        }

        /**
         * Property connectionString: The endpoint of the instance.
         * <p>
         * @return {@code this}
         * @param connectionString Property connectionString: The endpoint of the instance. This parameter is required.
         */
        public Builder connectionString(final java.lang.String connectionString) {
            this.props().connectionString(connectionString);
            return this;
        }
        /**
         * Property connectionString: The endpoint of the instance.
         * <p>
         * @return {@code this}
         * @param connectionString Property connectionString: The endpoint of the instance. This parameter is required.
         */
        public Builder connectionString(final com.aliyun.ros.cdk.core.IResolvable connectionString) {
            this.props().connectionString(connectionString);
            return this;
        }

        /**
         * Property dbInstanceClass: The instance type of the instances.
         * <p>
         * @return {@code this}
         * @param dbInstanceClass Property dbInstanceClass: The instance type of the instances. This parameter is required.
         */
        public Builder dbInstanceClass(final java.lang.String dbInstanceClass) {
            this.props().dbInstanceClass(dbInstanceClass);
            return this;
        }
        /**
         * Property dbInstanceClass: The instance type of the instances.
         * <p>
         * @return {@code this}
         * @param dbInstanceClass Property dbInstanceClass: The instance type of the instances. This parameter is required.
         */
        public Builder dbInstanceClass(final com.aliyun.ros.cdk.core.IResolvable dbInstanceClass) {
            this.props().dbInstanceClass(dbInstanceClass);
            return this;
        }

        /**
         * Property dbInstanceId: The ID of the instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: The ID of the instance. This parameter is required.
         */
        public Builder dbInstanceId(final java.lang.String dbInstanceId) {
            this.props().dbInstanceId(dbInstanceId);
            return this;
        }
        /**
         * Property dbInstanceId: The ID of the instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceId Property dbInstanceId: The ID of the instance. This parameter is required.
         */
        public Builder dbInstanceId(final com.aliyun.ros.cdk.core.IResolvable dbInstanceId) {
            this.props().dbInstanceId(dbInstanceId);
            return this;
        }

        /**
         * Property dbInstanceStatus: The status of the instances.
         * <p>
         * @return {@code this}
         * @param dbInstanceStatus Property dbInstanceStatus: The status of the instances. This parameter is required.
         */
        public Builder dbInstanceStatus(final java.lang.String dbInstanceStatus) {
            this.props().dbInstanceStatus(dbInstanceStatus);
            return this;
        }
        /**
         * Property dbInstanceStatus: The status of the instances.
         * <p>
         * @return {@code this}
         * @param dbInstanceStatus Property dbInstanceStatus: The status of the instances. This parameter is required.
         */
        public Builder dbInstanceStatus(final com.aliyun.ros.cdk.core.IResolvable dbInstanceStatus) {
            this.props().dbInstanceStatus(dbInstanceStatus);
            return this;
        }

        /**
         * Property dbInstanceType: The role of the instances.
         * <p>
         * @return {@code this}
         * @param dbInstanceType Property dbInstanceType: The role of the instances. This parameter is required.
         */
        public Builder dbInstanceType(final java.lang.String dbInstanceType) {
            this.props().dbInstanceType(dbInstanceType);
            return this;
        }
        /**
         * Property dbInstanceType: The role of the instances.
         * <p>
         * @return {@code this}
         * @param dbInstanceType Property dbInstanceType: The role of the instances. This parameter is required.
         */
        public Builder dbInstanceType(final com.aliyun.ros.cdk.core.IResolvable dbInstanceType) {
            this.props().dbInstanceType(dbInstanceType);
            return this;
        }

        /**
         * Property dedicatedHostGroupId: The ID of the dedicated cluster to which the instances belong.
         * <p>
         * @return {@code this}
         * @param dedicatedHostGroupId Property dedicatedHostGroupId: The ID of the dedicated cluster to which the instances belong. This parameter is required.
         */
        public Builder dedicatedHostGroupId(final java.lang.String dedicatedHostGroupId) {
            this.props().dedicatedHostGroupId(dedicatedHostGroupId);
            return this;
        }
        /**
         * Property dedicatedHostGroupId: The ID of the dedicated cluster to which the instances belong.
         * <p>
         * @return {@code this}
         * @param dedicatedHostGroupId Property dedicatedHostGroupId: The ID of the dedicated cluster to which the instances belong. This parameter is required.
         */
        public Builder dedicatedHostGroupId(final com.aliyun.ros.cdk.core.IResolvable dedicatedHostGroupId) {
            this.props().dedicatedHostGroupId(dedicatedHostGroupId);
            return this;
        }

        /**
         * Property dedicatedHostId: The ID of the host to which the instances belong in the specified dedicated cluster.
         * <p>
         * @return {@code this}
         * @param dedicatedHostId Property dedicatedHostId: The ID of the host to which the instances belong in the specified dedicated cluster. This parameter is required.
         */
        public Builder dedicatedHostId(final java.lang.String dedicatedHostId) {
            this.props().dedicatedHostId(dedicatedHostId);
            return this;
        }
        /**
         * Property dedicatedHostId: The ID of the host to which the instances belong in the specified dedicated cluster.
         * <p>
         * @return {@code this}
         * @param dedicatedHostId Property dedicatedHostId: The ID of the host to which the instances belong in the specified dedicated cluster. This parameter is required.
         */
        public Builder dedicatedHostId(final com.aliyun.ros.cdk.core.IResolvable dedicatedHostId) {
            this.props().dedicatedHostId(dedicatedHostId);
            return this;
        }

        /**
         * Property engine: The database engine that is run by the instances.
         * <p>
         * @return {@code this}
         * @param engine Property engine: The database engine that is run by the instances. This parameter is required.
         */
        public Builder engine(final java.lang.String engine) {
            this.props().engine(engine);
            return this;
        }
        /**
         * Property engine: The database engine that is run by the instances.
         * <p>
         * @return {@code this}
         * @param engine Property engine: The database engine that is run by the instances. This parameter is required.
         */
        public Builder engine(final com.aliyun.ros.cdk.core.IResolvable engine) {
            this.props().engine(engine);
            return this;
        }

        /**
         * Property engineVersion: The version of the database engine that is run by the instances.
         * <p>
         * @return {@code this}
         * @param engineVersion Property engineVersion: The version of the database engine that is run by the instances. This parameter is required.
         */
        public Builder engineVersion(final java.lang.String engineVersion) {
            this.props().engineVersion(engineVersion);
            return this;
        }
        /**
         * Property engineVersion: The version of the database engine that is run by the instances.
         * <p>
         * @return {@code this}
         * @param engineVersion Property engineVersion: The version of the database engine that is run by the instances. This parameter is required.
         */
        public Builder engineVersion(final com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.props().engineVersion(engineVersion);
            return this;
        }

        /**
         * Property expired: Specifies whether the instances have expired.
         * <p>
         * @return {@code this}
         * @param expired Property expired: Specifies whether the instances have expired. This parameter is required.
         */
        public Builder expired(final java.lang.String expired) {
            this.props().expired(expired);
            return this;
        }
        /**
         * Property expired: Specifies whether the instances have expired.
         * <p>
         * @return {@code this}
         * @param expired Property expired: Specifies whether the instances have expired. This parameter is required.
         */
        public Builder expired(final com.aliyun.ros.cdk.core.IResolvable expired) {
            this.props().expired(expired);
            return this;
        }

        /**
         * Property instanceLevel: Specifies whether to return the RDS editions of the instances by using the Category parameter.
         * <p>
         * @return {@code this}
         * @param instanceLevel Property instanceLevel: Specifies whether to return the RDS editions of the instances by using the Category parameter. This parameter is required.
         */
        public Builder instanceLevel(final java.lang.Number instanceLevel) {
            this.props().instanceLevel(instanceLevel);
            return this;
        }
        /**
         * Property instanceLevel: Specifies whether to return the RDS editions of the instances by using the Category parameter.
         * <p>
         * @return {@code this}
         * @param instanceLevel Property instanceLevel: Specifies whether to return the RDS editions of the instances by using the Category parameter. This parameter is required.
         */
        public Builder instanceLevel(final com.aliyun.ros.cdk.core.IResolvable instanceLevel) {
            this.props().instanceLevel(instanceLevel);
            return this;
        }

        /**
         * Property instanceNetworkType: The network type of the instances.
         * <p>
         * @return {@code this}
         * @param instanceNetworkType Property instanceNetworkType: The network type of the instances. This parameter is required.
         */
        public Builder instanceNetworkType(final java.lang.String instanceNetworkType) {
            this.props().instanceNetworkType(instanceNetworkType);
            return this;
        }
        /**
         * Property instanceNetworkType: The network type of the instances.
         * <p>
         * @return {@code this}
         * @param instanceNetworkType Property instanceNetworkType: The network type of the instances. This parameter is required.
         */
        public Builder instanceNetworkType(final com.aliyun.ros.cdk.core.IResolvable instanceNetworkType) {
            this.props().instanceNetworkType(instanceNetworkType);
            return this;
        }

        /**
         * Property payType: The billing method of the instances.
         * <p>
         * @return {@code this}
         * @param payType Property payType: The billing method of the instances. This parameter is required.
         */
        public Builder payType(final java.lang.String payType) {
            this.props().payType(payType);
            return this;
        }
        /**
         * Property payType: The billing method of the instances.
         * <p>
         * @return {@code this}
         * @param payType Property payType: The billing method of the instances. This parameter is required.
         */
        public Builder payType(final com.aliyun.ros.cdk.core.IResolvable payType) {
            this.props().payType(payType);
            return this;
        }

        /**
         * Property proxyId: The ID of the proxy mode.
         * <p>
         * @return {@code this}
         * @param proxyId Property proxyId: The ID of the proxy mode. This parameter is required.
         */
        public Builder proxyId(final java.lang.String proxyId) {
            this.props().proxyId(proxyId);
            return this;
        }
        /**
         * Property proxyId: The ID of the proxy mode.
         * <p>
         * @return {@code this}
         * @param proxyId Property proxyId: The ID of the proxy mode. This parameter is required.
         */
        public Builder proxyId(final com.aliyun.ros.cdk.core.IResolvable proxyId) {
            this.props().proxyId(proxyId);
            return this;
        }

        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final java.lang.String refreshOptions) {
            this.props().refreshOptions(refreshOptions);
            return this;
        }
        /**
         * Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li>Never: Never refresh the datasource resource when the stack is updated.</li>
         * <li>Always: Always refresh the datasource resource when the stack is updated.
         * Default is Never.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param refreshOptions Property refreshOptions: The refresh strategy for the datasource resource when the stack is updated. This parameter is required.
         */
        public Builder refreshOptions(final com.aliyun.ros.cdk.core.IResolvable refreshOptions) {
            this.props().refreshOptions(refreshOptions);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group to which the instances belong.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the instances belong. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group to which the instances belong.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the instances belong. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property searchKey: The keywords that are contained in the IDs or descriptions of the instances.
         * <p>
         * @return {@code this}
         * @param searchKey Property searchKey: The keywords that are contained in the IDs or descriptions of the instances. This parameter is required.
         */
        public Builder searchKey(final java.lang.String searchKey) {
            this.props().searchKey(searchKey);
            return this;
        }
        /**
         * Property searchKey: The keywords that are contained in the IDs or descriptions of the instances.
         * <p>
         * @return {@code this}
         * @param searchKey Property searchKey: The keywords that are contained in the IDs or descriptions of the instances. This parameter is required.
         */
        public Builder searchKey(final com.aliyun.ros.cdk.core.IResolvable searchKey) {
            this.props().searchKey(searchKey);
            return this;
        }

        /**
         * Property vpcId: The ID of the virtual private cloud (VPC) to which the instances belong.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC) to which the instances belong. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props().vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The ID of the virtual private cloud (VPC) to which the instances belong.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the virtual private cloud (VPC) to which the instances belong. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props().vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: The ID of the vSwitch that is associated with the specified VPC.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch that is associated with the specified VPC. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props().vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The ID of the vSwitch that is associated with the specified VPC.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch that is associated with the specified VPC. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props().vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property zoneId: The ID of the zone to which the instances belong.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of the zone to which the instances belong. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props().zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The ID of the zone to which the instances belong.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of the zone to which the instances belong. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props().zoneId(zoneId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.rds.datasource.DBInstances}.
         */
        @Override
        public com.aliyun.ros.cdk.rds.datasource.DBInstances build() {
            return new com.aliyun.ros.cdk.rds.datasource.DBInstances(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.rds.datasource.DBInstancesProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.rds.datasource.DBInstancesProps.Builder();
            }
            return this.props;
        }
    }
}
