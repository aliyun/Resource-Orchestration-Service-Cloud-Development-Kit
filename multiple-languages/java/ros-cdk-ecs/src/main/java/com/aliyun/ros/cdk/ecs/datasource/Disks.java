package com.aliyun.ros.cdk.ecs.datasource;

/**
 * This class encapsulates and extends the ROS resource type <code>DATASOURCE::ECS::Disks</code>, which is used to query the Elastic Block Storage (EBS) devices that you created, including cloud disks and local disks.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:24.644Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.datasource.Disks")
public class Disks extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ecs.datasource.IDisks {

    protected Disks(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Disks(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Disks(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.datasource.DisksProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Disks(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.ecs.datasource.DisksProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public Disks(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute DiskIds: The list of disk IDs.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskIds() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskIds", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Disks: The list of disks.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDisks() {
        return software.amazon.jsii.Kernel.get(this, "attrDisks", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.datasource.DisksProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ecs.datasource.DisksProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.datasource.Disks}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.datasource.Disks> {
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
        private com.aliyun.ros.cdk.ecs.datasource.DisksProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property additionalAttributes: The value of attribute N.
         * <p>
         * Set the value to IOPS, which indicates the maximum IOPS of the disk.
         * <p>
         * @return {@code this}
         * @param additionalAttributes Property additionalAttributes: The value of attribute N. This parameter is required.
         */
        public Builder additionalAttributes(final com.aliyun.ros.cdk.core.IResolvable additionalAttributes) {
            this.props().additionalAttributes(additionalAttributes);
            return this;
        }
        /**
         * Property additionalAttributes: The value of attribute N.
         * <p>
         * Set the value to IOPS, which indicates the maximum IOPS of the disk.
         * <p>
         * @return {@code this}
         * @param additionalAttributes Property additionalAttributes: The value of attribute N. This parameter is required.
         */
        public Builder additionalAttributes(final java.util.List<? extends java.lang.Object> additionalAttributes) {
            this.props().additionalAttributes(additionalAttributes);
            return this;
        }

        /**
         * Property autoSnapshotPolicyId: The ID of the automatic snapshot policy that is applied to the cloud disk.
         * <p>
         * @return {@code this}
         * @param autoSnapshotPolicyId Property autoSnapshotPolicyId: The ID of the automatic snapshot policy that is applied to the cloud disk. This parameter is required.
         */
        public Builder autoSnapshotPolicyId(final java.lang.String autoSnapshotPolicyId) {
            this.props().autoSnapshotPolicyId(autoSnapshotPolicyId);
            return this;
        }
        /**
         * Property autoSnapshotPolicyId: The ID of the automatic snapshot policy that is applied to the cloud disk.
         * <p>
         * @return {@code this}
         * @param autoSnapshotPolicyId Property autoSnapshotPolicyId: The ID of the automatic snapshot policy that is applied to the cloud disk. This parameter is required.
         */
        public Builder autoSnapshotPolicyId(final com.aliyun.ros.cdk.core.IResolvable autoSnapshotPolicyId) {
            this.props().autoSnapshotPolicyId(autoSnapshotPolicyId);
            return this;
        }

        /**
         * Property category: The category of the disk.
         * <p>
         * Valid values:
         * all: all disk categories
         * cloud: basic disk
         * cloud_efficiency: ultra disk
         * cloud_ssd: standard SSD
         * ephemeral: retired local disk
         * ephemeral_ssd: local SSD
         * cloud_essd: ESSD
         * local_ssd_pro: I/O-intensive local disk
         * local_hdd_pro: throughput-intensive local disk
         * <p>
         * @return {@code this}
         * @param category Property category: The category of the disk. This parameter is required.
         */
        public Builder category(final java.lang.String category) {
            this.props().category(category);
            return this;
        }
        /**
         * Property category: The category of the disk.
         * <p>
         * Valid values:
         * all: all disk categories
         * cloud: basic disk
         * cloud_efficiency: ultra disk
         * cloud_ssd: standard SSD
         * ephemeral: retired local disk
         * ephemeral_ssd: local SSD
         * cloud_essd: ESSD
         * local_ssd_pro: I/O-intensive local disk
         * local_hdd_pro: throughput-intensive local disk
         * <p>
         * @return {@code this}
         * @param category Property category: The category of the disk. This parameter is required.
         */
        public Builder category(final com.aliyun.ros.cdk.core.IResolvable category) {
            this.props().category(category);
            return this;
        }

        /**
         * Property deleteAutoSnapshot: Specifies whether to delete the automatic snapshots of the cloud disk when the disk is released.
         * <p>
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param deleteAutoSnapshot Property deleteAutoSnapshot: Specifies whether to delete the automatic snapshots of the cloud disk when the disk is released. This parameter is required.
         */
        public Builder deleteAutoSnapshot(final java.lang.String deleteAutoSnapshot) {
            this.props().deleteAutoSnapshot(deleteAutoSnapshot);
            return this;
        }
        /**
         * Property deleteAutoSnapshot: Specifies whether to delete the automatic snapshots of the cloud disk when the disk is released.
         * <p>
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param deleteAutoSnapshot Property deleteAutoSnapshot: Specifies whether to delete the automatic snapshots of the cloud disk when the disk is released. This parameter is required.
         */
        public Builder deleteAutoSnapshot(final com.aliyun.ros.cdk.core.IResolvable deleteAutoSnapshot) {
            this.props().deleteAutoSnapshot(deleteAutoSnapshot);
            return this;
        }

        /**
         * Property deleteWithInstance: Specifies whether to release the cloud disk when its associated instance is released.
         * <p>
         * Valid values:
         * true: The cloud disk is released when its associated instance is released.
         * false: The cloud disk is not released but is retained as a pay-as-you-go data disk when its associated instance is released.
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param deleteWithInstance Property deleteWithInstance: Specifies whether to release the cloud disk when its associated instance is released. This parameter is required.
         */
        public Builder deleteWithInstance(final java.lang.Boolean deleteWithInstance) {
            this.props().deleteWithInstance(deleteWithInstance);
            return this;
        }
        /**
         * Property deleteWithInstance: Specifies whether to release the cloud disk when its associated instance is released.
         * <p>
         * Valid values:
         * true: The cloud disk is released when its associated instance is released.
         * false: The cloud disk is not released but is retained as a pay-as-you-go data disk when its associated instance is released.
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param deleteWithInstance Property deleteWithInstance: Specifies whether to release the cloud disk when its associated instance is released. This parameter is required.
         */
        public Builder deleteWithInstance(final com.aliyun.ros.cdk.core.IResolvable deleteWithInstance) {
            this.props().deleteWithInstance(deleteWithInstance);
            return this;
        }

        /**
         * Property diskChargeType: The billing method of the disk.
         * <p>
         * Valid values:
         * PrePaid: subscription
         * PostPaid: pay-as-you-go
         * <p>
         * @return {@code this}
         * @param diskChargeType Property diskChargeType: The billing method of the disk. This parameter is required.
         */
        public Builder diskChargeType(final java.lang.String diskChargeType) {
            this.props().diskChargeType(diskChargeType);
            return this;
        }
        /**
         * Property diskChargeType: The billing method of the disk.
         * <p>
         * Valid values:
         * PrePaid: subscription
         * PostPaid: pay-as-you-go
         * <p>
         * @return {@code this}
         * @param diskChargeType Property diskChargeType: The billing method of the disk. This parameter is required.
         */
        public Builder diskChargeType(final com.aliyun.ros.cdk.core.IResolvable diskChargeType) {
            this.props().diskChargeType(diskChargeType);
            return this;
        }

        /**
         * Property diskIds: The IDs of disks.
         * <p>
         * The value is a JSON array that consists of up to 100 disk IDs.
         * Separate the disk IDs with commas (,).
         * <p>
         * @return {@code this}
         * @param diskIds Property diskIds: The IDs of disks. This parameter is required.
         */
        public Builder diskIds(final com.aliyun.ros.cdk.core.IResolvable diskIds) {
            this.props().diskIds(diskIds);
            return this;
        }
        /**
         * Property diskIds: The IDs of disks.
         * <p>
         * The value is a JSON array that consists of up to 100 disk IDs.
         * Separate the disk IDs with commas (,).
         * <p>
         * @return {@code this}
         * @param diskIds Property diskIds: The IDs of disks. This parameter is required.
         */
        public Builder diskIds(final java.util.List<? extends java.lang.Object> diskIds) {
            this.props().diskIds(diskIds);
            return this;
        }

        /**
         * Property diskName: The name of the disk.
         * <p>
         * @return {@code this}
         * @param diskName Property diskName: The name of the disk. This parameter is required.
         */
        public Builder diskName(final java.lang.String diskName) {
            this.props().diskName(diskName);
            return this;
        }
        /**
         * Property diskName: The name of the disk.
         * <p>
         * @return {@code this}
         * @param diskName Property diskName: The name of the disk. This parameter is required.
         */
        public Builder diskName(final com.aliyun.ros.cdk.core.IResolvable diskName) {
            this.props().diskName(diskName);
            return this;
        }

        /**
         * Property diskType: The type of the disk.
         * <p>
         * Valid values:
         * all: system disk and data disk
         * system: system disk
         * data: data disk
         * Default value: all.
         * <p>
         * @return {@code this}
         * @param diskType Property diskType: The type of the disk. This parameter is required.
         */
        public Builder diskType(final java.lang.String diskType) {
            this.props().diskType(diskType);
            return this;
        }
        /**
         * Property diskType: The type of the disk.
         * <p>
         * Valid values:
         * all: system disk and data disk
         * system: system disk
         * data: data disk
         * Default value: all.
         * <p>
         * @return {@code this}
         * @param diskType Property diskType: The type of the disk. This parameter is required.
         */
        public Builder diskType(final com.aliyun.ros.cdk.core.IResolvable diskType) {
            this.props().diskType(diskType);
            return this;
        }

        /**
         * Property enableAutomatedSnapshotPolicy: Specifies whether an automatic snapshot policy is applied to the cloud disk.
         * <p>
         * true: An automatic snapshot policy is applied to the cloud disk.
         * false: No automatic snapshot policy is applied to the cloud disk.
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param enableAutomatedSnapshotPolicy Property enableAutomatedSnapshotPolicy: Specifies whether an automatic snapshot policy is applied to the cloud disk. This parameter is required.
         */
        public Builder enableAutomatedSnapshotPolicy(final java.lang.Boolean enableAutomatedSnapshotPolicy) {
            this.props().enableAutomatedSnapshotPolicy(enableAutomatedSnapshotPolicy);
            return this;
        }
        /**
         * Property enableAutomatedSnapshotPolicy: Specifies whether an automatic snapshot policy is applied to the cloud disk.
         * <p>
         * true: An automatic snapshot policy is applied to the cloud disk.
         * false: No automatic snapshot policy is applied to the cloud disk.
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param enableAutomatedSnapshotPolicy Property enableAutomatedSnapshotPolicy: Specifies whether an automatic snapshot policy is applied to the cloud disk. This parameter is required.
         */
        public Builder enableAutomatedSnapshotPolicy(final com.aliyun.ros.cdk.core.IResolvable enableAutomatedSnapshotPolicy) {
            this.props().enableAutomatedSnapshotPolicy(enableAutomatedSnapshotPolicy);
            return this;
        }

        /**
         * Property enableAutoSnapshot: Specifies whether the automatic snapshot policy feature is enabled for the cloud disk.
         * <p>
         * true: The automatic snapshot policy feature is enabled for the cloud disk.
         * false: The automatic snapshot policy feature is disabled for the cloud disk.
         * Note By default, the automatic snapshot policy feature is enabled for created cloud disks. You need only to apply an automatic snapshot policy to a cloud disk before you can use the automatic snapshot policy.
         * <p>
         * @return {@code this}
         * @param enableAutoSnapshot Property enableAutoSnapshot: Specifies whether the automatic snapshot policy feature is enabled for the cloud disk. This parameter is required.
         */
        public Builder enableAutoSnapshot(final java.lang.Boolean enableAutoSnapshot) {
            this.props().enableAutoSnapshot(enableAutoSnapshot);
            return this;
        }
        /**
         * Property enableAutoSnapshot: Specifies whether the automatic snapshot policy feature is enabled for the cloud disk.
         * <p>
         * true: The automatic snapshot policy feature is enabled for the cloud disk.
         * false: The automatic snapshot policy feature is disabled for the cloud disk.
         * Note By default, the automatic snapshot policy feature is enabled for created cloud disks. You need only to apply an automatic snapshot policy to a cloud disk before you can use the automatic snapshot policy.
         * <p>
         * @return {@code this}
         * @param enableAutoSnapshot Property enableAutoSnapshot: Specifies whether the automatic snapshot policy feature is enabled for the cloud disk. This parameter is required.
         */
        public Builder enableAutoSnapshot(final com.aliyun.ros.cdk.core.IResolvable enableAutoSnapshot) {
            this.props().enableAutoSnapshot(enableAutoSnapshot);
            return this;
        }

        /**
         * Property enableShared: Specifies whether the disk is a Shared Block Storage device.
         * <p>
         * @return {@code this}
         * @param enableShared Property enableShared: Specifies whether the disk is a Shared Block Storage device. This parameter is required.
         */
        public Builder enableShared(final java.lang.String enableShared) {
            this.props().enableShared(enableShared);
            return this;
        }
        /**
         * Property enableShared: Specifies whether the disk is a Shared Block Storage device.
         * <p>
         * @return {@code this}
         * @param enableShared Property enableShared: Specifies whether the disk is a Shared Block Storage device. This parameter is required.
         */
        public Builder enableShared(final com.aliyun.ros.cdk.core.IResolvable enableShared) {
            this.props().enableShared(enableShared);
            return this;
        }

        /**
         * Property encrypted: Specifies whether to query only encrypted cloud disks.
         * <p>
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param encrypted Property encrypted: Specifies whether to query only encrypted cloud disks. This parameter is required.
         */
        public Builder encrypted(final java.lang.Boolean encrypted) {
            this.props().encrypted(encrypted);
            return this;
        }
        /**
         * Property encrypted: Specifies whether to query only encrypted cloud disks.
         * <p>
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param encrypted Property encrypted: Specifies whether to query only encrypted cloud disks. This parameter is required.
         */
        public Builder encrypted(final com.aliyun.ros.cdk.core.IResolvable encrypted) {
            this.props().encrypted(encrypted);
            return this;
        }

        /**
         * Property filters: Filter value when querying resources.
         * <p>
         * @return {@code this}
         * @param filters Property filters: Filter value when querying resources. This parameter is required.
         */
        public Builder filters(final com.aliyun.ros.cdk.core.IResolvable filters) {
            this.props().filters(filters);
            return this;
        }
        /**
         * Property filters: Filter value when querying resources.
         * <p>
         * @return {@code this}
         * @param filters Property filters: Filter value when querying resources. This parameter is required.
         */
        public Builder filters(final java.util.List<? extends java.lang.Object> filters) {
            this.props().filters(filters);
            return this;
        }

        /**
         * Property instanceId: The ID of the instance to which the disk is attached.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the instance to which the disk is attached. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props().instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The ID of the instance to which the disk is attached.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the instance to which the disk is attached. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props().instanceId(instanceId);
            return this;
        }

        /**
         * Property kmsKeyId: The ID of the Key Management Service (KMS) key used by the cloud disk.
         * <p>
         * @return {@code this}
         * @param kmsKeyId Property kmsKeyId: The ID of the Key Management Service (KMS) key used by the cloud disk. This parameter is required.
         */
        public Builder kmsKeyId(final java.lang.String kmsKeyId) {
            this.props().kmsKeyId(kmsKeyId);
            return this;
        }
        /**
         * Property kmsKeyId: The ID of the Key Management Service (KMS) key used by the cloud disk.
         * <p>
         * @return {@code this}
         * @param kmsKeyId Property kmsKeyId: The ID of the Key Management Service (KMS) key used by the cloud disk. This parameter is required.
         */
        public Builder kmsKeyId(final com.aliyun.ros.cdk.core.IResolvable kmsKeyId) {
            this.props().kmsKeyId(kmsKeyId);
            return this;
        }

        /**
         * Property multiAttach: Specifies whether the multi-attach feature is enabled for the disk.
         * <p>
         * Valid values:
         * Disabled: The multi-attach feature is disabled.
         * Enabled: The multi-attach feature is enabled.
         * LegacyShared: Shared Block Storage devices are queried.
         * The multi-attach feature is in invitational preview. To use this feature, submit a ticket.
         * <p>
         * @return {@code this}
         * @param multiAttach Property multiAttach: Specifies whether the multi-attach feature is enabled for the disk. This parameter is required.
         */
        public Builder multiAttach(final java.lang.String multiAttach) {
            this.props().multiAttach(multiAttach);
            return this;
        }
        /**
         * Property multiAttach: Specifies whether the multi-attach feature is enabled for the disk.
         * <p>
         * Valid values:
         * Disabled: The multi-attach feature is disabled.
         * Enabled: The multi-attach feature is enabled.
         * LegacyShared: Shared Block Storage devices are queried.
         * The multi-attach feature is in invitational preview. To use this feature, submit a ticket.
         * <p>
         * @return {@code this}
         * @param multiAttach Property multiAttach: Specifies whether the multi-attach feature is enabled for the disk. This parameter is required.
         */
        public Builder multiAttach(final com.aliyun.ros.cdk.core.IResolvable multiAttach) {
            this.props().multiAttach(multiAttach);
            return this;
        }

        /**
         * Property portable: Specifies whether the disk is removable.
         * <p>
         * Valid values:
         * true: The disk is removable.A removable disk can independently exist and can be attached to or detached from an instance within the same zone.
         * false: The disk is not removable. A disk that is not removable cannot independently exist or be attached to or detached from an instance within the same zone.
         * The Portable attribute of the following disks is false, and these disks share the same lifecycle with their associated instances:
         * Local disks
         * Local SSDs
         * Subscription data disks
         * <p>
         * @return {@code this}
         * @param portable Property portable: Specifies whether the disk is removable. This parameter is required.
         */
        public Builder portable(final java.lang.String portable) {
            this.props().portable(portable);
            return this;
        }
        /**
         * Property portable: Specifies whether the disk is removable.
         * <p>
         * Valid values:
         * true: The disk is removable.A removable disk can independently exist and can be attached to or detached from an instance within the same zone.
         * false: The disk is not removable. A disk that is not removable cannot independently exist or be attached to or detached from an instance within the same zone.
         * The Portable attribute of the following disks is false, and these disks share the same lifecycle with their associated instances:
         * Local disks
         * Local SSDs
         * Subscription data disks
         * <p>
         * @return {@code this}
         * @param portable Property portable: Specifies whether the disk is removable. This parameter is required.
         */
        public Builder portable(final com.aliyun.ros.cdk.core.IResolvable portable) {
            this.props().portable(portable);
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
         * Property resourceGroupId: The ID of the resource group to which the disk belongs.
         * <p>
         * If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the disk belongs. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: The ID of the resource group to which the disk belongs.
         * <p>
         * If this parameter is specified to query resources,up to 1,000 resources that belong to the specified resource group can be displayed in the response.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: The ID of the resource group to which the disk belongs. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props().resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property snapshotId: The ID of the snapshot used to create the cloud disk.
         * <p>
         * @return {@code this}
         * @param snapshotId Property snapshotId: The ID of the snapshot used to create the cloud disk. This parameter is required.
         */
        public Builder snapshotId(final java.lang.String snapshotId) {
            this.props().snapshotId(snapshotId);
            return this;
        }
        /**
         * Property snapshotId: The ID of the snapshot used to create the cloud disk.
         * <p>
         * @return {@code this}
         * @param snapshotId Property snapshotId: The ID of the snapshot used to create the cloud disk. This parameter is required.
         */
        public Builder snapshotId(final com.aliyun.ros.cdk.core.IResolvable snapshotId) {
            this.props().snapshotId(snapshotId);
            return this;
        }

        /**
         * Property status: The state of the cloud disk.
         * <p>
         * For more information, see Disk states. Valid values:
         * In_use
         * Available
         * Attaching
         * Detaching
         * Creating
         * ReIniting
         * All
         * Default value: All.
         * <p>
         * @return {@code this}
         * @param status Property status: The state of the cloud disk. This parameter is required.
         */
        public Builder status(final java.lang.String status) {
            this.props().status(status);
            return this;
        }
        /**
         * Property status: The state of the cloud disk.
         * <p>
         * For more information, see Disk states. Valid values:
         * In_use
         * Available
         * Attaching
         * Detaching
         * Creating
         * ReIniting
         * All
         * Default value: All.
         * <p>
         * @return {@code this}
         * @param status Property status: The state of the cloud disk. This parameter is required.
         */
        public Builder status(final com.aliyun.ros.cdk.core.IResolvable status) {
            this.props().status(status);
            return this;
        }

        /**
         * Property tags: Tags of disks.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags of disks. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.ecs.datasource.RosDisks.TagsProperty> tags) {
            this.props().tags(tags);
            return this;
        }

        /**
         * Property zoneId: The ID of the zone for which to query resources.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of the zone for which to query resources. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props().zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The ID of the zone for which to query resources.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of the zone for which to query resources. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props().zoneId(zoneId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.datasource.Disks}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.datasource.Disks build() {
            return new com.aliyun.ros.cdk.ecs.datasource.Disks(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.ecs.datasource.DisksProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.ecs.datasource.DisksProps.Builder();
            }
            return this.props;
        }
    }
}
