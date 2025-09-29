package com.aliyun.ros.cdk.hologram;

/**
 * Properties for defining a <code>Instance</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-hologram-instance
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:26.493Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.hologram.$Module.class, fqn = "@alicloud/ros-cdk-hologram.InstanceProps")
@software.amazon.jsii.Jsii.Proxy(InstanceProps.Jsii$Proxy.class)
public interface InstanceProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property endpoints: List of domain names.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getEndpoints();

    /**
     * Property instanceName: The name of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceName();

    /**
     * Property instanceType: The instance type.
     * <p>
     * Value:
     * <p>
     * <ul>
     * <li>Standard: Universal.</li>
     * <li>Follower: Read-only slave instance.</li>
     * <li>Warehouse: calculation group type.</li>
     * <li>Shared: Shared.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getInstanceType();

    /**
     * Property paymentType: The payment type of the resource.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getPaymentType();

    /**
     * Property zoneId: The zone Id.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getZoneId();

    /**
     * Property autoPay: Whether to pay automatically.
     * <p>
     * The default value is true. Value:
     * <p>
     * <ul>
     * <li>true: automatic payment</li>
     * <li>false: only generate orders, not pay</li>
     * </ul>
     * <p>
     * <blockquote>
     * <p>
     * The default value is true. If the balance of your payment method is insufficient, you can set the parameter AutoPay to false, and an unpaid order will be generated. You can log in to the user Center to pay by yourself.
     * <p>
     * </blockquote>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getAutoPay() {
        return null;
    }

    /**
     * Property coldStorageSize: Instance low-frequency storage space.
     * <p>
     * Unit: GB.
     * <p>
     * <blockquote>
     * <p>
     * Pay-As-You-Go (PostPaid) instances ignore this parameter.
     * <p>
     * </blockquote>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getColdStorageSize() {
        return null;
    }

    /**
     * Property cpu: Instance specifications.
     * <p>
     * Value:
     * <p>
     * <ul>
     * <li>8 cores 32 GB (number of compute nodes: 1)</li>
     * <li>16 cores 64 GB (number of compute nodes: 1)</li>
     * <li>32 core 128 GB (number of compute nodes: 2)</li>
     * <li>64 core 256 GB (number of compute nodes: 4)</li>
     * <li>96 core 384 GB (number of computing nodes: 6)</li>
     * <li>128 core 512 GB (number of compute nodes: 8)</li>
     * <li>Wait</li>
     * </ul>
     * <p>
     * <blockquote><blockquote></blockquote>
     * <p>
     * <ul>
     * <li>just fill in the audit number.</li>
     * <li>Please submit a work order application for purchasing 1024 or above specifications.</li>
     * <li>Shared instance types do not need to specify specifications.
     * The specification of -8 core 32GB (number of computing nodes: 1) is only for experience use and cannot be used for production.</li>
     * </ul>
     * <p>
     * </blockquote>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getCpu() {
        return null;
    }

    /**
     * Property duration: The buying cycle.
     * <p>
     * Buy for 2 months.
     * <p>
     * <blockquote>
     * <p>
     * If the Payment type is PostPaid, you do not need to specify it.
     * <p>
     * </blockquote>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDuration() {
        return null;
    }

    /**
     * Property gatewayCount: Number of gateway nodes.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getGatewayCount() {
        return null;
    }

    /**
     * Property initialDatabases: Initialize the database and split multiple database names ",".
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInitialDatabases() {
        return null;
    }

    /**
     * Property leaderInstanceId: The id of leader instance.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLeaderInstanceId() {
        return null;
    }

    /**
     * Property pricingCycle: Billing cycle.
     * <p>
     * Value:
     * <p>
     * <ul>
     * <li>Month: monthly billing</li>
     * <li>Hour: hourly billing</li>
     * </ul>
     * <p>
     * <blockquote><blockquote></blockquote>
     * <p>
     * <ul>
     * <li>PrePaid only supports Month</li>
     * <li>PostPaid only supports Hour</li>
     * <li>The Shared type is automatically set to Hour without specifying it.</li>
     * </ul>
     * <p>
     * </blockquote>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPricingCycle() {
        return null;
    }

    /**
     * Property productCode: product code.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getProductCode() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property scaleType: Change matching type.
     * <p>
     * Value:
     * <p>
     * <ul>
     * <li>UPGRADE: UPGRADE</li>
     * <li>DOWNGRADE: Downgrading</li>
     * </ul>
     * <p>
     * <blockquote><blockquote></blockquote>
     * <p>
     * <ul>
     * <li>The upgrade specification cannot be less than the original specification. A blank field indicates that the original specification remains unchanged. On this basis, at least one specification is larger than the original specification.</li>
     * <li>The downgrading specification cannot be greater than the original specification. A blank field indicates that the original specification remains unchanged. On this basis, at least one specification is smaller than the original specification.</li>
     * </ul>
     * <p>
     * </blockquote>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getScaleType() {
        return null;
    }

    /**
     * Property storageSize: The standard storage space of the instance.
     * <p>
     * Unit: GB.
     * <p>
     * <blockquote>
     * <p>
     * Pay-As-You-Go instances (PostPaid) ignore this parameter.
     * <p>
     * </blockquote>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getStorageSize() {
        return null;
    }

    /**
     * Property tags: Tags of instance.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.hologram.RosInstance.TagsProperty> getTags() {
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
        java.lang.Object endpoints;
        java.lang.Object instanceName;
        java.lang.Object instanceType;
        java.lang.Object paymentType;
        java.lang.Object zoneId;
        java.lang.Object autoPay;
        java.lang.Object coldStorageSize;
        java.lang.Object cpu;
        java.lang.Object duration;
        java.lang.Object gatewayCount;
        java.lang.Object initialDatabases;
        java.lang.Object leaderInstanceId;
        java.lang.Object pricingCycle;
        java.lang.Object productCode;
        java.lang.Object resourceGroupId;
        java.lang.Object scaleType;
        java.lang.Object storageSize;
        java.util.List<com.aliyun.ros.cdk.hologram.RosInstance.TagsProperty> tags;

        /**
         * Sets the value of {@link InstanceProps#getEndpoints}
         * @param endpoints Property endpoints: List of domain names. This parameter is required.
         * @return {@code this}
         */
        public Builder endpoints(com.aliyun.ros.cdk.core.IResolvable endpoints) {
            this.endpoints = endpoints;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getEndpoints}
         * @param endpoints Property endpoints: List of domain names. This parameter is required.
         * @return {@code this}
         */
        public Builder endpoints(java.util.List<? extends java.lang.Object> endpoints) {
            this.endpoints = endpoints;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceName}
         * @param instanceName Property instanceName: The name of the resource. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceName(java.lang.String instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceName}
         * @param instanceName Property instanceName: The name of the resource. This parameter is required.
         * @return {@code this}
         */
        public Builder instanceName(com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.instanceName = instanceName;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceType}
         * @param instanceType Property instanceType: The instance type. This parameter is required.
         *                     Value:
         *                     <p>
         *                     <ul>
         *                     <li>Standard: Universal.</li>
         *                     <li>Follower: Read-only slave instance.</li>
         *                     <li>Warehouse: calculation group type.</li>
         *                     <li>Shared: Shared.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder instanceType(java.lang.String instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInstanceType}
         * @param instanceType Property instanceType: The instance type. This parameter is required.
         *                     Value:
         *                     <p>
         *                     <ul>
         *                     <li>Standard: Universal.</li>
         *                     <li>Follower: Read-only slave instance.</li>
         *                     <li>Warehouse: calculation group type.</li>
         *                     <li>Shared: Shared.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder instanceType(com.aliyun.ros.cdk.core.IResolvable instanceType) {
            this.instanceType = instanceType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPaymentType}
         * @param paymentType Property paymentType: The payment type of the resource. This parameter is required.
         * @return {@code this}
         */
        public Builder paymentType(java.lang.String paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPaymentType}
         * @param paymentType Property paymentType: The payment type of the resource. This parameter is required.
         * @return {@code this}
         */
        public Builder paymentType(com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getZoneId}
         * @param zoneId Property zoneId: The zone Id. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(java.lang.String zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getZoneId}
         * @param zoneId Property zoneId: The zone Id. This parameter is required.
         * @return {@code this}
         */
        public Builder zoneId(com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.zoneId = zoneId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAutoPay}
         * @param autoPay Property autoPay: Whether to pay automatically.
         *                The default value is true. Value:
         *                <p>
         *                <ul>
         *                <li>true: automatic payment</li>
         *                <li>false: only generate orders, not pay</li>
         *                </ul>
         *                <p>
         *                <blockquote>
         *                <p>
         *                The default value is true. If the balance of your payment method is insufficient, you can set the parameter AutoPay to false, and an unpaid order will be generated. You can log in to the user Center to pay by yourself.
         *                <p>
         *                </blockquote>
         * @return {@code this}
         */
        public Builder autoPay(java.lang.Boolean autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getAutoPay}
         * @param autoPay Property autoPay: Whether to pay automatically.
         *                The default value is true. Value:
         *                <p>
         *                <ul>
         *                <li>true: automatic payment</li>
         *                <li>false: only generate orders, not pay</li>
         *                </ul>
         *                <p>
         *                <blockquote>
         *                <p>
         *                The default value is true. If the balance of your payment method is insufficient, you can set the parameter AutoPay to false, and an unpaid order will be generated. You can log in to the user Center to pay by yourself.
         *                <p>
         *                </blockquote>
         * @return {@code this}
         */
        public Builder autoPay(com.aliyun.ros.cdk.core.IResolvable autoPay) {
            this.autoPay = autoPay;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getColdStorageSize}
         * @param coldStorageSize Property coldStorageSize: Instance low-frequency storage space.
         *                        Unit: GB.
         *                        <p>
         *                        <blockquote>
         *                        <p>
         *                        Pay-As-You-Go (PostPaid) instances ignore this parameter.
         *                        <p>
         *                        </blockquote>
         * @return {@code this}
         */
        public Builder coldStorageSize(java.lang.Number coldStorageSize) {
            this.coldStorageSize = coldStorageSize;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getColdStorageSize}
         * @param coldStorageSize Property coldStorageSize: Instance low-frequency storage space.
         *                        Unit: GB.
         *                        <p>
         *                        <blockquote>
         *                        <p>
         *                        Pay-As-You-Go (PostPaid) instances ignore this parameter.
         *                        <p>
         *                        </blockquote>
         * @return {@code this}
         */
        public Builder coldStorageSize(com.aliyun.ros.cdk.core.IResolvable coldStorageSize) {
            this.coldStorageSize = coldStorageSize;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getCpu}
         * @param cpu Property cpu: Instance specifications.
         *            Value:
         *            <p>
         *            <ul>
         *            <li>8 cores 32 GB (number of compute nodes: 1)</li>
         *            <li>16 cores 64 GB (number of compute nodes: 1)</li>
         *            <li>32 core 128 GB (number of compute nodes: 2)</li>
         *            <li>64 core 256 GB (number of compute nodes: 4)</li>
         *            <li>96 core 384 GB (number of computing nodes: 6)</li>
         *            <li>128 core 512 GB (number of compute nodes: 8)</li>
         *            <li>Wait</li>
         *            </ul>
         *            <p>
         *            <blockquote><blockquote></blockquote>
         *            <p>
         *            <ul>
         *            <li>just fill in the audit number.</li>
         *            <li>Please submit a work order application for purchasing 1024 or above specifications.</li>
         *            <li>Shared instance types do not need to specify specifications.
         *            The specification of -8 core 32GB (number of computing nodes: 1) is only for experience use and cannot be used for production.</li>
         *            </ul>
         *            <p>
         *            </blockquote>
         * @return {@code this}
         */
        public Builder cpu(java.lang.Number cpu) {
            this.cpu = cpu;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getCpu}
         * @param cpu Property cpu: Instance specifications.
         *            Value:
         *            <p>
         *            <ul>
         *            <li>8 cores 32 GB (number of compute nodes: 1)</li>
         *            <li>16 cores 64 GB (number of compute nodes: 1)</li>
         *            <li>32 core 128 GB (number of compute nodes: 2)</li>
         *            <li>64 core 256 GB (number of compute nodes: 4)</li>
         *            <li>96 core 384 GB (number of computing nodes: 6)</li>
         *            <li>128 core 512 GB (number of compute nodes: 8)</li>
         *            <li>Wait</li>
         *            </ul>
         *            <p>
         *            <blockquote><blockquote></blockquote>
         *            <p>
         *            <ul>
         *            <li>just fill in the audit number.</li>
         *            <li>Please submit a work order application for purchasing 1024 or above specifications.</li>
         *            <li>Shared instance types do not need to specify specifications.
         *            The specification of -8 core 32GB (number of computing nodes: 1) is only for experience use and cannot be used for production.</li>
         *            </ul>
         *            <p>
         *            </blockquote>
         * @return {@code this}
         */
        public Builder cpu(com.aliyun.ros.cdk.core.IResolvable cpu) {
            this.cpu = cpu;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDuration}
         * @param duration Property duration: The buying cycle.
         *                 Buy for 2 months.
         *                 <p>
         *                 <blockquote>
         *                 <p>
         *                 If the Payment type is PostPaid, you do not need to specify it.
         *                 <p>
         *                 </blockquote>
         * @return {@code this}
         */
        public Builder duration(java.lang.Number duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getDuration}
         * @param duration Property duration: The buying cycle.
         *                 Buy for 2 months.
         *                 <p>
         *                 <blockquote>
         *                 <p>
         *                 If the Payment type is PostPaid, you do not need to specify it.
         *                 <p>
         *                 </blockquote>
         * @return {@code this}
         */
        public Builder duration(com.aliyun.ros.cdk.core.IResolvable duration) {
            this.duration = duration;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getGatewayCount}
         * @param gatewayCount Property gatewayCount: Number of gateway nodes.
         * @return {@code this}
         */
        public Builder gatewayCount(java.lang.Number gatewayCount) {
            this.gatewayCount = gatewayCount;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getGatewayCount}
         * @param gatewayCount Property gatewayCount: Number of gateway nodes.
         * @return {@code this}
         */
        public Builder gatewayCount(com.aliyun.ros.cdk.core.IResolvable gatewayCount) {
            this.gatewayCount = gatewayCount;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInitialDatabases}
         * @param initialDatabases Property initialDatabases: Initialize the database and split multiple database names ",".
         * @return {@code this}
         */
        public Builder initialDatabases(java.lang.String initialDatabases) {
            this.initialDatabases = initialDatabases;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getInitialDatabases}
         * @param initialDatabases Property initialDatabases: Initialize the database and split multiple database names ",".
         * @return {@code this}
         */
        public Builder initialDatabases(com.aliyun.ros.cdk.core.IResolvable initialDatabases) {
            this.initialDatabases = initialDatabases;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getLeaderInstanceId}
         * @param leaderInstanceId Property leaderInstanceId: The id of leader instance.
         * @return {@code this}
         */
        public Builder leaderInstanceId(java.lang.String leaderInstanceId) {
            this.leaderInstanceId = leaderInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getLeaderInstanceId}
         * @param leaderInstanceId Property leaderInstanceId: The id of leader instance.
         * @return {@code this}
         */
        public Builder leaderInstanceId(com.aliyun.ros.cdk.core.IResolvable leaderInstanceId) {
            this.leaderInstanceId = leaderInstanceId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPricingCycle}
         * @param pricingCycle Property pricingCycle: Billing cycle.
         *                     Value:
         *                     <p>
         *                     <ul>
         *                     <li>Month: monthly billing</li>
         *                     <li>Hour: hourly billing</li>
         *                     </ul>
         *                     <p>
         *                     <blockquote><blockquote></blockquote>
         *                     <p>
         *                     <ul>
         *                     <li>PrePaid only supports Month</li>
         *                     <li>PostPaid only supports Hour</li>
         *                     <li>The Shared type is automatically set to Hour without specifying it.</li>
         *                     </ul>
         *                     <p>
         *                     </blockquote>
         * @return {@code this}
         */
        public Builder pricingCycle(java.lang.String pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getPricingCycle}
         * @param pricingCycle Property pricingCycle: Billing cycle.
         *                     Value:
         *                     <p>
         *                     <ul>
         *                     <li>Month: monthly billing</li>
         *                     <li>Hour: hourly billing</li>
         *                     </ul>
         *                     <p>
         *                     <blockquote><blockquote></blockquote>
         *                     <p>
         *                     <ul>
         *                     <li>PrePaid only supports Month</li>
         *                     <li>PostPaid only supports Hour</li>
         *                     <li>The Shared type is automatically set to Hour without specifying it.</li>
         *                     </ul>
         *                     <p>
         *                     </blockquote>
         * @return {@code this}
         */
        public Builder pricingCycle(com.aliyun.ros.cdk.core.IResolvable pricingCycle) {
            this.pricingCycle = pricingCycle;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getProductCode}
         * @param productCode Property productCode: product code.
         * @return {@code this}
         */
        public Builder productCode(java.lang.String productCode) {
            this.productCode = productCode;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getProductCode}
         * @param productCode Property productCode: product code.
         * @return {@code this}
         */
        public Builder productCode(com.aliyun.ros.cdk.core.IResolvable productCode) {
            this.productCode = productCode;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getScaleType}
         * @param scaleType Property scaleType: Change matching type.
         *                  Value:
         *                  <p>
         *                  <ul>
         *                  <li>UPGRADE: UPGRADE</li>
         *                  <li>DOWNGRADE: Downgrading</li>
         *                  </ul>
         *                  <p>
         *                  <blockquote><blockquote></blockquote>
         *                  <p>
         *                  <ul>
         *                  <li>The upgrade specification cannot be less than the original specification. A blank field indicates that the original specification remains unchanged. On this basis, at least one specification is larger than the original specification.</li>
         *                  <li>The downgrading specification cannot be greater than the original specification. A blank field indicates that the original specification remains unchanged. On this basis, at least one specification is smaller than the original specification.</li>
         *                  </ul>
         *                  <p>
         *                  </blockquote>
         * @return {@code this}
         */
        public Builder scaleType(java.lang.String scaleType) {
            this.scaleType = scaleType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getScaleType}
         * @param scaleType Property scaleType: Change matching type.
         *                  Value:
         *                  <p>
         *                  <ul>
         *                  <li>UPGRADE: UPGRADE</li>
         *                  <li>DOWNGRADE: Downgrading</li>
         *                  </ul>
         *                  <p>
         *                  <blockquote><blockquote></blockquote>
         *                  <p>
         *                  <ul>
         *                  <li>The upgrade specification cannot be less than the original specification. A blank field indicates that the original specification remains unchanged. On this basis, at least one specification is larger than the original specification.</li>
         *                  <li>The downgrading specification cannot be greater than the original specification. A blank field indicates that the original specification remains unchanged. On this basis, at least one specification is smaller than the original specification.</li>
         *                  </ul>
         *                  <p>
         *                  </blockquote>
         * @return {@code this}
         */
        public Builder scaleType(com.aliyun.ros.cdk.core.IResolvable scaleType) {
            this.scaleType = scaleType;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getStorageSize}
         * @param storageSize Property storageSize: The standard storage space of the instance.
         *                    Unit: GB.
         *                    <p>
         *                    <blockquote>
         *                    <p>
         *                    Pay-As-You-Go instances (PostPaid) ignore this parameter.
         *                    <p>
         *                    </blockquote>
         * @return {@code this}
         */
        public Builder storageSize(java.lang.Number storageSize) {
            this.storageSize = storageSize;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getStorageSize}
         * @param storageSize Property storageSize: The standard storage space of the instance.
         *                    Unit: GB.
         *                    <p>
         *                    <blockquote>
         *                    <p>
         *                    Pay-As-You-Go instances (PostPaid) ignore this parameter.
         *                    <p>
         *                    </blockquote>
         * @return {@code this}
         */
        public Builder storageSize(com.aliyun.ros.cdk.core.IResolvable storageSize) {
            this.storageSize = storageSize;
            return this;
        }

        /**
         * Sets the value of {@link InstanceProps#getTags}
         * @param tags Property tags: Tags of instance.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.hologram.RosInstance.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.hologram.RosInstance.TagsProperty>)tags;
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
        private final java.lang.Object endpoints;
        private final java.lang.Object instanceName;
        private final java.lang.Object instanceType;
        private final java.lang.Object paymentType;
        private final java.lang.Object zoneId;
        private final java.lang.Object autoPay;
        private final java.lang.Object coldStorageSize;
        private final java.lang.Object cpu;
        private final java.lang.Object duration;
        private final java.lang.Object gatewayCount;
        private final java.lang.Object initialDatabases;
        private final java.lang.Object leaderInstanceId;
        private final java.lang.Object pricingCycle;
        private final java.lang.Object productCode;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object scaleType;
        private final java.lang.Object storageSize;
        private final java.util.List<com.aliyun.ros.cdk.hologram.RosInstance.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.endpoints = software.amazon.jsii.Kernel.get(this, "endpoints", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceName = software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.instanceType = software.amazon.jsii.Kernel.get(this, "instanceType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.paymentType = software.amazon.jsii.Kernel.get(this, "paymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.zoneId = software.amazon.jsii.Kernel.get(this, "zoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.autoPay = software.amazon.jsii.Kernel.get(this, "autoPay", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.coldStorageSize = software.amazon.jsii.Kernel.get(this, "coldStorageSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.cpu = software.amazon.jsii.Kernel.get(this, "cpu", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.duration = software.amazon.jsii.Kernel.get(this, "duration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.gatewayCount = software.amazon.jsii.Kernel.get(this, "gatewayCount", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.initialDatabases = software.amazon.jsii.Kernel.get(this, "initialDatabases", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.leaderInstanceId = software.amazon.jsii.Kernel.get(this, "leaderInstanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.pricingCycle = software.amazon.jsii.Kernel.get(this, "pricingCycle", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.productCode = software.amazon.jsii.Kernel.get(this, "productCode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.scaleType = software.amazon.jsii.Kernel.get(this, "scaleType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.storageSize = software.amazon.jsii.Kernel.get(this, "storageSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.hologram.RosInstance.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.endpoints = java.util.Objects.requireNonNull(builder.endpoints, "endpoints is required");
            this.instanceName = java.util.Objects.requireNonNull(builder.instanceName, "instanceName is required");
            this.instanceType = java.util.Objects.requireNonNull(builder.instanceType, "instanceType is required");
            this.paymentType = java.util.Objects.requireNonNull(builder.paymentType, "paymentType is required");
            this.zoneId = java.util.Objects.requireNonNull(builder.zoneId, "zoneId is required");
            this.autoPay = builder.autoPay;
            this.coldStorageSize = builder.coldStorageSize;
            this.cpu = builder.cpu;
            this.duration = builder.duration;
            this.gatewayCount = builder.gatewayCount;
            this.initialDatabases = builder.initialDatabases;
            this.leaderInstanceId = builder.leaderInstanceId;
            this.pricingCycle = builder.pricingCycle;
            this.productCode = builder.productCode;
            this.resourceGroupId = builder.resourceGroupId;
            this.scaleType = builder.scaleType;
            this.storageSize = builder.storageSize;
            this.tags = (java.util.List<com.aliyun.ros.cdk.hologram.RosInstance.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getEndpoints() {
            return this.endpoints;
        }

        @Override
        public final java.lang.Object getInstanceName() {
            return this.instanceName;
        }

        @Override
        public final java.lang.Object getInstanceType() {
            return this.instanceType;
        }

        @Override
        public final java.lang.Object getPaymentType() {
            return this.paymentType;
        }

        @Override
        public final java.lang.Object getZoneId() {
            return this.zoneId;
        }

        @Override
        public final java.lang.Object getAutoPay() {
            return this.autoPay;
        }

        @Override
        public final java.lang.Object getColdStorageSize() {
            return this.coldStorageSize;
        }

        @Override
        public final java.lang.Object getCpu() {
            return this.cpu;
        }

        @Override
        public final java.lang.Object getDuration() {
            return this.duration;
        }

        @Override
        public final java.lang.Object getGatewayCount() {
            return this.gatewayCount;
        }

        @Override
        public final java.lang.Object getInitialDatabases() {
            return this.initialDatabases;
        }

        @Override
        public final java.lang.Object getLeaderInstanceId() {
            return this.leaderInstanceId;
        }

        @Override
        public final java.lang.Object getPricingCycle() {
            return this.pricingCycle;
        }

        @Override
        public final java.lang.Object getProductCode() {
            return this.productCode;
        }

        @Override
        public final java.lang.Object getResourceGroupId() {
            return this.resourceGroupId;
        }

        @Override
        public final java.lang.Object getScaleType() {
            return this.scaleType;
        }

        @Override
        public final java.lang.Object getStorageSize() {
            return this.storageSize;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.hologram.RosInstance.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("endpoints", om.valueToTree(this.getEndpoints()));
            data.set("instanceName", om.valueToTree(this.getInstanceName()));
            data.set("instanceType", om.valueToTree(this.getInstanceType()));
            data.set("paymentType", om.valueToTree(this.getPaymentType()));
            data.set("zoneId", om.valueToTree(this.getZoneId()));
            if (this.getAutoPay() != null) {
                data.set("autoPay", om.valueToTree(this.getAutoPay()));
            }
            if (this.getColdStorageSize() != null) {
                data.set("coldStorageSize", om.valueToTree(this.getColdStorageSize()));
            }
            if (this.getCpu() != null) {
                data.set("cpu", om.valueToTree(this.getCpu()));
            }
            if (this.getDuration() != null) {
                data.set("duration", om.valueToTree(this.getDuration()));
            }
            if (this.getGatewayCount() != null) {
                data.set("gatewayCount", om.valueToTree(this.getGatewayCount()));
            }
            if (this.getInitialDatabases() != null) {
                data.set("initialDatabases", om.valueToTree(this.getInitialDatabases()));
            }
            if (this.getLeaderInstanceId() != null) {
                data.set("leaderInstanceId", om.valueToTree(this.getLeaderInstanceId()));
            }
            if (this.getPricingCycle() != null) {
                data.set("pricingCycle", om.valueToTree(this.getPricingCycle()));
            }
            if (this.getProductCode() != null) {
                data.set("productCode", om.valueToTree(this.getProductCode()));
            }
            if (this.getResourceGroupId() != null) {
                data.set("resourceGroupId", om.valueToTree(this.getResourceGroupId()));
            }
            if (this.getScaleType() != null) {
                data.set("scaleType", om.valueToTree(this.getScaleType()));
            }
            if (this.getStorageSize() != null) {
                data.set("storageSize", om.valueToTree(this.getStorageSize()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-hologram.InstanceProps"));
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

            if (!endpoints.equals(that.endpoints)) return false;
            if (!instanceName.equals(that.instanceName)) return false;
            if (!instanceType.equals(that.instanceType)) return false;
            if (!paymentType.equals(that.paymentType)) return false;
            if (!zoneId.equals(that.zoneId)) return false;
            if (this.autoPay != null ? !this.autoPay.equals(that.autoPay) : that.autoPay != null) return false;
            if (this.coldStorageSize != null ? !this.coldStorageSize.equals(that.coldStorageSize) : that.coldStorageSize != null) return false;
            if (this.cpu != null ? !this.cpu.equals(that.cpu) : that.cpu != null) return false;
            if (this.duration != null ? !this.duration.equals(that.duration) : that.duration != null) return false;
            if (this.gatewayCount != null ? !this.gatewayCount.equals(that.gatewayCount) : that.gatewayCount != null) return false;
            if (this.initialDatabases != null ? !this.initialDatabases.equals(that.initialDatabases) : that.initialDatabases != null) return false;
            if (this.leaderInstanceId != null ? !this.leaderInstanceId.equals(that.leaderInstanceId) : that.leaderInstanceId != null) return false;
            if (this.pricingCycle != null ? !this.pricingCycle.equals(that.pricingCycle) : that.pricingCycle != null) return false;
            if (this.productCode != null ? !this.productCode.equals(that.productCode) : that.productCode != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.scaleType != null ? !this.scaleType.equals(that.scaleType) : that.scaleType != null) return false;
            if (this.storageSize != null ? !this.storageSize.equals(that.storageSize) : that.storageSize != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.endpoints.hashCode();
            result = 31 * result + (this.instanceName.hashCode());
            result = 31 * result + (this.instanceType.hashCode());
            result = 31 * result + (this.paymentType.hashCode());
            result = 31 * result + (this.zoneId.hashCode());
            result = 31 * result + (this.autoPay != null ? this.autoPay.hashCode() : 0);
            result = 31 * result + (this.coldStorageSize != null ? this.coldStorageSize.hashCode() : 0);
            result = 31 * result + (this.cpu != null ? this.cpu.hashCode() : 0);
            result = 31 * result + (this.duration != null ? this.duration.hashCode() : 0);
            result = 31 * result + (this.gatewayCount != null ? this.gatewayCount.hashCode() : 0);
            result = 31 * result + (this.initialDatabases != null ? this.initialDatabases.hashCode() : 0);
            result = 31 * result + (this.leaderInstanceId != null ? this.leaderInstanceId.hashCode() : 0);
            result = 31 * result + (this.pricingCycle != null ? this.pricingCycle.hashCode() : 0);
            result = 31 * result + (this.productCode != null ? this.productCode.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.scaleType != null ? this.scaleType.hashCode() : 0);
            result = 31 * result + (this.storageSize != null ? this.storageSize.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
