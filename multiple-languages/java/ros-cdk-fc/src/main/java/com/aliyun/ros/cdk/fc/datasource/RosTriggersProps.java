package com.aliyun.ros.cdk.fc.datasource;

/**
 * Properties for defining a <code>DATASOURCE::FC::Triggers</code>.
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2023-09-25T10:01:46.258Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.fc.$Module.class, fqn = "@alicloud/ros-cdk-fc.datasource.RosTriggersProps")
@software.amazon.jsii.Jsii.Proxy(RosTriggersProps.Jsii$Proxy.class)
public interface RosTriggersProps extends software.amazon.jsii.JsiiSerializable {

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getFunctionName();

    /**
     */
    @org.jetbrains.annotations.NotNull java.lang.Object getServiceName();

    /**
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getPrefix() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link RosTriggersProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link RosTriggersProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<RosTriggersProps> {
        java.lang.Object functionName;
        java.lang.Object serviceName;
        java.lang.Object prefix;

        /**
         * Sets the value of {@link RosTriggersProps#getFunctionName}
         * @param functionName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder functionName(java.lang.String functionName) {
            this.functionName = functionName;
            return this;
        }

        /**
         * Sets the value of {@link RosTriggersProps#getFunctionName}
         * @param functionName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder functionName(com.aliyun.ros.cdk.core.IResolvable functionName) {
            this.functionName = functionName;
            return this;
        }

        /**
         * Sets the value of {@link RosTriggersProps#getServiceName}
         * @param serviceName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceName(java.lang.String serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Sets the value of {@link RosTriggersProps#getServiceName}
         * @param serviceName the value to be set. This parameter is required.
         * @return {@code this}
         */
        public Builder serviceName(com.aliyun.ros.cdk.core.IResolvable serviceName) {
            this.serviceName = serviceName;
            return this;
        }

        /**
         * Sets the value of {@link RosTriggersProps#getPrefix}
         * @param prefix the value to be set.
         * @return {@code this}
         */
        public Builder prefix(java.lang.String prefix) {
            this.prefix = prefix;
            return this;
        }

        /**
         * Sets the value of {@link RosTriggersProps#getPrefix}
         * @param prefix the value to be set.
         * @return {@code this}
         */
        public Builder prefix(com.aliyun.ros.cdk.core.IResolvable prefix) {
            this.prefix = prefix;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link RosTriggersProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public RosTriggersProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link RosTriggersProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements RosTriggersProps {
        private final java.lang.Object functionName;
        private final java.lang.Object serviceName;
        private final java.lang.Object prefix;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.functionName = software.amazon.jsii.Kernel.get(this, "functionName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.serviceName = software.amazon.jsii.Kernel.get(this, "serviceName", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.prefix = software.amazon.jsii.Kernel.get(this, "prefix", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.functionName = java.util.Objects.requireNonNull(builder.functionName, "functionName is required");
            this.serviceName = java.util.Objects.requireNonNull(builder.serviceName, "serviceName is required");
            this.prefix = builder.prefix;
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
        public final java.lang.Object getPrefix() {
            return this.prefix;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            data.set("functionName", om.valueToTree(this.getFunctionName()));
            data.set("serviceName", om.valueToTree(this.getServiceName()));
            if (this.getPrefix() != null) {
                data.set("prefix", om.valueToTree(this.getPrefix()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-fc.datasource.RosTriggersProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            RosTriggersProps.Jsii$Proxy that = (RosTriggersProps.Jsii$Proxy) o;

            if (!functionName.equals(that.functionName)) return false;
            if (!serviceName.equals(that.serviceName)) return false;
            return this.prefix != null ? this.prefix.equals(that.prefix) : that.prefix == null;
        }

        @Override
        public final int hashCode() {
            int result = this.functionName.hashCode();
            result = 31 * result + (this.serviceName.hashCode());
            result = 31 * result + (this.prefix != null ? this.prefix.hashCode() : 0);
            return result;
        }
    }
}
