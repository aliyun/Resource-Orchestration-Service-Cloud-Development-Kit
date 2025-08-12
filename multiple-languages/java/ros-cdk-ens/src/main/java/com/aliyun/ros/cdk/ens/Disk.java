package com.aliyun.ros.cdk.ens;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ENS::Disk</code>, which is used to create a pay-as-you-go or subscription data disk.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-08-12T08:28:47.245Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ens.$Module.class, fqn = "@alicloud/ros-cdk-ens.Disk")
public class Disk extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ens.IDisk {

    protected Disk(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Disk(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Disk(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ens.DiskProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Disk(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ens.DiskProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute DiskId: The ID of the instance.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDiskId() {
        return software.amazon.jsii.Kernel.get(this, "attrDiskId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ens.DiskProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ens.DiskProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ens.Disk}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ens.Disk> {
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
        private final com.aliyun.ros.cdk.ens.DiskProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ens.DiskProps.Builder();
        }

        /**
         * Property category: The category of the disk.
         * <p>
         * Valid values:
         * cloud_efficiency: ultra disk.
         * cloud_ssd: all-flash disk.
         * <p>
         * @return {@code this}
         * @param category Property category: The category of the disk. This parameter is required.
         */
        public Builder category(final java.lang.String category) {
            this.props.category(category);
            return this;
        }
        /**
         * Property category: The category of the disk.
         * <p>
         * Valid values:
         * cloud_efficiency: ultra disk.
         * cloud_ssd: all-flash disk.
         * <p>
         * @return {@code this}
         * @param category Property category: The category of the disk. This parameter is required.
         */
        public Builder category(final com.aliyun.ros.cdk.core.IResolvable category) {
            this.props.category(category);
            return this;
        }

        /**
         * Property ensRegionId: The ID of the edge node.
         * <p>
         * @return {@code this}
         * @param ensRegionId Property ensRegionId: The ID of the edge node. This parameter is required.
         */
        public Builder ensRegionId(final java.lang.String ensRegionId) {
            this.props.ensRegionId(ensRegionId);
            return this;
        }
        /**
         * Property ensRegionId: The ID of the edge node.
         * <p>
         * @return {@code this}
         * @param ensRegionId Property ensRegionId: The ID of the edge node. This parameter is required.
         */
        public Builder ensRegionId(final com.aliyun.ros.cdk.core.IResolvable ensRegionId) {
            this.props.ensRegionId(ensRegionId);
            return this;
        }

        /**
         * Property instanceChargeType: The billing method of the instance.
         * <p>
         * Set the value to PostPaid.
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: The billing method of the instance. This parameter is required.
         */
        public Builder instanceChargeType(final java.lang.String instanceChargeType) {
            this.props.instanceChargeType(instanceChargeType);
            return this;
        }
        /**
         * Property instanceChargeType: The billing method of the instance.
         * <p>
         * Set the value to PostPaid.
         * <p>
         * @return {@code this}
         * @param instanceChargeType Property instanceChargeType: The billing method of the instance. This parameter is required.
         */
        public Builder instanceChargeType(final com.aliyun.ros.cdk.core.IResolvable instanceChargeType) {
            this.props.instanceChargeType(instanceChargeType);
            return this;
        }

        /**
         * Property size: The size of the disk.
         * <p>
         * Unit: GiB.
         * <p>
         * @return {@code this}
         * @param size Property size: The size of the disk. This parameter is required.
         */
        public Builder size(final java.lang.String size) {
            this.props.size(size);
            return this;
        }
        /**
         * Property size: The size of the disk.
         * <p>
         * Unit: GiB.
         * <p>
         * @return {@code this}
         * @param size Property size: The size of the disk. This parameter is required.
         */
        public Builder size(final com.aliyun.ros.cdk.core.IResolvable size) {
            this.props.size(size);
            return this;
        }

        /**
         * Property diskName: The name of the disk.
         * <p>
         * @return {@code this}
         * @param diskName Property diskName: The name of the disk. This parameter is required.
         */
        public Builder diskName(final java.lang.String diskName) {
            this.props.diskName(diskName);
            return this;
        }
        /**
         * Property diskName: The name of the disk.
         * <p>
         * @return {@code this}
         * @param diskName Property diskName: The name of the disk. This parameter is required.
         */
        public Builder diskName(final com.aliyun.ros.cdk.core.IResolvable diskName) {
            this.props.diskName(diskName);
            return this;
        }

        /**
         * Property encrypted: Specifies whether to encrypt the new system disk.
         * <p>
         * Valid values:
         * true
         * false (default): no
         * <p>
         * @return {@code this}
         * @param encrypted Property encrypted: Specifies whether to encrypt the new system disk. This parameter is required.
         */
        public Builder encrypted(final java.lang.Boolean encrypted) {
            this.props.encrypted(encrypted);
            return this;
        }
        /**
         * Property encrypted: Specifies whether to encrypt the new system disk.
         * <p>
         * Valid values:
         * true
         * false (default): no
         * <p>
         * @return {@code this}
         * @param encrypted Property encrypted: Specifies whether to encrypt the new system disk. This parameter is required.
         */
        public Builder encrypted(final com.aliyun.ros.cdk.core.IResolvable encrypted) {
            this.props.encrypted(encrypted);
            return this;
        }

        /**
         * Property kmsKeyId: The ID of the Key Management Service (KMS) key that is used by the cloud disk.
         * <p>
         * Note If you set the Encrypted parameter to true, the default service key is used when the KMSKeyId parameter is empty.
         * <p>
         * @return {@code this}
         * @param kmsKeyId Property kmsKeyId: The ID of the Key Management Service (KMS) key that is used by the cloud disk. This parameter is required.
         */
        public Builder kmsKeyId(final java.lang.String kmsKeyId) {
            this.props.kmsKeyId(kmsKeyId);
            return this;
        }
        /**
         * Property kmsKeyId: The ID of the Key Management Service (KMS) key that is used by the cloud disk.
         * <p>
         * Note If you set the Encrypted parameter to true, the default service key is used when the KMSKeyId parameter is empty.
         * <p>
         * @return {@code this}
         * @param kmsKeyId Property kmsKeyId: The ID of the Key Management Service (KMS) key that is used by the cloud disk. This parameter is required.
         */
        public Builder kmsKeyId(final com.aliyun.ros.cdk.core.IResolvable kmsKeyId) {
            this.props.kmsKeyId(kmsKeyId);
            return this;
        }

        /**
         * Property snapshotId: The ID of the snapshot that you want to use to create the disk.
         * <p>
         * The following limits apply to the SnapshotId and Size parameters:
         * If the size of the snapshot specified by SnapshotId is greater than the specified Size value, the size of the created disk is equal to the specified snapshot size.
         * If the size of the snapshot specified by SnapshotId is smaller than the specified Size value, the size of the created disk is equal to the specified Size value.
         * <p>
         * @return {@code this}
         * @param snapshotId Property snapshotId: The ID of the snapshot that you want to use to create the disk. This parameter is required.
         */
        public Builder snapshotId(final java.lang.String snapshotId) {
            this.props.snapshotId(snapshotId);
            return this;
        }
        /**
         * Property snapshotId: The ID of the snapshot that you want to use to create the disk.
         * <p>
         * The following limits apply to the SnapshotId and Size parameters:
         * If the size of the snapshot specified by SnapshotId is greater than the specified Size value, the size of the created disk is equal to the specified snapshot size.
         * If the size of the snapshot specified by SnapshotId is smaller than the specified Size value, the size of the created disk is equal to the specified Size value.
         * <p>
         * @return {@code this}
         * @param snapshotId Property snapshotId: The ID of the snapshot that you want to use to create the disk. This parameter is required.
         */
        public Builder snapshotId(final com.aliyun.ros.cdk.core.IResolvable snapshotId) {
            this.props.snapshotId(snapshotId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ens.Disk}.
         */
        @Override
        public com.aliyun.ros.cdk.ens.Disk build() {
            return new com.aliyun.ros.cdk.ens.Disk(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
