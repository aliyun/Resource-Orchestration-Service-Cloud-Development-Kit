package com.aliyun.ros.cdk.mps;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::MPS::Pipeline</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-03-06T05:59:08.090Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mps.$Module.class, fqn = "@alicloud/ros-cdk-mps.Pipeline")
public class Pipeline extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.mps.IPipeline {

    protected Pipeline(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Pipeline(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Pipeline(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mps.PipelineProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Pipeline(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mps.PipelineProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute PipelineId: The ID of the MPS queue.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrPipelineId() {
        return software.amazon.jsii.Kernel.get(this, "attrPipelineId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mps.PipelineProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mps.PipelineProps.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.mps.Pipeline}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mps.Pipeline> {
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
        private final com.aliyun.ros.cdk.mps.PipelineProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.mps.PipelineProps.Builder();
        }

        /**
         * Property name: The new name of the MPS queue.
         * <p>
         * The value can contain letters, digits, and special
         * characters such as hyphens (-) and can be up to 128 bytes in size. The value cannot
         * start with a special character.
         * <p>
         * @return {@code this}
         * @param name Property name: The new name of the MPS queue. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The new name of the MPS queue.
         * <p>
         * The value can contain letters, digits, and special
         * characters such as hyphens (-) and can be up to 128 bytes in size. The value cannot
         * start with a special character.
         * <p>
         * @return {@code this}
         * @param name Property name: The new name of the MPS queue. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property notifyConfig: The Message Service (MNS) configuration, such as the information about the MNS queue or topic.
         * <p>
         * For more information, see NotifyConfig.
         * <p>
         * @return {@code this}
         * @param notifyConfig Property notifyConfig: The Message Service (MNS) configuration, such as the information about the MNS queue or topic. This parameter is required.
         */
        public Builder notifyConfig(final com.aliyun.ros.cdk.core.IResolvable notifyConfig) {
            this.props.notifyConfig(notifyConfig);
            return this;
        }
        /**
         * Property notifyConfig: The Message Service (MNS) configuration, such as the information about the MNS queue or topic.
         * <p>
         * For more information, see NotifyConfig.
         * <p>
         * @return {@code this}
         * @param notifyConfig Property notifyConfig: The Message Service (MNS) configuration, such as the information about the MNS queue or topic. This parameter is required.
         */
        public Builder notifyConfig(final com.aliyun.ros.cdk.mps.RosPipeline.NotifyConfigProperty notifyConfig) {
            this.props.notifyConfig(notifyConfig);
            return this;
        }

        /**
         * Property role: The role that is assigned to the current RAM user.
         * <p>
         * To obtain the role, you can log on to the RAM console and choose Identities &gt; Roles in the left-side navigation pane.
         * <p>
         * @return {@code this}
         * @param role Property role: The role that is assigned to the current RAM user. This parameter is required.
         */
        public Builder role(final java.lang.String role) {
            this.props.role(role);
            return this;
        }
        /**
         * Property role: The role that is assigned to the current RAM user.
         * <p>
         * To obtain the role, you can log on to the RAM console and choose Identities &gt; Roles in the left-side navigation pane.
         * <p>
         * @return {@code this}
         * @param role Property role: The role that is assigned to the current RAM user. This parameter is required.
         */
        public Builder role(final com.aliyun.ros.cdk.core.IResolvable role) {
            this.props.role(role);
            return this;
        }

        /**
         * Property speed: Pipe type.
         * <p>
         * Value:
         * Boost: Double-speed transcoding
         * Standard: ordinary pipe
         * NarrowBandHDV2: Narrowband HD 2.0
         * AIVideoCover: Smart Screenshots
         * AIVideoTag: video tag (supports regions Shanghai, Beijing, Hangzhou).
         * Default: Standard.
         * <p>
         * @return {@code this}
         * @param speed Property speed: Pipe type. This parameter is required.
         */
        public Builder speed(final java.lang.String speed) {
            this.props.speed(speed);
            return this;
        }
        /**
         * Property speed: Pipe type.
         * <p>
         * Value:
         * Boost: Double-speed transcoding
         * Standard: ordinary pipe
         * NarrowBandHDV2: Narrowband HD 2.0
         * AIVideoCover: Smart Screenshots
         * AIVideoTag: video tag (supports regions Shanghai, Beijing, Hangzhou).
         * Default: Standard.
         * <p>
         * @return {@code this}
         * @param speed Property speed: Pipe type. This parameter is required.
         */
        public Builder speed(final com.aliyun.ros.cdk.core.IResolvable speed) {
            this.props.speed(speed);
            return this;
        }

        /**
         * Property speedLevel: Speed level.
         * <p>
         * @return {@code this}
         * @param speedLevel Property speedLevel: Speed level. This parameter is required.
         */
        public Builder speedLevel(final java.lang.Number speedLevel) {
            this.props.speedLevel(speedLevel);
            return this;
        }
        /**
         * Property speedLevel: Speed level.
         * <p>
         * @return {@code this}
         * @param speedLevel Property speedLevel: Speed level. This parameter is required.
         */
        public Builder speedLevel(final com.aliyun.ros.cdk.core.IResolvable speedLevel) {
            this.props.speedLevel(speedLevel);
            return this;
        }

        /**
         * Property state: The new state of the MPS queue.
         * <p>
         * Active: The MPS queue is active. Jobs in the MPS queue can be scheduled and run by MPS.
         * Paused: The MPS queue is paused. Jobs in the MPS queue cannot be scheduled or run by MPS, and all jobs remain in the Submitted state. Jobs that are running will not be affected.
         * <p>
         * @return {@code this}
         * @param state Property state: The new state of the MPS queue. This parameter is required.
         */
        public Builder state(final java.lang.String state) {
            this.props.state(state);
            return this;
        }
        /**
         * Property state: The new state of the MPS queue.
         * <p>
         * Active: The MPS queue is active. Jobs in the MPS queue can be scheduled and run by MPS.
         * Paused: The MPS queue is paused. Jobs in the MPS queue cannot be scheduled or run by MPS, and all jobs remain in the Submitted state. Jobs that are running will not be affected.
         * <p>
         * @return {@code this}
         * @param state Property state: The new state of the MPS queue. This parameter is required.
         */
        public Builder state(final com.aliyun.ros.cdk.core.IResolvable state) {
            this.props.state(state);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.mps.Pipeline}.
         */
        @Override
        public com.aliyun.ros.cdk.mps.Pipeline build() {
            return new com.aliyun.ros.cdk.mps.Pipeline(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
