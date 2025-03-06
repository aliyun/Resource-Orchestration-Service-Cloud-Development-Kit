package com.aliyun.ros.cdk.nas;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::NAS::FileSystem</code>, which is used to create a file system of File Storage NAS (NAS).
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:08.204Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nas.$Module.class, fqn = "@alicloud/ros-cdk-nas.FileSystem")
public class FileSystem extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.nas.IFileSystem {

    protected FileSystem(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FileSystem(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public FileSystem(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nas.FileSystemProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public FileSystem(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nas.FileSystemProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute FileSystemId: ID of the file system created.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFileSystemId() {
        return software.amazon.jsii.Kernel.get(this, "attrFileSystemId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nas.FileSystemProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.nas.FileSystemProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.nas.FileSystem}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.nas.FileSystem> {
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
        private final com.aliyun.ros.cdk.nas.FileSystemProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.nas.FileSystemProps.Builder();
        }

        /**
         * Property protocolType: Type of protocol used.
         * <p>
         * Valid values: NFS, SMB, cpfs.
         * <p>
         * @return {@code this}
         * @param protocolType Property protocolType: Type of protocol used. This parameter is required.
         */
        public Builder protocolType(final java.lang.String protocolType) {
            this.props.protocolType(protocolType);
            return this;
        }
        /**
         * Property protocolType: Type of protocol used.
         * <p>
         * Valid values: NFS, SMB, cpfs.
         * <p>
         * @return {@code this}
         * @param protocolType Property protocolType: Type of protocol used. This parameter is required.
         */
        public Builder protocolType(final com.aliyun.ros.cdk.core.IResolvable protocolType) {
            this.props.protocolType(protocolType);
            return this;
        }

        /**
         * Property storageType: The storage type of the file System.
         * <p>
         * Valid values:
         * Performance、Capacity(Available when the file_system_type is standard)
         * standard、advance(Available when the file_system_type is extreme)
         * advance_100、advance_200(Available when the file_system_type is cpfs)
         * <p>
         * @return {@code this}
         * @param storageType Property storageType: The storage type of the file System. This parameter is required.
         */
        public Builder storageType(final java.lang.String storageType) {
            this.props.storageType(storageType);
            return this;
        }
        /**
         * Property storageType: The storage type of the file System.
         * <p>
         * Valid values:
         * Performance、Capacity(Available when the file_system_type is standard)
         * standard、advance(Available when the file_system_type is extreme)
         * advance_100、advance_200(Available when the file_system_type is cpfs)
         * <p>
         * @return {@code this}
         * @param storageType Property storageType: The storage type of the file System. This parameter is required.
         */
        public Builder storageType(final com.aliyun.ros.cdk.core.IResolvable storageType) {
            this.props.storageType(storageType);
            return this;
        }

        /**
         * Property bandwidth: Maximum file system throughput, unit is MB/s.
         * <p>
         * Required and valid only when FileSystemType=cpfs.
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: Maximum file system throughput, unit is MB/s. This parameter is required.
         */
        public Builder bandwidth(final java.lang.Number bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }
        /**
         * Property bandwidth: Maximum file system throughput, unit is MB/s.
         * <p>
         * Required and valid only when FileSystemType=cpfs.
         * <p>
         * @return {@code this}
         * @param bandwidth Property bandwidth: Maximum file system throughput, unit is MB/s. This parameter is required.
         */
        public Builder bandwidth(final com.aliyun.ros.cdk.core.IResolvable bandwidth) {
            this.props.bandwidth(bandwidth);
            return this;
        }

        /**
         * Property capacity: File system capacity, the unit is GB.
         * <p>
         * Required and valid when FileSystemType=extreme or cpfs.
         * <p>
         * @return {@code this}
         * @param capacity Property capacity: File system capacity, the unit is GB. This parameter is required.
         */
        public Builder capacity(final java.lang.Number capacity) {
            this.props.capacity(capacity);
            return this;
        }
        /**
         * Property capacity: File system capacity, the unit is GB.
         * <p>
         * Required and valid when FileSystemType=extreme or cpfs.
         * <p>
         * @return {@code this}
         * @param capacity Property capacity: File system capacity, the unit is GB. This parameter is required.
         */
        public Builder capacity(final com.aliyun.ros.cdk.core.IResolvable capacity) {
            this.props.capacity(capacity);
            return this;
        }

        /**
         * Property chargeType: Type of payment: PayAsYouGo (pay as you go) Subscription.
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: Type of payment: PayAsYouGo (pay as you go) Subscription. This parameter is required.
         */
        public Builder chargeType(final java.lang.String chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }
        /**
         * Property chargeType: Type of payment: PayAsYouGo (pay as you go) Subscription.
         * <p>
         * @return {@code this}
         * @param chargeType Property chargeType: Type of payment: PayAsYouGo (pay as you go) Subscription. This parameter is required.
         */
        public Builder chargeType(final com.aliyun.ros.cdk.core.IResolvable chargeType) {
            this.props.chargeType(chargeType);
            return this;
        }

        /**
         * Property deletionForce: Whether delete all mount targets on the file system and then delete file system.
         * <p>
         * Default is false
         * <p>
         * @return {@code this}
         * @param deletionForce Property deletionForce: Whether delete all mount targets on the file system and then delete file system. This parameter is required.
         */
        public Builder deletionForce(final java.lang.Boolean deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }
        /**
         * Property deletionForce: Whether delete all mount targets on the file system and then delete file system.
         * <p>
         * Default is false
         * <p>
         * @return {@code this}
         * @param deletionForce Property deletionForce: Whether delete all mount targets on the file system and then delete file system. This parameter is required.
         */
        public Builder deletionForce(final com.aliyun.ros.cdk.core.IResolvable deletionForce) {
            this.props.deletionForce(deletionForce);
            return this;
        }

        /**
         * Property description: File system description (space characters are not allowed).
         * <p>
         * @return {@code this}
         * @param description Property description: File system description (space characters are not allowed). This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: File system description (space characters are not allowed).
         * <p>
         * @return {@code this}
         * @param description Property description: File system description (space characters are not allowed). This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property duration: The period of subscription in months.
         * <p>
         * Required and valid when ChargeType is Subscription.
         * When the annual and monthly subscription instance expires without renewal, the instance will automatically expire and be released.
         * <p>
         * @return {@code this}
         * @param duration Property duration: The period of subscription in months. This parameter is required.
         */
        public Builder duration(final java.lang.Number duration) {
            this.props.duration(duration);
            return this;
        }
        /**
         * Property duration: The period of subscription in months.
         * <p>
         * Required and valid when ChargeType is Subscription.
         * When the annual and monthly subscription instance expires without renewal, the instance will automatically expire and be released.
         * <p>
         * @return {@code this}
         * @param duration Property duration: The period of subscription in months. This parameter is required.
         */
        public Builder duration(final com.aliyun.ros.cdk.core.IResolvable duration) {
            this.props.duration(duration);
            return this;
        }

        /**
         * Property encryptType: Specifies whether to encrypt data.
         * <p>
         * You can use keys that are hosted by Key Management Service (KMS) to encrypt data stored on a file system. Data is automatically decrypted when you access encrypted data. Valid values:
         * 0: specifies that no encryption is applied to data on the file system.
         * 1: specifies that encryption is applied to data on the file system.
         * <p>
         * @return {@code this}
         * @param encryptType Property encryptType: Specifies whether to encrypt data. This parameter is required.
         */
        public Builder encryptType(final java.lang.Number encryptType) {
            this.props.encryptType(encryptType);
            return this;
        }
        /**
         * Property encryptType: Specifies whether to encrypt data.
         * <p>
         * You can use keys that are hosted by Key Management Service (KMS) to encrypt data stored on a file system. Data is automatically decrypted when you access encrypted data. Valid values:
         * 0: specifies that no encryption is applied to data on the file system.
         * 1: specifies that encryption is applied to data on the file system.
         * <p>
         * @return {@code this}
         * @param encryptType Property encryptType: Specifies whether to encrypt data. This parameter is required.
         */
        public Builder encryptType(final com.aliyun.ros.cdk.core.IResolvable encryptType) {
            this.props.encryptType(encryptType);
            return this;
        }

        /**
         * Property fileSystemType: File system type.
         * <p>
         * Allowed values: standard(default), extreme, cpfs
         * <p>
         * @return {@code this}
         * @param fileSystemType Property fileSystemType: File system type. This parameter is required.
         */
        public Builder fileSystemType(final java.lang.String fileSystemType) {
            this.props.fileSystemType(fileSystemType);
            return this;
        }
        /**
         * Property fileSystemType: File system type.
         * <p>
         * Allowed values: standard(default), extreme, cpfs
         * <p>
         * @return {@code this}
         * @param fileSystemType Property fileSystemType: File system type. This parameter is required.
         */
        public Builder fileSystemType(final com.aliyun.ros.cdk.core.IResolvable fileSystemType) {
            this.props.fileSystemType(fileSystemType);
            return this;
        }

        /**
         * Property snapshotId: Snapshot ID.
         * <p>
         * @return {@code this}
         * @param snapshotId Property snapshotId: Snapshot ID. This parameter is required.
         */
        public Builder snapshotId(final java.lang.String snapshotId) {
            this.props.snapshotId(snapshotId);
            return this;
        }
        /**
         * Property snapshotId: Snapshot ID.
         * <p>
         * @return {@code this}
         * @param snapshotId Property snapshotId: Snapshot ID. This parameter is required.
         */
        public Builder snapshotId(final com.aliyun.ros.cdk.core.IResolvable snapshotId) {
            this.props.snapshotId(snapshotId);
            return this;
        }

        /**
         * Property tags: Tags to attach to filesystem.
         * <p>
         * Max support 20 tags to add during create filesystem. Each tag with two properties Key and Value, and Key is required.
         * <p>
         * @return {@code this}
         * @param tags Property tags: Tags to attach to filesystem. This parameter is required.
         */
        public Builder tags(final java.util.List<? extends com.aliyun.ros.cdk.nas.RosFileSystem.TagsProperty> tags) {
            this.props.tags(tags);
            return this;
        }

        /**
         * Property vpcId: Vpc ID.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: Vpc ID. This parameter is required.
         */
        public Builder vpcId(final java.lang.String vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }
        /**
         * Property vpcId: Vpc ID.
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: Vpc ID. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: VSwitch ID.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: VSwitch ID. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: VSwitch ID.
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: VSwitch ID. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property zoneId: Zone ID.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: Zone ID. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: Zone ID.
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: Zone ID. This parameter is required.
         */
        public Builder zoneId(final com.aliyun.ros.cdk.core.IResolvable zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.nas.FileSystem}.
         */
        @Override
        public com.aliyun.ros.cdk.nas.FileSystem build() {
            return new com.aliyun.ros.cdk.nas.FileSystem(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
