package com.aliyun.ros.cdk.emr;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::EMR::StarRocksInstance</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:25.241Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.emr.$Module.class, fqn = "@alicloud/ros-cdk-emr.StarRocksInstance")
public class StarRocksInstance extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.emr.IStarRocksInstance {

    protected StarRocksInstance(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected StarRocksInstance(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public StarRocksInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.StarRocksInstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public StarRocksInstance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.StarRocksInstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AclId: Access control ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrAclId() {
        return software.amazon.jsii.Kernel.get(this, "attrAclId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Architecture: Architecture of StarRocks instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrArchitecture() {
        return software.amazon.jsii.Kernel.get(this, "attrArchitecture", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute CreateTime: The creation time of the StarRocks instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EnableAutoMinorVersionUpgrade: Whether minor version automatic upgrades are supported.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableAutoMinorVersionUpgrade() {
        return software.amazon.jsii.Kernel.get(this, "attrEnableAutoMinorVersionUpgrade", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EnabledAuditLoader: Whether enable audit loader.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnabledAuditLoader() {
        return software.amazon.jsii.Kernel.get(this, "attrEnabledAuditLoader", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute EnableSsl: Enable SSL.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEnableSsl() {
        return software.amazon.jsii.Kernel.get(this, "attrEnableSsl", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Encrypted: Whether encrypted.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrEncrypted() {
        return software.amazon.jsii.Kernel.get(this, "attrEncrypted", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ExpireTime: StarRocks Instance expire time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrExpireTime() {
        return software.amazon.jsii.Kernel.get(this, "attrExpireTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceId: The ID of the StarRocks instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InstanceName: The name of the StarRocks instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInstanceName() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute IsolateLeader: Whether leader FE is isolated.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrIsolateLeader() {
        return software.amazon.jsii.Kernel.get(this, "attrIsolateLeader", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute KmsKeyId: The ID of the Key Management Service (KMS) key.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrKmsKeyId() {
        return software.amazon.jsii.Kernel.get(this, "attrKmsKeyId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MaintainablePeriod: StarRocks Instance maintainable period.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMaintainablePeriod() {
        return software.amazon.jsii.Kernel.get(this, "attrMaintainablePeriod", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MinorVersion: StarRocks Instance minor version.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMinorVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrMinorVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute MonitorType: Monitor Type.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMonitorType() {
        return software.amazon.jsii.Kernel.get(this, "attrMonitorType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute OssLocation: OSS Location.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrOssLocation() {
        return software.amazon.jsii.Kernel.get(this, "attrOssLocation", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PackageType: The package type of the StarRocks instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPackageType() {
        return software.amazon.jsii.Kernel.get(this, "attrPackageType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute PayType: The pay type of the StarRocks instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPayType() {
        return software.amazon.jsii.Kernel.get(this, "attrPayType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ResourceGroupId: The ID of the resource group to which the StarRocks instance belongs..
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RunMode: The run mode of the StarRocks instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRunMode() {
        return software.amazon.jsii.Kernel.get(this, "attrRunMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute RunningTime: StarRocks Instance running time.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrRunningTime() {
        return software.amazon.jsii.Kernel.get(this, "attrRunningTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SecurityGroupManaged: Whether security group is managed.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSecurityGroupManaged() {
        return software.amazon.jsii.Kernel.get(this, "attrSecurityGroupManaged", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute SgId: Security Group ID of StarRocks instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrSgId() {
        return software.amazon.jsii.Kernel.get(this, "attrSgId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Tags: Tag list of the StarRocks instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Version: The version of the StarRocks instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVersion() {
        return software.amazon.jsii.Kernel.get(this, "attrVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute VpcId: The VPC ID of the StarRocks instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVpcId() {
        return software.amazon.jsii.Kernel.get(this, "attrVpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Vswitches: The VSwitches info of the StarRocks instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrVswitches() {
        return software.amazon.jsii.Kernel.get(this, "attrVswitches", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.emr.StarRocksInstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.emr.StarRocksInstanceProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.emr.StarRocksInstance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.emr.StarRocksInstance> {
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
        private final com.aliyun.ros.cdk.emr.StarRocksInstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.emr.StarRocksInstanceProps.Builder();
        }

        /**
         * Property adminPassword: Password of admin user.
         * <p>
         * @return {@code this}
         * @param adminPassword Property adminPassword: Password of admin user. This parameter is required.
         */
        public Builder adminPassword(final java.lang.String adminPassword) {
            this.props.adminPassword(adminPassword);
            return this;
        }
        /**
         * Property adminPassword: Password of admin user.
         * <p>
         * @return {@code this}
         * @param adminPassword Property adminPassword: Password of admin user. This parameter is required.
         */
        public Builder adminPassword(final com.aliyun.ros.cdk.core.IResolvable adminPassword) {
            this.props.adminPassword(adminPassword);
            return this;
        }

        /**
         * Property clusterZoneId: Primary ZoneId of StarRocks instance.
         * <p>
         * @return {@code this}
         * @param clusterZoneId Property clusterZoneId: Primary ZoneId of StarRocks instance. This parameter is required.
         */
        public Builder clusterZoneId(final java.lang.String clusterZoneId) {
            this.props.clusterZoneId(clusterZoneId);
            return this;
        }
        /**
         * Property clusterZoneId: Primary ZoneId of StarRocks instance.
         * <p>
         * @return {@code this}
         * @param clusterZoneId Property clusterZoneId: Primary ZoneId of StarRocks instance. This parameter is required.
         */
        public Builder clusterZoneId(final com.aliyun.ros.cdk.core.IResolvable clusterZoneId) {
            this.props.clusterZoneId(clusterZoneId);
            return this;
        }

        /**
         * Property instanceName: The name of the StarRocks instance.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The name of the StarRocks instance. This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }
        /**
         * Property instanceName: The name of the StarRocks instance.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The name of the StarRocks instance. This parameter is required.
         */
        public Builder instanceName(final com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }

        /**
         * Property packageType: The package type of the instance: - **trial: Starter Edition - **official: Standard.
         * <p>
         * @return {@code this}
         * @param packageType Property packageType: The package type of the instance: - **trial: Starter Edition - **official: Standard. This parameter is required.
         */
        public Builder packageType(final java.lang.String packageType) {
            this.props.packageType(packageType);
            return this;
        }
        /**
         * Property packageType: The package type of the instance: - **trial: Starter Edition - **official: Standard.
         * <p>
         * @return {@code this}
         * @param packageType Property packageType: The package type of the instance: - **trial: Starter Edition - **official: Standard. This parameter is required.
         */
        public Builder packageType(final com.aliyun.ros.cdk.core.IResolvable packageType) {
            this.props.packageType(packageType);
            return this;
        }

        /**
         * Property payType: The pay type of the StarRocks instance: - **prePaid - **postPaid.
         * <p>
         * @return {@code this}
         * @param payType Property payType: The pay type of the StarRocks instance: - **prePaid - **postPaid. This parameter is required.
         */
        public Builder payType(final java.lang.String payType) {
            this.props.payType(payType);
            return this;
        }
        /**
         * Property payType: The pay type of the StarRocks instance: - **prePaid - **postPaid.
         * <p>
         * @return {@code this}
         * @param payType Property payType: The pay type of the StarRocks instance: - **prePaid - **postPaid. This parameter is required.
         */
        public Builder payType(final com.aliyun.ros.cdk.core.IResolvable payType) {
            this.props.payType(payType);
            return this;
        }

        /**
         * Property runMode: The run mode of the instance: - **shared_nothing: Storage and calculation.
         * <p>
         * <ul>
         * <li>**shared_data: Storage and calculation separation.</li>
         * <li>**lakehouse: Data lake analysis.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param runMode Property runMode: The run mode of the instance: - **shared_nothing: Storage and calculation. This parameter is required.
         */
        public Builder runMode(final java.lang.String runMode) {
            this.props.runMode(runMode);
            return this;
        }
        /**
         * Property runMode: The run mode of the instance: - **shared_nothing: Storage and calculation.
         * <p>
         * <ul>
         * <li>**shared_data: Storage and calculation separation.</li>
         * <li>**lakehouse: Data lake analysis.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param runMode Property runMode: The run mode of the instance: - **shared_nothing: Storage and calculation. This parameter is required.
         */
        public Builder runMode(final com.aliyun.ros.cdk.core.IResolvable runMode) {
            this.props.runMode(runMode);
            return this;
        }

        /**
         * Property version: The version of the StarRocks instance.
         * <p>
         * @return {@code this}
         * @param version Property version: The version of the StarRocks instance. This parameter is required.
         */
        public Builder version(final java.lang.String version) {
            this.props.version(version);
            return this;
        }
        /**
         * Property version: The version of the StarRocks instance.
         * <p>
         * @return {@code this}
         * @param version Property version: The version of the StarRocks instance. This parameter is required.
         */
        public Builder version(final com.aliyun.ros.cdk.core.IResolvable version) {
            this.props.version(version);
            return this;
        }

        /**
         * Property vpcId: The VPC ID of the StarRocks instance.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The VPC ID of the StarRocks instance. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The VPC ID of the StarRocks instance.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The VPC ID of the StarRocks instance. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property autoRenew: Whether to enable automatic renewal.
         * <p>
         * This is only meaningful when payType is set to PrePaid. Disabled by default.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Whether to enable automatic renewal. This parameter is required.
         */
        public Builder autoRenew(final java.lang.Boolean autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }
        /**
         * Property autoRenew: Whether to enable automatic renewal.
         * <p>
         * This is only meaningful when payType is set to PrePaid. Disabled by default.
         * <p>
         * @return {@code this}
         * @param autoRenew Property autoRenew: Whether to enable automatic renewal. This parameter is required.
         */
        public Builder autoRenew(final com.aliyun.ros.cdk.core.IResolvable autoRenew) {
            this.props.autoRenew(autoRenew);
            return this;
        }

        /**
         * Property backendNodeGroups: List of BE or CN compute group information.
         * <p>
         * @return {@code this}
         * @param backendNodeGroups Property backendNodeGroups: List of BE or CN compute group information. This parameter is required.
         */
        public Builder backendNodeGroups(final com.aliyun.ros.cdk.core.IResolvable backendNodeGroups) {
            this.props.backendNodeGroups(backendNodeGroups);
            return this;
        }
        /**
         * Property backendNodeGroups: List of BE or CN compute group information.
         * <p>
         * @return {@code this}
         * @param backendNodeGroups Property backendNodeGroups: List of BE or CN compute group information. This parameter is required.
         */
        public Builder backendNodeGroups(final java.util.List<? extends java.lang.Object> backendNodeGroups) {
            this.props.backendNodeGroups(backendNodeGroups);
            return this;
        }

        /**
         * Property duration: Duration of purchase.
         * <p>
         * It is only meaningful when PayType is set to PrePaid.
         * <p>
         * @return {@code this}
         * @param duration Property duration: Duration of purchase. This parameter is required.
         */
        public Builder duration(final java.lang.Number duration) {
            this.props.duration(duration);
            return this;
        }
        /**
         * Property duration: Duration of purchase.
         * <p>
         * It is only meaningful when PayType is set to PrePaid.
         * <p>
         * @return {@code this}
         * @param duration Property duration: Duration of purchase. This parameter is required.
         */
        public Builder duration(final com.aliyun.ros.cdk.core.IResolvable duration) {
            this.props.duration(duration);
            return this;
        }

        /**
         * Property encrypted: Whether encrypted.
         * <p>
         * @return {@code this}
         * @param encrypted Property encrypted: Whether encrypted. This parameter is required.
         */
        public Builder encrypted(final java.lang.Boolean encrypted) {
            this.props.encrypted(encrypted);
            return this;
        }
        /**
         * Property encrypted: Whether encrypted.
         * <p>
         * @return {@code this}
         * @param encrypted Property encrypted: Whether encrypted. This parameter is required.
         */
        public Builder encrypted(final com.aliyun.ros.cdk.core.IResolvable encrypted) {
            this.props.encrypted(encrypted);
            return this;
        }

        /**
         * Property frontendNodeGroups: List of FE Node Group Information.
         * <p>
         * @return {@code this}
         * @param frontendNodeGroups Property frontendNodeGroups: List of FE Node Group Information. This parameter is required.
         */
        public Builder frontendNodeGroups(final com.aliyun.ros.cdk.core.IResolvable frontendNodeGroups) {
            this.props.frontendNodeGroups(frontendNodeGroups);
            return this;
        }
        /**
         * Property frontendNodeGroups: List of FE Node Group Information.
         * <p>
         * @return {@code this}
         * @param frontendNodeGroups Property frontendNodeGroups: List of FE Node Group Information. This parameter is required.
         */
        public Builder frontendNodeGroups(final java.util.List<? extends java.lang.Object> frontendNodeGroups) {
            this.props.frontendNodeGroups(frontendNodeGroups);
            return this;
        }

        /**
         * Property kmsKeyId: The ID of the Key Management Service (KMS) key.
         * <p>
         * @return {@code this}
         * @param kmsKeyId Property kmsKeyId: The ID of the Key Management Service (KMS) key. This parameter is required.
         */
        public Builder kmsKeyId(final java.lang.String kmsKeyId) {
            this.props.kmsKeyId(kmsKeyId);
            return this;
        }
        /**
         * Property kmsKeyId: The ID of the Key Management Service (KMS) key.
         * <p>
         * @return {@code this}
         * @param kmsKeyId Property kmsKeyId: The ID of the Key Management Service (KMS) key. This parameter is required.
         */
        public Builder kmsKeyId(final com.aliyun.ros.cdk.core.IResolvable kmsKeyId) {
            this.props.kmsKeyId(kmsKeyId);
            return this;
        }

        /**
         * Property observerNodeGroups: list of Observer calculates group information.
         * <p>
         * @return {@code this}
         * @param observerNodeGroups Property observerNodeGroups: list of Observer calculates group information. This parameter is required.
         */
        public Builder observerNodeGroups(final com.aliyun.ros.cdk.core.IResolvable observerNodeGroups) {
            this.props.observerNodeGroups(observerNodeGroups);
            return this;
        }
        /**
         * Property observerNodeGroups: list of Observer calculates group information.
         * <p>
         * @return {@code this}
         * @param observerNodeGroups Property observerNodeGroups: list of Observer calculates group information. This parameter is required.
         */
        public Builder observerNodeGroups(final java.util.List<? extends java.lang.Object> observerNodeGroups) {
            this.props.observerNodeGroups(observerNodeGroups);
            return this;
        }

        /**
         * Property orderId: Order ID.
         * <p>
         * @return {@code this}
         * @param orderId Property orderId: Order ID. This parameter is required.
         */
        public Builder orderId(final java.lang.Number orderId) {
            this.props.orderId(orderId);
            return this;
        }
        /**
         * Property orderId: Order ID.
         * <p>
         * @return {@code this}
         * @param orderId Property orderId: Order ID. This parameter is required.
         */
        public Builder orderId(final com.aliyun.ros.cdk.core.IResolvable orderId) {
            this.props.orderId(orderId);
            return this;
        }

        /**
         * Property ossAccessingRoleName: Role name used for password-free access to OSS.
         * <p>
         * @return {@code this}
         * @param ossAccessingRoleName Property ossAccessingRoleName: Role name used for password-free access to OSS. This parameter is required.
         */
        public Builder ossAccessingRoleName(final java.lang.String ossAccessingRoleName) {
            this.props.ossAccessingRoleName(ossAccessingRoleName);
            return this;
        }
        /**
         * Property ossAccessingRoleName: Role name used for password-free access to OSS.
         * <p>
         * @return {@code this}
         * @param ossAccessingRoleName Property ossAccessingRoleName: Role name used for password-free access to OSS. This parameter is required.
         */
        public Builder ossAccessingRoleName(final com.aliyun.ros.cdk.core.IResolvable ossAccessingRoleName) {
            this.props.ossAccessingRoleName(ossAccessingRoleName);
            return this;
        }

        /**
         * Property pricingCycle: The duration unit for purchasing: - Month - Year This is only meaningful when PayType is set to PrePaid.
         * <p>
         * @return {@code this}
         * @param pricingCycle Property pricingCycle: The duration unit for purchasing: - Month - Year This is only meaningful when PayType is set to PrePaid. This parameter is required.
         */
        public Builder pricingCycle(final java.lang.String pricingCycle) {
            this.props.pricingCycle(pricingCycle);
            return this;
        }
        /**
         * Property pricingCycle: The duration unit for purchasing: - Month - Year This is only meaningful when PayType is set to PrePaid.
         * <p>
         * @return {@code this}
         * @param pricingCycle Property pricingCycle: The duration unit for purchasing: - Month - Year This is only meaningful when PayType is set to PrePaid. This parameter is required.
         */
        public Builder pricingCycle(final com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.props.pricingCycle(pricingCycle);
            return this;
        }

        /**
         * Property promotionOptionNo: Promotion ID.
         * <p>
         * @return {@code this}
         * @param promotionOptionNo Property promotionOptionNo: Promotion ID. This parameter is required.
         */
        public Builder promotionOptionNo(final java.lang.String promotionOptionNo) {
            this.props.promotionOptionNo(promotionOptionNo);
            return this;
        }
        /**
         * Property promotionOptionNo: Promotion ID.
         * <p>
         * @return {@code this}
         * @param promotionOptionNo Property promotionOptionNo: Promotion ID. This parameter is required.
         */
        public Builder promotionOptionNo(final com.aliyun.ros.cdk.core.IResolvable promotionOptionNo) {
            this.props.promotionOptionNo(promotionOptionNo);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group to which the StarRocks instance belongs.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the StarRocks instance belongs. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group to which the StarRocks instance belongs.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the StarRocks instance belongs. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property resourceType: Resource type.
         * <p>
         * @return {@code this}
         * @param resourceType Property resourceType: Resource type. This parameter is required.
         */
        public Builder resourceType(final java.lang.String resourceType) {
            this.props.resourceType(resourceType);
            return this;
        }
        /**
         * Property resourceType: Resource type.
         * <p>
         * @return {@code this}
         * @param resourceType Property resourceType: Resource type. This parameter is required.
         */
        public Builder resourceType(final com.aliyun.ros.cdk.core.IResolvable resourceType) {
            this.props.resourceType(resourceType);
            return this;
        }

        /**
         * Property tags: Tags of StarRocks.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags of StarRocks. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.emr.RosStarRocksInstance.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property vswitches: The VSwitches info of the StarRocks instance.
         * <p>
         * @return {@code this}
         * @param vswitches Property vswitches: The VSwitches info of the StarRocks instance. This parameter is required.
         */
        public Builder vswitches(final com.aliyun.ros.cdk.core.IResolvable vswitches) {
            this.props.vswitches(vswitches);
            return this;
        }
        /**
         * Property vswitches: The VSwitches info of the StarRocks instance.
         * <p>
         * @return {@code this}
         * @param vswitches Property vswitches: The VSwitches info of the StarRocks instance. This parameter is required.
         */
        public Builder vswitches(final java.util.List<? extends java.lang.Object> vswitches) {
            this.props.vswitches(vswitches);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.emr.StarRocksInstance}.
         */
        @Override
        public com.aliyun.ros.cdk.emr.StarRocksInstance build() {
            return new com.aliyun.ros.cdk.emr.StarRocksInstance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
