package com.aliyun.ros.cdk.ess;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ESS::ServerGroupAttachment</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-12-26T06:30:16.111Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.ServerGroupAttachment")
public class ServerGroupAttachment extends com.aliyun.ros.cdk.core.Resource {

    protected ServerGroupAttachment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected ServerGroupAttachment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public ServerGroupAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.ServerGroupAttachmentProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public ServerGroupAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.ServerGroupAttachmentProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ScalingActivityId: The ID of the scaling activity during which one or more SLB instances are attached to the scaling group and the ECS instances in the scaling group are added to the backend server groups of the SLB instances.
     * <p>
     * Note This parameter is returned only after you set the ForceAttach parameter to true.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingActivityId() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingActivityId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ess.ServerGroupAttachment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ess.ServerGroupAttachment> {
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
        private final com.aliyun.ros.cdk.ess.ServerGroupAttachmentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ess.ServerGroupAttachmentProps.Builder();
        }

        /**
         * Property scalingGroupId: The ID of the scaling group.
         * <p>
         * @return {@code this}
         * @param scalingGroupId Property scalingGroupId: The ID of the scaling group. This parameter is required.
         */
        public Builder scalingGroupId(final java.lang.String scalingGroupId) {
            this.props.scalingGroupId(scalingGroupId);
            return this;
        }
        /**
         * Property scalingGroupId: The ID of the scaling group.
         * <p>
         * @return {@code this}
         * @param scalingGroupId Property scalingGroupId: The ID of the scaling group. This parameter is required.
         */
        public Builder scalingGroupId(final com.aliyun.ros.cdk.core.IResolvable scalingGroupId) {
            this.props.scalingGroupId(scalingGroupId);
            return this;
        }

        /**
         * Property serverGroups: A collection of information about server groups.
         * <p>
         * @return {@code this}
         * @param serverGroups Property serverGroups: A collection of information about server groups. This parameter is required.
         */
        public Builder serverGroups(final com.aliyun.ros.cdk.core.IResolvable serverGroups) {
            this.props.serverGroups(serverGroups);
            return this;
        }
        /**
         * Property serverGroups: A collection of information about server groups.
         * <p>
         * @return {@code this}
         * @param serverGroups Property serverGroups: A collection of information about server groups. This parameter is required.
         */
        public Builder serverGroups(final java.util.List<? extends java.lang.Object> serverGroups) {
            this.props.serverGroups(serverGroups);
            return this;
        }

        /**
         * Property forceAttach: Specifies whether to add the Elastic Compute Service (ECS) instances in the scaling group to the backend server group of the newly attached SLB instance.
         * <p>
         * Valid values:
         * true
         * false
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param forceAttach Property forceAttach: Specifies whether to add the Elastic Compute Service (ECS) instances in the scaling group to the backend server group of the newly attached SLB instance. This parameter is required.
         */
        public Builder forceAttach(final java.lang.Boolean forceAttach) {
            this.props.forceAttach(forceAttach);
            return this;
        }
        /**
         * Property forceAttach: Specifies whether to add the Elastic Compute Service (ECS) instances in the scaling group to the backend server group of the newly attached SLB instance.
         * <p>
         * Valid values:
         * true
         * false
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param forceAttach Property forceAttach: Specifies whether to add the Elastic Compute Service (ECS) instances in the scaling group to the backend server group of the newly attached SLB instance. This parameter is required.
         */
        public Builder forceAttach(final com.aliyun.ros.cdk.core.IResolvable forceAttach) {
            this.props.forceAttach(forceAttach);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ess.ServerGroupAttachment}.
         */
        @Override
        public com.aliyun.ros.cdk.ess.ServerGroupAttachment build() {
            return new com.aliyun.ros.cdk.ess.ServerGroupAttachment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
