package com.aliyun.ros.cdk.ebs;

/**
 * Properties for defining a <code>DiskReplicaPair</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-ebs-diskreplicapair
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-04-09T06:05:31.830Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ebs.$Module.class, fqn = "@alicloud/ros-cdk-ebs.DiskReplicaPairProps")
@software.amazon.jsii.Jsii.Proxy(DiskReplicaPairProps.Jsii$Proxy.class)
public interface DiskReplicaPairProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property destinationDiskId: The ID of the standby disk.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDestinationDiskId();

    /**
     * Property destinationRegionId: The ID of the region to which the disaster recovery site belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDestinationRegionId();

    /**
     * Property destinationZoneId: The ID of the zone to which the disaster recovery site belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDestinationZoneId();

    /**
     * Property diskId: The ID of the primary disk.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDiskId();

    /**
     * Property sourceZoneId: The ID of the zone to which the production site belongs.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getSourceZoneId();

    /**
     * Property bandwidth: The bandwidth for asynchronous data replication between cloud disks.
     * <p>
     * The unit is Kbps. Value range:
     * <p>
     * <ul>
     * <li>10240 Kbps: equal to 10 Mbps.</li>
     * <li>20480 Kbps: equal to 20 Mbps.</li>
     * <li>51200 Kbps: equal to 50 Mbps.</li>
     * <li>102400 Kbps: equal to 100 Mbps.
     * Default value: 10240.
     * This parameter cannot be specified when the ChargeType value is PayAsYouGo The system value is 0, which indicates that the disk is dynamically allocated according to data write changes during asynchronous replication.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getBandwidth() {
        return null;
    }

    /**
     * Property description: The description of the asynchronous replication relationship.
     * <p>
     * 2 to 256 English or Chinese characters in length and cannot start with' http:// 'or' https.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * Property diskReplicaPairName: The name of the asynchronous replication relationship.
     * <p>
     * The length must be 2 to 128 characters in length and must start with a letter or Chinese name. It cannot start with http:// or https. It can contain Chinese, English, numbers, half-width colons (:), underscores (_), half-width periods (.), or dashes (-).
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDiskReplicaPairName() {
        return null;
    }

    /**
     * Property paymentType: The payment type of the resource.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPaymentType() {
        return null;
    }

    /**
     * Property period: The purchase duration of the asynchronous replication relationship.
     * <p>
     * This parameter is required when 'ChargeType = PrePay. The duration unit is specified by'periodunit', and the value range is:
     * <p>
     * <ul>
     * <li>When 'PeriodUnit = Month', the value range of this parameter is 1, 2, 3, 6, 12, 24, 36, 60.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriod() {
        return null;
    }

    /**
     * Property periodUnit: The unit of the purchase time of the asynchronous replication relationship.
     * <p>
     * Value range:
     * <p>
     * <ul>
     * <li>Month.Default value: Month.</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPeriodUnit() {
        return null;
    }

    /**
     * Property resourceGroupId: The ID of the resource group.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getResourceGroupId() {
        return null;
    }

    /**
     * Property rpo: The RPO value set by the consistency group in seconds.
     * <p>
     * Currently only 900 seconds are supported.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getRpo() {
        return null;
    }

    /**
     * Property tags: Tags of disk replica pair.
     */
    default @org.jetbrains.annotations.Nullable java.util.List<com.aliyun.ros.cdk.ebs.RosDiskReplicaPair.TagsProperty> getTags() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link DiskReplicaPairProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link DiskReplicaPairProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<DiskReplicaPairProps> {
        java.lang.Object destinationDiskId;
        java.lang.Object destinationRegionId;
        java.lang.Object destinationZoneId;
        java.lang.Object diskId;
        java.lang.Object sourceZoneId;
        java.lang.Object bandwidth;
        java.lang.Object description;
        java.lang.Object diskReplicaPairName;
        java.lang.Object paymentType;
        java.lang.Object period;
        java.lang.Object periodUnit;
        java.lang.Object resourceGroupId;
        java.lang.Object rpo;
        java.util.List<com.aliyun.ros.cdk.ebs.RosDiskReplicaPair.TagsProperty> tags;

        /**
         * Sets the value of {@link DiskReplicaPairProps#getDestinationDiskId}
         * @param destinationDiskId Property destinationDiskId: The ID of the standby disk. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationDiskId(java.lang.String destinationDiskId) {
            this.destinationDiskId = destinationDiskId;
            return this;
        }

        /**
         * Sets the value of {@link DiskReplicaPairProps#getDestinationDiskId}
         * @param destinationDiskId Property destinationDiskId: The ID of the standby disk. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationDiskId(com.aliyun.ros.cdk.core.IResolvable destinationDiskId) {
            this.destinationDiskId = destinationDiskId;
            return this;
        }

        /**
         * Sets the value of {@link DiskReplicaPairProps#getDestinationRegionId}
         * @param destinationRegionId Property destinationRegionId: The ID of the region to which the disaster recovery site belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationRegionId(java.lang.String destinationRegionId) {
            this.destinationRegionId = destinationRegionId;
            return this;
        }

        /**
         * Sets the value of {@link DiskReplicaPairProps#getDestinationRegionId}
         * @param destinationRegionId Property destinationRegionId: The ID of the region to which the disaster recovery site belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationRegionId(com.aliyun.ros.cdk.core.IResolvable destinationRegionId) {
            this.destinationRegionId = destinationRegionId;
            return this;
        }

        /**
         * Sets the value of {@link DiskReplicaPairProps#getDestinationZoneId}
         * @param destinationZoneId Property destinationZoneId: The ID of the zone to which the disaster recovery site belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationZoneId(java.lang.String destinationZoneId) {
            this.destinationZoneId = destinationZoneId;
            return this;
        }

        /**
         * Sets the value of {@link DiskReplicaPairProps#getDestinationZoneId}
         * @param destinationZoneId Property destinationZoneId: The ID of the zone to which the disaster recovery site belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder destinationZoneId(com.aliyun.ros.cdk.core.IResolvable destinationZoneId) {
            this.destinationZoneId = destinationZoneId;
            return this;
        }

        /**
         * Sets the value of {@link DiskReplicaPairProps#getDiskId}
         * @param diskId Property diskId: The ID of the primary disk. This parameter is required.
         * @return {@code this}
         */
        public Builder diskId(java.lang.String diskId) {
            this.diskId = diskId;
            return this;
        }

        /**
         * Sets the value of {@link DiskReplicaPairProps#getDiskId}
         * @param diskId Property diskId: The ID of the primary disk. This parameter is required.
         * @return {@code this}
         */
        public Builder diskId(com.aliyun.ros.cdk.core.IResolvable diskId) {
            this.diskId = diskId;
            return this;
        }

        /**
         * Sets the value of {@link DiskReplicaPairProps#getSourceZoneId}
         * @param sourceZoneId Property sourceZoneId: The ID of the zone to which the production site belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceZoneId(java.lang.String sourceZoneId) {
            this.sourceZoneId = sourceZoneId;
            return this;
        }

        /**
         * Sets the value of {@link DiskReplicaPairProps#getSourceZoneId}
         * @param sourceZoneId Property sourceZoneId: The ID of the zone to which the production site belongs. This parameter is required.
         * @return {@code this}
         */
        public Builder sourceZoneId(com.aliyun.ros.cdk.core.IResolvable sourceZoneId) {
            this.sourceZoneId = sourceZoneId;
            return this;
        }

        /**
         * Sets the value of {@link DiskReplicaPairProps#getBandwidth}
         * @param bandwidth Property bandwidth: The bandwidth for asynchronous data replication between cloud disks.
         *                  The unit is Kbps. Value range:
         *                  <p>
         *                  <ul>
         *                  <li>10240 Kbps: equal to 10 Mbps.</li>
         *                  <li>20480 Kbps: equal to 20 Mbps.</li>
         *                  <li>51200 Kbps: equal to 50 Mbps.</li>
         *                  <li>102400 Kbps: equal to 100 Mbps.
         *                  Default value: 10240.
         *                  This parameter cannot be specified when the ChargeType value is PayAsYouGo The system value is 0, which indicates that the disk is dynamically allocated according to data write changes during asynchronous replication.</li>
         *                  </ul>
         * @return {@code this}
         */
        public Builder bandwidth(java.lang.Number bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link DiskReplicaPairProps#getBandwidth}
         * @param bandwidth Property bandwidth: The bandwidth for asynchronous data replication between cloud disks.
         *                  The unit is Kbps. Value range:
         *                  <p>
         *                  <ul>
         *                  <li>10240 Kbps: equal to 10 Mbps.</li>
         *                  <li>20480 Kbps: equal to 20 Mbps.</li>
         *                  <li>51200 Kbps: equal to 50 Mbps.</li>
         *                  <li>102400 Kbps: equal to 100 Mbps.
         *                  Default value: 10240.
         *                  This parameter cannot be specified when the ChargeType value is PayAsYouGo The system value is 0, which indicates that the disk is dynamically allocated according to data write changes during asynchronous replication.</li>
         *                  </ul>
         * @return {@code this}
         */
        public Builder bandwidth(com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.bandwidth = bandwidth;
            return this;
        }

        /**
         * Sets the value of {@link DiskReplicaPairProps#getDescription}
         * @param description Property description: The description of the asynchronous replication relationship.
         *                    2 to 256 English or Chinese characters in length and cannot start with' http:// 'or' https.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link DiskReplicaPairProps#getDescription}
         * @param description Property description: The description of the asynchronous replication relationship.
         *                    2 to 256 English or Chinese characters in length and cannot start with' http:// 'or' https.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link DiskReplicaPairProps#getDiskReplicaPairName}
         * @param diskReplicaPairName Property diskReplicaPairName: The name of the asynchronous replication relationship.
         *                            The length must be 2 to 128 characters in length and must start with a letter or Chinese name. It cannot start with http:// or https. It can contain Chinese, English, numbers, half-width colons (:), underscores (_), half-width periods (.), or dashes (-).
         * @return {@code this}
         */
        public Builder diskReplicaPairName(java.lang.String diskReplicaPairName) {
            this.diskReplicaPairName = diskReplicaPairName;
            return this;
        }

        /**
         * Sets the value of {@link DiskReplicaPairProps#getDiskReplicaPairName}
         * @param diskReplicaPairName Property diskReplicaPairName: The name of the asynchronous replication relationship.
         *                            The length must be 2 to 128 characters in length and must start with a letter or Chinese name. It cannot start with http:// or https. It can contain Chinese, English, numbers, half-width colons (:), underscores (_), half-width periods (.), or dashes (-).
         * @return {@code this}
         */
        public Builder diskReplicaPairName(com.aliyun.ros.cdk.core.IResolvable diskReplicaPairName) {
            this.diskReplicaPairName = diskReplicaPairName;
            return this;
        }

        /**
         * Sets the value of {@link DiskReplicaPairProps#getPaymentType}
         * @param paymentType Property paymentType: The payment type of the resource.
         * @return {@code this}
         */
        public Builder paymentType(java.lang.String paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link DiskReplicaPairProps#getPaymentType}
         * @param paymentType Property paymentType: The payment type of the resource.
         * @return {@code this}
         */
        public Builder paymentType(com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.paymentType = paymentType;
            return this;
        }

        /**
         * Sets the value of {@link DiskReplicaPairProps#getPeriod}
         * @param period Property period: The purchase duration of the asynchronous replication relationship.
         *               This parameter is required when 'ChargeType = PrePay. The duration unit is specified by'periodunit', and the value range is:
         *               <p>
         *               <ul>
         *               <li>When 'PeriodUnit = Month', the value range of this parameter is 1, 2, 3, 6, 12, 24, 36, 60.</li>
         *               </ul>
         * @return {@code this}
         */
        public Builder period(java.lang.Number period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link DiskReplicaPairProps#getPeriod}
         * @param period Property period: The purchase duration of the asynchronous replication relationship.
         *               This parameter is required when 'ChargeType = PrePay. The duration unit is specified by'periodunit', and the value range is:
         *               <p>
         *               <ul>
         *               <li>When 'PeriodUnit = Month', the value range of this parameter is 1, 2, 3, 6, 12, 24, 36, 60.</li>
         *               </ul>
         * @return {@code this}
         */
        public Builder period(com.aliyun.ros.cdk.core.IResolvable period) {
            this.period = period;
            return this;
        }

        /**
         * Sets the value of {@link DiskReplicaPairProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: The unit of the purchase time of the asynchronous replication relationship.
         *                   Value range:
         *                   <p>
         *                   <ul>
         *                   <li>Month.Default value: Month.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder periodUnit(java.lang.String periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link DiskReplicaPairProps#getPeriodUnit}
         * @param periodUnit Property periodUnit: The unit of the purchase time of the asynchronous replication relationship.
         *                   Value range:
         *                   <p>
         *                   <ul>
         *                   <li>Month.Default value: Month.</li>
         *                   </ul>
         * @return {@code this}
         */
        public Builder periodUnit(com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.periodUnit = periodUnit;
            return this;
        }

        /**
         * Sets the value of {@link DiskReplicaPairProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(java.lang.String resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DiskReplicaPairProps#getResourceGroupId}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group.
         * @return {@code this}
         */
        public Builder resourceGroupId(com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.resourceGroupId = resourceGroupId;
            return this;
        }

        /**
         * Sets the value of {@link DiskReplicaPairProps#getRpo}
         * @param rpo Property rpo: The RPO value set by the consistency group in seconds.
         *            Currently only 900 seconds are supported.
         * @return {@code this}
         */
        public Builder rpo(java.lang.Number rpo) {
            this.rpo = rpo;
            return this;
        }

        /**
         * Sets the value of {@link DiskReplicaPairProps#getRpo}
         * @param rpo Property rpo: The RPO value set by the consistency group in seconds.
         *            Currently only 900 seconds are supported.
         * @return {@code this}
         */
        public Builder rpo(com.aliyun.ros.cdk.core.IResolvable rpo) {
            this.rpo = rpo;
            return this;
        }

        /**
         * Sets the value of {@link DiskReplicaPairProps#getTags}
         * @param tags Property tags: Tags of disk replica pair.
         * @return {@code this}
         */
        @SuppressWarnings("unchecked")
        public Builder tags(java.util.List<? extends com.aliyun.ros.cdk.ebs.RosDiskReplicaPair.TagsProperty> tags) {
            this.tags = (java.util.List<com.aliyun.ros.cdk.ebs.RosDiskReplicaPair.TagsProperty>)tags;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link DiskReplicaPairProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public DiskReplicaPairProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link DiskReplicaPairProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements DiskReplicaPairProps {
        private final java.lang.Object destinationDiskId;
        private final java.lang.Object destinationRegionId;
        private final java.lang.Object destinationZoneId;
        private final java.lang.Object diskId;
        private final java.lang.Object sourceZoneId;
        private final java.lang.Object bandwidth;
        private final java.lang.Object description;
        private final java.lang.Object diskReplicaPairName;
        private final java.lang.Object paymentType;
        private final java.lang.Object period;
        private final java.lang.Object periodUnit;
        private final java.lang.Object resourceGroupId;
        private final java.lang.Object rpo;
        private final java.util.List<com.aliyun.ros.cdk.ebs.RosDiskReplicaPair.TagsProperty> tags;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.destinationDiskId = software.amazon.jsii.Kernel.get(this, "destinationDiskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destinationRegionId = software.amazon.jsii.Kernel.get(this, "destinationRegionId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.destinationZoneId = software.amazon.jsii.Kernel.get(this, "destinationZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskId = software.amazon.jsii.Kernel.get(this, "diskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceZoneId = software.amazon.jsii.Kernel.get(this, "sourceZoneId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.bandwidth = software.amazon.jsii.Kernel.get(this, "bandwidth", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.diskReplicaPairName = software.amazon.jsii.Kernel.get(this, "diskReplicaPairName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.paymentType = software.amazon.jsii.Kernel.get(this, "paymentType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.period = software.amazon.jsii.Kernel.get(this, "period", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.periodUnit = software.amazon.jsii.Kernel.get(this, "periodUnit", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.resourceGroupId = software.amazon.jsii.Kernel.get(this, "resourceGroupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.rpo = software.amazon.jsii.Kernel.get(this, "rpo", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.tags = software.amazon.jsii.Kernel.get(this, "tags", software.amazon.jsii.NativeType.listOf(software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ebs.RosDiskReplicaPair.TagsProperty.class)));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        @SuppressWarnings("unchecked")
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.destinationDiskId = java.util.Objects.requireNonNull(builder.destinationDiskId, "destinationDiskId is required");
            this.destinationRegionId = java.util.Objects.requireNonNull(builder.destinationRegionId, "destinationRegionId is required");
            this.destinationZoneId = java.util.Objects.requireNonNull(builder.destinationZoneId, "destinationZoneId is required");
            this.diskId = java.util.Objects.requireNonNull(builder.diskId, "diskId is required");
            this.sourceZoneId = java.util.Objects.requireNonNull(builder.sourceZoneId, "sourceZoneId is required");
            this.bandwidth = builder.bandwidth;
            this.description = builder.description;
            this.diskReplicaPairName = builder.diskReplicaPairName;
            this.paymentType = builder.paymentType;
            this.period = builder.period;
            this.periodUnit = builder.periodUnit;
            this.resourceGroupId = builder.resourceGroupId;
            this.rpo = builder.rpo;
            this.tags = (java.util.List<com.aliyun.ros.cdk.ebs.RosDiskReplicaPair.TagsProperty>)builder.tags;
        }

        @Override
        public final java.lang.Object getDestinationDiskId() {
            return this.destinationDiskId;
        }

        @Override
        public final java.lang.Object getDestinationRegionId() {
            return this.destinationRegionId;
        }

        @Override
        public final java.lang.Object getDestinationZoneId() {
            return this.destinationZoneId;
        }

        @Override
        public final java.lang.Object getDiskId() {
            return this.diskId;
        }

        @Override
        public final java.lang.Object getSourceZoneId() {
            return this.sourceZoneId;
        }

        @Override
        public final java.lang.Object getBandwidth() {
            return this.bandwidth;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getDiskReplicaPairName() {
            return this.diskReplicaPairName;
        }

        @Override
        public final java.lang.Object getPaymentType() {
            return this.paymentType;
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
        public final java.lang.Object getRpo() {
            return this.rpo;
        }

        @Override
        public final java.util.List<com.aliyun.ros.cdk.ebs.RosDiskReplicaPair.TagsProperty> getTags() {
            return this.tags;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("destinationDiskId", om.valueToTree(this.getDestinationDiskId()));
            data.set("destinationRegionId", om.valueToTree(this.getDestinationRegionId()));
            data.set("destinationZoneId", om.valueToTree(this.getDestinationZoneId()));
            data.set("diskId", om.valueToTree(this.getDiskId()));
            data.set("sourceZoneId", om.valueToTree(this.getSourceZoneId()));
            if (this.getBandwidth() != null) {
                data.set("bandwidth", om.valueToTree(this.getBandwidth()));
            }
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getDiskReplicaPairName() != null) {
                data.set("diskReplicaPairName", om.valueToTree(this.getDiskReplicaPairName()));
            }
            if (this.getPaymentType() != null) {
                data.set("paymentType", om.valueToTree(this.getPaymentType()));
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
            if (this.getRpo() != null) {
                data.set("rpo", om.valueToTree(this.getRpo()));
            }
            if (this.getTags() != null) {
                data.set("tags", om.valueToTree(this.getTags()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-ebs.DiskReplicaPairProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            DiskReplicaPairProps.Jsii$Proxy that = (DiskReplicaPairProps.Jsii$Proxy) o;

            if (!destinationDiskId.equals(that.destinationDiskId)) return false;
            if (!destinationRegionId.equals(that.destinationRegionId)) return false;
            if (!destinationZoneId.equals(that.destinationZoneId)) return false;
            if (!diskId.equals(that.diskId)) return false;
            if (!sourceZoneId.equals(that.sourceZoneId)) return false;
            if (this.bandwidth != null ? !this.bandwidth.equals(that.bandwidth) : that.bandwidth != null) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.diskReplicaPairName != null ? !this.diskReplicaPairName.equals(that.diskReplicaPairName) : that.diskReplicaPairName != null) return false;
            if (this.paymentType != null ? !this.paymentType.equals(that.paymentType) : that.paymentType != null) return false;
            if (this.period != null ? !this.period.equals(that.period) : that.period != null) return false;
            if (this.periodUnit != null ? !this.periodUnit.equals(that.periodUnit) : that.periodUnit != null) return false;
            if (this.resourceGroupId != null ? !this.resourceGroupId.equals(that.resourceGroupId) : that.resourceGroupId != null) return false;
            if (this.rpo != null ? !this.rpo.equals(that.rpo) : that.rpo != null) return false;
            return this.tags != null ? this.tags.equals(that.tags) : that.tags == null;
        }

        @Override
        public final int hashCode() {
            int result = this.destinationDiskId.hashCode();
            result = 31 * result + (this.destinationRegionId.hashCode());
            result = 31 * result + (this.destinationZoneId.hashCode());
            result = 31 * result + (this.diskId.hashCode());
            result = 31 * result + (this.sourceZoneId.hashCode());
            result = 31 * result + (this.bandwidth != null ? this.bandwidth.hashCode() : 0);
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.diskReplicaPairName != null ? this.diskReplicaPairName.hashCode() : 0);
            result = 31 * result + (this.paymentType != null ? this.paymentType.hashCode() : 0);
            result = 31 * result + (this.period != null ? this.period.hashCode() : 0);
            result = 31 * result + (this.periodUnit != null ? this.periodUnit.hashCode() : 0);
            result = 31 * result + (this.resourceGroupId != null ? this.resourceGroupId.hashCode() : 0);
            result = 31 * result + (this.rpo != null ? this.rpo.hashCode() : 0);
            result = 31 * result + (this.tags != null ? this.tags.hashCode() : 0);
            return result;
        }
    }
}
