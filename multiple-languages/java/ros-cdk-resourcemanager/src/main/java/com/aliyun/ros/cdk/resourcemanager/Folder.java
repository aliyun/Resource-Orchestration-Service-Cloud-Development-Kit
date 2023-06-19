package com.aliyun.ros.cdk.resourcemanager;

/**
 * A ROS resource type:  <code>ALIYUN::ResourceManager::Folder</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-19T08:52:11.335Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.Folder")
public class Folder extends com.aliyun.ros.cdk.core.Resource {

    protected Folder(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Folder(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::ResourceManager::Folder</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     * @param enableResourcePropertyConstraint
     */
    public Folder(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.FolderProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::ResourceManager::Folder</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Folder(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.FolderProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute FolderId: The ID of the folder.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFolderId() {
        return software.amazon.jsii.Kernel.get(this, "attrFolderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute FolderName: The name of the folder.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrFolderName() {
        return software.amazon.jsii.Kernel.get(this, "attrFolderName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute ParentFolderId: The ID of the parent folder.
     * <p>
     * If not set, the system default value will be used
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrParentFolderId() {
        return software.amazon.jsii.Kernel.get(this, "attrParentFolderId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.resourcemanager.Folder}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.resourcemanager.Folder> {
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
        private final com.aliyun.ros.cdk.resourcemanager.FolderProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.resourcemanager.FolderProps.Builder();
        }

        /**
         * Property folderName: The name of the folder.
         * <p>
         * @return {@code this}
         * @param folderName Property folderName: The name of the folder. This parameter is required.
         */
        public Builder folderName(final java.lang.String folderName) {
            this.props.folderName(folderName);
            return this;
        }
        /**
         * Property folderName: The name of the folder.
         * <p>
         * @return {@code this}
         * @param folderName Property folderName: The name of the folder. This parameter is required.
         */
        public Builder folderName(final com.aliyun.ros.cdk.core.IResolvable folderName) {
            this.props.folderName(folderName);
            return this;
        }

        /**
         * Property parentFolderId: The ID of the parent folder.
         * <p>
         * If not set, the system default value will be used
         * <p>
         * @return {@code this}
         * @param parentFolderId Property parentFolderId: The ID of the parent folder. This parameter is required.
         */
        public Builder parentFolderId(final java.lang.String parentFolderId) {
            this.props.parentFolderId(parentFolderId);
            return this;
        }
        /**
         * Property parentFolderId: The ID of the parent folder.
         * <p>
         * If not set, the system default value will be used
         * <p>
         * @return {@code this}
         * @param parentFolderId Property parentFolderId: The ID of the parent folder. This parameter is required.
         */
        public Builder parentFolderId(final com.aliyun.ros.cdk.core.IResolvable parentFolderId) {
            this.props.parentFolderId(parentFolderId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.resourcemanager.Folder}.
         */
        @Override
        public com.aliyun.ros.cdk.resourcemanager.Folder build() {
            return new com.aliyun.ros.cdk.resourcemanager.Folder(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
