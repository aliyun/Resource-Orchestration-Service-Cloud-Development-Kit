package com.aliyun.ros.cdk.core;

@javax.annotation.Generated(value = "jsii-pacmak/1.70.0 (build 03c2f6f)", date = "2022-11-04T06:18:40.805Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.NestedStack")
public class NestedStack extends com.aliyun.ros.cdk.core.Stack {

    protected NestedStack(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected NestedStack(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    public NestedStack(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.Nullable com.aliyun.ros.cdk.core.NestedStackProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), props });
    }

    public NestedStack(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required") });
    }

    public static @org.jetbrains.annotations.NotNull java.lang.Boolean isNestedStack(final @org.jetbrains.annotations.NotNull java.lang.Object x) {
        return software.amazon.jsii.JsiiObject.jsiiStaticCall(com.aliyun.ros.cdk.core.NestedStack.class, "isNestedStack", software.amazon.jsii.NativeType.forClass(java.lang.Boolean.class), new Object[] { x });
    }

    public @org.jetbrains.annotations.NotNull java.lang.String getAtt(final @org.jetbrains.annotations.NotNull java.lang.String attributeName) {
        return software.amazon.jsii.Kernel.call(this, "getAtt", software.amazon.jsii.NativeType.forClass(java.lang.String.class), new Object[] { java.util.Objects.requireNonNull(attributeName, "attributeName is required") });
    }

    public void setParameter(final @org.jetbrains.annotations.NotNull java.lang.String name, final @org.jetbrains.annotations.NotNull java.lang.Object value) {
        software.amazon.jsii.Kernel.call(this, "setParameter", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(name, "name is required"), value });
    }

    /**
     * The ID of the stack.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.String getStackId() {
        return software.amazon.jsii.Kernel.get(this, "stackId", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * The concrete ROS physical stack name.
     * <p>
     * This is either the name defined explicitly in the <code>stackName</code> prop or
     * allocated based on the stack's location in the construct tree. Stacks that
     * are directly defined under the app use their construct <code>id</code> as their stack
     * name. Stacks that are defined deeper within the tree will use a hashed naming
     * scheme based on the construct path to ensure uniqueness.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.String getStackName() {
        return software.amazon.jsii.Kernel.get(this, "stackName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.core.NestedStack}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.core.NestedStack> {
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
        private com.aliyun.ros.cdk.core.NestedStackProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            this.scope = scope;
            this.id = id;
        }

        /**
         * @return {@code this}
         * @param parameters This parameter is required.
         */
        public Builder parameters(final java.util.Map<java.lang.String, ? extends java.lang.Object> parameters) {
            this.props().parameters(parameters);
            return this;
        }

        /**
         * @return {@code this}
         * @param templateBody This parameter is required.
         */
        public Builder templateBody(final java.lang.String templateBody) {
            this.props().templateBody(templateBody);
            return this;
        }

        /**
         * @return {@code this}
         * @param templateUrl This parameter is required.
         */
        public Builder templateUrl(final java.lang.String templateUrl) {
            this.props().templateUrl(templateUrl);
            return this;
        }

        /**
         * @return {@code this}
         * @param timeout This parameter is required.
         */
        public Builder timeout(final java.lang.Number timeout) {
            this.props().timeout(timeout);
            return this;
        }

        /**
         * @returns a newly built instance of {@link com.aliyun.ros.cdk.core.NestedStack}.
         */
        @Override
        public com.aliyun.ros.cdk.core.NestedStack build() {
            return new com.aliyun.ros.cdk.core.NestedStack(
                this.scope,
                this.id,
                this.props != null ? this.props.build() : null
            );
        }

        private com.aliyun.ros.cdk.core.NestedStackProps.Builder props() {
            if (this.props == null) {
                this.props = new com.aliyun.ros.cdk.core.NestedStackProps.Builder();
            }
            return this.props;
        }
    }
}
