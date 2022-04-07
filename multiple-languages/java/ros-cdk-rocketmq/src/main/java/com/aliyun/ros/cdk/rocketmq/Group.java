package com.aliyun.ros.cdk.rocketmq;

/**
 * A ROS resource type:  `ALIYUN::ROCKETMQ::Group`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.55.1 (build 07d2d90)", date = "2022-04-07T03:17:42.420Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.rocketmq.$Module.class, fqn = "@alicloud/ros-cdk-rocketmq.Group")
public class Group extends com.aliyun.ros.cdk.core.Resource {

    protected Group(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Group(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Create a new `ALIYUN::ROCKETMQ::Group`.
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
    public Group(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rocketmq.GroupProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), enableResourcePropertyConstraint });
    }

    /**
     * Create a new `ALIYUN::ROCKETMQ::Group`.
     * <p>
     * Param scope - scope in which this resource is defined
     * Param id    - scoped id of the resource
     * Param props - resource properties
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props This parameter is required.
     */
    public Group(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.rocketmq.GroupProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute GroupId: Group ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute GroupType: Group Type.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrGroupType() {
        return software.amazon.jsii.Kernel.get(this, "attrGroupType", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute InstanceId: Instance ID.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrInstanceId() {
        return software.amazon.jsii.Kernel.get(this, "attrInstanceId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.rocketmq.Group}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.rocketmq.Group> {
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
        private final com.aliyun.ros.cdk.rocketmq.GroupProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.rocketmq.GroupProps.Builder();
        }

        /**
         * Property groupId: The group ID of the consumption cluster.
         * <p>
         * When creating a group ID, pay attention to the following aspects:
         * A group ID starts with"GID_" or "GID-", and contains letters, numbers, hyphens (-), and underscores (_).
         * A group ID ranges from 7 to 64 bytes.
         * Once a group ID is created, it cannot be edited anymore.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: The group ID of the consumption cluster. This parameter is required.
         */
        public Builder groupId(final java.lang.String groupId) {
            this.props.groupId(groupId);
            return this;
        }
        /**
         * Property groupId: The group ID of the consumption cluster.
         * <p>
         * When creating a group ID, pay attention to the following aspects:
         * A group ID starts with"GID_" or "GID-", and contains letters, numbers, hyphens (-), and underscores (_).
         * A group ID ranges from 7 to 64 bytes.
         * Once a group ID is created, it cannot be edited anymore.
         * <p>
         * @return {@code this}
         * @param groupId Property groupId: The group ID of the consumption cluster. This parameter is required.
         */
        public Builder groupId(final com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.props.groupId(groupId);
            return this;
        }

        /**
         * Property instanceId: The ID of the instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the instance. This parameter is required.
         */
        public Builder instanceId(final java.lang.String instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }
        /**
         * Property instanceId: The ID of the instance.
         * <p>
         * @return {@code this}
         * @param instanceId Property instanceId: The ID of the instance. This parameter is required.
         */
        public Builder instanceId(final com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.props.instanceId(instanceId);
            return this;
        }

        /**
         * Property groupType: Group ID specify the creation of applicable agreements.
         * <p>
         * Group ID TCP protocol and the HTTP protocol can not be shared, the need to create separately. Value as follows:
         * tcp: Default, indicates Group ID is created only for the TCP protocol messaging.
         * http: represents the Group ID was created only for the HTTP protocol messaging.
         * <p>
         * @return {@code this}
         * @param groupType Property groupType: Group ID specify the creation of applicable agreements. This parameter is required.
         */
        public Builder groupType(final java.lang.String groupType) {
            this.props.groupType(groupType);
            return this;
        }
        /**
         * Property groupType: Group ID specify the creation of applicable agreements.
         * <p>
         * Group ID TCP protocol and the HTTP protocol can not be shared, the need to create separately. Value as follows:
         * tcp: Default, indicates Group ID is created only for the TCP protocol messaging.
         * http: represents the Group ID was created only for the HTTP protocol messaging.
         * <p>
         * @return {@code this}
         * @param groupType Property groupType: Group ID specify the creation of applicable agreements. This parameter is required.
         */
        public Builder groupType(final com.aliyun.ros.cdk.core.IResolvable groupType) {
            this.props.groupType(groupType);
            return this;
        }

        /**
         * Property remark: The remarks on the request.
         * <p>
         * @return {@code this}
         * @param remark Property remark: The remarks on the request. This parameter is required.
         */
        public Builder remark(final java.lang.String remark) {
            this.props.remark(remark);
            return this;
        }
        /**
         * Property remark: The remarks on the request.
         * <p>
         * @return {@code this}
         * @param remark Property remark: The remarks on the request. This parameter is required.
         */
        public Builder remark(final com.aliyun.ros.cdk.core.IResolvable remark) {
            this.props.remark(remark);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.rocketmq.Group}.
         */
        @Override
        public com.aliyun.ros.cdk.rocketmq.Group build() {
            return new com.aliyun.ros.cdk.rocketmq.Group(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
