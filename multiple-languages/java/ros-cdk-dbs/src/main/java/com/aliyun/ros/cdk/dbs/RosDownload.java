package com.aliyun.ros.cdk.dbs;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::DBS::Download</code>, which is used to create an advanced download task.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:28.247Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dbs.$Module.class, fqn = "@alicloud/ros-cdk-dbs.RosDownload")
public class RosDownload extends com.aliyun.ros.cdk.core.RosResource {

    protected RosDownload(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosDownload(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.dbs.RosDownload.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosDownload(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dbs.RosDownloadProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrBakSetId() {
        return software.amazon.jsii.Kernel.get(this, "attrBakSetId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDownloadAddressInfo() {
        return software.amazon.jsii.Kernel.get(this, "attrDownloadAddressInfo", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceName() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTaskId() {
        return software.amazon.jsii.Kernel.get(this, "attrTaskId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getFormatType() {
        return software.amazon.jsii.Kernel.get(this, "formatType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFormatType(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "formatType", java.util.Objects.requireNonNull(value, "formatType is required"));
    }

    /**
     */
    public void setFormatType(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "formatType", java.util.Objects.requireNonNull(value, "formatType is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getInstanceName() {
        return software.amazon.jsii.Kernel.get(this, "instanceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInstanceName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "instanceName", java.util.Objects.requireNonNull(value, "instanceName is required"));
    }

    /**
     */
    public void setInstanceName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "instanceName", java.util.Objects.requireNonNull(value, "instanceName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBakSetId() {
        return software.amazon.jsii.Kernel.get(this, "bakSetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBakSetId(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "bakSetId", value);
    }

    /**
     */
    public void setBakSetId(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "bakSetId", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBakSetSize() {
        return software.amazon.jsii.Kernel.get(this, "bakSetSize", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBakSetSize(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "bakSetSize", value);
    }

    /**
     */
    public void setBakSetSize(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "bakSetSize", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getBakSetType() {
        return software.amazon.jsii.Kernel.get(this, "bakSetType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setBakSetType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "bakSetType", value);
    }

    /**
     */
    public void setBakSetType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "bakSetType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDeleteBackupSetInOss() {
        return software.amazon.jsii.Kernel.get(this, "deleteBackupSetInOss", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDeleteBackupSetInOss(final @org.jetbrains.annotations.Nullable java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "deleteBackupSetInOss", value);
    }

    /**
     */
    public void setDeleteBackupSetInOss(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "deleteBackupSetInOss", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDownloadAddressDuration() {
        return software.amazon.jsii.Kernel.get(this, "downloadAddressDuration", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDownloadAddressDuration(final @org.jetbrains.annotations.Nullable java.lang.Number value) {
        software.amazon.jsii.Kernel.set(this, "downloadAddressDuration", value);
    }

    /**
     */
    public void setDownloadAddressDuration(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "downloadAddressDuration", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getDownloadPointInTime() {
        return software.amazon.jsii.Kernel.get(this, "downloadPointInTime", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDownloadPointInTime(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "downloadPointInTime", value);
    }

    /**
     */
    public void setDownloadPointInTime(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "downloadPointInTime", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTargetBucket() {
        return software.amazon.jsii.Kernel.get(this, "targetBucket", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTargetBucket(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "targetBucket", value);
    }

    /**
     */
    public void setTargetBucket(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "targetBucket", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTargetOssRegion() {
        return software.amazon.jsii.Kernel.get(this, "targetOssRegion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTargetOssRegion(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "targetOssRegion", value);
    }

    /**
     */
    public void setTargetOssRegion(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "targetOssRegion", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTargetPath() {
        return software.amazon.jsii.Kernel.get(this, "targetPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTargetPath(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "targetPath", value);
    }

    /**
     */
    public void setTargetPath(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "targetPath", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getTargetType() {
        return software.amazon.jsii.Kernel.get(this, "targetType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTargetType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "targetType", value);
    }

    /**
     */
    public void setTargetType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "targetType", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dbs.RosDownload}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dbs.RosDownload> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.dbs.RosDownloadProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dbs.RosDownloadProps.Builder();
        }

        /**
         * @return {@code this}
         * @param formatType This parameter is required.
         */
        public Builder formatType(final java.lang.String formatType) {
            this.props.formatType(formatType);
            return this;
        }
        /**
         * @return {@code this}
         * @param formatType This parameter is required.
         */
        public Builder formatType(final com.aliyun.ros.cdk.core.IResolvable formatType) {
            this.props.formatType(formatType);
            return this;
        }

        /**
         * @return {@code this}
         * @param instanceName This parameter is required.
         */
        public Builder instanceName(final java.lang.String instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }
        /**
         * @return {@code this}
         * @param instanceName This parameter is required.
         */
        public Builder instanceName(final com.aliyun.ros.cdk.core.IResolvable instanceName) {
            this.props.instanceName(instanceName);
            return this;
        }

        /**
         * @return {@code this}
         * @param bakSetId This parameter is required.
         */
        public Builder bakSetId(final java.lang.String bakSetId) {
            this.props.bakSetId(bakSetId);
            return this;
        }
        /**
         * @return {@code this}
         * @param bakSetId This parameter is required.
         */
        public Builder bakSetId(final com.aliyun.ros.cdk.core.IResolvable bakSetId) {
            this.props.bakSetId(bakSetId);
            return this;
        }

        /**
         * @return {@code this}
         * @param bakSetSize This parameter is required.
         */
        public Builder bakSetSize(final java.lang.String bakSetSize) {
            this.props.bakSetSize(bakSetSize);
            return this;
        }
        /**
         * @return {@code this}
         * @param bakSetSize This parameter is required.
         */
        public Builder bakSetSize(final com.aliyun.ros.cdk.core.IResolvable bakSetSize) {
            this.props.bakSetSize(bakSetSize);
            return this;
        }

        /**
         * @return {@code this}
         * @param bakSetType This parameter is required.
         */
        public Builder bakSetType(final java.lang.String bakSetType) {
            this.props.bakSetType(bakSetType);
            return this;
        }
        /**
         * @return {@code this}
         * @param bakSetType This parameter is required.
         */
        public Builder bakSetType(final com.aliyun.ros.cdk.core.IResolvable bakSetType) {
            this.props.bakSetType(bakSetType);
            return this;
        }

        /**
         * @return {@code this}
         * @param deleteBackupSetInOss This parameter is required.
         */
        public Builder deleteBackupSetInOss(final java.lang.Boolean deleteBackupSetInOss) {
            this.props.deleteBackupSetInOss(deleteBackupSetInOss);
            return this;
        }
        /**
         * @return {@code this}
         * @param deleteBackupSetInOss This parameter is required.
         */
        public Builder deleteBackupSetInOss(final com.aliyun.ros.cdk.core.IResolvable deleteBackupSetInOss) {
            this.props.deleteBackupSetInOss(deleteBackupSetInOss);
            return this;
        }

        /**
         * @return {@code this}
         * @param downloadAddressDuration This parameter is required.
         */
        public Builder downloadAddressDuration(final java.lang.Number downloadAddressDuration) {
            this.props.downloadAddressDuration(downloadAddressDuration);
            return this;
        }
        /**
         * @return {@code this}
         * @param downloadAddressDuration This parameter is required.
         */
        public Builder downloadAddressDuration(final com.aliyun.ros.cdk.core.IResolvable downloadAddressDuration) {
            this.props.downloadAddressDuration(downloadAddressDuration);
            return this;
        }

        /**
         * @return {@code this}
         * @param downloadPointInTime This parameter is required.
         */
        public Builder downloadPointInTime(final java.lang.String downloadPointInTime) {
            this.props.downloadPointInTime(downloadPointInTime);
            return this;
        }
        /**
         * @return {@code this}
         * @param downloadPointInTime This parameter is required.
         */
        public Builder downloadPointInTime(final com.aliyun.ros.cdk.core.IResolvable downloadPointInTime) {
            this.props.downloadPointInTime(downloadPointInTime);
            return this;
        }

        /**
         * @return {@code this}
         * @param targetBucket This parameter is required.
         */
        public Builder targetBucket(final java.lang.String targetBucket) {
            this.props.targetBucket(targetBucket);
            return this;
        }
        /**
         * @return {@code this}
         * @param targetBucket This parameter is required.
         */
        public Builder targetBucket(final com.aliyun.ros.cdk.core.IResolvable targetBucket) {
            this.props.targetBucket(targetBucket);
            return this;
        }

        /**
         * @return {@code this}
         * @param targetOssRegion This parameter is required.
         */
        public Builder targetOssRegion(final java.lang.String targetOssRegion) {
            this.props.targetOssRegion(targetOssRegion);
            return this;
        }
        /**
         * @return {@code this}
         * @param targetOssRegion This parameter is required.
         */
        public Builder targetOssRegion(final com.aliyun.ros.cdk.core.IResolvable targetOssRegion) {
            this.props.targetOssRegion(targetOssRegion);
            return this;
        }

        /**
         * @return {@code this}
         * @param targetPath This parameter is required.
         */
        public Builder targetPath(final java.lang.String targetPath) {
            this.props.targetPath(targetPath);
            return this;
        }
        /**
         * @return {@code this}
         * @param targetPath This parameter is required.
         */
        public Builder targetPath(final com.aliyun.ros.cdk.core.IResolvable targetPath) {
            this.props.targetPath(targetPath);
            return this;
        }

        /**
         * @return {@code this}
         * @param targetType This parameter is required.
         */
        public Builder targetType(final java.lang.String targetType) {
            this.props.targetType(targetType);
            return this;
        }
        /**
         * @return {@code this}
         * @param targetType This parameter is required.
         */
        public Builder targetType(final com.aliyun.ros.cdk.core.IResolvable targetType) {
            this.props.targetType(targetType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dbs.RosDownload}.
         */
        @Override
        public com.aliyun.ros.cdk.dbs.RosDownload build() {
            return new com.aliyun.ros.cdk.dbs.RosDownload(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
