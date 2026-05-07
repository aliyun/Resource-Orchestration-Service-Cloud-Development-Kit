package com.aliyun.ros.cdk.cdn;

/**
 * This class is a base encapsulation around the ROS resource type <code>ALIYUN::CDN::FcTrigger</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-05-07T04:16:46.219Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cdn.$Module.class, fqn = "@alicloud/ros-cdk-cdn.RosFcTrigger")
public class RosFcTrigger extends com.aliyun.ros.cdk.core.RosResource {

    protected RosFcTrigger(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosFcTrigger(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    static {
        ROS_RESOURCE_TYPE_NAME = software.amazon.jsii.JsiiObject.jsiiStaticGet(com.aliyun.ros.cdk.cdn.RosFcTrigger.class, "ROS_RESOURCE_TYPE_NAME", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
     * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
     * @param props <ul><li>resource properties.</li></ul> This parameter is required.
     * @param enableResourcePropertyConstraint This parameter is required.
     */
    public RosFcTrigger(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cdn.RosFcTriggerProps props, final @org.jetbrains.annotations.NotNull java.lang.Boolean enableResourcePropertyConstraint) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required"), java.util.Objects.requireNonNull(enableResourcePropertyConstraint, "enableResourcePropertyConstraint is required") });
    }

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> renderProperties(final @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> props) {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.call(this, "renderProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class)), new Object[] { java.util.Objects.requireNonNull(props, "props is required") }));
    }

    /**
     * The resource type name for this resource class.
     */
    public final static java.lang.String ROS_RESOURCE_TYPE_NAME;

    @Override
    protected @org.jetbrains.annotations.NotNull java.util.Map<java.lang.String, java.lang.Object> getRosProperties() {
        return java.util.Collections.unmodifiableMap(software.amazon.jsii.Kernel.get(this, "rosProperties", software.amazon.jsii.NativeType.mapOf(software.amazon.jsii.NativeType.forClass(java.lang.Object.class))));
    }

    public @org.jetbrains.annotations.NotNull java.lang.Boolean getEnableResourcePropertyConstraint() {
        return software.amazon.jsii.Kernel.get(this, "enableResourcePropertyConstraint", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class));
    }

    public void setEnableResourcePropertyConstraint(final @org.jetbrains.annotations.NotNull java.lang.Boolean value) {
        software.amazon.jsii.Kernel.set(this, "enableResourcePropertyConstraint", java.util.Objects.requireNonNull(value, "enableResourcePropertyConstraint is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getEventMetaName() {
        return software.amazon.jsii.Kernel.get(this, "eventMetaName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEventMetaName(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "eventMetaName", java.util.Objects.requireNonNull(value, "eventMetaName is required"));
    }

    /**
     */
    public void setEventMetaName(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "eventMetaName", java.util.Objects.requireNonNull(value, "eventMetaName is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getEventMetaVersion() {
        return software.amazon.jsii.Kernel.get(this, "eventMetaVersion", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setEventMetaVersion(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "eventMetaVersion", java.util.Objects.requireNonNull(value, "eventMetaVersion is required"));
    }

    /**
     */
    public void setEventMetaVersion(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "eventMetaVersion", java.util.Objects.requireNonNull(value, "eventMetaVersion is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getNotes() {
        return software.amazon.jsii.Kernel.get(this, "notes", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setNotes(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "notes", java.util.Objects.requireNonNull(value, "notes is required"));
    }

    /**
     */
    public void setNotes(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "notes", java.util.Objects.requireNonNull(value, "notes is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getRoleArn() {
        return software.amazon.jsii.Kernel.get(this, "roleArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setRoleArn(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "roleArn", java.util.Objects.requireNonNull(value, "roleArn is required"));
    }

    /**
     */
    public void setRoleArn(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "roleArn", java.util.Objects.requireNonNull(value, "roleArn is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getSourceArn() {
        return software.amazon.jsii.Kernel.get(this, "sourceArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setSourceArn(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "sourceArn", java.util.Objects.requireNonNull(value, "sourceArn is required"));
    }

    /**
     */
    public void setSourceArn(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "sourceArn", java.util.Objects.requireNonNull(value, "sourceArn is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.NotNull java.lang.Object getTriggerArn() {
        return software.amazon.jsii.Kernel.get(this, "triggerArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setTriggerArn(final @org.jetbrains.annotations.NotNull java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "triggerArn", java.util.Objects.requireNonNull(value, "triggerArn is required"));
    }

    /**
     */
    public void setTriggerArn(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "triggerArn", java.util.Objects.requireNonNull(value, "triggerArn is required"));
    }

    /**
     */
    public @org.jetbrains.annotations.Nullable java.lang.Object getFunctionArn() {
        return software.amazon.jsii.Kernel.get(this, "functionArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     */
    public void setFunctionArn(final @org.jetbrains.annotations.Nullable java.lang.String value) {
        software.amazon.jsii.Kernel.set(this, "functionArn", value);
    }

    /**
     */
    public void setFunctionArn(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IResolvable value) {
        software.amazon.jsii.Kernel.set(this, "functionArn", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.cdn.RosFcTrigger}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cdn.RosFcTrigger> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope <ul><li>scope in which this resource is defined.</li></ul> This parameter is required.
         * @param id <ul><li>scoped id of the resource.</li></ul> This parameter is required.
         * @param enableResourcePropertyConstraint This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            return new Builder(scope, id, enableResourcePropertyConstraint);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final java.lang.Boolean enableResourcePropertyConstraint;
        private final com.aliyun.ros.cdk.cdn.RosFcTriggerProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cdn.RosFcTriggerProps.Builder();
        }

        /**
         * @return {@code this}
         * @param eventMetaName This parameter is required.
         */
        public Builder eventMetaName(final java.lang.String eventMetaName) {
            this.props.eventMetaName(eventMetaName);
            return this;
        }
        /**
         * @return {@code this}
         * @param eventMetaName This parameter is required.
         */
        public Builder eventMetaName(final com.aliyun.ros.cdk.core.IResolvable eventMetaName) {
            this.props.eventMetaName(eventMetaName);
            return this;
        }

        /**
         * @return {@code this}
         * @param eventMetaVersion This parameter is required.
         */
        public Builder eventMetaVersion(final java.lang.String eventMetaVersion) {
            this.props.eventMetaVersion(eventMetaVersion);
            return this;
        }
        /**
         * @return {@code this}
         * @param eventMetaVersion This parameter is required.
         */
        public Builder eventMetaVersion(final com.aliyun.ros.cdk.core.IResolvable eventMetaVersion) {
            this.props.eventMetaVersion(eventMetaVersion);
            return this;
        }

        /**
         * @return {@code this}
         * @param notes This parameter is required.
         */
        public Builder notes(final java.lang.String notes) {
            this.props.notes(notes);
            return this;
        }
        /**
         * @return {@code this}
         * @param notes This parameter is required.
         */
        public Builder notes(final com.aliyun.ros.cdk.core.IResolvable notes) {
            this.props.notes(notes);
            return this;
        }

        /**
         * @return {@code this}
         * @param roleArn This parameter is required.
         */
        public Builder roleArn(final java.lang.String roleArn) {
            this.props.roleArn(roleArn);
            return this;
        }
        /**
         * @return {@code this}
         * @param roleArn This parameter is required.
         */
        public Builder roleArn(final com.aliyun.ros.cdk.core.IResolvable roleArn) {
            this.props.roleArn(roleArn);
            return this;
        }

        /**
         * @return {@code this}
         * @param sourceArn This parameter is required.
         */
        public Builder sourceArn(final java.lang.String sourceArn) {
            this.props.sourceArn(sourceArn);
            return this;
        }
        /**
         * @return {@code this}
         * @param sourceArn This parameter is required.
         */
        public Builder sourceArn(final com.aliyun.ros.cdk.core.IResolvable sourceArn) {
            this.props.sourceArn(sourceArn);
            return this;
        }

        /**
         * @return {@code this}
         * @param triggerArn This parameter is required.
         */
        public Builder triggerArn(final java.lang.String triggerArn) {
            this.props.triggerArn(triggerArn);
            return this;
        }
        /**
         * @return {@code this}
         * @param triggerArn This parameter is required.
         */
        public Builder triggerArn(final com.aliyun.ros.cdk.core.IResolvable triggerArn) {
            this.props.triggerArn(triggerArn);
            return this;
        }

        /**
         * @return {@code this}
         * @param functionArn This parameter is required.
         */
        public Builder functionArn(final java.lang.String functionArn) {
            this.props.functionArn(functionArn);
            return this;
        }
        /**
         * @return {@code this}
         * @param functionArn This parameter is required.
         */
        public Builder functionArn(final com.aliyun.ros.cdk.core.IResolvable functionArn) {
            this.props.functionArn(functionArn);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cdn.RosFcTrigger}.
         */
        @Override
        public com.aliyun.ros.cdk.cdn.RosFcTrigger build() {
            return new com.aliyun.ros.cdk.cdn.RosFcTrigger(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
