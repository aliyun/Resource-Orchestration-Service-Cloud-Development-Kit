package com.aliyun.ros.cdk.dfs;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::DFS::AccessGroup</code>, which is used to create a permission group.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-10-18T08:56:28.361Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dfs.$Module.class, fqn = "@alicloud/ros-cdk-dfs.AccessGroup")
public class AccessGroup extends com.aliyun.ros.cdk.core.Resource {

    protected AccessGroup(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AccessGroup(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     * @param enableResourcePropertyConstraint
     */
    public AccessGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.dfs.AccessGroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props, enableResourcePropertyConstraint });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public AccessGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.dfs.AccessGroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Param scope - scope in which this resource is defined Param id    - scoped id of the resource Param props - resource properties.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public AccessGroup(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Attribute AccessGroupId: The ID of the access_group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAccessGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrAccessGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dfs.AccessGroupProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.dfs.AccessGroupProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dfs.AccessGroupProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dfs.AccessGroup}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dfs.AccessGroup> {
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
        private com.aliyun.ros.cdk.dfs.AccessGroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
        }

        /**
         * Property accessGroupName: The Name of Access Group.
         * <p>
         * The naming rules are as follows:
         * The value contains 6 to 100 characters.
         * Globally unique and cannot be an empty string.
         * <p>
         * @return {@code this}
         * @param accessGroupName Property accessGroupName: The Name of Access Group. This parameter is required.
         */
        public Builder accessGroupName(final java.lang.String accessGroupName) {
            this.props().accessGroupName(accessGroupName);
            return this;
        }
        /**
         * Property accessGroupName: The Name of Access Group.
         * <p>
         * The naming rules are as follows:
         * The value contains 6 to 100 characters.
         * Globally unique and cannot be an empty string.
         * <p>
         * @return {@code this}
         * @param accessGroupName Property accessGroupName: The Name of Access Group. This parameter is required.
         */
        public Builder accessGroupName(final com.aliyun.ros.cdk.core.IResolvable accessGroupName) {
            this.props().accessGroupName(accessGroupName);
            return this;
        }

        /**
         * Property description: The description of the access_group.
         * <p>
         * The value contains 0 to 100 characters
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the access_group. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props().description(description);
            return this;
        }
        /**
         * Property description: The description of the access_group.
         * <p>
         * The value contains 0 to 100 characters
         * <p>
         * @return {@code this}
         * @param description Property description: The description of the access_group. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props().description(description);
            return this;
        }

        /**
         * Property networkType: The NetworkType of Access Group.
         * <p>
         * Valid values: VPC.
         * <p>
         * @return {@code this}
         * @param networkType Property networkType: The NetworkType of Access Group. This parameter is required.
         */
        public Builder networkType(final java.lang.String networkType) {
            this.props().networkType(networkType);
            return this;
        }
        /**
         * Property networkType: The NetworkType of Access Group.
         * <p>
         * Valid values: VPC.
         * <p>
         * @return {@code this}
         * @param networkType Property networkType: The NetworkType of Access Group. This parameter is required.
         */
        public Builder networkType(final com.aliyun.ros.cdk.core.IResolvable networkType) {
            this.props().networkType(networkType);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.dfs.AccessGroup}.
         */
        @Override
        public com.aliyun.ros.cdk.dfs.AccessGroup build() {
            return new com.aliyun.ros.cdk.dfs.AccessGroup(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null,
                this.enableResourcePropertyConstraint
            );
        }

        private com.aliyun.ros.cdk.dfs.AccessGroupProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.dfs.AccessGroupProps.Builder();
            }
            return this.props;
        }
    }
}
