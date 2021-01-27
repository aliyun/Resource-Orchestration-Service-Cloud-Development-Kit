package com.aliyun.ros.cdk.fc;

/**
 * Properties for defining a `ALIYUN::FC::Trigger`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.967Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.TriggerProps")
@software.amazon.jsii.Jsii.Proxy(TriggerProps.Jsii$Proxy.class)
public interface TriggerProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getFunctionName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getServiceName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTriggerConfig();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getTriggerName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getTriggerType();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getInvocationRole() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getQualifier() {
        return null;
    }

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.String getSourceArn() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link TriggerProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link TriggerProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<TriggerProps> {
        private java.lang.String functionName;
        private java.lang.String serviceName;
        private java.lang.Object triggerConfig;
        private java.lang.String triggerName;
        private java.lang.String triggerType;
        private java.lang.String invocationRole;
        private java.lang.String qualifier;
        private java.lang.String sourceArn;

        /**
         * Sets the value of {@link TriggerProps#getFunctionName}
         * @param functionName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder functionName(java.lang.String functionName) {
            this.functionName = functionName;
            return this;
        }

        /**
         * Sets the value of {@link TriggerProps#getServiceName}
         * @param serviceName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceName(java.lang.String serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Sets the value of {@link TriggerProps#getTriggerConfig}
         * @param triggerConfig the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder triggerConfig(com.aliyun.ros.cdk.core.IResolvable triggerConfig) {
            this.triggerConfig = triggerConfig;
            return this;
        }

        /**
         * Sets the value of {@link TriggerProps#getTriggerConfig}
         * @param triggerConfig the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder triggerConfig(java.util.Map<java.lang.String, ? extends java.lang.Object> triggerConfig) {
            this.triggerConfig = triggerConfig;
            return this;
        }

        /**
         * Sets the value of {@link TriggerProps#getTriggerName}
         * @param triggerName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder triggerName(java.lang.String triggerName) {
            this.triggerName = triggerName;
            return this;
        }

        /**
         * Sets the value of {@link TriggerProps#getTriggerType}
         * @param triggerType the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder triggerType(java.lang.String triggerType) {
            this.triggerType = triggerType;
            return this;
        }

        /**
         * Sets the value of {@link TriggerProps#getInvocationRole}
         * @param invocationRole the value to be set.
         * @return {@code this}
         */
        public Builder invocationRole(java.lang.String invocationRole) {
            this.invocationRole = invocationRole;
            return this;
        }

        /**
         * Sets the value of {@link TriggerProps#getQualifier}
         * @param qualifier the value to be set.
         * @return {@code this}
         */
        public Builder qualifier(java.lang.String qualifier) {
            this.qualifier = qualifier;
            return this;
        }

        /**
         * Sets the value of {@link TriggerProps#getSourceArn}
         * @param sourceArn the value to be set.
         * @return {@code this}
         */
        public Builder sourceArn(java.lang.String sourceArn) {
            this.sourceArn = sourceArn;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link TriggerProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public TriggerProps build() {
            return new Jsii$Proxy(functionName, serviceName, triggerConfig, triggerName, triggerType, invocationRole, qualifier, sourceArn);
        }
    }

    /**
     * An implementation for {@link TriggerProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TriggerProps {
        private final java.lang.String functionName;
        private final java.lang.String serviceName;
        private final java.lang.Object triggerConfig;
        private final java.lang.String triggerName;
        private final java.lang.String triggerType;
        private final java.lang.String invocationRole;
        private final java.lang.String qualifier;
        private final java.lang.String sourceArn;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.functionName = software.amazon.jsii.Kernel.get(this, "functionName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.serviceName = software.amazon.jsii.Kernel.get(this, "serviceName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.triggerConfig = software.amazon.jsii.Kernel.get(this, "triggerConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.triggerName = software.amazon.jsii.Kernel.get(this, "triggerName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.triggerType = software.amazon.jsii.Kernel.get(this, "triggerType", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.invocationRole = software.amazon.jsii.Kernel.get(this, "invocationRole", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.qualifier = software.amazon.jsii.Kernel.get(this, "qualifier", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.sourceArn = software.amazon.jsii.Kernel.get(this, "sourceArn", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String functionName, final java.lang.String serviceName, final java.lang.Object triggerConfig, final java.lang.String triggerName, final java.lang.String triggerType, final java.lang.String invocationRole, final java.lang.String qualifier, final java.lang.String sourceArn) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.functionName = java.util.Objects.requireNonNull(functionName, "functionName is required");
            this.serviceName = java.util.Objects.requireNonNull(serviceName, "serviceName is required");
            this.triggerConfig = java.util.Objects.requireNonNull(triggerConfig, "triggerConfig is required");
            this.triggerName = java.util.Objects.requireNonNull(triggerName, "triggerName is required");
            this.triggerType = java.util.Objects.requireNonNull(triggerType, "triggerType is required");
            this.invocationRole = invocationRole;
            this.qualifier = qualifier;
            this.sourceArn = sourceArn;
        }

        @Override
        public final java.lang.String getFunctionName() {
            return this.functionName;
        }

        @Override
        public final java.lang.String getServiceName() {
            return this.serviceName;
        }

        @Override
        public final java.lang.Object getTriggerConfig() {
            return this.triggerConfig;
        }

        @Override
        public final java.lang.String getTriggerName() {
            return this.triggerName;
        }

        @Override
        public final java.lang.String getTriggerType() {
            return this.triggerType;
        }

        @Override
        public final java.lang.String getInvocationRole() {
            return this.invocationRole;
        }

        @Override
        public final java.lang.String getQualifier() {
            return this.qualifier;
        }

        @Override
        public final java.lang.String getSourceArn() {
            return this.sourceArn;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("functionName", om.valueToTree(this.getFunctionName()));
            data.set("serviceName", om.valueToTree(this.getServiceName()));
            data.set("triggerConfig", om.valueToTree(this.getTriggerConfig()));
            data.set("triggerName", om.valueToTree(this.getTriggerName()));
            data.set("triggerType", om.valueToTree(this.getTriggerType()));
            if (this.getInvocationRole() != null) {
                data.set("invocationRole", om.valueToTree(this.getInvocationRole()));
            }
            if (this.getQualifier() != null) {
                data.set("qualifier", om.valueToTree(this.getQualifier()));
            }
            if (this.getSourceArn() != null) {
                data.set("sourceArn", om.valueToTree(this.getSourceArn()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc.TriggerProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            TriggerProps.Jsii$Proxy that = (TriggerProps.Jsii$Proxy) o;

            if (!functionName.equals(that.functionName)) return false;
            if (!serviceName.equals(that.serviceName)) return false;
            if (!triggerConfig.equals(that.triggerConfig)) return false;
            if (!triggerName.equals(that.triggerName)) return false;
            if (!triggerType.equals(that.triggerType)) return false;
            if (this.invocationRole != null ? !this.invocationRole.equals(that.invocationRole) : that.invocationRole != null) return false;
            if (this.qualifier != null ? !this.qualifier.equals(that.qualifier) : that.qualifier != null) return false;
            return this.sourceArn != null ? this.sourceArn.equals(that.sourceArn) : that.sourceArn == null;
        }

        @Override
        public final int hashCode() {
            int result = this.functionName.hashCode();
            result = 31 * result + (this.serviceName.hashCode());
            result = 31 * result + (this.triggerConfig.hashCode());
            result = 31 * result + (this.triggerName.hashCode());
            result = 31 * result + (this.triggerType.hashCode());
            result = 31 * result + (this.invocationRole != null ? this.invocationRole.hashCode() : 0);
            result = 31 * result + (this.qualifier != null ? this.qualifier.hashCode() : 0);
            result = 31 * result + (this.sourceArn != null ? this.sourceArn.hashCode() : 0);
            return result;
        }
    }
}
