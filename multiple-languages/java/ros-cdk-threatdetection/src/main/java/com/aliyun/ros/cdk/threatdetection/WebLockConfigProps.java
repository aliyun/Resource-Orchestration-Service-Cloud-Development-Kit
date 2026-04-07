package com.aliyun.ros.cdk.threatdetection;

/**
 * Properties for defining a <code>WebLockConfig</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-threatdetection-weblockconfig
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:30.676Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.threatdetection.$Module.class, fqn = "@alicloud/ros-cdk-threatdetection.WebLockConfigProps")
@software.amazon.jsii.Jsii.Proxy(WebLockConfigProps.Jsii$Proxy.class)
public interface WebLockConfigProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property defenceMode: The prevention mode.
     * <p>
     * Valid values:
     * <p>
     * <ul>
     * <li><strong>block</strong>: Interception Mode</li>
     * <li><strong>audit</strong>: Alert Mode.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDefenceMode();

    /**
     * Property dir: The directory for which you want to enable web tamper proofing.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getDir();

    /**
     * Property localBackupDir: The local path to the backup files of the protected directory.\ The directory format of a Linux server is different from that of a Windows server. You must enter the directory in the required format based on your operating system. Examples: *   Linux server: /usr/local/aegis/bak *   Windows server: C:\Program Files (x86)\xxx\Aegis\bak.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getLocalBackupDir();

    /**
     * Property uuid: The UUID of the server for which you want to add a directory to protect.
     * <p>
     * <blockquote>
     * <p>
     * You can call the <a href="~~DescribeCloudCenterInstances~~">DescribeCloudCenterInstances</a> operation to query the UUIDs of servers.
     * <p>
     * </blockquote>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getUuid();

    /**
     * Property exclusiveDir: The directory for which you want to disable web tamper proofing.
     * <p>
     * <blockquote>
     * <p>
     * If you set <strong>Mode</strong> to <strong>blacklist</strong>, you must specify this parameter.
     * <p>
     * </blockquote>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExclusiveDir() {
        return null;
    }

    /**
     * Property exclusiveFile: The file for which you want to disable web tamper proofing.
     * <p>
     * <blockquote>
     * <p>
     * If you set <strong>Mode</strong> to <strong>blacklist</strong>, you must specify this parameter.
     * <p>
     * </blockquote>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExclusiveFile() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getExclusiveFileType() {
        return null;
    }

    /**
     * Property inclusiveFile: The file that has web tamper proofing enabled.
     * <p>
     * <blockquote>
     * <p>
     * If the value of <strong>Mode</strong> is <strong>whitelist</strong>, this parameter is returned.
     * <p>
     * </blockquote>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInclusiveFile() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInclusiveFileType() {
        return null;
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
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMode() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link WebLockConfigProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link WebLockConfigProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<WebLockConfigProps> {
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
         * Sets the value of {@link WebLockConfigProps#getDefenceMode}
         * @param defenceMode Property defenceMode: The prevention mode. This parameter is required.
         *                    Valid values:
         *                    <p>
         *                    <ul>
         *                    <li><strong>block</strong>: Interception Mode</li>
         *                    <li><strong>audit</strong>: Alert Mode.</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder defenceMode(java.lang.String defenceMode) {
            this.defenceMode = defenceMode;
            return this;
        }

        /**
         * Sets the value of {@link WebLockConfigProps#getDefenceMode}
         * @param defenceMode Property defenceMode: The prevention mode. This parameter is required.
         *                    Valid values:
         *                    <p>
         *                    <ul>
         *                    <li><strong>block</strong>: Interception Mode</li>
         *                    <li><strong>audit</strong>: Alert Mode.</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder defenceMode(com.aliyun.ros.cdk.core.IResolvable defenceMode) {
            this.defenceMode = defenceMode;
            return this;
        }

        /**
         * Sets the value of {@link WebLockConfigProps#getDir}
         * @param dir Property dir: The directory for which you want to enable web tamper proofing. This parameter is required.
         * @return {@code this}
         */
        public Builder dir(java.lang.String dir) {
            this.dir = dir;
            return this;
        }

        /**
         * Sets the value of {@link WebLockConfigProps#getDir}
         * @param dir Property dir: The directory for which you want to enable web tamper proofing. This parameter is required.
         * @return {@code this}
         */
        public Builder dir(com.aliyun.ros.cdk.core.IResolvable dir) {
            this.dir = dir;
            return this;
        }

        /**
         * Sets the value of {@link WebLockConfigProps#getLocalBackupDir}
         * @param localBackupDir Property localBackupDir: The local path to the backup files of the protected directory.\ The directory format of a Linux server is different from that of a Windows server. You must enter the directory in the required format based on your operating system. Examples: *   Linux server: /usr/local/aegis/bak *   Windows server: C:\Program Files (x86)\xxx\Aegis\bak. This parameter is required.
         * @return {@code this}
         */
        public Builder localBackupDir(java.lang.String localBackupDir) {
            this.localBackupDir = localBackupDir;
            return this;
        }

        /**
         * Sets the value of {@link WebLockConfigProps#getLocalBackupDir}
         * @param localBackupDir Property localBackupDir: The local path to the backup files of the protected directory.\ The directory format of a Linux server is different from that of a Windows server. You must enter the directory in the required format based on your operating system. Examples: *   Linux server: /usr/local/aegis/bak *   Windows server: C:\Program Files (x86)\xxx\Aegis\bak. This parameter is required.
         * @return {@code this}
         */
        public Builder localBackupDir(com.aliyun.ros.cdk.core.IResolvable localBackupDir) {
            this.localBackupDir = localBackupDir;
            return this;
        }

        /**
         * Sets the value of {@link WebLockConfigProps#getUuid}
         * @param uuid Property uuid: The UUID of the server for which you want to add a directory to protect. This parameter is required.
         *             <blockquote>
         *             <p>
         *             You can call the <a href="~~DescribeCloudCenterInstances~~">DescribeCloudCenterInstances</a> operation to query the UUIDs of servers.
         *             <p>
         *             </blockquote>
         * @return {@code this}
         */
        public Builder uuid(java.lang.String uuid) {
            this.uuid = uuid;
            return this;
        }

        /**
         * Sets the value of {@link WebLockConfigProps#getUuid}
         * @param uuid Property uuid: The UUID of the server for which you want to add a directory to protect. This parameter is required.
         *             <blockquote>
         *             <p>
         *             You can call the <a href="~~DescribeCloudCenterInstances~~">DescribeCloudCenterInstances</a> operation to query the UUIDs of servers.
         *             <p>
         *             </blockquote>
         * @return {@code this}
         */
        public Builder uuid(com.aliyun.ros.cdk.core.IResolvable uuid) {
            this.uuid = uuid;
            return this;
        }

        /**
         * Sets the value of {@link WebLockConfigProps#getExclusiveDir}
         * @param exclusiveDir Property exclusiveDir: The directory for which you want to disable web tamper proofing.
         *                     <blockquote>
         *                     <p>
         *                     If you set <strong>Mode</strong> to <strong>blacklist</strong>, you must specify this parameter.
         *                     <p>
         *                     </blockquote>
         * @return {@code this}
         */
        public Builder exclusiveDir(java.lang.String exclusiveDir) {
            this.exclusiveDir = exclusiveDir;
            return this;
        }

        /**
         * Sets the value of {@link WebLockConfigProps#getExclusiveDir}
         * @param exclusiveDir Property exclusiveDir: The directory for which you want to disable web tamper proofing.
         *                     <blockquote>
         *                     <p>
         *                     If you set <strong>Mode</strong> to <strong>blacklist</strong>, you must specify this parameter.
         *                     <p>
         *                     </blockquote>
         * @return {@code this}
         */
        public Builder exclusiveDir(com.aliyun.ros.cdk.core.IResolvable exclusiveDir) {
            this.exclusiveDir = exclusiveDir;
            return this;
        }

        /**
         * Sets the value of {@link WebLockConfigProps#getExclusiveFile}
         * @param exclusiveFile Property exclusiveFile: The file for which you want to disable web tamper proofing.
         *                      <blockquote>
         *                      <p>
         *                      If you set <strong>Mode</strong> to <strong>blacklist</strong>, you must specify this parameter.
         *                      <p>
         *                      </blockquote>
         * @return {@code this}
         */
        public Builder exclusiveFile(java.lang.String exclusiveFile) {
            this.exclusiveFile = exclusiveFile;
            return this;
        }

        /**
         * Sets the value of {@link WebLockConfigProps#getExclusiveFile}
         * @param exclusiveFile Property exclusiveFile: The file for which you want to disable web tamper proofing.
         *                      <blockquote>
         *                      <p>
         *                      If you set <strong>Mode</strong> to <strong>blacklist</strong>, you must specify this parameter.
         *                      <p>
         *                      </blockquote>
         * @return {@code this}
         */
        public Builder exclusiveFile(com.aliyun.ros.cdk.core.IResolvable exclusiveFile) {
            this.exclusiveFile = exclusiveFile;
            return this;
        }

        /**
         * Sets the value of {@link WebLockConfigProps#getExclusiveFileType}
         * @param exclusiveFileType Property exclusiveFileType: The type of file for which you want to disable web tamper proofing.
         *                          Separate multiple types with semicolons (;). Valid values:
         *                          <p>
         *                          <ul>
         *                          <li>php</li>
         *                          <li>jsp</li>
         *                          <li>asp</li>
         *                          <li>aspx</li>
         *                          <li>js</li>
         *                          <li>cgi</li>
         *                          <li>html</li>
         *                          <li>htm</li>
         *                          <li>xml</li>
         *                          <li>shtml</li>
         *                          <li>shtm</li>
         *                          <li>jpg</li>
         *                          <li>gif</li>
         *                          <li>png</li>
         *                          </ul>
         *                          <p>
         *                          <blockquote>
         *                          <p>
         *                          If you set <strong>Mode</strong> to <strong>blacklist</strong>, you must specify this parameter.
         *                          <p>
         *                          </blockquote>
         * @return {@code this}
         */
        public Builder exclusiveFileType(java.lang.String exclusiveFileType) {
            this.exclusiveFileType = exclusiveFileType;
            return this;
        }

        /**
         * Sets the value of {@link WebLockConfigProps#getExclusiveFileType}
         * @param exclusiveFileType Property exclusiveFileType: The type of file for which you want to disable web tamper proofing.
         *                          Separate multiple types with semicolons (;). Valid values:
         *                          <p>
         *                          <ul>
         *                          <li>php</li>
         *                          <li>jsp</li>
         *                          <li>asp</li>
         *                          <li>aspx</li>
         *                          <li>js</li>
         *                          <li>cgi</li>
         *                          <li>html</li>
         *                          <li>htm</li>
         *                          <li>xml</li>
         *                          <li>shtml</li>
         *                          <li>shtm</li>
         *                          <li>jpg</li>
         *                          <li>gif</li>
         *                          <li>png</li>
         *                          </ul>
         *                          <p>
         *                          <blockquote>
         *                          <p>
         *                          If you set <strong>Mode</strong> to <strong>blacklist</strong>, you must specify this parameter.
         *                          <p>
         *                          </blockquote>
         * @return {@code this}
         */
        public Builder exclusiveFileType(com.aliyun.ros.cdk.core.IResolvable exclusiveFileType) {
            this.exclusiveFileType = exclusiveFileType;
            return this;
        }

        /**
         * Sets the value of {@link WebLockConfigProps#getInclusiveFile}
         * @param inclusiveFile Property inclusiveFile: The file that has web tamper proofing enabled.
         *                      <blockquote>
         *                      <p>
         *                      If the value of <strong>Mode</strong> is <strong>whitelist</strong>, this parameter is returned.
         *                      <p>
         *                      </blockquote>
         * @return {@code this}
         */
        public Builder inclusiveFile(java.lang.String inclusiveFile) {
            this.inclusiveFile = inclusiveFile;
            return this;
        }

        /**
         * Sets the value of {@link WebLockConfigProps#getInclusiveFile}
         * @param inclusiveFile Property inclusiveFile: The file that has web tamper proofing enabled.
         *                      <blockquote>
         *                      <p>
         *                      If the value of <strong>Mode</strong> is <strong>whitelist</strong>, this parameter is returned.
         *                      <p>
         *                      </blockquote>
         * @return {@code this}
         */
        public Builder inclusiveFile(com.aliyun.ros.cdk.core.IResolvable inclusiveFile) {
            this.inclusiveFile = inclusiveFile;
            return this;
        }

        /**
         * Sets the value of {@link WebLockConfigProps#getInclusiveFileType}
         * @param inclusiveFileType Property inclusiveFileType: The type of file for which you want to enable web tamper proofing.
         *                          Separate multiple types with semicolons (;). Valid values:
         *                          <p>
         *                          <ul>
         *                          <li>php</li>
         *                          <li>jsp</li>
         *                          <li>asp</li>
         *                          <li>aspx</li>
         *                          <li>js</li>
         *                          <li>cgi</li>
         *                          <li>html</li>
         *                          <li>htm</li>
         *                          <li>xml</li>
         *                          <li>shtml</li>
         *                          <li>shtm</li>
         *                          <li>jpg</li>
         *                          <li>gif</li>
         *                          <li>png</li>
         *                          </ul>
         *                          <p>
         *                          <blockquote>
         *                          <p>
         *                          If you set <strong>Mode</strong> to <strong>whitelist</strong>, you must specify this parameter.
         *                          <p>
         *                          </blockquote>
         * @return {@code this}
         */
        public Builder inclusiveFileType(java.lang.String inclusiveFileType) {
            this.inclusiveFileType = inclusiveFileType;
            return this;
        }

        /**
         * Sets the value of {@link WebLockConfigProps#getInclusiveFileType}
         * @param inclusiveFileType Property inclusiveFileType: The type of file for which you want to enable web tamper proofing.
         *                          Separate multiple types with semicolons (;). Valid values:
         *                          <p>
         *                          <ul>
         *                          <li>php</li>
         *                          <li>jsp</li>
         *                          <li>asp</li>
         *                          <li>aspx</li>
         *                          <li>js</li>
         *                          <li>cgi</li>
         *                          <li>html</li>
         *                          <li>htm</li>
         *                          <li>xml</li>
         *                          <li>shtml</li>
         *                          <li>shtm</li>
         *                          <li>jpg</li>
         *                          <li>gif</li>
         *                          <li>png</li>
         *                          </ul>
         *                          <p>
         *                          <blockquote>
         *                          <p>
         *                          If you set <strong>Mode</strong> to <strong>whitelist</strong>, you must specify this parameter.
         *                          <p>
         *                          </blockquote>
         * @return {@code this}
         */
        public Builder inclusiveFileType(com.aliyun.ros.cdk.core.IResolvable inclusiveFileType) {
            this.inclusiveFileType = inclusiveFileType;
            return this;
        }

        /**
         * Sets the value of {@link WebLockConfigProps#getMode}
         * @param mode Property mode: The protection mode of web tamper proofing.
         *             Valid values:
         *             <p>
         *             <ul>
         *             <li><strong>whitelist</strong>: In this mode, web tamper proofing is enabled for the specified directories and file types.</li>
         *             <li><strong>blacklist</strong>: In this mode, web tamper proofing is enabled for the unspecified sub-directories, file types, and files in the protected directories.</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder mode(java.lang.String mode) {
            this.mode = mode;
            return this;
        }

        /**
         * Sets the value of {@link WebLockConfigProps#getMode}
         * @param mode Property mode: The protection mode of web tamper proofing.
         *             Valid values:
         *             <p>
         *             <ul>
         *             <li><strong>whitelist</strong>: In this mode, web tamper proofing is enabled for the specified directories and file types.</li>
         *             <li><strong>blacklist</strong>: In this mode, web tamper proofing is enabled for the unspecified sub-directories, file types, and files in the protected directories.</li>
         *             </ul>
         * @return {@code this}
         */
        public Builder mode(com.aliyun.ros.cdk.core.IResolvable mode) {
            this.mode = mode;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link WebLockConfigProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public WebLockConfigProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link WebLockConfigProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements WebLockConfigProps {
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
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-threatdetection.WebLockConfigProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            WebLockConfigProps.Jsii$Proxy that = (WebLockConfigProps.Jsii$Proxy) o;

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
