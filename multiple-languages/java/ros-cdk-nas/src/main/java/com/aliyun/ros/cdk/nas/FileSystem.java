package com.aliyun.ros.cdk.nas;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::NAS::FileSystem</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T10:15:39.303Z")
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
         * Performance、Capacity、Premium(Available when the file_system_type is standard)
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
         * Performance、Capacity、Premium(Available when the file_system_type is standard)
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
         * Property capacity: Specify the capacity of the file system.
         * <p>
         * Unit: GiB. This parameter is required
         * and valid when FileSystemType is set to extreme, cpfs, or cpfsse.
         * Specify a value based on the specifications on the following buy page:
         * <p>
         * <ul>
         * <li>Extreme NAS (Pay-as-you-go)</li>
         * <li>CPFS (Pay-as-you-go)</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param capacity Property capacity: Specify the capacity of the file system. This parameter is required.
         */
        public Builder capacity(final java.lang.Number capacity) {
            this.props.capacity(capacity);
            return this;
        }
        /**
         * Property capacity: Specify the capacity of the file system.
         * <p>
         * Unit: GiB. This parameter is required
         * and valid when FileSystemType is set to extreme, cpfs, or cpfsse.
         * Specify a value based on the specifications on the following buy page:
         * <p>
         * <ul>
         * <li>Extreme NAS (Pay-as-you-go)</li>
         * <li>CPFS (Pay-as-you-go)</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param capacity Property capacity: Specify the capacity of the file system. This parameter is required.
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
         * Property description: The description of the file system.
         * <p>
         * Limits:
         * <p>
         * <ul>
         * <li>Must be 2 to 128 characters in length.</li>
         * <li>Must start with a letter but cannot start with <code>http:\/\/</code> or <code>https:\/\/</code>.</li>
         * <li>Can contain digits, colons (:), underscores (_), and hyphens (-).</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the file system. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the file system.
         * <p>
         * Limits:
         * <p>
         * <ul>
         * <li>Must be 2 to 128 characters in length.</li>
         * <li>Must start with a letter but cannot start with <code>http:\/\/</code> or <code>https:\/\/</code>.</li>
         * <li>Can contain digits, colons (:), underscores (_), and hyphens (-).</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the file system. This parameter is required.
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
         * Property encryptType: Specifies whether to encrypt data in the file system.
         * <p>
         * You can use the keys that are managed by Key Management Service (KMS) to encrypt
         * data in a file system. When you read and write the encrypted data, the data is
         * automatically decrypted.
         * Valid values:
         * <p>
         * <ul>
         * <li>0 (default): The data in the file system is not encrypted.</li>
         * <li>1: A NAS-managed key is used to encrypt the data in the file system. This
         * value is valid if FileSystemType is set to standard or extreme.</li>
         * <li>2: A KMS-managed key is used to encrypt the data in the file system. This
         * value is valid if the FileSystemType parameter is set to standard or extreme.</li>
         * </ul>
         * <p>
         * <blockquote></blockquote>
         * <p>
         * <ul>
         * <li>Extreme NAS: All regions except China East 1 Finance support KMS-managed
         * keys.</li>
         * <li>General-purpose NAS: All regions support KMS-managed keys.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param encryptType Property encryptType: Specifies whether to encrypt data in the file system. This parameter is required.
         */
        public Builder encryptType(final java.lang.Number encryptType) {
            this.props.encryptType(encryptType);
            return this;
        }
        /**
         * Property encryptType: Specifies whether to encrypt data in the file system.
         * <p>
         * You can use the keys that are managed by Key Management Service (KMS) to encrypt
         * data in a file system. When you read and write the encrypted data, the data is
         * automatically decrypted.
         * Valid values:
         * <p>
         * <ul>
         * <li>0 (default): The data in the file system is not encrypted.</li>
         * <li>1: A NAS-managed key is used to encrypt the data in the file system. This
         * value is valid if FileSystemType is set to standard or extreme.</li>
         * <li>2: A KMS-managed key is used to encrypt the data in the file system. This
         * value is valid if the FileSystemType parameter is set to standard or extreme.</li>
         * </ul>
         * <p>
         * <blockquote></blockquote>
         * <p>
         * <ul>
         * <li>Extreme NAS: All regions except China East 1 Finance support KMS-managed
         * keys.</li>
         * <li>General-purpose NAS: All regions support KMS-managed keys.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param encryptType Property encryptType: Specifies whether to encrypt data in the file system. This parameter is required.
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
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final java.lang.String resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }
        /**
         * Property resourceGroupId: Resource group id.
         * <p>
         * @return {@code this}
         * @param resourceGroupId Property resourceGroupId: Resource group id. This parameter is required.
         */
        public Builder resourceGroupId(final com.aliyun.ros.cdk.core.IResolvable resourceGroupId) {
            this.props.resourceGroupId(resourceGroupId);
            return this;
        }

        /**
         * Property snapshotId: The snapshot ID.
         * <p>
         * This parameter is available only for advanced Extreme NAS file systems.
         * <p>
         * <blockquote>
         * <p>
         * You can create a file system from a snapshot. The version of the file system is
         * the same as that of the source file system. For example, the source file system
         * of the snapshot uses version 1. To create a file system of version 2, create File
         * System A from the snapshot and create File System B of version 2. Then copy the
         * data and migrate your business from File System A to File System B.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param snapshotId Property snapshotId: The snapshot ID. This parameter is required.
         */
        public Builder snapshotId(final java.lang.String snapshotId) {
            this.props.snapshotId(snapshotId);
            return this;
        }
        /**
         * Property snapshotId: The snapshot ID.
         * <p>
         * This parameter is available only for advanced Extreme NAS file systems.
         * <p>
         * <blockquote>
         * <p>
         * You can create a file system from a snapshot. The version of the file system is
         * the same as that of the source file system. For example, the source file system
         * of the snapshot uses version 1. To create a file system of version 2, create File
         * System A from the snapshot and create File System B of version 2. Then copy the
         * data and migrate your business from File System A to File System B.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param snapshotId Property snapshotId: The snapshot ID. This parameter is required.
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
         * Property vpcId: The VPC ID.
         * <p>
         * <ul>
         * <li>This parameter is required if FileSystemType is set to cpfs or cpfsse.</li>
         * <li>This parameter is reserved and not required if FileSystemType is set to
         * standard or extreme.</li>
         * </ul>
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
         * <ul>
         * <li>This parameter is required if FileSystemType is set to cpfs or cpfsse.</li>
         * <li>This parameter is reserved and not required if FileSystemType is set to
         * standard or extreme.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param vpcId Property vpcId: The VPC ID. This parameter is required.
         */
        public Builder vpcId(final com.aliyun.ros.cdk.core.IResolvable vpcId) {
            this.props.vpcId(vpcId);
            return this;
        }

        /**
         * Property vSwitchId: The vSwitch ID.
         * <p>
         * <ul>
         * <li>This parameter is required if FileSystemType is set to cpfs.</li>
         * <li>If FileSystemType is not set to cpfs, this parameter is reserved and not
         * required.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The vSwitch ID. This parameter is required.
         */
        public Builder vSwitchId(final java.lang.String vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }
        /**
         * Property vSwitchId: The vSwitch ID.
         * <p>
         * <ul>
         * <li>This parameter is required if FileSystemType is set to cpfs.</li>
         * <li>If FileSystemType is not set to cpfs, this parameter is reserved and not
         * required.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param vSwitchId Property vSwitchId: The vSwitch ID. This parameter is required.
         */
        public Builder vSwitchId(final com.aliyun.ros.cdk.core.IResolvable vSwitchId) {
            this.props.vSwitchId(vSwitchId);
            return this;
        }

        /**
         * Property zoneId: The ID of the zone.
         * <p>
         * Each region has multiple isolated locations known as zones. Each zone has its own
         * independent power supply and network.
         * This parameter is not required if FileSystemType is set to standard. By default,
         * a random zone is selected based on the protocol type and storage type.
         * This parameter is required if FileSystemType is set to extreme or cpfs.
         * <p>
         * <blockquote></blockquote>
         * <p>
         * <ul>
         * <li>An Elastic Compute Service (ECS) instance and a file system that reside in
         * different zones of the same region can access each other.</li>
         * <li>We recommend that you select the zone where the ECS instance resides. This
         * prevents cross-zone latency between the file system and the ECS instance.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of the zone. This parameter is required.
         */
        public Builder zoneId(final java.lang.String zoneId) {
            this.props.zoneId(zoneId);
            return this;
        }
        /**
         * Property zoneId: The ID of the zone.
         * <p>
         * Each region has multiple isolated locations known as zones. Each zone has its own
         * independent power supply and network.
         * This parameter is not required if FileSystemType is set to standard. By default,
         * a random zone is selected based on the protocol type and storage type.
         * This parameter is required if FileSystemType is set to extreme or cpfs.
         * <p>
         * <blockquote></blockquote>
         * <p>
         * <ul>
         * <li>An Elastic Compute Service (ECS) instance and a file system that reside in
         * different zones of the same region can access each other.</li>
         * <li>We recommend that you select the zone where the ECS instance resides. This
         * prevents cross-zone latency between the file system and the ECS instance.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param zoneId Property zoneId: The ID of the zone. This parameter is required.
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
