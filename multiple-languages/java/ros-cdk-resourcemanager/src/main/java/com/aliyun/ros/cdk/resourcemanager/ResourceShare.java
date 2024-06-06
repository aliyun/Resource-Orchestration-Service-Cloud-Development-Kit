package com.aliyun.ros.cdk.resourcemanager;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ResourceManager::ResourceShare</code>, which is used to create a resource share.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-06T03:35:17.180Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.resourcemanager.$Module.class, fqn = "@alicloud/ros-cdk-resourcemanager.ResourceShare")
public class ResourceShare extends com.aliyun.ros.cdk.core.Resource {

    protected ResourceShare(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ResourceShare(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ResourceShare(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.ResourceShareProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ResourceShare(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.ResourceShareProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ResourceShareId: The ID of the resource share.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrResourceShareId() {
        return software.amazon.jsii.Kernel.get(this, "attrResourceShareId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.ResourceShareProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.resourcemanager.ResourceShareProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.resourcemanager.ResourceShareProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.resourcemanager.ResourceShare}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.resourcemanager.ResourceShare> {
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
        private final com.aliyun.ros.cdk.resourcemanager.ResourceShareProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.resourcemanager.ResourceShareProps.Builder();
        }

        /**
         * Property resourceShareName: The name of the resource share.
         * <p>
         * The name must be 1 to 50 characters in length.
         * It can contain letters, digits, periods (.), underscores (_), and hyphens (-).
         * <p>
         * @return {@code this}
         * @param resourceShareName Property resourceShareName: The name of the resource share. This parameter is required.
         */
        public Builder resourceShareName(final java.lang.String resourceShareName) {
            this.props.resourceShareName(resourceShareName);
            return this;
        }
        /**
         * Property resourceShareName: The name of the resource share.
         * <p>
         * The name must be 1 to 50 characters in length.
         * It can contain letters, digits, periods (.), underscores (_), and hyphens (-).
         * <p>
         * @return {@code this}
         * @param resourceShareName Property resourceShareName: The name of the resource share. This parameter is required.
         */
        public Builder resourceShareName(final com.aliyun.ros.cdk.core.IResolvable resourceShareName) {
            this.props.resourceShareName(resourceShareName);
            return this;
        }

        /**
         * Property allowExternalTargets: Whether to allow sharing to accounts outside the resource directory.
         * <p>
         * Value:
         * false (default): Only allow sharing within the resource directory.
         * true: Allow sharing to any account.
         * <p>
         * @return {@code this}
         * @param allowExternalTargets Property allowExternalTargets: Whether to allow sharing to accounts outside the resource directory. This parameter is required.
         */
        public Builder allowExternalTargets(final java.lang.Boolean allowExternalTargets) {
            this.props.allowExternalTargets(allowExternalTargets);
            return this;
        }
        /**
         * Property allowExternalTargets: Whether to allow sharing to accounts outside the resource directory.
         * <p>
         * Value:
         * false (default): Only allow sharing within the resource directory.
         * true: Allow sharing to any account.
         * <p>
         * @return {@code this}
         * @param allowExternalTargets Property allowExternalTargets: Whether to allow sharing to accounts outside the resource directory. This parameter is required.
         */
        public Builder allowExternalTargets(final com.aliyun.ros.cdk.core.IResolvable allowExternalTargets) {
            this.props.allowExternalTargets(allowExternalTargets);
            return this;
        }

        /**
         * Property permissionNames: Sharing permission name.
         * <p>
         * When empty, the system automatically binds the default permissions associated with the resource type.
         * <p>
         * @return {@code this}
         * @param permissionNames Property permissionNames: Sharing permission name. This parameter is required.
         */
        public Builder permissionNames(final com.aliyun.ros.cdk.core.IResolvable permissionNames) {
            this.props.permissionNames(permissionNames);
            return this;
        }
        /**
         * Property permissionNames: Sharing permission name.
         * <p>
         * When empty, the system automatically binds the default permissions associated with the resource type.
         * <p>
         * @return {@code this}
         * @param permissionNames Property permissionNames: Sharing permission name. This parameter is required.
         */
        public Builder permissionNames(final java.util.List<? extends java.lang.Object> permissionNames) {
            this.props.permissionNames(permissionNames);
            return this;
        }

        /**
         * Property resources:.
         * <p>
         * @return {@code this}
         * @param resources Property resources:. This parameter is required.
         */
        public Builder resources(final com.aliyun.ros.cdk.core.IResolvable resources) {
            this.props.resources(resources);
            return this;
        }
        /**
         * Property resources:.
         * <p>
         * @return {@code this}
         * @param resources Property resources:. This parameter is required.
         */
        public Builder resources(final java.util.List<? extends java.lang.Object> resources) {
            this.props.resources(resources);
            return this;
        }

        /**
         * Property targets: The shared target.
         * <p>
         * A shared target shares the resources of resource owners. You can share your resources
         * only with the member accounts in your resource directory. A shared target is indicated
         * by its account ID. For more information about how to obtain the ID, see View the basic information of a member account.
         * <p>
         * @return {@code this}
         * @param targets Property targets: The shared target. This parameter is required.
         */
        public Builder targets(final com.aliyun.ros.cdk.core.IResolvable targets) {
            this.props.targets(targets);
            return this;
        }
        /**
         * Property targets: The shared target.
         * <p>
         * A shared target shares the resources of resource owners. You can share your resources
         * only with the member accounts in your resource directory. A shared target is indicated
         * by its account ID. For more information about how to obtain the ID, see View the basic information of a member account.
         * <p>
         * @return {@code this}
         * @param targets Property targets: The shared target. This parameter is required.
         */
        public Builder targets(final java.util.List<? extends java.lang.Object> targets) {
            this.props.targets(targets);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.resourcemanager.ResourceShare}.
         */
        @Override
        public com.aliyun.ros.cdk.resourcemanager.ResourceShare build() {
            return new com.aliyun.ros.cdk.resourcemanager.ResourceShare(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
