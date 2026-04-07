package com.aliyun.ros.cdk.cdn;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::CDN::FcTrigger</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-04-07T05:57:22.279Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.cdn.$Module.class, fqn = "@alicloud/ros-cdk-cdn.FcTrigger")
public class FcTrigger extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.cdn.IFcTrigger {

    protected FcTrigger(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected FcTrigger(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public FcTrigger(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cdn.FcTriggerProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public FcTrigger(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cdn.FcTriggerProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.cdn.FcTriggerProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.cdn.FcTriggerProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.cdn.FcTrigger}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.cdn.FcTrigger> {
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
        private final com.aliyun.ros.cdk.cdn.FcTriggerProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.cdn.FcTriggerProps.Builder();
        }

        /**
         * Property eventMetaName: The event meta name.
         * <p>
         * @return {@code this}
         * @param eventMetaName Property eventMetaName: The event meta name. This parameter is required.
         */
        public Builder eventMetaName(final java.lang.String eventMetaName) {
            this.props.eventMetaName(eventMetaName);
            return this;
        }
        /**
         * Property eventMetaName: The event meta name.
         * <p>
         * @return {@code this}
         * @param eventMetaName Property eventMetaName: The event meta name. This parameter is required.
         */
        public Builder eventMetaName(final com.aliyun.ros.cdk.core.IResolvable eventMetaName) {
            this.props.eventMetaName(eventMetaName);
            return this;
        }

        /**
         * Property eventMetaVersion: The event meta version.
         * <p>
         * @return {@code this}
         * @param eventMetaVersion Property eventMetaVersion: The event meta version. This parameter is required.
         */
        public Builder eventMetaVersion(final java.lang.String eventMetaVersion) {
            this.props.eventMetaVersion(eventMetaVersion);
            return this;
        }
        /**
         * Property eventMetaVersion: The event meta version.
         * <p>
         * @return {@code this}
         * @param eventMetaVersion Property eventMetaVersion: The event meta version. This parameter is required.
         */
        public Builder eventMetaVersion(final com.aliyun.ros.cdk.core.IResolvable eventMetaVersion) {
            this.props.eventMetaVersion(eventMetaVersion);
            return this;
        }

        /**
         * Property notes: The notes.
         * <p>
         * @return {@code this}
         * @param notes Property notes: The notes. This parameter is required.
         */
        public Builder notes(final java.lang.String notes) {
            this.props.notes(notes);
            return this;
        }
        /**
         * Property notes: The notes.
         * <p>
         * @return {@code this}
         * @param notes Property notes: The notes. This parameter is required.
         */
        public Builder notes(final com.aliyun.ros.cdk.core.IResolvable notes) {
            this.props.notes(notes);
            return this;
        }

        /**
         * Property roleArn: The role ARN.
         * <p>
         * @return {@code this}
         * @param roleArn Property roleArn: The role ARN. This parameter is required.
         */
        public Builder roleArn(final java.lang.String roleArn) {
            this.props.roleArn(roleArn);
            return this;
        }
        /**
         * Property roleArn: The role ARN.
         * <p>
         * @return {@code this}
         * @param roleArn Property roleArn: The role ARN. This parameter is required.
         */
        public Builder roleArn(final com.aliyun.ros.cdk.core.IResolvable roleArn) {
            this.props.roleArn(roleArn);
            return this;
        }

        /**
         * Property sourceArn: The source ARN.
         * <p>
         * @return {@code this}
         * @param sourceArn Property sourceArn: The source ARN. This parameter is required.
         */
        public Builder sourceArn(final java.lang.String sourceArn) {
            this.props.sourceArn(sourceArn);
            return this;
        }
        /**
         * Property sourceArn: The source ARN.
         * <p>
         * @return {@code this}
         * @param sourceArn Property sourceArn: The source ARN. This parameter is required.
         */
        public Builder sourceArn(final com.aliyun.ros.cdk.core.IResolvable sourceArn) {
            this.props.sourceArn(sourceArn);
            return this;
        }

        /**
         * Property triggerArn: The trigger ARN.
         * <p>
         * @return {@code this}
         * @param triggerArn Property triggerArn: The trigger ARN. This parameter is required.
         */
        public Builder triggerArn(final java.lang.String triggerArn) {
            this.props.triggerArn(triggerArn);
            return this;
        }
        /**
         * Property triggerArn: The trigger ARN.
         * <p>
         * @return {@code this}
         * @param triggerArn Property triggerArn: The trigger ARN. This parameter is required.
         */
        public Builder triggerArn(final com.aliyun.ros.cdk.core.IResolvable triggerArn) {
            this.props.triggerArn(triggerArn);
            return this;
        }

        /**
         * Property functionArn: The function ARN.
         * <p>
         * @return {@code this}
         * @param functionArn Property functionArn: The function ARN. This parameter is required.
         */
        public Builder functionArn(final java.lang.String functionArn) {
            this.props.functionArn(functionArn);
            return this;
        }
        /**
         * Property functionArn: The function ARN.
         * <p>
         * @return {@code this}
         * @param functionArn Property functionArn: The function ARN. This parameter is required.
         */
        public Builder functionArn(final com.aliyun.ros.cdk.core.IResolvable functionArn) {
            this.props.functionArn(functionArn);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.cdn.FcTrigger}.
         */
        @Override
        public com.aliyun.ros.cdk.cdn.FcTrigger build() {
            return new com.aliyun.ros.cdk.cdn.FcTrigger(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
