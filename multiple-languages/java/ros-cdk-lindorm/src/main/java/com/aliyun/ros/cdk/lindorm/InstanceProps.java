package com.aliyun.ros.cdk.lindorm;

/**
 * Properties for defining a <code>Instance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-lindorm-instance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-08-22T08:56:22.224Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.lindorm.$Module.class, fqn = "@alicloud/ros-cdk-lindorm.InstanceProps")
@software.amazon.jsii.Jsii.Proxy(InstanceProps.Jsii$Proxy.class)
public interface InstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property diskCategory: The storage type of the instance.
     * <p>
     * Valid values:
     * cloud_efficiency: This instance uses the Standard type of storage.
     * cloud_ssd: This instance uses the Performance type of storage.
     * capacity_cloud_storage: This instance uses the Capacity type of storage.
     * local_ssd_pro: This instance uses local SSDs.
     * local_hdd_pro: This instance uses local HDDs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDiskCategory();

    /**
     * Property instanceName: The name of the instance that you want to create.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceName();

    /**
     * Property vpcId: The ID of the VPC in which you want to create the instance.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getVpcId();

    /**
     * Property coldStorage: The cold storage capacity of the instance.
     * <p>
     * By default, if you leave this parameter unspecified, cold storage is not enabled for the instance. Unit: GB. Valid values: 800 to 1000000.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getColdStorage() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCoreSpec() {
        return null;
    }

    /**
     * Property filestoreNum: The number of LindormDFS nodes in the instance.
     * <p>
     * The valid values of this parameter depend on the value of the PayType parameter.
     * If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 60.
     * If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 8.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFilestoreNum() {
        return null;
    }

    /**
     * Property filestoreSpec: The specification of LindormDFS nodes in the instance.
     * <p>
     * Set the value of this parameter to lindorm.c.xlarge, which indicates that each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFilestoreSpec() {
        return null;
    }

    /**
     * Property instanceChargeType: The billing method of the instance you want to create.
     * <p>
     * Valid values:
     * PREPAY: subscription.
     * POSTPAY: pay-as-you-go.
     * Default value: POSTPAY
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceChargeType() {
        return null;
    }

    /**
     * Property instanceStorage: The storage capacity of the instance you want to create.
     * <p>
     * Unit: GB.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceStorage() {
        return null;
    }

    /**
     * Property lindormNum: The number of LindormTable nodes in the instance.
     * <p>
     * The valid values of this parameter depend on the value of the PayType parameter.
     * If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 90.
     * If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 400.
     * ** This parameter is required if you want to create a multi-zone instance. ** The valid values of this parameter range from 4 to 400 if you want to create a multi-zone instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLindormNum() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLindormSpec() {
        return null;
    }

    /**
     * Property period: The subscription period of the instance.
     * <p>
     * The valid values of this parameter depend on the value of the PeriodUnit parameter.
     * If PeriodUnit is set to Month, Valid values are 1,2,3,4,5,6,7,8,9,12,24,36.
     * If PeriodUnit is set to Year, set this parameter to an integer that ranges from 1 to 3.
     * NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property periodUnit: The period based on which you are charged for the instance.
     * <p>
     * Valid values:
     * Month: You are charged for the instance on a monthly basis.
     * Year: You are charged for the instance on a yearly basis.
     * NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group to which the Lindorm instance belongs.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property securityIpList: The ip white list of instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSecurityIpList() {
        return null;
    }

    /**
     * Property solrNum: The number of LindormSearch nodes in the instance.
     * <p>
     * Valid values: integers from 0 to 60.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSolrNum() {
        return null;
    }

    /**
     * Property solrSpec: The specification of the LindormSearch nodes in the instance.
     * <p>
     * Valid values:
     * lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
     * lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
     * lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
     * lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSolrSpec() {
        return null;
    }

    /**
     * Property streamNum: The number of LindormStream nodes in the instance.
     * <p>
     * Valid values: integers from 0 to 90.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStreamNum() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStreamSpec() {
        return null;
    }

    /**
     * Property tsdbNum: The number of the LindormTSDB nodes in the instance.
     * <p>
     * The valid values of this parameter depend on the value of the PayType parameter.
     * If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 24.
     * If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 32.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTsdbNum() {
        return null;
    }

    /**
     * Property tsdbSpec: The specification of the LindormTSDB nodes in the instance.
     * <p>
     * Valid values:
     * lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
     * lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
     * lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
     * lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTsdbSpec() {
        return null;
    }

    /**
     * Property vSwitchId: The ID of the vSwitch to which you want the instance to connect.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getVSwitchId() {
        return null;
    }

    /**
     * Property zoneId: The ID of the zone in which you want to create the instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getZoneId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link InstanceProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link InstanceProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<InstanceProps> {
        java.lang.Object diskCategory;
        java.lang.Object instanceName;
        java.lang.Object vpcId;
        java.lang.Object coldStorage;
        java.lang.Object coreSpec;
        java.lang.Object filestoreNum;
        java.lang.Object filestoreSpec;
        java.lang.Object instanceChargeType;
        java.lang.Object instanceStorage;
        java.lang.Object lindormNum;
        java.lang.Object lindormSpec;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object resourceGroupId;
        java.lang.Object securityIpList;
        java.lang.Object solrNum;
        java.lang.Object solrSpec;
        java.lang.Object streamNum;
        java.lang.Object streamSpec;
        java.lang.Object tsdbNum;
        java.lang.Object tsdbSpec;
        java.lang.Object vSwitchId;
        java.lang.Object zoneId;

        /**
         * Sets the value of {@link InstanceProps#getDiskCategory}
         * @param diskCategory Property diskCategory: The storage type of the instance. This parameter is required.
         *                     Valid values:
         *                     cloud_efficiency: This instance uses the Standard type of storage.
         *                     cloud_ssd: This instance uses the Performance type of storage.
         *                     capacity_cloud_storage: This instance uses the Capacity type of storage.
         *                     local_ssd_pro: This instance uses local SSDs.
         *                     local_hdd_pro: This instance uses local HDDs.
         * @return {@code this}
         */
        public Builder diskCategory(java.lang.String diskCategory) {
            this.diskCategory = diskCategory;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDiskCategory}
         * @param diskCategory Property diskCategory: The storage type of the instance. This parameter is required.
         *                     Valid values:
         *                     cloud_efficiency: This instance uses the Standard type of storage.
         *                     cloud_ssd: This instance uses the Performance type of storage.
         *                     capacity_cloud_storage: This instance uses the Capacity type of storage.
         *                     local_ssd_pro: This instance uses local SSDs.
         *                     local_hdd_pro: This instance uses local HDDs.
         * @return {@code this}
         */
        public Builder diskCategory(com.aliyun.ros.cdk.core.IResolvable diskCategory) {
            this.diskCategory = diskCategory;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceName}
         * @param instanceName Property instanceName: The name of the instance that you want to create. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceName}
         * @param instanceName Property instanceName: The name of the instance that you want to create. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC in which you want to create the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(java.lang.String vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVpcId}
         * @param vpcId Property vpcId: The ID of the VPC in which you want to create the instance. This parameter is required.
         * @return {@code this}
         */
        public Builder vpcId(com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.vpcId = vpcId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getColdStorage}
         * @param coldStorage Property coldStorage: The cold storage capacity of the instance.
         *                    By default, if you leave this parameter unspecified, cold storage is not enabled for the instance. Unit: GB. Valid values: 800 to 1000000.
         * @return {@code this}
         */
        public Builder coldStorage(java.lang.Number coldStorage) {
            this.coldStorage = coldStorage;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getColdStorage}
         * @param coldStorage Property coldStorage: The cold storage capacity of the instance.
         *                    By default, if you leave this parameter unspecified, cold storage is not enabled for the instance. Unit: GB. Valid values: 800 to 1000000.
         * @return {@code this}
         */
        public Builder coldStorage(com.aliyun.ros.cdk.core.IResolvable coldStorage) {
            this.coldStorage = coldStorage;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getCoreSpec}
         * @param coreSpec Property coreSpec: The specification of the nodes in the instance if you set DiskCategory to local_ssd_pro or local_hdd_pro.
         *                 When DiskCategory is set to local_ssd_pro, you can set this parameter to the following values:
         *                 lindorm.i2.xlarge: Each node has 4 dedicated CPU cores and 32 GB of dedicated memory.
         *                 lindorm.i2.2xlarge: Each node has 8 dedicated CPU cores and 64 GB of dedicated memory.
         *                 lindorm.i2.4xlarge: Each node has 16 dedicated CPU cores and 128 GB of dedicated memory.
         *                 lindorm.i2.8xlarge: Each node has 32 dedicated CPU cores and 256 GB of dedicated memory.
         *                 When DiskCategory is set to local_hdd_pro, you can set this parameter to the following values:
         *                 lindorm.d1.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
         *                 lindorm.d1.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
         *                 lindorm.d1.6xlarge: Each node has 24 dedicated CPU cores and 96 GB of dedicated memory.
         * @return {@code this}
         */
        public Builder coreSpec(java.lang.String coreSpec) {
            this.coreSpec = coreSpec;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getCoreSpec}
         * @param coreSpec Property coreSpec: The specification of the nodes in the instance if you set DiskCategory to local_ssd_pro or local_hdd_pro.
         *                 When DiskCategory is set to local_ssd_pro, you can set this parameter to the following values:
         *                 lindorm.i2.xlarge: Each node has 4 dedicated CPU cores and 32 GB of dedicated memory.
         *                 lindorm.i2.2xlarge: Each node has 8 dedicated CPU cores and 64 GB of dedicated memory.
         *                 lindorm.i2.4xlarge: Each node has 16 dedicated CPU cores and 128 GB of dedicated memory.
         *                 lindorm.i2.8xlarge: Each node has 32 dedicated CPU cores and 256 GB of dedicated memory.
         *                 When DiskCategory is set to local_hdd_pro, you can set this parameter to the following values:
         *                 lindorm.d1.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
         *                 lindorm.d1.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
         *                 lindorm.d1.6xlarge: Each node has 24 dedicated CPU cores and 96 GB of dedicated memory.
         * @return {@code this}
         */
        public Builder coreSpec(com.aliyun.ros.cdk.core.IResolvable coreSpec) {
            this.coreSpec = coreSpec;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getFilestoreNum}
         * @param filestoreNum Property filestoreNum: The number of LindormDFS nodes in the instance.
         *                     The valid values of this parameter depend on the value of the PayType parameter.
         *                     If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 60.
         *                     If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 8.
         * @return {@code this}
         */
        public Builder filestoreNum(java.lang.Number filestoreNum) {
            this.filestoreNum = filestoreNum;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getFilestoreNum}
         * @param filestoreNum Property filestoreNum: The number of LindormDFS nodes in the instance.
         *                     The valid values of this parameter depend on the value of the PayType parameter.
         *                     If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 60.
         *                     If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 8.
         * @return {@code this}
         */
        public Builder filestoreNum(com.aliyun.ros.cdk.core.IResolvable filestoreNum) {
            this.filestoreNum = filestoreNum;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getFilestoreSpec}
         * @param filestoreSpec Property filestoreSpec: The specification of LindormDFS nodes in the instance.
         *                      Set the value of this parameter to lindorm.c.xlarge, which indicates that each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
         * @return {@code this}
         */
        public Builder filestoreSpec(java.lang.String filestoreSpec) {
            this.filestoreSpec = filestoreSpec;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getFilestoreSpec}
         * @param filestoreSpec Property filestoreSpec: The specification of LindormDFS nodes in the instance.
         *                      Set the value of this parameter to lindorm.c.xlarge, which indicates that each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
         * @return {@code this}
         */
        public Builder filestoreSpec(com.aliyun.ros.cdk.core.IResolvable filestoreSpec) {
            this.filestoreSpec = filestoreSpec;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceChargeType}
         * @param instanceChargeType Property instanceChargeType: The billing method of the instance you want to create.
         *                           Valid values:
         *                           PREPAY: subscription.
         *                           POSTPAY: pay-as-you-go.
         *                           Default value: POSTPAY
         * @return {@code this}
         */
        public Builder instanceChargeType(java.lang.String instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceChargeType}
         * @param instanceChargeType Property instanceChargeType: The billing method of the instance you want to create.
         *                           Valid values:
         *                           PREPAY: subscription.
         *                           POSTPAY: pay-as-you-go.
         *                           Default value: POSTPAY
         * @return {@code this}
         */
        public Builder instanceChargeType(com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.instanceChargeType = instanceChargeType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceStorage}
         * @param instanceStorage Property instanceStorage: The storage capacity of the instance you want to create.
         *                        Unit: GB.
         * @return {@code this}
         */
        public Builder instanceStorage(java.lang.Number instanceStorage) {
            this.instanceStorage = instanceStorage;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceStorage}
         * @param instanceStorage Property instanceStorage: The storage capacity of the instance you want to create.
         *                        Unit: GB.
         * @return {@code this}
         */
        public Builder instanceStorage(com.aliyun.ros.cdk.core.IResolvable instanceStorage) {
            this.instanceStorage = instanceStorage;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getLindormNum}
         * @param lindormNum Property lindormNum: The number of LindormTable nodes in the instance.
         *                   The valid values of this parameter depend on the value of the PayType parameter.
         *                   If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 90.
         *                   If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 400.
         *                   ** This parameter is required if you want to create a multi-zone instance. ** The valid values of this parameter range from 4 to 400 if you want to create a multi-zone instance.
         * @return {@code this}
         */
        public Builder lindormNum(java.lang.Number lindormNum) {
            this.lindormNum = lindormNum;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getLindormNum}
         * @param lindormNum Property lindormNum: The number of LindormTable nodes in the instance.
         *                   The valid values of this parameter depend on the value of the PayType parameter.
         *                   If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 90.
         *                   If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 400.
         *                   ** This parameter is required if you want to create a multi-zone instance. ** The valid values of this parameter range from 4 to 400 if you want to create a multi-zone instance.
         * @return {@code this}
         */
        public Builder lindormNum(com.aliyun.ros.cdk.core.IResolvable lindormNum) {
            this.lindormNum = lindormNum;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getLindormSpec}
         * @param lindormSpec Property lindormSpec: The specification of LindormTable nodes in the instance.
         *                    Valid values:
         *                    lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
         *                    lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
         *                    lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
         *                    lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
         *                    lindorm.c.xlarge: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
         *                    lindorm.c.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
         *                    lindorm.c.4xlarge: Each node has 16 dedicated CPU cores and 32 GB of dedicated memory.
         *                    lindorm.c.8xlarge: Each node has 32 dedicated CPU cores and 64 GB of dedicated memory.
         * @return {@code this}
         */
        public Builder lindormSpec(java.lang.String lindormSpec) {
            this.lindormSpec = lindormSpec;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getLindormSpec}
         * @param lindormSpec Property lindormSpec: The specification of LindormTable nodes in the instance.
         *                    Valid values:
         *                    lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
         *                    lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
         *                    lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
         *                    lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
         *                    lindorm.c.xlarge: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
         *                    lindorm.c.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
         *                    lindorm.c.4xlarge: Each node has 16 dedicated CPU cores and 32 GB of dedicated memory.
         *                    lindorm.c.8xlarge: Each node has 32 dedicated CPU cores and 64 GB of dedicated memory.
         * @return {@code this}
         */
        public Builder lindormSpec(com.aliyun.ros.cdk.core.IResolvable lindormSpec) {
            this.lindormSpec = lindormSpec;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPeriod}
         * @param period Property period: The subscription period of the instance.
         *               The valid values of this parameter depend on the value of the PeriodUnit parameter.
         *               If PeriodUnit is set to Month, Valid values are 1,2,3,4,5,6,7,8,9,12,24,36.
         *               If PeriodUnit is set to Year, set this parameter to an integer that ranges from 1 to 3.
         *               NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPeriod}
         * @param period Property period: The subscription period of the instance.
         *               The valid values of this parameter depend on the value of the PeriodUnit parameter.
         *               If PeriodUnit is set to Month, Valid values are 1,2,3,4,5,6,7,8,9,12,24,36.
         *               If PeriodUnit is set to Year, set this parameter to an integer that ranges from 1 to 3.
         *               NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: The period based on which you are charged for the instance.
         *                   Valid values:
         *                   Month: You are charged for the instance on a monthly basis.
         *                   Year: You are charged for the instance on a yearly basis.
         *                   NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: The period based on which you are charged for the instance.
         *                   Valid values:
         *                   Month: You are charged for the instance on a monthly basis.
         *                   Year: You are charged for the instance on a yearly basis.
         *                   NoteThis parameter is available and required when the PayType parameter is set to PREPAY.
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the Lindorm instance belongs.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the Lindorm instance belongs.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSecurityIpList}
         * @param securityIpList Property securityIpList: The ip white list of instance.
         * @return {@code this}
         */
        public Builder securityIpList(com.aliyun.ros.cdk.core.IResolvable securityIpList) {
            this.securityIpList = securityIpList;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSecurityIpList}
         * @param securityIpList Property securityIpList: The ip white list of instance.
         * @return {@code this}
         */
        public Builder securityIpList(java.util.List<? extends java.lang.Object> securityIpList) {
            this.securityIpList = securityIpList;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSolrNum}
         * @param solrNum Property solrNum: The number of LindormSearch nodes in the instance.
         *                Valid values: integers from 0 to 60.
         * @return {@code this}
         */
        public Builder solrNum(java.lang.Number solrNum) {
            this.solrNum = solrNum;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSolrNum}
         * @param solrNum Property solrNum: The number of LindormSearch nodes in the instance.
         *                Valid values: integers from 0 to 60.
         * @return {@code this}
         */
        public Builder solrNum(com.aliyun.ros.cdk.core.IResolvable solrNum) {
            this.solrNum = solrNum;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSolrSpec}
         * @param solrSpec Property solrSpec: The specification of the LindormSearch nodes in the instance.
         *                 Valid values:
         *                 lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
         *                 lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
         *                 lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
         *                 lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
         * @return {@code this}
         */
        public Builder solrSpec(java.lang.String solrSpec) {
            this.solrSpec = solrSpec;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getSolrSpec}
         * @param solrSpec Property solrSpec: The specification of the LindormSearch nodes in the instance.
         *                 Valid values:
         *                 lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
         *                 lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
         *                 lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
         *                 lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
         * @return {@code this}
         */
        public Builder solrSpec(com.aliyun.ros.cdk.core.IResolvable solrSpec) {
            this.solrSpec = solrSpec;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getStreamNum}
         * @param streamNum Property streamNum: The number of LindormStream nodes in the instance.
         *                  Valid values: integers from 0 to 90.
         * @return {@code this}
         */
        public Builder streamNum(java.lang.Number streamNum) {
            this.streamNum = streamNum;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getStreamNum}
         * @param streamNum Property streamNum: The number of LindormStream nodes in the instance.
         *                  Valid values: integers from 0 to 90.
         * @return {@code this}
         */
        public Builder streamNum(com.aliyun.ros.cdk.core.IResolvable streamNum) {
            this.streamNum = streamNum;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getStreamSpec}
         * @param streamSpec Property streamSpec: The specification of LindormStream nodes in the instance.
         *                   Valid values:
         *                   lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
         *                   lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
         *                   lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
         *                   lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
         *                   lindorm.c.xlarge: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
         *                   lindorm.c.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
         *                   lindorm.c.4xlarge: Each node has 16 dedicated CPU cores and 32 GB of dedicated memory.
         *                   lindorm.c.8xlarge: Each node has 32 dedicated CPU cores and 64 GB of dedicated memory.
         * @return {@code this}
         */
        public Builder streamSpec(java.lang.String streamSpec) {
            this.streamSpec = streamSpec;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getStreamSpec}
         * @param streamSpec Property streamSpec: The specification of LindormStream nodes in the instance.
         *                   Valid values:
         *                   lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
         *                   lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
         *                   lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
         *                   lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
         *                   lindorm.c.xlarge: Each node has 4 dedicated CPU cores and 8 GB of dedicated memory.
         *                   lindorm.c.2xlarge: Each node has 8 dedicated CPU cores and 16 GB of dedicated memory.
         *                   lindorm.c.4xlarge: Each node has 16 dedicated CPU cores and 32 GB of dedicated memory.
         *                   lindorm.c.8xlarge: Each node has 32 dedicated CPU cores and 64 GB of dedicated memory.
         * @return {@code this}
         */
        public Builder streamSpec(com.aliyun.ros.cdk.core.IResolvable streamSpec) {
            this.streamSpec = streamSpec;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getTsdbNum}
         * @param tsdbNum Property tsdbNum: The number of the LindormTSDB nodes in the instance.
         *                The valid values of this parameter depend on the value of the PayType parameter.
         *                If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 24.
         *                If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 32.
         * @return {@code this}
         */
        public Builder tsdbNum(java.lang.Number tsdbNum) {
            this.tsdbNum = tsdbNum;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getTsdbNum}
         * @param tsdbNum Property tsdbNum: The number of the LindormTSDB nodes in the instance.
         *                The valid values of this parameter depend on the value of the PayType parameter.
         *                If the PayType parameter is set to PREPAY, set this parameter to an integer that ranges from 0 to 24.
         *                If the PayType parameter is set to POSTPAY, set this parameter to an integer that ranges from 0 to 32.
         * @return {@code this}
         */
        public Builder tsdbNum(com.aliyun.ros.cdk.core.IResolvable tsdbNum) {
            this.tsdbNum = tsdbNum;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getTsdbSpec}
         * @param tsdbSpec Property tsdbSpec: The specification of the LindormTSDB nodes in the instance.
         *                 Valid values:
         *                 lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
         *                 lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
         *                 lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
         *                 lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
         * @return {@code this}
         */
        public Builder tsdbSpec(java.lang.String tsdbSpec) {
            this.tsdbSpec = tsdbSpec;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getTsdbSpec}
         * @param tsdbSpec Property tsdbSpec: The specification of the LindormTSDB nodes in the instance.
         *                 Valid values:
         *                 lindorm.g.xlarge: Each node has 4 dedicated CPU cores and 16 GB of dedicated memory.
         *                 lindorm.g.2xlarge: Each node has 8 dedicated CPU cores and 32 GB of dedicated memory.
         *                 lindorm.g.4xlarge: Each node has 16 dedicated CPU cores and 64 GB of dedicated memory.
         *                 lindorm.g.8xlarge: Each node has 32 dedicated CPU cores and 128 GB of dedicated memory.
         * @return {@code this}
         */
        public Builder tsdbSpec(com.aliyun.ros.cdk.core.IResolvable tsdbSpec) {
            this.tsdbSpec = tsdbSpec;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch to which you want the instance to connect.
         * @return {@code this}
         */
        public Builder vSwitchId(java.lang.String vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getVSwitchId}
         * @param vSwitchId Property vSwitchId: The ID of the vSwitch to which you want the instance to connect.
         * @return {@code this}
         */
        public Builder vSwitchId(com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.vSwitchId = vSwitchId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getZoneId}
         * @param zoneId Property zoneId: The ID of the zone in which you want to create the instance.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getZoneId}
         * @param zoneId Property zoneId: The ID of the zone in which you want to create the instance.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link InstanceProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public InstanceProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link InstanceProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InstanceProps {
        private final java.lang.Object diskCategory;
        private final java.lang.Object instanceName;
        private final java.lang.Object vpcId;
        private final java.lang.Object coldStorage;
        private final java.lang.Object coreSpec;
        private final java.lang.Object filestoreNum;
        private final java.lang.Object filestoreSpec;
        private final java.lang.Object instanceChargeType;
        private final java.lang.Object instanceStorage;
        private final java.lang.Object lindormNum;
        private final java.lang.Object lindormSpec;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object securityIpList;
        private final java.lang.Object solrNum;
        private final java.lang.Object solrSpec;
        private final java.lang.Object streamNum;
        private final java.lang.Object streamSpec;
        private final java.lang.Object tsdbNum;
        private final java.lang.Object tsdbSpec;
        private final java.lang.Object vSwitchId;
        private final java.lang.Object zoneId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.diskCategory = software.amazon.jsii.Kernel.get(this, "diskCategory", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vpcId = software.amazon.jsii.Kernel.get(this, "vpcId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.coldStorage = software.amazon.jsii.Kernel.get(this, "coldStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.coreSpec = software.amazon.jsii.Kernel.get(this, "coreSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.filestoreNum = software.amazon.jsii.Kernel.get(this, "filestoreNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.filestoreSpec = software.amazon.jsii.Kernel.get(this, "filestoreSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceChargeType = software.amazon.jsii.Kernel.get(this, "instanceChargeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceStorage = software.amazon.jsii.Kernel.get(this, "instanceStorage", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.lindormNum = software.amazon.jsii.Kernel.get(this, "lindormNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.lindormSpec = software.amazon.jsii.Kernel.get(this, "lindormSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.securityIpList = software.amazon.jsii.Kernel.get(this, "securityIpList", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.solrNum = software.amazon.jsii.Kernel.get(this, "solrNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.solrSpec = software.amazon.jsii.Kernel.get(this, "solrSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.streamNum = software.amazon.jsii.Kernel.get(this, "streamNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.streamSpec = software.amazon.jsii.Kernel.get(this, "streamSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tsdbNum = software.amazon.jsii.Kernel.get(this, "tsdbNum", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tsdbSpec = software.amazon.jsii.Kernel.get(this, "tsdbSpec", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.vSwitchId = software.amazon.jsii.Kernel.get(this, "vSwitchId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.diskCategory = java.util.Objects.requireNonNull(builder.diskCategory, "diskCategory is required");
            this.instanceName = java.util.Objects.requireNonNull(builder.instanceName, "instanceName is required");
            this.vpcId = java.util.Objects.requireNonNull(builder.vpcId, "vpcId is required");
            this.coldStorage = builder.coldStorage;
            this.coreSpec = builder.coreSpec;
            this.filestoreNum = builder.filestoreNum;
            this.filestoreSpec = builder.filestoreSpec;
            this.instanceChargeType = builder.instanceChargeType;
            this.instanceStorage = builder.instanceStorage;
            this.lindormNum = builder.lindormNum;
            this.lindormSpec = builder.lindormSpec;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.resourceGroupId = builder.resourceGroupId;
            this.securityIpList = builder.securityIpList;
            this.solrNum = builder.solrNum;
            this.solrSpec = builder.solrSpec;
            this.streamNum = builder.streamNum;
            this.streamSpec = builder.streamSpec;
            this.tsdbNum = builder.tsdbNum;
            this.tsdbSpec = builder.tsdbSpec;
            this.vSwitchId = builder.vSwitchId;
            this.zoneId = builder.zoneId;
        }

        @Override
        public final java.lang.Object getDiskCategory() {
            return this.diskCategory;
        }

        @Override
        public final java.lang.Object getInstanceName() {
            return this.instanceName;
        }

        @Override
        public final java.lang.Object getVpcId() {
            return this.vpcId;
        }

        @Override
        public final java.lang.Object getColdStorage() {
            return this.coldStorage;
        }

        @Override
        public final java.lang.Object getCoreSpec() {
            return this.coreSpec;
        }

        @Override
        public final java.lang.Object getFilestoreNum() {
            return this.filestoreNum;
        }

        @Override
        public final java.lang.Object getFilestoreSpec() {
            return this.filestoreSpec;
        }

        @Override
        public final java.lang.Object getInstanceChargeType() {
            return this.instanceChargeType;
        }

        @Override
        public final java.lang.Object getInstanceStorage() {
            return this.instanceStorage;
        }

        @Override
        public final java.lang.Object getLindormNum() {
            return this.lindormNum;
        }

        @Override
        public final java.lang.Object getLindormSpec() {
            return this.lindormSpec;
        }

        @Override
        public final java.lang.Object getPeriod() {
            return this.period;
        }

        @Override
        public final java.lang.Object getPeriodUnit() {
            return this.periodUnit;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getSecurityIpList() {
            return this.securityIpList;
        }

        @Override
        public final java.lang.Object getSolrNum() {
            return this.solrNum;
        }

        @Override
        public final java.lang.Object getSolrSpec() {
            return this.solrSpec;
        }

        @Override
        public final java.lang.Object getStreamNum() {
            return this.streamNum;
        }

        @Override
        public final java.lang.Object getStreamSpec() {
            return this.streamSpec;
        }

        @Override
        public final java.lang.Object getTsdbNum() {
            return this.tsdbNum;
        }

        @Override
        public final java.lang.Object getTsdbSpec() {
            return this.tsdbSpec;
        }

        @Override
        public final java.lang.Object getVSwitchId() {
            return this.vSwitchId;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("diskCategory", om.valueToTree(this.getDiskCategory()));
            data.set("instanceName", om.valueToTree(this.getInstanceName()));
            data.set("vpcId", om.valueToTree(this.getVpcId()));
            if (this.getColdStorage() != null) {
                data.set("coldStorage", om.valueToTree(this.getColdStorage()));
            }
            if (this.getCoreSpec() != null) {
                data.set("coreSpec", om.valueToTree(this.getCoreSpec()));
            }
            if (this.getFilestoreNum() != null) {
                data.set("filestoreNum", om.valueToTree(this.getFilestoreNum()));
            }
            if (this.getFilestoreSpec() != null) {
                data.set("filestoreSpec", om.valueToTree(this.getFilestoreSpec()));
            }
            if (this.getInstanceChargeType() != null) {
                data.set("instanceChargeType", om.valueToTree(this.getInstanceChargeType()));
            }
            if (this.getInstanceStorage() != null) {
                data.set("instanceStorage", om.valueToTree(this.getInstanceStorage()));
            }
            if (this.getLindormNum() != null) {
                data.set("lindormNum", om.valueToTree(this.getLindormNum()));
            }
            if (this.getLindormSpec() != null) {
                data.set("lindormSpec", om.valueToTree(this.getLindormSpec()));
            }
            if (this.getPeriod() != null) {
                data.set("period", om.valueToTree(this.getPeriod()));
            }
            if (this.getPeriodUnit() != null) {
                data.set("periodUnit", om.valueToTree(this.getPeriodUnit()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getSecurityIpList() != null) {
                data.set("securityIpList", om.valueToTree(this.getSecurityIpList()));
            }
            if (this.getSolrNum() != null) {
                data.set("solrNum", om.valueToTree(this.getSolrNum()));
            }
            if (this.getSolrSpec() != null) {
                data.set("solrSpec", om.valueToTree(this.getSolrSpec()));
            }
            if (this.getStreamNum() != null) {
                data.set("streamNum", om.valueToTree(this.getStreamNum()));
            }
            if (this.getStreamSpec() != null) {
                data.set("streamSpec", om.valueToTree(this.getStreamSpec()));
            }
            if (this.getTsdbNum() != null) {
                data.set("tsdbNum", om.valueToTree(this.getTsdbNum()));
            }
            if (this.getTsdbSpec() != null) {
                data.set("tsdbSpec", om.valueToTree(this.getTsdbSpec()));
            }
            if (this.getVSwitchId() != null) {
                data.set("vSwitchId", om.valueToTree(this.getVSwitchId()));
            }
            if (this.getZoneId() != null) {
                data.set("zoneId", om.valueToTree(this.getZoneId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-lindorm.InstanceProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            InstanceProps.Jsii$Proxy that = (InstanceProps.Jsii$Proxy) o;

            if (!diskCategory.equals(that.diskCategory)) return false;
            if (!instanceName.equals(that.instanceName)) return false;
            if (!vpcId.equals(that.vpcId)) return false;
            if (this.coldStorage != null ? !this.coldStorage.equals(that.coldStorage) : that.coldStorage != null) return false;
            if (this.coreSpec != null ? !this.coreSpec.equals(that.coreSpec) : that.coreSpec != null) return false;
            if (this.filestoreNum != null ? !this.filestoreNum.equals(that.filestoreNum) : that.filestoreNum != null) return false;
            if (this.filestoreSpec != null ? !this.filestoreSpec.equals(that.filestoreSpec) : that.filestoreSpec != null) return false;
            if (this.instanceChargeType != null ? !this.instanceChargeType.equals(that.instanceChargeType) : that.instanceChargeType != null) return false;
            if (this.instanceStorage != null ? !this.instanceStorage.equals(that.instanceStorage) : that.instanceStorage != null) return false;
            if (this.lindormNum != null ? !this.lindormNum.equals(that.lindormNum) : that.lindormNum != null) return false;
            if (this.lindormSpec != null ? !this.lindormSpec.equals(that.lindormSpec) : that.lindormSpec != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.securityIpList != null ? !this.securityIpList.equals(that.securityIpList) : that.securityIpList != null) return false;
            if (this.solrNum != null ? !this.solrNum.equals(that.solrNum) : that.solrNum != null) return false;
            if (this.solrSpec != null ? !this.solrSpec.equals(that.solrSpec) : that.solrSpec != null) return false;
            if (this.streamNum != null ? !this.streamNum.equals(that.streamNum) : that.streamNum != null) return false;
            if (this.streamSpec != null ? !this.streamSpec.equals(that.streamSpec) : that.streamSpec != null) return false;
            if (this.tsdbNum != null ? !this.tsdbNum.equals(that.tsdbNum) : that.tsdbNum != null) return false;
            if (this.tsdbSpec != null ? !this.tsdbSpec.equals(that.tsdbSpec) : that.tsdbSpec != null) return false;
            if (this.vSwitchId != null ? !this.vSwitchId.equals(that.vSwitchId) : that.vSwitchId != null) return false;
            return this.zoneId != null ? this.zoneId.equals(that.zoneId) : that.zoneId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.diskCategory.hashCode();
            result = 31 * result + (this.instanceName.hashCode());
            result = 31 * result + (this.vpcId.hashCode());
            result = 31 * result + (this.coldStorage != null ? this.coldStorage.hashCode() : 0);
            result = 31 * result + (this.coreSpec != null ? this.coreSpec.hashCode() : 0);
            result = 31 * result + (this.filestoreNum != null ? this.filestoreNum.hashCode() : 0);
            result = 31 * result + (this.filestoreSpec != null ? this.filestoreSpec.hashCode() : 0);
            result = 31 * result + (this.instanceChargeType != null ? this.instanceChargeType.hashCode() : 0);
            result = 31 * result + (this.instanceStorage != null ? this.instanceStorage.hashCode() : 0);
            result = 31 * result + (this.lindormNum != null ? this.lindormNum.hashCode() : 0);
            result = 31 * result + (this.lindormSpec != null ? this.lindormSpec.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.securityIpList != null ? this.securityIpList.hashCode() : 0);
            result = 31 * result + (this.solrNum != null ? this.solrNum.hashCode() : 0);
            result = 31 * result + (this.solrSpec != null ? this.solrSpec.hashCode() : 0);
            result = 31 * result + (this.streamNum != null ? this.streamNum.hashCode() : 0);
            result = 31 * result + (this.streamSpec != null ? this.streamSpec.hashCode() : 0);
            result = 31 * result + (this.tsdbNum != null ? this.tsdbNum.hashCode() : 0);
            result = 31 * result + (this.tsdbSpec != null ? this.tsdbSpec.hashCode() : 0);
            result = 31 * result + (this.vSwitchId != null ? this.vSwitchId.hashCode() : 0);
            result = 31 * result + (this.zoneId != null ? this.zoneId.hashCode() : 0);
            return result;
        }
    }
}
