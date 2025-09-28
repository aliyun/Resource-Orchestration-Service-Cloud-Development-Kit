package com.aliyun.ros.cdk.ros;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::ROS::Assert</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:29.173Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.ros.$Module.class, fqn = "@alicloud/ros-cdk-ros.Assert")
public class Assert extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.ros.IAssert {

    protected Assert(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Assert(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Assert(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.AssertProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Assert(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.AssertProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute FailureCause: The reason the assertion failed.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFailureCause() {
        return software.amazon.jsii.Kernel.get(this, "attrFailureCause", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute Result: The result of the assert.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrResult() {
        return software.amazon.jsii.Kernel.get(this, "attrResult", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.ros.AssertProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.ros.AssertProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.ros.Assert}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.ros.Assert> {
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
        private final com.aliyun.ros.cdk.ros.AssertProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.ros.AssertProps.Builder();
        }

        /**
         * Property values: A list of values to assert.
         * <p>
         * The items in the list are compared in order. The range of length is one to three.
         * <p>
         * <ul>
         * <li>Three values are supported only if the operation is Equal or NotEqual.</li>
         * <li>One value is supported only if the operation is Not.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param values Property values: A list of values to assert. This parameter is required.
         */
        public Builder values(final java.util.List<? extends java.lang.Object> values) {
            this.props.values(values);
            return this;
        }
        /**
         * Property values: A list of values to assert.
         * <p>
         * The items in the list are compared in order. The range of length is one to three.
         * <p>
         * <ul>
         * <li>Three values are supported only if the operation is Equal or NotEqual.</li>
         * <li>One value is supported only if the operation is Not.</li>
         * </ul>
         * <p>
         * @return {@code this}
         * @param values Property values: A list of values to assert. This parameter is required.
         */
        public Builder values(final com.aliyun.ros.cdk.core.IResolvable values) {
            this.props.values(values);
            return this;
        }

        /**
         * Property abortCreation: Whether to abort creation when the assert fails.
         * <p>
         * Default is True.
         * <p>
         * @return {@code this}
         * @param abortCreation Property abortCreation: Whether to abort creation when the assert fails. This parameter is required.
         */
        public Builder abortCreation(final java.lang.Boolean abortCreation) {
            this.props.abortCreation(abortCreation);
            return this;
        }
        /**
         * Property abortCreation: Whether to abort creation when the assert fails.
         * <p>
         * Default is True.
         * <p>
         * @return {@code this}
         * @param abortCreation Property abortCreation: Whether to abort creation when the assert fails. This parameter is required.
         */
        public Builder abortCreation(final com.aliyun.ros.cdk.core.IResolvable abortCreation) {
            this.props.abortCreation(abortCreation);
            return this;
        }

        /**
         * Property errorMessage: The error message to be returned when the assert fails.
         * <p>
         * @return {@code this}
         * @param errorMessage Property errorMessage: The error message to be returned when the assert fails. This parameter is required.
         */
        public Builder errorMessage(final java.lang.String errorMessage) {
            this.props.errorMessage(errorMessage);
            return this;
        }
        /**
         * Property errorMessage: The error message to be returned when the assert fails.
         * <p>
         * @return {@code this}
         * @param errorMessage Property errorMessage: The error message to be returned when the assert fails. This parameter is required.
         */
        public Builder errorMessage(final com.aliyun.ros.cdk.core.IResolvable errorMessage) {
            this.props.errorMessage(errorMessage);
            return this;
        }

        /**
         * Property operation: The type of assertion to make.
         * <p>
         * The supported operations are:
         * Equal, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual, Contain, NotContain, And, Or, Not.
         * Default is Equal.
         * <p>
         * @return {@code this}
         * @param operation Property operation: The type of assertion to make. This parameter is required.
         */
        public Builder operation(final java.lang.String operation) {
            this.props.operation(operation);
            return this;
        }
        /**
         * Property operation: The type of assertion to make.
         * <p>
         * The supported operations are:
         * Equal, NotEqual, Greater, GreaterOrEqual, Less, LessOrEqual, Contain, NotContain, And, Or, Not.
         * Default is Equal.
         * <p>
         * @return {@code this}
         * @param operation Property operation: The type of assertion to make. This parameter is required.
         */
        public Builder operation(final com.aliyun.ros.cdk.core.IResolvable operation) {
            this.props.operation(operation);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.ros.Assert}.
         */
        @Override
        public com.aliyun.ros.cdk.ros.Assert build() {
            return new com.aliyun.ros.cdk.ros.Assert(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
