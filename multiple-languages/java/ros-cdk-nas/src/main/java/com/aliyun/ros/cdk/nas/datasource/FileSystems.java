package com.aliyun.ros.cdk.nas.datasource;

/**
 * A ROS resource type:  <code>DATASOURCE::NAS::FileSystems</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-07-25T03:56:01.061Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nas.$Module.class, fqn = "@alicloud/ros-cdk-nas.datasource.FileSystems")
public class FileSystems extends com.aliyun.ros.cdk.core.Resource {

    protected FileSystems(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FileSystems(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>DATASOURCE::NAS::FileSystems</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public FileSystems(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.nas.datasource.FileSystemsProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>DATASOURCE::NAS::FileSystems</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public FileSystems(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.nas.datasource.FileSystemsProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Create a new <code>DATASOURCE::NAS::FileSystems</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public FileSystems(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute FileSystemIds: The list of file system IDs.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFileSystemIds() {
        return software.amazon.jsii.Kernel.get(this, "attrFileSystemIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute FileSystems: The list of file systems.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFileSystems() {
        return software.amazon.jsii.Kernel.get(this, "attrFileSystems", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.nas.datasource.FileSystems}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.nas.datasource.FileSystems> {
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
        private com.aliyun.ros.cdk.nas.datasource.FileSystemsProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property fileSystemId: The ID of the file system to be created.
         * <p>
         * @return {@code this}
         * @param fileSystemId Property fileSystemId: The ID of the file system to be created. This parameter is required.
         */
        public Builder fileSystemId(final java.lang.String fileSystemId) {
            this.props().fileSystemId(fileSystemId);
            return this;
        }
        /**
         * Property fileSystemId: The ID of the file system to be created.
         * <p>
         * @return {@code this}
         * @param fileSystemId Property fileSystemId: The ID of the file system to be created. This parameter is required.
         */
        public Builder fileSystemId(final com.aliyun.ros.cdk.core.IResolvable fileSystemId) {
            this.props().fileSystemId(fileSystemId);
            return this;
        }

        /**
         * Property fileSystemType: File system type.
         * <p>
         * Value:
         * -standard (default): Universal NAS
         * -extreme: extreme NAS
         * -cpfs: file storage CPFS
         * <p>
         * @return {@code this}
         * @param fileSystemType Property fileSystemType: File system type. This parameter is required.
         */
        public Builder fileSystemType(final java.lang.String fileSystemType) {
            this.props().fileSystemType(fileSystemType);
            return this;
        }
        /**
         * Property fileSystemType: File system type.
         * <p>
         * Value:
         * -standard (default): Universal NAS
         * -extreme: extreme NAS
         * -cpfs: file storage CPFS
         * <p>
         * @return {@code this}
         * @param fileSystemType Property fileSystemType: File system type. This parameter is required.
         */
        public Builder fileSystemType(final com.aliyun.ros.cdk.core.IResolvable fileSystemType) {
            this.props().fileSystemType(fileSystemType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.nas.datasource.FileSystems}.
         */
        @Override
        public com.aliyun.ros.cdk.nas.datasource.FileSystems build() {
            return new com.aliyun.ros.cdk.nas.datasource.FileSystems(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.nas.datasource.FileSystemsProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.nas.datasource.FileSystemsProps.Builder();
            }
            return this.props;
        }
    }
}
