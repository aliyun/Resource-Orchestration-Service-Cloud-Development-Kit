package com.aliyun.ros.cdk.nas;

/**
 * A ROS resource type:  <code>ALIYUN::NAS::AccessGroup</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.84.0 (build 5404dcf)", date = "2023-06-19T08:52:10.655Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nas.$Module.class, fqn = "@alicloud/ros-cdk-nas.AccessGroup")
public class AccessGroup extends com.aliyun.ros.cdk.core.Resource {

    protected AccessGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AccessGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::NAS::AccessGroup</code>.
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
    public AccessGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nas.AccessGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::NAS::AccessGroup</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public AccessGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nas.AccessGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AccessGroupName: Permission group name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAccessGroupName() {
        return software.amazon.jsii.Kernel.get(this, "attrAccessGroupName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.nas.AccessGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.nas.AccessGroup> {
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
        private final com.aliyun.ros.cdk.nas.AccessGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.nas.AccessGroupProps.Builder();
        }

        /**
         * Property accessGroupName: Permission group name.
         * <p>
         * @return {@code this}
         * @param accessGroupName Property accessGroupName: Permission group name. This parameter is required.
         */
        public Builder accessGroupName(final java.lang.String accessGroupName) {
            this.props.accessGroupName(accessGroupName);
            return this;
        }
        /**
         * Property accessGroupName: Permission group name.
         * <p>
         * @return {@code this}
         * @param accessGroupName Property accessGroupName: Permission group name. This parameter is required.
         */
        public Builder accessGroupName(final com.aliyun.ros.cdk.core.IResolvable accessGroupName) {
            this.props.accessGroupName(accessGroupName);
            return this;
        }

        /**
         * Property accessGroupType: Permission group type, including the Vpc and Classic types.
         * <p>
         * @return {@code this}
         * @param accessGroupType Property accessGroupType: Permission group type, including the Vpc and Classic types. This parameter is required.
         */
        public Builder accessGroupType(final java.lang.String accessGroupType) {
            this.props.accessGroupType(accessGroupType);
            return this;
        }
        /**
         * Property accessGroupType: Permission group type, including the Vpc and Classic types.
         * <p>
         * @return {@code this}
         * @param accessGroupType Property accessGroupType: Permission group type, including the Vpc and Classic types. This parameter is required.
         */
        public Builder accessGroupType(final com.aliyun.ros.cdk.core.IResolvable accessGroupType) {
            this.props.accessGroupType(accessGroupType);
            return this;
        }

        /**
         * Property description: Permission group description.
         * <p>
         * It is the same as the permission group name by default.
         * <p>
         * @return {@code this}
         * @param description Property description: Permission group description. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: Permission group description.
         * <p>
         * It is the same as the permission group name by default.
         * <p>
         * @return {@code this}
         * @param description Property description: Permission group description. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property fileSystemType: File system type.
         * <p>
         * Values: standard (default), extreme
         * <p>
         * @return {@code this}
         * @param fileSystemType Property fileSystemType: File system type. This parameter is required.
         */
        public Builder fileSystemType(final java.lang.String fileSystemType) {
            this.props.fileSystemType(fileSystemType);
            return this;
        }
        /**
         * Property fileSystemType: File system type.
         * <p>
         * Values: standard (default), extreme
         * <p>
         * @return {@code this}
         * @param fileSystemType Property fileSystemType: File system type. This parameter is required.
         */
        public Builder fileSystemType(final com.aliyun.ros.cdk.core.IResolvable fileSystemType) {
            this.props.fileSystemType(fileSystemType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.nas.AccessGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.nas.AccessGroup build() {
            return new com.aliyun.ros.cdk.nas.AccessGroup(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
