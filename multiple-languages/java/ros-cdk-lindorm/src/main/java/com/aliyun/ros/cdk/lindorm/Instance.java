package com.aliyun.ros.cdk.lindorm;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::Lindorm::Instance</code>, which is used to create a Lindorm instance.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-08T09:17:11.752Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.lindorm.$Module.class, fqn = "@alicloud/ros-cdk-lindorm.Instance")
public class Instance extends com.aliyun.ros.cdk.core.Resource {

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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.lindorm.InstanceProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Instance(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.lindorm.InstanceProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AuthInfos: The list of the Lindorm instance auth infos.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAuthInfos() {
        return software.amazon.jsii.Kernel.get(this, "attrAuthInfos", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceId: The ID of the Lindorm instance that is created.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute JdbcUrlList: The list of the jdbc connection address.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrJdbcUrlList() {
        return software.amazon.jsii.Kernel.get(this, "attrJdbcUrlList", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.lindorm.InstanceProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.lindorm.InstanceProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.lindorm.InstanceProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.lindorm.Instance}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.lindorm.Instance> {
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
        private final com.aliyun.ros.cdk.lindorm.InstanceProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.lindorm.InstanceProps.Builder();
        }

        /**
         * Property diskCategory: The storage type of the instance.
         * <p>
         * Valid values:
         * cloud_efficiency: This instance uses the Standard type of storage.
         * cloud_ssd: This instance uses the Performance type of storage.
         * capacity_cloud_storage: This instance uses the Capacity type of storage.
         * local_ssd_pro: This instance uses local SSDs.
         * local_hdd_pro: This instance uses local HDDs.
         * <p>
         * @return {@code this}
         * @param diskCategory Property diskCategory: The storage type of the instance. This parameter is required.
         */
        public Builder diskCategory(final java.lang.String diskCategory) {
            this.props.diskCategory(diskCategory);
            return this;
        }
        /**
         * Property diskCategory: The storage type of the instance.
         * <p>
         * Valid values:
         * cloud_efficiency: This instance uses the Standard type of storage.
         * cloud_ssd: This instance uses the Performance type of storage.
         * capacity_cloud_storage: This instance uses the Capacity type of storage.
         * local_ssd_pro: This instance uses local SSDs.
         * local_hdd_pro: This instance uses local HDDs.
         * <p>
         * @return {@code this}
         * @param diskCategory Property diskCategory: The storage type of the instance. This parameter is required.
         */
        public Builder diskCategory(final com.aliyun.ros.cdk.core.IResolvable diskCategory) {
            this.props.diskCategory(diskCategory);
            return this;
        }

        /**
         * Property instanceName: The name of the instance that you want to create.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The name of the instance that you want to create. This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }
        /**
         * Property instanceName: The name of the instance that you want to create.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The name of the instance that you want to create. This parameter is required.
         */
        public Builder instanceName(final com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }

        /**
         * Property vpcId: The ID of the VPC in which you want to create the instance.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VPC in which you want to create the instance. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: The ID of the VPC in which you want to create the instance.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The ID of the VPC in which you want to create the instance. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property coldStorage: The cold storage capacity of the instance.
         * <p>
         * By default, if you leave this parameter unspecified, cold storage is not enabled for the instance. Unit: GB. Valid values: 800 to 1000000.
         * <p>
         * @return {@code this}
         * @param coldStorage Property coldStorage: The cold storage capacity of the instance. This parameter is required.
         */
        public Builder coldStorage(final java.lang.Number coldStorage) {
            this.props.coldStorage(coldStorage);
            return this;
        }
        /**
         * Property coldStorage: The cold storage capacity of the instance.
         * <p>
         * By default, if you leave this parameter unspecified, cold storage is not enabled for the instance. Unit: GB. Valid values: 800 to 1000000.
         * <p>
         * @return {@code this}
         * @param coldStorage Property coldStorage: The cold storage capacity of the instance. This parameter is required.
         */
        public Builder coldStorage(final com.aliyun.ros.cdk.core.IResolvable coldStorage) {
            this.props.coldStorage(coldStorage);
            return this;
        }

        /**
         * Property coreSpec: The specification of the nodes in the instance if you set DiskCategory to local_ssd_pro or local_hdd_pro.
         * <p>
         * When DiskCategory is set to local_ssd_pro, you can set this parameter to the following values:
         * lindorm.i2.xlarge: Each node has 4 dedicated CPU cores and 32 GB of dedicated memory.
         * lindorm.i2.2xlarge: Each node has 8 dedicated CPU cores and 64 GB of dedicated memory.
         * lindorm.i2.4xlarge: Each node has 16 dedicated CPU cores and 128 GB of dedicated memory.
         * lindorm.i2.8xlarge: Each node has 32 dedicated CPU cores and 256 GB of dedicated memory.
         * When DiskCategory is set to local_hdd_pro, you can set this parameter to the following values:
         * lindorm.d1.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
         * lindorm.d1.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
         * lindorm.d1.6xlarge: Each node has 24 dedicated CPU cores and 96 GB of dedicated memory.
         * <p>
         * @return {@code this}
         * @param coreSpec Property coreSpec: The specification of the nodes in the instance if you set DiskCategory to local_ssd_pro or local_hdd_pro. This parameter is required.
         */
        public Builder coreSpec(final java.lang.String coreSpec) {
            this.props.coreSpec(coreSpec);
            return this;
        }
        /**
         * Property coreSpec: The specification of the nodes in the instance if you set DiskCategory to local_ssd_pro or local_hdd_pro.
         * <p>
         * When DiskCategory is set to local_ssd_pro, you can set this parameter to the following values:
         * lindorm.i2.xlarge: Each node has 4 dedicated CPU cores and 32 GB of dedicated memory.
         * lindorm.i2.2xlarge: Each node has 8 dedicated CPU cores and 64 GB of dedicated memory.
         * lindorm.i2.4xlarge: Each node has 16 dedicated CPU cores and 128 GB of dedicated memory.
         * lindorm.i2.8xlarge: Each node has 32 dedicated CPU cores and 256 GB of dedicated memory.
         * When DiskCategory is set to local_hdd_pro, you can set this parameter to the following values:
         * lindorm.d1.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
         * lindorm.d1.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
         * lindorm.d1.6xlarge: Each node has 24 dedicated CPU cores and 96 GB of dedicated memory.
         * <p>
         * @return {@code this}
         * @param coreSpec Property coreSpec: The specification of the nodes in the instance if you set DiskCategory to local_ssd_pro or local_hdd_pro. This parameter is required.
         */
        public Builder coreSpec(final com.aliyun.ros.cdk.core.IResolvable coreSpec) {
            this.props.coreSpec(coreSpec);
            return this;
        }

        /**
         * Property filestoreNum: The number of LindormDFS nodes in the instance.
         * <p>
         * The valid values of this parameter depend on the value of the PayType parameter.
         * If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 60.
         * If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 8.
         * <p>
         * @return {@code this}
         * @param filestoreNum Property filestoreNum: The number of LindormDFS nodes in the instance. This parameter is required.
         */
        public Builder filestoreNum(final java.lang.Number filestoreNum) {
            this.props.filestoreNum(filestoreNum);
            return this;
        }
        /**
         * Property filestoreNum: The number of LindormDFS nodes in the instance.
         * <p>
         * The valid values of this parameter depend on the value of the PayType parameter.
         * If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 60.
         * If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 8.
         * <p>
         * @return {@code this}
         * @param filestoreNum Property filestoreNum: The number of LindormDFS nodes in the instance. This parameter is required.
         */
        public Builder filestoreNum(final com.aliyun.ros.cdk.core.IResolvable filestoreNum) {
            this.props.filestoreNum(filestoreNum);
            return this;
        }

        /**
         * Property filestoreSpec: The specification of LindormDFS nodes in the instance.
         * <p>
         * Set the value of this parameter to lindorm.c.xlarge, which indicates that each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
         * <p>
         * @return {@code this}
         * @param filestoreSpec Property filestoreSpec: The specification of LindormDFS nodes in the instance. This parameter is required.
         */
        public Builder filestoreSpec(final java.lang.String filestoreSpec) {
            this.props.filestoreSpec(filestoreSpec);
            return this;
        }
        /**
         * Property filestoreSpec: The specification of LindormDFS nodes in the instance.
         * <p>
         * Set the value of this parameter to lindorm.c.xlarge, which indicates that each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
         * <p>
         * @return {@code this}
         * @param filestoreSpec Property filestoreSpec: The specification of LindormDFS nodes in the instance. This parameter is required.
         */
        public Builder filestoreSpec(final com.aliyun.ros.cdk.core.IResolvable filestoreSpec) {
            this.props.filestoreSpec(filestoreSpec);
            return this;
        }

        /**
         * Property instanceChargeType: The billing method of the instance you want to create.
         * <p>
         * Valid values:
         * PREPAY: subscription.
         * POSTPAY: pay-as-you-go.
         * Default value: POSTPAY
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: The billing method of the instance you want to create. This parameter is required.
         */
        public Builder instanceChargeType(final java.lang.String instanceChargeType) {
            this.props.instanceChargeType(instanceChargeType);
            return this;
        }
        /**
         * Property instanceChargeType: The billing method of the instance you want to create.
         * <p>
         * Valid values:
         * PREPAY: subscription.
         * POSTPAY: pay-as-you-go.
         * Default value: POSTPAY
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: The billing method of the instance you want to create. This parameter is required.
         */
        public Builder instanceChargeType(final com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.props.instanceChargeType(instanceChargeType);
            return this;
        }

        /**
         * Property instanceStorage: The storage capacity of the instance you want to create.
         * <p>
         * Unit: GB.
         * <p>
         * @return {@code this}
         * @param instanceStorage Property instanceStorage: The storage capacity of the instance you want to create. This parameter is required.
         */
        public Builder instanceStorage(final java.lang.Number instanceStorage) {
            this.props.instanceStorage(instanceStorage);
            return this;
        }
        /**
         * Property instanceStorage: The storage capacity of the instance you want to create.
         * <p>
         * Unit: GB.
         * <p>
         * @return {@code this}
         * @param instanceStorage Property instanceStorage: The storage capacity of the instance you want to create. This parameter is required.
         */
        public Builder instanceStorage(final com.aliyun.ros.cdk.core.IResolvable instanceStorage) {
            this.props.instanceStorage(instanceStorage);
            return this;
        }

        /**
         * Property lindormNum: The number of LindormTable nodes in the instance.
         * <p>
         * The valid values of this parameter depend on the value of the PayType parameter.
         * If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 90.
         * If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 400.
         * ** This parameter is required if you want to create a multi-zone instance. ** The valid values of this parameter range from 4 to 400 if you want to create a multi-zone instance.
         * <p>
         * @return {@code this}
         * @param lindormNum Property lindormNum: The number of LindormTable nodes in the instance. This parameter is required.
         */
        public Builder lindormNum(final java.lang.Number lindormNum) {
            this.props.lindormNum(lindormNum);
            return this;
        }
        /**
         * Property lindormNum: The number of LindormTable nodes in the instance.
         * <p>
         * The valid values of this parameter depend on the value of the PayType parameter.
         * If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 90.
         * If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 400.
         * ** This parameter is required if you want to create a multi-zone instance. ** The valid values of this parameter range from 4 to 400 if you want to create a multi-zone instance.
         * <p>
         * @return {@code this}
         * @param lindormNum Property lindormNum: The number of LindormTable nodes in the instance. This parameter is required.
         */
        public Builder lindormNum(final com.aliyun.ros.cdk.core.IResolvable lindormNum) {
            this.props.lindormNum(lindormNum);
            return this;
        }

        /**
         * Property lindormSpec: The specification of LindormTable nodes in the instance.
         * <p>
         * Valid values:
         * lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
         * lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
         * lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
         * lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
         * lindorm.c.xlarge: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
         * lindorm.c.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
         * lindorm.c.4xlarge: Each node has 16 dedicated CPU cores and 32 GB of dedicated memory.
         * lindorm.c.8xlarge: Each node has 32 dedicated CPU cores and 64 GB of dedicated memory.
         * <p>
         * @return {@code this}
         * @param lindormSpec Property lindormSpec: The specification of LindormTable nodes in the instance. This parameter is required.
         */
        public Builder lindormSpec(final java.lang.String lindormSpec) {
            this.props.lindormSpec(lindormSpec);
            return this;
        }
        /**
         * Property lindormSpec: The specification of LindormTable nodes in the instance.
         * <p>
         * Valid values:
         * lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
         * lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
         * lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
         * lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
         * lindorm.c.xlarge: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
         * lindorm.c.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
         * lindorm.c.4xlarge: Each node has 16 dedicated CPU cores and 32 GB of dedicated memory.
         * lindorm.c.8xlarge: Each node has 32 dedicated CPU cores and 64 GB of dedicated memory.
         * <p>
         * @return {@code this}
         * @param lindormSpec Property lindormSpec: The specification of LindormTable nodes in the instance. This parameter is required.
         */
        public Builder lindormSpec(final com.aliyun.ros.cdk.core.IResolvable lindormSpec) {
            this.props.lindormSpec(lindormSpec);
            return this;
        }

        /**
         * Property period: The subscription period of the instance.
         * <p>
         * The valid values of this parameter depend on the value of the PeriodUnit parameter.
         * If PeriodUnit is set to Month, Valid values are 1,2,3,4,5,6,7,8,9,12,24,36.
         * If PeriodUnit is set to Year, set this parameter to an integer that ranges from 1 to 3.
         * NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription period of the instance. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The subscription period of the instance.
         * <p>
         * The valid values of this parameter depend on the value of the PeriodUnit parameter.
         * If PeriodUnit is set to Month, Valid values are 1,2,3,4,5,6,7,8,9,12,24,36.
         * If PeriodUnit is set to Year, set this parameter to an integer that ranges from 1 to 3.
         * NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
         * <p>
         * @return {@code this}
         * @param period Property period: The subscription period of the instance. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property periodUnit: The period based on which you are charged for the instance.
         * <p>
         * Valid values:
         * Month: You are charged for the instance on a monthly basis.
         * Year: You are charged for the instance on a yearly basis.
         * NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The period based on which you are charged for the instance. This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * Property periodUnit: The period based on which you are charged for the instance.
         * <p>
         * Valid values:
         * Month: You are charged for the instance on a monthly basis.
         * Year: You are charged for the instance on a yearly basis.
         * NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The period based on which you are charged for the instance. This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group to which the Lindorm instance belongs.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the Lindorm instance belongs. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group to which the Lindorm instance belongs.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the Lindorm instance belongs. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property securityIpList: The ip white list of instance.
         * <p>
         * @return {@code this}
         * @param securityIpList Property securityIpList: The ip white list of instance. This parameter is required.
         */
        public Builder securityIpList(final com.aliyun.ros.cdk.core.IResolvable securityIpList) {
            this.props.securityIpList(securityIpList);
            return this;
        }
        /**
         * Property securityIpList: The ip white list of instance.
         * <p>
         * @return {@code this}
         * @param securityIpList Property securityIpList: The ip white list of instance. This parameter is required.
         */
        public Builder securityIpList(final java.util.List<? extends java.lang.Object> securityIpList) {
            this.props.securityIpList(securityIpList);
            return this;
        }

        /**
         * Property solrNum: The number of LindormSearch nodes in the instance.
         * <p>
         * Valid values: integers from 0 to 60.
         * <p>
         * @return {@code this}
         * @param solrNum Property solrNum: The number of LindormSearch nodes in the instance. This parameter is required.
         */
        public Builder solrNum(final java.lang.Number solrNum) {
            this.props.solrNum(solrNum);
            return this;
        }
        /**
         * Property solrNum: The number of LindormSearch nodes in the instance.
         * <p>
         * Valid values: integers from 0 to 60.
         * <p>
         * @return {@code this}
         * @param solrNum Property solrNum: The number of LindormSearch nodes in the instance. This parameter is required.
         */
        public Builder solrNum(final com.aliyun.ros.cdk.core.IResolvable solrNum) {
            this.props.solrNum(solrNum);
            return this;
        }

        /**
         * Property solrSpec: The specification of the LindormSearch nodes in the instance.
         * <p>
         * Valid values:
         * lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
         * lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
         * lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
         * lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
         * <p>
         * @return {@code this}
         * @param solrSpec Property solrSpec: The specification of the LindormSearch nodes in the instance. This parameter is required.
         */
        public Builder solrSpec(final java.lang.String solrSpec) {
            this.props.solrSpec(solrSpec);
            return this;
        }
        /**
         * Property solrSpec: The specification of the LindormSearch nodes in the instance.
         * <p>
         * Valid values:
         * lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
         * lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
         * lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
         * lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
         * <p>
         * @return {@code this}
         * @param solrSpec Property solrSpec: The specification of the LindormSearch nodes in the instance. This parameter is required.
         */
        public Builder solrSpec(final com.aliyun.ros.cdk.core.IResolvable solrSpec) {
            this.props.solrSpec(solrSpec);
            return this;
        }

        /**
         * Property streamNum: The number of LindormStream nodes in the instance.
         * <p>
         * Valid values: integers from 0 to 90.
         * <p>
         * @return {@code this}
         * @param streamNum Property streamNum: The number of LindormStream nodes in the instance. This parameter is required.
         */
        public Builder streamNum(final java.lang.Number streamNum) {
            this.props.streamNum(streamNum);
            return this;
        }
        /**
         * Property streamNum: The number of LindormStream nodes in the instance.
         * <p>
         * Valid values: integers from 0 to 90.
         * <p>
         * @return {@code this}
         * @param streamNum Property streamNum: The number of LindormStream nodes in the instance. This parameter is required.
         */
        public Builder streamNum(final com.aliyun.ros.cdk.core.IResolvable streamNum) {
            this.props.streamNum(streamNum);
            return this;
        }

        /**
         * Property streamSpec: The specification of LindormStream nodes in the instance.
         * <p>
         * Valid values:
         * lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
         * lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
         * lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
         * lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
         * lindorm.c.xlarge: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
         * lindorm.c.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
         * lindorm.c.4xlarge: Each node has 16 dedicated CPU cores and 32 GB of dedicated memory.
         * lindorm.c.8xlarge: Each node has 32 dedicated CPU cores and 64 GB of dedicated memory.
         * <p>
         * @return {@code this}
         * @param streamSpec Property streamSpec: The specification of LindormStream nodes in the instance. This parameter is required.
         */
        public Builder streamSpec(final java.lang.String streamSpec) {
            this.props.streamSpec(streamSpec);
            return this;
        }
        /**
         * Property streamSpec: The specification of LindormStream nodes in the instance.
         * <p>
         * Valid values:
         * lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
         * lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
         * lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
         * lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
         * lindorm.c.xlarge: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
         * lindorm.c.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
         * lindorm.c.4xlarge: Each node has 16 dedicated CPU cores and 32 GB of dedicated memory.
         * lindorm.c.8xlarge: Each node has 32 dedicated CPU cores and 64 GB of dedicated memory.
         * <p>
         * @return {@code this}
         * @param streamSpec Property streamSpec: The specification of LindormStream nodes in the instance. This parameter is required.
         */
        public Builder streamSpec(final com.aliyun.ros.cdk.core.IResolvable streamSpec) {
            this.props.streamSpec(streamSpec);
            return this;
        }

        /**
         * Property tsdbNum: The number of the LindormTSDB nodes in the instance.
         * <p>
         * The valid values of this parameter depend on the value of the PayType parameter.
         * If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 24.
         * If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 32.
         * <p>
         * @return {@code this}
         * @param tsdbNum Property tsdbNum: The number of the LindormTSDB nodes in the instance. This parameter is required.
         */
        public Builder tsdbNum(final java.lang.Number tsdbNum) {
            this.props.tsdbNum(tsdbNum);
            return this;
        }
        /**
         * Property tsdbNum: The number of the LindormTSDB nodes in the instance.
         * <p>
         * The valid values of this parameter depend on the value of the PayType parameter.
         * If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 24.
         * If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 32.
         * <p>
         * @return {@code this}
         * @param tsdbNum Property tsdbNum: The number of the LindormTSDB nodes in the instance. This parameter is required.
         */
        public Builder tsdbNum(final com.aliyun.ros.cdk.core.IResolvable tsdbNum) {
            this.props.tsdbNum(tsdbNum);
            return this;
        }

        /**
         * Property tsdbSpec: The specification of the LindormTSDB nodes in the instance.
         * <p>
         * Valid values:
         * lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
         * lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
         * lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
         * lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
         * <p>
         * @return {@code this}
         * @param tsdbSpec Property tsdbSpec: The specification of the LindormTSDB nodes in the instance. This parameter is required.
         */
        public Builder tsdbSpec(final java.lang.String tsdbSpec) {
            this.props.tsdbSpec(tsdbSpec);
            return this;
        }
        /**
         * Property tsdbSpec: The specification of the LindormTSDB nodes in the instance.
         * <p>
         * Valid values:
         * lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
         * lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
         * lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
         * lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
         * <p>
         * @return {@code this}
         * @param tsdbSpec Property tsdbSpec: The specification of the LindormTSDB nodes in the instance. This parameter is required.
         */
        public Builder tsdbSpec(final com.aliyun.ros.cdk.core.IResolvable tsdbSpec) {
            this.props.tsdbSpec(tsdbSpec);
            return this;
        }

        /**
         * Property vSwitchId: The ID of the vSwitch to which you want the instance to connect.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch to which you want the instance to connect. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The ID of the vSwitch to which you want the instance to connect.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch to which you want the instance to connect. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property zoneId: The ID of the zone in which you want to create the instance.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of the zone in which you want to create the instance. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The ID of the zone in which you want to create the instance.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of the zone in which you want to create the instance. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.lindorm.Instance}.
         */
        @Override
        public com.aliyun.ros.cdk.lindorm.Instance build() {
            return new com.aliyun.ros.cdk.lindorm.Instance(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
