package com.aliyun.ros.cdk.threatdetection;

/**
 * Properties for defining a <code>RosWebLockConfig</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-weblockconfig
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:54.742Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.RosWebLockConfigProps")
@software.amazon.jsii.Jsii.Proxy(RosWebLockConfigProps.Jsii$Proxy.class)
public interface RosWebLockConfigProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDefenceMode();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDir();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLocalBackupDir();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUuid();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExclusiveDir() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExclusiveFile() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExclusiveFileType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInclusiveFile() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInclusiveFileType() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMode() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosWebLockConfigProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosWebLockConfigProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosWebLockConfigProps> {
        java.lang.Object defenceMode;
        java.lang.Object dir;
        java.lang.Object localBackupDir;
        java.lang.Object uuid;
        java.lang.Object exclusiveDir;
        java.lang.Object exclusiveFile;
        java.lang.Object exclusiveFileType;
        java.lang.Object inclusiveFile;
        java.lang.Object inclusiveFileType;
        java.lang.Object mode;

        /**
         * Sets the value of {@link RosWebLockConfigProps#getDefenceMode}
         * @param defenceMode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder defenceMode(java.lang.String defenceMode) {
            this.defenceMode = defenceMode;
            return this;
        }

        /**
         * Sets the value of {@link RosWebLockConfigProps#getDefenceMode}
         * @param defenceMode the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder defenceMode(com.aliyun.ros.cdk.core.IResolvable defenceMode) {
            this.defenceMode = defenceMode;
            return this;
        }

        /**
         * Sets the value of {@link RosWebLockConfigProps#getDir}
         * @param dir the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dir(java.lang.String dir) {
            this.dir = dir;
            return this;
        }

        /**
         * Sets the value of {@link RosWebLockConfigProps#getDir}
         * @param dir the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder dir(com.aliyun.ros.cdk.core.IResolvable dir) {
            this.dir = dir;
            return this;
        }

        /**
         * Sets the value of {@link RosWebLockConfigProps#getLocalBackupDir}
         * @param localBackupDir the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder localBackupDir(java.lang.String localBackupDir) {
            this.localBackupDir = localBackupDir;
            return this;
        }

        /**
         * Sets the value of {@link RosWebLockConfigProps#getLocalBackupDir}
         * @param localBackupDir the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder localBackupDir(com.aliyun.ros.cdk.core.IResolvable localBackupDir) {
            this.localBackupDir = localBackupDir;
            return this;
        }

        /**
         * Sets the value of {@link RosWebLockConfigProps#getUuid}
         * @param uuid the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder uuid(java.lang.String uuid) {
            this.uuid = uuid;
            return this;
        }

        /**
         * Sets the value of {@link RosWebLockConfigProps#getUuid}
         * @param uuid the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder uuid(com.aliyun.ros.cdk.core.IResolvable uuid) {
            this.uuid = uuid;
            return this;
        }

        /**
         * Sets the value of {@link RosWebLockConfigProps#getExclusiveDir}
         * @param exclusiveDir the value to be set.
         * @return {@code this}
         */
        public Builder exclusiveDir(java.lang.String exclusiveDir) {
            this.exclusiveDir = exclusiveDir;
            return this;
        }

        /**
         * Sets the value of {@link RosWebLockConfigProps#getExclusiveDir}
         * @param exclusiveDir the value to be set.
         * @return {@code this}
         */
        public Builder exclusiveDir(com.aliyun.ros.cdk.core.IResolvable exclusiveDir) {
            this.exclusiveDir = exclusiveDir;
            return this;
        }

        /**
         * Sets the value of {@link RosWebLockConfigProps#getExclusiveFile}
         * @param exclusiveFile the value to be set.
         * @return {@code this}
         */
        public Builder exclusiveFile(java.lang.String exclusiveFile) {
            this.exclusiveFile = exclusiveFile;
            return this;
        }

        /**
         * Sets the value of {@link RosWebLockConfigProps#getExclusiveFile}
         * @param exclusiveFile the value to be set.
         * @return {@code this}
         */
        public Builder exclusiveFile(com.aliyun.ros.cdk.core.IResolvable exclusiveFile) {
            this.exclusiveFile = exclusiveFile;
            return this;
        }

        /**
         * Sets the value of {@link RosWebLockConfigProps#getExclusiveFileType}
         * @param exclusiveFileType the value to be set.
         * @return {@code this}
         */
        public Builder exclusiveFileType(java.lang.String exclusiveFileType) {
            this.exclusiveFileType = exclusiveFileType;
            return this;
        }

        /**
         * Sets the value of {@link RosWebLockConfigProps#getExclusiveFileType}
         * @param exclusiveFileType the value to be set.
         * @return {@code this}
         */
        public Builder exclusiveFileType(com.aliyun.ros.cdk.core.IResolvable exclusiveFileType) {
            this.exclusiveFileType = exclusiveFileType;
            return this;
        }

        /**
         * Sets the value of {@link RosWebLockConfigProps#getInclusiveFile}
         * @param inclusiveFile the value to be set.
         * @return {@code this}
         */
        public Builder inclusiveFile(java.lang.String inclusiveFile) {
            this.inclusiveFile = inclusiveFile;
            return this;
        }

        /**
         * Sets the value of {@link RosWebLockConfigProps#getInclusiveFile}
         * @param inclusiveFile the value to be set.
         * @return {@code this}
         */
        public Builder inclusiveFile(com.aliyun.ros.cdk.core.IResolvable inclusiveFile) {
            this.inclusiveFile = inclusiveFile;
            return this;
        }

        /**
         * Sets the value of {@link RosWebLockConfigProps#getInclusiveFileType}
         * @param inclusiveFileType the value to be set.
         * @return {@code this}
         */
        public Builder inclusiveFileType(java.lang.String inclusiveFileType) {
            this.inclusiveFileType = inclusiveFileType;
            return this;
        }

        /**
         * Sets the value of {@link RosWebLockConfigProps#getInclusiveFileType}
         * @param inclusiveFileType the value to be set.
         * @return {@code this}
         */
        public Builder inclusiveFileType(com.aliyun.ros.cdk.core.IResolvable inclusiveFileType) {
            this.inclusiveFileType = inclusiveFileType;
            return this;
        }

        /**
         * Sets the value of {@link RosWebLockConfigProps#getMode}
         * @param mode the value to be set.
         * @return {@code this}
         */
        public Builder mode(java.lang.String mode) {
            this.mode = mode;
            return this;
        }

        /**
         * Sets the value of {@link RosWebLockConfigProps#getMode}
         * @param mode the value to be set.
         * @return {@code this}
         */
        public Builder mode(com.aliyun.ros.cdk.core.IResolvable mode) {
            this.mode = mode;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosWebLockConfigProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosWebLockConfigProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosWebLockConfigProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosWebLockConfigProps {
        private final java.lang.Object defenceMode;
        private final java.lang.Object dir;
        private final java.lang.Object localBackupDir;
        private final java.lang.Object uuid;
        private final java.lang.Object exclusiveDir;
        private final java.lang.Object exclusiveFile;
        private final java.lang.Object exclusiveFileType;
        private final java.lang.Object inclusiveFile;
        private final java.lang.Object inclusiveFileType;
        private final java.lang.Object mode;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.defenceMode = software.amazon.jsii.Kernel.get(this, "defenceMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.dir = software.amazon.jsii.Kernel.get(this, "dir", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.localBackupDir = software.amazon.jsii.Kernel.get(this, "localBackupDir", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.uuid = software.amazon.jsii.Kernel.get(this, "uuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.exclusiveDir = software.amazon.jsii.Kernel.get(this, "exclusiveDir", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.exclusiveFile = software.amazon.jsii.Kernel.get(this, "exclusiveFile", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.exclusiveFileType = software.amazon.jsii.Kernel.get(this, "exclusiveFileType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.inclusiveFile = software.amazon.jsii.Kernel.get(this, "inclusiveFile", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.inclusiveFileType = software.amazon.jsii.Kernel.get(this, "inclusiveFileType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.mode = software.amazon.jsii.Kernel.get(this, "mode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.defenceMode = java.util.Objects.requireNonNull(builder.defenceMode, "defenceMode is required");
            this.dir = java.util.Objects.requireNonNull(builder.dir, "dir is required");
            this.localBackupDir = java.util.Objects.requireNonNull(builder.localBackupDir, "localBackupDir is required");
            this.uuid = java.util.Objects.requireNonNull(builder.uuid, "uuid is required");
            this.exclusiveDir = builder.exclusiveDir;
            this.exclusiveFile = builder.exclusiveFile;
            this.exclusiveFileType = builder.exclusiveFileType;
            this.inclusiveFile = builder.inclusiveFile;
            this.inclusiveFileType = builder.inclusiveFileType;
            this.mode = builder.mode;
        }

        @Override
        public final java.lang.Object getDefenceMode() {
            return this.defenceMode;
        }

        @Override
        public final java.lang.Object getDir() {
            return this.dir;
        }

        @Override
        public final java.lang.Object getLocalBackupDir() {
            return this.localBackupDir;
        }

        @Override
        public final java.lang.Object getUuid() {
            return this.uuid;
        }

        @Override
        public final java.lang.Object getExclusiveDir() {
            return this.exclusiveDir;
        }

        @Override
        public final java.lang.Object getExclusiveFile() {
            return this.exclusiveFile;
        }

        @Override
        public final java.lang.Object getExclusiveFileType() {
            return this.exclusiveFileType;
        }

        @Override
        public final java.lang.Object getInclusiveFile() {
            return this.inclusiveFile;
        }

        @Override
        public final java.lang.Object getInclusiveFileType() {
            return this.inclusiveFileType;
        }

        @Override
        public final java.lang.Object getMode() {
            return this.mode;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("defenceMode", om.valueToTree(this.getDefenceMode()));
            data.set("dir", om.valueToTree(this.getDir()));
            data.set("localBackupDir", om.valueToTree(this.getLocalBackupDir()));
            data.set("uuid", om.valueToTree(this.getUuid()));
            if (this.getExclusiveDir() != null) {
                data.set("exclusiveDir", om.valueToTree(this.getExclusiveDir()));
            }
            if (this.getExclusiveFile() != null) {
                data.set("exclusiveFile", om.valueToTree(this.getExclusiveFile()));
            }
            if (this.getExclusiveFileType() != null) {
                data.set("exclusiveFileType", om.valueToTree(this.getExclusiveFileType()));
            }
            if (this.getInclusiveFile() != null) {
                data.set("inclusiveFile", om.valueToTree(this.getInclusiveFile()));
            }
            if (this.getInclusiveFileType() != null) {
                data.set("inclusiveFileType", om.valueToTree(this.getInclusiveFileType()));
            }
            if (this.getMode() != null) {
                data.set("mode", om.valueToTree(this.getMode()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-threatdetection.RosWebLockConfigProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosWebLockConfigProps.Jsii$Proxy that = (RosWebLockConfigProps.Jsii$Proxy) o;

            if (!defenceMode.equals(that.defenceMode)) return false;
            if (!dir.equals(that.dir)) return false;
            if (!localBackupDir.equals(that.localBackupDir)) return false;
            if (!uuid.equals(that.uuid)) return false;
            if (this.exclusiveDir != null ? !this.exclusiveDir.equals(that.exclusiveDir) : that.exclusiveDir != null) return false;
            if (this.exclusiveFile != null ? !this.exclusiveFile.equals(that.exclusiveFile) : that.exclusiveFile != null) return false;
            if (this.exclusiveFileType != null ? !this.exclusiveFileType.equals(that.exclusiveFileType) : that.exclusiveFileType != null) return false;
            if (this.inclusiveFile != null ? !this.inclusiveFile.equals(that.inclusiveFile) : that.inclusiveFile != null) return false;
            if (this.inclusiveFileType != null ? !this.inclusiveFileType.equals(that.inclusiveFileType) : that.inclusiveFileType != null) return false;
            return this.mode != null ? this.mode.equals(that.mode) : that.mode == null;
        }

        @Override
        public final int hashCode() {
            int result = this.defenceMode.hashCode();
            result = 31 * result + (this.dir.hashCode());
            result = 31 * result + (this.localBackupDir.hashCode());
            result = 31 * result + (this.uuid.hashCode());
            result = 31 * result + (this.exclusiveDir != null ? this.exclusiveDir.hashCode() : 0);
            result = 31 * result + (this.exclusiveFile != null ? this.exclusiveFile.hashCode() : 0);
            result = 31 * result + (this.exclusiveFileType != null ? this.exclusiveFileType.hashCode() : 0);
            result = 31 * result + (this.inclusiveFile != null ? this.inclusiveFile.hashCode() : 0);
            result = 31 * result + (this.inclusiveFileType != null ? this.inclusiveFileType.hashCode() : 0);
            result = 31 * result + (this.mode != null ? this.mode.hashCode() : 0);
            return result;
        }
    }
}
