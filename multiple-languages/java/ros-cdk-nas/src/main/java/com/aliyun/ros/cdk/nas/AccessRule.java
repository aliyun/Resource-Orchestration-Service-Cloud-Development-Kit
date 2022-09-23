package com.aliyun.ros.cdk.nas;

/**
 * A ROS resource type:  `ALIYUN::NAS::AccessRule`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.68.0 (build b45f2f6)", date = "2022-09-23T09:09:10.959Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.nas.$Module.class, fqn = "@alicloud/ros-cdk-nas.AccessRule")
public class AccessRule extends com.aliyun.ros.cdk.core.Resource {

    protected AccessRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AccessRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::NAS::AccessRule`.
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
    public AccessRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nas.AccessRuleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::NAS::AccessRule`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public AccessRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.nas.AccessRuleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AccessRuleId: Rule serial number.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAccessRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrAccessRuleId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.nas.AccessRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.nas.AccessRule> {
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
        private final com.aliyun.ros.cdk.nas.AccessRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.nas.AccessRuleProps.Builder();
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
         * Property sourceCidrIp: Address or address segment.
         * <p>
         * @return {@code this}
         * @param sourceCidrIp Property sourceCidrIp: Address or address segment. This parameter is required.
         */
        public Builder sourceCidrIp(final java.lang.String sourceCidrIp) {
            this.props.sourceCidrIp(sourceCidrIp);
            return this;
        }
        /**
         * Property sourceCidrIp: Address or address segment.
         * <p>
         * @return {@code this}
         * @param sourceCidrIp Property sourceCidrIp: Address or address segment. This parameter is required.
         */
        public Builder sourceCidrIp(final com.aliyun.ros.cdk.core.IResolvable sourceCidrIp) {
            this.props.sourceCidrIp(sourceCidrIp);
            return this;
        }

        /**
         * Property priority: Priority level.
         * <p>
         * Range: 1-100. Default value: 1
         * <p>
         * @return {@code this}
         * @param priority Property priority: Priority level. This parameter is required.
         */
        public Builder priority(final java.lang.Number priority) {
            this.props.priority(priority);
            return this;
        }
        /**
         * Property priority: Priority level.
         * <p>
         * Range: 1-100. Default value: 1
         * <p>
         * @return {@code this}
         * @param priority Property priority: Priority level. This parameter is required.
         */
        public Builder priority(final com.aliyun.ros.cdk.core.IResolvable priority) {
            this.props.priority(priority);
            return this;
        }

        /**
         * Property rwAccessType: Read-write permission type: RDWR (default), RDONLY.
         * <p>
         * @return {@code this}
         * @param rwAccessType Property rwAccessType: Read-write permission type: RDWR (default), RDONLY. This parameter is required.
         */
        public Builder rwAccessType(final java.lang.String rwAccessType) {
            this.props.rwAccessType(rwAccessType);
            return this;
        }
        /**
         * Property rwAccessType: Read-write permission type: RDWR (default), RDONLY.
         * <p>
         * @return {@code this}
         * @param rwAccessType Property rwAccessType: Read-write permission type: RDWR (default), RDONLY. This parameter is required.
         */
        public Builder rwAccessType(final com.aliyun.ros.cdk.core.IResolvable rwAccessType) {
            this.props.rwAccessType(rwAccessType);
            return this;
        }

        /**
         * Property userAccessType: User permission type: no_squash (default), root_squash, all_squash.
         * <p>
         * @return {@code this}
         * @param userAccessType Property userAccessType: User permission type: no_squash (default), root_squash, all_squash. This parameter is required.
         */
        public Builder userAccessType(final java.lang.String userAccessType) {
            this.props.userAccessType(userAccessType);
            return this;
        }
        /**
         * Property userAccessType: User permission type: no_squash (default), root_squash, all_squash.
         * <p>
         * @return {@code this}
         * @param userAccessType Property userAccessType: User permission type: no_squash (default), root_squash, all_squash. This parameter is required.
         */
        public Builder userAccessType(final com.aliyun.ros.cdk.core.IResolvable userAccessType) {
            this.props.userAccessType(userAccessType);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.nas.AccessRule}.
         */
        @Override
        public com.aliyun.ros.cdk.nas.AccessRule build() {
            return new com.aliyun.ros.cdk.nas.AccessRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
