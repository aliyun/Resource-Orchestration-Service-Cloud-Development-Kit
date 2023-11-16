package com.aliyun.ros.cdk.ecs;

/**
 * A ROS resource type:  <code>ALIYUN::ECS::RamRoleAttachment</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-11-07T09:08:34.855Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ecs.$Module.class, fqn = "@alicloud/ros-cdk-ecs.RamRoleAttachment")
public class RamRoleAttachment extends com.aliyun.ros.cdk.core.Resource {

    protected RamRoleAttachment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RamRoleAttachment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new <code>ALIYUN::ECS::RamRoleAttachment</code>.
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
    public RamRoleAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.RamRoleAttachmentProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new <code>ALIYUN::ECS::RamRoleAttachment</code>.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public RamRoleAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ecs.RamRoleAttachmentProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute InstanceIds: The list of ecs instance id.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceIds() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceIds", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute RamRoleName: The ram role name.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrRamRoleName() {
        return software.amazon.jsii.Kernel.get(this, "attrRamRoleName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ecs.RamRoleAttachment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ecs.RamRoleAttachment> {
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
        private final com.aliyun.ros.cdk.ecs.RamRoleAttachmentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ecs.RamRoleAttachmentProps.Builder();
        }

        /**
         * Property instanceIds: The instance id that needs to be granted the ram role.
         * <p>
         * @return {@code this}
         * @param instanceIds Property instanceIds: The instance id that needs to be granted the ram role. This parameter is required.
         */
        public Builder instanceIds(final com.aliyun.ros.cdk.core.IResolvable instanceIds) {
            this.props.instanceIds(instanceIds);
            return this;
        }
        /**
         * Property instanceIds: The instance id that needs to be granted the ram role.
         * <p>
         * @return {@code this}
         * @param instanceIds Property instanceIds: The instance id that needs to be granted the ram role. This parameter is required.
         */
        public Builder instanceIds(final java.util.List<? extends java.lang.Object> instanceIds) {
            this.props.instanceIds(instanceIds);
            return this;
        }

        /**
         * Property ramRoleName: The ram role name.
         * <p>
         * @return {@code this}
         * @param ramRoleName Property ramRoleName: The ram role name. This parameter is required.
         */
        public Builder ramRoleName(final java.lang.String ramRoleName) {
            this.props.ramRoleName(ramRoleName);
            return this;
        }
        /**
         * Property ramRoleName: The ram role name.
         * <p>
         * @return {@code this}
         * @param ramRoleName Property ramRoleName: The ram role name. This parameter is required.
         */
        public Builder ramRoleName(final com.aliyun.ros.cdk.core.IResolvable ramRoleName) {
            this.props.ramRoleName(ramRoleName);
            return this;
        }

        /**
         * Property policy: When granting the instance RAM role to one or more ECS instances, you can specify an additional permission policy to further limit the permissions of the RAM role.
         * <p>
         * The length is 1~1024 characters.
         * <p>
         * @return {@code this}
         * @param policy Property policy: When granting the instance RAM role to one or more ECS instances, you can specify an additional permission policy to further limit the permissions of the RAM role. This parameter is required.
         */
        public Builder policy(final java.lang.String policy) {
            this.props.policy(policy);
            return this;
        }
        /**
         * Property policy: When granting the instance RAM role to one or more ECS instances, you can specify an additional permission policy to further limit the permissions of the RAM role.
         * <p>
         * The length is 1~1024 characters.
         * <p>
         * @return {@code this}
         * @param policy Property policy: When granting the instance RAM role to one or more ECS instances, you can specify an additional permission policy to further limit the permissions of the RAM role. This parameter is required.
         */
        public Builder policy(final com.aliyun.ros.cdk.core.IResolvable policy) {
            this.props.policy(policy);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ecs.RamRoleAttachment}.
         */
        @Override
        public com.aliyun.ros.cdk.ecs.RamRoleAttachment build() {
            return new com.aliyun.ros.cdk.ecs.RamRoleAttachment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
