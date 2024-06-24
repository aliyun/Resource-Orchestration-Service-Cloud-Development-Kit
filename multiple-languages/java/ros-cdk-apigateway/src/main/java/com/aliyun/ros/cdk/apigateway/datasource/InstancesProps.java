package com.aliyun.ros.cdk.apigateway.datasource;

/**
 * Properties for defining a <code>Instances</code>.
 * <p>
 * See https://www.alibabacloud.com/help/ros/developer-reference/datasource-apigateway-instances
 */
@javax.annotation.Generated(value = "jsii-pacmak/1.85.0 (build 08ee592)", date = "2024-06-24T05:57:04.504Z")
@software.amazon.jsii.Jsii(module = com.aliyun.ros.cdk.apigateway.$Module.class, fqn = "@alicloud/ros-cdk-apigateway.datasource.InstancesProps")
@software.amazon.jsii.Jsii.Proxy(InstancesProps.Jsii$Proxy.class)
public interface InstancesProps extends software.amazon.jsii.JsiiSerializable {

    /**
     * Property instanceId: API Gateway Instance ID.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getInstanceId() {
        return null;
    }

    /**
     * Property language: Language Type.
     */
    default @org.jetbrains.annotations.Nullable java.lang.Object getLanguage() {
        return null;
    }

    /**
     * @return a {@link Builder} of {@link InstancesProps}
     */
    static Builder builder() {
        return new Builder();
    }
    /**
     * A builder for {@link InstancesProps}
     */
    public static final class Builder implements software.amazon.jsii.Builder<InstancesProps> {
        java.lang.Object instanceId;
        java.lang.Object language;

        /**
         * Sets the value of {@link InstancesProps#getInstanceId}
         * @param instanceId Property instanceId: API Gateway Instance ID.
         * @return {@code this}
         */
        public Builder instanceId(java.lang.String instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getInstanceId}
         * @param instanceId Property instanceId: API Gateway Instance ID.
         * @return {@code this}
         */
        public Builder instanceId(com.aliyun.ros.cdk.core.IResolvable instanceId) {
            this.instanceId = instanceId;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getLanguage}
         * @param language Property language: Language Type.
         * @return {@code this}
         */
        public Builder language(java.lang.String language) {
            this.language = language;
            return this;
        }

        /**
         * Sets the value of {@link InstancesProps#getLanguage}
         * @param language Property language: Language Type.
         * @return {@code this}
         */
        public Builder language(com.aliyun.ros.cdk.core.IResolvable language) {
            this.language = language;
            return this;
        }

        /**
         * Builds the configured instance.
         * @return a new instance of {@link InstancesProps}
         * @throws NullPointerException if any required attribute was not provided
         */
        @Override
        public InstancesProps build() {
            return new Jsii$Proxy(this);
        }
    }

    /**
     * An implementation for {@link InstancesProps}
     */
    @software.amazon.jsii.Internal
    final class Jsii$Proxy extends software.amazon.jsii.JsiiObject implements InstancesProps {
        private final java.lang.Object instanceId;
        private final java.lang.Object language;

        /**
         * Constructor that initializes the object based on values retrieved from the JsiiObject.
         * @param objRef Reference to the JSII managed object.
         */
        protected Jsii$Proxy(final software.amazon.jsii.JsiiObjectRef objRef) {
            super(objRef);
            this.instanceId = software.amazon.jsii.Kernel.get(this, "instanceId", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
            this.language = software.amazon.jsii.Kernel.get(this, "language", software.amazon.jsii.NativeType.forClass(java.lang.Object.class));
        }

        /**
         * Constructor that initializes the object based on literal property values passed by the {@link Builder}.
         */
        protected Jsii$Proxy(final Builder builder) {
            super(software.amazon.jsii.JsiiObject.InitializationMode.JSII);
            this.instanceId = builder.instanceId;
            this.language = builder.language;
        }

        @Override
        public final java.lang.Object getInstanceId() {
            return this.instanceId;
        }

        @Override
        public final java.lang.Object getLanguage() {
            return this.language;
        }

        @Override
        @software.amazon.jsii.Internal
        public com.fasterxml.jackson.databind.JsonNode $jsii$toJson() {
            final com.fasterxml.jackson.databind.ObjectMapper om = software.amazon.jsii.JsiiObjectMapper.INSTANCE;
            final com.fasterxml.jackson.databind.node.ObjectNode data = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();

            if (this.getInstanceId() != null) {
                data.set("instanceId", om.valueToTree(this.getInstanceId()));
            }
            if (this.getLanguage() != null) {
                data.set("language", om.valueToTree(this.getLanguage()));
            }

            final com.fasterxml.jackson.databind.node.ObjectNode struct = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            struct.set("fqn", om.valueToTree("@alicloud/ros-cdk-apigateway.datasource.InstancesProps"));
            struct.set("data", data);

            final com.fasterxml.jackson.databind.node.ObjectNode obj = com.fasterxml.jackson.databind.node.JsonNodeFactory.instance.objectNode();
            obj.set("$jsii.struct", struct);

            return obj;
        }

        @Override
        public final boolean equals(final Object o) {
            if (this == o) return true;
            if (o == null || getClass() != o.getClass()) return false;

            InstancesProps.Jsii$Proxy that = (InstancesProps.Jsii$Proxy) o;

            if (this.instanceId != null ? !this.instanceId.equals(that.instanceId) : that.instanceId != null) return false;
            return this.language != null ? this.language.equals(that.language) : that.language == null;
        }

        @Override
        public final int hashCode() {
            int result = this.instanceId != null ? this.instanceId.hashCode() : 0;
            result = 31 * result + (this.language != null ? this.language.hashCode() : 0);
            return result;
        }
    }
}
