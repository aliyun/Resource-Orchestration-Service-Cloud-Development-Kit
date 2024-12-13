package com.aliyun.ros.cdk.mps;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::MPS::MediaWorkflow</code>, which is used to add a media workflow.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-12-13T06:45:09.421Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.mps.$Module.class, fqn = "@alicloud/ros-cdk-mps.MediaWorkflow")
public class MediaWorkflow extends com.aliyun.ros.cdk.core.Resource {

    protected MediaWorkflow(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected MediaWorkflow(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public MediaWorkflow(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mps.MediaWorkflowProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public MediaWorkflow(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mps.MediaWorkflowProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute CreationTime: The time when the media workflow was created.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrCreationTime() {
        return software.amazon.jsii.Kernel.get(this, "attrCreationTime", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute MediaWorkflowId: The ID of the media workflow.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrMediaWorkflowId() {
        return software.amazon.jsii.Kernel.get(this, "attrMediaWorkflowId", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Name: The name of the media workflow.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrName() {
        return software.amazon.jsii.Kernel.get(this, "attrName", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute State: The state of the media workflow.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrState() {
        return software.amazon.jsii.Kernel.get(this, "attrState", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute Topology: The topology of the media workflow.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTopology() {
        return software.amazon.jsii.Kernel.get(this, "attrTopology", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
    }

    /**
     * Attribute TriggerMode: The trigger mode of the media workflow.
     */
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable getAttrTriggerMode() {
        return software.amazon.jsii.Kernel.get(this, "attrTriggerMode", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IResolvable.class));
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

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mps.MediaWorkflowProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.mps.MediaWorkflowProps.class));
    }

    protected void setProps(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.mps.MediaWorkflowProps value) {
        software.amazon.jsii.Kernel.set(this, "props", java.util.Objects.requireNonNull(value, "props is required"));
    }

    protected @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct getScope() {
        return software.amazon.jsii.Kernel.get(this, "scope", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.Construct.class));
    }

    protected void setScope(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct value) {
        software.amazon.jsii.Kernel.set(this, "scope", java.util.Objects.requireNonNull(value, "scope is required"));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.mps.MediaWorkflow}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.mps.MediaWorkflow> {
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
        private final com.aliyun.ros.cdk.mps.MediaWorkflowProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.mps.MediaWorkflowProps.Builder();
        }

        /**
         * Property name: The topology of the media workflow.
         * <p>
         * The value cannot be empty.
         * The name cannot be the same as that of an existing media workflow within the current Alibaba Cloud account.
         * The name can be up to 64 characters in length.
         * The value must be encoded in the UTF-8 format.
         * <p>
         * @return {@code this}
         * @param name Property name: The topology of the media workflow. This parameter is required.
         */
        public Builder name(final java.lang.String name) {
            this.props.name(name);
            return this;
        }
        /**
         * Property name: The topology of the media workflow.
         * <p>
         * The value cannot be empty.
         * The name cannot be the same as that of an existing media workflow within the current Alibaba Cloud account.
         * The name can be up to 64 characters in length.
         * The value must be encoded in the UTF-8 format.
         * <p>
         * @return {@code this}
         * @param name Property name: The topology of the media workflow. This parameter is required.
         */
        public Builder name(final com.aliyun.ros.cdk.core.IResolvable name) {
            this.props.name(name);
            return this;
        }

        /**
         * Property topology: The topology of the media workflow.
         * <p>
         * The value must be a JSON object that contains the activities and activity dependencies. For more information, see the Sample topology section of this topic.Note The Object Storage Service (OSS) bucket must reside in the same region as your MPS service.
         * <p>
         * @return {@code this}
         * @param topology Property topology: The topology of the media workflow. This parameter is required.
         */
        public Builder topology(final com.aliyun.ros.cdk.core.IResolvable topology) {
            this.props.topology(topology);
            return this;
        }
        /**
         * Property topology: The topology of the media workflow.
         * <p>
         * The value must be a JSON object that contains the activities and activity dependencies. For more information, see the Sample topology section of this topic.Note The Object Storage Service (OSS) bucket must reside in the same region as your MPS service.
         * <p>
         * @return {@code this}
         * @param topology Property topology: The topology of the media workflow. This parameter is required.
         */
        public Builder topology(final java.util.Map<java.lang.String, ? extends java.lang.Object> topology) {
            this.props.topology(topology);
            return this;
        }

        /**
         * Property triggerMode: The triggering mode of the media workflow.
         * <p>
         * Valid values:
         * OssAutoTrigger: The media workflow is automatically triggered.
         * NotInAuto: The media workflow is not automatically triggered.
         * <p>
         * @return {@code this}
         * @param triggerMode Property triggerMode: The triggering mode of the media workflow. This parameter is required.
         */
        public Builder triggerMode(final java.lang.String triggerMode) {
            this.props.triggerMode(triggerMode);
            return this;
        }
        /**
         * Property triggerMode: The triggering mode of the media workflow.
         * <p>
         * Valid values:
         * OssAutoTrigger: The media workflow is automatically triggered.
         * NotInAuto: The media workflow is not automatically triggered.
         * <p>
         * @return {@code this}
         * @param triggerMode Property triggerMode: The triggering mode of the media workflow. This parameter is required.
         */
        public Builder triggerMode(final com.aliyun.ros.cdk.core.IResolvable triggerMode) {
            this.props.triggerMode(triggerMode);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.mps.MediaWorkflow}.
         */
        @Override
        public com.aliyun.ros.cdk.mps.MediaWorkflow build() {
            return new com.aliyun.ros.cdk.mps.MediaWorkflow(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
