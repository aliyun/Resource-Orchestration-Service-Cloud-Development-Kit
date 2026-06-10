package com.aliyun.ros.cdk.threatdetection;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::ThreatDetection::WebLockConfig</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:59:58.581Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.RosWebLockConfig")
public class RosWebLockConfig extends com.aliyun.ros.cdk.core.RosResource {

    protected RosWebLockConfig(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosWebLockConfig(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.threatdetection.RosWebLockConfig.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosWebLockConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.RosWebLockConfigProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
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
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrConfigId() {
        return software.amazon.jsii.Kernel.get(this, "attrConfigId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDefenceMode() {
        return software.amazon.jsii.Kernel.get(this, "attrDefenceMode", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrDir() {
        return software.amazon.jsii.Kernel.get(this, "attrDir", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrExclusiveDir() {
        return software.amazon.jsii.Kernel.get(this, "attrExclusiveDir", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrExclusiveFile() {
        return software.amazon.jsii.Kernel.get(this, "attrExclusiveFile", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrExclusiveFileType() {
        return software.amazon.jsii.Kernel.get(this, "attrExclusiveFileType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInclusiveFile() {
        return software.amazon.jsii.Kernel.get(this, "attrInclusiveFile", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInclusiveFileType() {
        return software.amazon.jsii.Kernel.get(this, "attrInclusiveFileType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrLocalBackupDir() {
        return software.amazon.jsii.Kernel.get(this, "attrLocalBackupDir", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMode() {
        return software.amazon.jsii.Kernel.get(this, "attrMode", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrUuid() {
        return software.amazon.jsii.Kernel.get(this, "attrUuid", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDefenceMode() {
        return software.amazon.jsii.Kernel.get(this, "defenceMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDefenceMode(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "defenceMode", java.util.Objects.requireNonNull(value, "defenceMode is required"));
    }

    /**
     */
    public void setDefenceMode(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "defenceMode", java.util.Objects.requireNonNull(value, "defenceMode is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getDir() {
        return software.amazon.jsii.Kernel.get(this, "dir", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setDir(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "dir", java.util.Objects.requireNonNull(value, "dir is required"));
    }

    /**
     */
    public void setDir(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "dir", java.util.Objects.requireNonNull(value, "dir is required"));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getLocalBackupDir() {
        return software.amazon.jsii.Kernel.get(this, "localBackupDir", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setLocalBackupDir(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "localBackupDir", java.util.Objects.requireNonNull(value, "localBackupDir is required"));
    }

    /**
     */
    public void setLocalBackupDir(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "localBackupDir", java.util.Objects.requireNonNull(value, "localBackupDir is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getUuid() {
        return software.amazon.jsii.Kernel.get(this, "uuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setUuid(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "uuid", java.util.Objects.requireNonNull(value, "uuid is required"));
    }

    /**
     */
    public void setUuid(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "uuid", java.util.Objects.requireNonNull(value, "uuid is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getExclusiveDir() {
        return software.amazon.jsii.Kernel.get(this, "exclusiveDir", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExclusiveDir(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "exclusiveDir", value);
    }

    /**
     */
    public void setExclusiveDir(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "exclusiveDir", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getExclusiveFile() {
        return software.amazon.jsii.Kernel.get(this, "exclusiveFile", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExclusiveFile(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "exclusiveFile", value);
    }

    /**
     */
    public void setExclusiveFile(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "exclusiveFile", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getExclusiveFileType() {
        return software.amazon.jsii.Kernel.get(this, "exclusiveFileType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setExclusiveFileType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "exclusiveFileType", value);
    }

    /**
     */
    public void setExclusiveFileType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "exclusiveFileType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInclusiveFile() {
        return software.amazon.jsii.Kernel.get(this, "inclusiveFile", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInclusiveFile(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "inclusiveFile", value);
    }

    /**
     */
    public void setInclusiveFile(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "inclusiveFile", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getInclusiveFileType() {
        return software.amazon.jsii.Kernel.get(this, "inclusiveFileType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setInclusiveFileType(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "inclusiveFileType", value);
    }

    /**
     */
    public void setInclusiveFileType(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "inclusiveFileType", value);
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getMode() {
        return software.amazon.jsii.Kernel.get(this, "mode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setMode(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "mode", value);
    }

    /**
     */
    public void setMode(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "mode", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.threatdetection.RosWebLockConfig}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.threatdetection.RosWebLockConfig> {
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
        private final com.aliyun.ros.cdk.threatdetection.RosWebLockConfigProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.threatdetection.RosWebLockConfigProps.Builder();
        }

        /**
         * @return {@code this}
         * @param defenceMode This parameter is required.
         */
        public Builder defenceMode(final java.lang.String defenceMode) {
            this.props.defenceMode(defenceMode);
            return this;
        }
        /**
         * @return {@code this}
         * @param defenceMode This parameter is required.
         */
        public Builder defenceMode(final com.aliyun.ros.cdk.core.IResolvable defenceMode) {
            this.props.defenceMode(defenceMode);
            return this;
        }

        /**
         * @return {@code this}
         * @param dir This parameter is required.
         */
        public Builder dir(final java.lang.String dir) {
            this.props.dir(dir);
            return this;
        }
        /**
         * @return {@code this}
         * @param dir This parameter is required.
         */
        public Builder dir(final com.aliyun.ros.cdk.core.IResolvable dir) {
            this.props.dir(dir);
            return this;
        }

        /**
         * @return {@code this}
         * @param localBackupDir This parameter is required.
         */
        public Builder localBackupDir(final java.lang.String localBackupDir) {
            this.props.localBackupDir(localBackupDir);
            return this;
        }
        /**
         * @return {@code this}
         * @param localBackupDir This parameter is required.
         */
        public Builder localBackupDir(final com.aliyun.ros.cdk.core.IResolvable localBackupDir) {
            this.props.localBackupDir(localBackupDir);
            return this;
        }

        /**
         * @return {@code this}
         * @param uuid This parameter is required.
         */
        public Builder uuid(final java.lang.String uuid) {
            this.props.uuid(uuid);
            return this;
        }
        /**
         * @return {@code this}
         * @param uuid This parameter is required.
         */
        public Builder uuid(final com.aliyun.ros.cdk.core.IResolvable uuid) {
            this.props.uuid(uuid);
            return this;
        }

        /**
         * @return {@code this}
         * @param exclusiveDir This parameter is required.
         */
        public Builder exclusiveDir(final java.lang.String exclusiveDir) {
            this.props.exclusiveDir(exclusiveDir);
            return this;
        }
        /**
         * @return {@code this}
         * @param exclusiveDir This parameter is required.
         */
        public Builder exclusiveDir(final com.aliyun.ros.cdk.core.IResolvable exclusiveDir) {
            this.props.exclusiveDir(exclusiveDir);
            return this;
        }

        /**
         * @return {@code this}
         * @param exclusiveFile This parameter is required.
         */
        public Builder exclusiveFile(final java.lang.String exclusiveFile) {
            this.props.exclusiveFile(exclusiveFile);
            return this;
        }
        /**
         * @return {@code this}
         * @param exclusiveFile This parameter is required.
         */
        public Builder exclusiveFile(final com.aliyun.ros.cdk.core.IResolvable exclusiveFile) {
            this.props.exclusiveFile(exclusiveFile);
            return this;
        }

        /**
         * @return {@code this}
         * @param exclusiveFileType This parameter is required.
         */
        public Builder exclusiveFileType(final java.lang.String exclusiveFileType) {
            this.props.exclusiveFileType(exclusiveFileType);
            return this;
        }
        /**
         * @return {@code this}
         * @param exclusiveFileType This parameter is required.
         */
        public Builder exclusiveFileType(final com.aliyun.ros.cdk.core.IResolvable exclusiveFileType) {
            this.props.exclusiveFileType(exclusiveFileType);
            return this;
        }

        /**
         * @return {@code this}
         * @param inclusiveFile This parameter is required.
         */
        public Builder inclusiveFile(final java.lang.String inclusiveFile) {
            this.props.inclusiveFile(inclusiveFile);
            return this;
        }
        /**
         * @return {@code this}
         * @param inclusiveFile This parameter is required.
         */
        public Builder inclusiveFile(final com.aliyun.ros.cdk.core.IResolvable inclusiveFile) {
            this.props.inclusiveFile(inclusiveFile);
            return this;
        }

        /**
         * @return {@code this}
         * @param inclusiveFileType This parameter is required.
         */
        public Builder inclusiveFileType(final java.lang.String inclusiveFileType) {
            this.props.inclusiveFileType(inclusiveFileType);
            return this;
        }
        /**
         * @return {@code this}
         * @param inclusiveFileType This parameter is required.
         */
        public Builder inclusiveFileType(final com.aliyun.ros.cdk.core.IResolvable inclusiveFileType) {
            this.props.inclusiveFileType(inclusiveFileType);
            return this;
        }

        /**
         * @return {@code this}
         * @param mode This parameter is required.
         */
        public Builder mode(final java.lang.String mode) {
            this.props.mode(mode);
            return this;
        }
        /**
         * @return {@code this}
         * @param mode This parameter is required.
         */
        public Builder mode(final com.aliyun.ros.cdk.core.IResolvable mode) {
            this.props.mode(mode);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.threatdetection.RosWebLockConfig}.
         */
        @Override
        public com.aliyun.ros.cdk.threatdetection.RosWebLockConfig build() {
            return new com.aliyun.ros.cdk.threatdetection.RosWebLockConfig(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
