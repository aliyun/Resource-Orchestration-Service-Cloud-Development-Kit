package com.aliyun.ros.cdk.threatdetection;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ThreatDetection::WebLockConfig</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:30.672Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.WebLockConfig")
public class WebLockConfig extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.threatdetection.IWebLockConfig {

    protected WebLockConfig(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected WebLockConfig(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public WebLockConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.WebLockConfigProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public WebLockConfig(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.WebLockConfigProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ConfigId: The configuration ID of the protected directory.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrConfigId() {
        return software.amazon.jsii.Kernel.get(this, "attrConfigId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute DefenceMode: The prevention mode.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDefenceMode() {
        return software.amazon.jsii.Kernel.get(this, "attrDefenceMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Dir: The directory for which you want to enable web tamper proofing.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrDir() {
        return software.amazon.jsii.Kernel.get(this, "attrDir", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ExclusiveDir: The directory for which you want to disable web tamper proofing.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrExclusiveDir() {
        return software.amazon.jsii.Kernel.get(this, "attrExclusiveDir", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ExclusiveFile: The file for which you want to disable web tamper proofing.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrExclusiveFile() {
        return software.amazon.jsii.Kernel.get(this, "attrExclusiveFile", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ExclusiveFileType: The type of file for which you want to disable web tamper proofing.
     * <p>
     * Separate multiple types with semicolons (;).
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrExclusiveFileType() {
        return software.amazon.jsii.Kernel.get(this, "attrExclusiveFileType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InclusiveFile: The file that has web tamper proofing enabled.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInclusiveFile() {
        return software.amazon.jsii.Kernel.get(this, "attrInclusiveFile", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute InclusiveFileType: The type of file for which you want to enable web tamper proofing.
     * <p>
     * Separate multiple types with semicolons (;).
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrInclusiveFileType() {
        return software.amazon.jsii.Kernel.get(this, "attrInclusiveFileType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute LocalBackupDir: The local path to the backup files of the protected directory.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrLocalBackupDir() {
        return software.amazon.jsii.Kernel.get(this, "attrLocalBackupDir", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Mode: The protection mode of web tamper proofing.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrMode() {
        return software.amazon.jsii.Kernel.get(this, "attrMode", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Uuid: The UUID of the server for which you want to add a directory to protect.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrUuid() {
        return software.amazon.jsii.Kernel.get(this, "attrUuid", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.threatdetection.WebLockConfigProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.threatdetection.WebLockConfigProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.threatdetection.WebLockConfig}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.threatdetection.WebLockConfig> {
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
        private final com.aliyun.ros.cdk.threatdetection.WebLockConfigProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.threatdetection.WebLockConfigProps.Builder();
        }

        /**
         * Property defenceMode: The prevention mode.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>block</strong>: Interception Mode</li>
         * <li><strong>audit</strong>: Alert Mode.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param defenceMode Property defenceMode: The prevention mode. This parameter is required.
         */
        public Builder defenceMode(final java.lang.String defenceMode) {
            this.props.defenceMode(defenceMode);
            return this;
        }
        /**
         * Property defenceMode: The prevention mode.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>block</strong>: Interception Mode</li>
         * <li><strong>audit</strong>: Alert Mode.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param defenceMode Property defenceMode: The prevention mode. This parameter is required.
         */
        public Builder defenceMode(final com.aliyun.ros.cdk.core.IResolvable defenceMode) {
            this.props.defenceMode(defenceMode);
            return this;
        }

        /**
         * Property dir: The directory for which you want to enable web tamper proofing.
         * <p>
         * @return {@code this}
         * @param dir Property dir: The directory for which you want to enable web tamper proofing. This parameter is required.
         */
        public Builder dir(final java.lang.String dir) {
            this.props.dir(dir);
            return this;
        }
        /**
         * Property dir: The directory for which you want to enable web tamper proofing.
         * <p>
         * @return {@code this}
         * @param dir Property dir: The directory for which you want to enable web tamper proofing. This parameter is required.
         */
        public Builder dir(final com.aliyun.ros.cdk.core.IResolvable dir) {
            this.props.dir(dir);
            return this;
        }

        /**
         * Property localBackupDir: The local path to the backup files of the protected directory.\ The directory format of a Linux server is different from that of a Windows server. You must enter the directory in the required format based on your operating system. Examples: *   Linux server: /usr/local/aegis/bak *   Windows server: C:\Program Files (x86)\xxx\Aegis\bak.
         * <p>
         * @return {@code this}
         * @param localBackupDir Property localBackupDir: The local path to the backup files of the protected directory.\ The directory format of a Linux server is different from that of a Windows server. You must enter the directory in the required format based on your operating system. Examples: *   Linux server: /usr/local/aegis/bak *   Windows server: C:\Program Files (x86)\xxx\Aegis\bak. This parameter is required.
         */
        public Builder localBackupDir(final java.lang.String localBackupDir) {
            this.props.localBackupDir(localBackupDir);
            return this;
        }
        /**
         * Property localBackupDir: The local path to the backup files of the protected directory.\ The directory format of a Linux server is different from that of a Windows server. You must enter the directory in the required format based on your operating system. Examples: *   Linux server: /usr/local/aegis/bak *   Windows server: C:\Program Files (x86)\xxx\Aegis\bak.
         * <p>
         * @return {@code this}
         * @param localBackupDir Property localBackupDir: The local path to the backup files of the protected directory.\ The directory format of a Linux server is different from that of a Windows server. You must enter the directory in the required format based on your operating system. Examples: *   Linux server: /usr/local/aegis/bak *   Windows server: C:\Program Files (x86)\xxx\Aegis\bak. This parameter is required.
         */
        public Builder localBackupDir(final com.aliyun.ros.cdk.core.IResolvable localBackupDir) {
            this.props.localBackupDir(localBackupDir);
            return this;
        }

        /**
         * Property uuid: The UUID of the server for which you want to add a directory to protect.
         * <p>
         * <blockquote>
         * <p>
         * You can call the <a href="~~DescribeCloudCenterInstances~~">DescribeCloudCenterInstances</a> operation to query the UUIDs of servers.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param uuid Property uuid: The UUID of the server for which you want to add a directory to protect. This parameter is required.
         */
        public Builder uuid(final java.lang.String uuid) {
            this.props.uuid(uuid);
            return this;
        }
        /**
         * Property uuid: The UUID of the server for which you want to add a directory to protect.
         * <p>
         * <blockquote>
         * <p>
         * You can call the <a href="~~DescribeCloudCenterInstances~~">DescribeCloudCenterInstances</a> operation to query the UUIDs of servers.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param uuid Property uuid: The UUID of the server for which you want to add a directory to protect. This parameter is required.
         */
        public Builder uuid(final com.aliyun.ros.cdk.core.IResolvable uuid) {
            this.props.uuid(uuid);
            return this;
        }

        /**
         * Property exclusiveDir: The directory for which you want to disable web tamper proofing.
         * <p>
         * <blockquote>
         * <p>
         * If you set <strong>Mode</strong> to <strong>blacklist</strong>, you must specify this parameter.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param exclusiveDir Property exclusiveDir: The directory for which you want to disable web tamper proofing. This parameter is required.
         */
        public Builder exclusiveDir(final java.lang.String exclusiveDir) {
            this.props.exclusiveDir(exclusiveDir);
            return this;
        }
        /**
         * Property exclusiveDir: The directory for which you want to disable web tamper proofing.
         * <p>
         * <blockquote>
         * <p>
         * If you set <strong>Mode</strong> to <strong>blacklist</strong>, you must specify this parameter.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param exclusiveDir Property exclusiveDir: The directory for which you want to disable web tamper proofing. This parameter is required.
         */
        public Builder exclusiveDir(final com.aliyun.ros.cdk.core.IResolvable exclusiveDir) {
            this.props.exclusiveDir(exclusiveDir);
            return this;
        }

        /**
         * Property exclusiveFile: The file for which you want to disable web tamper proofing.
         * <p>
         * <blockquote>
         * <p>
         * If you set <strong>Mode</strong> to <strong>blacklist</strong>, you must specify this parameter.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param exclusiveFile Property exclusiveFile: The file for which you want to disable web tamper proofing. This parameter is required.
         */
        public Builder exclusiveFile(final java.lang.String exclusiveFile) {
            this.props.exclusiveFile(exclusiveFile);
            return this;
        }
        /**
         * Property exclusiveFile: The file for which you want to disable web tamper proofing.
         * <p>
         * <blockquote>
         * <p>
         * If you set <strong>Mode</strong> to <strong>blacklist</strong>, you must specify this parameter.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param exclusiveFile Property exclusiveFile: The file for which you want to disable web tamper proofing. This parameter is required.
         */
        public Builder exclusiveFile(final com.aliyun.ros.cdk.core.IResolvable exclusiveFile) {
            this.props.exclusiveFile(exclusiveFile);
            return this;
        }

        /**
         * Property exclusiveFileType: The type of file for which you want to disable web tamper proofing.
         * <p>
         * Separate multiple types with semicolons (;). Valid values:
         * <p>
         * <ul>
         * <li>php</li>
         * <li>jsp</li>
         * <li>asp</li>
         * <li>aspx</li>
         * <li>js</li>
         * <li>cgi</li>
         * <li>html</li>
         * <li>htm</li>
         * <li>xml</li>
         * <li>shtml</li>
         * <li>shtm</li>
         * <li>jpg</li>
         * <li>gif</li>
         * <li>png</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * If you set <strong>Mode</strong> to <strong>blacklist</strong>, you must specify this parameter.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param exclusiveFileType Property exclusiveFileType: The type of file for which you want to disable web tamper proofing. This parameter is required.
         */
        public Builder exclusiveFileType(final java.lang.String exclusiveFileType) {
            this.props.exclusiveFileType(exclusiveFileType);
            return this;
        }
        /**
         * Property exclusiveFileType: The type of file for which you want to disable web tamper proofing.
         * <p>
         * Separate multiple types with semicolons (;). Valid values:
         * <p>
         * <ul>
         * <li>php</li>
         * <li>jsp</li>
         * <li>asp</li>
         * <li>aspx</li>
         * <li>js</li>
         * <li>cgi</li>
         * <li>html</li>
         * <li>htm</li>
         * <li>xml</li>
         * <li>shtml</li>
         * <li>shtm</li>
         * <li>jpg</li>
         * <li>gif</li>
         * <li>png</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * If you set <strong>Mode</strong> to <strong>blacklist</strong>, you must specify this parameter.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param exclusiveFileType Property exclusiveFileType: The type of file for which you want to disable web tamper proofing. This parameter is required.
         */
        public Builder exclusiveFileType(final com.aliyun.ros.cdk.core.IResolvable exclusiveFileType) {
            this.props.exclusiveFileType(exclusiveFileType);
            return this;
        }

        /**
         * Property inclusiveFile: The file that has web tamper proofing enabled.
         * <p>
         * <blockquote>
         * <p>
         * If the value of <strong>Mode</strong> is <strong>whitelist</strong>, this parameter is returned.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param inclusiveFile Property inclusiveFile: The file that has web tamper proofing enabled. This parameter is required.
         */
        public Builder inclusiveFile(final java.lang.String inclusiveFile) {
            this.props.inclusiveFile(inclusiveFile);
            return this;
        }
        /**
         * Property inclusiveFile: The file that has web tamper proofing enabled.
         * <p>
         * <blockquote>
         * <p>
         * If the value of <strong>Mode</strong> is <strong>whitelist</strong>, this parameter is returned.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param inclusiveFile Property inclusiveFile: The file that has web tamper proofing enabled. This parameter is required.
         */
        public Builder inclusiveFile(final com.aliyun.ros.cdk.core.IResolvable inclusiveFile) {
            this.props.inclusiveFile(inclusiveFile);
            return this;
        }

        /**
         * Property inclusiveFileType: The type of file for which you want to enable web tamper proofing.
         * <p>
         * Separate multiple types with semicolons (;). Valid values:
         * <p>
         * <ul>
         * <li>php</li>
         * <li>jsp</li>
         * <li>asp</li>
         * <li>aspx</li>
         * <li>js</li>
         * <li>cgi</li>
         * <li>html</li>
         * <li>htm</li>
         * <li>xml</li>
         * <li>shtml</li>
         * <li>shtm</li>
         * <li>jpg</li>
         * <li>gif</li>
         * <li>png</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * If you set <strong>Mode</strong> to <strong>whitelist</strong>, you must specify this parameter.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param inclusiveFileType Property inclusiveFileType: The type of file for which you want to enable web tamper proofing. This parameter is required.
         */
        public Builder inclusiveFileType(final java.lang.String inclusiveFileType) {
            this.props.inclusiveFileType(inclusiveFileType);
            return this;
        }
        /**
         * Property inclusiveFileType: The type of file for which you want to enable web tamper proofing.
         * <p>
         * Separate multiple types with semicolons (;). Valid values:
         * <p>
         * <ul>
         * <li>php</li>
         * <li>jsp</li>
         * <li>asp</li>
         * <li>aspx</li>
         * <li>js</li>
         * <li>cgi</li>
         * <li>html</li>
         * <li>htm</li>
         * <li>xml</li>
         * <li>shtml</li>
         * <li>shtm</li>
         * <li>jpg</li>
         * <li>gif</li>
         * <li>png</li>
         * </ul>
         * <p>
         * <blockquote>
         * <p>
         * If you set <strong>Mode</strong> to <strong>whitelist</strong>, you must specify this parameter.
         * <p>
         * </blockquote>
         * <p>
         * @return {@code this}
         * @param inclusiveFileType Property inclusiveFileType: The type of file for which you want to enable web tamper proofing. This parameter is required.
         */
        public Builder inclusiveFileType(final com.aliyun.ros.cdk.core.IResolvable inclusiveFileType) {
            this.props.inclusiveFileType(inclusiveFileType);
            return this;
        }

        /**
         * Property mode: The protection mode of web tamper proofing.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>whitelist</strong>: In this mode, web tamper proofing is enabled for the specified directories and file types.</li>
         * <li><strong>blacklist</strong>: In this mode, web tamper proofing is enabled for the unspecified sub-directories, file types, and files in the protected directories.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param mode Property mode: The protection mode of web tamper proofing. This parameter is required.
         */
        public Builder mode(final java.lang.String mode) {
            this.props.mode(mode);
            return this;
        }
        /**
         * Property mode: The protection mode of web tamper proofing.
         * <p>
         * Valid values:
         * <p>
         * <ul>
         * <li><strong>whitelist</strong>: In this mode, web tamper proofing is enabled for the specified directories and file types.</li>
         * <li><strong>blacklist</strong>: In this mode, web tamper proofing is enabled for the unspecified sub-directories, file types, and files in the protected directories.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param mode Property mode: The protection mode of web tamper proofing. This parameter is required.
         */
        public Builder mode(final com.aliyun.ros.cdk.core.IResolvable mode) {
            this.props.mode(mode);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.threatdetection.WebLockConfig}.
         */
        @Override
        public com.aliyun.ros.cdk.threatdetection.WebLockConfig build() {
            return new com.aliyun.ros.cdk.threatdetection.WebLockConfig(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
