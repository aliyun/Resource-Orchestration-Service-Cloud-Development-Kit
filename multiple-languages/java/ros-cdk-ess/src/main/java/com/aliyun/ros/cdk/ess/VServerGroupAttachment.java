package com.aliyun.ros.cdk.ess;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ESS::VServerGroupAttachment</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-02-28T02:53:29.085Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ess.$Module.class, fqn = "@alicloud/ros-cdk-ess.VServerGroupAttachment")
public class VServerGroupAttachment extends com.aliyun.ros.cdk.core.Resource {

    protected VServerGroupAttachment(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected VServerGroupAttachment(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public VServerGroupAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.VServerGroupAttachmentProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public VServerGroupAttachment(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ess.VServerGroupAttachmentProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute ScalingGroupId: The ID of the scaling group.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrScalingGroupId() {
        return software.amazon.jsii.Kernel.get(this, "attrScalingGroupId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.ess.VServerGroupAttachment}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ess.VServerGroupAttachment> {
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
        private final com.aliyun.ros.cdk.ess.VServerGroupAttachmentProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ess.VServerGroupAttachmentProps.Builder();
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
         * Property vServerGroups: A list of vserver groups attached on scaling group.
         * <p>
         * @return {@code this}
         * @param vServerGroups Property vServerGroups: A list of vserver groups attached on scaling group. This parameter is required.
         */
        public Builder vServerGroups(final com.aliyun.ros.cdk.core.IResolvable vServerGroups) {
            this.props.vServerGroups(vServerGroups);
            return this;
        }
        /**
         * Property vServerGroups: A list of vserver groups attached on scaling group.
         * <p>
         * @return {@code this}
         * @param vServerGroups Property vServerGroups: A list of vserver groups attached on scaling group. This parameter is required.
         */
        public Builder vServerGroups(final java.util.List<? extends java.lang.Object> vServerGroups) {
            this.props.vServerGroups(vServerGroups);
            return this;
        }

        /**
         * Property forceAttach: If instances of scaling group are attached/removed from slb backend server when attach/detach vserver group from scaling group.
         * <p>
         * Valid values:
         * true
         * false
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param forceAttach Property forceAttach: If instances of scaling group are attached/removed from slb backend server when attach/detach vserver group from scaling group. This parameter is required.
         */
        public Builder forceAttach(final java.lang.Boolean forceAttach) {
            this.props.forceAttach(forceAttach);
            return this;
        }
        /**
         * Property forceAttach: If instances of scaling group are attached/removed from slb backend server when attach/detach vserver group from scaling group.
         * <p>
         * Valid values:
         * true
         * false
         * Default value: false.
         * <p>
         * @return {@code this}
         * @param forceAttach Property forceAttach: If instances of scaling group are attached/removed from slb backend server when attach/detach vserver group from scaling group. This parameter is required.
         */
        public Builder forceAttach(final com.aliyun.ros.cdk.core.IResolvable forceAttach) {
            this.props.forceAttach(forceAttach);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ess.VServerGroupAttachment}.
         */
        @Override
        public com.aliyun.ros.cdk.ess.VServerGroupAttachment build() {
            return new com.aliyun.ros.cdk.ess.VServerGroupAttachment(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
