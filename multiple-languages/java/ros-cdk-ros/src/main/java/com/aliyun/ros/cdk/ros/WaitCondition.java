package com.aliyun.ros.cdk.ros;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ROS::WaitCondition</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-12-10T08:25:00.046Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.WaitCondition")
public class WaitCondition extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ros.IWaitCondition {

    protected WaitCondition(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected WaitCondition(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public WaitCondition(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.WaitConditionProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public WaitCondition(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.WaitConditionProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute Data: JSON serialized dict containing data associated with wait condition signals sent to the handle.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrData() {
        return software.amazon.jsii.Kernel.get(this, "attrData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute ErrorData: JSON serialized dict containing data associated with wait condition error signals sent to the handle.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrErrorData() {
        return software.amazon.jsii.Kernel.get(this, "attrErrorData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute JoinedErrorData: String containing data associated with wait condition error signals sent to the handle.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrJoinedErrorData() {
        return software.amazon.jsii.Kernel.get(this, "attrJoinedErrorData", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.WaitConditionProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ros.WaitConditionProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ros.WaitCondition}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ros.WaitCondition> {
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
        private final com.aliyun.ros.cdk.ros.WaitConditionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ros.WaitConditionProps.Builder();
        }

        /**
         * Property handle: A reference to the wait condition handle used to signal this wait condition.
         * <p>
         * @return {@code this}
         * @param handle Property handle: A reference to the wait condition handle used to signal this wait condition. This parameter is required.
         */
        public Builder handle(final java.lang.String handle) {
            this.props.handle(handle);
            return this;
        }
        /**
         * Property handle: A reference to the wait condition handle used to signal this wait condition.
         * <p>
         * @return {@code this}
         * @param handle Property handle: A reference to the wait condition handle used to signal this wait condition. This parameter is required.
         */
        public Builder handle(final com.aliyun.ros.cdk.core.IResolvable handle) {
            this.props.handle(handle);
            return this;
        }

        /**
         * Property timeout: The number of seconds to wait for the correct number of signals to arrive.
         * <p>
         * @return {@code this}
         * @param timeout Property timeout: The number of seconds to wait for the correct number of signals to arrive. This parameter is required.
         */
        public Builder timeout(final java.lang.Number timeout) {
            this.props.timeout(timeout);
            return this;
        }
        /**
         * Property timeout: The number of seconds to wait for the correct number of signals to arrive.
         * <p>
         * @return {@code this}
         * @param timeout Property timeout: The number of seconds to wait for the correct number of signals to arrive. This parameter is required.
         */
        public Builder timeout(final com.aliyun.ros.cdk.core.IResolvable timeout) {
            this.props.timeout(timeout);
            return this;
        }

        /**
         * Property count: The number of success signals that must be received before the stack creation process continues.
         * <p>
         * @return {@code this}
         * @param count Property count: The number of success signals that must be received before the stack creation process continues. This parameter is required.
         */
        public Builder count(final java.lang.Number count) {
            this.props.count(count);
            return this;
        }
        /**
         * Property count: The number of success signals that must be received before the stack creation process continues.
         * <p>
         * @return {@code this}
         * @param count Property count: The number of success signals that must be received before the stack creation process continues. This parameter is required.
         */
        public Builder count(final com.aliyun.ros.cdk.core.IResolvable count) {
            this.props.count(count);
            return this;
        }

        /**
         * Property showProgressEvent: Whether to generate progress changed event.
         * <p>
         * Default to Disabled.
         * <p>
         * @return {@code this}
         * @param showProgressEvent Property showProgressEvent: Whether to generate progress changed event. This parameter is required.
         */
        public Builder showProgressEvent(final java.lang.String showProgressEvent) {
            this.props.showProgressEvent(showProgressEvent);
            return this;
        }
        /**
         * Property showProgressEvent: Whether to generate progress changed event.
         * <p>
         * Default to Disabled.
         * <p>
         * @return {@code this}
         * @param showProgressEvent Property showProgressEvent: Whether to generate progress changed event. This parameter is required.
         */
        public Builder showProgressEvent(final com.aliyun.ros.cdk.core.IResolvable showProgressEvent) {
            this.props.showProgressEvent(showProgressEvent);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ros.WaitCondition}.
         */
        @Override
        public com.aliyun.ros.cdk.ros.WaitCondition build() {
            return new com.aliyun.ros.cdk.ros.WaitCondition(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
