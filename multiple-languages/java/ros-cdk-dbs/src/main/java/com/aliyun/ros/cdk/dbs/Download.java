package com.aliyun.ros.cdk.dbs;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::DBS::Download</code>, which is used to create an advanced download task.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-06T03:35:13.653Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dbs.$Module.class, fqn = "@alicloud/ros-cdk-dbs.Download")
public class Download extends com.aliyun.ros.cdk.core.Resource {

    protected Download(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Download(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Download(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dbs.DownloadProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Download(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dbs.DownloadProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute BakSetId: The ID of the backup set.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBakSetId() {
        return software.amazon.jsii.Kernel.get(this, "attrBakSetId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute DownloadAddressInfo: The download address information.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDownloadAddressInfo() {
        return software.amazon.jsii.Kernel.get(this, "attrDownloadAddressInfo", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceName: The ID of the instance.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceName() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TaskId: The ID of the download task.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTaskId() {
        return software.amazon.jsii.Kernel.get(this, "attrTaskId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dbs.DownloadProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dbs.DownloadProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dbs.DownloadProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dbs.Download}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dbs.Download> {
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
        private final com.aliyun.ros.cdk.dbs.DownloadProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dbs.DownloadProps.Builder();
        }

        /**
         * Property formatType: The format to which the downloaded backup set is converted.
         * <p>
         * Valid values: CSV|SQL|Parquet
         * <p>
         * @return {@code this}
         * @param formatType Property formatType: The format to which the downloaded backup set is converted. This parameter is required.
         */
        public Builder formatType(final java.lang.String formatType) {
            this.props.formatType(formatType);
            return this;
        }
        /**
         * Property formatType: The format to which the downloaded backup set is converted.
         * <p>
         * Valid values: CSV|SQL|Parquet
         * <p>
         * @return {@code this}
         * @param formatType Property formatType: The format to which the downloaded backup set is converted. This parameter is required.
         */
        public Builder formatType(final com.aliyun.ros.cdk.core.IResolvable formatType) {
            this.props.formatType(formatType);
            return this;
        }

        /**
         * Property instanceName: The ID of the instance.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The ID of the instance. This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }
        /**
         * Property instanceName: The ID of the instance.
         * <p>
         * @return {@code this}
         * @param instanceName Property instanceName: The ID of the instance. This parameter is required.
         */
        public Builder instanceName(final com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }

        /**
         * Property bakSetId: The ID of the backup set.
         * <p>
         * You can call the DescribeBackups operation to query the ID of the backup set.
         * This parameter is required if the BakSetType parameter is set to full.
         * <p>
         * @return {@code this}
         * @param bakSetId Property bakSetId: The ID of the backup set. This parameter is required.
         */
        public Builder bakSetId(final java.lang.String bakSetId) {
            this.props.bakSetId(bakSetId);
            return this;
        }
        /**
         * Property bakSetId: The ID of the backup set.
         * <p>
         * You can call the DescribeBackups operation to query the ID of the backup set.
         * This parameter is required if the BakSetType parameter is set to full.
         * <p>
         * @return {@code this}
         * @param bakSetId Property bakSetId: The ID of the backup set. This parameter is required.
         */
        public Builder bakSetId(final com.aliyun.ros.cdk.core.IResolvable bakSetId) {
            this.props.bakSetId(bakSetId);
            return this;
        }

        /**
         * Property bakSetSize: The size of the full backup set.
         * <p>
         * Unit: bytes.
         * You can call the DescribeBackups operation to query the size of the full backup set.
         * <p>
         * @return {@code this}
         * @param bakSetSize Property bakSetSize: The size of the full backup set. This parameter is required.
         */
        public Builder bakSetSize(final java.lang.String bakSetSize) {
            this.props.bakSetSize(bakSetSize);
            return this;
        }
        /**
         * Property bakSetSize: The size of the full backup set.
         * <p>
         * Unit: bytes.
         * You can call the DescribeBackups operation to query the size of the full backup set.
         * <p>
         * @return {@code this}
         * @param bakSetSize Property bakSetSize: The size of the full backup set. This parameter is required.
         */
        public Builder bakSetSize(final com.aliyun.ros.cdk.core.IResolvable bakSetSize) {
            this.props.bakSetSize(bakSetSize);
            return this;
        }

        /**
         * Property bakSetType: The type of the download task.
         * <p>
         * Valid values:
         * full: downloads a full backup set
         * pitr: downloads a backup set at a specific point in time.
         * <p>
         * @return {@code this}
         * @param bakSetType Property bakSetType: The type of the download task. This parameter is required.
         */
        public Builder bakSetType(final java.lang.String bakSetType) {
            this.props.bakSetType(bakSetType);
            return this;
        }
        /**
         * Property bakSetType: The type of the download task.
         * <p>
         * Valid values:
         * full: downloads a full backup set
         * pitr: downloads a backup set at a specific point in time.
         * <p>
         * @return {@code this}
         * @param bakSetType Property bakSetType: The type of the download task. This parameter is required.
         */
        public Builder bakSetType(final com.aliyun.ros.cdk.core.IResolvable bakSetType) {
            this.props.bakSetType(bakSetType);
            return this;
        }

        /**
         * Property deleteBackupSetInOss: Whether to delete the backup set in OSS when deleting the stack.
         * <p>
         * Valid values: true|false, default is true.
         * <p>
         * @return {@code this}
         * @param deleteBackupSetInOss Property deleteBackupSetInOss: Whether to delete the backup set in OSS when deleting the stack. This parameter is required.
         */
        public Builder deleteBackupSetInOss(final java.lang.Boolean deleteBackupSetInOss) {
            this.props.deleteBackupSetInOss(deleteBackupSetInOss);
            return this;
        }
        /**
         * Property deleteBackupSetInOss: Whether to delete the backup set in OSS when deleting the stack.
         * <p>
         * Valid values: true|false, default is true.
         * <p>
         * @return {@code this}
         * @param deleteBackupSetInOss Property deleteBackupSetInOss: Whether to delete the backup set in OSS when deleting the stack. This parameter is required.
         */
        public Builder deleteBackupSetInOss(final com.aliyun.ros.cdk.core.IResolvable deleteBackupSetInOss) {
            this.props.deleteBackupSetInOss(deleteBackupSetInOss);
            return this;
        }

        /**
         * Property downloadAddressDuration: When the download target is a URL, set the link validity period.
         * <p>
         * The default URL validity period is 7200 seconds.
         * The effective duration range can be set from 300 seconds to 86400 seconds
         * <p>
         * @return {@code this}
         * @param downloadAddressDuration Property downloadAddressDuration: When the download target is a URL, set the link validity period. This parameter is required.
         */
        public Builder downloadAddressDuration(final java.lang.Number downloadAddressDuration) {
            this.props.downloadAddressDuration(downloadAddressDuration);
            return this;
        }
        /**
         * Property downloadAddressDuration: When the download target is a URL, set the link validity period.
         * <p>
         * The default URL validity period is 7200 seconds.
         * The effective duration range can be set from 300 seconds to 86400 seconds
         * <p>
         * @return {@code this}
         * @param downloadAddressDuration Property downloadAddressDuration: When the download target is a URL, set the link validity period. This parameter is required.
         */
        public Builder downloadAddressDuration(final com.aliyun.ros.cdk.core.IResolvable downloadAddressDuration) {
            this.props.downloadAddressDuration(downloadAddressDuration);
            return this;
        }

        /**
         * Property downloadPointInTime: The point in time at which the backup set is downloaded.
         * <p>
         * Specify a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
         * This parameter is required if the BakSetType parameter is set to pitr.
         * <p>
         * @return {@code this}
         * @param downloadPointInTime Property downloadPointInTime: The point in time at which the backup set is downloaded. This parameter is required.
         */
        public Builder downloadPointInTime(final java.lang.String downloadPointInTime) {
            this.props.downloadPointInTime(downloadPointInTime);
            return this;
        }
        /**
         * Property downloadPointInTime: The point in time at which the backup set is downloaded.
         * <p>
         * Specify a UNIX timestamp representing the number of milliseconds that have elapsed since January 1, 1970, 00:00:00 UTC.
         * This parameter is required if the BakSetType parameter is set to pitr.
         * <p>
         * @return {@code this}
         * @param downloadPointInTime Property downloadPointInTime: The point in time at which the backup set is downloaded. This parameter is required.
         */
        public Builder downloadPointInTime(final com.aliyun.ros.cdk.core.IResolvable downloadPointInTime) {
            this.props.downloadPointInTime(downloadPointInTime);
            return this;
        }

        /**
         * Property targetBucket: The name of the OSS bucket that is used to store the backup set.
         * <p>
         * This parameter is required if the TargetType parameter is set to OSS.
         * Make sure that your account is granted the AliyunDBSDefaultRole permission.
         * For more information, see Use RAM for resource authorization.
         * You can also grant permissions based on the operation instructions in the Resource Access Management (RAM) console.
         * <p>
         * @return {@code this}
         * @param targetBucket Property targetBucket: The name of the OSS bucket that is used to store the backup set. This parameter is required.
         */
        public Builder targetBucket(final java.lang.String targetBucket) {
            this.props.targetBucket(targetBucket);
            return this;
        }
        /**
         * Property targetBucket: The name of the OSS bucket that is used to store the backup set.
         * <p>
         * This parameter is required if the TargetType parameter is set to OSS.
         * Make sure that your account is granted the AliyunDBSDefaultRole permission.
         * For more information, see Use RAM for resource authorization.
         * You can also grant permissions based on the operation instructions in the Resource Access Management (RAM) console.
         * <p>
         * @return {@code this}
         * @param targetBucket Property targetBucket: The name of the OSS bucket that is used to store the backup set. This parameter is required.
         */
        public Builder targetBucket(final com.aliyun.ros.cdk.core.IResolvable targetBucket) {
            this.props.targetBucket(targetBucket);
            return this;
        }

        /**
         * Property targetOssRegion: The region in which the OSS bucket resides.
         * <p>
         * This parameter is required if the TargetType parameter is set to OSS.
         * <p>
         * @return {@code this}
         * @param targetOssRegion Property targetOssRegion: The region in which the OSS bucket resides. This parameter is required.
         */
        public Builder targetOssRegion(final java.lang.String targetOssRegion) {
            this.props.targetOssRegion(targetOssRegion);
            return this;
        }
        /**
         * Property targetOssRegion: The region in which the OSS bucket resides.
         * <p>
         * This parameter is required if the TargetType parameter is set to OSS.
         * <p>
         * @return {@code this}
         * @param targetOssRegion Property targetOssRegion: The region in which the OSS bucket resides. This parameter is required.
         */
        public Builder targetOssRegion(final com.aliyun.ros.cdk.core.IResolvable targetOssRegion) {
            this.props.targetOssRegion(targetOssRegion);
            return this;
        }

        /**
         * Property targetPath: The destination path to which the backup set is downloaded.
         * <p>
         * This parameter is required if the TargetType parameter is set to OSS.
         * <p>
         * @return {@code this}
         * @param targetPath Property targetPath: The destination path to which the backup set is downloaded. This parameter is required.
         */
        public Builder targetPath(final java.lang.String targetPath) {
            this.props.targetPath(targetPath);
            return this;
        }
        /**
         * Property targetPath: The destination path to which the backup set is downloaded.
         * <p>
         * This parameter is required if the TargetType parameter is set to OSS.
         * <p>
         * @return {@code this}
         * @param targetPath Property targetPath: The destination path to which the backup set is downloaded. This parameter is required.
         */
        public Builder targetPath(final com.aliyun.ros.cdk.core.IResolvable targetPath) {
            this.props.targetPath(targetPath);
            return this;
        }

        /**
         * Property targetType: The type of the destination to which the backup set is downloaded.
         * <p>
         * Valid values: OSS|URL
         * <p>
         * @return {@code this}
         * @param targetType Property targetType: The type of the destination to which the backup set is downloaded. This parameter is required.
         */
        public Builder targetType(final java.lang.String targetType) {
            this.props.targetType(targetType);
            return this;
        }
        /**
         * Property targetType: The type of the destination to which the backup set is downloaded.
         * <p>
         * Valid values: OSS|URL
         * <p>
         * @return {@code this}
         * @param targetType Property targetType: The type of the destination to which the backup set is downloaded. This parameter is required.
         */
        public Builder targetType(final com.aliyun.ros.cdk.core.IResolvable targetType) {
            this.props.targetType(targetType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dbs.Download}.
         */
        @Override
        public com.aliyun.ros.cdk.dbs.Download build() {
            return new com.aliyun.ros.cdk.dbs.Download(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
