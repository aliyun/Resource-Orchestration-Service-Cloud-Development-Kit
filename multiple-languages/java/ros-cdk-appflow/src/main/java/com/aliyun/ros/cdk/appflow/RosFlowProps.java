package com.aliyun.ros.cdk.appflow;

/**
 * Properties for defining a <code>RosFlow</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-appflow-flow
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2025-09-28T10:11:21.348Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.appflow.$Module.class, fqn = "@alicloud/ros-cdk-appflow.RosFlowProps")
@software.amazon.jsii.Jsii.Proxy(RosFlowProps.Jsii$Proxy.class)
public interface RosFlowProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFlowName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFlowDesc() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFlowId() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getFlowStatus() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLaunchFlow() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getParameters() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTemplate() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTemplateId() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosFlowProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosFlowProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosFlowProps> {
        java.lang.Object flowName;
        java.lang.Object flowDesc;
        java.lang.Object flowId;
        java.lang.Object flowStatus;
        java.lang.Object launchFlow;
        java.lang.Object parameters;
        java.lang.Object template;
        java.lang.Object templateId;

        /**
         * Sets the value of {@link RosFlowProps#getFlowName}
         * @param flowName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder flowName(java.lang.String flowName) {
            this.flowName = flowName;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowProps#getFlowName}
         * @param flowName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder flowName(com.aliyun.ros.cdk.core.IResolvable flowName) {
            this.flowName = flowName;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowProps#getFlowDesc}
         * @param flowDesc the value to be set.
         * @return {@code this}
         */
        public Builder flowDesc(java.lang.String flowDesc) {
            this.flowDesc = flowDesc;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowProps#getFlowDesc}
         * @param flowDesc the value to be set.
         * @return {@code this}
         */
        public Builder flowDesc(com.aliyun.ros.cdk.core.IResolvable flowDesc) {
            this.flowDesc = flowDesc;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowProps#getFlowId}
         * @param flowId the value to be set.
         * @return {@code this}
         */
        public Builder flowId(java.lang.String flowId) {
            this.flowId = flowId;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowProps#getFlowId}
         * @param flowId the value to be set.
         * @return {@code this}
         */
        public Builder flowId(com.aliyun.ros.cdk.core.IResolvable flowId) {
            this.flowId = flowId;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowProps#getFlowStatus}
         * @param flowStatus the value to be set.
         * @return {@code this}
         */
        public Builder flowStatus(java.lang.String flowStatus) {
            this.flowStatus = flowStatus;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowProps#getFlowStatus}
         * @param flowStatus the value to be set.
         * @return {@code this}
         */
        public Builder flowStatus(com.aliyun.ros.cdk.core.IResolvable flowStatus) {
            this.flowStatus = flowStatus;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowProps#getLaunchFlow}
         * @param launchFlow the value to be set.
         * @return {@code this}
         */
        public Builder launchFlow(java.lang.Boolean launchFlow) {
            this.launchFlow = launchFlow;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowProps#getLaunchFlow}
         * @param launchFlow the value to be set.
         * @return {@code this}
         */
        public Builder launchFlow(com.aliyun.ros.cdk.core.IResolvable launchFlow) {
            this.launchFlow = launchFlow;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowProps#getParameters}
         * @param parameters the value to be set.
         * @return {@code this}
         */
        public Builder parameters(com.aliyun.ros.cdk.core.IResolvable parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowProps#getParameters}
         * @param parameters the value to be set.
         * @return {@code this}
         */
        public Builder parameters(java.util.Map<java.lang.String, ? extends java.lang.Object> parameters) {
            this.parameters = parameters;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowProps#getTemplate}
         * @param template the value to be set.
         * @return {@code this}
         */
        public Builder template(com.aliyun.ros.cdk.core.IResolvable template) {
            this.template = template;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowProps#getTemplate}
         * @param template the value to be set.
         * @return {@code this}
         */
        public Builder template(java.util.Map<java.lang.String, ? extends java.lang.Object> template) {
            this.template = template;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowProps#getTemplateId}
         * @param templateId the value to be set.
         * @return {@code this}
         */
        public Builder templateId(java.lang.String templateId) {
            this.templateId = templateId;
            return this;
        }

        /**
         * Sets the value of {@link RosFlowProps#getTemplateId}
         * @param templateId the value to be set.
         * @return {@code this}
         */
        public Builder templateId(com.aliyun.ros.cdk.core.IResolvable templateId) {
            this.templateId = templateId;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosFlowProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosFlowProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosFlowProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosFlowProps {
        private final java.lang.Object flowName;
        private final java.lang.Object flowDesc;
        private final java.lang.Object flowId;
        private final java.lang.Object flowStatus;
        private final java.lang.Object launchFlow;
        private final java.lang.Object parameters;
        private final java.lang.Object template;
        private final java.lang.Object templateId;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.flowName = software.amazon.jsii.Kernel.get(this, "flowName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.flowDesc = software.amazon.jsii.Kernel.get(this, "flowDesc", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.flowId = software.amazon.jsii.Kernel.get(this, "flowId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.flowStatus = software.amazon.jsii.Kernel.get(this, "flowStatus", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.launchFlow = software.amazon.jsii.Kernel.get(this, "launchFlow", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.parameters = software.amazon.jsii.Kernel.get(this, "parameters", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.template = software.amazon.jsii.Kernel.get(this, "template", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.templateId = software.amazon.jsii.Kernel.get(this, "templateId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.flowName = java.util.Objects.requireNonNull(builder.flowName, "flowName is required");
            this.flowDesc = builder.flowDesc;
            this.flowId = builder.flowId;
            this.flowStatus = builder.flowStatus;
            this.launchFlow = builder.launchFlow;
            this.parameters = builder.parameters;
            this.template = builder.template;
            this.templateId = builder.templateId;
        }

        @Override
        public final java.lang.Object getFlowName() {
            return this.flowName;
        }

        @Override
        public final java.lang.Object getFlowDesc() {
            return this.flowDesc;
        }

        @Override
        public final java.lang.Object getFlowId() {
            return this.flowId;
        }

        @Override
        public final java.lang.Object getFlowStatus() {
            return this.flowStatus;
        }

        @Override
        public final java.lang.Object getLaunchFlow() {
            return this.launchFlow;
        }

        @Override
        public final java.lang.Object getParameters() {
            return this.parameters;
        }

        @Override
        public final java.lang.Object getTemplate() {
            return this.template;
        }

        @Override
        public final java.lang.Object getTemplateId() {
            return this.templateId;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("flowName", om.valueToTree(this.getFlowName()));
            if (this.getFlowDesc() != null) {
                data.set("flowDesc", om.valueToTree(this.getFlowDesc()));
            }
            if (this.getFlowId() != null) {
                data.set("flowId", om.valueToTree(this.getFlowId()));
            }
            if (this.getFlowStatus() != null) {
                data.set("flowStatus", om.valueToTree(this.getFlowStatus()));
            }
            if (this.getLaunchFlow() != null) {
                data.set("launchFlow", om.valueToTree(this.getLaunchFlow()));
            }
            if (this.getParameters() != null) {
                data.set("parameters", om.valueToTree(this.getParameters()));
            }
            if (this.getTemplate() != null) {
                data.set("template", om.valueToTree(this.getTemplate()));
            }
            if (this.getTemplateId() != null) {
                data.set("templateId", om.valueToTree(this.getTemplateId()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-appflow.RosFlowProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosFlowProps.Jsii$Proxy that = (RosFlowProps.Jsii$Proxy) o;

            if (!flowName.equals(that.flowName)) return false;
            if (this.flowDesc != null ? !this.flowDesc.equals(that.flowDesc) : that.flowDesc != null) return false;
            if (this.flowId != null ? !this.flowId.equals(that.flowId) : that.flowId != null) return false;
            if (this.flowStatus != null ? !this.flowStatus.equals(that.flowStatus) : that.flowStatus != null) return false;
            if (this.launchFlow != null ? !this.launchFlow.equals(that.launchFlow) : that.launchFlow != null) return false;
            if (this.parameters != null ? !this.parameters.equals(that.parameters) : that.parameters != null) return false;
            if (this.template != null ? !this.template.equals(that.template) : that.template != null) return false;
            return this.templateId != null ? this.templateId.equals(that.templateId) : that.templateId == null;
        }

        @Override
        public final int hashCode() {
            int result = this.flowName.hashCode();
            result = 31 * result + (this.flowDesc != null ? this.flowDesc.hashCode() : 0);
            result = 31 * result + (this.flowId != null ? this.flowId.hashCode() : 0);
            result = 31 * result + (this.flowStatus != null ? this.flowStatus.hashCode() : 0);
            result = 31 * result + (this.launchFlow != null ? this.launchFlow.hashCode() : 0);
            result = 31 * result + (this.parameters != null ? this.parameters.hashCode() : 0);
            result = 31 * result + (this.template != null ? this.template.hashCode() : 0);
            result = 31 * result + (this.templateId != null ? this.templateId.hashCode() : 0);
            return result;
        }
    }
}
