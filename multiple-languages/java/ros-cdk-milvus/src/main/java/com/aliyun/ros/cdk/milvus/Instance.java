package com.aliyun.ros.cdk.milvus;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::Milvus::Instance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T10:05:59.841Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.milvus.$Module.class, fqn = "@alicloud/ros-cdk-milvus.Instance")
public class Instance extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.milvus.IInstance {

    protected Instance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Instance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.milvus.InstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.milvus.InstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute InstanceId: The ID of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.milvus.InstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.milvus.InstanceProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.milvus.Instance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.milvus.Instance> {
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
        private final com.aliyun.ros.cdk.milvus.InstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.milvus.InstanceProps.Builder();
        }

        /**
         * Property components: The component specifications of the instance.
         * <p>
         * @return {@code this}
         * @param components Property components: The component specifications of the instance. This parameter is required.
         */
        public Builder components(final com.aliyun.ros.cdk.core.IResolvable components) {
            this.props.components(components);
            return this;
        }
        /**
         * Property components: The component specifications of the instance.
         * <p>
         * @return {@code this}
         * @param components Property components: The component specifications of the instance. This parameter is required.
         */
        public Builder components(final java.util.List<? extends java.lang.Object> components) {
            this.props.components(components);
            return this;
        }

        /**
         * Property dbAdminPassword: The database administrator password.
         * <p>
         * The password must be 8 to 30 characters in length and contain at least one uppercase letter, lowercase letter, digit, and special character from &#64;#$%^*_+-.
         * <p>
         * @return {@code this}
         * @param dbAdminPassword Property dbAdminPassword: The database administrator password. This parameter is required.
         */
        public Builder dbAdminPassword(final java.lang.String dbAdminPassword) {
            this.props.dbAdminPassword(dbAdminPassword);
            return this;
        }
        /**
         * Property dbAdminPassword: The database administrator password.
         * <p>
         * The password must be 8 to 30 characters in length and contain at least one uppercase letter, lowercase letter, digit, and special character from &#64;#$%^*_+-.
         * <p>
         * @return {@code this}
         * @param dbAdminPassword Property dbAdminPassword: The database administrator password. This parameter is required.
         */
        public Builder dbAdminPassword(final com.aliyun.ros.cdk.core.IResolvable dbAdminPassword) {
            this.props.dbAdminPassword(dbAdminPassword);
            return this;
        }

        /**
         * Property dbVersion: The database engine version.
         * <p>
         * @return {@code this}
         * @param dbVersion Property dbVersion: The database engine version. This parameter is required.
         */
        public Builder dbVersion(final java.lang.String dbVersion) {
            this.props.dbVersion(dbVersion);
            return this;
        }
        /**
         * Property dbVersion: The database engine version.
         * <p>
         * @return {@code this}
         * @param dbVersion Property dbVersion: The database engine version. This parameter is required.
         */
        public Builder dbVersion(final com.aliyun.ros.cdk.core.IResolvable dbVersion) {
            this.props.dbVersion(dbVersion);
            return this;
        }

        /**
         * Property instanceName: The name of the instance.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The name of the instance. This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }
        /**
         * Property instanceName: The name of the instance.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The name of the instance. This parameter is required.
         */
        public Builder instanceName(final com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }

        /**
         * Property paymentType: The billing method of the instance.
         * <p>
         * @return {@code this}
         * @param paymentType Property paymentType: The billing method of the instance. This parameter is required.
         */
        public Builder paymentType(final java.lang.String paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }
        /**
         * Property paymentType: The billing method of the instance.
         * <p>
         * @return {@code this}
         * @param paymentType Property paymentType: The billing method of the instance. This parameter is required.
         */
        public Builder paymentType(final com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }

        /**
         * Property vpcId: The VPC ID.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The VPC ID. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The VPC ID.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The VPC ID. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchIds: The vSwitch configurations.
         * <p>
         * @return {@code this}
         * @param vSwitchIds Property vSwitchIds: The vSwitch configurations. This parameter is required.
         */
        public Builder vSwitchIds(final com.aliyun.ros.cdk.core.IResolvable vSwitchIds) {
            this.props.vSwitchIds(vSwitchIds);
            return this;
        }
        /**
         * Property vSwitchIds: The vSwitch configurations.
         * <p>
         * @return {@code this}
         * @param vSwitchIds Property vSwitchIds: The vSwitch configurations. This parameter is required.
         */
        public Builder vSwitchIds(final java.util.List<? extends java.lang.Object> vSwitchIds) {
            this.props.vSwitchIds(vSwitchIds);
            return this;
        }

        /**
         * Property zoneId: The primary zone ID of the instance.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The primary zone ID of the instance. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The primary zone ID of the instance.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The primary zone ID of the instance. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * Property aiFunction: Whether the AI function is enabled.
         * <p>
         * @return {@code this}
         * @param aiFunction Property aiFunction: Whether the AI function is enabled. This parameter is required.
         */
        public Builder aiFunction(final java.lang.Boolean aiFunction) {
            this.props.aiFunction(aiFunction);
            return this;
        }
        /**
         * Property aiFunction: Whether the AI function is enabled.
         * <p>
         * @return {@code this}
         * @param aiFunction Property aiFunction: Whether the AI function is enabled. This parameter is required.
         */
        public Builder aiFunction(final com.aliyun.ros.cdk.core.IResolvable aiFunction) {
            this.props.aiFunction(aiFunction);
            return this;
        }

        /**
         * Property autoBackup: Whether automatic backup is enabled.
         * <p>
         * @return {@code this}
         * @param autoBackup Property autoBackup: Whether automatic backup is enabled. This parameter is required.
         */
        public Builder autoBackup(final java.lang.Boolean autoBackup) {
            this.props.autoBackup(autoBackup);
            return this;
        }
        /**
         * Property autoBackup: Whether automatic backup is enabled.
         * <p>
         * @return {@code this}
         * @param autoBackup Property autoBackup: Whether automatic backup is enabled. This parameter is required.
         */
        public Builder autoBackup(final com.aliyun.ros.cdk.core.IResolvable autoBackup) {
            this.props.autoBackup(autoBackup);
            return this;
        }

        /**
         * Property autoPay: Whether the order is automatically paid.
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Whether the order is automatically paid. This parameter is required.
         */
        public Builder autoPay(final java.lang.Boolean autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }
        /**
         * Property autoPay: Whether the order is automatically paid.
         * <p>
         * @return {@code this}
         * @param autoPay Property autoPay: Whether the order is automatically paid. This parameter is required.
         */
        public Builder autoPay(final com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.props.autoPay(autoPay);
            return this;
        }

        /**
         * Property autoRenew: Whether the subscription is automatically renewed.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Whether the subscription is automatically renewed. This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * Property autoRenew: Whether the subscription is automatically renewed.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Whether the subscription is automatically renewed. This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * Property backupRestoreInfo: The backup restore information.
         * <p>
         * @return {@code this}
         * @param backupRestoreInfo Property backupRestoreInfo: The backup restore information. This parameter is required.
         */
        public Builder backupRestoreInfo(final com.aliyun.ros.cdk.core.IResolvable backupRestoreInfo) {
            this.props.backupRestoreInfo(backupRestoreInfo);
            return this;
        }
        /**
         * Property backupRestoreInfo: The backup restore information.
         * <p>
         * @return {@code this}
         * @param backupRestoreInfo Property backupRestoreInfo: The backup restore information. This parameter is required.
         */
        public Builder backupRestoreInfo(final com.aliyun.ros.cdk.milvus.RosInstance.BackupRestoreInfoProperty backupRestoreInfo) {
            this.props.backupRestoreInfo(backupRestoreInfo);
            return this;
        }

        /**
         * Property configuration: The instance configuration in YAML format.
         * <p>
         * @return {@code this}
         * @param configuration Property configuration: The instance configuration in YAML format. This parameter is required.
         */
        public Builder configuration(final java.lang.String configuration) {
            this.props.configuration(configuration);
            return this;
        }
        /**
         * Property configuration: The instance configuration in YAML format.
         * <p>
         * @return {@code this}
         * @param configuration Property configuration: The instance configuration in YAML format. This parameter is required.
         */
        public Builder configuration(final com.aliyun.ros.cdk.core.IResolvable configuration) {
            this.props.configuration(configuration);
            return this;
        }

        /**
         * Property encrypted: Whether OSS encryption is enabled.
         * <p>
         * @return {@code this}
         * @param encrypted Property encrypted: Whether OSS encryption is enabled. This parameter is required.
         */
        public Builder encrypted(final java.lang.Boolean encrypted) {
            this.props.encrypted(encrypted);
            return this;
        }
        /**
         * Property encrypted: Whether OSS encryption is enabled.
         * <p>
         * @return {@code this}
         * @param encrypted Property encrypted: Whether OSS encryption is enabled. This parameter is required.
         */
        public Builder encrypted(final com.aliyun.ros.cdk.core.IResolvable encrypted) {
            this.props.encrypted(encrypted);
            return this;
        }

        /**
         * Property ha: Whether high availability is enabled.
         * <p>
         * @return {@code this}
         * @param ha Property ha: Whether high availability is enabled. This parameter is required.
         */
        public Builder ha(final java.lang.Boolean ha) {
            this.props.ha(ha);
            return this;
        }
        /**
         * Property ha: Whether high availability is enabled.
         * <p>
         * @return {@code this}
         * @param ha Property ha: Whether high availability is enabled. This parameter is required.
         */
        public Builder ha(final com.aliyun.ros.cdk.core.IResolvable ha) {
            this.props.ha(ha);
            return this;
        }

        /**
         * Property isMultiAzStorage: Whether multi-zone storage is enabled.
         * <p>
         * @return {@code this}
         * @param isMultiAzStorage Property isMultiAzStorage: Whether multi-zone storage is enabled. This parameter is required.
         */
        public Builder isMultiAzStorage(final java.lang.Boolean isMultiAzStorage) {
            this.props.isMultiAzStorage(isMultiAzStorage);
            return this;
        }
        /**
         * Property isMultiAzStorage: Whether multi-zone storage is enabled.
         * <p>
         * @return {@code this}
         * @param isMultiAzStorage Property isMultiAzStorage: Whether multi-zone storage is enabled. This parameter is required.
         */
        public Builder isMultiAzStorage(final com.aliyun.ros.cdk.core.IResolvable isMultiAzStorage) {
            this.props.isMultiAzStorage(isMultiAzStorage);
            return this;
        }

        /**
         * Property kmsKeyId: The ID of the KMS key used for encryption.
         * <p>
         * @return {@code this}
         * @param kmsKeyId Property kmsKeyId: The ID of the KMS key used for encryption. This parameter is required.
         */
        public Builder kmsKeyId(final java.lang.String kmsKeyId) {
            this.props.kmsKeyId(kmsKeyId);
            return this;
        }
        /**
         * Property kmsKeyId: The ID of the KMS key used for encryption.
         * <p>
         * @return {@code this}
         * @param kmsKeyId Property kmsKeyId: The ID of the KMS key used for encryption. This parameter is required.
         */
        public Builder kmsKeyId(final com.aliyun.ros.cdk.core.IResolvable kmsKeyId) {
            this.props.kmsKeyId(kmsKeyId);
            return this;
        }

        /**
         * Property loadReplicas: The number of load replicas.
         * <p>
         * @return {@code this}
         * @param loadReplicas Property loadReplicas: The number of load replicas. This parameter is required.
         */
        public Builder loadReplicas(final java.lang.Number loadReplicas) {
            this.props.loadReplicas(loadReplicas);
            return this;
        }
        /**
         * Property loadReplicas: The number of load replicas.
         * <p>
         * @return {@code this}
         * @param loadReplicas Property loadReplicas: The number of load replicas. This parameter is required.
         */
        public Builder loadReplicas(final com.aliyun.ros.cdk.core.IResolvable loadReplicas) {
            this.props.loadReplicas(loadReplicas);
            return this;
        }

        /**
         * Property multiZoneMode: The multi-zone deployment mode.
         * <p>
         * @return {@code this}
         * @param multiZoneMode Property multiZoneMode: The multi-zone deployment mode. This parameter is required.
         */
        public Builder multiZoneMode(final java.lang.String multiZoneMode) {
            this.props.multiZoneMode(multiZoneMode);
            return this;
        }
        /**
         * Property multiZoneMode: The multi-zone deployment mode.
         * <p>
         * @return {@code this}
         * @param multiZoneMode Property multiZoneMode: The multi-zone deployment mode. This parameter is required.
         */
        public Builder multiZoneMode(final com.aliyun.ros.cdk.core.IResolvable multiZoneMode) {
            this.props.multiZoneMode(multiZoneMode);
            return this;
        }

        /**
         * Property paymentDuration: The subscription duration.
         * <p>
         * @return {@code this}
         * @param paymentDuration Property paymentDuration: The subscription duration. This parameter is required.
         */
        public Builder paymentDuration(final java.lang.Number paymentDuration) {
            this.props.paymentDuration(paymentDuration);
            return this;
        }
        /**
         * Property paymentDuration: The subscription duration.
         * <p>
         * @return {@code this}
         * @param paymentDuration Property paymentDuration: The subscription duration. This parameter is required.
         */
        public Builder paymentDuration(final com.aliyun.ros.cdk.core.IResolvable paymentDuration) {
            this.props.paymentDuration(paymentDuration);
            return this;
        }

        /**
         * Property paymentDurationUnit: The unit of the subscription duration.
         * <p>
         * @return {@code this}
         * @param paymentDurationUnit Property paymentDurationUnit: The unit of the subscription duration. This parameter is required.
         */
        public Builder paymentDurationUnit(final java.lang.String paymentDurationUnit) {
            this.props.paymentDurationUnit(paymentDurationUnit);
            return this;
        }
        /**
         * Property paymentDurationUnit: The unit of the subscription duration.
         * <p>
         * @return {@code this}
         * @param paymentDurationUnit Property paymentDurationUnit: The unit of the subscription duration. This parameter is required.
         */
        public Builder paymentDurationUnit(final com.aliyun.ros.cdk.core.IResolvable paymentDurationUnit) {
            this.props.paymentDurationUnit(paymentDurationUnit);
            return this;
        }

        /**
         * Property promotionNo: The promotion number.
         * <p>
         * @return {@code this}
         * @param promotionNo Property promotionNo: The promotion number. This parameter is required.
         */
        public Builder promotionNo(final java.lang.String promotionNo) {
            this.props.promotionNo(promotionNo);
            return this;
        }
        /**
         * Property promotionNo: The promotion number.
         * <p>
         * @return {@code this}
         * @param promotionNo Property promotionNo: The promotion number. This parameter is required.
         */
        public Builder promotionNo(final com.aliyun.ros.cdk.core.IResolvable promotionNo) {
            this.props.promotionNo(promotionNo);
            return this;
        }

        /**
         * Property resourceGroupId: The resource group ID.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The resource group ID. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The resource group ID.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The resource group ID. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property tags: Tags to attach to Milvus instance.
         * <p>
         * Max support 20 tags to add during create Milvus instance. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to Milvus instance. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.milvus.RosInstance.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.milvus.Instance}.
         */
        @Override
        public com.aliyun.ros.cdk.milvus.Instance build() {
            return new com.aliyun.ros.cdk.milvus.Instance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
