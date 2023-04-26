package com.aliyun.ros.cdk.ebs;

/**
 * A ROS resource type:  `ALIYUN::EBS::DiskReplicaPair`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T01:43:50.136Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ebs.$Module.class, fqn = "@alicloud/ros-cdk-ebs.DiskReplicaPair")
public class DiskReplicaPair extends com.aliyun.ros.cdk.core.Resource {

    protected DiskReplicaPair(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected DiskReplicaPair(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::EBS::DiskReplicaPair`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public DiskReplicaPair(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ebs.DiskReplicaPairProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::EBS::DiskReplicaPair`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public DiskReplicaPair(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ebs.DiskReplicaPairProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Bandwidth: The bandwidth for asynchronous data replication between cloud disks.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBandwidth() {
        return software.amazon.jsii.Kernel.get(this, "attrBandwidth", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute CreateTime: The creation time of the resource.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreateTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreateTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Description: The description of the asynchronous replication relationship.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDescription() {
        return software.amazon.jsii.Kernel.get(this, "attrDescription", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DestinationDiskId: The ID of the standby disk.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDestinationDiskId() {
        return software.amazon.jsii.Kernel.get(this, "attrDestinationDiskId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DestinationRegionId: The ID of the region to which the disaster recovery site belongs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDestinationRegionId() {
        return software.amazon.jsii.Kernel.get(this, "attrDestinationRegionId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DestinationZoneId: The ID of the zone to which the disaster recovery site belongs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDestinationZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrDestinationZoneId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DiskId: The ID of the primary disk.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDiskId() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DiskReplicaPairName: The name of the asynchronous replication relationship.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDiskReplicaPairName() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskReplicaPairName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute PaymentType: The payment type of the resource.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrPaymentType() {
        return software.amazon.jsii.Kernel.get(this, "attrPaymentType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ReplicaPairId: The ID of the disk replica pair.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrReplicaPairId() {
        return software.amazon.jsii.Kernel.get(this, "attrReplicaPairId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ResourceGroupId: The ID of the resource group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RPO: The RPO value set by the consistency group in seconds.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRpo() {
        return software.amazon.jsii.Kernel.get(this, "attrRpo", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute SourceZoneId: The ID of the zone to which the production site belongs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrSourceZoneId() {
        return software.amazon.jsii.Kernel.get(this, "attrSourceZoneId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Tags: The tags of the disk replica pair.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTags() {
        return software.amazon.jsii.Kernel.get(this, "attrTags", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ebs.DiskReplicaPair}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ebs.DiskReplicaPair> {
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
        private final com.aliyun.ros.cdk.ebs.DiskReplicaPairProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ebs.DiskReplicaPairProps.Builder();
        }

        /**
         * Property destinationDiskId: The ID of the standby disk.
         * <p>
         * @return {@code this}
         * @param destinationDiskId Property destinationDiskId: The ID of the standby disk. This parameter is required.
         */
        public Builder destinationDiskId(final java.lang.String destinationDiskId) {
            this.props.destinationDiskId(destinationDiskId);
            return this;
        }
        /**
         * Property destinationDiskId: The ID of the standby disk.
         * <p>
         * @return {@code this}
         * @param destinationDiskId Property destinationDiskId: The ID of the standby disk. This parameter is required.
         */
        public Builder destinationDiskId(final com.aliyun.ros.cdk.core.IResolvable destinationDiskId) {
            this.props.destinationDiskId(destinationDiskId);
            return this;
        }

        /**
         * Property destinationRegionId: The ID of the region to which the disaster recovery site belongs.
         * <p>
         * @return {@code this}
         * @param destinationRegionId Property destinationRegionId: The ID of the region to which the disaster recovery site belongs. This parameter is required.
         */
        public Builder destinationRegionId(final java.lang.String destinationRegionId) {
            this.props.destinationRegionId(destinationRegionId);
            return this;
        }
        /**
         * Property destinationRegionId: The ID of the region to which the disaster recovery site belongs.
         * <p>
         * @return {@code this}
         * @param destinationRegionId Property destinationRegionId: The ID of the region to which the disaster recovery site belongs. This parameter is required.
         */
        public Builder destinationRegionId(final com.aliyun.ros.cdk.core.IResolvable destinationRegionId) {
            this.props.destinationRegionId(destinationRegionId);
            return this;
        }

        /**
         * Property destinationZoneId: The ID of the zone to which the disaster recovery site belongs.
         * <p>
         * @return {@code this}
         * @param destinationZoneId Property destinationZoneId: The ID of the zone to which the disaster recovery site belongs. This parameter is required.
         */
        public Builder destinationZoneId(final java.lang.String destinationZoneId) {
            this.props.destinationZoneId(destinationZoneId);
            return this;
        }
        /**
         * Property destinationZoneId: The ID of the zone to which the disaster recovery site belongs.
         * <p>
         * @return {@code this}
         * @param destinationZoneId Property destinationZoneId: The ID of the zone to which the disaster recovery site belongs. This parameter is required.
         */
        public Builder destinationZoneId(final com.aliyun.ros.cdk.core.IResolvable destinationZoneId) {
            this.props.destinationZoneId(destinationZoneId);
            return this;
        }

        /**
         * Property diskId: The ID of the primary disk.
         * <p>
         * @return {@code this}
         * @param diskId Property diskId: The ID of the primary disk. This parameter is required.
         */
        public Builder diskId(final java.lang.String diskId) {
            this.props.diskId(diskId);
            return this;
        }
        /**
         * Property diskId: The ID of the primary disk.
         * <p>
         * @return {@code this}
         * @param diskId Property diskId: The ID of the primary disk. This parameter is required.
         */
        public Builder diskId(final com.aliyun.ros.cdk.core.IResolvable diskId) {
            this.props.diskId(diskId);
            return this;
        }

        /**
         * Property sourceZoneId: The ID of the zone to which the production site belongs.
         * <p>
         * @return {@code this}
         * @param sourceZoneId Property sourceZoneId: The ID of the zone to which the production site belongs. This parameter is required.
         */
        public Builder sourceZoneId(final java.lang.String sourceZoneId) {
            this.props.sourceZoneId(sourceZoneId);
            return this;
        }
        /**
         * Property sourceZoneId: The ID of the zone to which the production site belongs.
         * <p>
         * @return {@code this}
         * @param sourceZoneId Property sourceZoneId: The ID of the zone to which the production site belongs. This parameter is required.
         */
        public Builder sourceZoneId(final com.aliyun.ros.cdk.core.IResolvable sourceZoneId) {
            this.props.sourceZoneId(sourceZoneId);
            return this;
        }

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
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: The bandwidth for asynchronous data replication between cloud disks. This parameter is required.
         */
        public Builder bandwidth(final java.lang.Number bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }
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
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: The bandwidth for asynchronous data replication between cloud disks. This parameter is required.
         */
        public Builder bandwidth(final com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }

        /**
         * Property description: The description of the asynchronous replication relationship.
         * <p>
         * 2 to 256 English or Chinese characters in length and cannot start with' http:// 'or' https.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the asynchronous replication relationship. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the asynchronous replication relationship.
         * <p>
         * 2 to 256 English or Chinese characters in length and cannot start with' http:// 'or' https.
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the asynchronous replication relationship. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property diskReplicaPairName: The name of the asynchronous replication relationship.
         * <p>
         * The length must be 2 to 128 characters in length and must start with a letter or Chinese name. It cannot start with http:// or https. It can contain Chinese, English, numbers, half-width colons (:), underscores (_), half-width periods (.), or dashes (-).
         * <p>
         * @return {@code this}
         * @param diskReplicaPairName Property diskReplicaPairName: The name of the asynchronous replication relationship. This parameter is required.
         */
        public Builder diskReplicaPairName(final java.lang.String diskReplicaPairName) {
            this.props.diskReplicaPairName(diskReplicaPairName);
            return this;
        }
        /**
         * Property diskReplicaPairName: The name of the asynchronous replication relationship.
         * <p>
         * The length must be 2 to 128 characters in length and must start with a letter or Chinese name. It cannot start with http:// or https. It can contain Chinese, English, numbers, half-width colons (:), underscores (_), half-width periods (.), or dashes (-).
         * <p>
         * @return {@code this}
         * @param diskReplicaPairName Property diskReplicaPairName: The name of the asynchronous replication relationship. This parameter is required.
         */
        public Builder diskReplicaPairName(final com.aliyun.ros.cdk.core.IResolvable diskReplicaPairName) {
            this.props.diskReplicaPairName(diskReplicaPairName);
            return this;
        }

        /**
         * Property paymentType: The payment type of the resource.
         * <p>
         * @return {@code this}
         * @param paymentType Property paymentType: The payment type of the resource. This parameter is required.
         */
        public Builder paymentType(final java.lang.String paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }
        /**
         * Property paymentType: The payment type of the resource.
         * <p>
         * @return {@code this}
         * @param paymentType Property paymentType: The payment type of the resource. This parameter is required.
         */
        public Builder paymentType(final com.aliyun.ros.cdk.core.IResolvable paymentType) {
            this.props.paymentType(paymentType);
            return this;
        }

        /**
         * Property period: The purchase duration of the asynchronous replication relationship.
         * <p>
         * This parameter is required when 'ChargeType = PrePay. The duration unit is specified by'periodunit', and the value range is:
         * <p>
         * <ul>
         * <li>When 'PeriodUnit = Month', the value range of this parameter is 1, 2, 3, 6, 12, 24, 36, 60.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param period Property period: The purchase duration of the asynchronous replication relationship. This parameter is required.
         */
        public Builder period(final java.lang.Number period) {
            this.props.period(period);
            return this;
        }
        /**
         * Property period: The purchase duration of the asynchronous replication relationship.
         * <p>
         * This parameter is required when 'ChargeType = PrePay. The duration unit is specified by'periodunit', and the value range is:
         * <p>
         * <ul>
         * <li>When 'PeriodUnit = Month', the value range of this parameter is 1, 2, 3, 6, 12, 24, 36, 60.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param period Property period: The purchase duration of the asynchronous replication relationship. This parameter is required.
         */
        public Builder period(final com.aliyun.ros.cdk.core.IResolvable period) {
            this.props.period(period);
            return this;
        }

        /**
         * Property periodUnit: The unit of the purchase time of the asynchronous replication relationship.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li>Month.Default value: Month.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The unit of the purchase time of the asynchronous replication relationship. This parameter is required.
         */
        public Builder periodUnit(final java.lang.String periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }
        /**
         * Property periodUnit: The unit of the purchase time of the asynchronous replication relationship.
         * <p>
         * Value range:
         * <p>
         * <ul>
         * <li>Month.Default value: Month.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param periodUnit Property periodUnit: The unit of the purchase time of the asynchronous replication relationship. This parameter is required.
         */
        public Builder periodUnit(final com.aliyun.ros.cdk.core.IResolvable periodUnit) {
            this.props.periodUnit(periodUnit);
            return this;
        }

        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property rpo: The RPO value set by the consistency group in seconds.
         * <p>
         * Currently only 900 seconds are supported.
         * <p>
         * @return {@code this}
         * @param rpo Property rpo: The RPO value set by the consistency group in seconds. This parameter is required.
         */
        public Builder rpo(final java.lang.Number rpo) {
            this.props.rpo(rpo);
            return this;
        }
        /**
         * Property rpo: The RPO value set by the consistency group in seconds.
         * <p>
         * Currently only 900 seconds are supported.
         * <p>
         * @return {@code this}
         * @param rpo Property rpo: The RPO value set by the consistency group in seconds. This parameter is required.
         */
        public Builder rpo(final com.aliyun.ros.cdk.core.IResolvable rpo) {
            this.props.rpo(rpo);
            return this;
        }

        /**
         * Property tags: Tags of disk replica pair.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags of disk replica pair. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ebs.RosDiskReplicaPair.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.ebs.DiskReplicaPair}.
         */
        @Override
        public com.aliyun.ros.cdk.ebs.DiskReplicaPair build() {
            return new com.aliyun.ros.cdk.ebs.DiskReplicaPair(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
