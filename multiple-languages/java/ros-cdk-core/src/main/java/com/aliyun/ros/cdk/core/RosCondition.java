package com.aliyun.ros.cdk.core;

/**
 * Represents a RosTemplate condition, for resources which must be conditionally created and the determination must be made at deploy time.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.80.0 (build bce6a1d)", date = "2023-04-26T03:02:17.912Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.RosCondition")
public class RosCondition extends com.aliyun.ros.cdk.core.RosElement implements com.aliyun.ros.cdk.core.IRosConditionExpression, com.aliyun.ros.cdk.core.IResolvable {

    protected RosCondition(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosCondition(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Build a new condition.
     * <p>
     * The condition must be constructed with a condition token,
     * that the condition is based on.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     * @param props
     */
    public RosCondition(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.RosConditionProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    /**
     * Build a new condition.
     * <p>
     * The condition must be constructed with a condition token,
     * that the condition is based on.
     * <p>
     * @param scope This parameter is required.
     * @param id This parameter is required.
     */
    public RosCondition(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    /**
     * Synthesizes the condition.
     * <p>
     * @param _context This parameter is required.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object resolve(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.IResolveContext _context) {
        return software.amazon.jsii.Kernel.call(this, "resolve", software.amazon.jsii.NativeType.forClass(java.lang.Object.class), new Object[] { java.util.Objects.requireNonNull(_context, "_context is required") });
    }

    /**
     * The condition statement.
     */
    public @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IRosConditionExpression getExpression() {
        return software.amazon.jsii.Kernel.get(this, "expression", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.core.IRosConditionExpression.class));
    }

    /**
     * The condition statement.
     */
    public void setExpression(final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.IRosConditionExpression value) {
        software.amazon.jsii.Kernel.set(this, "expression", value);
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.core.RosCondition}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.core.RosCondition> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private com.aliyun.ros.cdk.core.RosConditionProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            this.scope = scope;
            this.id = id;
        }

        /**
         * The expression that the condition will evaluate.
         * <p>
         * Default: - None.
         * <p>
         * @return {@code this}
         * @param expression The expression that the condition will evaluate. This parameter is required.
         */
        public Builder expression(final com.aliyun.ros.cdk.core.IRosConditionExpression expression) {
            this.props().expression(expression);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.core.RosCondition}.
         */
        @Override
        public com.aliyun.ros.cdk.core.RosCondition build() {
            return new com.aliyun.ros.cdk.core.RosCondition(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null
            );
        }

        private com.aliyun.ros.cdk.core.RosConditionProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.core.RosConditionProps.Builder();
            }
            return this.props;
        }
    }
}
