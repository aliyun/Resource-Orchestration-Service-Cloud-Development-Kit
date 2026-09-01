package com.aliyun.ros.cdk.nas;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::NAS::Fileset</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-08-31T10:15:39.312Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nas.$Module.class, fqn = "@alicloud/ros-cdk-nas.Fileset")
public class Fileset extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.nas.IFileset {

    protected Fileset(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Fileset(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Fileset(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nas.FilesetProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Fileset(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nas.FilesetProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute FileSystemId: File system ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFileSystemId() {
        return software.amazon.jsii.Kernel.get(this, "attrFileSystemId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute FileSystemPath: File system path.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFileSystemPath() {
        return software.amazon.jsii.Kernel.get(this, "attrFileSystemPath", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute FsetId: Fileset ID.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFsetId() {
        return software.amazon.jsii.Kernel.get(this, "attrFsetId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nas.FilesetProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.nas.FilesetProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.nas.Fileset}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.nas.Fileset> {
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
        private final com.aliyun.ros.cdk.nas.FilesetProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.nas.FilesetProps.Builder();
        }

        /**
         * Property fileSystemId: The ID of the file system.
         * <p>
         * <ul>
         * <li>The IDs of CPFS file systems must start with <code>cpfs-</code>. Example:
         * cpfs-099394bd928c****.</li>
         * <li>The IDs of CPFS for Lingjun file systems must start with <code>bmcpfs-</code>. Example:
         * bmcpfs-290w65p03ok64ya****.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param fileSystemId Property fileSystemId: The ID of the file system. This parameter is required.
         */
        public Builder fileSystemId(final java.lang.String fileSystemId) {
            this.props.fileSystemId(fileSystemId);
            return this;
        }
        /**
         * Property fileSystemId: The ID of the file system.
         * <p>
         * <ul>
         * <li>The IDs of CPFS file systems must start with <code>cpfs-</code>. Example:
         * cpfs-099394bd928c****.</li>
         * <li>The IDs of CPFS for Lingjun file systems must start with <code>bmcpfs-</code>. Example:
         * bmcpfs-290w65p03ok64ya****.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param fileSystemId Property fileSystemId: The ID of the file system. This parameter is required.
         */
        public Builder fileSystemId(final com.aliyun.ros.cdk.core.IResolvable fileSystemId) {
            this.props.fileSystemId(fileSystemId);
            return this;
        }

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
         * <p>
         * @return {@code this}
         * @param fileSystemPath Property fileSystemPath: The absolute path of the fileset. This parameter is required.
         */
        public Builder fileSystemPath(final java.lang.String fileSystemPath) {
            this.props.fileSystemPath(fileSystemPath);
            return this;
        }
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
         * <p>
         * @return {@code this}
         * @param fileSystemPath Property fileSystemPath: The absolute path of the fileset. This parameter is required.
         */
        public Builder fileSystemPath(final com.aliyun.ros.cdk.core.IResolvable fileSystemPath) {
            this.props.fileSystemPath(fileSystemPath);
            return this;
        }

        /**
         * Property description: The description of the fileset.
         * <p>
         * <ul>
         * <li>The description must be 2 to 128 characters in length.</li>
         * <li>The name must start with a letter and cannot start with http:// or https://.</li>
         * <li>The description can contain letters, digits, colons (:), underscores (_),
         * periods (.), and hyphens (-).</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the fileset. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The description of the fileset.
         * <p>
         * <ul>
         * <li>The description must be 2 to 128 characters in length.</li>
         * <li>The name must start with a letter and cannot start with http:// or https://.</li>
         * <li>The description can contain letters, digits, colons (:), underscores (_),
         * periods (.), and hyphens (-).</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the fileset. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.nas.Fileset}.
         */
        @Override
        public com.aliyun.ros.cdk.nas.Fileset build() {
            return new com.aliyun.ros.cdk.nas.Fileset(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
