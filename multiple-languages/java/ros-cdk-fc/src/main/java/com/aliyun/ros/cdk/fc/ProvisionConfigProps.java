package com.aliyun.ros.cdk.fc;

/**
 * Properties for defining a `ALIYUN::FC::ProvisionConfig`.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.17.1 (build 2bac5fd)", date = "2021-01-26T09:47:33.938Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.ProvisionConfigProps")
@software.amazon.jsii.Jsii.Proxy(ProvisionConfigProps.Jsii$Proxy.class)
public interface ProvisionConfigProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getFunctionName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getQualifier();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.String getServiceName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Number getTarget();

    /**
     * @return a {@link Builder} of {@link ProvisionConfigProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link ProvisionConfigProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<ProvisionConfigProps> {
        private java.lang.String functionName;
        private java.lang.String qualifier;
        private java.lang.String serviceName;
        private java.lang.Number target;

        /**
         * Sets the value of {@link ProvisionConfigProps#getFunctionName}
         * @param functionName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder functionName(java.lang.String functionName) {
            this.functionName = functionName;
            return this;
        }

        /**
         * Sets the value of {@link ProvisionConfigProps#getQualifier}
         * @param qualifier the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder qualifier(java.lang.String qualifier) {
            this.qualifier = qualifier;
            return this;
        }

        /**
         * Sets the value of {@link ProvisionConfigProps#getServiceName}
         * @param serviceName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceName(java.lang.String serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Sets the value of {@link ProvisionConfigProps#getTarget}
         * @param target the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder target(java.lang.Number target) {
            this.target = target;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link ProvisionConfigProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public ProvisionConfigProps build() {
            return new Jsii$Proxy(functionName, qualifier, serviceName, target);
        }
    }

    /**
     * An implementation for {@link ProvisionConfigProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements ProvisionConfigProps {
        private final java.lang.String functionName;
        private final java.lang.String qualifier;
        private final java.lang.String serviceName;
        private final java.lang.Number target;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.functionName = software.amazon.jsii.Kernel.get(this, "functionName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.qualifier = software.amazon.jsii.Kernel.get(this, "qualifier", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.serviceName = software.amazon.jsii.Kernel.get(this, "serviceName", software.amazon.jsii.NativeType.forClass(java.lang.String.class));
            this.target = software.amazon.jsii.Kernel.get(this, "target", software.amazon.jsii.NativeType.forClass(java.lang.Number.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final java.lang.String functionName, final java.lang.String qualifier, final java.lang.String serviceName, final java.lang.Number target) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.functionName = java.util.Objects.requireNonNull(functionName, "functionName is required");
            this.qualifier = java.util.Objects.requireNonNull(qualifier, "qualifier is required");
            this.serviceName = java.util.Objects.requireNonNull(serviceName, "serviceName is required");
            this.target = java.util.Objects.requireNonNull(target, "target is required");
        }

        @Override
        public final java.lang.String getFunctionName() {
            return this.functionName;
        }

        @Override
        public final java.lang.String getQualifier() {
            return this.qualifier;
        }

        @Override
        public final java.lang.String getServiceName() {
            return this.serviceName;
        }

        @Override
        public final java.lang.Number getTarget() {
            return this.target;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("functionName", om.valueToTree(this.getFunctionName()));
            data.set("qualifier", om.valueToTree(this.getQualifier()));
            data.set("serviceName", om.valueToTree(this.getServiceName()));
            data.set("target", om.valueToTree(this.getTarget()));

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc.ProvisionConfigProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            ProvisionConfigProps.Jsii$Proxy that = (ProvisionConfigProps.Jsii$Proxy) o;

            if (!functionName.equals(that.functionName)) return false;
            if (!qualifier.equals(that.qualifier)) return false;
            if (!serviceName.equals(that.serviceName)) return false;
            return this.target.equals(that.target);
        }

        @Override
        public final int hashCode() {
            int result = this.functionName.hashCode();
            result = 31 * result + (this.qualifier.hashCode());
            result = 31 * result + (this.serviceName.hashCode());
            result = 31 * result + (this.target.hashCode());
            return result;
        }
    }
}
