package com.aliyun.ros.cdk.mongodb.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::MONGODB::Instances</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T10:01:46.659Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mongodb.$Module.class, fqn = "@alicloud/ros-cdk-mongodb.datasource.Instances")
public class Instances extends com.aliyun.ros.cdk.core.Resource {

    protected Instances(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Instances(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::MONGODB::Instances</code>.
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
    public Instances(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.mongodb.datasource.InstancesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::MONGODB::Instances</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public Instances(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.mongodb.datasource.InstancesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>DATASOURCE::MONGODB::Instances</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Instances(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute InstanceIds: The list of The instance Ids.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceIds() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Instances: The list of The instances.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstances() {
        return software.amazon.jsii.Kernel.get(this, "attrInstances", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.mongodb.datasource.Instances}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mongodb.datasource.Instances> {
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
        private com.aliyun.ros.cdk.mongodb.datasource.InstancesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property chargeType: The billing method of the instance.
         * <p>
         * Valid values:
         * PostPaid: pay-as-you-go
         * PrePaid: subscription
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: The billing method of the instance. This parameter is required.
         */
        public Builder chargeType(final java.lang.String chargeType) {
            this.props().chargeType(chargeType);
            return this;
        }
        /**
         * Property chargeType: The billing method of the instance.
         * <p>
         * Valid values:
         * PostPaid: pay-as-you-go
         * PrePaid: subscription
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: The billing method of the instance. This parameter is required.
         */
        public Builder chargeType(final com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.props().chargeType(chargeType);
            return this;
        }

        /**
         * Property connectionDomain: The endpoint of the node.
         * <p>
         * You can call the DescribeDBInstanceAttribute operation to query the endpoint of the node.
         * <p>
         * @return {@code this}
         * @param connectionDomain Property connectionDomain: The endpoint of the node. This parameter is required.
         */
        public Builder connectionDomain(final java.lang.String connectionDomain) {
            this.props().connectionDomain(connectionDomain);
            return this;
        }
        /**
         * Property connectionDomain: The endpoint of the node.
         * <p>
         * You can call the DescribeDBInstanceAttribute operation to query the endpoint of the node.
         * <p>
         * @return {@code this}
         * @param connectionDomain Property connectionDomain: The endpoint of the node. This parameter is required.
         */
        public Builder connectionDomain(final com.aliyun.ros.cdk.core.IResolvable connectionDomain) {
            this.props().connectionDomain(connectionDomain);
            return this;
        }

        /**
         * Property dbInstanceClass: The instance type.
         * <p>
         * For more information about valid values, see Instance types.
         * <p>
         * @return {@code this}
         * @param dbInstanceClass Property dbInstanceClass: The instance type. This parameter is required.
         */
        public Builder dbInstanceClass(final java.lang.String dbInstanceClass) {
            this.props().dbInstanceClass(dbInstanceClass);
            return this;
        }
        /**
         * Property dbInstanceClass: The instance type.
         * <p>
         * For more information about valid values, see Instance types.
         * <p>
         * @return {@code this}
         * @param dbInstanceClass Property dbInstanceClass: The instance type. This parameter is required.
         */
        public Builder dbInstanceClass(final com.aliyun.ros.cdk.core.IResolvable dbInstanceClass) {
            this.props().dbInstanceClass(dbInstanceClass);
            return this;
        }

        /**
         * Property dbInstanceDescription: The description of the instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceDescription Property dbInstanceDescription: The description of the instance. This parameter is required.
         */
        public Builder dbInstanceDescription(final java.lang.String dbInstanceDescription) {
            this.props().dbInstanceDescription(dbInstanceDescription);
            return this;
        }
        /**
         * Property dbInstanceDescription: The description of the instance.
         * <p>
         * @return {@code this}
         * @param dbInstanceDescription Property dbInstanceDescription: The description of the instance. This parameter is required.
         */
        public Builder dbInstanceDescription(final com.aliyun.ros.cdk.core.IResolvable dbInstanceDescription) {
            this.props().dbInstanceDescription(dbInstanceDescription);
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
         * Property dbInstanceStatus: The state of the instance.
         * <p>
         * For more information about valid values, see Instance states.
         * <p>
         * @return {@code this}
         * @param dbInstanceStatus Property dbInstanceStatus: The state of the instance. This parameter is required.
         */
        public Builder dbInstanceStatus(final java.lang.String dbInstanceStatus) {
            this.props().dbInstanceStatus(dbInstanceStatus);
            return this;
        }
        /**
         * Property dbInstanceStatus: The state of the instance.
         * <p>
         * For more information about valid values, see Instance states.
         * <p>
         * @return {@code this}
         * @param dbInstanceStatus Property dbInstanceStatus: The state of the instance. This parameter is required.
         */
        public Builder dbInstanceStatus(final com.aliyun.ros.cdk.core.IResolvable dbInstanceStatus) {
            this.props().dbInstanceStatus(dbInstanceStatus);
            return this;
        }

        /**
         * Property dbInstanceType: The category of the instance.
         * <p>
         * Default value: replicate. Valid values:
         * sharding: sharded cluster instance
         * replicate: replica set or standalone instance
         * Note
         * To query the list of sharded cluster instances, you must set the parameter to sharding.
         * This operation displays the list of replica set and standalone instances when the parameter uses the default value replicate.
         * <p>
         * @return {@code this}
         * @param dbInstanceType Property dbInstanceType: The category of the instance. This parameter is required.
         */
        public Builder dbInstanceType(final java.lang.String dbInstanceType) {
            this.props().dbInstanceType(dbInstanceType);
            return this;
        }
        /**
         * Property dbInstanceType: The category of the instance.
         * <p>
         * Default value: replicate. Valid values:
         * sharding: sharded cluster instance
         * replicate: replica set or standalone instance
         * Note
         * To query the list of sharded cluster instances, you must set the parameter to sharding.
         * This operation displays the list of replica set and standalone instances when the parameter uses the default value replicate.
         * <p>
         * @return {@code this}
         * @param dbInstanceType Property dbInstanceType: The category of the instance. This parameter is required.
         */
        public Builder dbInstanceType(final com.aliyun.ros.cdk.core.IResolvable dbInstanceType) {
            this.props().dbInstanceType(dbInstanceType);
            return this;
        }

        /**
         * Property engineVersion: The database engine version of the instance.
         * <p>
         * Valid values:
         * 5.0
         * 4.4
         * 4.2
         * 4.0
         * 3.4
         * <p>
         * @return {@code this}
         * @param engineVersion Property engineVersion: The database engine version of the instance. This parameter is required.
         */
        public Builder engineVersion(final java.lang.String engineVersion) {
            this.props().engineVersion(engineVersion);
            return this;
        }
        /**
         * Property engineVersion: The database engine version of the instance.
         * <p>
         * Valid values:
         * 5.0
         * 4.4
         * 4.2
         * 4.0
         * 3.4
         * <p>
         * @return {@code this}
         * @param engineVersion Property engineVersion: The database engine version of the instance. This parameter is required.
         */
        public Builder engineVersion(final com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.props().engineVersion(engineVersion);
            return this;
        }

        /**
         * Property expired: Specifies whether the instance expires.
         * <p>
         * Valid values:
         * true: The instance expires.
         * false: The instance does not expire.
         * <p>
         * @return {@code this}
         * @param expired Property expired: Specifies whether the instance expires. This parameter is required.
         */
        public Builder expired(final java.lang.Boolean expired) {
            this.props().expired(expired);
            return this;
        }
        /**
         * Property expired: Specifies whether the instance expires.
         * <p>
         * Valid values:
         * true: The instance expires.
         * false: The instance does not expire.
         * <p>
         * @return {@code this}
         * @param expired Property expired: Specifies whether the instance expires. This parameter is required.
         */
        public Builder expired(final com.aliyun.ros.cdk.core.IResolvable expired) {
            this.props().expired(expired);
            return this;
        }

        /**
         * Property networkType: The network type of the instance.
         * <p>
         * Valid values:
         * Classic
         * Vpc
         * <p>
         * @return {@code this}
         * @param networkType Property networkType: The network type of the instance. This parameter is required.
         */
        public Builder networkType(final java.lang.String networkType) {
            this.props().networkType(networkType);
            return this;
        }
        /**
         * Property networkType: The network type of the instance.
         * <p>
         * Valid values:
         * Classic
         * Vpc
         * <p>
         * @return {@code this}
         * @param networkType Property networkType: The network type of the instance. This parameter is required.
         */
        public Builder networkType(final com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.props().networkType(networkType);
            return this;
        }

        /**
         * Property replicationFactor: The number of nodes in a replica set instance.
         * <p>
         * Valid values: 3, 5, and 7.
         * <p>
         * @return {@code this}
         * @param replicationFactor Property replicationFactor: The number of nodes in a replica set instance. This parameter is required.
         */
        public Builder replicationFactor(final java.lang.String replicationFactor) {
            this.props().replicationFactor(replicationFactor);
            return this;
        }
        /**
         * Property replicationFactor: The number of nodes in a replica set instance.
         * <p>
         * Valid values: 3, 5, and 7.
         * <p>
         * @return {@code this}
         * @param replicationFactor Property replicationFactor: The number of nodes in a replica set instance. This parameter is required.
         */
        public Builder replicationFactor(final com.aliyun.ros.cdk.core.IResolvable replicationFactor) {
            this.props().replicationFactor(replicationFactor);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property tags: Tags of instance.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags of instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.mongodb.datasource.RosInstances.TagsProperty> tags) {
            this.props().tags(tags);
            return this;
        }

        /**
         * Property vpcId: The VPC ID of the instance.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The VPC ID of the instance. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props().vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The VPC ID of the instance.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The VPC ID of the instance. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props().vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: The vSwitch ID of the instance.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The vSwitch ID of the instance. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props().vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The vSwitch ID of the instance.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The vSwitch ID of the instance. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props().vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property zoneId: The zone ID of the instance.
         * <p>
         * You can call the DescribeRegions operation to query the most recent zone list.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The zone ID of the instance. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props().zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The zone ID of the instance.
         * <p>
         * You can call the DescribeRegions operation to query the most recent zone list.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The zone ID of the instance. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props().zoneId(zoneId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.mongodb.datasource.Instances}.
         */
        @Override
        public com.aliyun.ros.cdk.mongodb.datasource.Instances build() {
            return new com.aliyun.ros.cdk.mongodb.datasource.Instances(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.mongodb.datasource.InstancesProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.mongodb.datasource.InstancesProps.Builder();
            }
            return this.props;
        }
    }
}
