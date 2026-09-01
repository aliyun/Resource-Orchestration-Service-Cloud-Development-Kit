package com.aliyun.ros.cdk.nas;

/**
 * Properties for defining a <code>Fileset</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-nas-fileset
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T10:15:39.314Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nas.$Module.class, fqn = "@alicloud/ros-cdk-nas.FilesetProps")
@software.amazon.jsii.Jsii.Proxy(FilesetProps.Jsii$Proxy.class)
public interface FilesetProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property fileSystemId: The ID of the file system.
     * <p>
     * <ul>
     * <li>The IDs of CPFS file systems must start with <code>cpfs-</code>. Example:
     * cpfs-099394bd928c****.</li>
     * <li>The IDs of CPFS for Lingjun file systems must start with <code>bmcpfs-</code>. Example:
     * bmcpfs-290w65p03ok64ya****.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFileSystemId();

    /**
     * Property fileSystemPath: The absolute path of the fileset.
     * <p>
     * <ul>
     * <li>CPFS path limits.</li>
     * <li>The parent directory of the path that you specify must be an existing
     * directory in the file system.</li>
     * <li>The path must be 2 to 1024 characters in length.</li>
     * <li>The path must start and end with a forward slash (/).</li>
     * <li>Path limit of CPFS for Lingjun</li>
     * <li>The path must be 2 to 1024 characters in length.</li>
     * <li>The path must start and end with a forward slash (/).</li>
     * <li>The fileset path must be a new path and cannot be an existing path. Fileset
     * paths cannot be renamed and cannot be symbolic links.</li>
     * <li>The maximum depth supported by a fileset path is eight levels. The depth of
     * the root directory / is 0 levels. For example, the fileset path /test/aaa/ccc/
     * has three levels.</li>
     * <li>If the fileset path is a multi-level path, the parent directory must be an
     * existing directory.</li>
     * <li>Nested filesets are not supported. If a fileset is specified as a parent
     * directory, its subdirectory cannot be a fileset. A fileset path supports only one
     * quota.</li>
     * <li>The path cannot exceed 990 characters in length.</li>
     * </ul>
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFileSystemPath();

    /**
     * Property description: The description of the fileset.
     * <p>
     * <ul>
     * <li>The description must be 2 to 128 characters in length.</li>
     * <li>The name must start with a letter and cannot start with http:// or https://.</li>
     * <li>The description can contain letters, digits, colons (:), underscores (_),
     * periods (.), and hyphens (-).</li>
     * </ul>
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link FilesetProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link FilesetProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<FilesetProps> {
        java.lang.Object fileSystemId;
        java.lang.Object fileSystemPath;
        java.lang.Object description;

        /**
         * Sets the value of {@link FilesetProps#getFileSystemId}
         * @param fileSystemId Property fileSystemId: The ID of the file system. This parameter is required.
         *                     <ul>
         *                     <li>The IDs of CPFS file systems must start with <code>cpfs-</code>. Example:
         *                     cpfs-099394bd928c****.</li>
         *                     <li>The IDs of CPFS for Lingjun file systems must start with <code>bmcpfs-</code>. Example:
         *                     bmcpfs-290w65p03ok64ya****.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder fileSystemId(java.lang.String fileSystemId) {
            this.fileSystemId = fileSystemId;
            return this;
        }

        /**
         * Sets the value of {@link FilesetProps#getFileSystemId}
         * @param fileSystemId Property fileSystemId: The ID of the file system. This parameter is required.
         *                     <ul>
         *                     <li>The IDs of CPFS file systems must start with <code>cpfs-</code>. Example:
         *                     cpfs-099394bd928c****.</li>
         *                     <li>The IDs of CPFS for Lingjun file systems must start with <code>bmcpfs-</code>. Example:
         *                     bmcpfs-290w65p03ok64ya****.</li>
         *                     </ul>
         * @return {@code this}
         */
        public Builder fileSystemId(com.aliyun.ros.cdk.core.IResolvable fileSystemId) {
            this.fileSystemId = fileSystemId;
            return this;
        }

        /**
         * Sets the value of {@link FilesetProps#getFileSystemPath}
         * @param fileSystemPath Property fileSystemPath: The absolute path of the fileset. This parameter is required.
         *                       <ul>
         *                       <li>CPFS path limits.</li>
         *                       <li>The parent directory of the path that you specify must be an existing
         *                       directory in the file system.</li>
         *                       <li>The path must be 2 to 1024 characters in length.</li>
         *                       <li>The path must start and end with a forward slash (/).</li>
         *                       <li>Path limit of CPFS for Lingjun</li>
         *                       <li>The path must be 2 to 1024 characters in length.</li>
         *                       <li>The path must start and end with a forward slash (/).</li>
         *                       <li>The fileset path must be a new path and cannot be an existing path. Fileset
         *                       paths cannot be renamed and cannot be symbolic links.</li>
         *                       <li>The maximum depth supported by a fileset path is eight levels. The depth of
         *                       the root directory / is 0 levels. For example, the fileset path /test/aaa/ccc/
         *                       has three levels.</li>
         *                       <li>If the fileset path is a multi-level path, the parent directory must be an
         *                       existing directory.</li>
         *                       <li>Nested filesets are not supported. If a fileset is specified as a parent
         *                       directory, its subdirectory cannot be a fileset. A fileset path supports only one
         *                       quota.</li>
         *                       <li>The path cannot exceed 990 characters in length.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder fileSystemPath(java.lang.String fileSystemPath) {
            this.fileSystemPath = fileSystemPath;
            return this;
        }

        /**
         * Sets the value of {@link FilesetProps#getFileSystemPath}
         * @param fileSystemPath Property fileSystemPath: The absolute path of the fileset. This parameter is required.
         *                       <ul>
         *                       <li>CPFS path limits.</li>
         *                       <li>The parent directory of the path that you specify must be an existing
         *                       directory in the file system.</li>
         *                       <li>The path must be 2 to 1024 characters in length.</li>
         *                       <li>The path must start and end with a forward slash (/).</li>
         *                       <li>Path limit of CPFS for Lingjun</li>
         *                       <li>The path must be 2 to 1024 characters in length.</li>
         *                       <li>The path must start and end with a forward slash (/).</li>
         *                       <li>The fileset path must be a new path and cannot be an existing path. Fileset
         *                       paths cannot be renamed and cannot be symbolic links.</li>
         *                       <li>The maximum depth supported by a fileset path is eight levels. The depth of
         *                       the root directory / is 0 levels. For example, the fileset path /test/aaa/ccc/
         *                       has three levels.</li>
         *                       <li>If the fileset path is a multi-level path, the parent directory must be an
         *                       existing directory.</li>
         *                       <li>Nested filesets are not supported. If a fileset is specified as a parent
         *                       directory, its subdirectory cannot be a fileset. A fileset path supports only one
         *                       quota.</li>
         *                       <li>The path cannot exceed 990 characters in length.</li>
         *                       </ul>
         * @return {@code this}
         */
        public Builder fileSystemPath(com.aliyun.ros.cdk.core.IResolvable fileSystemPath) {
            this.fileSystemPath = fileSystemPath;
            return this;
        }

        /**
         * Sets the value of {@link FilesetProps#getDescription}
         * @param description Property description: The description of the fileset.
         *                    <ul>
         *                    <li>The description must be 2 to 128 characters in length.</li>
         *                    <li>The name must start with a letter and cannot start with http:// or https://.</li>
         *                    <li>The description can contain letters, digits, colons (:), underscores (_),
         *                    periods (.), and hyphens (-).</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link FilesetProps#getDescription}
         * @param description Property description: The description of the fileset.
         *                    <ul>
         *                    <li>The description must be 2 to 128 characters in length.</li>
         *                    <li>The name must start with a letter and cannot start with http:// or https://.</li>
         *                    <li>The description can contain letters, digits, colons (:), underscores (_),
         *                    periods (.), and hyphens (-).</li>
         *                    </ul>
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link FilesetProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public FilesetProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link FilesetProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements FilesetProps {
        private final java.lang.Object fileSystemId;
        private final java.lang.Object fileSystemPath;
        private final java.lang.Object description;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.fileSystemId = software.amazon.jsii.Kernel.get(this, "fileSystemId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.fileSystemPath = software.amazon.jsii.Kernel.get(this, "fileSystemPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.fileSystemId = java.util.Objects.requireNonNull(builder.fileSystemId, "fileSystemId is required");
            this.fileSystemPath = java.util.Objects.requireNonNull(builder.fileSystemPath, "fileSystemPath is required");
            this.description = builder.description;
        }

        @Override
        public final java.lang.Object getFileSystemId() {
            return this.fileSystemId;
        }

        @Override
        public final java.lang.Object getFileSystemPath() {
            return this.fileSystemPath;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("fileSystemId", om.valueToTree(this.getFileSystemId()));
            data.set("fileSystemPath", om.valueToTree(this.getFileSystemPath()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-nas.FilesetProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            FilesetProps.Jsii$Proxy that = (FilesetProps.Jsii$Proxy) o;

            if (!fileSystemId.equals(that.fileSystemId)) return false;
            if (!fileSystemPath.equals(that.fileSystemPath)) return false;
            return this.description != null ? this.description.equals(that.description) : that.description == null;
        }

        @Override
        public final int hashCode() {
            int result = this.fileSystemId.hashCode();
            result = 31 * result + (this.fileSystemPath.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            return result;
        }
    }
}
