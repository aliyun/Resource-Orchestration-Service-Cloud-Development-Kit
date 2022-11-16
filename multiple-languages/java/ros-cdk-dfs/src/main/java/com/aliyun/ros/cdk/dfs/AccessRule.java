package com.aliyun.ros.cdk.dfs;

/**
 * A ROS resource type:  `ALIYUN::DFS::AccessRule`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-16T03:59:09.186Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.dfs.$Module.class, fqn = "@alicloud/ros-cdk-dfs.AccessRule")
public class AccessRule extends com.aliyun.ros.cdk.core.Resource {

    protected AccessRule(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected AccessRule(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::DFS::AccessRule`.
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
    public AccessRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dfs.AccessRuleProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::DFS::AccessRule`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public AccessRule(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.dfs.AccessRuleProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute AccessRuleId: The ID of the access_rule.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrAccessRuleId() {
        return software.amazon.jsii.Kernel.get(this, "attrAccessRuleId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.dfs.AccessRule}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.dfs.AccessRule> {
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
        private final com.aliyun.ros.cdk.dfs.AccessRuleProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.dfs.AccessRuleProps.Builder();
        }

        /**
         * Property accessGroupId: The resource ID of Access Group.
         * <p>
         * @return {@code this}
         * @param accessGroupId Property accessGroupId: The resource ID of Access Group. This parameter is required.
         */
        public Builder accessGroupId(final java.lang.String accessGroupId) {
            this.props.accessGroupId(accessGroupId);
            return this;
        }
        /**
         * Property accessGroupId: The resource ID of Access Group.
         * <p>
         * @return {@code this}
         * @param accessGroupId Property accessGroupId: The resource ID of Access Group. This parameter is required.
         */
        public Builder accessGroupId(final com.aliyun.ros.cdk.core.IResolvable accessGroupId) {
            this.props.accessGroupId(accessGroupId);
            return this;
        }

        /**
         * Property networkSegment: The NetworkSegment of the Access Rule.
         * <p>
         * @return {@code this}
         * @param networkSegment Property networkSegment: The NetworkSegment of the Access Rule. This parameter is required.
         */
        public Builder networkSegment(final java.lang.String networkSegment) {
            this.props.networkSegment(networkSegment);
            return this;
        }
        /**
         * Property networkSegment: The NetworkSegment of the Access Rule.
         * <p>
         * @return {@code this}
         * @param networkSegment Property networkSegment: The NetworkSegment of the Access Rule. This parameter is required.
         */
        public Builder networkSegment(final com.aliyun.ros.cdk.core.IResolvable networkSegment) {
            this.props.networkSegment(networkSegment);
            return this;
        }

        /**
         * Property rwAccessType: The read/write permission of the authorized object on the file system.
         * <p>
         * Values:
         * RDWR (default) : read and write.
         * RDONLY: read-only
         * <p>
         * @return {@code this}
         * @param rwAccessType Property rwAccessType: The read/write permission of the authorized object on the file system. This parameter is required.
         */
        public Builder rwAccessType(final java.lang.String rwAccessType) {
            this.props.rwAccessType(rwAccessType);
            return this;
        }
        /**
         * Property rwAccessType: The read/write permission of the authorized object on the file system.
         * <p>
         * Values:
         * RDWR (default) : read and write.
         * RDONLY: read-only
         * <p>
         * @return {@code this}
         * @param rwAccessType Property rwAccessType: The read/write permission of the authorized object on the file system. This parameter is required.
         */
        public Builder rwAccessType(final com.aliyun.ros.cdk.core.IResolvable rwAccessType) {
            this.props.rwAccessType(rwAccessType);
            return this;
        }

        /**
         * Property description: The Description of the Access Rule.
         * <p>
         * @return {@code this}
         * @param description Property description: The Description of the Access Rule. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }
        /**
         * Property description: The Description of the Access Rule.
         * <p>
         * @return {@code this}
         * @param description Property description: The Description of the Access Rule. This parameter is required.
         */
        public Builder description(final com.aliyun.ros.cdk.core.IResolvable description) {
            this.props.description(description);
            return this;
        }

        /**
         * Property priority: The Priority of the Access Rule.
         * <p>
         * Valid values: 1 to 100.
         * NOTE: When multiple rules are matched by the same authorized object,
         * the high-priority rule takes effect. 1 is the highest priority.
         * <p>
         * @return {@code this}
         * @param priority Property priority: The Priority of the Access Rule. This parameter is required.
         */
        public Builder priority(final java.lang.Number priority) {
            this.props.priority(priority);
            return this;
        }
        /**
         * Property priority: The Priority of the Access Rule.
         * <p>
         * Valid values: 1 to 100.
         * NOTE: When multiple rules are matched by the same authorized object,
         * the high-priority rule takes effect. 1 is the highest priority.
         * <p>
         * @return {@code this}
         * @param priority Property priority: The Priority of the Access Rule. This parameter is required.
         */
        public Builder priority(final com.aliyun.ros.cdk.core.IResolvable priority) {
            this.props.priority(priority);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.dfs.AccessRule}.
         */
        @Override
        public com.aliyun.ros.cdk.dfs.AccessRule build() {
            return new com.aliyun.ros.cdk.dfs.AccessRule(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
