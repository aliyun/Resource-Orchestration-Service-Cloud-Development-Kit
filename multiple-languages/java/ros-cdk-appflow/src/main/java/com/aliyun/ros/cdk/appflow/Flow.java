package com.aliyun.ros.cdk.appflow;

/**
 * This class encapsulates and extends the ROS resource type <code>ALIYUN::AppFlow::Flow</code>, which is used to create a flow.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:21.308Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.appflow.$Module.class, fqn = "@alicloud/ros-cdk-appflow.Flow")
public class Flow extends com.aliyun.ros.cdk.core.Resource implements com.aliyun.ros.cdk.appflow.IFlow {

    protected Flow(final software.amazon.jsii.JsiiObjectRef objRef) {
        super(objRef);
    }

    protected Flow(final software.amazon.jsii.JsiiObject.InitializationMode initializationMode) {
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
    public Flow(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.appflow.FlowProps props, final @org.jetbrains.annotations.Nullable java.lang.Boolean enableResourcePropertyConstraint) {
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
    public Flow(final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.core.Construct scope, final @org.jetbrains.annotations.NotNull java.lang.String id, final @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.appflow.FlowProps props) {
        super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
        software.amazon.jsii.JsiiEngine.getInstance().createNewObject(this, new Object[] { java.util.Objects.requireNonNull(scope, "scope is required"), java.util.Objects.requireNonNull(id, "id is required"), java.util.Objects.requireNonNull(props, "props is required") });
    }

    /**
     * Attribute FlowId: The ID of the flow.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrFlowId() {
        return software.amazon.jsii.Kernel.get(this, "attrFlowId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    /**
     * Attribute WebhookAddress: The webhook address of the flow.
     */
    @Override
    public @org.jetbrains.annotations.NotNull java.lang.Object getAttrWebhookAddress() {
        return software.amazon.jsii.Kernel.get(this, "attrWebhookAddress", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
    }

    @Override
    public @org.jetbrains.annotations.NotNull com.aliyun.ros.cdk.appflow.FlowProps getProps() {
        return software.amazon.jsii.Kernel.get(this, "props", software.amazon.jsii.NativeType.forClass(com.aliyun.ros.cdk.appflow.FlowProps.class));
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
     * A fluent builder for {@link com.aliyun.ros.cdk.appflow.Flow}.
     */
    public static final class Builder implements software.amazon.jsii.Builder<com.aliyun.ros.cdk.appflow.Flow> {
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
        private final com.aliyun.ros.cdk.appflow.FlowProps.Builder props;

        private Builder(final com.aliyun.ros.cdk.core.Construct scope, final java.lang.String id, final java.lang.Boolean enableResourcePropertyConstraint) {
            this.scope = scope;
            this.id = id;
            this.enableResourcePropertyConstraint = enableResourcePropertyConstraint;
            this.props = new com.aliyun.ros.cdk.appflow.FlowProps.Builder();
        }

        /**
         * Property flowName: The name of the flow.
         * <p>
         * @return {@code this}
         * @param flowName Property flowName: The name of the flow. This parameter is required.
         */
        public Builder flowName(final java.lang.String flowName) {
            this.props.flowName(flowName);
            return this;
        }
        /**
         * Property flowName: The name of the flow.
         * <p>
         * @return {@code this}
         * @param flowName Property flowName: The name of the flow. This parameter is required.
         */
        public Builder flowName(final com.aliyun.ros.cdk.core.IResolvable flowName) {
            this.props.flowName(flowName);
            return this;
        }

        /**
         * Property flowDesc: The description of the flow.
         * <p>
         * @return {@code this}
         * @param flowDesc Property flowDesc: The description of the flow. This parameter is required.
         */
        public Builder flowDesc(final java.lang.String flowDesc) {
            this.props.flowDesc(flowDesc);
            return this;
        }
        /**
         * Property flowDesc: The description of the flow.
         * <p>
         * @return {@code this}
         * @param flowDesc Property flowDesc: The description of the flow. This parameter is required.
         */
        public Builder flowDesc(final com.aliyun.ros.cdk.core.IResolvable flowDesc) {
            this.props.flowDesc(flowDesc);
            return this;
        }

        /**
         * Property flowId: The ID of the flow.
         * <p>
         * @return {@code this}
         * @param flowId Property flowId: The ID of the flow. This parameter is required.
         */
        public Builder flowId(final java.lang.String flowId) {
            this.props.flowId(flowId);
            return this;
        }
        /**
         * Property flowId: The ID of the flow.
         * <p>
         * @return {@code this}
         * @param flowId Property flowId: The ID of the flow. This parameter is required.
         */
        public Builder flowId(final com.aliyun.ros.cdk.core.IResolvable flowId) {
            this.props.flowId(flowId);
            return this;
        }

        /**
         * Property flowStatus: The status of the flow.
         * <p>
         * Allowed values:
         * Enable: enable flow
         * Disable: disable flow
         * <p>
         * @return {@code this}
         * @param flowStatus Property flowStatus: The status of the flow. This parameter is required.
         */
        public Builder flowStatus(final java.lang.String flowStatus) {
            this.props.flowStatus(flowStatus);
            return this;
        }
        /**
         * Property flowStatus: The status of the flow.
         * <p>
         * Allowed values:
         * Enable: enable flow
         * Disable: disable flow
         * <p>
         * @return {@code this}
         * @param flowStatus Property flowStatus: The status of the flow. This parameter is required.
         */
        public Builder flowStatus(final com.aliyun.ros.cdk.core.IResolvable flowStatus) {
            this.props.flowStatus(flowStatus);
            return this;
        }

        /**
         * Property launchFlow: Whether to launch the flow.
         * <p>
         * @return {@code this}
         * @param launchFlow Property launchFlow: Whether to launch the flow. This parameter is required.
         */
        public Builder launchFlow(final java.lang.Boolean launchFlow) {
            this.props.launchFlow(launchFlow);
            return this;
        }
        /**
         * Property launchFlow: Whether to launch the flow.
         * <p>
         * @return {@code this}
         * @param launchFlow Property launchFlow: Whether to launch the flow. This parameter is required.
         */
        public Builder launchFlow(final com.aliyun.ros.cdk.core.IResolvable launchFlow) {
            this.props.launchFlow(launchFlow);
            return this;
        }

        /**
         * Property parameters: The parameters of the flow.
         * <p>
         * @return {@code this}
         * @param parameters Property parameters: The parameters of the flow. This parameter is required.
         */
        public Builder parameters(final com.aliyun.ros.cdk.core.IResolvable parameters) {
            this.props.parameters(parameters);
            return this;
        }
        /**
         * Property parameters: The parameters of the flow.
         * <p>
         * @return {@code this}
         * @param parameters Property parameters: The parameters of the flow. This parameter is required.
         */
        public Builder parameters(final java.util.Map<java.lang.String, ? extends java.lang.Object> parameters) {
            this.props.parameters(parameters);
            return this;
        }

        /**
         * Property template: The template of the flow.
         * <p>
         * @return {@code this}
         * @param template Property template: The template of the flow. This parameter is required.
         */
        public Builder template(final com.aliyun.ros.cdk.core.IResolvable template) {
            this.props.template(template);
            return this;
        }
        /**
         * Property template: The template of the flow.
         * <p>
         * @return {@code this}
         * @param template Property template: The template of the flow. This parameter is required.
         */
        public Builder template(final java.util.Map<java.lang.String, ? extends java.lang.Object> template) {
            this.props.template(template);
            return this;
        }

        /**
         * Property templateId: The ID of the template.
         * <p>
         * @return {@code this}
         * @param templateId Property templateId: The ID of the template. This parameter is required.
         */
        public Builder templateId(final java.lang.String templateId) {
            this.props.templateId(templateId);
            return this;
        }
        /**
         * Property templateId: The ID of the template.
         * <p>
         * @return {@code this}
         * @param templateId Property templateId: The ID of the template. This parameter is required.
         */
        public Builder templateId(final com.aliyun.ros.cdk.core.IResolvable templateId) {
            this.props.templateId(templateId);
            return this;
        }

        /**
         * @return a newly built instance of {@link com.aliyun.ros.cdk.appflow.Flow}.
         */
        @Override
        public com.aliyun.ros.cdk.appflow.Flow build() {
            return new com.aliyun.ros.cdk.appflow.Flow(
                this.scope,
                this.id,
                this.props.build(),
                this.enableResourcePropertyConstraint
            );
        }
    }
}
