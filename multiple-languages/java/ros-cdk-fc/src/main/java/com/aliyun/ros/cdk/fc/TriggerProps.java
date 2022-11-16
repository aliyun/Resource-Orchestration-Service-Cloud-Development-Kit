package com.aliyun.ros.cdk.fc;

/**
 * Properties for defining a `ALIYUN::FC::Trigger`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.71.0 (build f1f58ae)", date = "2022-11-16T03:59:10.104Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.TriggerProps")
@software.amazon.jsii.Jsii.Proxy(TriggerProps.Jsii$Proxy.class)
public interface TriggerProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property functionName: Function name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFunctionName();

    /**
     * Property serviceName: Service name.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getServiceName();

    /**
     * Property triggerConfig: Event source specific trigger configuration.
     * <p>
     * The value is different according to trigger type.
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTriggerConfig();

    /**
     * Property triggerName: Trigger name.
     * <p>
     * Example : "image_resize"
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTriggerName();

    /**
     * Property triggerType: Trigger type, e.g. oss, timer, logs. This determines how the trigger config is interpreted. Example : "oss".
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getTriggerType();

    /**
     * Property invocationRole: The role grants event source the permission to run function on behalf of user.
     * <p>
     * This is optional for some triggers.
     * Example : "acs:ram::1234567890:role/fc-test"
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInvocationRole() {
        return null;
    }

    /**
     * Property qualifier: service version or alias.
     * <p>
     * Example : "LATEST"
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getQualifier() {
        return null;
    }

    /**
     * Property sourceArn: The Aliyun Resource Name (ARN) of event source.
     * <p>
     * This is optional for some triggers.
     * Example : "acs:oss:cn-shanghai:12345:mybucket"
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getSourceArn() {
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
        java.lang.Object functionName;
        java.lang.Object serviceName;
        java.lang.Object triggerConfig;
        java.lang.Object triggerName;
        java.lang.Object triggerType;
        java.lang.Object invocationRole;
        java.lang.Object qualifier;
        java.lang.Object sourceArn;

        /**
         * Sets the value of {@link TriggerProps#getFunctionName}
         * @param functionName Property functionName: Function name. This parameter is required.
         * @return {@code this}
         */
        public Builder functionName(java.lang.String functionName) {
            this.functionName = functionName;
            return this;
        }

        /**
         * Sets the value of {@link TriggerProps#getFunctionName}
         * @param functionName Property functionName: Function name. This parameter is required.
         * @return {@code this}
         */
        public Builder functionName(com.aliyun.ros.cdk.core.IResolvable functionName) {
            this.functionName = functionName;
            return this;
        }

        /**
         * Sets the value of {@link TriggerProps#getServiceName}
         * @param serviceName Property serviceName: Service name. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceName(java.lang.String serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Sets the value of {@link TriggerProps#getServiceName}
         * @param serviceName Property serviceName: Service name. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceName(com.aliyun.ros.cdk.core.IResolvable serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Sets the value of {@link TriggerProps#getTriggerConfig}
         * @param triggerConfig Property triggerConfig: Event source specific trigger configuration. This parameter is required.
         *                      The value is different according to trigger type.
         * @return {@code this}
         */
        public Builder triggerConfig(com.aliyun.ros.cdk.core.IResolvable triggerConfig) {
            this.triggerConfig = triggerConfig;
            return this;
        }

        /**
         * Sets the value of {@link TriggerProps#getTriggerConfig}
         * @param triggerConfig Property triggerConfig: Event source specific trigger configuration. This parameter is required.
         *                      The value is different according to trigger type.
         * @return {@code this}
         */
        public Builder triggerConfig(java.util.Map<java.lang.String, ? extends java.lang.Object> triggerConfig) {
            this.triggerConfig = triggerConfig;
            return this;
        }

        /**
         * Sets the value of {@link TriggerProps#getTriggerName}
         * @param triggerName Property triggerName: Trigger name. This parameter is required.
         *                    Example : "image_resize"
         * @return {@code this}
         */
        public Builder triggerName(java.lang.String triggerName) {
            this.triggerName = triggerName;
            return this;
        }

        /**
         * Sets the value of {@link TriggerProps#getTriggerName}
         * @param triggerName Property triggerName: Trigger name. This parameter is required.
         *                    Example : "image_resize"
         * @return {@code this}
         */
        public Builder triggerName(com.aliyun.ros.cdk.core.IResolvable triggerName) {
            this.triggerName = triggerName;
            return this;
        }

        /**
         * Sets the value of {@link TriggerProps#getTriggerType}
         * @param triggerType Property triggerType: Trigger type, e.g. oss, timer, logs. This determines how the trigger config is interpreted. Example : "oss". This parameter is required.
         * @return {@code this}
         */
        public Builder triggerType(java.lang.String triggerType) {
            this.triggerType = triggerType;
            return this;
        }

        /**
         * Sets the value of {@link TriggerProps#getTriggerType}
         * @param triggerType Property triggerType: Trigger type, e.g. oss, timer, logs. This determines how the trigger config is interpreted. Example : "oss". This parameter is required.
         * @return {@code this}
         */
        public Builder triggerType(com.aliyun.ros.cdk.core.IResolvable triggerType) {
            this.triggerType = triggerType;
            return this;
        }

        /**
         * Sets the value of {@link TriggerProps#getInvocationRole}
         * @param invocationRole Property invocationRole: The role grants event source the permission to run function on behalf of user.
         *                       This is optional for some triggers.
         *                       Example : "acs:ram::1234567890:role/fc-test"
         * @return {@code this}
         */
        public Builder invocationRole(java.lang.String invocationRole) {
            this.invocationRole = invocationRole;
            return this;
        }

        /**
         * Sets the value of {@link TriggerProps#getInvocationRole}
         * @param invocationRole Property invocationRole: The role grants event source the permission to run function on behalf of user.
         *                       This is optional for some triggers.
         *                       Example : "acs:ram::1234567890:role/fc-test"
         * @return {@code this}
         */
        public Builder invocationRole(com.aliyun.ros.cdk.core.IResolvable invocationRole) {
            this.invocationRole = invocationRole;
            return this;
        }

        /**
         * Sets the value of {@link TriggerProps#getQualifier}
         * @param qualifier Property qualifier: service version or alias.
         *                  Example : "LATEST"
         * @return {@code this}
         */
        public Builder qualifier(java.lang.String qualifier) {
            this.qualifier = qualifier;
            return this;
        }

        /**
         * Sets the value of {@link TriggerProps#getQualifier}
         * @param qualifier Property qualifier: service version or alias.
         *                  Example : "LATEST"
         * @return {@code this}
         */
        public Builder qualifier(com.aliyun.ros.cdk.core.IResolvable qualifier) {
            this.qualifier = qualifier;
            return this;
        }

        /**
         * Sets the value of {@link TriggerProps#getSourceArn}
         * @param sourceArn Property sourceArn: The Aliyun Resource Name (ARN) of event source.
         *                  This is optional for some triggers.
         *                  Example : "acs:oss:cn-shanghai:12345:mybucket"
         * @return {@code this}
         */
        public Builder sourceArn(java.lang.String sourceArn) {
            this.sourceArn = sourceArn;
            return this;
        }

        /**
         * Sets the value of {@link TriggerProps#getSourceArn}
         * @param sourceArn Property sourceArn: The Aliyun Resource Name (ARN) of event source.
         *                  This is optional for some triggers.
         *                  Example : "acs:oss:cn-shanghai:12345:mybucket"
         * @return {@code this}
         */
        public Builder sourceArn(com.aliyun.ros.cdk.core.IResolvable sourceArn) {
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
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link TriggerProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements TriggerProps {
        private final java.lang.Object functionName;
        private final java.lang.Object serviceName;
        private final java.lang.Object triggerConfig;
        private final java.lang.Object triggerName;
        private final java.lang.Object triggerType;
        private final java.lang.Object invocationRole;
        private final java.lang.Object qualifier;
        private final java.lang.Object sourceArn;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.functionName = software.amazon.jsii.Kernel.get(this, "functionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceName = software.amazon.jsii.Kernel.get(this, "serviceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.triggerConfig = software.amazon.jsii.Kernel.get(this, "triggerConfig", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.triggerName = software.amazon.jsii.Kernel.get(this, "triggerName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.triggerType = software.amazon.jsii.Kernel.get(this, "triggerType", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.invocationRole = software.amazon.jsii.Kernel.get(this, "invocationRole", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.qualifier = software.amazon.jsii.Kernel.get(this, "qualifier", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.sourceArn = software.amazon.jsii.Kernel.get(this, "sourceArn", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.functionName = java.util.Objects.requireNonNull(builder.functionName, "functionName is required");
            this.serviceName = java.util.Objects.requireNonNull(builder.serviceName, "serviceName is required");
            this.triggerConfig = java.util.Objects.requireNonNull(builder.triggerConfig, "triggerConfig is required");
            this.triggerName = java.util.Objects.requireNonNull(builder.triggerName, "triggerName is required");
            this.triggerType = java.util.Objects.requireNonNull(builder.triggerType, "triggerType is required");
            this.invocationRole = builder.invocationRole;
            this.qualifier = builder.qualifier;
            this.sourceArn = builder.sourceArn;
        }

        @Override
        public final java.lang.Object getFunctionName() {
            return this.functionName;
        }

        @Override
        public final java.lang.Object getServiceName() {
            return this.serviceName;
        }

        @Override
        public final java.lang.Object getTriggerConfig() {
            return this.triggerConfig;
        }

        @Override
        public final java.lang.Object getTriggerName() {
            return this.triggerName;
        }

        @Override
        public final java.lang.Object getTriggerType() {
            return this.triggerType;
        }

        @Override
        public final java.lang.Object getInvocationRole() {
            return this.invocationRole;
        }

        @Override
        public final java.lang.Object getQualifier() {
            return this.qualifier;
        }

        @Override
        public final java.lang.Object getSourceArn() {
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
