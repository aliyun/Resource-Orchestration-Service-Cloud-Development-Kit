package com.aliyun.ros.cdk.schedulerx;

/**
 * Properties for defining a <code>RosWorkFlow</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/aliyun-schedulerx-workflow
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2026-06-09T13:46:20.793Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.schedulerx.$Module.class, fqn = "@alicloud/ros-cdk-schedulerx.RosWorkFlowProps")
@software.amazon.jsii.Jsii.Proxy(RosWorkFlowProps.Jsii$Proxy.class)
public interface RosWorkFlowProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getGroupId();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getNamespace();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTimeType();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getWorkflowName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getDescription() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getMaxConcurrency() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getNamespaceSource() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimeExpression() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getTimezone() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosWorkFlowProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosWorkFlowProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosWorkFlowProps> {
        java.lang.Object groupId;
        java.lang.Object namespace;
        java.lang.Object timeType;
        java.lang.Object workflowName;
        java.lang.Object description;
        java.lang.Object maxConcurrency;
        java.lang.Object namespaceSource;
        java.lang.Object timeExpression;
        java.lang.Object timezone;

        /**
         * Sets the value of {@link RosWorkFlowProps#getGroupId}
         * @param groupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(java.lang.String groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link RosWorkFlowProps#getGroupId}
         * @param groupId the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder groupId(com.aliyun.ros.cdk.core.IResolvable groupId) {
            this.groupId = groupId;
            return this;
        }

        /**
         * Sets the value of {@link RosWorkFlowProps#getNamespace}
         * @param namespace the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder namespace(java.lang.String namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Sets the value of {@link RosWorkFlowProps#getNamespace}
         * @param namespace the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder namespace(com.aliyun.ros.cdk.core.IResolvable namespace) {
            this.namespace = namespace;
            return this;
        }

        /**
         * Sets the value of {@link RosWorkFlowProps#getTimeType}
         * @param timeType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder timeType(java.lang.Number timeType) {
            this.timeType = timeType;
            return this;
        }

        /**
         * Sets the value of {@link RosWorkFlowProps#getTimeType}
         * @param timeType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder timeType(com.aliyun.ros.cdk.core.IResolvable timeType) {
            this.timeType = timeType;
            return this;
        }

        /**
         * Sets the value of {@link RosWorkFlowProps#getWorkflowName}
         * @param workflowName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder workflowName(java.lang.String workflowName) {
            this.workflowName = workflowName;
            return this;
        }

        /**
         * Sets the value of {@link RosWorkFlowProps#getWorkflowName}
         * @param workflowName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder workflowName(com.aliyun.ros.cdk.core.IResolvable workflowName) {
            this.workflowName = workflowName;
            return this;
        }

        /**
         * Sets the value of {@link RosWorkFlowProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(java.lang.String description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosWorkFlowProps#getDescription}
         * @param description the value to be set.
         * @return {@code this}
         */
        public Builder description(com.aliyun.ros.cdk.core.IResolvable description) {
            this.description = description;
            return this;
        }

        /**
         * Sets the value of {@link RosWorkFlowProps#getMaxConcurrency}
         * @param maxConcurrency the value to be set.
         * @return {@code this}
         */
        public Builder maxConcurrency(java.lang.Number maxConcurrency) {
            this.maxConcurrency = maxConcurrency;
            return this;
        }

        /**
         * Sets the value of {@link RosWorkFlowProps#getMaxConcurrency}
         * @param maxConcurrency the value to be set.
         * @return {@code this}
         */
        public Builder maxConcurrency(com.aliyun.ros.cdk.core.IResolvable maxConcurrency) {
            this.maxConcurrency = maxConcurrency;
            return this;
        }

        /**
         * Sets the value of {@link RosWorkFlowProps#getNamespaceSource}
         * @param namespaceSource the value to be set.
         * @return {@code this}
         */
        public Builder namespaceSource(java.lang.String namespaceSource) {
            this.namespaceSource = namespaceSource;
            return this;
        }

        /**
         * Sets the value of {@link RosWorkFlowProps#getNamespaceSource}
         * @param namespaceSource the value to be set.
         * @return {@code this}
         */
        public Builder namespaceSource(com.aliyun.ros.cdk.core.IResolvable namespaceSource) {
            this.namespaceSource = namespaceSource;
            return this;
        }

        /**
         * Sets the value of {@link RosWorkFlowProps#getTimeExpression}
         * @param timeExpression the value to be set.
         * @return {@code this}
         */
        public Builder timeExpression(java.lang.String timeExpression) {
            this.timeExpression = timeExpression;
            return this;
        }

        /**
         * Sets the value of {@link RosWorkFlowProps#getTimeExpression}
         * @param timeExpression the value to be set.
         * @return {@code this}
         */
        public Builder timeExpression(com.aliyun.ros.cdk.core.IResolvable timeExpression) {
            this.timeExpression = timeExpression;
            return this;
        }

        /**
         * Sets the value of {@link RosWorkFlowProps#getTimezone}
         * @param timezone the value to be set.
         * @return {@code this}
         */
        public Builder timezone(java.lang.String timezone) {
            this.timezone = timezone;
            return this;
        }

        /**
         * Sets the value of {@link RosWorkFlowProps#getTimezone}
         * @param timezone the value to be set.
         * @return {@code this}
         */
        public Builder timezone(com.aliyun.ros.cdk.core.IResolvable timezone) {
            this.timezone = timezone;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosWorkFlowProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosWorkFlowProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosWorkFlowProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosWorkFlowProps {
        private final java.lang.Object groupId;
        private final java.lang.Object namespace;
        private final java.lang.Object timeType;
        private final java.lang.Object workflowName;
        private final java.lang.Object description;
        private final java.lang.Object maxConcurrency;
        private final java.lang.Object namespaceSource;
        private final java.lang.Object timeExpression;
        private final java.lang.Object timezone;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.groupId = software.amazon.jsii.Kernel.get(this, "groupId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.namespace = software.amazon.jsii.Kernel.get(this, "namespace", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.timeType = software.amazon.jsii.Kernel.get(this, "timeType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.workflowName = software.amazon.jsii.Kernel.get(this, "workflowName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.description = software.amazon.jsii.Kernel.get(this, "description", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.maxConcurrency = software.amazon.jsii.Kernel.get(this, "maxConcurrency", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.namespaceSource = software.amazon.jsii.Kernel.get(this, "namespaceSource", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.timeExpression = software.amazon.jsii.Kernel.get(this, "timeExpression", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.timezone = software.amazon.jsii.Kernel.get(this, "timezone", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.groupId = java.util.Objects.requireNonNull(builder.groupId, "groupId is required");
            this.namespace = java.util.Objects.requireNonNull(builder.namespace, "namespace is required");
            this.timeType = java.util.Objects.requireNonNull(builder.timeType, "timeType is required");
            this.workflowName = java.util.Objects.requireNonNull(builder.workflowName, "workflowName is required");
            this.description = builder.description;
            this.maxConcurrency = builder.maxConcurrency;
            this.namespaceSource = builder.namespaceSource;
            this.timeExpression = builder.timeExpression;
            this.timezone = builder.timezone;
        }

        @Override
        public final java.lang.Object getGroupId() {
            return this.groupId;
        }

        @Override
        public final java.lang.Object getNamespace() {
            return this.namespace;
        }

        @Override
        public final java.lang.Object getTimeType() {
            return this.timeType;
        }

        @Override
        public final java.lang.Object getWorkflowName() {
            return this.workflowName;
        }

        @Override
        public final java.lang.Object getDescription() {
            return this.description;
        }

        @Override
        public final java.lang.Object getMaxConcurrency() {
            return this.maxConcurrency;
        }

        @Override
        public final java.lang.Object getNamespaceSource() {
            return this.namespaceSource;
        }

        @Override
        public final java.lang.Object getTimeExpression() {
            return this.timeExpression;
        }

        @Override
        public final java.lang.Object getTimezone() {
            return this.timezone;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("groupId", om.valueToTree(this.getGroupId()));
            data.set("namespace", om.valueToTree(this.getNamespace()));
            data.set("timeType", om.valueToTree(this.getTimeType()));
            data.set("workflowName", om.valueToTree(this.getWorkflowName()));
            if (this.getDescription() != null) {
                data.set("description", om.valueToTree(this.getDescription()));
            }
            if (this.getMaxConcurrency() != null) {
                data.set("maxConcurrency", om.valueToTree(this.getMaxConcurrency()));
            }
            if (this.getNamespaceSource() != null) {
                data.set("namespaceSource", om.valueToTree(this.getNamespaceSource()));
            }
            if (this.getTimeExpression() != null) {
                data.set("timeExpression", om.valueToTree(this.getTimeExpression()));
            }
            if (this.getTimezone() != null) {
                data.set("timezone", om.valueToTree(this.getTimezone()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-schedulerx.RosWorkFlowProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosWorkFlowProps.Jsii$Proxy that = (RosWorkFlowProps.Jsii$Proxy) o;

            if (!groupId.equals(that.groupId)) return false;
            if (!namespace.equals(that.namespace)) return false;
            if (!timeType.equals(that.timeType)) return false;
            if (!workflowName.equals(that.workflowName)) return false;
            if (this.description != null ? !this.description.equals(that.description) : that.description != null) return false;
            if (this.maxConcurrency != null ? !this.maxConcurrency.equals(that.maxConcurrency) : that.maxConcurrency != null) return false;
            if (this.namespaceSource != null ? !this.namespaceSource.equals(that.namespaceSource) : that.namespaceSource != null) return false;
            if (this.timeExpression != null ? !this.timeExpression.equals(that.timeExpression) : that.timeExpression != null) return false;
            return this.timezone != null ? this.timezone.equals(that.timezone) : that.timezone == null;
        }

        @Override
        public final int hashCode() {
            int result = this.groupId.hashCode();
            result = 31 * result + (this.namespace.hashCode());
            result = 31 * result + (this.timeType.hashCode());
            result = 31 * result + (this.workflowName.hashCode());
            result = 31 * result + (this.description != null ? this.description.hashCode() : 0);
            result = 31 * result + (this.maxConcurrency != null ? this.maxConcurrency.hashCode() : 0);
            result = 31 * result + (this.namespaceSource != null ? this.namespaceSource.hashCode() : 0);
            result = 31 * result + (this.timeExpression != null ? this.timeExpression.hashCode() : 0);
            result = 31 * result + (this.timezone != null ? this.timezone.hashCode() : 0);
            return result;
        }
    }
}
