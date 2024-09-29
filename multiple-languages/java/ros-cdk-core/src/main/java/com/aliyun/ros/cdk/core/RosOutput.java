package com.aliyun.ros.cdk.core;

@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-09-29T07:52:35.795Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.core.$Module.class, fqn = "@alicloud/ros-cdk-core.RosOutput")
public class RosOutput extends com.aliyun.ros.cdk.core.RosElement {

    protected RosOutput(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected RosOutput(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
        super(initializationMode);
    }

    /**
     * Creates an RosOutput value for this stack.
     * <p>
     * @param scope The parent construct. This parameter is required.
     * @param id This parameter is required.
     * @param props RosOutput properties. This parameter is required.
     */
    public RosOutput(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.RosOutputProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    public void addCondition(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.RosCondition condition) {
        software.amazon.jsii.Kernel.call(this, "addCondition", software.amazon.jsii.NativeType.VOID, new Object[] { java.util.Objects.requireNonNull(condition, "condition is required") });
    }

    /**
     * A fluent builder for {@link com.aliyun.ros.cdk.core.RosOutput}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.core.RosOutput> {
        /**
         * @return a new instance of {@link Builder}.
         * @param scope The parent construct. This parameter is required.
         * @param id This parameter is required.
         */
        public static Builder create(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            return new Builder(scope, id);
        }

        private final com.aliyun.ros.cdk.core.Construct scope;
        private final java.lang.String id;
        private final com.aliyun.ros.cdk.core.RosOutputProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id) {
            this.scope = scope;
            this.id = id;
            this.props = new com.aliyun.ros.cdk.core.RosOutputProps.Builder();
        }

        /**
         * The value of the property returned by Resource Orchestration Service.
         * <p>
         * The value of an output can include literals, parameter references, pseudo-parameters,
         * a mapping value, or intrinsic functions.
         * <p>
         * @return {@code this}
         * @param value The value of the property returned by Resource Orchestration Service. This parameter is required.
         */
        public Builder value(final java.lang.Object value) {
            this.props.value(value);
            return this;
        }

        /**
         * A condition to associate with this output value.
         * <p>
         * If the condition evaluates
         * to <code>false</code>, this output value will not be included in the stack.
         * <p>
         * Default: - No condition is associated with the output.
         * <p>
         * @return {@code this}
         * @param condition A condition to associate with this output value. This parameter is required.
         */
        public Builder condition(final com.aliyun.ros.cdk.core.RosCondition condition) {
            this.props.condition(condition);
            return this;
        }

        /**
         * A String type that describes the output value.
         * <p>
         * The description can be a maximum of 4 K in length.
         * <p>
         * Default: - No description.
         * <p>
         * @return {@code this}
         * @param description A String type that describes the output value. This parameter is required.
         */
        public Builder description(final java.lang.String description) {
            this.props.description(description);
            return this;
        }

        /**
         * The name used to export the value of this output across stacks.
         * <p>
         * To import the value from another stack, use <code>Fn.importValue(exportName)</code>.
         * <p>
         * Default: - the output is not exported
         * <p>
         * @return {@code this}
         * @param exportName The name used to export the value of this output across stacks. This parameter is required.
         */
        public Builder exportName(final java.lang.String exportName) {
            this.props.exportName(exportName);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.core.RosOutput}.
         */
        @Override
        public com.aliyun.ros.cdk.core.RosOutput build() {
            return new com.aliyun.ros.cdk.core.RosOutput(
                this.scope,
                this.id,
                this.props.build()
            );
        }
    }
}
