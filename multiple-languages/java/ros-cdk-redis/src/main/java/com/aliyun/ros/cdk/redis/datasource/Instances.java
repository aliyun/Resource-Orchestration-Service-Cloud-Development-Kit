package com.aliyun.ros.cdk.redis.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::REDIS::Instances</code>, which is used to query the information about ApsaraDB for Redis instances.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-03T08:19:54.155Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.redis.$Module.class, fqn = "@alicloud/ros-cdk-redis.datasource.Instances")
public class Instances extends com.aliyun.ros.cdk.core.Resource {

    protected Instances(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Instances(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Instances(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.redis.datasource.InstancesProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Instances(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.redis.datasource.InstancesProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Instances(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute InstanceIds: The list of The Redis instance Ids.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceIds() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Instances: The list of The Redis instances.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstances() {
        return software.amazon.jsii.Kernel.get(this, "attrInstances", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.redis.datasource.InstancesProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.redis.datasource.InstancesProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.redis.datasource.InstancesProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.redis.datasource.Instances}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.redis.datasource.Instances> {
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
        private com.aliyun.ros.cdk.redis.datasource.InstancesProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property architectureType: The architecture of the instance.
         * <p>
         * Valid values:
         * cluster: The instance is a cluster instance.
         * standard: The instance is a standard instance.
         * rwsplit: The instance is a read/write splitting instance.
         * <p>
         * @return {@code this}
         * @param architectureType Property architectureType: The architecture of the instance. This parameter is required.
         */
        public Builder architectureType(final java.lang.String architectureType) {
            this.props().architectureType(architectureType);
            return this;
        }
        /**
         * Property architectureType: The architecture of the instance.
         * <p>
         * Valid values:
         * cluster: The instance is a cluster instance.
         * standard: The instance is a standard instance.
         * rwsplit: The instance is a read/write splitting instance.
         * <p>
         * @return {@code this}
         * @param architectureType Property architectureType: The architecture of the instance. This parameter is required.
         */
        public Builder architectureType(final com.aliyun.ros.cdk.core.IResolvable architectureType) {
            this.props().architectureType(architectureType);
            return this;
        }

        /**
         * Property chargeType: The billing method of the instance.
         * <p>
         * Valid values:
         * PrePaid: subscription
         * PostPaid: pay-as-you-go
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
         * PrePaid: subscription
         * PostPaid: pay-as-you-go
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: The billing method of the instance. This parameter is required.
         */
        public Builder chargeType(final com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.props().chargeType(chargeType);
            return this;
        }

        /**
         * Property editionType: The edition of the instance.
         * <p>
         * Valid values:
         * Community: Community Edition
         * Enterprise: Enhance Edition (Tair)
         * <p>
         * @return {@code this}
         * @param editionType Property editionType: The edition of the instance. This parameter is required.
         */
        public Builder editionType(final java.lang.String editionType) {
            this.props().editionType(editionType);
            return this;
        }
        /**
         * Property editionType: The edition of the instance.
         * <p>
         * Valid values:
         * Community: Community Edition
         * Enterprise: Enhance Edition (Tair)
         * <p>
         * @return {@code this}
         * @param editionType Property editionType: The edition of the instance. This parameter is required.
         */
        public Builder editionType(final com.aliyun.ros.cdk.core.IResolvable editionType) {
            this.props().editionType(editionType);
            return this;
        }

        /**
         * Property engineVersion: The database engine version of the instance.
         * <p>
         * Valid values: 2.8, 4.0, and 5.0.
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
         * Valid values: 2.8, 4.0, and 5.0.
         * <p>
         * @return {@code this}
         * @param engineVersion Property engineVersion: The database engine version of the instance. This parameter is required.
         */
        public Builder engineVersion(final com.aliyun.ros.cdk.core.IResolvable engineVersion) {
            this.props().engineVersion(engineVersion);
            return this;
        }

        /**
         * Property expired: Specifies whether the instance has expired.
         * <p>
         * Valid values:
         * true: The instance has expired.
         * false: The instance has not expired.
         * <p>
         * @return {@code this}
         * @param expired Property expired: Specifies whether the instance has expired. This parameter is required.
         */
        public Builder expired(final java.lang.String expired) {
            this.props().expired(expired);
            return this;
        }
        /**
         * Property expired: Specifies whether the instance has expired.
         * <p>
         * Valid values:
         * true: The instance has expired.
         * false: The instance has not expired.
         * <p>
         * @return {@code this}
         * @param expired Property expired: Specifies whether the instance has expired. This parameter is required.
         */
        public Builder expired(final com.aliyun.ros.cdk.core.IResolvable expired) {
            this.props().expired(expired);
            return this;
        }

        /**
         * Property globalInstance: Specifies whether to return the child instances of distributed instances.
         * <p>
         * Valid values:
         * true: Only child instances are returned.
         * false: Child instances are not returned.
         * <p>
         * @return {@code this}
         * @param globalInstance Property globalInstance: Specifies whether to return the child instances of distributed instances. This parameter is required.
         */
        public Builder globalInstance(final java.lang.String globalInstance) {
            this.props().globalInstance(globalInstance);
            return this;
        }
        /**
         * Property globalInstance: Specifies whether to return the child instances of distributed instances.
         * <p>
         * Valid values:
         * true: Only child instances are returned.
         * false: Child instances are not returned.
         * <p>
         * @return {@code this}
         * @param globalInstance Property globalInstance: Specifies whether to return the child instances of distributed instances. This parameter is required.
         */
        public Builder globalInstance(final com.aliyun.ros.cdk.core.IResolvable globalInstance) {
            this.props().globalInstance(globalInstance);
            return this;
        }

        /**
         * Property instanceClass: The instance type.
         * <p>
         * @return {@code this}
         * @param instanceClass Property instanceClass: The instance type. This parameter is required.
         */
        public Builder instanceClass(final java.lang.String instanceClass) {
            this.props().instanceClass(instanceClass);
            return this;
        }
        /**
         * Property instanceClass: The instance type.
         * <p>
         * @return {@code this}
         * @param instanceClass Property instanceClass: The instance type. This parameter is required.
         */
        public Builder instanceClass(final com.aliyun.ros.cdk.core.IResolvable instanceClass) {
            this.props().instanceClass(instanceClass);
            return this;
        }

        /**
         * Property instanceIds: The IDs of instances.
         * <p>
         * If you specify multiple instance IDs, separate the instance IDs with commas (,).
         * <p>
         * @return {@code this}
         * @param instanceIds Property instanceIds: The IDs of instances. This parameter is required.
         */
        public Builder instanceIds(final java.lang.String instanceIds) {
            this.props().instanceIds(instanceIds);
            return this;
        }
        /**
         * Property instanceIds: The IDs of instances.
         * <p>
         * If you specify multiple instance IDs, separate the instance IDs with commas (,).
         * <p>
         * @return {@code this}
         * @param instanceIds Property instanceIds: The IDs of instances. This parameter is required.
         */
        public Builder instanceIds(final com.aliyun.ros.cdk.core.IResolvable instanceIds) {
            this.props().instanceIds(instanceIds);
            return this;
        }

        /**
         * Property instanceStatus: The state of the instance.
         * <p>
         * Valid values:
         * Normal: The instance is normal.
         * Creating: The instance is being created.
         * Changing: The configurations of the instance are being changed.
         * Inactive: The instance is disabled.
         * Flushing: The instance is being released.
         * Released: The instance is released.
         * Transforming: The instance is being transformed.
         * Unavailable: The instance is suspended.
         * Error: The instance cannot be created.
         * Migrating: The instance is being migrated.
         * BackupRecovering: The instance is being restored from a backup.
         * MinorVersionUpgrading: The minor version of the instance is being updated.
         * NetworkModifying: The network type of the instance is being changed.
         * SSLModifying: The SSL certificate of the instance is being changed.
         * MajorVersionUpgrading: The major version of the instance is being upgraded. The instance remains available during the upgrade.
         * <p>
         * @return {@code this}
         * @param instanceStatus Property instanceStatus: The state of the instance. This parameter is required.
         */
        public Builder instanceStatus(final java.lang.String instanceStatus) {
            this.props().instanceStatus(instanceStatus);
            return this;
        }
        /**
         * Property instanceStatus: The state of the instance.
         * <p>
         * Valid values:
         * Normal: The instance is normal.
         * Creating: The instance is being created.
         * Changing: The configurations of the instance are being changed.
         * Inactive: The instance is disabled.
         * Flushing: The instance is being released.
         * Released: The instance is released.
         * Transforming: The instance is being transformed.
         * Unavailable: The instance is suspended.
         * Error: The instance cannot be created.
         * Migrating: The instance is being migrated.
         * BackupRecovering: The instance is being restored from a backup.
         * MinorVersionUpgrading: The minor version of the instance is being updated.
         * NetworkModifying: The network type of the instance is being changed.
         * SSLModifying: The SSL certificate of the instance is being changed.
         * MajorVersionUpgrading: The major version of the instance is being upgraded. The instance remains available during the upgrade.
         * <p>
         * @return {@code this}
         * @param instanceStatus Property instanceStatus: The state of the instance. This parameter is required.
         */
        public Builder instanceStatus(final com.aliyun.ros.cdk.core.IResolvable instanceStatus) {
            this.props().instanceStatus(instanceStatus);
            return this;
        }

        /**
         * Property instanceType: The category of the instance.
         * <p>
         * Valid values:
         * Tair
         * Redis
         * Memcache
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The category of the instance. This parameter is required.
         */
        public Builder instanceType(final java.lang.String instanceType) {
            this.props().instanceType(instanceType);
            return this;
        }
        /**
         * Property instanceType: The category of the instance.
         * <p>
         * Valid values:
         * Tair
         * Redis
         * Memcache
         * <p>
         * @return {@code this}
         * @param instanceType Property instanceType: The category of the instance. This parameter is required.
         */
        public Builder instanceType(final com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.props().instanceType(instanceType);
            return this;
        }

        /**
         * Property networkType: The network type of the instance.
         * <p>
         * Valid values:
         * CLASSIC: classic network
         * VPC: Virtual Private Cloud (VPC)
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
         * CLASSIC: classic network
         * VPC: Virtual Private Cloud (VPC)
         * <p>
         * @return {@code this}
         * @param networkType Property networkType: The network type of the instance. This parameter is required.
         */
        public Builder networkType(final com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.props().networkType(networkType);
            return this;
        }

        /**
         * Property privateIp: The private IP address of the instance.
         * <p>
         * @return {@code this}
         * @param privateIp Property privateIp: The private IP address of the instance. This parameter is required.
         */
        public Builder privateIp(final java.lang.String privateIp) {
            this.props().privateIp(privateIp);
            return this;
        }
        /**
         * Property privateIp: The private IP address of the instance.
         * <p>
         * @return {@code this}
         * @param privateIp Property privateIp: The private IP address of the instance. This parameter is required.
         */
        public Builder privateIp(final com.aliyun.ros.cdk.core.IResolvable privateIp) {
            this.props().privateIp(privateIp);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group to which the instance belongs.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the instance belongs. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group to which the instance belongs.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the instance belongs. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property searchKey: The keyword used for fuzzy search.
         * <p>
         * The keyword can be based on an instance name or an instance ID.
         * <p>
         * @return {@code this}
         * @param searchKey Property searchKey: The keyword used for fuzzy search. This parameter is required.
         */
        public Builder searchKey(final java.lang.String searchKey) {
            this.props().searchKey(searchKey);
            return this;
        }
        /**
         * Property searchKey: The keyword used for fuzzy search.
         * <p>
         * The keyword can be based on an instance name or an instance ID.
         * <p>
         * @return {@code this}
         * @param searchKey Property searchKey: The keyword used for fuzzy search. This parameter is required.
         */
        public Builder searchKey(final com.aliyun.ros.cdk.core.IResolvable searchKey) {
            this.props().searchKey(searchKey);
            return this;
        }

        /**
         * Property vpcId: The ID of the VPC.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VPC. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props().vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The ID of the VPC.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VPC. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props().vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: The ID of the VSwitch.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props().vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The ID of the VSwitch.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the VSwitch. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props().vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property zoneId: The zone ID of the instance.
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
         * @return {@code this}
         * @param zoneId Property zoneId: The zone ID of the instance. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props().zoneId(zoneId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.redis.datasource.Instances}.
         */
        @Override
        public com.aliyun.ros.cdk.redis.datasource.Instances build() {
            return new com.aliyun.ros.cdk.redis.datasource.Instances(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.redis.datasource.InstancesProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.redis.datasource.InstancesProps.Builder();
            }
            return this.props;
        }
    }
}
